<template>
    <el-dialog
      :visible.sync="show"
      width="30%"
      :before-close="handleClose"
    >
      <span>{{ text }}</span>
      <span slot="title">
        {{title}}
      </span>
      <span slot="footer" class="dialog-footer">
        <el-button @click="show = false">取 消</el-button>
        <el-button type="primary" @click="show = false"
          >确 定</el-button
        >
      </span>
    </el-dialog>
</template>

<script>
export default {
  data() {
    return {
      
    };
  },
  methods: {
    handleClose(done) {
      this.$confirm("确认关闭？")
        .then(() => {
          done();
        })
        .catch(() => {});
    },
  },
};
</script>

<style scoped>
</style>