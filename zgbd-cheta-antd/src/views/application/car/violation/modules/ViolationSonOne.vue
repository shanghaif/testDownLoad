<template>
     <div class="dati topOne">
          <div class="titleOne">违章查询金额</div>
          <div class="number cheta-color"><span>￥</span><b>768.00</b></div>
          <div class="buttonOne"><a-button type="primary" class="bottonOneo" ghost>充值</a-button></div>
          <div class="topUp">
            <div class="topUpOne">
              <div class="numberOne"><b>￥1208.00</b></div>
              <div class="titleTwo">本月已支出</div>
            </div>
            <div class="number-"></div>
            <div class="topUpTwo">
              <div class="numberTwo"><b>￥1628.00</b></div>
              <div class="titleThree">上月支出</div>
            </div>
          </div>
     </div>
</template>

<script>
  export default {
    name: 'ViolationSonOne'
  }
</script>

<style scoped>
.topOne{
  margin: 10px;
  height: 260px;
  background:rgba(255,255,255,1);
  box-shadow:0px 0px 5px 0px rgba(204,204,204,0.5);
  border-radius:3px;
  padding: 20px;
}
.titleOne{
  padding: 10px;
  font-size:16px;
  font-family:Microsoft YaHei;
  font-weight:bold;
  color:rgba(51,51,51,1);
  line-height:25px;
}
.buttonOne{
  text-align: center;
  padding: 10px;
}
.bottonOneo{
  padding: 5px  30px;
}
.number{
  text-align: center;
  font-size:36px;
  font-family:Adobe Heiti Std;
  font-weight:normal;
  line-height:30px;
}
.number span{
  font-size:24px;
}
.numberOne,.numberTwo{
  font-size:24px;
  font-family:Adobe Heiti Std;
  font-weight:normal;
  color:rgba(102,102,102,1);
  line-height:30px;
}
  .topUpOne,.number-,.topUpTwo{
    display: inline-block;
    text-align: center;
  }
  .topUpOne,.topUpTwo{
    width: 49%;
  }
  .topUp{
    padding: 15px 30px;
    border:1px dashed rgba(221,221,221,1);
    border-radius:6px;
  }
  .number-{
    width:1px;
    height:47px;
    background:rgba(232,232,232,1);
  }
  .titleTwo,.titleThree{
    font-size:14px;
    font-family:Microsoft YaHei;
    font-weight:400;
    color:rgba(153,153,153,1);
    line-height:20px;
  }

</style>