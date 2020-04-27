<template>
     <div class="dati topOne">
          <div class="titleOne">{{config[0].title}}</div>
          <div class="number cheta-color"><span>{{config[0].content.sign}}</span><b>{{config[0].content.price}}</b></div>
          <div class="buttonOne"  >
            <a-button type="primary"  class="bottonOneo" ghost>{{config[0].button}}</a-button>
          </div>
          <div class="topUp">
            <div class="topUpOne">
              <div class="numberOne"><b>{{config[0].foot.price}}</b></div>
              <div class="titleTwo">{{config[0].foot.desc}}</div>
            </div>
            <div class="number-"></div>
            <div class="topUpTwo">
              <div class="numberTwo"><b>{{config[0].foot.priceTwo}}</b></div>
              <div class="titleThree">{{config[0].foot.descTwo}}</div>
            </div>
          </div>
     </div>
</template>

<script>
  export default {
    name: 'ViolationSonOne',
    props: {
      config: {
        type: Array,
        default: () => []
      }
    },
  }
</script>

<style scoped>
.topOne{
  margin: 10px 0;
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
  /*visibility: visible;*/
  /*display: none;*/
  /*visibility: hidden;*/
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