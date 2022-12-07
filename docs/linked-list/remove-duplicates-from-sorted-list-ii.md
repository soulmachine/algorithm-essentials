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
// Remove Duplicates from Sorted List II
// Time complexity O(n)，space complexity O(1)
class Solution {
    public ListNode deleteDuplicates(ListNode head) {
        ListNode dummy = new ListNode(0, head);
        for(ListNode p = dummy, q = head; q != null; q = q.next) {
            while (q.next != null && p.next.val == q.next.val) q = q.next;
            if (p.next == q) { // no duplicate
                p = p.next;
            } else {
                p.next = q.next; // skip all duplicates
            }
        }
        return dummy.next;
    }
}
```

</TabItem>
<TabItem value="cpp">

```cpp
// Remove Duplicates from Sorted List II
// Time complexity O(n)，space complexity O(1)
class Solution {
public:
    ListNode* deleteDuplicates(ListNode* head) {
        ListNode dummy(0, head);
        for(ListNode *p = &dummy, *q = head; q != nullptr; q = q->next) {
            while (q->next && p->next->val == q->next->val) q = q->next;
            if (p->next == q) { // no duplicate
                p = p->next;
            } else {
                p->next = q->next; // skip all duplicates
            }
        }
        return dummy.next;
    }
};
```

</TabItem>
</Tabs>

C++代码里其实还需要调用 `delete q->next;`来释放内存，但是这里为了简洁就省略了。

### 相关题目

- [Remove Duplicates from Sorted Array](../array/remove-duplicates-from-sorted-array.md)
- [Remove Duplicates from Sorted Array II](../array/remove-duplicates-from-sorted-array-ii.md)
- [Remove Element](../array/remove-element.md)
- [Move Zeroes](../array/move-zeroes.md)
- [Remove Duplicates from Sorted List](remove-duplicates-from-sorted-list.md)
