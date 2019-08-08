<template>
  <div class="bottom-con">
    <div class="kf">客服</div>
    <div class="buy">直接购买</div>
  </div>
</template>

<script>
export default {
  name: "buyCom"
};
</script>

<style>
.bottom-con {
  height: 1rem;
  position: fixed;
  bottom: 0;
  width: 100%;
  display: flex;
  flex-direction: row;
}
.bottom-con .kf {
  width: 1.2rem;
  height: 1rem;
  line-height: 1rem;
  text-align: center;
}
.bottom-con .buy {
  background-color: #ff2661;
  flex: 1;
  font-size: .32rem;
  line-height:1rem;
  height: 100%;
  color: #fff;
  text-align: center;
  box-sizing: border-box;
}
</style>
