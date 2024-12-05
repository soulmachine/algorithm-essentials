"use strict";(self.webpackChunkalgorithm_essentials=self.webpackChunkalgorithm_essentials||[]).push([[9714],{46971:(e,n,i)=>{i.r(n),i.d(n,{assets:()=>d,contentTitle:()=>o,default:()=>m,frontMatter:()=>s,metadata:()=>t,toc:()=>u});const t=JSON.parse('{"id":"binary-tree/segment-tree/range-sum-query-mutable","title":"Range Sum Query - Mutable","description":"\u63cf\u8ff0","source":"@site/docs/binary-tree/segment-tree/range-sum-query-mutable.md","sourceDirName":"binary-tree/segment-tree","slug":"/binary-tree/segment-tree/range-sum-query-mutable","permalink":"/en/binary-tree/segment-tree/range-sum-query-mutable","draft":false,"unlisted":false,"tags":[],"version":"current","frontMatter":{"title":"Range Sum Query - Mutable"},"sidebar":"docs","previous":{"title":"Find Distance in a Binary Tree","permalink":"/en/binary-tree/recursion/find-distance-in-a-binary-tree"},"next":{"title":"\u6808\u548c\u961f\u5217","permalink":"/en/category/\u6808\u548c\u961f\u5217"}}');var r=i(74848),l=i(28453);const s={title:"Range Sum Query - Mutable"},o=void 0,d={},u=[{value:"\u63cf\u8ff0",id:"\u63cf\u8ff0",level:3},{value:"\u5206\u6790",id:"\u5206\u6790",level:3},{value:"\u89e3\u6cd5 1 \u7ebf\u6bb5\u6811",id:"\u89e3\u6cd5-1-\u7ebf\u6bb5\u6811",level:3},{value:"\u89e3\u6cd5 2 \u6811\u72b6\u6570\u7ec4",id:"\u89e3\u6cd5-2-\u6811\u72b6\u6570\u7ec4",level:3},{value:"\u76f8\u5173\u9898\u76ee",id:"\u76f8\u5173\u9898\u76ee",level:3}];function a(e){const n={a:"a",code:"code",h3:"h3",li:"li",ol:"ol",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,l.R)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(n.h3,{id:"\u63cf\u8ff0",children:"\u63cf\u8ff0"}),"\n",(0,r.jsxs)(n.p,{children:["Given an integer array ",(0,r.jsx)(n.code,{children:"nums"}),", find the sum of the elements between indices ",(0,r.jsx)(n.code,{children:"i"})," and ",(0,r.jsx)(n.code,{children:"j"})," (",(0,r.jsx)(n.code,{children:"i \u2264 j"}),"), inclusive."]}),"\n",(0,r.jsxs)(n.p,{children:["The ",(0,r.jsx)(n.code,{children:"update(i, val)"})," function modifies ",(0,r.jsx)(n.code,{children:"nums"})," by updating the element at index ",(0,r.jsx)(n.code,{children:"i"})," to ",(0,r.jsx)(n.code,{children:"val"}),"."]}),"\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.strong,{children:"Example"}),":"]}),"\n",(0,r.jsxs)(n.p,{children:["Given ",(0,r.jsx)(n.code,{children:"nums = [1, 3, 5]"})]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{children:"sumRange(0, 2) -> 9\nupdate(1, 2)\nsumRange(0, 2) -> 8\n"})}),"\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.strong,{children:"Note"}),":"]}),"\n",(0,r.jsxs)(n.ol,{children:["\n",(0,r.jsx)(n.li,{children:"The array is only modifiable by the update function."}),"\n",(0,r.jsx)(n.li,{children:"You may assume the number of calls to update and sumRange function is distributed evenly."}),"\n"]}),"\n",(0,r.jsx)(n.h3,{id:"\u5206\u6790",children:"\u5206\u6790"}),"\n",(0,r.jsx)(n.p,{children:"\u7531\u4e8e\u9700\u8981\u6c42\u4efb\u610f\u6bb5\u7684\u548c\uff0c\u4e14\u4f1a\u968f\u673a\u4fee\u6539\u5143\u7d20\uff0c\u7528\u7ebf\u6bb5\u6811(Segment Tree)\u518d\u5408\u9002\u4e0d\u8fc7\u4e86\u3002"}),"\n",(0,r.jsx)(n.p,{children:"\u53e6\u5916\u4e00\u4e2a\u6570\u636e\u7ed3\u6784\uff0c\u6811\u72b6\u6570\u7ec4(Binary Indexed Tree)\uff0c\u4e5f\u9002\u5408\u89e3\u8fd9\u9053\u9898\u3002"}),"\n",(0,r.jsx)(n.h3,{id:"\u89e3\u6cd5-1-\u7ebf\u6bb5\u6811",children:"\u89e3\u6cd5 1 \u7ebf\u6bb5\u6811"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-java",children:"// Range Sum Query - Mutable\n// Segment Tree\npublic class NumArray {\n    private SegmentTreeNode root;\n\n    // Time Complexity: O(n)\n    public NumArray(int[] nums) {\n        this.root = buildTree(nums, 0, nums.length);\n    }\n\n    // Time Complexity: O(log n)\n    void update(int i, int val) {\n        updateHelper(this.root, i, val);\n    }\n\n    // Time Complexity: O(log n)\n    public int sumRange(int i, int j) {\n        return sumRangeHelper(this.root, i, j+1);\n    }\n\n    private static SegmentTreeNode buildTree(int[] nums, int begin, int end) {\n        if (nums == null || nums.length == 0 || begin >= end)\n            return null;\n        if (begin == end - 1) // one element\n            return new SegmentTreeNode(begin, end, nums[begin]);\n\n        final SegmentTreeNode root = new SegmentTreeNode(begin, end);\n        final int middle = begin + (end - begin) / 2;\n        root.left = buildTree(nums, begin, middle);\n        root.right = buildTree(nums, middle, end);\n        root.sum = root.left.sum + root.right.sum;\n\n        return root;\n    }\n\n    private static void updateHelper(SegmentTreeNode root, int i, int val) {\n        if (root.begin == root.end - 1 && root.begin == i) {\n            root.sum = val;\n            return;\n        }\n\n        final int middle = root.begin + (root.end - root.begin) / 2;\n        if (i < middle) {\n            updateHelper(root.left, i, val);\n        } else {\n            updateHelper(root.right, i, val);\n        }\n\n        root.sum = root.left.sum + root.right.sum;\n    }\n    private static int sumRangeHelper(SegmentTreeNode root, int begin, int end) {\n        if (root == null || begin >=root.end || end <= root.begin)\n            return 0;\n        if (begin <= root.begin && end >= root.end)\n            return root.sum;\n\n        final int middle = root.begin + (root.end - root.begin) / 2;\n        return sumRangeHelper(root.left, begin, Math.min(end, middle)) +\n                sumRangeHelper(root.right, Math.max(middle, begin), end);\n    }\n\n    static class SegmentTreeNode {\n        private int begin;\n        private int end;\n        private int sum;\n        private SegmentTreeNode left;\n        private SegmentTreeNode right;\n\n        public SegmentTreeNode(int begin, int end, int sum) {\n            this.begin = begin;\n            this.end = end;\n            this.sum = sum;\n        }\n        public SegmentTreeNode(int begin, int end) {\n            this(begin, end, 0);\n        }\n    }\n}\n"})}),"\n",(0,r.jsx)(n.h3,{id:"\u89e3\u6cd5-2-\u6811\u72b6\u6570\u7ec4",children:"\u89e3\u6cd5 2 \u6811\u72b6\u6570\u7ec4"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-java",children:"// Range Sum Query - Mutable\n// Binary Indexed Tree\npublic class NumArray {\n    private int[] nums;\n    private int[] bit;\n\n    // Time Complexity: O(n)\n    public NumArray(int[] nums) {\n        // index 0 is unused\n        this.nums = new int[nums.length + 1];\n        this.bit = new int[nums.length + 1];\n\n        for (int i = 0; i < nums.length; ++i) {\n            update(i, nums[i]);\n        }\n    }\n\n    // Time Complexity: O(log n)\n    public void update(int index, int val) {\n        final int diff = val - nums[index + 1];\n        for (int i = index + 1; i < nums.length; i += lowbit(i)) {\n            bit[i] += diff;\n        }\n        nums[index + 1] = val;\n    }\n\n    // Time Complexity: O(log n)\n    public int sumRange(int i, int j) {\n        return read(j + 1) - read(i);\n    }\n\n    private int read(int index) {\n        int result = 0;\n        for (int i = index; i > 0; i -= lowbit(i)) {\n            result += bit[i];\n        }\n        return result;\n    }\n\n    private static int lowbit(int x) {\n        return x & (-x);  // must use parentheses\n    }\n}\n"})}),"\n",(0,r.jsx)(n.h3,{id:"\u76f8\u5173\u9898\u76ee",children:"\u76f8\u5173\u9898\u76ee"}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsx)(n.li,{children:(0,r.jsx)(n.a,{href:"/en/dp/range-sum-query-immutable",children:"Range Sum Query - Immutable"})}),"\n",(0,r.jsx)(n.li,{children:(0,r.jsx)(n.a,{href:"/en/dp/range-sum-query-2d-immutable",children:"Range Sum Query 2D - Immutable"})}),"\n"]})]})}function m(e={}){const{wrapper:n}={...(0,l.R)(),...e.components};return n?(0,r.jsx)(n,{...e,children:(0,r.jsx)(a,{...e})}):a(e)}},28453:(e,n,i)=>{i.d(n,{R:()=>s,x:()=>o});var t=i(96540);const r={},l=t.createContext(r);function s(e){const n=t.useContext(l);return t.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function o(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:s(e.components),t.createElement(l.Provider,{value:n},e.children)}}}]);