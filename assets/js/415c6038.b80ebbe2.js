(self.webpackChunkgraphql_kotlin_docs=self.webpackChunkgraphql_kotlin_docs||[]).push([[6207],{3905:(e,r,t)=>{"use strict";t.d(r,{Zo:()=>p,kt:()=>m});var n=t(7294);function o(e,r,t){return r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}function a(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);r&&(n=n.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,n)}return t}function i(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?a(Object(t),!0).forEach((function(r){o(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):a(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}function l(e,r){if(null==e)return{};var t,n,o=function(e,r){if(null==e)return{};var t,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)t=a[n],r.indexOf(t)>=0||(o[t]=e[t]);return o}(e,r);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)t=a[n],r.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var s=n.createContext({}),c=function(e){var r=n.useContext(s),t=r;return e&&(t="function"==typeof e?e(r):i(i({},r),e)),t},p=function(e){var r=c(e.components);return n.createElement(s.Provider,{value:r},e.children)},d={inlineCode:"code",wrapper:function(e){var r=e.children;return n.createElement(n.Fragment,{},r)}},u=n.forwardRef((function(e,r){var t=e.components,o=e.mdxType,a=e.originalType,s=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),u=c(t),m=o,v=u["".concat(s,".").concat(m)]||u[m]||d[m]||a;return t?n.createElement(v,i(i({ref:r},p),{},{components:t})):n.createElement(v,i({ref:r},p))}));function m(e,r){var t=arguments,o=r&&r.mdxType;if("string"==typeof e||o){var a=t.length,i=new Array(a);i[0]=u;var l={};for(var s in r)hasOwnProperty.call(r,s)&&(l[s]=r[s]);l.originalType=e,l.mdxType="string"==typeof e?e:o,i[1]=l;for(var c=2;c<a;c++)i[c]=t[c];return n.createElement.apply(null,i)}return n.createElement.apply(null,t)}u.displayName="MDXCreateElement"},8215:(e,r,t)=>{"use strict";t.d(r,{Z:()=>o});var n=t(7294);const o=function(e){var r=e.children,t=e.hidden,o=e.className;return n.createElement("div",{role:"tabpanel",hidden:t,className:o},r)}},1395:(e,r,t)=>{"use strict";t.d(r,{Z:()=>p});var n=t(7294),o=t(944),a=t(6010);const i="tabItem_1uMI",l="tabItemActive_2DSg";var s=37,c=39;const p=function(e){var r=e.lazy,t=e.block,p=e.defaultValue,d=e.values,u=e.groupId,m=e.className,v=(0,o.Z)(),h=v.tabGroupChoices,f=v.setTabGroupChoices,k=(0,n.useState)(p),g=k[0],y=k[1],b=n.Children.toArray(e.children),C=[];if(null!=u){var N=h[u];null!=N&&N!==g&&d.some((function(e){return e.value===N}))&&y(N)}var w=function(e){var r=e.currentTarget,t=C.indexOf(r),n=d[t].value;y(n),null!=u&&(f(u,n),setTimeout((function(){var e,t,n,o,a,i,s,c;(e=r.getBoundingClientRect(),t=e.top,n=e.left,o=e.bottom,a=e.right,i=window,s=i.innerHeight,c=i.innerWidth,t>=0&&a<=c&&o<=s&&n>=0)||(r.scrollIntoView({block:"center",behavior:"smooth"}),r.classList.add(l),setTimeout((function(){return r.classList.remove(l)}),2e3))}),150))},P=function(e){var r,t;switch(e.keyCode){case c:var n=C.indexOf(e.target)+1;t=C[n]||C[0];break;case s:var o=C.indexOf(e.target)-1;t=C[o]||C[C.length-1]}null==(r=t)||r.focus()};return n.createElement("div",{className:"tabs-container"},n.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,a.Z)("tabs",{"tabs--block":t},m)},d.map((function(e){var r=e.value,t=e.label;return n.createElement("li",{role:"tab",tabIndex:g===r?0:-1,"aria-selected":g===r,className:(0,a.Z)("tabs__item",i,{"tabs__item--active":g===r}),key:r,ref:function(e){return C.push(e)},onKeyDown:P,onFocus:w,onClick:w},t)}))),r?(0,n.cloneElement)(b.filter((function(e){return e.props.value===g}))[0],{className:"margin-vert--md"}):n.createElement("div",{className:"margin-vert--md"},b.map((function(e,r){return(0,n.cloneElement)(e,{key:r,hidden:e.props.value!==g})}))))}},9443:(e,r,t)=>{"use strict";t.d(r,{Z:()=>n});const n=(0,t(7294).createContext)(void 0)},944:(e,r,t)=>{"use strict";t.d(r,{Z:()=>a});var n=t(7294),o=t(9443);const a=function(){var e=(0,n.useContext)(o.Z);if(null==e)throw new Error("`useUserPreferencesContext` is used outside of `Layout` Component.");return e}},6976:(e,r,t)=>{"use strict";t.r(r),t.d(r,{frontMatter:()=>s,metadata:()=>c,toc:()=>p,default:()=>u});var n=t(2122),o=t(9756),a=(t(7294),t(3905)),i=t(1395),l=t(8215),s={id:"hooks-provider",title:"Schema Generator Hooks Provider"},c={unversionedId:"plugins/hooks-provider",id:"plugins/hooks-provider",isDocsHomePage:!1,title:"Schema Generator Hooks Provider",description:"GraphQL Kotlin plugins can generate GraphQL schema as your build artifact directly from your source code. Plugins will scan",source:"@site/docs/plugins/hooks-provider.mdx",sourceDirName:"plugins",slug:"/plugins/hooks-provider",permalink:"/graphql-kotlin/docs/plugins/hooks-provider",editUrl:"https://github.com/ExpediaGroup/graphql-kotlin/tree/master/website/docs/plugins/hooks-provider.mdx",version:"current",lastUpdatedBy:"Milan Majer",lastUpdatedAt:1625578501,formattedLastUpdatedAt:"7/6/2021",frontMatter:{id:"hooks-provider",title:"Schema Generator Hooks Provider"},sidebar:"docs",previous:{title:"Maven Plugin Usage",permalink:"/graphql-kotlin/docs/plugins/maven-plugin-usage"}},p=[{value:"Creating Custom Hooks Service Provider",id:"creating-custom-hooks-service-provider",children:[{value:"Add dependency on graphql-kotlin-hooks-provider",id:"add-dependency-on-graphql-kotlin-hooks-provider",children:[]},{value:"Create new SchemaGeneratorHooksProvider implementation",id:"create-new-schemageneratorhooksprovider-implementation",children:[]},{value:"Create provider configuration file",id:"create-provider-configuration-file",children:[]}]},{value:"Limitations",id:"limitations",children:[]}],d={toc:p};function u(e){var r=e.components,t=(0,o.Z)(e,["components"]);return(0,a.kt)("wrapper",(0,n.Z)({},d,t,{components:r,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"GraphQL Kotlin plugins can generate GraphQL schema as your build artifact directly from your source code. Plugins will scan\nyour classpath for classes implementing ",(0,a.kt)("inlineCode",{parentName:"p"},"graphql-kotlin-server")," marker ",(0,a.kt)("inlineCode",{parentName:"p"},"Query"),", ",(0,a.kt)("inlineCode",{parentName:"p"},"Mutation")," and ",(0,a.kt)("inlineCode",{parentName:"p"},"Subscription")," interfaces\nand then generate corresponding GraphQL schema using ",(0,a.kt)("inlineCode",{parentName:"p"},"graphql-kotlin-schema-generator"),". By default, plugins will generate\nthe schema using ",(0,a.kt)("inlineCode",{parentName:"p"},"NoopSchemaGeneratorHooks"),". If your project uses custom hooks or needs to generate the federated GraphQL\nschema, you will need to provide an instance of ",(0,a.kt)("inlineCode",{parentName:"p"},"SchemaGeneratorHooksProvider")," that will be used to create an instance of\nyour custom hooks."),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"SchemaGeneratorHooksProvider")," is a service provider interface that exposes a single ",(0,a.kt)("inlineCode",{parentName:"p"},"hooks")," method to generate an instance\nof ",(0,a.kt)("inlineCode",{parentName:"p"},"SchemaGeneratorHooks")," that will be used to generate your schema. By utilizing Java ",(0,a.kt)("a",{parentName:"p",href:"https://docs.oracle.com/en/java/javase/11/docs/api/java.base/java/util/ServiceLoader.html"},"ServiceLoader"),"\nwe can dynamically load your custom provider from the classpath. Service provider can be provided as part of your project\nsources, included inside of one of your project dependencies or through explicitly provided artifact. Since we need to be\nable to deterministically choose a single hooks provider, generation of schema will fail if there are multiple providers\non the classpath."),(0,a.kt)("h2",{id:"creating-custom-hooks-service-provider"},"Creating Custom Hooks Service Provider"),(0,a.kt)("h3",{id:"add-dependency-on-graphql-kotlin-hooks-provider"},"Add dependency on graphql-kotlin-hooks-provider"),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"SchemaGeneratorHooksProvider")," interface is defined in ",(0,a.kt)("inlineCode",{parentName:"p"},"graphql-kotlin-hooks-provider")," module."),(0,a.kt)(i.Z,{defaultValue:"gradle",values:[{label:"Gradle",value:"gradle"},{label:"Maven",value:"maven"}],mdxType:"Tabs"},(0,a.kt)(l.Z,{value:"gradle",mdxType:"TabItem"},(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-kotlin"},'// build.gradle.kts\nimplementation("com.expediagroup", "graphql-kotlin-hooks-provider", latestVersion)\n'))),(0,a.kt)(l.Z,{value:"maven",mdxType:"TabItem"},(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-xml"},"<dependency>\n    <groupId>com.expediagroup</groupId>\n    <artifactId>graphql-kotlin-hooks-provider</artifactId>\n    <version>${latestVersion}</version>\n</dependency>\n")))),(0,a.kt)("h3",{id:"create-new-schemageneratorhooksprovider-implementation"},"Create new SchemaGeneratorHooksProvider implementation"),(0,a.kt)("p",null,"Service provider implementation has to implement ",(0,a.kt)("inlineCode",{parentName:"p"},"SchemaGeneratorHooksProvider")," interface that provides a way to instantiate\nschema generator hooks that will be used to generate the GraphQL schema."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-kotlin"},"package com.example\n\nclass MyCustomSchemaGeneratorHooksProvider : SchemaGeneratorHooksProvider {\n    override fun hooks(): SchemaGeneratorHooks = MyCustomHooks()\n}\n")),(0,a.kt)("h3",{id:"create-provider-configuration-file"},"Create provider configuration file"),(0,a.kt)("p",null,"Service loader provider configuration file should be created under JAR ",(0,a.kt)("inlineCode",{parentName:"p"},"/META-INF/services")," directory (e.g. ",(0,a.kt)("inlineCode",{parentName:"p"},"src/main/resources/META-INF/services"),"\nin default project structure). Name of the provider configuration should be fully qualified service provider interface name, i.e.\n",(0,a.kt)("inlineCode",{parentName:"p"},"com.expediagroup.graphql.plugin.schema.hooks.SchemaGeneratorHooksProvider")," and contain single entry - a fully qualified\nname of the service provider implementation."),(0,a.kt)("p",null,"Using the example service provider implementation from the above, our project structure should look like"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"my-project\n|- src\n  |- main\n    |- kotlin\n      |- com\n        |- example\n          |- MyCustomSchemaGeneratorHooksProvider.kt\n    |- resources\n      |- META-INF\n        |- services\n          |- com.expediagroup.graphql.plugin.schema.hooks.SchemaGeneratorHooksProvider\n\n")),(0,a.kt)("p",null,"Our service provider configuration file should have following content"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-text"},"com.example.MyCustomSchemaGeneratorHooksProvider\n")),(0,a.kt)("h2",{id:"limitations"},"Limitations"),(0,a.kt)("p",null,"We don't support Java 9 module mechanism for declaring ",(0,a.kt)("inlineCode",{parentName:"p"},"ServiceLoader")," implementations. As a workaround, you have to define\nyour service providers in the provider configuration file under ",(0,a.kt)("inlineCode",{parentName:"p"},"META-INF/services"),"."))}u.isMDXComponent=!0},6010:(e,r,t)=>{"use strict";function n(e){var r,t,o="";if("string"==typeof e||"number"==typeof e)o+=e;else if("object"==typeof e)if(Array.isArray(e))for(r=0;r<e.length;r++)e[r]&&(t=n(e[r]))&&(o&&(o+=" "),o+=t);else for(r in e)e[r]&&(o&&(o+=" "),o+=r);return o}function o(){for(var e,r,t=0,o="";t<arguments.length;)(e=arguments[t++])&&(r=n(e))&&(o&&(o+=" "),o+=r);return o}t.d(r,{Z:()=>o})}}]);