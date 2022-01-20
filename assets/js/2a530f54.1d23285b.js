(self.webpackChunkkubevela_io=self.webpackChunkkubevela_io||[]).push([[6160],{3905:function(e,t,r){"use strict";r.d(t,{Zo:function(){return l},kt:function(){return d}});var n=r(67294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function o(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},i=Object.keys(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var g=n.createContext({}),c=function(e){var t=n.useContext(g),r=t;return e&&(r="function"==typeof e?e(t):o(o({},t),e)),r},l=function(e){var t=c(e.components);return n.createElement(g.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},u=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,i=e.originalType,g=e.parentName,l=s(e,["components","mdxType","originalType","parentName"]),u=c(r),d=a,f=u["".concat(g,".").concat(d)]||u[d]||p[d]||i;return r?n.createElement(f,o(o({ref:t},l),{},{components:r})):n.createElement(f,o({ref:t},l))}));function d(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=r.length,o=new Array(i);o[0]=u;var s={};for(var g in t)hasOwnProperty.call(t,g)&&(s[g]=t[g]);s.originalType=e,s.mdxType="string"==typeof e?e:a,o[1]=s;for(var c=2;c<i;c++)o[c]=r[c];return n.createElement.apply(null,o)}return n.createElement.apply(null,r)}u.displayName="MDXCreateElement"},99034:function(e,t,r){"use strict";r.r(t),r.d(t,{frontMatter:function(){return o},metadata:function(){return s},toc:function(){return g},default:function(){return l}});var n=r(22122),a=r(19756),i=(r(67294),r(3905)),o={title:"Integrate with CI system by Triggers",description:"Integrate with CI system by Triggers"},s={unversionedId:"how-to/dashboard/trigger/overview",id:"how-to/dashboard/trigger/overview",isDocsHomePage:!1,title:"Integrate with CI system by Triggers",description:"Integrate with CI system by Triggers",source:"@site/docs/how-to/dashboard/trigger/overview.md",sourceDirName:"how-to/dashboard/trigger",slug:"/how-to/dashboard/trigger/overview",permalink:"/docs/next/how-to/dashboard/trigger/overview",editUrl:"https://github.com/oam-dev/kubevela.io/edit/main/docs/how-to/dashboard/trigger/overview.md",version:"current",lastUpdatedBy:"Tianxin Dong",lastUpdatedAt:1642672418,formattedLastUpdatedAt:"1/20/2022",frontMatter:{title:"Integrate with CI system by Triggers",description:"Integrate with CI system by Triggers"}},g=[{value:"Custom Trigger",id:"custom-trigger",children:[]},{value:"Harbor Trigger",id:"harbor-trigger",children:[]},{value:"ACR Trigger",id:"acr-trigger",children:[]}],c={toc:g};function l(e){var t=e.components,o=(0,a.Z)(e,["components"]);return(0,i.kt)("wrapper",(0,n.Z)({},c,o,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"After you have created an application, a default trigger is automatically created. You can also delete or create a new trigger."),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"default-trigger",src:r(97235).Z})),(0,i.kt)("p",null,"KubeVela triggers can integrate with any CI tool like Gitlab CI, Jenkins Pipeline or image registry like Harbor or ACR."),(0,i.kt)("p",null,"We now support three types of triggers: Custom, ACR, and Harbor."),(0,i.kt)("h2",{id:"custom-trigger"},"Custom Trigger"),(0,i.kt)("p",null,"Custom triggers will provide a webhook URL, which you can use to integrate with your CI tool using the specified request body."),(0,i.kt)("p",null,"The default trigger is a custom trigger, click ",(0,i.kt)("inlineCode",{parentName:"p"},"Manual Trigger")," to get more info of this trigger:"),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"manual-trigger",src:r(91503).Z})),(0,i.kt)("p",null,"Webhook URL is the address of this trigger, you can see request body in ",(0,i.kt)("inlineCode",{parentName:"p"},"Curl Command")," example:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-json"},'  {\n    // required, the upgrade of this deployment\n    "upgrade": {\n      // key is the name of application\n      "<application-name>": {\n        // the fields that need to be patched\n        "image": "<image-name>"\n      }\n    },\n    // optional, the code info of this deployment\n    "codeInfo": {\n      "commit": "<commit-id>",\n      "branch": "<branch>",\n      "user": "<user>",\n    }\n  }\n')),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"upgrade")," is the key of the object that need to be patched, ",(0,i.kt)("inlineCode",{parentName:"p"},"<application-name>")," is the name of application. ",(0,i.kt)("inlineCode",{parentName:"p"},"image")," is the field that need to be patched. You can also add more fields in ",(0,i.kt)("inlineCode",{parentName:"p"},"<application-name>"),"."),(0,i.kt)("p",null,"In ",(0,i.kt)("inlineCode",{parentName:"p"},"codeInfo"),", you can add some code infos of this deployment like commit id, branch or user."),(0,i.kt)("p",null,"Below is an example of using Custom Trigger in Gitlab CI, we use env in this example:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-shell"},'webhook-request:\n  stage: request\n  before_script:\n    - apk add --update curl && rm -rf /var/cache/apk/*\n  script:\n    - |\n      curl -X POST -H "Content-Type: application/json" -d \'{"upgrade":{"\'"$ APP_NAME"\'":{"image":"\'"$BUILD_IMAGE"\'"}},"codeInfo":{"user":"\'"$CI_COMMIT_AUTHOR"\'","commit":"\'"$CI_COMMIT_SHA"\'","branch":"\'"$CI_COMMIT_BRANCH"\'"}}\' $WEBHOOK_URL\n')),(0,i.kt)("p",null,"After CI have executed this step, we can see that application is deployed successfully in VelaUX. We can also see some relative code infos of this deployment."),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"gitlab-trigger",src:r(71488).Z})),(0,i.kt)("h2",{id:"harbor-trigger"},"Harbor Trigger"),(0,i.kt)("p",null,"Harbor Trigger can be integrated with Harbor image registry."),(0,i.kt)("p",null,"We can start with creating a new harbor trigger. The Payload Type is Harbor, and the Execution Workflow is the workflow you want to deploy in the trigger."),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"alt",src:r(1100).Z})),(0,i.kt)("p",null,"After creating the trigger, we can setup this trigger in Harbor:"),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"alt",src:r(64926).Z})),(0,i.kt)("p",null,"After configuring the trigger, we can see the new deploy revisions when a new image is pushed to the registry."),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"alt",src:r(23883).Z})),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"alt",src:r(82250).Z})),(0,i.kt)("h2",{id:"acr-trigger"},"ACR Trigger"),(0,i.kt)("p",null,"ACR Trigger can be integrated with ACR image registry."),(0,i.kt)("p",null,"We can start with creating a new ACR trigger. The Payload Type is ACR, and the Execution Workflow is the workflow you want to deploy in the trigger."),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"alt",src:r(97805).Z})),(0,i.kt)("p",null,"After creating the trigger, we can setup this trigger in ACR:"),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"alt",src:r(41078).Z})),(0,i.kt)("p",null,"After configuring the trigger, we can see the new deploy revisions when a new image is pushed to the registry."),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"alt",src:r(52968).Z})),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"alt",src:r(1483).Z})))}l.isMDXComponent=!0},52968:function(e,t,r){"use strict";t.Z=r.p+"assets/images/acr-trigger-acrrecord-0ce59eca57f0502eeeb400dc2fa8be68.png"},97805:function(e,t,r){"use strict";t.Z=r.p+"assets/images/acr-trigger-newtrigger-e90baae3b3d802bdd7d5686a34c671cf.png"},1483:function(e,t,r){"use strict";t.Z=r.p+"assets/images/acr-trigger-revisions-f0f693758adaee5fbe9f0d54e2387a9f.png"},41078:function(e,t,r){"use strict";t.Z=r.p+"assets/images/acr-trigger-ff30870e9bb413a28cf96b8604853988.png"},97235:function(e,t,r){"use strict";t.Z=r.p+"assets/images/default-trigger-2d679f182f58a72090474f3b0d343dd7.png"},71488:function(e,t,r){"use strict";t.Z=r.p+"assets/images/gitlab-trigger-89a8a953cfbe5dcf1ed118ca20f3c71e.png"},23883:function(e,t,r){"use strict";t.Z=r.p+"assets/images/harbor-trigger-harborrecord-f644ee54d5904f4d0cca7c9b54811721.png"},1100:function(e,t,r){"use strict";t.Z=r.p+"assets/images/harbor-trigger-newtrigger-1294a428077c9ce0e981d2ab1e27f4ad.png"},82250:function(e,t,r){"use strict";t.Z=r.p+"assets/images/harbor-trigger-revisions-0fc3f437d6b77f7a006052ce60d9ac0a.png"},64926:function(e,t,r){"use strict";t.Z=r.p+"assets/images/harbor-trigger-6bba927c7425b4524c0d9f2c7a228a50.png"},91503:function(e,t,r){"use strict";t.Z=r.p+"assets/images/manual-trigger-8361fea9230d5f56d649dca15a33f1db.png"}}]);