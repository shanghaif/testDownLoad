<template>
    <div class="cheta-task-total cheta-box-flex">
      <div class="cheta-height-full">
        <a-list :class="`cheta-tab-content ${isAdd ? 'cheta-tab-content-add' : ''}`">
          <!--@click.native="doPerson(item)"-->
          <a-list-item :class="`cheta-event cheta-task-item cheta-p-10 ${currentTask === index ? 'check' : ''}`" :key="index" v-for="(item, index) in statusList" @click.native="getDetail(item, index)">
            <a-list-item-meta>
              <a-avatar
                slot="avatar"
                :src="item.avatar"
                :title="item.nickName"
              />
              <span slot="title" class="check-title">
                {{item.name}}
              </span>
              <div slot="description" style="width:205px;">
                <a-tag v-if="PRIORITY[item.priority]" :class="`tag-${ PRIORITY[item.priority].color }`">{{PRIORITY[item.priority].text}}</a-tag>
                <a-badge v-if="item.flowName" status="success" :text="item.flowName" :class="`dot-${item.flowColor}`"/>
                <!--<a-tag>{{item.nickName}}</a-tag>-->
              </div>
            </a-list-item-meta>
            <span slot="actions">
              <div v-if="STATUS[item.status]" :class="`cheta-button-${STATUS[item.status].color} cheta-font12`">{{STATUS[item.status].text}}</div>
          </span>
          </a-list-item>
        </a-list>
        <div class="cheta-p-10 cheta-border-top">
          <div v-if="isAdd" class="cheta-m-10">
            <a-textarea v-model="tmp.name" placeholder="请输入任务名称"></a-textarea>
            <div class="cheta-mt-10">
              <a-avatar class="avatar cheta-mr-5" size="small" :src="userInfo().headImage"/>
              <span :class="`cheta-color`">{{ userInfo().nickName }}</span>
            </div>
            <div class="cheta-mt-10 cheta-width-full">
              <a-button class="ant-btn-lg-span12" @click="isAdd = !isAdd">取消</a-button>
              <a-button class="ant-btn-lg-span12" :disabled="!tmp.name" type="primary" @click="addTask">确定</a-button>
            </div>
          </div>
          <div v-else><span class="cheta-floatl cheta-ml-10">共 {{ statusList.length }} 项</span><a-button type="primary" class="cheta-floatr" @click="isAdd = true"><a-icon type="plus" />新建任务</a-button></div>
        </div>
      </div>
      <div class="cheta-flex1 cheta-height-full">
        <a-tabs defaultActiveKey="1">
          <a-tab-pane tab="基本信息" key="1">
            <BaseInfo ref="baseInfo" v-if="isEdit" :detailObject="detailObject" @refreshlData="refreshlData"></BaseInfo>
            <BaseInfoUnedit ref="baseInfounedit" v-else :detailObject="detailObject" @refreshlData="refreshlData"></BaseInfoUnedit>
          </a-tab-pane>
          <a-tab-pane tab="阶段汇报" key="2">
            <HoursIndex class="cheta-m20-30" :detailObject="detailObject" @refreshlData="refreshlData"></HoursIndex>
          </a-tab-pane>
          <a-tab-pane tab="文件" key="3">
        </a-tab-pane>
          <a-tab-pane tab="动态" key="4">
          </a-tab-pane>
        </a-tabs>
      </div>
    </div>
