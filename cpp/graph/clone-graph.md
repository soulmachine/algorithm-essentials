## Clone Graph


### 描述

Clone an undirected graph. Each node in the graph contains a `label` and a list of its `neighbours`.


OJ's undirected graph serialization:
Nodes are labeled uniquely.

We use `#` as a separator for each node, and `,` as a separator for node label and each neighbour of the node.
As an example, consider the serialized graph `{0,1,2#1,2#2,2}`.

The graph has a total of three nodes, and therefore contains three parts as separated by `#`.


1. First node is labeled as 0. Connect node 0 to both nodes 1 and 2.
1. Second node is labeled as 1. Connect node 1 to node 2.
1. Third node is labeled as 2. Connect node 2 to node 2 (itself), thus forming a self-cycle.

Visually, the graph looks like the following:

```
       1
      / \
     /   \
    0 --- 2
         / \
         \_/
```

### 分析

广度优先遍历或深度优先遍历都可以。


### DFS

{% if book.cpp %}
  {% codesnippet "./code/clone-graph-1.cpp", language="cpp" %}{% endcodesnippet %}
{% endif %}


### BFS

{% if book.cpp %}
  {% codesnippet "./code/clone-graph-2.cpp", language="cpp" %}{% endcodesnippet %}
{% endif %}
