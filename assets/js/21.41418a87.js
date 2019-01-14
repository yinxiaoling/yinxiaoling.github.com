(window.webpackJsonp=window.webpackJsonp||[]).push([[21],{170:function(t,e,a){"use strict";a.r(e);var s=a(0),r=Object(s.a)({},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"content"},[t._m(0),t._v(" "),t._m(1),t._v(" "),a("p",[t._v("本篇主要讲工作中的真实经历，我们怎么打造亿级日志平台，同时手把手教大家建立起这样一套亿级 ELK 系统。日志平台具体发展历程可以参考上篇「从 ELK 到 EFK 演进」")]),t._v(" "),a("p",[t._v("废话不多说，老司机们座好了，我们准备发车了~~~")]),t._v(" "),t._m(2),t._v(" "),t._m(3),t._v(" "),a("p",[t._v("整体架构主要分为 4 个模块，分别提供不同的功能")]),t._v(" "),t._m(4),t._v(" "),t._m(5),t._v(" "),t._m(6),t._v(" "),t._m(7),t._v(" "),t._m(8),t._v(" "),t._m(9),t._v(" "),t._m(10),t._m(11),t._v(" "),a("p",[t._v("我们就以比较常见的 Nginx 日志来举例说明下，日志内容是 JSON 格式")]),t._v(" "),t._m(12),t._m(13),t._v(" "),t._m(14),t._v(" "),a("p",[t._v("原因很简单，资源消耗比较大。")]),t._v(" "),a("p",[t._v("由于 Logstash 是跑在 JVM 上面，资源消耗比较大，后来作者用 GO 写了一个功能较少但是资源消耗也小的轻量级的 Agent 叫 Logstash-forwarder。")]),t._v(" "),a("p",[t._v("后来作者加入 elastic.co 公司， Logstash-forwarder 的开发工作给公司内部 GO 团队来搞，最后命名为 Filebeat。")]),t._v(" "),a("p",[t._v("Filebeat 需要部署在每台应用服务器上，可以通过 Salt 来推送并安装配置。")]),t._v(" "),t._m(15),t._v(" "),t._m(16),t._m(17),t._v(" "),t._m(18),t._m(19),t._v(" "),a("p",[t._v("修改 Filebeat 配置，支持收集本地目录日志，并输出日志到 Kafka 集群中")]),t._v(" "),t._m(20),a("p",[t._v("Filebeat 6.0 之后一些配置参数变动比较大，比如 document_type 就不支持，需要用 fields 来代替等等。")]),t._v(" "),t._m(21),t._v(" "),t._m(22),t._m(23),t._v(" "),a("p",[t._v("生产环境中 Kafka 集群中节点数量建议为（2N + 1 ）个，这边就以 3 个节点举例")]),t._v(" "),t._m(24),t._v(" "),a("p",[t._v("直接到官网下载 Kafka")]),t._v(" "),t._m(25),t._m(26),t._v(" "),t._m(27),t._m(28),t._v(" "),a("p",[t._v("修改 Zookeeper 配置，搭建 Zookeeper 集群，数量 ( 2N + 1 ) 个")]),t._v(" "),a("p",[t._v("ZK 集群建议采用 Kafka 自带，减少网络相关的因素干扰")]),t._v(" "),t._m(29),a("p",[t._v("Zookeeper data 目录下面添加 myid 文件，内容为代表 Zooekeeper 节点 id （1，2，3），并保证不重复")]),t._v(" "),t._m(30),t._m(31),t._v(" "),a("p",[t._v("分别启动 3 台 Zookeeper 节点，保证集群的高可用")]),t._v(" "),t._m(32),t._m(33),t._v(" "),a("p",[t._v("kafka 集群这边搭建为 3 台，可以逐个修改 Kafka 配置，需要注意其中 broker.id 分别 （1，2，3）")]),t._v(" "),t._m(34),t._m(35),t._v(" "),a("p",[t._v("分别启动 3 台 Kafka 节点，保证集群的高可用")]),t._v(" "),t._m(36),a("p",[t._v("查看 topic 是否创建成功")]),t._v(" "),t._m(37),t._m(38),t._v(" "),a("p",[t._v("Kafka-manager 是 Yahoo 公司开源的集群管理工具。")]),t._v(" "),a("p",[t._v("可以在 Github 上下载安装："),a("a",{attrs:{href:"https://github.com/yahoo/kafka-manager",target:"_blank",rel:"noopener noreferrer"}},[t._v("https://github.com/yahoo/kafka-manager"),a("OutboundLink")],1)]),t._v(" "),t._m(39),t._v(" "),a("p",[t._v("如果遇到 Kafka 消费不及时的话，可以通过到具体 cluster 页面上，增加 partition。Kafka 通过 partition 分区来提高并发消费速度")]),t._v(" "),t._m(40),t._v(" "),t._m(41),t._v(" "),a("p",[t._v("Logstash 提供三大功能")]),t._v(" "),t._m(42),t._v(" "),a("p",[t._v("如果使用 Filter 功能的话，强烈推荐大家使用 "),a("a",{attrs:{href:"https://grokdebug.herokuapp.com/",target:"_blank",rel:"noopener noreferrer"}},[t._v("Grok debugger"),a("OutboundLink")],1),t._v(" 来预先解析日志格式。")]),t._v(" "),t._m(43),t._v(" "),t._m(44),t._v(" "),t._m(45),t._m(46),t._v(" "),t._m(47),t._m(48),t._v(" "),a("p",[t._v("修改 Logstash 配置，使之提供 indexer 的功能，将数据插入到 Elasticsearch 集群中")]),t._v(" "),t._m(49),t._m(50),t._v(" "),t._m(51),t._m(52),t._v(" "),t._m(53),t._v(" "),t._m(54),t._m(55),t._v(" "),t._m(56),t._m(57),t._v(" "),t._m(58),t._m(59),t._v(" "),a("p",[t._v("通过 -d 来后台启动")]),t._v(" "),t._m(60),a("p",[t._v("打开网页 "),a("a",{attrs:{href:"http://192.168.0.1:9200/",target:"_blank",rel:"noopener noreferrer"}},[t._v("http://192.168.0.1:9200/"),a("OutboundLink")],1),t._v(", 如果出现下面信息说明配置成功")]),t._v(" "),t._m(61),t._m(62),t._v(" "),a("p",[t._v("Cerebro 这个名字大家可能觉得很陌生，其实过去它的名字叫 kopf ！因为 Elasticsearch 5.0 不再支持 site plugin，所以 kopf 作者放弃了原项目，另起炉灶搞了 cerebro，以独立的单页应用形式，继续支持新版本下 Elasticsearch 的管理工作。")]),t._v(" "),t._m(63),t._v(" "),t._m(64),t._v(" "),t._m(65),t._v(" "),t._m(66),t._v(" "),t._m(67),t._v(" "),t._m(68),t._m(69),t._v(" "),t._m(70),t._m(71),t._v(" "),t._m(72),t._m(73),t._v(" "),t._m(74),t._m(75),t._v(" "),t._m(76),t._v(" "),t._m(77),t._v(" "),t._m(78),t._v(" "),t._m(79),t._v(" "),t._m(80),t._v(" "),a("p",[t._v("综上，通过上面部署命令来实现 ELK 的整套组件，包含了日志收集、过滤、索引和可视化的全部流程，基于这套系统实现分析日志功能。同时，通过水平扩展 Kafka、Elasticsearch 集群，可以实现日均亿级的日志实时处理。")])])},[function(){var t=this.$createElement,e=this._self._c||t;return e("h1",{attrs:{id:"亿级-elk-日志平台构建实践"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#亿级-elk-日志平台构建实践","aria-hidden":"true"}},[this._v("#")]),this._v(" 亿级 ELK 日志平台构建实践")])},function(){var t=this.$createElement,e=this._self._c||t;return e("p",[e("img",{attrs:{src:"http://i2.51cto.com/images/blog/201805/16/68f806fc3e16bc209a3e9662cd2ebef9.png?x-oss-process=image/watermark,size_16,text_QDUxQ1RP5Y2a5a6i,color_FFFFFF,t_100,g_se,x_10,y_10,shadow_90,type_ZmFuZ3poZW5naGVpdGk=",alt:"亿级 ELK 日志平台构建实践"}})])},function(){var t=this.$createElement,e=this._self._c||t;return e("h2",{attrs:{id:"整体架构"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#整体架构","aria-hidden":"true"}},[this._v("#")]),this._v(" 整体架构")])},function(){var t=this.$createElement,e=this._self._c||t;return e("p",[e("img",{attrs:{src:"http://i2.51cto.com/images/blog/201805/16/fdfd8706744a67866b2e34368da3f2f2.png?x-oss-process=image/watermark,size_16,text_QDUxQ1RP5Y2a5a6i,color_FFFFFF,t_100,g_se,x_10,y_10,shadow_90,type_ZmFuZ3poZW5naGVpdGk=",alt:"亿级 ELK 日志平台构建实践"}})])},function(){var t=this.$createElement,e=this._self._c||t;return e("p",[e("strong",[this._v("Filebeat")]),this._v("：轻量级数据收集引擎。基于原先 Logstash-fowarder 的源码改造出来。换句话说：Filebeat就是新版的 Logstash-fowarder，也会是 ELK Stack 在 Agent 的第一选择。")])},function(){var t=this.$createElement,e=this._self._c||t;return e("p",[e("strong",[this._v("Kafka")]),this._v(": 数据缓冲队列。作为消息队列解耦了处理过程，同时提高了可扩展性。具有峰值处理能力，使用消息队列能够使关键组件顶住突发的访问压力，而不会因为突发的超负荷的请求而完全崩溃。")])},function(){var t=this.$createElement,e=this._self._c||t;return e("p",[e("strong",[this._v("Logstash")]),this._v(" ：数据收集处理引擎。支持动态的从各种数据源搜集数据，并对数据进行过滤、分析、丰富、统一格式等操作，然后存储以供后续使用。")])},function(){var t=this.$createElement,e=this._self._c||t;return e("p",[e("strong",[this._v("Elasticsearch")]),this._v(" ：分布式搜索引擎。具有高可伸缩、高可靠、易管理等特点。可以用于全文检索、结构化检索和分析，并能将这三者结合起来。Elasticsearch 基于 Lucene 开发，现在使用最广的开源搜索引擎之一，Wikipedia 、StackOverflow、Github 等都基于它来构建自己的搜索引擎。")])},function(){var t=this.$createElement,e=this._self._c||t;return e("p",[e("strong",[this._v("Kibana")]),this._v(" ：可视化化平台。它能够搜索、展示存储在 Elasticsearch 中索引数据。使用它可以很方便的用图表、表格、地图展示和分析数据。")])},function(){var t=this.$createElement,e=this._self._c||t;return e("h2",{attrs:{id:"版本说明"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#版本说明","aria-hidden":"true"}},[this._v("#")]),this._v(" 版本说明")])},function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[this._v("Filebeat: 6.2.4\nKafka: 2.11-1\nLogstash: 6.2.4\nElasticsearch: 6.2.4\nKibana: 6.2.4\n\n相应的版本最好下载对应的插件\n")])])])},function(){var t=this.$createElement,e=this._self._c||t;return e("h2",{attrs:{id:"具体实践"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#具体实践","aria-hidden":"true"}},[this._v("#")]),this._v(" 具体实践")])},function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[this._v('{"@timestamp":"2017-12-27T16:38:17+08:00","host":"192.168.56.11","clientip":"192.168.56.11","size":26,"responsetime":0.000,"upstreamtime":"-","upstreamhost":"-","http_host":"192.168.56.11","url":"/nginxweb/index.html","domain":"192.168.56.11","xff":"-","referer":"-","status":"200"}\n{"@timestamp":"2017-12-27T16:38:17+08:00","host":"192.168.56.11","clientip":"192.168.56.11","size":26,"responsetime":0.000,"upstreamtime":"-","upstreamhost":"-","http_host":"192.168.56.11","url":"/nginxweb/index.html","domain":"192.168.56.11","xff":"-","referer":"-","status":"200"}\n{"@timestamp":"2017-12-27T16:38:17+08:00","host":"192.168.56.11","clientip":"192.168.56.11","size":26,"responsetime":0.000,"upstreamtime":"-","upstreamhost":"-","http_host":"192.168.56.11","url":"/nginxweb/index.html","domain":"192.168.56.11","xff":"-","referer":"-","status":"200"}\n{"@timestamp":"2017-12-27T16:38:17+08:00","host":"192.168.56.11","clientip":"192.168.56.11","size":26,"responsetime":0.000,"upstreamtime":"-","upstreamhost":"-","http_host":"192.168.56.11","url":"/nginxweb/index.html","domain":"192.168.56.11","xff":"-","referer":"-","status":"200"}\n{"@timestamp":"2017-12-27T16:38:17+08:00","host":"192.168.56.11","clientip":"192.168.56.11","size":26,"responsetime":0.000,"upstreamtime":"-","upstreamhost":"-","http_host":"192.168.56.11","url":"/nginxweb/index.html","domain":"192.168.56.11","xff":"-","referer":"-","status":"200"}\n')])])])},function(){var t=this.$createElement,e=this._self._c||t;return e("h3",{attrs:{id:"filebeat"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#filebeat","aria-hidden":"true"}},[this._v("#")]),this._v(" Filebeat")])},function(){var t=this.$createElement,e=this._self._c||t;return e("blockquote",[e("p",[this._v("为什么用 Filebeat ，而不用原来的 Logstash 呢？")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("h4",{attrs:{id:"下载"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#下载","aria-hidden":"true"}},[this._v("#")]),this._v(" 下载")])},function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[this._v("$ wget https://artifacts.elastic.co/downloads/beats/filebeat/filebeat-6.2.4-darwin-x86_64.tar.gz\n")])])])},function(){var t=this.$createElement,e=this._self._c||t;return e("h4",{attrs:{id:"解压"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#解压","aria-hidden":"true"}},[this._v("#")]),this._v(" 解压")])},function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[this._v("tar -zxvf filebeat-6.2.4-darwin-x86_64.tar.gz\nmv filebeat-6.2.4-darwin-x86_64 filebeat\ncd filebeat\n")])])])},function(){var t=this.$createElement,e=this._self._c||t;return e("h4",{attrs:{id:"修改配置"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#修改配置","aria-hidden":"true"}},[this._v("#")]),this._v(" 修改配置")])},function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[this._v("$ vim fileat.yml\nfilebeat.prospectors:\n- input_type: log\n  paths:\n    -  /opt/logs/server/nginx.log\n  json.keys_under_root: true\n  json.add_error_key: true\n  json.message_key: log\n\noutput.kafka:   \n  hosts: [\"192.168.0.1:9092，192.168.0.2:9092，192.168.0.3:9092\"]\n  topic: 'nginx'\n")])])])},function(){var t=this.$createElement,e=this._self._c||t;return e("h4",{attrs:{id:"启动"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#启动","aria-hidden":"true"}},[this._v("#")]),this._v(" 启动")])},function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[this._v("$ ./filebeat -e -c filebeat.yml\n")])])])},function(){var t=this.$createElement,e=this._self._c||t;return e("h3",{attrs:{id:"kafka"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#kafka","aria-hidden":"true"}},[this._v("#")]),this._v(" Kafka")])},function(){var t=this.$createElement,e=this._self._c||t;return e("h4",{attrs:{id:"下载-2"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#下载-2","aria-hidden":"true"}},[this._v("#")]),this._v(" 下载")])},function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[this._v("$ wget http://mirror.bit.edu.cn/apache/kafka/1.0.0/kafka_2.11-1.0.0.tgz\n")])])])},function(){var t=this.$createElement,e=this._self._c||t;return e("h4",{attrs:{id:"解压-2"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#解压-2","aria-hidden":"true"}},[this._v("#")]),this._v(" 解压")])},function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[this._v("tar -zxvf kafka_2.11-1.0.0.tgz\nmv kafka_2.11-1.0.0 kafka\ncd kafka\n")])])])},function(){var t=this.$createElement,e=this._self._c||t;return e("h4",{attrs:{id:"修改-zookeeper-配置"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#修改-zookeeper-配置","aria-hidden":"true"}},[this._v("#")]),this._v(" 修改 Zookeeper 配置")])},function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[this._v("$ vim zookeeper.properties\n\ntickTime=2000\ndataDir=/opt/zookeeper\nclientPort=2181\nmaxClientCnxns=50\ninitLimit=10\nsyncLimit=5\n\nserver.1=192.168.0.1:2888:3888\nserver.2=192.168.0.2:2888:3888\nserver.3=192.168.0.3:2888:3888\n")])])])},function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[this._v("$ vim /opt/zookeeper/myid\n1\n")])])])},function(){var t=this.$createElement,e=this._self._c||t;return e("h4",{attrs:{id:"启动-zookeeper-节点"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#启动-zookeeper-节点","aria-hidden":"true"}},[this._v("#")]),this._v(" 启动 Zookeeper 节点")])},function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[this._v("$ ./zookeeper-server-start.sh -daemon ./config/zookeeper.properties\n")])])])},function(){var t=this.$createElement,e=this._self._c||t;return e("h4",{attrs:{id:"修改-kafka-配置"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#修改-kafka-配置","aria-hidden":"true"}},[this._v("#")]),this._v(" 修改 Kafka 配置")])},function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[this._v("$ vim ./config/server.properties\nbroker.id=1\nport=9092\nhost.name=192.168.0.1\nnum.replica.fetchers=1\nlog.dirs=/opt/kafka_logs\nnum.partitions=3\nzookeeper.connect=192.168.0.1: 192.168.0.2: 192.168.0.3:2181\nzookeeper.connection.timeout.ms=6000\nzookeeper.sync.time.ms=2000\nnum.io.threads=8\nnum.network.threads=8\nqueued.max.requests=16\nfetch.purgatory.purge.interval.requests=100\nproducer.purgatory.purge.interval.requests=100\ndelete.topic.enable=true\n")])])])},function(){var t=this.$createElement,e=this._self._c||t;return e("h4",{attrs:{id:"启动-kafka-集群"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#启动-kafka-集群","aria-hidden":"true"}},[this._v("#")]),this._v(" 启动 Kafka 集群")])},function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[this._v("$ ./bin/kafka-server-start.sh -daemon ./config/server.properties\n")])])])},function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[this._v("$ bin/kafka-topics.sh --list --zookeeper localhost:2181\n\nnginx\n")])])])},function(){var t=this.$createElement,e=this._self._c||t;return e("h4",{attrs:{id:"监控-kafka-manager"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#监控-kafka-manager","aria-hidden":"true"}},[this._v("#")]),this._v(" 监控 Kafka Manager")])},function(){var t=this.$createElement,e=this._self._c||t;return e("p",[e("img",{attrs:{src:"http://i2.51cto.com/images/blog/201805/16/6b6ad3a704339702cfc754ff71567278.png?x-oss-process=image/watermark,size_16,text_QDUxQ1RP5Y2a5a6i,color_FFFFFF,t_100,g_se,x_10,y_10,shadow_90,type_ZmFuZ3poZW5naGVpdGk=",alt:"亿级 ELK 日志平台构建实践"}})])},function(){var t=this.$createElement,e=this._self._c||t;return e("p",[e("img",{attrs:{src:"http://i2.51cto.com/images/blog/201805/16/8cff5030271fe5dd99c945089de083ed.png?x-oss-process=image/watermark,size_16,text_QDUxQ1RP5Y2a5a6i,color_FFFFFF,t_100,g_se,x_10,y_10,shadow_90,type_ZmFuZ3poZW5naGVpdGk=",alt:"亿级 ELK 日志平台构建实践"}})])},function(){var t=this.$createElement,e=this._self._c||t;return e("h3",{attrs:{id:"logstash"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#logstash","aria-hidden":"true"}},[this._v("#")]),this._v(" Logstash")])},function(){var t=this.$createElement,e=this._self._c||t;return e("ul",[e("li",[this._v("INPUT 进入")]),this._v(" "),e("li",[this._v("FILTER 过滤功能")]),this._v(" "),e("li",[this._v("OUTPUT 出去")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("p",[e("img",{attrs:{src:"http://i2.51cto.com/images/blog/201805/16/7a72bbadf135f76bb01976f07ea19f84.png?x-oss-process=image/watermark,size_16,text_QDUxQ1RP5Y2a5a6i,color_FFFFFF,t_100,g_se,x_10,y_10,shadow_90,type_ZmFuZ3poZW5naGVpdGk=",alt:"亿级 ELK 日志平台构建实践"}})])},function(){var t=this.$createElement,e=this._self._c||t;return e("h4",{attrs:{id:"下载-3"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#下载-3","aria-hidden":"true"}},[this._v("#")]),this._v(" 下载")])},function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[this._v("$ wget https://artifacts.elastic.co/downloads/logstash/logstash-6.2.4.tar.gz\n")])])])},function(){var t=this.$createElement,e=this._self._c||t;return e("h4",{attrs:{id:"解压重命名"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#解压重命名","aria-hidden":"true"}},[this._v("#")]),this._v(" 解压重命名")])},function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[this._v("$ tar -zxvf logstash-6.2.4.tar.gz\n$ mv logstash-6.2.4 logstash\n")])])])},function(){var t=this.$createElement,e=this._self._c||t;return e("h4",{attrs:{id:"修改-logstash-配置"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#修改-logstash-配置","aria-hidden":"true"}},[this._v("#")]),this._v(" 修改 Logstash 配置")])},function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[this._v('$ vim nginx.conf\n\ninput {\n  kafka {\n    type => "kafka"\n    bootstrap_servers => "192.168.0.1:2181,192.168.0.2:2181,192.168.0.3:2181"\n    topics => "nginx"\n    group_id => "logstash"\n    consumer_threads => 2\n  }\n}\n\noutput {\n  elasticsearch {\n    host => ["192.168.0.1","192.168.0.2"，"192.168.0.3"]\n    port => "9300"\n    index => "nginx-%{+YYYY.MM.dd}"\n  }\n}\n')])])])},function(){var t=this.$createElement,e=this._self._c||t;return e("h4",{attrs:{id:"启动-logstash"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#启动-logstash","aria-hidden":"true"}},[this._v("#")]),this._v(" 启动 Logstash")])},function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[this._v("$ ./bin/logstash -f nginx.conf\n")])])])},function(){var t=this.$createElement,e=this._self._c||t;return e("h3",{attrs:{id:"elasticsearch"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#elasticsearch","aria-hidden":"true"}},[this._v("#")]),this._v(" Elasticsearch")])},function(){var t=this.$createElement,e=this._self._c||t;return e("h4",{attrs:{id:"下载-4"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#下载-4","aria-hidden":"true"}},[this._v("#")]),this._v(" 下载")])},function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[this._v("$ wget https://artifacts.elastic.co/downloads/elasticsearch/elasticsearch-6.2.4.tar.gz\n")])])])},function(){var t=this.$createElement,e=this._self._c||t;return e("h4",{attrs:{id:"解压-3"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#解压-3","aria-hidden":"true"}},[this._v("#")]),this._v(" 解压")])},function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[this._v("$ tar -zxvf elasticsearch-6.2.4.tar.gz\n$ mv elasticsearch-6.2.4.tar.gz elasticsearch\n")])])])},function(){var t=this.$createElement,e=this._self._c||t;return e("h4",{attrs:{id:"修改配置-2"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#修改配置-2","aria-hidden":"true"}},[this._v("#")]),this._v(" 修改配置")])},function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[this._v('$ vim config/elasticsearch.yml\n\ncluster.name: es \nnode.name: es-node1\nnetwork.host: 192.168.0.1\ndiscovery.zen.ping.unicast.hosts: ["192.168.0.1"]\ndiscovery.zen.minimum_master_nodes: 1\n')])])])},function(){var t=this.$createElement,e=this._self._c||t;return e("h4",{attrs:{id:"启动-2"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#启动-2","aria-hidden":"true"}},[this._v("#")]),this._v(" 启动")])},function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[this._v("$ ./bin/elasticsearch -d\n")])])])},function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[this._v('{\n    name: "es-node1",\n    cluster_name: "es",\n    cluster_uuid: "XvoyA_NYTSSV8pJg0Xb23A",\n    version: {\n        number: "6.2.4",\n        build_hash: "ccec39f",\n        build_date: "2018-04-12T20:37:28.497551Z",\n        build_snapshot: false,\n        lucene_version: "7.2.1",\n        minimum_wire_compatibility_version: "5.6.0",\n        minimum_index_compatibility_version: "5.0.0"\n    },\n    tagline: "You Know, for Search"\n}\n')])])])},function(){var t=this.$createElement,e=this._self._c||t;return e("h4",{attrs:{id:"控制台"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#控制台","aria-hidden":"true"}},[this._v("#")]),this._v(" 控制台")])},function(){var t=this.$createElement,e=this._self._c||t;return e("p",[e("img",{attrs:{src:"http://i2.51cto.com/images/blog/201805/16/c479964db186c35455fe3c68d1f5be76.png?x-oss-process=image/watermark,size_16,text_QDUxQ1RP5Y2a5a6i,color_FFFFFF,t_100,g_se,x_10,y_10,shadow_90,type_ZmFuZ3poZW5naGVpdGk=",alt:"亿级 ELK 日志平台构建实践"}})])},function(){var t=this.$createElement,e=this._self._c||t;return e("h4",{attrs:{id:"注意点"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#注意点","aria-hidden":"true"}},[this._v("#")]),this._v(" 注意点")])},function(){var t=this.$createElement,e=this._self._c||t;return e("ol",[e("li",[this._v("Master 与 Data 节点分离，当 Data 节点大于 3 个的时候，建议责任分离，减轻压力")]),this._v(" "),e("li",[this._v("Data Node 内存不超过 32G ，建议设置成 31 G ，具体原因可以看上一篇文章")]),this._v(" "),e("li",[this._v("discovery.zen.minimum_master_nodes 设置成 （ total / 2 + 1 ），避免脑裂情况")]),this._v(" "),e("li",[this._v("最重要的一点，不要将 ES 暴露在公网中，建议都安装 X-PACK ，来加强其安全性")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("h3",{attrs:{id:"kibana"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#kibana","aria-hidden":"true"}},[this._v("#")]),this._v(" kibana")])},function(){var t=this.$createElement,e=this._self._c||t;return e("h4",{attrs:{id:"下载-5"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#下载-5","aria-hidden":"true"}},[this._v("#")]),this._v(" 下载")])},function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[this._v("$ wget https://artifacts.elastic.co/downloads/kibana/kibana-6.2.4-darwin-x86_64.tar.gz\n")])])])},function(){var t=this.$createElement,e=this._self._c||t;return e("h4",{attrs:{id:"解压-4"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#解压-4","aria-hidden":"true"}},[this._v("#")]),this._v(" 解压")])},function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[this._v("$ tar -zxvf kibana-6.2.4-darwin-x86_64.tar.gz\n$ mv kibana-6.2.4-darwin-x86_64.tar.gz kibana\n")])])])},function(){var t=this.$createElement,e=this._self._c||t;return e("h4",{attrs:{id:"修改配置-3"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#修改配置-3","aria-hidden":"true"}},[this._v("#")]),this._v(" 修改配置")])},function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[this._v('$ vim config/kibana.yml\n\nserver.port: 5601\nserver.host: "192.168.0.1"\nelasticsearch.url: "http://192.168.0.1:9200"\n')])])])},function(){var t=this.$createElement,e=this._self._c||t;return e("h4",{attrs:{id:"启动-kibana"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#启动-kibana","aria-hidden":"true"}},[this._v("#")]),this._v(" 启动 Kibana")])},function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[this._v("$ nohup ./bin/kibana &\n")])])])},function(){var t=this.$createElement,e=this._self._c||t;return e("h4",{attrs:{id:"界面展示"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#界面展示","aria-hidden":"true"}},[this._v("#")]),this._v(" 界面展示")])},function(){var t=this.$createElement,e=this._self._c||t;return e("p",[this._v("创建索引页面需要到 "),e("strong",[this._v("Management -> Index Patterns")]),this._v(" 中通过前缀来指定")])},function(){var t=this.$createElement,e=this._self._c||t;return e("p",[e("img",{attrs:{src:"http://i2.51cto.com/images/blog/201805/16/ab0e5ac0e05b40e96bd9263a90f3a66f.png?x-oss-process=image/watermark,size_16,text_QDUxQ1RP5Y2a5a6i,color_FFFFFF,t_100,g_se,x_10,y_10,shadow_90,type_ZmFuZ3poZW5naGVpdGk=",alt:"亿级 ELK 日志平台构建实践"}})])},function(){var t=this.$createElement,e=this._self._c||t;return e("h4",{attrs:{id:"最终效果展示"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#最终效果展示","aria-hidden":"true"}},[this._v("#")]),this._v(" 最终效果展示")])},function(){var t=this.$createElement,e=this._self._c||t;return e("p",[e("img",{attrs:{src:"http://i2.51cto.com/images/blog/201805/16/d7eaeadce1355bbc3533d32aee98edbc.png?x-oss-process=image/watermark,size_16,text_QDUxQ1RP5Y2a5a6i,color_FFFFFF,t_100,g_se,x_10,y_10,shadow_90,type_ZmFuZ3poZW5naGVpdGk=",alt:"亿级 ELK 日志平台构建实践"}})])},function(){var t=this.$createElement,e=this._self._c||t;return e("h2",{attrs:{id:"总结"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#总结","aria-hidden":"true"}},[this._v("#")]),this._v(" 总结")])}],!1,null,null,null);r.options.__file="practice.md";e.default=r.exports}}]);