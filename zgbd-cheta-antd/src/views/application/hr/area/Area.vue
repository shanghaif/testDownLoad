<template>
    <div>
      <AreaOne ref="AreaOne"></AreaOne>
      <AreaTwo ref="AreaTwo"></AreaTwo>
    </div>
</template>

<script>
  import AreaOne from './modules/AreaOne'
  import AreaTwo from './modules/AreaTwo'
  export default {
    name: 'Area',
    components:{
      AreaOne,
      AreaTwo,
    }
  }
</script>

<style scoped>

</style>