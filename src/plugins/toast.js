import vue from 'vue'
import myToast from './myToast'
//使用vue的extend，以vue文件为基础组件，返回一个可以创建vue组件的特殊构造函数
const ToastConstructor = vue.extend(myToast)

function showToast(text, title) {
  const toastDom = new ToastConstructor({
    el: document.createElement('div'),
    data() {
      return {
        text: text,
        title: title,
        show: true
      }
    }
  })
  document.body.appendChild(toastDom.$el)
}

function registryToast() {
  vue.prototype.$toast = showToast
}

export default registryToast