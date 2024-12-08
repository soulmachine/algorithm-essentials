---
title: All Paths From Source to Target
---

### 描述

TODO

### 分析

TODO

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
// All Paths From Source to Target
// Time complexity: O(2^N * N)
// Space complexity: O(N)
class Solution {
 public:
  vector<vector<int>> allPathsSourceTarget(vector<vector<int>>& graph) {
    vector<int> path;
    path.push_back(0);
    dfs(graph, 0, graph.size() - 1, path);
    return result;
  }

  void dfs(const vector<vector<int>>& graph, int start, const int end, vector<int>& path) {
    if (start == end) {
      result.push_back(path);
      return;
    }

    for (int node : graph[start]) {
      path.push_back(node);
      dfs(graph, node, end, path);
      path.pop_back();
    }
  }

 private:
  vector<vector<int>> result;
};
```

</TabItem>

<TabItem value="python">

```python
# Empty program (no Java code was provided to translate)
```

</TabItem>
</Tabs>
