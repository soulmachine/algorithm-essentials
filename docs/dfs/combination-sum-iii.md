---
title: Combination Sum III
---


### 描述

Find all possible combinations of `k` numbers that add up to a number `n`, given that only numbers from 1 to 9 can be used and each combination should be a unique set of numbers.

Ensure that numbers within the set are sorted in ascending order.

** Example 1**:

Input: `k`=3, `n`=7

Output: `[[1,2,4]]`

** Example 2**:

Input: `k`=3, `n`=9

Output: `[[1,2,6], [1,3,5], [2,3,4]]`


### 分析

这是一个多阶段问题，目标是求所有解，显然用深搜+剪枝，即回溯法。


### 代码

```java
// Combination Sum III
// Time Complexity: O(9*8*...*(10-k)), Space Complexity: O(k)
public class Solution {
    public List<List<Integer>> combinationSum3(int k, int n) {
        final List<List<Integer>> result = new ArrayList<>();
        final List<Integer> path = new ArrayList<>();
        dfs(k, n, path, result);
        return result;
    }

    private static void dfs(int step, int gap, List<Integer> path,
                            List<List<Integer>> result) {
        if (step == 0) {
            if (gap == 0) {
                result.add(new ArrayList<>(path));
            }
            return;
        }

        if (gap < 1) return;

        final int start = path.isEmpty() ? 1 : path.get(path.size() - 1)+1;
        for (int i = start; i < 10; ++i) {
            path.add(i);
            dfs(step - 1, gap - i, path, result);
            path.remove(path.size() - 1);
        }
    }
}
```

### 相关题目

* [Combination Sum](combination-sum.md)
* [Combination Sum II](combination-sum-ii.md)
