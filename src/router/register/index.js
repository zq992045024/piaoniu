export default {
    path:"/register",
    component:()=>import("views/register"),
    name:"register",
    meta:{
        tabBar:false,
        auth:false
    }
}