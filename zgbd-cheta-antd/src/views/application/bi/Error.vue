<template>
  <div>
    <!--第一行   集群监控-->
    <a-card :bordered=false title="集群监控">
    <a-row>
        <!--选择按钮-->
      <a-col :span="24" style="float: left;margin:10px 0px 20px 0px;">
        <a-button type="primary">实时</a-button>
        <a-button type="primary" style="margin-left: 5px">三小时内</a-button>
        <a-button type="primary" style="margin-left: 5px">一天内</a-button>
        <a-button type="primary" style="margin-left: 5px">一周内</a-button>
        <a-button type="primary" style="margin-left: 5px">一月内</a-button>
        <a-button type="primary" style="margin-left: 5px">三个月内</a-button>
      </a-col>
      <!--   图一   -->
      <a-row>
      <a-col :lg="7" :sm="24" style="margin: 10px 20px 10px 0px;text-align: center" >
        <a :span="24" style="float: left">项目异常</a>
        <Error11 ref="Error11"></Error11>
      </a-col>
      <!--图二-->
      <a-col :lg="8" :sm="24" style="margin: 10px 20px 10px 20px;text-align: center">
        <a :span="24" style="float: left">车辆预警</a>
        <Error12 ref="Error12"></Error12>
      </a-col>
      <!--图三-->
      <a-col :lg="7" :sm="24" style="margin: 10px  0px 10px 20px;text-align: center">
        <a :span="24" style="float: left">考勤预警</a>
        <Error13 ref="Error13"></Error13>
      </a-col>
    </a-row>
      </a-row>
    </a-card>
    <!--第二行  -->
    <a-row>
      <!--第二行  的  第一个-->
      <a-col :lg="8" :sm="24">
        <a-card :bordered=false title="事件监听">
          <Error21 ref="Error21"></Error21>
        </a-card>
      </a-col>
      <!--第二行  的  第二个-->
      <a-col :lg="8" :sm="24">
        <a-card :bordered=false title="健康中心">
          <Error22 ref="Error22"></Error22>
        </a-card>
      </a-col>
      <!--第二行  的  第三个-->
      <a-col :lg="8" :sm="24">
        <a-card :bordered=false title="警告中心">
          <Error23 ref="Error23"></Error23>
        </a-card>
      </a-col>
    </a-row>
    <!--第三行  -->
    <a-row>
          <!--第二行  的  第一个-->
          <a-col :lg="8" :sm="24" >
            <a-card :bordered=false title="车辆定位预警">
              <Error31 ref="Error31"></Error31>
            </a-card>
          </a-col>
          <!--第二行  的  第二个-->
          <a-col :lg="8" :sm="24" >
            <a-card :bordered=false title="数据异常预警">
              <Error32 ref="Error32"></Error32>
            </a-card>
          </a-col>
          <!--第二行  的  第三个-->
          <a-col :lg="8" :sm="24">
            <a-card :bordered=false title="资产调配预警">
              <Error33 ref="Error33"></Error33>
            </a-card>
          </a-col>
    </a-row>

  </div>
</template>


<script>
import Error11 from './ErrorOneOne'
import Error12 from './ErrorOneTwo'
import Error13 from './ErrorOneThree'
import Error21 from './ErrorTwoOne'
import Error22 from './ErrorTwoTwo'
import Error23 from './ErrorTwoThree'
import Error31 from './ErrorThreeOne'
import Error32 from './ErrorThreeTwo'
import Error33 from './ErrorThreeThree'
export default {
  components:{Error11,Error12,Error13,Error21,Error22,Error23,Error31,Error32,Error33,}
}
</script>

<style>

</style>
