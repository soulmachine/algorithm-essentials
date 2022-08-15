"use strict";(self.webpackChunkalgorithm_essentials=self.webpackChunkalgorithm_essentials||[]).push([[5736],{3905:(e,n,t)=>{t.d(n,{Zo:()=>c,kt:()=>f});var a=t(7294);function r(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function l(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);n&&(a=a.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,a)}return t}function i(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?l(Object(t),!0).forEach((function(n){r(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):l(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function s(e,n){if(null==e)return{};var t,a,r=function(e,n){if(null==e)return{};var t,a,r={},l=Object.keys(e);for(a=0;a<l.length;a++)t=l[a],n.indexOf(t)>=0||(r[t]=e[t]);return r}(e,n);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(a=0;a<l.length;a++)t=l[a],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}var o=a.createContext({}),u=function(e){var n=a.useContext(o),t=n;return e&&(t="function"==typeof e?e(n):i(i({},n),e)),t},c=function(e){var n=u(e.components);return a.createElement(o.Provider,{value:n},e.children)},d={inlineCode:"code",wrapper:function(e){var n=e.children;return a.createElement(a.Fragment,{},n)}},p=a.forwardRef((function(e,n){var t=e.components,r=e.mdxType,l=e.originalType,o=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),p=u(t),f=r,m=p["".concat(o,".").concat(f)]||p[f]||d[f]||l;return t?a.createElement(m,i(i({ref:n},c),{},{components:t})):a.createElement(m,i({ref:n},c))}));function f(e,n){var t=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var l=t.length,i=new Array(l);i[0]=p;var s={};for(var o in n)hasOwnProperty.call(n,o)&&(s[o]=n[o]);s.originalType=e,s.mdxType="string"==typeof e?e:r,i[1]=s;for(var u=2;u<l;u++)i[u]=t[u];return a.createElement.apply(null,i)}return a.createElement.apply(null,t)}p.displayName="MDXCreateElement"},5162:(e,n,t)=>{t.d(n,{Z:()=>i});var a=t(7294),r=t(6010);const l="tabItem_Ymn6";function i(e){let{children:n,hidden:t,className:i}=e;return a.createElement("div",{role:"tabpanel",className:(0,r.Z)(l,i),hidden:t},n)}},5488:(e,n,t)=>{t.d(n,{Z:()=>f});var a=t(7462),r=t(7294),l=t(6010),i=t(2389),s=t(7392),o=t(7094),u=t(2466);const c="tabList__CuJ",d="tabItem_LNqP";function p(e){var n,t;const{lazy:i,block:p,defaultValue:f,values:m,groupId:b,className:v}=e,h=r.Children.map(e.children,(e=>{if((0,r.isValidElement)(e)&&"value"in e.props)return e;throw new Error("Docusaurus error: Bad <Tabs> child <"+("string"==typeof e.type?e.type:e.type.name)+'>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.')})),y=null!=m?m:h.map((e=>{let{props:{value:n,label:t,attributes:a}}=e;return{value:n,label:t,attributes:a}})),k=(0,s.l)(y,((e,n)=>e.value===n.value));if(k.length>0)throw new Error('Docusaurus error: Duplicate values "'+k.map((e=>e.value)).join(", ")+'" found in <Tabs>. Every value needs to be unique.');const g=null===f?f:null!=(n=null!=f?f:null==(t=h.find((e=>e.props.default)))?void 0:t.props.value)?n:h[0].props.value;if(null!==g&&!y.some((e=>e.value===g)))throw new Error('Docusaurus error: The <Tabs> has a defaultValue "'+g+'" but none of its children has the corresponding value. Available values are: '+y.map((e=>e.value)).join(", ")+". If you intend to show no default tab, use defaultValue={null} instead.");const{tabGroupChoices:x,setTabGroupChoices:j}=(0,o.U)(),[G,O]=(0,r.useState)(g),w=[],{blockElementScrollPositionUntilNextRender:N}=(0,u.o5)();if(null!=b){const e=x[b];null!=e&&e!==G&&y.some((n=>n.value===e))&&O(e)}const T=e=>{const n=e.currentTarget,t=w.indexOf(n),a=y[t].value;a!==G&&(N(n),O(a),null!=b&&j(b,String(a)))},P=e=>{var n;let t=null;switch(e.key){case"ArrowRight":{var a;const n=w.indexOf(e.currentTarget)+1;t=null!=(a=w[n])?a:w[0];break}case"ArrowLeft":{var r;const n=w.indexOf(e.currentTarget)-1;t=null!=(r=w[n])?r:w[w.length-1];break}}null==(n=t)||n.focus()};return r.createElement("div",{className:(0,l.Z)("tabs-container",c)},r.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,l.Z)("tabs",{"tabs--block":p},v)},y.map((e=>{let{value:n,label:t,attributes:i}=e;return r.createElement("li",(0,a.Z)({role:"tab",tabIndex:G===n?0:-1,"aria-selected":G===n,key:n,ref:e=>w.push(e),onKeyDown:P,onFocus:T,onClick:T},i,{className:(0,l.Z)("tabs__item",d,null==i?void 0:i.className,{"tabs__item--active":G===n})}),null!=t?t:n)}))),i?(0,r.cloneElement)(h.filter((e=>e.props.value===G))[0],{className:"margin-top--md"}):r.createElement("div",{className:"margin-top--md"},h.map(((e,n)=>(0,r.cloneElement)(e,{key:n,hidden:e.props.value!==G})))))}function f(e){const n=(0,i.Z)();return r.createElement(p,(0,a.Z)({key:String(n)},e))}},2850:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>c,contentTitle:()=>o,default:()=>f,frontMatter:()=>s,metadata:()=>u,toc:()=>d});var a=t(7462),r=(t(7294),t(3905)),l=t(5488),i=t(5162);const s={title:"Unique Paths II"},o=void 0,u={unversionedId:"dfs/unique-paths-ii",id:"dfs/unique-paths-ii",title:"Unique Paths II",description:"\u63cf\u8ff0",source:"@site/docs/dfs/unique-paths-ii.md",sourceDirName:"dfs",slug:"/dfs/unique-paths-ii",permalink:"/dfs/unique-paths-ii",draft:!1,editUrl:"https://github.com/soulmachine/algorithm-essentials/edit/master/docs/dfs/unique-paths-ii.md",tags:[],version:"current",frontMatter:{title:"Unique Paths II"},sidebar:"someSidebar",previous:{title:"Unique Paths",permalink:"/dfs/unique-paths"},next:{title:"N-Queens",permalink:"/dfs/n-queens"}},c={},d=[{value:"\u63cf\u8ff0",id:"\u63cf\u8ff0",level:3},{value:"\u5907\u5fd8\u5f55\u6cd5",id:"\u5907\u5fd8\u5f55\u6cd5",level:3},{value:"\u52a8\u89c4",id:"\u52a8\u89c4",level:3},{value:"\u76f8\u5173\u9898\u76ee",id:"\u76f8\u5173\u9898\u76ee",level:3}],p={toc:d};function f(e){let{components:n,...t}=e;return(0,r.kt)("wrapper",(0,a.Z)({},p,t,{components:n,mdxType:"MDXLayout"}),(0,r.kt)("h3",{id:"\u63cf\u8ff0"},"\u63cf\u8ff0"),(0,r.kt)("p",null,'Follow up for "Unique Paths":'),(0,r.kt)("p",null,"Now consider if some obstacles are added to the grids. How many unique paths would there be?"),(0,r.kt)("p",null,"An obstacle and empty space is marked as 1 and 0 respectively in the grid."),(0,r.kt)("p",null,"For example,"),(0,r.kt)("p",null,"There is one obstacle in the middle of a ",(0,r.kt)("inlineCode",{parentName:"p"},"3 \xd7 3")," grid as illustrated below."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"[\n  [0,0,0],\n  [0,1,0],\n  [0,0,0]\n]\n")),(0,r.kt)("p",null,"The total number of unique paths is 2."),(0,r.kt)("p",null,"Note: ",(0,r.kt)("inlineCode",{parentName:"p"},"m")," and ",(0,r.kt)("inlineCode",{parentName:"p"},"n")," will be at most 100."),(0,r.kt)("h3",{id:"\u5907\u5fd8\u5f55\u6cd5"},"\u5907\u5fd8\u5f55\u6cd5"),(0,r.kt)("p",null,"\u5728\u4e0a\u4e00\u9898\u7684\u57fa\u7840\u4e0a\u6539\u4e00\u4e0b\u5373\u53ef\u3002\u76f8\u6bd4\u52a8\u89c4\uff0c\u7b80\u5355\u5f97\u591a\u3002"),(0,r.kt)(l.Z,{defaultValue:"java",values:[{label:"Java",value:"java"},{label:"C++",value:"cpp"}],mdxType:"Tabs"},(0,r.kt)(i.Z,{value:"java",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-java"},"// Unique Paths II\n// \u6df1\u641c + \u7f13\u5b58\uff0c\u5373\u5907\u5fd8\u5f55\u6cd5\npublic class Solution {\n    public int uniquePathsWithObstacles(int[][] obstacleGrid) {\n        final int m = obstacleGrid.length;\n        final int n = obstacleGrid[0].length;\n        if (obstacleGrid[0][0] != 0 ||\n                obstacleGrid[m - 1][n - 1] != 0) return 0;\n\n        f = new int[m][n];\n        f[0][0] = obstacleGrid[0][0] != 0 ? 0 : 1;\n        return dfs(obstacleGrid, m - 1, n - 1);\n    }\n\n    // @return \u4ece (0, 0) \u5230 (x, y) \u7684\u8def\u5f84\u603b\u6570\n    int dfs(int[][] obstacleGrid, int x, int y) {\n        if (x < 0 || y < 0) return 0; // \u6570\u636e\u975e\u6cd5\uff0c\u7ec8\u6b62\u6761\u4ef6\n\n        // (x,y)\u662f\u969c\u788d\n        if (obstacleGrid[x][y] != 0) return 0;\n\n        if (x == 0 && y == 0) return f[0][0]; // \u56de\u5230\u8d77\u70b9\uff0c\u6536\u655b\u6761\u4ef6\n\n        if (f[x][y] > 0) {\n            return f[x][y];\n        } else {\n            return f[x][y] = dfs(obstacleGrid, x - 1, y) +\n                    dfs(obstacleGrid, x, y - 1);\n        }\n    }\n    private int[][] f;  // \u7f13\u5b58\n}\n"))),(0,r.kt)(i.Z,{value:"cpp",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-cpp"},"// Unique Paths II\n// \u6df1\u641c + \u7f13\u5b58\uff0c\u5373\u5907\u5fd8\u5f55\u6cd5\nclass Solution {\npublic:\n    int uniquePathsWithObstacles(const vector<vector<int> >& obstacleGrid) {\n        const int m = obstacleGrid.size();\n        const int n = obstacleGrid[0].size();\n        if (obstacleGrid[0][0] || obstacleGrid[m - 1][n - 1]) return 0;\n\n        f = vector<vector<int> >(m, vector<int>(n, 0));\n        f[0][0] = obstacleGrid[0][0] ? 0 : 1;\n        return dfs(obstacleGrid, m - 1, n - 1);\n    }\nprivate:\n    vector<vector<int> > f;  // \u7f13\u5b58\n\n    // @return \u4ece (0, 0) \u5230 (x, y) \u7684\u8def\u5f84\u603b\u6570\n    int dfs(const vector<vector<int> >& obstacleGrid,\n            int x, int y) {\n        if (x < 0 || y < 0) return 0; // \u6570\u636e\u975e\u6cd5\uff0c\u7ec8\u6b62\u6761\u4ef6\n\n        // (x,y)\u662f\u969c\u788d\n        if (obstacleGrid[x][y]) return 0;\n\n        if (x == 0 and y == 0) return f[0][0]; // \u56de\u5230\u8d77\u70b9\uff0c\u6536\u655b\u6761\u4ef6\n\n        if (f[x][y] > 0) {\n            return f[x][y];\n        } else {\n            return f[x][y] = dfs(obstacleGrid, x - 1, y) +\n                dfs(obstacleGrid, x, y - 1);\n        }\n    }\n};\n")))),(0,r.kt)("h3",{id:"\u52a8\u89c4"},"\u52a8\u89c4"),(0,r.kt)("p",null,"\u4e0e\u4e0a\u4e00\u9898\u7c7b\u4f3c\uff0c\u4f46\u8981\u7279\u522b\u6ce8\u610f\u7b2c\u4e00\u5217\u7684\u969c\u788d\u3002\u5728\u4e0a\u4e00\u9898\u4e2d\uff0c\u7b2c\u4e00\u5217\u5168\u90e8\u662f 1\uff0c\u4f46\u662f\u5728\u8fd9\u4e00\u9898\u4e2d\u4e0d\u540c\uff0c\u7b2c\u4e00\u5217\u5982\u679c\u67d0\u4e00\u884c\u6709\u969c\u788d\u7269\uff0c\u90a3\u4e48\u540e\u9762\u7684\u884c\u5168\u4e3a 0\u3002"),(0,r.kt)(l.Z,{defaultValue:"java",values:[{label:"Java",value:"java"},{label:"C++",value:"cpp"}],mdxType:"Tabs"},(0,r.kt)(i.Z,{value:"java",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-java"},"// Unique Paths II\n// \u52a8\u89c4\uff0c\u6eda\u52a8\u6570\u7ec4\n// \u65f6\u95f4\u590d\u6742\u5ea6 O(n^2)\uff0c\u7a7a\u95f4\u590d\u6742\u5ea6 O(n)\npublic class Solution {\npublic int uniquePathsWithObstacles(int[][] obstacleGrid) {\nfinal int m = obstacleGrid.length;\nfinal int n = obstacleGrid[0].length;\nif (obstacleGrid[0][0] != 0 ||\nobstacleGrid[m-1][n-1] != 0) return 0;\n\n        int[] f = new int[n];\n        f[0] = obstacleGrid[0][0] != 0 ? 0 : 1;\n\n        for (int i = 0; i < m; i++) {\n            f[0] = f[0] == 0 ? 0 : (obstacleGrid[i][0] != 0 ? 0 : 1);\n            for (int j = 1; j < n; j++)\n                f[j] = obstacleGrid[i][j] != 0 ? 0 : (f[j] + f[j - 1]);\n        }\n\n        return f[n - 1];\n    }\n\n}\n"))),(0,r.kt)(i.Z,{value:"cpp",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-cpp"},"// Unique Paths II\n// \u52a8\u89c4\uff0c\u6eda\u52a8\u6570\u7ec4\n// \u65f6\u95f4\u590d\u6742\u5ea6O(n^2)\uff0c\u7a7a\u95f4\u590d\u6742\u5ea6O(n)\nclass Solution {\npublic:\n    int uniquePathsWithObstacles(vector<vector<int> > &obstacleGrid) {\n        const int m = obstacleGrid.size();\n        const int n = obstacleGrid[0].size();\n        if (obstacleGrid[0][0] || obstacleGrid[m-1][n-1]) return 0;\n\n        vector<int> f(n, 0);\n        f[0] = obstacleGrid[0][0] ? 0 : 1;\n\n        for (int i = 0; i < m; i++) {\n            f[0] = f[0] == 0 ? 0 : (obstacleGrid[i][0] ? 0 : 1);\n            for (int j = 1; j < n; j++)\n                f[j] = obstacleGrid[i][j] ? 0 : (f[j] + f[j - 1]);\n        }\n\n        return f[n - 1];\n    }\n};\n")))),(0,r.kt)("h3",{id:"\u76f8\u5173\u9898\u76ee"},"\u76f8\u5173\u9898\u76ee"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"/dfs/unique-paths"},"Unique Paths")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"/dp/minimum-path-sum"},"Minimum Path Sum"))))}f.isMDXComponent=!0}}]);