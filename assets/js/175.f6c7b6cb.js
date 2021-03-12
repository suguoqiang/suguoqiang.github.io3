(window.webpackJsonp=window.webpackJsonp||[]).push([[175],{669:function(a,t,s){"use strict";s.r(t);var r=s(6),n=Object(r.a)({},(function(){var a=this,t=a.$createElement,s=a._self._c||t;return s("ContentSlotsDistributor",{attrs:{"slot-key":a.$parent.slotKey}},[s("h3",{attrs:{id:"java中常见类-方法和变量"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#java中常见类-方法和变量"}},[a._v("#")]),a._v(" Java中常见类，方法和变量")]),a._v(" "),s("p",[a._v('（1）数组中没有length()方法，它只有length属性。字符串中有length()方法，集合中没有length()方法，用size()方法获取集合中元素的数量。\n（2）字符串变量（str1, str2...）相加，先开辟空间，再相加。字符串常量(如"ab", "122"...)相加，首先在字符串常量池中找，判断有没有这个常量值， 则需要创建；有的话，则直接返回。字符串相加，推荐使用StringBuffer。\n（3）编码与解码格式一样（默认为GBK格式，一个中文对应两个字节。'),s("strong",[a._v("utf-8编码，一个汉字对应三个字节")]),a._v("）。\n（4）静态代码块 ，构造代码块，构造方法的优先级:静态代码块>构造代码块>构造方法...\n（5）StringBuffer和数组的区别：都属于容器类型的变量，数组只能存储一种类型的数据，并且长度是固定的，StringBuffer可以存储任意类型的元素。\n（6）从键盘上输入字符："),s("code",[a._v("Scanner scan = new Scanner(System.in); String str = scan.nextLine();")])]),a._v(" "),s("h4",{attrs:{id:"run-和start-的区别"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#run-和start-的区别"}},[a._v("#")]),a._v(" run()和start()的区别")]),a._v(" "),s("p",[a._v("run()和start()方法都是Thread类的方法，但是Thread.run()是调用方法执行，而 Thread.start()是启动一个新的线程；")]),a._v(" "),s("h4",{attrs:{id:"堆和栈的存储"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#堆和栈的存储"}},[a._v("#")]),a._v(" 堆和栈的存储")]),a._v(" "),s("p",[a._v("类中的成员变量，存放在堆区。方法中的局部变量，存放在栈区。")]),a._v(" "),s("ul",[s("li",[a._v("堆区：只存放类对象，线程共享；")]),a._v(" "),s("li",[a._v("方法区：又叫静态存储区，存放class文件和静态数据，线程共享;")]),a._v(" "),s("li",[a._v("栈区：存放方法局部变量，基本类型变量区、执行环境上下文、操作指令区，线程不共享;")])]),a._v(" "),s("h4",{attrs:{id:"jvm内存模型"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#jvm内存模型"}},[a._v("#")]),a._v(" JVM内存模型")]),a._v(" "),s("p",[a._v("jvm里面有两个存储区，一个是暂存区（是一个堆栈，以下称为堆栈），另一个是变量区。\n例子：")]),a._v(" "),s("div",{staticClass:"language-java extra-class"},[s("pre",{pre:!0,attrs:{class:"language-java"}},[s("code",[s("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("int")]),a._v(" i"),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),s("span",{pre:!0,attrs:{class:"token number"}},[a._v("0")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(";")]),a._v("\ni"),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),a._v("i"),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("++")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(";")]),a._v("\n"),s("span",{pre:!0,attrs:{class:"token function"}},[a._v("println")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("(")]),a._v("i"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(";")]),a._v("  "),s("span",{pre:!0,attrs:{class:"token comment"}},[a._v("//为0 ")]),a._v("\n")])])]),s("blockquote",[s("p",[a._v("JVM把 i值（其值是0）拷贝到临时变量区。 步骤2　i值加1，这时候 i 的值是1。 步骤3　返回临时变量区的值，注意这个值是0，没修改过。 步骤4　返回值赋值给i，此时 i 值被重置成0。 c/c++中没有另外设置一个临时变量或是临时空间来保存i，所有操作都是在一个内存空间中完成的，所以在c/c++中是1。")])]),a._v(" "),s("h4",{attrs:{id:"java内存区域"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#java内存区域"}},[a._v("#")]),a._v(" java内存区域")]),a._v(" "),s("p",[a._v("Java虚拟机在执行 Java 程序的过程中会把它管理的内存划分为若干个不同的数据区域。主要有：")]),a._v(" "),s("ul",[s("li",[a._v("程序计数器")]),a._v(" "),s("li",[a._v("Java虚拟机栈")]),a._v(" "),s("li",[a._v("本地方法栈")]),a._v(" "),s("li",[a._v("Java堆")]),a._v(" "),s("li",[a._v("方法区")])])])}),[],!1,null,null,null);t.default=n.exports}}]);