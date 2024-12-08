---
title: Decode String
---

### 描述

Given an encoded string, return its decoded string.

The encoding rule is: `k[encoded_string]`, where the _encoded_string_ inside the square brackets is being repeated exactly `k` times. Note that `k` is guaranteed to be a positive integer.

You may assume that the input string is always valid; No extra white spaces, square brackets are well-formed, etc.

Furthermore, you may assume that the original data does not contain any digits and that digits are only for those repeat numbers, k. For example, there won't be input like `3a` or `2[4]`.

**Example 1**:

> **Input**: s = "3[a]2[bc]"  
> **Output**: "aaabcbc"

**Example 2**:

> **Input**: s = "3[a2[c]]"  
> **Output**: "accaccacc"

**Example 3**:

> Input: s = "2[abc]3[cd]ef"  
> Output: "abcabccdcdcdef"

**Example 4**:

> **Input**: s = "abc3[cd]xyz"  
> **Output**: "abccdcdcdxyz"

### 分析

这题的麻烦之处在于如何处理嵌套结构，例如 `k[string k[string]]`，需要用栈或者递归。

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
// Decode String
// DFS
// Time Complexity:O(maxK*n), Space Complexity: O(n)
class Solution {
    private int i = 0;

    public String decodeString(String s) {
        StringBuilder result = new StringBuilder();

        while (i < s.length() && s.charAt(i) != ']') {
            if (!Character.isDigit(s.charAt(i))) {
                result.append(s.charAt(i++));
            } else {
                // parse the number
                int n = 0;
                while (i < s.length() && Character.isDigit(s.charAt(i)))
                    n = n * 10 + s.charAt(i++) - '0';

                i++; // ignore the opening bracket '['
                String decodedString = decodeString(s);
                i++; // ignore the closing bracket ']'

                // repeat n times
                while (n-- > 0) result.append(decodedString);
            }
        }
        return result.toString();
    }
}
```

</TabItem>
<TabItem value="cpp">

```cpp
// TODO
```

</TabItem>

<TabItem value="python">

```python
# Decode String
# DFS
# Time Complexity:O(maxK*n), Space Complexity: O(n)
class Solution:
    def __init__(self):
        self.i = 0

    def decodeString(self, s: str) -> str:
        result = []

        while self.i < len(s) and s[self.i] != ']':
            if not s[self.i].isdigit():
                result.append(s[self.i])
                self.i += 1
            else:
                # parse the number
                n = 0
                while self.i < len(s) and s[self.i].isdigit():
                    n = n * 10 + int(s[self.i])
                    self.i += 1

                self.i += 1  # ignore the opening bracket '['
                decoded_string = self.decodeString(s)
                self.i += 1  # ignore the closing bracket ']'

                # repeat n times
                result.append(decoded_string * n)

        return ''.join(result)
```

</TabItem>
</Tabs>
