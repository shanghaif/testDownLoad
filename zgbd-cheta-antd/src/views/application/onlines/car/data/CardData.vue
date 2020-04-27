<template>
  <a-row>
    <a-col span="12">
      <a-form-item :label-col="{ span: 24 }" :wrapper-col="{ span: 21 }" style="margin-bottom: 10px">
        <a-input v-model="config[0].mark"/>
      </a-form-item>
    </a-col>
    <a-col span="12">
      <a-form-item :label-col="{ span: 24 }" :wrapper-col="{ span: 24 }" style="margin-bottom: 10px">
        <a-input v-model="config[0].markOne"/>
      </a-form-item>
    </a-col>
    <a-col span="12">
      <a-form-item :label-col="{ span: 24 }" :wrapper-col="{ span: 21 }" style="margin-bottom: 10px">
        <a-input v-model="config[0].markTwo"/>
      </a-form-item>
    </a-col>
    <a-col span="12">
      <a-form-item :label-col="{ span: 24 }" :wrapper-col="{ span: 24 }" style="margin-bottom: 10px">
        <a-input v-model="config[0].numberOne"/>
      </a-form-item>
    </a-col>
    <a-col span="12">
      <a-form-item :label-col="{ span: 24 }" :wrapper-col="{ span: 21 }" style="margin-bottom: 10px">
        <a-input v-model="config[0].numberTwo"/>
      </a-form-item>
    </a-col>
  </a-row>
</template>

<script>
  export default {
    name: 'cardData',
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