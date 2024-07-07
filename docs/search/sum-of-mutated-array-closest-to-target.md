---
title: Sum of Mutated Array Closest to Target
---

```cpp
// https://www.cnblogs.com/grandyang/p/16257643.html
class Solution {
public:
    int findBestValue(vector<int>& arr, int target) {
        int n = arr.size(), left = 0, right = target;
        while (left < right) {
            int mid = left + (right - left) / 2;
            if (diff(mid, arr, target) > diff(mid + 1, arr, target)) {
                left = mid + 1;
            } else {
                right = mid;
            }
        }
        return left;
    }
    int diff(int mid, vector<int>& arr, int target) {
        int sum = 0;
        for (int num : arr) {
            sum += min(num, mid);
        }
        return abs(sum - target);
    }
};
```
