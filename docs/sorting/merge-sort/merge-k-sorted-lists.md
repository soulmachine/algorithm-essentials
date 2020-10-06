---
title: Merge k Sorted Lists
---

### 描述

Merge k sorted linked lists and return it as one sorted list. Analyze and describe its complexity.

### 分析

可以复用 [Merge Two Sorted Lists](merge-two-sorted-lists.md) 的函数

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
// Merge k Sorted Lists
// 时间复杂度O(n1+n2+...)，空间复杂度O(1)
// TODO: 会超时
public class Solution {
    public ListNode mergeKLists(ListNode[] lists) {
        if (lists.length == 0) return null;

        ListNode p = lists[0];
        for (int i = 1; i < lists.length; i++) {
            p = mergeTwoLists(p, lists[i]);
        }
        return p;
    }

    // Merge Two Sorted Lists
    ListNode mergeTwoLists(ListNode l1, ListNode l2) {
        ListNode head = new ListNode(-1);
        for (ListNode p = head; l1 != null || l2 != null; p = p.next) {
            int val1 = l1 == null ? Integer.MAX_VALUE : l1.val;
            int val2 = l2 == null ? Integer.MAX_VALUE : l2.val;
            if (val1 <= val2) {
                p.next = l1;
                l1 = l1.next;
            } else {
                p.next = l2;
                l2 = l2.next;
            }
        }
        return head.next;
    }
}
```

</TabItem>
<TabItem value="cpp">

```cpp
// Merge k Sorted Lists
// 时间复杂度O(n1+n2+...)，空间复杂度O(1)
// TODO: 会超时
class Solution {
public:
    ListNode *mergeKLists(vector<ListNode *> &lists) {
        if (lists.size() == 0) return nullptr;

        ListNode *p = lists[0];
        for (int i = 1; i < lists.size(); i++) {
            p = mergeTwoLists(p, lists[i]);
        }
        return p;
    }

    // Merge Two Sorted Lists
    ListNode *mergeTwoLists(ListNode *l1, ListNode *l2) {
        ListNode head(-1);
        for (ListNode* p = &head; l1 != nullptr || l2 != nullptr; p = p->next) {
            int val1 = l1 == nullptr ? INT_MAX : l1->val;
            int val2 = l2 == nullptr ? INT_MAX : l2->val;
            if (val1 <= val2) {
                p->next = l1;
                l1 = l1->next;
            } else {
                p->next = l2;
                l2 = l2->next;
            }
        }
        return head.next;
    }
};
```

</TabItem>
</Tabs>

### 相关题目

- [Merge Two Sorted Arrays](merge-two-sorted-arrays.md)
- [Merge Two Sorted Lists](merge-two-sorted-lists.md)
