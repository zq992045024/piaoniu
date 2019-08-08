<template>
  <div>
    <HeaderCom />
    <BackCom />
    <div id="Login">
      <h3>手机用户登录</h3>
      <form id="login">
        <div id="users">
          <input
            type="text"
            class="form-control"
            id="login_username"
            placeholder="请输入手机号"
            ref="username"
          />
        </div>
        <div id="passwords">
          <input
            type="password"
            class="form-control"
            id="login_password"
            placeholder="请输入密码"
            ref="password"
          />
        </div>
        <button type="submit" @click="submitHandler($event)">登录</button>
        <v-touch @tap="gotoRegister" tag="div" class="gotoRegister">
          无账号，火速注册
        </v-touch>
      </form>
    </div>
  </div>
</template>

<script>
import axios from "axios";
import { mapActions, mapState, mapMutations } from "vuex";

export default {
  data() {
    return {
      username: "",
      password: ""
    };
  },
  methods: {
    gotoRegister(){
      this.$router.push('/register')
    },
    backHandler() {
      this.$router.back();
    },
    submitHandler(e) {
      e.preventDefault();
      var username = this.$refs.username.value;
      var password = this.$refs.password.value;
      var userObj ={
        username:username,
        password:password
      }
      this.$store.dispatch("user/userLogin",userObj)
    }
  },
  computed:{
    ...mapState({
      isLogin:state=>state.user.isLogin
    })
  },
  watch:{
    isLogin(n,o){
      if(n){
        alert('登陆成功！')
        this.$router.push('/mine')
      }else{
        alert('用户名或密码错误');
        this.$router.go('/login')
      }
    }
  }
};
</script>
<style>
#Login {
  width: 100%;
  position: relative;
  overflow: hidden;
  width: 100%;
  height: 100%;
  background-color: #fff;
  z-index: 50;
  top: 0;
  margin-top: 0.2rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  height: 10rem;
  margin-top: .5rem;
}
#back {
  position: relative;
  display: block;
  top: 0.28rem;
  left: 0.28rem;
  width: 0.5rem;
  height: 0.5rem;
  font-size: 0.5rem;
  background-size: contain;
  background-position: 50%;
  background-repeat: no-repeat;
}

#Login h3 {
  margin-top: 1rem;
  font-size: 0.5rem;
  text-align: center;
}
#login {
  margin-top: 1rem;
  display: flex;
  flex-direction: column;
  width: 6rem;
  height: 4rem;
}
#login button {
  width: 100%;
  height: 1rem;
  line-height: 1rem;
  margin-top: 0.5rem;
  border: none;
  background: -webkit-linear-gradient(left, #f2295f, #ffbe2a);
  font-size: 0.3rem;
  color: #262626;
}
#login input {
  width: 100%;
  height: 1rem;
  border: none;
  color: #262626;
  border-bottom: 1px solid #262626;
  font-size: 0.3rem;
  padding: 0.3rem 0;
}
.gotoRegister{
  margin-top: .5rem
}
</style>
