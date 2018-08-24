/*
* 路由模块
* 职责:
*   处理路由
*     根据不同的请求方法+请求路径设置具体的请求处理函数
* */

let express = require('express')
let fs = require('fs')
let students = require('./students')

// 创建一个路由容器
let router = express.Router()

// 将路由挂载到路由容器中
router.get('/students', function (req, res) {
  students.find(function (err, data) {
    if (err) return res.status(500).send('Server error')

    res.render('index.html', {
      students: data
    })
  })
})

  .get('/students/new', function (req, res) {
    res.render('new.html')
  })

  .post('/students/new', function (req, res) {
    new students(req.body).save(function (err) {
      if (err) return res.status(500).send('Server error')

      res.redirect('/students')
    })
  })

  .get('/students/edit', function (req, res) {
    students.findById(req.query.id, function (err, data) {
      if (err) return res.status(500).send('Server error')

      res.render('edit.html', {student: data})
    })
  })

  .post('/students/edit', function (req, res) {
    students.findByIdAndUpdate(req.query.id, req.body, function (err, data) {
      if (err) return res.status(500).send('Server error')

      res.redirect('/students')
    })
  })

  .get('/students/delete', function (req, res) {
    students.delete(parseInt(req.query.id), function (err, data) {
      if (err) return res.status(500).send('Server error')

      res.redirect('/students')
    })
  })

// 将路由容器输出
module.exports = router
