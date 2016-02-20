## Restore IP Addresses


### 描述

Given a string containing only digits, restore it by returning all possible valid IP address combinations.

For example:
Given `"25525511135"`,

return `["255.255.11.135", "255.255.111.35"]`. (Order does not matter)


### 分析

必须要走到底部才能判断解是否合法，深搜。


### 代码

{% codesnippet "./code/restore-ip-addresses."+book.suffix, language=book.suffix %}{% endcodesnippet %}
