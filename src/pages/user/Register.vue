<template>
 <Login :user="user"></Login>  
</template>

<script>
import {Login} from '@/components/common/'
export default {
  name:'Register',
  components:{
    Login
  },
  data() {
    return {
      user:{
        username:'',
        password:'',
        password2:''
      }
    }
  }
}
</script>

<style>

</style>