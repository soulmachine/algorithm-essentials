---
title: Add Two Numbers
---

### 描述

You are given two linked lists representing two non-negative numbers. The digits are stored in reverse order and each of their nodes contain a single digit. Add the two numbers and return it as a linked list.

Input: `(2 -> 4 -> 3)` + `(5 -> 6 -> 4)`

Output: `7 -> 0 -> 8`

### 分析

跟 [Add Binary](../../simulation/add-binary.md) 很类似

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
// Add Two Numbers
// 跟Add Binary 很类似
// 时间复杂度O(m+n)，空间复杂度O(1)
public class Solution {
    public ListNode addTwoNumbers(ListNode l1, ListNode l2) {
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
};
```

</TabItem>
<TabItem value="cpp">

```cpp
// Add Two Numbers
// 跟Add Binary 很类似
// 时间复杂度O(m+n)，空间复杂度O(1)
class Solution {
public:
    ListNode *addTwoNumbers(ListNode *l1, ListNode *l2) {
        ListNode dummy(-1); // 头节点
        int carry = 0;
        ListNode *prev = &dummy;
        for (ListNode *pa = l1, *pb = l2;
             pa != nullptr || pb != nullptr;
             pa = pa == nullptr ? nullptr : pa->next,
             pb = pb == nullptr ? nullptr : pb->next,
             prev = prev->next) {
            const int ai = pa == nullptr ? 0 : pa->val;
            const int bi = pb == nullptr ? 0 : pb->val;
            const int value = (ai + bi + carry) % 10;
            carry = (ai + bi + carry) / 10;
            prev->next = new ListNode(value); // 尾插法
        }
        if (carry > 0)
            prev->next = new ListNode(carry);
        return dummy.next;
    }
};
```

</TabItem>
</Tabs>

### 相关题目

- [Add Binary](../../simulation/add-binary.md)
- [Add Strings](../../simulation/add-strings.md)
