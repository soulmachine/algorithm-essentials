---
title: Asteroid Collision
---

### 描述

TODO

### 分析

TODO

### 代码

import Tabs from "@theme/Tabs";
import TabItem from "@theme/TabItem";

<Tabs
defaultValue="cpp"
values={[
{ label: 'Python', value: 'python', },
{ label: 'Java', value: 'java', },
{ label: 'C++', value: 'cpp', },
]
}>
<TabItem value="python">

```python
# TODO
```

</TabItem>
<TabItem value="java">

```java
// TODO
```

</TabItem>
<TabItem value="cpp">

```cpp
// Asteroid Collision
// Time complexity: O(N)
// Space complexity: O(N)
class Solution {
 public:
  vector<int> asteroidCollision(vector<int>& asteroids) {
    stack<int> s;
    for (int num : asteroids) {
      bool exploded = false; // num is exploded
      while (!s.empty() && s.top() > 0 && num < 0) {
        if (s.top() < -num) {
          s.pop(); // top is exploded
        } else if (s.top() > -num) {
          exploded = true; // only num is exploded
          break;
        } else {
          s.pop(); // both exploded
          exploded = true;
          break;
        }
      }
      if (!exploded) {
        s.push(num);
      }
    }

    // reverse
    vector<int> result;
    while (!s.empty()) {
      int num = s.top();
      s.pop();
      result.push_back(num);
    }
    std::reverse(result.begin(), result.end());
    return result;
  }
};
```

</TabItem>
</Tabs>
