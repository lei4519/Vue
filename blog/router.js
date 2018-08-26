const express = require('express')
const User = require('./models/user.js')
const md5 = require('blueimp-md5')

const router = express.Router()

router
  .get('/', function (req, res) {
    res.render('index.html', {
      user: req.session.user
    })
  })
  .get('/login', function (req, res) {
    res.render('login.html')
  })
  .post('/login', function (req, res) {
    let body = req.body
    User.findOne({
      email: body.email,
      password: md5(md5(body.password))
    })
      .then(function (user) {
        if (user) {
          req.session.user = user
          return res.status(200).json({err_code: 0})
        } else {
          return res.status(200).json({err_code: 1})
        }
      })
      .catch(function () {
        return res.status(500).json({err_code: 500})
      })
  })
  .get('/register', function (req, res) {
    res.render('register.html')
  })
  .post('/register', function (req, res) {
    let body = req.body
    User.findOne({$or: [{email: body.email}, {nickname: body.nickname}]})
      .then(function (data) {
        if (data) {
          if (data.email === body.email) {
            return res.status(200).json({err_code: 1})
          } else {
            return res.status(200).json({err_code: 2})
          }
        } else {
          body.password = md5(md5(body.password))
          new User(body).save(function (err, user) {
            if (err) return res.status(500).json({err_code: 500})

            req.session.user = user
            return res.status(200).json({err_code: 0})
          })
        }
      })
      .catch(function () {
        return res.status(500).json({err_code: 500})
      })

  })
  .get('/logout', function (req, res) {
      req.session.user = null
      res.redirect('/login')
  })


module.exports = router
