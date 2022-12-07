---
title: Longest String Chain
---

### 描述

TODO

### 分析

无

### 代码

import Tabs from "@theme/Tabs";
import TabItem from "@theme/TabItem";

<Tabs
defaultValue="cpp"
values={[
{ label: 'Java', value: 'java', },
{ label: 'C++', value: 'cpp', },
]
}>
<TabItem value="java">

```java
// TODO
```

</TabItem>
<TabItem value="cpp">

```cpp
// Longest String Chain
// Time complexity: O(N*(logN + L^2))
// Space complexity: O(N)
class Solution {
public:
    int longestStrChain(vector<string>& words) {
        int result = 1;
        sort(words.begin(), words.end(), [](string& a, string& b){ return a.size() < b.size(); });
        unordered_map<string, int> dp; // the longest chain ending with the key
        for (const string &word : words) { // must scan from left to right
            dp[word] = 1;
            for (int i = 0; i < word.size(); ++i) {
                string pre = word.substr(0, i) + word.substr(i + 1);
                if (dp.count(pre)) {
                    dp[word] = max(dp[word], dp[pre] + 1);
                    result = max(result, dp[word]);
                }
            }
        }
        return result;
    }
};
```

</TabItem>
</Tabs>
