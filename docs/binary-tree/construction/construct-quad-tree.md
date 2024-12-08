---
title: Construct Quad Tree
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
// Construct Quad Tree
// Time complexity: O(N^2)
// Space complexity: O(N)
class Solution {
    public Node construct(int[][] grid) {
        return (grid.length == 0)? null : helper(grid, 0, 0, grid.length);
    }

    public Node helper(int[][] grid, int x, int y, int len){
        Node newNode = new Node(grid[x][y] != 0, true, null, null, null, null);
        int half = len / 2;

        if(len == 1) return newNode;

        Node topLeft = helper(grid, x, y, half);    
        Node topRight = helper(grid, x, y + half, half);
        Node bottomLeft = helper(grid, x + half, y, half);                            
        Node bottomRight = helper(grid, x + half, y + half, half);

        if(!topLeft.isLeaf || !topRight.isLeaf || !bottomLeft.isLeaf || !bottomRight.isLeaf
           || topLeft.val != topRight.val || topRight.val != bottomLeft.val 
                || bottomLeft.val != bottomRight.val){
            newNode.topLeft = topLeft;
            newNode.topRight = topRight;
            newNode.bottomLeft = bottomLeft;
            newNode.bottomRight = bottomRight;
            newNode.isLeaf = false;
        }
        return newNode;
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
# Construct Quad Tree
# Time complexity: O(N^2)
# Space complexity: O(N)
class Solution:
    def construct(self, grid: list[list[int]]) -> 'Node':
        return None if len(grid) == 0 else self.helper(grid, 0, 0, len(grid))

    def helper(self, grid: list[list[int]], x: int, y: int, length: int) -> 'Node':
        new_node = Node(grid[x][y] != 0, True, None, None, None, None)
        half = length // 2

        if length == 1:
            return new_node

        top_left = self.helper(grid, x, y, half)
        top_right = self.helper(grid, x, y + half, half)
        bottom_left = self.helper(grid, x + half, y, half)
        bottom_right = self.helper(grid, x + half, y + half, half)

        if (not top_left.isLeaf or not top_right.isLeaf or not bottom_left.isLeaf or not bottom_right.isLeaf
            or top_left.val != top_right.val or top_right.val != bottom_left.val
            or bottom_left.val != bottom_right.val):
            new_node.topLeft = top_left
            new_node.topRight = top_right
            new_node.bottomLeft = bottom_left
            new_node.bottomRight = bottom_right
            new_node.isLeaf = False
        return new_node
```

</TabItem>
</Tabs>
