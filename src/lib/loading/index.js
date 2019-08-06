import Loding from "./index.vue"
import Vue from "vue"
export default ()=>{
    let LodingComponent = Vue.extend(Loding)
    let vm =  new LodingComponent({
        el:document.createElement("div"),
        data:{
            flag:true,
        },
        methods:{
            handlerMount(){
                document.body.appendChild(vm.$el)
            },
            handlerDestory(){
                document.body.removeChild(vm.$el)
            }
        }
    }) 
    return vm;
}