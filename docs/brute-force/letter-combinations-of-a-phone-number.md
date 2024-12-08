---
title: Letter Combinations of a Phone Number
---

### 描述

Given a digit string, return all possible letter combinations that the number could represent.

A mapping of digit to letters (just like on the telephone buttons) is given below.

![Phone Keyboard](/img/phone-keyboard.png)

**Input:**Digit string `"23"`

**Output:** `["ad", "ae", "af", "bd", "be", "bf", "cd", "ce", "cf"]`.

**Note:**
Although the above answer is in lexicographical order, your answer could be in any order you want.

### 分析

无

### 递归

import Tabs from "@theme/Tabs";
import TabItem from "@theme/TabItem";

<Tabs
defaultValue="python"
values={[
{ label: 'Python', value: 'python', },

{ label: 'Java', value: 'java', },
{ label: 'C++', value: 'cpp', },
]
}>
<TabItem value="java">

```java
// Letter Combinations of a Phone Number
// 时间复杂度O(3^n)，空间复杂度O(n)
public class Solution {
    private static final String[] keyboard =
            new String[]{ " ", "", "abc", "def", // '0','1','2',...
            "ghi", "jkl", "mno", "pqrs", "tuv", "wxyz" };

    public List<String> letterCombinations(String digits) {
        List<String> result = new ArrayList<>();
        if (digits.isEmpty()) return result;
        dfs(digits, 0, "", result);
        return result;
    }

    private static void dfs(String digits, int cur, String path,
                            List<String> result) {
        if (cur == digits.length()) {
            result.add(path);
            return;
        }
        final String str = keyboard[digits.charAt(cur) - '0'];

        for (char c : keyboard[digits.charAt(cur) - '0'].toCharArray()) {
            dfs(digits, cur + 1, path + c, result);
        }
    }
}
```

</TabItem>
<TabItem value="cpp">

```cpp
// Letter Combinations of a Phone Number
// 时间复杂度O(3^n)，空间复杂度O(n)
class Solution {
public:
    const vector<string> keyboard { " ", "", "abc", "def", // '0','1','2',...
            "ghi", "jkl", "mno", "pqrs", "tuv", "wxyz" };

    vector<string> letterCombinations (const string &digits) {
        vector<string> result;
        if (digits.empty()) return result;
        dfs(digits, 0, "", result);
        return result;
    }

    void dfs(const string &digits, size_t cur, string path,
            vector<string> &result) {
        if (cur == digits.size()) {
            result.push_back(path);
            return;
        }
        for (auto c : keyboard[digits[cur] - '0']) {
            dfs(digits, cur + 1, path + c, result);
        }
    }
};
```

</TabItem>

<TabItem value="python">

```python
# Letter Combinations of a Phone Number
# 时间复杂度O(3^n)，空间复杂度O(n)
class Solution:
    keyboard = [" ", "", "abc", "def",  # '0','1','2',...
               "ghi", "jkl", "mno", "pqrs", "tuv", "wxyz"]

    def letterCombinations(self, digits: str) -> List[str]:
        result = []
        if not digits:
            return result
        self.dfs(digits, 0, "", result)
        return result

    def dfs(self, digits: str, cur: int, path: str, result: List[str]) -> None:
        if cur == len(digits):
            result.append(path)
            return

        for c in self.keyboard[int(digits[cur])]:
            self.dfs(digits, cur + 1, path + c, result)
```

</TabItem>
</Tabs>

### 迭代

<Tabs
defaultValue="java"
values={[
{ label: 'Java', value: 'java', },
{ label: 'C++', value: 'cpp', },
]
}>
<TabItem value="java">

```java
// Letter Combinations of a Phone Number
// 时间复杂度O(3^n)，空间复杂度O(1)
public class Solution {
    private static final String[] keyboard =
            new String[]{ " ", "", "abc", "def", // '0','1','2',...
                    "ghi", "jkl", "mno", "pqrs", "tuv", "wxyz" };

    public List<String> letterCombinations(String digits) {
        if (digits.isEmpty()) return new ArrayList<>();
        List<String> result = new ArrayList<>();
        result.add("");
        for (char d : digits.toCharArray()) {
            final int n = result.size();
            final int m = keyboard[d - '0'].length();

            // resize to n * m
            for (int i = 1; i < m; ++i) {
                for (int j = 0; j < n; ++j) {
                    result.add(result.get(j));
                }
            }

            for (int i = 0; i < result.size(); ++i) {
                result.set(i, result.get(i) + keyboard[d - '0'].charAt(i/n));
            }
        }
        return result;
    }
}
```

</TabItem>
<TabItem value="cpp">

```cpp
// Letter Combinations of a Phone Number
// 时间复杂度O(3^n)，空间复杂度O(1)
class Solution {
public:
    const vector<string> keyboard { " ", "", "abc", "def", // '0','1','2',...
            "ghi", "jkl", "mno", "pqrs", "tuv", "wxyz" };

    vector<string> letterCombinations (const string &digits) {
        if (digits.empty()) return vector<string>();
        vector<string> result(1, "");
        for (auto d : digits) {
            const size_t n = result.size();
            const size_t m = keyboard[d - '0'].size();

            // resize to n * m
            for (size_t i = 1; i < m; ++i) {
                for (size_t j = 0; j < n; ++j) {
                    result.push_back(result[j]);
                }
            }

            for (size_t i = 0; i < result.size(); ++i) {
                result[i] = result[i] + keyboard[d - '0'][i/n];
            }
        }
        return result;
    }
};
```

</TabItem>

<TabItem value="python">

```python
# Letter Combinations of a Phone Number
# 时间复杂度O(3^n)，空间复杂度O(1)
class Solution:
    keyboard = [" ", "", "abc", "def", # '0','1','2',...
                "ghi", "jkl", "mno", "pqrs", "tuv", "wxyz"]

    def letterCombinations(self, digits: str) -> list[str]:
        if not digits:
            return []
        result = [""]
        for d in digits:
            n = len(result)
            m = len(self.keyboard[int(d)])

            # resize to n * m
            for i in range(1, m):
                for j in range(n):
                    result.append(result[j])

            for i in range(len(result)):
                result[i] = result[i] + self.keyboard[int(d)][i//n]

        return result
```

</TabItem>
</Tabs>
