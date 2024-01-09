const { defineConfig } = require("@vue/cli-service");
module.exports = defineConfig({
  transpileDependencies: true,
  devServer: {
    // 端口号
    port: 8888,
    // 主机名
    host: 'localhost',
    // 自动启动浏览器
    open: true,
    // http协议
    // https: false,
  },
  // 关闭eslint
  lintOnSave: false,
});
