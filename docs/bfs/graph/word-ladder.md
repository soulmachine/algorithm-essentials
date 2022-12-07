---
title: Word Ladder
---

### 描述

Given two words (start and end), and a dictionary, find the length of shortest transformation sequence from start to end, such that:

- Only one letter can be changed at a time
- Each intermediate word must exist in the dictionary

For example, Given:

```python
start = "hit"
end = "cog"
dict = ["hot","dot","dog","lot","log"]
```

As one shortest transformation is `"hit" -> "hot" -> "dot" -> "dog" -> "cog"`, return its length `5`.

Note:

- Return 0 if there is no such transformation sequence.
- All words have the same length.
- All words contain only lowercase alphabetic characters.

### 分析

求最短路径，用广搜。

### 单队列

import Tabs from "@theme/Tabs";
import TabItem from "@theme/TabItem";

<Tabs
defaultValue="java"
values={[
{ label: 'Java', value: 'java', },
{ label: 'C++', value: 'cpp', },
]
}>
<TabItem value="java">

```java
// Word Ladder
// 时间复杂度O(n*m)，空间复杂度O(n)
public class Solution {
    public int ladderLength(String beginWord, String endWord, List<String> wordList) {
        Queue<State> q = new LinkedList<>();
        Set<State> visited = new HashSet<>();
        Set<String> wordDict = new HashSet<>(wordList);

        final Function<State, Boolean> stateIsValid = (State s) ->
                wordDict.contains(s.word);
        final Function<State, Boolean> stateIsTarget = (State s) ->
                s.word.equals(endWord);

        final Function<State, List<State> > stateExtend = (State s) -> {
            List<State> result = new ArrayList<>();

            char[] array = s.word.toCharArray();
            for (int i = 0; i < array.length; ++i) {
                final char old = array[i];
                for (char c = 'a'; c <= 'z'; c++) {
                    // 防止同字母替换
                    if (c == array[i]) continue;

                    array[i] = c;
                    State newState = new State(new String(array), s.level+1);

                    if (stateIsValid.apply(newState) && !visited.contains(newState)) {
                        result.add(newState);
                    }
                    array[i] = old; // 恢复该单词
                }
            }

            return result;
        };

        State startState = new State(beginWord, 0);
        visited.add(startState);
        q.offer(startState);

        while (!q.isEmpty()) {
            State state = q.poll();

            if (stateIsTarget.apply(state)) {
                return state.level + 1;
            }


            List<State> newStates = stateExtend.apply(state);
            for (State newState : newStates) {
                visited.add(newState);
                q.offer(newState);
            }
        }
        return 0;
    }

    static class State {
        String word;
        int level;

        public State(String word, int level) {
            this.word = word;
            this.level = level;
        }

        @Override
        public int hashCode() {
            return word.hashCode();
        }

        @Override
        public boolean equals(Object other) {
            if (this == other) return true;
            if (this.hashCode() != other.hashCode()) return false;
            if (!(other instanceof State)) return false;

            return this.word.equals(((State) other).word);
        }
    }
}
```

</TabItem>
<TabItem value="cpp">

```cpp
// Word Ladder
// 时间复杂度O(n*m)，空间复杂度O(n)
struct state_t {
    string word;
    int level;

    state_t(const string& word, int level) {
        this->word = word;
        this->level = level;
    }

    bool operator==(const state_t &other) const {
        return this->word == other.word;
    }
};

namespace std {
    template<> struct hash<state_t> {
    public:
        size_t operator()(const state_t& s) const {
            return str_hash(s.word);
        }
    private:
        std::hash<std::string> str_hash;
    };
}


class Solution {
public:
    int ladderLength(const string& start, const string &end,
            const vector<string> &wordList) {
        queue<state_t> q;
        unordered_set<state_t> visited;
        unordered_set<string> dict(wordList.begin(), wordList.end());

        auto state_is_valid = [&](const state_t& s) {
            return dict.find(s.word) != dict.end();
        };
        auto state_is_target = [&](const state_t &s) {return s.word == end; };
        auto state_extend = [&](const state_t &s) {
            vector<state_t> result;

            for (size_t i = 0; i < s.word.size(); ++i) {
                state_t new_state(s.word, s.level + 1);
                for (char c = 'a'; c <= 'z'; c++) {
                    // 防止同字母替换
                    if (c == new_state.word[i]) continue;

                    swap(c, new_state.word[i]);

                    if (state_is_valid(new_state) &&
                        visited.find(new_state) == visited.end()) {
                        result.push_back(new_state);
                    }
                    swap(c, new_state.word[i]); // 恢复该单词
                }
            }

            return result;
        };

        state_t start_state(start, 0);
        visited.insert(start_state);
        q.push(start_state);
        while (!q.empty()) {
            // 千万不能用 const auto&，pop() 会删除元素，
            // 引用就变成了悬空引用
            const auto state = q.front();
            q.pop();

            if (state_is_target(state)) {
                return state.level + 1;
            }

            const auto& new_states = state_extend(state);
            for (const auto& new_state : new_states) {
                visited.insert(new_state);
                q.push(new_state);
            }
        }
        return 0;
    }
};
```

