import Loding from "./index.vue"
import Vue from "vue"
export default ()=>{
    let LodingComponent = Vue.extend(Loding)
    let vm =  new LodingComponent({
        el:document.createElement("div"),
        data:{
            flag:false,
        },
        methods:{
            handlerMount(){
                this.flag = true
            },
            handlerDestory(){
                this.flag = false
            }
        }
    }) 
    document.body.appendChild(vm.$mount().$el)
    return vm;
}