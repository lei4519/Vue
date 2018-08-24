/*
* 使用MongoDB存储数据
* 数据操作文件模块
* 职责:
*   操作文件中的数据
*   只处理数据 不关心业务
* */
const mongoose = require('mongoose')

const Schema = mongoose.Schema

mongoose.connect('mongodb://localhost/students')

let studentsSchema = new Schema({
  name: {
    type: String,
    required: true
  },
  gender: {
    type: Number,
    enum: [0, 1],
    default: 0
  },
  age: {
    type: Number,
  },
  hobbies: {
    type: String
  }
})

module.exports = mongoose.model('Student', studentsSchema)