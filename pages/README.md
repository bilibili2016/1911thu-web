
# 1911Thu Server Frontend

------

## 开发

### 搭建开发环境

1 git clone 拉取源码到本地
2 进入项目目录，执行 npm install 安装依赖，如果了解 yarn 也可以使用，会比 npm 快上许多
3 将 .env.example 文件复制为 .env
4 执行 npm run dev 启动开发服务器

### 目录结构

1 项目目录结构使用了 Nuxt 默认的目录结构
  其中自定义部分如下：
  build/ 构建配置文件按照 dev 和 prod 环境拆分后存放与此
  .env.example 环境变量配置模板
  .env 环境变量配置，该文件通过 dotenv 库加载
  Dockerfile 对于需要容器化部署管理的时候可以直接使用该文件
  start.sh 容器化部署时的入口文件
  components(外) 木偶组件
  **lib  core**
  store 模块 数据持久化方案
  message 模块 项目统一的信息提示
  logger 模块 项目日志分级模块
  constant 模块 常量模块
  .....
  **util**
   filter 过滤器模块
   directive 指令模块
   validate 验证模块
   .....
 **sdk**
 axios交互模块
 pages
 页面组件部分
 plugins
 所有的自定义指令或者插件等类似需要提前注册的东西都请放在 plugins/ 中
 store
 vuex 状态管理模块

### 前端代码规范
1 变量名 使用首字母小写的驼峰命名法 studentName
2 常量   使用大写 MAX_PARAMETER_COUNT = 100
3  除了常量和枚举值以外，不要使用下划线’_’
4 类名使用中间的有斜杠 sign-in（Camel Case）
5 包名使用小写：com.company.project.ui
6 方法使用首字母小写的驼峰命名法：getStudentSchoolType
7 方法参数使用首字母小写的驼峰命名法：setSchoolName(String schoolName)
