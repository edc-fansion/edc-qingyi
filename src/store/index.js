import Vue from "vue"
import Vuex from "vuex"

import transfer from "./modules/transfer.js"

Vue.use(Vuex)
const store = new Vuex.Store({
  modules:{
    transfer,
  },
  state:{
    
  },
  mutations:{
    
  },
})

export default store