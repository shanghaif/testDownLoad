<template>
    <div class="dati">
      <div class="top">
        <span class="topIcon">图标</span>
        <span class="topText">合同数(个)</span>
      </div>

      <div class="body">
        <div class="bodyUpper">
          <span class="bodyUpperNumber">16,000</span>
          <span class="bodyUpperText">较昨日增加23个</span>
        </div>
        <div class="bodyLower">
          <span class="bodyLowerIcon">图标</span>
          <span class="bodyLowerText">执行中60000，已结束10000，意外终止0</span>
        </div>
      </div>


    </div>
</template>

<script>
  export default {
    name: 'contractTop'
  }
</script>

<style scoped>
  .dati{
    padding: 20px;
  }
  .topText{
    font-size:16px;
    font-family:Microsoft YaHei;
    font-weight:400;
    color:rgba(102,102,102,1);
  }
  .bodyUpperNumber{
    font-size:30px;
    font-family:Arial;
    font-weight:bold;
    color:rgba(51,51,51,1);
  }
  .bodyUpperText{
    margin-left: 10px;
    font-size:14px;
    font-family:Microsoft YaHei;
    font-weight:400;
    color:rgba(153,153,153,1);
  }
  .bodyLowerText{
    margin-left: 10px;
    font-size:14px;
    font-family:Microsoft YaHei;
    font-weight:400;
    color:rgba(153,153,153,1);
  }
    .bodyUpper{
      padding: 5px 0px;
    }

</style>