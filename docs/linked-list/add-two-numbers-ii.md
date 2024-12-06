---
title: Add Two Numbers II
---

### 描述

You are given two non-empty linked lists representing two non-negative integers. The most significant digit comes first and each of their nodes contain a single digit. Add the two numbers and return it as a linked list.

You may assume the two numbers do not contain any leading zero, except the number 0 itself.

**Example**:

> **Input**: (7 -> 2 -> 4 -> 3) + (5 -> 6 -> 4)  
> **Output**: 7 -> 8 -> 0 -> 7

**Follow up:**  
What if you cannot modify the input lists? In other words, reversing the lists is not allowed.

### 分析

先把两个单链表反转，就可以直接复用 [Add Two Numbers](add-two-numbers.md) 的代码了。

### 代码

import Tabs from "@theme/Tabs";
import TabItem from "@theme/TabItem";

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
// Add Two Numbers II
// Time Complexity: O(m+n), Time Complexity: O(1)
public class Solution {
    public ListNode addTwoNumbers(ListNode l1, ListNode l2) {
        l1 = reverseList(l1);
        l2 = reverseList(l2);
        ListNode result = addTwoNumbersI(l1, l2);
        return reverseList(result);
    }

    private static ListNode addTwoNumbersI(ListNode l1, ListNode l2) {
        ListNode dummy = new ListNode(-1); // 头节点
        int carry = 0;
        ListNode prev = dummy;
        for (ListNode pa = l1, pb = l2;
             pa != null || pb != null;
             pa = pa == null ? null : pa.next,
             pb = pb == null ? null : pb.next,
             prev = prev.next) {
            final int ai = pa == null ? 0 : pa.val;
            final int bi = pb == null ? 0 : pb.val;
            final int value = (ai + bi + carry) % 10;
            carry = (ai + bi + carry) / 10;
            prev.next = new ListNode(value); // 尾插法
        }
        if (carry > 0)
            prev.next = new ListNode(carry);
        return dummy.next;
    }

    private static ListNode reverseList(ListNode head) {
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
};
```

</TabItem>
<TabItem value="cpp">

```cpp
// TODO
```

</TabItem>
<TabItem value="python">

```python
# Add Two Numbers II
# Time Complexity: O(m+n), Time Complexity: O(1)
class Solution:
    def addTwoNumbers(self, l1, l2):
        l1 = self.reverseList(l1)
        l2 = self.reverseList(l2)
        result = self.addTwoNumbersI(l1, l2)
        return self.reverseList(result)

    @staticmethod
    def addTwoNumbersI(l1, l2):
        dummy = ListNode(-1) # 头节点
        carry = 0
        prev = dummy
        pa, pb = l1, l2
        while pa is not None or pb is not None:
            ai = 0 if pa is None else pa.val
            bi = 0 if pb is None else pb.val
            value = (ai + bi + carry) % 10
            carry = (ai + bi + carry) // 10
            prev.next = ListNode(value) # 尾插法
            pa = None if pa is None else pa.next
            pb = None if pb is None else pb.next
            prev = prev.next
        if carry > 0:
            prev.next = ListNode(carry)
        return dummy.next

    @staticmethod
    def reverseList(head):
        p = None
        q = head
        while q is not None:
            tmp = q.next
            q.next = p
            p = q
            q = tmp
        return p
```

</TabItem>
</Tabs>

### 相关题目

- [Add Two Numbers](add-two-numbers.md)
- [Add Binary](../simulation/add-binary.md)
- [Add Strings](../simulation/add-strings.md)
