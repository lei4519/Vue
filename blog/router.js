const express = require('express')
const User = require('./models/user.js')

const router = express.Router()


router
  .get('/', function (req, res) {
    res.render('index.html')
  })
  .get('/login', function (req, res) {
    res.render('login.html')
  })
  .post('/login', function (req, res) {

  })
  .get('/register', function (req, res) {
    res.render('register.html')
  })
  .post('/register', function (req, res) {
    let body = req.body
    new Promise(function (resolve, reject) {
      User.findOne({
          email: body.email,
      },function (err, data) {
        if (err) {
          reject(err)
        } else {
          if (data) {
            return res.status(200).json({err_code: 1})
          } else {
            resolve()
          }
        }
      })
    })
      .then(function () {
          return new Promise(function (resolve, reject) {
            User.findOne({
              nickname: body.nickname,
            },function (err, data) {
              if (err) {
                reject(err)
              } else {
                if (data) {
                  return res.status(200).json({err_code: 2})
                } else {
                  resolve()
                }
              }
            })
          })
      })
      .then(function () {
          res.status(200).json({message: '成功'})
        console.log('成功')
      })
      .catch(function (err) {
          return res.status(500).json({err_code:500})
      })
  })
  .get('/logout', function (req, res) {

  })


module.exports = router