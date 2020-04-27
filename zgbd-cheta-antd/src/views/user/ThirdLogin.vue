<template>
  <!-- 第三方登录接入 -->
  <div class="main" style="text-align: center;box-shadow: 0 0 6px 0 hsla(0,0%,64%,.5);padding: 30px;background-color: rgba(255, 255, 255, 0.3);">
    <h2>快速安全登录</h2>
    <div style="margin-bottom: 20px;">点击头像登录</div>
    <div style="cursor:pointer" @click="doLogin">
      <a-avatar src="/theme/hw/logo.png" size="large" style="width: 100px;height: 100px;"/>
    </div>
    <div style="margin-top: 10px;">侨银环保公司</div>
  </div>
</template>

<script>
import { timeFix } from "@/utils/util"
import { mapActions } from "vuex"

export default {
  name: 'ThirdLogin',
  data(){
    return {
      loginParams: {
        loginName: this.$route.query.username,
        password: this.$route.query.password,
        loginType: 'PC'
      },
      message: "准备跳转..."
    }
  },
  methods: {
    ...mapActions([ "Login" ]),
    doLogin(){
      let that = this;
      that.Login(that.loginParams).then(() => {
        that.loginSuccess();
      }).catch((err) => {
        that.$notification.error({message: '失败',description: err.message});
        window.location.href = '/';
      })
    },
    loginSuccess () {
      // TODO 存 local
      window.location.href = '/Car/Register';
      this.$notification.success({
        message: '欢迎',
        description: `${timeFix()}，欢迎回来`,
      });
    }
  }
}
</script>

<style scoped>

</style>