import axios from 'axios'

const baseURL = 'http://localhost:8080'
const instance = axios.create({
	baseURL,
	timeout: 7000,
	headers: {},
})

instance.interceptors.request.use(
	(config) => {
		return config
	},
	function(err) {
		return Promise.reject(err)
	}
)

instance.interceptors.response.use(
	(res) => {
		console.log('请求结果', res.status, res.data.code)
		let rst = null
		if (res.status === 200) {
			if (
				(res.data && res.data.code === 0) ||
				(res.data && res.data.err === 0) ||
				(res.data && res.data.code === '200')
			) {
				rst = res.data.data
			} else {
				console.log('请求失败')
			}
		} else {
			console.log('请求失败')
		}
		return rst
	},
	function(err) {
		return Promise.reject(err)
	}
)

export default instance
