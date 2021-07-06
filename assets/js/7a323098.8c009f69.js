(self.webpackChunkgraphql_kotlin_docs=self.webpackChunkgraphql_kotlin_docs||[]).push([[6923],{3905:(e,t,n)=>{"use strict";n.d(t,{Zo:()=>p,kt:()=>h});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var c=r.createContext({}),s=function(e){var t=r.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},p=function(e){var t=s(e.components);return r.createElement(c.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,c=e.parentName,p=i(e,["components","mdxType","originalType","parentName"]),m=s(n),h=a,d=m["".concat(c,".").concat(h)]||m[h]||u[h]||o;return n?r.createElement(d,l(l({ref:t},p),{},{components:n})):r.createElement(d,l({ref:t},p))}));function h(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,l=new Array(o);l[0]=m;var i={};for(var c in t)hasOwnProperty.call(t,c)&&(i[c]=t[c]);i.originalType=e,i.mdxType="string"==typeof e?e:a,l[1]=i;for(var s=2;s<o;s++)l[s]=n[s];return r.createElement.apply(null,l)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},9815:(e,t,n)=>{"use strict";n.r(t),n.d(t,{frontMatter:()=>l,metadata:()=>i,toc:()=>c,default:()=>p});var r=n(2122),a=n(9756),o=(n(7294),n(3905)),l={id:"async-models",title:"Async Models"},i={unversionedId:"schema-generator/execution/async-models",id:"schema-generator/execution/async-models",isDocsHomePage:!1,title:"Async Models",description:"By default, graphql-kotlin-schema-generator will resolve all functions synchronously, i.e. it will block the",source:"@site/docs/schema-generator/execution/async-models.md",sourceDirName:"schema-generator/execution",slug:"/schema-generator/execution/async-models",permalink:"/graphql-kotlin/docs/schema-generator/execution/async-models",editUrl:"https://github.com/ExpediaGroup/graphql-kotlin/tree/master/website/docs/schema-generator/execution/async-models.md",version:"current",lastUpdatedBy:"Milan Majer",lastUpdatedAt:1625578501,formattedLastUpdatedAt:"7/6/2021",frontMatter:{id:"async-models",title:"Async Models"},sidebar:"docs",previous:{title:"Fetching Data",permalink:"/graphql-kotlin/docs/schema-generator/execution/fetching-data"},next:{title:"Exceptions and Partial Data",permalink:"/graphql-kotlin/docs/schema-generator/execution/exceptions"}},c=[{value:"Coroutines",id:"coroutines",children:[]},{value:"CompletableFuture",id:"completablefuture",children:[]},{value:"RxJava/Reactor",id:"rxjavareactor",children:[]}],s={toc:c};function p(e){var t=e.components,n=(0,a.Z)(e,["components"]);return(0,o.kt)("wrapper",(0,r.Z)({},s,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"By default, ",(0,o.kt)("inlineCode",{parentName:"p"},"graphql-kotlin-schema-generator")," will resolve all functions synchronously, i.e. it will block the\nunderlying thread while executing the target function. While you could configure your GraphQL server with execution\nstrategies that execute each query in parallel on some thread pools, instead we highly recommend to utilize asynchronous\nprogramming models."),(0,o.kt)("h2",{id:"coroutines"},"Coroutines"),(0,o.kt)("p",null,(0,o.kt)("inlineCode",{parentName:"p"},"graphql-kotlin-schema-generator")," has built-in support for Kotlin coroutines. Provided default\n",(0,o.kt)("a",{parentName:"p",href:"https://github.com/ExpediaGroup/graphql-kotlin/blob/master/generator/graphql-kotlin-schema-generator/src/main/kotlin/com/expediagroup/graphql/generator/execution/FunctionDataFetcher.kt"},"FunctionDataFetcher"),"\nwill automatically asynchronously execute suspendable functions and convert the result to ",(0,o.kt)("inlineCode",{parentName:"p"},"CompletableFuture")," expected\nby ",(0,o.kt)("inlineCode",{parentName:"p"},"graphql-java"),"."),(0,o.kt)("p",null,"Example"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-kotlin"},"data class User(val id: String, val name: String)\n\nclass Query {\n    suspend fun getUser(id: String): User {\n        // Your coroutine logic to get user data\n    }\n}\n")),(0,o.kt)("p",null,"will produce the following schema"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-graphql"},"type Query {\n  getUser(id: String!): User\n}\n\ntype User {\n  id: String!\n  name: String!\n}\n")),(0,o.kt)("h2",{id:"completablefuture"},"CompletableFuture"),(0,o.kt)("p",null,(0,o.kt)("inlineCode",{parentName:"p"},"graphql-java")," relies on Java ",(0,o.kt)("inlineCode",{parentName:"p"},"CompletableFuture")," for asynchronously processing the requests. In order to simplify the\ninterop with ",(0,o.kt)("inlineCode",{parentName:"p"},"graphql-java"),", ",(0,o.kt)("inlineCode",{parentName:"p"},"graphql-kotlin-schema-generator")," has a built-in hook which will automatically unwrap a\n",(0,o.kt)("inlineCode",{parentName:"p"},"CompletableFuture")," and use the inner class as the return type in the schema."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-kotlin"},"data class User(val id: String, val name: String)\n\nclass Query {\n    fun getUser(id: String): CompletableFuture<User> {\n        // Your logic to get data asynchronously\n    }\n}\n")),(0,o.kt)("p",null,"will result in the exactly the same schema as in the coroutine example above."),(0,o.kt)("h2",{id:"rxjavareactor"},"RxJava/Reactor"),(0,o.kt)("p",null,"If you want to use a different monad type, like ",(0,o.kt)("inlineCode",{parentName:"p"},"Single")," from ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/ReactiveX/RxJava"},"RxJava")," or ",(0,o.kt)("inlineCode",{parentName:"p"},"Mono")," from\n",(0,o.kt)("a",{parentName:"p",href:"https://projectreactor.io/"},"Project Reactor"),", you have to:"),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},"Create custom ",(0,o.kt)("inlineCode",{parentName:"li"},"SchemaGeneratorHook")," that implements ",(0,o.kt)("inlineCode",{parentName:"li"},"willResolveMonad")," to provide the necessary logic\nto correctly unwrap the monad and return the inner class to generate valid schema")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-kotlin"},"class MonadHooks : SchemaGeneratorHooks {\n    override fun willResolveMonad(type: KType): KType = when (type.classifier) {\n        Mono::class -> type.arguments.firstOrNull()?.type\n        else -> type\n    } ?: type\n}\n")),(0,o.kt)("ol",{start:2},(0,o.kt)("li",{parentName:"ol"},"Provide custom data fetcher that will properly process those monad types.")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-kotlin"},"class CustomFunctionDataFetcher(target: Any?, fn: KFunction<*>, objectMapper: ObjectMapper) : FunctionDataFetcher(target, fn, objectMapper) {\n  override fun get(environment: DataFetchingEnvironment): Any? = when (val result = super.get(environment)) {\n    is Mono<*> -> result.toFuture()\n    else -> result\n  }\n}\n\nclass CustomDataFetcherFactoryProvider(\n    private val objectMapper: ObjectMapper\n) : SimpleKotlinDataFetcherFactoryProvider(objectMapper) {\n\n  override fun functionDataFetcherFactory(target: Any?, kFunction: KFunction<*>): DataFetcherFactory<Any> = DataFetcherFactory<Any> {\n    CustomFunctionDataFetcher(\n      target = target,\n      fn = kFunction,\n      objectMapper = objectMapper)\n  }\n}\n")),(0,o.kt)("p",null,"With the above you can then create your schema as follows:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-kotlin"},'class ReactorQuery {\n    fun asynchronouslyDo(): Mono<Int> = Mono.just(1)\n}\n\nval configWithReactorMonoMonad = SchemaGeneratorConfig(\n  supportedPackages = listOf("myPackage"),\n  hooks = MonadHooks(),\n  dataFetcherFactoryProvider = CustomDataFetcherFactoryProvider())\n\ntoSchema(queries = listOf(TopLevelObject(ReactorQuery())), config = configWithReactorMonoMonad)\n')),(0,o.kt)("p",null,"This will produce"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-graphql"},"type Query {\n  asynchronouslyDo: Int\n}\n")),(0,o.kt)("p",null,"You can find additional example on how to configure the hooks in our ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/ExpediaGroup/graphql-kotlin/blob/master/generator/graphql-kotlin-schema-generator/src/test/kotlin/com/expediagroup/graphql/generator/SchemaGeneratorAsyncTests.kt"},"unit\ntests"),"\nand ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/ExpediaGroup/graphql-kotlin/blob/master/examples/spring/src/main/kotlin/com/expediagroup/graphql/examples/query/AsyncQuery.kt"},"example app"),"."))}p.isMDXComponent=!0}}]);