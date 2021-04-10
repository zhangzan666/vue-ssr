const template = require('fs').readFileSync('./template.html', 'utf-8')
const renderer = require('vue-server-renderer').createRenderer({template})
const createApp = require('./app')
const server = require('express')()

const context1 = {
  title: 'ssr template',
  meta: `
    <meta name='keyword' content='vue,ssr'>
    <meta name='description' content='vue ssr demo'>
  `
}

server.get('*', (res,req) => {
  const context = {url: req.url} //data
  const app = createApp(context)

  renderer.renderToString(app, context1, (err,html) => {
    if(err) {
      res.status(500).end('Internal Server Error')
      return
    }
    res.end(html)
  })
})

// server.get('*', (req,res) => {
//   // 每次访问 生成一个 vue 实例
//   // const app = new Vue({
//   //   data: {
//   //     url: req.url
//   //   },
//   //   template: `<div>访问的 URL 是：{{ url }}</div>`
//   // })

//   renderer.renderToString(app, context, (err, html) => {
//     if(err) {
//       res.status(500).end('Internal Server Error')
//       return
//     }
//     res.end(html)
//   })
  
// })

server.listen('3000')