---
title: 单链表
---

本节主要讲关于单链表的算法。

单链表节点的定义如下：

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
// 单链表节点
public class ListNode {
    int val;
    ListNode next;
    ListNode(int x) { val = x; }
}
```

</TabItem>
<TabItem value="cpp">

```cpp
// 单链表节点
struct ListNode {
    int val;
    ListNode *next;
    ListNode(int x) : val(x), next(nullptr) { }
};
```

</TabItem>

<TabItem value="python">

```python
# 单链表节点
class ListNode:
    def __init__(self, x):
        self.val = x
        self.next = None
```

</TabItem>
</Tabs>
