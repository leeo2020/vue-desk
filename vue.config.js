module.exports = {
  runtimeCompiler: true,
  devServer: {
    port: 8080,
    proxy: {
      '/soso': {
        target: 'https://c.y.qq.com', // 目标远程服务器
        ws: true,
        changeOrigin: true // 允许改变'域'
      },
      '/api': {
        target: 'http://localhost:9000',
        ws: true,
        changeOrigin: true
      }
    }
  }
}