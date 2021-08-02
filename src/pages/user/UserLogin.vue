<template>
  <Login :user="user" :isLogin="true" @change="change"></Login>
</template>

<script>
import {Login} from '@/components/common/'
export default {
  name:'UserLogin',
  components:{
    Login
  },
  data() {
    return {
      user:{
        username:'admin',
        password:'abc123',
        age:19
      }
    }
  },methods:{
    change(val){
      console.log('输入了************',val)
    }
  }
}
</script>

<style>

</style>