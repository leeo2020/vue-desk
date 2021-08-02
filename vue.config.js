module.exports = {
	runtimeCompiler: true,
	devServer: {
		port: 8080,
		open: true,
		proxy: {
			'/soso': {
				target: 'https://c.y.qq.com', // 目标远程服务器
				ws: true,
				changeOrigin: true, // 允许改变'域'
			},
			'/api': {
				target: 'http://localhost:9000',
				ws: true,
				changeOrigin: true,
				pathRewrite: {
					'^/api/v1': '/api/v1',
				},
			},
			'/geo': {
				target: 'http://localhost:9010',
				ws: true,
				changeOrigin: true,
				pathRewrite: {
					'^/geo': '/geo',
				},
			},
		},
	},
}
