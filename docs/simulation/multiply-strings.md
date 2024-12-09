---
title: Multiply Strings
---

### 描述

Given two numbers represented as strings, return multiplication of the numbers as a string.

Note: The numbers can be arbitrarily large and are non-negative.

### 分析

高精度乘法。

### 代码

import Tabs from "@theme/Tabs";
import TabItem from "@theme/TabItem";

#### 模拟乘法

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
// Multiply Strings
// Time Complexity: O(n*m), Space Complexity: O(n+m)
class Solution {
    public String multiply(String num1, String num2) {
        int m = num1.length(), n = num2.length();
        int[] z = new int[m + n];

        for(int i = m - 1; i >= 0; i--) {
            for(int j = n - 1; j >= 0; j--) {
                int mul = (num1.charAt(i) - '0') * (num2.charAt(j) - '0');
                int sum = mul + z[i+j+1];
                z[i + j + 1] = sum % 10;
                z[i + j] += sum / 10; // carry
            }
        }

        StringBuilder sb = new StringBuilder();
        for(int x : z) {
            if(!(sb.length() == 0 && x == 0)) // skip prefix zeros
                sb.append(x);
        }
        return sb.length() == 0 ? "0" : sb.toString();
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
# Multiply Strings
# Time Complexity: O(n*m), Space Complexity: O(n+m)
class Solution:
    def multiply(self, num1: str, num2: str) -> str:
        m, n = len(num1), len(num2)
        z = [0] * (m + n)

        for i in range(m-1, -1, -1):
            for j in range(n-1, -1, -1):
                mul = (ord(num1[i]) - ord('0')) * (ord(num2[j]) - ord('0'))
                curr_sum = mul + z[i+j+1]
                z[i+j+1] = curr_sum % 10
                z[i+j] += curr_sum // 10  # carry

        result = []
        for x in z:
            if not (len(result) == 0 and x == 0):  # skip prefix zeros
                result.append(str(x))
        return ''.join(result) if result else "0"
```

</TabItem>
</Tabs>

#### 转化成整数数组，一个字符对应一个整数

常见的做法是把每个字符转化为一个 int，一一对应，形成一个 int 数组。

<Tabs
defaultValue="java"
values={[
{ label: 'Java', value: 'java', },
{ label: 'C++', value: 'cpp', },
]
}>
<TabItem value="java">

```java
// Multiply Strings
// 一个字符对应一个int
// 时间复杂度O(n*m)，空间复杂度O(n+m)
public class Solution {
    public String multiply(String num1, String num2) {
        BigInt bigInt1 = new BigInt(num1);
        BigInt bigInt2 = new BigInt(num2);
        BigInt result = BigInt.multiply(bigInt1, bigInt2);
        return result.toString();
    }

    // 一个字符对应一个int
    static class BigInt {
        private final int[] d;

        public BigInt(String s) {
            this.d = fromString(s);
        }
        public BigInt(int[] d) {
            this.d = d;
        }

        private static int[] fromString(String s) {
            int[] d = new int[s.length()];
            for (int i = s.length() - 1, j = 0; i >= 0; --i)
                d[j++] = Character.getNumericValue(s.charAt(i));
            return d;
        }

        @Override
        public String toString() {
            final StringBuilder sb = new StringBuilder();
            for (int i = d.length - 1; i >= 0; --i) {
                sb.append(Character.forDigit(d[i], 10));
            }
            return sb.toString();
        }

        public static BigInt multiply(BigInt x, BigInt y) {
            int[] z = new int[x.d.length + y.d.length];
            for (int i = 0; i < x.d.length; ++i) {
                for (int j = 0; j < y.d.length; ++j) {
                    z[i + j] += x.d[i] * y.d[j];
                    z[i + j + 1] += z[i + j] / 10;
                    z[i + j] %= 10;
                }
            }
            // find the first 0 from right to left
            int i = z.length - 1;
            for (; i > 0 && z[i] == 0; --i) /* empty */;

            if (i == z.length - 1) {
                return new BigInt(z);
            } else { // make a copy
                int[] tmp = new int[i + 1];
                System.arraycopy(z, 0, tmp, 0, i + 1);
                return new BigInt(tmp);
            }
        }
    }
}
```

</TabItem>
<TabItem value="cpp">

```cpp
// Multiply Strings
// @author 连城 (http://weibo.com/lianchengzju)
// 一个字符对应一个int
// 时间复杂度O(n*m)，空间复杂度O(n+m)
typedef vector<int> bigint;

bigint make_bigint(string const& repr) {
    bigint n;
    transform(repr.rbegin(), repr.rend(), back_inserter(n),
            [](char c) { return c - '0'; });
    return n;
}

string to_string(bigint const& n) {
    string str;
    transform(find_if(n.rbegin(), prev(n.rend()),
            [](char c) { return c > '\0'; }), n.rend(), back_inserter(str),
            [](char c) { return c + '0'; });
    return str;
}

bigint operator*(bigint const& x, bigint const& y) {
    bigint z(x.size() + y.size());

    for (size_t i = 0; i < x.size(); ++i)
        for (size_t j = 0; j < y.size(); ++j) {
            z[i + j] += x[i] * y[j];
            z[i + j + 1] += z[i + j] / 10;
            z[i + j] %= 10;
        }

    return z;
}

class Solution {
public:
    string multiply(string num1, string num2) {
        return to_string(make_bigint(num1) * make_bigint(num2));
    }
};
```

</TabItem>

<TabItem value="python">

```python
# Multiply Strings
# 一个字符对应一个int
# 时间复杂度O(n*m)，空间复杂度O(n+m)
class Solution:
    def multiply(self, num1: str, num2: str) -> str:
        bigInt1 = BigInt(num1)
        bigInt2 = BigInt(num2)
        result = BigInt.multiply(bigInt1, bigInt2)
        return str(result)

    # 一个字符对应一个int
class BigInt:
    def __init__(self, s):
        if isinstance(s, str):
            self.d = self.fromString(s)
        else:
            self.d = s

    @staticmethod
    def fromString(s):
        d = [0] * len(s)
        j = 0
        for i in range(len(s) - 1, -1, -1):
            d[j] = int(s[i])
            j += 1
        return d

    def __str__(self):
        return ''.join(str(self.d[i]) for i in range(len(self.d) - 1, -1, -1))

    @staticmethod
    def multiply(x, y):
        z = [0] * (len(x.d) + len(y.d))
        for i in range(len(x.d)):
            for j in range(len(y.d)):
                z[i + j] += x.d[i] * y.d[j]
                z[i + j + 1] += z[i + j] // 10
                z[i + j] %= 10

        # find the first 0 from right to left
        i = len(z) - 1
        while i > 0 and z[i] == 0:
            i -= 1

        if i == len(z) - 1:
            return BigInt(z)
        else:  # make a copy
            return BigInt(z[:i + 1])
```

</TabItem>
</Tabs>

#### 转化成整数数组，9 个字符对应一个 64 位整数

一个字符用一个 int 表示，其实是比较浪费内存空间的，因为一个 int64 的最大值是$2^{63}-1=9223372036854775807$，可以与 19 个字符对应，由于有乘法，减半，则至少可以与 9 个字符一一对应。

<Tabs
defaultValue="java"
values={[
{ label: 'Java', value: 'java', },
{ label: 'C++', value: 'cpp', },
]
}>
<TabItem value="java">

```java
// Multiply Strings
// 9个字符对应一个 long
// 时间复杂度O(n*m)，空间复杂度O(n+m)
public class Solution {
    public String multiply(String num1, String num2) {
        BigInt bigInt1 = BigInt.fromString(num1);
        BigInt bigInt2 = BigInt.fromString(num2);
        BigInt result = BigInt.multiply(bigInt1, bigInt2);
        return result.toString();
    }

    // 9个字符对应一个 long
    static class BigInt {
        /** 一个数组元素对应9个十进制位，即数组是亿进制的
         * 因为 1000000000 * 1000000000 没有超过 2^63-1
         */
        final static int BIGINT_RADIX = 1000000000;
        final static int RADIX_LEN = 9;
        /** 万进制整数. */
        private final long[] digits;

        public BigInt(long[] digits) {
            this.digits = digits;
        }

        private static BigInt fromString(String s) {
            long[] digits;
            if (s.length() % RADIX_LEN == 0) {
                digits = new long[s.length() / RADIX_LEN];
            } else {
                digits = new long[s.length() / RADIX_LEN + 1];
            }
            for (int i = s.length(), k = 0; i > 0; i -= RADIX_LEN) {
                long tmp = 0;
                for (int j = Math.max(0, i - RADIX_LEN); j < i; ++j) {
                    tmp = tmp * 10 + Character.getNumericValue(s.charAt(j));
                }
                digits[k++] = tmp;
            }
            return new BigInt(digits);
        }

        @Override
        public String toString() {
            final StringBuilder sb = new StringBuilder(
                    Long.toString(digits[digits.length-1]));

            for (int i = digits.length - 2; i >= 0; --i) {
                sb.append(String.format("%0" + RADIX_LEN + "d", digits[i]));
            }
            return sb.toString();
        }

        public static BigInt multiply(BigInt x, BigInt y) {
            long[] z = new long[x.digits.length + y.digits.length];
            for (int i = 0; i < x.digits.length; ++i) {
                for (int j = 0; j < y.digits.length; ++j) {
                    z[i + j] += x.digits[i] * y.digits[j];
                    z[i + j + 1] += z[i + j] / BIGINT_RADIX;
                    z[i + j] %= BIGINT_RADIX;
                }
            }
            // find the first 0 from right to left
            int i = z.length - 1;
            for (; i > 0 && z[i] == 0; --i) /* empty */;

            if (i == z.length - 1) {
                return new BigInt(z);
            } else { // make a copy
                long[] tmp = new long[i + 1];
                System.arraycopy(z, 0, tmp, 0, i + 1);
                return new BigInt(tmp);
            }
        }
    }
}
```

</TabItem>
<TabItem value="cpp">

```cpp
// Multiply Strings
// 9个字符对应一个int64_t
// 时间复杂度O(n*m/81)，空间复杂度O((n+m)/9)
/** 大整数类. */
class BigInt {
public:
    /**
     * @brief 构造函数，将字符串转化为大整数.
     * @param[in] s 输入的字符串
     * @return 无
     */
    BigInt(string s) {
        vector<int64_t> result;
        result.reserve(s.size() / RADIX_LEN + 1);

        for (int i = s.size(); i > 0; i -= RADIX_LEN) {  // [i-RADIX_LEN, i)
            int temp = 0;
            const int low = max(i - RADIX_LEN, 0);
            for (int j = low; j < i; j++) {
                temp = temp * 10 + s[j] - '0';
            }
            result.push_back(temp);
        }
        elems = result;
    }
    /**
     * @brief 将整数转化为字符串.
     * @return 字符串
     */
    string toString() {
        stringstream result;
        bool started = false; // 用于跳过前导0
        for (auto i = elems.rbegin(); i != elems.rend(); i++) {
            if (started) { // 如果多余的0已经都跳过，则输出
                result << setw(RADIX_LEN) << setfill('0') << *i;
            } else {
                result << *i;
                started = true; // 碰到第一个非0的值，就说明多余的0已经都跳过
            }
        }

        if (!started) return "0"; // 当x全为0时
        else return result.str();
    }

    /**
     * @brief 大整数乘法.
     * @param[in] x x
     * @param[in] y y
     * @return 大整数
     */
    static BigInt multiply(const BigInt &x, const BigInt &y) {
        vector<int64_t> z(x.elems.size() + y.elems.size(), 0);

        for (size_t i = 0; i < y.elems.size(); i++) {
            for (size_t j = 0; j < x.elems.size(); j++) { // 用y[i]去乘以x的各位
                //  两数第i, j位相乘，累加到结果的第i+j位
                z[i + j] += y.elems[i] * x.elems[j];

                if (z[i + j] >= BIGINT_RADIX) { //  看是否要进位
                    z[i + j + 1] += z[i + j] / BIGINT_RADIX; //  进位
                    z[i + j] %= BIGINT_RADIX;
                }
            }
        }
        while (z.back() == 0) z.pop_back();  // 没有进位，去掉最高位的0
        return BigInt(z);
    }

private:
    typedef long long int64_t;
    /** 一个数组元素对应9个十进制位，即数组是亿进制的
     * 因为 1000000000 * 1000000000 没有超过 2^63-1
     */
    const static int BIGINT_RADIX = 1000000000;
    const static int RADIX_LEN = 9;
    /** 万进制整数. */
    vector<int64_t> elems;
    BigInt(const vector<int64_t> num) : elems(num) {}
};


class Solution {
public:
    string multiply(string num1, string num2) {
        BigInt x(num1);
        BigInt y(num2);
        return BigInt::multiply(x, y).toString();
    }
};
```

</TabItem>

<TabItem value="python">

```python
# Multiply Strings
# 9个字符对应一个 long
# 时间复杂度O(n*m)，空间复杂度O(n+m)
class Solution:
    def multiply(self, num1: str, num2: str) -> str:
        bigint1 = BigInt.from_string(num1)
        bigint2 = BigInt.from_string(num2)
        result = BigInt.multiply(bigint1, bigint2)
        return str(result)

# 9个字符对应一个 long
class BigInt:
    """ 一个数组元素对应9个十进制位，即数组是亿进制的
    因为 1000000000 * 1000000000 没有超过 2^63-1
    """
    BIGINT_RADIX = 1000000000
    RADIX_LEN = 9

    def __init__(self, digits):
        """ 万进制整数. """
        self.digits = digits

    @staticmethod
    def from_string(s):
        digits = []
        length = len(s)
        for i in range(length, 0, -BigInt.RADIX_LEN):
            tmp = 0
            start = max(0, i - BigInt.RADIX_LEN)
            for j in range(start, i):
                tmp = tmp * 10 + int(s[j])
            digits.append(tmp)
        return BigInt(digits)

    def __str__(self):
        sb = [str(self.digits[-1])]
        for i in range(len(self.digits) - 2, -1, -1):
            sb.append(f"{self.digits[i]:0{BigInt.RADIX_LEN}d}")
        return "".join(sb)

    @staticmethod
    def multiply(x, y):
        z = [0] * (len(x.digits) + len(y.digits))
        for i in range(len(x.digits)):
            for j in range(len(y.digits)):
                z[i + j] += x.digits[i] * y.digits[j]
                z[i + j + 1] += z[i + j] // BigInt.BIGINT_RADIX
                z[i + j] %= BigInt.BIGINT_RADIX

        # find the first 0 from right to left
        i = len(z) - 1
        while i > 0 and z[i] == 0:
            i -= 1

        if i == len(z) - 1:
            return BigInt(z)
        else:  # make a copy
            return BigInt(z[:i + 1])
```

</TabItem>
</Tabs>

### 相关题目

- [Add Strings](add-strings.md)
