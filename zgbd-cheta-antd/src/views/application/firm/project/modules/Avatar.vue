<template>
  <div class="cheta-dropdown-content cheta-check-avatar">
    <div v-if="!isAdd">
      <div class="cheta-p-10">
        <a-input placeholder="搜索工作流">
          <a-icon slot="prefix" type="search" />
        </a-input>
      </div>
      <a-list
        itemLayout="horizontal"
        :dataSource="tags"
      >
        <a-list-item class="member-list-item" slot="renderItem" slot-scope="user,index" @click.native="changePerson(user)">
          <a-list-item-meta>
            <span slot="title">{{user.name}}</span>
            <a-avatar :class="`badge-${user.color}`" slot="avatar" :icon="user.icon" />
          </a-list-item-meta>
          <a-icon slot="actions" type="check" v-if="user.checked"/>
        </a-list-item>
      </a-list>
      <div class="cheta-footer cheta-width-full">
        <a-button type="primary" class="ant-btn-lg" @click="isAdd = !isAdd">新建工作流</a-button>
      </div>
    </div>
    <div v-else>
      <div class="cheta-p-10">
        <a-input placeholder="工作流名称" v-model="tmp.name">
          <span slot="addonAfter">
            <a-tooltip title="选择图标">
              <a-icon :type="icon" @click="iconChooseVisible = !iconChooseVisible"/>
            </a-tooltip>
          </span>
        </a-input>
        <icons @choose="handleIconChoose" :icon="icon" @close="iconChooseVisible = false" :iconChooseVisible="iconChooseVisible"></icons>
      </div>
      <div class="cheta-mspace10 cheta-events" v-if="!iconChooseVisible">
        <a-avatar :class="`badge-${tage}`" :icon="tage === currentTage ? 'check' : ''" v-for="tage in tageList" @click="currentTage = tage"/>
      </div>
      <div class="cheta-footer cheta-width-full" v-if="!iconChooseVisible">
        <a-button class="ant-btn-lg-span12" @click="isAdd = !isAdd">取消</a-button>
        <a-button class="ant-btn-lg-span12" :disabled="!tmp.name" type="primary" @click="addTag">确定</a-button>
      </div>
    </div>
  </div>
</template>

<script>
  import Icons from './icon/Icons'
  import {flowEdit} from '../api/api'

  export default {
    name: 'Avatar',
    components: {Icons},
    data () {
      return {
        projectId: this.$route.params.projectId,
        check:true,
        icon: 'tag',
        currentTage: 'blue',
        tageList: ['blue', 'red', 'orange', 'green', 'brown', 'purple'],
        isAdd: false,
        iconChooseVisible: false,
        tmp: {}
      }
    },
    props: {
      item: {
        type: Object
      },
      tags: {
        type: Array
      },
      tagList: {
        type: Array
      }
    },
    methods: {
      changePerson (item) {
        if (item.checked) {
          var $this = this;
          this.tagList.forEach((tag, index) => {
            if (tag.id === item.id) {
              $this.tagList.splice(index, 1);
            }
          })
        } else {
          this.tagList.push(item);
        }
        item.checked = !item.checked;
      },
      visibleChange () {
        this.isAdd = false;
      },
      addTag () {
        var tag = Object.assign(this.tmp), $this = this;
        this.tmp = {};
        tag.checked = false;
        tag.color = this.currentTage;
        tag.icon = this.icon;
        this.tags.push(tag);
        this.isAdd = !this.isAdd;
        flowEdit(tag).then(res => {
          $this.$message.success(res.message);
          $this.close();
        })/*
        this.tmp.id = new Date().getTime();
        this.tmp.checked = false;
        this.tmp.color = this.currentTage;
        this.tmp.icon = this.icon;
        this.tags.push(this.tmp);
        this.isAdd = !this.isAdd;
        this.close();*/
      },
      handleIconChoose (icon) {
        this.icon = icon;
        this.iconChooseVisible = false;
      },
      close () {
        this.$emit('showTag');
      }
    }
  }
</script>
<style lang="less">
  .cheta-avatar-content .ant-dropdown {
    width: 257px!important;
    height: 420px!important;
  }
  .cheta-dropdown-content .ant-list{
    height:235px!important;
    overflow-y: scroll!important;
  }
  .cheta-dropdown-content .ant-input-affix-wrapper .ant-input-prefix {
    left: 10px!important;
  }
</style>
<style lang="less" scoped>
  @import url("../base.less");

  .cheta-font-Quote14{font-size: 14px;font-family: Chinese Quote;color: rgba(0,0,0,.45);}
  .cheta-avatar{width:32px;height:32px;border-radius: 50%;}
  .cheta-check-avatar{background-color: #FFF;border-radius: 4px;box-shadow: 0 2px 20px rgba(0,0,0,.1);margin-top: 5px; padding: 10px 0px;}
  .ant-btn-lg{
    padding: 0 15px;
    border-radius: 4px;
    height: 40px;
    font-size: 14px;
    width: 100%;
  }
  .ant-btn-lg-span12{
    border-radius: 4px;
    margin: 5px;
    height: 40px;
    font-size: 14px;
    width: calc(50% - 10px);
  }
  .cheta-footer{
    padding: 12px 12px 0px;
    border-top: 1px solid #e8e8e8;
  }
  .member-list-item {
    padding: 12px 24px;

    &:hover {
      background-color: #eee;
      cursor: pointer;
    }
  }



</style>