<template>
  <div>
    <a-drawer
      wrapClassName="info-drawer"
      title="项目成员"
      width=350
      placement="right"
      @close="visible = false"
      :visible="visible"
    >
      <div class="search-content">
        <a-input v-model="keyword" size="large" placeholder="输入昵称或邮箱查找">
          <a-icon slot="prefix" type="search"/>
        </a-input>
      </div>
      <div class="member-list">
        <div class="member-list-item ant-list-item header-action">
          <div class="ant-list-item-meta" @click="doInvite">
            <div class="ant-list-item-meta-avatar">
              <a-avatar icon="plus"></a-avatar>
            </div>
            <div class="ant-list-item-meta-content">
              <h4 class="ant-list-item-meta-title"><span>邀请新成员</span></h4>
            </div>
          </div>
        </div>
        <a-list
          itemLayout="horizontal"
          :loading="searching"
          :dataSource="projectMembers"
          :locale="{emptyText: (keyword && keyword.length > 1) ? '没有搜索到相关成员' : ''}"
        >
          <a-list-item class="member-list-item" slot="renderItem" slot-scope="item,index">
            <span slot="actions" v-if="!item.manage">
              <a class="muted" @click="removeMember(item,index)"><a-icon type="user-delete"/> 移除</a>
            </span>
            <a-list-item-meta :description="item.loginName">
              <span slot="title">{{item.nickName}}</span>
              <a-avatar slot="avatar" icon="user" :src="item.avatar"/>
            </a-list-item-meta>
          </a-list-item>
        </a-list>
      </div>
      <Invite ref="invite" @getData="getData"></Invite>
    </a-drawer>
  </div>
</template>

<script>
  import Invite from './Invite'
  import {deleteAction} from '@/api/manage'
  import {userList, userDelete} from '@/views/application/firm/project/api/api'

  export default {
    name: 'User',
    components: { Invite },
    data () {
      return {
        projectId: this.$route.params.id,
        visible: false,
        showInviteMember: false,
        keyword: '',
        searching: false
      }
    },
    props: {
      projectMembers: {
        type: Array,
      }
    },/*
    created () {
      this.getData();
    },*/
    methods: {
      toggle () {
        this.visible = !this.visible;
      },
      removeMember (item,index) {
        var $this = this;
        userDelete({id: item.id}).then(res => {
          $this.getData();
        })
      },
      doInvite () {
        this.$refs.invite.doInvite()
      },
      getData () {/*
        // 获取用户
        var $this = this;
        userList({projectId: this.projectId}).then(res => {
          $this.projectMembers = res.result;
        })*/
        this.$emit('getUser')
      }
    }
  }
</script>

<style lang="less">

  .info-drawer {
    top: 125px;
    width: 0 !important;

    .ant-drawer-mask {
      visibility: hidden;
    }

    .ant-drawer-content {
      background-color: #f7f7f7;
    }

    .ant-drawer-header {
      background-color: #f7f7f7;
      text-align: center;
    }

    .ant-drawer-body {
      padding: 12px 0;
    }

    .search-content {
      padding: 0 24px;
    }
    .ant-input-lg{
      font-size: 14px;
    }
  }

  .info-drawer {
    .member-list {
      padding-top: 12px;

      .ant-list-item-meta {
        align-items: center;
      }

      .member-list-item {
        padding: 12px 24px;

        &:hover {
          background-color: #eee;
          cursor: pointer;
        }
      }
    }
  }

  .info-drawer {
    .config-wrapper {
      position: relative;
      padding-bottom: 1px;

      .config-menus {
        padding: 0;
        list-style: none;

        .menu-item {
          position: relative;
          line-height: 30px;

          &:hover {
            background: #eeeeee;
          }

          &:first-child > a {
            margin-top: -6px;
          }

          a {
            display: block;
            cursor: pointer;
            padding: 5px 15px;
            text-decoration: none;
            overflow: hidden;
            text-overflow: ellipsis;
            white-space: nowrap;
            color: #383838;
            font-weight: 600;

            .anticon {
              width: 24px;
              text-align: center;
              font-size: 15px;
              margin-right: 5px;
            }
          }
        }
      }
    }
  }
</style>