import Vue from "vue";
import VueRouter from "vue-router"
import show from "./show"
import mine from "./mine"
import tour from "./tour"
import concert from "./concert"
import home from "./home"
import cityList from "./cityList"
import search from "./searchs"
import login from "./login"
import register from "./register"
import detail from "./detail"
Vue.use(VueRouter)

let router = new VueRouter({
    routes:[
        {
            path:"/",
            redirect:"/home"
        },
        show,
        mine,
        tour,
        concert,
        home,
        cityList,
        search,
        login,
        register,
        detail
    ]
})


router.beforeEach((to,from,next)=>{
    if(to.path !="/login" && to.meta.auth){
        if(sessionStorage.getItem("token")){
            next();
        }else{
            next("/login");
        }
    }else{
        next();
    }
})

export default router;