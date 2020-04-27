<template>
  <div class="topOne cheta-Maintenance">
    <a-row>
      <a-col :span="24">
        <div class="titleOne">保养指数</div>
      </a-col>
      <a-col :span="24">
        <div class="One">
          <a-row>
            <a-col :span="2"></a-col>
            <a-col :span="8">
              <div class="topLeft">
                <a-progress type="dashboard" :percent="78"  :format="() => '78'" :width="186" />
                <div class="textOne">
                  <!--日期-->
                  <div class="timeOne">
                    <span class="timeOneFont">2019-09-06</span>
                  </div>
                  <!--保养指数-->
                  <div class="numberOne">
                    <span class="numberTwo">0</span>
                    <span class="numberThree">保养指数</span>
                    <span class="numberFour">100</span>
                  </div>
                </div>
              </div>
            </a-col>
            <a-col :span="14">
              <div class="TextTwo">
                <div class="wordOne">保养指数一般，建议及时进入保养</div>
                <div class="wordTwo"><a-icon type="exclamation-circle" theme="filled" class="iconOne cheta-color" />需要添加保养的车辆增多，请及时添加保养</div>
                <div><a href="#"><span class="wordThree cheta-bg">立即计划</span></a></div>

              </div>
            </a-col>
          </a-row>
        </div>
      </a-col>
    </a-row>
  </div>
</template>

<script>
  import moment from 'moment';
  export default {
    name: 'MaintenanceSonOne',
      data(){
        this.dateFormat = 'YYYY-MM-DD'
        return {}
      },
      methods: {
        moment,
      }
  }
</script>
<style lang="less">
  .cheta-Maintenance  .ant-progress-circle .ant-progress-text{
    color:#00A0E9!important;
    font-size:60px!important;
    font-family:Arial!important;
    font-weight:bold!important;
  }
  /*rgba(0,160,233,1)*/
  .ant-progress-circle-path {
    stroke: #1890ff;
    animation: ant-progress-appear 0.3s;
  }
</style>
<style lang="less" scoped>

  .One{
    padding: 15px 0 40px 0px;
  }
  .iconOne{
    /*color: rgba(28,192,159,1);*/
    padding-right: 10px;
    font-size: 16px;
  }

  .topLeft{
    margin: 30px 0;
  }
  .TextTwo{
    padding: 43px 0px 0px 0px;
  }
  .topOne{
    margin: 10px;
    height: 380px;
    background:rgba(255,255,255,1);
    box-shadow:0px 0px 5px 0px rgba(204,204,204,0.5);
    border-radius:3px;
    padding: 20px;
  }
  .titleOne{
    font-size:16px;
    font-family:Microsoft YaHei;
    font-weight:bold;
    color:rgba(51,51,51,1);
  }
  .timeOne {
    width: 88px;
    height: 24px;
    background: rgba(232,232,232,1);
    border-radius: 12px;
    text-align: center;
    margin: 0 22px;
  }
  .numberTwo,.numberFour{
    width:7px;
    height:9px;
    font-size:12px;
    font-family:Microsoft YaHei;
    font-weight:400;
    color:rgba(153,153,153,1);
    line-height:40px;
  }
  .timeOneFont{
    width:68px;
    height:11px;
    font-size:12px;
    font-family:Microsoft YaHei;
    font-weight:400;
    color:rgba(153,153,153,1);
    line-height:19px;
  }
  .numberThree{
    padding: 0 20px;
    width:64px;
    height:15px;
    font-size:16px;
    font-family:Microsoft YaHei;
    font-weight:400;
    color:rgba(102,102,102,1);
    line-height:40px;
  }
  .textOne{
    width: 186px;
    padding: 0 25px;
    margin-top: -60px;
    position: relative;
  }
  .wordOne{
    font-size:30px;
    font-family:Microsoft YaHei;
    font-weight:400;
    color:rgba(51,51,51,1);
  }
  .wordTwo{
    font-size:14px;
    font-family:Microsoft YaHei;
    font-weight:400;
    color:rgba(153,153,153,1);
    line-height:40px;
  }
  .wordThree{
    display: block;
    margin: 30px 0px;
    width:180px;
    height:50px;
    text-align: center;
    line-height:50px;
    font-size:24px;
    font-family:Microsoft YaHei;
    font-weight:400;
    color:rgba(255,255,255,1);
    /*background:rgba(28,192,159,1);*/
    border-radius:25px;
  }

</style>
