<template>
  <div>
    <ul>
        <li :class="{'isSelect':currentIndex===index}" v-for="(item,index) in listData" :key="index" v-text="item.name" @click="clickSelect(index)"></li>
    </ul>
  </div>
</template>
<script>
const listData = [
  {
    id: 1,
    name: "123",
  },
  {
    id: 2,
    name: "456",
  },
  {
    id: 3,
    name: "789",
  },
];
export default {
  data() {
    return {
      listData,
      currentIndex:''
    };
  },
  methods: {
    clickSelect(index) {
      this.currentIndex=index
    },
  },
};
</script>
<style scoped>
li{
  list-style: none;
}
.isSelect{
  background-color: purple;
}
</style>