<template>
  <div>
    <el-checkbox-group
        v-model="newCheckList"
        @change="varyVal"
    >
      <el-checkbox label="复选框 A"></el-checkbox>
      <el-checkbox label="复选框 B"></el-checkbox>
      <el-checkbox label="复选框 C"></el-checkbox>
      <el-checkbox label="禁用"></el-checkbox>
      <el-checkbox label="复选框 X"></el-checkbox>
      <el-checkbox label="复选框 Y"></el-checkbox>
      <el-checkbox label="复选框 Z"></el-checkbox>
      <el-checkbox label="复选框其他"></el-checkbox>
    </el-checkbox-group>
  </div>
</template>
<script>
export default{
  name:'YouChoice',
  data () {
    return {
      newCheckList:[],
      checkList: [],
      tempList:[],
      options:[
        "复选框 A",
        "复选框 B",
        "复选框 C",
        "禁用",
        "复选框 X",
        "复选框 Y",
        "复选框 Z",
        "复选框其他"
      ]
    };
  },methods:{//判断是哪个键按下
    varyVal(val){
      this.newCheckList=val//如果是添选
      console.log('选项',this.newCheckList)
      let diff =this.newCheckList.filter(elem=> { return this.tempList.indexOf(elem)===-1})
      diff.concat(this.tempList.filter(elem=>{ return !(this.newCheckList.indexOf(elem)>-1)}))
      diff= this.options.indexOf(diff[0])
      if(this.newCheckList.indexOf(this.options[this.options.length-1])>-1){
        // console.log('diff',diff)
        this.newCheckList.splice(this.newCheckList.indexOf(this.options[this.options.length-1],1))
      }//敢带哦其他
      switch(diff){
        case 0:
          if(this.newCheckList.indexOf(this.options[1])>-1){
            this.newCheckList.splice(this.newCheckList.indexOf(this.newCheckList.indexOf(this.options[1]),1))
          }
          if(this.newCheckList.indexOf(this.options[2])>-1){
            this.newCheckList.splice(this.newCheckList.indexOf(this.newCheckList.indexOf(this.options[2]),1))
          }
          this.deleteOne()
          break;
        case 1:
          if(this.newCheckList.indexOf(this.options[0])>-1){
            this.newCheckList.splice(this.newCheckList.indexOf(this.newCheckList.indexOf(this.options[0]),1))
          }
          if(this.newCheckList.indexOf(this.options[2])>-1){
            this.newCheckList.splice(this.newCheckList.indexOf(this.newCheckList.indexOf(this.options[2]),1))
          }
          break;
        case 2:
          if(this.newCheckList.indexOf(this.options[0])>-1){
            this.newCheckList.splice(this.newCheckList.indexOf(this.newCheckList.indexOf(this.options[0]),1))
          }
          if(this.newCheckList.indexOf(this.options[1])>-1){
            this.newCheckList.splice(this.newCheckList.indexOf(this.newCheckList.indexOf(this.options[1]),1))
          }
          break;
        case 3:
          break;
        case 4:
          if(this.newCheckList.indexOf(this.options[5])>-1){
            this.newCheckList.splice(this.newCheckList.indexOf(this.newCheckList.indexOf(this.options[5]),1))
          }
          if(this.newCheckList.indexOf(this.options[6])>-1){
            this.newCheckList.splice(this.newCheckList.indexOf(this.newCheckList.indexOf(this.options[6]),1))
          }
          break;
        case 5:
          if(this.newCheckList.indexOf(this.options[4])>-1){
            this.newCheckList.splice(this.newCheckList.indexOf(this.newCheckList.indexOf(this.options[4]),1))
          }
          if(this.newCheckList.indexOf(this.options[6])>-1){
            this.newCheckList.splice(this.newCheckList.indexOf(this.newCheckList.indexOf(this.options[6]),1))
          }
          break;
        case 6:
          if(this.newCheckList.indexOf(this.options[5])>-1){
            this.newCheckList.splice(this.newCheckList.indexOf(this.newCheckList.indexOf(this.options[5]),1))
          }
          if(this.newCheckList.indexOf(this.options[4])>-1){
            this.newCheckList.splice(this.newCheckList.indexOf(this.newCheckList.indexOf(this.options[4]),1))
          }
          break;
        default:
          this.newCheckList=["复选框其他"]
      }
      console.log('this.newCheckList',this.newCheckList)
      this.tempList=this.newCheckList
    },
    deleteOne(){
      if(this.newCheckList.indexOf(this.options[this.options.length-1])>-1){
        console.log('diff','有其他想')
        this.newCheckList.splice(this.newCheckList.indexOf(this.options[this.options.length-1],1))
      }//敢带哦其他
    }


      // if(this.newCheckList.length>0){
      // this.newCheckList.map(elem=>{
      //   // if(this.options.indexOf(elem)===this.options.length-1){//其他被选中
      //   //   this.checkList.length=0
      //   //   this.checkList.push(this.options[this.options.indexOf(elem)])
      //   //   console.log('this.checkList',this.checkList,this.options[this.options.indexOf(elem)])
      //   // }
      //   this.CheckList.map(ele=>{
      //
      //   })
      //
      // })
      // }

  },
  mounted(){
  this.tempList=this.newCheckList
  }
}
</script>
<style lang="less">

</style>
