---
title: Sparse Matrix Multiplication
---

### 描述

Given two sparse matrices `A` and `B`, return the result of `AB`.

You may assume that `A`'s column number is equal to `B`'s row number.

**Example**:

```python
A = [
  [ 1, 0, 0],
  [-1, 0, 3]
]

B = [
  [ 7, 0, 0 ],
  [ 0, 0, 0 ],
  [ 0, 0, 1 ]
]

     |  1 0 0 |   | 7 0 0 |   |  7 0 0 |
AB = | -1 0 3 | x | 0 0 0 | = | -7 0 3 |
                  | 0 0 1 |
```

**Constraints**:

- `1 <= A.length, B.length <= 100`
- `1 <= A[i].length, B[i].length <= 100`
- `-100 <= A[i][j], B[i][j] <= 100`

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
// Sparse Matrix Multiplication
// Time Complexity: O(m*n*p), Space Complexity: O(1)
public class Solution {
    public int[][] multiply(int[][] A, int[][] B) {
        int m = A.length, n = A[0].length, p = B[0].length;
        int[][] C = new int[m][p];

        for(int i = 0; i < m; i++) {
            for(int k = 0; k < n; k++) {
                if (A[i][k] != 0) {
                    for (int j = 0; j < p; j++) {
                        if (B[k][j] != 0) C[i][j] += A[i][k] * B[k][j];
                    }
                }
            }
        }
        return C;
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
# Sparse Matrix Multiplication
# Time Complexity: O(m*n*p), Space Complexity: O(1)
def multiply(A: list[list[int]], B: list[list[int]]) -> list[list[int]]:
    m, n, p = len(A), len(A[0]), len(B[0])
    C = [[0] * p for _ in range(m)]

    for i in range(m):
        for k in range(n):
            if A[i][k] != 0:
                for j in range(p):
                    if B[k][j] != 0:
                        C[i][j] += A[i][k] * B[k][j]
    return C
```

</TabItem>
</Tabs>
