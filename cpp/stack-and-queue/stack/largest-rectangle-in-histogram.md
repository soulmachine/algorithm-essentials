## Largest Rectangle in Histogram


### 描述

Given `n` non-negative integers representing the histogram's bar height where the width of each bar is 1, find the area of largest rectangle in the histogram.

![Above is a histogram where width of each bar is 1, given height = `[2,1,5,6,2,3]`.](../../images/histogram.png)


![The largest rectangle is shown in the shaded area, which has area = 10 unit.](../../images/histogram-area.png)

For example, given height = `[2,1,5,6,2,3]`, return 10.


### 分析

简单的，类似于 [Container With Most Water](../container-with-most-water.md)，对每个柱子，左右扩展，直到碰到比自己矮的，计算这个矩形的面积，用一个变量记录最大的面积，复杂度`O(n^2)`，会超时。

如图\S \ref{fig:histogram-area}所示，从左到右处理直方，当`i=4`时，小于当前栈顶（即直方3），对于直方3，无论后面还是前面的直方，都不可能得到比目前栈顶元素更高的高度了，处理掉直方3（计算从直方3到直方4之间的矩形的面积，然后从栈里弹出）；对于直方2也是如此；直到碰到比直方4更矮的直方1。

这就意味着，可以维护一个递增的栈，每次比较栈顶与当前元素。如果当前元素大于栈顶元素，则入栈，否则合并现有栈，直至栈顶元素小于当前元素。结尾时入栈元素0，重复合并一次。


### 代码

{% if book.cpp %}
  {% codesnippet "./code/largest-rectangle-in-histogram.cpp", language="cpp" %}{% endcodesnippet %}
{% endif %}


### 相关题目

* [Trapping Rain Water](trapping-rain-water.md)
* [Container With Most Water](container-with-most-water.md)
