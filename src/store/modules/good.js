export default {
  namespaced:true,
  state:{
    goodQueryList:{}
  },
  mutations:{
    mutateGoodQueryList:(state,payload)=>{
      state.goodQueryList=payload
      state.goodQueryList=JSON.parse(JSON.stringify(state.goodQueryList))
    }
  }
  // actions:{
  //   activeGoodQueryList:(store,payload)=>{
  //     store.commit('mutateGoodQueryList',payload)
  //   }
  // }
}