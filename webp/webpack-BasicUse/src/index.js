import $ from 'jquery'

$(function () {
  $('li:odd').css('background-color', 'lightblue')
  $('li:even').css('background-color', function () {
      return '#' + 'D97634'
  })
})

/*
* webpack能够处理js文件之间的相互依赖关系
* webpack能够处理js的兼容问题 将高级的语法转换为浏览器可以识别的代码
* */