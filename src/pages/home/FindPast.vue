<template>
  <div>
  <h2>昨日回顾</h2>
  <el-cascader
    :options="options"
    :props="props"
    v-model="value"
    @change="change">
  </el-cascader>
  </div>
</template>

<script>

export default {
  name: 'FindPast',
  data(){
    return {
      options:[],
      props:{
        value:'area_code',
        label:'name'
      },
      value:''
    }
  },
  mounted(){
    this.getGeolist()
    console.log('this.$api.geo',this.$api.geo,this.$api.jd)
  },
  methods:{
    getGeolist(){
      this.$api.geo.fetchProvinceLists().then(res=>{
        console.log('res',res)
        this.options = res.list
      })
    },
    change(){}
  }
}
</script>

<style lang="scss" scoped>
 
</style>