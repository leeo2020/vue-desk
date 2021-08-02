<template>
<div class="lx-cate-select">
  <el-select
    :value="cate"
    placeholder="请选择品类"
    @change='change'
    :size='size'
    :clearable='clearable'
    filterable
    allow-create
    :remote-method="remoteMethod"
  >
    <el-option
      v-for="item in cateArr"
      :key="item._id"
      :label="item.cate_zh"
      :value="item.cate">
    </el-option>
  </el-select>
</div>
</template>

<script>
export default {
  props: {
    value: {
      type: String,
      required: false,
      default: ''
    },
    cate:{
      type:String,
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
  data: function() {
    return {
      cateArr: []
    }
  },
  mounted() {
    this.$api.jd.fetchAllCates().then(res=>{
      this.cateArr = res.list
      this.cate = this.value ?this.value : this.cate
    })
    // console.log('select this.$refs.mychild',this.$refs.myparent)
  },
  methods: {
    change(val) {
      console.log('change(val):',val)
      this.$emit('change',val)
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
.lx-cate-select{
  display: flex;
}
</style>
