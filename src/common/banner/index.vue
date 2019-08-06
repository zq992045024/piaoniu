<template>
<div class="swiper-container">
  <div class="swiper-wrapper">
    <div class="swiper-slide">
      <img src="./img/pic1.png" alt="">
    </div>
    <div class="swiper-slide">
      <img src="./img/pic2.jpg" alt="">
    </div>
    <div class="swiper-slide">
      <img src="./img/pic3.jpg" alt="">
    </div>
    <div class="swiper-slide">
      <img src="./img/pic4.png" alt="">
    </div>
  </div>
</div>

</template>

<script>

export default {
  name:"Banner",
      mounted(){
        var mySwiper = new Swiper('.swiper-container', {
      autoplay: true,//可选选项，自动滑动
      effect : 'fade',
    })
  }
}

</script>

<style>
  .swiper-slide{
    height: 2rem;
    width: 100%;
  }
  .swiper-container{
    height: 2rem;
    margin-top: .2rem;
    width: 88%;
    margin-left: 5%;
    border-radius: .1rem
  }
  .swiper-container img{
    height: 2rem;
  }
</style>
