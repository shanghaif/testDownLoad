<template>
<div class="OilPrice">

  <span class="colorOne"  :style="'background: '+config[0].color" ></span>
  <span class="numberOne">{{config[0].numberOne}}</span>
  <span class="numberTwo">{{config[0].numberTwo}}</span>
  <span class="numberThree"></span>
  <span class="numberFour">{{config[0].numberThree}}</span>
  <div class="imgOne"><img src="/image/Oiling/线1.png" alt=""></div>

</div>
</template>

<script>
  export default {
    name: 'OilPrice',
    props: {
      config: {
        type: Array,
        default: () => []
      },
    }
  }
</script>

<style scoped>
  .OilPrice{
    margin: 10px;
  }
.colorOne{
    position:absolute;
    display: inline-block;
    width:4px;
    height:38px;

}
  .numberOne{
    margin-left: 12px;
    margin-right: 24px;
    font-size:26px;
    font-family:Microsoft YaHei;
    font-weight:bold;
    color:rgba(51,51,51,1);
    line-height:40px;
  }
  .numberTwo{
    margin-top: -8px;
    margin-left: -22px;
    position: absolute;
    font-size:20px;
    font-family:Microsoft YaHei;
    font-weight:bold;
    color:rgba(51,51,51,1);
    line-height:40px;
  }
  .numberThree{
    width: 1px;
    height: 23px;
    margin-top: 8px;
    display: inline-block;
    position: absolute;
    background:rgba(232,232,232,1);
  }
  .numberFour{
    margin: 0 12px;
    font-size:26px;
    font-family:Microsoft YaHei;
    font-weight:bold;
    color:rgba(51,51,51,1);
    line-height:40px;
  }
  .imgOne{
    height: 2px;
    line-height: 2px;
    position: absolute;
    margin-top: -17px;
  }


</style>