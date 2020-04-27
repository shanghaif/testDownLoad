<template>
  <div>
    <div v-if="device !== 'mobile'" style="width:80px;"></div>
    <a-layout-sider
      :class="['sider', isDesktop() ? null : 'shadow', theme, fixSiderbar ? 'ant-fixed-sidemenu' : null ]"
      width="273px"
      :style="{position: device !== 'mobile' ? 'fixed' : '', height: '100%'}"
      :collapsible="collapsible"
      v-model="collapsed"
      :trigger="null">
      <logo :theme="theme ? theme : ''" :isHeader="isHeader"/>
      <!--
      <s-menu
        :collapsed="collapsed"
        :menu="menus"
        :theme="theme"
        @select="onSelect"
        :mode="mode"
        @mouseover.native="mouse('over')"
        @mouseout.native="mouse('out')"></s-menu>-->
      <new-index
        @mouseover.native="mouse('over')"
        @mouseout.native="mouse('out')"
        :theme="theme ? theme : ''"
        :collapsed="collapsed"
        @settingDrawer="settingDrawer"
        @test="test"
        ref="newMenu"></new-index>
    </a-layout-sider>
  </div>
</template>

<script>
  import ALayoutSider from 'ant-design-vue/es/layout/Sider'
  import Logo from '../tools/Logo'
  import SMenu from './index'
  import { mixin, mixinDevice } from '@/utils/mixin.js'
  import  NewIndex from './NewIndex'

  export default {
    name: 'SideMenu',
    components: { ALayoutSider, Logo, SMenu, NewIndex},
    mixins: [mixin, mixinDevice],
    props: {
      mode: {
        type: String,
        required: false,
        default: 'inline'
      },
      theme: {
        type: String,
        required: false,
        default: 'dark'
      },
      collapsible: {
        type: Boolean,
        required: false,
        default: false
      },
      collapsed: {
        type: Boolean,
        required: false,
        default: false
      },
      menus: {
        type: Array,
        required: true
      }
    },
    data () {
      return {
        ischange: true
      }
    },
    /*created(){
      this.$refs.newMenu.theme = this.theme;
    },*/
    methods: {
      onSelect(obj) {
        this.$emit('menuSelect', obj)
      },
      mouse (type) {
        var productsShow = this.$refs.newMenu.mouse(type, this.theme);
        if (productsShow) {
          this.$emit('mouse', type);
        }
      },
      test(msg){
        this.mouse(msg)
      },
      settingDrawer() {
        this.$emit('settingDrawer')
      }
    }
  }
</script>
<style lang="scss" scoped>
  .zgb-menu-title {
    font-size: 16px;
    font-family: PingFangSC-Medium;
    font-weight: 500;
    color: rgba(30, 38, 66, 1);
    line-height: 32px;
  }
  .zgb-menu-item{
    font-size:14px;
    font-family:PingFangSC-Regular;
    font-weight:400;
    color:rgba(109,114,132,1);
    line-height:32px;
  }

</style>