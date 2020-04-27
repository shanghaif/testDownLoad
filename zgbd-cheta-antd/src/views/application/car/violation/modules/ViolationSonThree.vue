<template>
    <div class="dati">
      <div class="top-top">
        <span><a-icon class="iconOne" type="exclamation-circle" /></span>
        <span class="titleOne">逾期未审</span>
      </div>
      <div class="top-body">
        <div class="numberOne">468</div>
        <div class="titleTwo"> <a-progress type="circle"  strokeWidth="10"  :percent="35" style="width: 100px;height: 100px;" /></div>
      </div>
    </div>
</template>

<script>
  export default {
    name: 'ViolationSonThree'
  }
</script>

<style scoped>
  .ant-progress-circle-wrap,
  .ant-progress-line-wrap {
    margin-right: 8px;
    margin-bottom: 5px;
  }
  .dati{
    height: 180px;
    background:rgba(255,255,255,1);
    box-shadow:0px 0px 5px 0px rgba(204,204,204,0.5);
    border-radius:3px;
    margin: 10px;
    padding: 20px 10px 20px 20px;
    position: relative;
  }
  .iconOne{
    color: #FFB265;
  }
  .titleOne{
    padding: 10px;
    font-size:16px;
    font-family:Microsoft YaHei;
    font-weight:bold;
    color:rgba(51,51,51,1);
    /*line-height:40px;*/
  }
  .numberOne{
    font-size:48px;
    font-family:Arial;
    font-weight:400;
    color:rgba(51,51,51,1);
    line-height:110px;
    display: inline;
  }
  .titleTwo{
    float: right;
    padding: 0px 15px;
    display: inline;
  }
  .top-body{
    padding: 0px 30px;
    width: 100%;
  }

</style>