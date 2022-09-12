---
title: Remove Duplicates from Sorted List
---

### 描述

Given a sorted linked list, delete all duplicates such that each element appear only once.

For example,

Given `1->1->2`, return `1->2`.

Given `1->1->2->3->3`, return `1->2->3`.

### 分析

无

### 解法1: 递归版

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
// Remove Duplicates from Sorted List
// 递归版，时间复杂度O(n)，空间复杂度O(n)
class Solution {
    public ListNode deleteDuplicates(ListNode head) {
        if (head == null || head.next == null) return head;

        ListNode newHead = deleteDuplicates(head.next);
        if(head.val == newHead.val) {
            return newHead;
        } else {
            head.next=newHead;
        }
        return head;
    }
};
```

</TabItem>
<TabItem value="cpp">

```cpp
// Remove Duplicates from Sorted List
// 递归版，时间复杂度O(n)，空间复杂度O(n)
class Solution {
public:
    ListNode* deleteDuplicates(ListNode* head) {
        if(head == nullptr || head->next == nullptr) return head;

        ListNode* newHead = deleteDuplicates(head->next);
        if(head->val == newHead->val) {
            return newHead;
        } else {
            head->next=newHead;
        }
        return head;
    }
};
```

</TabItem>
</Tabs>

### 解法2: 迭代版

<Tabs
defaultValue="java"
values={[
{ label: 'Java', value: 'java', },
{ label: 'C++', value: 'cpp', },
]
}>
<TabItem value="java">

```java
// Remove Duplicates from Sorted List
// 迭代版，时间复杂度O(n)，空间复杂度O(1)
class Solution {
public ListNode deleteDuplicates(ListNode head) {
        if (head == null) return null;

        for (ListNode slow = head, fast = head.next; fast != null; fast = slow.next) {
            if (slow.val == fast.val) {
                slow.next = fast.next;
            } else {
                slow = fast;
            }
        }
        return head;
    }
};
```

</TabItem>
<TabItem value="cpp">

```cpp
// Remove Duplicates from Sorted List
// 迭代版，时间复杂度O(n)，空间复杂度O(1)
class Solution {
public:
    ListNode *deleteDuplicates(ListNode *head) {
        if (head == nullptr) return nullptr;

        for (ListNode *slow = head, *fast = head->next; fast != nullptr; fast = slow->next) {
            if (slow->val == fast->val) {
                slow->next = fast->next;
                delete fast;
            } else {
                slow = fast;
            }
        }
        return head;
    }
};
```

</TabItem>
</Tabs>

### 相关题目

- [Remove Duplicates from Sorted List II](remove-duplicates-from-sorted-list-ii.md)
- [Remove Duplicates from Sorted Array](../array/remove-duplicates-from-sorted-array.md)
- [Remove Duplicates from Sorted Array II](../array/remove-duplicates-from-sorted-array-ii.md)
- [Remove Element](../array/remove-element.md)
- [Move Zeroes](../array/move-zeroes.md)
