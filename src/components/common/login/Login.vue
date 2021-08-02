<template>
  <div class="lx-login-wrap">
    <div class="lx-login">
      <el-dialog
        title=""
        :visible.sync="dialogVisible"
        width="width"
        :before-close="dialogBeforeClose"
      >
        <div>
          <el-form :model="user" :rules="rules" label-width="100px">
            <el-form-item prop="username" label="用户名">
              <el-input v-model="user.username" @input="input"></el-input>
            </el-form-item>

            <el-form-item prop="password" label="密码">
              <el-input
                v-model="user.password"
                show-password
                @input="input"
              ></el-input>
            </el-form-item>

            <!-- <el-form-item
              prop="age"
              label="年龄"
              v-if="user.hasOwnProperty('age')"
            >
              <el-input v-model="user.age" @input="input"></el-input>
            </el-form-item> -->

            <el-form-item
              prop="password"
              label="确认密码"
              v-if="user.hasOwnProperty('password2')"
            >
              <el-input
                v-model="user.password2"
                show-password
                @input="input"
              ></el-input>
            </el-form-item>
            <!-- <el-button
              v-if="user.hasOwnProperty('password2')"
              type="primary"
              @click="registerSubmit"
              >确定</el-button
            > -->
            <!-- <el-button v-else type="primary" @click="loginSubmit"
              >确定</el-button
            > -->
          </el-form>
        </div>
        <div slot="footer" class="align-btn">
          <el-button @click="dialogVisible = false">取 消</el-button>
          <el-button type="primary" @click="onSubmit(isLogin)"
            >确 定</el-button
          >
        </div>
      </el-dialog>
    </div>
  </div>
</template>

<script>
import {codeMapper,codeArrayMapper} from '@/utils/base'
export default {
  props: {
    user: {
      type: Object,
    },
    isLogin:{
      type: Boolean,
      default:false,
    }
  },
  data: function() {
    return {
      dialogVisible:true,
      rules: {
        username: [
          { required: true, message: "请输入用户名", trigger: "blur" },
          {
            pattern: /^[A-Za-z][A-Za-z0-9]{1,5}$/,
            message: "请输入正确的用户名",
            trigger: ["blur"],
          },
        ],
        password: [
          { required: true, message: "请输入密码", trigger: "blur" },
          {
            pattern: /^[A-Za-z][A-Za-z0-9]{5,17}$/,
            message: "请输入正确的密码",
            trigger: ["blur"],
          },
        ],
        password2: [
          { required: true, message: "请输入密码", trigger: "blur" },
          {
            pattern: /^[A-Za-z][A-Za-z0-9]{5,17}$/,
            message: "请输入正确的密码",
            trigger: ["blur"],
          },
        ],
        age: [
          { required: true, message: "请输入用户年龄", trigger: "blur" },
          {
            pattern: /^[0-9]{1,3}$/,
            message: "请输入正确的用户年龄",
            trigger: ["blur"],
          },
        ],
      },
    };
  },
  methods: {
    codeMapper,
    codeArrayMapper,
    input(val) {
      this.$emit("change", val);
    },
    loginSubmit() {
      this.$api.uc.fetchLogin(this.user).then((res) => {
        console.log("token************", res.token);
        localStorage.setItem("token", res.token);
        this.$router.replace("/");
      });
    },
    registerSubmit() {
      this.$api.uc.fetchRegister(this.user).then(() => {
        this.$router.replace("/user/login");
      });
    },
    onSubmit(bool){
      if(bool){
        this.loginSubmit()
      }else{
        this.registerSubmit()
      }
    },
    dialogBeforeClose(){
      this.dialogVisible=false
    }
  },
  mounted(){
    console.log(this.codeMapper(1,{1:'编辑',2:'校对'}))
    console.log(this.codeArrayMapper([1,2],{1:'编辑',2:'校对'}).join('，'))
  }
};
</script>

<style lang="scss" scoped>
.lx-login-wrap {
  width: 500px;
  height: 250px;
  position: absolute;
  left: 0;
  right: 0;
  top: 0;
  bottom: 0;
  margin: auto;
  .lx-login {
    width: 480px;
    height: 240px;
  }
}
.lx-login {
  margin: 0 auto;
}
.el-form {
  margin: 0 auto;
}
.el-form-item {
  margin: 15px auto;
}
.el-input {
  width: 200px;
}
.el-button {
  margin: 0 auto;
}
.align-btn{
  display:flex;
  justify-content: flex-start;
}
</style>
