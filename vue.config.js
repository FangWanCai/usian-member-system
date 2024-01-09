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
    https: false,

    // 配置跨域
    proxy: {
      "/dev-api": {
        // 跨域的地址
        target: "http://localhost:3000",
        // 开启跨域
        changeOrigin: true,
        // 路径重写
        pathRewrite: {
          "^/dev-api": ''
        }
      }
    }
  },
  // 关闭eslint
  lintOnSave: false,
});
