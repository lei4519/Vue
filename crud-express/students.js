/*
* 数据操作文件模块
* 职责:
*   操作文件中的数据
*   只处理数据 不关心业务
* */

let fs = require('fs')
let dbPath = './db.json'

// 增
exports.save = function (student, callback) {
  fs.readFile(dbPath,'utf8', function (err, data) {
    if (err) return callback(err)

    let students = JSON.parse(data).students

    student.id = students[students.length - 1].id + 1
    student.age = parseInt(student.age)
    student.gender = parseInt(student.gender)
    students.push(student)

    fs.writeFile(dbPath, JSON.stringify({students:students}), function (err) {
        if (err) return callback(err)

        callback(null)
    })
  })
}

// 删
exports.delete = function (id, callback) {
  fs.readFile(dbPath,'utf8', function (err, data) {
    if (err) return callback(err)

    let students = JSON.parse(data).students
    let deleteId = students.findIndex(item => item.id === id)
    students.splice(deleteId, 1)

    fs.writeFile(dbPath, JSON.stringify({students:students}), function (err) {
        if (err) return callback(err)

        callback(null)
    })
  })
}

// 改
exports.update = function (student, callback) {
  fs.readFile(dbPath,'utf8', function (err, data) {
    if (err) return callback(err)

    let students = JSON.parse(data).students
    student.id = parseInt(student.id)
    student.age = parseInt(student.age)
    student.gender = parseInt(student.gender)
    let stu = students.find(item => item.id === student.id)
    for(let key in student) {
      stu[key] = student[key]
    }

    fs.writeFile(dbPath, JSON.stringify({students:students}), function (err) {
        if (err) return callback(err)

        callback(null)
    })
  })
}

// 查全部
exports.find = function (callback) {
  fs.readFile(dbPath, 'utf8',function (err, data) {
      if (err) return callback(err)

      callback(null, JSON.parse(data).students)
  })
}

//查响应ID
exports.findById = function (id, callback) {
  fs.readFile(dbPath, 'utf8',function (err, data) {
      if (err) return callback(err)
      let students = JSON.parse(data).students
      let student = students.find(item => item.id === id)

      callback(null, student)
  })
}