<template>
  <div>
      <el-table
          :data="tableData"
          stripe
          ref="yuou"
          style="width: 100%">
        <el-table-column>
            <el-input
                v-model="input"
                placeholder="placeholder"
            >
            </el-input>
        </el-table-column>
        <el-table-column
            prop="name"
            label="姓名"
            width="180">
        </el-table-column>
        <el-table-column
            prop="address"
            label="地址">
        </el-table-column>
      </el-table>
  </div>
</template>
<script>
export default{
  name:'GoodTable',
  data() {
    return {
      tableData: [{
        date: '2016-05-02',
        name: '王小虎',
        address: '上海市普陀区金沙江路 1518 弄'
      }, {
        date: '2016-05-04',
        name: '王小虎',
        address: '上海市普陀区金沙江路 1517 弄'
      }, {
        date: '2016-05-01',
        name: '王小虎',
        address: '上海市普陀区金沙江路 1519 弄'
      }, {
        date: '2016-05-03',
        name: '王小虎',
        address: '上海市普陀区金沙江路 1516 弄'
      }],input:''
    }
  },mounted(){
    console.log('ref',this.$refs)
  }
}
</script>
<style lang="less" scoped>
/deep/ .cell{
  border: none;
  outline:none;
}
/deep/ .el-input{
  border: none;
  outline:none;
}
/deep/ .el-input .el-input__inner{
  border: none;
  outline:none;
}
</style>
