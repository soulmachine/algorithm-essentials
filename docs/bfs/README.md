---
title: 广度优先搜索
---

当题目看不出任何规律，既不能用分治，贪心，也不能用动规时，这时候万能方法——搜索，
就派上用场了。搜索分为广搜和深搜，广搜里面又有普通广搜，双向广搜，A\*搜索等。
深搜里面又有普通深搜，回溯法等。

广搜和深搜非常类似（除了在扩展节点这部分不一样），二者有相同的框架，如何表示状态？
如何扩展状态？如何判重？尤其是判重，解决了这个问题，基本上整个问题就解决了。
