export default {
    path:"/concert",
    component:()=>import("views/concert"),
    name:"concert",
    meta:{
        tabBar:true,
        auth:false
    }
}