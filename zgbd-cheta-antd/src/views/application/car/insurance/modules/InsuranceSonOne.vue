<template>
    <div class="one">
      <div class="titleOne">未投保统计</div>
      <a-row>
        <a-col :span="11">
          <div class="ring">
            <a-progress type="circle" class="top-right"  strokeColor="#9399FE" :width="140" :percent="75" :format="() => '10000'" strokeWidth="10" />
          </div>
        </a-col>
          <a-col :span="3">

          </a-col>
        <a-col :span="8">
            <div class="approvallarge top-One-left">
              <span class="title-One"></span>
              <b class="numberOne">2000</b>
              <div> 逾期未续保</div>
            </div>
          <br/>
            <div class="approvallarge top-One-left">
              <span class="title-Two"></span>
              <b class="numberTwo">2500</b>
              <div>未登记</div>
            </div>
        </a-col>
      </a-row>
    </div>
</template>

<script>
  export default {
    name: 'InsuranceSonOne'
  }
</script>
<style>
  /*.ant-progress-circle-path {*/
    /*stroke: #9399FE !important;*/
    /*-webkit-animation: ant-progress-appear 0.3s;*/
    /*animation: ant-progress-appear 0.3s;*/
  /*}*/

</style>
<style scoped>

  .one{
  padding: 15px 20px;
    margin-left: 15px;
  }
  .titleOne{
    font-size:18px;
    font-family:Microsoft YaHei;
    font-weight:400;
    color:rgba(51,51,51,1);
    line-height:30px;
  }
  .ring{
    width: 100%;
    height: 100%;
  }
  .top-right{
    float: right;
    padding: 10px;
    font-size: 40px;
  }
  .approvallarge{
    font-size:16px;
    font-family:Microsoft YaHei;
    font-weight:400;
    color:rgba(153,153,153,1);
  }
.numberTwo,.numberOne{
  font-size:26px;
  font-family:Arial;
  font-weight:bold;
  color:rgba(51,51,51,1);
  line-height:40px;
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

</style>