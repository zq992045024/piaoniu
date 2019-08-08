export default {
    path:"/detail",
    component:()=>import("views/detail"),
    name:"detail",
    meta:{
        tabBar:false,
        auth:false,
        title:"演出详情"
    }
}