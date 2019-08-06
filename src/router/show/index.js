export default {
    path:"/show",
    component:()=>import("views/show"),
    name:"show",
    meta:{
        tabBar:true,
        auth:false
    }
}