<template>
  <div class="lx-cate-select">
    <el-select
      :value="cate"
      placeholder="请选择品类"
      @change="change"
      :size="size"
      :clearable="clearable"
      allow-create
    >
      <el-option
        v-for="item in cateArr"
        :key="item._id"
        :label="item.cate_zh"
        :value="item.cate"
      >
      </el-option>
    </el-select>
  </div>
</template>

<script>
export default {
  props: {
    cate: {
      type: String,
      required: false,
      default: "",
    },
    size: {
      type: String,
      required: false,
      default: "medium",
    },
    clearable: {
      type: Boolean,
      required: false,
      default: false,
    },
  },
  data: function () {
    return {
      cateArr: [],
    };
  },
  created() {
    this.$api.fetchAllCates().then((res) => {
      this.cateArr = res.list;
    });
  },
  methods: {
    change(val) {
      this.$emit("change", val);
    },
  },
};
</script>

<style lang="scss" scoped>
.lx-cate-select {
  display: flex;
}
</style>
