<template>
  <div class="user-wrapper">
    <div class="product-and-serve">
      <product-and-serve ref="productandserve" @closeSettingDrawer="closeSettingDrawer"></product-and-serve>
    </div>
    <popover></popover>
    <header-notice class="action"/>
    <a-dropdown>
      <span class="action ant-dropdown-link user-dropdown-menu"><!--
        <a-avatar class="avatar" size="small" :src="getAvatar()"/>
        <span>欢迎您，{{ nickname() }}</span>-->
        <a-avatar class="avatar" size="small" :src="headImage"/>
        <span :class="device">欢迎您，{{ this.userInfo().nickName }}</span>
      </span>
      <a-menu slot="overlay" class="user-dropdown-menu-wrapper">
        <a-menu-item key="0">
          <router-link :to="{ path: '/userInfo' }">
            <a-icon type="user"/>
            <span>个人中心</span>
          </router-link>
        </a-menu-item>
        <a-menu-item key="1">
          <a href="/doc" target="_blank">
            <a-icon type="question-circle" />
            <span>帮助中心</span>
          </a>
        </a-menu-item>
        <a-menu-item key="3">
          <a href="javascript:;" @click="handleLogout">
            <a-icon type="logout"/>
            <span>退出登录</span>
          </a>
        </a-menu-item>
        <a-menu-item key="4">
          <a href="javascript:;" @click="settingDrawer">
            <a-icon type="bg-colors" title="个性化设置"/>
            <span>个性化设置</span>
          </a>
        </a-menu-item>
      </a-menu>
    </a-dropdown>
    <setting-drawer ref="settingDrawerChild"></setting-drawer>
  </div>
</template>

<script>
  import HeaderNotice from './HeaderNotice'
  import { mapActions, mapGetters } from 'vuex'
  import {imgView} from '@/api/api'
  import SettingDrawer from '@/components/setting/SettingDrawerClick'
  import { mixinDevice } from '@/utils/mixin.js'
  import  ProductAndServe from '@/components/menu/ProductAndServe'

  import Popover from '@/components/menu/Popover'

  export default {
    name: "UserMenu",
    components: {
      HeaderNotice,
      SettingDrawer,
      ProductAndServe,
      Popover
    },
    mixins: [mixinDevice],
    data () {
      return {
        headImage: 'https://gw.alipayobjects.com/zos/antfincdn/XAosXuNZyF/BiazfanxmamNRoxxVxka.png'
      }
    },
    methods: {
      ...mapActions(["Logout"]),
      ...mapGetters(["nickname", "avatar"]),
      userInfo() {
        let userInfo = this.$store.getters.userInfo;
        if (userInfo.length) {
          userInfo = userInfo[0]
        }
        if (userInfo.headImage) {
          this.headImage = userInfo.headImage;
        }
        return userInfo
      },
      getAvatar(){
        console.log('url = '+ imgView+this.avatar())
        // return imgView+this.avatar()
        return 'https://gw.alipayobjects.com/zos/antfincdn/XAosXuNZyF/BiazfanxmamNRoxxVxka.png';
      },
      handleLogout() {
        const that = this

        this.$confirm({
          title: '提示',
          content: '真的要注销登录吗 ?',
          onOk() {
            return that.Logout({}).then(() => {
               window.location.reload()
            }).catch(err => {
              that.$message.error({
                title: '错误',
                description: err.message
              })
            })
          },
          onCancel() {
          },
        });
      },
      settingDrawer() {
        this.$refs.settingDrawerChild.toggle();
      },
      productAndServe(){
        this.$refs.productandserve.isshow = {};
        this.$refs.productandserve.showDrawer();
      },
      closeSettingDrawer(){
        this.$refs.productandserve.isshow = {display: 'none'};
      }
    }
  }
</script>

<style scoped>
  .logout_title{
    color: rgba(0, 0, 0, 0.65);
    text-decoration:none;
  }
  .mobile{
    display: none;
  }
  .product-and-serve{
    position: absolute;
    left: 0px;
    top: 90px;
  }
</style>