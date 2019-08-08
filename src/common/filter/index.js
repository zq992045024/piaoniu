import Vue from 'vue'

Vue.filter("ToImg",(path,info)=>{
    return path.replace(/w\.h/,info)//replace  替换成info

})