---
title: Nearest Exit from Entrance in Maze
---

### 描述

TODO

### 分析

TODO

### 代码

import Tabs from "@theme/Tabs";
import TabItem from "@theme/TabItem";

<Tabs
defaultValue="cpp"
values={[
{ label: 'Python', value: 'python', },
{ label: 'Java', value: 'java', },
{ label: 'C++', value: 'cpp', },
]
}>
<TabItem value="python">

```python
# TODO
```

</TabItem>
<TabItem value="java">

```java
// TODO
```

</TabItem>
<TabItem value="cpp">

```cpp
// Nearest Exit from Entrance in Maze
// Time complexity: O(M * N)
// Space complexity: O(max(M, N))
class Solution {
public:
    int nearestExit(vector<vector<char>>& maze, vector<int>& entrance) {
        const int M = int(maze.size()), N = int(maze[0].size());
        // four directions: up, down, left, right
        vector<pair<int, int>> dirs = {{-1, 0}, {1, 0}, {0, -1}, {0, 1} };

        // the state in queue is <x, y, length>
        queue<array<int, 3>> queue;
        maze[entrance[0]][entrance[1]] = '+'; // mark as visted before enqueue
        queue.push({entrance[0], entrance[1], 0});

        while (!queue.empty()) {
            auto [i, j, d] = queue.front();
            queue.pop();
            // If this cell is an exit, return directly
            if ((i != entrance[0] || j != entrance[1]) && \
                (i == 0 || i == M - 1 || j == 0 || j == N - 1)) {
                return d;
            }

            for (auto dir : dirs) { // expand
                int next_i = i + dir.first, next_j = j + dir.second;

                // If there exists an unvisited empty neighbor:
                if (0 <= next_i && next_i < M && 0 <= next_j && next_j < N && \
                    maze[next_i][next_j] == '.') {
                    maze[next_i][next_j] = '+'; // mark as visted before enqueue
                    queue.push({next_i, next_j, d + 1});
                }
            }
        }

        return -1;
    }
};
```

</TabItem>
</Tabs>
