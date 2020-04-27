<template>
    <div>
      <CardOne ref="CardOne"></CardOne>

      <a-row>
        <a-col :span="24">
          <h3>资产分析</h3>
        </a-col>
        <a-col :xl="7" :lg="7" :md="7" :sm="24" :xs="24">
          <CardTwo ref="CardTwo"></CardTwo>
        </a-col>
        <a-col :xl="17" :lg="17" :md="17" :sm="24" :xs="24">
          <CardThree ref="CardThree"></CardThree>
        </a-col>
      </a-row>
    </div>
</template>

<script>
  import CardOne from './modules/CardOne'
  import CardTwo from './modules/CardTwo'
  import CardThree from './modules/CardThree'
  export default {
    name: 'Car',
    components:{
      CardOne,
      CardTwo,
      CardThree,
    }
  }

</script>

<style scoped>
  h3{
    border-bottom: 1px solid #F4F3F3;
    padding: 10px 0px;
    margin: 25px 0px;
  }
</style>