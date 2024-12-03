---
title: Linked List Cycle II
---

### 描述

Given a linked list, return the node where the cycle begins. If there is no cycle, return `null`.

Follow up:
Can you solve it without using extra space?

### 分析

用快慢指针，都从表头出发，当快指针和慢指针相遇时，慢指针还没有走完链表，快指针已经在环内转了n圈。

假设环的长度为`r`，环入口点距离链表头的距离为`a`，两指针第一次相遇点距离环入口为`b`，

由于快指针走过的距离是慢指针的两倍，则有 `a+nr+b=2*(a+b)` -> `nr=a+b` -> `a= nr-b`

可见，当快慢指针相遇时，重新用双指针的技巧，不过这时候二个指针的速度要相同，一个从表头出发，一个从相遇点出发，当2个指针相遇时，它们一定会在入口点相遇。

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
<TabItem value="python">

```python
# Linked List Cycle II
# 时间复杂度O(n)，空间复杂度O(1)
class Solution:
    def detectCycle(self, head):
        slow, fast = head, head;
        while fast and fast.next:
            slow = slow.next
            fast = fast.next.next
            if (slow == fast):
                slow2 = head

                while slow2 != slow:
                    slow2 = slow2.next;
                    slow = slow.next;
                return slow2;
        return None
```

</TabItem>
</Tabs>

### 相关题目

- [Linked List Cycle](linked-list-cycle.md)
- [Middle of the Linked List](middle-of-the-linked-list.md)
