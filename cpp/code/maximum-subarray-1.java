// Maximum Subarray
// 时间复杂度O(n)，空间复杂度O(1)
public class Solution {
    public int maxSubArray(int[] nums) {
        int result = Integer.MIN_VALUE, f = 0;
        for (int i = 0; i < nums.length; ++i) {
            f = Math.max(f + nums[i], nums[i]);
            result = Math.max(result, f);
        }
        return result;
    }
}