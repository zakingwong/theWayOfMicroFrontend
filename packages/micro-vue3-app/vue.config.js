const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  transpileDependencies: true,
  // 内联 CSS 样式处理
  css: { extract: false }
})
