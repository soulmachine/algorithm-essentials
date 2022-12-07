---
title: Number of Connected Components in an Undirected Graph
---

### 描述

TODO

### 分析

TODO

### 代码

#### 深搜

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
// TODO
```

</TabItem>
<TabItem value="cpp">

```cpp
// Number of Connected Components in an Undirected Graph
// Time complexity: O(E+V)
// Space complexity: O(E+V)
class Solution {
public:
    int countComponents(int n, vector<vector<int>>& edges) {
        if (n == 0) return 0;
      
        int components = 0;
        vector<bool> visited(n, false);
        vector<int> adjList[n];
    
        for (int i = 0; i < edges.size(); i++) {
            adjList[edges[i][0]].push_back(edges[i][1]);
            adjList[edges[i][1]].push_back(edges[i][0]);
        }

        for (int i = 0; i < n; i++) {
            if (!visited[i]) {
                components++;
                dfs(adjList, visited, i);
            }
        }
        return components;
    }

private:
    void dfs(const vector<int> adjList[], vector<bool> &visited, int src) {
        visited[src] = true;
        
        for (int neighbor : adjList[src]) {
            if (!visited[neighbor]) {
                dfs(adjList, visited, neighbor);
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

// Number of Connected Components in an Undirected Graph
// Time complexity: O(E*log*V)
// Space complexity: O(V)
class Solution {
public:
    int countComponents(int n, vector<vector<int>>& edges) {
        const int E = edges.size();
        DSU dsu(n);

        int components = n;
        for (int i = 0; i < E; i++) {
            components -= dsu.merge(edges[i][0], edges[i][1]);
        }
        return components;
    }
};
```

</TabItem>
</Tabs>

### 相关题目

- [Number of Provinces](number-of-provinces.md)
