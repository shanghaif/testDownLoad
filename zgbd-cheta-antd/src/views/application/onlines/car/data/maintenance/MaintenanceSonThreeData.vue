<template>
  <div>
    <a-tabs defaultActiveKey="1" @change="callback">
      <a-tab-pane tab="进度条" key="1">

        <a-row>
          <a-col span="12">
            <a-form-item label="标题1" :label-col="{ span: 24 }" :wrapper-col="{ span: 20 }" style="margin-bottom: 10px">
              <a-input v-model="config[0].left.one"/>
            </a-form-item>
          </a-col>
          <a-col span="12">
            <a-form-item label="进度条1" :label-col="{ span: 24 }" :wrapper-col="{ span: 20 }" style="margin-bottom: 10px">
              <!--<a-progress :percent="config[0].left.oneLine"/>
              <a-input-number :min="0" :max="100" v-model="config[0].left.oneLine"/>-->
              <a-slider :defaultValue="config[0].left.oneLine" v-model="config[0].left.oneLine" />
            </a-form-item>
          </a-col>
        </a-row>
        <!--进度条二-->
        <a-row>
          <a-col span="12">
            <a-form-item label="标题2" :label-col="{ span: 24 }" :wrapper-col="{ span: 20 }" style="margin-bottom: 10px">
              <a-input v-model="config[0].left.two"/>
            </a-form-item>
          </a-col>
          <a-col span="12">
            <a-form-item label="进度条2" :label-col="{ span: 24 }" :wrapper-col="{ span: 20 }" style="margin-bottom: 10px">
              <a-slider :defaultValue="config[0].left.twoLine" v-model="config[0].left.twoLine" />
            </a-form-item>
          </a-col>
        </a-row>
          <!--进度条三-->
        <a-row>
          <a-col span="12">
            <a-form-item label="标题3" :label-col="{ span: 24 }" :wrapper-col="{ span: 20 }" style="margin-bottom: 10px">
              <a-input v-model="config[0].left.three"/>
            </a-form-item>
          </a-col>
          <a-col span="12">
            <a-form-item label="进度条3" :label-col="{ span: 24 }" :wrapper-col="{ span: 20 }" style="margin-bottom: 10px">
              <a-slider :defaultValue="config[0].left.threeLine" v-model="config[0].left.threeLine" />
            </a-form-item>
          </a-col>
        </a-row>
      </a-tab-pane>


      <a-tab-pane tab="保养车辆" key="2">
        <a-row>
          <a-col span="12">
            <a-form-item label="标题" :label-col="{ span: 24 }" :wrapper-col="{ span: 20 }" style="margin-bottom: 10px">
              <a-input v-model="config[0].right.title"/>
            </a-form-item>
          </a-col>
          <a-col span="12">
            <a-form-item label="标题" :label-col="{ span: 24 }" :wrapper-col="{ span: 20 }" style="margin-bottom: 10px">
              <a-input v-model="config[0].right.value"/>
            </a-form-item>
          </a-col>
        </a-row>
      </a-tab-pane>
    </a-tabs>
  </div>
</template>

<script>
  export default {
    name: "MaintenanceSonOneData",
    props: {
      config: {
        type: Array,
        default: () => []
      }
    },
    methods: {}
  }
</script>

<style scoped>

</style>