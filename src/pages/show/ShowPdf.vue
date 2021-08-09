<template>
  <div>
    <pdf :src="url" ref="pdf" :page="currentPage"></pdf>
  </div>
</template>

<script>
import pdf from 'vue-pdf'
export default {
  components:{
    pdf
  },
  data(){
    return {
      url:'',
      currentPage: 0, // pdf文件页码
      pageCount: 0, // pdf文件总页数
    }
  },
  created() {
    this.url = '@/assets/Pfeil1.pdf'
    this.getNumPages()
    this.getFetch()
  },
  methods:{
    getNumPages() {
      let loadingTask = pdf.createLoadingTask(this.url)
      loadingTask.promise.then(pdf => {
        this.pageCount = pdf.numPages
        console.log('pageCount',this.pageCount)
      }).catch(err => {
        console.error('pdf 加载失败', err);
      })
    },
    getFetch(){
      fetch('https://api.github.com/users/ruanyf')
      .then(response => response.json())
      .then(json => console.log(json))
      .catch(err => console.log('Request Failed', err)); 
        }
      }
}
</script>

<style>

</style>