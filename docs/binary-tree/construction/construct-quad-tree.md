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
defaultValue="java"
values={[
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
</Tabs>
