<template>
  <a-row>
    <a-col span="24">
      <a-form-item :label-col="{ span: 24 }" :wrapper-col="{ span: 21 }" style="margin-bottom: 10px">
        <a-input v-model="config[0].title"/>
      </a-form-item>
    </a-col>
  </a-row>
</template>

<script>
  export default {
    name: 'PublicDate',
    props: {
      config: {
        type: Array,
        default: () => []
      },
    }
  }
</script>

<style scoped>

</style>