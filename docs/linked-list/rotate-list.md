---
title: Rotate List
---

### 描述

Given a list, rotate the list to the right by `k` places, where `k` is non-negative.

For example:
Given `1->2->3->4->5->nullptr` and `k = 2`, return `4->5->1->2->3->nullptr`.

### 分析

先遍历一遍，得出链表长度`len`，注意`k`可能大于`len`，因此令`k %= len`。将尾节点 next 指针指向首节点，形成一个环，接着往后跑`len-k`步，从这里断开，就是要求的结果了。

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
// Remove Rotate List
// 时间复杂度O(n)，空间复杂度O(1)
class Solution {
    public ListNode rotateRight(ListNode head, int k) {
        if (head == null || k == 0) return head;

        int len = 1;
        ListNode p = head;
        while (p.next != null) { // 求长度
            len++;
            p = p.next;
        }
        k = len - k % len;

        p.next = head; // 首尾相连
        for(int step = 0; step < k; step++) {
            p = p.next;  //接着往后跑
        }
        head = p.next; // 新的首节点
        p.next = null; // 断开环
        return head;
    }
};
```

</TabItem>
<TabItem value="cpp">

```cpp
// Remove Rotate List
// 时间复杂度O(n)，空间复杂度O(1)
class Solution {
public:
    ListNode *rotateRight(ListNode *head, int k) {
        if (head == nullptr || k == 0) return head;

        int len = 1;
        ListNode* p = head;
        while (p->next != nullptr) { // 求长度
            len++;
            p = p->next;
        }
        k = len - k % len;

        p->next = head; // 首尾相连
        for(int step = 0; step < k; step++) {
            p = p->next;  //接着往后跑
        }
        head = p->next; // 新的首节点
        p->next = nullptr; // 断开环
        return head;
    }
};
```

</TabItem>
<TabItem value="python">

```python
# Remove Rotate List
# 时间复杂度O(n)，空间复杂度O(1)
class Solution:
    def rotateRight(self, head, k):
        if head is None or k == 0: return head

        len = 1
        p = head
        while p.next: # 求长度
            len += 1
            p = p.next
        k = len - k % len

        p.next = head # 首尾相连
        for step in range(k):
            p = p.next # 接着往后跑
        head = p.next # 新的首节点
        p.next = None # 断开环
        return head
```

</TabItem>
</Tabs>
