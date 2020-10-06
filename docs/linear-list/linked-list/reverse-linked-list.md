---
title: Reverse Linked List
---

### 描述

Reverse a singly linked list.

### 分析

用三个指针 `tail`,`p`,`q`，紧紧相邻，不断前进，每次将`p.next`指向`tail`，将`q.next`指向`p`。

### 解法 1 迭代

```java
// Reverse Linked List
// Time Complexity: O(n), Space Complexity: O(1)
public class Solution {
    public ListNode reverseList(ListNode head) {
        if (head == null || head.next == null) return head;

        ListNode tail = null;
        ListNode p = head;
        ListNode q = p.next;

        while (q != null) {
            ListNode old = q.next;
            p.next = tail;
            q.next = p;

            tail = p;
            p = q;
            q = old;
        }
        return p;
    }
}
```

### 解法 2 递归

```java
// Reverse Linked List
// Time Complexity: O(n), Space Complexity: O(n)
public class Solution {
    public ListNode reverseList(ListNode head) {
        if (head == null || head.next == null) return head;

        ListNode tail = head.next;
        head.next = null;
        ListNode newHead = reverseList(tail);
        tail.next = head;

        return newHead;
    }
}
```
