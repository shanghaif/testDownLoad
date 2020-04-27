<template>
  <div class="cheta-dropdown-content cheta-check-avatar">
    <div class="cheta-p-10">
      <a-input placeholder="搜索">
        <a-icon slot="prefix" type="search" />
      </a-input>
    </div>
    <a-list
        itemLayout="horizontal"
        :dataSource="projectMembers"
      >
      <!--@click.native=""-->
      <a-list-item class="member-list-item" slot="renderItem" slot-scope="user,index" @click.native="changePerson(user)">
        <a-list-item-meta>
          <span slot="title">{{user.nickName}}</span>
          <a-avatar slot="avatar" icon="user" :src="user.avatar"/>
        </a-list-item-meta>
        <a-icon slot="actions" type="check" v-if="item.userId === user.userId"/>
      </a-list-item>
    </a-list>
    <div class="cheta-footer cheta-width-full">
      <a-button type="primary" class="ant-btn-lg" @click="doInvite">邀请新成员</a-button>
      <Invite ref="invite" @getData="getDetail"></Invite>
    </div>
  </div>
</template>

<script>
  // import {getAction} from '@/api/manage'
  import {userList} from '@/views/application/firm/project/api/api'
  import Invite from '@/views/application/firm/project/home/modules/Invite'
  export default {
    name: 'Avatar',
    components: { Invite },
    data () {
      return {
        projectId: this.$route.params.id,
        check:true,
        projectMembers: [
          {avatar:"https://gw.alipayobjects.com/zos/antfincdn/XAosXuNZyF/BiazfanxmamNRoxxVxka.png",nickName:'小红-前端'},
          {avatar:"https://gw.alipayobjects.com/zos/antfincdn/XAosXuNZyF/BiazfanxmamNRoxxVxka.png",nickName:'利利-设计'},
          {avatar:"https://gw.alipayobjects.com/zos/antfincdn/XAosXuNZyF/BiazfanxmamNRoxxVxka.png",nickName:'前端-后端'},
          {avatar:"https://gw.alipayobjects.com/zos/antfincdn/XAosXuNZyF/BiazfanxmamNRoxxVxka.png",nickName:'盼盼-测试'},
          {avatar:"https://gw.alipayobjects.com/zos/antfincdn/XAosXuNZyF/BiazfanxmamNRoxxVxka.png",nickName:'郝丽娜-测试'},
          {avatar:"https://gw.alipayobjects.com/zos/antfincdn/XAosXuNZyF/BiazfanxmamNRoxxVxka.png",nickName:'志恒-产品'},
        ]
      }
    },
    props: {
      item: {
        type: Object
      },
    },
    created () {
      this.getDetail()
    },
    methods: {
      changePerson (item) {
        this.item.userId = item.userId
        this.item.avatar = item.avatar
        this.item.nickName = item.nickName
      },
      getDetail () {
        var $this = this
        userList({projectId: this.projectId}).then(res => {
          $this.projectMembers = res.result
        })
      },
      doInvite () {
        this.$refs.invite.doInvite()
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