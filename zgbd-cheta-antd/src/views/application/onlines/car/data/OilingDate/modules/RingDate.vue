<template>
  <a-row>

    <a-col span="12">
      <a-form-item :label-col="{ span: 24 }" :wrapper-col="{ span: 21 }" style="margin-bottom: 10px">
        <a-input v-model="config[0].arr[0].value"/>
      </a-form-item>
    </a-col>
    <a-col span="12">
      <a-form-item :label-col="{ span: 24 }" :wrapper-col="{ span: 20 }" style="margin-bottom: 10px">
        <a-input v-model="config[0].arr[0].name"/>
      </a-form-item>
    </a-col>
    <a-col span="12">
      <a-form-item :label-col="{ span: 24 }" :wrapper-col="{ span: 21 }" style="margin-bottom: 10px">
        <a-input v-model="config[0].arr[1].value"/>
      </a-form-item>
    </a-col>
    <a-col span="12">
      <a-form-item :label-col="{ span: 24 }" :wrapper-col="{ span: 20 }" style="margin-bottom: 10px">
        <a-input v-model="config[0].arr[1].name"/>
      </a-form-item>
    </a-col>



    <a-col span="24">
      <a-form-item  :label-col="{ span: 24 }" :wrapper-col="{ span: 20 }" style="margin-bottom: 10px">
        <a-input v-model="config[0].colorList[0]"/>
      </a-form-item>
    </a-col>
    <a-col span="24">
      <a-form-item  :label-col="{ span: 12 }" :wrapper-col="{ span: 20 }" style="margin-bottom: 10px">
        <a-input v-model="config[0].colorList[1]"/>
      </a-form-item>
    </a-col>

    <a-col span="12">
      <a-form-item :label-col="{ span: 24 }" :wrapper-col="{ span: 21 }" style="margin-bottom: 10px">
        <a-input v-model="config[0].textOne"/>
      </a-form-item>
    </a-col>
    <a-col span="12">
      <a-form-item :label-col="{ span: 24 }" :wrapper-col="{ span: 24 }" style="margin-bottom: 10px">
        <a-input v-model="config[0].numberOne"/>
      </a-form-item>
    </a-col>

    <a-col span="12">
      <a-form-item :label-col="{ span: 24 }" :wrapper-col="{ span: 21 }" style="margin-bottom: 10px">
        <a-input v-model="config[0].textTwo"/>
      </a-form-item>
    </a-col>
    <a-col span="12">
      <a-form-item :label-col="{ span: 24 }" :wrapper-col="{ span: 24 }" style="margin-bottom: 10px">
        <a-input v-model="config[0].numberTwo"/>
      </a-form-item>
    </a-col>

    <a-col span="12">
      <a-form-item :label-col="{ span: 24 }" :wrapper-col="{ span: 21 }" style="margin-bottom: 10px">
        <a-input v-model="config[0].textThree"/>
      </a-form-item>
    </a-col>
    <a-col span="12">
      <a-form-item :label-col="{ span: 24 }" :wrapper-col="{ span: 24 }" style="margin-bottom: 10px">
        <a-input v-model="config[0].numberThree"/>
      </a-form-item>
    </a-col>
  </a-row>
</template>

<script>
  export default {
    name: 'RingDate',
    props: {
      config: {
        type: Array,
        default: () => []
      },
    },
  }
</script>

<style scoped>

</style>