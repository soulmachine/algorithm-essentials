---
title: Merge Two Sorted Lists
---

### 描述

Merge two sorted linked lists and return it as a new list. The new list should be made by splicing together the nodes of the first two lists.

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
// Merge Two Sorted Lists
// 时间复杂度O(min(m,n))，空间复杂度O(1)
public class Solution {
    public ListNode mergeTwoLists(ListNode l1, ListNode l2) {
        if (l1 == null) return l2;
        if (l2 == null) return l1;
        ListNode dummy = new ListNode(-1);
        ListNode p = dummy;
        for (; l1 != null && l2 != null; p = p.next) {
            if (l1.val > l2.val) { p.next = l2; l2 = l2.next; }
            else { p.next = l1; l1 = l1.next; }
        }
        p.next = l1 != null ? l1 : l2;
        return dummy.next;
    }
}
```

</TabItem>
<TabItem value="cpp">

```cpp
// Merge Two Sorted Lists
// 时间复杂度O(min(m,n))，空间复杂度O(1)
class Solution {
public:
    ListNode *mergeTwoLists(ListNode *l1, ListNode *l2) {
        if (l1 == nullptr) return l2;
        if (l2 == nullptr) return l1;
        ListNode dummy(-1);
        ListNode *p = &dummy;
        for (; l1 != nullptr && l2 != nullptr; p = p->next) {
            if (l1->val > l2->val) { p->next = l2; l2 = l2->next; }
            else { p->next = l1; l1 = l1->next; }
        }
        p->next = l1 != nullptr ? l1 : l2;
        return dummy.next;
    }
};
```

</TabItem>
</Tabs>

### 相关题目

- [Merge Two Sorted Arrays](merge-two-sorted-arrays.md)
- [Merge k Sorted Lists](merge-k-sorted-lists.md)
