<template>
  <a-row>
    <a-tabs defaultActiveKey="1" @change="callback">
      <a-tab-pane tab="第一列" key="1">
        <a-col span="20">
          <a-form-item :label-col="{ span: 24 }" :wrapper-col="{ span: 20 }" style="margin-bottom: 10px">
            <a-input v-model="config[0].title"/>
          </a-form-item>
        </a-col>
        <a-col span="12">
          <a-form-item :label-col="{ span: 24 }" :wrapper-col="{ span: 21 }" style="margin-bottom: 10px">
            <a-input v-model="config[0].title1"/>
          </a-form-item>
        </a-col>
        <a-col span="12">
          <a-form-item :label-col="{ span: 24 }" :wrapper-col="{ span: 24 }" style="margin-bottom: 10px">
            <a-input v-model="config[0].setupDate"/>
          </a-form-item>
        </a-col>
        <a-col span="12">
          <a-form-item :label-col="{ span: 24 }" :wrapper-col="{ span: 21 }" style="margin-bottom: 10px">
            <a-input v-model="config[0].title2"/>
          </a-form-item>
        </a-col>
        <a-col span="12">
          <a-form-item :label-col="{ span: 24 }" :wrapper-col="{ span: 24 }" style="margin-bottom: 10px">
            <a-input v-model="config[0].setupDateEnd"/>
          </a-form-item>
        </a-col>
      </a-tab-pane>
      <a-tab-pane tab="第二列" key="2" forceRender>
        <a-col span="12">
          <a-form-item :label-col="{ span: 24 }" :wrapper-col="{ span: 21 }" style="margin-bottom: 10px">
            <a-input v-model="config[0].title3"/>
          </a-form-item>
        </a-col>
        <a-col span="12">
          <a-form-item :label-col="{ span: 24 }" :wrapper-col="{ span: 24 }" style="margin-bottom: 10px">
            <a-input v-model="config[0].serviceCharge"/>
          </a-form-item>
        </a-col>
        <a-col span="12">
          <a-form-item :label-col="{ span: 24 }" :wrapper-col="{ span: 21 }" style="margin-bottom: 10px">
            <a-input v-model="config[0].title4"/>
          </a-form-item>
        </a-col>
        <a-col span="12">
          <a-form-item :label-col="{ span: 24 }" :wrapper-col="{ span: 24 }" style="margin-bottom: 10px">
            <a-input v-model="config[0].fenceLimits"/>
          </a-form-item>
        </a-col>
      </a-tab-pane>
      <a-tab-pane tab="第三列" key="3">
        <a-col span="12">
          <a-form-item :label-col="{ span: 24 }" :wrapper-col="{ span: 21 }" style="margin-bottom: 10px">
            <a-input v-model="config[0].title5"/>
          </a-form-item>
        </a-col>
        <a-col span="12">
          <a-form-item :label-col="{ span: 24 }" :wrapper-col="{ span: 24 }" style="margin-bottom: 10px">
            <a-input v-model="config[0].NonOperationalSpeedLimit"/>
          </a-form-item>
        </a-col>
        <a-col span="12">
          <a-form-item :label-col="{ span: 24 }" :wrapper-col="{ span: 21 }" style="margin-bottom: 10px">
            <a-input v-model="config[0].title6"/>
          </a-form-item>
        </a-col>
        <a-col span="12">
          <a-form-item :label-col="{ span: 24 }" :wrapper-col="{ span: 24 }" style="margin-bottom: 10px">
            <a-input v-model="config[0].operationSpeedLimit"/>
          </a-form-item>
        </a-col>
      </a-tab-pane>
      <a-tab-pane tab="列表" key="4">Content of Tab Pane 3</a-tab-pane>
    </a-tabs>
  </a-row>
</template>

<script>
  export default {
    name: 'ListTwoData',
    props: {
      config: {
        type: Array,
        default: () => []
      },
    },
    data () {
      return {
      }
    },
    methods: {
      callback (key) {
        console.log(key)
      },
    },
  }
</script>

<style scoped>

</style>