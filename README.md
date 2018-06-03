# Stardust Server Frontend
Stardust Server Frontend


开发


搭建开发环境



git clone 拉取源码到本地
进入项目目录
执行 npm install 安装依赖，如果了解 yarn 也可以使用，会比 npm 快上许多
将 .env.example 文件复制为 .env
修改 .env 中相关配置，关于代理配置参见 关于 Nuxt->代理 一节
执行 npm run dev 启动开发服务器，由于引用了较多第三方 scss ，所以启动较慢，后续开发中除非修改到核心 scss 文件否则打包速度都会很快



目录结构

项目目录结构使用了 Nuxt 默认的目录结构，详见 https://nuxtjs.org/guide/directory-structure

其中自定义部分如下：


build/ 构建配置文件按照 dev 和 prod 环境拆分后存放与此
.env.example 环境变量配置模板
.env 环境变量配置，该文件通过 dotenv 库加载
Dockerfile 对于需要容器化部署管理的时候可以直接使用该文件
start.sh 容器化部署时的入口文件



自定义指令

因为指令是需要在初始化任何组件之前注册的，不然就可能发生组件初始化过程中用到未注册的组件而初始化失败，所以所有的自定义指令或者插件等类似需要提前注册的东西都请放在 plugins/ 中，目前已存在的自定义指令如下：



v-holder 是将 Holderjs 的功能接入了 Vue 中，需要占位图时可以使用该指令实现，详见 http://holderjs.com/




关于 Nuxt


部署

通过 Nuxt 开发的 App 有两种部署方式，一种是本身作为 Node 服务提供静态页面，另一种是打包成静态文件 html, js, css 等然后通过 nginx 部署。综合来看以 Node 服务的形式进行部署能够赋予更多的灵活性，所以本项目就始终采用这种形式部署了。


代理

Node 服务形式的部署本身就支持 Proxy ，然后又因为 CORS 的问题，所以 ajax 请求一般是不能跨域的，所以本项目存在代理相关的配置。以下是两个非常有用的场景：


可以本地启动开发项目，然后将代理的地址设置为测试服务器，如此一来前端开发即可避免部署整套后端服务。
线上部署时，前后端分离部署不同服务器也没有任何问题，因为 ajax 总是先发到 Node 服务然后再代理到后端服务。
# 重构进度

#v1 stardust 4/24
#新建项目
#项目展示
# 做题
# 审题