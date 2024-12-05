---
title: Convert Sorted List to Binary Search Tree
---

### 描述

Given a singly linked list where elements are sorted in ascending order, convert it to a height balanced BST.

### 分析

这题与上一题类似，但是单链表不能随机访问，而自顶向下的二分法必须需要 RandomAccessIterator，因此前面的方法不适用本题。

存在一种自底向上(bottom-up)的方法，见 [http://leetcode.com/2010/11/convert-sorted-list-to-balanced-binary.html](http://leetcode.com/2010/11/convert-sorted-list-to-balanced-binary.html)

### 分治法，自顶向下

分治法，类似于 Convert Sorted Array to Binary Search Tree，自顶向下，复杂度 `O(nlogn)`。

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
// Convert Sorted List to Binary Search Tree
// 二分法，类似于 Convert Sorted Array to Binary Search Tree，
// 自顶向下，时间复杂度O(nlogn)，空间复杂度O(logn)
class Solution {
    public TreeNode sortedListToBST (ListNode head) {
        if(head == null) return null;
        if(head.next == null) return new TreeNode(head.val);

        ListNode mid = cutAtMiddle(head);

        TreeNode root = new TreeNode(mid.val);
        root.left = sortedListToBST(head);
        root.right = sortedListToBST(mid.next);

        return root;
    }

    ListNode cutAtMiddle(ListNode head) {
        if(head == null) return null;

        ListNode fast = head;
        ListNode slow = head;
        ListNode prev_slow = head;

        while(fast != null && fast.next != null){
            prev_slow = slow;
            slow = slow.next;
            fast = fast.next.next;
        }

        prev_slow.next = null;
        return slow;
    }
}
```

</TabItem>
<TabItem value="cpp">

```cpp
// Convert Sorted List to Binary Search Tree
// 二分法，类似于 Convert Sorted Array to Binary Search Tree，
// 自顶向下，时间复杂度O(nlogn)，空间复杂度O(logn)
class Solution {
public:
    TreeNode* sortedListToBST (ListNode* head) {
        if(head == nullptr) return nullptr;
        if(head->next == nullptr) return new TreeNode(head->val);

        ListNode *mid = cutAtMiddle(head);

        TreeNode *root = new TreeNode(mid->val);
        root->left = sortedListToBST(head);
        root->right = sortedListToBST(mid->next);

        return root;
    }

    ListNode* cutAtMiddle(ListNode *head) {
        if(head == nullptr) return nullptr;

        ListNode *fast = head;
        ListNode *slow = head;
        ListNode *prev_slow = head;

        while(fast != nullptr && fast->next != nullptr){
            prev_slow = slow;
            slow = slow->next;
            fast = fast->next->next;
        }

        prev_slow->next = nullptr;
        return slow;
    }
};
```

</TabItem>
</Tabs>

### 自底向上

<Tabs
defaultValue="java"
values={[
{ label: 'Java', value: 'java', },
{ label: 'C++', value: 'cpp', },
]
}>
<TabItem value="java">

```java
// Convert Sorted List to Binary Search Tree
// bottom-up，时间复杂度O(n)，空间复杂度O(logn)
public class Solution {
    public TreeNode sortedListToBST(ListNode head) {
        int len = 0;
        ListNode p = head;
        while (p != null) {
            len++;
            p = p.next;
        }
        return sortedListToBST(new Container(head), 0, len - 1);
    }
    private static TreeNode sortedListToBST(Container list, int start, int end) {
        if (start > end) return null;

        int mid = start + (end - start) / 2;
        TreeNode leftChild = sortedListToBST(list, start, mid - 1);
        TreeNode parent = new TreeNode(list.p.val);
        parent.left = leftChild;
        list.p = list.p.next;
        parent.right = sortedListToBST(list, mid + 1, end);
        return parent;
    }
    // 模拟二级指针
    static class Container {
        ListNode p;
        public Container(ListNode p) {
            this.p = p;
        }
    }
}
```

</TabItem>
<TabItem value="cpp">

```cpp
// Convert Sorted List to Binary Search Tree
// bottom-up，时间复杂度O(n)，空间复杂度O(logn)
class Solution {
public:
    TreeNode *sortedListToBST(ListNode *head) {
        int len = 0;
        ListNode *p = head;
        while (p) {
            len++;
            p = p->next;
        }
        return sortedListToBST(head, 0, len - 1);
    }
private:
    TreeNode* sortedListToBST(ListNode*& list, int start, int end) {
        if (start > end) return nullptr;

        int mid = start + (end - start) / 2;
        TreeNode *leftChild = sortedListToBST(list, start, mid - 1);
        TreeNode *parent = new TreeNode(list->val);
        parent->left = leftChild;
        list = list->next;
        parent->right = sortedListToBST(list, mid + 1, end);
        return parent;
    }
};
```

</TabItem>
</Tabs>

### 相关题目

- [Convert Sorted Array to Binary Search Tree](convert-sorted-array-to-binary-search-tree.md)
