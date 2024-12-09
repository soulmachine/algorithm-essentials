---
title: Subsets II
---

### 描述

Given a collection of integers that might contain duplicates, `S`, return all possible subsets.

Note:

Elements in a subset must be in non-descending order.
The solution set must not contain duplicate subsets.
For example,
If `S = [1,2,2]`, a solution is:

```
[
  [2],
  [1],
  [1,2,2],
  [2,2],
  [1,2],
  []
]
```

### 分析

这题有重复元素，但本质上，跟上一题很类似，上一题中元素没有重复，相当于每个元素只能选 0 或 1 次，这里扩充到了每个元素可以选 0 到若干次而已。

### 递归

#### 增量构造法

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
// Subsets II
// 增量构造法，版本1，时间复杂度O(2^n)，空间复杂度O(n)
public class Solution {
    public List<List<Integer>> subsetsWithDup(int[] nums) {
        Arrays.sort(nums);  // 必须排序

        List<List<Integer>> result = new ArrayList<>();
        List<Integer> path = new ArrayList<>();

        dfs(nums, 0, path, result);
        return result;
    }

    private static void dfs(int[] nums, int start, List<Integer> path,
                            List<List<Integer>> result) {
        result.add(new ArrayList<Integer>(path));

        for (int i = start; i < nums.length; i++) {
            if (i != start && nums[i] == nums[i-1]) continue;
            path.add(nums[i]);
            dfs(nums, i + 1, path, result);
            path.remove(path.size() - 1);
        }
    }
}
```

</TabItem>
<TabItem value="cpp">

```cpp
// Subsets II
// 增量构造法，版本1，时间复杂度O(2^n)，空间复杂度O(n)
class Solution {
public:
    vector<vector<int> > subsetsWithDup(vector<int> &S) {
        sort(S.begin(), S.end());  // 必须排序

        vector<vector<int> > result;
        vector<int> path;

        dfs(S, S.begin(), path, result);
        return result;
    }

private:
    static void dfs(const vector<int> &S, vector<int>::iterator start,
            vector<int> &path, vector<vector<int> > &result) {
        result.push_back(path);

        for (auto i = start; i < S.end(); i++) {
            if (i != start && *i == *(i-1)) continue;
            path.push_back(*i);
            dfs(S, i + 1, path, result);
            path.pop_back();
        }
    }
};
```

</TabItem>

<TabItem value="python">

```python
# Subsets II
# 增量构造法，版本1，时间复杂度O(2^n)，空间复杂度O(n)
def subsetsWithDup(nums: list[int]) -> list[list[int]]:
    nums.sort()  # 必须排序

    def dfs(start: int, path: list[int], result: list[list[int]]):
        result.append(path[:])

        for i in range(start, len(nums)):
            if i != start and nums[i] == nums[i-1]:
                continue
            path.append(nums[i])
            dfs(i + 1, path, result)
            path.pop()

    result = []
    path = []
    dfs(0, path, result)
    return result
```

</TabItem>
</Tabs>

增量构造法，版本 2

<Tabs
defaultValue="java"
values={[
{ label: 'Java', value: 'java', },
{ label: 'C++', value: 'cpp', },
]
}>
<TabItem value="java">

```java
// Subsets II
// 增量构造法，版本2，时间复杂度O(2^n)，空间复杂度O(n)
public class Solution {
    public List<List<Integer>> subsetsWithDup(int[] nums) {
        Arrays.sort(nums);  // 必须排序
        List<List<Integer>> result = new ArrayList<>();
        List<Integer> path = new ArrayList<>(); // 中间结果

        // 记录每个元素的出现次数
        HashMap<Integer, Integer> counterMap = new HashMap<>();
        for (int i : nums) {
            counterMap.put(i, counterMap.getOrDefault(i, 0) + 1);
        }
        // 将HashMap里的pair拷贝到一个数组里
        Pair[] counters = new Pair[counterMap.size()];
        int i = 0;
        for (Map.Entry<Integer, Integer> entry : counterMap.entrySet()) {
            counters[i++] = new Pair(entry.getKey(), entry.getValue());
        }
        Arrays.sort(counters);

        dfs(counters, 0, path, result);
        return result;
    }

