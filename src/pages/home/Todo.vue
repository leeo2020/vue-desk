<template>
  <div>
    <h1>ToDoList</h1>
    <h5>数据:{{ blockHHH }}</h5>
    <input @keyup.enter="confirm" type="text" v-model="task" />
    <ul>
      <li v-for="(item, index) in list" :key="item.id">
        <span class="leftDist" v-text="index + 1"></span>
        <span>:&nbsp;</span>
        <span v-text="item.task"></span>
        <span class="xdel" @click="remove(index)">X</span>
      </li>
      <span>总共有:&nbsp;</span>
      <span v-text="total"></span>
      <span>&nbsp;个任务</span>
    </ul>
  </div>
</template>

<script>
import { mapState, mapGetters, mapMutations } from "vuex";
export default {
  data() {
    return {
      task: "",
      a: 1,
    };
  },
  computed: {
    ...mapState("todo", ["list"]),
    ...mapGetters("todo", ["total"]),
    blockHHH: {
      // getter
      get: function () {
        return this.a + 10;
      },
      // setter
      set: function (val) {
        this.a = val;
      },
    },
  },
  methods: {
    ...mapMutations("todo", ["addTask", "delTask"]),
    confirm() {
      // this.$store.commit('addTask',this.task)
      this.addTask(this.task);
      this.task = "";
      this.a++;
    },
    remove(idx) {
      // this.$store.commit('delTask',idx)
      this.delTask(idx);
      this.a--;
    },
  },
};
</script>

<style>
ul {
  margin: 0 auto;
}
li {
  box-sizing: border-box;
  padding: 5px;
  list-style-type: none;
  position: relative;
}
span.leftDist {
  padding-left: 10px;
}
span.xdel {
  position: absolute;
  right: 10px;
}
</style>