</TabItem>
</Tabs>

### 双队列

<Tabs
defaultValue="java"
values={[
{ label: 'Java', value: 'java', },
{ label: 'C++', value: 'cpp', },
]
}>
<TabItem value="java">

```java
// Word Ladder
// 时间复杂度O(n)，空间复杂度O(n)
public class Solution {
    public int ladderLength(String beginWord, String endWord, Set<String> wordList) {
        Queue<String> current = new LinkedList<>(); // 当前层
        Queue<String> next = new LinkedList<>();    // 下一层
        HashSet<String> visited = new HashSet<>();  // 判重

        int level = -1;  // 层次

        final Function<String, Boolean> stateIsValid = (String s) ->
                wordList.contains(s) || s.equals(endWord);
        final Function<String, Boolean> stateIsTarget = (String s) ->
                s.equals(endWord);

        final Function<String, HashSet<String> > stateExtend = (String s) -> {
            HashSet<String> result = new HashSet<>();

            char[] array = s.toCharArray();
            for (int i = 0; i < array.length; ++i) {
                final char old = array[i];
                for (char c = 'a'; c <= 'z'; c++) {
                    // 防止同字母替换
                    if (c == array[i]) continue;

                    array[i] = c;
                    String newState = new String(array);

                    if (stateIsValid.apply(newState) &&
                            !visited.contains(newState)) {
                        result.add(newState);
                    }
                    array[i] = old; // 恢复该单词
                }
            }

            return result;
        };

        current.offer(beginWord);
        visited.add(beginWord);
        while (!current.isEmpty()) {
            ++level;
            while (!current.isEmpty()) {
                // 千万不能用 const auto&，pop() 会删除元素，
                // 引用就变成了悬空引用
                String state = current.poll();

                if (stateIsTarget.apply(state)) {
                    return level + 1;
                }

                HashSet<String> newStates = stateExtend.apply(state);
                for (String newState : newStates) {
                    next.offer(newState);
                    visited.add(newState);
                }
            }
            // swap
            Queue<String> tmp = current;
            current = next;
            next = tmp;
        }
        return 0;
    }
}
```

</TabItem>
<TabItem value="cpp">

```cpp
// Word Ladder
// 时间复杂度O(n)，空间复杂度O(n)
class Solution {
public:
    int ladderLength(const string& start, const string &end,
            const unordered_set<string> &dict) {
        queue<string> current, next;    // 当前层，下一层
        unordered_set<string> visited;  // 判重

        int level = -1;  // 层次

        auto state_is_valid = [&](const string& s) {
            return dict.find(s) != dict.end() || s == end;
        };
        auto state_is_target = [&](const string &s) {return s == end;};
        auto state_extend = [&](const string &s) {
            unordered_set<string> result;

            for (size_t i = 0; i < s.size(); ++i) {
                string new_word(s);
                for (char c = 'a'; c <= 'z'; c++) {
                    // 防止同字母替换
                    if (c == new_word[i]) continue;

                    swap(c, new_word[i]);

                    if (state_is_valid(new_word) &&
                        visited.find(new_word) == visited.end()) {
                        result.insert(new_word);
                    }
                    swap(c, new_word[i]); // 恢复该单词
                }
            }

            return result;
        };

        current.push(start);
        visited.insert(start);
        while (!current.empty()) {
            ++level;
            while (!current.empty()) {
                // 千万不能用 const auto&，pop() 会删除元素，
                // 引用就变成了悬空引用
                const auto state = current.front();
                current.pop();

                if (state_is_target(state)) {
                    return level + 1;
                }

                const auto& new_states = state_extend(state);
                for (const auto& new_state : new_states) {
                    next.push(new_state);
                    visited.insert(new_state);
                }
            }
            swap(next, current);
        }
        return 0;
    }
};
```

</TabItem>
</Tabs>

### 相关题目

- [Word Ladder II](word-ladder-ii.md)
