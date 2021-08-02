// // 首先引入Mock
// const Mock = require('mockjs')

// // 设置拦截ajax请求的相应时间
// Mock.setup({
// 	timeout: '200-600',
// })

// let configArray = []

// // 使用webpack的require.context()遍历所有mock文件
// const files = require.context('.', true, /\.js$/)
// console.log('files', files)
// files.keys().forEach((key) => {
// 	if (key === './index.js') return
// 	configArray = configArray.concat(files(key).default)
// })

// // 注册所有的mock服务
// configArray.forEach((item) => {
// 	for (let [path, target] of Object.entries(item)) {
// 		let protocol = path.split('|')
// 		Mock.mock(new RegExp('^' + protocol[1]), protocol[0], target)
// 	}
// })

// Mock.mock('/login', {
// 	//输出数据
// 	name: '@name', //随机生成姓名
// 	//还可以自定义其他数据
// })
// Mock.mock('/list', {
// 	//输出数据
// 	name: '@name', //随机生成姓名
// 	'age|10-20': 10,
// 	//还可以自定义其他数据
// })
