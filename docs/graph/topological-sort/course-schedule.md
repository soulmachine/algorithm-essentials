---
title: Course Schedule
---

### 描述

TODO

### 分析

TODO

### 代码

import Tabs from "@theme/Tabs";
import TabItem from "@theme/TabItem";

#### BFS

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
// Course Schedule
// Time complexity: O(E+V)
// Space complexity: O(E+V)
class Solution {
public:
    bool canFinish(int numCourses, vector<vector<int>>& prerequisites) {
        vector<vector<int>> graph(numCourses, vector<int>()); // adjacent list
        vector<int> in(numCourses); // in degree
        for (auto p : prerequisites) {
            graph[p[1]].push_back(p[0]);
            ++in[p[0]];
        }
        queue<int> q;
        for (int i = 0; i < numCourses; ++i) {
            if (in[i] == 0) q.push(i);
        }
        while (!q.empty()) {
            int t = q.front(); q.pop();
            for (auto neighbor : graph[t]) {
                --in[neighbor];
                if (in[neighbor] == 0) q.push(neighbor);
            }
        }
        for (int i = 0; i < numCourses; ++i) {
            if (in[i] != 0) return false;
        }
        return true;
    }
};
```

</TabItem>

<TabItem value="python">

```python
# Empty line - nothing to translate since input only contains a comment saying "TODO"
```

</TabItem>
</Tabs>

### DFS

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
// Course Schedule
// Time complexity: O(E+V)
// Space complexity: O(E+V)
class Solution {
public:
    bool canFinish(int numCourses, vector<vector<int>>& prerequisites) {
        vector<vector<int>> graph(numCourses, vector<int>()); // // adjacent list
        vector<int> visited(numCourses); // 0, not visited; 1, visited; -1, cyclic
        for (auto p : prerequisites) {
            graph[p[1]].push_back(p[0]);
        }
        for (int i = 0; i < numCourses; ++i) {
            if (!canFinishDFS(graph, visited, i)) return false;
        }
        return true;
    }
    bool canFinishDFS(vector<vector<int>>& graph, vector<int>& visited, int i) {
        if (visited[i] == -1) return false;
        if (visited[i] == 1) return true;
        visited[i] = -1;
        for (auto neighbor : graph[i]) {
            if (!canFinishDFS(graph, visited, neighbor)) return false;
        }
        visited[i] = 1;
        return true;
    }
};
```

</TabItem>

<TabItem value="python">

```python
# Empty comment, nothing to translate since only "// TODO" was provided
```

</TabItem>
</Tabs>

### 相关题目

- [Course Schedule](course-schedule.md)
