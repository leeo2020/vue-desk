<template>
  <div id="lx-app">
    <router-view v-if="$route.path === '/login'" name="login"></router-view>
    <LxLayout v-else></LxLayout>
  </div>
</template>

<script>
import { LxLayout } from '@/pages/home/'
export default {
  components: {
    LxLayout
  },
  name: 'App',
  provide() {
    return {
      app: '--后台管理系统',
      init: this.init
    }
  },
  methods: {
    init() {
    }
  }
}
</script>

<style>
html,
body {
  width: 100%;
  height: 100%;
}

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  width: 100%;
  height: 100%;
}

#lx-app {
  width: 100%;
  height: 100%;
}
</style>
