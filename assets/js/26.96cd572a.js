(window.webpackJsonp=window.webpackJsonp||[]).push([[26],{175:function(t,e,a){"use strict";a.r(e);var s=a(0),r=Object(s.a)({},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"content"},[t._m(0),t._v(" "),a("p",[t._v("本文由曹林华先生的"),a("a",{attrs:{href:"http://blog.51cto.com/13527416/2051506",target:"_blank",rel:"noopener noreferrer"}},[t._v("ELK系列文章"),a("OutboundLink")],1),t._v("搬运而来，旨在在搬运过程中学习ELK，仅为个人学习手册使用。")]),t._v(" "),t._m(1),t._v(" "),a("p",[t._v("作为中国最大的在线教育站点，目前沪江日志服务的用户包含网校，交易，金融，CCTalk 等多个部门的多个产品的日志搜索分析业务，每日产生的各类日志有好十几种，每天处理约10亿条（1TB）日志，热数据保留最近7天数据，冷数据永久保存。")]),t._v(" "),t._m(2),t._v(" "),t._m(3),t._v(" "),a("p",[t._v("通常日志由服务器生成，输出到不同的文件中，一般会有系统日志、 应用日志、安全日志。这些日志分散地存储在不同的机器上。")]),t._v(" "),a("p",[t._v("通常当系统发生故障时，工程师需要登录到各个服务器上，使用 grep / sed / awk 等 Linux 脚本工具去日志里查找故障原因。在没有日志系统的情况下，首先需要定位处理请求的服务器，如果这台服务器部署了多个实例，则需要去每个应用实例的日志目录下去找日志文件。每个应用实例还会设置日志滚动策略（如：每天生成一个文件），还有日志压缩归档策略等。")]),t._v(" "),a("p",[t._v("这样一系列流程下来，对于我们排查故障以及及时找到故障原因，造成了比较大的麻烦。因此，如果我们能把这些日志集中管理，并提供集中检索功能，不仅可以提高诊断的效率，同时对系统情况有个全面的理解，避免事后救火的被动。")]),t._v(" "),a("p",[t._v("我认为，日志数据在以下几方面具有非常重要的作用：")]),t._v(" "),t._m(4),t._v(" "),a("p",[t._v("针对这些问题，为了提供分布式的实时日志搜集和分析的监控系统，我们采用了业界通用的日志数据管理解决方案 - 它主要包括 Elasticsearch 、 Logstash 和 Kibana 三个系统。通常，业界把这套方案简称为ELK，取三个系统的首字母，但是我们实践之后将其进一步优化为EFK，F代表Filebeat，用以解决Logstash导致的问题。下面，我们展开详细介绍。")]),t._v(" "),a("p",[t._v("文中涉及的 ELK stack 版本是：")]),t._v(" "),t._m(5),t._m(6),t._v(" "),t._m(7),t._v(" "),t._m(8),t._v(" "),t._m(9),t._v(" "),t._m(10),t._v(" "),a("p",[t._v("既然要谈 ELK 在沪江系统中的应用，那么 ELK 架构就不得不谈。本次分享主要列举我们曾经用过的 ELK 架构，并讨论各种架构所适合的场景和优劣供大家参考")]),t._v(" "),t._m(11),t._v(" "),t._m(12),t._v(" "),a("p",[t._v("这种架构下我们把 Logstash 实例与 Elasticsearch 实例直接相连。Logstash 实例直接通过 Input 插件读取数据源数据(比如 Java 日志， Nginx 日志等)，经过 Filter 插件进行过滤日志，最后通过 Output 插件将数据写入到 ElasticSearch 实例中。")]),t._v(" "),a("p",[t._v("这个阶段，日志的收集、过滤、输出等功能，主要由这三个核心组件组成 Input 、Filter、Output")]),t._v(" "),t._m(13),t._v(" "),a("p",[a("strong",[t._v("Filter")]),t._v("：过滤，将日志输出成我们想要的格式。Logstash 存在丰富的过滤插件：Grok 正则捕获、时间处理、JSON 编解码、数据修改 Mutate 。Grok 是 Logstash 中最重要的插件，强烈建议每个人都要使用 "),a("a",{attrs:{href:"https://grokdebug.herokuapp.com/",target:"_blank",rel:"noopener noreferrer"}},[t._v("Grok Debugger"),a("OutboundLink")],1),t._v(" 来调试自己的 Grok 表达式")]),t._v(" "),t._m(14),t._m(15),t._v(" "),a("p",[t._v("这是最简单的一种ELK架构方式，Logstash 实例直接与 Elasticsearch 实例连接。优点是搭建简单，易于上手。建议供初学者学习与参考，不能用于线上的环境。")]),t._v(" "),t._m(16),t._v(" "),t._m(17),t._v(" "),a("p",[t._v("这种架构下我们采用多个 Elasticsearch 节点组成 Elasticsearch 集群，由于 Logstash 与 Elasticsearch 采用集群模式运行，集群模式可以避免单实例压力过重的问题，同时在线上各个服务器上部署 Logstash Agent，来满足数据量不大且可靠性不强的场景。")]),t._v(" "),t._m(18),t._v(" "),t._m(19),t._v(" "),t._m(20),t._v(" "),a("p",[t._v("这种架构使用场景非常有限，主要存在以下两个问题")]),t._v(" "),t._m(21),t._v(" "),a("p",[t._v("这个架构相对上个版本略微复杂，不过维护起来同样比较方便，同时可以满足数据量不大且可靠性不强的业务使用。")]),t._v(" "),t._m(22),t._v(" "),t._m(23),t._v(" "),a("p",[t._v("该场景下面，多个数据首先通过 Lostash Shipper Agent 来收集数据，然后经过 Output 插件将数据投递到 Kafka 集群中，这样当遇到 Logstash 接收数据的能力超过 Elasticsearch 集群处理能力的时候，就可以通过队列就能起到削峰填谷的作用， Elasticsearch 集群就不存在丢失数据的问题。")]),t._v(" "),a("p",[t._v("目前业界在日志服务场景中，使用比较多的两种消息队列为 ：Kafka VS Redis。尽管 ELK Stack 官网建议使用 Redis 来做消息队列，但是我们建议采用 Kafka 。主要从下面两个方面考虑:")]),t._v(" "),t._m(24),t._v(" "),a("p",[t._v("综合上述的理由，我们决定采用 Kafka 来缓冲队列。不过在这种架构下仍然存在一系列问题")]),t._v(" "),t._m(25),t._v(" "),a("p",[t._v("这种架构适合较大集群的应用部署，通过消息队列解决了消息丢失、网络堵塞的问题。")]),t._v(" "),t._m(26),t._v(" "),t._m(27),t._v(" "),a("p",[t._v("随着沪江业务的飞速增长，单机房的架构已经不能满足需求。不可避免的，沪江的业务需要分布到不同机房中，对于日志服务来说也是不小的挑战。当然业界也有不少成熟的方法，比如阿里的单元化、腾讯的 SET 方案等等。单元化在这边不详细展开，大家可以参考微博的"),a("a",{attrs:{href:"http://www.infoq.com/cn/articles/how-weibo-do-unit-architecture",target:"_blank",rel:"noopener noreferrer"}},[t._v("【单元化架构】"),a("OutboundLink")],1)]),t._v(" "),a("p",[t._v("最终我们决定采用单元化部署的方式来解决 ELK 多机房中遇到的问题(延时、专线流量过大等)，从日志的产生、收集、传输、存储、展示都是在同机房里面闭环消化，不存在跨机房传输与调用的问题。因为交互紧密的应用尽量部署在同机房，所以这种方案并不会给业务查询造成困扰。")]),t._v(" "),a("p",[t._v("Logstash、Elasticsearch、Kafka、Kibana 四个集群都部署到同一机房中，每个机房都要每个机房自己的日志服务集群，比如A机房业务的日志只能传输给本机房 Kafka ，而A机房 Indexer 集群消费并写入到A机房 Elasticsearch 集群中，并由A机房 Kibana 集群展示，中间任何一个步骤不依赖B机房任何服务。")]),t._v(" "),t._m(28),t._v(" "),t._m(29),t._v(" "),a("p",[t._v("Filebeat 是基于原先 logstash-forwarder 的源码改造出来的，无需依赖 Java 环境就能运行，安装包10M不到。")]),t._v(" "),a("p",[t._v("如果日志的量很大，Logstash 会遇到资源占用高的问题，为解决这个问题，我们引入了Filebeat。Filebeat 是基于 logstash-forwarder 的源码改造而成，用 Golang 编写，无需依赖 Java 环境，效率高，占用内存和 CPU 比较少，非常适合作为 Agent 跑在服务器上。")]),t._v(" "),a("p",[t._v("下面看看Filebeat的基本用法。编写配置文件，从 Nginx access.log 中解析日志数据")]),t._v(" "),t._m(30),a("p",[t._v("我们来看看压测数据")]),t._v(" "),t._m(31),t._v(" "),t._m(32),t._v(" "),t._m(33),t._v(" "),a("p",[t._v("Logstash / Filebeat 读取 350W 条日志 到 console，单行数据 580B，8个进程写入采集文件")]),t._v(" "),t._m(34),t._v(" "),t._m(35),t._v(" "),a("p",[t._v("Filebeat 所消耗的CPU只有 Logstash 的70%，但收集速度为 Logstash 的7倍。从我们的应用实践来看，Filebeat 确实用较低的成本和稳定的服务质量，解决了 Logstash 的资源消耗问题。")]),t._v(" "),a("p",[t._v("最后，分享给大家一些血泪教训，希望大家以我为鉴。")]),t._v(" "),t._m(36),t._v(" "),a("p",[t._v("突然有一天监控发现日志不消费了，排查下来发现消费Kafka数据的indexer 挂掉了。所以，Indexer 进程也是需要用 supervisor 来监控的，保证它时刻都在运行。")]),t._v(" "),t._m(37),t._v(" "),t._m(38),t._v(" "),t._m(39),t._m(40),t._v(" "),a("p",[t._v("Logstash 2.3版本 date插件配置如下，查看解析结果发现@timestamp比中国时间早了8小时。")]),t._v(" "),a("p",[t._v("解决方案 Kibana 读取浏览器的当前时区，然后在页面上转换时间内容的显示。")]),t._v(" "),t._m(41),t._m(42),t._v(" "),a("p",[t._v("我们遇到线上node日志突然有几天日志查看不出来。后来拉出原始日志对比才发现生成出来的日志格式不正确，同时包含 JSON 格式和非 JSON格式的日志。但是我们用grok解析的时候采用是json格式。建议大家输出日志保证格式一致同时不要出现空格等异常字符，可以使用在线grok debug ("),a("a",{attrs:{href:"http://grokdebug.herokuapp.com/",target:"_blank",rel:"noopener noreferrer"}},[t._v("http://grokdebug.herokuapp.com/"),a("OutboundLink")],1),t._v(") 来调试正则。")]),t._v(" "),t._m(43),t._v(" "),a("p",[t._v("基于 ELK stack 的日志解决方案的优势主要体现于")]),t._v(" "),t._m(44),t._v(" "),t._m(45),t._v(" "),t._m(46),t._v(" "),a("ul",[a("li",[a("a",{attrs:{href:"https://www.elastic.co/guide/en/beats/filebeat/1.3/filebeat-overview.html",target:"_blank",rel:"noopener noreferrer"}},[t._v("https://www.elastic.co/guide/en/beats/filebeat/1.3/filebeat-overview.html"),a("OutboundLink")],1)]),t._v(" "),a("li",[a("a",{attrs:{href:"https://zhuanlan.zhihu.com/p/26399963",target:"_blank",rel:"noopener noreferrer"}},[t._v("https://zhuanlan.zhihu.com/p/26399963"),a("OutboundLink")],1)])])])},[function(){var t=this.$createElement,e=this._self._c||t;return e("h1",{attrs:{id:"从-elk-到-efk-演进"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#从-elk-到-efk-演进","aria-hidden":"true"}},[this._v("#")]),this._v(" 从 ELK 到 EFK 演进")])},function(){var t=this.$createElement,e=this._self._c||t;return e("h2",{attrs:{id:"背景"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#背景","aria-hidden":"true"}},[this._v("#")]),this._v(" 背景")])},function(){var t=this.$createElement,e=this._self._c||t;return e("h2",{attrs:{id:"为什么做日志系统"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#为什么做日志系统","aria-hidden":"true"}},[this._v("#")]),this._v(" 为什么做日志系统")])},function(){var t=this.$createElement,e=this._self._c||t;return e("blockquote",[e("p",[this._v("首先，什么是日志？ "),e("strong",[this._v("日志就是程序产生的，遵循一定格式（通常包含时间戳）的文本数据")])])])},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("ul",[a("li",[a("strong",[t._v("数据查找")]),t._v("：通过检索日志信息，定位相应的 bug ，找出解决方案")]),t._v(" "),a("li",[a("strong",[t._v("服务诊断")]),t._v("：通过对日志信息进行统计、分析，了解服务器的负荷和服务运行状态")]),t._v(" "),a("li",[a("strong",[t._v("数据分析")]),t._v("：可以做进一步的数据分析，比如根据请求中的课程 id ，找出 TOP10 用户感兴趣课程。")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[this._v("Elasticsearch 5.2.2\nLogstash 5.2.2\nKibana 5.2.2\nFilebeat 5.2.2\nKafka 2.10\n")])])])},function(){var t=this.$createElement,e=this._self._c||t;return e("p",[e("img",{attrs:{src:"http://i2.51cto.com/images/blog/201712/17/ce3fc0b3122000e8105265c35789538e.png?x-oss-process=image/watermark,size_16,text_QDUxQ1RP5Y2a5a6i,color_FFFFFF,t_100,g_se,x_10,y_10,shadow_90,type_ZmFuZ3poZW5naGVpdGk=",alt:"从 ELK 到 EFK 演进"}})])},function(){var t=this.$createElement,e=this._self._c||t;return e("p",[e("strong",[this._v("Logstash")]),this._v(" ：数据收集处理引擎。支持动态的从各种数据源搜集数据，并对数据进行过滤、分析、丰富、统一格式等操作，然后存储以供后续使用。")])},function(){var t=this.$createElement,e=this._self._c||t;return e("p",[e("strong",[this._v("Kibana")]),this._v(" ：可视化化平台。它能够搜索、展示存储在 Elasticsearch 中索引数据。使用它可以很方便的用图表、表格、地图展示和分析数据。")])},function(){var t=this.$createElement,e=this._self._c||t;return e("p",[e("strong",[this._v("Elasticsearch")]),this._v(" ：分布式搜索引擎。具有高可伸缩、高可靠、易管理等特点。可以用于全文检索、结构化检索和分析，并能将这三者结合起来。Elasticsearch 基于 Lucene 开发，现在使用最广的开源搜索引擎之一，Wikipedia 、StackOverflow、Github 等都基于它来构建自己的搜索引擎。")])},function(){var t=this.$createElement,e=this._self._c||t;return e("p",[e("strong",[this._v("Filebeat")]),this._v(" ：轻量级数据收集引擎。基于原先 Logstash-fowarder 的源码改造出来。换句话说：Filebeat就是新版的 Logstash-fowarder，也会是 ELK Stack 在 shipper 端的第一选择。")])},function(){var t=this.$createElement,e=this._self._c||t;return e("h2",{attrs:{id:"简单版架构"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#简单版架构","aria-hidden":"true"}},[this._v("#")]),this._v(" 简单版架构")])},function(){var t=this.$createElement,e=this._self._c||t;return e("p",[e("img",{attrs:{src:"http://on-img.com/chart_image/59d9a58ce4b0ef561378d581.png",alt:"image"}})])},function(){var t=this.$createElement,e=this._self._c||t;return e("p",[e("strong",[this._v("Input")]),this._v("：输入，输入数据可以是 File 、 Stdin（直接从控制台输入） 、TCP、Syslog 、Redis 、Collectd 等")])},function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[this._v('grok {\n      match => ["message", "(?m)\\[%{LOGLEVEL:level}\\] \\[%{TIMESTAMP_ISO8601:timestamp}\\] \\[%{DATA:logger}\\] \\[%{DATA:threadId}\\] \\[%{DATA:requestId}\\] %{GREEDYDATA:msgRawData}"]\n    }\n')])])])},function(){var t=this.$createElement,e=this._self._c||t;return e("p",[e("strong",[this._v("Output")]),this._v("：输出，输出目标可以是 Stdout （直接从控制台输出）、Elasticsearch 、Redis 、TCP 、File 等")])},function(){var t=this.$createElement,e=this._self._c||t;return e("h2",{attrs:{id:"集群版架构"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#集群版架构","aria-hidden":"true"}},[this._v("#")]),this._v(" 集群版架构")])},function(){var t=this.$createElement,e=this._self._c||t;return e("p",[e("img",{attrs:{src:"http://on-img.com/chart_image/59dc7213e4b017b4197b402b.png",alt:"image"}})])},function(){var t=this.$createElement,e=this._self._c||t;return e("p",[e("strong",[this._v("数据收集端")]),this._v("：每台服务器上面部署 Logstash Shipper Agent 来收集当前服务器上日志，日志经过 Logstash Shipper 中 Input插件、Filter插件、Output 插件传输到 Elasticsearch 集群")])},function(){var t=this.$createElement,e=this._self._c||t;return e("p",[e("strong",[this._v("数据存储与搜索")]),this._v("：Elasticsearch 配置默认即可满足，同时我们看数据重要性来决定是否添加副本，如果需要的话，最多一个副本即可")])},function(){var t=this.$createElement,e=this._self._c||t;return e("p",[e("strong",[this._v("数据展示")]),this._v("：Kibana 可以根据 Elasticsearch 的数据来做各种各样的图表来直观的展示业务实时状况")])},function(){var t=this.$createElement,e=this._self._c||t;return e("ul",[e("li",[e("strong",[this._v("消耗服务器资源")]),this._v("：Logstash 的收集、过滤都在服务器上完成，这就造成服务器上占用系统资源较高、性能方面不是很好，调试、跟踪困难，异常处理困难")]),this._v(" "),e("li",[e("strong",[this._v("数据丢失")]),this._v("：大并发情况下，由于日志传输峰值比较大，没有消息队列来做缓冲，就会导致 Elasticsearch 集群丢失数据")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("h2",{attrs:{id:"引入消息队列"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#引入消息队列","aria-hidden":"true"}},[this._v("#")]),this._v(" 引入消息队列")])},function(){var t=this.$createElement,e=this._self._c||t;return e("p",[e("img",{attrs:{src:"http://on-img.com/chart_image/59c9fa8ce4b0ef5613754b6b.png",alt:"image"}})])},function(){var t=this.$createElement,e=this._self._c||t;return e("ul",[e("li",[e("strong",[this._v("数据丢失")]),this._v("：Redis 队列多用于实时性较高的消息推送，并不保证可靠。Kafka保证可靠但有点延时")]),this._v(" "),e("li",[e("strong",[this._v("数据堆积")]),this._v("：Redis 队列容量取决于机器内存大小，如果超过设置的Max memory，数据就会抛弃。Kafka 的堆积能力取决于机器硬盘大小。")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("ul",[e("li",[this._v("Logstash shipper 收集数据同样会消耗 CPU 和内存资源")]),this._v(" "),e("li",[this._v("不支持多机房部署")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("h2",{attrs:{id:"多机房部署"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#多机房部署","aria-hidden":"true"}},[this._v("#")]),this._v(" 多机房部署")])},function(){var t=this.$createElement,e=this._self._c||t;return e("p",[e("img",{attrs:{src:"http://on-img.com/chart_image/59d9bb57e4b0ef561378da2a.png",alt:"image"}})])},function(){var t=this.$createElement,e=this._self._c||t;return e("h2",{attrs:{id:"引入filebeat"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#引入filebeat","aria-hidden":"true"}},[this._v("#")]),this._v(" 引入Filebeat")])},function(){var t=this.$createElement,e=this._self._c||t;return e("p",[e("img",{attrs:{src:"http://on-img.com/chart_image/59d9ca40e4b0ef561378df53.png",alt:"image"}})])},function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[this._v('# filebeat.yml\nfilebeat.prospectors:\n- input_type: log\n  paths: /var/log/nginx/access.log\n  json.message_key:\n\noutput.elasticsearch:\n  hosts: ["localhost"]\n  index: "filebeat-nginx-%{+yyyy.MM.dd}"\n')])])])},function(){var t=this.$createElement,e=this._self._c||t;return e("h3",{attrs:{id:"压测环境"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#压测环境","aria-hidden":"true"}},[this._v("#")]),this._v(" 压测环境")])},function(){var t=this.$createElement,e=this._self._c||t;return e("ul",[e("li",[this._v("虚拟机 8 cores 64G内存 540G SATA盘")]),this._v(" "),e("li",[this._v("Logstash 版本 2.3.1")]),this._v(" "),e("li",[this._v("Filebeat 版本 5.5.0")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("h3",{attrs:{id:"压测方案"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#压测方案","aria-hidden":"true"}},[this._v("#")]),this._v(" 压测方案")])},function(){var t=this.$createElement,e=this._self._c||t;return e("h3",{attrs:{id:"压测结果"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#压测结果","aria-hidden":"true"}},[this._v("#")]),this._v(" 压测结果")])},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("table",[a("thead",[a("tr",[a("th",[t._v("项目")]),t._v(" "),a("th",[t._v("workers")]),t._v(" "),a("th",[t._v("cpu usr")]),t._v(" "),a("th",[t._v("总共耗时")]),t._v(" "),a("th",[t._v("收集速度")])])]),t._v(" "),a("tbody",[a("tr",[a("td",[t._v("Logstash")]),t._v(" "),a("td",[t._v("8")]),t._v(" "),a("td",[t._v("53.7%")]),t._v(" "),a("td",[t._v("210s")]),t._v(" "),a("td",[t._v("1.6w line/s")])]),t._v(" "),a("tr",[a("td",[t._v("Filebeat")]),t._v(" "),a("td",[t._v("8")]),t._v(" "),a("td",[t._v("38.0%")]),t._v(" "),a("td",[t._v("30s")]),t._v(" "),a("td",[t._v("11w line/s")])])])])},function(){var t=this.$createElement,e=this._self._c||t;return e("h4",{attrs:{id:"_1-indexer-运行一段时间后自动挂掉"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_1-indexer-运行一段时间后自动挂掉","aria-hidden":"true"}},[this._v("#")]),this._v(" 1. Indexer 运行一段时间后自动挂掉")])},function(){var t=this.$createElement,e=this._self._c||t;return e("h4",{attrs:{id:"_2-java异常日志输出"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_2-java异常日志输出","aria-hidden":"true"}},[this._v("#")]),this._v(" 2. Java异常日志输出")])},function(){var t=this.$createElement,e=this._self._c||t;return e("p",[this._v("开始我们在通过 grok 切割日志的时候，发现Java 的 Exception 日志输出之后，会出现换行的问题。后来使用 Logstash "),e("strong",[this._v("codec/multiline")]),this._v(" 插件来解决。")])},function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[this._v('input {\n    stdin {\n        codec => multiline {\n            pattern => "^\\["\n            negate => true\n            what => "previous"\n        }\n    }\n}\n')])])])},function(){var t=this.$createElement,e=this._self._c||t;return e("h4",{attrs:{id:"_3-由于时区导致日志8小时时差"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_3-由于时区导致日志8小时时差","aria-hidden":"true"}},[this._v("#")]),this._v(" 3. 由于时区导致日志8小时时差")])},function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[this._v('  date {\n    match => [ "log_timestamp", "YYYY-MM-dd HH:mm:ss.SSS" ]\n    target => "@timestamp"\n  }\n')])])])},function(){var t=this.$createElement,e=this._self._c||t;return e("h4",{attrs:{id:"_4-grok-parse-failure"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_4-grok-parse-failure","aria-hidden":"true"}},[this._v("#")]),this._v(" 4.Grok parse failure")])},function(){var t=this.$createElement,e=this._self._c||t;return e("h2",{attrs:{id:"总结"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#总结","aria-hidden":"true"}},[this._v("#")]),this._v(" 总结")])},function(){var t=this.$createElement,e=this._self._c||t;return e("ul",[e("li",[this._v("可扩展性：采用高可扩展性的分布式系统架构设计，可以支持每日 TB 级别的新增数据。")]),this._v(" "),e("li",[this._v("使用简单：通过用户图形界面实现各种统计分析功能，简单易用，上手快")]),this._v(" "),e("li",[this._v("快速响应：从日志产生到查询可见，能达到秒级完成数据的采集、处理和搜索统计。")]),this._v(" "),e("li",[this._v("界面炫丽：Kibana 界面上，只需要点击鼠标，就可以完成搜索、聚合功能，生成炫丽的仪表板")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("p",[e("img",{attrs:{src:"http://i2.51cto.com/images/blog/201712/17/ff3af5c3d723f8e0386572d632fbfd76.png?x-oss-process=image/watermark,size_16,text_QDUxQ1RP5Y2a5a6i,color_FFFFFF,t_100,g_se,x_10,y_10,shadow_90,type_ZmFuZ3poZW5naGVpdGk=",alt:"从 ELK 到 EFK 演进"}})])},function(){var t=this.$createElement,e=this._self._c||t;return e("h2",{attrs:{id:"参考资料"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#参考资料","aria-hidden":"true"}},[this._v("#")]),this._v(" 参考资料")])}],!1,null,null,null);r.options.__file="elk-efk.md";e.default=r.exports}}]);