<template>
  <div>
    <el-table :data="model.menus" border max-height="250">
      <el-table-tree-column
        file-icon="icon icon-file"
        folder-icon="icon icon-folder"
        :remote="remote"
        prop="label"
        label="labelname"
        width="220"
      >
      </el-table-tree-column>
      <el-table-column prop="id" label="id" width="180"></el-table-column>
      <el-table-column
        prop="description"
        label="description"
        width="180"
      ></el-table-column>
    </el-table>
  </div>
</template>

<script>
export default {
  name: "GridTable",
  data: function () {
    return {
      model: {},
    };
  },
  methods: {
    remote(row, callback) {
      // async or sync are both supported
      setTimeout(function () {
        callback(row.children);
      }, 500);
    },
  },
};
</script>

<style></style>