---
title: Sentence Similarity II
---

### 描述

TODO

### 分析

无

### 代码

import Tabs from "@theme/Tabs";
import TabItem from "@theme/TabItem";

<Tabs
defaultValue="python"
values={[
{ label: 'Python', value: 'python', },
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
class DSU {
// Plese copy from https://algorithm-essentials.soulmachine.me/graph/ufs/#union-by-rank
};

// Sentence Similarity II
// Time complexity: O(Nlog*P + P)
// Space complexity: O(P)
class Solution {
public:
    bool areSentencesSimilarTwo(vector<string>& sentence1, vector<string>& sentence2, vector<vector<string>>& similarPairs) {
        if (sentence1.size() != sentence2.size()) return false;
        const int N = sentence1.size();

        unordered_map<string, int> index_map;
        int P = 0; // number of unique words in similarPairs
        DSU dsu(similarPairs.size() * 2);
        for (const auto &pair : similarPairs) {
            for (const auto &word : pair) {
                if (index_map.find(word) == index_map.end()) {
                    index_map[word] = P++;
                }
            }
            dsu.merge(index_map[pair[0]], index_map[pair[1]]);
        }
        
        for (int i = 0; i < N; i++) {
            const string& word1 = sentence1[i], word2 = sentence2[i];
            if (word1 == word2) continue;
            if (index_map.find(word1) == index_map.end() || index_map.find(word2) == index_map.end() || dsu.find(index_map[word1]) != dsu.find(index_map[word2])) {
                return false;
            }
        }
        return true;
    }
};
```

</TabItem>

<TabItem value="python">

```python
# Nothing to translate as the Java code consists of only a comment "// TODO"

def main():
    # TODO
    pass
```

</TabItem>
</Tabs>
