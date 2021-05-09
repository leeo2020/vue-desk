import testPanel from './panel.vue'
import testToast from './toast.vue'
import testMsg from './msg.vue'

let test = {}
test.install = function(Vue) {
  Vue.prototype.$msg = 'hello I am test.js'
  Vue.prototype.$myMethod = function(arr) {
    if (Array.isArray(arr)) {
      if (arr.length < 0) {
        return false
      } else {
        arr = arr.join('连接你我')
        return arr
      }
    }
  }
  Vue.component(testPanel.name, testPanel)
  Vue.component(testToast.name, testToast)
  Vue.component(testMsg.name, testMsg)
}

export default test