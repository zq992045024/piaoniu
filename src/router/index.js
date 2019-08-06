import Vue from "vue";
import VueRouter from "vue-router"
import show from "./show"
import mine from "./mine"
import tour from "./tour"
import concert from "./concert"
import home from "./home"
import cityList from "./cityList"
import search from "./searchs"
Vue.use(VueRouter)


export default new VueRouter({
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
        search
    ]
})