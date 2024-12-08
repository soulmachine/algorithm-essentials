---
title: Subsets
---

### 描述

Given a set of distinct integers, `S`, return all possible subsets.

Note:

- Elements in a subset must be in non-descending order.
- The solution set must not contain duplicate subsets.

For example, If `S = [1,2,3]`, a solution is:

```
[
  [3],
  [1],
  [2],
  [1,2,3],
  [1,3],
  [2,3],
  [1,2],
  []
]
```

### 递归

#### 增量构造法

每个元素，都有两种选择，选或者不选。

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
// Subsets
// 增量构造法，深搜，时间复杂度O(2^n)，空间复杂度O(n)
public class Solution {
    public List<List<Integer>> subsets(int[] nums) {
        Arrays.sort(nums); // 输出要求有序
        List<List<Integer>> result = new ArrayList<>();
        List<Integer> path = new ArrayList<>();
        subsets(nums, path, 0, result);
        return result;
    }

    private static void subsets(int[] nums, List<Integer> path, int step,
                                List<List<Integer>> result) {
        if (step == nums.length) {
            result.add(new ArrayList<Integer>(path));
            return;
        }
        // 不选nums[step]
        subsets(nums, path, step + 1, result);
        // 选nums[step]
        path.add(nums[step]);
        subsets(nums, path, step + 1, result);
        path.remove(path.size() - 1);
    }
}
```

</TabItem>
<TabItem value="cpp">

```cpp
// Subsets
// 增量构造法，深搜，时间复杂度O(2^n)，空间复杂度O(n)
class Solution {
public:
    vector<vector<int> > subsets(vector<int> &S) {
        sort(S.begin(), S.end());  // 输出要求有序
        vector<vector<int> > result;
        vector<int> path;
        subsets(S, path, 0, result);
        return result;
    }

private:
    static void subsets(const vector<int> &S, vector<int> &path, int step,
            vector<vector<int> > &result) {
        if (step == S.size()) {
            result.push_back(path);
            return;
        }
        // 不选S[step]
        subsets(S, path, step + 1, result);
        // 选S[step]
        path.push_back(S[step]);
        subsets(S, path, step + 1, result);
        path.pop_back();
    }
};
```

</TabItem>

<TabItem value="python">

```python
# Subsets
# Incremental construction method, DFS, time complexity O(2^n), space complexity O(n)
def subsets(nums):
    nums.sort()  # output needs to be ordered
    result = []
    path = []
    _subsets(nums, path, 0, result)
    return result

def _subsets(nums, path, step, result):
    if step == len(nums):
        result.append(path[:])
        return
    # don't select nums[step]
    _subsets(nums, path, step + 1, result)
    # select nums[step]
    path.append(nums[step])
    _subsets(nums, path, step + 1, result)
    path.pop()
```

</TabItem>
</Tabs>

#### 位向量法

开一个位向量`bool selected[n]`，每个元素可以选或者不选。

<Tabs
defaultValue="java"
values={[
{ label: 'Java', value: 'java', },
{ label: 'C++', value: 'cpp', },
]
}>
<TabItem value="java">

```java
// Subsets
// 位向量法，深搜，时间复杂度O(2^n)，空间复杂度O(n)
public class Solution {
    public List<List<Integer>> subsets(int[] nums) {
        Arrays.sort(nums);  // 输出要求有序

        List<List<Integer>> result = new ArrayList<>();
        boolean[] selected = new boolean[nums.length];
        subsets(nums, selected, 0, result);
        return result;
    }

    private static void subsets(int[] nums, boolean[] selected, int step,
                        List<List<Integer>> result) {
        if (step == nums.length) {
            ArrayList<Integer> subset = new ArrayList<>();
            for (int i = 0; i < nums.length; i++) {
                if (selected[i]) subset.add(nums[i]);
            }
            result.add(subset);
            return;
        }
        // 不选S[step]
        selected[step] = false;
        subsets(nums, selected, step + 1, result);
        // 选S[step]
        selected[step] = true;
        subsets(nums, selected, step + 1, result);
    }
}
```

</TabItem>
<TabItem value="cpp">

```cpp
// Subsets
// 位向量法，深搜，时间复杂度O(2^n)，空间复杂度O(n)
class Solution {
public:
    vector<vector<int> > subsets(vector<int> &S) {
        sort(S.begin(), S.end());  // 输出要求有序

        vector<vector<int> > result;
        vector<bool> selected(S.size(), false);
        subsets(S, selected, 0, result);
        return result;
    }

private:
    static void subsets(const vector<int> &S, vector<bool> &selected, int step,
            vector<vector<int> > &result) {
        if (step == S.size()) {
            vector<int> subset;
            for (int i = 0; i < S.size(); i++) {
                if (selected[i]) subset.push_back(S[i]);
            }
            result.push_back(subset);
            return;
        }
        // 不选S[step]
        selected[step] = false;
        subsets(S, selected, step + 1, result);
        // 选S[step]
        selected[step] = true;
        subsets(S, selected, step + 1, result);
    }
};
```

</TabItem>

<TabItem value="python">

```python
# Subsets
# 位向量法，深搜，时间复杂度O(2^n)，空间复杂度O(n)
class Solution:
    def subsets(self, nums: list[int]) -> list[list[int]]:
        nums.sort()  # 输出要求有序
        result = []
        selected = [False] * len(nums)
        self._subsets(nums, selected, 0, result)
        return result

    def _subsets(self, nums: list[int], selected: list[bool], step: int, result: list[list[int]]) -> None:
        if step == len(nums):
            subset = []
            for i in range(len(nums)):
                if selected[i]:
                    subset.append(nums[i])
            result.append(subset)
            return
        # 不选S[step]
        selected[step] = False
        self._subsets(nums, selected, step + 1, result)
        # 选S[step]
        selected[step] = True
        self._subsets(nums, selected, step + 1, result)
