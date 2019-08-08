<template>
    <div id="footer">
        <div class="box" @click="abc()">返回</div>
        <div class="box1">
            <i class="iconfont">&#xe605;</i>
            <input type="text" value placeholder=" 搜索明星、演出、场馆">
        </div>
        <ul>
            <router-link v-for="(item,index) in list" :to="item.path" tag="li">
            <span>{{item.text}}</span>
            </router-link>
        </ul>
        <div class="list">
            <ul>
                <li>
                    <select>
                        <option>综合排序</option>
                        <option>最新优先</option>
                        <option>低价优先</option>
                        <option>好评优先</option>
                    </select>
                </li>
                <li>
                    <select>
                        <option>全部时间</option>
                    </select>
                </li>
                <li>
                    <select>
                         <option>在线选座</option>
                    </select>
                </li>
            </ul>
        </div>
    </div>
</template>

<script>
    export default {
        name: "TabBar",
        data(){
            return {
                list:[
                    {
                        path:"/List",
                        text:"演唱会",
                    },
                    {
                        path:"/Modern",
                        text:"话剧表演",
                    },
                    {
                        path:"/Vocal",
                        text:"休闲展览",
                    },
                    {
                        path:"/Tiyu",
                        text:"体育赛事",
                    },
                    {
                        path:"/Wanle",
                        text:"旅游玩乐",
                    },
                    {
                        path:"/Yinye",
                        text:"音乐会",
                    },
                ]
            }
        },
        methods:{
            abc(){
                this.$router.push("../../components/Vocal")
            }
        }
    }
</script>

<style>
    .box{
        color: red;
        font-size: .3rem;
        position: absolute;
        top: 10px;
        font-size:.4rem;
    }
    .box1 i{
        position: absolute;
        left: 60px;
        top: 10px;
        z-index: 1;
    }
    .box1 input{
        border-radius: 5px;
        background: #F5F5F5;
        width: 300px;
        text-align: center;
        position: absolute;

        left: 55px;
        height: 40px;
    }
    #footer{
        width: 100%;
        height: 180px;
        background: #ffffff;
        position: fixed;
        left: 10px;
        top: 15px;

    }
    #footer ul,#footer ul li{
        height: 100%;
        width: 100%;
        /*border-bottom: 3px solid #ff2661;*/
    }
    #footer ul {
        display: flex;
        white-space: nowrap;
        overflow: auto
    }
    #footer ul li {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        font-size:.4rem;
        margin-left: 20px;
    }
    #footer ul .router-link-active {
        color: red;
    }
    .list{
        position: absolute;
        top: 130px;
        left: 10px;

    }
    .list ul{
        display: flex;
    }
    .list ul li{
        margin-left: 40px;
        align-items: center;
        font-size:.3rem;
    }
    select{
        outline: none;
        border: none;
    }





        /*#footer{*/
        /*width: 100%;*/
        /*height: 1rem;*/
        /*position: fixed;*/
        /*left: 0;*/
        /*bottom:0;*/
        /*background: #fff;*/
        /*border-top:1px solid #ccc;*/
    /*}*/

    /*#footer ul,#footer ul li{*/
        /*width: 100%;*/
        /*height: 100%;*/
    /*}*/
    /*#footer ul{*/
        /*display: flex;*/
    /*}*/
    /*#footer ul li{*/
        /*display: flex;*/
        /*flex-direction: column;*/
        /*justify-content: center;*/
        /*align-items: center;*/
        /*font-size:.3rem*/
    /*}*/
    /*#footer ul li i{*/
        /*font-size:.4rem;*/
    /*}*/

    /*#footer ul .router-link-active{*/
        /*color:#c33;*/
    /*}*/
    /*#footer span{*/
        /*width: 100px;*/
        /*display: block;*/
        /*color: red;*/
    /*}*/


</style>