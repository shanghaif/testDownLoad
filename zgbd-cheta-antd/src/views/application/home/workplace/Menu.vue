<template>
  <div>
    <div class="cheta-home-title">
      <a-icon :type="checkMenu.icon" class="cheta-mlr-10"/>{{ checkMenu.title }}
    </div>
    <a-menu
      :mode="device == 'mobile' ? 'horizontal' : 'inline'"
      :selectedKeys="selectedKeys"
      :style="{ border: '0'}"
      type="inner"
      :defaultOpenKeys="defaultOpenKeys"
    >
      <template v-for="menu in menuList">
        <a-menu-item v-if="menu.children.length === 0" :key="menu.id">
          <router-link :to="{name: menu.name}"> {{ menu.name }}</router-link>
        </a-menu-item>
        <a-sub-menu v-else :key="menu.id">
          <span slot="title"><span>{{ menu.name }}</span></span>
          <template v-for="menuInner in menu.children">
            <a-menu-item :key="menuInner.id">
              <router-link :to="{name: menuInner.name}"> {{ menuInner.name }}</router-link>
            </a-menu-item>
          </template>
        </a-sub-menu>
      </template>
    </a-menu>
  </div>
</template>

<script>

  import { mixinDevice } from '@/utils/mixin.js'
  import { generateIndexRouter } from "@/utils/util"
  import store from '@/store'
  import router from '@/router'

  export default {
    name: 'Menu',
    mixins: [mixinDevice],
    components: {
      store,
      router
    },
    data () {
      return {
        menuList: [],
        checkMenu: {},
        selectedKeys: [],
        defaultOpenKeys: [],
        menuShow: true
      }
    },
    created () {
      this.initMenu();
    },
    methods: {
      updateMenu () {
        // 当前子菜单
        var app = this;
        app.checkMenu = this.$route.matched[1].meta;
        app.menuList = this.getChildren(app.checkMenu.children);
        if (this.$route.matched.length <= 2) {
          app.addRoute(this.menuList[0]);
        }
      },
      addRoute(menu){
        let constRoutes = generateIndexRouter([menu]);
        store.dispatch('UpdateAppRouter',  { constRoutes }).then(() => {
          router.addRoutes(store.getters.addRouters)
        });
        this.$router.push(menu);
      },
      defaultMenu () {
        if (this.$route.matched.length > 3) {
          if (this.device !== 'mobile') {
            this.defaultOpenKeys = [this.$route.matched[2].path]
          }
        }
        // 默认选中菜单
        var route = this.$route.matched;
        this.selectedKeys = [];
        route.forEach(item => {
          if (item.meta.id) {
            this.selectedKeys.push(item.meta.id);
          }
        })
        // this.selectedKeys = [this.$route.meta.id];
      },
      getChildren (children) {
        var list = [], app = this;
        children.forEach(item => {
          if (item.menuType != 2 && item.menuType != 3 && !item.menuHidden && !item.hidden) {
            item.children = app.getChildren(item.children);
            list.push(item);
          }
        })
        return list;
      },
      checkChildren () {
        // 3级嵌套不加载菜单
        var route = this.$route.matched;
        if (route.length > 3) {
          var menu = this.$route.matched[2];
          // TODO 暂时写死
          if (menu.parent.components.default.name === 'LayoutWorkplace' && menu.name != '车务管理') {
            this.$route.matched.splice(2, 1)
          }
        }
      },
      initMenu () {
        this.updateMenu();
        this.defaultMenu();
        this.checkChildren();
      }
    },
    watch: {
      // 监听路由
      '$route' () {
        this.initMenu();
      }
    }
  }
</script>

<style scoped>
  .cheta-home-title{
    padding: 8px 2px;
    color: rgba(0,0,0,.85);
    font-size: 20px;
    font-weight: 500;
    line-height: 28px;
    margin-bottom: 20px;
  }
</style>