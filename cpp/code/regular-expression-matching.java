// Regular Expression Matching
// 递归版，时间复杂度O(n)，空间复杂度O(1)
class Solution {
    public boolean isMatch(final String s, final String p) {
        return isMatch(s, 0, p, 0);
    }
    private static boolean isMatch(String s, int i, String p, int j) {
        if (j == p.length()) return i == s.length();

        // next char is not '*', then must match current character
        final char b = p.charAt(j);
        if (j == p.length() - 1 || p.charAt(j + 1) != '*') {
            if (i < s.length() && (b == s.charAt(i) || b == '.'))
                return isMatch(s, i + 1, p, j + 1);
            else return false;
        } else { // next char is '*'
            while (i < s.length() && (b == s.charAt(i) || b == '.')) {
                if (isMatch(s, i, p,  j + 2))
                    return true;
                i++;
            }
            return isMatch(s, i, p,  j + 2);
        }
    }
}