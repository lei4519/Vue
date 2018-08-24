/*
* 入口模块
* 职责:
*   创建服务
*   做一些服务相关的配置
*     模板引擎
*     body-parser 解析表单 post请求体
*     提供静态资源服务
*   挂载路由
*   监听端口启动服务
* */

let express = require('express')
let bodyParser = require('body-parser')

let app = express()

// 接收路由容器
let router = require('./router')

// 开放指定目录
app.use('/node_modules/', express.static('./node_modules/'))
app.use('/public/', express.static('./public/'))
// 配置body-parser
app.use(bodyParser.urlencoded({extended: false}))
app.use(bodyParser.json())

// 绑定模板引擎
app.engine('html', require('express-art-template'))

// 将路由容器挂载到app服务上
app.use(router)

app.listen(3000, function () {
  console.log('running...')
})
