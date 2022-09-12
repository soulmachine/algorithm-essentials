---
title: 简介
---

本章主要讲树相关的算法。

本书中二叉树的节点定义如下：

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
</Tabs>

二叉树是一种递归的数据结构，它是最容易培养框架思维的，而且大部分算法技巧，本质上都是树的遍历问题。
