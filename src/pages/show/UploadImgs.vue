<template>
  <div>
    <el-form>
       <el-form-item>
         <el-upload
           ref="upload"
           action=""
           multiple
           accept="image/jpg,image/jpeg,image/png,image/gif"
           :http-request="handleUpload"
           :auto-upload="false"
           :limit="3">
           <el-button size="small" type="primary">点击上传</el-button>
           <div slot="tip" class="el-upload__tip">只能上传jpg/png文件，且不超过500kb</div>
         </el-upload>
       </el-form-item>
       <el-form-item>
         <el-button type="primary" @click="handlePush">发布</el-button>
       </el-form-item>
     </el-form>
  </div>
</template>

<script>
import axios from 'axios'
import { mapGetters } from 'vuex'
export default {
  data(){
    return {
      files:[]
    }
  },
  computed:{
    ...mapGetters('todo',['total'])
  },
  methods:{
    handleUpload(raw){
      this.files.push(raw)
      },
      async handlePush(){
        this.$refs.upload.submit()
        let fd=new FormData();
        fd.append('operator',''+this.total)
        this.files.forEach((el,index)=>{
          fd.append('file'+'_'+index,el.file)
        })
        axios.post(
          this.$img.imgUpUrls,
          fd
          // { headers: {'Content-Type': 'multipart/form-data'}}
        ).then(res=>{
                console.log('结果',res)
                return null
              }).catch((err)=>{
                console.log('结果',err)
                return null
              })
            }
  }
}
</script>

<style>

</style>