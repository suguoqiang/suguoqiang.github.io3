(window.webpackJsonp=window.webpackJsonp||[]).push([[104],{599:function(t,s,a){"use strict";a.r(s);var n=a(6),e=Object(n.a)({},(function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("blockquote",[a("p",[t._v("严格意义上讲，redis事物不支持 原子性和持久性（A和D），只支持隔离性和一致性（I和C）。这里的原子性指的是redis的事物操作，不支持事物的回滚，但redis是单线程模型，其本身的普通操作就是原子性的。")])]),t._v(" "),a("h3",{attrs:{id:"通过multi开启事物-然后命令入列-exec结束事物"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#通过multi开启事物-然后命令入列-exec结束事物"}},[t._v("#")]),t._v(" 通过MULTI开启事物，然后命令入列，EXEC结束事物")]),t._v(" "),a("p",[t._v("1、命令行操作：")]),t._v(" "),a("div",{staticClass:"language-shell extra-class"},[a("pre",{pre:!0,attrs:{class:"language-shell"}},[a("code",[a("span",{pre:!0,attrs:{class:"token number"}},[t._v("127.0")]),t._v(".0.1:637"),a("span",{pre:!0,attrs:{class:"token operator"}},[a("span",{pre:!0,attrs:{class:"token file-descriptor important"}},[t._v("9")]),t._v(">")]),t._v(" MULTI\nOK\n"),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("127.0")]),t._v(".0.1:637"),a("span",{pre:!0,attrs:{class:"token operator"}},[a("span",{pre:!0,attrs:{class:"token file-descriptor important"}},[t._v("9")]),t._v(">")]),t._v(" SET Book_Name "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"GIt Pro"')]),t._v("\nQUEUED\n"),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("127.0")]),t._v(".0.1:637"),a("span",{pre:!0,attrs:{class:"token operator"}},[a("span",{pre:!0,attrs:{class:"token file-descriptor important"}},[t._v("9")]),t._v(">")]),t._v(" SADD Program_Language "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"C++"')]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"C#"')]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"Jave"')]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"Python"')]),t._v(" \nQUEUED\n"),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("127.0")]),t._v(".0.1:637"),a("span",{pre:!0,attrs:{class:"token operator"}},[a("span",{pre:!0,attrs:{class:"token file-descriptor important"}},[t._v("9")]),t._v(">")]),t._v(" GET Book_Name\nQUEUED\n"),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("127.0")]),t._v(".0.1:637"),a("span",{pre:!0,attrs:{class:"token operator"}},[a("span",{pre:!0,attrs:{class:"token file-descriptor important"}},[t._v("9")]),t._v(">")]),t._v(" EXEC\n"),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" OK\n"),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("2")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("integer"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("4")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("3")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"GIt Pro"')]),t._v("\n")])])]),a("p",[t._v("2、java代码：")]),t._v(" "),a("div",{staticClass:"language-java extra-class"},[a("pre",{pre:!0,attrs:{class:"language-java"}},[a("code",[a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//Transaction transaction = jedis.multi();")]),t._v("\nredisTemplate"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("multi")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\nredisTemplate"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("lpush")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"key"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"11"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\nredisTemplate"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("lpush")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"key"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"22"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("  \nredisTemplate"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("lpush")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"key"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"33"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\nredisTemplate"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("exec")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])]),a("p",[t._v("注意一定要在配置文件中，开启事物：")]),t._v(" "),a("div",{staticClass:"language-java extra-class"},[a("pre",{pre:!0,attrs:{class:"language-java"}},[a("code",[a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("RedisTemplate")]),a("span",{pre:!0,attrs:{class:"token generics"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("String")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Object")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v(" template "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("new")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("RedisTemplate")]),a("span",{pre:!0,attrs:{class:"token generics"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("/** 开启事务*/")]),t._v("\ntemplate"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("setEnableTransactionSupport")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token boolean"}},[t._v("true")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])]),a("blockquote",[a("p",[t._v("如果客户端在使用 "),a("code",[t._v("MULTI")]),t._v(" 开启了一个事务之后，却因为断线而没有成功执行 "),a("code",[t._v("EXEC")]),t._v(" ，则Redis会清空事务队列，那么事务中的所有命令都不会被执行。\n另一方面，如果客户端成功在开启事务之后执行 "),a("code",[t._v("EXEC")]),t._v(" ，那么事务中的所有命令都会被执行。")])]),t._v(" "),a("blockquote",[a("p",[t._v("通过调用 "),a("code",[t._v("DISCARD")]),t._v(" ， 客户端可以清空事务队列， 并放弃执行事务。")])]),t._v(" "),a("p",[t._v("最后同样重要的是：\n1.如果 Redis 事务里的一条命令出现了语法错误，不执行任何操作，直接 "),a("code",[t._v("discard")]),t._v(" 退出事物。\n2.如果 Redis 事务里的一条命令出现了运行错误，事务里其他的命令依然会继续执行（包括出错命令之后的命令）。")]),t._v(" "),a("p",[t._v("所以 redis 中的事物不满足原子性，只满足隔离性，redis 是以更简单、更快速的无回滚方式来处理事务的。出现运行时错误时，要想实现回滚，只能通过手动操作来恢复之前的状态。")]),t._v(" "),a("h3",{attrs:{id:"watch-命令可以为-redis-事务提供-check-and-set-cas-行为-实现乐观锁-避免竞争和碰撞-。"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#watch-命令可以为-redis-事务提供-check-and-set-cas-行为-实现乐观锁-避免竞争和碰撞-。"}},[t._v("#")]),t._v(" WATCH 命令可以为 Redis 事务提供 check-and-set （CAS）行为（实现乐观锁，避免竞争和碰撞）。")]),t._v(" "),a("p",[t._v("可处理的情况：有些情况下需要先获得一条命令的返回值，然后再根据这个值执行下一条命令。")]),t._v(" "),a("p",[t._v("1."),a("code",[t._v("WATCH")]),t._v(" 使得 "),a("code",[t._v("EXEC")]),t._v(" 命令需要有条件地执行： 事务只能在所有被监视键都没有被修改的前提下执行， 如果这个前提不能满足的话，事务就不会被执行。\n2.如果你使用 "),a("code",[t._v("WATCH")]),t._v(" 监视了一个带过期时间的键， 那么即使这个键过期了， 事务仍然可以正常执行。\n3."),a("code",[t._v("WATCH")]),t._v(" 命令可以被调用多次。 对键的监视从 "),a("code",[t._v("WATCH")]),t._v(" 执行之后开始生效， 直到调用 "),a("code",[t._v("EXEC")]),t._v(" 为止，不管事物成功与否。当然客户端断开连接,监视也会被取消。\n4.用户还可以在单个 "),a("code",[t._v("WATCH")]),t._v(" 命令中监视任意多个键。\n5.使用无参数的 "),a("code",[t._v("UNWATCH")]),t._v(" 命令可以手动取消对所有键的监视。")])])}),[],!1,null,null,null);s.default=e.exports}}]);