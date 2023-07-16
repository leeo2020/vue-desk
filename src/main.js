import Vue from 'vue'
import ElementUI from 'element-ui'
import dataV from '@jiaminghi/data-view'
// import 'element-ui/lib/theme-chalk/index.css'
// import '../static/theme/index.css'
// import VTK from 'vue-vtk-js';
import App from './App.vue'

// console.log('_____VTK_____', VTK)

import TestToast from '@/plugins/test.js'
Vue.use(TestToast)

// Vue.use(VTK)

import Toast from '@/plugins/toast.js'
Vue.use(Toast)

var ElTreeGrid = require('element-tree-grid')
Vue.component(ElTreeGrid.name, ElTreeGrid)

Vue.use(ElementUI, { size: "small", zIndex: 3000 })
Vue.use(dataV)
Vue.config.productionTip = false

import router from './router'
import store from './store/'

import api from '@/utils/api'
Vue.prototype.$api = api
import img from '@/utils/img'
Vue.prototype.$img = img

new Vue({
  store,
  router,
  render: h => h(App),
}).$mount('#app')