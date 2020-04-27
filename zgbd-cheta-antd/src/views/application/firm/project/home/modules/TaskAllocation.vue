<template>
  <div class="cheta-task-content cheta-m-10">
    <a-tabs :activeKey="activeKey" @tabClick="(key) => activeKey = key">
      <a-tab-pane tab="全部任务" key="1">
        <Task v-if="activeKey ==='1'"></Task>
      </a-tab-pane>
      <a-tab-pane tab="我负责的" key="2">
        <Task v-if="activeKey ==='2'" :isUser="isUser"></Task>
      </a-tab-pane>
      <a-tab-pane tab="时间进度" key="3">
        <Schedule></Schedule>
      </a-tab-pane>
    </a-tabs>
  </div>
</template>

<script>
  import Task from './task/Task'
  import Schedule from './task/Schedule'
  export default {
    name: 'TaskAllocation',
    components: {
      Task,Schedule
    },
    data () {
      return {
        isUser: true,
        activeKey: "1",
      }
    }
  }
</script>
<style lang="less">
  .cheta-task-content .ant-tabs-bar{
    margin: 0px!important;
    padding-left: 20px!important;
  }
</style>

<style lang="less" scoped>
  .cheta-task-content{height: calc(100vh - 150px);background: #ffffff}
</style>