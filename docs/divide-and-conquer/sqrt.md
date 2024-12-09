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
defaultValue="python"
values={[
{ label: 'Python', value: 'python', },
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

<TabItem value="python">

```python
# Plus One
# 时间复杂度O(n)，空间复杂度O(1)
class Solution:
    def plusOne(self, digits: list[int]) -> list[int]:
        return self.add(digits, 1)

    def add(self, digits: list[int], digit: int) -> list[int]:
        c = digit  # carry, 进位

        for i in range(len(digits) - 1, -1, -1):
            digits[i] += c
            c = digits[i] // 10
            digits[i] %= 10

        if c > 0:  # assert (c == 1)
            tmp = [0] * (len(digits) + 1)
            tmp[1:] = digits
            tmp[0] = c
            return tmp
        else:
            return digits
```

</TabItem>
</Tabs>

### 相关题目

- [Pow(x)](pow.md)
