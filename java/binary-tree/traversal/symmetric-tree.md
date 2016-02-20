## Symmetric Tree


### 描述

Given two binary trees, write a function to check if they are equal or not.

Two binary trees are considered equal if they are structurally identical and the nodes have the same value.


### 分析

无


### 递归版

{% codesnippet "./code/symmetric-tree-1."+book.suffix, language=book.suffix %}{% endcodesnippet %}


### 迭代版

{% if book.java %}
```java
// Symmetric Tree
// 迭代版，时间复杂度O(n)，空间复杂度O(logn)
public class Solution {
    public boolean isSymmetric (TreeNode root) {
        if (root == null) return true;

        Stack<TreeNode> s = new Stack<>();
        s.push(root.left);
        s.push(root.right);

        while (!s.isEmpty()) {
            TreeNode p = s.pop ();
            TreeNode q = s.pop ();

            if (p == null && q == null) continue;
            if (p == null || q == null) return false;
            if (p.val != q.val) return false;

            s.push(p.left);
            s.push(q.right);

            s.push(p.right);
            s.push(q.left);
        }

        return true;
    }
}
```
{% endif %}

{% if book.cpp %}
```cpp
// Symmetric Tree
// 迭代版，时间复杂度O(n)，空间复杂度O(logn)
class Solution {
public:
    bool isSymmetric (TreeNode* root) {
        if (!root) return true;

        stack<TreeNode*> s;
        s.push(root->left);
        s.push(root->right);

        while (!s.empty ()) {
            auto p = s.top (); s.pop();
            auto q = s.top (); s.pop();

            if (!p && !q) continue;
            if (!p || !q) return false;
            if (p->val != q->val) return false;

            s.push(p->left);
            s.push(q->right);

            s.push(p->right);
            s.push(q->left);
        }

        return true;
    }
};
```
{% endif %}


### 相关题目


* [Same Tree](same-tree.md)
