// Remove Duplicates from Sorted Array
// 使用STL，时间复杂度O(n)，空间复杂度O(1)
class Solution {
public:
    int removeDuplicates(vector<int>& nums) {
        return distance(nums.begin(), unique(nums.begin(), nums.end()));
    }
};
