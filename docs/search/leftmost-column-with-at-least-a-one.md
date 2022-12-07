---
title: Leftmost Column with at Least a One
---

### 描述

TODO

### 分析

TODO

### 代码

#### 暴力扫描

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
class Solution {
    public int leftMostColumnWithOne(BinaryMatrix binaryMatrix) {
        int rows = binaryMatrix.dimensions().get(0);
        int cols = binaryMatrix.dimensions().get(1);

        // Set pointers to the top-right corner.
        int currentRow = 0;
        int currentCol = cols - 1;
    
        // Repeat the search until it goes off the grid.
        while (currentRow < rows && currentCol >= 0) {
            if (binaryMatrix.get(currentRow, currentCol) == 0) {
                currentRow++;
            } else {
                currentCol--; 
            }
        }
    
        // If we never left the last column, this is because it was all 0's.
        return (currentCol == cols - 1) ? -1 : currentCol + 1;
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

#### 二分法

<Tabs
defaultValue="java"
values={[
{ label: 'Java', value: 'java', },
{ label: 'C++', value: 'cpp', },
]
}>
<TabItem value="java">

```java
class Solution {
    public int leftMostColumnWithOne(BinaryMatrix binaryMatrix) {
        List<Integer> di = binaryMatrix.dimensions();
        final int m = di.get(0);
        final int n = di.get(1);
        int left = 0;
        int right = n - 1;
        int result = -1;
        while (left <= right) {
            int mid = left + (right - left) / 2;
            if (checkColumn(binaryMatrix, m, mid)) {
                result = mid;
                right = mid - 1;
            } else {
                left = mid + 1;
            }
        }
        return result;
    }

    private boolean checkColumn(BinaryMatrix binaryMatrix, int m, int j) {
        for (int r = 0; r < m; r++) {
            if (binaryMatrix.get(r, j) == 1) {
                return true;
            }
        }
        return false;
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
