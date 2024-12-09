---
title: 二叉树
---

本章主要讲树相关的算法。

本书中二叉树的节点定义如下：

import Tabs from "@theme/Tabs";
import TabItem from "@theme/TabItem";

<Tabs
defaultValue="python"
values={[
{ label: 'Python', value: 'python', },
{ label: 'Java', value: 'java', },
{ label: 'C++', value: 'cpp', },
]
}>
<TabItem value="java">

```java
public class TreeNode {
    int val;
    TreeNode left;
    TreeNode right;
    TreeNode(int x) { val = x; }
}
```

</TabItem>
<TabItem value="cpp">

```cpp
// 树的节点
struct TreeNode {
    int val;
    TreeNode *left;
    TreeNode *right;
    TreeNode(int x) : val(x), left(nullptr), right(nullptr) { }
};
```

</TabItem>

<TabItem value="python">

```python
class TreeNode:
    def __init__(self, x):
        self.val = x
        self.left = None
        self.right = None
```

</TabItem>
</Tabs>

二叉树是一种简单优美的递归的数据结构，它是最容易培养抽象思维的。围绕二叉树，可以练习递归，广搜，深搜，动规，回溯法等各种算法。而且大部分算法技巧，本质上都是树的遍历问题。
