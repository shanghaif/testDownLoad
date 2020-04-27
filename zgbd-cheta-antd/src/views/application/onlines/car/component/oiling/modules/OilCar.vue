<template>
  <div class="balance">
    <a-row>
      <a-col span="9">
        <div class="title">
          <div class="title-One">
            {{config[0].titleOne}}
          </div>
          <div class="title-Two">{{result[0].totalPrice}}</div>
        </div>
        <span class="balanceImgTwo"><img src="/image/Oiling/balance.png" alt=""></span>
      </a-col>
      <a-col span="5">
        <div class="Oilselect">
          <div class="titleOneA">{{result[0].sumPrice}}</div>
          <div class="titleTwo">{{config[0].titlea}}</div>
          <div class="OilselectImg">
            <span class="OilselectImg-One" ><img src="/image/Oiling/red.png" alt=""></span>
          </div>
        </div>
      </a-col>
      <a-col span="5">
        <div class="Oilselect">
          <div class="titleOneA">{{result[0].topConsumption}}</div>
          <div class="titleTwo">{{config[0].titleb}}</div>
          <div class="OilselectImg">
            <span class="OilselectImg-One" ><img src="/image/Oiling/green.png" alt=""></span>
          </div>
        </div>
      </a-col>
      <a-col span="5">
        <div class="Oilselect">
          <div class="titleOneA">{{result[0].cashConsumption}}</div>
          <div class="titleTwo">{{config[0].titlec}}</div>
          <div class="OilselectImg">
            <span class="OilselectImg-One" ><img src="/image/Oiling/purple.png" alt=""></span>
          </div>
        </div>
      </a-col>
    </a-row>
  </div>
</template>

<script>
  import {getAction} from "@/api/manage";
  export default {
    name: 'OilCar',
    props: {
      config: {
        type: Array,
        default: () => []
      },
      finalSingleValue: {
        type: String,
        default: () => ''
      }
    },
    watch: {
      //监听方法 刷新数据
      'finalSingleValue': function(value) {
        this.init(value);
      }
    },
    data() {
      return {
        startTime:'',
        entTime:'',
        url : {
          refuelInfo:"/application/car/vehicle/oilcard/getCardInfo"
        },
        result : []
      };
    },
    created(){
      this.init(null);
    },
   methods: {
     onChange() {
       this.init({startTime:this.date.str[0].format("YYYY-MM-DD"),entTime:this.date.str[1].format("YYYY-MM-DD")});
     },
     init(params){
       // 打断点取相照应的值
       this.result = [];
       getAction(this.url.refuelInfo,params).then(res => {
        if(res.success){
          this.result = res.result;
        }
       })
     },
     showMouth() {
       this.init(null);
       this.date.str =[this.moment().startOf('month'), this.moment().endOf('month')]
     },
   },
  }
</script>

<style scoped>
  .balance{
    height: 240px;
    border-radius: 8px;
    margin: 15px;
    padding: 20px;
    background:rgba(254,253,255,1);
    box-shadow:0px 3px 7px 0px rgba(234,234,234,1);
  }

  .topOne{
    display: inline-block;
    margin: 0 15px;
    font-size:18px;
    font-family:Microsoft YaHei;
    font-weight:400;
    color:rgba(51,51,51,1);
    height: 40px;
    line-height: 40px;
  }
  .topTwo {
    margin: 4px 0px;
    float: right;
    height: 32px;
    line-height: 32px;
  }
  .topThree{
    margin: 0 15px;
    float: right;
    height: 40px;
    line-height: 40px;
  }
  .top{
    height: 40px;
    line-height: 40px;
    margin-bottom: 10px;
  }
  .balance img{
    width: 100%;
    height: 100%;
    display: inline-block;
  }
  .balanceImgOne img{
    width: 20px;
    height: 17px;
  }

  .balanceImgTwo img{
    border-radius: 8px;
    margin: 5px 0;
    box-shadow:0px 6px 20px 0px rgba(6,12,207,0.08);
    width: 354px;
    height: 190px;
    position: relative;
  }
  .title{
    position: absolute;
    z-index: 2;
    margin: 22px 24px;
    padding: 0px!important;
  }
  .title-One{
    width: 100%;
    margin-top: 5px;
    margin-left: 35px;
    font-size:16px;
    font-family:Source Han Sans CN;
    font-weight:400;
    color:rgba(119,118,255,1);
  }
  .title-Two{
    font-size:28px;
    font-family:Microsoft YaHei;
    font-weight:bold;
    color:rgba(51,51,51,1);
  }
  .Oilselect{
    margin: 30px 0;
    text-align: center;
  }
  .titleOneA{
    font-size:28px;
    font-family:Microsoft YaHei;
    font-weight:bold;
    color:rgba(51,51,51,1);
    line-height:40px;
  }
  .titleTwo{
    font-size:16px;
    margin: 10px;
    font-family:Microsoft YaHei;
    font-weight:400;
    color:rgba(102,102,102,1);
  }
  .OilselectImg img{
    height: 55px;
    width: 155px;
  }
</style>