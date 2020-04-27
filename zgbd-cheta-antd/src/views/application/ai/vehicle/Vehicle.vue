<template>
  <div>
    <a-row>
      <!--第一行第一大块-->
      <a-col :lg="9" :sm="24">
        <a-row>
          <!--车辆在线数-->

          <a-col :lg="12" :sm="24">
            <VehicleOne ref="VehicleOne"></VehicleOne>
          </a-col>
          <!--新增车辆-->
          <a-col :lg="12" :sm="24">
            <VehicleTwo ref="VehicleTwo"></VehicleTwo>
          </a-col>
          <!--车辆诊断-->
          <a-col :lg="24" :sm="24">
            <a-row   style="border-radius: 4px;box-shadow: 1px 1px 5px #E5E5E5;margin: 15px;padding: 15px">
              <a-col :span="12" style="font-size: 18px;text-align: center;">
                <span>车辆诊断</span>
              </a-col>
              <a-col :span="24">
                <span style="float: right;padding-right: 110px;">50/100辆</span>
              </a-col>
              <a-col :span="8">
                <div style="display: inline-block">
                  <img src="/image/project/car.png" style="margin: 0px 20px;margin-top: 17px"  alt="">
                  <span style="font-size: 13px">当月诊断车辆</span>
                </div>
              </a-col>
              <a-col :span="13">
                <a-progress :percent="50" status="active" />
              </a-col>
              <a-col :span="24">
                <span style="float: right;padding-right: 110px;">2次</span>
              </a-col>
              <a-col :span="8">
                <div style="display: inline-block">
                  <img src="/image/project/gongju.png" style="margin: 0px 20px;"  alt="">
                  <span style="font-size: 10px">诊断疑似故障</span>
                </div>
              </a-col>
              <a-col :span="13">
                <a-progress :percent="20" status="active" />
              </a-col>
              <a-col :span="24">
                <span style="float: right;padding-right: 110px;">及格</span>
              </a-col>
              <a-col :span="8" >
                <div style="display: inline-block">
                  <img src="/image/project/tongji.png" style="margin: 0px 20px" alt="">
                  <span>车况指数</span>
                </div>
              </a-col>
              <a-col :span="13" >
                <a-progress :percent="65" status="active" />
              </a-col>
            </a-row>




          </a-col>
        </a-row>
      </a-col>
      <!--第一行第二个      告警分布-->
      <a-col :lg="7" :sm="24">
        <VehicleThree ref="VehicleThree"></VehicleThree>
      </a-col>
      <!--第一行第三个          日期-->
      <a-col :lg="7" :sm="24">
        <VehicleFour ref="VehicleFour"></VehicleFour>
      </a-col>
      <!--第三行        车辆行驶路程/耗油-->
      <a-col :lg="23" :sm="24">
        <VehicleFive ref="VehicleFive"></VehicleFive>
      </a-col>
    </a-row>
  </div>
</template>

<script>
  import VehicleOne from './VehicleOne'
  import VehicleTwo from './VehicleTwo'
  import VehicleThree from './VehicleThree'
  import VehicleFour from './VehicleFour'
  import VehicleFive from './VehicleFive'
  export default {
    name: 'Vehicle',
    components: {
      VehicleOne,
      VehicleTwo,
      VehicleThree,
      VehicleFour,
      VehicleFive,
    }
  }
</script>

<style scoped>

</style>