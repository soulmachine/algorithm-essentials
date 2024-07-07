---
title: Reverse Linked List
---

### 描述

Reverse a singly linked list.

### 分析

用双指针 `p`, `q`，不断前进。

### 代码

#### 迭代

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

#### 递归

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
