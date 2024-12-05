"use strict";(self.webpackChunkalgorithm_essentials=self.webpackChunkalgorithm_essentials||[]).push([[9343],{92638:(e,n,s)=>{s.r(n),s.d(n,{assets:()=>h,contentTitle:()=>o,default:()=>u,frontMatter:()=>c,metadata:()=>t,toc:()=>d});const t=JSON.parse('{"id":"bfs/graph/the-maze-ii","title":"The Maze II","description":"\u63cf\u8ff0","source":"@site/docs/bfs/graph/the-maze-ii.md","sourceDirName":"bfs/graph","slug":"/bfs/graph/the-maze-ii","permalink":"/en/bfs/graph/the-maze-ii","draft":false,"unlisted":false,"tags":[],"version":"current","frontMatter":{"title":"The Maze II"},"sidebar":"docs","previous":{"title":"The Maze","permalink":"/en/bfs/graph/the-maze"},"next":{"title":"The Maze III","permalink":"/en/bfs/graph/the-maze-iii"}}');var a=s(74848),r=s(28453),l=s(11470),i=s(19365);const c={title:"The Maze II"},o=void 0,h={},d=[{value:"\u63cf\u8ff0",id:"\u63cf\u8ff0",level:3},{value:"\u5206\u6790",id:"\u5206\u6790",level:3},{value:"\u4ee3\u7801",id:"\u4ee3\u7801",level:3},{value:"\u76f8\u5173\u9898\u76ee",id:"\u76f8\u5173\u9898\u76ee",level:3}];function m(e){const n={a:"a",annotation:"annotation",blockquote:"blockquote",br:"br",code:"code",h3:"h3",li:"li",math:"math",mi:"mi",mo:"mo",mrow:"mrow",p:"p",pre:"pre",semantics:"semantics",span:"span",strong:"strong",ul:"ul",...(0,r.R)(),...e.components};return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(n.h3,{id:"\u63cf\u8ff0",children:"\u63cf\u8ff0"}),"\n",(0,a.jsxs)(n.p,{children:["There is a ",(0,a.jsx)(n.strong,{children:"ball"})," in a maze with empty spaces and walls. The ball can go through empty spaces by rolling ",(0,a.jsx)(n.strong,{children:"up"}),", ",(0,a.jsx)(n.strong,{children:"down"}),", ",(0,a.jsx)(n.strong,{children:"left"})," or ",(0,a.jsx)(n.strong,{children:"right"}),", but it won't stop rolling until hitting a wall. When the ball stops, it could choose the next direction."]}),"\n",(0,a.jsxs)(n.p,{children:["Given the ball's ",(0,a.jsx)(n.strong,{children:"start position"}),", the ",(0,a.jsx)(n.strong,{children:"destination"})," and the ",(0,a.jsx)(n.strong,{children:"maze"}),", find the shortest distance for the ball to stop at the destination. The distance is defined by the number of ",(0,a.jsx)(n.strong,{children:"empty spaces"})," traveled by the ball from the start position (excluded) to the destination (included). If the ball cannot stop at the destination, return -1."]}),"\n",(0,a.jsx)(n.p,{children:"The maze is represented by a binary 2D array. 1 means the wall and 0 means the empty space. You may assume that the borders of the maze are all walls. The start and destination coordinates are represented by row and column indexes."}),"\n",(0,a.jsxs)(n.p,{children:[(0,a.jsx)(n.strong,{children:"Example 1"}),":"]}),"\n",(0,a.jsx)("img",{src:"/img/maze_1_example_1.png",width:"60%"}),"\n",(0,a.jsxs)(n.blockquote,{children:["\n",(0,a.jsxs)(n.p,{children:[(0,a.jsx)(n.strong,{children:"Input 1"}),": a maze represented by a 2D array"]}),"\n",(0,a.jsxs)(n.p,{children:["0 0 1 0 0",(0,a.jsx)(n.br,{}),"\n","0 0 0 0 0",(0,a.jsx)(n.br,{}),"\n","0 0 0 1 0",(0,a.jsx)(n.br,{}),"\n","1 1 0 1 1",(0,a.jsx)(n.br,{}),"\n","0 0 0 0 0"]}),"\n",(0,a.jsxs)(n.p,{children:[(0,a.jsx)(n.strong,{children:"Input 2"}),": start coordinate (rowStart, colStart) = (0, 4)",(0,a.jsx)(n.br,{}),"\n",(0,a.jsx)(n.strong,{children:"Input 3"}),": destination coordinate (rowDest, colDest) = (4, 4)"]}),"\n",(0,a.jsxs)(n.p,{children:[(0,a.jsx)(n.strong,{children:"Output"}),": 12"]}),"\n",(0,a.jsxs)(n.p,{children:[(0,a.jsx)(n.strong,{children:"Explanation"}),": One shortest way is : left -> down -> left -> down -> right -> down -> right.",(0,a.jsx)(n.br,{}),"\n","The total distance is 1 + 1 + 3 + 1 + 2 + 2 + 2 = 12."]}),"\n"]}),"\n",(0,a.jsxs)(n.p,{children:[(0,a.jsx)(n.strong,{children:"Example 2"}),":"]}),"\n",(0,a.jsx)("img",{src:"/img/maze_1_example_2.png",width:"60%"}),"\n",(0,a.jsxs)(n.blockquote,{children:["\n",(0,a.jsxs)(n.p,{children:[(0,a.jsx)(n.strong,{children:"Input 1"}),": a maze represented by a 2D array"]}),"\n",(0,a.jsxs)(n.p,{children:["0 0 1 0 0",(0,a.jsx)(n.br,{}),"\n","0 0 0 0 0",(0,a.jsx)(n.br,{}),"\n","0 0 0 1 0",(0,a.jsx)(n.br,{}),"\n","1 1 0 1 1",(0,a.jsx)(n.br,{}),"\n","0 0 0 0 0"]}),"\n",(0,a.jsxs)(n.p,{children:[(0,a.jsx)(n.strong,{children:"Input 2"}),": start coordinate (rowStart, colStart) = (0, 4)",(0,a.jsx)(n.br,{}),"\n",(0,a.jsx)(n.strong,{children:"Input 3"}),": destination coordinate (rowDest, colDest) = (3, 2)"]}),"\n",(0,a.jsxs)(n.p,{children:[(0,a.jsx)(n.strong,{children:"Output"}),": -1"]}),"\n",(0,a.jsxs)(n.p,{children:[(0,a.jsx)(n.strong,{children:"Explanation"}),": There is no way for the ball to stop at the destination."]}),"\n"]}),"\n",(0,a.jsx)(n.h3,{id:"\u5206\u6790",children:"\u5206\u6790"}),"\n",(0,a.jsxs)(n.p,{children:["\u6c42\u6700\u77ed\u8def\u5f84\uff0c\u5f88\u663e\u7136\uff0c\u7528 BFS\u3002\u901a\u5e38\u5224\u65ad\u91cd\u590d\u7528\u4e00\u4e2a\u5e03\u5c14\u4e8c\u7ef4\u77e9\u9635",(0,a.jsx)(n.code,{children:"visited"}),"\u5373\u53ef\uff0c\u4e0d\u8fc7\u672c\u9898\u5149\u8fd9\u6837\u5224\u91cd\u662f\u4e0d\u591f\u7684\uff0c\u9700\u8981\u5224\u65ad\u8def\u5f84\u662f\u5426\u66f4\u77ed\uff0c\u56e0\u4e3a\u672c\u9898\u4e00\u6b65\u4e0d\u662f\u5355\u7eaf\u7684\u53ea\u8d70\u4e00\u6b65\uff0c\u800c\u662f\u8981\u4e00\u8def\u78b0\u5230\u5899\u4e3a\u6b62\uff0c\u6240\u4ee5\u7528\u539f\u59cb\u7684BFS\u662f\u4e0d\u884c\u7684\u3002"]}),"\n",(0,a.jsxs)(n.p,{children:["\u65f6\u95f4\u590d\u6742\u5ea6 ",(0,a.jsxs)(n.span,{className:"katex",children:[(0,a.jsx)(n.span,{className:"katex-mathml",children:(0,a.jsx)(n.math,{xmlns:"http://www.w3.org/1998/Math/MathML",children:(0,a.jsxs)(n.semantics,{children:[(0,a.jsxs)(n.mrow,{children:[(0,a.jsx)(n.mi,{children:"O"}),(0,a.jsx)(n.mo,{stretchy:"false",children:"("}),(0,a.jsx)(n.mi,{children:"M"}),(0,a.jsx)(n.mo,{children:"\xd7"}),(0,a.jsx)(n.mi,{children:"N"}),(0,a.jsx)(n.mo,{children:"\xd7"}),(0,a.jsx)(n.mi,{children:"max"}),(0,a.jsx)(n.mo,{children:"\u2061"}),(0,a.jsxs)(n.mrow,{children:[(0,a.jsx)(n.mo,{fence:"true",children:"{"}),(0,a.jsx)(n.mi,{children:"M"}),(0,a.jsx)(n.mo,{separator:"true",children:","}),(0,a.jsx)(n.mi,{children:"N"}),(0,a.jsx)(n.mo,{fence:"true",children:"}"})]}),(0,a.jsx)(n.mo,{stretchy:"false",children:")"})]}),(0,a.jsx)(n.annotation,{encoding:"application/x-tex",children:"O(M \\times N \\times \\max\\left\\{M, N\\right\\})"})]})})}),(0,a.jsxs)(n.span,{className:"katex-html","aria-hidden":"true",children:[(0,a.jsxs)(n.span,{className:"base",children:[(0,a.jsx)(n.span,{className:"strut",style:{height:"1em",verticalAlign:"-0.25em"}}),(0,a.jsx)(n.span,{className:"mord mathnormal",style:{marginRight:"0.02778em"},children:"O"}),(0,a.jsx)(n.span,{className:"mopen",children:"("}),(0,a.jsx)(n.span,{className:"mord mathnormal",style:{marginRight:"0.10903em"},children:"M"}),(0,a.jsx)(n.span,{className:"mspace",style:{marginRight:"0.2222em"}}),(0,a.jsx)(n.span,{className:"mbin",children:"\xd7"}),(0,a.jsx)(n.span,{className:"mspace",style:{marginRight:"0.2222em"}})]}),(0,a.jsxs)(n.span,{className:"base",children:[(0,a.jsx)(n.span,{className:"strut",style:{height:"0.7667em",verticalAlign:"-0.0833em"}}),(0,a.jsx)(n.span,{className:"mord mathnormal",style:{marginRight:"0.10903em"},children:"N"}),(0,a.jsx)(n.span,{className:"mspace",style:{marginRight:"0.2222em"}}),(0,a.jsx)(n.span,{className:"mbin",children:"\xd7"}),(0,a.jsx)(n.span,{className:"mspace",style:{marginRight:"0.2222em"}})]}),(0,a.jsxs)(n.span,{className:"base",children:[(0,a.jsx)(n.span,{className:"strut",style:{height:"1em",verticalAlign:"-0.25em"}}),(0,a.jsx)(n.span,{className:"mop",children:"max"}),(0,a.jsx)(n.span,{className:"mspace",style:{marginRight:"0.1667em"}}),(0,a.jsxs)(n.span,{className:"minner",children:[(0,a.jsx)(n.span,{className:"mopen delimcenter",style:{top:"0em"},children:"{"}),(0,a.jsx)(n.span,{className:"mord mathnormal",style:{marginRight:"0.10903em"},children:"M"}),(0,a.jsx)(n.span,{className:"mpunct",children:","}),(0,a.jsx)(n.span,{className:"mspace",style:{marginRight:"0.1667em"}}),(0,a.jsx)(n.span,{className:"mord mathnormal",style:{marginRight:"0.10903em"},children:"N"}),(0,a.jsx)(n.span,{className:"mclose delimcenter",style:{top:"0em"},children:"}"})]}),(0,a.jsx)(n.span,{className:"mclose",children:")"})]})]})]})," , \u56e0\u4e3a\u8981\u904d\u5386\u6bcf\u4e2a\u4f4d\u7f6e\uff0c\u540c\u65f6\u5728\u6bcf\u4e2a\u4f4d\u7f6e\u8981\u4e00\u76f4\u8d70\u5230\u5899\u3002\u7a7a\u95f4\u590d\u6742\u5ea6 ",(0,a.jsxs)(n.span,{className:"katex",children:[(0,a.jsx)(n.span,{className:"katex-mathml",children:(0,a.jsx)(n.math,{xmlns:"http://www.w3.org/1998/Math/MathML",children:(0,a.jsxs)(n.semantics,{children:[(0,a.jsxs)(n.mrow,{children:[(0,a.jsx)(n.mi,{children:"O"}),(0,a.jsx)(n.mo,{stretchy:"false",children:"("}),(0,a.jsx)(n.mi,{children:"M"}),(0,a.jsx)(n.mo,{children:"\xd7"}),(0,a.jsx)(n.mi,{children:"N"}),(0,a.jsx)(n.mo,{stretchy:"false",children:")"})]}),(0,a.jsx)(n.annotation,{encoding:"application/x-tex",children:"O(M \\times N)"})]})})}),(0,a.jsxs)(n.span,{className:"katex-html","aria-hidden":"true",children:[(0,a.jsxs)(n.span,{className:"base",children:[(0,a.jsx)(n.span,{className:"strut",style:{height:"1em",verticalAlign:"-0.25em"}}),(0,a.jsx)(n.span,{className:"mord mathnormal",style:{marginRight:"0.02778em"},children:"O"}),(0,a.jsx)(n.span,{className:"mopen",children:"("}),(0,a.jsx)(n.span,{className:"mord mathnormal",style:{marginRight:"0.10903em"},children:"M"}),(0,a.jsx)(n.span,{className:"mspace",style:{marginRight:"0.2222em"}}),(0,a.jsx)(n.span,{className:"mbin",children:"\xd7"}),(0,a.jsx)(n.span,{className:"mspace",style:{marginRight:"0.2222em"}})]}),(0,a.jsxs)(n.span,{className:"base",children:[(0,a.jsx)(n.span,{className:"strut",style:{height:"1em",verticalAlign:"-0.25em"}}),(0,a.jsx)(n.span,{className:"mord mathnormal",style:{marginRight:"0.10903em"},children:"N"}),(0,a.jsx)(n.span,{className:"mclose",children:")"})]})]})]}),"\uff0c\u961f\u5217\u91cc\u6700\u574f\u53ef\u80fd\u4f1a\u5b58\u50a8\u6240\u6709\u7684\u4f4d\u7f6e\u3002"]}),"\n",(0,a.jsx)(n.h3,{id:"\u4ee3\u7801",children:"\u4ee3\u7801"}),"\n","\n",(0,a.jsxs)(l.A,{defaultValue:"python",values:[{label:"Python",value:"python"},{label:"Java",value:"java"},{label:"C++",value:"cpp"}],children:[(0,a.jsx)(i.A,{value:"python",children:(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-python",children:"# TODO\n"})})}),(0,a.jsx)(i.A,{value:"java",children:(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-java",children:"// The Maze II\n// BFS\n// Time complexity : O(m*n*max(m,n))\n// Space complexity : O(mn)\npublic class Solution {\n    public int shortestDistance(int[][] maze, int[] start, int[] dest) {\n        final int M = maze.length, N = maze[0].length;\n        int[][] distance = new int[M][N];\n        for (int[] row: distance) Arrays.fill(row, Integer.MAX_VALUE);\n\n        int[][] dirs={{-1, 0}, {1, 0}, {0, -1}, {0, 1}}; // up, down, left, right\n        Queue<int[]> q = new LinkedList<>();\n\n        distance[start[0]][start[1]] = 0;\n        q.offer(start);\n        while (!q.isEmpty()) {\n            int[] cur = q.poll();\n            int x = cur[0], y = cur[1];\n\n            for (int[] dir: dirs) {\n                int newX = x, newY = y;\n                int i = dir[0], j = dir[1];\n                int step = distance[x][y];\n                // walk until hit wall\n                while (0 <= newX + i && newX + i < M && 0 <= newY + j && newY + j < N && maze[newX + i][newY + j] == 0) {\n                    newX += i;\n                    newY += j;\n                    step++;\n                }\n                if (step < distance[newX][newY]) {\n                    distance[newX][newY] = step;\n                    q.offer(new int[] {newX, newY});\n                }\n            }\n        }\n        return distance[dest[0]][dest[1]] == Integer.MAX_VALUE ? -1 : distance[dest[0]][dest[1]];\n    }\n}\n"})})}),(0,a.jsx)(i.A,{value:"cpp",children:(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-cpp",children:"TODO\n"})})})]}),"\n",(0,a.jsx)(n.h3,{id:"\u76f8\u5173\u9898\u76ee",children:"\u76f8\u5173\u9898\u76ee"}),"\n",(0,a.jsxs)(n.ul,{children:["\n",(0,a.jsx)(n.li,{children:(0,a.jsx)(n.a,{href:"/en/bfs/graph/the-maze",children:"The Maze"})}),"\n",(0,a.jsx)(n.li,{children:(0,a.jsx)(n.a,{href:"/en/bfs/graph/the-maze-iii",children:"The Maze III"})}),"\n"]})]})}function u(e={}){const{wrapper:n}={...(0,r.R)(),...e.components};return n?(0,a.jsx)(n,{...e,children:(0,a.jsx)(m,{...e})}):m(e)}},19365:(e,n,s)=>{s.d(n,{A:()=>l});s(96540);var t=s(34164);const a={tabItem:"tabItem_Ymn6"};var r=s(74848);function l(e){let{children:n,hidden:s,className:l}=e;return(0,r.jsx)("div",{role:"tabpanel",className:(0,t.A)(a.tabItem,l),hidden:s,children:n})}},11470:(e,n,s)=>{s.d(n,{A:()=>v});var t=s(96540),a=s(34164),r=s(23104),l=s(56347),i=s(205),c=s(57485),o=s(31682),h=s(70679);function d(e){return t.Children.toArray(e).filter((e=>"\n"!==e)).map((e=>{if(!e||(0,t.isValidElement)(e)&&function(e){const{props:n}=e;return!!n&&"object"==typeof n&&"value"in n}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))?.filter(Boolean)??[]}function m(e){const{values:n,children:s}=e;return(0,t.useMemo)((()=>{const e=n??function(e){return d(e).map((e=>{let{props:{value:n,label:s,attributes:t,default:a}}=e;return{value:n,label:s,attributes:t,default:a}}))}(s);return function(e){const n=(0,o.XI)(e,((e,n)=>e.value===n.value));if(n.length>0)throw new Error(`Docusaurus error: Duplicate values "${n.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[n,s])}function u(e){let{value:n,tabValues:s}=e;return s.some((e=>e.value===n))}function p(e){let{queryString:n=!1,groupId:s}=e;const a=(0,l.W6)(),r=function(e){let{queryString:n=!1,groupId:s}=e;if("string"==typeof n)return n;if(!1===n)return null;if(!0===n&&!s)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return s??null}({queryString:n,groupId:s});return[(0,c.aZ)(r),(0,t.useCallback)((e=>{if(!r)return;const n=new URLSearchParams(a.location.search);n.set(r,e),a.replace({...a.location,search:n.toString()})}),[r,a])]}function x(e){const{defaultValue:n,queryString:s=!1,groupId:a}=e,r=m(e),[l,c]=(0,t.useState)((()=>function(e){let{defaultValue:n,tabValues:s}=e;if(0===s.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(n){if(!u({value:n,tabValues:s}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${n}" but none of its children has the corresponding value. Available values are: ${s.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return n}const t=s.find((e=>e.default))??s[0];if(!t)throw new Error("Unexpected error: 0 tabValues");return t.value}({defaultValue:n,tabValues:r}))),[o,d]=p({queryString:s,groupId:a}),[x,j]=function(e){let{groupId:n}=e;const s=function(e){return e?`docusaurus.tab.${e}`:null}(n),[a,r]=(0,h.Dv)(s);return[a,(0,t.useCallback)((e=>{s&&r.set(e)}),[s,r])]}({groupId:a}),g=(()=>{const e=o??x;return u({value:e,tabValues:r})?e:null})();(0,i.A)((()=>{g&&c(g)}),[g]);return{selectedValue:l,selectValue:(0,t.useCallback)((e=>{if(!u({value:e,tabValues:r}))throw new Error(`Can't select invalid tab value=${e}`);c(e),d(e),j(e)}),[d,j,r]),tabValues:r}}var j=s(92303);const g={tabList:"tabList__CuJ",tabItem:"tabItem_LNqP"};var b=s(74848);function f(e){let{className:n,block:s,selectedValue:t,selectValue:l,tabValues:i}=e;const c=[],{blockElementScrollPositionUntilNextRender:o}=(0,r.a_)(),h=e=>{const n=e.currentTarget,s=c.indexOf(n),a=i[s].value;a!==t&&(o(n),l(a))},d=e=>{let n=null;switch(e.key){case"Enter":h(e);break;case"ArrowRight":{const s=c.indexOf(e.currentTarget)+1;n=c[s]??c[0];break}case"ArrowLeft":{const s=c.indexOf(e.currentTarget)-1;n=c[s]??c[c.length-1];break}}n?.focus()};return(0,b.jsx)("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,a.A)("tabs",{"tabs--block":s},n),children:i.map((e=>{let{value:n,label:s,attributes:r}=e;return(0,b.jsx)("li",{role:"tab",tabIndex:t===n?0:-1,"aria-selected":t===n,ref:e=>c.push(e),onKeyDown:d,onClick:h,...r,className:(0,a.A)("tabs__item",g.tabItem,r?.className,{"tabs__item--active":t===n}),children:s??n},n)}))})}function y(e){let{lazy:n,children:s,selectedValue:r}=e;const l=(Array.isArray(s)?s:[s]).filter(Boolean);if(n){const e=l.find((e=>e.props.value===r));return e?(0,t.cloneElement)(e,{className:(0,a.A)("margin-top--md",e.props.className)}):null}return(0,b.jsx)("div",{className:"margin-top--md",children:l.map(((e,n)=>(0,t.cloneElement)(e,{key:n,hidden:e.props.value!==r})))})}function w(e){const n=x(e);return(0,b.jsxs)("div",{className:(0,a.A)("tabs-container",g.tabList),children:[(0,b.jsx)(f,{...n,...e}),(0,b.jsx)(y,{...n,...e})]})}function v(e){const n=(0,j.A)();return(0,b.jsx)(w,{...e,children:d(e.children)},String(n))}},28453:(e,n,s)=>{s.d(n,{R:()=>l,x:()=>i});var t=s(96540);const a={},r=t.createContext(a);function l(e){const n=t.useContext(r);return t.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function i(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(a):e.components||a:l(e.components),t.createElement(r.Provider,{value:n},e.children)}}}]);