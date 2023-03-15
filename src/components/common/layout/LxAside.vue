<template>
  <div class="lx-aside">
    <div class="lx-logo">
      <img :src="$img.logo" alt="logo" />
    </div>
    <el-menu class="lx-menu" text-color="fff" active-text-color="ffd04f" unique-opened>
      <el-submenu v-for="group in routes" :key="group.id" :index="group.id + ''">
        <template slot="title">
          <i :class="group in routes"></i>
          <span v-text="group.text"></span>
        </template>

        <div v-for="nav in group.arr" :key="nav.id">
          <el-menu-item v-if="!nav.isNotNav" :index="nav.id + ''">
            <router-link :to="nav.path" v-text="nav.text" tag="div"></router-link>
          </el-menu-item>
        </div>
      </el-submenu>
    </el-menu>
  </div>
</template>

<script>

import routes from "@/pages/";

export default {
  data: function () {
    return {
      routes,
    };
  },
  mounted: function () { },
};
</script>

<style lang="scss" scoped>
* {
  padding: 0;
  margin: 0;
}

.lx-aside {
  height: 100%;
  width: 150px;
  padding: 0;
  background-color: lightblue;
  overflow: hidden;
}

.lx-logo {
  width: 60px;
  height: 60px;
  border-radius: 50%;
  margin: 15px auto;
  overflow: hidden;

  img {
    width: 100%;
    height: 100%;
    vertical-align: top;
  }
}

.el-menu,
el-submenu {
  width: 150px;
  padding-left: 0;
}

.lx-menu {
  position: absolute;
  top: 90px;
  bottom: 0;
  background-color: lightblue;

  & ::v-deep li.el-menu-item {
    width: 150px;
    padding-left: 5px !important;
    padding-right: 0;
    box-sizing: border-box;

    & div {
      width: 150px;
      padding-left: 0;
      padding-right: 0;
    }
  }
}
</style>
