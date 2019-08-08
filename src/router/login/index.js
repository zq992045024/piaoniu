export default {
    path:"/login",
    component:()=>import("views/login"),
    name:"login",
    meta:{
        tabBar:false,
        auth:true
    }
}