(self.webpackChunkkubevela_io=self.webpackChunkkubevela_io||[]).push([[62830],{3905:function(e,t,n){"use strict";n.d(t,{Zo:function(){return p},kt:function(){return d}});var r=n(67294);function l(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){l(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,r,l=function(e,t){if(null==e)return{};var n,r,l={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(l[n]=e[n]);return l}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(l[n]=e[n])}return l}var u=r.createContext({}),s=function(e){var t=r.useContext(u),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},p=function(e){var t=s(e.components);return r.createElement(u.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},k=r.forwardRef((function(e,t){var n=e.components,l=e.mdxType,a=e.originalType,u=e.parentName,p=o(e,["components","mdxType","originalType","parentName"]),k=s(n),d=l,m=k["".concat(u,".").concat(d)]||k[d]||c[d]||a;return n?r.createElement(m,i(i({ref:t},p),{},{components:n})):r.createElement(m,i({ref:t},p))}));function d(e,t){var n=arguments,l=t&&t.mdxType;if("string"==typeof e||l){var a=n.length,i=new Array(a);i[0]=k;var o={};for(var u in t)hasOwnProperty.call(t,u)&&(o[u]=t[u]);o.originalType=e,o.mdxType="string"==typeof e?e:l,i[1]=o;for(var s=2;s<a;s++)i[s]=n[s];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}k.displayName="MDXCreateElement"},51900:function(e,t,n){"use strict";n.r(t),n.d(t,{frontMatter:function(){return i},metadata:function(){return o},toc:function(){return u},default:function(){return p}});var r=n(22122),l=n(19756),a=(n(67294),n(3905)),i={title:"\u4ea4\u4ed8 Kubernetes \u539f\u751f\u8d44\u6e90",description:"\u5bf9 Kubernetes \u6709\u4e00\u5b9a\u4e86\u89e3\u7684\u7528\u6237\uff0c\u53c2\u8003\u672c\u6587\u6863\u5b66\u4e60\u5229\u7528 KubeVela \u7684\u80fd\u529b\u5c06\u5df2\u7ecf\u5b9a\u4e49\u597d\u7684 Kubernetes \u8d44\u6e90\u4fbf\u6377\u4ea4\u4ed8\u5230\u591a\u4e2a\u96c6\u7fa4\u3002"},o={unversionedId:"tutorials/k8s-object",id:"version-v1.2/tutorials/k8s-object",isDocsHomePage:!1,title:"\u4ea4\u4ed8 Kubernetes \u539f\u751f\u8d44\u6e90",description:"\u5bf9 Kubernetes \u6709\u4e00\u5b9a\u4e86\u89e3\u7684\u7528\u6237\uff0c\u53c2\u8003\u672c\u6587\u6863\u5b66\u4e60\u5229\u7528 KubeVela \u7684\u80fd\u529b\u5c06\u5df2\u7ecf\u5b9a\u4e49\u597d\u7684 Kubernetes \u8d44\u6e90\u4fbf\u6377\u4ea4\u4ed8\u5230\u591a\u4e2a\u96c6\u7fa4\u3002",source:"@site/i18n/zh/docusaurus-plugin-content-docs/version-v1.2/tutorials/k8s-object.mdx",sourceDirName:"tutorials",slug:"/tutorials/k8s-object",permalink:"/zh/docs/tutorials/k8s-object",editUrl:"https://github.com/oam-dev/kubevela.io/edit/main/docs/tutorials/k8s-object.mdx",version:"v1.2",lastUpdatedBy:"barnettZQG",lastUpdatedAt:1642212376,formattedLastUpdatedAt:"2022/1/15",frontMatter:{title:"\u4ea4\u4ed8 Kubernetes \u539f\u751f\u8d44\u6e90",description:"\u5bf9 Kubernetes \u6709\u4e00\u5b9a\u4e86\u89e3\u7684\u7528\u6237\uff0c\u53c2\u8003\u672c\u6587\u6863\u5b66\u4e60\u5229\u7528 KubeVela \u7684\u80fd\u529b\u5c06\u5df2\u7ecf\u5b9a\u4e49\u597d\u7684 Kubernetes \u8d44\u6e90\u4fbf\u6377\u4ea4\u4ed8\u5230\u591a\u4e2a\u96c6\u7fa4\u3002"},sidebar:"version-v1.2/docs",previous:{title:"\u4ea4\u4ed8\u4e91\u670d\u52a1",permalink:"/zh/docs/tutorials/consume-cloud-services"},next:{title:"\u5bf9\u63a5 Jenkins",permalink:"/zh/docs/tutorials/jenkins"}},u=[{value:"\u5f00\u59cb\u4e4b\u524d",id:"\u5f00\u59cb\u4e4b\u524d",children:[]},{value:"\u89c4\u5212\u5e76\u521b\u5efa\u4ea4\u4ed8\u76ee\u6807",id:"\u89c4\u5212\u5e76\u521b\u5efa\u4ea4\u4ed8\u76ee\u6807",children:[]},{value:"\u521b\u5efa Kubernetes \u5e94\u7528",id:"\u521b\u5efa-kubernetes-\u5e94\u7528",children:[]},{value:"\u90e8\u7f72\u6d4b\u8bd5\u73af\u5883",id:"\u90e8\u7f72\u6d4b\u8bd5\u73af\u5883",children:[]},{value:"\u90e8\u7f72\u751f\u4ea7\u73af\u5883",id:"\u90e8\u7f72\u751f\u4ea7\u73af\u5883",children:[]},{value:"\u4e0b\u4e00\u6b65",id:"\u4e0b\u4e00\u6b65",children:[]}],s={toc:u};function p(e){var t=e.components,i=(0,l.Z)(e,["components"]);return(0,a.kt)("wrapper",(0,r.Z)({},s,i,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"\u672c\u6587\u4ecb\u7ecd\u4e86\u5982\u4f55\u4f7f\u7528 KubeVela \u5c06\u4f60\u5b9a\u4e49\u7684 Kubernetes \u8d44\u6e90\u4ea4\u4ed8\u5230\u591a\u4e2a\u76ee\u6807\u73af\u5883\u548c\u96c6\u7fa4\u3002"),(0,a.kt)("p",null,"KubeVela \u652f\u6301\u9762\u5411\u5e94\u7528\u7ec4\u7ec7\u591a\u4e2a Kubernetes \u8d44\u6e90\u8fdb\u884c\u4ea4\u4ed8\uff0c\u5e38\u89c1\u7684\u7528\u4f8b\u662f Deployment+Service\u3002\u6211\u4eec\u652f\u6301\u5c06\u5176\u901a\u8fc7\u81ea\u5b9a\u4e49\u5de5\u4f5c\u6d41\u6709\u5e8f\u7684\u5728\u591a\u4e2a\u96c6\u7fa4\u8fdb\u884c\u4ea4\u4ed8\uff0c\u56e0\u6b64\u5728\u672c\u4f8b\u4e2d\u4f60\u5c06\u5b66\u4e60\u5230\u4ee5\u4e0b\u80fd\u529b\uff1a"),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},"\u4ea4\u4ed8 Kubernetes \u539f\u751f\u8d44\u6e90\u3002"),(0,a.kt)("li",{parentName:"ol"},"\u521d\u6b65\u4e86\u89e3\u5de5\u4f5c\u6d41\u4f7f\u7528\u65b9\u6cd5\u548c\u573a\u666f\u3002"),(0,a.kt)("li",{parentName:"ol"},"\u521d\u6b65\u4e86\u89e3\u591a\u73af\u5883/\u591a\u96c6\u7fa4\u7684\u5e94\u7528\u53d1\u5e03\u3002"),(0,a.kt)("li",{parentName:"ol"},"\u5e94\u7528\u53d1\u5e03\u8fc7\u7a0b\u63a7\u5236\uff1a\u56de\u9000\u3001\u7ec8\u6b62\u548c\u7ee7\u7eed\u3002")),(0,a.kt)("h2",{id:"\u5f00\u59cb\u4e4b\u524d"},"\u5f00\u59cb\u4e4b\u524d"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"\u51c6\u5907\u4e00\u4e2a Deployment+Service \u8d44\u6e90\u7684 Yaml \u5b9a\u4e49\u6587\u4ef6\uff0c\u8bf7\u6ce8\u610f\uff0c\u6d89\u53ca\u591a\u4e2a\u8d44\u6e90\u65f6\u8bf7\u5c06 Deployment\u3001Statefulset\u3001Job \u7b49\u5de5\u4f5c\u8d1f\u8f7d\u7c7b\u8d44\u6e90\u7f6e\u4e8e\u7b2c\u4e00\u4e2a\u3002\u5982\u679c\u591a\u4e2a\u5de5\u4f5c\u8d1f\u8f7d\u7c7b\u8d44\u6e90\uff0c\u8bf7\u62c6\u5206\u4e3a\u591a\u4e2a\u5e94\u7528\u3002")),(0,a.kt)("h2",{id:"\u89c4\u5212\u5e76\u521b\u5efa\u4ea4\u4ed8\u76ee\u6807"},"\u89c4\u5212\u5e76\u521b\u5efa\u4ea4\u4ed8\u76ee\u6807"),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"../getting-started/core-concept#%E4%BA%A4%E4%BB%98%E7%9B%AE%E6%A0%87%EF%BC%88target%EF%BC%89"},"\u4ea4\u4ed8\u76ee\u6807(Target)")," \u5b9a\u4e49\u4e86\u5e94\u7528\u4ea4\u4ed8\u7684\u8fd0\u884c\u65f6\u96c6\u7fa4\u548c\u547d\u540d\u7a7a\u95f4\uff0c\u521b\u5efa\u4ea4\u4ed8\u76ee\u6807\u7684\u540c\u65f6\u5b8c\u6210\u8fd0\u884c\u65f6\u96c6\u7fa4\u7684\u547d\u540d\u7a7a\u95f4\u521b\u5efa\u3002"),(0,a.kt)("p",null,"\u70b9\u51fb ",(0,a.kt)("inlineCode",{parentName:"p"},"New Target")," \u6309\u94ae\u8fdb\u5165\u521b\u5efa\u6d41\u7a0b\uff0c\u586b\u5199\u5fc5\u8981\u7684\u4fe1\u606f\uff0c\u9009\u62e9\u96c6\u7fa4\u3001\u547d\u540d\u7a7a\u95f4\u5373\u53ef\u5b8c\u6210\u521b\u5efa\u3002\u6211\u4eec\u4f7f\u7528 2 \u4e2a\u96c6\u7fa4\u6765\u521b\u5efa\u4ea4\u4ed8\u76ee\u6807\uff0c\u5f53\u7136\u5982\u679c\u4f60\u6682\u65e0\u591a\u4e2a\u96c6\u7fa4\uff0c\u4e5f\u53ef\u4ee5\u4f7f\u7528\u4e00\u4e2a\u96c6\u7fa4\u7684\u591a\u4e2a\u547d\u540d\u7a7a\u95f4\u6765\u521b\u5efa\u591a\u4e2a\u4ea4\u4ed8\u76ee\u6807\u3002\u6211\u4eec\u6700\u5c11\u51c6\u5907 3 \u4e2a\u4ea4\u4ed8\u76ee\u6807\uff0c1 \u4e2a\u7528\u4e8e\u6d4b\u8bd5\u73af\u5883\uff0c2 \u4e2a\u6216\u66f4\u591a\u7528\u6237\u751f\u4ea7\u73af\u5883\u3002"),(0,a.kt)("h2",{id:"\u521b\u5efa-kubernetes-\u5e94\u7528"},"\u521b\u5efa Kubernetes \u5e94\u7528"),(0,a.kt)("p",null,"\u5b8c\u6210\u4ea4\u4ed8\u76ee\u6807\u521b\u5efa\u540e\uff0c\u6211\u4eec\u5f00\u59cb\u521b\u5efa\u5e94\u7528\u3002\u4e0e ",(0,a.kt)("a",{parentName:"p",href:"../quick-start"},"\u4ea4\u4ed8\u7b2c\u4e00\u4e2a\u5e94\u7528")," \u4e00\u6837\uff0c\u9996\u5148\u6211\u4eec\u9700\u8981\u586b\u5199\u5e94\u7528\u7684\u57fa\u7840\u4fe1\u606f\uff0c\u8fd9\u91cc\u6709\u4e09\u4e2a\u4e0d\u540c\u70b9\uff1a"),(0,a.kt)("p",null,"\uff081\uff09\u9009\u62e9\u90e8\u7f72\u7c7b\u578b k8s-objects; \u8be5\u7c7b\u578b\u7528\u4e8e\u90e8\u7f72\u591a\u4e2a Kubernetes \u539f\u751f\u8d44\u6e90\uff0c\u8bf7\u6ce8\u610f\uff0c\u540c\u4e00\u4e2a\u5e94\u7528\u8bf7\u5c3d\u91cf\u4fdd\u6301\u53ea\u6709\u4e00\u4e2a Workload \u8d44\u6e90\uff0c\u5373\u4e0d\u8981\u51fa\u73b0\u591a\u4e2a Deployment \u6216\u8005 Statefulset\u3002"),(0,a.kt)("p",null,"\uff082\uff09\u73af\u5883\u89c4\u5212\u65f6\u6211\u4eec\u5206\u914d\u4e24\u4e2a\u73af\u5883\uff0c\u6d4b\u8bd5\u73af\u5883\u548c\u751f\u4ea7\u73af\u5883\uff0c\u5176\u4e2d\u5f00\u53d1\u73af\u5883\u9009\u62e9 1 \u4e2a\u51c6\u5907\u7684\u5f00\u53d1\u7528\u4ea4\u4ed8\u76ee\u6807, \u751f\u4ea7\u73af\u5883\u9009\u62e9\u591a\u4e2a\u4ea4\u4ed8\u76ee\u6807\u3002"),(0,a.kt)("p",null,(0,a.kt)("img",{src:n(81933).Z})),(0,a.kt)("p",null,"\uff083\uff09\u8bbe\u7f6e\u90e8\u7f72\u53c2\u6570\uff0c\u76f4\u63a5\u4e0a\u4f20\u51c6\u5907\u597d\u7684 Yaml \u6587\u4ef6\u5373\u53ef\u3002\u9700\u8981\u6ce8\u610f\u7684\u662f\uff0c\u8d44\u6e90\u7684\u540d\u79f0\u5982\u679c\u5728\u914d\u7f6e\u4e2d\u6307\u5b9a\uff0c\u5373\u4f7f\u7528\u914d\u7f6e\u7684\u540d\u79f0\uff0c\u4f60\u9700\u8981\u786e\u5b9a\u5176\u4e0e\u5df2\u5b58\u5728\u7684\u8d44\u6e90\u4e0d\u51b2\u7a81\uff0c\u5982\u679c\u4e0d\u6307\u5b9a\uff0c\u5219\u4f7f\u7528 KubeVela \u8d44\u6e90\u547d\u540d\u89c4\u5219\u81ea\u52a8\u547d\u540d\u3002\u7f16\u8f91\u5668\u4f1a\u81ea\u52a8\u5c06\u8f93\u5165\u7684\u5185\u5bb9\u8fdb\u884c\u683c\u5f0f\u5316\u3002"),(0,a.kt)("p",null,(0,a.kt)("img",{src:n(96267).Z})),(0,a.kt)("p",null,"\u8bbe\u7f6e\u5b8c\u6210\u540e\u70b9\u51fb ",(0,a.kt)("inlineCode",{parentName:"p"},"Create")," \u5373\u53ef\u5b8c\u6210\u5e94\u7528\u521b\u5efa\u3002"),(0,a.kt)("h2",{id:"\u90e8\u7f72\u6d4b\u8bd5\u73af\u5883"},"\u90e8\u7f72\u6d4b\u8bd5\u73af\u5883"),(0,a.kt)("p",null,(0,a.kt)("img",{src:n(1905).Z})),(0,a.kt)("p",null,"\u8fdb\u5165\u5e94\u7528\u7ba1\u7406\u9875\u9762\uff0c\u4f60\u4f1a\u53d1\u73b0\u6539\u5e94\u7528\u81ea\u52a8\u751f\u6210\u4e86 2 \u4e2a\u73af\u5883\uff0c2 \u4e2a\u5de5\u4f5c\u6d41\u3002Vela \u4f1a\u81ea\u52a8\u4e3a\u6bcf\u4e00\u4e2a\u73af\u5883\u751f\u6210\u9ed8\u8ba4\u7684\u5de5\u4f5c\u6d41\uff0c\u5de5\u4f5c\u6d41\u7531",(0,a.kt)("inlineCode",{parentName:"p"},"deploy2env"),"\u7c7b\u578b\u7684\u6b65\u9aa4\u7ec4\u6210\uff0c\u6bcf\u4e00\u4e2a\u4ea4\u4ed8\u76ee\u6807\u5bf9\u4e8e\u4e00\u4e2a\u6b65\u9aa4\uff0c\u8868\u793a\u5c06\u5e94\u7528\u4ea4\u4ed8\u5230\u8be5\u4ea4\u4ed8\u76ee\u6807\u3002"),(0,a.kt)("p",null,"\u6211\u4eec\u9996\u5148\u5207\u6362\u5230\u6d4b\u8bd5\u73af\u5883 Tab \u9875\u9762\u4e0b\uff0c\u70b9\u51fb\u9875\u9762\u4e2d\u7684 Deploy \u6309\u94ae\u8fdb\u884c\u8be5\u73af\u5883\u7684\u90e8\u7f72\u3002\u7531\u4e8e\u6d4b\u8bd5\u73af\u5883\u6211\u4eec\u53ea\u5206\u914d\u4e86\u4e00\u4e2a\u4ea4\u4ed8\u76ee\u6807\uff0c\u9ed8\u8ba4\u60c5\u51b5\u4e0b\u5de5\u4f5c\u6d41\u6b65\u9aa4\u53ea\u6709\u4e00\u6b65\u3002\u89c2\u5bdf\u9875\u9762\u53f3\u4e0a\u65b9\u7684\u5de5\u4f5c\u6d41\u6267\u884c\u72b6\u6001\uff0c\u5176\u53d8\u66f4\u4e3a\u7eff\u8272\u540e\u5373\u5df2\u6267\u884c\u5b8c\u6210\u3002\u5982\u679c\u5176\u4e3a\u7ea2\u8272\uff0c\u5373\u5de5\u4f5c\u6d41\u6267\u884c\u9047\u5230\u6545\u969c\uff0c\u6211\u4eec\u5c06\u9f20\u6807\u79fb\u52a8\u5230\u6b65\u9aa4\u4e0a\u65b9\u5373\u53ef\u67e5\u8be2\u5931\u8d25\u539f\u56e0\uff0c\u5904\u7406\u5f02\u5e38\u540e\u5de5\u4f5c\u91cf\u4f1a\u7ee7\u7eed\u91cd\u62fe\uff0c\u5982\u679c\u6545\u969c\u89e3\u51b3\u5176\u53ef\u5b8c\u6210\u90e8\u7f72\u3002"),(0,a.kt)("p",null,"\u90e8\u7f72\u5b8c\u6210\u540e\uff0c\u5237\u65b0\u5b9e\u4f8b\u5217\u8868\u5373\u53ef\u67e5\u770b\u5230 Pod \u5217\u8868\uff0c\u5982\u679c Pod \u8fd0\u884c\u5f02\u5e38\u53ef\u4ee5\u70b9\u51fb\u884c\u67e5\u770b Pod \u8be6\u60c5\u4fe1\u606f\u3002"),(0,a.kt)("p",null,(0,a.kt)("img",{src:n(59814).Z})),(0,a.kt)("p",null,"\u5bf9\u4e8e\u6d4b\u8bd5\u73af\u5883\uff0c\u5b83\u5f53\u7136\u5e94\u8be5\u6301\u7eed\u8fdb\u884c\u8fed\u4ee3\uff0c\u5f53\u6211\u4eec\u53d8\u66f4\u4e86\u90e8\u7f72\u53c2\u6570\uff08\u955c\u50cf\u7248\u672c\uff0c\u5b9e\u4f8b\u6570\u7b49\uff09\uff0c\u53ea\u9700\u8981\u91cd\u65b0\u6267\u884c\u6d4b\u8bd5\u73af\u5883\u7684 Workflow \u5373\u53ef\u5347\u7ea7\u90e8\u7f72\uff0c\u9f20\u6807\u79fb\u52a8\u5230\u9875\u9762\u53f3\u4e0a\u65b9\uff0c\u9009\u62e9\u6d4b\u8bd5\u73af\u5883\u7684 \u6d41\u6c34\u7ebf \u6267\u884c\u5373\u53ef\u3002\u82e5\u70b9\u51fb\u65c1\u8fb9\u7684 Deploy \u6309\u94ae\uff0c\u5176\u542b\u4e49\u662f\u6267\u884c\u9ed8\u8ba4\u7684\u6d41\u6c34\u7ebf\u3002"),(0,a.kt)("p",null,(0,a.kt)("img",{src:n(8078).Z})),(0,a.kt)("h2",{id:"\u90e8\u7f72\u751f\u4ea7\u73af\u5883"},"\u90e8\u7f72\u751f\u4ea7\u73af\u5883"),(0,a.kt)("p",null,"\u5f53\u6211\u4eec\u5728\u6d4b\u8bd5\u73af\u5883\u591a\u6b21\u90e8\u7f72\u5b8c\u6210\u4e1a\u52a1\u7684\u6d4b\u8bd5\u5de5\u4f5c\u4ee5\u540e\uff0c\u6211\u4eec\u8981\u5f00\u59cb\u5c06\u5e94\u7528\u53d1\u5e03\u5230\u751f\u4ea7\u73af\u5883\uff0c\u6211\u4eec\u5207\u6362\u5230\u751f\u4ea7\u73af\u5883 Tab \u4e0b\uff0c\u4f1a\u53d1\u73b0\u5f53\u524d\u73af\u5883\u5904\u4e8e\u672a\u90e8\u7f72\u72b6\u6001\u3002\u662f\u7684\uff0c\u540c\u4e00\u4e2a\u5e94\u7528\u7684\u4e0d\u540c\u73af\u5883\u662f\u5b8c\u5168\u9694\u79bb\u7ba1\u7406\u7684\uff0c\u5b83\u7684\u80cc\u540e\u662f\u751f\u6210\u72ec\u7acb\u7684\u5e94\u7528\u90e8\u7f72\u5b9e\u4f8b\uff08Application CR\uff09\u3002"),(0,a.kt)("p",null,"\u7531\u4e8e\u6211\u4eec\u751f\u4ea7\u73af\u5883\u6709\u591a\u4e2a\u4ea4\u4ed8\u76ee\u6807\uff0c\u5b83\u9ed8\u8ba4\u60c5\u51b5\u4e0b\u662f\u6839\u636e\u5148\u540e\u987a\u5e8f\u4f9d\u6b21\u90e8\u7f72\uff0c\u8fd9\u65f6\u5982\u679c\u5047\u8bbe\u5927\u5bb6\u5e0c\u671b\u5728\u90e8\u7f72\u5b8c\u7b2c\u4e00\u4e2a\u4ea4\u4ed8\u76ee\u6807\u540e\uff0c\u5e0c\u671b\u4eba\u5de5\u5ba1\u6838/\u6821\u9a8c\u4e00\u4e0b\u90e8\u7f72\u72b6\u6001\u540e\u518d\u6267\u884c\u540e\u7eed\u90e8\u7f72\u3002\u5e26\u7740\u8fd9\u4e2a\u9700\u6c42\uff0c\u6211\u4eec\u9700\u8981\u8fdb\u5165\u5230\u5e94\u7528\u57fa\u51c6\u914d\u7f6e\u7684\u5de5\u4f5c\u6d41\u7ba1\u7406\u9875\u9762\u3002"),(0,a.kt)("p",null,(0,a.kt)("img",{src:n(58004).Z})),(0,a.kt)("p",null,"\u6211\u4eec\u53ef\u4ee5\u770b\u5230\u5df2\u7ecf\u81ea\u52a8\u751f\u6210\u7684\u4e24\u6761\u6d41\u6c34\u7ebf\u914d\u7f6e\uff0c\u8fd9\u65f6\u6211\u4eec\u70b9\u51fb\u751f\u4ea7\u73af\u5883\u6d41\u6c34\u7ebf\u7684 ",(0,a.kt)("inlineCode",{parentName:"p"},"Edit")," \u8fdb\u5165\u7f16\u8f91\u6a21\u5f0f\uff0c\u4ece\u5de6\u4fa7\u7684\u5de5\u4f5c\u6d41\u6b65\u9aa4\u7684\u9009\u9879\u4e2d\u9009\u62e9 ",(0,a.kt)("inlineCode",{parentName:"p"},"suspend"),", \u5c06\u5176\u62d6\u5165\u53f3\u4fa7\u753b\u677f\u4e2d\u3002\u4fbf\u6377\u5f39\u7a97\u5c06\u81ea\u52a8\u51fa\u73b0\uff0c\u8be5\u7c7b\u578b\u6ca1\u6709\u66f4\u591a\u7684\u914d\u7f6e\u53c2\u6570\uff0c\u4f60\u53ef\u4ee5\u8bbe\u7f6e\u522b\u540d\u6216\u76f4\u63a5\u4fdd\u5b58\u5373\u53ef\u3002"),(0,a.kt)("p",null,"\u6dfb\u52a0\u5b8c\u6210\u540e\u6211\u4eec\u9700\u8981\u7f16\u6392\u5b83\u7684\u987a\u5e8f\uff0c\u9996\u5148\u65ad\u5f00\u5df2\u6709\u6b65\u9aa4\u4e4b\u95f4\u7684\u8fde\u7ebf\uff08\u901a\u8fc7\u70b9\u51fb\u8fde\u7ebf+delete \u952e\uff09,\u7136\u540e\u5c06 suspend \u6b65\u9aa4\u8fde\u7ebf\u5728\u4e2d\u95f4\u5373\u53ef\u3002\u7f16\u8f91\u5b8c\u6210\u540e\u9700\u8981\u70b9\u51fb\u53f3\u4e0a\u65b9\u7684 Save \u6309\u94ae\u5373\u53ef\u4fdd\u5b58\u5e76\u751f\u6548\u3002"),(0,a.kt)("p",null,(0,a.kt)("img",{src:n(23765).Z})),(0,a.kt)("p",null,"\u5de5\u4f5c\u6d41\u7f16\u8f91\u5b8c\u6210\u540e\u56de\u5230\u751f\u4ea7\u73af\u5883\u9875\u9762\u4e0b\uff0c\u70b9\u51fb Deploy \u6309\u94ae\uff0c\u5373\u53ef\u5f00\u59cb\u751f\u4ea7\u73af\u5883\u7684\u90e8\u7f72\u3002"),(0,a.kt)("p",null,(0,a.kt)("img",{src:n(56786).Z})),(0,a.kt)("p",null,"\u89c2\u5bdf\u53f3\u4e0a\u65b9\u7684\u5de5\u4f5c\u6d41\u6267\u884c\u72b6\u6001\uff0c\u5f53\u7b2c\u4e00\u4e2a\u4ea4\u4ed8\u76ee\u6807\u5b8c\u6210\u90e8\u7f72\u540e\uff0c\u5373\u4f1a\u505c\u6b62\u5728\u7b2c\u4e8c\u4e2a\u6b65\u9aa4\u7b49\u5f85\u7528\u6237\u8fdb\u884c\u5ba1\u6838\u64cd\u4f5c\uff0c\u6211\u4eec\u4ece\u4e0b\u65b9\u7684\u5b9e\u4f8b\u5217\u8868\u4e5f\u53ef\u4ee5\u67e5\u770b\u5230\u7b2c\u4e00\u4e2a\u4ea4\u4ed8\u76ee\u6807\u7684\u5b9e\u4f8b\u5df2\u7ecf\u751f\u6210\u5e76\u5904\u4e8e\u8fd0\u884c\u72b6\u6001\u3002"),(0,a.kt)("p",null,"\u6682\u505c\u6b65\u9aa4\u6709\u4e09\u4e2a\u64cd\u4f5c\u53ef\u4ee5\u8fdb\u884c\uff1a"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Rollback: \u7248\u672c\u56de\u9000\uff0c\u5373\u5c06\u91c7\u7528\u5386\u53f2\u6700\u65b0\u7684\u5b8c\u6210\u90e8\u7f72\u7684\u7248\u672c\u8fdb\u884c\u91cd\u65b0\u90e8\u7f72\uff0c\u5f53\u524d\u7248\u672c\u90e8\u7f72\u5de5\u4f5c\u6d41\u7ec8\u6b62\u3002"),(0,a.kt)("li",{parentName:"ul"},"Terminate: \u7ec8\u6b62\uff0c\u5373\u505c\u6b62\u5f53\u524d\u7248\u672c\u7684\u90e8\u7f72\uff0c\u4f46\u4e0d\u4f1a\u6539\u53d8\u5df2\u7ecf\u90e8\u7f72\u7684\u4ea4\u4ed8\u76ee\u6807\u3002"),(0,a.kt)("li",{parentName:"ul"},"Continue: \u7ee7\u7eed\u6267\u884c\uff0c\u8fdb\u5165\u4e0b\u4e00\u4e2a\u6b65\u9aa4\u7684\u6267\u884c\u3002")),(0,a.kt)("p",null,"\u5f53\u4f60\u9009\u62e9\u7ee7\u7eed\u6267\u884c\u540e\uff0c\u7b2c\u4e8c\u4e2a\u6216\u66f4\u591a\u7684\u4ea4\u4ed8\u76ee\u6807\u5373\u53ef\u5b8c\u6210\u90e8\u7f72\u3002\u4ece\u5b9e\u4f8b\u5217\u8868\u4e2d\u4f60\u53ef\u4ee5\u67e5\u770b\u5230\u591a\u4e2a\u4ea4\u4ed8\u76ee\u6807\u7684\u5b9e\u4f8b\uff0c\u53ef\u4ee5\u901a\u8fc7\u9009\u62e9\u4ea4\u4ed8\u76ee\u6807\u8fdb\u884c\u5b9e\u4f8b\u7b5b\u9009\u67e5\u8be2\u3002"),(0,a.kt)("p",null,(0,a.kt)("img",{src:n(74125).Z})),(0,a.kt)("p",null,"\u5230\u6b64\u4f60\u5df2\u7ecf\u5b8c\u6210\u4e86\u4ea4\u4ed8 Kubernetes \u539f\u751f\u8d44\u6e90\u7684\u5b66\u4e60\uff01"),(0,a.kt)("h2",{id:"\u4e0b\u4e00\u6b65"},"\u4e0b\u4e00\u6b65"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"./consume-cloud-services"},"\u5b66\u4e60\u4ea4\u4ed8\u4e91\u5382\u5546\u670d\u52a1"))))}p.isMDXComponent=!0},1905:function(e,t,n){"use strict";t.Z=n.p+"assets/images/app-dashboard-1ae37672b0cb8e31c268632386177585.jpg"},58004:function(e,t,n){"use strict";t.Z=n.p+"assets/images/app-workflow-83ca875d8c9d2e999d3602a15b1e745c.jpg"},96267:function(e,t,n){"use strict";t.Z=n.p+"assets/images/config-k8s-app-4f70a4523395d14f7a63238e37db8ca7.jpg"},81933:function(e,t,n){"use strict";t.Z=n.p+"assets/images/create-k8s-app-0d60b6112e197fb5ce618b2745503e82.jpg"},74125:function(e,t,n){"use strict";t.Z=n.p+"assets/images/multiple-target-pods-78341133751097ef14e41eab85257745.jpg"},59814:function(e,t,n){"use strict";t.Z=n.p+"assets/images/pod-list-5f3ab65c80c9c662869ab0774e3763f7.jpg"},8078:function(e,t,n){"use strict";t.Z=n.p+"assets/images/select-workflow-e7c88b798b83072f15fb7170eed42075.jpg"},23765:function(e,t,n){"use strict";t.Z=n.p+"assets/images/workflow-edit-d7e36aca89b22c7d1735d7035b39eaa4.jpg"},56786:function(e,t,n){"use strict";t.Z=n.p+"assets/images/workflow-suspend-c5d95aade908022475093f07b760c74a.jpg"}}]);