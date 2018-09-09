/*
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
*/

/*
* webpack能够处理js文件之间的相互依赖关系
* webpack能够处理js的兼容问题 将高级的语法转换为浏览器可以识别的代码
* */

// import Vue from 'vue/dist/vue.js'
import Vue from 'vue'


// let login = {
//   template: '<h1>login 组件</h1>'
// }

import login from './login.vue'

let vm = new Vue({
  el: '#app',
  data: {
    msg: '123'
  },
  // components: {
  //   login
  // }
  render: createHtml => createHtml(login)
})