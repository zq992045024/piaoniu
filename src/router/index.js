import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

export default new Router({
  routes: [
      {
        path:'/Vocal',
        name:'Vocal',
        component:()=>import("../views/Vocal"),

  },
    {
      path:'/Modern',
      name:'Modern',
      component:()=>import("../views/Modern"),
    },
    {
      path:'/Tiyu',
      name:'Tiyu',
      component:()=>import("../views/Tiyu")
    },
    {
      path:'/Wanle',
      name:'Wanle',
      component:()=>import("../views/Wanle")
    },
    {
      path:'/Yinyue',
      name:'Yinyue',
      component:()=>import("../views/Yinyue")
    },
    {
      path:'/List',
      name:'List',
      component:()=>import("../views/List")
    },
  ]
})
