<template>
  <div class="content">
    <a-row>
      <a-col :xs="{ span: 24}" :md="{ span: 12}" :lg="{ span: 6}" :xl="{ span: 6}">
        <div class="modular">
          <contractTop ref="contractTop"></contractTop>
        </div>
      </a-col>
      <a-col :xs="{ span: 24}" :md="{ span: 12}" :lg="{ span: 6}" :xl="{ span: 6}">
        <div class="modular">
          <contractTop ref="contractTop"></contractTop>
        </div>
      </a-col>
      <a-col :xs="{ span: 24}" :md="{ span: 12}" :lg="{ span: 6}" :xl="{ span: 6}">
        <div class="modular">
          <contractTop ref="contractTop"></contractTop>
        </div>
      </a-col>
      <a-col :xs="{ span: 24}" :md="{ span: 12}" :lg="{ span: 6}" :xl="{ span: 6}">
        <div class="modular">
          <contractTop ref="contractTop"></contractTop>
        </div>
      </a-col>
      <a-col :xs="{ span: 24}" :md="{ span: 24}" :lg="{ span: 24}" :xl="{ span: 24}">
        <div class="modularDow">
          <contractSelect ref="contractSelect"></contractSelect>
          <contractList ref="contractList"></contractList>
        </div>
      </a-col>
    </a-row>
  </div>
</template>

<script>
  import contractTop from './modules/contractTop'
  import contractList from './modules/contractSelect'
  import contractSelect from './modules/contractList'
  export default {
    name: 'Index',
    components:{
      contractTop,
      contractList,
      contractSelect,
    },
  }
</script>

<style scoped>
  .content{
    height: 100%;
  }
  .modular{
    height: 140px;
    background:rgba(255,255,255,1);
    box-shadow:0px 0px 16px 4px rgba(0, 0, 0, 0.05);
    border-radius:6px;
    margin: 10px;
  }
  .modularDow{
    height: 695px;
    padding: 20px;
    background:rgba(255,255,255,1);
    box-shadow:0px 0px 16px 4px rgba(0, 0, 0, 0.05);
    border-radius:6px;
    margin: 10px;
  }
</style>