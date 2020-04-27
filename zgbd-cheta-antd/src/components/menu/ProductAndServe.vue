<template>
  <div :style="isshow">
    <!--<a-drawer
      placement="left"
      @close="onClose"
      :visible="visible"
      width="960"
      handle="mytest"
      getContainer=".product-and-serve div"
    >
      <a-input-search
        placeholder="请输入关键词"
        style="width: 500px"
        @change="onSearch"
      />
      <div class="zgb-search" v-if="searchValue">
        以下是与“<span style="color:#40a9ff">{{ searchValue }}</span>”相关的产品：
      </div>

      <div style="width: 700px;">
        <a-row>
          <a-col :span="8" v-for="menus in list">
            <a-card :bordered="false" :bodyStyle="{ padding: '10px 10px 10px 10px'}" v-for="item in menus">
              <a-row class="zgb-menu-title" :id="item.name">
                {{ item.name }}
                <span class="is-menu" @click="checkMenu(item.id)" v-if="!item.checkMenu">
                  <a-icon type="check-circle" />
                </span>
                <span @click="checkMenu(item.id)" v-else>
                  <a-icon type="check-circle" theme="twoTone" twoToneColor="#52c41a" />
                </span>
              </a-row>
              <a-row class="zgb-menu-item" v-for="innerItem in item.children">
                <router-link :to="{path:innerItem.url ? innerItem.url : ''}">
                  {{ innerItem.name }}
                </router-link>
              </a-row>
            </a-card>
          </a-col>
        </a-row>

        <div class="sidebar-productList-right">
          <ul class="sidebar-category-nav" style="list-style: none">
            <template v-for="menus in list">
              <li class="sidebar-category-nav-item " id="category-0" v-for="item in menus">
                <a :href="'#' + item.name">{{ item.name }}</a>
              </li>
            </template>
          </ul>
        </div>
      </div>
    </a-drawer>-->
  </div>
</template>
<script>

  import store from '@/store'
  import { mapActions } from "vuex"

  export default {
    name: "ProductAndServe",
    components: {
      store
    },
    data() {
      return {
        visible: false,
        placement: 'left',
        list: [
          [], [], []
        ],
        isshow:{},
      }
    },
    created(){
      this.reloadMenu();
    },
    methods: {
      ...mapActions([ "SetPermissionList" ]),
      showDrawer() {
        this.$emit('showSettingDrawer')
        this.visible = true
      },
      onClose() {
        this.$emit('closeSettingDrawer')
        this.visible = false
      },
      onChange(e) {
        this.placement = e.target.value
      },
      onSearch(e){
        this.reloadMenu(e.target.value);
      },
      reloadMenu(value){
        this.searchValue = value;
        var list = [
          [], [], []
        ];
        var aliyunMenus = []
        this.menus.forEach((item,index) => {
          item.checkMenu=!item.hidden
          item.children.forEach(item => {
            if (item.children.length > 0) {
              item.url = item.children[0].url;
            }
          })
          list[index % 3].push(item);
        });
        aliyunMenus.forEach((item, index) => {
          item.name = item.name + '（孵化）';
          item.checkMenu = false;
          list[index % 3].push(item)
        });
        if (value) {
          var tmpList = [
            [],[],[]
          ];
          list.forEach((menus, index) => {
            for (var i = 0;i < menus.length;i++) {
              var menu = menus[i], tmpMenu = {children: []};
              for (var j = 0;j < menu.children.length;j++) {
                var innerMenu = menu.children[j];
                if(innerMenu.name.indexOf(value) != -1){
                  tmpMenu.name = menu.name;
                  tmpMenu.children.push(innerMenu);
                }
              }
              if (tmpMenu.children.length > 0) {
                tmpList[index].push(tmpMenu);
              }
            }
          })
          list = tmpList;
        }
        this.list = list;
      },
      checkMenu(id){
        this.list.forEach((menus, index) => {
          for (var i = 0;i < menus.length;i++) {
            var menu = menus[i];
            if(menu.id === id){
              var name = menu.name
              menu.name = name + ' ';
              menu.checkMenu = !menu.checkMenu;
            }
          }
        })
        var list=store.getters.permissionList
        list.forEach(item=>{
          if(item.id==id){
            item.hidden=!item.hidden
          }
        })
        this.SetPermissionList(list);

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
  .zgb-menu-title{
    line-height: 40px;
    height: 40px;
    color: #000;
    font-size: 14px;
    padding: 0 10px;
    font-weight: 600;
  }
  .zgb-menu-item
  {
    font-size: 12px;
    color: #000;
    display: block;
    line-height: 30px;
    height: 30px;
    padding-left: 10px;
    padding-right: 30px;
    overflow: hidden;
    white-space: nowrap;
    text-overflow: ellipsis;
    opacity: .65;
  }
  .zgb-menu-item:hover
  {
    background-color: rgba(0,0,0,.06);
  }
  .zgb-search{margin: 10px 0px;}
  .sidebar-productList-right{
    position: absolute;
    top: 55px;
    left: 720px;
    border-left: 2px solid rgba(0,0,0,.1);
  }
  .sidebar-category-nav-item{
    line-height: 32px;
    height: 32px;
    white-space: nowrap;
    overflow: hidden;
    max-width: 160px;
    text-overflow: ellipsis;
  }
  .sidebar-category-nav-item:hover{
    border-left: 2px solid #00c1de;
    margin-left: -42px;
    cursor: pointer;
  }

  a{
    color: black;
    position: absolute;
    left: 10px;
  }
  .sidebar-category-nav-item:hover a{
    font-weight: 700;
    outline: none;
    color: #00c1de;
  }
  .zgb-menu-title{cursor:pointer;}
  .zgb-menu-title .is-menu{display: none;}
  .zgb-menu-title:hover .is-menu{ display: inline-block;}
</style>