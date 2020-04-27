<template>
  <div class="whole">
  <a-row>
    <a-col span="24">
      <div class="top">
    <a-input-search
      placeholder="请输入要搜索的关键词"
      @search="onSearch"
      enterButton
      style="width: 27%"
    />
    <a-button type="primary" class="increase"><a-icon type="plus" />新增记录</a-button>
      </div>
    </a-col>
<a-col span="24">
  <a-tabs>
    <a-tab-pane tab="油卡加油" key="1">
      <OilingSonOne></OilingSonOne>
    </a-tab-pane>
    <a-tab-pane tab="现金加油" key="2">Content of tab 2</a-tab-pane>
    <a slot="tabBarExtraContent">费用报销<a-icon type="double-right" /></a>
  </a-tabs>
</a-col>


  </a-row>
  </div>
</template>

<script>
  import OilingSonOne from './modules/OilingSonOne'
  export default {
    name: 'Oiling',
    components:{
      OilingSonOne,
    },
    methods: {
      onSearch (value) {
        console.log(value)
      },
    },
  }
</script>

<style scoped>
  .whole{
    padding-left: 24px;
  }
  /*.top{*/
    /*padding: 28px 0;*/
    /*border-bottom: 1px solid rgba(232,232,232,1);*/
    /*border-top: 1px solid rgba(232,232,232,1);*/
  /*}*/
.increase{
  margin: 20px;
}
</style>