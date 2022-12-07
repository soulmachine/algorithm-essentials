---
title: Odd Even Linked List
---

### 描述

Given a singly linked list, group all odd nodes together followed by the even nodes. Please note here we are talking about the node number and not the value in the nodes.

You should try to do it in place. The program should run in `O(1)` space complexity and `O(n)` time complexity.

**Example**:

Given `1->2->3->4->5->NULL`,

return `1->3->5->2->4->NULL`.

**Note**:

1. The relative order inside both the even and odd groups should remain as it was in the input.
1. The first node is considered odd, the second node even and so on ...

### 分析

一次遍历，在遍历的过程中交叉赋值，最后把奇数链表的尾巴连接到偶数链表的头部。

### 代码

```java
// Odd Even Linked List
// Time Complexity: O(n), Space Complexity: O(1)
public class Solution {
    public ListNode oddEvenList(ListNode head) {
        if (head == null) return null;
        // head and odd are the head pointer and tail pointer of odd list
        // evenHead and even are the head pointer and tail pointer of even list
        ListNode odd = head, even = head.next, evenHead = even;
        while (even != null && even.next != null) {
            odd.next = even.next;
            odd = odd.next;
            even.next = odd.next;
            even = even.next;
        }
        odd.next = evenHead;
        return head;
    }
}
```
