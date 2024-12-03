---
title: Intersection of Two Linked Lists
---

### 描述

Write a program to find the node at which the intersection of two singly linked lists begins.

**Example 1**:

<img src="/img/intersection-of-two-linked-lists_example_1.png" width="60%" />

> **Input**: listA = [4,1,8,4,5], listB = [5,6,1,8,4,5]  
> **Output**: The node with value = 8

**Notes**:

- If the two linked lists have no intersection at all, return null.
- The linked lists must retain their original structure after the function returns.
- You may assume there are no cycles anywhere in the entire linked structure.
- Your code should preferably run in O(n) time and use only O(1) memory.

### 分析

最自然的想法，是先遍历完两个单链表，得到他们的长度`lenA`和`lenB`，进而知道他们的长度之差。然后再次遍历两个单链表，不过这次，长的单链表先走`|lenA-lenB|`步，然后两个指针一起走，当两个指针指向相同的节点，这个节点就是相交点。这个算法的时间复杂度是 O(m+n)，空间复杂度 O(1)，是符合题目要求的。

上述思路遍历了两边，可以优化为只遍历一遍。遍历两个单链表，较短的那条会最先到达尾部，然后把这个指针指向较长的单链表的头部（这等价于让长链表的指针先走`|lenA-lenB|`步），两个指针继续往前走，当两个指针指向相同的节点时，这个指针就是相交点。

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
// Intersection of Two Linked Lists
// Two Pointers
// Time Complexity: O(m+n), Space Complexity: O(1)
public class Solution {
    public ListNode getIntersectionNode(ListNode headA, ListNode headB) {
        ListNode a = headA;
        ListNode b = headB;
        while( a != b) {
            a = a == null? headB : a.next;
            b = b == null? headA : b.next;
        }

        return a; // return b is also OK
    }
}
```

</TabItem>
<TabItem value="cpp">

```cpp
// Intersection of Two Linked Lists
// Two Pointers
// Time Complexity: O(m+n), Space Complexity: O(1)
class Solution {
public:
    ListNode *getIntersectionNode(ListNode *headA, ListNode *headB) {
        ListNode *a = headA;
        ListNode *b = headB;
        while ( a != b) {
            a = a == nullptr? headB : a->next;
            b = b == nullptr? headA : b->next;
        }

        return a; // return b is also OK
    }
};
```

</TabItem>
<TabItem value="python">

```python
# Intersection of Two Linked Lists
# Time Complexity: O(m+n), Space Complexity: O(1)
class Solution:
    def getIntersectionNode(self, headA, headB):
        a, b = headA, headB
        while a != b:
            a = headB if a == None else a.next
            b = headA if b == None else b.next

        return a # return b is also OK
```

</TabItem>
</Tabs>

### 相关题目

- [Remove Nth Node From End of List](remove-nth-node-from-end-of-list.md)
