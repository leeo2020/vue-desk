import Vue from 'vue'
import VueRouter from 'vue-router'
Vue.use(VueRouter)
import arr from './pages/'

let routes = []
arr.map(elem => {
    routes = [...routes, ...elem.arr]
})

export default new VueRouter({
    mode: "hash",
    routes: [
        ...routes,
        { path: '/*', redirect: '/' }
    ]
})