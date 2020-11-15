---
title: Linked List Cycle II
---

### 描述

Given a linked list, return the node where the cycle begins. If there is no cycle, return `null`.

Follow up:
Can you solve it without using extra space?

### 分析

当 fast 与 slow 相遇时，slow 肯定没有遍历完链表，而 fast 已经在环内循环了`n`圈($$1 \leq n$$)。假设 slow 走了`s`步，则 fast 走了`2s`步（fast 步数还等于`s`加上在环上多转的`n`圈），设环长为`r`，则：

`2s = s + nr`

`s = nr`

设整个链表长`L`，环入口点与相遇点距离为`a`，起点到环入口点的距离为`x`，则

`x + a = nr = (n – 1)r +r = (n-1)r + L - x`

`x = (n-1)r + (L – x – a)`

`L – x – a`为相遇点到环入口点的距离，由此可知，从链表头到环入口点等于`n-1`圈内环+相遇点到环入口点，于是我们可以从`head`开始另设一个指针`slow2`，两个慢指针每次前进一步，它俩一定会在环入口点相遇。

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
// Linked List Cycle II
// 时间复杂度O(n)，空间复杂度O(1)
class Solution {
    public ListNode detectCycle(ListNode head) {
        ListNode slow = head, fast = head;
        while (fast != null && fast.next != null) {
            slow = slow.next;
            fast = fast.next.next;
            if (slow == fast) {
                ListNode slow2 = head;

                while (slow2 != slow) {
                    slow2 = slow2.next;
                    slow = slow.next;
                }
                return slow2;
            }
        }
        return null;
    }
}
```

</TabItem>
<TabItem value="cpp">

```cpp
// Linked List Cycle II
// 时间复杂度O(n)，空间复杂度O(1)
class Solution {
public:
    ListNode *detectCycle(ListNode *head) {
        ListNode *slow = head, *fast = head;
        while (fast && fast->next) {
            slow = slow->next;
            fast = fast->next->next;
            if (slow == fast) {
                ListNode *slow2 = head;

                while (slow2 != slow) {
                    slow2 = slow2->next;
                    slow = slow->next;
                }
                return slow2;
            }
        }
        return nullptr;
    }
};
```

</TabItem>
</Tabs>

### 相关题目

- [Linked List Cycle](linked-list-cycle.md)
- [Intersection of Two Linked Lists](intersection-of-two-linked-lists.md)
