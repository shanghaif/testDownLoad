<template>
  <a-row>
    <a-col span="24">
      <a-form-item label="下拉框文本更改" :label-col="{ span: 24 }" :wrapper-col="{ span: 24 }"  style="margin-bottom: 10px">
        <a-row>
          <a-col span="8">
            <a-form-item :label-col="{ span: 24 }" :wrapper-col="{ span: 21 }" style="margin-bottom: 10px">
              <a-input v-model="config[0].timeOne"/>
            </a-form-item>
          </a-col>
          <a-col span="8">
            <a-form-item :label-col="{ span: 24 }" :wrapper-col="{ span: 21 }" style="margin-bottom: 10px">
              <a-input v-model="config[0].timeTwo"/>
            </a-form-item>
          </a-col>
          <a-col span="8">
            <a-form-item :label-col="{ span: 24 }" :wrapper-col="{ span: 24 }" style="margin-bottom: 10px">
              <a-input v-model="config[0].timeThree"/>
            </a-form-item>
          </a-col>
        </a-row>
      </a-form-item>
    </a-col>
    <a-col span="24">
      <a-form-item :label-col="{ span: 24 }" :wrapper-col="{ span: 24 }" style="margin-bottom: 10px">
        <a-input v-model="config[0].titleOne"/>
      </a-form-item>
    </a-col>
    <a-col span="12">
      <a-form-item :label-col="{ span: 24 }" :wrapper-col="{ span: 21 }" style="margin-bottom: 10px">
        <a-input v-model="config[0].titleTwo"/>
      </a-form-item>
    </a-col>
    <a-col span="12">
      <a-form-item :label-col="{ span: 21 }" :wrapper-col="{ span: 24 }" style="margin-bottom: 10px">
        <a-input v-model="config[0].titleThree"/>
      </a-form-item>
    </a-col>
  </a-row>
</template>

<script>
  export default {
    name: 'MaintenanceSonSeven',
    props: {
      config: {
        type: Array,
        default: () => [],
      },
    },
    methods:{
      onChange (e) {
        this.config[0].ifDate = e.target.value;
      },
    }
  }
</script>

<style scoped>

</style>