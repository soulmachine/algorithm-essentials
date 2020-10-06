---
title: Linked List Cycle
---

### 描述

Given a linked list, determine if it has a cycle in it.

Follow up:
Can you solve it without using extra space?

### 分析

最容易想到的方法是，用一个哈希表`unordered_map<int, bool> visited`，记录每个元素是否被访问过，一旦出现某个元素被重复访问，说明存在环。空间复杂度`O(n)`，时间复杂度`O(N)`。

最好的方法是时间复杂度`O(n)`，空间复杂度`O(1)`的。设置两个指针，一个快一个慢，快的指针每次走两步，慢的指针每次走一步，如果快指针和慢指针相遇，则说明有环。参考\myurl{ http://leetcode.com/2010/09/detecting-loop-in-singly-linked-list.html}

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
// Linked List Cycle
// 时间复杂度O(n)，空间复杂度O(1)
class Solution {
    public boolean hasCycle(ListNode head) {
        // 设置两个指针，一个快一个慢
        ListNode slow = head, fast = head;
        while (fast != null && fast.next != null) {
            slow = slow.next;
            fast = fast.next.next;
            if (slow == fast) return true;
        }
        return false;
    }
};
```

</TabItem>
<TabItem value="cpp">

```cpp
// Linked List Cycle
// 时间复杂度O(n)，空间复杂度O(1)
class Solution {
public:
    bool hasCycle(ListNode *head) {
        // 设置两个指针，一个快一个慢
        ListNode *slow = head, *fast = head;
        while (fast && fast->next) {
            slow = slow->next;
            fast = fast->next->next;
            if (slow == fast) return true;
        }
        return false;
    }
};
```

</TabItem>
</Tabs>

### 相关题目

- [Linked List Cycle II](linked-list-cycle-ii.md)
