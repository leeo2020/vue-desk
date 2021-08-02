import fetch from '@/utils/fetch'

export function fetchRegister(data) {
	return fetch({
		url: '/api/v1/user/regist',
		method: 'post',
		data,
	})
}

export function fetchLogin(data) {
	return fetch({
		url: '/api/v1/user/login',
		method: 'post',
		data,
	})
}

export default {
	fetchRegister,
	fetchLogin,
}
