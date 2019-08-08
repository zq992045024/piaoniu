import Vue from 'vue'
import Vuex from 'vuex'
import city from "store/city"
import user from "store/user"
Vue.use(Vuex);

const state = ()=>{

}
const actions = ()=>{
    
}
const mutations = ()=>{
    
}


export default new Vuex.Store({
    state,
    actions,
    mutations,
    modules:{
        city,
        user
    }
})