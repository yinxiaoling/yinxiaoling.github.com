(window.webpackJsonp=window.webpackJsonp||[]).push([[23],{172:function(t,e,s){"use strict";s.r(e);var r=s(0),n=Object(r.a)({},function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"content"},[t._m(0),t._v(" "),s("blockquote",[s("p",[t._v("注意：本章属于 "),s("code",[t._v("Docker")]),t._v(" 高级配置，如果您是初学者，您可以暂时跳过本章节，直接学习 "),s("a",{attrs:{href:"https://yeasy.gitbooks.io/docker_practice/compose",target:"_blank",rel:"noopener noreferrer"}},[t._v("Docker Compose"),s("OutboundLink")],1),t._v(" 一节。")])]),t._v(" "),s("p",[t._v("本章将介绍 Docker 的一些高级网络配置和选项。")]),t._v(" "),t._m(1),t._v(" "),s("p",[t._v("同时，Docker 随机分配一个本地未占用的私有网段（在 "),s("a",{attrs:{href:"https://tools.ietf.org/html/rfc1918",target:"_blank",rel:"noopener noreferrer"}},[t._v("RFC1918"),s("OutboundLink")],1),t._v(" 中定义）中的一个地址给 "),s("code",[t._v("docker0")]),t._v(" 接口。比如典型的 "),s("code",[t._v("172.17.42.1")]),t._v("，掩码为 "),s("code",[t._v("255.255.0.0")]),t._v("。此后启动的容器内的网口也会自动分配一个同一网段（"),s("code",[t._v("172.17.0.0/16")]),t._v("）的地址。")]),t._v(" "),t._m(2),t._v(" "),t._m(3),t._v(" "),s("p",[t._v("接下来的部分将介绍在一些场景中，Docker 所有的网络定制配置。以及通过 Linux 命令来调整、补充、甚至替换 Docker 默认的网络配置。")]),t._v(" "),t._m(4),t._v(" "),s("p",[t._v("下面是一个跟 Docker 网络相关的命令列表。")]),t._v(" "),s("p",[t._v("其中有些命令选项只有在 Docker 服务启动的时候才能配置，而且不能马上生效。")]),t._v(" "),t._m(5),t._v(" "),t._m(6),t._v(" "),t._m(7),t._v(" "),t._m(8),t._v(" "),t._m(9),t._v(" "),t._m(10),t._v(" "),t._m(11),t._v(" "),t._m(12),t._v(" "),s("p",[t._v("容器要想访问外部网络，需要本地系统的转发支持。在Linux 系统中，检查转发是否打开。")]),t._v(" "),t._m(13),s("p",[t._v("如果为 0，说明没有开启转发，则需要手动打开。")]),t._v(" "),t._m(14),t._m(15),t._v(" "),t._m(16),t._v(" "),s("p",[t._v("容器之间相互访问，需要两方面的支持。")]),t._v(" "),t._m(17),t._v(" "),t._m(18),t._v(" "),t._m(19),t._v(" "),t._m(20),t._v(" "),t._m(21),t._v(" "),t._m(22),t._v(" "),t._m(23),t._v(" "),t._m(24),t._v(" "),t._m(25),t._m(26),t._v(" "),t._m(27),t._v(" "),t._m(28),t._m(29),t._v(" "),t._m(30),t._v(" "),s("p",[t._v("默认情况下，容器可以主动访问到外部网络的连接，但是外部网络无法访问到容器。")]),t._v(" "),t._m(31),t._v(" "),t._m(32),t._v(" "),s("p",[t._v("查看主机的 NAT 规则。")]),t._v(" "),t._m(33),t._m(34),t._v(" "),t._m(35),t._v(" "),t._m(36),t._v(" "),t._m(37),t._v(" "),t._m(38),t._v(" "),t._m(39),t._m(40),t._v(" "),t._m(41),s("p",[t._v("注意：")]),t._v(" "),t._m(42),t._v(" "),t._m(43),t._m(44),t._v(" "),t._m(45),t._v(" "),t._m(46),t._v(" "),t._m(47),t._v(" "),s("p",[t._v("也可以在配置文件中配置 DOCKER_OPTS，然后重启服务。")]),t._v(" "),t._m(48),t._v(" "),t._m(49),t._m(50),t._v(" "),t._m(51),t._v(" "),t._m(52),t._m(53),t._v(" "),t._m(54),t._v(" "),t._m(55),t._v(" "),s("p",[t._v("如果服务已经运行，那需要先停止服务，并删除旧的网桥。")]),t._v(" "),t._m(56),t._m(57),t._v(" "),t._m(58),s("p",[t._v("查看确认网桥创建并启动。")]),t._v(" "),t._m(59),t._m(60),t._v(" "),t._m(61),s("p",[t._v("启动 Docker 服务。")]),t._v(" "),t._m(62),t._v(" "),t._m(63),t._v(" "),t._m(64),t._v(" "),s("p",[t._v("在介绍自定义网络拓扑之前，你可能会对一些外部工具和例子感兴趣：")]),t._v(" "),t._m(65),t._v(" "),s("p",[t._v("Jérôme Petazzoni 编写了一个叫 "),s("a",{attrs:{href:"https://github.com/jpetazzo/pipework",target:"_blank",rel:"noopener noreferrer"}},[t._v("pipework"),s("OutboundLink")],1),t._v(" 的 shell 脚本，可以帮助用户在比较复杂的场景中完成容器的连接。")]),t._v(" "),t._m(66),t._v(" "),s("p",[t._v("Brandon Rhodes 创建了一个提供完整的 Docker 容器网络拓扑管理的 "),s("a",{attrs:{href:"https://github.com/brandon-rhodes/fopnp/tree/m/playground",target:"_blank",rel:"noopener noreferrer"}},[t._v("Python库"),s("OutboundLink")],1),t._v("，包括路由、NAT 防火墙；以及一些提供 HTTP, SMTP, POP, IMAP, Telnet, SSH, FTP 的服务器。")]),t._v(" "),t._m(67),t._v(" "),t._m(68),t._v(" "),t._m(69),t._v(" "),t._m(70),t._v(" "),t._m(71),t._v(" "),s("p",[t._v("用户有时候需要两个容器之间可以直连通信，而不用通过主机网桥进行桥接。")]),t._v(" "),t._m(72),t._v(" "),s("p",[t._v("首先启动 2 个容器：")]),t._v(" "),t._m(73),s("p",[t._v("找到进程号，然后创建网络命名空间的跟踪文件。")]),t._v(" "),t._m(74),t._m(75),t._v(" "),t._m(76),s("p",[t._v("现在这 2 个容器就可以相互 ping 通，并成功建立连接。点到点链路不需要子网和子网掩码。")]),t._v(" "),t._m(77),t._v(" "),t._m(78)])},[function(){var t=this.$createElement,e=this._self._c||t;return e("h1",{attrs:{id:"高级网络配置"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#高级网络配置","aria-hidden":"true"}},[this._v("#")]),this._v(" 高级网络配置")])},function(){var t=this.$createElement,e=this._self._c||t;return e("p",[this._v("当 Docker 启动时，会自动在主机上创建一个 "),e("code",[this._v("docker0")]),this._v(" 虚拟网桥，实际上是 Linux 的一个 bridge，可以理解为一个软件交换机。它会在挂载到它的网口之间进行转发。")])},function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("p",[t._v("当创建一个 Docker 容器的时候，同时会创建了一对 "),s("code",[t._v("veth pair")]),t._v(" 接口（当数据包发送到一个接口时，另外一个接口也可以收到相同的数据包）。这对接口一端在容器内，即 "),s("code",[t._v("eth0")]),t._v("；另一端在本地并被挂载到 "),s("code",[t._v("docker0")]),t._v(" 网桥，名称以 "),s("code",[t._v("veth")]),t._v(" 开头（例如 "),s("code",[t._v("vethAQI2QT")]),t._v("）。通过这种方式，主机可以跟容器通信，容器之间也可以相互通信。Docker 就创建了在主机和所有容器之间一个虚拟共享网络。")])},function(){var t=this.$createElement,e=this._self._c||t;return e("p",[e("img",{attrs:{src:"https://yeasy.gitbooks.io/docker_practice/advanced_network/_images/network.png",alt:"Docker 网络"}}),this._v("图 1.12.1 - Docker 网络")])},function(){var t=this.$createElement,e=this._self._c||t;return e("h2",{attrs:{id:"快速配置指南"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#快速配置指南","aria-hidden":"true"}},[this._v("#")]),this._v(" 快速配置指南")])},function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("ul",[s("li",[s("code",[t._v("-b BRIDGE")]),t._v(" 或 "),s("code",[t._v("--bridge=BRIDGE")]),t._v(" 指定容器挂载的网桥")]),t._v(" "),s("li",[s("code",[t._v("--bip=CIDR")]),t._v(" 定制 docker0 的掩码")]),t._v(" "),s("li",[s("code",[t._v("-H SOCKET...")]),t._v(" 或 "),s("code",[t._v("--host=SOCKET...")]),t._v(" Docker 服务端接收命令的通道")]),t._v(" "),s("li",[s("code",[t._v("--icc=true|false")]),t._v(" 是否支持容器之间进行通信")]),t._v(" "),s("li",[s("code",[t._v("--ip-forward=true|false")]),t._v(" 请看下文容器之间的通信")]),t._v(" "),s("li",[s("code",[t._v("--iptables=true|false")]),t._v(" 是否允许 Docker 添加 iptables 规则")]),t._v(" "),s("li",[s("code",[t._v("--mtu=BYTES")]),t._v(" 容器网络中的 MTU")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("p",[this._v("下面2个命令选项既可以在启动服务时指定，也可以在启动容器时指定。在 Docker 服务启动的时候指定则会成为默认值，后面执行 "),e("code",[this._v("docker run")]),this._v(" 时可以覆盖设置的默认值。")])},function(){var t=this.$createElement,e=this._self._c||t;return e("ul",[e("li",[e("code",[this._v("--dns=IP_ADDRESS...")]),this._v(" 使用指定的DNS服务器")]),this._v(" "),e("li",[e("code",[this._v("--dns-search=DOMAIN...")]),this._v(" 指定DNS搜索域")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("p",[this._v("最后这些选项只有在 "),e("code",[this._v("docker run")]),this._v(" 执行时使用，因为它是针对容器的特性内容。")])},function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("ul",[s("li",[s("code",[t._v("-h HOSTNAME")]),t._v(" 或 "),s("code",[t._v("--hostname=HOSTNAME")]),t._v(" 配置容器主机名")]),t._v(" "),s("li",[s("code",[t._v("--link=CONTAINER_NAME:ALIAS")]),t._v(" 添加到另一个容器的连接")]),t._v(" "),s("li",[s("code",[t._v("--net=bridge|none|container:NAME_or_ID|host")]),t._v(" 配置容器的桥接模式")]),t._v(" "),s("li",[s("code",[t._v("-p SPEC")]),t._v(" 或 "),s("code",[t._v("--publish=SPEC")]),t._v(" 映射容器端口到宿主主机")]),t._v(" "),s("li",[s("code",[t._v("-P or --publish-all=true|false")]),t._v(" 映射容器所有端口到宿主主机")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("h2",{attrs:{id:"容器访问控制"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#容器访问控制","aria-hidden":"true"}},[this._v("#")]),this._v(" 容器访问控制")])},function(){var t=this.$createElement,e=this._self._c||t;return e("p",[this._v("容器的访问控制，主要通过 Linux 上的 "),e("code",[this._v("iptables")]),this._v(" 防火墙来进行管理和实现。"),e("code",[this._v("iptables")]),this._v(" 是 Linux 上默认的防火墙软件，在大部分发行版中都自带。")])},function(){var t=this.$createElement,e=this._self._c||t;return e("h3",{attrs:{id:"容器访问外部网络"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#容器访问外部网络","aria-hidden":"true"}},[this._v("#")]),this._v(" 容器访问外部网络")])},function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"language-shell extra-class"},[e("pre",{pre:!0,attrs:{class:"language-shell"}},[e("code",[e("span",{pre:!0,attrs:{class:"token variable"}},[this._v("$sysctl")]),this._v(" net.ipv4.ip_forward\nnet.ipv4.ip_forward "),e("span",{pre:!0,attrs:{class:"token operator"}},[this._v("=")]),this._v(" 1\n")])])])},function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"language-shell extra-class"},[e("pre",{pre:!0,attrs:{class:"language-shell"}},[e("code",[e("span",{pre:!0,attrs:{class:"token variable"}},[this._v("$sysctl")]),this._v(" -w net.ipv4.ip_forward"),e("span",{pre:!0,attrs:{class:"token operator"}},[this._v("=")]),this._v("1\n")])])])},function(){var t=this.$createElement,e=this._self._c||t;return e("p",[this._v("如果在启动 Docker 服务的时候设定 "),e("code",[this._v("--ip-forward=true")]),this._v(", Docker 就会自动设定系统的 "),e("code",[this._v("ip_forward")]),this._v(" 参数为 1。")])},function(){var t=this.$createElement,e=this._self._c||t;return e("h3",{attrs:{id:"容器之间访问"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#容器之间访问","aria-hidden":"true"}},[this._v("#")]),this._v(" 容器之间访问")])},function(){var t=this.$createElement,e=this._self._c||t;return e("ul",[e("li",[this._v("容器的网络拓扑是否已经互联。默认情况下，所有容器都会被连接到 "),e("code",[this._v("docker0")]),this._v(" 网桥上。")]),this._v(" "),e("li",[this._v("本地系统的防火墙软件 -- "),e("code",[this._v("iptables")]),this._v(" 是否允许通过。")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("h4",{attrs:{id:"访问所有端口"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#访问所有端口","aria-hidden":"true"}},[this._v("#")]),this._v(" 访问所有端口")])},function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("p",[t._v("当启动 Docker 服务（即 dockerd）的时候，默认会添加一条转发策略到本地主机 iptables 的 FORWARD 链上。策略为通过（"),s("code",[t._v("ACCEPT")]),t._v("）还是禁止（"),s("code",[t._v("DROP")]),t._v("）取决于配置"),s("code",[t._v("--icc=true")]),t._v("（缺省值）还是 "),s("code",[t._v("--icc=false")]),t._v("。当然，如果手动指定 "),s("code",[t._v("--iptables=false")]),t._v(" 则不会添加 "),s("code",[t._v("iptables")]),t._v(" 规则。")])},function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("p",[t._v("可见，默认情况下，不同容器之间是允许网络互通的。如果为了安全考虑，可以在 "),s("code",[t._v("/etc/docker/daemon.json")]),t._v(" 文件中配置 "),s("code",[t._v('{"icc": false}')]),t._v(" 来禁止它（Ubuntu 14.04 等使用 upstart 的系统在文件 "),s("code",[t._v("/etc/default/docker")]),t._v(" 中配置 "),s("code",[t._v("DOCKER_OPTS=--icc=false")]),t._v("）。")])},function(){var t=this.$createElement,e=this._self._c||t;return e("h4",{attrs:{id:"访问指定端口"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#访问指定端口","aria-hidden":"true"}},[this._v("#")]),this._v(" 访问指定端口")])},function(){var t=this.$createElement,e=this._self._c||t;return e("p",[this._v("在通过 "),e("code",[this._v("-icc=false")]),this._v(" 关闭网络访问后，还可以通过 "),e("code",[this._v("--link=CONTAINER_NAME:ALIAS")]),this._v(" 选项来访问容器的开放端口。")])},function(){var t=this.$createElement,e=this._self._c||t;return e("p",[this._v("例如，在启动 Docker 服务时，可以同时使用 "),e("code",[this._v("icc=false --iptables=true")]),this._v(" 参数来关闭允许相互的网络访问，并让 Docker 可以修改系统中的 "),e("code",[this._v("iptables")]),this._v(" 规则。")])},function(){var t=this.$createElement,e=this._self._c||t;return e("p",[this._v("此时，系统中的 "),e("code",[this._v("iptables")]),this._v(" 规则可能是类似")])},function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"language-shell extra-class"},[s("pre",{pre:!0,attrs:{class:"language-shell"}},[s("code",[s("span",{pre:!0,attrs:{class:"token function"}},[t._v("sudo")]),t._v(" iptables -nL\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("..")]),t._v(".\nChain FORWARD "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("policy ACCEPT"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\ntarget     prot opt "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("source")]),t._v("               destination\nDROP       all  --  0.0.0.0/0            0.0.0.0/0\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("..")]),t._v(".\n")])])])},function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("p",[t._v("之后，启动容器（"),s("code",[t._v("docker run")]),t._v("）时使用 "),s("code",[t._v("--link=CONTAINER_NAME:ALIAS")]),t._v(" 选项。Docker 会在 "),s("code",[t._v("iptable")]),t._v(" 中为 两个容器分别添加一条 "),s("code",[t._v("ACCEPT")]),t._v(" 规则，允许相互访问开放的端口（取决于 "),s("code",[t._v("Dockerfile")]),t._v(" 中的 "),s("code",[t._v("EXPOSE")]),t._v(" 指令）。")])},function(){var t=this.$createElement,e=this._self._c||t;return e("p",[this._v("当添加了 "),e("code",[this._v("--link=CONTAINER_NAME:ALIAS")]),this._v(" 选项后，添加了 "),e("code",[this._v("iptables")]),this._v(" 规则。")])},function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"language-shell extra-class"},[s("pre",{pre:!0,attrs:{class:"language-shell"}},[s("code",[s("span",{pre:!0,attrs:{class:"token function"}},[t._v("sudo")]),t._v(" iptables -nL\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("..")]),t._v(".\nChain FORWARD "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("policy ACCEPT"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\ntarget     prot opt "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("source")]),t._v("               destination\nACCEPT     tcp  --  172.17.0.2           172.17.0.3           tcp spt:80\nACCEPT     tcp  --  172.17.0.3           172.17.0.2           tcp dpt:80\nDROP       all  --  0.0.0.0/0            0.0.0.0/0\n")])])])},function(){var t=this.$createElement,e=this._self._c||t;return e("p",[this._v("注意："),e("code",[this._v("--link=CONTAINER_NAME:ALIAS")]),this._v(" 中的 "),e("code",[this._v("CONTAINER_NAME")]),this._v(" 目前必须是 Docker 分配的名字，或使用 "),e("code",[this._v("--name")]),this._v(" 参数指定的名字。主机名则不会被识别。")])},function(){var t=this.$createElement,e=this._self._c||t;return e("h2",{attrs:{id:"映射容器端口到宿主主机的实现"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#映射容器端口到宿主主机的实现","aria-hidden":"true"}},[this._v("#")]),this._v(" 映射容器端口到宿主主机的实现")])},function(){var t=this.$createElement,e=this._self._c||t;return e("h3",{attrs:{id:"容器访问外部实现"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#容器访问外部实现","aria-hidden":"true"}},[this._v("#")]),this._v(" 容器访问外部实现")])},function(){var t=this.$createElement,e=this._self._c||t;return e("p",[this._v("容器所有到外部网络的连接，源地址都会被 NAT 成本地系统的 IP 地址。这是使用 "),e("code",[this._v("iptables")]),this._v(" 的源地址伪装操作实现的。")])},function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"language-shell extra-class"},[s("pre",{pre:!0,attrs:{class:"language-shell"}},[s("code",[s("span",{pre:!0,attrs:{class:"token function"}},[t._v("sudo")]),t._v(" iptables -t nat -nL\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("..")]),t._v(".\nChain POSTROUTING "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("policy ACCEPT"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\ntarget     prot opt "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("source")]),t._v("               destination\nMASQUERADE  all  --  172.17.0.0/16       "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("!")]),t._v("172.17.0.0/16\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("..")]),t._v(".\n")])])])},function(){var t=this.$createElement,e=this._self._c||t;return e("p",[this._v("其中，上述规则将所有源地址在 "),e("code",[this._v("172.17.0.0/16")]),this._v(" 网段，目标地址为其他网段（外部网络）的流量动态伪装为从系统网卡发出。MASQUERADE 跟传统 SNAT 的好处是它能动态从网卡获取地址。")])},function(){var t=this.$createElement,e=this._self._c||t;return e("h3",{attrs:{id:"外部访问容器实现"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#外部访问容器实现","aria-hidden":"true"}},[this._v("#")]),this._v(" 外部访问容器实现")])},function(){var t=this.$createElement,e=this._self._c||t;return e("p",[this._v("容器允许外部访问，可以在 "),e("code",[this._v("docker run")]),this._v(" 时候通过 "),e("code",[this._v("-p")]),this._v(" 或 "),e("code",[this._v("-P")]),this._v(" 参数来启用。")])},function(){var t=this.$createElement,e=this._self._c||t;return e("p",[this._v("不管用那种办法，其实也是在本地的 "),e("code",[this._v("iptable")]),this._v(" 的 nat 表中添加相应的规则。")])},function(){var t=this.$createElement,e=this._self._c||t;return e("p",[this._v("使用 "),e("code",[this._v("-P")]),this._v(" 时：")])},function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"language-shell extra-class"},[s("pre",{pre:!0,attrs:{class:"language-shell"}},[s("code",[t._v("iptables -t nat -nL\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("..")]),t._v(".\nChain DOCKER "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("2 references"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\ntarget     prot opt "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("source")]),t._v("               destination\nDNAT       tcp  --  0.0.0.0/0            0.0.0.0/0            tcp dpt:49153 to:172.17.0.2:80\n")])])])},function(){var t=this.$createElement,e=this._self._c||t;return e("p",[this._v("使用 "),e("code",[this._v("-p 80:80")]),this._v(" 时：")])},function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"language-shell extra-class"},[e("pre",{pre:!0,attrs:{class:"language-shell"}},[e("code",[this._v("iptables -t nat -nL\nChain DOCKER "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[this._v("(")]),this._v("2 references"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[this._v(")")]),this._v("\ntarget     prot opt "),e("span",{pre:!0,attrs:{class:"token function"}},[this._v("source")]),this._v("               destination\nDNAT       tcp  --  0.0.0.0/0            0.0.0.0/0            tcp dpt:80 to:172.17.0.2:80\n")])])])},function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("ul",[s("li",[t._v("这里的规则映射了 "),s("code",[t._v("0.0.0.0")]),t._v("，意味着将接受主机来自所有接口的流量。用户可以通过 "),s("code",[t._v("-p IP:host_port:container_port")]),t._v(" 或 "),s("code",[t._v("-p IP::port")]),t._v(" 来指定允许访问容器的主机上的 IP、接口等，以制定更严格的规则。")]),t._v(" "),s("li",[t._v("如果希望永久绑定到某个固定的 IP 地址，可以在 Docker 配置文件 "),s("code",[t._v("/etc/docker/daemon.json")]),t._v(" 中添加如下内容。")])])},function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"language-json extra-class"},[s("pre",{pre:!0,attrs:{class:"language-json"}},[s("code",[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token property"}},[t._v('"ip"')]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"0.0.0.0"')]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])])},function(){var t=this.$createElement,e=this._self._c||t;return e("h2",{attrs:{id:"配置-docker0-网桥"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#配置-docker0-网桥","aria-hidden":"true"}},[this._v("#")]),this._v(" 配置 docker0 网桥")])},function(){var t=this.$createElement,e=this._self._c||t;return e("p",[this._v("Docker 服务默认会创建一个 "),e("code",[this._v("docker0")]),this._v(" 网桥（其上有一个 "),e("code",[this._v("docker0")]),this._v(" 内部接口），它在内核层连通了其他的物理或虚拟网卡，这就将所有容器和本地主机都放到同一个物理网络。")])},function(){var t=this.$createElement,e=this._self._c||t;return e("p",[this._v("Docker 默认指定了 "),e("code",[this._v("docker0")]),this._v(" 接口 的 IP 地址和子网掩码，让主机和容器之间可以通过网桥相互通信，它还给出了 MTU（接口允许接收的最大传输单元），通常是 1500 Bytes，或宿主主机网络路由上支持的默认值。这些值都可以在服务启动的时候进行配置。")])},function(){var t=this.$createElement,e=this._self._c||t;return e("ul",[e("li",[e("code",[this._v("--bip=CIDR")]),this._v(" IP 地址加掩码格式，例如 192.168.1.5/24")]),this._v(" "),e("li",[e("code",[this._v("--mtu=BYTES")]),this._v(" 覆盖默认的 Docker mtu 配置")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("p",[this._v("由于目前 Docker 网桥是 Linux 网桥，用户可以使用 "),e("code",[this._v("brctl show")]),this._v(" 来查看网桥和端口连接信息。")])},function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"language-shell extra-class"},[e("pre",{pre:!0,attrs:{class:"language-shell"}},[e("code",[e("span",{pre:!0,attrs:{class:"token function"}},[this._v("sudo")]),this._v(" brctl show\nbridge name     bridge "),e("span",{pre:!0,attrs:{class:"token function"}},[this._v("id")]),this._v("               STP enabled     interfaces\ndocker0         8000.3a1d7362b4ee       no              veth65f9\n                                             vethdda6\n")])])])},function(){var t=this.$createElement,e=this._self._c||t;return e("p",[this._v("*注："),e("code",[this._v("brctl")]),this._v(" 命令在 Debian、Ubuntu 中可以使用 "),e("code",[this._v("sudo apt-get install bridge-utils")]),this._v(" 来安装。")])},function(){var t=this.$createElement,e=this._self._c||t;return e("p",[this._v("每次创建一个新容器的时候，Docker 从可用的地址段中选择一个空闲的 IP 地址分配给容器的 eth0 端口。使用本地主机上 "),e("code",[this._v("docker0")]),this._v(" 接口的 IP 作为所有容器的默认网关。")])},function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"language-shell extra-class"},[s("pre",{pre:!0,attrs:{class:"language-shell"}},[s("code",[s("span",{pre:!0,attrs:{class:"token function"}},[t._v("sudo")]),t._v(" docker run -i -t --rm base /bin/bash\nip addr show eth0\n24: eth0: "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),t._v("BROADCAST,UP,LOWER_UP"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v(" mtu 1500 qdisc pfifo_fast state UP group default qlen 1000\n    link/ether 32:6f:e0:35:57:91 brd ff:ff:ff:ff:ff:ff\n    inet 172.17.0.3/16 scope global eth0\n       valid_lft forever preferred_lft forever\n    inet6 fe80::306f:e0ff:fe35:5791/64 scope "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("link")]),t._v("\n       valid_lft forever preferred_lft forever\nip route\ndefault via 172.17.42.1 dev eth0\n172.17.0.0/16 dev eth0  proto kernel  scope "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("link")]),t._v("  src 172.17.0.3\n")])])])},function(){var t=this.$createElement,e=this._self._c||t;return e("h2",{attrs:{id:"自定义网桥"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#自定义网桥","aria-hidden":"true"}},[this._v("#")]),this._v(" 自定义网桥")])},function(){var t=this.$createElement,e=this._self._c||t;return e("p",[this._v("除了默认的 "),e("code",[this._v("docker0")]),this._v(" 网桥，用户也可以指定网桥来连接各个容器。")])},function(){var t=this.$createElement,e=this._self._c||t;return e("p",[this._v("在启动 Docker 服务的时候，使用 "),e("code",[this._v("-b BRIDGE")]),this._v("或"),e("code",[this._v("--bridge=BRIDGE")]),this._v(" 来指定使用的网桥。")])},function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"language-shell extra-class"},[s("pre",{pre:!0,attrs:{class:"language-shell"}},[s("code",[s("span",{pre:!0,attrs:{class:"token function"}},[t._v("sudo")]),t._v(" systemctl stop docker\n"),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("sudo")]),t._v(" ip "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("link")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("set")]),t._v(" dev docker0 down\n"),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("sudo")]),t._v(" brctl delbr docker0\n")])])])},function(){var t=this.$createElement,e=this._self._c||t;return e("p",[this._v("然后创建一个网桥 "),e("code",[this._v("bridge0")]),this._v("。")])},function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"language-shell extra-class"},[s("pre",{pre:!0,attrs:{class:"language-shell"}},[s("code",[s("span",{pre:!0,attrs:{class:"token function"}},[t._v("sudo")]),t._v(" brctl addbr bridge0\n"),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("sudo")]),t._v(" ip addr add 192.168.5.1/24 dev bridge0\n"),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("sudo")]),t._v(" ip "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("link")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("set")]),t._v(" dev bridge0 up\n")])])])},function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"language-shell extra-class"},[e("pre",{pre:!0,attrs:{class:"language-shell"}},[e("code",[this._v("ip addr show bridge0\n4: bridge0: "),e("span",{pre:!0,attrs:{class:"token operator"}},[this._v("<")]),this._v("BROADCAST,MULTICAST"),e("span",{pre:!0,attrs:{class:"token operator"}},[this._v(">")]),this._v(" mtu 1500 qdisc noop state UP group default\n    link/ether 66:38:d0:0d:76:18 brd ff:ff:ff:ff:ff:ff\n    inet 192.168.5.1/24 scope global bridge0\n       valid_lft forever preferred_lft forever\n")])])])},function(){var t=this.$createElement,e=this._self._c||t;return e("p",[this._v("在 Docker 配置文件 "),e("code",[this._v("/etc/docker/daemon.json")]),this._v(" 中添加如下内容，即可将 Docker 默认桥接到创建的网桥上。")])},function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"language-json extra-class"},[s("pre",{pre:!0,attrs:{class:"language-json"}},[s("code",[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token property"}},[t._v('"bridge"')]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"bridge0"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])])},function(){var t=this.$createElement,e=this._self._c||t;return e("p",[this._v("新建一个容器，可以看到它已经桥接到了 "),e("code",[this._v("bridge0")]),this._v(" 上。")])},function(){var t=this.$createElement,e=this._self._c||t;return e("p",[this._v("可以继续用 "),e("code",[this._v("brctl show")]),this._v(" 命令查看桥接的信息。另外，在容器中可以使用 "),e("code",[this._v("ip addr")]),this._v(" 和 "),e("code",[this._v("ip route")]),this._v(" 命令来查看 IP 地址配置和路由信息。")])},function(){var t=this.$createElement,e=this._self._c||t;return e("h2",{attrs:{id:"工具和示例"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#工具和示例","aria-hidden":"true"}},[this._v("#")]),this._v(" 工具和示例")])},function(){var t=this.$createElement,e=this._self._c||t;return e("h3",{attrs:{id:"pipework"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#pipework","aria-hidden":"true"}},[this._v("#")]),this._v(" pipework")])},function(){var t=this.$createElement,e=this._self._c||t;return e("h3",{attrs:{id:"playground"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#playground","aria-hidden":"true"}},[this._v("#")]),this._v(" playground")])},function(){var t=this.$createElement,e=this._self._c||t;return e("h2",{attrs:{id:"编辑网络配置文件"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#编辑网络配置文件","aria-hidden":"true"}},[this._v("#")]),this._v(" 编辑网络配置文件")])},function(){var t=this.$createElement,e=this._self._c||t;return e("p",[this._v("Docker 1.2.0 开始支持在运行中的容器里编辑 "),e("code",[this._v("/etc/hosts")]),this._v(", "),e("code",[this._v("/etc/hostname")]),this._v(" 和 "),e("code",[this._v("/etc/resolv.conf")]),this._v(" 文件。")])},function(){var t=this.$createElement,e=this._self._c||t;return e("p",[this._v("但是这些修改是临时的，只在运行的容器中保留，容器终止或重启后并不会被保存下来，也不会被 "),e("code",[this._v("docker commit")]),this._v(" 提交。")])},function(){var t=this.$createElement,e=this._self._c||t;return e("h2",{attrs:{id:"示例：创建一个点到点连接"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#示例：创建一个点到点连接","aria-hidden":"true"}},[this._v("#")]),this._v(" 示例：创建一个点到点连接")])},function(){var t=this.$createElement,e=this._self._c||t;return e("p",[this._v("默认情况下，Docker 会将所有容器连接到由 "),e("code",[this._v("docker0")]),this._v(" 提供的虚拟子网中。")])},function(){var t=this.$createElement,e=this._self._c||t;return e("p",[this._v("解决办法很简单：创建一对 "),e("code",[this._v("peer")]),this._v(" 接口，分别放到两个容器中，配置成点到点链路类型即可。")])},function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"language-shell extra-class"},[s("pre",{pre:!0,attrs:{class:"language-shell"}},[s("code",[t._v("docker run -i -t --rm --net"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v("none base /bin/bash\nroot@1f1f4c1f931a:/"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("#")]),t._v("\ndocker run -i -t --rm --net"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v("none base /bin/bash\nroot@12e343489d2f:/"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("#")]),t._v("\n")])])])},function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"language-shell extra-class"},[s("pre",{pre:!0,attrs:{class:"language-shell"}},[s("code",[t._v("docker inspect -f "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'{{.State.Pid}}'")]),t._v(" 1f1f4c1f931a\n2989\ndocker inspect -f "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'{{.State.Pid}}'")]),t._v(" 12e343489d2f\n3004\n"),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("sudo")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("mkdir")]),t._v(" -p /var/run/netns\n"),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("sudo")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("ln")]),t._v(" -s /proc/2989/ns/net /var/run/netns/2989\n"),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("sudo")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("ln")]),t._v(" -s /proc/3004/ns/net /var/run/netns/3004\n")])])])},function(){var t=this.$createElement,e=this._self._c||t;return e("p",[this._v("创建一对 "),e("code",[this._v("peer")]),this._v(" 接口，然后配置路由")])},function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"language-shell extra-class"},[s("pre",{pre:!0,attrs:{class:"language-shell"}},[s("code",[s("span",{pre:!0,attrs:{class:"token function"}},[t._v("sudo")]),t._v(" ip "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("link")]),t._v(" add A "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("type")]),t._v(" veth peer name B\n\n"),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("sudo")]),t._v(" ip "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("link")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("set")]),t._v(" A netns 2989\n"),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("sudo")]),t._v(" ip netns "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("exec")]),t._v(" 2989 ip addr add 10.1.1.1/32 dev A\n"),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("sudo")]),t._v(" ip netns "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("exec")]),t._v(" 2989 ip "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("link")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("set")]),t._v(" A up\n"),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("sudo")]),t._v(" ip netns "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("exec")]),t._v(" 2989 ip route add 10.1.1.2/32 dev A\n\n"),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("sudo")]),t._v(" ip "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("link")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("set")]),t._v(" B netns 3004\n"),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("sudo")]),t._v(" ip netns "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("exec")]),t._v(" 3004 ip addr add 10.1.1.2/32 dev B\n"),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("sudo")]),t._v(" ip netns "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("exec")]),t._v(" 3004 ip "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("link")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("set")]),t._v(" B up\n"),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("sudo")]),t._v(" ip netns "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("exec")]),t._v(" 3004 ip route add 10.1.1.1/32 dev B\n")])])])},function(){var t=this.$createElement,e=this._self._c||t;return e("p",[this._v("此外，也可以不指定 "),e("code",[this._v("--net=none")]),this._v(" 来创建点到点链路。这样容器还可以通过原先的网络来通信。")])},function(){var t=this.$createElement,e=this._self._c||t;return e("p",[this._v("利用类似的办法，可以创建一个只跟主机通信的容器。但是一般情况下，更推荐使用 "),e("code",[this._v("--icc=false")]),this._v(" 来关闭容器之间的通信。")])}],!1,null,null,null);n.options.__file="AdvancedNetwork.md";e.default=n.exports}}]);