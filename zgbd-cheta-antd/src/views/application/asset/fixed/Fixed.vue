<template>
    <div>
      <!--aaaaa-->
      <FixedOne ref="FixedOne"></FixedOne>

      <FixedTwo ref="FixedTwo"></FixedTwo>
    </div>
</template>

<script>
  import FixedOne from './modules/FixedOne'
  import FixedTwo from './modules/FixedTwo'
  export default {
    name: 'Fixed',
    components:{
      FixedOne,
      FixedTwo,
  }
  }
</script>

<style scoped>

</style>