---
title: Add Binary
---

### 描述

Given two binary strings, return their sum (also a binary string).

For example,

```
a = "11"
b = "1"
```

Return `100`.

### 分析

手工模拟大整数加法。

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
// Add Binary
// Time Complexity: O(max(m,n)), Space Complexity: O(max(m,n))
class Solution {
    public String addBinary(String a, String b) {
        StringBuilder result = new StringBuilder();
        int i = a.length() - 1, j = b.length() - 1, carry = 0;
        while(i >= 0 || j >= 0 || carry > 0) {
            int x = i < 0 ? 0 : a.charAt(i--) - '0';
            int y = j < 0 ? 0 : b.charAt(j--) - '0';
            int sum = x + y + carry;
            result.append(sum % 2);
            carry = sum / 2;
        }
        return result.reverse().toString();
    }
}
```

</TabItem>
<TabItem value="cpp">

```cpp
// Add Strings
// Time Complexity: O(max(m,n)), Space Complexity: O(max(m,n))
class Solution {
public:
    string addBinary(string a, string b) {
        string result;
        int i = a.length() - 1, j = b.length() - 1, carry = 0;

        while(i >= 0 || j >= 0 || carry > 0) {
            int x = i < 0 ? 0 : a[i--] - '0';
            int y = j < 0 ? 0 : b[j--] - '0';
            int sum = x + y + carry;
            result.insert(result.begin(), (sum % 2) + '0');
            carry = sum / 2;
        }
        return result;
    }
};
```

</TabItem>

<TabItem value="python">

```python
# Add Binary
# Time Complexity: O(max(m,n)), Space Complexity: O(max(m,n))
def addBinary(a: str, b: str) -> str:
    result = []
    i, j = len(a) - 1, len(b) - 1
    carry = 0
    while i >= 0 or j >= 0 or carry:
        x = int(a[i]) if i >= 0 else 0
        y = int(b[j]) if j >= 0 else 0
        total = x + y + carry
        result.append(str(total % 2))
        carry = total // 2
        i, j = i - 1, j - 1
    return ''.join(result[::-1])
```

</TabItem>
</Tabs>

### 相关题目

- [Add Two Numbers](../linked-list/add-two-numbers.md)
- [Add Strings](add-strings.md)
