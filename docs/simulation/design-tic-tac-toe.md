---
title: Design Tic-Tac-Toe
---

### 描述

TODO

### 分析

将玩家编号映射到1和-1，然后每次走的时候，就将其所在行、列、对角线记录的数值加上1或者-1，当某一行、列，对角线或逆对角线上的数字之和刚好等于n或者-n，说明该玩家获胜。

建立2个大小为n的一维数组`rows`和`cols`，用于记录每一行和每一列的和；还有两个整数变量`diag`和`rev_diag`，用来记录对角线和逆对角线的和，这样空间复杂度就是O(n)的。

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
// TODO
```

</TabItem>
<TabItem value="cpp">

```cpp
// Design Tic-Tac-Toe
// Time complexity: O(1)
// Space complexity: O(N)
class TicTacToe {
public:
    TicTacToe(int n): rows(n), cols(n), N(n), diag(0), rev_diag(0) {}

    int move(int row, int col, int player) {
        int add = player == 1 ? 1 : -1;
        rows[row] += add; 
        cols[col] += add;
        diag += (row == col ? add : 0);
        rev_diag += (row == N - col - 1 ? add : 0);
        return (abs(rows[row]) == N || abs(cols[col]) == N || abs(diag) == N || abs(rev_diag) == N) ? player : 0;
    }

private:
    vector<int> rows, cols;
    int diag, rev_diag, N;
};
```

</TabItem>

<TabItem value="python">

```python
# No translation needed - the input consists of only a Java comment "// TODO"
# The equivalent Python comment would be:
# TODO
```

</TabItem>
</Tabs>
