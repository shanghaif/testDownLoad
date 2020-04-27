<template>
  <div>
    <div class="cheta-m10-30">
      <a-input class="cheta-input-text" v-model="detailObject.name" :disabled="disabled"/>
    </div>
    <div class="cheta-mlr-44">
      <!--林恩雅-->
      <a-row class="cheta-row">
        <a-col :span="16">
          <a-row>
            <a-col :span="6">
              <div class="cheta-event">
                <a-dropdown :trigger="['click']">
                    <span @click="userVisible = false">
                      <div class="cheta-box-flex">
                        <a-avatar slot="avatar" icon="user" :src="detailObject.avatar"/>
                      <div class="cheta-ml-10">
                        <span class="cheta-font18">{{ detailObject.nickName }}</span>
                        <p class="cheta-desc">负责人</p>
                      </div>
                      </div>
                    </span>
                  <Person v-if="userVisible" @doUser="doUser" slot="overlay" :item="detailObject"></Person>
                </a-dropdown>
              </div>
            </a-col>
            <a-col :span="6">
              <div class="cheta-event">
                <a-dropdown :trigger="['click']">
                    <span @click="statusVisible = false">
                      <div class="cheta-box-flex">
                        <a-avatar :class="`badge-${STATUS[detailObject.status].color}`" slot="avatar" :icon="STATUS[detailObject.status].icon" />
                      <div class="cheta-ml-10">
                        <span class="cheta-font16">{{ STATUS[detailObject.status].text }}</span>
                        <p class="cheta-desc">当前状态</p>
                      </div>
                      </div>
                    </span>
                  <Status v-if="statusVisible" @doStatus="doStatus" slot="overlay" :statusObject="detailObject"></Status>
                </a-dropdown>
              </div>
            </a-col>
            <a-col :span="6">
              <div class="cheta-event">
                <a-dropdown :trigger="['click']">
                    <span @click="priorityVisible = false">
                      <div class="cheta-box-flex">
                        <a-avatar slot="avatar" icon="warning"  style="color: orangered"/>
                      <div class="cheta-ml-10">
                        <a-tag :class="`tag-${ PRIORITY[detailObject.priority].color }`">{{ PRIORITY[detailObject.priority].text }}</a-tag>
                        <p class="cheta-desc">优先级</p>
                      </div>
                      </div>
                    </span>
                  <Priority v-if="priorityVisible" @doPriority="doPriority" slot="overlay" :priorityObject="detailObject"></Priority>
                </a-dropdown>
              </div>
            </a-col>
            <a-col :span="6">
              <div class="cheta-event">
                <a-dropdown :trigger="['click']">
                    <span @click="workVisible = false">
                      <div class="cheta-box-flex">
                        <a-avatar slot="avatar" icon="tag"  style="color: #60a582"/>
                      <div class="cheta-ml-10">
                        <a-tag v-if="detailObject.flowName" :class="`tag-${ detailObject.flowColor }`">{{ detailObject.flowName }}</a-tag>
                        <p class="cheta-desc">工作项类型</p>
                      </div>
                      </div>
                    </span>
                  <Work v-if="workVisible" @doWork="doWork" slot="overlay" :workObject="detailObject" :projectWork="projectWork.tagList"></Work>
                </a-dropdown>
              </div>
            </a-col>
          </a-row>

        </a-col>
      </a-row>
      <!--所属项目-->
      <a-row :gutter="16" class="cheta-row cheta-font16 cheta-project-total">
        <a-col :span="8" :xs="24" :sm="12" :md="8" :lg="8" :xl="8" class="cheta-project">
          <div><div class="cheta-lable">所属项目</div><span>{{projectWork.name}}</span></div>
          <div><div class="cheta-lable">创建时间</div><span>{{detailObject.createTime}}</span></div>
        </a-col>
        <a-col :span="8" :xs="24" :sm="12" :md="8" :lg="8" :xl="8" class="cheta-project">
          <div><div class="cheta-lable">关联项目</div>
            <router-link target="_blank">{{projectWork.relName}}</router-link>
          </div>
          <div><div class="cheta-lable">更新时间</div><span>{{detailObject.updateTime}}</span></div>
        </a-col>
        <a-col :span="8" :xs="24" :sm="12" :md="8" :lg="8" :xl="8" class="cheta-project">
          <div><div class="cheta-lable">链接</div>
            <span v-if="!detailObject.linkName" class="cheta-event"><span>未设置链接</span><a-icon type="edit"  @click="showModelLink"></a-icon></span>
            <span v-else><a :href="detailObject.linkUrl">{{detailObject.linkName}}</a></span>
          </div>
          <addLink ref="addlink" :detailObject="detailObject" @changeData="changeData"></addLink>
        </a-col>
      </a-row>
      <div class="cheta-row">
        <div class="cheta-font18 cheta-task-title">备注</div>
        <div class="ql-snow ql-container" style="border-width: 0px;">
          <div  class="ql-editor" v-html="detailObject.description">
          </div>
        </div>
      </div>
      <!--工时-->
      <HoursIndex :detailObject="detailObject" @refreshlData="refreshlData"></HoursIndex>
    </div>
  </div>
