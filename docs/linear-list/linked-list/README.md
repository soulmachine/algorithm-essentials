---
title: 节点定义
---

本节主要讲关于单链表的算法。

单链表节点的定义如下：

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
</Tabs>
