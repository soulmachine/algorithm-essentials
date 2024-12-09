---
title: Integer to Roman
---

### 描述

Given an integer, convert it to a roman numeral.

Input is guaranteed to be within the range from 1 to 3999.

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
// Integer to Roman
// 时间复杂度O(num)，空间复杂度O(1)
class Solution {
    public String intToRoman(int num) {
        final int radix[] = {1000, 900, 500, 400, 100, 90,
                50, 40, 10, 9, 5, 4, 1};
        final String symbol[] = {"M", "CM", "D", "CD", "C", "XC",
                "L", "XL", "X", "IX", "V", "IV", "I"};

        StringBuilder roman = new StringBuilder();
        for (int i = 0; num > 0; ++i) {
            int count = num / radix[i];
            num %= radix[i];
            for (; count > 0; --count) roman.append(symbol[i]);
        }
        return roman.toString();
    }
}
```

</TabItem>
<TabItem value="cpp">

```cpp
// Integer to Roman
// 时间复杂度O(num)，空间复杂度O(1)
class Solution {
public:
    string intToRoman(int num) {
        const int radix[] = {1000, 900, 500, 400, 100, 90,
                50, 40, 10, 9, 5, 4, 1};
        const string symbol[] = {"M", "CM", "D", "CD", "C", "XC",
                "L", "XL", "X", "IX", "V", "IV", "I"};

        string roman;
        for (size_t i = 0; num > 0; ++i) {
            int count = num / radix[i];
            num %= radix[i];
            for (; count > 0; --count) roman += symbol[i];
        }
        return roman;
    }
};
```

</TabItem>

<TabItem value="python">

```python
# Integer to Roman
# 时间复杂度O(num)，空间复杂度O(1)
class Solution:
    def intToRoman(self, num: int) -> str:
        radix = [1000, 900, 500, 400, 100, 90,
                50, 40, 10, 9, 5, 4, 1]
        symbol = ["M", "CM", "D", "CD", "C", "XC",
                "L", "XL", "X", "IX", "V", "IV", "I"]

        roman = []
        i = 0
        while num > 0:
            count = num // radix[i]
            num %= radix[i]
            roman.extend([symbol[i]] * count)
            i += 1
        return "".join(roman)
```

</TabItem>
</Tabs>

### 相关题目

- [Roman to Integer](roman-to-integer.md)
