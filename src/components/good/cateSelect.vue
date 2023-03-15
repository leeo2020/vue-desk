<template>
  <div class="lx-cate-select">
    <el-select v-model="myCate" placeholder="请选择品类" :cate="cate" @change='change' :size='size' :clearable='clearable'
      filterable allow-create :remote-method="remoteMethod">
      <el-option v-for="item in cateArr" :key="item._id" :label="item.cate_zh" :value="item.cate">
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
      default: '',
    },
    size: {
      type: String,
      required: false,
      default: 'medium'
    },
    clearable: {
      type: Boolean,
      required: false,
      default: false
    }
  },
  data: function () {
    return {
      cateArr: [],
      myCate: this.cate
    }
  },
  mounted() {
    this.$api.fetchAllCates().then(res => {
      this.cateArr = res.list
    })
    this.$nextTick(() => {
      console.log('_____myCate:_____', this.myCate, '______cate:_____', this.cate, 'value', this.value)
    })
  },
  methods: {
    change(val) {
      this.$emit('change', val)
    },
    remoteMethod(query) {
      if (query !== '') {
        this.loading = true;
        setTimeout(() => {
          this.loading = false;
          this.options = this.list.filter(item => {
            return item.label.toLowerCase()
              .indexOf(query.toLowerCase()) > -1;
          });
        }, 200);
      } else {
        this.options = [];
      }
    }
  }
}
</script>

<style lang="scss" scoped>
.lx-cate-select {
  display: flex;
}
</style>
