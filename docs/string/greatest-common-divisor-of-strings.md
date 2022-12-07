---
title: Greatest Common Divisor of Strings
---

### 描述

For two strings `s` and `t`, we say "`t` divides `s`" if and only if `s = t + ... + t` (i.e., `t` is concatenated with itself one or more times).

Given two strings `str1` and `str2`, return the largest string `x` such that `x` divides both `str1` and `str2`.

**Example 1:**

> **Input**: str1 = "ABCABC", str2 = "ABC"  
> **Output**: "ABC"

**Example 2:**

> **Input**: str1 = "ABABAB", str2 = "ABAB"  
> **Output**: "AB"

**Example 3:**

> **Input**: str1 = "LEET", str2 = "CODE"  
> **Output**: ""

**Constraints:**

* `1 <= str1.length, str2.length <= 1000`
* `str1` and `str2` consist of English uppercase letters.

### 分析

由于 `str1` 和 `str2` 可以被同一个`x`串整除，那么 `str1+str2` 和 `str2+str1` 一定是相同的。而且最大的`x`的长度是 `str1` 和 `str2` 长度的最大公约数。

### 代码

import Tabs from "@theme/Tabs";
import TabItem from "@theme/TabItem";

<Tabs
defaultValue="cpp"
values={[
{ label: 'Python', value: 'python', },
{ label: 'Java', value: 'java', },
{ label: 'C++', value: 'cpp', },
]
}>
<TabItem value="python">

```python
# TODO
```

</TabItem>
<TabItem value="java">

```java
// TODO
```

</TabItem>
<TabItem value="cpp">

```cpp
// Greatest Common Divisor of Strings
class Solution {
public:
    string gcdOfStrings(string str1, string str2) {
        return (str1 + str2 == str2 + str1) ? str1.substr(0, gcd(str1.size(), str2.size())) : "";
    }
};
```

</TabItem>
</Tabs>
