(window.webpackJsonp=window.webpackJsonp||[]).push([[40],{443:function(t,a,s){"use strict";s.r(a);var e=s(44),r=Object(e.a)({},(function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[s("h1",{attrs:{id:"在html中遇到好的问题和一些基本的问题"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#在html中遇到好的问题和一些基本的问题"}},[t._v("#")]),t._v(" 在html中遇到好的问题和一些基本的问题")]),t._v(" "),s("h2",{attrs:{id:"html语义化"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#html语义化"}},[t._v("#")]),t._v(" html语义化")]),t._v(" "),s("p",[t._v("什么是语义化？ 用人话讲就是用合理正确的标签来展示内容，比如h1~h6表示标题")]),t._v(" "),s("p",[t._v("好处有：")]),t._v(" "),s("ol",[s("li",[s("p",[t._v("易于代码维护，样式丢失的时候能够让页面具有清晰的解构")])]),t._v(" "),s("li",[s("p",[t._v("利于SEO，搜索引擎根据标签来确定上下文和各个关键字的权重")])]),t._v(" "),s("li",[s("p",[t._v("方便其他设备解析，如盲人阅读器根据语义渲染网页")])]),t._v(" "),s("li",[s("p",[t._v("有利于开发和维护，语义话更具可读性，代码更好维护，与CSS3关系更和谐")])])]),t._v(" "),s("h2",{attrs:{id:"doctype有什么用"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#doctype有什么用"}},[t._v("#")]),t._v(" doctype有什么用")]),t._v(" "),s("p",[t._v("doctype是一种标准通用标记语言的文档类型声明，目的是告诉标准通用标记语言解析器要使用什么样的文档类型来定义解析文档")]),t._v(" "),s("p",[t._v("声明是用来指示web浏览器关于页面使用哪个html版本进行编写的指令，必须在文档的第一行，位于html标签之前")]),t._v(" "),s("p",[t._v("浏览器本身分为两种模式：标准模式和怪异模式，浏览器通过doctype来区分这两种模式，如果没有doctype浏览器就会进入怪异模式，在这个模式下面，样式和标准模式存在差异，而dom标准和html标准规定标准模式下的行为，没有对怪异模式的规定，所以不同浏览器在怪异模式下面的的处理是不同的")]),t._v(" "),s("h2",{attrs:{id:"css引入和js引入"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#css引入和js引入"}},[t._v("#")]),t._v(" css引入和js引入")]),t._v(" "),s("p",[t._v("为什么最好把"),s("code",[t._v("<link>")]),t._v("标签放在head之间？为什么最好"),s("code",[t._v("<script>")]),t._v("放在"),s("code",[t._v("</body>")])]),t._v(" "),s("ol",[s("li",[s("p",[t._v("把link标签放在head之间是规范要求的内容，如果不放在头部，一旦浏览器阻止渲染，会发生空白页面或者没有样式的内容")])]),t._v(" "),s("li",[s("p",[t._v("script脚本在下载和执行期间会阻止html解析，把script放在底部，保证html首先完成解析，将页面尽早呈现给用户")])])]),t._v(" "),s("h2",{attrs:{id:"渐进式渲染"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#渐进式渲染"}},[t._v("#")]),t._v(" 渐进式渲染")]),t._v(" "),s("p",[t._v("渐进式渲染适用于提高网页性能（特别是用户感知的加载速度），以尽快呈现页面的技术")]),t._v(" "),s("p",[t._v("在早之前的互联网带宽较小的时代里面，渐进式的技术可想而知需求很大，当下在移动端网络不稳定的情况下面也是有必要的")]),t._v(" "),s("p",[t._v("eg:")]),t._v(" "),s("ol",[s("li",[s("p",[t._v("图片懒加载技术")])]),t._v(" "),s("li",[s("p",[t._v("确定显示内容的优先级（分层次渲染）------为了尽快将页面呈现用户，页面只包含基本的最少量的css、脚本和内容，这一块像vue这样的框架已经做的比较完善了，但是在vue中有时候因为样式过多首次加载较慢的情况可以在webpack中配置（"),s("font",{attrs:{color:"red"}},[t._v("纠正：这样并不会增加首屏加载速度"),s("a",{attrs:{href:"https://cli.vuejs.org/zh/guide/html-and-static-assets.html#preload",target:"_blank",rel:"noopener noreferrer"}},[t._v("原文"),s("OutboundLink")],1)]),t._v("）")],1)])]),t._v(" "),s("div",{staticClass:"language-js line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-js"}},[s("code",[s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 移除 prefetch 插件")]),t._v("\nconfig"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("plugins"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("delete")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'prefetch'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 移除 preload 插件")]),t._v("\nconfig"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("plugins"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("delete")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'preload'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n")])]),t._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[t._v("1")]),s("br"),s("span",{staticClass:"line-number"},[t._v("2")]),s("br"),s("span",{staticClass:"line-number"},[t._v("3")]),s("br"),s("span",{staticClass:"line-number"},[t._v("4")]),s("br")])]),s("h2",{attrs:{id:"reflow和repaint"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#reflow和repaint"}},[t._v("#")]),t._v(" reflow和repaint")]),t._v(" "),s("ol",[s("li",[s("p",[t._v("reflow：当涉及到dom节点的布局属性发生变化时候，就会重新计算属性，浏览器会重新描绘相应的元素，此过程叫做reflow（回流或重排）")])]),t._v(" "),s("li",[s("p",[t._v("repaint：当影响dom元素的可见性的属性发生变化的时候（eg：color、font），浏览器会重新描绘相应的元素，此过程叫做repaint（重绘），因此重排必然会引起重绘")])])]),t._v(" "),s("p",[t._v("eg： 会引起reflow和repaint的一些操作")]),t._v(" "),s("ul",[s("li",[t._v("窗口大小变化")]),t._v(" "),s("li",[t._v("字体大小变化")]),t._v(" "),s("li",[t._v("样式表变化")]),t._v(" "),s("li",[t._v("元素内容变化，尤其是输入控件")]),t._v(" "),s("li",[t._v("css伪类变化，在交互中是必然会发生")]),t._v(" "),s("li",[t._v("所有的dom操作")]),t._v(" "),s("li",[t._v("width、clientWidth、scrollTop等布局高度的重新计算")])]),t._v(" "),s("p",[t._v("如何在研发的过程注意这些点")]),t._v(" "),s("ol",[s("li",[s("p",[t._v("不要逐条行内样式修改，使用className")])]),t._v(" "),s("li",[s("p",[t._v("避免频繁操作dom特别是在jq时代")])]),t._v(" "),s("li",[s("p",[t._v("不要频繁读取元素的集合属性，但是如果交互确实需要去做的时候也没有办法（我自己认为的哈）")])]),t._v(" "),s("li",[s("p",[t._v("绝对定位的脱离文档流，避免引起父元素以及后续元素大量的回流（特别在元素的拖动中）")])])]),t._v(" "),s("h2",{attrs:{id:"href和src的区别"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#href和src的区别"}},[t._v("#")]),t._v(" href和src的区别")]),t._v(" "),s("ol",[s("li",[s("p",[t._v("href标识超文本引用，用在link和a等元素上，href是引用和页面关联，是在当前元素和引用资源之间建立联系；css中的href是可以并行下载的并且不会停止当前对文档的处理，所以会推荐用link引入css为不是@import")])]),t._v(" "),s("li",[s("p",[t._v("scr标识引入资源，在img、script、iframe上是必不可少的一部分；scr会暂停其他的卸载和处理（图片不会暂停其他下载），直到该资源加载、编译、执行完成，这就是为什么建议把js脚本放在底部而不是头部")])])]),t._v(" "),s("h2",{attrs:{id:"浏览器的渲染过程"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#浏览器的渲染过程"}},[t._v("#")]),t._v(" 浏览器的渲染过程")]),t._v(" "),s("ol",[s("li",[t._v("DNS的查询")]),t._v(" "),s("li",[t._v("TCP的连接")]),t._v(" "),s("li",[t._v("HTTP请求即相应")]),t._v(" "),s("li",[t._v("服务端相应")]),t._v(" "),s("li",[t._v("客户端渲染")])]),t._v(" "),s("p",[t._v("渲染过程如下：")]),t._v(" "),s("ol",[s("li",[t._v("解析html生成dom树")]),t._v(" "),s("li",[t._v("解析css生成cssom树")]),t._v(" "),s("li",[t._v("将dom树和cssom树规则合并在一起生成渲染树")]),t._v(" "),s("li",[t._v("遍历渲染树开始布局，计算每一个节点的位置信息等")]),t._v(" "),s("li",[t._v("将渲染树每个节点绘制到屏幕")])]),t._v(" "),s("h2",{attrs:{id:"iframe框架优缺点"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#iframe框架优缺点"}},[t._v("#")]),t._v(" iframe框架优缺点")]),t._v(" "),s("p",[t._v("优点：")]),t._v(" "),s("ol",[s("li",[s("p",[t._v("iframe能够100%保证嵌入的网页展示")])]),t._v(" "),s("li",[s("p",[t._v("如果多个网页引入iframe，那么你只需要修改iframe的内容，就可以实现调用的每一个页面内容的修改，方便快捷（有点组件的感觉哈）")])]),t._v(" "),s("li",[s("p",[t._v("组件化的使用，头部和尾部的使用")])]),t._v(" "),s("li",[s("p",[t._v("遇到第三方插件加载缓慢的时候可以使用iframe")])])]),t._v(" "),s("p",[t._v("缺点：")]),t._v(" "),s("ol",[s("li",[s("p",[t._v("搜索引擎无法解读iframe里面的页面内容")])]),t._v(" "),s("li",[s("p",[t._v("滚动条的混乱")])]),t._v(" "),s("li",[s("p",[t._v("使用框架架构时，保证正确的导航链接")])]),t._v(" "),s("li",[s("p",[t._v("iframe页面会增加服务器的http请求")])])]),t._v(" "),s("p",[t._v("使用iframe怎么说呢？我一般是能不用就不用的，但是有些时候又是必须要去使用的")]),t._v(" "),s("h2",{attrs:{id:"label标签作用和使用"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#label标签作用和使用"}},[t._v("#")]),t._v(" label标签作用和使用")]),t._v(" "),s("p",[t._v("label标签通常是写在表单内，他关联一个控件，使用label可以实现点击文字选取对应的控件")]),t._v(" "),s("div",{staticClass:"language-html line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-html"}},[s("code",[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("input")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("type")]),s("span",{pre:!0,attrs:{class:"token attr-value"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("=")]),t._v("checkbox")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("id")]),s("span",{pre:!0,attrs:{class:"token attr-value"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("=")]),t._v("test")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("label")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("for")]),s("span",{pre:!0,attrs:{class:"token attr-value"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),t._v("test"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("test"),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("label")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n")])]),t._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[t._v("1")]),s("br"),s("span",{staticClass:"line-number"},[t._v("2")]),s("br")])]),s("h2",{attrs:{id:"dom和bom的区别"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#dom和bom的区别"}},[t._v("#")]),t._v(" DOM和BOM的区别")]),t._v(" "),s("ol",[s("li",[s("p",[t._v("dom是文档对象模型，dom是为了操作文档出现的API，document是其的一个对象，dom和文档有关，此处的文档指的是网页，也就是html文档，dom和浏览器无关，他关注的是网页本身的内容")])]),t._v(" "),s("li",[s("p",[t._v("bom是浏览器的对象模型，bom是为了操作浏览器出现的API，window是其的一个对象，window对象即为js访问浏览器的API，同时在ECMAScript中充当Global对象")])])]),t._v(" "),s("back-to-top")],1)}),[],!1,null,null,null);a.default=r.exports}}]);