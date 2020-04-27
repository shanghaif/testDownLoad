<template>
  <div>
    <ul role="menu" :class="menuStyle()" >
      <!--<li role="menuitem" class="ant-menu-item" @click="settingDrawer" v-if="device !== 'mobile'">
        <a-icon type="bars"/><span>产品与服务
          <a-icon type="right" style="padding-left: 120px;"/></span>
      </li>-->
      <li role="menuitem" v-for="item in menus" :class="item.type ? item.type : 'ant-menu-item'" v-if="!item.hidden" @click="updateMenu(item.name)">
        <router-link :to="{name: item.name}">
          <a-icon :type="item.meta.icon"/><span>{{ item.name }}</span>
        </router-link>
      </li>
    </ul>
    <div class="product-and-serve">
      <product-and-serve ref="productandserve" @closeSettingDrawer="closeSettingDrawer"></product-and-serve>
    </div>
  </div>
</template>

<script>
  import store from '@/store'
  import ProductAndServe from './ProductAndServe'
  import { mixin, mixinDevice } from '@/utils/mixin.js'
  export default {
    name: 'NewIndex',
    components: { ProductAndServe },
    props: {
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
    },
    mixins: [mixin, mixinDevice],
    data () {
      return {
        mouseType: 'out',
      }
    },/*
    created(){
      this.menus = store.getters.permissionList;
    },*/
    methods: {
      mouse(mouseType){
        if (!this.$refs.productandserve.visible) {
          this.mouseType = mouseType;
          return true;
        }
        return false;
      },
      menuStyle(){
        if (this.mouseType === 'over' || !this.collapsed) {
          return 'ant-menu ant-menu-vertical ant-menu-root ant-menu-' + this.theme;
        }
        return 'ant-menu ant-menu-vertical ant-menu-root ant-menu-' + this.theme + ' ant-menu-inline-collapsed';
      },
      settingDrawer() {
        this.$refs.productandserve.isshow = {};
        this.$refs.productandserve.showDrawer();
      },
      closeSettingDrawer(){
        this.$refs.productandserve.isshow = {display: 'none'};
      },
      updateMenu(currentName){
        this.menus.forEach(item => {
          if (item.name === currentName) {
            item.type = 'ant-menu-item ant-menu-item-selected';
          } else {
            // test
            item.type = 'ant-menu-item ';
          }
        });
        this.$emit('test');
        this.$root.event.$emit('closeMenu');
      }
    },
    computed: {
      menus() {
        //this.$store.getters.vuex getters中的对应的回调函数的函数名
        return this.$store.getters.permissionList;
      }
    }

  }
</script>

<style scoped>
  .product-and-serve{
    position: absolute;
    left: 249px;
  }
  .ant-menu-item:hover{color: #FFF!important;}
</style>