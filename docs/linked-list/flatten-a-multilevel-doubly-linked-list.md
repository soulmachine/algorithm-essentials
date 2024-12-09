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
defaultValue="python"
values={[
{ label: 'Python', value: 'python', },
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

<TabItem value="python">

```python
# Flatten a Multilevel Doubly Linked List
# Time complexity: O(n)
# Space complexity: O(n)
class Node:
    def __init__(self, val=0, prev=None, next=None, child=None):
        self.val = val
        self.prev = prev
        self.next = next
        self.child = child

class Solution:
    def flatten(self, head: Node) -> Node:
        if not head:
            return head
        dummy = Node(0, None, head, None)

        self.flattenDFS(dummy, head)

        # detach the dummy node from the real head
        dummy.next.prev = None
        return dummy.next

    # return the tail of the flatten list
    def flattenDFS(self, prev: Node, curr: Node) -> Node:
        if not curr:
            return prev
        curr.prev = prev
        prev.next = curr

        # store curr.next before recursive call
        tempNext = curr.next

        tail = self.flattenDFS(curr, curr.child)
        curr.child = None

        return self.flattenDFS(tail, tempNext)
```

</TabItem>
</Tabs>
