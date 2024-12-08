---
title: Valid Palindrome II
---

### 描述

TODO

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
// Valid Palindrome II
// Time complexity: O(n)
// Space complexity: O(1)
class Solution {
    public boolean validPalindrome(String s) {
        int i = 0;
        int j = s.length() - 1;

        while (i < j) {
            // Found a mismatched pair, try both deletions
            if (s.charAt(i) != s.charAt(j)) {
                return checkPalindrome(s, i, j - 1) || checkPalindrome(s, i + 1, j);
            }

            i++;
            j--;
        }

        return true;
    }

    private boolean checkPalindrome(String s, int i, int j) {
        while (i < j) {
            if (s.charAt(i) != s.charAt(j)) {
                return false;
            }
            i++;
            j--;
        }
        return true;
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
# Valid Palindrome II
# Time complexity: O(n)
# Space complexity: O(1)
class Solution:
    def validPalindrome(self, s: str) -> bool:
        i = 0
        j = len(s) - 1

        while i < j:
            # Found a mismatched pair, try both deletions
            if s[i] != s[j]:
                return self.checkPalindrome(s, i, j - 1) or self.checkPalindrome(s, i + 1, j)

            i += 1
            j -= 1

        return True

    def checkPalindrome(self, s: str, i: int, j: int) -> bool:
        while i < j:
            if s[i] != s[j]:
                return False
            i += 1
            j -= 1
        return True
```

</TabItem>
</Tabs>

### 相关题目

- [Palindrome Number](simulation/palindrome-number.md)
