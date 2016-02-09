## Flatten Binary Tree to Linked List


### 描述

Given a binary tree, flatten it to a linked list in-place.

For example, Given

```
         1
        / \
       2   5
      / \   \
     3   4   6
```

The flattened tree should look like:

```
   1
    \
     2
      \
       3
        \
         4
          \
           5
            \
             6
```

### 分析

无


### 递归版1

{% if book.cpp %}
  {% codesnippet "./code/flatten-binary-tree-to-linked-list-1.cpp", language="cpp" %}{% endcodesnippet %}
{% endif %}


### 递归版2

{% if book.cpp %}
  {% codesnippet "./code/flatten-binary-tree-to-linked-list-2.cpp", language="cpp" %}{% endcodesnippet %}
{% endif %}
