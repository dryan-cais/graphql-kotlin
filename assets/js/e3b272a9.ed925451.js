(self.webpackChunkgraphql_kotlin_docs=self.webpackChunkgraphql_kotlin_docs||[]).push([[3576],{3905:(e,n,t)=>{"use strict";t.d(n,{Zo:()=>s,kt:()=>m});var a=t(7294);function i(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function l(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);n&&(a=a.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,a)}return t}function r(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?l(Object(t),!0).forEach((function(n){i(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):l(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function o(e,n){if(null==e)return{};var t,a,i=function(e,n){if(null==e)return{};var t,a,i={},l=Object.keys(e);for(a=0;a<l.length;a++)t=l[a],n.indexOf(t)>=0||(i[t]=e[t]);return i}(e,n);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(a=0;a<l.length;a++)t=l[a],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(i[t]=e[t])}return i}var p=a.createContext({}),u=function(e){var n=a.useContext(p),t=n;return e&&(t="function"==typeof e?e(n):r(r({},n),e)),t},s=function(e){var n=u(e.components);return a.createElement(p.Provider,{value:n},e.children)},c={inlineCode:"code",wrapper:function(e){var n=e.children;return a.createElement(a.Fragment,{},n)}},d=a.forwardRef((function(e,n){var t=e.components,i=e.mdxType,l=e.originalType,p=e.parentName,s=o(e,["components","mdxType","originalType","parentName"]),d=u(t),m=i,h=d["".concat(p,".").concat(m)]||d[m]||c[m]||l;return t?a.createElement(h,r(r({ref:n},s),{},{components:t})):a.createElement(h,r({ref:n},s))}));function m(e,n){var t=arguments,i=n&&n.mdxType;if("string"==typeof e||i){var l=t.length,r=new Array(l);r[0]=d;var o={};for(var p in n)hasOwnProperty.call(n,p)&&(o[p]=n[p]);o.originalType=e,o.mdxType="string"==typeof e?e:i,r[1]=o;for(var u=2;u<l;u++)r[u]=t[u];return a.createElement.apply(null,r)}return a.createElement.apply(null,t)}d.displayName="MDXCreateElement"},8860:(e,n,t)=>{"use strict";t.r(n),t.d(n,{frontMatter:()=>r,metadata:()=>o,toc:()=>p,default:()=>s});var a=t(2122),i=t(9756),l=(t(7294),t(3905)),r={id:"optional-undefined-arguments",title:"Optional Undefined Arguments"},o={unversionedId:"schema-generator/execution/optional-undefined-arguments",id:"schema-generator/execution/optional-undefined-arguments",isDocsHomePage:!1,title:"Optional Undefined Arguments",description:"In the GraphQL world, input types can be optional which means that the client can either:",source:"@site/docs/schema-generator/execution/optional-undefined-arguments.md",sourceDirName:"schema-generator/execution",slug:"/schema-generator/execution/optional-undefined-arguments",permalink:"/graphql-kotlin/docs/schema-generator/execution/optional-undefined-arguments",editUrl:"https://github.com/ExpediaGroup/graphql-kotlin/tree/master/website/docs/schema-generator/execution/optional-undefined-arguments.md",version:"current",lastUpdatedBy:"Milan Majer",lastUpdatedAt:1625578501,formattedLastUpdatedAt:"7/6/2021",frontMatter:{id:"optional-undefined-arguments",title:"Optional Undefined Arguments"},sidebar:"docs",previous:{title:"Contextual Data",permalink:"/graphql-kotlin/docs/schema-generator/execution/contextual-data"},next:{title:"Subscriptions",permalink:"/graphql-kotlin/docs/schema-generator/execution/subscriptions"}},p=[{value:"Using OptionalInput wrapper",id:"using-optionalinput-wrapper",children:[]},{value:"Using DataFetchingEnvironment",id:"using-datafetchingenvironment",children:[]},{value:"Kotlin Default Values",id:"kotlin-default-values",children:[]}],u={toc:p};function s(e){var n=e.components,t=(0,i.Z)(e,["components"]);return(0,l.kt)("wrapper",(0,a.Z)({},u,t,{components:n,mdxType:"MDXLayout"}),(0,l.kt)("p",null,"In the GraphQL world, input types can be optional which means that the client can either:"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"Not specify a value at all"),(0,l.kt)("li",{parentName:"ul"},"Send null explicitly"),(0,l.kt)("li",{parentName:"ul"},"Send a non-null value")),(0,l.kt)("p",null,"This is in contrast with the JVM world where objects can either have some specific value or don't have any value (i.e.\nare ",(0,l.kt)("inlineCode",{parentName:"p"},"null"),"). As a result, when using default serialization logic it is not possible to distinguish between missing/unspecified\nvalue and explicit ",(0,l.kt)("inlineCode",{parentName:"p"},"null")," value."),(0,l.kt)("h2",{id:"using-optionalinput-wrapper"},"Using OptionalInput wrapper"),(0,l.kt)("p",null,(0,l.kt)("inlineCode",{parentName:"p"},"OptionalInput")," is a convenient sealed class wrapper that provides distinction between undefined, null, and non-null\nvalues. If the argument is not specified in the request it will be represented as a ",(0,l.kt)("inlineCode",{parentName:"p"},"OptionalInput.Undefined")," object, otherwise the\nvalue will be wrapped in ",(0,l.kt)("inlineCode",{parentName:"p"},"OptionalInput.Defined")," class."),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-kotlin"},'fun optionalInput(input: OptionalInput<String>): String = when (input) {\n    is OptionalInput.Undefined -> "input was not specified"\n    is OptionalInput.Defined<String> -> "input value: ${input.value}"\n}\n')),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-graphql"},'query OptionalInputQuery {\n  undefined: optionalInput # input was not specified\n  null: optionalInput(value: null) # input value: null\n  foo: optionalInput(value: "foo") # input value: foo\n}\n')),(0,l.kt)("div",{className:"admonition admonition-info alert alert--info"},(0,l.kt)("div",{parentName:"div",className:"admonition-heading"},(0,l.kt)("h5",{parentName:"div"},(0,l.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,l.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,l.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"}))),"info")),(0,l.kt)("div",{parentName:"div",className:"admonition-content"},(0,l.kt)("p",{parentName:"div"},"Regardless whether the generic type of ",(0,l.kt)("inlineCode",{parentName:"p"},"OptionalInput")," is specified as nullable or not it will always result in a nullable\nvalue in ",(0,l.kt)("inlineCode",{parentName:"p"},"Defined")," class, i.e. ",(0,l.kt)("inlineCode",{parentName:"p"},"OptionalInput<String>")," will appear as nullable ",(0,l.kt)("inlineCode",{parentName:"p"},"String")," in the GraphQL schema and in the wrapped value."))),(0,l.kt)("h2",{id:"using-datafetchingenvironment"},"Using DataFetchingEnvironment"),(0,l.kt)("p",null,"Optional input types can be represented as nullable parameters in Kotlin"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-kotlin"},"fun optionalInput(value: String?): String? = value\n")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-graphql"},'query OptionalInputQuery {\n  undefined: optionalInput # null\n  null: optionalInput(value: null) # null\n  foo: optionalInput(value: "foo") # foo\n}\n')),(0,l.kt)("p",null,"By default, if an optional input value is not specified, then the execution engine will set the argument in Kotlin to ",(0,l.kt)("inlineCode",{parentName:"p"},"null"),".\nThis means that you can not tell, by just the value alone, whether the request did not contain any argument or the client\nexplicitly passed in ",(0,l.kt)("inlineCode",{parentName:"p"},"null"),"."),(0,l.kt)("p",null,"Instead, you can inspect all passed in arguments using the ",(0,l.kt)("a",{parentName:"p",href:"/graphql-kotlin/docs/schema-generator/execution/data-fetching-environment"},"DataFetchingEnvironment"),"."),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-kotlin"},'fun optionalInput(value: String?, dataFetchingEnvironment: DataFetchingEnvironment): String =\n    if (dataFetchingEnvironment.containsArgument("value")) {\n        "The value was $value"\n    } else {\n        "The value was undefined"\n    }\n')),(0,l.kt)("h2",{id:"kotlin-default-values"},"Kotlin Default Values"),(0,l.kt)("p",null,"If you don't need logic for when the client specified a value, you can still use ",(0,l.kt)("a",{parentName:"p",href:"/graphql-kotlin/docs/schema-generator/writing-schemas/arguments"},"Kotlin default values")))}s.isMDXComponent=!0}}]);