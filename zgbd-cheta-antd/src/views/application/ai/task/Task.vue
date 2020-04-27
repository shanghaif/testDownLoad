<template>
  <div>
    <a-row>
      <!--第一行-->
      <!--第一个-->
      <a-col :lg="6" :sm="24">
            <aaaaaaa ref="aaaaaaa"></aaaaaaa>
      </a-col>
      <!--第二个-->
      <a-col :lg="6" :sm="24">
      <TaskOneTwo ref="TaskOneTwo"></TaskOneTwo>
      </a-col>
      <!--第三个-->
      <a-col :lg="6" :sm="24">
      <TaskOneThree ref="TaskOneThree"></TaskOneThree>
      </a-col>
      <!--第四个-->
      <a-col :lg="6" :sm="24">
      <TaskOneFour ref="TaskOneFour"></TaskOneFour>
      </a-col>
      <!--第二行-->
      <a-col :lg="14" :sm="24">
      <TaskTwoOne ref="TaskTwoOne"></TaskTwoOne>
      </a-col>
      <!--第二个-->
      <a-col :lg="10"  :sm="24">
        <TaskTwoTwo ref="TaskTwoTwo"></TaskTwoTwo>
        <TaskTwoThree ref="TaskTwoThree"></TaskTwoThree>
      </a-col>
    </a-row>
  </div>
</template>

<script>
  import aaaaaaa from './TaskOne'
  import TaskOneTwo from './TaskOneTwo'
  import TaskOneThree from './TaskOneThree'
  import TaskOneFour from './TaskOneFour'
  import TaskTwoOne from './TaskTwoOne'
  import TaskTwoTwo from './TaskTwoTwo'
  import TaskTwoThree from './TaskTwoThree'
  export default {
    components:{
      aaaaaaa,
      TaskOneTwo,
      TaskOneThree ,
      TaskOneFour,
      TaskTwoOne,
      TaskTwoTwo,
      TaskTwoThree,
    },
    name: 'TaskOneOne'
  }
</script>

<style scoped>

</style>