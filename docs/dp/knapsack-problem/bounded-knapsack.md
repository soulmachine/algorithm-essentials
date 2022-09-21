---
title: 多重背包问题
---

如果每种物品有若干个，则是多重背包问题。

## 状态转移方程

假设第$i$种物品有$c_i$个可用，一种直观的思路是，把第$i$种物品**拆分**成$c_i$个物品，就转化成了了物品总数为$\sum c[i]$的 0-1 背包问题。

按照该思路，状态转移方程为：

$$f(i,j)=\max\left\{f(i-1,j-k*w_i)+k*v_i, 0 \leq k \leq c_i, 0 \leq k*w_i \leq j\right\}$$

## 代码框架

伪代码如下：

```python
f = [0] * (W+1)
for i in range(N):
    for j in range(W, w[i]-1, -1):
        K = min(j//w[i], c[i])
        for k in range(1, K+1):
            f[j] = max(f[j], f[j-k*w[i]] + k*v[i])
```

“拆分物品”还有更高效的拆分方法：把第 `i` 种物品拆分成`k`个物品，系数分别为$1,2,2^2,...,2^{k-1},c[i]-2^k+1$，其中 `k` 是满足$2^k-1<c[i]$ 的最大整数。例如，某种物品有 13 个，即 `c[i]=13`，则相应的 `k=3`，这种物品应该被拆分成系数分别 1,2,4,6 的 4 种物品。这是二进制的思想，因为闭区间$[1, c[i]]$中的任何整数都可以表示为$1, 2, 4, ..., 2^{k-1},c[i]-2^k+1$中若干个的和。

这样处理单个物品的复杂度由$O(c_i)$降到了$O(\log c_i)$，伪代码如下：

```python
def bounded_knapsack(f: List[int], i: int):
    if c[i]*w[i] >= W:
        unbounded_knapsack(f, i)
        return

    k = 1
    while k < c[i]:
        zero_one_knapsack(f, i, k)
        c[i] -= k
        k *= 2
    zero_one_knapsack(f, i, c[i])
```
