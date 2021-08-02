<template>
  <div>
    <h2>公司动态</h2>
    <hr />
    <ul>
      <!-- <li @click="tabClick(1)" :class="{'on':this.idx===1}">今日要闻</li> -->
      <router-link to="/find/" exact exact-active-class="on" tag="li"
        >今日要闻</router-link
      >
      <div class="line"></div>
      <!-- <li @click="tabClick(2)" :class="{'on':this.idx===2}">昨日回顾</li> -->
      <router-link to="/find/t2" exact exact-active-class="on" tag="li"
        >昨日回顾</router-link
      >
    </ul>
    <router-view></router-view>
  </div>
</template>

<script>

export default {
  data() {
    return {
      idx: 1,
    };
  },
  methods: {
    tabClick(index) {
      this.idx = index;
      this.$router.push("/find/t" + index);
    },
  },
};
</script>

<style lang="scss" scoped>
ul {
  display: flex;
  margin: 25px 50px 0;
  border: 1px solid cornflowerblue;
  li {
    list-style-type: none;
    height: 40px;
    line-height: 40px;
    flex: 1;
    cursor: pointer;
  }
  li.on {
    color: orangered;
  }
}
.line {
  height: 40px;
  width: 0.5px;
  background-color: cornflowerblue;
}
h2 {
  margin-bottom: 25px;
}
</style>
