(self.webpackChunkkubevela_io=self.webpackChunkkubevela_io||[]).push([[2058],{3905:function(e,n,t){"use strict";t.d(n,{Zo:function(){return c},kt:function(){return d}});var a=t(67294);function r(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function p(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);n&&(a=a.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,a)}return t}function o(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?p(Object(t),!0).forEach((function(n){r(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):p(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function l(e,n){if(null==e)return{};var t,a,r=function(e,n){if(null==e)return{};var t,a,r={},p=Object.keys(e);for(a=0;a<p.length;a++)t=p[a],n.indexOf(t)>=0||(r[t]=e[t]);return r}(e,n);if(Object.getOwnPropertySymbols){var p=Object.getOwnPropertySymbols(e);for(a=0;a<p.length;a++)t=p[a],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}var i=a.createContext({}),m=function(e){var n=a.useContext(i),t=n;return e&&(t="function"==typeof e?e(n):o(o({},n),e)),t},c=function(e){var n=m(e.components);return a.createElement(i.Provider,{value:n},e.children)},s={inlineCode:"code",wrapper:function(e){var n=e.children;return a.createElement(a.Fragment,{},n)}},u=a.forwardRef((function(e,n){var t=e.components,r=e.mdxType,p=e.originalType,i=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),u=m(t),d=r,k=u["".concat(i,".").concat(d)]||u[d]||s[d]||p;return t?a.createElement(k,o(o({ref:n},c),{},{components:t})):a.createElement(k,o({ref:n},c))}));function d(e,n){var t=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var p=t.length,o=new Array(p);o[0]=u;var l={};for(var i in n)hasOwnProperty.call(n,i)&&(l[i]=n[i]);l.originalType=e,l.mdxType="string"==typeof e?e:r,o[1]=l;for(var m=2;m<p;m++)o[m]=t[m];return a.createElement.apply(null,o)}return a.createElement.apply(null,t)}u.displayName="MDXCreateElement"},48670:function(e,n,t){"use strict";t.r(n),t.d(n,{frontMatter:function(){return o},metadata:function(){return l},toc:function(){return i},default:function(){return c}});var a=t(22122),r=t(19756),p=(t(67294),t(3905)),o={title:"\u81ea\u5b9a\u4e49\u7ec4\u4ef6\u5165\u95e8"},l={unversionedId:"platform-engineers/components/custom-component",id:"version-v1.2/platform-engineers/components/custom-component",isDocsHomePage:!1,title:"\u81ea\u5b9a\u4e49\u7ec4\u4ef6\u5165\u95e8",description:"\u5728\u9605\u8bfb\u672c\u90e8\u5206\u4e4b\u524d\uff0c\u8bf7\u786e\u4fdd\u4f60\u5df2\u7ecf\u4e86\u89e3 KubeVela \u4e2d \u7ec4\u4ef6\u5b9a\u4e49\uff08ComponentDefinition \u7684\u6982\u5ff5\u4e14\u5b66\u4e60\u638c\u63e1\u4e86 CUE \u7684\u57fa\u672c\u77e5\u8bc6",source:"@site/i18n/zh/docusaurus-plugin-content-docs/version-v1.2/platform-engineers/components/custom-component.md",sourceDirName:"platform-engineers/components",slug:"/platform-engineers/components/custom-component",permalink:"/zh/docs/platform-engineers/components/custom-component",editUrl:"https://github.com/oam-dev/kubevela.io/edit/main/docs/platform-engineers/components/custom-component.md",version:"v1.2",lastUpdatedBy:"barnettZQG",lastUpdatedAt:1642212376,formattedLastUpdatedAt:"2022/1/15",frontMatter:{title:"\u81ea\u5b9a\u4e49\u7ec4\u4ef6\u5165\u95e8"},sidebar:"version-v1.2/docs",previous:{title:"\u81ea\u5b9a\u4e49\u63d2\u4ef6",permalink:"/zh/docs/platform-engineers/addon/intro"},next:{title:"\u6269\u5c55\u4e91\u8d44\u6e90",permalink:"/zh/docs/platform-engineers/components/component-terraform"}},i=[{value:"\u4ea4\u4ed8\u4e00\u4e2a\u7b80\u5355\u7684\u81ea\u5b9a\u4e49\u7ec4\u4ef6",id:"\u4ea4\u4ed8\u4e00\u4e2a\u7b80\u5355\u7684\u81ea\u5b9a\u4e49\u7ec4\u4ef6",children:[]},{value:"\u4ea4\u4ed8\u4e00\u4e2a\u590d\u5408\u7684\u81ea\u5b9a\u4e49\u7ec4\u4ef6",id:"\u4ea4\u4ed8\u4e00\u4e2a\u590d\u5408\u7684\u81ea\u5b9a\u4e49\u7ec4\u4ef6",children:[]},{value:"\u4f7f\u7528 CUE <code>Context</code>",id:"\u4f7f\u7528-cue-context",children:[{value:"CUE <code>context</code> \u7684\u914d\u7f6e\u9879",id:"cue-context-\u7684\u914d\u7f6e\u9879",children:[]}]}],m={toc:i};function c(e){var n=e.components,t=(0,r.Z)(e,["components"]);return(0,p.kt)("wrapper",(0,a.Z)({},m,t,{components:n,mdxType:"MDXLayout"}),(0,p.kt)("blockquote",null,(0,p.kt)("p",{parentName:"blockquote"},"\u5728\u9605\u8bfb\u672c\u90e8\u5206\u4e4b\u524d\uff0c\u8bf7\u786e\u4fdd\u4f60\u5df2\u7ecf\u4e86\u89e3 KubeVela \u4e2d ",(0,p.kt)("a",{parentName:"p",href:"../oam/x-definition#%E7%BB%84%E4%BB%B6%E5%AE%9A%E4%B9%89%EF%BC%88ComponentDefinition%EF%BC%89"},"\u7ec4\u4ef6\u5b9a\u4e49\uff08ComponentDefinition")," \u7684\u6982\u5ff5\u4e14\u5b66\u4e60\u638c\u63e1\u4e86 ",(0,p.kt)("a",{parentName:"p",href:"../cue/basic"},"CUE \u7684\u57fa\u672c\u77e5\u8bc6"))),(0,p.kt)("p",null,"\u672c\u8282\u5c06\u4ee5\u7ec4\u4ef6\u5b9a\u4e49\u7684\u4f8b\u5b50\u5c55\u5f00\u8bf4\u660e\uff0c\u4ecb\u7ecd\u5982\u4f55\u4f7f\u7528 ",(0,p.kt)("a",{parentName:"p",href:"https://cuelang.org/"},"CUE")," \u901a\u8fc7\u7ec4\u4ef6\u5b9a\u4e49 ",(0,p.kt)("inlineCode",{parentName:"p"},"ComponentDefinition")," \u6765\u81ea\u5b9a\u4e49\u5e94\u7528\u90e8\u7f72\u8ba1\u5212\u7684\u7ec4\u4ef6\u3002"),(0,p.kt)("h3",{id:"\u4ea4\u4ed8\u4e00\u4e2a\u7b80\u5355\u7684\u81ea\u5b9a\u4e49\u7ec4\u4ef6"},"\u4ea4\u4ed8\u4e00\u4e2a\u7b80\u5355\u7684\u81ea\u5b9a\u4e49\u7ec4\u4ef6"),(0,p.kt)("p",null,"\u6211\u4eec\u53ef\u4ee5\u901a\u8fc7 ",(0,p.kt)("inlineCode",{parentName:"p"},"vela def init")," \u6765\u6839\u636e\u5df2\u6709\u7684 YAML \u6587\u4ef6\u6765\u751f\u6210\u4e00\u4e2a ",(0,p.kt)("inlineCode",{parentName:"p"},"ComponentDefinition")," \u6a21\u677f\u3002"),(0,p.kt)("p",null,"YAML \u6587\u4ef6\uff1a"),(0,p.kt)("pre",null,(0,p.kt)("code",{parentName:"pre",className:"language-yaml"},'apiVersion: "apps/v1"\nkind: "Deployment"\nspec:\n  selector:\n    matchLabels:\n      "app.oam.dev/component": "name"\n  template:\n    metadata:\n      labels:\n        "app.oam.dev/component": "name"\n    spec:\n      containers: \n      - name: "name"\n        image: "image"\n')),(0,p.kt)("p",null,"\u6839\u636e\u4ee5\u4e0a\u7684 YAML \u6765\u751f\u6210 ",(0,p.kt)("inlineCode",{parentName:"p"},"ComponentDefinition"),"\uff1a"),(0,p.kt)("pre",null,(0,p.kt)("code",{parentName:"pre",className:"language-shell"},"vela def init stateless -t component --template-yaml ./stateless.yaml -o stateless.cue\n")),(0,p.kt)("p",null,"\u5f97\u5230\u5982\u4e0b\u7ed3\u679c\uff1a"),(0,p.kt)("pre",null,(0,p.kt)("code",{parentName:"pre",className:"language-shell"},'$ cat stateless.cue\nstateless: {\n    annotations: {}\n    attributes: workload: definition: {\n        apiVersion: "<change me> apps/v1"\n        kind:       "<change me> Deployment"\n    }\n    description: ""\n    labels: {}\n    type: "component"\n}\n\ntemplate: {\n    output: {\n        spec: {\n            selector: matchLabels: "app.oam.dev/component": "name"\n            template: {\n                metadata: labels: "app.oam.dev/component": "name"\n                spec: containers: [{\n                    name:  "name"\n                    image: "image"\n                }]\n            }\n        }\n        apiVersion: "apps/v1"\n        kind:       "Deployment"\n    }\n    outputs: {}\n    parameters: {}\n}\n')),(0,p.kt)("p",null,"\u5728\u8fd9\u4e2a\u81ea\u52a8\u751f\u6210\u7684\u6a21\u677f\u4e2d\uff1a"),(0,p.kt)("ul",null,(0,p.kt)("li",{parentName:"ul"},"\u9700\u8981 ",(0,p.kt)("inlineCode",{parentName:"li"},".spec.workload")," \u6765\u6307\u793a\u8be5\u7ec4\u4ef6\u7684\u5de5\u4f5c\u8d1f\u8f7d\u7c7b\u578b\u3002"),(0,p.kt)("li",{parentName:"ul"},(0,p.kt)("inlineCode",{parentName:"li"},".spec.schematic.cue.template")," \u662f\u4e00\u4e2a CUE \u6a21\u677f\uff1a",(0,p.kt)("ul",{parentName:"li"},(0,p.kt)("li",{parentName:"ul"},(0,p.kt)("inlineCode",{parentName:"li"},"output")," \u5b57\u6bb5\u5b9a\u4e49\u4e86 CUE \u8981\u8f93\u51fa\u7684\u62bd\u8c61\u6a21\u677f\u3002"),(0,p.kt)("li",{parentName:"ul"},(0,p.kt)("inlineCode",{parentName:"li"},"parameter")," \u5b57\u6bb5\u5b9a\u4e49\u4e86\u6a21\u677f\u53c2\u6570\uff0c\u5373\u5728\u5e94\u7528\u90e8\u7f72\u8ba1\u5212\uff08Application\uff09\u4e2d\u516c\u5f00\u7684\u53ef\u914d\u7f6e\u5c5e\u6027\uff08KubeVela \u5c06\u57fa\u4e8e ",(0,p.kt)("inlineCode",{parentName:"li"},"parameter")," \u5b57\u6bb5\u81ea\u52a8\u751f\u6210 Json schema\uff09\u3002")))),(0,p.kt)("p",null,"\u4e0b\u9762\u6211\u4eec\u6765\u7ed9\u8fd9\u4e2a\u81ea\u52a8\u751f\u6210\u7684\u81ea\u5b9a\u4e49\u7ec4\u4ef6\u6dfb\u52a0\u53c2\u6570\u5e76\u8fdb\u884c\u8d4b\u503c\uff1a"),(0,p.kt)("pre",null,(0,p.kt)("code",{parentName:"pre"},'stateless: {\n    annotations: {}\n    attributes: workload: definition: {\n        apiVersion: "<change me> apps/v1"\n        kind:       "<change me> Deployment"\n    }\n    description: ""\n    labels: {}\n    type: "component"\n}\n\ntemplate: {\n    output: {\n        spec: {\n            selector: matchLabels: "app.oam.dev/component": parameter.name\n            template: {\n                metadata: labels: "app.oam.dev/component": parameter.name\n                spec: containers: [{\n                    name:  parameter.name\n                    image: parameter.image\n                }]\n            }\n        }\n        apiVersion: "apps/v1"\n        kind:       "Deployment"\n    }\n    outputs: {}\n    parameters: {\n    name: string\n    image: string\n  }\n}\n')),(0,p.kt)("p",null,"\u4fee\u6539\u540e\u53ef\u4ee5\u7528 ",(0,p.kt)("inlineCode",{parentName:"p"},"vela def vet")," \u505a\u4e00\u4e0b\u683c\u5f0f\u68c0\u67e5\u548c\u6821\u9a8c\u3002"),(0,p.kt)("pre",null,(0,p.kt)("code",{parentName:"pre",className:"language-shell"},"$ vela def vet stateless.cue\nValidation succeed.\n")),(0,p.kt)("p",null,"\u63a5\u7740\uff0c\u8ba9\u6211\u4eec\u58f0\u660e\u53e6\u4e00\u4e2a\u540d\u4e3a ",(0,p.kt)("inlineCode",{parentName:"p"},"task")," \u7684\u7ec4\u4ef6\u3002"),(0,p.kt)("pre",null,(0,p.kt)("code",{parentName:"pre",className:"language-shell"},"vela def init task -t component -o task.cue\n")),(0,p.kt)("p",null,"\u5f97\u5230\u5982\u4e0b\u7ed3\u679c\uff1a"),(0,p.kt)("pre",null,(0,p.kt)("code",{parentName:"pre",className:"language-shell"},'$ cat task.cue\ntask: {\n    annotations: {}\n    attributes: workload: definition: {\n        apiVersion: "<change me> apps/v1"\n        kind:       "<change me> Deployment"\n    }\n    description: ""\n    labels: {}\n    type: "component"\n}\n\ntemplate: {\n    output: {}\n    parameter: {}\n}\n')),(0,p.kt)("p",null,"\u4fee\u6539\u8be5\u7ec4\u4ef6\u5b9a\u4e49\uff1a"),(0,p.kt)("pre",null,(0,p.kt)("code",{parentName:"pre"},'task: {\n    annotations: {}\n    attributes: workload: definition: {\n        apiVersion: "batch/v1"\n        kind:       "Job"\n    }\n    description: ""\n    labels: {}\n    type: "component"\n}\n\ntemplate: {\n  output: {\n    apiVersion: "batch/v1"\n    kind:       "Job"\n    spec: {\n      parallelism: parameter.count\n      completions: parameter.count\n      template: spec: {\n        restartPolicy: parameter.restart\n        containers: [{\n          image: parameter.image\n          if parameter["cmd"] != _|_ {\n            command: parameter.cmd\n          }\n        }]\n      }\n    }\n  }\n    parameter: {\n    count:   *1 | int\n    image:   string\n    restart: *"Never" | string\n    cmd?: [...string]\n  }\n}\n')),(0,p.kt)("p",null,"\u5c06\u4ee5\u4e0a\u4e24\u4e2a\u7ec4\u4ef6\u5b9a\u4e49\u90e8\u7f72\u5230\u96c6\u7fa4\u4e2d\uff1a"),(0,p.kt)("pre",null,(0,p.kt)("code",{parentName:"pre",className:"language-shell"},"$ vela def apply stateless.cue\nComponentDefinition stateless created in namespace vela-system.\n$ vela def apply task.cue\nComponentDefinition task created in namespace vela-system.\n")),(0,p.kt)("p",null,"\u8fd9\u4e24\u4e2a\u5df2\u7ecf\u5b9a\u4e49\u597d\u7684\u7ec4\u4ef6\uff0c\u6700\u7ec8\u4f1a\u5728\u5e94\u7528\u90e8\u7f72\u8ba1\u5212\u4e2d\u5b9e\u4f8b\u5316\uff0c\u6211\u4eec\u5f15\u7528\u81ea\u5b9a\u4e49\u7684\u7ec4\u4ef6\u7c7b\u578b ",(0,p.kt)("inlineCode",{parentName:"p"},"stateless"),"\uff0c\u547d\u540d\u4e3a ",(0,p.kt)("inlineCode",{parentName:"p"},"hello"),"\u3002\u540c\u6837\uff0c\u6211\u4eec\u4e5f\u5f15\u7528\u4e86\u81ea\u5b9a\u4e49\u7684\u7b2c\u4e8c\u4e2a\u7ec4\u4ef6\u7c7b\u578b ",(0,p.kt)("inlineCode",{parentName:"p"},"task"),"\uff0c\u5e76\u547d\u4ee4\u4e3a ",(0,p.kt)("inlineCode",{parentName:"p"},"countdown"),"\u3002"),(0,p.kt)("p",null,"\u7136\u540e\u628a\u5b83\u4eec\u7f16\u5199\u5230\u5e94\u7528\u90e8\u7f72\u8ba1\u5212\u4e2d\uff0c\u5982\u4e0b\u6240\u793a\uff1a"),(0,p.kt)("pre",null,(0,p.kt)("code",{parentName:"pre",className:"language-yaml"},'apiVersion: core.oam.dev/v1alpha2\nkind: Application\nmetadata:\n  name: website\nspec:\n  components:\n    - name: hello\n      type: stateless\n      properties:\n        image: crccheck/hello-world\n        name: mysvc\n    - name: countdown\n      type: task\n      properties:\n        image: centos:7\n        cmd:\n          - "bin/bash"\n          - "-c"\n          - "for i in 9 8 7 6 5 4 3 2 1 ; do echo $i ; done"\n')),(0,p.kt)("p",null,"\u4ee5\u4e0a\uff0c\u6211\u4eec\u5c31\u5b8c\u6210\u4e86\u4e00\u4e2a\u81ea\u5b9a\u4e49\u5e94\u7528\u7ec4\u4ef6\u7684\u5e94\u7528\u4ea4\u4ed8\u5168\u8fc7\u7a0b\u3002\u503c\u5f97\u6ce8\u610f\u7684\u662f\uff0c\u4f5c\u4e3a\u7ba1\u7406\u5458\u7684\u6211\u4eec\uff0c\u53ef\u4ee5\u901a\u8fc7 CUE \u63d0\u4f9b\u7528\u6237\u6240\u9700\u8981\u7684\u4efb\u4f55\u81ea\u5b9a\u4e49\u7ec4\u4ef6\u7c7b\u578b\uff0c\u540c\u65f6\u4e5f\u4e3a\u7528\u6237\u63d0\u4f9b\u4e86\u6a21\u677f\u53c2\u6570 ",(0,p.kt)("inlineCode",{parentName:"p"},"parameter")," \u6765\u7075\u6d3b\u5730\u6307\u5b9a\u5bf9 Kubernetes \u76f8\u5173\u8d44\u6e90\u7684\u8981\u6c42\u3002"),(0,p.kt)("h4",{id:"\u67e5\u770b-kubernetes-\u6700\u7ec8\u8d44\u6e90\u4fe1\u606f"},"\u67e5\u770b Kubernetes \u6700\u7ec8\u8d44\u6e90\u4fe1\u606f"),(0,p.kt)("details",null,(0,p.kt)("pre",null,(0,p.kt)("code",{parentName:"pre",className:"language-yaml"},"apiVersion: apps/v1\nkind: Deployment\nmetadata:\n  name: backend\n  ... # \u9690\u85cf\u4e00\u4e9b\u4e0e\u672c\u5c0f\u8282\u8bb2\u89e3\u65e0\u5173\u7684\u4fe1\u606f\nspec:\n  template:\n    spec:\n      containers:\n        - name: mysvc\n          image: crccheck/hello-world\n    metadata:\n      labels:\n        app.oam.dev/component: mysvc\n  selector:\n    matchLabels:\n      app.oam.dev/component: mysvc\n---\napiVersion: batch/v1\nkind: Job\nmetadata:\n  name: countdown\n  ... # \u9690\u85cf\u4e00\u4e9b\u4e0e\u672c\u5c0f\u8282\u8bb2\u89e3\u65e0\u5173\u7684\u4fe1\u606f\nspec:\n  parallelism: 1\n  completions: 1\n  template:\n    metadata:\n      name: countdown\n    spec:\n      containers:\n        - name: countdown\n          image: 'centos:7'\n          command:\n            - bin/bash\n            - '-c'\n            - for i in 9 8 7 6 5 4 3 2 1 ; do echo $i ; done\n      restartPolicy: Never\n"))),(0,p.kt)("h3",{id:"\u4ea4\u4ed8\u4e00\u4e2a\u590d\u5408\u7684\u81ea\u5b9a\u4e49\u7ec4\u4ef6"},"\u4ea4\u4ed8\u4e00\u4e2a\u590d\u5408\u7684\u81ea\u5b9a\u4e49\u7ec4\u4ef6"),(0,p.kt)("p",null,"\u9664\u4e86\u4e0a\u9762\u8fd9\u4e2a\u4f8b\u5b50\u5916\uff0c\u4e00\u4e2a\u7ec4\u4ef6\u7684\u5b9a\u4e49\u901a\u5e38\u4e5f\u4f1a\u7531\u591a\u4e2a Kubernetes API \u8d44\u6e90\u7ec4\u6210\u3002\u4f8b\u5982\uff0c\u4e00\u4e2a\u7531 ",(0,p.kt)("inlineCode",{parentName:"p"},"Deployment")," \u548c ",(0,p.kt)("inlineCode",{parentName:"p"},"Service")," \u7ec4\u6210\u7684 ",(0,p.kt)("inlineCode",{parentName:"p"},"webserver")," \u7ec4\u4ef6\u3002CUE \u540c\u6837\u80fd\u5f88\u597d\u7684\u6ee1\u8db3\u8fd9\u79cd\u81ea\u5b9a\u4e49\u590d\u5408\u7ec4\u4ef6\u7684\u9700\u6c42\u3002"),(0,p.kt)("p",null,"\u6211\u4eec\u4f1a\u4f7f\u7528 ",(0,p.kt)("inlineCode",{parentName:"p"},"output")," \u8fd9\u4e2a\u5b57\u6bb5\u6765\u5b9a\u4e49\u5de5\u4f5c\u8d1f\u8f7d\u7c7b\u578b\u7684\u6a21\u677f\uff0c\u800c\u5176\u4ed6\u5269\u4e0b\u7684\u8d44\u6e90\u6a21\u677f\uff0c\u90fd\u5728 ",(0,p.kt)("inlineCode",{parentName:"p"},"outputs")," \u8fd9\u4e2a\u5b57\u6bb5\u91cc\u8fdb\u884c\u58f0\u660e\uff0c\u683c\u5f0f\u5982\u4e0b\uff1a"),(0,p.kt)("pre",null,(0,p.kt)("code",{parentName:"pre",className:"language-cue"},"outputs: <unique-name>: \n  <full template data>\n")),(0,p.kt)("p",null,"\u56de\u5230 ",(0,p.kt)("inlineCode",{parentName:"p"},"webserver")," \u8fd9\u4e2a\u590d\u5408\u81ea\u5b9a\u4e49\u7ec4\u4ef6\u4e0a\uff0c\u5b83\u7684 CUE \u6587\u4ef6\u7f16\u5199\u5982\u4e0b\uff1a"),(0,p.kt)("pre",null,(0,p.kt)("code",{parentName:"pre"},'webserver: {\n    annotations: {}\n    attributes: workload: definition: {\n        apiVersion: "apps/v1"\n        kind:       "Deployment"\n    }\n    description: ""\n    labels: {}\n    type: "component"\n}\n\ntemplate: {\n  output: {\n    apiVersion: "apps/v1"\n    kind:       "Deployment"\n    spec: {\n      selector: matchLabels: {\n        "app.oam.dev/component": context.name\n      }\n      template: {\n        metadata: labels: {\n          "app.oam.dev/component": context.name\n        }\n        spec: {\n          containers: [{\n            name:  context.name\n            image: parameter.image\n\n            if parameter["cmd"] != _|_ {\n              command: parameter.cmd\n            }\n\n            if parameter["env"] != _|_ {\n              env: parameter.env\n            }\n\n            if context["config"] != _|_ {\n              env: context.config\n            }\n\n            ports: [{\n              containerPort: parameter.port\n            }]\n\n            if parameter["cpu"] != _|_ {\n              resources: {\n                limits:\n                  cpu: parameter.cpu\n                requests:\n                  cpu: parameter.cpu\n              }\n            }\n          }]\n        }\n      }\n    }\n  }\n  // an extra template\n  outputs: service: {\n    apiVersion: "v1"\n    kind:       "Service"\n    spec: {\n      selector: {\n        "app.oam.dev/component": context.name\n      }\n      ports: [\n        {\n          port:       parameter.port\n          targetPort: parameter.port\n        },\n      ]\n    }\n  }\n    parameter: {\n    image: string\n    cmd?: [...string]\n    port: *80 | int\n    env?: [...{\n      name:   string\n      value?: string\n      valueFrom?: {\n        secretKeyRef: {\n          name: string\n          key:  string\n        }\n      }\n    }]\n    cpu?: string\n  }\n}\n')),(0,p.kt)("p",null,"\u53ef\u4ee5\u770b\u5230\uff1a"),(0,p.kt)("ol",null,(0,p.kt)("li",{parentName:"ol"},"\u6700\u6838\u5fc3\u7684\u5de5\u4f5c\u8d1f\u8f7d\uff0c\u6211\u4eec\u6309\u9700\u8981\u5728 ",(0,p.kt)("inlineCode",{parentName:"li"},"output")," \u5b57\u6bb5\u91cc\uff0c\u5b9a\u4e49\u4e86\u4e00\u4e2a\u8981\u4ea4\u4ed8\u7684 ",(0,p.kt)("inlineCode",{parentName:"li"},"Deployment")," \u7c7b\u578b\u7684 Kubernetes \u8d44\u6e90\u3002"),(0,p.kt)("li",{parentName:"ol"},(0,p.kt)("inlineCode",{parentName:"li"},"Service")," \u7c7b\u578b\u7684\u8d44\u6e90\uff0c\u5219\u653e\u5230 ",(0,p.kt)("inlineCode",{parentName:"li"},"outputs")," \u91cc\u5b9a\u4e49\u3002\u4ee5\u6b64\u7c7b\u63a8\uff0c\u5982\u679c\u4f60\u8981\u590d\u5408\u7b2c\u4e09\u4e2a\u8d44\u6e90\uff0c\u53ea\u9700\u8981\u7ee7\u7eed\u5728\u540e\u9762\u4ee5\u952e\u503c\u5bf9\u7684\u65b9\u5f0f\u6dfb\u52a0\uff1a")),(0,p.kt)("pre",null,(0,p.kt)("code",{parentName:"pre"},'outputs: service: {\n            apiVersion: "v1"\n            kind:       "Service"\n            spec: {\n...\noutputs: third-resource: {\n            apiVersion: "v1"\n            kind:       "Service"\n            spec: {   \n...                     \n')),(0,p.kt)("p",null,"\u5728\u7406\u89e3\u8fd9\u4e9b\u4e4b\u540e\uff0c\u5c06\u4e0a\u9762\u7684\u7ec4\u4ef6\u5b9a\u4e49\u5bf9\u8c61\u4fdd\u5b58\u5230 CUE \u6587\u4ef6\u4e2d\uff0c\u5e76\u90e8\u7f72\u5230\u4f60\u7684 Kubernetes \u96c6\u7fa4\u3002"),(0,p.kt)("pre",null,(0,p.kt)("code",{parentName:"pre",className:"language-shell"},"$ vela def apply webserver.cue\nComponentDefinition webserver created in namespace vela-system.\n")),(0,p.kt)("p",null,"\u7136\u540e\uff0c\u6211\u4eec\u4f7f\u7528\u5b83\u4eec\uff0c\u6765\u7f16\u5199\u4e00\u4e2a\u5e94\u7528\u90e8\u7f72\u8ba1\u5212\uff1a"),(0,p.kt)("pre",null,(0,p.kt)("code",{parentName:"pre",className:"language-yaml"},'apiVersion: core.oam.dev/v1beta1\nkind: Application\nmetadata:\n  name: webserver-demo\n  namespace: default\nspec:\n  components:\n    - name: hello-world\n      type: webserver\n      properties:\n        image: crccheck/hello-world\n        port: 8000\n        env:\n        - name: "foo"\n          value: "bar"\n        cpu: "100m"\n')),(0,p.kt)("p",null,"\u8fdb\u884c\u90e8\u7f72\uff1a"),(0,p.kt)("pre",null,(0,p.kt)("code",{parentName:"pre"},"$ vela up -f webserver.yaml\n")),(0,p.kt)("p",null,"\u6700\u540e\uff0c\u5b83\u5c06\u5728\u8fd0\u884c\u65f6\u96c6\u7fa4\u751f\u6210\u76f8\u5173 Kubernetes \u8d44\u6e90\u5982\u4e0b\uff1a"),(0,p.kt)("pre",null,(0,p.kt)("code",{parentName:"pre",className:"language-shell"},"$ kubectl get deployment\nNAME             READY   UP-TO-DATE   AVAILABLE   AGE\nhello-world-v1   1/1     1            1           15s\n\n$ kubectl get svc\nNAME                           TYPE        CLUSTER-IP      EXTERNAL-IP   PORT(S)    AGE\nhello-world-trait-7bdcff98f7   ClusterIP   <your ip>       <none>        8000/TCP   32s\n")),(0,p.kt)("h2",{id:"\u4f7f\u7528-cue-context"},"\u4f7f\u7528 CUE ",(0,p.kt)("inlineCode",{parentName:"h2"},"Context")),(0,p.kt)("p",null,"KubeVela \u8ba9\u4f60\u53ef\u4ee5\u5728\u8fd0\u884c\u65f6\uff0c\u901a\u8fc7 ",(0,p.kt)("inlineCode",{parentName:"p"},"context")," \u5173\u952e\u5b57\u6765\u5f15\u7528\u4e00\u4e9b\u4fe1\u606f\u3002"),(0,p.kt)("p",null,"\u6700\u5e38\u7528\u7684\u5c31\u662f\u5e94\u7528\u90e8\u7f72\u8ba1\u5212\u7684\u540d\u79f0 ",(0,p.kt)("inlineCode",{parentName:"p"},"context.appName")," \u548c\u7ec4\u4ef6\u7684\u540d\u79f0 ",(0,p.kt)("inlineCode",{parentName:"p"},"context.name"),"\u3002"),(0,p.kt)("pre",null,(0,p.kt)("code",{parentName:"pre",className:"language-cue"},"context: {\n  appName: string\n  name: string\n}\n")),(0,p.kt)("p",null,"\u4e3e\u4f8b\u6765\u8bf4\uff0c\u5047\u8bbe\u4f60\u5728\u5b9e\u73b0\u4e00\u4e2a\u7ec4\u4ef6\u5b9a\u4e49\uff0c\u5e0c\u671b\u5c06\u5bb9\u5668\u7684\u540d\u79f0\u586b\u5145\u4e3a\u7ec4\u4ef6\u7684\u540d\u79f0\u3002\u90a3\u4e48\u8fd9\u6837\u505a\uff1a"),(0,p.kt)("pre",null,(0,p.kt)("code",{parentName:"pre",className:"language-cue"},"parameter: {\n    image: string\n}\noutput: {\n  ...\n    spec: {\n        containers: [{\n            name:  context.name\n            image: parameter.image\n        }]\n    }\n  ...\n}\n")),(0,p.kt)("blockquote",null,(0,p.kt)("p",{parentName:"blockquote"},"\u6ce8\u610f\uff0c",(0,p.kt)("inlineCode",{parentName:"p"},"context")," \u7684\u4fe1\u606f\u4f1a\u5728\u8d44\u6e90\u90e8\u7f72\u5230\u76ee\u6807\u96c6\u7fa4\u4e4b\u524d\u5c31\u81ea\u52a8\u6ce8\u5165\u4e86")),(0,p.kt)("h3",{id:"cue-context-\u7684\u914d\u7f6e\u9879"},"CUE ",(0,p.kt)("inlineCode",{parentName:"h3"},"context")," \u7684\u914d\u7f6e\u9879"),(0,p.kt)("table",null,(0,p.kt)("thead",{parentName:"table"},(0,p.kt)("tr",{parentName:"thead"},(0,p.kt)("th",{parentName:"tr",align:"center"},"Context \u53d8\u91cf\u540d"),(0,p.kt)("th",{parentName:"tr",align:"center"},"\u8bf4\u660e"))),(0,p.kt)("tbody",{parentName:"table"},(0,p.kt)("tr",{parentName:"tbody"},(0,p.kt)("td",{parentName:"tr",align:"center"},(0,p.kt)("inlineCode",{parentName:"td"},"context.appRevision")),(0,p.kt)("td",{parentName:"tr",align:"center"},"\u5e94\u7528\u90e8\u7f72\u8ba1\u5212\u7684\u7248\u672c")),(0,p.kt)("tr",{parentName:"tbody"},(0,p.kt)("td",{parentName:"tr",align:"center"},(0,p.kt)("inlineCode",{parentName:"td"},"context.appRevisionNum")),(0,p.kt)("td",{parentName:"tr",align:"center"},"\u5e94\u7528\u90e8\u7f72\u8ba1\u5212\u7684\u7248\u672c\u53f7(",(0,p.kt)("inlineCode",{parentName:"td"},"int")," \u7c7b\u578b), \u6bd4\u5982\u8bf4\u5982\u679c ",(0,p.kt)("inlineCode",{parentName:"td"},"context.appRevision")," \u662f ",(0,p.kt)("inlineCode",{parentName:"td"},"app-v1")," \u7684\u8bdd\uff0c",(0,p.kt)("inlineCode",{parentName:"td"},"context.appRevisionNum")," \u4f1a\u662f ",(0,p.kt)("inlineCode",{parentName:"td"},"1"))),(0,p.kt)("tr",{parentName:"tbody"},(0,p.kt)("td",{parentName:"tr",align:"center"},(0,p.kt)("inlineCode",{parentName:"td"},"context.appName")),(0,p.kt)("td",{parentName:"tr",align:"center"},"\u5e94\u7528\u90e8\u7f72\u8ba1\u5212\u7684\u540d\u79f0")),(0,p.kt)("tr",{parentName:"tbody"},(0,p.kt)("td",{parentName:"tr",align:"center"},(0,p.kt)("inlineCode",{parentName:"td"},"context.name")),(0,p.kt)("td",{parentName:"tr",align:"center"},"\u7ec4\u4ef6\u7684\u540d\u79f0")),(0,p.kt)("tr",{parentName:"tbody"},(0,p.kt)("td",{parentName:"tr",align:"center"},(0,p.kt)("inlineCode",{parentName:"td"},"context.namespace")),(0,p.kt)("td",{parentName:"tr",align:"center"},"\u5e94\u7528\u90e8\u7f72\u8ba1\u5212\u7684\u547d\u540d\u7a7a\u95f4")),(0,p.kt)("tr",{parentName:"tbody"},(0,p.kt)("td",{parentName:"tr",align:"center"},(0,p.kt)("inlineCode",{parentName:"td"},"context.output")),(0,p.kt)("td",{parentName:"tr",align:"center"},"\u7ec4\u4ef6\u4e2d\u6e32\u67d3\u7684\u5de5\u4f5c\u8d1f\u8f7d API \u8d44\u6e90\uff0c\u8fd9\u901a\u5e38\u7528\u5728\u8fd0\u7ef4\u7279\u5f81\u91cc")),(0,p.kt)("tr",{parentName:"tbody"},(0,p.kt)("td",{parentName:"tr",align:"center"},(0,p.kt)("inlineCode",{parentName:"td"},"context.outputs.<resourceName>")),(0,p.kt)("td",{parentName:"tr",align:"center"},"\u7ec4\u4ef6\u4e2d\u6e32\u67d3\u7684\u8fd0\u7ef4\u7279\u5f81 API \u8d44\u6e90\uff0c\u8fd9\u901a\u5e38\u7528\u5728\u8fd0\u7ef4\u7279\u5f81\u91cc")))))}c.isMDXComponent=!0}}]);