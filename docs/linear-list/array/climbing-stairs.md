---
title: Climbing Stairs
---

### 描述

You are climbing a stair case. It takes `n` steps to reach to the top.

Each time you can either climb 1 or 2 steps. In how many distinct ways can you climb to the top?

### 分析

设`f(n)`表示爬`n`阶楼梯的不同方法数，为了爬到第`n`阶楼梯，有两个选择：

- 从第`n-1`阶前进 1 步；
- 从第`n-1`阶前进 2 步；

因此，有`f(n)=f(n-1)+f(n-2)`。

这是一个斐波那契数列。

方法 1，递归，太慢；方法 2，迭代。

方法 3，数学公式。斐波那契数列的通项公式为 $$a_n=\dfrac{1}{\sqrt{5}}\left[\left(\dfrac{1+\sqrt{5}}{2}\right)^n-\left(\dfrac{1-\sqrt{5}}{2}\right)^n\right]$$。

### 迭代

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
// Climbing Stairs
// 迭代，时间复杂度O(n)，空间复杂度O(1)
public class Solution {
    public int climbStairs(int n) {
        int prev = 0;
        int cur = 1;
        for(int i = 1; i < n+1 ; ++i){
            int tmp = cur;
            cur += prev;
            prev = tmp;
        }
        return cur;
    }
};
```

</TabItem>
<TabItem value="cpp">

```cpp
// Climbing Stairs
// 迭代，时间复杂度O(n)，空间复杂度O(1)
class Solution {
public:
    int climbStairs(int n) {
        int prev = 0;
        int cur = 1;
        for(int i = 1; i <= n ; ++i){
            int tmp = cur;
            cur += prev;
            prev = tmp;
        }
        return cur;
    }
};
```

</TabItem>
</Tabs>

### 数学公式

<Tabs
defaultValue="java"
values={[
{ label: 'Java', value: 'java', },
{ label: 'C++', value: 'cpp', },
]
}>
<TabItem value="java">

```java
// Climbing Stairs
// 数学公式，时间复杂度O(1)，空间复杂度O(1)
public class Solution {
    public int climbStairs(int n) {
        final double s = Math.sqrt(5);
        return (int)Math.floor((Math.pow((1+s)/2, n+1) +
            Math.pow((1-s)/2, n+1))/s + 0.5);
    }
};
```

</TabItem>
<TabItem value="cpp">

```cpp
// Climbing Stairs
// 数学公式，时间复杂度O(1)，空间复杂度O(1)
class Solution {
    public:
    int climbStairs(int n) {
        const double s = sqrt(5);
        return floor((pow((1+s)/2, n+1) +
            pow((1-s)/2, n+1))/s + 0.5);
    }
};
```

</TabItem>
</Tabs>

### 相关题目

- [Decode Ways](../../dp/decode-ways.md)
