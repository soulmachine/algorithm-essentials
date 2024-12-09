---
title: Longest Repeating Substring
---

```cpp
// https://blog.csdn.net/qq_46105170/article/details/119441171
class Solution {
 public:
  using UL = unsigned long;
  int longestRepeatingSubstring(string s) {
    int n = s.size(), l = 1, r = n - 1;
    if (l > r) return 0;
    UL P = 131;
    auto check = [&](int len) {
      unordered_set<UL> st;
      UL pow = 1, ha = 0;
      for (int i = 0; i < len; i++) {
        pow = pow * P;
        ha = ha * P + s[i];
      }
      st.insert(ha);
      for (int i = len; i < n; i++) {
        ha = ha * P + s[i];
        ha -= pow * s[i - len];
        if (st.count(ha)) return true;
        st.insert(ha);
      }

      return false;
    };

    while (l < r) {
      int mid = l + (r - l + 1 >> 1);
      if (check(mid))
        l = mid;
      else
        r = mid - 1;
    }

    return check(l) ? l : 0;
  }
};
```
