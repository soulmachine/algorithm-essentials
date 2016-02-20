## Recover Binary Search Tree


### 描述

Two elements of a binary search tree (BST) are swapped by mistake.

Recover the tree without changing its structure.

Note: A solution using `O(n)` space is pretty straight forward. Could you devise a constant space solution?


### 分析

`O(n)`空间的解法是，开一个指针数组，中序遍历，将节点指针依次存放到数组里，然后寻找两处逆向的位置，先从前往后找第一个逆序的位置，然后从后往前找第二个逆序的位置，交换这两个指针的值。

中序遍历一般需要用到栈，空间也是`O(n)`的，如何才能不使用栈？Morris中序遍历。


### 代码

{% if book.java %}
{% codesnippet "./code/recover-binary-search-tree."+book.suffix, language=book.suffix %}{% endcodesnippet %}
{% endif %}

{% if book.cpp %}
```cpp
// Recover Binary Search Tree
// Morris中序遍历，时间复杂度O(n)，空间复杂度O(1)
class Solution {
public:
    void recoverTree(TreeNode* root) {
        pair<TreeNode*, TreeNode*> broken;
        TreeNode* prev = nullptr;
        TreeNode* cur = root;

        while (cur != nullptr) {
            if (cur->left == nullptr) {
                detect(broken, prev, cur);
                prev = cur;
                cur = cur->right;
            } else {
                auto node = cur->left;

                while (node->right != nullptr && node->right != cur)
                    node = node->right;

                if (node->right == nullptr) {
                    node->right = cur;
                    //prev = cur; 不能有这句！因为cur还没有被访问
                    cur = cur->left;
                } else {
                    detect(broken, prev, cur);
                    node->right = nullptr;
                    prev = cur;
                    cur = cur->right;
                }
            }
        }

        swap(broken.first->val, broken.second->val);
    }

    void detect(pair<TreeNode*, TreeNode*>& broken, TreeNode* prev,
            TreeNode* current) {
        if (prev != nullptr && prev->val > current->val) {
            if (broken.first == nullptr) {
                broken.first = prev;
            } //不能用else，例如 {0,1}，会导致最后 swap时second为nullptr，
              //会 Runtime Error
            broken.second = current;
        }
    }
};
```
{% endif %}


### 相关题目


* [Binary Tree Inorder Traversal](binary-tree-inorder-traversal.md)
