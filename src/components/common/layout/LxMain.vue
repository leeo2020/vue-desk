<template>
  <div class="lx-main">
    <keep-alive  v-if="$route.meta.keepAlive">
      <router-view name='default'></router-view>
    </keep-alive>
     <router-view name='default' v-else></router-view>
    </div>
</template>

<script>
export default {
  data() {
      return {
        form: {
          name: '',
          region: '',
          date1: '',
          date2: '',
          delivery: false,
          type: [],
          resource: '',
          desc: ''
        }
      }
    },
    updated(){
      // console.log('缓存吗？',this.$route.meta.keepAlive)
    },
    methods: {
    }
}
</script>

<style lang="scss" scoped>
.lx-main{
  height:100%;
  li{
    height:25px;
    line-height:25px;
  }
  h2{
    line-height: 25px;
    padding-bottom:25px;
  }
  ul{
    margin-top:25px;
  }
}
</style>>