<template>
  <a-form-item v-bind="item">
    <Search @searchChange="searchCarNum" v-decorator="[bind.fieldName,bind.rules]"></Search>
  </a-form-item>
</template>

<script>
  import Search from '@views/chetaui/input/search/Index'
  export default {
    name: "CarNumber",
    components: {Search},
    props: {
      attr: {
        type: Object
      },
      item: {
        type: Object
      },
      bind: {
        type: Object
      }
    },
    methods:{
      searchCarNum(carNum){
        this.bind.value = carNum;
      },
    }
  }
</script>

<style scoped>
</style>