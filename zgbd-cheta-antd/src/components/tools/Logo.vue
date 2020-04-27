<template><!--
  <div>
    <div class="logo-endlong" style="padding: 0px;">
      <a @click="doHome">
        <img src="~@/assets/logo-across.svg" alt="logo">
        <h1 v-if="showTitle">{{ title }}123</h1>
      </a>
    </div>
  </div>-->
  <div class="logo" style="margin-right: 10px">
    <a @click="doHome" class="pc">
      <div :class="theme" alt="logo" style="width: 165px;height: 65px;"></div>
    </a>
    <a @click="doHome" class="endlong">
      <div :class="theme" alt="logo" style="width: 57px;height: 57px;margin-left: 11px;float: left"></div>
      <h1 v-if="showTitle">{{ title }}</h1>
    </a>
  </div>
</template>

<script>

  export default {
    name: "Logo",
    props: {
      title: {
        type: String,
        default: '車塔云',
        required: false
      },
      showTitle: {
        type: Boolean,
        default: true,
        required: false
      },
      theme: {
        type: String,
        required: false,
        default: 'dark'
      },
      isHeader: {
        type: Boolean,
        required: false,
        default: false
      }
    },
    methods: {
      doHome(){
        window.location.href = 'http://terrybg.com';
      }
    }
  }
</script>
<style lang="scss" scoped>
  /*缩小首页布 局顶部的高度*//*
  .sider .logo {
    height: 59px!important;
    line-height: 59px!important;
    img{
      width: 32px;
    }
  }*/

  .logo .hw{background-color: white;}

  /* ie10+ 样式 */
  @media screen and (-ms-high-contrast: active), (-ms-high-contrast: none)  {
    .logo .pc div {
      background: url(~@/assets/logo-across.svg) no-repeat 50% 50%;
    }
    .logo .endlong div {
      background: url(~@/assets/logo-across.svg) no-repeat 50% 50%;
    }
  }

  .logo .pc div{-webkit-mask: url(~@/assets/logo-across.svg) no-repeat 50% 50%;mask: url(~@/assets/logo-across.svg) no-repeat 50% 50%;}
  .logo .endlong div{-webkit-mask: url(~@/assets/logo-endlong.svg) no-repeat 50% 50%;mask: url(~@/assets/logo-endlong.svg) no-repeat 50% 50%;}


  .mobile .logo{width: 85px!important;}

  .logo{padding: 0px!important;}
  .logo .endlong{display: none;}

  .sider .logo{padding-left: 16px;}
  .sider .logo .pc{display: none;}
  .sider .logo .endlong{display: block;}
</style>