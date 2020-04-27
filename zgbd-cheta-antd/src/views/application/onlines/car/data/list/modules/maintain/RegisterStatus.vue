<template>
  <span>{{record.status}}</span>
</template>

<script>
  export default {
    name: 'RegisterStatus',
    props: {
      record: {
        type: Object,
        default: () => {}
      },
    },
    data(){
      return{
        contant : {
          "审核中": {color:'blue'},
          "保养中": {color:'blue'},
          "驳回": {color:'red'},
          "完成": {color:'green'},
        }
      }
    }
  }
</script>

<style scoped>

</style>