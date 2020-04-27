<template>
  <div class="one">
    <div class="titleOne">{{config[0].topTwo}}</div>
    <a-row>
      <a-col :span="11">
        <div class="ring">
          <a-progress type="circle" :format="() => +config[0].two.per"  class="top-right" strokeWidth="10"   strokeColor="#9399FE" :width="140" :percent="config[0].two.format" />
        </div>
      </a-col>
      <a-col :span="3">

      </a-col>
      <a-col :span="8">
        <div class="approvallarge top-One-left">
          <span class="title-One"></span>
          <b class="numberOne">{{config[0].two.num}}</b>
          <div class="title-Three"> {{config[0].two.desc}}</div>
        </div>
        <br/>
        <div class="approvallarge top-One-left">
          <span class="title-Two"></span>
          <b class="numberTwo">{{config[0].two.numTwo}}</b>
          <div class="title-Three">{{config[0].two.descTwo}}</div>
        </div>
      </a-col>
    </a-row>
  </div>
</template>

<script>
  export default {
    name: 'MaintenanceSonFive',
    props: {
      config: {
        type: Array,
        default: () => []
      }
    },
  }
</script>
<style  scoped>

  .one{
    margin: 10px 5px 10px 0px;
    padding: 15px 20px;
    box-shadow:0px 0px 5px 0px rgba(204,204,204,0.5);
    border-radius:3px;
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
    /*margin-left: -25px;*/
    margin-right: 15px;
  }
  .title-Two{

    border-radius: 50%;
    width: 10px;
    height: 10px;
    background-color: #E5E5E5;
    display: inline-block;
    margin-top: 8px;
    /*margin-left: -25px;*/
    margin-right: 15px;
  }
.title-Three{
  margin-left: 25px;
}

</style>