const Vue = require('vue')

module.exports = function createApp(context) {
  return new Vue ({
    data: {
      url: context.url
    },
    template: `<div>访问的URL 是：{{url}}</div>` //会 添加 到模板html里
  })
}