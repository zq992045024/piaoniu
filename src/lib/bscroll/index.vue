<template>
    <div class="wrapper" ref="box">
        <slot></slot>
    </div>
</template>

<script>
import BScroll from 'better-scroll'
export default {
    name:"BScrollCom",
    mounted(){
        this.scroll = new BScroll(this.$refs.box,{
            click:true,
            pullDownRefresh:true,
            tap:true,
            pullUpLoad:true,
            scrollX:true
        })
    },
    methods:{
        handlePullingDown(cb){
            this.scroll.on("pullingDown",()=>{
                cb();
            })
        },
        handlefinishPullDown(){
            this.scroll.finishPullDown();
            this.scroll.refresh();
        },
        handlepullingUp(callback){
            this.scroll.on("pullingUp",()=>{
                callback()
            })
        },
        handlefinishPullUp(){
            this.scroll.finishPullUp();
            this.scroll.refresh();
        }
    }
}
</script>

<style>
    .wrapper{
        height: 100%;
    }
</style>
