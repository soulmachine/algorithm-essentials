// Range Sum Query - Mutable
// Binary Indexed Tree
public class NumArray {
    private int[] sum;
    private int[] bit;

    // Time Complexity: O(n)
    public NumArray(int[] nums) {
        // index 0 is unused
        this.sum = new int[nums.length + 1];
        this.bit = new int[nums.length + 1];

        for (int i = 0; i < nums.length; ++i) {
            update(i, nums[i]);
        }
    }

    // Time Complexity: O(log n)
    void update(int i, int val) {
        final int diff = val - sum[i + 1];
        for (int j = i + 1; j < sum.length; j += lowbit(j)) {
            bit[j] += diff;
        }
        sum[i + 1] = val;
    }

    // Time Complexity: O(log n)
    public int sumRange(int i, int j) {
        return getSum(j + 1) - getSum(i);
    }

    private int getSum(int i) {
        int result = 0;
        for (int j = i; j > 0; j -= lowbit(j)) {
            result += bit[j];
        }
        return result;
    }

    private static int lowbit(int x) {
        return x & (-x);  // must use parentheses
    }
}