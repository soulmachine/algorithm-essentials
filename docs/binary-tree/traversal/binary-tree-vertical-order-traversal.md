---
title: Binary Tree Vertical Order Traversal
---

### 描述

TODO

### 分析

设根节点的位置为0，对于任一非叶子节点，若其位置为`x`，设其左儿子的位置为`x-1`，右儿子位置为`x+1`。按照以上规则bfs遍历整棵树统计所有节点的位置，然后按位置从小到大输出所有节点。

### 代码

```cpp
// Binary Tree Vertical Order Traversal
// Time complexity: O(nlogn)
// Space complexity: O(n)
class Solution {
public:
    vector<vector<int>> verticalOrder(TreeNode* root) {
        vector<vector<int>> result;
        if (!root) return result;

        map<int, vector<int>> m;
        queue<pair<int, TreeNode*>> q;
        q.push({0, root});
        while (!q.empty()) {
            auto a = q.front(); q.pop();
            m[a.first].push_back(a.second->val);
            if (a.second->left) q.push({a.first - 1, a.second->left});
            if (a.second->right) q.push({a.first + 1, a.second->right});
        }
        for (auto a : m) {
            result.push_back(a.second);
        }
        return result;
    }
};
```
