<template>
  <div class="cheta-block">
    <a-tooltip title="自定义导航">
      <a-icon type="bars" class="cheta-event action" @click="visible = !visible"/>
    </a-tooltip>
    <a-modal
      title="自定义导航"
      width="800px"
      :visible="visible"
      @ok="visible = false"
      @cancel="visible = false"
      cancelText="关闭">
      <a-row>
        <a-col :span="14">
          <a-input-search
            placeholder="请输入关键词"
            @change="onSearch"
          />
        </a-col>
      </a-row>
      <div class="zgb-search" v-if="searchValue">
        以下是与“<span style="color:#40a9ff">{{ searchValue }}</span>”相关的产品：
      </div>
      <div style="width: 100%;" onselectstart="return false">
        <a-row>
          <a-col :sm="24" :md="12" :xl="6" >
          </a-col>
        </a-row>
        <a-row>
          <a-col :span="6" class="cheta-mt-10 cheta-pr-10 cheta-border-right">
            <Draggable v-model="checkList" :move="stageMove">
              <a-row v-for="(inner,index) in checkList" v-if="index < 12" class="cheta-mt-10 cheta-p-5 zgb-menu-nav">
                <a-col :span="12">{{ inner.name }}</a-col>
                <a-col class="cheta-font-right cheta-event" :span="12">
                  <a-icon type="close" @click="reloadNav(inner)"/>
                </a-col>
              </a-row>
            </Draggable>
            <a-row class="cheta-font-right"><span class="cheta-color cheta-">{{ checkList.length }}</span> / {{ menuLength }}</a-row>
          </a-col>
          <a-col :span="15">
            <a-row :id="item.name" v-for="item in list">
              <a-col :span="24" class="cheta-mt-10 zgb-menu-title">
                {{ item.name }}
              </a-col>
              <a-col :xs="12" :sm="12" :md="12" :xl="6" v-for="inner in item.children" class="cheta-mt-10 zgb-menu-item">
                <a-checkbox @click.stop="reloadNav(inner)" :checked="inner.checkMenu">
                  <span class="cheta-pl-5">{{ inner.name }}</span>
                </a-checkbox>
              </a-col>
            </a-row>
          </a-col>
          <a-col :span="3" class="cheta-mt-20">
            <a-anchor getContainer=".product-and-serve">
              <a-anchor-link href="#最新活动" title="最新活动"/>
              <a-anchor-link href="#企业采购" title="企业采购"/>
              <a-anchor-link href="#用车网" title="用车网"/>
              <a-anchor-link href="#金融服务" title="金融服务"/>
              <a-anchor-link href="#增值服务" title="增值服务"/>
              <a-anchor-link href="#大数据中心" title="大数据中心"/>
              <a-anchor-link href="#平台资讯" title="平台资讯"/>
            </a-anchor>
          </a-col>
        </a-row>
      </div>
    </a-modal>
  </div>
</template>

<script>

  import Draggable from 'vuedraggable';
  import store from '@/store'
  import ACol from 'ant-design-vue/es/grid/Col'
  import { mapActions } from "vuex"

  export default {
    data() {
      return {
        visible: false,
        list: [],
        checkList: [],
        menuLength: 0
      }
    },
    components: {
      ACol,
      store,
      Draggable
    },
    created(){
      this.reloadNav();
      this.reloadMenu();
    },
    methods: {
      ...mapActions([ "SetPermissionList" ]),
      onChange(e) {
        this.placement = e.target.value
      },
      onSearch(e){
        this.reloadMenu(e.target.value);
      },
      // 加载菜单
      reloadMenu(value){
        this.searchValue = value;
        var elementList = [
          {name: '基础服务', url: '/', children: []},
          {name: '企业服务', url: '/', children: []},
          {name: '行业服务', url: '/', children: []},
          {name: '中台服务', url: '/', children: []},
          {name: '金融服务', url: '/', children: []}
        ];
        var list = [];
        var menus = store.getters.permissionList;
        this.menuLength = menus.length;
        elementList.forEach(item => {
          menus.forEach(inner => {
            if (item.name === inner.group) {
              if (!inner.children) {
                inner.children = [];
              }
              item.children.push(inner)
            }
          })
          list.push(item);
        })
        if (value) {
          var tmpList = [];
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
                tmpList.push(tmpMenu);
              }
            }
          })
          list = tmpList;
        }
        this.list = list;
      },
      // 修改导航
      reloadNav(inner){
        if (inner) {
          inner.checkMenu = !inner.checkMenu;
        }
        var menus = store.getters.permissionList;
        // 初始化赋值
        var that = this;
        that.checkList = [];
        menus.forEach(item => {
          if (item.checkMenu) {
            that.checkList.push(item);
          }
          if (inner && item.id === inner.id) {
            item.hidden = !item.hidden;
          }
        });
        this.SetPermissionList(menus);
      },
      stageMove(evt) {
        this.preCode = evt.draggedContext.element.code;
        this.nextCode = evt.relatedContext.element.code;
      },
    },
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
    overflow: hidden;
    white-space: nowrap;
    text-overflow: ellipsis;
    opacity: .75;
  }
  .zgb-menu-item:hover { background-color: rgba(0,0,0,.06);}
  .zgb-search{margin: 10px 0px;}
  .zgb-menu-title{cursor:pointer;min-width: 150px;}
  .zgb-menu-nav{background-color: rgba(0,0,0,.04);color: rgba(0, 0, 0, 0.65);border: 1px dashed rgba(0,0,0,.0);cursor: move}
  .zgb-menu-nav i{color: rgba(0, 0, 0, 0.25);}
  .zgb-menu-nav:hover{border: 1px dashed rgba(0,0,0,.4);box-sizing: border-box;}
</style>