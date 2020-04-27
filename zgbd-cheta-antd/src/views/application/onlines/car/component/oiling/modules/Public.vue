<template>
<div class="title">
  {{config[0].title}}
</div>
</template>

<script>
  export default {
    name: 'Public',
    props: {
    config: {
      type: Array,
    default: () => []
    },
  }
  }
</script>

<style scoped>
.title{
  margin: 0 15px;
  font-size:18px;
  font-family:Microsoft YaHei;
  font-weight:400;
  color:rgba(51,51,51,1);
  line-height:20px;
  padding: 10px!important;
}
</style>