    private static void dfs(Pair[] counters, int step, List<Integer> path,
                        List<List<Integer>> result) {
        if (step == counters.length) {
            result.add(new ArrayList<>(path));
            return;
        }

        for (int i = 0; i <= counters[step].value; i++) {
            for (int j = 0; j < i; ++j) {
                path.add(counters[step].key);
            }
            dfs(counters, step + 1, path, result);
            for (int j = 0; j < i; ++j) {
                path.remove(path.size() - 1);
            }
        }
    }

    static class Pair implements Comparable<Pair> {
        int key;
        int value;
        public Pair(int key, int value) {
            this.key = key;
            this.value = value;
        }
        @Override
        public int compareTo(Pair o) {
            if (this.key < o.key) return -1;
            else if (this.key > o.key) return 1;
            else {
                return this.value - o.value;
            }
        }
    }
}
```

</TabItem>
<TabItem value="cpp">

```cpp
// Subsets II
// 增量构造法，版本2，时间复杂度O(2^n)，空间复杂度O(n)
class Solution {
public:
    vector<vector<int> > subsetsWithDup(vector<int> &nums) {
        vector<vector<int> > result;
        sort(nums.begin(), nums.end()); // 必须排序

        unordered_map<int, int> count_map; // 记录每个元素的出现次数
        for (int i : nums) {
            if (count_map.find(i) != count_map.end())
                count_map[i]++;
            else
                count_map[i] = 1;
        }

        // 将map里的pair拷贝到一个vector里
        vector<pair<int, int> > elems;
        for (auto p : count_map) {
            elems.push_back(p);
        }
        sort(elems.begin(), elems.end());
        vector<int> path; // 中间结果

        dfs(elems, 0, path, result);
        return result;
    }

private:
    static void dfs(const vector<pair<int, int> > &elems,
            size_t step, vector<int> &path, vector<vector<int> > &result) {
        if (step == elems.size()) {
            result.push_back(path);
            return;
        }

        for (int i = 0; i <= elems[step].second; i++) {
            for (int j = 0; j < i; ++j) {
                path.push_back(elems[step].first);
            }
            dfs(elems, step + 1, path, result);
            for (int j = 0; j < i; ++j) {
                path.pop_back();
            }
        }
    }
};
```

</TabItem>

<TabItem value="python">

```python
# Subsets II
# 增量构造法，版本2，时间复杂度O(2^n)，空间复杂度O(n)
class Solution:
    def subsetsWithDup(self, nums):
        nums.sort()  # 必须排序
        result = []
        path = []  # 中间结果

        # 记录每个元素的出现次数
        counter_map = {}
        for i in nums:
            counter_map[i] = counter_map.get(i, 0) + 1

        # 将HashMap里的pair拷贝到一个数组里
        counters = []
        for key, value in counter_map.items():
            counters.append(Pair(key, value))
        counters.sort()

        def dfs(counters, step, path, result):
            if step == len(counters):
                result.append(path[:])
                return

            for i in range(counters[step].value + 1):
                for j in range(i):
                    path.append(counters[step].key)
                dfs(counters, step + 1, path, result)
                for j in range(i):
                    path.pop()

        dfs(counters, 0, path, result)
        return result

class Pair:
    def __init__(self, key, value):
        self.key = key
        self.value = value

    def __lt__(self, other):
        if self.key < other.key:
            return True
        elif self.key > other.key:
            return False
        else:
            return self.value < other.value
```

</TabItem>
</Tabs>

#### 位向量法

<Tabs
defaultValue="java"
values={[
{ label: 'Java', value: 'java', },
{ label: 'C++', value: 'cpp', },
]
}>
<TabItem value="java">

```java
// Subsets II
// 位向量法，时间复杂度O(2^n)，空间复杂度O(n)
public class Solution {
    public List<List<Integer>> subsetsWithDup(int[] nums) {
        Arrays.sort(nums);  // 必须排序
        List<List<Integer>> result = new ArrayList<>();
        // 记录每个元素的出现次数
        HashMap<Integer, Integer> counterMap = new HashMap<>();
        for (int i : nums) {
            counterMap.put(i, counterMap.getOrDefault(i, 0) + 1);
        }
        // 将HashMap里的pair拷贝到一个数组里
        Pair[] counters = new Pair[counterMap.size()];
        int i = 0;
        for (Map.Entry<Integer, Integer> entry : counterMap.entrySet()) {
            counters[i++] = new Pair(entry.getKey(), entry.getValue());
        }
        Arrays.sort(counters);

        // 每个元素选择了多少个
        HashMap<Integer, Integer> selected = new HashMap<>();
        for (Pair p : counters) {
            selected.put(p.key, 0 );
        }

        dfs(nums, counters, selected, 0, result);
        return result;
    }

