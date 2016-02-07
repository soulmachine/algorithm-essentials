// Valid Number
// @author 连城 (http://weibo.com/lianchengzju)
// 偷懒，直接用 strtod()，时间复杂度O(n)
class Solution {
public:
    bool isNumber (const string& s) {
        return isNumber(s.c_str());
    }
private:
    bool isNumber (char const* s) {
        char* endptr;
        strtod (s, &endptr);

        if (endptr == s) return false;

        for (; *endptr; ++endptr)
            if (!isspace (*endptr)) return false;

        return true;
    }
};