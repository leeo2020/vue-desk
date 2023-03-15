<template>
  <div>
    <h2>企业首页{{ app }}</h2>
    <button @click="getChildrenFunction">触发Toast</button>
    <test-panel ref="panel"></test-panel>
    <test-toast ref="toast"></test-toast>
    <test-msg ref="msg"></test-msg>
  </div>
</template>

<script>
export default {
  inject: {
    app: {
      default: 'app'
    },
    init: { default: '' }
  },
  data() {
    return {
      testArr: [1, 2, 3, 6]
    }
  },
  created() {
    this.init()
    this.$toast('只是有时候,一切都会有尽头', '提醒框' + parseInt(Math.random() * 100))
  },
  methods: {
    getChildrenFunction() {
      this.$nextTick(() => {
        this.$refs.toast.toastPlugin('在父组件触发调用toast', 2500)
      })
    }
  }
};
</script>

<style scoped></style>
