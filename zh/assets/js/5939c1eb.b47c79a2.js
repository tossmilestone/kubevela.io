(self.webpackChunkkubevela_io=self.webpackChunkkubevela_io||[]).push([[2204],{3905:function(e,t,n){"use strict";n.d(t,{Zo:function(){return c},kt:function(){return m}});var a=n(67294);function l(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){l(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,a,l=function(e,t){if(null==e)return{};var n,a,l={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||(l[n]=e[n]);return l}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(l[n]=e[n])}return l}var u=a.createContext({}),i=function(e){var t=a.useContext(u),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},c=function(e){var t=i(e.components);return a.createElement(u.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},k=a.forwardRef((function(e,t){var n=e.components,l=e.mdxType,r=e.originalType,u=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),k=i(n),m=l,d=k["".concat(u,".").concat(m)]||k[m]||p[m]||r;return n?a.createElement(d,o(o({ref:t},c),{},{components:n})):a.createElement(d,o({ref:t},c))}));function m(e,t){var n=arguments,l=t&&t.mdxType;if("string"==typeof e||l){var r=n.length,o=new Array(r);o[0]=k;var s={};for(var u in t)hasOwnProperty.call(t,u)&&(s[u]=t[u]);s.originalType=e,s.mdxType="string"==typeof e?e:l,o[1]=s;for(var i=2;i<r;i++)o[i]=n[i];return a.createElement.apply(null,o)}return a.createElement.apply(null,n)}k.displayName="MDXCreateElement"},58215:function(e,t,n){"use strict";var a=n(67294);t.Z=function(e){var t=e.children,n=e.hidden,l=e.className;return a.createElement("div",{role:"tabpanel",hidden:n,className:l},t)}},41395:function(e,t,n){"use strict";n.d(t,{Z:function(){return c}});var a=n(67294),l=n(80944),r=n(86010),o="tabItem_1uMI",s="tabItemActive_2DSg";var u=37,i=39;var c=function(e){var t=e.lazy,n=e.block,c=e.defaultValue,p=e.values,k=e.groupId,m=e.className,d=(0,l.Z)(),b=d.tabGroupChoices,v=d.setTabGroupChoices,g=(0,a.useState)(c),h=g[0],f=g[1],N=a.Children.toArray(e.children),y=[];if(null!=k){var x=b[k];null!=x&&x!==h&&p.some((function(e){return e.value===x}))&&f(x)}var E=function(e){var t=e.currentTarget,n=y.indexOf(t),a=p[n].value;f(a),null!=k&&(v(k,a),setTimeout((function(){var e,n,a,l,r,o,u,i;(e=t.getBoundingClientRect(),n=e.top,a=e.left,l=e.bottom,r=e.right,o=window,u=o.innerHeight,i=o.innerWidth,n>=0&&r<=i&&l<=u&&a>=0)||(t.scrollIntoView({block:"center",behavior:"smooth"}),t.classList.add(s),setTimeout((function(){return t.classList.remove(s)}),2e3))}),150))},T=function(e){var t,n;switch(e.keyCode){case i:var a=y.indexOf(e.target)+1;n=y[a]||y[0];break;case u:var l=y.indexOf(e.target)-1;n=y[l]||y[y.length-1]}null==(t=n)||t.focus()};return a.createElement("div",{className:"tabs-container"},a.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,r.Z)("tabs",{"tabs--block":n},m)},p.map((function(e){var t=e.value,n=e.label;return a.createElement("li",{role:"tab",tabIndex:h===t?0:-1,"aria-selected":h===t,className:(0,r.Z)("tabs__item",o,{"tabs__item--active":h===t}),key:t,ref:function(e){return y.push(e)},onKeyDown:T,onFocus:E,onClick:E},n)}))),t?(0,a.cloneElement)(N.filter((function(e){return e.props.value===h}))[0],{className:"margin-vert--md"}):a.createElement("div",{className:"margin-vert--md"},N.map((function(e,t){return(0,a.cloneElement)(e,{key:t,hidden:e.props.value!==h})}))))}},79443:function(e,t,n){"use strict";var a=(0,n(67294).createContext)(void 0);t.Z=a},80944:function(e,t,n){"use strict";var a=n(67294),l=n(79443);t.Z=function(){var e=(0,a.useContext)(l.Z);if(null==e)throw new Error("`useUserPreferencesContext` is used outside of `Layout` Component.");return e}},91145:function(e,t,n){"use strict";n.r(t),n.d(t,{frontMatter:function(){return u},metadata:function(){return i},toc:function(){return c},default:function(){return k}});var a=n(22122),l=n(19756),r=(n(67294),n(3905)),o=n(41395),s=n(58215),u={title:"\u5feb\u901f\u5b89\u88c5"},i={unversionedId:"install",id:"version-v1.2/install",isDocsHomePage:!1,title:"\u5feb\u901f\u5b89\u88c5",description:"\u5982\u679c\u662f\u8981\u5347\u7ea7\u73b0\u6709\u7684 KubeVela\uff0c\u8bf7\u76f4\u63a5\u9605\u8bfb \u5347\u7ea7\u6307\u5357.",source:"@site/i18n/zh/docusaurus-plugin-content-docs/version-v1.2/install.mdx",sourceDirName:".",slug:"/install",permalink:"/zh/docs/install",editUrl:"https://github.com/oam-dev/kubevela.io/edit/main/docs/install.mdx",version:"v1.2",lastUpdatedBy:"barnettZQG",lastUpdatedAt:1642212376,formattedLastUpdatedAt:"2022/1/15",frontMatter:{title:"\u5feb\u901f\u5b89\u88c5"},sidebar:"version-v1.2/docs",previous:{title:"\u4ea4\u4ed8\u7b2c\u4e00\u4e2a\u5e94\u7528",permalink:"/zh/docs/quick-start"},next:{title:"\u4ea4\u4ed8 Docker \u955c\u50cf",permalink:"/zh/docs/tutorials/webservice"}},c=[{value:"1. \u51c6\u5907\u63a7\u5236\u5e73\u9762\u7684 Kubernetes \u96c6\u7fa4",id:"1-\u51c6\u5907\u63a7\u5236\u5e73\u9762\u7684-kubernetes-\u96c6\u7fa4",children:[]},{value:"2. \u5b89\u88c5 KubeVela Core",id:"2-\u5b89\u88c5-kubevela-core",children:[]},{value:"3. \u5b89\u88c5 VelaUX",id:"3-\u5b89\u88c5-velaux",children:[]},{value:"4. \u5378\u8f7d",id:"4-\u5378\u8f7d",children:[]},{value:"\u4e0b\u4e00\u6b65",id:"\u4e0b\u4e00\u6b65",children:[]}],p={toc:c};function k(e){var t=e.components,n=(0,l.Z)(e,["components"]);return(0,r.kt)("wrapper",(0,a.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"\u5982\u679c\u662f\u8981\u5347\u7ea7\u73b0\u6709\u7684 KubeVela\uff0c\u8bf7\u76f4\u63a5\u9605\u8bfb ",(0,r.kt)("a",{parentName:"p",href:"./platform-engineers/advanced-install#%E5%8D%87%E7%BA%A7"},"\u5347\u7ea7\u6307\u5357"),".")),(0,r.kt)("h2",{id:"1-\u51c6\u5907\u63a7\u5236\u5e73\u9762\u7684-kubernetes-\u96c6\u7fa4"},"1. \u51c6\u5907\u63a7\u5236\u5e73\u9762\u7684 Kubernetes \u96c6\u7fa4"),(0,r.kt)("p",null,"\u786e\u4fdd:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Kubernetes \u96c6\u7fa4\u7248\u672c >= v1.18.0")),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"\u82e5\u4f60\u5df2\u662f Kubernetes \u7528\u6237\uff0c\u5177\u6709\u6ee1\u8db3\u4e0a\u8ff0\u6761\u4ef6\u7684\u96c6\u7fa4\uff0c\u8bf7\u76f4\u63a5\u8fdb\u5165 ",(0,r.kt)("a",{parentName:"p",href:"#2-%E5%AE%89%E8%A3%85-kubevela-core"},"\u4e0b\u4e00\u8282")," \u3002\u82e5\u4f60\u6ca1\u6709\u6ee1\u8db3\u8981\u6c42\u7684\u96c6\u7fa4\uff0c\u53ef\u901a\u8fc7\u4e0b\u8ff0\u65b9\u5f0f\u5b89\u88c5\u4fbf\u6377\u5b89\u88c5\u3002\u751f\u4ea7\u573a\u666f\u63a8\u8350\u4f7f\u7528\u4e91\u670d\u52a1\u6216 RKE \u5b89\u88c5\u65b9\u5f0f\u3002")),(0,r.kt)("p",null,"KubeVela \u63a7\u5236\u5e73\u9762\u4f9d\u8d56 Kubernetes\u3002\u5b83\u53ef\u4ee5\u653e\u7f6e\u5728\u4efb\u4f55\u6258\u7ba1 Kubernetes \u4f5c\u4e3a\u5e95\u5ea7\u7684\u4ea7\u54c1\u6216\u81ea\u5efa Kubernetes \u96c6\u7fa4\u4e2d\u3002"),(0,r.kt)("p",null,"\u4f60\u53ef\u4ee5\u4f7f\u7528 kind \u6216 minikube \u5728\u672c\u5730\u90e8\u7f72\u3001\u6d4b\u8bd5 KubeVela\u3002"),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"\u5f53\u642d\u5efa\u751f\u4ea7\u73af\u5883\u65f6\uff0c\u8bf7\u5148\u51c6\u5907\u751f\u4ea7\u7528 Kubernetes \u96c6\u7fa4\u6216\u4f7f\u7528\u4e91\u5382\u5546\u63d0\u4f9b\u7684 Kubernetes \u670d\u52a1\u3002")),(0,r.kt)(o.Z,{className:"unique-tabs",defaultValue:"kind",values:[{label:"Kind",value:"kind"},{label:"Minikube",value:"minikube"},{label:"RKE",value:"rke"},{label:"\u4e91\u670d\u52a1",value:"cloudprovider"}],mdxType:"Tabs"},(0,r.kt)(s.Z,{value:"minikube",mdxType:"TabItem"},(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"\u4ec5\u9002\u7528\u4e8e\u6d4b\u8bd5/\u8bd5\u7528\u573a\u666f\u3002")),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"https://minikube.sigs.k8s.io/docs/start/"},"\u5b89\u88c5 minikube")," \u540e\uff0c\u521b\u5efa\u4e00\u4e2a\u96c6\u7fa4:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell",metastring:"script",script:!0},"minikube start\n")),(0,r.kt)("details",null," ",(0,r.kt)("summary",null," \u5b89\u88c5 ingress \u542f\u7528\u8def\u7531\u8bbf\u95ee\u529f\u80fd "),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell",metastring:"script",script:!0},"minikube addons enable ingress\n")))),(0,r.kt)(s.Z,{value:"rke",mdxType:"TabItem"},(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"\u5f00\u59cb\u524d\u8bf7\u51c6\u5907 1-N \u53f0\u670d\u52a1\u5668\u6216\u865a\u62df\u673a\uff0c\u8be5\u5b89\u88c5\u6a21\u5f0f\u53ef\u7528\u4e8e\u751f\u4ea7\u73af\u5883\u3002")),(0,r.kt)("b",null,"\uff081\uff09\u5b89\u88c5 Docker (\u53ef\u9009)"),(0,r.kt)("p",null,"RKE \u7684\u5b89\u88c5\u4f9d\u8d56\u4e8e Docker, \u8bf7\u5728\u6240\u6709\u670d\u52a1\u5668\u6216\u865a\u62df\u673a\u5b89\u88c5 Docker \u670d\u52a1\uff0c\u5982\u672a\u5b89\u88c5\uff0c\u8bf7\u53c2\u8003 ",(0,r.kt)("a",{parentName:"p",href:"https://docs.docker.com/engine/install/"},"Docker \u5b89\u88c5\u6307\u5357"),"."),(0,r.kt)("b",null,"\uff082\uff09\u5b89\u88c5 RKE \u547d\u4ee4\u884c"),(0,r.kt)("p",null,"\u4e0b\u8f7d RKE \u4e8c\u8fdb\u5236\u6587\u4ef6\uff0c ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/rancher/rke/releases"},"\u524d\u5f80 RKE Release \u9875\u9762"),"."),(0,r.kt)("p",null,"\u5982\u679c\u4f60\u7684\u7f51\u7edc\u53d7\u9650\u65e0\u6cd5\u4e0b\u8f7d\uff08\u7279\u522b\u662f\u4e2d\u56fd\u7528\u6237\uff09\uff0c\u53ef\u76f4\u63a5\u4f7f\u7528\u4e0b\u8ff0\u65b9\u5f0f\u5b89\u88c5:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"wget https://static.kubevela.net/binary/rke/rke_linux-amd64 -O /usr/bin/rke\nchmod +x /usr/bin/rke\n")),(0,r.kt)("b",null,"\uff083\uff09\u5b89\u88c5 RKE \u96c6\u7fa4"),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"\u8bf7\u5207\u6362\u5230\u975e root \u4e14\u6709\u6743\u9650\u64cd\u4f5c docker \u7684\u7528\u6237\u4e0b\u6267\u884c\u4ee5\u4e0b\u547d\u4ee4\u5b89\u88c5 RKE \u96c6\u7fa4\uff0c\u4f8b\u5982: docker")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell",metastring:"script",script:!0},"  mkdir ~/rkeinit && cd ~/rkeinit\n  # \u5f15\u5bfc\u5f0f\u914d\u7f6e\uff0c\u53ef\u53c2\u8003 [RKE\u96c6\u7fa4\u914d\u7f6e\u8bf4\u660e\u6587\u6863](https://rancher.com/docs/rke/latest/en/example-yamls/)\u3002\n  rke config\n  # \u786e\u8ba4\u914d\u7f6e\u5b8c\u6210\u540e\u5373\u53ef\u5b89\u88c5\u96c6\u7fa4\uff0c\u5982\u6709\u5f02\u5e38\u8bf7\u53c2\u8003 RKE \u76f8\u5173\u6587\u6863\u3002\n  rke up\n  # \u5b89\u88c5 Kubectl \u547d\u4ee4\u884c\u5de5\u5177\n  mkdir ~/.kube\n  cp kube_config_cluster.yml ~/.kube/config\n  docker cp kubelet:/usr/local/bin/kubectl /usr/local/bin/kubectl\n"))),(0,r.kt)(s.Z,{value:"kind",mdxType:"TabItem"},(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"\u4ec5\u9002\u7528\u4e8e\u6d4b\u8bd5/\u8bd5\u7528\u573a\u666f\u3002")),(0,r.kt)("p",null,"\u5b89\u88c5 ",(0,r.kt)("a",{parentName:"p",href:"https://kind.sigs.k8s.io/docs/user/quick-start/#installation"},"Kind \u547d\u4ee4\u884c\u5de5\u5177"),"\u540e\uff0c\u521b\u5efa\u96c6\u7fa4:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell",metastring:"script",script:!0},'cat <<EOF | kind create cluster --image=kindest/node:v1.18.15 --config=-\nkind: Cluster\napiVersion: kind.x-k8s.io/v1alpha4\nnodes:\n- role: control-plane\n  kubeadmConfigPatches:\n  - |\n    kind: InitConfiguration\n    nodeRegistration:\n      kubeletExtraArgs:\n        node-labels: "ingress-ready=true"\n  extraPortMappings:\n  - containerPort: 80\n    hostPort: 80\n    protocol: TCP\n  - containerPort: 443\n    hostPort: 443\n    protocol: TCP\nEOF\n')),(0,r.kt)("details",null," ",(0,r.kt)("summary",null," \u5b89\u88c5 ingress \u542f\u7528\u8def\u7531\u8bbf\u95ee\u529f\u80fd "),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell",metastring:"script",script:!0},"kubectl apply -f https://raw.githubusercontent.com/kubernetes/ingress-nginx/master/deploy/static/provider/kind/deploy.yaml\n")))),(0,r.kt)(s.Z,{value:"cloudprovider",mdxType:"TabItem"},(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"\u53ef\u7528\u4e8e\u751f\u4ea7\u73af\u5883\u3002")),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"\u963f\u91cc\u4e91 ",(0,r.kt)("a",{parentName:"li",href:"https://www.aliyun.com/product/kubernetes"},"ACK \u670d\u52a1")),(0,r.kt)("li",{parentName:"ul"},"AWS ",(0,r.kt)("a",{parentName:"li",href:"https://aws.amazon.com/cn/eks"},"EKS \u670d\u52a1")),(0,r.kt)("li",{parentName:"ul"},"Azure ",(0,r.kt)("a",{parentName:"li",href:"https://azure.microsoft.com/en-us/services/kubernetes-service"},"AKS \u670d\u52a1")),(0,r.kt)("li",{parentName:"ul"},"Google ",(0,r.kt)("a",{parentName:"li",href:"https://cloud.google.com/kubernetes-engine"},"GKE \u670d\u52a1"))),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"\u6ce8\u610f: \u8bf7\u786e\u4fdd\u4e91\u5382\u5546\u7684\u96c6\u7fa4",(0,r.kt)("a",{parentName:"p",href:"https://kubernetes.github.io/ingress-nginx/deploy/"},"\u5df2\u5b89\u88c5\u6216\u542f\u7528 ingress-nginx")," \u4ee5\u4fdd\u8bc1\u8def\u7531\u8bbf\u95ee\u529f\u80fd\u53ef\u6b63\u5e38\u4f7f\u7528\u3002")))),(0,r.kt)("h2",{id:"2-\u5b89\u88c5-kubevela-core"},"2. \u5b89\u88c5 KubeVela Core"),(0,r.kt)("p",null,"\u5728\u5b89\u88c5\u4e4b\u524d\uff0c\u8bf7\u786e\u4fdd Helm \u5de5\u5177\u662f\u53ef\u7528\u7684\uff0c\u5982\u672a\u5b89\u88c5\uff0c\u8bf7\u53c2\u8003 ",(0,r.kt)("a",{parentName:"p",href:"https://helm.sh/docs/intro/install/"},"Helm \u5b89\u88c5\u8bf4\u660e")," \u5b89\u88c5\u5b8c\u6210\u3002"),(0,r.kt)("details",null," ",(0,r.kt)("summary",null," \u5982\u679c\u4f60\u7684\u7f51\u7edc\u60c5\u51b5\u5f88\u96be\u4e0b\u8f7d\u6210\u529f Helm\uff0c\u8bf7\u70b9\u51fb\u4f7f\u7528\u56fd\u5185\u955c\u50cf\u6765\u5b89\u88c5\uff08\u4ec5\u9002\u7528\u4e8e linux-amd64\uff09 "),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell",metastring:"script",script:!0},"wget https://static.kubevela.net/binary/helm/helm-v3.7.0-linux-amd64 -O /usr/bin/helm\nchmod +x /usr/bin/helm\n"))),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"\u6dfb\u52a0\u5e76\u66f4\u65b0 KubeVela Helm chart \u4ed3\u5e93")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell",metastring:"script",script:!0},"helm repo add kubevela https://charts.kubevela.net/core\nhelm repo update\n")),(0,r.kt)("ol",{start:2},(0,r.kt)("li",{parentName:"ol"},"\u5b89\u88c5 KubeVela Core")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell",metastring:"script",script:!0},"helm install --create-namespace -n vela-system kubevela kubevela/vela-core --version 1.2.0 --wait\n")),(0,r.kt)("ol",{start:3},(0,r.kt)("li",{parentName:"ol"},"\u9a8c\u8bc1 KubeVela Core \u5b89\u88c5\u662f\u5426\u6210\u529f")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell",metastring:"script",script:!0},"helm test kubevela -n vela-system\n")),(0,r.kt)("details",null," ",(0,r.kt)("summary",null,"\u70b9\u51fb\u67e5\u770b\u671f\u671b\u8f93\u51fa "),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell"},"Pod kubevela-application-test pending\nPod kubevela-application-test pending\nPod kubevela-application-test running\nPod kubevela-application-test succeeded\nNAME: kubevela\nLAST DEPLOYED: Tue Apr 13 18:42:20 2021\nNAMESPACE: vela-system\nSTATUS: deployed\nREVISION: 1\nTEST SUITE:     kubevela-application-test\nLast Started:   Fri Apr 16 20:49:10 2021\nLast Completed: Fri Apr 16 20:50:04 2021\nPhase:          Succeeded\nTEST SUITE:     first-vela-app\nLast Started:   Fri Apr 16 20:49:10 2021\nLast Completed: Fri Apr 16 20:49:10 2021\nPhase:          Succeeded\nNOTES:\nWelcome to use the KubeVela! Enjoy your shipping application journey!\n"))),(0,r.kt)("h2",{id:"3-\u5b89\u88c5-velaux"},"3. \u5b89\u88c5 VelaUX"),(0,r.kt)("p",null,"VelaUX \u662f\u4e00\u4e2a\u53ef\u89c6\u5316\u64cd\u4f5c\u754c\u9762\uff0c\u5305\u62ec UI+API \u670d\u52a1\uff0c\u5b83\u9002\u7528\u4e8e\u5927\u591a\u6570\u5382\u5546\u5f00\u7bb1\u5373\u7528\u7684\u83b7\u53d6\u5e94\u7528\u4ea4\u4ed8\u548c\u7ba1\u7406\u80fd\u529b\u3002"),(0,r.kt)("h4",{id:"1-\u5b89\u88c5-kubevela-cli"},"1. \u5b89\u88c5 KubeVela CLI"),(0,r.kt)("p",null,"KubeVela CLI \u63d0\u4f9b\u4e86\u4fbf\u6377\u7684\u5e94\u7528\u7ec8\u7aef\u7ba1\u7406\u80fd\u529b\uff0c\u6211\u4eec\u901a\u8fc7 CLI \u6765\u5b89\u88c5 VelaUX \u6269\u5c55\u3002"),(0,r.kt)(o.Z,{className:"unique-tabs",defaultValue:"script",values:[{label:"Script",value:"script"},{label:"Homebrew",value:"homebrew"},{label:"Download directly from releases",value:"download"}],mdxType:"Tabs"},(0,r.kt)(s.Z,{value:"script",mdxType:"TabItem"},(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"}," MacOS/Linux ")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell",metastring:"script",script:!0},"curl -fsSl https://kubevela.io/script/install.sh | bash -s 1.2.0\n")),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Windows")),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"\u4ec5\u652f\u6301\u5b89\u88c5\u6b63\u5f0f\u53d1\u884c\u7248\u672c\u3002")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell",metastring:"script",script:!0},'powershell -Command "iwr -useb https://kubevela.io/script/install.ps1 | iex"\n'))),(0,r.kt)(s.Z,{value:"homebrew",mdxType:"TabItem"},(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"macOS/Linux")),(0,r.kt)("p",null,"\u5148\u66f4\u65b0\u4e0b\u4f60\u7684 brew\uff0c\u8bf7\u6ce8\u610f brew \u9014\u5f84\u4ec5\u652f\u6301\u5b89\u88c5\u6b63\u5f0f\u53d1\u884c\u7248\u672c\u3002"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell",metastring:"script",script:!0},"brew update\n")),(0,r.kt)("p",null,"\u7d27\u63a5\u7740\u5b89\u88c5 KubeVela CLI"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell",metastring:"script",script:!0},"brew install kubevela\n"))),(0,r.kt)(s.Z,{value:"download",mdxType:"TabItem"},(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"\u901a\u8fc7",(0,r.kt)("a",{parentName:"li",href:"https://github.com/oam-dev/kubevela/releases"},"\u53d1\u5e03\u65e5\u5fd7"),"\u4e0b\u8f7d\u6700\u65b0\u7684 ",(0,r.kt)("inlineCode",{parentName:"li"},"vela")," \u4e8c\u8fdb\u5236\u6587\u4ef6\u3002"),(0,r.kt)("li",{parentName:"ul"},"\u89e3\u538b\u4e8c\u8fdb\u5236\u6587\u4ef6\uff0c\u5e76\u4e14\u5728 ",(0,r.kt)("inlineCode",{parentName:"li"},"$PATH")," \u4e2d\u914d\u597d\u73af\u5883\u53d8\u91cf\uff0c\u5c31\u641e\u5b9a\u5566\u3002")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell",metastring:"script",script:!0},"sudo mv ./vela /usr/local/bin/vela\n")),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},(0,r.kt)("a",{parentName:"p",href:"https://github.com/oam-dev/kubevela/issues/625"},"\u5b89\u88c5\u63d0\u793a"),":\n\u5982\u679c\u4f60\u4f7f\u7528\u7684\u662f Mac \u7cfb\u7edf\uff0c\u5b83\u4f1a\u5f39\u51fa \u201cvela\u201d \u65e0\u6cd5\u6253\u5f00\u7684\u8b66\u544a\uff0c\u56e0\u4e3a\u6765\u81ea\u5f00\u53d1\u8005\u7684\u5305\u65e0\u6cd5\u9a8c\u8bc1\u3002"),(0,r.kt)("p",{parentName:"blockquote"},"MacOS \u5bf9\u80fd\u591f\u5728\u7cfb\u7edf\u4e2d\u8fd0\u884c\u7684\u8f6f\u4ef6\uff0c\u91c7\u53d6\u4e86\u66f4\u52a0\u4e25\u683c\u7684\u9650\u5236\u3002\u4f60\u6682\u65f6\u53ef\u4ee5\u901a\u8fc7\u6253\u5f00 'System Preference' -> 'Security & Privacy' -> General \u5e76\u70b9\u51fb 'Allow Anyway' \u6765\u89e3\u51b3\u8fd9\u4e2a\u95ee\u9898\u3002")))),(0,r.kt)("h4",{id:"2-\u901a\u8fc7-addon-\u5b89\u88c5-velaux"},"2. \u901a\u8fc7 Addon \u5b89\u88c5 VelaUX"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell",metastring:"script",script:!0},'vela addon enable velaux serviceType=NodePort\n\n# \u83b7\u53d6\u6620\u5c04\u7684\u7aef\u53e3\uff0c\u901a\u8fc7\u8be5\u7aef\u53e3\u8bbf\u95ee VelaUX\nkubectl get service velaux -n vela-system -o jsonpath="{.spec.ports[0].nodePort}"\n')),(0,r.kt)("p",null,"\u56fd\u5185\u73af\u5883\u53ef\u4f7f\u7528\u4ee5\u4e0b\u5b89\u88c5\u65b9\u5f0f:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"vela addon enable velaux serviceType=NodePort repo=acr.kubevela.net\n")),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"serviceType")," \u914d\u7f6e velaux \u670d\u52a1\u7684\u8bbf\u95ee\u65b9\u5f0f\uff0c\u5982\u679c\u4f60\u4f7f\u7528\u4e91\u670d\u52a1\u96c6\u7fa4\uff0c\u8bf7\u914d\u7f6e\u4e3a ",(0,r.kt)("inlineCode",{parentName:"p"},"serviceType=LoadBalancer"),"\uff0c\u542f\u7528\u5b8c\u6210\u540e\u901a\u8fc7\u4ee5\u4e0b\u65b9\u5f0f\u83b7\u53d6\u8bbf\u95ee\u5730\u5740:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell",metastring:"script",script:!0},'vela addon enable velaux serviceType=LoadBalancer repo=acr.kubevela.net\n\nkubectl get service velaux -n vela-system -o jsonpath="{.status.loadBalancer.ingress[0].ip}"\n')),(0,r.kt)("p",null,"\u5982\u679c\u4f60\u7684\u96c6\u7fa4\u4e2d\u5df2\u7ecf\u5b89\u88c5\u4e86 Nginx Ingress Controller\uff0c\u800c\u4e14\u4f60\u5177\u6709\u53ef\u7528\u7684\u57df\u540d\uff0c\u4f60\u53ef\u4ee5\u8fd9\u6837\u90e8\u7f72 VelaUX(\u8bf7\u4f7f\u7528\u771f\u5b9e\u57df\u540d\u66ff\u6362 example.doamin.com):"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell",metastring:"script",script:!0},"vela addon enable velaux repo=acr.kubevela.net domain=example.doamin.com\n")),(0,r.kt)("p",null,"\u5bf9\u4e8e\u751f\u4ea7\u73af\u5883\uff0c\u8bf7\u8003\u8651\u542f\u7528 MongoDB \u4f5c\u4e3a VelaUX \u7684\u6570\u636e\u5b58\u50a8\uff0c\u4f7f\u7528 MongoDB \u4f5c\u4e3a\u6570\u636e\u5e93\u7684\u914d\u7f6e\u65b9\u5f0f\u53c2\u8003\u5982\u4e0b\uff1a"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell",metastring:"script",script:!0},"vela addon enable velaux dbType=mongodb database=kubevela dbURL=mongodb://<Mongo-Host>:<Mongo-Port>\n")),(0,r.kt)("h2",{id:"4-\u5378\u8f7d"},"4. \u5378\u8f7d"),(0,r.kt)("p",null,"\u5982\u679c\u4f60\u8bd5\u7528\u5b8c\u6210\u540e\u9700\u8981\u5378\u8f7d KubeVela\uff0c\u53ef\u53c2\u8003\u5982\u4e0b\u64cd\u4f5c\u8fdb\u884c\uff1a"),(0,r.kt)("p",null,"\u5728\u5378\u8f7d\u4e4b\u524d\uff0c\u8bf7\u5148\u5c06\u6240\u6709\u5e94\u7528\u5220\u9664\uff0c\u6240\u6709 addon \u7981\u7528\u3002"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"\u5378\u8f7d VelaUX")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"vela addon disable velaux\nkubectl delete configmap --all -n kubevela\n")),(0,r.kt)("ol",{start:2},(0,r.kt)("li",{parentName:"ol"},"\u5378\u8f7d KubeVela Core")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"helm uninstall -n vela-system kubevela\n")),(0,r.kt)("ol",{start:3},(0,r.kt)("li",{parentName:"ol"},"\u5378\u8f7d KubeVela \u5b89\u88c5\u7684 CRD")),(0,r.kt)("p",null,"\u5220\u9664\u524d\uff0c\u9700\u8981\u786e\u4fdd\u6240\u6709\u5bf9\u5e94\u7684 CR \u8d44\u6e90\u5df2\u5220\u9664\u3002"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"kubectl get crd |grep oam | awk '{print $1}' | xargs kubectl delete crd\n")),(0,r.kt)("h2",{id:"\u4e0b\u4e00\u6b65"},"\u4e0b\u4e00\u6b65"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"\u5b89\u88c5\u5b8c\u6bd5 KubeVela\uff0c\u5f00\u59cb ",(0,r.kt)("a",{parentName:"li",href:"./quick-start"},"\u4ea4\u4ed8\u7b2c\u4e00\u4e2a\u5e94\u7528"),"\u3002")))}k.isMDXComponent=!0},86010:function(e,t,n){"use strict";function a(e){var t,n,l="";if("string"==typeof e||"number"==typeof e)l+=e;else if("object"==typeof e)if(Array.isArray(e))for(t=0;t<e.length;t++)e[t]&&(n=a(e[t]))&&(l&&(l+=" "),l+=n);else for(t in e)e[t]&&(l&&(l+=" "),l+=t);return l}function l(){for(var e,t,n=0,l="";n<arguments.length;)(e=arguments[n++])&&(t=a(e))&&(l&&(l+=" "),l+=t);return l}n.d(t,{Z:function(){return l}})}}]);