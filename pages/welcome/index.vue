<template>
  <view class="content">
    <!-- 111 -->
    <image src="/static/yuantu.png" alt="" class="backimg"></image>
    <view class="btnbox">
      <button class="btn" hover-class="btnActive" @click="goto_login">快去登陆吧</button>
    </view>
  </view>
</template>

<script>
  export default{
    data(){
      return{}
    },
    methods: {
      goto_login(){
        uni.navigateTo({
        	url:'/pages/login/index'
        });
      }
    }
  }
</script>

<style lang="scss" scoped>
.content{
  display: inline-block;
  width: 100%;
  min-height: 100vh;
  height: 100%;
  background-color: white;
  position: absolute;
  z-index: 10;
  .backimg{
    position: fixed;
    width: 100%;
    height: 100vh;
    max-width: 600px;
  }
  .btnbox{
    position: fixed;
    bottom: 150rpx;
    width: 100%;
    max-width: 600px;
    .btn{
      display: block;
      width: 85%;
      margin: 30rpx auto;
      height: 100rpx;
      line-height: 100rpx;
      color: #fff;
      background-color: #5191cc;
      
      // &::after{
      //   border: none;
      //   border-radius: 25rpx;
      // }
    }
    .btnActive{
      color: #fff;
      background-color: #3571cc;
    }
  }
}
</style>