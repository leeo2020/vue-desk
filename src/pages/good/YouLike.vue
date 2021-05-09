<template>
  <keep-alive>
  <div>
      <el-row :gutter="10" type="flex" justify="center">
       <el-col>
         <el-radio-group v-model="radio1" @change="radio1Value">
           <el-radio :label="3">X</el-radio>
           <el-radio :label="6">Y</el-radio>
           <el-radio :label="9">Z</el-radio>
         </el-radio-group>
       </el-col>
       <span>{{time}}</span>
      <el-col>
        <el-radio-group v-model="radio2" @change="radio2Value">
          <el-radio :label="2">U</el-radio>
          <el-radio :label="5">V</el-radio>
          <el-radio :label="8">W</el-radio>
        </el-radio-group>
      </el-col>
    </el-row>
    <el-form ref="form" label-width="80px">
      <el-form-item label="运营商">
        <el-select v-model="values" multiple  placeholder="请选择" @change="selectedChange">
          <el-option v-for="item in selects" :key="item.value" :label="item.label" :value="item.value"/>
        </el-select>
      </el-form-item>
    </el-form>
  </div>
</keep-alive>
</template>

<script>
export default {
  name:'YouLike',
  data () {
    return {
      time:new Date(),
      radio1: 3,
      radio2: 5,
      selects: [{
        value: '0',
        label: '不限'
      }, {
        value: '1',
        label: '移动'
      }, {
        value: '2',
        label: '联通'
      }, {
        value: '3',
        label: '电信'
      }],
      values: []
    };
  },methods:{
    radio1Value(val){
      console.log(val)
    },
    radio2Value(val){
      console.log(val)
    },
    selectedChange(val) {
      if(val[val.length -1] == '0' && this.values.indexOf('1') > -1 ){
        this.values.pop()
        return;
      }else if(val[val.length -1 ] == '1' && this.values.indexOf('0') > -1){
        this.values.pop()
        return
      }else if(val[val.length -1 ] == '0' && this.values.indexOf('2') > -1){
        this.values.pop()
        return
      }else if(val[val.length -1 ] == '2' && this.values.indexOf('0') > -1){
        this.values.pop()
        return
      }else if(val[val.length -1 ] == '0' && this.values.indexOf('3') > -1){
        this.values.pop()
        return
      }else if(val[val.length -1 ] == '3' && this.values.indexOf('0') > -1){
        this.values.pop()
        return
    }
      console.log(this.values)
  }

}
}
</script>
<style lang="scss" scoped>
*{
  padding:0;
  margin:0;
}
html,body{
  width:100%;
  height:100%;

}
</style>
