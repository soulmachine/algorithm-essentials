---
title: Number of Provinces
---

### 描述

TODO

### 分析

无

### 代码

#### DFS

import Tabs from "@theme/Tabs";
import TabItem from "@theme/TabItem";

<Tabs
defaultValue="cpp"
values={[
{ label: 'Java', value: 'java', },
{ label: 'C++', value: 'cpp', },
]
}>
<TabItem value="java">

```java
// Number of Provinces
// Time complexity: O(N^2)
// Space complexity: O(N)
public class Solution {
    public int findCircleNum(int[][] isConnected) {
        final int N = isConnected.length;
        boolean[] visited = new boolean[N];
        int count = 0;
        for (int i = 0; i < N; i++) {
            if (!visited[i]) {
                dfs(isConnected, visited, i);
                count++;
            }
        }
        return count;
    }

    // visited the ith node
    private void dfs(int[][] isConnected, boolean[] visited, int i) {
        for (int j = 0; j < isConnected.length; j++) {
            if (isConnected[i][j] == 1 && !visited[j]) {
                visited[j] = true;
                dfs(isConnected, visited, j);
            }
        }
    }
}
```

</TabItem>
<TabItem value="cpp">

```cpp
// Number of Provinces
// Time complexity: O(N^2)
// Space complexity: O(N)
class Solution {
public:
    int findCircleNum(vector<vector<int>>& isConnected) {
        const int N = isConnected.size();
        vector<bool> visited(N, false);
        int count = 0;
        for (int i = 0; i < N; i++) {
            if (!visited[i]) {
                dfs(isConnected, visited, i);
                count++;
            }
        }
        return count;
    }
private:
    // visited the ith node
    void dfs(const vector<vector<int>>& isConnected, vector<bool>& visited, int i) {
        const int N = isConnected.size();
        for (int j = 0; j < N; j++) {
            if (isConnected[i][j] == 1 && !visited[j]) {
                visited[j] = true;
                dfs(isConnected, visited, j);
            }
        }
    }
};
```

</TabItem>
</Tabs>

#### 并查集

<Tabs
defaultValue="cpp"
values={[
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
class DSU {
// Plese copy from https://algorithm-essentials.soulmachine.me/graph/ufs/#union-by-rank
};

// Number of Provinces
// Time complexity: O(N^2*log*N)
// Space complexity: O(N)
class Solution {
public:
    int findCircleNum(vector<vector<int>>& isConnected) {
        const int N = isConnected.size();
        DSU dsu(N);
        int result = N; // number of provinces
        for (int i = 0; i < N; i++) {
            for (int j = 0; j < N; j++) {
                if (isConnected[i][j] == 1) {
                    result -= dsu.merge(i, j);
                }
            }
        }
        return result;
    }
};
```

</TabItem>
</Tabs>

### 相关题目

- [Number of Islands](number-of-islands.md)
- [Number of Connected Components in an Undirected Graph](number-of-connected-components-in-an-undirected-graph.md)
