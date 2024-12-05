"use strict";(self.webpackChunkalgorithm_essentials=self.webpackChunkalgorithm_essentials||[]).push([[1724],{80760:(n,e,t)=>{t.r(e),t.d(e,{assets:()=>o,contentTitle:()=>c,default:()=>d,frontMatter:()=>u,metadata:()=>i,toc:()=>m});const i=JSON.parse('{"id":"simulation/multiply-strings","title":"Multiply Strings","description":"\u63cf\u8ff0","source":"@site/docs/simulation/multiply-strings.md","sourceDirName":"simulation","slug":"/simulation/multiply-strings","permalink":"/simulation/multiply-strings","draft":false,"unlisted":false,"tags":[],"version":"current","frontMatter":{"title":"Multiply Strings"},"sidebar":"docs","previous":{"title":"Add Strings","permalink":"/simulation/add-strings"},"next":{"title":"Substring with Concatenation of All Words","permalink":"/simulation/substring-with-concatenation-of-all-words"}}');var s=t(74848),r=t(28453),a=t(11470),l=t(19365);const u={title:"Multiply Strings"},c=void 0,o={},m=[{value:"\u63cf\u8ff0",id:"\u63cf\u8ff0",level:3},{value:"\u5206\u6790",id:"\u5206\u6790",level:3},{value:"\u4ee3\u7801",id:"\u4ee3\u7801",level:3},{value:"\u6a21\u62df\u4e58\u6cd5",id:"\u6a21\u62df\u4e58\u6cd5",level:4},{value:"\u8f6c\u5316\u6210\u6574\u6570\u6570\u7ec4\uff0c\u4e00\u4e2a\u5b57\u7b26\u5bf9\u5e94\u4e00\u4e2a\u6574\u6570",id:"\u8f6c\u5316\u6210\u6574\u6570\u6570\u7ec4\u4e00\u4e2a\u5b57\u7b26\u5bf9\u5e94\u4e00\u4e2a\u6574\u6570",level:4},{value:"\u8f6c\u5316\u6210\u6574\u6570\u6570\u7ec4\uff0c9 \u4e2a\u5b57\u7b26\u5bf9\u5e94\u4e00\u4e2a 64 \u4f4d\u6574\u6570",id:"\u8f6c\u5316\u6210\u6574\u6570\u6570\u7ec49-\u4e2a\u5b57\u7b26\u5bf9\u5e94\u4e00\u4e2a-64-\u4f4d\u6574\u6570",level:4},{value:"\u76f8\u5173\u9898\u76ee",id:"\u76f8\u5173\u9898\u76ee",level:3}];function g(n){const e={a:"a",annotation:"annotation",code:"code",h3:"h3",h4:"h4",li:"li",math:"math",mn:"mn",mo:"mo",mrow:"mrow",msup:"msup",p:"p",pre:"pre",semantics:"semantics",span:"span",ul:"ul",...(0,r.R)(),...n.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(e.h3,{id:"\u63cf\u8ff0",children:"\u63cf\u8ff0"}),"\n",(0,s.jsx)(e.p,{children:"Given two numbers represented as strings, return multiplication of the numbers as a string."}),"\n",(0,s.jsx)(e.p,{children:"Note: The numbers can be arbitrarily large and are non-negative."}),"\n",(0,s.jsx)(e.h3,{id:"\u5206\u6790",children:"\u5206\u6790"}),"\n",(0,s.jsx)(e.p,{children:"\u9ad8\u7cbe\u5ea6\u4e58\u6cd5\u3002"}),"\n",(0,s.jsx)(e.h3,{id:"\u4ee3\u7801",children:"\u4ee3\u7801"}),"\n","\n",(0,s.jsx)(e.h4,{id:"\u6a21\u62df\u4e58\u6cd5",children:"\u6a21\u62df\u4e58\u6cd5"}),"\n",(0,s.jsxs)(a.A,{defaultValue:"java",values:[{label:"Java",value:"java"},{label:"C++",value:"cpp"}],children:[(0,s.jsx)(l.A,{value:"java",children:(0,s.jsx)(e.pre,{children:(0,s.jsx)(e.code,{className:"language-java",children:"// Multiply Strings\n// Time Complexity: O(n*m), Space Complexity: O(n+m)\nclass Solution {\n    public String multiply(String num1, String num2) {\n        int m = num1.length(), n = num2.length();\n        int[] z = new int[m + n];\n\n        for(int i = m - 1; i >= 0; i--) {\n            for(int j = n - 1; j >= 0; j--) {\n                int mul = (num1.charAt(i) - '0') * (num2.charAt(j) - '0');\n                int sum = mul + z[i+j+1];\n                z[i + j + 1] = sum % 10;\n                z[i + j] += sum / 10; // carry\n            }\n        }\n\n        StringBuilder sb = new StringBuilder();\n        for(int x : z) {\n            if(!(sb.length() == 0 && x == 0)) // skip prefix zeros\n                sb.append(x);\n        }\n        return sb.length() == 0 ? \"0\" : sb.toString();\n    }\n}\n"})})}),(0,s.jsx)(l.A,{value:"cpp",children:(0,s.jsx)(e.pre,{children:(0,s.jsx)(e.code,{className:"language-cpp",children:"// TODO\n"})})})]}),"\n",(0,s.jsx)(e.h4,{id:"\u8f6c\u5316\u6210\u6574\u6570\u6570\u7ec4\u4e00\u4e2a\u5b57\u7b26\u5bf9\u5e94\u4e00\u4e2a\u6574\u6570",children:"\u8f6c\u5316\u6210\u6574\u6570\u6570\u7ec4\uff0c\u4e00\u4e2a\u5b57\u7b26\u5bf9\u5e94\u4e00\u4e2a\u6574\u6570"}),"\n",(0,s.jsx)(e.p,{children:"\u5e38\u89c1\u7684\u505a\u6cd5\u662f\u628a\u6bcf\u4e2a\u5b57\u7b26\u8f6c\u5316\u4e3a\u4e00\u4e2a int\uff0c\u4e00\u4e00\u5bf9\u5e94\uff0c\u5f62\u6210\u4e00\u4e2a int \u6570\u7ec4\u3002"}),"\n",(0,s.jsxs)(a.A,{defaultValue:"java",values:[{label:"Java",value:"java"},{label:"C++",value:"cpp"}],children:[(0,s.jsx)(l.A,{value:"java",children:(0,s.jsx)(e.pre,{children:(0,s.jsx)(e.code,{className:"language-java",children:"// Multiply Strings\n// \u4e00\u4e2a\u5b57\u7b26\u5bf9\u5e94\u4e00\u4e2aint\n// \u65f6\u95f4\u590d\u6742\u5ea6O(n*m)\uff0c\u7a7a\u95f4\u590d\u6742\u5ea6O(n+m)\npublic class Solution {\n    public String multiply(String num1, String num2) {\n        BigInt bigInt1 = new BigInt(num1);\n        BigInt bigInt2 = new BigInt(num2);\n        BigInt result = BigInt.multiply(bigInt1, bigInt2);\n        return result.toString();\n    }\n\n    // \u4e00\u4e2a\u5b57\u7b26\u5bf9\u5e94\u4e00\u4e2aint\n    static class BigInt {\n        private final int[] d;\n\n        public BigInt(String s) {\n            this.d = fromString(s);\n        }\n        public BigInt(int[] d) {\n            this.d = d;\n        }\n\n        private static int[] fromString(String s) {\n            int[] d = new int[s.length()];\n            for (int i = s.length() - 1, j = 0; i >= 0; --i)\n                d[j++] = Character.getNumericValue(s.charAt(i));\n            return d;\n        }\n\n        @Override\n        public String toString() {\n            final StringBuilder sb = new StringBuilder();\n            for (int i = d.length - 1; i >= 0; --i) {\n                sb.append(Character.forDigit(d[i], 10));\n            }\n            return sb.toString();\n        }\n\n        public static BigInt multiply(BigInt x, BigInt y) {\n            int[] z = new int[x.d.length + y.d.length];\n            for (int i = 0; i < x.d.length; ++i) {\n                for (int j = 0; j < y.d.length; ++j) {\n                    z[i + j] += x.d[i] * y.d[j];\n                    z[i + j + 1] += z[i + j] / 10;\n                    z[i + j] %= 10;\n                }\n            }\n            // find the first 0 from right to left\n            int i = z.length - 1;\n            for (; i > 0 && z[i] == 0; --i) /* empty */;\n\n            if (i == z.length - 1) {\n                return new BigInt(z);\n            } else { // make a copy\n                int[] tmp = new int[i + 1];\n                System.arraycopy(z, 0, tmp, 0, i + 1);\n                return new BigInt(tmp);\n            }\n        }\n    }\n}\n"})})}),(0,s.jsx)(l.A,{value:"cpp",children:(0,s.jsx)(e.pre,{children:(0,s.jsx)(e.code,{className:"language-cpp",children:"// Multiply Strings\n// @author \u8fde\u57ce (http://weibo.com/lianchengzju)\n// \u4e00\u4e2a\u5b57\u7b26\u5bf9\u5e94\u4e00\u4e2aint\n// \u65f6\u95f4\u590d\u6742\u5ea6O(n*m)\uff0c\u7a7a\u95f4\u590d\u6742\u5ea6O(n+m)\ntypedef vector<int> bigint;\n\nbigint make_bigint(string const& repr) {\n    bigint n;\n    transform(repr.rbegin(), repr.rend(), back_inserter(n),\n            [](char c) { return c - '0'; });\n    return n;\n}\n\nstring to_string(bigint const& n) {\n    string str;\n    transform(find_if(n.rbegin(), prev(n.rend()),\n            [](char c) { return c > '\\0'; }), n.rend(), back_inserter(str),\n            [](char c) { return c + '0'; });\n    return str;\n}\n\nbigint operator*(bigint const& x, bigint const& y) {\n    bigint z(x.size() + y.size());\n\n    for (size_t i = 0; i < x.size(); ++i)\n        for (size_t j = 0; j < y.size(); ++j) {\n            z[i + j] += x[i] * y[j];\n            z[i + j + 1] += z[i + j] / 10;\n            z[i + j] %= 10;\n        }\n\n    return z;\n}\n\nclass Solution {\npublic:\n    string multiply(string num1, string num2) {\n        return to_string(make_bigint(num1) * make_bigint(num2));\n    }\n};\n"})})})]}),"\n",(0,s.jsx)(e.h4,{id:"\u8f6c\u5316\u6210\u6574\u6570\u6570\u7ec49-\u4e2a\u5b57\u7b26\u5bf9\u5e94\u4e00\u4e2a-64-\u4f4d\u6574\u6570",children:"\u8f6c\u5316\u6210\u6574\u6570\u6570\u7ec4\uff0c9 \u4e2a\u5b57\u7b26\u5bf9\u5e94\u4e00\u4e2a 64 \u4f4d\u6574\u6570"}),"\n",(0,s.jsxs)(e.p,{children:["\u4e00\u4e2a\u5b57\u7b26\u7528\u4e00\u4e2a int \u8868\u793a\uff0c\u5176\u5b9e\u662f\u6bd4\u8f83\u6d6a\u8d39\u5185\u5b58\u7a7a\u95f4\u7684\uff0c\u56e0\u4e3a\u4e00\u4e2a int64 \u7684\u6700\u5927\u503c\u662f",(0,s.jsxs)(e.span,{className:"katex",children:[(0,s.jsx)(e.span,{className:"katex-mathml",children:(0,s.jsx)(e.math,{xmlns:"http://www.w3.org/1998/Math/MathML",children:(0,s.jsxs)(e.semantics,{children:[(0,s.jsxs)(e.mrow,{children:[(0,s.jsxs)(e.msup,{children:[(0,s.jsx)(e.mn,{children:"2"}),(0,s.jsx)(e.mn,{children:"63"})]}),(0,s.jsx)(e.mo,{children:"\u2212"}),(0,s.jsx)(e.mn,{children:"1"}),(0,s.jsx)(e.mo,{children:"="}),(0,s.jsx)(e.mn,{children:"9223372036854775807"})]}),(0,s.jsx)(e.annotation,{encoding:"application/x-tex",children:"2^{63}-1=9223372036854775807"})]})})}),(0,s.jsxs)(e.span,{className:"katex-html","aria-hidden":"true",children:[(0,s.jsxs)(e.span,{className:"base",children:[(0,s.jsx)(e.span,{className:"strut",style:{height:"0.8974em",verticalAlign:"-0.0833em"}}),(0,s.jsxs)(e.span,{className:"mord",children:[(0,s.jsx)(e.span,{className:"mord",children:"2"}),(0,s.jsx)(e.span,{className:"msupsub",children:(0,s.jsx)(e.span,{className:"vlist-t",children:(0,s.jsx)(e.span,{className:"vlist-r",children:(0,s.jsx)(e.span,{className:"vlist",style:{height:"0.8141em"},children:(0,s.jsxs)(e.span,{style:{top:"-3.063em",marginRight:"0.05em"},children:[(0,s.jsx)(e.span,{className:"pstrut",style:{height:"2.7em"}}),(0,s.jsx)(e.span,{className:"sizing reset-size6 size3 mtight",children:(0,s.jsx)(e.span,{className:"mord mtight",children:(0,s.jsx)(e.span,{className:"mord mtight",children:"63"})})})]})})})})})]}),(0,s.jsx)(e.span,{className:"mspace",style:{marginRight:"0.2222em"}}),(0,s.jsx)(e.span,{className:"mbin",children:"\u2212"}),(0,s.jsx)(e.span,{className:"mspace",style:{marginRight:"0.2222em"}})]}),(0,s.jsxs)(e.span,{className:"base",children:[(0,s.jsx)(e.span,{className:"strut",style:{height:"0.6444em"}}),(0,s.jsx)(e.span,{className:"mord",children:"1"}),(0,s.jsx)(e.span,{className:"mspace",style:{marginRight:"0.2778em"}}),(0,s.jsx)(e.span,{className:"mrel",children:"="}),(0,s.jsx)(e.span,{className:"mspace",style:{marginRight:"0.2778em"}})]}),(0,s.jsxs)(e.span,{className:"base",children:[(0,s.jsx)(e.span,{className:"strut",style:{height:"0.6444em"}}),(0,s.jsx)(e.span,{className:"mord",children:"9223372036854775807"})]})]})]}),"\uff0c\u53ef\u4ee5\u4e0e 19 \u4e2a\u5b57\u7b26\u5bf9\u5e94\uff0c\u7531\u4e8e\u6709\u4e58\u6cd5\uff0c\u51cf\u534a\uff0c\u5219\u81f3\u5c11\u53ef\u4ee5\u4e0e 9 \u4e2a\u5b57\u7b26\u4e00\u4e00\u5bf9\u5e94\u3002"]}),"\n",(0,s.jsxs)(a.A,{defaultValue:"java",values:[{label:"Java",value:"java"},{label:"C++",value:"cpp"}],children:[(0,s.jsx)(l.A,{value:"java",children:(0,s.jsx)(e.pre,{children:(0,s.jsx)(e.code,{className:"language-java",children:'// Multiply Strings\n// 9\u4e2a\u5b57\u7b26\u5bf9\u5e94\u4e00\u4e2a long\n// \u65f6\u95f4\u590d\u6742\u5ea6O(n*m)\uff0c\u7a7a\u95f4\u590d\u6742\u5ea6O(n+m)\npublic class Solution {\n    public String multiply(String num1, String num2) {\n        BigInt bigInt1 = BigInt.fromString(num1);\n        BigInt bigInt2 = BigInt.fromString(num2);\n        BigInt result = BigInt.multiply(bigInt1, bigInt2);\n        return result.toString();\n    }\n\n    // 9\u4e2a\u5b57\u7b26\u5bf9\u5e94\u4e00\u4e2a long\n    static class BigInt {\n        /** \u4e00\u4e2a\u6570\u7ec4\u5143\u7d20\u5bf9\u5e949\u4e2a\u5341\u8fdb\u5236\u4f4d\uff0c\u5373\u6570\u7ec4\u662f\u4ebf\u8fdb\u5236\u7684\n         * \u56e0\u4e3a 1000000000 * 1000000000 \u6ca1\u6709\u8d85\u8fc7 2^63-1\n         */\n        final static int BIGINT_RADIX = 1000000000;\n        final static int RADIX_LEN = 9;\n        /** \u4e07\u8fdb\u5236\u6574\u6570. */\n        private final long[] digits;\n\n        public BigInt(long[] digits) {\n            this.digits = digits;\n        }\n\n        private static BigInt fromString(String s) {\n            long[] digits;\n            if (s.length() % RADIX_LEN == 0) {\n                digits = new long[s.length() / RADIX_LEN];\n            } else {\n                digits = new long[s.length() / RADIX_LEN + 1];\n            }\n            for (int i = s.length(), k = 0; i > 0; i -= RADIX_LEN) {\n                long tmp = 0;\n                for (int j = Math.max(0, i - RADIX_LEN); j < i; ++j) {\n                    tmp = tmp * 10 + Character.getNumericValue(s.charAt(j));\n                }\n                digits[k++] = tmp;\n            }\n            return new BigInt(digits);\n        }\n\n        @Override\n        public String toString() {\n            final StringBuilder sb = new StringBuilder(\n                    Long.toString(digits[digits.length-1]));\n\n            for (int i = digits.length - 2; i >= 0; --i) {\n                sb.append(String.format("%0" + RADIX_LEN + "d", digits[i]));\n            }\n            return sb.toString();\n        }\n\n        public static BigInt multiply(BigInt x, BigInt y) {\n            long[] z = new long[x.digits.length + y.digits.length];\n            for (int i = 0; i < x.digits.length; ++i) {\n                for (int j = 0; j < y.digits.length; ++j) {\n                    z[i + j] += x.digits[i] * y.digits[j];\n                    z[i + j + 1] += z[i + j] / BIGINT_RADIX;\n                    z[i + j] %= BIGINT_RADIX;\n                }\n            }\n            // find the first 0 from right to left\n            int i = z.length - 1;\n            for (; i > 0 && z[i] == 0; --i) /* empty */;\n\n            if (i == z.length - 1) {\n                return new BigInt(z);\n            } else { // make a copy\n                long[] tmp = new long[i + 1];\n                System.arraycopy(z, 0, tmp, 0, i + 1);\n                return new BigInt(tmp);\n            }\n        }\n    }\n}\n'})})}),(0,s.jsx)(l.A,{value:"cpp",children:(0,s.jsx)(e.pre,{children:(0,s.jsx)(e.code,{className:"language-cpp",children:"// Multiply Strings\n// 9\u4e2a\u5b57\u7b26\u5bf9\u5e94\u4e00\u4e2aint64_t\n// \u65f6\u95f4\u590d\u6742\u5ea6O(n*m/81)\uff0c\u7a7a\u95f4\u590d\u6742\u5ea6O((n+m)/9)\n/** \u5927\u6574\u6570\u7c7b. */\nclass BigInt {\npublic:\n    /**\n     * @brief \u6784\u9020\u51fd\u6570\uff0c\u5c06\u5b57\u7b26\u4e32\u8f6c\u5316\u4e3a\u5927\u6574\u6570.\n     * @param[in] s \u8f93\u5165\u7684\u5b57\u7b26\u4e32\n     * @return \u65e0\n     */\n    BigInt(string s) {\n        vector<int64_t> result;\n        result.reserve(s.size() / RADIX_LEN + 1);\n\n        for (int i = s.size(); i > 0; i -= RADIX_LEN) {  // [i-RADIX_LEN, i)\n            int temp = 0;\n            const int low = max(i - RADIX_LEN, 0);\n            for (int j = low; j < i; j++) {\n                temp = temp * 10 + s[j] - '0';\n            }\n            result.push_back(temp);\n        }\n        elems = result;\n    }\n    /**\n     * @brief \u5c06\u6574\u6570\u8f6c\u5316\u4e3a\u5b57\u7b26\u4e32.\n     * @return \u5b57\u7b26\u4e32\n     */\n    string toString() {\n        stringstream result;\n        bool started = false; // \u7528\u4e8e\u8df3\u8fc7\u524d\u5bfc0\n        for (auto i = elems.rbegin(); i != elems.rend(); i++) {\n            if (started) { // \u5982\u679c\u591a\u4f59\u76840\u5df2\u7ecf\u90fd\u8df3\u8fc7\uff0c\u5219\u8f93\u51fa\n                result << setw(RADIX_LEN) << setfill('0') << *i;\n            } else {\n                result << *i;\n                started = true; // \u78b0\u5230\u7b2c\u4e00\u4e2a\u975e0\u7684\u503c\uff0c\u5c31\u8bf4\u660e\u591a\u4f59\u76840\u5df2\u7ecf\u90fd\u8df3\u8fc7\n            }\n        }\n\n        if (!started) return \"0\"; // \u5f53x\u5168\u4e3a0\u65f6\n        else return result.str();\n    }\n\n    /**\n     * @brief \u5927\u6574\u6570\u4e58\u6cd5.\n     * @param[in] x x\n     * @param[in] y y\n     * @return \u5927\u6574\u6570\n     */\n    static BigInt multiply(const BigInt &x, const BigInt &y) {\n        vector<int64_t> z(x.elems.size() + y.elems.size(), 0);\n\n        for (size_t i = 0; i < y.elems.size(); i++) {\n            for (size_t j = 0; j < x.elems.size(); j++) { // \u7528y[i]\u53bb\u4e58\u4ee5x\u7684\u5404\u4f4d\n                //  \u4e24\u6570\u7b2ci, j\u4f4d\u76f8\u4e58\uff0c\u7d2f\u52a0\u5230\u7ed3\u679c\u7684\u7b2ci+j\u4f4d\n                z[i + j] += y.elems[i] * x.elems[j];\n\n                if (z[i + j] >= BIGINT_RADIX) { //  \u770b\u662f\u5426\u8981\u8fdb\u4f4d\n                    z[i + j + 1] += z[i + j] / BIGINT_RADIX; //  \u8fdb\u4f4d\n                    z[i + j] %= BIGINT_RADIX;\n                }\n            }\n        }\n        while (z.back() == 0) z.pop_back();  // \u6ca1\u6709\u8fdb\u4f4d\uff0c\u53bb\u6389\u6700\u9ad8\u4f4d\u76840\n        return BigInt(z);\n    }\n\nprivate:\n    typedef long long int64_t;\n    /** \u4e00\u4e2a\u6570\u7ec4\u5143\u7d20\u5bf9\u5e949\u4e2a\u5341\u8fdb\u5236\u4f4d\uff0c\u5373\u6570\u7ec4\u662f\u4ebf\u8fdb\u5236\u7684\n     * \u56e0\u4e3a 1000000000 * 1000000000 \u6ca1\u6709\u8d85\u8fc7 2^63-1\n     */\n    const static int BIGINT_RADIX = 1000000000;\n    const static int RADIX_LEN = 9;\n    /** \u4e07\u8fdb\u5236\u6574\u6570. */\n    vector<int64_t> elems;\n    BigInt(const vector<int64_t> num) : elems(num) {}\n};\n\n\nclass Solution {\npublic:\n    string multiply(string num1, string num2) {\n        BigInt x(num1);\n        BigInt y(num2);\n        return BigInt::multiply(x, y).toString();\n    }\n};\n"})})})]}),"\n",(0,s.jsx)(e.h3,{id:"\u76f8\u5173\u9898\u76ee",children:"\u76f8\u5173\u9898\u76ee"}),"\n",(0,s.jsxs)(e.ul,{children:["\n",(0,s.jsx)(e.li,{children:(0,s.jsx)(e.a,{href:"/simulation/add-strings",children:"Add Strings"})}),"\n"]})]})}function d(n={}){const{wrapper:e}={...(0,r.R)(),...n.components};return e?(0,s.jsx)(e,{...n,children:(0,s.jsx)(g,{...n})}):g(n)}},19365:(n,e,t)=>{t.d(e,{A:()=>a});t(96540);var i=t(34164);const s={tabItem:"tabItem_Ymn6"};var r=t(74848);function a(n){let{children:e,hidden:t,className:a}=n;return(0,r.jsx)("div",{role:"tabpanel",className:(0,i.A)(s.tabItem,a),hidden:t,children:e})}},11470:(n,e,t)=>{t.d(e,{A:()=>y});var i=t(96540),s=t(34164),r=t(23104),a=t(56347),l=t(205),u=t(57485),c=t(31682),o=t(70679);function m(n){return i.Children.toArray(n).filter((n=>"\n"!==n)).map((n=>{if(!n||(0,i.isValidElement)(n)&&function(n){const{props:e}=n;return!!e&&"object"==typeof e&&"value"in e}(n))return n;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof n.type?n.type:n.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))?.filter(Boolean)??[]}function g(n){const{values:e,children:t}=n;return(0,i.useMemo)((()=>{const n=e??function(n){return m(n).map((n=>{let{props:{value:e,label:t,attributes:i,default:s}}=n;return{value:e,label:t,attributes:i,default:s}}))}(t);return function(n){const e=(0,c.XI)(n,((n,e)=>n.value===e.value));if(e.length>0)throw new Error(`Docusaurus error: Duplicate values "${e.map((n=>n.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(n),n}),[e,t])}function d(n){let{value:e,tabValues:t}=n;return t.some((n=>n.value===e))}function p(n){let{queryString:e=!1,groupId:t}=n;const s=(0,a.W6)(),r=function(n){let{queryString:e=!1,groupId:t}=n;if("string"==typeof e)return e;if(!1===e)return null;if(!0===e&&!t)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return t??null}({queryString:e,groupId:t});return[(0,u.aZ)(r),(0,i.useCallback)((n=>{if(!r)return;const e=new URLSearchParams(s.location.search);e.set(r,n),s.replace({...s.location,search:e.toString()})}),[r,s])]}function h(n){const{defaultValue:e,queryString:t=!1,groupId:s}=n,r=g(n),[a,u]=(0,i.useState)((()=>function(n){let{defaultValue:e,tabValues:t}=n;if(0===t.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(e){if(!d({value:e,tabValues:t}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${e}" but none of its children has the corresponding value. Available values are: ${t.map((n=>n.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return e}const i=t.find((n=>n.default))??t[0];if(!i)throw new Error("Unexpected error: 0 tabValues");return i.value}({defaultValue:e,tabValues:r}))),[c,m]=p({queryString:t,groupId:s}),[h,j]=function(n){let{groupId:e}=n;const t=function(n){return n?`docusaurus.tab.${n}`:null}(e),[s,r]=(0,o.Dv)(t);return[s,(0,i.useCallback)((n=>{t&&r.set(n)}),[t,r])]}({groupId:s}),f=(()=>{const n=c??h;return d({value:n,tabValues:r})?n:null})();(0,l.A)((()=>{f&&u(f)}),[f]);return{selectedValue:a,selectValue:(0,i.useCallback)((n=>{if(!d({value:n,tabValues:r}))throw new Error(`Can't select invalid tab value=${n}`);u(n),m(n),j(n)}),[m,j,r]),tabValues:r}}var j=t(92303);const f={tabList:"tabList__CuJ",tabItem:"tabItem_LNqP"};var b=t(74848);function x(n){let{className:e,block:t,selectedValue:i,selectValue:a,tabValues:l}=n;const u=[],{blockElementScrollPositionUntilNextRender:c}=(0,r.a_)(),o=n=>{const e=n.currentTarget,t=u.indexOf(e),s=l[t].value;s!==i&&(c(e),a(s))},m=n=>{let e=null;switch(n.key){case"Enter":o(n);break;case"ArrowRight":{const t=u.indexOf(n.currentTarget)+1;e=u[t]??u[0];break}case"ArrowLeft":{const t=u.indexOf(n.currentTarget)-1;e=u[t]??u[u.length-1];break}}e?.focus()};return(0,b.jsx)("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,s.A)("tabs",{"tabs--block":t},e),children:l.map((n=>{let{value:e,label:t,attributes:r}=n;return(0,b.jsx)("li",{role:"tab",tabIndex:i===e?0:-1,"aria-selected":i===e,ref:n=>u.push(n),onKeyDown:m,onClick:o,...r,className:(0,s.A)("tabs__item",f.tabItem,r?.className,{"tabs__item--active":i===e}),children:t??e},e)}))})}function v(n){let{lazy:e,children:t,selectedValue:r}=n;const a=(Array.isArray(t)?t:[t]).filter(Boolean);if(e){const n=a.find((n=>n.props.value===r));return n?(0,i.cloneElement)(n,{className:(0,s.A)("margin-top--md",n.props.className)}):null}return(0,b.jsx)("div",{className:"margin-top--md",children:a.map(((n,e)=>(0,i.cloneElement)(n,{key:e,hidden:n.props.value!==r})))})}function I(n){const e=h(n);return(0,b.jsxs)("div",{className:(0,s.A)("tabs-container",f.tabList),children:[(0,b.jsx)(x,{...e,...n}),(0,b.jsx)(v,{...e,...n})]})}function y(n){const e=(0,j.A)();return(0,b.jsx)(I,{...n,children:m(n.children)},String(e))}},28453:(n,e,t)=>{t.d(e,{R:()=>a,x:()=>l});var i=t(96540);const s={},r=i.createContext(s);function a(n){const e=i.useContext(r);return i.useMemo((function(){return"function"==typeof n?n(e):{...e,...n}}),[e,n])}function l(n){let e;return e=n.disableParentContext?"function"==typeof n.components?n.components(s):n.components||s:a(n.components),i.createElement(r.Provider,{value:e},n.children)}}}]);