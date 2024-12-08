---
title: Swap Nodes in Pairs
---

### 描述

Given a linked list, swap every two adjacent nodes and return its head.

For example,
Given `1->2->3->4`, you should return the list as `2->1->4->3`.

Your algorithm should use only constant space. You may **not** modify the values in the list, only nodes itself can be changed.

### 分析

无

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
// Swap Nodes in Pairs
// 时间复杂度O(n)，空间复杂度O(1)
class Solution {
    public ListNode swapPairs(ListNode head) {
        if (head == null || head.next == null) return head;
        ListNode dummy = new ListNode(-1);
        dummy.next = head;

        for(ListNode prev = dummy, cur = prev.next, next = cur.next;
                next != null;
                prev = cur, cur = cur.next, next = cur != null ? cur.next: null) {
            prev.next = next;
            cur.next = next.next;
            next.next = cur;
        }
        return dummy.next;
    }
}
```

</TabItem>
<TabItem value="cpp">

```cpp
// Swap Nodes in Pairs
// 时间复杂度O(n)，空间复杂度O(1)
class Solution {
public:
    ListNode *swapPairs(ListNode *head) {
        if (head == nullptr || head->next == nullptr) return head;
        ListNode dummy(-1);
        dummy.next = head;

        for(ListNode *prev = &dummy, *cur = prev->next, *next = cur->next;
                next;
                prev = cur, cur = cur->next, next = cur ? cur->next: nullptr) {
            prev->next = next;
            cur->next = next->next;
            next->next = cur;
        }
        return dummy.next;
    }
};
```

</TabItem>
<TabItem value="python">

```python
# Swap Nodes in Pairs
# 时间复杂度O(n)，空间复杂度O(1)
class Solution:
    def swapPairs(self, head):
        if head is None or head.next is None: return head
        dummy = ListNode(-1, head)

        prev = dummy
        cur = prev.next
        next = cur.next
        while next:
            prev.next = next
            cur.next = next.next
            next.next = cur

            prev = cur
            cur = cur.next
            next = cur.next if cur else None
        return dummy.next
```

</TabItem>
</Tabs>

下面这种写法更简洁，但题目规定了不准这样做。

<Tabs
defaultValue="java"
values={[
{ label: 'Java', value: 'java', },
{ label: 'C++', value: 'cpp', },
{ label: 'Python', value: 'python', },
]
}>
<TabItem value="java">

```java

// Swap Nodes in Pairs
// 时间复杂度O(n)，空间复杂度O(1)
class Solution {
    public ListNode swapPairs(ListNode head) {
        ListNode p = head;

        while (p != null && p.next != null) {
            int tmp = p.val;
            p.val = p.next.val;
            p.next.val = tmp;

            p = p.next.next;
        }

        return head;
    }
}
```

</TabItem>
<TabItem value="cpp">

```cpp
// Swap Nodes in Pairs
// 时间复杂度O(n)，空间复杂度O(1)
class Solution {
public:
    ListNode* swapPairs(ListNode* head) {
        ListNode* p = head;

        while (p && p->next) {
            swap(p->val, p->next->val);
            p = p->next->next;
        }

        return head;
    }
};
```

</TabItem>
<TabItem value="python">

```python
# Swap Nodes in Pairs
# 时间复杂度O(n)，空间复杂度O(1)
class Solution:
    def swapPairs(self, head):
        p = head

        while p and p.next:
            tmp = p.val
            p.val = p.next.val
            p.next.val = tmp

            p = p.next.next

        return head
```

</TabItem>
</Tabs>

### 相关题目

- [Reverse Nodes in k-Group](reverse-nodes-in-k-group.md)
