## Max Points on a Line


### 描述

Given `n` points on a 2D plane, find the maximum number of points that lie on the same straight line.


### 分析

暴力枚举法。两点决定一条直线，`n`个点两两组合，可以得到$$\dfrac{1}{2}n(n+1)$$条直线，对每一条直线，判断`n`个点是否在该直线上，从而可以得到这条直线上的点的个数，选择最大的那条直线返回。复杂度`O(n^3)`。

上面的暴力枚举法以“边”为中心，再看另一种暴力枚举法，以每个“点”为中心，然后遍历剩余点，找到所有的斜率，如果斜率相同，那么一定共线对每个点，用一个哈希表，key为斜率，value为该直线上的点数，计算出哈希表后，取最大值，并更新全局最大值，最后就是结果。时间复杂度`O(n^2)`，空间复杂度`O(n)`。


### 以边为中心

{% codesnippet "./code/max-points-on-a-line-1."+book.suffix, language=book.suffix %}{% endcodesnippet %}


### 以点为中心

{% codesnippet "./code/max-points-on-a-line-2."+book.suffix, language=book.suffix %}{% endcodesnippet %}
