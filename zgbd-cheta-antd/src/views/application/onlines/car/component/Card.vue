<template>
  <a-row style="border-radius: 6px;box-shadow:1px 1px 5px #EAEAEA;padding: 15px;margin: 10px 0px 15px 0px">
    <a-col :span="11">
      <div>
        <span style="font-size:18px">{{config[0].mark}}</span>
      </div>
    </a-col>

    <!--日历-->
    <a-col :span="13">
      <div>
        <span class="tips">本月</span>
        <a-range-picker>
          <template slot="renderExtraFooter">
          </template>
        </a-range-picker>
      </div>
    </a-col>

    <!--圆环-->
    <a-col :span="11">
      <a-progress type="circle" style="float: right;padding: 10px;font-size: 40px" :width="150" :percent="75" :format="() => '10000'" strokeColor="#9B56FF" />
    </a-col>
    <a-col :span="11">
      <div style="display: inline-block">
        <p class="approvallarge hei">
          <span class="shangpaiOne"></span>{{config[0].markOne}}
          <b class="approval">{{config[0].numberOne}}</b>
        </p>
      </div>
      <br/>
      <div style="display: inline-block">
        <p class="new hei">
          <span class="WshangpaiTwo"></span>{{config[0].markTwo}}
          <b style="font-size: 22px;margin-top: -4px;color: #666666">{{config[0].numberTwo}}</b>
        </p>
      </div>
    </a-col>
  </a-row>
</template>

<script>
  export default {
    name: 'card',
    props: {
      config: {
        type: Array,
        default: () => []
      },
    }
  }
</script>

<style scoped>
  .shangpaiOne {
    border-radius: 50%;
    width: 10px;
    height: 10px;
    background-color: #9B56FF;
    display: block;
    margin-top: 8px;
    margin-left: -25px;
    margin-right: 15px;
  }
  .approval{
    font-size: 22px;
    margin-top: -4px;
    margin-left:33px;
    color: #666666;
  }
  .approvallarge{
    padding: 20px 0px 20px 60px;
    display: flex;
    font-size: 17px;
  }
  .new{
    padding:  10px 0px  10px 60px;
    display: flex;
    font-size: 17px;
  }
  .WshangpaiTwo {
    border-radius: 50%;
    width: 10px;
    height: 10px;
    background-color: #E5E5E5;
    display: block;
    margin-top: 8px;
    margin-left: -25px;
    margin-right: 15px;
  }


  @media screen and (max-width: 750px){
    .approval{
      margin-left: 0px;
    }
    .approvallarge {
      padding: 40px 0px 10px 40px;
    }
    .new{
      padding:  10px 0px  10px 40px;
    }

  }
  @media screen and (max-width: 610px){
    .approvallarge {
      padding: 40px 0px 10px 40px;
    }
  }
  .tips{
    font-size:14px;
    font-family:Microsoft YaHei;
    font-weight:400;
    color:rgba(102,102,102,1);
    border:1px solid #d9d9d9;
    border-radius:4px;
    padding: 5px 12px;
    margin-right: 20px;
  }
.hei{
  color: #999999;
}
</style>
<style>
  .ant-input {
    height: 31px;
  }
</style>