---
title: Valid Parentheses
---

### 描述

Given a string containing just the characters `'('`, `')'`, `'{'`, `'}'`, `'['` and `']'`, determine if the input string is valid.

The brackets must close in the correct order, `"()"` and `"()[]{}"` are all valid but `"(]"` and `"([)]"` are not.

### 分析

无

### 代码

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
// Valid Parentheses
// 时间复杂度O(n)，空间复杂度O(n)
public class Solution {
    public boolean isValid(String s) {
        final String left = "([{";
        final String right = ")]}";
        Stack<Character> stk = new Stack<>();

        for (int i = 0; i < s.length(); ++i) {
            final char c = s.charAt(i);
            if (left.indexOf(c) != -1) {
                stk.push (c);
            } else {
                if (!stk.isEmpty() &&
                        stk.peek() == left.charAt(right.indexOf(c)))
                    stk.pop ();
                else
                    return false;
            }
        }
        return stk.empty();
    }
}
```

</TabItem>
<TabItem value="cpp">

```cpp
// Valid Parentheses
// 时间复杂度O(n)，空间复杂度O(n)
class Solution {
public:
    bool isValid (string const& s) {
        string left = "([{";
        string right = ")]}";
        stack<char> stk;

        for (auto c : s) {
            if (left.find(c) != string::npos) {
                stk.push (c);
            } else {
                if (stk.empty () || stk.top () != left[right.find (c)])
                    return false;
                else
                    stk.pop ();
            }
        }
        return stk.empty();
    }
};
```

</TabItem>

<TabItem value="python">

```python
# Valid Parentheses
# Time complexity O(n), Space complexity O(n)
class Solution:
    def isValid(self, s: str) -> bool:
        left = "([{"
        right = ")]}"
        stk = []

        for c in s:
            if c in left:
                stk.append(c)
            else:
                if stk and stk[-1] == left[right.index(c)]:
                    stk.pop()
                else:
                    return False
        return len(stk) == 0
```

</TabItem>
</Tabs>

### 相关题目

- [Generate Parentheses](../../dfs/generate-parentheses.md)
- [Longest Valid Parentheses](longest-valid-parentheses.md)
