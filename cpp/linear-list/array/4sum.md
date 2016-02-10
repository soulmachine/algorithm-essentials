## 4Sum


### 描述

Given an array `S` of `n` integers, are there elements `a, b, c`, and `d` in `S` such that `a + b + c + d = target`? Find all unique quadruplets in the array which gives the sum of target.

Note:

* Elements in a quadruplet `(a,b,c,d)` must be in non-descending order. (ie, $$a \leq b \leq c \leq d$$)
* The solution set must not contain duplicate quadruplets.


For example, given array `S = {1 0 -1 0 -2 2}`, and `target = 0`. 

A solution set is:

```
(-1,  0, 0, 1)
(-2, -1, 1, 2)
(-2,  0, 0, 2)
```



### 分析

先排序，然后左右夹逼，复杂度 $$O(n^3)$$，会超时。

可以用一个hashmap先缓存两个数的和，最终复杂度$$O(n^3)$$。这个策略也适用于 3Sum 。


### 左右夹逼

{% codesnippet "./code/4sum-1."+book.suffix, language=book.suffix %}{% endcodesnippet %}


### map做缓存

```cpp
// 4Sum
// 用一个hashmap先缓存两个数的和
// Time Complexity: 平均O(n^2)，最坏O(n^4)，Space Complexity: O(n^2)
class Solution {
public:
    vector<vector<int> > fourSum(vector<int> &nums, int target) {
        vector<vector<int>> result;
        if (nums.size() < 4) return result;
        sort(nums.begin(), nums.end());

        unordered_map<int, vector<pair<int, int> > > cache;
        for (size_t a = 0; a < nums.size(); ++a) {
            for (size_t b = a + 1; b < nums.size(); ++b) {
                cache[nums[a] + nums[b]].push_back(pair<int, int>(a, b));
            }
        }

        for (int c = 0; c < nums.size(); ++c) {
            for (size_t d = c + 1; d < nums.size(); ++d) {
                const int key = target - nums[c] - nums[d];
                if (cache.find(key) == cache.end()) continue;

                const auto& vec = cache[key];
                for (size_t k = 0; k < vec.size(); ++k) {
                    if (c <= vec[k].second)
                        continue; // 有重叠

                    result.push_back( { nums[vec[k].first],
                            nums[vec[k].second], nums[c], nums[d] });
                }
            }
        }
        sort(result.begin(), result.end());
        result.erase(unique(result.begin(), result.end()), result.end());
        return result;
    }
};
```


### multimap

{% codesnippet "./code/4sum-3."+book.suffix, language=book.suffix %}{% endcodesnippet %}


### 方法4

{% codesnippet "./code/4sum-4."+book.suffix, language=book.suffix %}{% endcodesnippet %}


### 相关题目


* [Two sum](two-sum.md)
* [3Sum](3sum.md)
* [3Sum Closest](3sum-closest.md)
