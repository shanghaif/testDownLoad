<template>
  <div>
    <div class="cheta-mspace10">
      <a-tree-select showSearch style="width: 200px;" :dropdownStyle="{ maxHeight: '200px', overflow: 'auto' }" :treeData="menuList">
        <a-icon slot="suffixIcon" type="search"/>
      </a-tree-select>
    </div>
    <div class="content child-wrap cheta-mspace10" style="background-color: white;">
      <div class="content-list cheta-pspace10" style="background: #f0f2f5;" v-for="(menu, index) in menus" v-if="menu.children.length > 0">
        <div class="cheta-height-full">
          <div class="content-list-title cheta-fontb-style">
            {{menu.name}} · {{ menu.children.length }}
          </div>
          <div class="content-list-scroll">
            <div
              :class="`content-list-task cheta-mt-10 cheta-p-10 cheta-event ${isCheck(item, menu, index)} hover_add`"
              v-for="item in menu.children"
              @click="menuClick(item, index + 1)">
              <div>
              <span class="content-list-task-title cheta-fontb-style">
                <a-icon :type="item.icon"></a-icon>
                {{ item.name }}
                <a-tooltip title="新增子菜单">
                  <a-icon type="plus-circle" @click.stop="menuAdd(item)" v-if="item.children.length === 0" class="btn_add"/>
                </a-tooltip>
                <span class="cheta-floatl content-list-right">
                  <a-tooltip placement="top" v-if="item.menuHidden">
                    <template slot="title">
                      <span>特殊菜单，不作为展示</span>
                    </template>
                    <a-icon type="tags"/>
                  </a-tooltip>
                </span>
              </span>
              </div>
            </div>
          </div>
          <div @click="menuAdd(menu)" class="content-list-add cheta-mt-10 cheta-p-10 cheta-font-center cheta-event">
            <a-icon type="plus-circle"/> 添加
          </div>
        </div>
      </div>
      <Edit class="content-edit cheta-pspace10" @refresh="refresh" @ ref="edit"></Edit>
    </div>
  </div>
</template>

<script>

  import {getPermissionList} from '@/api/api'
  import Edit from './Edit'
  import Span from "../../car/component/list/modules/modules/Span";

  export default {
    name: 'Index',
    data () {
      return {
        isAdd: false,
        menus: [],
        menuList: []
      }
    },
    components: {
        Span,
      Edit
    },
    created () {
        this.initTree();
    },
    methods: {
      initTree(){
        var $this = this;
        // 初始化菜单树
        getPermissionList().then(res =>{
            // $this.menus = res.result;
            var menu = {
                name: '一级菜单',
                children: res.result,
                id: ''
            }
            $this.initMenus(menu, 0);
        });
      },
      initMenus (result, index) {
        this.menus.splice(index, this.menus.length)
        if (result.children) {
          var menu = result.children[0];
          this.$set(this.menus, index, result)
          if (menu) {
            this.initMenus({
              name: menu.name,
              id: menu.id,
              children: menu.children
            }, index + 1);
          }
        }
      },
      menuAdd(item){
        this.$refs.edit.addMenu(item.id,item.name,item.children.length+1);
      },
      refresh(){
          this.initTree();
      },
      menuClick (item, index) {
        this.$refs.edit.setData(item);
        this.initMenus(item, index);
      },
      isCheck (item, menu, index) {
        if (index + 1 == this.menus.length) {
          return '';
        }
        if (item.name === this.menus[index + 1].name) {
          return 'content-list-menu-check';
        }
      }
    }
  }
</script>

<style lang="less" scoped>

  @import "~ant-design-vue/dist/antd.less";
  .hover_add .btn_add{visibility: hidden;line-height: 30px;float: right;font-size: 18px}
  .hover_add:hover .btn_add{visibility: visible;}

  .content{ -webkit-transform: translate3d(0, 0, 0); transform: translate3d(0, 0, 0);}
  .content-list{width: 295px; float: left; position: relative;box-sizing: border-box;height: calc(100vh - 150px);transition: all 0.3s;}
  .content-list-task,.content-list-add{background: white;line-height: 30px;border-radius: 3px;transition: all 0.3s;}
  .content-list-task{box-shadow: 0 1px 2px rgba(0,0,0,.1);border-right: 1px solid white;}
  .content-list-scroll{max-height: calc(100% - 85px);overflow: auto}
  .content-list-scroll-isadd{max-height: calc(100% - 185px);overflow: auto}
  .cheta-unline .cheta-fontb-style{color: #a6a6a6;text-decoration: line-through;}
  .cheta-lable {line-height: 35px;padding: 2px 5px;color: #FFF;}
  .child-wrap { width: 100%; display: flex; overflow-x: auto;}

  .content-list-task .content-list-right{line-height: 30px;}
  .content-list-task:hover {border-right: 1px solid @primary-color;}
  .content-list-task:hover .cheta-fontb-style{color: @primary-color}
  .content-list-right{line-height: 30px;font-size: 20px;color: @primary-color}
  .content-list-menu-check {border-right: 1px solid @primary-color;}
  .content-list-menu-check .cheta-fontb-style{color: @primary-color}

  .content-edit{width: 500px;float: left; position: relative;box-sizing: border-box;height: calc(100vh - 150px);transition: all 0.3s;}
</style>