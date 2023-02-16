import fetch from './axios'

export function fetchQMusic(params) {
    return fetch({
        url: '/soso/fcgi-bin/client_search_cp',
        method: 'get',
        params
    })
}

export function fetchRegister(data) {
    return fetch({
        url: '/api/v1/user/regist',
        method: 'post',
        data
    })
}

export function fetchLogin(data) {
    return fetch({
        url: '/api/v1/user/login',
        method: 'post',
        data
    })
}

export function fetchAllCates(params) {
    return fetch({
        url: '/api/v1/good/cates',
        method: 'GET',
        params
    })
}

export function fetchGoodList(params) {
    return fetch({
        url: '/api/v1/good/list',
        method: 'get',
        params
    })
}

export function fetchGoodDetail(params) {
    return fetch({
        url: '/api/v1/good/detail',
        method: 'get',
        params
    })
}

export function fetchGoodAddOrEdit(data) {
    return fetch({
        url: '/api/v1/good/addOrEdit',
        method: 'post',
        data
    })
}

export function fetchGoodDel(params) {
    return fetch({
        url: '/api/v1/good/delete',
        method: 'GET',
        params
    })
}

export default {
    fetchQMusic,
    fetchRegister,
    fetchLogin,
    fetchGoodList,
    fetchGoodDetail,
    fetchGoodAddOrEdit,
    fetchGoodDel,
    fetchAllCates
}