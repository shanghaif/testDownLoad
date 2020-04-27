<template>
    <div class="dati">
      <div class="top-top">
        <span><a-icon class="iconOne" type="exclamation-circle" /></span>
        <span class="titleOne">{{config[0].one}}</span>
      </div>
      <div class="top-body">
        <div class="numberOne">{{config[0].two}}</div>
        <div class="titleTwo"> <a-progress type="circle" :percent="config[0].percent" /></div>
      </div>
    </div>
</template>

<script>
  export default {
    name: 'ViolationSonThree',
    props: {
      config: {
        type: Array,
        default: () => []
      }
    }
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
    margin: 10px 0;
    padding: 0px 10px 0px 20px;
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
    color: rgba(51,51,51,1) ;
    line-height:40px;
  }
  .numberOne{
    padding: 15px;
    font-size:48px;
    font-family:Arial;
    font-weight:400;
    color:rgba(51,51,51,1);
    line-height:75px;
    display: inline;
  }
  .titleTwo{
    float: right;
    padding: 0px 15px;
    display: inline;
  }
  .top-body{
    padding: 10px;
    width: 100%;
    height: 100%;
  }
  div.ant-progress-circle,
  div.ant-progress-line {
    font-size:24px !important;
    font-family:Arial !important;
    font-weight:bold !important;
    color:rgba(51,51,51,1) !important;
    line-height:15px !important;
  }

</style>