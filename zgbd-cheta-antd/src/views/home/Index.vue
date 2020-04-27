<template>
<div>
  <a-row>
    <!--头部--上-->
    <a-col :span="24">
      <TopTopTop></TopTopTop>
    </a-col>
    <!--头部--中-->
      <TopTopBody></TopTopBody>
    <!--头部--下-左边-右边--右边~下--->
    <TopTopFoot></TopTopFoot>
    <!--身体-->
    <a-col :span="24">
      <TopBodyTop></TopBodyTop>
    </a-col>
    <a-col :span="24">
      <TopBodyBody></TopBodyBody>
    </a-col>
    <a-col :span="24">
      <TopBodyFoot></TopBodyFoot>
    </a-col>
    <a-col :span="24">
      <TopBodyFootSonThree></TopBodyFootSonThree>
    </a-col>
    <!--下边-->
    <a-col :span="24">
      <TopFootTop></TopFootTop>
    </a-col>
    <!--底部-->
    <a-col :span="24">
      <TopFootBody></TopFootBody>
    </a-col>
    <a-col :span="24">
      <TopFootFoot></TopFootFoot>
    </a-col>




  </a-row>





</div>
</template>

<script>
  import TopTopTop from './modules/TopTopTop'
  import TopTopBody from './modules/TopTopBody'
  import TopTopFoot from './modules/TopTopFoot'
  import TopBodyTop from './modules/TopBodyTop'
  import TopBodyBody from './modules/TopBodyBody'
  import TopBodyFoot from './modules/TopBodyFoot'
  import TopFootTop from './modules/TopFootTop'
  import TopFootBody from './modules/TopFootBody'
  import TopFootFoot from './modules/TopFootFoot'
  export default {
    name: 'Index',
    components:{
      TopTopTop,
      TopTopBody,
      TopTopFoot,
      TopBodyTop,
      TopBodyBody,
      TopBodyFoot,
      TopFootTop,
      TopFootBody,
      TopFootFoot,
    }
  }


</script>

<style scoped>

</style>


<style>



</style>