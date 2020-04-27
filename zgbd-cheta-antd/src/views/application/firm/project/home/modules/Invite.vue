<template>
  <div>
    <a-modal
      class="invite"
      :width="360"
      title="邀请新成员"
      :visible="inviteStatus"
      @ok="ok"
      okText="确定"
      cancelText="取消"
      @cancel="close"
    >
      <div class="header">
        <span>账号邀请</span>
        <a @click="createInviteLink">通过链接邀请</a>
      </div>
      <div class="search-content">
        <a-input v-model="keyword" placeholder="输入昵称或邮箱查找">
          <a-icon slot="prefix" type="search"/>
        </a-input>
      </div>
      <div class="member-list" v-if="list">
        <a-list
          class="project-list"
          itemLayout="horizontal"
          :loading="searching"
          :dataSource="list"
          :locale="{emptyText: (keyword && keyword.length > 1) ? '没有搜索到相关成员' : ''}"
        >
          <a-list-item slot="renderItem" slot-scope="item">
                    <span slot="actions">
                        <a-button size="small" type="dashed" icon="user-add"
                                  v-if="!item.joined"
                                  @click="invite(item)"
                        >邀请</a-button>
                        <template v-else>
                             <a-icon type="user"></a-icon>
                            <span> 已加入</span>
                        </template>
                     </span>
            <a-list-item-meta
              :description="item.email"
            >
              <span slot="title">{{item.name}}</span>
              <a-avatar slot="avatar" icon="user" :src="item.avatar"/>
            </a-list-item-meta>
          </a-list-item>
        </a-list>
      </div>
      <div v-else>
        <p v-if="position" class="cheta-mt-10">
          <a class="muted" @click="doPosition"><a-icon type="left" /> {{ position.name }}</a>
        </p>
        <a-list
          itemLayout="horizontal"
          :dataSource="menuList"
        >
          <a-list-item class="member-list-item" slot="renderItem" slot-scope="item,index" v-if="item.children">
                      <avatar-list  slot="actions" :max-length="3" :length="item.children.length" @click.native="doPerson(item)">
                        <avatar-list-item  v-for="inner in item.children" :tips="inner.name" :src="inner.avatar" />
                      </avatar-list>
            <a-list-item-meta
            >
              <span slot="title">{{item.positionText}}({{ item.children.length }})</span>
              <!--<a-avatar slot="avatar" icon="user" :src="item.avatar"/>-->
            </a-list-item-meta>
          </a-list-item>

          <a-list-item class="member-list-item cheta-event" slot="renderItem" slot-scope="item,index" v-else @click.native="item.check = !item.check">
            <a-list-item-meta>
              <span slot="title">{{item.name}} </span>
              <a-avatar slot="avatar" icon="user" :src="item.avatar"/>
            </a-list-item-meta>
            <a-icon slot="actions" type="check" v-if="item.check"/>
          </a-list-item>

        </a-list>
      </div>
    </a-modal>
    <a-modal
      class="invite-link"
      :width="600"
      :visible="linkStatus"
      title="邀请成员"
      :footer="null"
      @cancel="linkStatus = false"
    >
      <div class="header">
        <p>链接有效日期：2019-9-5</p>
        <a-input-search
          size="large"
          v-model="link"
          enterButton="复制链接"
          @search="$message.success('复制成功！')"
        />
      </div>
    </a-modal>
  </div>

</template>

<script>
  import { getAction ,httpAction} from '@/api/manage'
  import AvatarList from '@/components/AvatarList'
  const AvatarListItem = AvatarList.AvatarItem
  export default {
    name: "Invite",
    components: {
      AvatarList,
      AvatarListItem
    },
    data () {
      return {
        projectId: this.$route.params.id,
        inviteStatus: false,
        linkStatus: false,
        keyword: '',
        link: 'http://ctayun.com',
        searching: false,
        list: null,
        menuList: [],
        position: null,
        projectMembers: []
      }
    },
    methods: {
      init () {
        var $this = this;
        getAction('/application/firm/project/user/getTree?projectId=' + this.projectId).then(res=>{
          if (res.result) {
            $this.menuList = res.result
          }
        })
      },
      createInviteLink () {
        this.linkStatus = true;
      },
      doInvite () {
        this.inviteStatus = true;
        this.init()
      },
      doPosition () {
        this.menuList = this.position.menus
        this.position = null;
      },
      doPerson (item) {
        this.position = item;
        this.position.menus = this.menuList;
        this.menuList = item.children;
      },
      ok () {
        var personList = []
        var  valueList = [] ,
        $this = this;
        if(this.position){
          valueList = $this.position.menus
        }
        else{
          valueList = $this.menuList
        }
        valueList.forEach(item=>{
          item.children.forEach(inner=>{
            if(inner.check){
              personList.push({
                projectId: $this.projectId,
                userId: inner.id
              })
            }
          })
        })
        httpAction('/application/firm/project/user/insert',personList,'post').then(res=>{
          if (res.success) {
            $this.$message.success(res.message)
            $this.close()
            $this.$emit('getData')
          }
        })
      },
      addPerson () {
      },
      close () {
        this.inviteStatus = false
      },
    }
  }
</script>

<style lang="less">
  .invite {
    .ant-modal-body {
      padding-top: 0;
      padding-bottom: 24px;
      min-height: 40vh;
    }

    .header {
      display: flex;
      flex-direction: row;
      justify-content: space-between;
      padding: 12px 0;
    }

    .member-list {
      padding-top: 12px;
    }

  }
</style>
titleClick