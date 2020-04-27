
<template>
  <div style="border-radius: 4px; text-align: center;box-shadow: 1px 1px 5px #E5E5E5;margin: 13px;">
    <a-row>
      <a-col :span="6"style="font-size: 18px;margin-top: 15px">
        <span>车辆行走里程/油耗</span>
      </a-col>
      <!--<span style="position: absolute;">车辆行走里程/油耗</span>-->
      <a-col :span="12">
        <a-tabs defaultActiveKey="1">
          <a-tab-pane tab="里程" key="1" style="height: 300px;"><VehicleFiveOne ref="VehicleFiveOne"></VehicleFiveOne></a-tab-pane>
          <a-tab-pane tab="油耗" key="2" style="height: 300px;" forceRender><VehicleFiveTwo ref="VehicleFiveTwo"></VehicleFiveTwo></a-tab-pane>
          <template slot="renderTabBar" slot-scope="props, DefaultTabBar">
            <component :is="DefaultTabBar" {...props} />
          </template>
        </a-tabs>
      </a-col>
    </a-row>
  </div>
</template>
<script>
  import VehicleFiveOne from './VehicleFiveOne'
  import VehicleFiveTwo from './VehicleFiveTwo'
  export default {
    components:{
      VehicleFiveOne,
      VehicleFiveTwo
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
