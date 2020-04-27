<template>
  <div>
    <Message></Message>
    <div :class="`cheta-home-main cheta-main-height ${ device }`">
      <div style="width: 10px;position: fixed;z-index: 99999;height: 100%;left: 0;" @mouseover="mouseOver">
      </div>
      <div class="cheta-home-left" v-show="menuShow || device === 'mobile'" @mouseleave="menuOut">
        <div style="position: relative;" @click="pingToggle" v-if="device === 'desktop'">
          <div class="cheta-home-title cheta-event">
            <a-tooltip title="菜单固定">
                <i :class="`iconfont icon-tuding ${ping ? 'cheta-home-pin' : ''}`"></i>
            </a-tooltip>
          </div>
        </div>
        <div class="cheta-home-reload">
          <a-tooltip title="刷新">
            <span class="cheta-top-item" @click="reload" ><a-icon type="reload" /></span>
          </a-tooltip>
        </div>
        <Menu></Menu>
      </div>
      <div class="cheta-home-right cheta-m-10">
        <a-breadcrumb class="breadcrumb" v-if="breadList.length">
          <a-breadcrumb-item v-for="(item, index) in breadList" :key="index">
            <span>
              <router-link v-if="item.name !== name" :to="{ path: item.path }">
                <span style="font-weight: bold">{{ item.meta.title }}</span>
              </router-link>
              <span v-else>
                {{ item.meta.title }}
              </span>
            </span>
          </a-breadcrumb-item>
        </a-breadcrumb>
        <KeepRouter v-if="isRouterAlive"/>
      </div>
      <Notice></Notice>
      <Security></Security>
    </div>
  </div>
</template>

<script>
  import Menu from './Menu'
  import Message from './Message'
  import Notice from './Notice'
  import Security from './Security'
  import { mixinDevice } from '@/utils/mixin.js'
  import KeepRouter from "@/components/layouts/KeepRouter"
  export default {
    name : "LayoutWorkplace",
    components: { Notice, Message, Menu, Security, KeepRouter },
    mixins: [mixinDevice],
    data () {
      return {
        spinning: false,
        menuShow: true,
        ping: true,
        breadList: [],
        name: '',
        isRouterAlive: true
      }
    },
    created () {
      this.getBreadcrumb()
    },
    methods: {
      menuOut () {
        if (!this.ping) {
          this.menuShow = false;
        }
      },
      mouseOver () {
        this.menuShow = true;
      },
      pingToggle () {
        this.ping = !this.ping;
      },
      getBreadcrumb(to, form) {
        if (to) {
          this.name = this.$route.name
          if (this.$route.matched.length <= 2) {
            this.breadList.splice(0, this.breadList.length);
          } else {
            var start = this.breadList.map(item => item.name).indexOf(this.name);
            if (start != -1) {
              this.breadList.splice(start, this.breadList.length);
            }
            if (this.breadList.length === 0) {
              this.breadList[0] = this.$route.matched[1];
              this.breadList[1] = this.$route.matched[2];
            }
            this.breadList.push(to)
            if (to.meta.parentId === this.$route.matched[2].meta.parentId) {
              this.breadList.splice(0, this.breadList.length);
            }
          }
        }
      },
      reload () {
        this.isRouterAlive = false
        this.$nextTick(() => (this.isRouterAlive = true))
      }
    },
    watch: {
      $route(to, form) {
        if (to) {
          this.getBreadcrumb(to, form)
        }
      }
    }
  }

</script>

<style lang="scss" scoped>
  .cheta-home-main{
    width: 100%;
    min-height: calc(100vh - 100px);
    background-color: #FFF;
    position: absolute;
  }
  .cheta-main-height{
  height:calc(100vh - 74px)
  }
  .desktop{
    .cheta-home-main{
      display: flex;
    }
    .cheta-home-left {
      border-right: 1px solid #e8e8e8;
      width: 204px;
    }
    .cheta-home-right {/*
      flex: 1 1;
      padding: 0px 0px;*/
      width: calc(100% - 204px);
    }
  }

  .mobile{
    .cheta-home-left {
      border-bottom: 1px solid #e8e8e8;
    }
  }

  .cheta-home-left {
    transition: all 0.2s;
    -webkit-transition: all 0.2s;
  }
  .cheta-home-title{
    position: absolute;
    left: 140px;
    font-weight: bold;
    padding: 5px;
  }
  .cheta-home-reload{
    position: absolute;
    left: 170px;
    top: 6px;
    color: #333333;
    font-weight: bold;
    padding: 5px;
  }
  .icon-tuding{
    color: rgba(0, 0, 0, 0.25);
    font-size: 20px;
  }
  .cheta-home-pin{
    color: rgb(51, 51, 51);
    font-size: 20px;
  }
  .breadcrumb{
    margin-left: 10px;
  }

</style>