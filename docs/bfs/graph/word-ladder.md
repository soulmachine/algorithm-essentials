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
defaultValue="cpp"
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

                    if (stateIsValid.apply(newState)) {
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
class Solution {
 public:
  int ladderLength(const string &start, const string &end,
                   const vector<string> &wordList) {
    queue<pair<string, int>> q;
    unordered_set<string> visited;
    unordered_set<string> dict(wordList.begin(), wordList.end());

    auto state_is_valid = [&](const string &s) {
      return dict.find(s) != dict.end();
    };
    auto state_is_target = [&](const string &s) { return s == end; };
    auto state_extend = [&](const string &s) {
      vector<string> result;

      for (size_t i = 0; i < s.size(); ++i) {
        string new_state(s);
        for (char c = 'a'; c <= 'z'; c++) {
          if (c == new_state[i]) continue;

          swap(c, new_state[i]);
          if (state_is_valid(new_state) &&
              visited.find(new_state) == visited.end()) {
            result.push_back(new_state);
          }
          swap(c, new_state[i]);  // restore
        }
      }

      return result;
    };

    visited.insert(start); // mark as visited before enqueue
    q.push(pair<string, int>{start, 0});
    while (!q.empty()) {
      // Do NOT use reference here, because pop() will delete
      // the element, then the reference will become dangled
      const pair<string, int> state = q.front();
      q.pop();

      if (state_is_target(state.first)) {
        return state.second + 1;
      }

      const vector<string> &new_states = state_extend(state.first);
      for (const string &new_state : new_states) {
        if (visited.find(new_state) == visited.end()) {
          visited.insert(new_state);  // mark as visited before enqueue
          q.push(pair<string, int>{new_state, state.second + 1});
        }
      }
    }
    return 0;
  }
};
```

</TabItem>
</Tabs>

### 相关题目

- [Word Ladder II](word-ladder-ii.md)
