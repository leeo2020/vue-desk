export default {
  namespaced: true,
  state: {
    goodQueryList: {},
    cateList: []
  },
  mutations: {
    mutateGoodQueryList: (state, payload) => {
      state.goodQueryList = JSON.parse(JSON.stringify(payload))
    },
    mutateCateList: (state, payload) => {
      state.cateList = JSON.parse(JSON.stringify(payload))
    }
  }
  // actions:{
  //   activeGoodQueryList:(store,payload)=>{
  //     store.commit('mutateGoodQueryList',payload)
  //   }
  // }
}