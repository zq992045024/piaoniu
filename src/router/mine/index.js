export default {
    path:"/mine",
    component:()=>import("views/mine"),
    name:"mine",
    meta:{
        tabBar:true,
        auth:true,
        title:"我的"
    }
}