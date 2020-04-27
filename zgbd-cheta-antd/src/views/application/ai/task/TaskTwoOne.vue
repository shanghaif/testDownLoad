
<template>
  <div style="border-radius: 4px;box-shadow: 1px 1px 5px #E5E5E5;margin: 13px;">
    <a-row>
      <a-col :span="20" style="text-align: center">
        <a-tabs defaultActiveKey="1">
          <a-tab-pane tab="席位跟踪" key="1" style="height: 506px;">
            <TaskOneSon ref="TaskOneSon"></TaskOneSon>
          </a-tab-pane>
          <a-tab-pane tab="已接接警" key="2" style="height: 506px;">
            <TaskOneSon ref="TaskOneSon"></TaskOneSon>
          </a-tab-pane>
          <!--<a-tab-pane tab="未接接警" key="3" style="height: 506px;">-->
            <!--<TaskOneSon ref="TaskOneSon"></TaskOneSon>-->
          <!--</a-tab-pane>-->
          <!--<a-tab-pane tab="已处理警事" key="4" style="height: 506px;">-->
            <!--<TaskOneSon ref="TaskOneSon"></TaskOneSon>-->
          <!--</a-tab-pane>-->
          <!--<a-tab-pane tab="未处理警事" key="5" style="height: 300px;" forceRender>-->
            <!--aaa-->
          <!--</a-tab-pane>-->
          <template slot="renderTabBar" slot-scope="props, DefaultTabBar">
            <component :is="DefaultTabBar" {...props} />
          </template>
        </a-tabs>
      </a-col>
    </a-row>
  </div>
</template>
<script>
  import  TaskOneSon from './TaskOneSon'
  export default {
    components:{
      TaskOneSon,
    },
    data () {
      return {
      }
    },
    methods: {
      callback (key) {
        console.log(key)
      },
    },
  }
</script>
