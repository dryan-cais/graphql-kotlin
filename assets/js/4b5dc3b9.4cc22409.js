(self.webpackChunkgraphql_kotlin_docs=self.webpackChunkgraphql_kotlin_docs||[]).push([[9970],{3905:(e,t,r)=>{"use strict";r.d(t,{Zo:()=>s,kt:()=>h});var n=r(7294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function c(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var l=n.createContext({}),p=function(e){var t=n.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},s=function(e){var t=p(e.components);return n.createElement(l.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,o=e.originalType,l=e.parentName,s=c(e,["components","mdxType","originalType","parentName"]),d=p(r),h=a,m=d["".concat(l,".").concat(h)]||d[h]||u[h]||o;return r?n.createElement(m,i(i({ref:t},s),{},{components:r})):n.createElement(m,i({ref:t},s))}));function h(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=r.length,i=new Array(o);i[0]=d;var c={};for(var l in t)hasOwnProperty.call(t,l)&&(c[l]=t[l]);c.originalType=e,c.mdxType="string"==typeof e?e:a,i[1]=c;for(var p=2;p<o;p++)i[p]=r[p];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}d.displayName="MDXCreateElement"},6824:(e,t,r)=>{"use strict";r.r(t),r.d(t,{frontMatter:()=>i,metadata:()=>c,toc:()=>l,default:()=>s});var n=r(2122),a=r(9756),o=(r(7294),r(3905)),i={id:"fetching-data",title:"Fetching Data",original_id:"fetching-data"},c={unversionedId:"schema-generator/execution/fetching-data",id:"version-3.x.x/schema-generator/execution/fetching-data",isDocsHomePage:!1,title:"Fetching Data",description:"Each field exposed through a GraphQL query has a corresponding resolver (aka data fetcher) associated with it. graphql-kotlin-schema-generator generates GraphQL schema",source:"@site/versioned_docs/version-3.x.x/schema-generator/execution/fetching-data.md",sourceDirName:"schema-generator/execution",slug:"/schema-generator/execution/fetching-data",permalink:"/graphql-kotlin/docs/3.x.x/schema-generator/execution/fetching-data",editUrl:"https://github.com/ExpediaGroup/graphql-kotlin/tree/master/website/versioned_docs/version-3.x.x/schema-generator/execution/fetching-data.md",version:"3.x.x",lastUpdatedBy:"Milan Majer",lastUpdatedAt:1625578501,formattedLastUpdatedAt:"7/6/2021",frontMatter:{id:"fetching-data",title:"Fetching Data",original_id:"fetching-data"},sidebar:"version-3.x.x/docs",previous:{title:"Advanced Features",permalink:"/graphql-kotlin/docs/3.x.x/schema-generator/customizing-schemas/advanced-features"},next:{title:"Async Models",permalink:"/graphql-kotlin/docs/3.x.x/schema-generator/execution/async-models"}},l=[{value:"Customizing Default Behavior",id:"customizing-default-behavior",children:[]}],p={toc:l};function s(e){var t=e.components,r=(0,a.Z)(e,["components"]);return(0,o.kt)("wrapper",(0,n.Z)({},p,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"Each field exposed through a GraphQL query has a corresponding resolver (aka data fetcher) associated with it. ",(0,o.kt)("inlineCode",{parentName:"p"},"graphql-kotlin-schema-generator")," generates GraphQL schema\ndirectly from the source code automatically mapping all the fields either to use\n",(0,o.kt)("a",{parentName:"p",href:"https://github.com/ExpediaGroup/graphql-kotlin/blob/3.x.x/graphql-kotlin-schema-generator/src/main/kotlin/com/expediagroup/graphql/execution/FunctionDataFetcher.kt"},"FunctionDataFetcher"),"\nto resolve underlying functions or a ",(0,o.kt)("a",{parentName:"p",href:"https://www.graphql-java.com/documentation/v14/data-fetching/"},"PropertyDataFetcher")," to read a value from an underlying Kotlin property."),(0,o.kt)("p",null,"While all the fields in a GraphQL query are resolved independently to produce a final result, whether field is backed by a function or a property can have significant\nperformance repercussions. For example, given the following schema:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-graphql"},"\ntype Query {\n  product(id: Int!): Product\n}\n\ntype Product {\n  id: Int!\n  name: String!\n  reviews: [Review!]!\n}\n\ntype Review {\n  id: Int!\n  text: String!\n}\n\n")),(0,o.kt)("p",null,"We can define ",(0,o.kt)("inlineCode",{parentName:"p"},"Product")," as"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-kotlin"},"\ndata class Product(val id: Int, val name: String, reviews: List<Review>)\n\n")),(0,o.kt)("p",null,"or"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-kotlin"},"\nclass Product(val id: Int, val name: String) {\n  suspend fun reviews(): List<Reviews> {\n     // logic to fetch reviews here\n  }\n}\n\n")),(0,o.kt)("p",null,"If we expose the ",(0,o.kt)("inlineCode",{parentName:"p"},"reviews")," field as a property it will always be populated regardless whether or not your client actually asks for it. On the other hand if ",(0,o.kt)("inlineCode",{parentName:"p"},"reviews")," is backed\nby a function, it will only be called if your client asks for this data. In order to minimize the over-fetching of data from your underlying data sources we recommend to\nexpose all your GraphQL fields that require some additional computations through functions."),(0,o.kt)("h3",{id:"customizing-default-behavior"},"Customizing Default Behavior"),(0,o.kt)("p",null,"You can provide your own custom data fetchers to resolve functions and properties by providing an instance of\n",(0,o.kt)("a",{parentName:"p",href:"https://github.com/ExpediaGroup/graphql-kotlin/blob/3.x.x/graphql-kotlin-schema-generator/src/main/kotlin/com/expediagroup/graphql/execution/KotlinDataFetcherFactoryProvider.kt#L31"},"KotlinDataFetcherFactoryProvider"),"\nto your ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/ExpediaGroup/graphql-kotlin/blob/3.x.x/graphql-kotlin-schema-generator/src/main/kotlin/com/expediagroup/graphql/SchemaGeneratorConfig.kt"},"SchemaGeneratorConfig"),".\nSee our ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/ExpediaGroup/graphql-kotlin/tree/3.x.x/examples/spring"},"spring example app")," for an example of ",(0,o.kt)("inlineCode",{parentName:"p"},"CustomDataFetcherFactoryProvider"),"."))}s.isMDXComponent=!0}}]);