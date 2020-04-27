<template>
  <a-layout class="cheta-m-10">
    <a-layout-sider width="200" style="background: #fff">
      <a-menu theme="light" mode="inline" :defaultSelectedKeys="[key]" style="height: 100%">
        <a-menu-item :key="menu.key" v-for="menu in menus">
          <router-link :to="menu.url">{{menu.title}}</router-link>
        </a-menu-item>
      </a-menu>
    </a-layout-sider>
    <a-layout>
      <a-layout-content
        :style="{ background: '#fff', padding: '24px', margin: 0, minHeight: '800px' }"
      >
        <route-view></route-view>
      </a-layout-content>
    </a-layout>
  </a-layout>
</template>

<script>
  import RouteView from "@/components/layouts/RouteView";

  export default {
    name: 'Index',
    components:{
      RouteView
    },
    data () {
      return {
        menus : [
          {title:'菜单管理',key:1,url:'/onlines/setting/menu'},
          {title:'页面管理',key:2,url:'/onlines/setting/page'},
          {title:'数据字典',key:3,url:'/onlines/setting/dictionary'},
          {title:'新增公告',key:4,url:'/onlines/setting/log'},
          {title:'更新日志',key:5,url:'/onlines/setting/updateLog'}
        ],
        key : 1,
      }
    },
    created() {
      this.activeKey();
    },
    methods:{
      activeKey () {
        var that = this;
        var url = "/onlines/setting/menu";
        switch (this.$route.path) {
          case that.menus[0].url :
            url = that.menus[0].url
            that.key = that.menus[0].key;
            break;
          case that.menus[1].url :
            url = that.menus[1].url
            that.key = that.menus[1].key;
            break;
          case that.menus[2].url :
            url = that.menus[2].url
            that.key = that.menus[2].key;
            break;
          case that.menus[3].url :
            url = that.menus[3].url
            that.key = that.menus[3].key;
            break;
          case that.menus[4].url :
            url = that.menus[4].url
            that.key = that.menus[4].key;
            break;
          case '/apply' :
            url = '/apply'
            that.key = 2;
            break;
          case '/material' :
            url = '/material'
            that.key = 2;
            break;
          case '/dataCenter' :
            url = '/dataCenter'
            that.key = 2;
            break;
          default:
            url = "/onlines/setting/menu"
        }
        that.$router.push(url)
      },
    }
  }
</script>

<style scoped>

</style>