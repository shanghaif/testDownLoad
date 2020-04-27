<template>
  <a-layout-header v-if="!headerBarFixed" :class="[fixedHeader && 'ant-header-fixedHeader', sidebarOpened ? 'ant-header-side-opened' : 'ant-header-side-closed', ]"
                   :style="{padding: '0px', width:'100%', left: mode === 'sidemenu' && device !== 'mobile' ? '80px' : '0px'}" >
    <div :class="['top-nav-header-index', 'light']">
      <div class="header-index-wide">
        <div class="header-index-left">
          <logo class="top-nav-header" :show-title="device !== 'mobile'" style="width: 180px;margin-right: 40px;"/>
          <div style="width: calc(100% - 175px);">
            <a-menu
              theme="light"
              mode="horizontal"
              :defaultSelectedKeys="[currentMenu]"
              :style="{ lineHeight: '64px' }"
              @click="menuClick"
            >
              <a-menu-item v-for="menu in menus" :key="menu.url" @click="doPage(menu)" ><a-icon :type="menu.icon" />{{ menu.name }}</a-menu-item>
            </a-menu>
          </div>
        </div>
      </div>
    </div>
  </a-layout-header>
</template>

<script>
  import Logo from '@/components/tools/Logo'

  export default {
    name: 'Header',
    data () {
      return {
        menus: [
          {url: '/onlines/doc', name: '文档', icon: 'book'},
          {url: '/onlines/home', name: 'Cheta UI', icon: 'dot-chart'},
          {url: '/onlines/setting', name: '设置', icon: 'setting'}
        ],
        currentMenu: this.$route.path
      }
    },
    components:{
      Logo
    },
    methods: {
      doPage (item) {
        this.currentMenu = item.url;
        this.$router.push(item.url);
      }
    }
  }
</script>

<style scoped>
  .layout .top-nav-header-index .header-index-wide {
    margin-left: 20px
  }
</style>