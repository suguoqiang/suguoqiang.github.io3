(window.webpackJsonp=window.webpackJsonp||[]).push([[137],{632:function(t,a,n){"use strict";n.r(a);var s=n(6),e=Object(s.a)({},(function(){var t=this,a=t.$createElement,n=t._self._c||a;return n("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[n("p",[t._v("Feign 是一个 Java 实现的 Http 客户端，用于简化 Restful 调用。")]),t._v(" "),n("p",[t._v("Feign 跟 OkHttp、HttpClient 这种客户端实现理念不一样。Feign 强调接口的定义，接口中的一个方法对应一个 Http 请求，调用方法即发送一个 Http 请求；OkHttp 或 HttpClient 以过程式的方式发送 Http 请求。Feign 底层发送请求的实现可以跟 OkHttp 或 HttpClient 整合。Feign是与Hystrix强依赖的组件。")]),t._v(" "),n("p",[t._v("在启动类上，使用 "),n("code",[t._v("@EnableFeignClients")]),t._v(" 注解开启 Feign 功能。")]),t._v(" "),n("h3",{attrs:{id:"feignclient绑定的参数必须通过value来绑定-不然会报错"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#feignclient绑定的参数必须通过value来绑定-不然会报错"}},[t._v("#")]),t._v(" @FeignClient绑定的参数必须通过value来绑定，不然会报错")]),t._v(" "),n("p",[t._v("参考形式：")]),t._v(" "),n("div",{staticClass:"language-java extra-class"},[n("pre",{pre:!0,attrs:{class:"language-java"}},[n("code",[n("span",{pre:!0,attrs:{class:"token annotation punctuation"}},[t._v("@FeignClient")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("value "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token string"}},[t._v('"yl-user-admin"')]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("fallback "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("UserInfoFeignServiceImpl")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("class")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("public")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("interface")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("UserInfoFeign")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n\n      "),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("/**\n     * 调用外部服务获取用户信息\n     *\n     * @param username\n     * @return\n     */")]),t._v("\n    "),n("span",{pre:!0,attrs:{class:"token annotation punctuation"}},[t._v("@RequestMapping")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("value "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token string"}},[t._v('"api/user/info"')]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("method "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("RequestMethod")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("GET"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n    "),n("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("List")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("getUserInfo")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token annotation punctuation"}},[t._v("@RequestParam")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("value "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token string"}},[t._v('"username"')]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("String")]),t._v(" username"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),n("p",[t._v("通过@fallback属性，这里的UserInfoFeignServiceImpl是接口UserInfoFeign的降级处理实现类，\n在实现类头部加上"),n("code",[t._v("@Compent")]),t._v("注解")]),t._v(" "),n("h3",{attrs:{id:"feignclient接口-不能使用-getmapping-之类的简化组合注解"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#feignclient接口-不能使用-getmapping-之类的简化组合注解"}},[t._v("#")]),t._v(" FeignClient接口，不能使用@GetMapping 之类的简化组合注解")]),t._v(" "),n("p",[t._v('必须使用非简化形式 @RequestMapping(value = "/simple/{id}", method = RequestMethod.GET)')]),t._v(" "),n("h3",{attrs:{id:"feignclient接口中-如果使用到-pathvariable-必须指定其value"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#feignclient接口中-如果使用到-pathvariable-必须指定其value"}},[t._v("#")]),t._v(" FeignClient接口中，如果使用到@PathVariable ，必须指定其value")]),t._v(" "),n("h3",{attrs:{id:"feignclient多参数的构造"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#feignclient多参数的构造"}},[t._v("#")]),t._v(" FeignClient多参数的构造")]),t._v(" "),n("p",[t._v("对于复杂对象，采用的是POST方式提交，即使指明采用GET，请求也不会生效")]),t._v(" "),n("h3",{attrs:{id:"如果需要自定义单个feign配置-feign的-configuration-注解的类不能与-componentscan-的包重叠"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#如果需要自定义单个feign配置-feign的-configuration-注解的类不能与-componentscan-的包重叠"}},[t._v("#")]),t._v(" 如果需要自定义单个Feign配置，Feign的@Configuration 注解的类不能与@ComponentScan 的包重叠")]),t._v(" "),n("p",[t._v("如果包重叠，将会导致所有的Feign Client都会使用该配置。")]),t._v(" "),n("h3",{attrs:{id:"分布式事物"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#分布式事物"}},[t._v("#")]),t._v(" 分布式事物")]),t._v(" "),n("p",[n("img",{attrs:{src:"http://cdn.gqsu.top/feign01-1.jpeg",alt:""}}),t._v("\n上图所示，当请求A模块时")]),t._v(" "),n("ul",[n("li",[t._v("A模块Mapper直接操作DB 得到数据集")]),t._v(" "),n("li",[t._v("使用Feign 调用 B模块")]),t._v(" "),n("li",[t._v("B模块Mapper操作DB 得到数据集")]),t._v(" "),n("li",[t._v("合并1.3 两步操作或者其他的操作")])]),t._v(" "),n("h4",{attrs:{id:"分析上图可能发生异常及其回滚"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#分析上图可能发生异常及其回滚"}},[t._v("#")]),t._v(" 分析上图可能发生异常及其回滚")]),t._v(" "),n("p",[t._v("步骤1 发生异常， spring 事务会自动回滚\n步骤2 发生异常， spring 事务会自动回滚\n步骤3 发生异常， 3会自动回滚， 2根据返回码抛出自定义异常 1会自动回滚\n步骤4 发生异常， spring 事务会自动1 的操作 ，但是3的操作不会回滚")]),t._v(" "),n("blockquote",[n("p",[t._v("分布式事务的目标 当A模块开启事务时，如果4 操作过程异常，3的操作应该回滚。推荐使用 LCN 来完成。")])])])}),[],!1,null,null,null);a.default=e.exports}}]);