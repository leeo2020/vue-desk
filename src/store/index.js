import Vue from 'vue'
import VueX from 'vuex'
Vue.use(VueX)
import todo from './modules/todo'
import music from './modules/music'
import good from './modules/good'

export default new VueX.Store({
    state: {},
    getters: {},
    mutations: {},
    actions: {},
    modules: {
        todo,
        music,
        good
    }
})