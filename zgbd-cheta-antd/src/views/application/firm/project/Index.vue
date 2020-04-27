<template>
  <div class="cheta-firm-layout ant-layout cheta-p-16 cheta-project-manage" style="width: 100%;height: 100%;padding-top: 0px;">
    <a-row :gutter="24" class="cheta-pl-10">
      <a-col
        style="padding: 0 12px;background-color: #FFF"
        :xl="6"
        :lg="24"
        :md="24"
        :sm="24"
        :xs="24">
        <page-layout avatar="https://gw.alipayobjects.com/zos/antfincdn/XAosXuNZyF/BiazfanxmamNRoxxVxka.png" style="height: 100%">
          <div slot="headerContent">
            <div class="title">{{ timeFix }} <span class="welcome-text">{{ welcome() }}, {{ userInfo().nickName }}</span></div>
            <div> {{ userInfo().positionText }}</div>
          </div>
          <div :style="{ width: '100%'}">
            <div class="cheta-p-10">
              <span><a-icon type="calendar"/> 日程汇报</span>
              <a-button class="cheta-floatr" type="primary" shape="round" icon="plus" size="small" @click="addHours">创建</a-button>
              <addHours ref="addhours"></addHours>
            </div>
            <div class="cheta-p-10">
              <a-calendar @select="select">
                <ul  class="events" slot="dateCellRender" slot-scope="value"  v-if="calendarList.length > 0">
                  <div v-for="item in calendarList" v-if="value.format('YYYY-MM-DD') == item.total">
                    <a-tooltip :title="`${item.msg}`">
                      <a-icon type="check" class="cheta-color"/>
                    </a-tooltip>
                  </div>
                </ul>
              </a-calendar>
              <a-alert :showIcon="false" banner>
                <p slot="message" style="margin-bottom: 0px">新的体验者吗? 查看 <a>项目管理</a> 用户指南</p>
              </a-alert>
            </div>
            <div class="cheta-p-10">
              <h2>项目统计</h2>
              <a-list :grid="{ gutter: 16, xs: 1, sm: 2, md: 4, lg: 4, xl: 6, xxl: 3 }" :dataSource="analyze" class="cheta-mt-10">
                <a-list-item slot="renderItem" slot-scope="item, index">
                  <chart-card :title="item.title">
                    <div >
                      <div class="cheta-font-align">
                        <h1 style="margin-bottom: 0px;">10</h1>
                      </div>
                    </div>
                  </chart-card>
                </a-list-item>
              </a-list>
            </div>
          </div>
        </page-layout>
      </a-col>
      <a-col :xl="18" :lg="24" :md="24" :sm="24" :xs="24">
        <div class="cheta-height-full">
          <a-card
            class="project-list"
            style="margin-bottom: 12px;"
            :bordered="false"
            title="项目管理"
            :loading="!projects.length"
            :body-style="{ padding: 0 }">
            <div class="cheta-p-10">
              <a-row>
                <a-col :span="8" class="cheta-card-grid" v-for="item in projects" @click="doDetail(item.id)">
                  <div class="cheta-card-meta" :style="`background-image: url('${item.coverImage}')`">
                    <a-row class="cheta-card-meta-main cheta-p-10">
                      <a-col :span="20">
                        <div class="cheta-card-meta-name">{{ item.name }}</div>
                        <div class="cheta-card-meta-desc">
                          <ellipsis :length="20" tooltip>{{ item.description }}</ellipsis>
                        </div>
                      </a-col>
<!--                      {{loginUserId}} -&#45;&#45;{{ item.userId }}-->
                      <a-col :span="4" class="cheta-font-right" v-if="loginUserId ===item.userId">
                        <a-tooltip placement="top">
                          <span slot="title">项目设置</span>
                          <a-icon type="setting" theme="filled" @click.stop="showModal(item)"/>
                        </a-tooltip>
                        <a-tooltip placement="top">
                          <span slot="title">删除</span>
                          <a-icon type="delete"  theme="filled"/>
                        </a-tooltip>
                      </a-col>
                    </a-row>
                    <a-row class="cheta-p-10 cheta-firm-progress" v-if="item.total > 0">
                      <a-col :span="Math.round(item.notStarted / item.total * 24)">
                        <a-tooltip :title="`${STATUS['not_started'].text} : ${item.notStarted}`">
                          <a-progress :percent="100" status="active" :class="`progress-${STATUS['not_started'].color}`" size="small" :showInfo="false"/>
                        </a-tooltip>
                      </a-col>
                      <a-col :span="Math.round(item.underway / item.total * 24)">
                        <a-tooltip :title="`${STATUS['underway'].text} : ${item.underway}`">
                          <a-progress :percent="100" status="active" :class="`progress-${STATUS['underway'].color}`" size="small" :showInfo="false"/>
                        </a-tooltip>
                      </a-col>
                      <a-col :span="ceil(Math.round(item.completed / item.total * 24))">
                        <a-tooltip :title="`${STATUS['completed'].text} : ${item.completed}`">
                          <a-progress :percent="100" status="active" :class="`progress-${STATUS['completed'].color}`" size="small" :showInfo="false"/>
                        </a-tooltip>
                      </a-col><!--
                    <a-col :span="8" v-for="status in STATUS" v-if="!status.ignore">
                      <a-tooltip :title="status.text">
                        <a-progress :percent="100" status="active" :class="`progress-${status.color}`" size="small" :showInfo="false"/>
                      </a-tooltip>
                    </a-col>-->
                    </a-row>
                  </div>
                </a-col>
                <a-col :span="8" class="cheta-card-grid" @click="showModal({})">
                  <div class="cheta-card-meta cheta-font-align" style="background-color: #f0f2f5;">
                    <p class="cheta-card-meta-add">
                      <a-icon type="plus" style="font-size: 20px"/><br>
                      创建新项目
                    </p>
                  </div>
                </a-col>
              </a-row>
            </div>
          </a-card>
          <a-card :loading="!statusList.length" title="我负责的工作项" :bordered="false" :body-style="{ padding: 0 }">
            <a-list class="cheta-p-10 cheta-tab-content">
              <!--@click.native="doPerson(item)"-->
              <a-list-item class="cheta-event cheta-task-item cheta-p-10" :key="index" v-for="(item, index) in statusList" @click.native="doTask(item)">
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
          </a-card>
        </div>

      </a-col>
    </a-row>
    <Edit ref="edit" @initProject="initProject"></Edit>
  </div>
