<template>
  <a-layout-header v-if="!headerBarFixed" :class="[fixedHeader && 'ant-header-fixedHeader', sidebarOpened ? 'ant-header-side-opened' : 'ant-header-side-closed', ]"
                   :style="{padding: '0px', width:'100%', left: mode === 'sidemenu' && device !== 'mobile' ? '80px' : '0px'}" >
    <div :class="['top-nav-header-index', 'dark']">
      <div class="header-index-wide">
        <div class="header-index-left">
          <logo class="top-nav-header" :show-title="device !== 'mobile'" /> <span style="color:#FFF">内部文档 V1.0 开</span>
          <div style="width: calc(100% - 185px);">
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
    components:{
      Logo
    }
  }
</script>

<style scoped>
  .layout .top-nav-header-index .header-index-wide {
    margin-left: 20px
  }
</style>