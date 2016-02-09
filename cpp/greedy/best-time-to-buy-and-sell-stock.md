## Best Time to Buy and Sell Stock


### 描述

Say you have an array for which the i-th element is the price of a given stock on day i.

If you were only permitted to complete at    most one transaction (ie, buy one and sell one share of the stock), design an algorithm to find the maximum profit.


### 分析

贪心法，分别找到价格最低和最高的一天，低进高出，注意最低的一天要在最高的一天之前。

把原始价格序列变成差分序列，本题也可以做是最大`m`子段和，`m=1`。

### 代码

{% if book.cpp %}
  {% codesnippet "./code/best-time-to-buy-and-sell-stock.cpp", language="cpp" %}{% endcodesnippet %}
{% endif %}


### 相关题目

* [Best Time to Buy and Sell Stock II](best-time-to-buy-and-sell-stock-ii.md)
* [Best Time to Buy and Sell Stock III](best-time-to-buy-and-sell-stock-iii.md)
