---
title: Insertion Sort List
---

### 描述

Sort a linked list using insertion sort.

### 分析

无

### 代码

import Tabs from "@theme/Tabs";
import TabItem from "@theme/TabItem";

<Tabs
defaultValue="python"
values={[
{ label: 'Python', value: 'python', },
{ label: 'Java', value: 'java', },
{ label: 'C++', value: 'cpp', },
]
}>
<TabItem value="java">

```java
// Insertion Sort List
// 时间复杂度O(n^2)，空间复杂度O(1)
public class Solution {
    public ListNode insertionSortList(ListNode head) {
        ListNode dummy = new ListNode(Integer.MIN_VALUE);
        //dummy.next = head;

        for (ListNode cur = head; cur != null;) {
            ListNode pos = findInsertPos(dummy, cur.val);
            ListNode tmp = cur.next;
            cur.next = pos.next;
            pos.next = cur;
            cur = tmp;
        }
        return dummy.next;
    }

    ListNode findInsertPos(ListNode head, int x) {
        ListNode pre = null;
        for (ListNode cur = head; cur != null && cur.val <= x;
             pre = cur, cur = cur.next)
            ;
        return pre;
    }
}
```

</TabItem>
<TabItem value="cpp">

```cpp
// Insertion Sort List
// 时间复杂度O(n^2)，空间复杂度O(1)
class Solution {
public:
    ListNode *insertionSortList(ListNode *head) {
        ListNode dummy(INT_MIN);
        //dummy.next = head;

        for (ListNode *cur = head; cur != nullptr;) {
            auto pos = findInsertPos(&dummy, cur->val);
            ListNode *tmp = cur->next;
            cur->next = pos->next;
            pos->next = cur;
            cur = tmp;
        }
        return dummy.next;
    }

    ListNode* findInsertPos(ListNode *head, int x) {
        ListNode *pre = nullptr;
        for (ListNode *cur = head; cur != nullptr && cur->val <= x;
            pre = cur, cur = cur->next)
            ;
        return pre;
    }
};
```

</TabItem>

<TabItem value="python">

```python
# Insertion Sort List
# Time complexity O(n^2), Space complexity O(1)
class Solution:
    def insertionSortList(self, head: ListNode) -> ListNode:
        dummy = ListNode(float('-inf'))
        #dummy.next = head
        
        cur = head
        while cur:
            pos = self.findInsertPos(dummy, cur.val)
            tmp = cur.next
            cur.next = pos.next
            pos.next = cur
            cur = tmp
        return dummy.next

    def findInsertPos(self, head: ListNode, x: int) -> ListNode:
        pre = None
        cur = head
        while cur and cur.val <= x:
            pre = cur
            cur = cur.next
        return pre
```

</TabItem>
</Tabs>

### 相关题目

- [Sort List](../merge-sort/sort-list.md)
