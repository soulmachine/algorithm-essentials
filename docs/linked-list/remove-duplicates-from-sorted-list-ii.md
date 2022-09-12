---
title: Remove Duplicates from Sorted List II
---

### 描述

Given a sorted linked list, delete all nodes that have duplicate numbers, leaving only distinct numbers from the original list.

For example,

Given `1->2->3->3->4->4->5`, return `1->2->5`.

Given `1->1->1->2->3`, return `2->3`.

### 分析

无

### 递归版

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
// Remove Duplicates from Sorted List II
// 递归版，时间复杂度O(n)，空间复杂度O(1)
class Solution {
    public ListNode deleteDuplicates(ListNode head) {
        if (head ==null || head.next == null) return head;

        ListNode slow = head;
        ListNode fast = head.next;
        if (slow.val == fast.val) {
            while (fast != null && slow.val == fast.val) {
                fast = fast.next;
            }
            return deleteDuplicates(fast);
        } else {
            slow.next = deleteDuplicates(slow.next);
            return slow;
        }
    }
};
```

</TabItem>
<TabItem value="cpp">

```cpp
// Remove Duplicates from Sorted List II
// 递归版，时间复杂度O(n)，空间复杂度O(n)
class Solution {
public:
    ListNode *deleteDuplicates(ListNode *head) {
        if (head == nullptr || head->next == nullptr) return head;

        ListNode *slow = head;
        ListNode *fast = head->next;
        if (slow->val == fast->val) {
            while (fast != nullptr && slow->val == fast->val) {
                ListNode *tmp = fast;
                fast = fast->next;
                delete tmp;
            }
            delete slow;
            return deleteDuplicates(fast);
        } else {
            slow->next = deleteDuplicates(slow->next);
            return slow;
        }
    }
};
```

</TabItem>
</Tabs>

### 迭代版

<Tabs
defaultValue="java"
values={[
{ label: 'Java', value: 'java', },
{ label: 'C++', value: 'cpp', },
]
}>
<TabItem value="java">

```java
// Remove Duplicates from Sorted List II
// 迭代版，时间复杂度O(n)，空间复杂度O(1)
public class Solution {
    public ListNode deleteDuplicates(ListNode head) {
        if (head == null) return head;

        ListNode dummy = new ListNode(Integer.MAX_VALUE); // 头结点
        dummy.next = head;
        ListNode prev = dummy, cur = head;
        while (cur != null) {
            boolean duplicated = false;
            while (cur.next != null && cur.val == cur.next.val) {
                duplicated = true;
                cur = cur.next;
            }
            if (duplicated) { // 删除重复的最后一个元素
                cur = cur.next;
                continue;
            }
            prev.next = cur;
            prev = prev.next;
            cur = cur.next;
        }
        prev.next = cur;
        return dummy.next;
    }
}
```

</TabItem>
<TabItem value="cpp">

```cpp
// Remove Duplicates from Sorted List II
// 迭代版，时间复杂度O(n)，空间复杂度O(1)
class Solution {
public:
    ListNode *deleteDuplicates(ListNode *head) {
        if (head == nullptr) return head;

        ListNode dummy(INT_MIN); // 头结点
        dummy.next = head;
        ListNode *prev = &dummy, *cur = head;
        while (cur != nullptr) {
            bool duplicated = false;
            while (cur->next != nullptr && cur->val == cur->next->val) {
                duplicated = true;
                ListNode *temp = cur;
                cur = cur->next;
                delete temp;
            }
            if (duplicated) { // 删除重复的最后一个元素
                ListNode *temp = cur;
                cur = cur->next;
                delete temp;
                continue;
            }
            prev->next = cur;
            prev = prev->next;
            cur = cur->next;
        }
        prev->next = cur;
        return dummy.next;
    }
};
```

</TabItem>
</Tabs>

### 相关题目

- [Remove Duplicates from Sorted Array](../array/remove-duplicates-from-sorted-array.md)
- [Remove Duplicates from Sorted Array II](../array/remove-duplicates-from-sorted-array-ii.md)
- [Remove Element](../array/remove-element.md)
- [Move Zeroes](../array/move-zeroes.md)
- [Remove Duplicates from Sorted List](remove-duplicates-from-sorted-list.md)
