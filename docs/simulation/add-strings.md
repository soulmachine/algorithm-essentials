---
title: Add Strings
---

### 描述

Given two non-negative integers `num1` and `num2` represented as string, return the sum of `num1` and `num2`.

**Note**:

- The length of both `num1` and `num2` is < 5100.
- Both `num1` and `num2` contains only digits 0-9.
- Both `num1` and `num2` does not contain any leading zero.
- You **must not use any built-in BigInteger library or convert the inputs to integer** directly.

### 分析

这题与 [Add Binary](add-binary.md) 一模一样，将它的代码中的 2 改为 10 即可。

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
// Add Strings
// Time Complexity: O(max(m,n)), Space Complexity: O(max(m,n))
class Solution {
    public String addStrings(String num1, String num2) {
        StringBuilder result = new StringBuilder();
        int i = num1.length() - 1, j = num2.length() - 1, carry = 0;
        while(i >= 0 || j >= 0 || carry > 0) {
            int x = i < 0 ? 0 : num1.charAt(i--) - '0';
            int y = j < 0 ? 0 : num2.charAt(j--) - '0';
            int sum = x + y + carry;
            result.append(sum % 10);
            carry = sum / 10;
        }
        return result.reverse().toString();
    }
};
```

</TabItem>
<TabItem value="cpp">

```cpp
// Add Strings
// Time Complexity: O(max(m,n)), Space Complexity: O(max(m,n))
class Solution {
public:
    string addStrings(string num1, string num2) {
        string result;
        int i = num1.length() - 1, j = num2.length() - 1, carry = 0;

        while(i >= 0 || j >= 0 || carry > 0) {
            int x = i < 0 ? 0 : num1[i--] - '0';
            int y = j < 0 ? 0 : num2[j--] - '0';
            int sum = x + y + carry;
            result.insert(result.begin(), (sum % 10) + '0');
            carry = sum / 10;
        }
        return result;
    }
};
```

</TabItem>

<TabItem value="python">

```python
# Add Strings
# Time Complexity: O(max(m,n)), Space Complexity: O(max(m,n))
class Solution:
    def addStrings(self, num1: str, num2: str) -> str:
        result = []
        i, j = len(num1) - 1, len(num2) - 1
        carry = 0
        while i >= 0 or j >= 0 or carry > 0:
            x = 0 if i < 0 else ord(num1[i]) - ord('0')
            y = 0 if j < 0 else ord(num2[j]) - ord('0')
            sum = x + y + carry
            result.append(str(sum % 10))
            carry = sum // 10
            i, j = i - 1, j - 1
        return ''.join(result[::-1])
```

</TabItem>
</Tabs>

### 相关题目

- [Add Two Numbers](../linked-list/add-two-numbers.md)
- [Add Binary](add-binary.md)
- [Multiply Strings](multiply-strings.md)
