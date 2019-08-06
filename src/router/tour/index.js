export default {
    path:"/tour",
    component:()=>import("views/tour"),
    name:"tour",
    meta:{
        tabBar:true,
        auth:false
    }
}