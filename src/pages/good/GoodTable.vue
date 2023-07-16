<template>
  <div>
    <!--label-width设置表单域标签名称的宽度-->
    <el-form ref="formValidation" :model="formValidation" label-width="1">
      <!--使用iviewGrid栅格布局-->
      <!--type="flex" justify="space-between"子元素等宽排列-->
      <el-row type="flex" justify="space-between">
        <el-col :span="4">
          <el-form-item label="监区">
            <el-select v-model="formValidation.area">
              <el-option
                v-for="(item, index) in areaList"
                :value="item.label"
                :key="index"
                >{{ item.label }}</el-option
              >
            </el-select>
          </el-form-item>
        </el-col>
        <el-col :span="4">
          <el-form-item label="人员姓名">
            <Input v-model="formValidation.name" />
          </el-form-item>
        </el-col>
        <!--因为时间控件有两个input框的宽度-->
        <el-col :span="7">
          <el-form-item label="DatePicker">
            <el-row>
              <el-col :span="11">
                <el-date-picker
                  type="date"
                  placeholder="Select date"
                  v-model="formValidation.startTime"
                  name="DatePicker"
                ></el-date-picker>
              </el-col>
              <el-col :span="2" style="text-align: center">-</el-col>
              <el-col :span="11">
                <el-time-picker
                  type="time"
                  placeholder="Select time"
                  v-model="formValidation.endTime"
                ></el-time-picker>
              </el-col>
            </el-row>
          </el-form-item>
        </el-col>
      </el-row>
      <el-row type="flex" justify="space-between">
        <el-col :span="4">
          <el-form-item label="人员姓名">
            <Input v-model="formValidation.name" />
          </el-form-item>
        </el-col>
        <el-col :span="4">
          <el-form-item label="人员姓名">
            <Input v-model="formValidation.name" />
          </el-form-item>
        </el-col>
        <el-col :span="4">
          <el-form-item label="人员姓名">
            <Input v-model="formValidation.name" />
          </el-form-item>
        </el-col>
        <el-col :span="7"> </el-col>
      </el-row>
    </el-form>
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
<style lang="less"></style>
