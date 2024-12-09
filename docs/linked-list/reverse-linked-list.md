---
title: Reverse Linked List
---

### 描述

Reverse a singly linked list.

### 分析

用双指针 `p`, `q`，不断前进。

### 代码

import Tabs from "@theme/Tabs";
import TabItem from "@theme/TabItem";

#### 迭代

<Tabs
defaultValue="java"
values={[
  { label: 'Java', value: 'java', },
]}>
<TabItem value="java">

```java
// Reverse Linked List
// Time Complexity: O(n), Space Complexity: O(1)
class Solution {
    public ListNode reverseList(ListNode head) {
        ListNode p = null;
        ListNode q = head;
        while (q != null) {
            ListNode tmp = q.next;
            q.next = p;
            p = q;
            q = tmp;
        }
        return p;
    }
}
```

</TabItem>
</Tabs>

#### 递归

<Tabs
defaultValue="java"
values={[
  { label: 'Java', value: 'java', },
]}>
<TabItem value="java">

```java
// Reverse Linked List
// Time Complexity: O(n), Space Complexity: O(n)
public class Solution {
    public ListNode reverseList(ListNode head) {
        if (head == null || head.next == null) return head;
        ListNode newHead = reverseList(head.next);
        head.next.next = head;
        head.next = null;
        return newHead;
    }
}
```

</TabItem>
</Tabs>
