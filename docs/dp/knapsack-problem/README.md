---
title: 背包问题
---

背包问题([Knapsack problem](https://en.wikipedia.org/wiki/Knapsack_problem))：有$N$种物品，第$i$种物品的重量为$w_i$，价值为$v_i$，背包能承受的最大重量为$W$。将哪些物品装入背包，可使这些物品的总重量不超过背包容量，且价值总和最大？

背包问题有很多变种，常见的是以下三种（其他变种在面试中几乎不会问，都是竞赛级别的了）：

1. 0-1 背包问题(0-1 knapsack problem)。每种物品只有一个。
1. 完全背包问题(UKP, unbounded knapsack problem)。每种物品都有无限个。
2. 多重背包问题(BKP, bounded knapsack problem)。每种物品有若干多个。

背包问题最经典的资料当然是[背包问题九讲](https://github.com/tianyicui/pack)，这是崔天翼大神早年写的一个文档，但是读起来有点费劲，本节我尽可能用简单易懂的方式来讲解背包问题。
