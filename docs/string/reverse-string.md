---
title: Reverse String
---

### 描述

Write a function to reverse a string. The input string is given as an array of characters.

You must do this by modifying the input array in-place with `O(1)` extra memory.

### 分析

无。

### 代码

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
class Solution {
    public void reverseString(char[] s) {
        int left = 0, right = s.length - 1;
        while (left < right) {
            char temp = s[left];
            s[left] = s[right];
            s[right] = temp;
            left++;
            right--;
        }
    }
}
```

</TabItem>
<TabItem value="cpp">

```cpp
// Reverse String
// 时间复杂度O(n)，空间复杂度O(1)
class Solution {
public:
    void reverseString(vector<char>& s) {
        int left = 0, right = s.size() - 1;
        while (left < right) {
            swap(s[left], s[right]);
            left++;
            right--;
        }
    }
};
```

</TabItem>
</Tabs>

### 相关题目

- [Valid Palindrome](valid-palindrome.md)
