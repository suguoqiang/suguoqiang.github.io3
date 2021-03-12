(window.webpackJsonp=window.webpackJsonp||[]).push([[66],{561:function(t,s,a){"use strict";a.r(s);var n=a(6),e=Object(n.a)({},(function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("h3",{attrs:{id:"基本概念"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#基本概念"}},[t._v("#")]),t._v(" 基本概念")]),t._v(" "),a("p",[t._v("Dubbo 是阿里巴巴公司开源的一个高性能优秀的服务框架，使得应用可通过高性能的 RPC 实现服务的输出和输入功能，以及SOA服务治理方案。")]),t._v(" "),a("p",[t._v("（1）主要核心部件：\nRemoting: 网络通信框架，实现了 sync-over-async 和 request-response 消息机制.\nRPC: 一个远程过程调用的抽象，支持负载均衡、容灾和集群功能.(Hessian协议)\nRegistry: 服务目录框架用于服务的注册和服务事件发布和订阅")]),t._v(" "),a("blockquote",[a("p",[t._v("1.SOA（Service Oriented Architecture）“面向服务的架构”:他是一种设计方法，其中包含多个服务， 服务之间通过相互依赖最终提供一系列的功能。一个服务通常以独立的形式存在与操作系统进程中。各个服务之间 通过网络调用。如：dubbo")])]),t._v(" "),a("blockquote",[a("p",[t._v("2.微服务架构:其实和 SOA 架构类似,微服务是在 SOA 上做的升华，微服务架构强调的一个重点是“业务需要彻底的组件化和服务化”，原有的单个业务系统会拆分为多个可以独立开发、设计、运行的小应用。这些小应用之间通过服务完成交互和集成。如：Spring Cloud")])]),t._v(" "),a("h3",{attrs:{id:"特性"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#特性"}},[t._v("#")]),t._v(" 特性")]),t._v(" "),a("p",[t._v("Dubbo具有以下特性：")]),t._v(" "),a("ul",[a("li",[t._v("面向接口代理的高性能RPC调用")]),t._v(" "),a("li",[t._v("提供高性能的基于代理的远程调用能力，服务以接口为粒度，为开发者屏蔽远程调用底层细节。")]),t._v(" "),a("li",[t._v("智能负载均衡")]),t._v(" "),a("li",[t._v("内置多种负载均衡策略，智能感知下游节点健康状况，显著减少调用延迟，提高系统吞吐量。")]),t._v(" "),a("li",[t._v("服务自动注册与发现")]),t._v(" "),a("li",[t._v("支持多种注册中心服务，服务实例上下线实时感知。")]),t._v(" "),a("li",[t._v("高度可扩展能力")]),t._v(" "),a("li",[t._v("遵循微内核+插件的设计原则，所有核心能力如Protocol、Transport、Serialization被设计为扩展点，平等对待内置实现和第三方实现。")]),t._v(" "),a("li",[t._v("运行期流量调度")]),t._v(" "),a("li",[t._v("内置条件、脚本等路由策略，通过配置不同的路由规则，轻松实现灰度发布，同机房优先等功能。")]),t._v(" "),a("li",[t._v("可视化的服务治理与运维")]),t._v(" "),a("li",[t._v("提供丰富服务治理、运维工具：随时查询服务元数据、服务健康状态及调用统计，实时下发路由策略、调整配置参数。")])]),t._v(" "),a("blockquote",[a("p",[t._v("1)连通性：\n注册中心负责服务地址的注册与查找，相当于目录服务，服务提供者和消费者只在启动时与注册中心交互，注册中心不转发请求，压力较小\n监控中心负责统计各服务调用次数，调用时间等，统计先在内存汇总后每分钟一次发送到监控中心服务器，并以报表展示\n服务提供者向注册中心注册其提供的服务，并汇报调用时间到监控中心，此时间不包含网络开销\n服务消费者向注册中心获取服务提供者地址列表，并根据负载算法直接调用提供者，同时汇报调用时间到监控中心，此时间包含网络开销\n注册中心，服务提供者，服务消费者三者之间均为长连接，监控中心除外\n注册中心通过长连接感知服务提供者的存在，服务提供者宕机，注册中心将立即推送事件通知消费者\n注册中心和监控中心全部宕机，不影响已运行的提供者和消费者，消费者在本地缓存了提供者列表\n注册中心和监控中心都是可选的，服务消费者可以直连服务提供者\n2)健状性：\n监控中心宕掉不影响使用，只是丢失部分采样数据\n数据库宕掉后，注册中心仍能通过缓存提供服务列表查询，但不能注册新服务\n注册中心对等集群，任意一台宕掉后，将自动切换到另一台\n注册中心全部宕掉后，服务提供者和服务消费者仍能通过本地缓存通讯\n服务提供者无状态，任意一台宕掉后，不影响使用\n服务提供者全部宕掉后，服务消费者应用将无法使用，并无限次重连等待服务提供者恢复\n3)伸缩性：\n注册中心为对等集群，可动态增加机器部署实例，所有客户端将自动发现新的注册中心\n服务提供者无状态，可动态增加机器部署实例，注册中心将推送新的服务提供者信息给消费者")])]),t._v(" "),a("h3",{attrs:{id:"注意事项"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#注意事项"}},[t._v("#")]),t._v(" 注意事项")]),t._v(" "),a("p",[t._v("注册中心、服务提供者、服务消费者三者是长连接，监控中心不是。注册中心通过长连接感知服务提供者的存在，服务提供者宕机，注册中心将立即推送事件通知消费者。注册中心和监控中心全部宕机，不影响已运行的提供者和消费者，消费者在本地缓存了提供者列表。注册中心和监控中心都是可选的，服务消费者可以直连服务提供者。")]),t._v(" "),a("h3",{attrs:{id:"工作原理"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#工作原理"}},[t._v("#")]),t._v(" 工作原理")]),t._v(" "),a("p",[t._v("第一层：service 层，接口层，给服务提供者和消费者来实现的\n第二层：config 层，配置层，主要是对 dubbo 进行各种配置的\n第三层：proxy 层，服务代理层，无论是 consumer 还是 provider，dubbo 都会给你生成代理，代理之间进行网络通信\n第四层：register 层，服务注册层，负责服务的注册与发现\n第五层：cluster 层，集群层，封装多个服务提供者的路由以及负载均衡，将多个实例组合成一个服务\n第六层：monitor 层，监控层，对 rpc 接口的调用次数和调用时间进行监控\n第七层：protocal 层，远程调用层，封装 rpc 调用\n第八层：exchange 层，信息交换层，封装请求响应模式，同步转异步\n第九层：transport 层，网络传输层，抽象 mina 和 netty 为统一接口\n第十层：serialize 层，数据序列化层")]),t._v(" "),a("h3",{attrs:{id:"工作流程"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#工作流程"}},[t._v("#")]),t._v(" 工作流程")]),t._v(" "),a("p",[t._v("第一步：provider 向注册中心去注册\n第二步：consumer 从注册中心订阅服务，注册中心会通知 consumer 注册好的服务\n第三步：consumer 调用 provider\n第四步：consumer 和 provider 都异步通知监控中心")]),t._v(" "),a("blockquote",[a("p",[t._v("服务容器负责启动，加载，运行服务提供者。\n服务提供者在启动时，向注册中心注册自己提供的服务。\n服务消费者在启动时，向注册中心订阅自己所需的服务。\n注册中心返回服务提供者地址列表给消费者，如果有变更，注册中心将基于长连接推送变更数据给消费者。\n服务消费者，从提供者地址列表中，基于软负载均衡算法，选一台提供者进行调用，如果调用失败，再选另一台调用。\n服务消费者和提供者，在内存中累计调用次数和调用时间，定时每分钟发送一次统计数据到监控中心。")])]),t._v(" "),a("h3",{attrs:{id:"容错机制"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#容错机制"}},[t._v("#")]),t._v(" 容错机制")]),t._v(" "),a("p",[t._v("当服务调用失败时（比如响应超时），根据我们的业务不同，可以使用不同的策略来应对这种失败。")]),t._v(" "),a("p",[t._v("比如我们调用的服务是一个查询服务，不会修改数据库，那么可以给该服务设置容错方式为"),a("code",[t._v("failover")]),t._v(" ， 当调用失败时，自动切换到其他服务提供者去调用，当失败次数超过指定重试次数，那么就抛出错误；\n如果服务是更新数据的服务，那就不能使用失败重试的方式了， 因为这样可能产生数据重复修改的问题，比如调用提供者A的插入用户方法，但是该方法业务逻辑复杂，执行过程很慢，导致响应超时， 那么此时如果再去调用另外一个服务提供者的插入用户方法，将会又重复插入同一个用户。 对于这种类型的服务，可以使用容错方式为"),a("code",[t._v("failfast")]),t._v("，如果第一次调用失败，立即报错，不需要重试；")]),t._v(" "),a("p",[t._v("另外还有下面几种容错类型：\n"),a("code",[t._v("failsafe")]),t._v(" 出现错误，直接忽略，不重试也不报错\n"),a("code",[t._v("failback")]),t._v(" 失败后不报错，会将该失败请求，定时重发，适合消息通知类型的服务\n"),a("code",[t._v("forking")]),t._v(" 并行调用多个服务器，只要在某一台提供者上面成功，那么方法返回， 适合实时性要求较高的查询服务， 但是要牺牲性能。因为每台服务器会做同一个操作\n"),a("code",[t._v("broadcast")]),t._v(" 广播调用所有服务提供者，逐个调用，任意一台报错则报错。 适合与更新每台提供者上面的缓存这种类型的服务。")]),t._v(" "),a("h3",{attrs:{id:"可选的注册中心"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#可选的注册中心"}},[t._v("#")]),t._v(" 可选的注册中心")]),t._v(" "),a("p",[a("code",[t._v("Multicast")]),t._v("注册中心\n"),a("code",[t._v("Zookeeper")]),t._v("注册中心（该方式较多）\n"),a("code",[t._v("Redis")]),t._v("注册中心\n"),a("code",[t._v("Simple")]),t._v("注册中心")]),t._v(" "),a("h3",{attrs:{id:"优缺点"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#优缺点"}},[t._v("#")]),t._v(" 优缺点")]),t._v(" "),a("p",[t._v("1）优点：")]),t._v(" "),a("p",[t._v("透明化的远程方法调用")]),t._v(" "),a("ul",[a("li",[t._v("像调用本地方法一样调用远程方法；只需简单配置，没有任何API侵入。")])]),t._v(" "),a("p",[t._v("软负载均衡及容错机制")]),t._v(" "),a("ul",[a("li",[t._v("可在内网替代nginx lvs等硬件负载均衡器。")])]),t._v(" "),a("p",[t._v("服务注册中心自动注册 & 配置管理")]),t._v(" "),a("p",[t._v("不需要写死服务提供者地址，注册中心基于接口名自动查询提供者ip。")]),t._v(" "),a("ul",[a("li",[t._v("使用类似zookeeper等分布式协调服务作为服务注册中心，可以将绝大部分项目配置移入zookeeper集群。")])]),t._v(" "),a("p",[t._v("服务接口监控与治理")]),t._v(" "),a("ul",[a("li",[t._v("Dubbo-admin与Dubbo-monitor提供了完善的服务接口管理与监控功能，针对不同应用的不同接口，可以进行多版本，多协议，多注册中心管理。")])]),t._v(" "),a("p",[t._v("2）缺点：只支持JAVA语言")]),t._v(" "),a("blockquote",[a("p",[t._v("这里说明一下，springCloud采用的是rest方式，即http协议的Rpc解决方案，利用Feign才完成服务于服务之间的调用，利用了Http协议的语言无关性将非java语言纳入其中。比如，nodejs项目。")])]),t._v(" "),a("h3",{attrs:{id:"注册中心挂了可以继续通信吗"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#注册中心挂了可以继续通信吗"}},[t._v("#")]),t._v(" 注册中心挂了可以继续通信吗？")]),t._v(" "),a("p",[t._v("可以，因为刚开始初始化的时候，消费者会将提供者的地址等信息拉取到本地缓存，所以注册中心挂了可以继续通信。")]),t._v(" "),a("h3",{attrs:{id:"基本操作"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#基本操作"}},[t._v("#")]),t._v(" 基本操作")]),t._v(" "),a("h4",{attrs:{id:"通过-rpccontext-上的-setattachment-和-getattachment-在服务消费方和提供方之间进行参数的隐式传递"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#通过-rpccontext-上的-setattachment-和-getattachment-在服务消费方和提供方之间进行参数的隐式传递"}},[t._v("#")]),t._v(" 通过 RpcContext 上的 setAttachment 和 getAttachment 在服务消费方和提供方之间进行参数的隐式传递")]),t._v(" "),a("div",{staticClass:"language-java extra-class"},[a("pre",{pre:!0,attrs:{class:"language-java"}},[a("code",[a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("RpcContext")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("getContext")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("setAttachment")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"index"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"1"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 隐式传参，后面的远程调用都会隐式将这些参数发送到服务器端，类似cookie，用于框架集成，不建议常规业务使用（仅一次）")]),t._v("\nxxxService"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("xxx")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 远程调用")]),t._v("\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 获取客户端隐式传入的参数，用于框架集成，不建议常规业务使用")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("String")]),t._v(" index "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("RpcContext")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("getContext")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("getAttachment")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"index"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" \n")])])]),a("h4",{attrs:{id:"日志配置"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#日志配置"}},[t._v("#")]),t._v(" 日志配置")]),t._v(" "),a("div",{staticClass:"language-properties extra-class"},[a("pre",{pre:!0,attrs:{class:"language-properties"}},[a("code",[a("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("dubbo.application.logger")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("=")]),a("span",{pre:!0,attrs:{class:"token attr-value"}},[t._v("log4j")]),t._v("\n")])])]),a("h3",{attrs:{id:"aop切面编程"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#aop切面编程"}},[t._v("#")]),t._v(" Aop切面编程")]),t._v(" "),a("div",{staticClass:"language-java extra-class"},[a("pre",{pre:!0,attrs:{class:"language-java"}},[a("code",[a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//定义切面")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token annotation punctuation"}},[t._v("@Pointcut")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"execution(public * sttp.web.controller.PublishController.publish(..))"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v('//@Pointcut("execution(public * sttp.web.controller.PublishController.publish(..)) || execution(public * sttp.web.controller.UserController.getUser(..)) ") 多个切面情况')]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("public")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("void")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("doPublish")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//在执行完 publish()返回后，执行如下代码")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token annotation punctuation"}},[t._v("@AfterReturning")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("returning "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"rtn"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" pointcut "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"doPublish()"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("public")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("void")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("doPublish")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("JoinPoint")]),t._v(" joinPoint"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Object")]),t._v(" rtn"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("List")]),a("span",{pre:!0,attrs:{class:"token generics"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Long")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v(" noticeIds "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("List")]),a("span",{pre:!0,attrs:{class:"token generics"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Long")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("joinPoint"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("getArgs")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//获取publish()方法传入的参数")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("if")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("noticeIds"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("==")]),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("null")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("||")]),t._v("noticeIds"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("size")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n        "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("return")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n   "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("\n   "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//doSomethings")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),a("h3",{attrs:{id:"相关"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#相关"}},[t._v("#")]),t._v(" 相关")]),t._v(" "),a("p",[a("strong",[t._v("1、默认使用的是什么通信框架，还有别的选择吗?")])]),t._v(" "),a("p",[t._v("答：默认也推荐使用 netty 框架，还有 mina。")]),t._v(" "),a("p",[a("strong",[t._v("2、服务调用是阻塞的吗？")])]),t._v(" "),a("p",[t._v("答：默认是阻塞的，可以异步调用，没有返回值的可以这么做。")]),t._v(" "),a("p",[a("strong",[t._v("3、一般使用什么注册中心？还有别的选择吗？")])]),t._v(" "),a("p",[t._v("答：推荐使用 zookeeper 注册中心，还有 Multicast注册中心, Redis注册中心, Simple注册中心.")]),t._v(" "),a("p",[t._v("ZooKeeper的节点是通过像树一样的结构来进行维护的，并且每一个节点通过路径来标示以及访问。除此之外，每一个节点还拥有自身的一些信息，包括：数据、数据长度、创建时间、修改时间等等。")]),t._v(" "),a("p",[a("strong",[t._v("4、默认使用什么序列化框架，你知道的还有哪些？")])]),t._v(" "),a("p",[t._v("答：默认使用 Hessian 序列化，还有 Duddo、FastJson、Java 自带序列化。 hessian是一个采用二进制格式传输的服务框架，相对传统soap web service，更轻量，更快速。")]),t._v(" "),a("p",[t._v("Hessian原理与协议简析：")]),t._v(" "),a("p",[t._v("http的协议约定了数据传输的方式，hessian也无法改变太多：")]),t._v(" "),a("ul",[a("li",[a("ol",[a("li",[t._v("hessian中client与server的交互，基于http-post方式。")])])]),t._v(" "),a("li",[a("ol",{attrs:{start:"2"}},[a("li",[t._v("hessian将辅助信息，封装在http header中，比如“授权token”等，我们可以基于http-header来封装关于“安全校验”“meta数据”等。hessian提供了简单的”校验”机制。")])])]),t._v(" "),a("li",[a("ol",{attrs:{start:"3"}},[a("li",[t._v("对于hessian的交互核心数据，比如“调用的方法”和参数列表信息，将通过post请求的body体直接发送，格式为字节流。")])])]),t._v(" "),a("li",[a("ol",{attrs:{start:"4"}},[a("li",[t._v("对于hessian的server端响应数据，将在response中通过字节流的方式直接输出。")])])])]),t._v(" "),a("p",[t._v("hessian的协议本身并不复杂，在此不再赘言；所谓协议(protocol)就是约束数据的格式，client按照协议将请求信息序列化成字节序列发送给server端，server端根据协议，将数据反序列化成“对象”，然后执行指定的方法，并将方法的返回值再次按照协议序列化成字节流，响应给client，client按照协议将字节流反序列话成”对象”。")]),t._v(" "),a("p",[a("strong",[t._v("5、服务提供者能实现失效踢出是什么原理？")])]),t._v(" "),a("p",[t._v("答：服务失效踢出基于 zookeeper 的临时节点原理。")]),t._v(" "),a("p",[a("strong",[t._v("6、服务上线怎么不影响旧版本？")])]),t._v(" "),a("p",[t._v("答：采用多版本开发，不影响旧版本。在配置中添加version来作为版本区分")]),t._v(" "),a("p",[a("strong",[t._v("7、如何解决服务调用链过长的问题？")])]),t._v(" "),a("p",[t._v("答：可以结合 zipkin 实现分布式服务追踪。")]),t._v(" "),a("p",[a("strong",[t._v("8、说说核心的配置有哪些？")])]),t._v(" "),a("p",[t._v("核心配置有：")]),t._v(" "),a("ul",[a("li",[a("ol",[a("li",[t._v("dubbo:service/")])])]),t._v(" "),a("li",[a("ol",{attrs:{start:"2"}},[a("li",[t._v("dubbo:reference/")])])]),t._v(" "),a("li",[a("ol",{attrs:{start:"3"}},[a("li",[t._v("dubbo:protocol/")])])]),t._v(" "),a("li",[a("ol",{attrs:{start:"4"}},[a("li",[t._v("dubbo:registry/")])])]),t._v(" "),a("li",[a("ol",{attrs:{start:"5"}},[a("li",[t._v("dubbo:application/")])])]),t._v(" "),a("li",[a("ol",{attrs:{start:"6"}},[a("li",[t._v("dubbo:provider/")])])]),t._v(" "),a("li",[a("ol",{attrs:{start:"7"}},[a("li",[t._v("dubbo:consumer/")])])]),t._v(" "),a("li",[a("ol",{attrs:{start:"8"}},[a("li",[t._v("dubbo:method/")])])])]),t._v(" "),a("p",[a("strong",[t._v("9、dubbo 推荐用什么协议？")])]),t._v(" "),a("p",[t._v("答：默认使用 dubbo 协议。")]),t._v(" "),a("p",[a("strong",[t._v("10、同一个服务多个注册的情况下可以直连某一个服务吗？")])]),t._v(" "),a("p",[t._v("答：可以直连，修改配置即可，也可以通过 telnet 直接某个服务。")]),t._v(" "),a("p",[a("strong",[t._v("11、dubbo 在安全机制方面如何解决的？")])]),t._v(" "),a("p",[t._v("dubbo 通过 token 令牌防止用户绕过注册中心直连，然后在注册中心管理授权，dubbo 提供了黑白名单，控制服务所允许的调用方。")]),t._v(" "),a("p",[a("strong",[t._v("12、集群容错怎么做？")])]),t._v(" "),a("p",[t._v("答：读操作建议使用 Failover 失败自动切换，默认重试两次其他服务器。写操作建议使用 Failfast 快速失败，发一次调用失败就立即报错。")]),t._v(" "),a("p",[a("strong",[t._v("13、在使用过程中都遇到了些什么问题？ 如何解决的？")])]),t._v(" "),a("ul",[a("li",[a("ol",[a("li",[t._v("同时配置了 XML 和 properties 文件，则 properties 中的配置无效")])])])]),t._v(" "),a("p",[t._v("只有 XML 没有配置时，properties 才生效。")]),t._v(" "),a("ul",[a("li",[a("ol",{attrs:{start:"2"}},[a("li",[t._v("dubbo 缺省会在启动时检查依赖是否可用，不可用就抛出异常，阻止 spring 初始化完成，check 属性默认为 true。")])])])]),t._v(" "),a("p",[t._v("测试时有些服务不关心或者出现了循环依赖，将 check 设置为 false")]),t._v(" "),a("ul",[a("li",[a("ol",{attrs:{start:"3"}},[a("li",[t._v("为了方便开发测试，线下有一个所有服务可用的注册中心，这时，如果有一个正在开发中的服务提供者注册，可能会影响消费者不能正常运行。")])])])]),t._v(" "),a("p",[t._v("解决：让服务提供者开发方，只订阅服务，而不注册正在开发的服务，通过直连测试正在开发的服务。设置 dubbo:registry 标签的 register 属性为 false。")]),t._v(" "),a("ul",[a("li",[a("ol",{attrs:{start:"4"}},[a("li",[t._v("spring 2.x 初始化死锁问题。")])])])]),t._v(" "),a("p",[t._v("在 spring 解析到 dubbo:service 时，就已经向外暴露了服务，而 spring 还在接着初始化其他 bean，如果这时有请求进来，并且服务的实现类里有调用 applicationContext.getBean() 的用法。getBean 线程和 spring 初始化线程的锁的顺序不一样，导致了线程死锁，不能提供服务，启动不了。")]),t._v(" "),a("p",[t._v("解决：不要在服务的实现类中使用 applicationContext.getBean(); 如果不想依赖配置顺序，可以将 dubbo:provider 的 deplay 属性设置为 - 1，使 dubbo 在容器初始化完成后再暴露服务。")]),t._v(" "),a("ul",[a("li",[a("ol",{attrs:{start:"5"}},[a("li",[t._v("服务注册不上")])])])]),t._v(" "),a("p",[t._v("检查 dubbo 的 jar 包有没有在 classpath 中，以及有没有重复的 jar 包。\n检查暴露服务的 spring 配置有没有加载。\n在服务提供者机器上测试与注册中心的网络是否通。")]),t._v(" "),a("ul",[a("li",[a("ol",{attrs:{start:"6"}},[a("li",[t._v("出现 RpcException: No provider available for remote service 异常")])])])]),t._v(" "),a("p",[t._v("表示没有可用的服务提供者，")]),t._v(" "),a("p",[t._v("a. 检查连接的注册中心是否正确")]),t._v(" "),a("p",[t._v("b. 到注册中心查看相应的服务提供者是否存在")]),t._v(" "),a("p",[t._v("c. 检查服务提供者是否正常运行")]),t._v(" "),a("ul",[a("li",[a("ol",{attrs:{start:"7"}},[a("li",[t._v("出现” 消息发送失败” 异常")])])])]),t._v(" "),a("p",[t._v("通常是接口方法的传入传出参数未实现 Serializable 接口。")]),t._v(" "),a("p",[a("strong",[t._v("14、dubbo 和 dubbox 之间的区别？")])]),t._v(" "),a("p",[t._v("答：dubbox 是当当网基于 dubbo 上做了一些扩展，如加了服务可 restful 调用，更新了开源组件等。")]),t._v(" "),a("p",[a("strong",[t._v("15、你还了解别的分布式框架吗？")])]),t._v(" "),a("p",[t._v("答：别的还有 spring 的 spring cloud，facebook 的 thrift，twitter 的 finagle 等。")]),t._v(" "),a("p",[a("strong",[t._v("16、Dubbo 支持哪些协议，每种协议的应用场景，优缺点？")])]),t._v(" "),a("p",[t._v("dubbo： 单一长连接和 NIO 异步通讯，适合大并发小数据量的服务调用，以及消费者远大于提供者。传输协议 TCP，异步，Hessian 序列化；")]),t._v(" "),a("p",[t._v("rmi： 采用 JDK 标准的 rmi 协议实现，传输参数和返回参数对象需要实现 Serializable 接口，使用 java 标准序列化机制，使用阻塞式短连接，传输数据包大小混合，消费者和提供者个数差不多，可传文件，传输协议 TCP。 多个短连接，TCP 协议传输，同步传输，适用常规的远程服务调用和 rmi 互操作。在依赖低版本的 Common-Collections 包，java 序列化存在安全漏洞；")]),t._v(" "),a("p",[t._v("webservice:基于 WebService 的远程调用协议，集成 CXF 实现，提供和原生 WebService 的互操作。多个短连接，基于 HTTP 传输，同步传输，适用系统集成和跨语言调用；http： 基于 Http 表单提交的远程调用协议，使用 Spring 的 HttpInvoke 实现。多个短连接，传输协议 HTTP，传入参数大小混合，提供者个数多于消费者，需要给应用程序和浏览器 JS 调用； hessian： 集成 Hessian 服务，基于 HTTP 通讯，采用 Servlet 暴露服务，Dubbo 内嵌 Jetty 作为服务器时默认实现，提供与 Hession 服务互操作。多个短连接，同步 HTTP 传输，Hessian 序列化，传入参数较大，提供者大于消费者，提供者压力较大，可传文件；")]),t._v(" "),a("p",[t._v("memcache： 基于 memcached 实现的 RPC 协议 redis： 基于 redis 实现的 RPC 协议")]),t._v(" "),a("p",[a("strong",[t._v("17、Dubbo 集群的负载均衡有哪些策略")])]),t._v(" "),a("p",[t._v("Dubbo 提供了常见的集群策略实现，并预扩展点予以自行实现。")]),t._v(" "),a("p",[t._v("Random LoadBalance: 随机选取提供者策略，有利于动态调整提供者权重。截面碰撞率高，调用次数越多，分布越均匀；")]),t._v(" "),a("p",[t._v("RoundRobin LoadBalance: 轮循选取提供者策略，平均分布，但是存在请求累积的问题；")]),t._v(" "),a("p",[t._v("LeastActive LoadBalance: 最少活跃调用策略，解决慢提供者接收更少的请求； ConstantHash LoadBalance: 一致性 Hash 策略，使相同参数请求总是发到同一提供者，一台机器宕机，可以基于虚拟节点，分摊至其他提供者，避免引起提供者的剧烈变动；")]),t._v(" "),a("p",[a("strong",[t._v("18、服务调用超时问题怎么解决")])]),t._v(" "),a("p",[t._v("dubbo在调用服务不成功时，默认是会重试两次的。这样在服务端的处理时间超过了设定的超时时间时，就会有重复请求，比如在发邮件时，可能就会发出多份重复邮件，执行注册请求时，就会插入多条重复的注册数据，那么怎么解决超时问题呢？如下")]),t._v(" "),a("p",[t._v("对于核心的服务中心，去除dubbo超时重试机制，并重新评估设置超时时间。 业务处理代码必须放在服务端，客户端只做参数验证和服务调用，不涉及业务流程处理 全局配置实例")]),t._v(" "),a("p",[a("img",{attrs:{src:"https://mmbiz.qpic.cn/mmbiz_png/SJm51egHPPGpazuQ3ZmxaSICk99dzD8Oia4ctfYo2SIzOvQD3jgQWGss5KTUPqZpBVcsHSP75FZLCqpHesLBOicw/640?wx_fmt=png&tp=webp&wxfrom=5&wx_lazy=1&wx_co=1",alt:"img"}})]),t._v(" "),a("p",[t._v("当然Dubbo的重试机制其实是非常好的QOS保证，它的路由机制，是会帮你把超时的请求路由到其他机器上，而不是本机尝试，所以 dubbo的重试机器也能一定程度的保证服务的质量。但是请一定要综合线上的访问情况，给出综合的评估。")]),t._v(" "),a("p",[a("strong",[t._v("19、dubbo和SpringCloud的区别")])]),t._v(" "),a("p",[t._v("最大区别:")]),t._v(" "),a("p",[t._v("（1）Spring Cloud抛弃了RPC通讯，采用基于HTTP的REST方式。Spring Cloud牺牲了服务调用的性能，但是同时也避免了原生RPC带来的问题。REST比RPC更为灵活，不存在代码级别的强依赖，在强调快速演化")]),t._v(" "),a("p",[t._v("的微服务环境下，显然更合适。")]),t._v(" "),a("p",[t._v("（2）Dubbo像组装机，Spring Cloud像一体机")]),t._v(" "),a("p",[t._v("（3）社区的支持与力度：Dubbo曾经停运了5年，虽然重启了，但是对于技术发展的新需求，还是需要开发者自行去拓展，对于中小型公司，显然显得比较费时费力，也不一定有强大的实力去修改源码")])])}),[],!1,null,null,null);s.default=e.exports}}]);