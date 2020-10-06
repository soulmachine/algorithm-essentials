---
title: Sqrt(x)
---

### 描述

Implement int `sqrt(int x)`.

Compute and return the square root of `x`.

### 分析

二分查找

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
// Plus One
// 时间复杂度O(n)，空间复杂度O(1)
public class Solution {
    public int[] plusOne(int[] digits) {
        return add(digits, 1);
    }
    private static int[] add(int[] digits, int digit) {
        int c = digit;  // carry, 进位

        for (int i = digits.length - 1; i >= 0; --i) {
            digits[i] += c;
            c = digits[i] / 10;
            digits[i] %= 10;
        }

        if (c > 0) { // assert (c == 1)
            int[] tmp = new int[digits.length + 1];
            System.arraycopy(digits, 0, tmp, 1, digits.length);
            tmp[0] = c;
            return tmp;
        } else {
            return digits;
        }
    }
};
```

</TabItem>
<TabItem value="cpp">

```cpp
// Plus One
// 时间复杂度O(n)，空间复杂度O(1)
class Solution {
public:
    vector<int> plusOne(vector<int> &digits) {
        add(digits, 1);
        return digits;
    }
private:
    // 0 <= digit <= 9
    void add(vector<int> &digits, int digit) {
        int c = digit;  // carry, 进位

        for (auto it = digits.rbegin(); it != digits.rend(); ++it) {
            *it += c;
            c = *it / 10;
            *it %= 10;
        }

        if (c > 0) digits.insert(digits.begin(), 1);
    }
};
```

</TabItem>
</Tabs>

### 相关题目

- [Pow(x)](pow.md)
