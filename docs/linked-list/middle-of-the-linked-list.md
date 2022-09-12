---
title: Middle of the Linked List
---

### 描述

Given a singly linked list, return the middle node of the linked list.

If there are two middle nodes, return the second middle node.

### 分析

这题也可以用快慢指针来解决，快指针每次走两步，慢指针每次走一步，当快指针走到链表尾部时，慢指针正好走到链表中间。

### 代码

import Tabs from "@theme/Tabs";
import TabItem from "@theme/TabItem";

<Tabs
defaultValue="cpp"
values={[
{ label: 'Java', value: 'java', },
{ label: 'C++', value: 'cpp', },
]
}>
<TabItem value="java">

```java
// TODO
```

</TabItem>
<TabItem value="cpp">

```cpp
// Middle of the Linked List
// 时间复杂度O(n)，空间复杂度O(1)
class Solution {
public:
    ListNode* middleNode(ListNode* head) {
        // 设置两个指针，一个快一个慢
        ListNode *slow = head, *fast = head;
        while (fast && fast->next) {
            slow = slow->next;
            fast = fast->next->next;
        }
        return slow;
    }
};
```

</TabItem>
</Tabs>

### 相关题目

- [Linked List Cycle](linked-list-cycle.md)
- [Linked List Cycle II](linked-list-cycle-ii.md)