    private static void dfs(int[] nums, Pair[] counters, HashMap<Integer, Integer> selected,
                            int step, List<List<Integer>> result) {
        if (step == counters.length) {
            ArrayList<Integer> subset = new ArrayList<>();
            for (Pair p : counters) {
                for (int i = 0; i < selected.get(p.key); ++i) {
                    subset.add(p.key);
                }
            }
            result.add(subset);
            return;
        }

        for (int i = 0; i <= counters[step].value; i++) {
            selected.put(counters[step].key, i);
            dfs(nums, counters, selected, step + 1, result);
        }
    }
    static class Pair implements Comparable<Pair> {
        int key;
        int value;
        public Pair(int key, int value) {
            this.key = key;
            this.value = value;
        }

        @Override
        public int compareTo(Pair o) {
            if (this.key < o.key) return -1;
            else if (this.key > o.key) return 1;
            else {
                return this.value - o.value;
            }
        }
    }
}
```

</TabItem>
<TabItem value="cpp">

```cpp
// Subsets II
// 位向量法，时间复杂度O(2^n)，空间复杂度O(n)
class Solution {
public:
    vector<vector<int> > subsetsWithDup(vector<int> &nums) {
        vector<vector<int> > result; // 必须排序
        sort(nums.begin(), nums.end());
        // 记录每个元素的出现次数
        unordered_map<int, int> count_map;
        for (int i : nums) {
            if (count_map.find(i) != count_map.end())
                count_map[i]++;
            else
                count_map[i] = 1;
        }
        // 将map里的pair拷贝到一个vector里
        vector<pair<int, int> > counters;
        for (auto p : count_map) {
            counters.push_back(p);
        }
        sort(counters.begin(), counters.end());

        // 每个元素选择了多少个
        unordered_map<int, int> selected;
        for (auto p : counters) {
            selected[p.first] = 0;
        }

        dfs(nums, counters, selected, 0, result);
        return result;
    }

private:
    static void dfs(const vector<int> &S, const vector<pair<int, int> >& counters,
            unordered_map<int, int>& selected, size_t step, vector<vector<int> > &result) {
        if (step == counters.size()) {
            vector<int> subset;
            for (auto p : counters) {
                for (int i = 0; i < selected[p.first]; ++i) {
                    subset.push_back(p.first);
                }
            }
            result.push_back(subset);
            return;
        }

        for (int i = 0; i <= counters[step].second; i++) {
            selected[counters[step].first] = i;
            dfs(S, counters, selected, step + 1, result);
        }
    }
};
```

</TabItem>

<TabItem value="python">

```python
# Subsets II
# 位向量法，时间复杂度O(2^n)，空间复杂度O(n)
from collections import defaultdict
from dataclasses import dataclass
from typing import List

@dataclass
class Pair:
    key: int
    value: int

    def __lt__(self, other):
        if self.key < other.key:
            return True
        elif self.key > other.key:
            return False
        else:
            return self.value < other.value

