<script src="../../../config/data.js"></script>
<template>
  <div class="topOne cheta-Maintenance">
    <a-row>
      <a-col :span="24">
        <div class="titleOne">{{config[0].top}}</div>
      </a-col>
      <a-col :span="24">
        <div class="One">
          <a-row>
            <a-col :span="2"></a-col>
            <a-col :span="8">
              <div class="topLeft">
                <a-progress class="topLeftNumber" type="dashboard" strokeColor="#00A0E9" :percent="config[0].content.format"  :format="() => +config[0].content.format" :width="190" />
                <div class="textOne">
                  <!--日期-->
                  <div class="timeOne">
                    <span class="timeOneFont">{{moment(config[0].content.date).format('YYYY-MM-DD')}}</span>
                  </div>
                  <!--保养指数-->
                  <div class="numberOne">
                    <span class="numberTwo">{{config[0].content.start}}</span>
                    <span class="numberThree">{{config[0].content.content}}</span>
                    <span class="numberFour">{{config[0].content.end}}</span>
                  </div>
                </div>
              </div>
            </a-col>
            <a-col :span="14">
              <div class="TextTwo">
                <div class="wordOne">{{config[0].footer.title}}</div>
                <div class="wordTwo"><a-icon type="exclamation-circle" theme="filled" class="iconOne cheta-color" />{{config[0].footer.desc}}</div>
                <div><a href="#"><span class="wordThree cheta-bg">{{config[0].footer.look}}</span></a></div>

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
    props: {
      config: {
        type: Array,
        default: () => []
      }
    },
    methods: {
      moment,
    }
  }
</script>
<style lang="less">
  .cheta-Maintenance .ant-progress-text{
     color: #00A0E9!important;
   }
</style>
<style lang="less" scoped>
  //left1
  .ring{
    width: 100%;
    height: 100%;
  }
  .top-right{
    float: right;
    padding: 10px;
    font-size: 40px;
  }
  //right1
  .approvallarge{
    font-size:16px;
    font-family:Microsoft YaHei;
    font-weight:400;
    color:rgba(153,153,153,1);
  }
  .numberTwoTwo,.numberOne{
    font-size:26px;
    font-family:Arial;
    font-weight:bold;
    color:rgba(51,51,51,1);
    line-height:40px;
    display: flex;
    justify-content: space-between;
  }
  .top-One-left{
    padding: 8px;
    display: inline-block;
  }
  .title-One{
    border-radius: 50%;
    width: 10px;
    height: 10px;
    background-color: #9399FE;
    display: inline-block;
    margin-top: 8px;
    margin-left: -25px;
    margin-right: 15px;
  }
  .title-Two{

    border-radius: 50%;
    width: 10px;
    height: 10px;
    background-color: #E5E5E5;
    display: inline-block;
    margin-top: 8px;
    margin-left: -25px;
    margin-right: 15px;
  }

  .cheta-Maintenance  .ant-progress-circle .ant-progress-text{
    color:#00A0E9;
    font-size:60px!important;
    font-family:Arial!important;
    font-weight:bold!important;
  }
  /*rgba(0,160,233,1)*/
  .ant-progress-circle-path {
    stroke: #1890ff!important;
    animation: ant-progress-appear 0.3s;
  }

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
  .topLeftNumber{
    font-size:60px;
    font-family:Arial;
    font-weight:bold;
    color:#00A0E9!important;
  }

  .TextTwo{
    padding: 43px 0px 0px 0px;
  }
  .topOne{
    margin: 10px 0;
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
    margin: 0 26px;
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
    /*padding: 0 12px;*/
    /*width:64px;*/
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
