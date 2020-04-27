<template>
  <a-spin :spinning="spinning">
    <a-card :bordered="false" size="small" :bodyStyle="{padding: '0px'}">

      <div slot="title" class="cheta-report-title">
        <a-tooltip title="返回文档列表首页" class="cheta-events" @click="doHome">
          <a-icon type="left" />
          <a-avatar src="/logo.png" class="cheta-ml-10"/>
        </a-tooltip>
        <a-input v-model="name" class="cheta-ml-10"/>
      </div>
      <span slot="extra" class="cheta-space10 cheta-events">
      <a-button type="primary" @click="saveHome">保存</a-button>
      <a-dropdown class="cheta-tool" :trigger="['click']">
        <span>文件</span>
        <a-menu slot="overlay">
          <a-menu-item>新建</a-menu-item>
          <a-menu-item>保存为我的模板</a-menu-item>
          <a-menu-item>导出</a-menu-item>
          <a-menu-item>生成副本</a-menu-item>
          <a-menu-item>查看修订记录</a-menu-item>
        </a-menu>
      </a-dropdown>
      <span>编辑</span>
      <span>插入</span>
      <span>格式</span>
      <span>数据</span>
      <span>智能工具</span>
      <span>丨</span>
      <a-tooltip title="邀请他人协作">
        <a-icon type="user"/>
      </a-tooltip>
      <a-tooltip title="分享链接">
        <a-icon type="link"/>
      </a-tooltip>
    </span>
      <div id="x-spreadsheet-demo"></div>
    </a-card>
  </a-spin>
</template>
<script>
  import Spreadsheet from 'x-data-spreadsheet';
  import zhCN from 'x-data-spreadsheet/dist/locale/zh-cn';
  import { reportOnlineEdit,savecanvas } from '../api/api'

  export default {
    data() {
      return {
        spread: {},
        spinning: false,
        name: this.$route.params.name || '在线表格'
      }
    },
    mounted() {
      // CTRL + s
      document.addEventListener('keydown',this.handleEvent)
      Spreadsheet.locale('zh-cn', zhCN);
      var json = this.$route.params.json || {};
      if (this.$route.params.columns) {
        json = JSON.parse(this.$route.params.columns);
      }
      const s = new Spreadsheet("#x-spreadsheet-demo").loadData(json).change(data => {});
      this.spread = s;
      s.validate()
    },
    methods: {
      doHome () {
        this.$router.push({path: '/baobiaozhongxin'});
      },
      saveHome () {
        var $this = this;
        $this.save(() => {
          $this.$router.push({path: '/baobiaozhongxin'});
        })
      },
      save () {
        this.spinning = true;
        var data = this.spread.getData();
        var $this = this;
        return savecanvas('#x-spreadsheet-demo').then(res => {
          return reportOnlineEdit({
            id: $this.$route.params.id,
            name: $this.name,
            columns: JSON.stringify(data),
            coverImage: res
          }).then(res => {
            $this.spinning = false;
            return res;
          })
        })
      },
      handleEvent(event){
        let scope = this
        function keyDown(e) {
          var key = null, e = e || event || window.event
          key = e.keyCode || e.which || e.charCode
          if (key == 83 && (e.ctrlKey || e.metaKey)) {
            e.preventDefault()
            scope.save();
          }
        }
        document.onkeydown = keyDown;
      },
    }
  }
</script>
<style>
  .cheta-report-title .ant-input{
    width: 200px;
    border: 0px solid #d9d9d9;
  }
  .cheta-report-title .ant-input:hover{
    border: 1px solid #d9d9d9;
  }
</style>
<style scoped>
  /*.cheta-space10.cheta-events > *:hover{*/
  /*  background-color: #e8e8e8;*/
  /*}*/
</style>