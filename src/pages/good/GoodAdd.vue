<template>
  <div class="lx-goodadd">
      <h3>{{!isAdd?'商品新增':'商品编辑'}}</h3>
      <div class="lx-form">
        <el-form :model="info" :rules="rules" label-width="100px">
          <el-form-item label="商品名称" prop="name" required>
            <el-input size="mini" v-model="info.name"></el-input>
          </el-form-item>

          <el-form-item label="商品描述" prop="desc" required>
            <el-input type="textarea" size="mini" v-model="info.desc"></el-input>
          </el-form-item>

          <el-form-item label="商品品类" prop="cate" required>
              <CateSelect
                  :value="isAdd?info.cate:''"
                  :cate="info.cate"
                  :clearable="true"
              ></CateSelect>
          </el-form-item>

          <el-form-item label="活动价格"  prop="price" required>
            <el-input-number :min="0" size="mini" v-model="info.price" ></el-input-number>
          </el-form-item>

          <el-form-item label="商品图片" prop="img">
            <el-upload
                :action="$img.imgUpUrl"
                class="avatar-uploader"
                :limit=1
                :on-success='imgSuccess'
                list-type="picture-card"
                :multiple=false
            >
              <img v-if="isShow" :src="$img.imgBaseUrl+info.img" class="avatar">
              <i v-else class="el-icon-plus"></i>
            </el-upload>
          </el-form-item>

          <el-form-item label="是否热销" prop="hot">
            <el-switch
              v-model="info.hot"
              active-color="#13ce66"
              inactive-color="grey">
            </el-switch>
          </el-form-item>

          <el-form-item>
            <el-button type="primary" size="mini" @click="submitForm">
              {{'确认提交'}}
            </el-button>
          </el-form-item>
        </el-form>
      </div>
  </div>
</template>

<script>
import {CateSelect} from '@/components/good/'
console.log('components',CateSelect)
export default {
   components:{
      CateSelect
    },
  data:function(){
   return {
      info:{
        name:'',
        desc:'',
        cate:'',
        price:0,
        img:'',
        hot:false
      },
     isAdd:null,
     imageUrl: '',
     isShow:true,
     xmodel:{},
        rules: {
            name: [
              { required: true, message: '请输入商品名称', trigger: 'blur' },
              { min: 2, max: 6, message: '长度在 2 到 6 个字符', trigger: 'blur' }
            ],
            desc: [
              { required: true, message: '请填写商品描述', trigger: 'blur' },
              { min: 10, max: 20, message: '长度在 10 到 20 个字符', trigger: 'blur' }
            ],
            cate: [
              { required: true, message: '请选择商品品类', trigger: 'blur' }
            ]
          },
        dialogVisible: false,
        flag:false
   }
  },methods:{
    imgSuccess(res,file){
      this.info.img=res.data.url
      this.imageUrl = URL.createObjectURL(file.raw);
      this.isShow=false
    },
      submitForm(){
        this.$api.jd.fetchGoodAddOrEdit(this.info).then(()=>{
          this.$router.replace('/good/list')
        })
      }
    },
    mounted(){
    this.$api.jd.fetchGoodList().then(res=>{
       res.list.map(elem=>{
         if(this.$route.params.id){
           if(elem._id===this.$route.params.id.slice(1)){
             this.info=elem
            console.log('this.info.img',this.info.img)
             this.isAdd=false
           }else{
             this.isAdd=true
           }
         }
         this.isShow=this.isAdd
       })
     })
  },computed:{
     isSHow(){
       return !this.imageUrl && !this.isAdd
     }
  }
  }
</script>

<style lang="less" scoped>
.lx-form{
  margin:10px 0;
  width:60%;
  & .el-upload.el-upload--picture-card {
    width: 80px;
    height: 80px;
  }
}
 .el-form-item__label{
   margin-left:10px;
 }
 .el-form-item__content{
   margin-left:10px;
 }
 .el-select{
    margin-left:10px;
  }
.avatar-uploader{
  display:flex;
  margin:0;
}
.avatar-uploader .el-upload {
    border: 1px dashed #d9d9d9;
    border-radius: 6px;
    cursor: pointer;
    position: relative;
    overflow: hidden;
  }
  .avatar-uploader .el-upload:hover {
    border-color: #409EFF;
  }
  .avatar-uploader-icon {
    font-size: 28px;
    color: #8c939d;
    width: 120px;
    height: 120px;
    line-height: 120px;
    text-align: center;
  }
  .avatar {
    width: 100%;
    height: 100%;
    display: block;
  }
/deep/.el-input.is-disabled .el-input__inner{
  cursor:default;
}
.el-form-item{
  display:flex;
}

</style>>
