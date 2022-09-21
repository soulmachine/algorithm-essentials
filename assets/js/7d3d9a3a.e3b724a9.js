"use strict";(self.webpackChunkalgorithm_essentials=self.webpackChunkalgorithm_essentials||[]).push([[9840],{3905:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>d});var a=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},l=Object.keys(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var s=a.createContext({}),p=function(e){var t=a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},u=function(e){var t=p(e.components);return a.createElement(s.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},m=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,l=e.originalType,s=e.parentName,u=i(e,["components","mdxType","originalType","parentName"]),m=p(n),d=r,b=m["".concat(s,".").concat(d)]||m[d]||c[d]||l;return n?a.createElement(b,o(o({ref:t},u),{},{components:n})):a.createElement(b,o({ref:t},u))}));function d(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var l=n.length,o=new Array(l);o[0]=m;var i={};for(var s in t)hasOwnProperty.call(t,s)&&(i[s]=t[s]);i.originalType=e,i.mdxType="string"==typeof e?e:r,o[1]=i;for(var p=2;p<l;p++)o[p]=n[p];return a.createElement.apply(null,o)}return a.createElement.apply(null,n)}m.displayName="MDXCreateElement"},5162:(e,t,n)=>{n.d(t,{Z:()=>o});var a=n(7294),r=n(6010);const l="tabItem_Ymn6";function o(e){let{children:t,hidden:n,className:o}=e;return a.createElement("div",{role:"tabpanel",className:(0,r.Z)(l,o),hidden:n},t)}},5488:(e,t,n)=>{n.d(t,{Z:()=>d});var a=n(7462),r=n(7294),l=n(6010),o=n(2389),i=n(7392),s=n(7094),p=n(2466);const u="tabList__CuJ",c="tabItem_LNqP";function m(e){var t;const{lazy:n,block:o,defaultValue:m,values:d,groupId:b,className:h}=e,f=r.Children.map(e.children,(e=>{if((0,r.isValidElement)(e)&&"value"in e.props)return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)})),k=d??f.map((e=>{let{props:{value:t,label:n,attributes:a}}=e;return{value:t,label:n,attributes:a}})),y=(0,i.l)(k,((e,t)=>e.value===t.value));if(y.length>0)throw new Error(`Docusaurus error: Duplicate values "${y.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`);const g=null===m?m:m??(null==(t=f.find((e=>e.props.default)))?void 0:t.props.value)??f[0].props.value;if(null!==g&&!k.some((e=>e.value===g)))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${g}" but none of its children has the corresponding value. Available values are: ${k.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);const{tabGroupChoices:v,setTabGroupChoices:w}=(0,s.U)(),[N,T]=(0,r.useState)(g),O=[],{blockElementScrollPositionUntilNextRender:x}=(0,p.o5)();if(null!=b){const e=v[b];null!=e&&e!==N&&k.some((t=>t.value===e))&&T(e)}const I=e=>{const t=e.currentTarget,n=O.indexOf(t),a=k[n].value;a!==N&&(x(t),T(a),null!=b&&w(b,String(a)))},z=e=>{var t;let n=null;switch(e.key){case"ArrowRight":{const t=O.indexOf(e.currentTarget)+1;n=O[t]??O[0];break}case"ArrowLeft":{const t=O.indexOf(e.currentTarget)-1;n=O[t]??O[O.length-1];break}}null==(t=n)||t.focus()};return r.createElement("div",{className:(0,l.Z)("tabs-container",u)},r.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,l.Z)("tabs",{"tabs--block":o},h)},k.map((e=>{let{value:t,label:n,attributes:o}=e;return r.createElement("li",(0,a.Z)({role:"tab",tabIndex:N===t?0:-1,"aria-selected":N===t,key:t,ref:e=>O.push(e),onKeyDown:z,onFocus:I,onClick:I},o,{className:(0,l.Z)("tabs__item",c,null==o?void 0:o.className,{"tabs__item--active":N===t})}),n??t)}))),n?(0,r.cloneElement)(f.filter((e=>e.props.value===N))[0],{className:"margin-top--md"}):r.createElement("div",{className:"margin-top--md"},f.map(((e,t)=>(0,r.cloneElement)(e,{key:t,hidden:e.props.value!==N})))))}function d(e){const t=(0,o.Z)();return r.createElement(m,(0,a.Z)({key:String(t)},e))}},1145:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>u,contentTitle:()=>s,default:()=>d,frontMatter:()=>i,metadata:()=>p,toc:()=>c});var a=n(7462),r=(n(7294),n(3905)),l=n(5488),o=n(5162);const i={title:"The Maze II"},s=void 0,p={unversionedId:"bfs/the-maze-ii",id:"bfs/the-maze-ii",title:"The Maze II",description:"\u63cf\u8ff0",source:"@site/docs/bfs/the-maze-ii.md",sourceDirName:"bfs",slug:"/bfs/the-maze-ii",permalink:"/bfs/the-maze-ii",draft:!1,tags:[],version:"current",frontMatter:{title:"The Maze II"},sidebar:"docs",previous:{title:"The Maze",permalink:"/bfs/the-maze"},next:{title:"The Maze III",permalink:"/bfs/the-maze-iii"}},u={},c=[{value:"\u63cf\u8ff0",id:"\u63cf\u8ff0",level:3},{value:"\u5206\u6790",id:"\u5206\u6790",level:3},{value:"\u4ee3\u7801",id:"\u4ee3\u7801",level:3},{value:"\u76f8\u5173\u9898\u76ee",id:"\u76f8\u5173\u9898\u76ee",level:3}],m={toc:c};function d(e){let{components:t,...n}=e;return(0,r.kt)("wrapper",(0,a.Z)({},m,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h3",{id:"\u63cf\u8ff0"},"\u63cf\u8ff0"),(0,r.kt)("p",null,"There is a ",(0,r.kt)("strong",{parentName:"p"},"ball")," in a maze with empty spaces and walls. The ball can go through empty spaces by rolling ",(0,r.kt)("strong",{parentName:"p"},"up"),", ",(0,r.kt)("strong",{parentName:"p"},"down"),", ",(0,r.kt)("strong",{parentName:"p"},"left")," or ",(0,r.kt)("strong",{parentName:"p"},"right"),", but it won't stop rolling until hitting a wall. When the ball stops, it could choose the next direction."),(0,r.kt)("p",null,"Given the ball's ",(0,r.kt)("strong",{parentName:"p"},"start position"),", the ",(0,r.kt)("strong",{parentName:"p"},"destination")," and the ",(0,r.kt)("strong",{parentName:"p"},"maze"),", find the shortest distance for the ball to stop at the destination. The distance is defined by the number of ",(0,r.kt)("strong",{parentName:"p"},"empty spaces")," traveled by the ball from the start position (excluded) to the destination (included). If the ball cannot stop at the destination, return -1."),(0,r.kt)("p",null,"The maze is represented by a binary 2D array. 1 means the wall and 0 means the empty space. You may assume that the borders of the maze are all walls. The start and destination coordinates are represented by row and column indexes."),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Example 1"),":"),(0,r.kt)("img",{src:"/img/maze_1_example_1.png",width:"60%"}),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},(0,r.kt)("strong",{parentName:"p"},"Input 1"),": a maze represented by a 2D array"),(0,r.kt)("p",{parentName:"blockquote"},"0 0 1 0 0",(0,r.kt)("br",{parentName:"p"}),"\n","0 0 0 0 0",(0,r.kt)("br",{parentName:"p"}),"\n","0 0 0 1 0",(0,r.kt)("br",{parentName:"p"}),"\n","1 1 0 1 1",(0,r.kt)("br",{parentName:"p"}),"\n","0 0 0 0 0"),(0,r.kt)("p",{parentName:"blockquote"},(0,r.kt)("strong",{parentName:"p"},"Input 2"),": start coordinate (rowStart, colStart) = (0, 4)",(0,r.kt)("br",{parentName:"p"}),"\n",(0,r.kt)("strong",{parentName:"p"},"Input 3"),": destination coordinate (rowDest, colDest) = (4, 4)"),(0,r.kt)("p",{parentName:"blockquote"},(0,r.kt)("strong",{parentName:"p"},"Output"),": 12"),(0,r.kt)("p",{parentName:"blockquote"},(0,r.kt)("strong",{parentName:"p"},"Explanation"),": One shortest way is : left -> down -> left -> down -> right -> down -> right.",(0,r.kt)("br",{parentName:"p"}),"\n","The total distance is 1 + 1 + 3 + 1 + 2 + 2 + 2 = 12.")),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Example 2"),":"),(0,r.kt)("img",{src:"/img/maze_1_example_2.png",width:"60%"}),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},(0,r.kt)("strong",{parentName:"p"},"Input 1"),": a maze represented by a 2D array"),(0,r.kt)("p",{parentName:"blockquote"},"0 0 1 0 0",(0,r.kt)("br",{parentName:"p"}),"\n","0 0 0 0 0",(0,r.kt)("br",{parentName:"p"}),"\n","0 0 0 1 0",(0,r.kt)("br",{parentName:"p"}),"\n","1 1 0 1 1",(0,r.kt)("br",{parentName:"p"}),"\n","0 0 0 0 0"),(0,r.kt)("p",{parentName:"blockquote"},(0,r.kt)("strong",{parentName:"p"},"Input 2"),": start coordinate (rowStart, colStart) = (0, 4)",(0,r.kt)("br",{parentName:"p"}),"\n",(0,r.kt)("strong",{parentName:"p"},"Input 3"),": destination coordinate (rowDest, colDest) = (3, 2)"),(0,r.kt)("p",{parentName:"blockquote"},(0,r.kt)("strong",{parentName:"p"},"Output"),": -1"),(0,r.kt)("p",{parentName:"blockquote"},(0,r.kt)("strong",{parentName:"p"},"Explanation"),": There is no way for the ball to stop at the destination.")),(0,r.kt)("h3",{id:"\u5206\u6790"},"\u5206\u6790"),(0,r.kt)("p",null,"\u6c42\u6700\u77ed\u8def\u5f84\uff0c\u5f88\u663e\u7136\uff0c\u7528 BFS\u3002"),(0,r.kt)("h3",{id:"\u4ee3\u7801"},"\u4ee3\u7801"),(0,r.kt)(l.Z,{defaultValue:"python",values:[{label:"Python",value:"python"},{label:"Java",value:"java"},{label:"C++",value:"cpp"}],mdxType:"Tabs"},(0,r.kt)(o.Z,{value:"python",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-python"},"TODO\n"))),(0,r.kt)(o.Z,{value:"java",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-java"},"// The Maze II\n// BFS\n// Time complexity : O(m*n*max(m,n))\n// Space complexity : O(mn)\npublic class Solution {\n    public int shortestDistance(int[][] maze, int[] start, int[] dest) {\n        int m = maze.length, n = maze[0].length;\n        int[][] distance = new int[m][n];\n        for (int[] row: distance) Arrays.fill(row, Integer.MAX_VALUE);\n\n        int[][] dirs={{1, 0}, {-1, 0}, {0, -1}, {0, 1}}; // up, down, left, right\n        Queue<int[]> q = new LinkedList<>();\n\n        q.offer(start);\n        distance[start[0]][start[1]] = 0;\n        while (!q.isEmpty()) {\n            int[] cur = q.poll();\n            int x = cur[0], y = cur[1];\n\n            for (int[] dir: dirs) {\n                int newX = x, newY = y;\n                int i = dir[0], j = dir[1];\n                int count = 0;\n                while (0 <= newX + i && newX + i < m && 0 <= newY + j && newY + j < n && maze[newX + i][newY + j] == 0) {\n                    newX += i;\n                    newY += j;\n                    count++;\n                }\n                if (distance[x][y] + count < distance[newX][newY]) {\n                    distance[newX][newY] = distance[x][y] + count;\n                    q.offer(new int[] {newX, newY});\n                }\n            }\n        }\n        return distance[dest[0]][dest[1]] == Integer.MAX_VALUE ? -1 : distance[dest[0]][dest[1]];\n    }\n}\n"))),(0,r.kt)(o.Z,{value:"cpp",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-cpp"},"TODO\n")))),(0,r.kt)("h3",{id:"\u76f8\u5173\u9898\u76ee"},"\u76f8\u5173\u9898\u76ee"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"/bfs/the-maze"},"The Maze")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"/bfs/the-maze-iii"},"The Maze III"))))}d.isMDXComponent=!0}}]);