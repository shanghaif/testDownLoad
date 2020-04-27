<template>
  <div>
    <a-row :gutter="16" class="cheta-p-16">
      <a-col :span="18" :xs="24" :sm="24" :md="24" :xl="18">
        <a-row :gutter="16">
          <a-col :span="9" :xs="24" :sm="24" :md="24" :xl="9" style="height: 450px;overflow-y: hidden">
            <a-card :bordered="false">
                <span class="cheta-card-head" slot="title">
                  <a-avatar class="avater-blue cheta-mr-10" size="small" icon="user"></a-avatar>项目负责人
                </span>
              <img :src="project.headImage" class="cheta-avatar-img"/>
              <div><span class="cheta-font24 cheta-floatl cheta-font-height">{{project.nickName}}</span></div>
            </a-card>
            <a-card title="工作项进度" :bordered="false">
              <a-list :grid="{ gutter: 16, column: 3 }" :dataSource="workList">
                <a-list-item slot="renderItem" slot-scope="item, index">
                  <a-list-item-meta
                    :description="item.description"
                  >
                    <h2 slot="title">{{item.title}}</h2>
                    <a-avatar
                      slot="avatar"
                      :class="`badge-${item.color}`"
                      :icon="item.icon"
                    />
                  </a-list-item-meta>
                </a-list-item>
              </a-list>
            </a-card>
            <a-card title="项目计划周期" :bordered="false">
              <a-range-picker
                v-if="(project.startTime && this.isProjectUserEdit) || (project.startTime && !this.isProjectUserEdit)"
                @change="change" :disabled="this.pickerDisabled"
                :value="[moment(project.startTime,'YYYY-MM-DD'), moment(project.endTime,'YYYY-MM-DD')]"/>
              <a-range-picker
                v-else-if="(!project.startTime && this.isProjectUserEdit) || (!project.startTime && !this.isProjectUserEdit)"
                @change="change" :disabled="this.pickerDisabled"/>
            </a-card>
          </a-col>
          <a-col :span="15" :xs="24" :sm="24" :md="24" :xl="15" style="height: 450px;overflow-y: hidden">
            <a-card>
                <span class="cheta-card-head" slot="title">
                  <a-avatar class="avater-green cheta-mr-10" size="small" icon="bar-chart"></a-avatar>工作项完成趋势
                </span>
              <CLine/>
            </a-card>
          </a-col>
        </a-row>
        <a-row class="cheta-mt-16">
          <a-col :span="24">
            <a-card style="margin-bottom: 16px">
                <span class="cheta-card-head" slot="title">
                  <a-avatar class="avater-orange cheta-mr-10" size="small" icon="edit"></a-avatar>项目说明
                </span>
              <div class="ql-snow ql-container" style="border-width: 0px;" v-if="!isEdit">
                <div class="ql-editor" v-html="project.wiki || description">
                </div>
              </div>
              <quill-editor
                v-else
                ref="myQuillEditor"
                :options="editorOption"
                @blur="onEditorBlur($event)"
                @focus="onEditorFocus($event)"
                @change="onEditorChange($event)"
                v-model="project.wiki || description"
              >
              </quill-editor>
              <a-button v-if="isProjectUserEdit" @click="isEdit = !isEdit" slot="extra" icon="edit" size="small">编辑
              </a-button>
            </a-card>
          </a-col>
        </a-row>

      </a-col>
      <a-col :span="6" :xs="24" :sm="24" :md="24" :xl="6">
        <a-card :bordered="false">
            <span class="cheta-card-head" slot="title">
              <a-avatar class="avater-blue cheta-mr-10" size="small" icon="tag"></a-avatar>快捷方式
            </span>
          <a-list :grid="{ gutter: 25, column: 2 }" :dataSource="workList1" class="cheta-quick">
            <a-list-item slot="renderItem" slot-scope="item, index" v-if="item.title==='创建任务'">
              <a-list-item-meta>
                <a slot="title" @click="createTask">{{item.title}}</a>
                <a-avatar
                  slot="avatar"
                  icon="tag"
                  :class="`badge-${item.color}`"
                />

              </a-list-item-meta>
              <AddTask ref="addtask" @getData="getData"></AddTask>
            </a-list-item>
            <a-list-item slot="renderItem" slot-scope="item, index" v-else>
              <a-list-item-meta>
                <a slot="title" @click="createHours">{{item.title}}</a>
                <a-avatar
                  slot="avatar"
                  icon="tag"
                  :class="`badge-${item.color}`"
                />
              </a-list-item-meta>
              <AddHours ref="addhours"></AddHours>
            </a-list-item>
          </a-list>
        </a-card>
      </a-col>
      <a-col :span="6" :xs="24" :sm="24" :md="12" :xl="6">
        <a-card
          style="margin-top: 16px;"
          :bordered="false"
          :body-style="{ padding: 0 }"
          class="cheta-height-project"
        >
            <span class="cheta-card-head" slot="title">
              <a-avatar class="avater-brown cheta-mr-10" size="small" icon="like"></a-avatar>项目质量控制
            </span>
          <a-list class="cheta-tab-content">
            <!--@click.native="doPerson(item)"-->
            <a-list-item class="cheta-event cheta-task-item cheta-p-10" :key="index" v-for="(item, index) in statusList"
                         @click.native="doTask(item)">
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
                  <a-tag v-if="PRIORITY[item.priority]" :class="`tag-${ PRIORITY[item.priority].color }`">
                    {{PRIORITY[item.priority].text}}
                  </a-tag>
                  <a-badge v-if="item.flowName" status="success" :text="item.flowName"
                           :class="`dot-${item.flowColor}`"/>
                  <!--<a-tag>{{item.nickName}}</a-tag>-->
                </div>
              </a-list-item-meta>
              <span slot="actions">
              <div v-if="STATUS[item.status]" :class="`cheta-button-${STATUS[item.status].color} cheta-font12`">{{STATUS[item.status].text}}</div>
          </span>
            </a-list-item>
          </a-list>
        </a-card>
      </a-col>
    </a-row>
  </div>
