<template>
  <view class="content">
    <view class="top"></view>
    <view class="middle">
      <view class="login-type-form">
        <view class="input-item">
          <text class="iconfont"></text>
          <input class="login-type-input" type="text" name="mobile" v-model="login_mobile" placeholder="请输您的账号" maxlength="20"/>
        </view>
        <view class="input-item">
          <text class="iconfont"></text>
          <input class="login-type-input" type="password" v-model="login_password" placeholder="请输您的密码" maxlength="20"/>
        </view>
      </view>
      <view class="btnbox">
        <button class="btn" hover-class="btnActive" @click="goto_index">开始记录</button>
      </view>
    </view>
  </view>
</template>

<script>
  export default{
    data(){
      return{
        login_mobile:"",
        login_password:"",
        true_mobile:"zhangkeai",
        true_password:"20161105"
      }
    },
    methods: {
      goto_index(){
        if (this.login_mobile == this.true_mobile && this.login_password == this.true_password) {
          uni.navigateTo({
          	url:'/pages/index/index'
          });
        } else {
          this.$mHelper.toast('您的账号或密码有误！');
        }
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
  .top{
    width: 100%;
    height: 600rpx;
    background-color: #5191cc;
  }
  .middle{
    position: relative;
    width: 660rpx;
    height: 800rpx;
    margin: 0 auto;
    margin-top: -200rpx;
    border-radius: 30rpx;
    box-shadow: 0 0 15rpx rgba(0, 0, 0, 0.3);
    background-color: #fff;
    .login-type-form{
      width: 80%;
      margin: 50upx auto;
      padding-top: 120upx;
      .input-item {
        position: relative;
        height: 100upx;
        line-height: 100upx;
        margin-bottom: 120upx;
        .iconfont {
          font-size: 150upx;
          position: absolute;
          left: 0;
        }
        .login-type-input {
          height: 100upx;
          padding-left: 50upx;
          border-bottom: 1upx solid rgba(0, 0, 0, .1);
        }
      }
    }
    .btnbox{
      position: absolute;
      bottom: 80rpx;
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
      }
      .btnActive{
        color: #fff;
        background-color: #3571cc;
      }
    }
  }
}
</style>