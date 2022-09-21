---
title: 小结
---

## 背包问题的分类

按物品个数分类，背包问题可以分为 0-1背包，完全背包和多重背包。

按求解目标分类，背包问题可以分为：

* 求最值，例如 [One and Zeroes](ones-and-zeroes.md), [Last Stone Weight II](last-stone-weight-ii.md)
* 求布尔值，例如[Partition Equal Subset Sum](partition-equal-subset-sum.md)
* 求组合数，例如 [Coin Change II](coin-change-ii.md)
* 求排列数，例如 [Combination Sum IV](combination-sum-iv.md)

## 求解的步骤

拿到一个背包问题是，一般按如下步骤进行思考：

1. 判断该问题是否为背包问题。
2. 是否恰好装满
3. 物品个数，是1个，多个还是无限个
4. 求解目标，是求最值，布尔值，组合数，还是排列数

拿到一个问题后，首先判断该问题是否为动规问题，然后判断该问题是否为背包问题。将一个动规问题转化为背包问题，需要一点经验积累，这只能靠题量训练出来。例如[Target Sum](target-sum.md)，如果不能想到$\frac{1}{2}(\sum_i w_i + target)$这个点子，就没法转化为背包问题。

如果是背包问题，再判断是否恰好装满。如果是，**在定义dp数组时，需要初始化为无效状态**，因为背包恰好装满时候我们只关心有效状态，而无效状态又无法推出有效状态。例如[Coin Change](coin-change.md)初始化为`amount+1`，[Perfect Squares](perfect-squares.md)初始化为0，[Combination Sum IV](combination-sum-iv.md)初始化为0, [Target Sum](target-sum.md)初始化为0。

接下来看物品个数是1个，多个还是无限个。如果是1个，那么就是0-1背包问题；如果是多个，那么就是多重背包问题；如果是无限个，那么就是完全背包问题。**0-1背包问题里，内循环要逆序，完全背包问题里，内循环要顺序。**多重背包问题可以复用0-1背包问题和完全背包问题的代码。

最后看求解目标，

* 求最值，内外for循环可以任意颠倒。例如 [Coin Change](coin-change.md), [Partition Equal Subset Sum](partition-equal-subset-sum.md)。
* 求组合数，外层for遍历物品，内层for循环遍历背包。例如 [Coin Change II](coin-change-ii.md)
* 求排列数，外层for遍历背包，内层for循环遍历物品。例如 [Combination Sum IV](combination-sum-iv.md)
