<template>
  <a-row>
    <div class="Whole">

      <!--头部-->
      <a-col span="24">
        <div class="button">
          <a-button class="buttonOne"><a-icon type="read" />保养手册</a-button>
          <a-button class="buttonOne"><a-icon type="file" />保养规则</a-button>
          <a-button class="buttonOne"><a-icon type="environment" /> 维修厂</a-button>
        </div>
      </a-col>
      <!--第一块-->
      <a-col :xl="12" :lg="24" :md="24" :sm="24" :xs="24">
        <MaintenanceSonOne></MaintenanceSonOne>
      </a-col>
      <!--第二块-->
      <a-col :xl="12" :lg="24" :md="24" :sm="24" :xs="24">
        <div>
          <a-row>
            <a-col span="12">
              <MaintenanceSonTwo></MaintenanceSonTwo>
            </a-col>
            <a-col span="12">
              <MaintenanceSonFour></MaintenanceSonFour>
            </a-col>
            <a-col span="12">
              <MaintenanceSonThree></MaintenanceSonThree>
            </a-col>
            <a-col span="12">
              <MaintenanceSonFour></MaintenanceSonFour>
            </a-col>
          </a-row>
        </div>
      </a-col>
      <!--tabs切换-->
      <a-col span="24">
        <div class="tabsOne">
        <a-tabs defaultActiveKey="1" @change="callback">
          <a-tab-pane tab="保养推荐" key="1"><MaintenanceTableOne></MaintenanceTableOne></a-tab-pane>
          <a-tab-pane tab="保养计划" key="2" ><MaintenanceTableOne></MaintenanceTableOne></a-tab-pane>
          <a-tab-pane tab="保养登记表" key="3">更新中... ...</a-tab-pane>
          <a-tab-pane tab="保养记录" key="4">更新中... ...</a-tab-pane>
        </a-tabs>
        </div>
      </a-col>
    </div>
  </a-row>

</template>
<script>
  import MaintenanceSonOne from './modules/MaintenanceSonOne'
  import MaintenanceSonTwo from './modules/MaintenanceSonTwo'
  import MaintenanceSonThree from './modules/MaintenanceSonThree'
  import MaintenanceSonFour from './modules/MaintenanceSonFour'
  import MaintenanceTableOne from './modules/MaintenanceTableOne'
  export default {
      data () {
        return {
        }
    },
    methods: {
      callback (key) {
        console.log(key)
      },
    },
    components:{
      MaintenanceSonOne,
      MaintenanceSonTwo,
      MaintenanceSonThree,
      MaintenanceSonFour,
      MaintenanceTableOne,
    }
  }
</script>
<style scoped>
  .Whole{
    margin-left: 20px;
    margin-right: 10px;
  }
  .button{
    float: right;
    margin-right: 10px;
  }
  .buttonOne{
    margin: 0px 0 10px 10px;
  }
  .tabsOne{
    margin: 10px;
    padding: 20px;
    background:rgba(255,255,255,1);
    box-shadow:0px 0px 5px 0px rgba(204,204,204,0.5);
    border-radius:3px;
  }
</style>