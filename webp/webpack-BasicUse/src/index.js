import $ from 'jquery'

// 导入css样式表
import './css/index.css'

import './css/index.less'

import './css/index.scss'

$(function () {
  $('li:odd').css('background-color', 'cyan')
  $('li:even').css('background-color', function () {
      return '#' + 'f00012'
  })
})

class ClassWithStaticMethod {
  static staticMethod() {
    return '123123123';
  }
}

console.log(ClassWithStaticMethod.staticMethod())

/*
* webpack能够处理js文件之间的相互依赖关系
* webpack能够处理js的兼容问题 将高级的语法转换为浏览器可以识别的代码
* */