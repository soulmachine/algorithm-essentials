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
// Remove Duplicates from Sorted List
// 时间复杂度O(n)，空间复杂度O(1)
class Solution {
public ListNode deleteDuplicates(ListNode head) {
        ListNode p = head;
        while (p != null && p.next != null) {
            if (p.next.val == p.val) {
                p.next = p.next.next;
            } else {
                p = p.next;
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
// 时间复杂度O(n)，空间复杂度O(1)
class Solution {
public:
    ListNode *deleteDuplicates(ListNode *head) {
        ListNode *p = head;
        while(p && p->next) {
            if (p->next->val == p->val) {
                ListNode *tmp = p->next;
                p->next = p->next->next;
                delete tmp;
            } else {
                p = p->next;
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
