<template>
  <div class="dati">
    <a-row>
      <a-col  :xl="6" :lg="12" :md="12" :sm="24">
        <ViolationSonOne></ViolationSonOne>
      </a-col>
      <a-col  :xl="12" :lg="24" :md="24" :sm="24">
        <ViolationSonTwo></ViolationSonTwo>
      </a-col>
      <a-col  :xl="6" :lg="12" :md="12" :sm="24">
        <ViolationSonThree></ViolationSonThree>
      </a-col>
    </a-row>
  </div>
</template>

<script>
  import ViolationSonOne from './modules/ViolationSonOne'
  import ViolationSonTwo from './modules/ViolationSonTwo'
  import ViolationSonThree from './modules/ViolationSonThree'
  export default {
    name: 'Violation',
    components:{
      ViolationSonOne,
      ViolationSonTwo,
      ViolationSonThree,
    }

  }
</script>

<style scoped>
  .dati{
    margin-left: 15px;
  }
</style>