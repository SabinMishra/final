import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    foods:[],
    haha:"hello"
  },
  getters:{
// calculate:state=>{
//   for(let i in state.foods){
//     const sum = sum + state.foods[i].price;
//   }
//   return sum;
  
// }
  },
  mutations: {
  },
  actions: {
  },
  modules: {
  }
})
