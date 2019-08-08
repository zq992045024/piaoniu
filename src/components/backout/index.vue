<template>
    <div id="backs">
       <div class="back"  tag="div" @click="handleBack">&lt;</div>
        <div id="topTittle">
            {{$route.meta.title}}
        </div>
    </div>
</template>

<script>
export default {
    name: "BackCom",
    methods:{
        handleBack(){
            this.$router.back()
        }
    }
}
</script>

<style>
    #backs{
        display: flex;
        flex-direction: row;
        height: .8rem;
        background: #fff;
    }
    #backs .back{
        align-self: center;
        height: .8rem;
        width: .8rem;
        font-size:.4rem;
        text-align: center;
        line-height: .8rem;
    }
    #topTittle{
        flex:1;
        margin-left: 30%;
        height: .8rem;
        line-height: .8rem;
        font-size: .4rem;
    }
</style>