</template>
<script>
  import Person from './Person'
  import Status from './Status'
  import Priority from './Priority'
  import Work from './Work'
  import addLink from './link/addLink'
  import {STATUS ,PRIORITY} from '@/views/application/firm/project/api/constant'
  import HoursIndex from './hours/HoursIndex'
  import {taskEdit} from '@/views/application/firm/project/api/api'
  import { quillEditor } from "vue-quill-editor"; //调用编辑器
  import quillConfig from '../../../../../../../../config/quill-config.js'
  import 'quill/dist/quill.core.css';
  import 'quill/dist/quill.snow.css';
  import 'quill/dist/quill.bubble.css';
  import {projectDetail} from '@/views/application/firm/project/api/api'
  export default {
    name: 'BaseInfo',
    props: {
      detailObject: {
        type:Object
      }
    },
    data () {
      return {
        PRIORITY,
        STATUS,
        editShow: false,
        userVisible: false,
        statusVisible: false,
        priorityVisible: false,
        workVisible: false,
        currentItem:{
          src:"https://gw.alipayobjects.com/zos/antfincdn/XAosXuNZyF/BiazfanxmamNRoxxVxka.png",
          createBy: "林恩雅"
        },
        currentStatus:{},
        currentPriority:{},
        project:{
          project:'商家收款终端',
          type:"研发任务",
          associated:"测试功能反馈",
          createTime:'2019-09-26 12:00:45',
          updateTime:"2019-09-26 12:00:45",
          link:"测试功能反馈",
        },
        focus: false,
        editorOption: quillConfig,
        projectWork: [],
        disabled: true,
      }
    },
    components:{
      HoursIndex,
      Person,
      Status,
      Priority,
      Work,
      quillEditor,
      addLink
    },
    methods: {
      doUser () {
        this.userVisible = !this.userVisible
      },
      doStatus () {
        this.statusVisible = !this.statusVisible
      },
      doPriority () {
        this.priorityVisible = !this.priorityVisible
      },
      changeData (param) {
        var clone = Object.assign(param, {
          id: this.detailObject.id,
        })
        taskEdit(clone)
      },
      refreshlData () {
        this.$emit('refreshlData')
      },
      onEditorBlur(){
        if (this.focus) {
          this.focus = false
          this.changeData({description: this.detailObject.description})
        }
      },
      onEditorFocus(){this.focus = true}, // 获得焦点事件
      doWork () {
        this.workVisible = !this.workVisible
      },
      getWorkData() {
        var $this = this
        var param = {
          id: this.$route.params.id
        }
        projectDetail(param).then(res => {
          $this.projectWork = res.result
        })
      },

      handlefocus () {
        this.focus = true
      },
      showModelLink () {
        // this.$refs.addlink.showModelLink()
      }
    },
    created () {
      this.getWorkData()
    },
    watch:{
      // 监听路由
      '$route' () {
        this.getWorkData()
      },
      watchDetail: {
        deep: true,
        handler: function (newVal,oldVal){
          if (oldVal.id == this.detailObject.id && newVal.userId !== oldVal.userId) {
            this.changeData({userId: newVal.userId});
          }
          if (oldVal.id == this.detailObject.id && newVal.status !== oldVal.status) {
            this.changeData({status: newVal.status});
          }
          if (oldVal.id == this.detailObject.id && newVal.priority !== oldVal.priority) {
            this.changeData({priority: newVal.priority});
          }
          if (oldVal.id == this.detailObject.id && newVal.flowId !== oldVal.flowId) {
            this.changeData({flowId: newVal.flowId});
          }
        }
      }
    },
    computed: {
      watchDetail () {
        return {
          id: this.detailObject.id,
          userId: this.detailObject.userId,
          status: this.detailObject.status,
          priority: this.detailObject.priority,
          flowId: this.detailObject.flowId
        }
      }
    }
  }
</script>

<style lang="less" scoped>
  @import url("../../../../base.less");
  .cheta-desc{
    font-size: 12px;
    color: #999999;
  }
  .cheta-lable{width:100px;display: inline-block;}
  .cheta-project-total{
    border-bottom: 1px solid #e8e8e8;
  }
  .cheta-project div {
    line-height: 32px;
    font-size: 14px;
  }
  .cheta-project div span{
    color: rgba(0, 0, 0, 0.65);
    /*color: #999999!important;*/
  }
  .quill-editor{height: 200px;}
  .ql-container.ql-snow {
    border-width: 1px!important;
    border: 1px solid #ccc;

  }
  .cheta-task-title{margin-bottom: 10px}

</style>
<style lang="less">
  .cheta-row{margin-left: 0px!important;margin-right: 0px!important;}
  .cheta-input-text .ant-input{font-size: 18px;color:#333333;}
  .cheta-input-text .ant-input{border-width: 0px!important;}
  /*.cheta-input-text:focus .ant-input{border-width: 1px!important;}*/
  /*.cheta-input-text .ant-input{display: block;}*/
  .cheta-textarea .ant-input{display: block;}
  .cheta-textarea:focus .ant-input{display: none;}
  .cheta-textarea-none{
    .ant-input{display: none;}
  }
  .ql-container{
    height: 200px!important;
    margin-bottom: 60px;
  }

</style>
<style lang="less" scoped>


</style>