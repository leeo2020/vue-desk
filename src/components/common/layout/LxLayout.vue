<template>
  <div class="lx-layout">
    <el-container>
      <div class="lx-aside-wrap">
        <div class="lx-aside">
          <el-aside width="150px" class="lx-aside-menu">
            <LxAside></LxAside>
          </el-aside>
        </div>
      </div>

      <el-container class="lx-container-wrap">
        <div class="lx-container">
          <div class="lx-section">
            <div class="lx-header-wrap">
              <el-header class="lx-header">
                <LxHeader></LxHeader>
              </el-header>
            </div>
            <div class="lx-main-wrap">
              <el-main class="lx-main">
                <LxMain></LxMain>
              </el-main>
            </div>
          </div>
        </div>
      </el-container>
    </el-container>
  </div>
</template>

<script>
export default {
  components: {
    LxHeader: () => import("./LxHeader.vue"),
    LxMain: () => import("./LxMain.vue"),
    LxAside: () => import("./LxAside.vue"),
  },
};
</script>

<style lang="scss" scoped>
* {
  padding: 0;
  margin: 0;
}
html,
body {
  width: 100%;
  height: 100%;
}
.lx-layout {
  width: 100%;
  height: 100%;
}
.lx-aside-wrap {
  width: 150px;
  height: 100%;
  padding: 0;
}
.lx-aside {
  width: 150px;
  height: 100%;
  padding: 0;
  box-sizing: border-box;
  border: 1px solid #eee;
}
.lx-aside-menu {
  width: 150px;
  height: 100%;
  padding: 0;
}
.lx-header {
  height: 60px;
}
.lx-container {
  width: 100%;
  height: 100%;
  padding: 0;
}
.lx-container-wrap {
  width: 100%;
  height: 100%;
}
.lx-section {
  height: 100%;
}
.lx-header {
  padding: 0;
}
.lx-main-wrap {
  position: absolute;
  top: 60px;
  left: 150px;
  right: 0;
  bottom: 0;
  box-sizing: border-box;
  border: 1px solid #fff;
}
.lx-main {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  box-sizing: border-box;
  padding: 10px 10px 10px 0px;
}
.el-header {
  background-color: #b3c0d1;
  color: #333;
  text-align: center;
  line-height: 60px;
}

.el-aside {
  background-color: #d3dce6;
  color: #333;
  text-align: center;
}

.el-main {
  background-color: #e9eef3;
  color: #333;
  text-align: center;
  line-height: 25px;
}

.el-container {
  width: 100%;
  height: 100%;
}
</style>
