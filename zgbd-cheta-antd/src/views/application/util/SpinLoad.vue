<template>
  <spin>

  </spin>
</template>

<script>
  export default {
    name: 'SpinLoad',
    components: {
    },
    data(){
      return {
        spinning: false
      }
    },
    methods: {
      loadData: function(func){
        func();
      }
    }
  }
</script>

<style scoped>

</style>