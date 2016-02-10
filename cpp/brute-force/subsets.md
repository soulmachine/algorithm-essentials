## Subsets


### 描述

Given a set of distinct integers, `S`, return all possible subsets.

Note:


* Elements in a subset must be in non-descending order.
* The solution set must not contain duplicate subsets.

For example, If `S = [1,2,3]`, a solution is:

```
[
  [3],
  [1],
  [2],
  [1,2,3],
  [1,3],
  [2,3],
  [1,2],
  []
]
```


### 递归


#### 增量构造法

每个元素，都有两种选择，选或者不选。

{% codesnippet "./code/subsets-1."+book.suffix, language=book.suffix %}{% endcodesnippet %}


#### 位向量法

开一个位向量`bool selected[n]`，每个元素可以选或者不选。

{% codesnippet "./code/subsets-2."+book.suffix, language=book.suffix %}{% endcodesnippet %}


### 迭代


#### 增量构造法

{% codesnippet "./code/subsets-3."+book.suffix, language=book.suffix %}{% endcodesnippet %}


#### 二进制法

本方法的前提是：集合的元素不超过int位数。用一个int整数表示位向量，第`i`位为1，则表示选择`S[i]`，为0则不选择。例如 `S={A,B,C,D}`，则`0110=6`表示子集 `{B,C}`。

这种方法最巧妙。因为它不仅能生成子集，还能方便的表示集合的并、交、差等集合运算。设两个集合的位向量分别为$$B_1$$和$$B_2$$，则$$B_1\cup B_2, B_1 \cap B_2, B_1 \triangle B_2$$分别对应集合的并、交、对称差。

二进制法，也可以看做是位向量法，只不过更加优化。

{% codesnippet "./code/subsets-4."+book.suffix, language=book.suffix %}{% endcodesnippet %}


### 相关题目

* [Subsets II](subsets-ii.md)
