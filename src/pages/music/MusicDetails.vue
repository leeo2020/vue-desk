<template>
  <div>
   <h1>歌曲详情</h1>
    <h3>曲名:忘情水</h3>
    <p>谱曲：陈耀川</p>
    <p>作曲：杜自持</p>
    <p>作词：林夕</p>
    <p>演唱：刘德华</p>
    <h2>歌词：</h2>
    <p v-html="text"></p>
  </div>
</template>

<script>
export default {
    mounted(){
        // let id=this.$route.params.id
        // console.log(id)
    },
data(){
    return {
        text:`曾经年少爱追梦
一心只想往前飞
行遍千山和万水
一路走来不能回<br />
蓦然回首情已远
身不由已在天边
才明白爱恨情仇<br />
最伤最痛是后悔
如果你不曾心碎
你不会懂得我伤悲<br />
当我眼中有泪 别问我是为谁
就让我忘了这一切
啊 给我一杯忘情水
换我一夜不流泪<br />
所有真心真意
任它雨打风吹
付出的爱收不回
给我一杯忘情水<br />
换我一生不伤悲
就算我会喝醉
就算我会心碎
不会看见我流泪<br />
曾经年少爱追梦
一心只想往前飞
行遍千山和万水<br />
一路走来不能回
蓦然回首情已远
身不由已在天边<br />
才明白爱恨情仇
最伤最痛是后悔
如果你不曾心碎<br />
你不会懂得我伤悲
当我眼中有泪 别问我是为谁<br />
就让我忘了这一切
啊 给我一杯忘情水
换我一夜不流泪<br />
所有真心真意
任它雨打风吹
付出的爱收不回<br />
给我一杯忘情水
换我一生不伤悲
就算我会喝醉<br />
就算我会心碎
不会看见我流泪
啊 给我一杯忘情水<br />
换我一夜不流泪
所有真心真意
任它雨打风吹<br />
付出的爱收不回
给我一杯忘情水
换我一生不伤悲<br />
就算我会喝醉
就算我会心碎
不会看见我流泪<br />
就算我会喝醉
就算我会心碎
不会看见我流泪`
    }
}
}
</script>

<style>

</style>>
