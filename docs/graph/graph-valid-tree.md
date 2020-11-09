---
title: Graph Valid Tree
---

### 描述

Given `n` nodes labeled from 0 to `n-1` and a list of undirected edges (each edge is a pair of nodes), write a function to check whether these edges make up a valid tree.

`Example 1`:

> **Input**: n = 5, and edges = [[0,1], [0,2], [0,3], [1,4]]  
> **Output**: true

**Example 2**:

> **Input**: n = 5, and edges = [[0,1], [1,2], [2,3], [1,3], [1,4]]  
> **Output**: false

**Note**: you can assume that no duplicate edges will appear in edges. Since all edges are undirected, `[0,1]` is the same as `[1,0]` and thus will not appear together in edges.

### 分析

一个图是一颗树，当且仅当它满足如下两个条件：

- 图是全连通的。对于图中的任意两点，至少存在一条路径连接它俩。
- 图里没有环。对于图中的任意两点，有且仅有一条路径。

可以用 DFS 和 BFS 遍历图，在遍历的过程中检查是否满足上述两个条件。如果某个结点被访问了两次，说明存在环；遍历结束后，如果访问过的结点数量小于图中结点总数，说明图不是全连通的。

### DFS

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
<TabItem value="python">

```python
# Graph Valid Tree
# DFS
# Time Complexity: O(N+E), Space Complexity : O(N + E)
class Solution:
    def validTree(self, n: int, edges: List[List[int]]) -> bool:
        if len(edges) != n - 1: return False

        adj_list = [[] for _ in range(n)]
        for A, B in edges:
            adj_list[A].append(B)
            adj_list[B].append(A)

        stack = [0]
        visited = {0}

        while stack:
            node = stack.pop()
            for neighbour in adj_list[node]:
                if neighbour in visited: continue
                stack.append(neighbour)
                visited.add(neighbour)

        return len(visited) == n
```

</TabItem>
<TabItem value="java">

```java
// Graph Valid Tree
// DFS
// Time Complexity: O(N+E), Space Complexity : O(N + E)
class Solution {
    public boolean validTree(int n, int[][] edges) {
        if (edges.length != n - 1) return false;

        // Construct the adjacency list.
        List<List<Integer>> adjacencyList = new ArrayList<>();
        for (int i = 0; i < n; i++) {
            adjacencyList.add(new ArrayList<>());
        }
        for (int[] edge : edges) {
            adjacencyList.get(edge[0]).add(edge[1]);
            adjacencyList.get(edge[1]).add(edge[0]);
        }

        Stack<Integer> stack = new Stack<>();
        Set<Integer> visited = new HashSet<>();
        stack.push(0);
        visited.add(0);

        while (!stack.isEmpty()) {
            int node = stack.pop();
            for (int neighbour : adjacencyList.get(node)) {
                if (visited.contains(neighbour)) continue;
                stack.push(neighbour);
                visited.add(neighbour);
            }
        }

        return visited.size() == n;
    }
}
```

</TabItem>
<TabItem value="cpp">

```cpp
// Graph Valid Tree
// DFS
// Time Complexity: O(N+E), Space Complexity : O(N + E)
class Solution {
public:
    bool validTree(int n, vector<vector<int>>& edges) {
        if (edges.size() != n - 1) return false;

        // Construct the adjacency list.
        vector<vector<int>> adj_list(n);
        for (const vector<int>& edge : edges) {
            adj_list[edge[0]].push_back(edge[1]);
            adj_list[edge[1]].push_back(edge[0]);
        }

        stack<int> stack;
        unordered_set<int> visited;
        stack.push(0);
        visited.insert(0);

        while (!stack.empty()) {
            int node = stack.top(); stack.pop();
            for (int neighbour : adj_list[node]) {
                if (visited.count(neighbour)) continue;
                stack.push(neighbour);
                visited.insert(neighbour);
            }
        }

        return visited.size() == n;
    }
};
```

</TabItem>
</Tabs>

### BFS

<Tabs
defaultValue="python"
values={[
{ label: 'Python', value: 'python', },
{ label: 'Java', value: 'java', },
{ label: 'C++', value: 'cpp', },
]
}>
<TabItem value="python">

```python
# Graph Valid Tree
# BFS
# Time Complexity: O(N+E), Space Complexity : O(N + E)
class Solution:
    def validTree(self, n: int, edges: List[List[int]]) -> bool:
        if len(edges) != n - 1: return False

        adj_list = [[] for _ in range(n)]
        for A, B in edges:
            adj_list[A].append(B)
            adj_list[B].append(A)

        queue = deque([0])
        visited = {0}

        while queue:
            node = queue.popleft()
            for neighbour in adj_list[node]:
                if neighbour in visited: continue
                queue.append(neighbour)
                visited.add(neighbour)

        return len(visited) == n
```

</TabItem>
<TabItem value="java">

```java
// Graph Valid Tree
// BFS
// Time Complexity: O(N+E), Space Complexity : O(N + E)
class Solution {
    public boolean validTree(int n, int[][] edges) {
        if (edges.length != n - 1) return false;

        // Construct the adjacency list.
        List<List<Integer>> adjacencyList = new ArrayList<>();
        for (int i = 0; i < n; i++) {
            adjacencyList.add(new ArrayList<>());
        }
        for (int[] edge : edges) {
            adjacencyList.get(edge[0]).add(edge[1]);
            adjacencyList.get(edge[1]).add(edge[0]);
        }

        Queue<Integer> queue = new LinkedList<>();
        Set<Integer> visited = new HashSet<>();
        queue.offer(0);
        visited.add(0);

        while (!queue.isEmpty()) {
            int node = queue.poll();
            for (int neighbour : adjacencyList.get(node)) {
                if (visited.contains(neighbour)) continue;
                queue.offer(neighbour);
                visited.add(neighbour);
            }
        }

        return visited.size() == n;
    }
}
```

</TabItem>
<TabItem value="cpp">

```cpp
// Graph Valid Tree
// BFS
// Time Complexity: O(N+E), Space Complexity : O(N + E)
class Solution {
public:
    bool validTree(int n, vector<vector<int>>& edges) {
        if (edges.size() != n - 1) return false;

        // Construct the adjacency list.
        vector<vector<int>> adj_list(n);
        for (const vector<int>& edge : edges) {
            adj_list[edge[0]].push_back(edge[1]);
            adj_list[edge[1]].push_back(edge[0]);
        }

        queue<int> queue;
        unordered_set<int> visited;
        queue.push(0);
        visited.insert(0);

        while (!queue.empty()) {
            int node = queue.front(); queue.pop();
            for (int neighbour : adj_list[node]) {
                if (visited.count(neighbour)) continue;
                queue.push(neighbour);
                visited.insert(neighbour);
            }
        }

        return visited.size() == n;
    }
};
```

</TabItem>
</Tabs>
