---
title: 背包问题简介
---

背包问题([Knapsack problem](https://en.wikipedia.org/wiki/Knapsack_problem))有很多细分种类，常见的是以下三种：

1. 0-1 背包问题(0-1 knapsack problem)。每种物品只有一个。
1. 完全背包问题(UKP, unbounded knapsack problem)。每种物品都有无限个。
1. 多重背包问题(BKP, bounded knapsack problem)。第 i 种物品有`c[i]`个。

更多细分种类，请参考《背包问题九讲》（<https://github.com/tianyicui/pack>），这是崔天翼大神早年写的一个文档，非常经典。

## 0-1 背包问题

有`N`种物品，第`i`种物品的重量为`w`<sub>i</sub>，价值为`v`<sub>i</sub>，每种物品只有一个。背包能承受的最大重量为`W`。

将哪些物品装入背包，可使这些物品的总重量不超过背包容量，且价值总和最大？

由于每种物品仅有一个，可以选择装或者不装。

定义状态`f[i][j]`，表示把前`i`个物品装进容量为`j`的背包可以获得的最大价值，则状态转移方程是：

$$f[i][j]=\max\left\{f[i-1][j], f[i-1][j-w[i]+v[i]\right\}$$

这个方程理解如下，把前`i`个物品装进容量为`j`的背包时，有两种情况：

- 第`i`个不装进去，这时所得价值为：`f[i-1][j]`
- 第`i`个装进去，这时所得价值为：`f[i-1][j-w[i]]+v[i]`

动规过程的伪代码如下：

```python
f = [ [0] * (W+1) for i in range(N)] # N*(W+1) 2D array
for i in range(N):
    for j in range(w[i], W+1):
        f[i][j]=max(f[i-1][j],f[i-1][j-w[i]]+v[i])
```

内循环从右向左也可以：

```python
f = [ [0] * (W+1) for i in range(N)] # N*(W+1) 2D array
for i in range(N):
    for j in range(W, w[i]-1, -1):
        f[i][j]=max(f[i-1][j],f[i-1][j-w[i]]+v[i])
```

当内循环从右向左时，可以把二维数组优化成一维数组（又称为**滚动数组**[^1]）。伪代码如下：

```python
f = [0] * (W+1)
for i in range(N):
    for j in range(W, w[i]-1, -1):
        f[j]=max(f[j],f[j-w[i]]+v[i])
```

空间复杂度由 `O(NW)`降到了 `O(W)`。

为什么可以优化成一维呢？当内循环从右向左时，二维矩阵`f`是从上到下，从右到左的顺序计算的，在更新 `f[j]`之前，`f[j]`里保存的 `f[i-1][j]`，更新之后，`f[j]`里保存的是 `f[i][j]`。

事实上，0-1 背包问题是许多背包问题的子问题，它的代码可以被复用，因此，这里抽象出一
个处理单个物品的函数，方便代码复用。

```python
# c, 物品系数，在0-1背包问题下默认为1，在其他背包问题中可以有更多选择
def zero_one_knapsack(f: List[int], i: int, c=1):
    for j in range(W, w[i]-1, -1):
        f[j]=max(f[j],f[j-c*w[i]]+c*v[i])
```

有了这个函数以后，0-1 背包问题的伪代码就可以这样写：

```python
f = [0] * (W+1)
for i in range(N):
    zero_one_knapsack(f, i)
```

## 完全背包问题

如果每种物品有无限个可用，则是完全背包问题。

这个问题也类似于 0-1 背包问题，所不同的是每种物品有无限个，每种物品并非只有取或不取两种选择，而是可以取 0 个、取 1 个、取 2 个……直至取$W/w[i]$个。

一种直观的思路是，把第 `i` 种物品**拆分**成$W/w[i]$个物品，这就转化成了了物品总数为$\sum \dfrac{W}{w[i]}$的 0-1 背包问题。时间复杂度是$O(W\sum \dfrac{W}{w[i]})$。

按照该思路，状态转移方程为：

$$f[i][j]=\max\left\{f[i-1][j-k*w[i]]+k*v[i], 0 \leq k*w[i] \leq j\right\}$$

伪代码如下：

```python
f = [0] * (W+1)
for i in range(N):
    for j in range(W, w[i]-1, -1):
        K = j//w[i]
        for k in range(1, K+1):
            f[j] = max(f[j], f[j-k*w[i]] + k*v[i])
```

“拆分物品”还有更高效的拆分方法：把第 `i` 种物品拆分成`k`个物品，系数分别为$1,2,2^2,...,2^k$，其中 `k` 是满足 $2^k*w[i] \leq W$ 的最大整数。这是二进制的思想，因为闭区间$[1, W/w[i]]$中的任何整数都可以表示为$1, 2, 4, ..., 2^k$中若干个的和。

这样处理单个物品的复杂度由$O\left(\dfrac{W}{w[i]}\right)$降到了$O\left(\log \dfrac{W}{w[i]}\right)$，伪代码如下：

```python
def unbounded_knapsack(f: List[int], i: int):
    k=1
    while k*w[i] <= W:
        zero_one_knapsack(f, i, k)
        k=2*k
```

其实，还存在更优化的算法，复杂度为$O(NW)$，伪代码如下：

```python
f = [0] * (W+1)
for i in range(N):
    for j in range(w[i], W+1):
        f[j]=max(f[j],f[j-w[i]]+v[i])
```

与 0-1 背包问题相比，仅有一行代码不同，这里内循环是顺序的，而 0-1 背包是逆序的（在使用滚动数组的情况下）。

为什么这个算法可行呢？首先想想为什么 0-1 背包中内循环要逆序，逆序是为了保证每个物品只选一次，保证在“选择第 i 件物品”时，依赖的是一个没有选择第 i 件物品的子结果$f[i-1][j-w[i]]$。而现在完全背包的特点却是每种物品可选无限个，没有了每个物品只选一次的限制，所以就可以并且必须采用 j 递增的顺序循环。

抽象出处理单个物品的函数：

```python
def unbounded_knapsack(f: List[int], i: int):
    for j in range(w[i], W+1):
        f[j]=max(f[j],f[j-w[i]]+v[i])
```

## 多重背包问题

如果第`i`种物品有`c[i]`个可用，则是多重背包问题。

这个问题非常类似于 0-1 背包问题，所不同的是每种物品并非只有取或不取两种选择，而是可以取 0 个、取 1 个、取 2 个……直至取$c[i]$个。

一种直观的思路是，把第 `i` 种物品**拆分**成$c[i]$个物品，就转化成了了物品总数为$\sum c[i]$的 0-1 背包问题。时间复杂度是$O(W\sum c[i])$。

按照该思路，状态转移方程为：

$$f[i][j]=\max\left\{f[i-1][j-k*w[i]]+k*v[i], 0 \leq k \leq c[i], 0 \leq k*w[i] \leq j\right\}$$

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

这样处理单个物品的复杂度由$O(c[i])$降到了$O(\log c[i])$，伪代码如下：

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

[^1]: 刘汝佳,算法竞赛入门经典，清华大学出版社，2009，第 169 页 9.3.3 节
