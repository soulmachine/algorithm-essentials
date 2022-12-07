---
title: Flatten a Multilevel Doubly Linked List
---

### 描述

TODO

### 分析

TODO

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
// Flatten a Multilevel Doubly Linked List
// Time complexity: O(n)
// Space complexity: O(n)
class Solution {
  public Node flatten(Node head) {
    if (head == null) return head;
    Node dummy = new Node(0, null, head, null);

    flattenDFS(dummy, head);

    // detach the dummy node from the real head
    dummy.next.prev = null;
    return dummy.next;
  }

  /* return the tail of the flatten list */
  private Node flattenDFS(Node prev, Node curr) {
    if (curr == null) return prev;
    curr.prev = prev;
    prev.next = curr;

    // store curr.next before recursive call
    Node tempNext = curr.next;

    Node tail = flattenDFS(curr, curr.child);
    curr.child = null;

    return flattenDFS(tail, tempNext);
  }
}
```

</TabItem>
<TabItem value="cpp">

```cpp
// TODO
```

</TabItem>
</Tabs>
