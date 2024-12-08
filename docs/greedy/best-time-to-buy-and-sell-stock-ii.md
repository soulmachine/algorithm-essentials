---
title: Best Time to Buy and Sell Stock II
---

### 描述

Say you have an array for which the i-th element is the price of a given stock on day i.

Design an algorithm to find the maximum profit. You may complete as many transactions as you like (ie, buy one and sell one share of the stock multiple times). However, you may not engage in multiple transactions at the same time (ie, you must sell the stock before you buy again).

### 分析

贪心法，低进高出，把所有正的价格差价相加起来。

把原始价格序列变成差分序列，本题也可以做是最大`m`子段和，`m=`数组长度。

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
// Best Time to Buy and Sell Stock II
// 时间复杂度O(n)，空间复杂度O(1)
public class Solution {
    public int maxProfit(int[] prices) {
        int sum = 0;
        for (int i = 1; i < prices.length; i++) {
            int diff = prices[i] - prices[i - 1];
            if (diff > 0) sum += diff;
        }
        return sum;
    }
}
```

</TabItem>
<TabItem value="cpp">

```cpp
// Best Time to Buy and Sell Stock II
// 时间复杂度O(n)，空间复杂度O(1)
class Solution {
public:
    int maxProfit(vector<int> &prices) {
        int sum = 0;
        for (int i = 1; i < prices.size(); i++) {
            int diff = prices[i] - prices[i - 1];
            if (diff > 0) sum += diff;
        }
        return sum;
    }
};
```

</TabItem>

<TabItem value="python">

```python
# Best Time to Buy and Sell Stock II
# 时间复杂度O(n)，空间复杂度O(1)
class Solution:
    def maxProfit(self, prices: list[int]) -> int:
        sum = 0
        for i in range(1, len(prices)):
            diff = prices[i] - prices[i - 1]
            if diff > 0:
                sum += diff
        return sum
```

</TabItem>
</Tabs>

### 相关题目

- [Best Time to Buy and Sell Stock](best-time-to-buy-and-sell-stock.md)
- [Best Time to Buy and Sell Stock III](../dp/best-time-to-buy-and-sell-stock-iii.md)