</template>
<script>
  import Page from '../../../../../car/carteam/Page'
  import BaseInfo from './info/BaseInfo'
  import BaseInfoUnedit from './info/BaseInfoUnedit'
  import Report from '../Report'
  import { taskList,taskEdit,taskUserList,projectDetail } from '@/views/application/firm/project/api/api'
  import ATextarea from 'ant-design-vue/es/input/TextArea'
  import {STATUS ,PRIORITY} from '@/views/application/firm/project/api/constant'
  import HoursIndex from './info/hours/HoursIndex'
  import {taskDetail} from '@/views/application/firm/project/api/api'
  export default {
    name: 'TaskTotal',
    components: { HoursIndex, ATextarea, Report, BaseInfo, Page,BaseInfoUnedit },
    props: {
      isUser:{
        type:Boolean
      },
      userId:{
        type: String
      },
    },
    data () {
      return {
        // type: this.$route.query.type || "1",

        statusList: [],
        isAdd: false,
        tmp: {
          status: "not_started",
          priority: "common"
        },
        currentTask: 0,
        PRIORITY,
        STATUS,
        detailObject: {},
        taskEdit: true,
        loginUserId:this.$store.getters.userInfo.id,
        project: {}

      }

    },
    mounted () {
      this.getData()
      var $this = this
      projectDetail({id: this.$route.params.id}).then(res=>{
        $this.project = res.result
      })
    },
    computed: {
      isEdit() {
        return this.loginUserId === this.detailObject.userId || this.loginUserId === this.project.userId
      },
      isProjectUserEdit() {
        return this.loginUserId === this.project.userId
      },

    },
    methods: {
      tabClick (key) {
        this.type = key
      },
      getData () {
        var $this = this
        var action = !this.isUser ? taskList : taskUserList;
        action({projectId: this.$route.params.id}).then(res=>{
          $this.statusList = res.result;
          if ($this.statusList.length > 0) {
            $this.getDetail($this.statusList[0], 0)
            // if(this.$route.query.taskId){
            //   $this.statusList.forEach((item,index) =>{
            //     if(item.id === this.$route.query.taskId){
            //       $this.getDetail(item, index)
            //     }
            //   })
            // }
            // else{
            //   $this.getDetail($this.statusList[0], 0)
            // }
          }
        })
      },
      addTask () {
        this.tmp.projectId = this.$route.params.id
        var $this = this
        taskEdit(this.tmp).then(res=>{
          $this.isAdd = false;
          $this.getData()
        })
      },
      userInfo() {
        let userInfo = this.$store.getters.userInfo;
        if (userInfo.length) {
          userInfo = userInfo[0]
        }
        if (!userInfo.headImage) {
          userInfo.headImage = 'https://gw.alipayobjects.com/zos/antfincdn/XAosXuNZyF/BiazfanxmamNRoxxVxka.png';
        }
        return userInfo
      },
      getDetail (item, index) {
        this.currentTask = index
        var $this = this
        taskDetail({id: item.id}).then(res => {
          $this.detailObject = res.result
          $this.statusList[index] = $this.detailObject
        })
      },
      refreshlData () {
        var $this = this
        taskDetail({id: this.detailObject.id}).then(res => {
          $this.detailObject = res.result
        })
      }

    },
    watch: {
      // 监听路由
      '$route' () {
        this.getData()
      }
    }
  }
</script>
<style lang="less">
  .cheta-task-total .ant-tabs {height: 100% !important;}
  .cheta-task-total .ant-tabs .ant-tabs-top-content{
    height: calc(100% - 44px) !important;

  }
  .cheta-task-total .ant-tabs .ant-tabs-top-content > .ant-tabs-tabpane{height:100%;overflow-y: scroll!important;}
  .cheta-task-total .ant-list-item-action{
    height: 48px!important;
    line-height: 80px!important;
  }

  .cheta-task-total .ant-list-item-action {
     margin-left: 0px!important;
  }
</style>


<style lang="less" scoped>
  @import url("../../../base.less");
  .cheta-border-top{border-top: 1px solid #e8e8e8;}
  .cheta-submit{border-radius: 13px;border:1px solid #00a0e9;padding: 0px 10px;}
  .cheta-task-total{height: calc(100vh - 200px);}
  .cheta-task-total .cheta-height-full{border-right: 1px solid #e8e8e8;min-width: 300px;}
  .cheta-tab-content{height: calc(100% - 50px);overflow-y: scroll}
  .cheta-tab-content-add{height: calc(100% - 200px);}

  .ant-btn-lg-span12{
    border-radius: 4px;
    margin: 5px;
    height: 40px;
    font-size: 14px;
    width: calc(50% - 10px);
  }
  .cheta-task-item{border-left: 3px solid #FFF;}
  .check{border-left: 3px solid #338fe5;background: rgba(51,143,229,0.03);}
  .check .check-title{color: #338fe5;}
  .check-title{display: inline-block;width: 204px;word-break:break-all;}
  .cheta-task-item:hover{background: #f8f8f8;}
</style>