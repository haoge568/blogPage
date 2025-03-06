(window.webpackJsonp=window.webpackJsonp||[]).push([[124],{661:function(t,a,s){"use strict";s.r(a);var e=s(1),r=Object(e.a)({},(function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[s("h2",{attrs:{id:"git基本操作"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#git基本操作"}},[t._v("#")]),t._v(" git基本操作")]),t._v(" "),s("h3",{attrs:{id:"一、git客户端-本地仓库-的一些操作"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#一、git客户端-本地仓库-的一些操作"}},[t._v("#")]),t._v(" 一、git客户端（本地仓库）的一些操作")]),t._v(" "),s("ul",[s("li",[t._v("1.设置账户(需要和github或gitee账户设置一致)")])]),t._v(" "),s("div",{staticClass:"language-js extra-class"},[s("pre",{pre:!0,attrs:{class:"language-js"}},[s("code",[t._v("git config "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("--")]),t._v("global user"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("name xxx\ngit config "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("--")]),t._v("global user"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("email xxx@foxmail"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("com\n")])])]),s("ul",[s("li",[t._v("2.查看设置")])]),t._v(" "),s("div",{staticClass:"language-js extra-class"},[s("pre",{pre:!0,attrs:{class:"language-js"}},[s("code",[t._v("git config "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("--")]),t._v("list\nuser"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("name"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" xxx\nuser"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("email"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" xxx@foxmail"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("com\n")])])]),s("ul",[s("li",[t._v("3.创建git本地仓库")])]),t._v(" "),s("div",{staticClass:"language-js extra-class"},[s("pre",{pre:!0,attrs:{class:"language-js"}},[s("code",[t._v("git init\n此时会出现提示 "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" inialized empty Git repository "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("in")]),t._v(" d"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),t._v("com"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),t._v("hao"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("git\n")])])]),s("ul",[s("li",[t._v("4.查看git状态")])]),t._v(" "),s("div",{staticClass:"language-js extra-class"},[s("pre",{pre:!0,attrs:{class:"language-js"}},[s("code",[t._v("git status\n一般来说会显示需要提交的文件（uncommited）和未追踪的文件（untracked）\nuncommited：已有的，刚被修改尚未提交的\nuntracked：原先没有的，新建的\n")])])]),s("ul",[s("li",[t._v("5.添加git文件到暂存区（需要和版本库区分）")])]),t._v(" "),s("div",{staticClass:"language-js extra-class"},[s("pre",{pre:!0,attrs:{class:"language-js"}},[s("code",[t._v("git add "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),t._v("name"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v("\n")])])]),s("ul",[s("li",[t._v("6.git提交文件")])]),t._v(" "),s("div",{staticClass:"language-js extra-class"},[s("pre",{pre:!0,attrs:{class:"language-js"}},[s("code",[t._v("git commit "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),t._v("m "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"add a function in test.java"')]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),t._v("m表示注释，为提交时的说明，必须要有！\n")])])]),s("ul",[s("li",[t._v("7.git删除文件（夹）")])]),t._v(" "),s("div",{staticClass:"language-js extra-class"},[s("pre",{pre:!0,attrs:{class:"language-js"}},[s("code",[t._v("git rm test"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("txt "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//删除文件")]),t._v("\ngit rm "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),t._v("r filebook "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//删除文件夹")]),t._v("\ngit rm和直接删除的区别在于git rm会将此文件的操作记录删除，而直接删除仅仅是删除了物理文件，没有删除和此文件相关的记录。git rm后会在版本库产生区别（有操作日志），而直接删除没有。\n可以用下面两种操作在版本库中删除文件：\ngit rm test"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token parameter"}},[t._v("txt")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=>")]),t._v(" git commit "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),t._v("m "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'delete a file'")]),t._v("\nrm test"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token parameter"}},[t._v("txt")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=>")]),t._v(" git commit "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),t._v("am "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'delete a file'")]),t._v("\n注意：命令git rm用于删除一个文件。如果一个文件已经被提交到版本库，那么你永远不用担心误删，但是要小心，你只能恢复文件到最新版本，你会 丢失最近一次提交后你修改的内容。\n")])])]),s("ul",[s("li",[t._v("8.git操作日志")])]),t._v(" "),s("div",{staticClass:"language-js extra-class"},[s("pre",{pre:!0,attrs:{class:"language-js"}},[s("code",[t._v("git log "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("--")]),t._v("decorate "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("--")]),t._v("graph "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("--")]),t._v("oneline "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("--")]),t._v("all #显示当前及之前的版本号\ngit log "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("--")]),t._v("pretty"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v("oneline #将版本历史显示为一行， 历史版本号全部显示\ngit log "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("--")]),t._v("pretty"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v("oneline "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("--")]),t._v("abbrev"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),t._v("commit #将版本历史显示为一行， 历史版本号部分显示\ngit log "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("--")]),t._v("graph #查看分支合并图\n")])])]),s("ul",[s("li",[t._v("9.版本回退")])]),t._v(" "),s("div",{staticClass:"language-js extra-class"},[s("pre",{pre:!0,attrs:{class:"language-js"}},[s("code",[t._v("执行版本退回后，本地工作区的内容会自动和回退到的版本库版本的内容保持同步\ngit reset "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("--")]),t._v("hard "),s("span",{pre:!0,attrs:{class:"token constant"}},[t._v("HEAD")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("^")]),t._v(" 回退到上一个版本\ngit reset "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("--")]),t._v("hard "),s("span",{pre:!0,attrs:{class:"token constant"}},[t._v("HEAD")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("^")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("^")]),t._v(" 回退到上上个版本，以此类推，一次提交即为一个版本\ngit reset "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("--")]),t._v("hard e9efa77 回退到 e9efa77 版本\n")])])]),s("ul",[s("li",[t._v("10.git还原操作")])]),t._v(" "),s("div",{staticClass:"language-js extra-class"},[s("pre",{pre:!0,attrs:{class:"language-js"}},[s("code",[s("span",{pre:!0,attrs:{class:"token function"}},[t._v("丢弃工作区的操作，但不会丢失暂存区的操作")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("add操作能将更改添加到暂存区"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("，实际上就是用版本库里的版本替换工作区的版本，无论工作区是修改还是删除，都可以“一键还原”\ngit checkout "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("--")]),t._v(" readme"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("txt\n")])])]),s("ul",[s("li",[t._v("11.git暂存区撤销操作")])]),t._v(" "),s("div",{staticClass:"language-js extra-class"},[s("pre",{pre:!0,attrs:{class:"language-js"}},[s("code",[t._v("工作区修改了文件，而且执行了add，但还没执行commit，暂存区还是可以撤销的\ngit reset "),s("span",{pre:!0,attrs:{class:"token constant"}},[t._v("HEAD")]),t._v(" readme"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("txt\n备注：git reset命令既可以回退版本，也可以把暂存区的修改回退到工作区。当我们用"),s("span",{pre:!0,attrs:{class:"token constant"}},[t._v("HEAD")]),t._v("时，表示最新的版本。\n")])])])])}),[],!1,null,null,null);a.default=r.exports}}]);