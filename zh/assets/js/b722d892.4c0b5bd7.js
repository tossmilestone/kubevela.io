(self.webpackChunkkubevela_io=self.webpackChunkkubevela_io||[]).push([[38337],{3905:function(e,t,n){"use strict";n.d(t,{Zo:function(){return s},kt:function(){return d}});var r=n(67294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,i=function(e,t){if(null==e)return{};var n,r,i={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var c=r.createContext({}),p=function(e){var t=r.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},s=function(e){var t=p(e.components);return r.createElement(c.Provider,{value:t},e.children)},f={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},u=r.forwardRef((function(e,t){var n=e.components,i=e.mdxType,a=e.originalType,c=e.parentName,s=l(e,["components","mdxType","originalType","parentName"]),u=p(n),d=i,v=u["".concat(c,".").concat(d)]||u[d]||f[d]||a;return n?r.createElement(v,o(o({ref:t},s),{},{components:n})):r.createElement(v,o({ref:t},s))}));function d(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var a=n.length,o=new Array(a);o[0]=u;var l={};for(var c in t)hasOwnProperty.call(t,c)&&(l[c]=t[c]);l.originalType=e,l.mdxType="string"==typeof e?e:i,o[1]=l;for(var p=2;p<a;p++)o[p]=n[p];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}u.displayName="MDXCreateElement"},3928:function(e,t,n){"use strict";n.r(t),n.d(t,{frontMatter:function(){return o},metadata:function(){return l},toc:function(){return c},default:function(){return s}});var r=n(22122),i=n(19756),a=(n(67294),n(3905)),o={title:"vela live-diff"},l={unversionedId:"cli/vela_live-diff",id:"version-v1.2/cli/vela_live-diff",isDocsHomePage:!1,title:"vela live-diff",description:"Dry-run application locally, and diff with a deployed application version",source:"@site/i18n/zh/docusaurus-plugin-content-docs/version-v1.2/cli/vela_live-diff.md",sourceDirName:"cli",slug:"/cli/vela_live-diff",permalink:"/zh/docs/cli/vela_live-diff",editUrl:"https://github.com/oam-dev/kubevela.io/edit/main/docs/cli/vela_live-diff.md",version:"v1.2",lastUpdatedBy:"barnettZQG",lastUpdatedAt:1642212376,formattedLastUpdatedAt:"2022/1/15",frontMatter:{title:"vela live-diff"}},c=[{value:"Synopsis",id:"synopsis",children:[]},{value:"Examples",id:"examples",children:[]},{value:"Options",id:"options",children:[]},{value:"SEE ALSO",id:"see-also",children:[]}],p={toc:c};function s(e){var t=e.components,n=(0,i.Z)(e,["components"]);return(0,a.kt)("wrapper",(0,r.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"Dry-run application locally, and diff with a deployed application version"),(0,a.kt)("h3",{id:"synopsis"},"Synopsis"),(0,a.kt)("p",null,"Dry-run application locally, and diff with a deployed application version."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"vela live-diff\n")),(0,a.kt)("h3",{id:"examples"},"Examples"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"vela live-diff -f app-v2.yaml -r app-v1 --context 10\n")),(0,a.kt)("h3",{id:"options"},"Options"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},'  -r, --Revision string     specify an application Revision name, by default, it will compare with the latest Revision\n  -c, --context int         output number lines of context around changes, by default show all unchanged lines (default -1)\n  -d, --definition string   specify a file or directory containing capability definitions, they will only be used in dry-run rather than applied to K8s cluster\n  -e, --env string          specify environment name for application\n  -f, --file string         application file name (default "./app.yaml")\n  -h, --help                help for live-diff\n  -n, --namespace string    specify the Kubernetes namespace to use\n')),(0,a.kt)("h3",{id:"see-also"},"SEE ALSO"),(0,a.kt)("h4",{id:"go-back-to-cli-commands-homepage"},"Go Back to ",(0,a.kt)("a",{parentName:"h4",href:"vela"},"CLI Commands")," Homepage."),(0,a.kt)("h6",{id:"auto-generated-by-spf13cobra-on-12-jan-2022-refer-to-script-in-kubevela"},"Auto generated by spf13/cobra on 12-Jan-2022, refer to ",(0,a.kt)("a",{parentName:"h6",href:"https://github.com/oam-dev/kubevela/tree/master/hack/docgen"},"script in KubeVela"),"."))}s.isMDXComponent=!0}}]);