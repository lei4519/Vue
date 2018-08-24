# Express - crud

## 起步

- 初始化
- 模板处理

## 路由设计

| 请求方法 |     请求路径     | get参数 |         post参数        |         备注         |
|----------|------------------|---------|-------------------------|----------------------|
| get      | /students        |         |                         | 渲染首页|
| get      | /students/new    |         |                         | 渲染添加学生页面|
| post     | /students/new    |         | name/age/gender/hobbies | 处理添加学生信息请求 |
| get      | /students/edit   | ID      |                         | 渲染编辑页面|
| post     | /students/edit   |         | id/name/age/gender      | 处理编辑页面请求|
| get      | /students/delete | id      |                         | 处理删除页面请求|
