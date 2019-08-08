import { users_api } from "api/info.js"
import { users_login_api } from "api/info.js"
const jwt = require("jsonwebtoken");
import axios from "axios"
const state = {
  username: sessionStorage.getItem('username') || "",
  password: sessionStorage.getItem('password') || "",
  isLogin: "",
  isRegister: ""
}

const actions = {
  userLogin({ commit }, params) {
    commit("userLoginMutations", params)
  },
  userRegister({ commit }, params) {
    commit('userRegisterMutations', params)
  }

}

const mutations = {
  userLoginMutations(state, params) {
    // axios
    // .post("/user/usersList", params)
    // .then(data => {
    //   if (!data.data.data) {
    //     state.isLogin=false;
    //   } else {
    //     state.username = data.data.data[0].username;
    //     state.password = data.data.data[0].password;
    //     var username=state.username
    //     sessionStorage.setItem('username',state.username)
    //     sessionStorage.setItem('password',state.password)
    //     let token = jwt.sign({username},'bk1901',{expiresIn:'1h'})
    //     sessionStorage.setItem('token',token)
    //     state.isLogin=true;
    //   }
    // });
    users_login_api(params.username, params.password).then((data) => {
      // var token = document.cookie.split('=')[1];
      // sessionStorage.setItem('token',token)
      if (data.data.status == 1) {
        state.isLogin = true;
        state.username = params.username;
        state.password = params.password;
        sessionStorage.setItem('username', state.username)
        sessionStorage.setItem('password', state.password)
        var token = document.cookie.split('=')[1];
        sessionStorage.setItem('token', token);

      } else {
        state.isLogin = false;
      }
    })
  },
  userRegisterMutations(state, params) {
    users_api(params.username, params.password).then((data) => {
      if (data.data.status == 1) {
        state.isRegister = true;
      } else {
        state.isRegister = false;
      }
    })
  }
}

export default ({
  state,
  actions,
  mutations,
  namespaced: true
})