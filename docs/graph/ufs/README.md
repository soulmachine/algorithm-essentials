---
title: 并查集
---

## 并查集的定义

并查集(Disjoint Set)最常用的两个操作是查询(find)和合并(union 或 merge)，，所以也称为 Union-find Set或者Merge-find Set。并查集是一种树形的数据结构，但是常用来解决图里面的问题，所以本书把并查集放到图这一章。

并查集通常用树的双亲表示法，即开一个数组，每个位置存储的是该节点的父亲，

* 初始化时，每个元素是一颗单独的树，即 `p[x]=x`，然后根据边(edge)的信息初始化所有节点，比如`x`和`y`之间有一条边，那么就初始化为 `p[x]=y`
* 如何判断树根， `p[x] == x`
* 如何查找元素`x`的根节点， `while(p[x] != x) x = p[x]`
* 如何合并两个集合，比如合并元素`x`和`y`所在的集合，先找到`x`的根节点`px`和`y`的根节点`py`，`p[px] = py`

```cpp
class DSU {
public:
    DSU(int n) {
        p = vector<int>(n);
        // initialize
        for (int x = 0; x < n; x++) p[x] = x;
    }

    int find(int x) {
        while (p[x] != x) x = p[x];
        return x;
    }

    // return the number of reduced components
    int merge(int x, int y) {
        int px = find(x);
        int py = find(y);
        if (px == py) return 0;
        p[px] = py;
        reurn 1;
    }
private:
    vector<int> p;
};
```

## 并查集的优化

原始的并查集，查询和合并的时间复杂度取决于树的高度`h`，所以时间复杂度是`O(h)`，即 `O(log n)`。如果能降低树的高度，就能降低时间复杂度。

### 路径压缩

可以在查询的时候，顺便压缩路径，`p[x] = p[p[x]]`，不断循环，最终把被查询节点直接连接到根节点，树的高度变成了2，成为一个常量。

```cpp
int find(int x) {
    while (p[x] != x) {
        // highlight-next-line
        p[x] = p[p[x]]; // path compression
        x = p[x];
    }
    return x;
}
```

### Union by rank

原始的合并操作，直接赋值，就完成了合并。应该让矮的树向高的树合并，这样高度起码不会增长，如果让高的树向矮的树合并，高度一定会继续增长。

为了根据高度来合并，需要新增一个数组来记录每颗树的高度，`vector<int> rank(n)`，`rank[x]`代表`x`元素所在的树的高度。

```cpp
class DSU {
public:
    DSU(int n) {
        p = vector<int>(n);
        rank = vector<int>(n);
        // initialize
        for (int x = 0; x < n; x++) {
            p[x] = x;
            // highlight-next-line
            rank[x] = 1;
        }
    }

    int find(int x) {
        while (p[x] != x) {
            p[x] = p[p[x]]; // path compression
            x = p[x];
        }
        return x;
    }

    int merge(int x, int y) {
        int px = find(x);
        int py = find(y);
        if (px == py) return 0;

        // highlight-start
        if (rank[px] < rank[py]) {
            p[px] = py;
        } else if (rank[px] > rank[py]) {
            p[py] = px;
        } else {
            p[px] = py;
            rank[px] += 1;
        }
        // highlight-end
        return 1;
    }
private:
    vector<int> p;
    // highlight-next-line
    vector<int> rank;
};
```

路径压缩只需要一行代码，而基于rank的优化，改动的代码比较多，所以，在面试中使用路径压缩这个优化就够了。

同时使用路径压缩和union by rank优化后，并查集的时间复杂度不再是`O(h)`，而是$O(\log^* n)$, $\log^*$ 代表[iterated logarithm](https://en.wikipedia.org/wiki/Iterated_logarithm)，最大值不超过5。因此可以认为并查集的查询和合并的时间复杂度都是O(1)。
