---
title: Path with Maximum Probability
---

### 描述

You are given an undirected weighted graph of `n` nodes (0-indexed), represented by an edge list where `edges[i] = [a, b]` is an undirected edge connecting the nodes a and b with a probability of success of traversing that edge `succProb[i]`.

Given two nodes `start` and `end`, find the path with the maximum probability of success to go from `start` to `end` and return its success probability.

If there is no path from `start` to `end`, **return 0**. Your answer will be accepted if it differs from the correct answer by at most **1e-5**.

**Example 1**:

![](/img/path-with-maximum-probability-example-1.png)

> **Input**: n = 3, edges = [[0,1],[1,2],[0,2]], succProb = [0.5,0.5,0.2], start = 0, end = 2  
> **Output**: 0.25000  
> **Explanation**: There are two paths from start to end, one having a probability of success = 0.2 and the other has 0.5 \* 0.5 = 0.25.

**Example 2**:

![](/img/path-with-maximum-probability-example-2.png)

> **Input**: n = 3, edges = [[0,1],[1,2],[0,2]], succProb = [0.5,0.5,0.3], start = 0, end = 2  
> **Output**: 0.30000

**Example 3**:

![](/img/path-with-maximum-probability-example-3.png)

> **Input**: n = 3, edges = [[0,1]], succProb = [0.5], start = 0, end = 2  
> **Output**: 0.00000  
> **Explanation**: There is no path between 0 and 2.

**Constraints**:

- $2 <= n <= 10^4$
- $0 \leq \text{start}, \text{end} < n$
- start != end
- $0 \leq a, b < n$
- a != b
- $0 \leq \text{succProb.length} = \text{edges.length} \leq 2 \times 10^4$
- $0 \leq \text{succProb}[i] \leq 1$
- There is at most one edge between every two nodes.

### 分析

由于每条边的概率是介于[0,1]之间的正数，且路径上的概率是累乘起来的，那么对原图`G`中的每条边的权重取对数然后取反，就得到了一个边权在$[0, \infty)$之间的图`G'`，图`G`中“从起点到终点**成功概率最大**”的路径对应了图`G'`中“从起点到终点**边权之和最小**”的路径。由于图`G'`中没有负数边权，用 Dijkstra 算法最合适不过了。

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
// Path with Maximum Probability
// Dijkstra
// Time Complexity: O(ElogN), Space Complexity: O(N + E)
class Solution {
    public double maxProbability(int n, int[][] edges, double[] succProb, int start, int end) {
        // adjacency list, map<vertex_id, map<vertex_id, weight>>
        Map<Integer, Map<Integer, Double>> graph = new HashMap<>();
        for (int i = 0; i < edges.length; i++) {
            int[] edge = edges[i];
            double w = -Math.log(succProb[i]);
            // Undirected
            graph.putIfAbsent(edge[0], new HashMap<>());
            graph.get(edge[0]).put(edge[1], w);
            graph.putIfAbsent(edge[1], new HashMap<>());
            graph.get(edge[1]).put(edge[0], w);
        }

        Map<Integer, Double> dist = dijkstra(graph, start);

        return dist.containsKey(end) ? Math.exp(-dist.get(end)) : 0;
    }

    /** Standard Dijkstra algorithm.
     *
     @param graph Adjacency list, map<vertex_id, map<vertex_id, weight>>.
     @param start The starting vertex ID.
     @return dist, map<vertex_id, distance>.
     */
    private static Map<Integer, Double> dijkstra(Map<Integer, Map<Integer, Double>> graph, int start) {
        // map<vertex_id, distance>
        Map<Integer, Double> dist = new HashMap<>();
        // vertex_id -> father_vertex_id
        Map<Integer, Integer> father = new HashMap<>();

        // pair<distance, vertex_id>, min heap, sorted by distance from start to vertex_id
        Queue<Pair<Double, Integer>> pq = new PriorityQueue<>((a, b) -> Double.compare(a.getKey(), b.getKey()));

        // from start to start itself
        pq.offer(new Pair(0.0, start));
        dist.put(start, 0.0);

        while(!pq.isEmpty()){
            final int u = pq.poll().getValue();
            if (!graph.containsKey(u)) continue; // leaf node

            for(int v : graph.get(u).keySet()){
                final double w = graph.get(u).get(v);
                if (!dist.containsKey(v) || dist.get(u)+ w < dist.get(v)) {
                    final double shorter = dist.get(u)+ w;
                    dist.put(v, shorter);
                    father.put(v, u);
                    pq.offer(new Pair(shorter, v));
                }
            }
        }

        return dist;
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
# Path with Maximum Probability
# Dijkstra
# Time Complexity: O(ElogN), Space Complexity: O(N + E)
from collections import defaultdict
import heapq
import math

class Solution:
    def maxProbability(self, n: int, edges: list[list[int]], succProb: list[float], start: int, end: int) -> float:
        # adjacency list, dict<vertex_id, dict<vertex_id, weight>>
        graph = defaultdict(dict)
        for i, edge in enumerate(edges):
            w = -math.log(succProb[i])
            # Undirected
            graph[edge[0]][edge[1]] = w
            graph[edge[1]][edge[0]] = w

        dist = self.dijkstra(graph, start)
        return math.exp(-dist[end]) if end in dist else 0

    def dijkstra(self, graph, start):
        """Standard Dijkstra algorithm.

        Args:
            graph: Adjacency list, dict<vertex_id, dict<vertex_id, weight>>.
            start: The starting vertex ID.
        Returns:
            dist: dict<vertex_id, distance>.
        """
        # dict<vertex_id, distance>
        dist = {}
        # vertex_id -> father_vertex_id
        father = {}

        # tuple(distance, vertex_id), min heap, sorted by distance from start to vertex_id
        pq = [(0.0, start)]
        dist[start] = 0.0

        while pq:
            _, u = heapq.heappop(pq)
            if u not in graph:  # leaf node
                continue

            for v, w in graph[u].items():
                if v not in dist or dist[u] + w < dist[v]:
                    shorter = dist[u] + w
                    dist[v] = shorter
                    father[v] = u
                    heapq.heappush(pq, (shorter, v))

        return dist
```

</TabItem>
</Tabs>

### 相关题目

- [Network Delay Time](network-delay-time.md)
