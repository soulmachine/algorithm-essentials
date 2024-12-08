"use strict";(self.webpackChunkalgorithm_essentials=self.webpackChunkalgorithm_essentials||[]).push([[5028],{70525:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>c,contentTitle:()=>u,default:()=>h,frontMatter:()=>i,metadata:()=>r,toc:()=>d});const r=JSON.parse('{"id":"sorting/heap-sort/top-k-frequent-words","title":"Top K Frequent Words","description":"\u63cf\u8ff0","source":"@site/docs/sorting/heap-sort/top-k-frequent-words.md","sourceDirName":"sorting/heap-sort","slug":"/sorting/heap-sort/top-k-frequent-words","permalink":"/en/sorting/heap-sort/top-k-frequent-words","draft":false,"unlisted":false,"tags":[],"version":"current","frontMatter":{"title":"Top K Frequent Words"},"sidebar":"docs","previous":{"title":"Top K Frequent Elements","permalink":"/en/sorting/heap-sort/top-k-frequent-elements"},"next":{"title":"Find Median from Data Stream","permalink":"/en/sorting/heap-sort/find-median-from-data-stream"}}');var s=t(74848),o=t(28453),a=t(11470),l=t(19365);const i={title:"Top K Frequent Words"},u=void 0,c={},d=[{value:"\u63cf\u8ff0",id:"\u63cf\u8ff0",level:3},{value:"\u5206\u6790",id:"\u5206\u6790",level:3},{value:"\u4ee3\u7801",id:"\u4ee3\u7801",level:3},{value:"\u76f8\u5173\u9898\u76ee",id:"\u76f8\u5173\u9898\u76ee",level:3}];function p(e){const n={a:"a",blockquote:"blockquote",br:"br",code:"code",h3:"h3",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,o.R)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(n.h3,{id:"\u63cf\u8ff0",children:"\u63cf\u8ff0"}),"\n",(0,s.jsx)(n.p,{children:"Given a non-empty list of words, return the k most frequent elements."}),"\n",(0,s.jsx)(n.p,{children:"Your answer should be sorted by frequency from highest to lowest. If two words have the same frequency, then the word with the lower alphabetical order comes first."}),"\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.strong,{children:"Example 1"}),":"]}),"\n",(0,s.jsxs)(n.blockquote,{children:["\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.strong,{children:"Input"}),': ["i", "love", "leetcode", "i", "love", "coding"], k = 2',(0,s.jsx)(n.br,{}),"\n",(0,s.jsx)(n.strong,{children:"Output"}),': ["i", "love"]',(0,s.jsx)(n.br,{}),"\n",(0,s.jsx)(n.strong,{children:"Explanation"}),': "i" and "love" are the two most frequent words.',(0,s.jsx)(n.br,{}),"\n",'Note that "i" comes before "love" due to a lower alphabetical order.']}),"\n"]}),"\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.strong,{children:"Example 2"}),":"]}),"\n",(0,s.jsxs)(n.blockquote,{children:["\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.strong,{children:"Input"}),': ["the", "day", "is", "sunny", "the", "the", "the", "sunny", "is", "is"], k = 4',(0,s.jsx)(n.br,{}),"\n",(0,s.jsx)(n.strong,{children:"Output"}),': ["the", "is", "sunny", "day"]',(0,s.jsx)(n.br,{}),"\n",(0,s.jsx)(n.strong,{children:"Explanation"}),': "the", "is", "sunny" and "day" are the four most frequent words, with the number of occurrence being 4, 3, 2 and 1 respectively.']}),"\n"]}),"\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.strong,{children:"Note"}),":"]}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:"You may assume k is always valid, 1 \u2264 k \u2264 number of unique elements."}),"\n",(0,s.jsx)(n.li,{children:"Input words contain only lowercase letters."}),"\n"]}),"\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.strong,{children:"Follow up"}),": Try to solve it in O(n log k) time and O(n) extra space."]}),"\n",(0,s.jsx)(n.h3,{id:"\u5206\u6790",children:"\u5206\u6790"}),"\n",(0,s.jsxs)(n.p,{children:["\u672c\u9898\u4e0e ",(0,s.jsx)(n.a,{href:"/en/sorting/heap-sort/top-k-frequent-elements",children:"Top K Frequent Elements"})," \u4e00\u6a21\u4e00\u6837\u3002"]}),"\n",(0,s.jsx)(n.h3,{id:"\u4ee3\u7801",children:"\u4ee3\u7801"}),"\n","\n",(0,s.jsxs)(a.A,{defaultValue:"python",values:[{label:"Python",value:"python"},{label:"Java",value:"java"},{label:"C++",value:"cpp"}],children:[(0,s.jsx)(l.A,{value:"java",children:(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-java",children:"// Top K Frequent Words\n// HashMap + Min Heap\n// Time Complexity: O(nlogk), Space Complexity: O(n+k)\nclass Solution {\n    public List<String> topKFrequent(String[] words, int k) {\n        Map<String, Integer> m = new HashMap<>();\n        for (String s: words) {\n          m.merge(s, 1, Integer::sum);\n        }\n\n        // Min heap, sorted by frequency\n        PriorityQueue<String> pq = new PriorityQueue<>(\n            (x, y) -> m.get(x) == m.get(y)? y.compareTo(x) : m.get(x) - m.get(y));\n\n        for (String s: m.keySet()) {\n          pq.offer(s);\n          if (pq.size() > k) pq.poll();\n        }\n\n        String[] top = new String[k];\n        for(int i = k - 1; i >= 0; --i) {\n            top[i] = pq.poll();\n        }\n        return Arrays.asList(top);\n    }\n}\n"})})}),(0,s.jsx)(l.A,{value:"cpp",children:(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-cpp",children:"// TODO\n"})})}),(0,s.jsx)(l.A,{value:"python",children:(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-python",children:"# Top K Frequent Words\n# HashMap + Min Heap\n# Time Complexity: O(nlogk), Space Complexity: O(n+k)\nfrom collections import Counter\nfrom heapq import heappush, heappop\n\nclass Solution:\n    def topKFrequent(self, words: List[str], k: int) -> List[str]:\n        freq = Counter(words)\n\n        # Min heap, items are tuples of (frequency, word)\n        # Negative frequency to simulate max heap\n        # Word in second position for lexicographical ordering\n        heap = []\n        for word, count in freq.items():\n            heappush(heap, (count, -ord(word[0]), word))\n            if len(heap) > k:\n                heappop(heap)\n\n        result = []\n        for _ in range(k):\n            result.append(heappop(heap)[2])\n\n        return result[::-1]\n"})})})]}),"\n",(0,s.jsx)(n.h3,{id:"\u76f8\u5173\u9898\u76ee",children:"\u76f8\u5173\u9898\u76ee"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:(0,s.jsx)(n.a,{href:"/en/sorting/heap-sort/top-k-frequent-elements",children:"Top K Frequent Elements"})}),"\n"]})]})}function h(e={}){const{wrapper:n}={...(0,o.R)(),...e.components};return n?(0,s.jsx)(n,{...e,children:(0,s.jsx)(p,{...e})}):p(e)}},19365:(e,n,t)=>{t.d(n,{A:()=>a});t(96540);var r=t(34164);const s={tabItem:"tabItem_Ymn6"};var o=t(74848);function a(e){let{children:n,hidden:t,className:a}=e;return(0,o.jsx)("div",{role:"tabpanel",className:(0,r.A)(s.tabItem,a),hidden:t,children:n})}},11470:(e,n,t)=>{t.d(n,{A:()=>w});var r=t(96540),s=t(34164),o=t(23104),a=t(56347),l=t(205),i=t(57485),u=t(31682),c=t(70679);function d(e){return r.Children.toArray(e).filter((e=>"\n"!==e)).map((e=>{if(!e||(0,r.isValidElement)(e)&&function(e){const{props:n}=e;return!!n&&"object"==typeof n&&"value"in n}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))?.filter(Boolean)??[]}function p(e){const{values:n,children:t}=e;return(0,r.useMemo)((()=>{const e=n??function(e){return d(e).map((e=>{let{props:{value:n,label:t,attributes:r,default:s}}=e;return{value:n,label:t,attributes:r,default:s}}))}(t);return function(e){const n=(0,u.XI)(e,((e,n)=>e.value===n.value));if(n.length>0)throw new Error(`Docusaurus error: Duplicate values "${n.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[n,t])}function h(e){let{value:n,tabValues:t}=e;return t.some((e=>e.value===n))}function f(e){let{queryString:n=!1,groupId:t}=e;const s=(0,a.W6)(),o=function(e){let{queryString:n=!1,groupId:t}=e;if("string"==typeof n)return n;if(!1===n)return null;if(!0===n&&!t)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return t??null}({queryString:n,groupId:t});return[(0,i.aZ)(o),(0,r.useCallback)((e=>{if(!o)return;const n=new URLSearchParams(s.location.search);n.set(o,e),s.replace({...s.location,search:n.toString()})}),[o,s])]}function m(e){const{defaultValue:n,queryString:t=!1,groupId:s}=e,o=p(e),[a,i]=(0,r.useState)((()=>function(e){let{defaultValue:n,tabValues:t}=e;if(0===t.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(n){if(!h({value:n,tabValues:t}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${n}" but none of its children has the corresponding value. Available values are: ${t.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return n}const r=t.find((e=>e.default))??t[0];if(!r)throw new Error("Unexpected error: 0 tabValues");return r.value}({defaultValue:n,tabValues:o}))),[u,d]=f({queryString:t,groupId:s}),[m,b]=function(e){let{groupId:n}=e;const t=function(e){return e?`docusaurus.tab.${e}`:null}(n),[s,o]=(0,c.Dv)(t);return[s,(0,r.useCallback)((e=>{t&&o.set(e)}),[t,o])]}({groupId:s}),g=(()=>{const e=u??m;return h({value:e,tabValues:o})?e:null})();(0,l.A)((()=>{g&&i(g)}),[g]);return{selectedValue:a,selectValue:(0,r.useCallback)((e=>{if(!h({value:e,tabValues:o}))throw new Error(`Can't select invalid tab value=${e}`);i(e),d(e),b(e)}),[d,b,o]),tabValues:o}}var b=t(92303);const g={tabList:"tabList__CuJ",tabItem:"tabItem_LNqP"};var x=t(74848);function v(e){let{className:n,block:t,selectedValue:r,selectValue:a,tabValues:l}=e;const i=[],{blockElementScrollPositionUntilNextRender:u}=(0,o.a_)(),c=e=>{const n=e.currentTarget,t=i.indexOf(n),s=l[t].value;s!==r&&(u(n),a(s))},d=e=>{let n=null;switch(e.key){case"Enter":c(e);break;case"ArrowRight":{const t=i.indexOf(e.currentTarget)+1;n=i[t]??i[0];break}case"ArrowLeft":{const t=i.indexOf(e.currentTarget)-1;n=i[t]??i[i.length-1];break}}n?.focus()};return(0,x.jsx)("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,s.A)("tabs",{"tabs--block":t},n),children:l.map((e=>{let{value:n,label:t,attributes:o}=e;return(0,x.jsx)("li",{role:"tab",tabIndex:r===n?0:-1,"aria-selected":r===n,ref:e=>i.push(e),onKeyDown:d,onClick:c,...o,className:(0,s.A)("tabs__item",g.tabItem,o?.className,{"tabs__item--active":r===n}),children:t??n},n)}))})}function j(e){let{lazy:n,children:t,selectedValue:o}=e;const a=(Array.isArray(t)?t:[t]).filter(Boolean);if(n){const e=a.find((e=>e.props.value===o));return e?(0,r.cloneElement)(e,{className:(0,s.A)("margin-top--md",e.props.className)}):null}return(0,x.jsx)("div",{className:"margin-top--md",children:a.map(((e,n)=>(0,r.cloneElement)(e,{key:n,hidden:e.props.value!==o})))})}function y(e){const n=m(e);return(0,x.jsxs)("div",{className:(0,s.A)("tabs-container",g.tabList),children:[(0,x.jsx)(v,{...n,...e}),(0,x.jsx)(j,{...n,...e})]})}function w(e){const n=(0,b.A)();return(0,x.jsx)(y,{...e,children:d(e.children)},String(n))}},28453:(e,n,t)=>{t.d(n,{R:()=>a,x:()=>l});var r=t(96540);const s={},o=r.createContext(s);function a(e){const n=r.useContext(o);return r.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function l(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:a(e.components),r.createElement(o.Provider,{value:n},e.children)}}}]);