<template>
    <div>
        <h2>{{$store.state.user.username}}</h2>


    <button @click="outLogin">退出登录</button>
    </div>
</template>

<script>
export default {
    created(){
    },
    methods:{
        outLogin(){
            sessionStorage.clear();
            this.$router.go('/login')
        }
    }
}
</script>

<style>

</style>
