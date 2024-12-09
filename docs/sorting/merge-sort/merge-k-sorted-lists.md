---
title: Merge k Sorted Lists
---

### 描述

Merge k sorted linked lists and return it as one sorted list. Analyze and describe its complexity.

### 分析

可以复用 [Merge Two Sorted Lists](merge-two-sorted-lists.md) 的函数

### 代码

#### 解法1: 直接调用 `mergeTwoLists()`

假设k条链表的总元素个数为`N`, 每条链表的平均长度为 `N/k`，由于每次调用`mergeTwoLists()`的时间复杂度为`O(N/k)`，总共调用k次，因此该算法时间复杂度为 `O(N)`。

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
// Merge k Sorted Lists
// 时间复杂度O(N)，空间复杂度O(1)
public class Solution {
    public ListNode mergeKLists(ListNode[] lists) {
        if (lists.length == 0) return null;

        ListNode p = lists[0];
        for (int i = 1; i < lists.length; i++) {
            p = mergeTwoLists(p, lists[i]);
        }
        return p;
    }

    // Merge Two Sorted Lists
    ListNode mergeTwoLists(ListNode l1, ListNode l2) {
        ListNode head = new ListNode(-1);
        for (ListNode p = head; l1 != null || l2 != null; p = p.next) {
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
        return head.next;
    }
}
```

</TabItem>
<TabItem value="cpp">

```cpp
// Merge k Sorted Lists
// 时间复杂度O(n1+n2+...)，空间复杂度O(1)
class Solution {
public:
    ListNode *mergeKLists(vector<ListNode *> &lists) {
        if (lists.empty()) return nullptr;

        ListNode *p = lists[0];
        for (int i = 1; i < lists.size(); i++) {
            p = mergeTwoLists(p, lists[i]);
        }
        return p;
    }

    // Merge Two Sorted Lists
    ListNode *mergeTwoLists(ListNode *l1, ListNode *l2) {
        ListNode head(-1);
        for (ListNode* p = &head; l1 != nullptr || l2 != nullptr; p = p->next) {
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
        return head.next;
    }
};
```

</TabItem>

<TabItem value="python">

```python
# Merge k Sorted Lists
# 时间复杂度O(N)，空间复杂度O(1)
class Solution:
    def mergeKLists(self, lists):
        if len(lists) == 0:
            return None

        p = lists[0]
        for i in range(1, len(lists)):
            p = self.mergeTwoLists(p, lists[i])
        return p

    # Merge Two Sorted Lists
    def mergeTwoLists(self, l1, l2):
        head = ListNode(-1)
        p = head
        while l1 is not None or l2 is not None:
            val1 = float('inf') if l1 is None else l1.val
            val2 = float('inf') if l2 is None else l2.val
            if val1 <= val2:
                p.next = l1
                l1 = l1.next
            else:
                p.next = l2
                l2 = l2.next
            p = p.next
        return head.next
```

</TabItem>
</Tabs>


#### 解法2: 两两调用 `mergeTwoLists()`

假设k条链表的总元素个数为`N`, 每条链表的平均长度为 `N/k`，

* 第1次循环中，k个链表个数减半，共调用了 `k/2` 次`mergeTwoLists()`，每次`mergeTwoLists()`时间复杂度为`N/k`，因此总时间复杂度为 $k/2 * N/k=N/2$；
* 第2次循环中，链表个数继续减半，变为 `k/4`，共调用了 `k/4` 次`mergeTwoLists()`，每次`mergeTwoLists()`时间复杂度为`2N/k`，因为上一轮把每条单链表的长度边长了，因此总时间复杂度为 $k/4 \times 2N/k=N/2$；
* 依此类推，第$\log{k}$次循环的时间复杂度为 $k/{2^{\log{k}}} \times 2^{\log{k}-1} \times N/k=N/2$

总的时间复杂度为 $\log{k} \times \frac{N}{2}$。

<Tabs
defaultValue="cpp"
values={[
{ label: 'Java', value: 'java', },
{ label: 'C++', value: 'cpp', },
]
}>
<TabItem value="java">

```java
// TODO
```

</TabItem>
<TabItem value="cpp">

```cpp
// Merge k Sorted Lists
// 时间复杂度O(logk*N/2)，空间复杂度O(1)
class Solution {
public:
    ListNode *mergeKLists(vector<ListNode *> &lists) {
        if (lists.empty()) return nullptr;

        while(lists.size() > 1){
            lists.push_back(mergeTwoLists(lists[0], lists[1]));
            lists.erase(lists.begin());
            lists.erase(lists.begin());
        }
        return lists.front();
    }

    // Merge Two Sorted Lists
    ListNode *mergeTwoLists(ListNode *l1, ListNode *l2) {
        ListNode head(-1);
        for (ListNode* p = &head; l1 != nullptr || l2 != nullptr; p = p->next) {
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
        return head.next;
    }
};
```

</TabItem>

<TabItem value="python">

```python
# Nothing to translate since the input is only a TODO comment
# TODO
```

</TabItem>
</Tabs>

#### 解法3: 小根堆

可以一次性合并k条链表，每次从k个元素中选一个最小的出来，这可以用堆来做，每个元素入堆的时间复杂度为`O(logk)`，因此总的时间复杂度为`O(Nlogk)`。


<Tabs
defaultValue="cpp"
values={[
{ label: 'Java', value: 'java', },
{ label: 'C++', value: 'cpp', },
]
}>
<TabItem value="java">

```java
// TODO
```

</TabItem>
<TabItem value="cpp">

```cpp
// Merge k Sorted Lists
// 时间复杂度O(Nlogk)，空间复杂度O(logk)

struct compare {
    bool operator()(const ListNode* l, const ListNode* r) {
        return l->val > r->val;
    }
};

class Solution {
public:

    ListNode *mergeKLists(vector<ListNode *> &lists) {
        if(lists.empty()) return nullptr;

        priority_queue<ListNode* , vector<ListNode *>, compare> pq;

        for (auto i : lists) {
            if(i) pq.push(i);
        }

        ListNode * dummy = new ListNode(-1);
        ListNode * tail =  dummy;
        while (!pq.empty()) {
            tail->next = pq.top();
            tail = tail->next;
            pq.pop();
            if(tail->next) {
                pq.push(tail->next);
            }
        }

        return dummy->next;
    }
};
```

</TabItem>

<TabItem value="python">

```python
# No code provided to translate. The input only contains a TODO comment.
#
# To translate Java code, please provide the actual Java source code.
```

</TabItem>
</Tabs>

### 相关题目

- [Merge Two Sorted Arrays](merge-two-sorted-arrays.md)
- [Merge Two Sorted Lists](merge-two-sorted-lists.md)
