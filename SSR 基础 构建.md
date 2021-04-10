# SSR 基础 构建

1. 创建app.js 

    负责 export 导出 createApp 函数，返回Vue 实例

2. 创建entry-client，

   负责 创建根 Vue 实例， 并 直接 挂载 到DOM，导入 vreateAPP 函数

3. 创建entry-server

   default export 导出函数 ， 并 每次渲染 重复调用此函数；基本负责创建 和返回 应用程序实例

4. 创建App.vue 

   根 组件

5. 创建 router

   暴露 一个 createRouter 函数， 返回一个 router实例， 并 引用到app.js 中