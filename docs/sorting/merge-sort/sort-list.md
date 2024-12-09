---
title: Sort List
---

### 描述

Sort a singly linked list.

### 分析

常数空间且`O(nlogn)`，单链表适合用归并排序，双向链表适合用快速排序。本题可以复用 [Merge Two Sorted Lists](merge-two-sorted-lists.md) 的代码。

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
// Sort List
// 归并排序，时间复杂度O(nlogn)，空间复杂度O(logn)
public class Solution {
    public ListNode sortList(ListNode head) {
        if (head == null || head.next == null)return head;

        final ListNode middle = findMiddle(head);
        final ListNode head2 = middle.next;
        middle.next = null; // 断开

        final ListNode l1 = sortList(head);  // 前半段排序
        final ListNode l2 = sortList(head2);  // 后半段排序
        return mergeTwoLists(l1, l2);
    }

    // Merge Two Sorted Lists
    private static ListNode mergeTwoLists(ListNode l1, ListNode l2) {
        ListNode dummy = new ListNode(-1);
        for (ListNode p = dummy; l1 != null || l2 != null; p = p.next) {
            int val1 = l1 == null ? Integer.MAX_VALUE : l1.val;
            int val2 = l2 == null ? Integer.MAX_VALUE : l2.val;
            if (val1 <= val2) {
                p.next = l1;
                l1 = l1.next;
            } else {
                p.next = l2;
                l2 = l2.next;
            }
        }
        return dummy.next;
    }
    // 快慢指针找到中间节点
    private static ListNode findMiddle(ListNode head) {
        if (head == null) return null;

        ListNode slow = head;
        ListNode fast = head.next;

        while (fast != null && fast.next != null) {
            slow = slow.next;
            fast = fast.next.next;
        }
        return slow;
    }
}
```

</TabItem>
<TabItem value="cpp">

```cpp
// Sort List
// 归并排序，时间复杂度O(nlogn)，空间复杂度O(logn)
class Solution {
public:
    ListNode *sortList(ListNode *head) {
        if (head == NULL || head->next == NULL)return head;

        ListNode *middle = findMiddle(head);
        ListNode *head2 = middle->next;
        middle->next = nullptr; // 断开

        ListNode *l1 = sortList(head);  // 前半段排序
        ListNode *l2 = sortList(head2);  // 后半段排序
        return mergeTwoLists(l1, l2);
    }
private:
    // Merge Two Sorted Lists
    static ListNode *mergeTwoLists(ListNode *l1, ListNode *l2) {
        ListNode dummy(-1);
        for (ListNode* p = &dummy; l1 != nullptr || l2 != nullptr; p = p->next) {
            int val1 = l1 == nullptr ? INT_MAX : l1->val;
            int val2 = l2 == nullptr ? INT_MAX : l2->val;
            if (val1 <= val2) {
                p->next = l1;
                l1 = l1->next;
            } else {
                p->next = l2;
                l2 = l2->next;
            }
        }
        return dummy.next;
    }
    // 快慢指针找到中间节点
    static ListNode* findMiddle(ListNode* head) {
        if (head == nullptr) return nullptr;

        ListNode *slow = head;
        ListNode *fast = head->next;

        while (fast != nullptr && fast->next != nullptr) {
            slow = slow->next;
            fast = fast->next->next;
        }
        return slow;
    }
};
```

</TabItem>

<TabItem value="python">

```python
# Sort List
# 归并排序，时间复杂度O(nlogn)，空间复杂度O(logn)
class Solution:
    def sortList(self, head):
        if not head or not head.next:
            return head

        middle = self.findMiddle(head)
        head2 = middle.next
        middle.next = None # 断开

        l1 = self.sortList(head)  # 前半段排序
        l2 = self.sortList(head2) # 后半段排序
        return self.mergeTwoLists(l1, l2)

    # Merge Two Sorted Lists
    @staticmethod
    def mergeTwoLists(l1, l2):
        dummy = ListNode(-1)
        p = dummy
        while l1 or l2:
            val1 = float('inf') if not l1 else l1.val
            val2 = float('inf') if not l2 else l2.val
            if val1 <= val2:
                p.next = l1
                l1 = l1.next
            else:
                p.next = l2
                l2 = l2.next
            p = p.next
        return dummy.next

    # 快慢指针找到中间节点
    @staticmethod
    def findMiddle(head):
        if not head:
            return None

        slow = head
        fast = head.next

        while fast and fast.next:
            slow = slow.next
            fast = fast.next.next
        return slow
```

</TabItem>
</Tabs>

### 相关题目

- [Insertion Sort List](../insertion-sort/insertion-sort-list.md)
