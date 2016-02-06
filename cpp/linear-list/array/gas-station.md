## Gas Station


### 描述

There are `N` gas stations along a circular route, where the amount of gas at station `i` is `gas[i]`.

You have a car with an unlimited gas tank and it costs `cost[i]` of gas to travel from station `i` to its next station (`i+1`). You begin the journey with an empty tank at one of the gas stations.

Return the starting gas station's index if you can travel around the circuit once, otherwise return -1.

Note:
The solution is guaranteed to be unique.


### 分析

首先想到的是$$O(N^2)$$的解法，对每个点进行模拟。

`O(N)`的解法是，设置两个变量，`sum`判断当前的指针的有效性；`total`则判断整个数组是否有解，有就返回通过`sum`得到的下标，没有则返回-1。


### 代码


{% if book.cpp %}
  {% codesnippet "./code/gas-station.cpp", language="cpp" %}{% endcodesnippet %}
{% endif %}
