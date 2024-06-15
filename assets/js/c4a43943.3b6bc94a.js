"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[674],{3678:(n,e,r)=>{r.r(e),r.d(e,{assets:()=>l,contentTitle:()=>a,default:()=>u,frontMatter:()=>t,metadata:()=>o,toc:()=>c});var s=r(4848),i=r(8453);const t={sidebar_position:4},a="\u4e8b\u4ef6",o={id:"v4/message-event",title:"\u4e8b\u4ef6",description:"\u6b64\u5904\u5185\u5bb9\u9700\u8981\u9605\u8bfb\u524d\u7f6e\u7ae0\u8282",source:"@site/docs/v4/message-event.md",sourceDirName:"v4",slug:"/v4/message-event",permalink:"/Miao-Yunzai-Docs/docs/v4/message-event",draft:!1,unlisted:!1,editUrl:"https://github.com/ningmengchongshui/Miao-Yunzai-Docs/tree/main/docs/v4/message-event.md",tags:[],version:"current",sidebarPosition:4,frontMatter:{sidebar_position:4},sidebar:"tutorialSidebar",previous:{title:"\u56fe\u7247",permalink:"/Miao-Yunzai-Docs/docs/v4/image-dev"},next:{title:"\u673a\u5236",permalink:"/Miao-Yunzai-Docs/docs/v4/plugins-event"}},l={},c=[{value:"\u8c03\u7528",id:"\u8c03\u7528",level:2},{value:"\u5b57\u6bb5",id:"\u5b57\u6bb5",level:2}];function d(n){const e={admonition:"admonition",code:"code",h1:"h1",h2:"h2",li:"li",p:"p",pre:"pre",ul:"ul",...(0,i.R)(),...n.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(e.h1,{id:"\u4e8b\u4ef6",children:"\u4e8b\u4ef6"}),"\n",(0,s.jsx)(e.admonition,{title:"\u63d0\u793a",type:"tip",children:(0,s.jsx)(e.p,{children:"\u6b64\u5904\u5185\u5bb9\u9700\u8981\u9605\u8bfb\u524d\u7f6e\u7ae0\u8282"})}),"\n",(0,s.jsx)(e.h2,{id:"\u8c03\u7528",children:"\u8c03\u7528"}),"\n",(0,s.jsxs)(e.ul,{children:["\n",(0,s.jsx)(e.li,{children:"\u56de\u590d"}),"\n"]}),"\n",(0,s.jsx)(e.pre,{children:(0,s.jsx)(e.code,{className:"language-ts",children:"const callBack = (e) =>{\r\n  e.reply('\u4f60\u597d')\r\n}\n"})}),"\n",(0,s.jsxs)(e.ul,{children:["\n",(0,s.jsx)(e.li,{children:"\u56fe\u7247"}),"\n"]}),"\n",(0,s.jsx)(e.pre,{children:(0,s.jsx)(e.code,{className:"language-ts",children:"const callBack = (e) =>{\r\n  const img : Buffer | null = null\r\n  e.reply(Segment.image(img))\r\n}\n"})}),"\n",(0,s.jsxs)(e.ul,{children:["\n",(0,s.jsx)(e.li,{children:"\u590d\u5408"}),"\n"]}),"\n",(0,s.jsx)(e.pre,{children:(0,s.jsx)(e.code,{className:"language-ts",children:"const callBack = (e) =>{\r\n  const img : Buffer | null = null\r\n  e.reply(['\u8fd9\u662f\u4e00\u5f20\u56fe\u7247', Segment.image(img)])\r\n}\n"})}),"\n",(0,s.jsx)(e.h2,{id:"\u5b57\u6bb5",children:"\u5b57\u6bb5"}),"\n",(0,s.jsx)(e.pre,{children:(0,s.jsx)(e.code,{className:"language-ts",children:"export interface EventType {\r\n  /**\r\n   * \u662f\u5426\u662f\u4e3b\u4eba\r\n   */\r\n  isMaster: boolean\r\n  /**\r\n   * \u662f\u5426\u662f\u7fa4\u91cc\r\n   */\r\n  isGroup: boolean\r\n  /**\r\n   * \u662f\u79c1\u804a\r\n   */\r\n  isPrivate?: any\r\n  /**\r\n   * \u662f\u9891\u9053\r\n   */\r\n  isGuild?: any\r\n  /**\r\n   * \u7528\u6237\u6d88\u606f\r\n   */\r\n  msg: string\r\n  /**\r\n   * \u7528\u6237\u7f16\u53f7\r\n   */\r\n  user_id:string\r\n  /**\r\n   * \u7528\u6237\u540d\r\n   */\r\n  user_name: string\r\n  /**\r\n   * \u7528\u6237\u5934\u50cf\r\n   */\r\n  user_avatar: string \r\n  /**\r\n   * \u7fa4\u53f7\r\n   */\r\n  group_id: number;\r\n  /**\r\n   * \u7fa4\u540d\r\n   */\r\n  group_name: string;\r\n  /**\r\n   *  \u7fa4\u5934\u50cf\r\n   */\r\n  group_avatar: string \r\n}\n"})})]})}function u(n={}){const{wrapper:e}={...(0,i.R)(),...n.components};return e?(0,s.jsx)(e,{...n,children:(0,s.jsx)(d,{...n})}):d(n)}},8453:(n,e,r)=>{r.d(e,{R:()=>a,x:()=>o});var s=r(6540);const i={},t=s.createContext(i);function a(n){const e=s.useContext(t);return s.useMemo((function(){return"function"==typeof n?n(e):{...e,...n}}),[e,n])}function o(n){let e;return e=n.disableParentContext?"function"==typeof n.components?n.components(i):n.components||i:a(n.components),s.createElement(t.Provider,{value:e},n.children)}}}]);