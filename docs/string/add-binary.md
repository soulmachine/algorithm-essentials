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

无

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
// Add Binary
// 时间复杂度O(n)，空间复杂度O(1)
class Solution {
    public String addBinary(String a, String b) {
        StringBuilder result = new StringBuilder();
        int i = a.length() - 1;
        int j = b.length() - 1;
        int carry = 0;

        while(i >= 0 || j >= 0 || carry > 0) {
            int valueA = i < 0 ? 0 : a.charAt(i--) - '0';
            int valueB = j < 0 ? 0 : b.charAt(j--) - '0';
            int sum = valueA + valueB + carry;
            result.insert(0, Character.forDigit(sum % 2, 10));
            carry = sum / 2;
        }
        return result.toString();
    }
}
```

</TabItem>
<TabItem value="cpp">

```cpp
// Add Binary
// 时间复杂度O(n)，空间复杂度O(1)
class Solution {
public:
    string addBinary(string a, string b) {
        string result;
        int i = a.length() - 1;
        int j = b.length() - 1;
        int carry = 0;

        while(i >= 0 || j >= 0 || carry > 0) {
            int valueA = i < 0 ? 0 : a[i--] - '0';
            int valueB = j < 0 ? 0 : b[j--] - '0';
            int sum = valueA + valueB + carry;
            result.insert(result.begin(), (sum % 2) + '0');
            carry = sum / 2;
        }
        return result;
    }
};
```

</TabItem>
</Tabs>

### 相关题目

- [Add Two Numbers](linear-list/linked-list/add-two-numbers.md)
