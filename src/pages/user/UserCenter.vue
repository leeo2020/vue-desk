<template>
<div>
    <h2>用户中心</h2>
</div>
</template>

<script>
    export default {
        created(){
            this.getGeo()
        },
        methods:{
            getGeo(){
                this.$api.jd.fetchGeoList().then(res=>{
                    console.log('地址列表',res)
                })
            }
        }
    }
</script>

<style scoped>

</style>
