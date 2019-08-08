import Vue from 'vue'
import App from './App.vue'
import store from "store"
import router from "router"
import "./mockCity/index.js"
import "common/components/index.js"
<<<<<<< fdf4a421fa34f85b04c9801f732c5dbac61f4d02
import "./mockUsers/index.js"

=======
>>>>>>> yk
import VueTouch from "vue-touch"
Vue.use(VueTouch,{name:"v-touch"})
Vue.config.productionTip = false
new Vue({
  store,
  router,
  render: h => h(App)
}).$mount('#app')

