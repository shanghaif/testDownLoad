<template>
  <a-row>
    <a-col span="24">
    <a-form-item  :label-col="{ span: 24 }" :wrapper-col="{ span: 21 }" style="margin-bottom: 10px;z-index: 2;">
      <colorPicker v-model="config[0].color" />
    </a-form-item>
  </a-col>
    <a-col span="24">
      <a-form-item :label-col="{ span: 24 }" :wrapper-col="{ span: 21 }" style="margin-bottom: 10px">
        <a-input v-model="config[0].numberOne"/>
      </a-form-item>
    </a-col>
    <a-col span="24">
      <a-form-item :label-col="{ span: 24 }" :wrapper-col="{ span: 21 }" style="margin-bottom: 10px">
        <a-input v-model="config[0].numberTwo"/>
      </a-form-item>
    </a-col>
    <a-col span="24">
      <a-form-item :label-col="{ span: 24 }" :wrapper-col="{ span: 21 }" style="margin-bottom: 10px">
        <a-input v-model="config[0].numberThree"/>
      </a-form-item>
    </a-col>

  </a-row>
</template>

<script>
  export default {
    name: 'OilPriceDate',
    props: {
      config: {
        type: Array,
        default: () => []
      },
    },
    data(){
      return{
        color: this.config[0].color
      }
    },
    methods: {
      onChange (e) {
        this.config[0].select = e.target.value;
      },
      // onChange(e) {
      //   console.log('radio checked', e.target.value);
      // },
    },
  }
</script>

<style scoped>

</style>