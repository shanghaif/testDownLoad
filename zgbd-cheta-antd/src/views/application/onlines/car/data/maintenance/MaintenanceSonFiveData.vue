<template>
    <div>
      <a-row>
        <a-col span="24">
          <a-form-item label="标题" :label-col="{ span: 24 }" :wrapper-col="{ span: 21 }" style="margin-bottom: 10px">
            <a-input v-model="config[0].topTwo"/>
          </a-form-item>
        </a-col>
        <a-col span="12">
          <a-form-item label="数值1" :label-col="{ span: 24 }" :wrapper-col="{ span: 21 }" style="margin-bottom: 10px">
            <a-input v-model="config[0].two.num"/>
          </a-form-item>
        </a-col>
        <a-col span="12">
          <a-form-item label="数值2" :label-col="{ span: 24 }" :wrapper-col="{ span: 24 }" style="margin-bottom: 10px">
            <a-input v-model="config[0].two.numTwo"/>
          </a-form-item>
        </a-col>
        <a-col span="12">
          <a-form-item label="描述1" :label-col="{ span: 24 }" :wrapper-col="{ span: 21 }" style="margin-bottom: 10px">
            <a-input v-model="config[0].two.desc"/>
          </a-form-item>
        </a-col>
        <a-col span="12">
          <a-form-item label="描述2" :label-col="{ span: 24 }" :wrapper-col="{ span: 24 }" style="margin-bottom: 10px">
            <a-input v-model="config[0].two.descTwo"/>
          </a-form-item>
        </a-col>
      </a-row>


    </div>
</template>

<script>
  export default {
    name: 'MaintenanceSonFiveData',
    props: {
      config: {
        type: Array,
        default: () => []
      }
    },
  }
</script>

<style scoped>

</style>