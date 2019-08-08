<template>
  <div id="head">
    <div id="headLeft">
      <p>下载票牛app</p>
      <span>领取188元新人礼包</span>
    </div>
    <div id="headRight">
      <p>立即下载</p>
    </div>
  </div>
</template>

<script>
export default {
  name: "HeaderCom"
};
</script>

<style>
#head {
  width: 100%;
  height: .7rem;
  background: rgba(0,0,0,.7);
  color: #fff;
 
}
#headLeft{
    float: left;
    margin-left: 1rem;
    margin-top: .1rem;
}
#headLeft h3{
    font-size: .22rem;
}
#headRight p{
    font-size: .28rem;
    height: .5rem;
    width: 1.6rem;
    background: #ff2661;
    border-radius: .2rem;
    float: left;
    margin-left: 2rem;
    line-height: .5rem;
    text-align: center;
    margin-top: .1rem;
}
</style>
