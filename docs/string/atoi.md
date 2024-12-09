---
title: String to Integer (atoi)
---

### 描述

Implement `atoi` to convert a string to an integer.

**Hint**: Carefully consider all possible input cases. If you want a challenge, please do not see below and ask yourself what are the possible input cases.

**Notes**: It is intended for this problem to be specified vaguely (ie, no given input specs). You are responsible to gather all the input requirements up front.

**Requirements for atoi**:

The function first discards as many whitespace characters as necessary until the first non-whitespace character is found. Then, starting from this character, takes an optional initial plus or minus sign followed by as many numerical digits as possible, and interprets them as a numerical value.

The string can contain additional characters after those that form the integral number, which are ignored and have no effect on the behavior of this function.

If the first sequence of non-whitespace characters in str is not a valid integral number, or if no such sequence exists because either str is empty or it contains only whitespace characters, no conversion is performed.

If no valid conversion could be performed, a zero value is returned. If the correct value is out of the range of representable values, `INT_MAX (2147483647)` or `INT_MIN (-2147483648)` is returned.

### 分析

细节题。注意几个测试用例：

1. 不规则输入，但是有效，"-3924x8fc"， " + 413",
1. 无效格式，" ++c", " ++1"
1. 溢出数据，"2147483648"

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
// String to Integer (atoi)
// 时间复杂度O(n)，空间复杂度O(1)
class Solution {
    public int myAtoi(final String str) {
        int num = 0;
        int sign = 1;
        final int n = str.length();
        if (n == 0) return 0;

        int i = 0;
        while (i < n && str.charAt(i) == ' ') i++;

        if (str.charAt(i) == '+') {
            i++;
        } else if (str.charAt(i) == '-') {
            sign = -1;
            i++;
        }

        for (; i < n; i++) {
            if (str.charAt(i) < '0' || str.charAt(i) > '9')
                break;
            if (num > Integer.MAX_VALUE / 10 ||
                    (num == Integer.MAX_VALUE / 10 &&
                            (str.charAt(i) - '0') > Integer.MAX_VALUE % 10)) {
                return sign == -1 ? Integer.MIN_VALUE : Integer.MAX_VALUE;
            }
            num = num * 10 + str.charAt(i) - '0';
        }
        return num * sign;
    }
}
```

</TabItem>
<TabItem value="cpp">

```cpp
// String to Integer (atoi)
// 时间复杂度O(n)，空间复杂度O(1)
class Solution {
public:
    int myAtoi(const string &str) {
        int num = 0;
        int sign = 1;
        const int n = str.length();
        if (n == 0) return 0;

        int i = 0;
        while (str[i] == ' ' && i < n) i++;

        if (str[i] == '+') {
            i++;
        } else if (str[i] == '-') {
            sign = -1;
            i++;
        }

        for (; i < n; i++) {
            if (str[i] < '0' || str[i] > '9')
                break;
            if (num > INT_MAX / 10 ||
                            (num == INT_MAX / 10 &&
                                    (str[i] - '0') > INT_MAX % 10)) {
                return sign == -1 ? INT_MIN : INT_MAX;
            }
            num = num * 10 + str[i] - '0';
        }
        return num * sign;
    }
};
```

</TabItem>

<TabItem value="python">

```python
# String to Integer (atoi)
# Time complexity O(n), Space complexity O(1)
class Solution:
    def myAtoi(self, s: str) -> int:
        num = 0
        sign = 1
        n = len(s)
        if n == 0:
            return 0
        i = 0
        while i < n and s[i] == ' ':
            i += 1
        if i == n:
            return 0
        if s[i] == '+':
            i += 1
        elif s[i] == '-':
            sign = -1
            i += 1
        max_int = 2**31 - 1
        min_int = -2**31
        while i < n:
            if not s[i].isdigit():
                break
            if num > max_int // 10 or (num == max_int // 10 and int(s[i]) > max_int % 10):
                return max_int if sign == 1 else min_int
            num = num * 10 + int(s[i])
            i += 1
        return num * sign
```

</TabItem>
</Tabs>

### 相关题目

- [Implement strStr()](strstr.md)
