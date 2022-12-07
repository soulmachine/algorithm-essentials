---
title: Reverse Linked List II
---

### 描述

Reverse a linked list from position `m` to `n`. Do it in-place and in one-pass.

For example:
Given `1->2->3->4->5->nullptr`, `m` = 2 and `n` = 4,

return `1->4->3->2->5->nullptr`.

Note: given `m`, `n` satisfy the following condition: $1 \leq m \leq  n \leq$ length of list.

### 分析

这题非常繁琐，有很多边界检查，15 分钟内做到 bug free 很有难度！

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
// Reverse Linked List II
// 迭代版，时间复杂度O(n)，空间复杂度O(1)
public class Solution {
    public ListNode reverseBetween(ListNode head, int m, int n) {
        ListNode dummy = new ListNode(-1);
        dummy.next = head;

        ListNode prev = dummy;
        for (int i = 0; i < m-1; ++i)
            prev = prev.next;
        ListNode head2 = prev;

        prev = head2.next;
        ListNode cur = prev.next;
        for (int i = m; i < n; ++i) {
            prev.next = cur.next;
            cur.next = head2.next;
            head2.next = cur;  // 头插法
            cur = prev.next;
        }

        return dummy.next;
    }
};
```

</TabItem>
<TabItem value="cpp">

```cpp
// Reverse Linked List II
// 迭代版，时间复杂度O(n)，空间复杂度O(1)
class Solution {
public:
    ListNode *reverseBetween(ListNode *head, int m, int n) {
        ListNode dummy(-1);
        dummy.next = head;

        ListNode *prev = &dummy;
        for (int i = 0; i < m-1; ++i)
            prev = prev->next;
        ListNode* const head2 = prev;

        prev = head2->next;
        ListNode *cur = prev->next;
        for (int i = m; i < n; ++i) {
            prev->next = cur->next;
            cur->next = head2->next;
            head2->next = cur;  // 头插法
            cur = prev->next;
        }

        return dummy.next;
    }
};
```

</TabItem>
</Tabs>
