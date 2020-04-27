<template>
  <div class="cheta-warn-message">
    <div class=""  @click="warnToggle" style="width: 40px;display: inline-block;float:left;margin-left: -54px;background: white;box-shadow: 0 2px 2px rgba(0, 0, 0, 0.15);border-radius: 5px">
      <div>
        <a-badge :count="count" :overflowCount="99">
          <i class="iconfont icon-baojing" style="color: #FF9933;font-size: 24px"></i>
        </a-badge>
      </div>
    </div>
    <a-drawer
      wrapClassName="warn-message-drawer"
      placement="right"
      width="300"
      height="100%"
      :visible="visible"
      @close="visible = false"
    >
      <div slot="title" class="">
        <a-pagination simple :total="count" @change="onChange"/>
      </div>
      <div slot="title" class="font-warn-title"><span>预警信息</span></div>
<!--      height=calc(100% - 135px)-->
      <div class="search-content clearfix">
        <Search :showSearch="true" @search="search" class="cheta-warn-search"></Search>
        <div class="cheta-filtrate cheta-event" @click="typeVisible = true">排序<i class="iconfont icon-shaixuan"></i></div>
      </div>
      <div class="member-list">
        <a-list
          itemLayout="horizontal"
          :dataSource="warnMessage"
        >
          <div
            slot="loadMore"
            :style="{ textAlign: 'center', marginTop: '12px', height: '32px', lineHeight: '32px' }"
          >
            <a-spin v-if="loading" />
            <a-button v-else @click="loadMore(pageNo + 1, pageSize)">加载更多</a-button>
          </div>
          <a-list-item class="member-list-item" slot="renderItem" slot-scope="item,index" :style="{ padding:'12px 12px 12px 24px'}">
            <a-list-item-meta>
              <a-avatar
                slot="avatar"
                src="/image/carsecurity/emergency.png"
              />
              <div slot="title" class="clearfix"><p class="cheta-block cheta-floatl cheta-font14 cheta-warn" :title="item.registrationNo">{{ item.registrationNo }}</p><p class="cheta-block cheta-floatr cheta-font12">{{ item.gt }}</p></div>
              <span slot="description" style="">{{item.content}}</span>
            </a-list-item-meta>
          </a-list-item>
        </a-list>
      </div>

<!--      <Invite ref="invite" @getData="getData"></Invite>-->
    </a-drawer>
  </div>
</template>

<script>
  import Search from '@views/chetaui/input/search/Index';
  // import Invite from './Invite'
  import { getAlarm } from '@/views/application/car/api/api'
  import Cash from './Cash'

  export default {
    name: 'User',
    data () {
      return {
        projectId: this.$route.params.id,
        visible: false,
        showInviteMember: false,
        // keyword: '',
        // loading: true,
        warnMessage:[],
        keyword:'',
        typeVisible:true,
        pageNo:1,
        pageSize:10,
        loading: false,
      }
    },
    components:{
      Cash,
      Search
    },
    created () {
        this.pageData()
    },
    methods: {
      warnToggle () {
        this.visible = !this.visible;
      },
      pageData () {
        var param={
          pageNo:this.pageNo,
          pageSize:this.pageSize,
          keyword:this.keyword,
        }
        var $this = this
        $this.loading = true;
        getAlarm(param).then(res =>{
          $this.count= res.count
          $this.warnMessage = $this.warnMessage.concat(res.data)
          $this.loading = false;
        })
      },
      onChange (pageNo, pageSize) {
        this.warnMessage = []
        this.loadMore(pageNo, pageSize);
      },
      loadMore (pageNo, pageSize) {
        this.pageNo = pageNo
        this.pageSize = pageSize
        this.pageData()
      },
      search(keyword){
        this.keyword=keyword
        this.pageData()
      },
    }
  }
</script>

<style lang="less">
  /*.ant-drawer-right .ant-drawer-content-wrapper {
    height:calc(100% - 103px)!important;
  }*/
  .warn-message-drawer{
    top: 136px;
    width: 0 !important;
    .ant-drawer-mask {
      visibility: hidden;
    }

    .ant-drawer-content {
      background-color: white;
    }

    .ant-drawer-header {
      background-color: white;
      text-align: center;
    }
    .ant-drawer-title{
      display: flex;
    }

    .ant-drawer-body {
      padding: 12px 0;
      height: calc(100% - 75px) !important;
    }

    .search-content {
      padding: 0 12px;
      width: 100%;
      height: 45px;
      line-height: 45px;
      /*padding: 0 60px 0px 24px;*/
    }
    .ant-pagination{
      width: 56px;
      display: inline-block;
    }
    .ant-pagination-simple .ant-pagination-simple-pager {
      margin-right: 0px;
      display: none;
    }
    .ant-pagination-prev{
      min-width: 15px;
    }
    .font-warn-title{
      width: 168px;
    }
  }
  .warn-message-drawer {
    .member-list {
      padding-top: 12px;
      width: 100%;
      height: calc(100% - 165px);
      overflow-y: scroll;

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
  .warn-message-drawer {
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

        }
      }
    }
  }



</style>
<style lang="less" scoped>
  .cheta-warn-search{
    width: 180px;
    float: left;
  }
  .cheta-filtrate{
    float: right;
  }
  .cheta-warn{
    width: 100px;
    overflow: hidden;
    white-space: nowrap;
    text-overflow: ellipsis;
  }

</style>