</template>

<script>
  import moment from 'moment'
  import addHours from './modules/addHours'
  import { timeFix } from '@/utils/util'
  import { mapGetters } from 'vuex'
  import PageLayout from '@/components/page/PageLayout'
  import Edit from './Edit'
  import ChartCard from '@/components/ChartCard'
  import {projectList,analysisHours} from './api/api'
  import Ellipsis from '@/components/Ellipsis'
  import { taskUserList } from '@/views/application/firm/project/api/api'
  import {STATUS ,PRIORITY} from '@/views/application/firm/project/api/constant'
  export default {
    name: 'Index',
    components: {
      PageLayout,
      Edit,
      ChartCard,
      Ellipsis,
      addHours
    },
    data() {
      return {
        timeFix: timeFix(),
        user: {},
        projects: [],
        STATUS ,
        PRIORITY,
        activities: [],
        teams: [],
        dataList: [],
        analyze: [
          {title: '任务数'},
          {title: '未完成'},
          {title: '带领取'},
          {title: '今日到期'},
          {title: '已逾期'},
          {title: '已完成'},
        ],
        statusList: [],
        calendarList: [],
        loginUserId:this.$store.getters.userInfo.id,
      }
    },
    created () {
      this.initProject();
      this.getData()
      this.select(this.moment())
    },
    // computed: {
    //   isProjectUserEdit() {
    //     return this.loginUserId === this.project.userId
    //   },
    //
    // },
    methods: {
      moment,
      ...mapGetters(['nickname', 'welcome']),
      initProject () {
        let $this = this;
        projectList().then(res => {
          $this.projects = res.result;
        })
      },
      showModal (item) {
        this.$refs.edit.showModel(item);
      },
      doDetail (id) {
        this.$router.push({
          path: `/firm/project/detail/${id}/xiangmuxiangqing`,
        })
      },
      getData () {
        var $this = this
        taskUserList().then(res=>{
          $this.statusList = res.result;
        })
      },
      // d95fcd55a62b44288caea4f39758f392
      userInfo () {
        return this.$store.getters.userInfo;
      },
      doTask (item) {
        this.$router.push({
          path: `/firm/project/detail/${item.projectId}/renwufenpei`,
          params: { type: '1', taskId: item.id },
          meta: { type: '1', taskId: item.id },
          query: { type: '1', taskId: item.id },
          data: { type: '1', taskId: item.id },
        })
      },
      ceil (num) {
        return num > 1 ? num - 1 : num;
      },
      addHours () {
        this.$refs.addhours.showModel()
      },
      select (value) {
        var time = value.format("YYYY-MM")
        var param = {
          date: time
        }
        var $this = this
        analysisHours(param).then(res => {
          $this.calendarList = res.result
        })
      }

    }
  }
</script>
<style>
  .cheta-project-manage .ant-fullcalendar-fullscreen .ant-fullcalendar-header .ant-radio-group{
    display: none!important;
  }
</style>

<style lang="less" scoped>

  @import url("./base.less");
  .cheta-tab-content{max-height: 488px;min-height: 488px;overflow-y: scroll;}
  .cheta-task-item{border-left: 3px solid #FFF;}
  .check{border-left: 3px solid #338fe5;background: rgba(51,143,229,0.03);}
  .check .check-title{color: #338fe5;}
  .cheta-task-item:hover{background: #f8f8f8;}
  .cheta-submit{border-radius: 13px;border:1px solid #00a0e9;padding: 0px 10px;}
</style>

<style lang="less">
  .cheta-firm-layout .page-header{margin: 0px!important;}
  .cheta-firm-layout .content{margin: 0px;}
  .cheta-card-grid:hover{box-shadow: 0 1px 6px rgba(0,0,0,.2);}
  .cheta-card-grid{padding: 5px;position: relative;float: left;width: 33.33%;-webkit-box-sizing: border-box;box-sizing: border-box;border: 0;border-radius: 0;transition: box-shadow .2s ease-in-out,-webkit-box-shadow .2s ease-in-out;}
  .cheta-card-meta{height: 120px;background-repeat: no-repeat;background-size: cover;background-position: 50%;cursor: pointer;border-radius: 3px;}
  .cheta-card-grid .cheta-font-right{visibility: hidden}
  .cheta-card-grid:hover .cheta-font-right{visibility: visible}
  .cheta-card-meta-main{color: #FFF;}
  .cheta-card-meta-main i{font-size: 16px!important;padding: 5px;}
  .cheta-card-meta-name{font-size: 18px;font-weight: 600;letter-spacing: 1px;}
  .cheta-card-meta-desc{font-size: 12px;}
  .cheta-card-meta-add{padding-top: 30px;font-size: 16px;}
  .cheta-card-meta-add i{font-size: 26px;}
  .cheta-firm-progress{margin-top: 15px;opacity: 0.5;}
  .ant-fullcalendar-fullscreen .ant-fullcalendar-date{height: 60px;}
</style>