(self.webpackChunkkubevela_io=self.webpackChunkkubevela_io||[]).push([[25249],{3905:function(e,t,n){"use strict";n.d(t,{Zo:function(){return s},kt:function(){return f}});var r=n(67294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var p=r.createContext({}),l=function(e){var t=r.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},s=function(e){var t=l(e.components);return r.createElement(p.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,i=e.originalType,p=e.parentName,s=c(e,["components","mdxType","originalType","parentName"]),d=l(n),f=o,m=d["".concat(p,".").concat(f)]||d[f]||u[f]||i;return n?r.createElement(m,a(a({ref:t},s),{},{components:n})):r.createElement(m,a({ref:t},s))}));function f(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var i=n.length,a=new Array(i);a[0]=d;var c={};for(var p in t)hasOwnProperty.call(t,p)&&(c[p]=t[p]);c.originalType=e,c.mdxType="string"==typeof e?e:o,a[1]=c;for(var l=2;l<i;l++)a[l]=n[l];return r.createElement.apply(null,a)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},86522:function(e,t,n){"use strict";n.r(t),n.d(t,{frontMatter:function(){return a},metadata:function(){return c},toc:function(){return p},default:function(){return s}});var r=n(22122),o=n(19756),i=(n(67294),n(3905)),a={title:"\u67e5\u770b\u5e94\u7528\u90e8\u7f72\u7248\u672c",description:"\u67e5\u770b\u5e94\u7528\u5f53\u524d\u90e8\u7f72\u7248\u672c\u548c\u5386\u53f2\u90e8\u7f72\u7248\u672c\u3002"},c={unversionedId:"how-to/dashboard/application/get-application-revision",id:"how-to/dashboard/application/get-application-revision",isDocsHomePage:!1,title:"\u67e5\u770b\u5e94\u7528\u90e8\u7f72\u7248\u672c",description:"\u67e5\u770b\u5e94\u7528\u5f53\u524d\u90e8\u7f72\u7248\u672c\u548c\u5386\u53f2\u90e8\u7f72\u7248\u672c\u3002",source:"@site/i18n/zh/docusaurus-plugin-content-docs/current/how-to/dashboard/application/get-application-revision.md",sourceDirName:"how-to/dashboard/application",slug:"/how-to/dashboard/application/get-application-revision",permalink:"/zh/docs/next/how-to/dashboard/application/get-application-revision",editUrl:"https://github.com/oam-dev/kubevela.io/edit/main/docs/how-to/dashboard/application/get-application-revision.md",version:"current",lastUpdatedBy:"Jianbo Sun",lastUpdatedAt:1642078053,formattedLastUpdatedAt:"2022/1/13",frontMatter:{title:"\u67e5\u770b\u5e94\u7528\u90e8\u7f72\u7248\u672c",description:"\u67e5\u770b\u5e94\u7528\u5f53\u524d\u90e8\u7f72\u7248\u672c\u548c\u5386\u53f2\u90e8\u7f72\u7248\u672c\u3002"},sidebar:"docs",previous:{title:"\u67e5\u770b\u5e94\u7528\u90e8\u7f72\u7684\u8d44\u6e90\u5217\u8868",permalink:"/zh/docs/next/how-to/dashboard/application/view-application-resource"},next:{title:"\u53d1\u5e03\u5e94\u7528\u5230\u65b0\u73af\u5883",permalink:"/zh/docs/next/how-to/dashboard/application/bind-new-environment"}},p=[],l={toc:p};function s(e){var t=e.components,a=(0,o.Z)(e,["components"]);return(0,i.kt)("wrapper",(0,r.Z)({},l,a,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"\u5e94\u7528\u6bcf\u6267\u884c\u4e00\u6b21\u90e8\u7f72\u5373\u53ef\u751f\u6210\u4e00\u4e2a\u7248\u672c\uff0c\u901a\u8fc7\u5e94\u7528 ",(0,i.kt)("inlineCode",{parentName:"p"},"Baseline Config")," \u89c6\u56fe\u4e0b\u7684 ",(0,i.kt)("inlineCode",{parentName:"p"},"Revisions")," \u9875\u9762\u5c55\u793a\u5e94\u7528\u7684\u5386\u53f2\u90e8\u7f72\u7248\u672c\u3002"),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"app-revision",src:n(72344).Z})),(0,i.kt)("p",null,"\u901a\u8fc7 Webhook Trigger \u89e6\u53d1\u90e8\u7f72\u7684\u7248\u672c\uff0c\u5982\u679c\u643a\u5e26\u4e86\u4ee3\u7801\u4fe1\u606f\uff0c\u7248\u672c\u53f7\u53ef\u4e0e\u4ee3\u7801 Commit \u4fe1\u606f\u8fdb\u884c\u5173\u8054\u3002"))}s.isMDXComponent=!0},72344:function(e,t,n){"use strict";t.Z=n.p+"assets/images/app-revisions-94b0893fd0f5732726a6bc0713be35a1.jpg"}}]);