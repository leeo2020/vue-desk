<template>
<!-- <keep-alive> -->
  <div>
  <div class="search"><span>qq音乐</span><input type="text" v-model="singer" @keyup.enter="search"></div>
  <h2>音乐列表</h2>
  <ul>
  <li v-for="(li,index) in songList" :key="li.id" v-text="index+' '+li.name" @click="toDetails(li.id)" :class="{green:index%2===0,odd:index%2!==0}"></li>
  </ul>
  </div>
<!-- </keep-alive> -->
</template>

<script>
import {mapState,mapActions} from 'vuex'
export default {
    data(){
        return {
        singer:'',
        isAlter:true,
        alterColor:'odd'
        }
    },
    computed:{
        ...mapState('music',['songList'])
    },
    methods:{
        ...mapActions('music',['getMusic']),
        toDetails(index){
            this.$router.push('/detail/'+index)
        },
        search(){
            let str='ct=24&qqmusic_ver=1298&new_json=1&remoteplace=txt.yqq.song&searchid=55803264577333913&t=0&aggr=1&cr=1&catZhida=1&lossless=0&flag_qc=0&p=1&n=10&w=%E8%90%A7%E6%95%AC%E8%85%BE&g_tk_new_20200303=5381&g_tk=5381&loginUin=0&hostUin=0&format=json&inCharset=utf8&outCharset=utf-8&notice=0&platform=yqq.json&needNewCode=0'
            let params={}
            str.split('&').map(elem=>{
                params[elem.split('=')[0]]=elem.split('=')[1]
            })
            params.w=decodeURI(this.singer)
            params.n=15
            // this.singer=''
            // this.$store.dispatch('getMusic',params)
            this.getMusic(params)
        }
    }
}
</script>

<style>
.search{
    margin:50px auto 10px;
}
input{
    margin-left:15px;
    text-indent: 1em;
}
.search span{
    color:cornflowerblue;
    font-size:20px;
}
li{
    list-style: none;
}
.odd{
  color:crimson;
}
.green{
  color:chartreuse;
}
</style>>
