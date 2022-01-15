(self.webpackChunkkubevela_io=self.webpackChunkkubevela_io||[]).push([[21741],{3905:function(e,t,r){"use strict";r.d(t,{Zo:function(){return d},kt:function(){return s}});var a=r(67294);function n(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,a)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){n(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,a,n=function(e,t){if(null==e)return{};var r,a,n={},o=Object.keys(e);for(a=0;a<o.length;a++)r=o[a],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)r=o[a],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var p=a.createContext({}),c=function(e){var t=a.useContext(p),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},d=function(e){var t=c(e.components);return a.createElement(p.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},m=a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,o=e.originalType,p=e.parentName,d=l(e,["components","mdxType","originalType","parentName"]),m=c(r),s=n,f=m["".concat(p,".").concat(s)]||m[s]||u[s]||o;return r?a.createElement(f,i(i({ref:t},d),{},{components:r})):a.createElement(f,i({ref:t},d))}));function s(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var o=r.length,i=new Array(o);i[0]=m;var l={};for(var p in t)hasOwnProperty.call(t,p)&&(l[p]=t[p]);l.originalType=e,l.mdxType="string"==typeof e?e:n,i[1]=l;for(var c=2;c<o;c++)i[c]=r[c];return a.createElement.apply(null,i)}return a.createElement.apply(null,r)}m.displayName="MDXCreateElement"},13405:function(e,t,r){"use strict";r.r(t),r.d(t,{frontMatter:function(){return i},metadata:function(){return l},toc:function(){return p},default:function(){return d}});var a=r(22122),n=r(19756),o=(r(67294),r(3905)),i={title:"Roadmap"},l={unversionedId:"roadmap/2021-03-roadmap",id:"version-v1.2/roadmap/2021-03-roadmap",isDocsHomePage:!1,title:"Roadmap",description:"Date: 2021-01-01 to 2021-03-30",source:"@site/i18n/zh/docusaurus-plugin-content-docs/version-v1.2/roadmap/2021-03-roadmap.md",sourceDirName:"roadmap",slug:"/roadmap/2021-03-roadmap",permalink:"/zh/docs/roadmap/2021-03-roadmap",editUrl:"https://github.com/oam-dev/kubevela.io/edit/main/docs/roadmap/2021-03-roadmap.md",version:"v1.2",lastUpdatedBy:"barnettZQG",lastUpdatedAt:1642212376,formattedLastUpdatedAt:"2022/1/15",frontMatter:{title:"Roadmap"}},p=[{value:"Core Platform",id:"core-platform",children:[]},{value:"User Experience",id:"user-experience",children:[]},{value:"Third-party integrations",id:"third-party-integrations",children:[]}],c={toc:p};function d(e){var t=e.components,r=(0,n.Z)(e,["components"]);return(0,o.kt)("wrapper",(0,a.Z)({},c,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"Date: 2021-01-01 to 2021-03-30"),(0,o.kt)("h2",{id:"core-platform"},"Core Platform"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Add Application object as the deployment unit applied to k8s control plane.",(0,o.kt)("ul",{parentName:"li"},(0,o.kt)("li",{parentName:"ul"},"The new Application object will handle CUE template rendering on the server side. So the appfile would be translated to Application object directly without doing client side rendering."),(0,o.kt)("li",{parentName:"ul"},"CLI/UI will be updated to replace ApplicationConfiguration and Component objects with Application object."))),(0,o.kt)("li",{parentName:"ul"},"Integrate Terraform as one of the core templating engines so that platform builders can add Terraform modules as Workloads/Traits into KubeVela."),(0,o.kt)("li",{parentName:"ul"},"Re-architect API Server to have clean API and storage layer as ",(0,o.kt)("a",{parentName:"li",href:"https://github.com/oam-dev/kubevela/blob/master/design/vela-core/APIServer-Catalog.md#2-api-design"},"designed"),"."),(0,o.kt)("li",{parentName:"ul"},"Automatically sync Catalog server and display packages information as ",(0,o.kt)("a",{parentName:"li",href:"https://github.com/oam-dev/kubevela/blob/master/design/vela-core/APIServer-Catalog.md#3-catalog-design"},"designed"),"."),(0,o.kt)("li",{parentName:"ul"},"Add Rollout CRD to do native Workload and Application level application rollout management."),(0,o.kt)("li",{parentName:"ul"},"Support intermediate store (e.g. ConfigMap) and JSON patch operations in data input/output.")),(0,o.kt)("h2",{id:"user-experience"},"User Experience"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Rewrite dashboard to support up-to-date Vela object model.",(0,o.kt)("ul",{parentName:"li"},(0,o.kt)("li",{parentName:"ul"},"Support dynamic form rendering based on OpenAPI schema generated from Definition objects."),(0,o.kt)("li",{parentName:"ul"},"Support displaying pages of applications, capabilities, catalogs."))),(0,o.kt)("li",{parentName:"ul"},"Automatically generate reference docs for capabilities and support displaying them in CLI/UI devtools.")),(0,o.kt)("h2",{id:"third-party-integrations"},"Third-party integrations"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Integrate with S2I (Source2Image) tooling like ",(0,o.kt)("a",{parentName:"li",href:"https://github.com/alibaba/derrick"},"Derrick")," to enable more developer-friendly workflow in appfile."),(0,o.kt)("li",{parentName:"ul"},"Integrate with Dapr to enable end-to-end microservice application development and deployment workflow.")))}d.isMDXComponent=!0}}]);