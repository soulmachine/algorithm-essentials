## Next Permutation


### 描述

Implement next permutation, which rearranges numbers into the lexicographically next greater permutation of numbers.

If such arrangement is not possible, it must rearrange it as the lowest possible order (ie, sorted in ascending order).

The replacement must be in-place, do not allocate extra memory.

Here are some examples. Inputs are in the left-hand column and its corresponding outputs are in the right-hand column.

```
1,2,3 → 1,3,2
3,2,1 → 1,2,3
1,1,5 → 1,5,1
```



### 分析

算法过程如下图所示（来自<http://fisherlei.blogspot.com/2012/12/leetcode-next-permutation.html>）。

![下一个排列算法流程](../../images/next-permutation.png)


### 代码

{% codesnippet "./code/next-permutation."+book.suffix, language=book.suffix %}{% endcodesnippet %}


### 相关题目


* [Permutation Sequence](permutation-sequence.md)
* [Permutations](permutations.md)
* [Permutations II](permutations-ii.md)
* [Combinations](combinations.md)
