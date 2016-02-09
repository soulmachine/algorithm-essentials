// Sort Colors
// use partition()
// 时间复杂度O(n)，空间复杂度O(1)
class Solution {
public:
    void sortColors(vector<int>& nums) {
        partition(partition(nums.begin(), nums.end(), bind1st(equal_to<int>(), 0)), 
                nums.end(), bind1st(equal_to<int>(), 1));
    }
};