</template>
<script>
  import CLine from '@/components/echarts/CLine'
  import { quillEditor } from 'vue-quill-editor' //调用编辑器
  import quillConfig from '../../../../../../config/quill-config.js'
  import 'quill/dist/quill.core.css'
  import 'quill/dist/quill.snow.css'
  import 'quill/dist/quill.bubble.css'
  import { taskList, projectDetail, projectEdit } from '@/views/application/firm/project/api/api'
  import { STATUS, PRIORITY } from '@/views/application/firm/project/api/constant'
  import AddTask from './task/AddTask'
  import AddHours from '../../modules/addHours'
  import moment from 'moment'

  var tpl = `
<p><strong>这是Wiki 里的第一个页面组。我们准备了一些初始内容，帮助你开始使用Wiki。</strong></p><p><strong>作为页面做的祖业，可以介绍这个页面组对应项目的目标、接下来的计划活提供工作对接需要的信息。</strong></p><p><br></p><h1>项目简介</h1><p><br></p><p><strong>保证按计划发版上线；支持远程工作的用户，提供完整的用户体验。</strong></p><p><br></p><p><br></p>

  `
  export default {
    name: 'ProjectDetail',
    components: { AddHours, AddTask, quillEditor, CLine },
    data() {
      return {
        description: tpl,
        isEdit: false,
        editorOption: quillConfig,
        statusList: [],
        workList: [
          { description: '未开始', title: 0, color: 'blue', icon: 'clock-circle' },
          { description: '进行中', title: 0, color: 'orange', icon: 'arrow-right' },
          { description: '已完成', title: 0, color: 'green', icon: 'check' }
        ],
        workList1: [
          { description: '未开始', title: '创建任务', color: 'blue', icon: 'clock-circle' },
          { description: '进行中', title: '创建工时', color: 'orange', icon: 'arrow-right' }
        ],
        project: {
          wiki: ''
        },
        PRIORITY,
        STATUS,
        taskShow: true,
        isAdd: false,
        loginUserId: this.$store.getters.userInfo.id,
        disabled: false
      }
    },
    created() {
      this.getData()
      this.projectData()
    },
    computed: {
      isProjectUserEdit() {
        return this.loginUserId === this.project.userId
      },
      pickerDisabled() {
        if (this.loginUserId === this.project.userId) {
          return this.disabled
        } else {
          return !this.disabled
        }
      }
    },
    methods: {
      moment,
      getData() {
        var $this = this
        taskList({ projectId: this.$route.params.id }).then(res => {
          $this.statusList = res.result
        })
      },
      projectData() {
        var $this = this
        projectDetail({ id: this.$route.params.id }).then(res => {
          $this.project = res.result
          $this.workList[0].title = $this.project.notStarted
          $this.workList[1].title = $this.project.underway
          $this.workList[2].title = $this.project.completed
        })
      },
      onEditorBlur() {
        var param = {
          wiki: this.project.wiki,
          id: this.$route.params.id,
          tagList: []
        }
        var $this = this
        projectEdit(param).then(res => {
          if (res.success) {
            $this.$message.success(res.message)
          } else {
            $this.$message.warning(res.message)
          }
        })
      }, // 失去焦点事件
      onEditorFocus() {

      }, // 获得焦点事件
      onEditorChange() {
      }, // 内容改变事件
      doTask(item) {
        // this.$router.push({ path : `/firm/project/detail/${item.projectId}/renwufenpei`, params : { type: "1",taskId:item.id  }}, )
        this.$router.push({
          path: `/firm/project/detail/${item.projectId}/renwufenpei`
          // path: `/firm/project/detail/${item.projectId}/renwufenpei?type=1&taskId=${item.id}`,
        })
      },
      createTask() {
        this.$refs.addtask.showModal()
      },
      createHours() {
        this.$refs.addhours.showModel()
      },
      change(date) {
        var startTime = date[0].format('YYYY-MM-DD')
        var endTime = date[1].format('YYYY-MM-DD')
        var param = {
          startTime: startTime,
          endTime: endTime,
          id: this.$route.params.id,
          tagList: []

        }
        var $this = this
        projectEdit(param).then(res => {
          if (res.success) {
            $this.$message.success(res.message)
          } else {
            $this.$message.warning(res.message)
          }
        })
      }
    },
    watch: {
      // 监听路由
      '$route'() {
        this.getData()
      }
    }
  }
