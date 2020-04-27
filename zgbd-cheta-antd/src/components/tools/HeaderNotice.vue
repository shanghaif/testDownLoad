<template>
  <a-popover
    trigger="click"
    placement="bottomRight"
    :autoAdjustOverflow="true"
    :arrowPointAtCenter="true"
    overlayClassName="header-notice-wrapper"
    :overlayStyle="{ width: '300px', top: '50px' }">
    <template slot="content">
      <a-spin :spinning="loadding">
        <a-tabs>
          <a-tab-pane tab="通知" key="1">
            <a-list>
              <a-list-item v-for="item in notices" @click="noticeClick" style="cursor:pointer;">
                <a-list-item-meta :title="item.title" :description="item.deadline">
                  <a-avatar style="background-color: white" slot="avatar" src="https://gw.alipayobjects.com/zos/rmsportal/kISTdvpyTAhtGxpovNWd.png"/>
                </a-list-item-meta>
              </a-list-item>
              <!--<a-list-item-meta v-for="item in notices" title="你收到了 14 份新周报" description="一年前">
                  <a-avatar style="background-color: white" slot="avatar" src="https://gw.alipayobjects.com/zos/rmsportal/ThXAXghbEsBCCSDihZxY.png"/>
                </a-list-item-meta>
              </a-list-item>
              <a-list-item>
                <a-list-item-meta title="你推荐的 曲妮妮 已通过第三轮面试" description="一年前">
                  <a-avatar style="background-color: white" slot="avatar" src="https://gw.alipayobjects.com/zos/rmsportal/OKJXDXrmkNshAMvwtvhu.png"/>
                </a-list-item-meta>
              </a-list-item>
              <a-list-item>
                <a-list-item-meta title="这种模板可以区分多种通知类型" description="一年前">
                  <a-avatar style="background-color: white" slot="avatar" src="https://gw.alipayobjects.com/zos/rmsportal/kISTdvpyTAhtGxpovNWd.png"/>
                </a-list-item-meta>
              </a-list-item>-->
            </a-list>
          </a-tab-pane>
          <a-tab-pane tab="消息" key="2">
            <a-list-item v-for="item in messages">
              <a-list-item-meta :title="item.content" :description="item.deadline">
                <a-avatar style="background-color: white" slot="avatar" src="https://gw.alipayobjects.com/zos/rmsportal/ThXAXghbEsBCCSDihZxY.png"/>
              </a-list-item-meta>
            </a-list-item>
          </a-tab-pane>
          <a-tab-pane tab="待办" key="3">
            暂无
          </a-tab-pane>
        </a-tabs>
      </a-spin>
    </template>
    <span @click="fetchNotice" class="header-notice">
      <a-badge count="0">
        <a-icon style="font-size: 16px; padding: 4px" type="bell" />
      </a-badge>
    </span>
  </a-popover>
</template>

<script>
  import {getAction } from '@/api/manage'

  export default {
    name: "HeaderNotice",
    data () {
      return {
        loadding: false,
        notices: [],
        messages: [],
      }
    },
    created () {
      this.notice();
      this.message();
    },
    methods: {
      fetchNotice () {
        if (this.loadding) {
          this.loadding = false
          return
        }
        this.loadding = true
        setTimeout(() => {
          this.loadding = false
        }, 500)
      },
      notice () {
        var $this = this;
        getAction('/application/notice/getPageByType', {pageSize: 3, pageNo: 1,type:'公告'}).then(res => {
          $this.notices = res.data;
        })
      },
      message () {
        var $this = this;
        getAction('/application/notice/getPageByType', {pageSize: 3, pageNo: 1,type:'消息'}).then(res => {
          $this.messages = res.data;
        })
      },
      noticeClick(){
        this.$router.push({ path:'/noticeLog' })
      }
    }
  }
</script>

<style lang="css">
  .header-notice-wrapper {
    top: 50px !important;
  }
</style>
<style lang="scss" scoped>
  .header-notice{
    display: inline-block;
    transition: all 0.3s;

    span {
      vertical-align: initial;
    }
  }
</style>