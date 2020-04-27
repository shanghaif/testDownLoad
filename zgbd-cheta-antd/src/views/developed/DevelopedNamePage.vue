<template>
  <div class="exception">
    <div class="img">
      <img src="https://gw.alipayobjects.com/zos/rmsportal/RVRUAYdCGeYNBWoKiIwB.svg"/>
    </div>
    <div class="content">
      <h1>{{ this.title }}</h1>
      <div class="desc">你尚未开通 {{ this.title }}，请您：</div>
      <div class="action">
        <a-button type="primary" @click="handleToHome">开通服务</a-button>
      </div>
    </div>
  </div>
</template>

<script>
  import router from '@/router'

  export default {
    name: "DevelopedPage",
    components: {
      router
    },
    data(){
      return {
        title: '无权限'
      }
    },
    methods: {
      handleToHome () {
        this.$notification['error']({
          message: '开通失败！',
          description: '无权限或暂时无法访问，请联系客服！',
        });
        // this.$router.push({ name: 'dashboard' })
      }
    }
  }
</script>

<style lang="scss" scoped>
  .exception {
    min-height: 500px;
    height: 80%;
    align-items: center;
    text-align: center;
    margin-top: 150px;
    .img {
      display: inline-block;
      padding-right: 52px;
      zoom: 1;
      img {
        height: 360px;
        max-width: 430px;
      }
    }
    .content {
      display: inline-block;
      flex: auto;
      text-align: left;
      h1 {
        color: #434e59;
        font-size: 25px;
        font-weight: 600;
        line-height: 72px;
      }
      .desc {
        color: rgba(0, 0, 0, .45);
        font-size: 20px;
        line-height: 28px;
        margin-bottom: 16px;
      }
    }
  }

  .mobile {
    .exception {
      margin-top: 30px;
      .img {
        padding-right: unset;

        img {
          height: 40%;
          max-width: 80%;
        }
      }
    }
  }
</style>