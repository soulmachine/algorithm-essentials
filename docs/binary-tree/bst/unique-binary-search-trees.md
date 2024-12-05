---
title: Unique Binary Search Trees
---

### 描述
Given `n`, how many structurally unique BST's (binary search trees) that store values `1...n`?

For example,
Given `n = 3`, there are a total of 5 unique BST's.

```
   1         3     3      2      1
    \       /     /      / \      \
     3     2     1      1   3      2
    /     /       \                 \
   2     1         2                 3
```

### 分析

如果把上例的顺序改一下，就可以看出规律了。

```
 1       1           2          3       3
  \       \         / \        /       /
   3       2       1   3      2       1
  /         \                /         \
2            3              1           2
```

比如，以 1 为根的树的个数，等于左子树的个数乘以右子树的个数，左子树是 0 个元素的树，右子树是 2 个元素的树。以 2 为根的树的个数，等于左子树的个数乘以右子树的个数，左子树是 1 个元素的树，右子树也是 1 个元素的树。依此类推。

当数组为 `1,2,3,...,n`时，基于以下原则的构建的 BST 树具有唯一性：

以 (i) 为根节点的树，其左子树由 ([1, i-1]) 构成，其右子树由 ([i+1, n]) 构成。


定义`f(i)`为以`[1,i]`能产生的 Unique Binary Search Tree 的数目，则

如果数组为空，毫无疑问，只有一种 BST，即空树，`f(0)=1`。

如果数组仅有一个元素{1}，只有一种 BST，单个节点，`f(1)=1`。

如果数组有两个元素{1,2}， 那么有如下两种可能

```
1             2
  \          /
    2      1
```

$$f(2) = f(0) * f(1)   \text{ , when 1 as root}$$

$$+ f(1) * f(0)   \text{ , when 2 as root}$$

再看一看 3 个元素的数组，可以发现 BST 的取值方式如下：

$$f(3) = f(0) * f(2)   \text{ , when 1 as root}$$

$$+ f(1) * f(1)   \text{ , when 2 as root}$$

$$+ f(2) * f(0)   \text{ , when 3 as root}$$

所以，由此观察，可以得出`f`的递推公式为

$$f(i) = \sum_{k=1}^{i} f(k-1) \times f(i-k)$$

至此，问题划归为一维动态规划。

### 代码

import Tabs from "@theme/Tabs";
import TabItem from "@theme/TabItem";

<Tabs
defaultValue="java"
values={[
{ label: 'Java', value: 'java', },
{ label: 'C++', value: 'cpp', },
]
}>
<TabItem value="java">

```java
// Unique Binary Search Trees
// 时间复杂度O(n^2)，空间复杂度O(n)
public class Solution {
    public int numTrees(int n) {
        int[] f = new int[n + 1];

        f[0] = 1;
        f[1] = 1;
        for (int i = 2; i <= n; ++i) {
            for (int k = 1; k <= i; ++k)
                f[i] += f[k-1] * f[i - k];
        }

        return f[n];
    }
}
```

</TabItem>
<TabItem value="cpp">

```cpp
// Unique Binary Search Trees
// 时间复杂度O(n^2)，空间复杂度O(n)
class Solution {
public:
    int numTrees(int n) {
        vector<int> f(n + 1, 0);

        f[0] = 1;
        f[1] = 1;
        for (int i = 2; i <= n; ++i) {
            for (int k = 1; k <= i; ++k)
                f[i] += f[k-1] * f[i - k];
        }

        return f[n];
    }
};
```

</TabItem>
</Tabs>

### 相关题目

- [Unique Binary Search Trees II](unique-binary-search-trees-ii.md)
