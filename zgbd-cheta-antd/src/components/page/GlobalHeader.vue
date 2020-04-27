<template>
  <!-- , width: fixedHeader ? `calc(100% - ${sidebarOpened ? 256 : 80}px)` : '100%'  -->
  <a-layout-header v-if="!headerBarFixed" :class="[fixedHeader && 'ant-header-fixedHeader', sidebarOpened ? 'ant-header-side-opened' : 'ant-header-side-closed', ]"
                   :style="{padding: '0px', width:'100%', left: mode === 'sidemenu' && device !== 'mobile' ? '80px' : '0px'}" ><!-- left: fixedHeader ? '0px' : '80px' -->
    <div v-if="mode === 'sidemenu'" class="header" :style="{width: device!=='mobile' && fixedHeader ? '96%' : ''}">
      <template v-if="device==='mobile'">
        <a-icon
          v-if="device==='mobile'"
          class="trigger"
          :type="collapsed ? 'menu-fold' : 'menu-unfold'"
          @click.native="toggle"></a-icon>
        <a-icon
          v-else
          class="trigger"
          :type="collapsed ? 'menu-unfold' : 'menu-fold'"
          @click.native="toggle"/>
      </template>
      <span v-if="device !=='mobile'" style="padding: 0 12px;">欢迎进入  車塔云  平台</span>
      <user-menu></user-menu>
    </div>
    <div v-else :class="['top-nav-header-index', theme]">
      <div class="header-index-wide">
        <div class="header-index-left">
          <logo class="top-nav-header" :show-title="device !== 'mobile'" :theme="theme"/>
          <div style="width: calc(100% - 200px);">
            <template v-if="device !== 'mobile'">
              <s-menu
                mode="horizontal"
                :menu="menus"
                :theme="theme"></s-menu>
            </template>
            <a-icon
              v-else
              class="trigger"
              :type="collapsed ? 'menu-fold' : 'menu-unfold'"
              @click.native="toggle"></a-icon>
          </div>
        </div>
        <user-menu class="header-index-right"></user-menu>
      </div>
    </div>

  </a-layout-header>
</template>

<script>
  import UserMenu from '../tools/UserMenu'
  import SMenu from '../menu/'
  import Logo from '../tools/Logo'
  import  ProductAndServe from '@/components/menu/ProductAndServe'

  import { mixin } from '@/utils/mixin.js'

  export default {
    name: "GlobalHeader",
    components: {
      UserMenu,
      SMenu,
      Logo,
      ProductAndServe
    },
    mixins: [mixin],
    props: {
      mode: {
        type: String,
        // sidemenu, topmenu
        default: 'sidemenu'
      },
      menus: {
        type: Array,
        required: true
      },
      theme: {
        type: String,
        required: false,
        default: 'dark'
      },
      collapsed: {
        type: Boolean,
        required: false,
        default: false
      },
      device: {
        type: String,
        required: false,
        default: 'desktop'
      }
    },
    data() {
      return {
        headerBarFixed: false,
      }
    },
    mounted () {
      window.addEventListener('scroll', this.handleScroll)
    },
    methods: {
      handleScroll () {
        if (this.autoHideHeader) {
          let scrollTop = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop
          if (scrollTop > 100) {
            this.headerBarFixed = true
          } else {
            this.headerBarFixed = false
          }
        } else {
          this.headerBarFixed = false
        }
      },
      toggle() {
        this.$emit('toggle')
      },
    }
  }
</script>

<style lang="scss" scoped>
  /* update_begin author:scott date:20190220 for: 缩小首页布局顶部的高度*/
  .layout .top-nav-header-index .header-index-wide {
    margin-left: 20px
  }
  .layout .header {
    height: 59px;
  }
  .ant-layout-header {
    height: 59px;
    line-height: 59px;
  }
  .layout .top-nav-header-index .header-index-wide .ant-menu.ant-menu-horizontal {
    height: 59px;
    line-height: 59px;
  }
  .product-and-serve{
    position: absolute;
    left: 0px;
    top: 90px;
  }
  /* update_end author:scott date:20190220 for: 缩小首页布局顶部的高度*/
</style>