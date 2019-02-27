(window.webpackJsonp=window.webpackJsonp||[]).push([[50],{199:function(t,e,s){"use strict";s.r(e);var r=s(0),a=Object(r.a)({},function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"content"},[t._m(0),t._v(" "),s("p",[t._v("CoreOS 的设计是为你提供能够像谷歌一样的大型互联网公司一样的基础设施管理能力来动态扩展和管理的计算能力。")]),t._v(" "),s("p",[t._v("CoreOS 的安装文件和运行依赖非常小,它提供了精简的 Linux 系统。它使用 Linux 容器在更高的抽象层来管理你的服务，而不是通过常规的 YUM 和 APT 来安装包。")]),t._v(" "),s("p",[t._v("同时，CoreOS 几乎可以运行在任何平台：VirtualBox, Amazon EC2, QEMU/KVM, VMware 和 OpenStack 等等，甚至你所使用的硬件环境。")]),t._v(" "),t._m(1),t._v(" "),s("p",[t._v("提起 Docker，我们不得不提的就是 "),s("a",{attrs:{href:"https://coreos.com/",target:"_blank",rel:"noopener noreferrer"}},[t._v("CoreOS"),s("OutboundLink")],1),t._v(".")]),t._v(" "),s("p",[t._v("CoreOS 对 Docker 甚至容器技术的发展都带来了巨大的推动作用。其提供了运行现代基础设施的特性，支持大规模服务部署，使得在基于最小化的现代操作系统上构建规模化的计算仓库成为了可能。")]),t._v(" "),t._m(2),t._v(" "),t._m(3),t._v(" "),s("p",[t._v("CoreOS 被设计成一个基于容器的最小化的现代操作系统。它比现有的 Linux 安装平均节省 40% 的 RAM（大约 114M ）并允许从 PXE 或 iPXE 非常快速的启动。")]),t._v(" "),t._m(4),t._v(" "),s("p",[t._v("利用主动和被动双分区方案来更新 OS，使用分区作为一个单元而不是一个包一个包的更新。这使得每次更新变得快速，可靠，而且很容易回滚。")]),t._v(" "),t._m(5),t._v(" "),s("p",[t._v("应用作为 Docker 容器运行在 CoreOS 上。容器以包的形式提供最大得灵活性并且可以在几毫秒启动。")]),t._v(" "),t._m(6),t._v(" "),s("p",[t._v("CoreOS 可以在一个机器上很好地运行，但是它被设计用来搭建集群。")]),t._v(" "),s("p",[t._v("可以通过 k8s 很容易得使应用容器部署在多台机器上并且通过服务发现把他们连接在一起。")]),t._v(" "),t._m(7),t._v(" "),s("p",[t._v("内置诸如分布式锁和主选举等原生工具用来构建大规模分布式系统得构建模块。")]),t._v(" "),t._m(8),t._v(" "),s("p",[t._v("很容易定位服务在集群的那里运行并当发生变化时进行通知。它是复杂高动态集群必不可少的。在 CoreOS 中构建高可用和自动故障负载。")]),t._v(" "),t._m(9),t._v(" "),t._m(10),t._v(" "),t._m(11),t._v(" "),t._m(12),t._v(" "),t._m(13),s("p",[s("code",[t._v("etcd")]),t._v(" 使用方法请查看 "),s("a",{attrs:{href:"https://yeasy.gitbooks.io/docker_practice/etcd",target:"_blank",rel:"noopener noreferrer"}},[t._v("etcd 章节"),s("OutboundLink")],1),t._v("。")]),t._v(" "),t._m(14),t._v(" "),t._m(15),t._v(" "),t._m(16),t._v(" "),t._m(17),t._v(" "),s("p",[t._v("在这里我们要搭建一个集群环境，毕竟单机环境没有什么挑战不是？")]),t._v(" "),s("p",[t._v("然后为了在你的电脑运行一个集群环境，我们使用 Vagrant。")]),t._v(" "),t._m(18),t._v(" "),s("p",[t._v("如果你第一次接触 CoreOS 这样的分布式平台，运行一个集群看起来好像一个很复杂的任务，这里我们给你展示在本地快速搭建一个 CoreOS 集群环境是多么的容易。")]),t._v(" "),t._m(19),t._v(" "),s("p",[t._v("首先要确认在你本地的机器上已经安装了最新版本的 Virtualbox, Vagrant 和 git。")]),t._v(" "),s("p",[t._v("这是我们可以在本地模拟集群环境的前提条件，如果你已经拥有，请继续，否则自行搜索学习。")]),t._v(" "),t._m(20),t._v(" "),s("p",[t._v("从 CoreOS 官方代码库获取基本配置，并进行修改")]),t._v(" "),s("p",[t._v("首先，获取模板配置文件")]),t._v(" "),t._m(21),s("p",[t._v("获取新的 token")]),t._v(" "),t._m(22),s("p",[t._v("把获取的 token 放到 user-data 文件中，示例如下：")]),t._v(" "),t._m(23),t._m(24),t._v(" "),s("p",[t._v("默认情况下，CoreOS Vagrantfile 将会启动单机。")]),t._v(" "),s("p",[t._v("我们需要复制并修改 config.rb.sample 文件.")]),t._v(" "),s("p",[t._v("复制文件")]),t._v(" "),t._m(25),s("p",[t._v("修改集群配置参数 num_instances为3。")]),t._v(" "),s("p",[t._v("启动集群")]),t._v(" "),t._m(26),s("p",[t._v("添加 ssh 的公匙")]),t._v(" "),t._m(27),s("p",[t._v("连接集群中的第一台机器")]),t._v(" "),t._m(28)])},[function(){var t=this.$createElement,e=this._self._c||t;return e("h1",{attrs:{id:"coreos-项目"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#coreos-项目","aria-hidden":"true"}},[this._v("#")]),this._v(" CoreOS 项目")])},function(){var t=this.$createElement,e=this._self._c||t;return e("h2",{attrs:{id:"coreos-介绍"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#coreos-介绍","aria-hidden":"true"}},[this._v("#")]),this._v(" CoreOS 介绍")])},function(){var t=this.$createElement,e=this._self._c||t;return e("h2",{attrs:{id:"coreos-特性"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#coreos-特性","aria-hidden":"true"}},[this._v("#")]),this._v(" CoreOS 特性")])},function(){var t=this.$createElement,e=this._self._c||t;return e("h3",{attrs:{id:"一个最小化操作系统"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#一个最小化操作系统","aria-hidden":"true"}},[this._v("#")]),this._v(" 一个最小化操作系统")])},function(){var t=this.$createElement,e=this._self._c||t;return e("h3",{attrs:{id:"无痛更新"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#无痛更新","aria-hidden":"true"}},[this._v("#")]),this._v(" 无痛更新")])},function(){var t=this.$createElement,e=this._self._c||t;return e("h3",{attrs:{id:"docker-容器"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#docker-容器","aria-hidden":"true"}},[this._v("#")]),this._v(" Docker 容器")])},function(){var t=this.$createElement,e=this._self._c||t;return e("h3",{attrs:{id:"支持集群"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#支持集群","aria-hidden":"true"}},[this._v("#")]),this._v(" 支持集群")])},function(){var t=this.$createElement,e=this._self._c||t;return e("h3",{attrs:{id:"分布式系统工具"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#分布式系统工具","aria-hidden":"true"}},[this._v("#")]),this._v(" 分布式系统工具")])},function(){var t=this.$createElement,e=this._self._c||t;return e("h3",{attrs:{id:"服务发现"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#服务发现","aria-hidden":"true"}},[this._v("#")]),this._v(" 服务发现")])},function(){var t=this.$createElement,e=this._self._c||t;return e("h2",{attrs:{id:"coreos-工具介绍"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#coreos-工具介绍","aria-hidden":"true"}},[this._v("#")]),this._v(" CoreOS 工具介绍")])},function(){var t=this.$createElement,e=this._self._c||t;return e("p",[e("code",[this._v("CoreOS")]),this._v(" 内置了 "),e("code",[this._v("服务发现")]),this._v("，"),e("code",[this._v("容器管理")]),this._v(" 工具。")])},function(){var t=this.$createElement,e=this._self._c||t;return e("h3",{attrs:{id:"服务发现-2"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#服务发现-2","aria-hidden":"true"}},[this._v("#")]),this._v(" 服务发现")])},function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("p",[s("code",[t._v("CoreOS")]),t._v(" 的第一个重要组件就是使用 "),s("code",[t._v("etcd")]),t._v(" 来实现的服务发现。在 "),s("code",[t._v("CoreOS")]),t._v(" 中 "),s("code",[t._v("etcd")]),t._v(" 默认以 "),s("code",[t._v("rkt")]),t._v(" 容器方式运行。")])},function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"language-bash extra-class"},[e("pre",{pre:!0,attrs:{class:"language-bash"}},[e("code",[this._v("$ rkt list\n\nUUID          APP      IMAGE NAME                        STATE      CREATED            STARTED           NETWORKS\n57581644    etcd    quay.io/coreos/etcd:v3.2.10    running    1 minute ago    1 minute ago\n")])])])},function(){var t=this.$createElement,e=this._self._c||t;return e("h3",{attrs:{id:"容器管理"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#容器管理","aria-hidden":"true"}},[this._v("#")]),this._v(" 容器管理")])},function(){var t=this.$createElement,e=this._self._c||t;return e("p",[this._v("第二个组件就是 "),e("code",[this._v("Docker")]),this._v("，它用来运行你的代码和应用。"),e("code",[this._v("CoreOS")]),this._v(" 内置 "),e("code",[this._v("Docker")]),this._v("，具体使用请参考本书其他章节。")])},function(){var t=this.$createElement,e=this._self._c||t;return e("p",[e("code",[this._v("CoreOS")]),this._v(" 也内置了由自己开发的容器 "),e("code",[this._v("Rkt")]),this._v("，"),e("code",[this._v("Rkt")]),this._v(" 不属于本书的讨论范围，这里不再赘述。")])},function(){var t=this.$createElement,e=this._self._c||t;return e("h2",{attrs:{id:"快速搭建-coreos-集群"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#快速搭建-coreos-集群","aria-hidden":"true"}},[this._v("#")]),this._v(" 快速搭建 CoreOS 集群")])},function(){var t=this.$createElement,e=this._self._c||t;return e("p",[e("em",[this._v("Vagrant 的使用这里不再阐述，请自行学习")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("h3",{attrs:{id:"准备工作"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#准备工作","aria-hidden":"true"}},[this._v("#")]),this._v(" 准备工作")])},function(){var t=this.$createElement,e=this._self._c||t;return e("h3",{attrs:{id:"配置工作"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#配置工作","aria-hidden":"true"}},[this._v("#")]),this._v(" 配置工作")])},function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"language-bash extra-class"},[e("pre",{pre:!0,attrs:{class:"language-bash"}},[e("code",[this._v("$ "),e("span",{pre:!0,attrs:{class:"token function"}},[this._v("git")]),this._v(" clone https://github.com/coreos/coreos-vagrant\n$ "),e("span",{pre:!0,attrs:{class:"token function"}},[this._v("cd")]),this._v(" coreos-vagrant\n$ "),e("span",{pre:!0,attrs:{class:"token function"}},[this._v("cp")]),this._v(" user-data.sample user-data\n")])])])},function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"language-bash extra-class"},[e("pre",{pre:!0,attrs:{class:"language-bash"}},[e("code",[this._v("$ "),e("span",{pre:!0,attrs:{class:"token function"}},[this._v("curl")]),this._v(" https://discovery.etcd.io/new\n")])])])},function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"language-yml extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[this._v("#cloud-config\n\ncoreos:\n  etcd:\n    discovery: https://discovery.etcd.io/<token>\n")])])])},function(){var t=this.$createElement,e=this._self._c||t;return e("h3",{attrs:{id:"启动集群"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#启动集群","aria-hidden":"true"}},[this._v("#")]),this._v(" 启动集群")])},function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"language-bash extra-class"},[e("pre",{pre:!0,attrs:{class:"language-bash"}},[e("code",[e("span",{pre:!0,attrs:{class:"token function"}},[this._v("cp")]),this._v(" config.rb.sample config.rb\n")])])])},function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"language-bash extra-class"},[s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[t._v("vagrant up\n"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v("\nBringing machine "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'core-01'")]),t._v(" up with "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'virtualbox'")]),t._v(" provider"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("..")]),t._v(".\nBringing machine "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'core-02'")]),t._v(" up with "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'virtualbox'")]),t._v(" provider"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("..")]),t._v(".\nBringing machine "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'core-03'")]),t._v(" up with "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'virtualbox'")]),t._v(" provider"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("..")]),t._v(".\n"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("==")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v(" core-01: Box "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'coreos-alpha'")]),t._v(" could not be found. Attempting to "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("find")]),t._v(" and install"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("..")]),t._v(".\n    core-01: Box Provider: virtualbox\n    core-01: Box Version: "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">=")]),t._v(" 0\n"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("==")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v(" core-01: Adding box "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'coreos-alpha'")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("v0"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("for")]),t._v(" provider: virtualbox\n    core-01: Downloading: http://storage.core-os.net/coreos/amd64-usr/alpha/coreos_production_vagrant.box\n    core-01: Progress: 46% "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("Rate: 6105k/s, Estimated "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("time")]),t._v(" remaining: 0:00:16"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n")])])])},function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"language-bash extra-class"},[e("pre",{pre:!0,attrs:{class:"language-bash"}},[e("code",[this._v("ssh-add ~/.vagrant.d/insecure_private_key\n")])])])},function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"language-bash extra-class"},[e("pre",{pre:!0,attrs:{class:"language-bash"}},[e("code",[this._v("vagrant "),e("span",{pre:!0,attrs:{class:"token function"}},[this._v("ssh")]),this._v(" core-01 -- -A\n")])])])}],!1,null,null,null);a.options.__file="coreos.md";e.default=a.exports}}]);