</script>
<style lang="less">
  .cheta-quick .ant-list-item-meta-title {
    line-height: 32px !important;
    width: 100px;
  }
</style>

<style lang="less" scoped>
  @import url("../../base.less");

  .img {
    width: 100%;
  }

  .cheta-avatar-img {
    width: 40px;
    height: 40px;
    /*height: 40px;*/
    float: left;
  }

  .cheta-tab-content {
    max-height: 646px;
    min-height: 646px;
    overflow-y: scroll;
  }

  .cheta-task-item {
    border-left: 3px solid #FFF;
  }

  .check {
    border-left: 3px solid #338fe5;
    background: rgba(51, 143, 229, 0.03);
  }

  .check .check-title {
    color: #338fe5;
  }

  .cheta-task-item:hover {
    background: #f8f8f8;
  }

  .cheta-font-height {
    height: 40px;
    line-height: 40px;
    margin-left: 10px;
  }

  .cheta-progress {
    width: 40px;
    height: 40px;
    border-radius: 50%;
  }

  .cheta-progress-unstart {
    background: #00a0e9
  }

  .cheta-progress-going {
    background: orange
  }

  .cheta-progress-complete {
    background: lightseagreen
  }

  /*.quill-editor{height: 260px;margin-bottom: 86px;}*/
  .ql-container {
    height: 245px !important;
    margin-bottom: 60px;
  }

  .cheta-submit {
    border-radius: 13px;
    border: 1px solid #00a0e9;
    padding: 0px 10px;
  }

  .ant-card-head-title .cheta-card-head {
    color: #515a6e;
    font-size: 14px;
  }

  .check-title {
    display: inline-block;
    width: 217px;
    word-break: break-all;
  }
</style>