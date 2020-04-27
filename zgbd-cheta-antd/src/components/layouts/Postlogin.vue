<template>
  <div id="userLayout" :class="['user-layout-wrapper', device]">
    <div class="container">
      <div class="container-body">
        <div class="top">
          <div class="header">
            <a href="/">
              <img src="~@/assets/Postlogo.png" class="logo" alt="logo">
            </a>
          </div>
          <div class="desc">
            中国邮政集团有限公司广州市分公司
          </div>
          <div class="paragraph">
            欢迎使用车辆监控与管理平台
          </div>
        </div>
        <div>
          <route-view></route-view>
        </div>
      </div>
      <div class="footer">
        <div class="links">
          <a href="_self">帮助</a>
          <a href="_self">隐私</a>
          <a href="_self">条款</a>
        </div>
        <div class="copyright">
          Copyright &copy; 2019 <a href="http://terrybg.com" target="_blank">車塔云</a>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  import RouteView from "@/components/layouts/RouteView"
  import { mixinDevice } from '@/utils/mixin.js'
  import './index.less'

  export default {
    name: "UserLayout",
    components: { RouteView },
    mixins: [mixinDevice],
    data () {
      return {}
    },
    mounted () {
      document.body.classList.add('userLayout')
    },
    beforeDestroy () {
      document.body.classList.remove('userLayout')
    },
  }
</script>

<style lang="scss" scoped>
  .container-body{
    padding: 40px 40px 279px 40px;
    width: 600px;
    height: 100%;
    right: 20px;
    float: right;
    background: #fff;
  }
  #userLayout.user-layout-wrapper {
    height: 100%;

    &.mobile {
      .container {
        .main {
          max-width: 368px;
          width: 98%;
        }
      }
    }

    .container {
      width: 100%;
      min-height: 100%;
      background: url(~@/assets/Postleft.png) #fff no-repeat left;
      position: absolute;
      background-size: 65%;

      a {
        text-decoration: none;
      }

      .top {
        .header {
          height: 65px;
          line-height: 65px;

          .badge {
            position: absolute;
            display: inline-block;
            line-height: 1;
            vertical-align: middle;
            margin-left: -12px;
            margin-top: -10px;
            opacity: 0.8;
          }

          .logo {
            height: 70px;
            vertical-align: top;
            margin-right: 16px;
            border-style: none;
          }

          .title {
            font-size: 33px;
            color: rgba(0, 0, 0, .85);
            font-family: "Chinese Quote", -apple-system, BlinkMacSystemFont, "Segoe UI", "PingFang SC", "Hiragino Sans GB", "Microsoft YaHei", "Helvetica Neue", Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol";
            font-weight: 600;
            position: relative;
            top: 2px;
          }
        }
        .desc {
          font-size: 37px;
          color: #0e111a;
          margin-top: 50px;
          margin-bottom: 40px;
          width: 375px;
        }
        .paragraph{
          font-size: 18px;
          margin-bottom: 30px;
          color: #0e111a;
        }
      }

      .main {
        min-width: 260px;
        width: 368px;
        /*margin: 0 auto;*/
      }

      .footer {
        position: absolute;
        width: 100%;
        bottom: 0;
        padding: 0 16px;
        margin: 48px 0 24px;
        text-align: center;

        .links {
          margin-bottom: 8px;
          font-size: 14px;
          a {
            color: rgba(0, 0, 0, 0.45);
            transition: all 0.3s;
            &:not(:last-child) {
              margin-right: 40px;
            }
          }
        }
        .copyright {
          color: rgba(0, 0, 0, 0.45);
          font-size: 14px;
        }
      }
    }
  }
</style>