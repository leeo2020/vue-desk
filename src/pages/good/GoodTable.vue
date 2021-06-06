<template>
  <div>
    <!--label-width设置表单域标签名称的宽度-->
    <el-form ref="formValidation" ：model="formValidation" :label-width="1">
      <!--使用iviewGrid栅格布局-->
      <!--type="flex" justify="space-between"子元素等宽排列-->
      <el-row type="flex" justify="space-between">
        <el-col span="4">
          <el-form-item label="监区">
            <Select v-model="formValidation.area">
              <Option v-for="(item, index) in areaList" :key="index">{{
                item.label
              }}</Option>
            </Select>
          </el-form-item>
        </el-col>
        <el-col span="4">
          <el-form-item label="人员姓名">
            <Input v-model="formValidation.name" />
          </el-form-item>
        </el-col>
        <!--因为时间控件有两个input框的宽度-->
        <el-col span="7">
          <FormItem label="DatePicker">
            <el-row>
              <el-col span="11">
                <DatePicker
                  type="date"
                  placeholder="Select date"
                  v-model="formValidation.startTime"
                ></DatePicker>
              </el-col>
              <el-col span="2" style="text-align: center">-</el-col>
              <el-col span="11">
                <TimePicker
                  type="time"
                  placeholder="Select time"
                  v-model="formValidation.endTime"
                ></TimePicker>
              </el-col>
            </el-row>
          </FormItem>
        </el-col>
      </el-row>
      <el-row type="flex" justify="space-between">
        <el-col span="4">
          <el-form-item label="人员姓名">
            <Input v-model="formValidation.name" />
          </el-form-item>
        </el-col>
        <el-col span="4">
          <el-form-item label="人员姓名">
            <Input v-model="formValidation.name" />
          </el-form-item>
        </el-col>
        <el-col span="4">
          <el-form-item label="人员姓名">
            <Input v-model="formValidation.name" />
          </el-form-item>
        </el-col>
        <!--为了第一行与第二行对齐-->
        <el-col span="7"> </el-col>
      </el-row>
    </el-form>
    <Table> </Table>
  </div>
</template>        
<script>
export default {
  data() {
    return {
      formValidation: {},
      areaList: [
        {
          value: 1,
          label: "监狱1",
        },
        {
          value: 2,
          label: "监狱2",
        },
      ],
      formValidate: {
        area: "",
        name: "",
        startTime: "",
        endTime: "",
      },
    };
  },
};
</script>
<style lang="less">
</style>