class Solution:
    def subsetsWithDup(self, nums: List[int]) -> List[List[int]]:
        nums.sort()  # 必须排序
        result = []
        # 记录每个元素的出现次数
        counter_map = defaultdict(int)
        for i in nums:
            counter_map[i] += 1

        # 将HashMap里的pair拷贝到一个数组里
        counters = []
        for key, value in counter_map.items():
            counters.append(Pair(key, value))
        counters.sort()

        # 每个元素选择了多少个
        selected = {p.key: 0 for p in counters}

        def dfs(nums: List[int], counters: List[Pair], selected: dict,
                step: int, result: List[List[int]]) -> None:
            if step == len(counters):
                subset = []
                for p in counters:
                    subset.extend([p.key] * selected[p.key])
                result.append(subset)
                return

            for i in range(counters[step].value + 1):
                selected[counters[step].key] = i
                dfs(nums, counters, selected, step + 1, result)

        dfs(nums, counters, selected, 0, result)
        return result
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
// Subsets II
// 增量构造法
// 时间复杂度O(2^n)，空间复杂度O(1)
public class Solution {
    public List<List<Integer>> subsetsWithDup(int[] nums) {
        Arrays.sort(nums);  // 必须排序
        List<List<Integer>> result = new ArrayList<>();
        result.add(new ArrayList<Integer>());

        int previous_size = 0;
        for (int i = 0; i < nums.length; ++i) {
            final int size = result.size();
            for (int j = 0; j < size; ++j) {
                if (i == 0 || nums[i] != nums[i-1] || j >= previous_size) {
                    result.add(new ArrayList<>(result.get(j)));
                    result.get(result.size() - 1).add(nums[i]);
                }
            }
            previous_size = size;
        }
        return result;
    }
}
```

</TabItem>
<TabItem value="cpp">

```cpp
// Subsets II
// 增量构造法
// 时间复杂度O(2^n)，空间复杂度O(1)
class Solution {
public:
    vector<vector<int> > subsetsWithDup(vector<int> &S) {
        sort(S.begin(), S.end()); // 必须排序
        vector<vector<int> > result(1);

        size_t previous_size = 0;
        for (size_t i = 0; i < S.size(); ++i) {
            const size_t size = result.size();
            for (size_t j = 0; j < size; ++j) {
                if (i == 0 || S[i] != S[i-1] || j >= previous_size) {
                    result.push_back(result[j]);
                    result.back().push_back(S[i]);
                }
            }
            previous_size = size;
        }
        return result;
    }
};
```

</TabItem>

<TabItem value="python">

```python
# Subsets II
# Incremental construction method
# Time complexity O(2^n), Space complexity O(1)
class Solution:
    def subsetsWithDup(self, nums: list[int]) -> list[list[int]]:
        nums.sort()  # must sort
        result = [[]]

        previous_size = 0
        for i in range(len(nums)):
            size = len(result)
            for j in range(size):
                if i == 0 or nums[i] != nums[i-1] or j >= previous_size:
                    result.append(result[j][:])
                    result[-1].append(nums[i])
            previous_size = size
        return result
```

</TabItem>
</Tabs>

#### 二进制法

<Tabs
defaultValue="java"
values={[
{ label: 'Java', value: 'java', },
{ label: 'C++', value: 'cpp', },
]
}>
<TabItem value="java">

```java
// Subsets II
// 二进制法，时间复杂度O(2^n)，空间复杂度O(1)
public class Solution {
    public List<List<Integer>> subsetsWithDup(int[] nums) {
        Arrays.sort(nums);  // 必须排序
        // 用 set 去重，不能用 unordered_set，因为输出要求有序
        LinkedHashSet<ArrayList<Integer>> result = new LinkedHashSet<>();
        final int n = nums.length;
        ArrayList<Integer> v = new ArrayList<>();

        for (int i = 0; i < 1 << n; ++i) {
            for (int j = 0; j < n; ++j) {
                if ((i & 1 << j) > 0)
                    v.add(nums[j]);
            }
            result.add(new ArrayList<>(v));
            v.clear();
        }
        List<List<Integer>> realResult = new ArrayList<>();
        for (ArrayList<Integer> list : result) {
            realResult.add(list);
        }
        return realResult;
    }
}
```

</TabItem>
<TabItem value="cpp">

```cpp
// Subsets II
// 二进制法，时间复杂度O(2^n)，空间复杂度O(1)
class Solution {
public:
    vector<vector<int> > subsetsWithDup(vector<int> &S) {
        sort(S.begin(), S.end()); // 必须排序
        // 用 set 去重，不能用 unordered_set，因为输出要求有序
        set<vector<int> > result;
        const size_t n = S.size();
        vector<int> v;

        for (size_t i = 0; i < 1U << n; ++i) {
            for (size_t j = 0; j < n; ++j) {
                if (i & 1 << j)
                    v.push_back(S[j]);
            }
            result.insert(v);
            v.clear();
        }
        vector<vector<int> > real_result;
        copy(result.begin(), result.end(), back_inserter(real_result));
        return real_result;
    }
};
```

</TabItem>

<TabItem value="python">

```python
# Subsets II
# Binary method, time complexity O(2^n), space complexity O(1)
class Solution:
    def subsetsWithDup(self, nums: list[int]) -> list[list[int]]:
        nums.sort()  # must sort
        # use set for deduplication, can't use unordered_set as output requires ordering
        result = set()
        n = len(nums)
        v = []

        for i in range(1 << n):
            for j in range(n):
                if (i & 1 << j) > 0:
                    v.append(nums[j])
            result.add(tuple(v))
            v.clear()

        return [list(x) for x in result]
```

</TabItem>
</Tabs>

### 相关题目

- [Subsets](subsets.md)
