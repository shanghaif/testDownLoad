<template>
  <a-row>
    <a-col span="12">
      <a-form-item :label-col="{ span: 24 }" :wrapper-col="{ span: 21 }" style="margin-bottom: 10px">
        <a-input v-model="config[0].titleOne"/>
      </a-form-item>
    </a-col>
    <a-col span="12">
      <a-form-item :label-col="{ span: 24 }" :wrapper-col="{ span: 24 }" style="margin-bottom: 10px">
        <a-input v-model="config[0].titleTwo"/>
      </a-form-item>
    </a-col>
    <a-col span="24">
      <a-form-item label="搜索框样式选择" :label-col="{ span: 24 }" :wrapper-col="{ span: 21 }" style="margin-bottom: 10px">
        <a-radio-group name="radioGroup" @change="onChange" :defaultValue="1">
          <a-radio :value="1">洋红色</a-radio>
          <a-radio :value="2">青绿色</a-radio>
          <a-radio :value="3">烟紫色</a-radio>
        </a-radio-group>
      </a-form-item>
    </a-col>
  </a-row>
</template>

<script>
  export default {
    name: 'SelectDate',
    props: {
      config: {
        type: Array,
        default: () => []
      },
    },
    data() {
      return {

      };
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