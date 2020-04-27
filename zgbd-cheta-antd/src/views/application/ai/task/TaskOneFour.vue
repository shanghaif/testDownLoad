<template>
  <div style="margin: 0px 20px;box-shadow: 1px 1px 5px #E5E5E5;margin: 13px;border-radius: 4px;padding: 10px">
    <a-row>
      <!--头部-->
      <a-col :span="18" style="font-size: 18px;margin-top: 15px">
        <span :span="6">处警员</span>
      </a-col>
      <a-col :span="6" class="workOne">
        <img src="/image/project/xiangxia.png" style="margin: 0px 15px"  alt="">
        <img src="/image/project/guanbi.png"alt="">
      </a-col>
      <!--第一个-->
      <a-col :span="24">
        <span  style="float: right;margin-right: 40px;margin-top: 50px">20/100(人)</span>
      </a-col>
      <a-row style="padding-bottom: 15px">
        <a-col :span="4">
          <span>空闲</span>
        </a-col>
        <a-col :span="20">
          <a-progress :percent="20" strokeColor="#69C366" size="small" />
        </a-col>
      </a-row>
      <!--第二个-->
      <a-col :span="24">
        <span  style="float: right;margin-right: 40px;margin-top: 30px">70/100(人)</span>
      </a-col>
      <a-row style="padding-bottom: 15px">
        <a-col :span="4">
          <span>接警中</span>
        </a-col>
        <a-col :span="20">
          <a-progress :percent="70" strokeColor="#D74951" size="small" />
        </a-col>
      </a-row>
      <!--第三个-->
      <a-col :span="24">
        <span  style="float: right;margin-right: 40px;margin-top: 30px">50/100(人)</span>
      </a-col>
      <a-row style="padding-bottom: 15px">
        <a-col :span="4">
          <span>空闲</span>
        </a-col>
        <a-col :span="20">
          <a-progress :percent="50" strokeColor="#536FA4" size="small" />
        </a-col>
      </a-row>
      <!--第四个-->
      <a-col :span="24">
        <span  style="float: right;margin-right: 40px;margin-top: 30px">60/100(人)</span>
      </a-col>
      <a-row style="padding-bottom: 52px">
        <a-col :span="4">
          <span>空闲</span>
        </a-col>
        <a-col :span="20">
          <a-progress :percent="60" strokeColor="#737988" size="small" />
        </a-col>
      </a-row>
    </a-row>
  </div>
</template>

<script>
  export default {
    name: 'TaskOneThree'
  }
</script>

<style scoped>
  workOne{
    margin-top: 15px;
    float: right;
  }
  workOne img{
    display: inline;
  }
</style>