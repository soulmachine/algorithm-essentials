---
title: Restore IP Addresses
---

### 描述

Given a string containing only digits, restore it by returning all possible valid IP address combinations.

For example:
Given `"25525511135"`,

return `["255.255.11.135", "255.255.111.35"]`. (Order does not matter)

### 分析

本质上是要将三个点`.`插入到字符串中，每个点有 3 个可能的位置，最多会有 27 个有效的 IP 地址，因此时间复杂度最大是 O(1)，空间复杂度也是 O(1)。

可以用三层循环暴力求解，可以用深搜。

### 代码

import Tabs from "@theme/Tabs";
import TabItem from "@theme/TabItem";

#### 暴力法

<Tabs
defaultValue="python"
values={[
{ label: 'Python', value: 'python', },
{ label: 'Java', value: 'java', },
{ label: 'C++', value: 'cpp', },
]
}>
<TabItem value="python">

```python
# Restore IP Addresses
# 时间复杂度O(1)，空间复杂度O(1)
class Solution:
    def restoreIpAddresses(self, s: str) -> List[str]:
        result = []
        n = len(s)
        for i in range(1, min(4, n-2)):
            for j in range(i+1, min(i+4, n-1)):
                for k in range(j+1, min(j+4, n)):
                    s1, s2, s3, s4 = s[0 : i], s[i : j], s[j : k], s[k : n]
                    if self.isValid(s1) and self.isValid(s2) and self.isValid(s3) and self.isValid(s4):
                        result.append(s1 + "." + s2 + "." + s3 + "." + s4)
        return result

    @staticmethod
    def isValid(s: str)->bool:
        if len(s) > 3 or len(s) == 0 or (s[0] == '0' and len(s) > 1) or int(s) > 255:
            return False
        return True
```

</TabItem>
<TabItem value="java">

```java
// Restore IP Addresses
// 时间复杂度O(1)，空间复杂度O(1)
public class Solution {
    public List<String> restoreIpAddresses(String s) {
        List<String> result = new ArrayList<String>();
        int n = s.length();
        for(int i = 1; i < 4 && i < n-2; i++){
            for(int j = i+1; j < i+4 && j < n-1; j++){
                for(int k = j+1; k < j+4 && k < n; k++){
                    String s1 = s.substring(0, i), s2 = s.substring(i, j), s3 = s.substring(j, k), s4 = s.substring(k, n);
                    if(isValid(s1) && isValid(s2) && isValid(s3) && isValid(s4)){
                        result.add(s1 + "." + s2 + "." + s3 + "." + s4);
                    }
                }
            }
        }
        return result;
    }

    private boolean isValid(String s){
        if(s.length() > 3 || s.length() == 0 || (s.charAt(0) == '0' && s.length() > 1) || Integer.parseInt(s) > 255)
            return false;
        return true;
    }
}
```

</TabItem>
<TabItem value="cpp">

```cpp
// Restore IP Addresses
// 时间复杂度O(1)，空间复杂度O(1)
class Solution {
public:
    vector<string> restoreIpAddresses(string s) {
        vector<string> result;
        int n = s.length();
        for(int i = 1; i < 4 && i < n-2; i++){
            for(int j = i+1; j < i+4 && j < n-1; j++){
                for(int k = j+1; k < j+4 && k < n; k++){
                    string s1 = s.substr(0, i), s2 = s.substr(i, j-i), s3 = s.substr(j, k-j), s4 = s.substr(k, n-k);
                    if(isValid(s1) && isValid(s2) && isValid(s3) && isValid(s4)){
                        result.push_back(s1 + "." + s2 + "." + s3 + "." + s4);
                    }
                }
            }
        }
        return result;
    }
private:
    bool isValid(const string& s) {
        if(s.length() > 3 || s.length() == 0 || (s[0] == '0' && s.length() > 1) || std::stoi(s) > 255)
            return false;
        return true;
    }
};
```

</TabItem>
</Tabs>

#### DFS

<Tabs
defaultValue="python"
values={[
{ label: 'Python', value: 'python', },
{ label: 'Java', value: 'java', },
{ label: 'C++', value: 'cpp', },
]
}>
<TabItem value="python">

