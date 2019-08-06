<template>
    <div id="footer">
        <ul>
            <router-link v-for="(item,index) in navs" :key="index" :to='item.path' tag='li'>
                <i class='iconfont' v-html="item.icon"></i>
                <span>{{item.text}}</span>
            </router-link>
        </ul>
    </div>
</template>

<script>
export default {
    name:"TabBar",
    data(){
        return{
            navs:[
                {
                    icon:"&#xe502;",
                    text:"首页",
                    path:"/home"
                },
                {
                    icon:"&#xe690;",
                    text:"演唱会",
                    path:"/show"
                },
                {
                    icon:"&#xe626;",
                    text:"音乐会",
                    path:"/concert"
                },
                {
                    icon:"&#xe614;",
                    text:"旅游",
                    path:"/tour"
                },
                {
                    icon:"&#xe507",
                    text:"我的",
                    path:"/mine"
                }
            ]
        }
    }
}
</script>

<style>
 #footer{
    width: 100%;
    height: 1rem;
    position: fixed;
    left: 0;
    bottom: 0;
    background: #fff;
    border-top: 1px solid #ccc;
  }
  #footer ul {
    display: flex;
    width: 100%;
    height: 100%;
  }
  #footer ul li {
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    font-size: .3rem
  }
.router-link-active{
    color: #cc3333;
  }
  #footer ul li i{
      font-size: .4rem
  }
</style>
