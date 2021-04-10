import {createApp} from './app'

export default context => {

  // 返回 一个 Promise 以便 服务器能够等待所有的内容 在渲染前, 就已经准备就绪

  return new Promise((resolve, reject) => {
    const {app, router} = createApp
    router.push(context.url)

    //等待router 将可能的 异步组件 和 钩子函数解析完

    router.onReady(() => {
      const matchedComponents = router.getMatchedComponents()
      
      // 匹配不到 路由 执行reject 函数
      if(!matchedComponents.length) {
        return reject({code : 400})
      }
      resolve(app)
    },reject)
  })
  
  
}