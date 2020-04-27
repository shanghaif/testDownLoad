<template>
  <div class="cheta-project-management">
    <a-layout id="components-layout-demo-fixed">
      <a-layout-header class="cheta-layout">
        <div style="width: 305px;background-color: #FFF;">
          <a-icon type="home" style="font-size: 20px;" @click="doHome"/>
          <a-dropdown>
            <span style="font-size: 18px;" class="cheta-pl-10"> {{ current.name }} <a-icon type="down" /></span>
            <a-menu slot="overlay" :selectedKeys="[current.id]">
              <a-menu-item :key="project.id" v-for="project in projects" @click="clickMenu(project)">{{ project.name }}</a-menu-item>
            </a-menu>
          </a-dropdown>
          <a-tag color="pink" class="cheta-ml-20">进行中</a-tag>
          <!--<a-button shape="round" class="cheta-ml-10">进行中</a-button>-->
        </div>
        <a-menu
          theme="light"
          mode="horizontal"
          :defaultSelectedKeys="['2']"
          :style="{ lineHeight: '45px', width: 'calc(100% - 505px)'}"
          @click="menuItem"
          :selectedKeys="selectedKeys"
        >
          <a-menu-item key="0">项目详情</a-menu-item>
          <a-menu-item key="1">任务分配</a-menu-item>
          <a-menu-item key="2">报表</a-menu-item>
          <a-menu-item key="3">文档</a-menu-item>
        </a-menu>
        <div class="cheta-block cheta-event" style="float: right">
          <a-icon type="user" @click="userToggle"></a-icon>
          <span> {{ projectMembers.length }} </span>
          <i class="iconfont icon-caidan cheta-ml-10"></i>
        </div>
        <User ref="user" :projectMembers="projectMembers" @getUser="getUser"></User>
      </a-layout-header>
      <a-layout-content>
        <router-view></router-view>
      </a-layout-content>
    </a-layout>
  </div>
</template>
<script>

  import User from './modules/User'
  import {projectList} from '@/views/application/firm/project/api/api'
  import {userList} from '@/views/application/firm/project/api/api'
  export default {
    name: 'Index',
    components: { User },
    data() {
      return {
        id: this.$route.params.id,
        activeKey: 1,
        projects: [],
        current: {},
        projectMembers: [],
        a: "1",
        loginUserId:this.$store.getters.userInfo.id
      }
    },
    created () {
      var $this = this;
      projectList().then(res => {
        $this.projects = res.result;
        $this.projects.forEach(item => {
          if (item.id === $this.id) {
            $this.current = item;
          }
        })
      })

      this.getUser();
    },
    computed: {
      selectedKeys () {
        var str
        var $this = this
        this.getMenu().forEach((item,index)=>{
          if($this.$route.path === item){
            str = index + ''
          }
        })
        return [str]
      }
    },

    methods: {
      doHome() {
        this.$router.push({ path: '/xiangmu2guanli' })
      },
      userToggle() {
        this.$refs.user.toggle();
      },
      menuItem({ item, key, keyPath }) {
        this.$router.push({ path: this.getMenu()[parseInt(key)] })
      },
      getMenu () {
        return [
          `/firm/project/detail/${this.id}/xiangmuxiangqing`,
          `/firm/project/detail/${this.id}/renwufenpei`,
          `/firm/project/detail/${this.id}/baobiao`,
          `/firm/project/detail/${this.id}/wendang`,
        ];
      },
      clickMenu (project) {
        this.current = project;
        this.id = project.id;
        var path =this.$route.path.substring(this.$route.path.lastIndexOf("/"))
        this.getMenu().forEach(item=>{
          if(item.substring(item.lastIndexOf("/")) === path){
            this.$router.push({ path: item })
          }
        })
        this.getUser();
      },
      getUser () {
        // 获取用户
        var $this = this;
        userList({projectId: this.id}).then(res => {
          $this.projectMembers = res.result;
        })
      }
    }
  }
</script>
<style lang="less">
  .cheta-project-management .ant-layout-content{padding: 0px!important;height: calc(100vh - 130px);overflow-y: scroll;}
  .cheta-project-management .ant-layout-header{padding: 0px 16px!important;line-height: 48px;height: 50px;}
  /*.cheta-project-management .ant-card-body{height:500px!important;}*/
</style>
<style lang="less" scoped>
  .cheta-layout { background-color: #FFF}
  .cheta-layout > * {display: inline-block}
  .logo{display: inline-block}
  p{margin-bottom: 0px;}
</style>