```

</TabItem>
</Tabs>

### 迭代

#### 增量构造法

<Tabs
defaultValue="java"
values={[
{ label: 'Java', value: 'java', },
{ label: 'C++', value: 'cpp', },
]
}>
<TabItem value="java">

```java
// Subsets
// 迭代版，时间复杂度O(2^n)，空间复杂度O(1)
public class Solution {
    public List<List<Integer>> subsets(int[] nums) {
        Arrays.sort(nums); // 输出要求有序
        List<List<Integer>> result = new ArrayList<>();
        result.add(new ArrayList<>()); // empty subset
        for (int elem : nums) {
            final int n = result.size();
            for (int i = 0; i < n; ++i) { // copy itself
                result.add(new ArrayList<>(result.get(i)));
            }
            for (int i = n; i < result.size(); ++i) {
                result.get(i).add(elem);
            }
        }
        return result;
    }
}
```

</TabItem>
<TabItem value="cpp">

```cpp
// Subsets
// 迭代版，时间复杂度O(2^n)，空间复杂度O(1)
class Solution {
public:
    vector<vector<int> > subsets(vector<int> &S) {
        sort(S.begin(), S.end()); // 输出要求有序
        vector<vector<int> > result(1);
        for (auto elem : S) {
            result.reserve(result.size() * 2);
            auto half = result.begin() + result.size();
            copy(result.begin(), half, back_inserter(result));
            for_each(half, result.end(), [&elem](decltype(result[0]) &e){
                e.push_back(elem);
            });
        }
        return result;
    }
};
```

</TabItem>

<TabItem value="python">

```python
# Subsets
# Iterative version, time complexity O(2^n), space complexity O(1)
def subsets(nums):
    nums.sort() # output requires ordering
    result = [[]] # empty subset
    for elem in nums:
        n = len(result)
        for i in range(n): # copy itself
            result.append(result[i][:])
        for i in range(n, len(result)):
            result[i].append(elem)
    return result
```

</TabItem>
</Tabs>

#### 二进制法

本方法的前提是：集合的元素不超过 int 位数。用一个 int 整数表示位向量，第`i`位为 1，则表示选择`S[i]`，为 0 则不选择。例如 `S={A,B,C,D}`，则`0110=6`表示子集 `{B,C}`。

这种方法最巧妙。因为它不仅能生成子集，还能方便的表示集合的并、交、差等集合运算。设两个集合的位向量分别为$$B_1$$和$$B_2$$，则$$B_1\cup B_2, B_1 \cap B_2, B_1 \triangle B_2$$分别对应集合的并、交、对称差。

二进制法，也可以看做是位向量法，只不过更加优化。

<Tabs
defaultValue="java"
values={[
{ label: 'Java', value: 'java', },
{ label: 'C++', value: 'cpp', },
]
}>
<TabItem value="java">

```java
// Subsets
// 二进制法，时间复杂度O(2^n)，空间复杂度O(1)
public class Solution {
    public List<List<Integer>> subsets(int[] nums) {
        Arrays.sort(nums); // 输出要求有序
        List<List<Integer>> result = new ArrayList<>();
        final int n = nums.length;
        ArrayList<Integer> v = new ArrayList<>();

        for (int i = 0; i < 1 << n; i++) {
            for (int j = 0; j < n; j++) {
                if ((i & 1 << j) > 0) v.add(nums[j]);
            }
            result.add(new ArrayList<>(v));
            v.clear();
        }
        return result;
    }
}
```

</TabItem>
<TabItem value="cpp">

```cpp
// Subsets
// 二进制法，时间复杂度O(2^n)，空间复杂度O(1)
class Solution {
public:
    vector<vector<int> > subsets(vector<int> &S) {
        sort(S.begin(), S.end()); // 输出要求有序
        vector<vector<int> > result;
        const size_t n = S.size();
        vector<int> v;

        for (size_t i = 0; i < 1 << n; i++) {
            for (size_t j = 0; j < n; j++) {
                if (i & 1 << j) v.push_back(S[j]);
            }
            result.push_back(v);
            v.clear();
        }
        return result;
    }
};
```

</TabItem>

<TabItem value="python">

```python
# Subsets
# Binary method, time complexity O(2^n), space complexity O(1)
class Solution:
    def subsets(self, nums: list[int]) -> list[list[int]]:
        nums.sort()  # output needs to be ordered
        result = []
        n = len(nums)
        v = []

        for i in range(1 << n):
            for j in range(n):
                if (i & (1 << j)) > 0:
                    v.append(nums[j])
            result.append(v[:])
            v.clear()
        return result
```

</TabItem>
</Tabs>

### 相关题目

- [Subsets II](subsets-ii.md)
