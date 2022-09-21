---
title: 二叉树的遍历
---

树的遍历有两类：深度优先遍历和宽度优先遍历。深度优先遍历又可分为三种：先序遍历，中序遍历和后序遍历。

```java
void traverse(TreeNode root) {
    if (root == null) {
        return;
    }
    // 前序位置
    traverse(root.left);
    // 中序位置
    traverse(root.right);
    // 后序位置
}
```

如上述伪代码所示，

* 把逻辑放在前序位置，就是前序遍历；
* 把逻辑放在中序位置，就是中序遍历；
* 把逻辑放在后序位置，就是后序遍历；
