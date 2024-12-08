---
title: Remove Nth Node From End of List
---

### 描述

Given a linked list, remove the `n`-th node from the end of list and return its head.

For example, Given linked list: `1->2->3->4->5`, and `n` = 2.

After removing the second node from the end, the linked list becomes `1->2->3->5`.

Note:

- Given `n` will always be valid.
- Try to do this in one pass.

### 分析

设两个指针`p`,`q`，让`q`先走`n`步，然后`p`和`q`一起走，直到`q`走到尾节点，删除`p->next`即可。

### 代码

import Tabs from "@theme/Tabs";
import TabItem from "@theme/TabItem";

<Tabs
defaultValue="python"
values={[
{ label: 'Java', value: 'java', },
{ label: 'C++', value: 'cpp', },
{ label: 'Python', value: 'python', },
]
}>
<TabItem value="java">

```java
// Remove Nth Node From End of List
// 时间复杂度O(n)，空间复杂度O(1)
class Solution {
    public ListNode removeNthFromEnd(ListNode head, int n) {
        ListNode dummy = new ListNode(-1);
        dummy.next = head;
        ListNode p = dummy, q = dummy;

        for (int i = 0; i < n; i++)  // q先走n步
            q = q.next;

        while(q.next != null) { // 一起走
            p = p.next;
            q = q.next;
        }
        p.next = p.next.next;
        return dummy.next;
    }
}
```

</TabItem>
<TabItem value="cpp">

```cpp
// Remove Nth Node From End of List
// 时间复杂度O(n)，空间复杂度O(1)
class Solution {
public:
    ListNode *removeNthFromEnd(ListNode *head, int n) {
        ListNode dummy{-1, head};
        ListNode *p = &dummy, *q = &dummy;

        for (int i = 0; i < n; i++)  // q先走n步
            q = q->next;

        while(q->next != nullptr) { // 一起走
            p = p->next;
            q = q->next;
        }
        ListNode *tmp = p->next;
        p->next = p->next->next;
        delete tmp;
        return dummy.next;
    }
};
```

</TabItem>
<TabItem value="python">

```python
# Remove Nth Node From End of List
# 时间复杂度O(n)，空间复杂度O(1)
class Solution:
    def removeNthFromEnd(self, head, n):
        dummy = ListNode(-1)
        dummy.next = head
        p, q = dummy, dummy

        for i in range(n): # q先走n步
            q = q.next

        while q.next != None: # 一起走
            p = p.next
            q = q.next
        p.next = p.next.next
        return dummy.next
```

</TabItem>
</Tabs>

### 相关题目

- [Intersection of Two Linked Lists](intersection-of-two-linked-lists.md)