```python
# Restore IP Addresses
# 时间复杂度O(1)，空间复杂度O(1)
class Solution:
    def restoreIpAddresses(self, s: str) -> List[str]:
        result = []
        ip = [] # 存放中间结果
        self.dfs(s, ip, result, 0)
        return result

    def dfs(self, s: str, ip: List[str], result: List[str], start: int):
        '''DFS.
          Args::
            s: The original string
            ip: Interim result
            result: List of valid IP addresses
            start: Current position
        '''
        if len(ip) == 4 and start == len(s): # 找到一个合法解
            result.append(ip[0] + '.' + ip[1] + '.' + ip[2] + '.' + ip[3])
            return

        if len(s) - start > (4 - len(ip)) * 3: return  # 剪枝
        if len(s) - start < (4 - len(ip)): return  # 剪枝

        for i in range(1, 4):
        #for (int i = start; i < start + 3 && i < s.length(); i++) {
            if start + i > len(s): continue
            num = int(s[start: start+i])

            if num < 0 or num > 255: continue  # 剪枝

            ip.append(s[start: start+i])
            self.dfs(s, ip, result, start+i)
            ip.pop()

            if num == 0: break  # 不允许前缀0，但允许单个0
```

</TabItem>
<TabItem value="java">

```java
// Restore IP Addresses
// 时间复杂度O(1)，空间复杂度O(1)
public class Solution {
    public List<String> restoreIpAddresses(String s) {
        List<String> result = new ArrayList<>();
        List<String> ip = new ArrayList<>();; // 存放中间结果
        dfs(s, ip, result, 0);
        return result;
    }

    /**
     * 解析字符串
     * @param[in] s 字符串，输入数据
     * @param[out] ip 存放中间结果
     * @param[out] result 存放所有可能的IP地址
     * @param[in] start 当前位置
     * @return 无
     */
    private static void dfs(String s, List<String> ip,
                            List<String> result, int start) {
        if (ip.size() == 4 && start == s.length()) {  // 找到一个合法解
            result.add(ip.get(0) + '.' + ip.get(1) + '.' +
                    ip.get(2) + '.' + ip.get(3));
            return;
        }

        if (s.length() - start > (4 - ip.size()) * 3) return;  // 剪枝
        if (s.length() - start < (4 - ip.size())) return;  // 剪枝

        int num = 0;
        for (int i = start; i < start + 3 && i < s.length(); i++) {
            num = num * 10 + (s.charAt(i) - '0');

            if (num < 0 || num > 255) continue;  // 剪枝

            ip.add(s.substring(start, i + 1));
            dfs(s, ip, result, i + 1);
            ip.remove(ip.size() - 1);

            if (num == 0) break;  // 不允许前缀0，但允许单个0
        }
    }
}
```

</TabItem>
<TabItem value="cpp">

```cpp
// Restore IP Addresses
// 时间复杂度O(1)，空间复杂度O(1)
class Solution {
public:
    vector<string> restoreIpAddresses(const string& s) {
        vector<string> result;
        vector<string> ip; // 存放中间结果
        dfs(s, ip, result, 0);
        return result;
    }

    /**
     * @brief 解析字符串
     * @param[in] s 字符串，输入数据
     * @param[out] ip 存放中间结果
     * @param[out] result 存放所有可能的IP地址
     * @param[in] start 当前位置
     * @return 无
     */
    void dfs(string s, vector<string>& ip, vector<string> &result,
            size_t start) {
        if (ip.size() == 4 && start == s.size()) {  // 找到一个合法解
            result.push_back(ip[0] + '.' + ip[1] + '.' + ip[2] + '.' + ip[3]);
            return;
        }

        if (s.size() - start > (4 - ip.size()) * 3) return;  // 剪枝
        if (s.size() - start < (4 - ip.size())) return;  // 剪枝

        int num = 0;
        for (size_t i = start; i < start + 3 && i < s.size(); i++) {
            num = num * 10 + (s[i] - '0');

            if (num < 0 || num > 255) continue;  // 剪枝

            ip.push_back(s.substr(start, i - start + 1));
            dfs(s, ip, result, i + 1);
            ip.pop_back();

            if (num == 0) break;  // 不允许前缀0，但允许单个0
        }
    }
};
```

</TabItem>
</Tabs>
