## Best Time to Buy and Sell Stock III


### 描述

Say you have an array for which the i-th element is the price of a given stock on day i.

Design an algorithm to find the maximum profit. You may complete at most two transactions.

Note: You may not engage in multiple transactions at the same time (ie, you must sell the stock before you buy again).


### 分析

设状态`f(i)`，表示区间$$[0,i](0 \leq i \leq n-1)$$的最大利润，状态`g(i)`，表示区间$$[i, n-1](0 \leq i \leq n-1)$$的最大利润，则最终答案为$$\max\left\{f(i)+g(i)\right\},0 \leq i \leq n-1$$。

允许在一天内买进又卖出，相当于不交易，因为题目的规定是最多两次，而不是一定要两次。

将原数组变成差分数组，本题也可以看做是最大`m`子段和，`m=2`，参考代码：<https://gist.github.com/soulmachine/5906637>


### 代码

{% if book.cpp %}
  {% codesnippet "./code/best-time-to-buy-and-sell-stock-iii.cpp", language="cpp" %}{% endcodesnippet %}
{% endif %}


### 相关题目

* [Best Time to Buy and Sell Stock](../greedy/best-time-to-buy-and-sell-stock.md)
* [Best Time to Buy and Sell Stock II](../greedy/best-time-to-buy-and-sell-stock-ii.md)
