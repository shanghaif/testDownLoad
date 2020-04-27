<template>
  <div>
    <a-row>
      <a-tabs defaultActiveKey="1" @change="callback">
        <a-tab-pane tab="left" key="1">
          <a-col span="24">
            <a-form-item label="标题" :label-col="{ span: 24 }" :wrapper-col="{ span: 21 }" style="margin-bottom: 10px">
              <a-input v-model="config[0].top"/>
            </a-form-item>
          </a-col>
          <a-col span="24">
            <a-form-item label="数值" :label-col="{ span: 24 }" :wrapper-col="{ span: 20 }" style="margin-bottom: 10px">
              <a-slider :defaultValue="config[0].content.format" v-model="config[0].content.format" />
            </a-form-item>
          </a-col>
          <a-col span="24">
            <a-form-item label="日期" :label-col="{ span: 24 }" :wrapper-col="{ span: 24 }" style="margin-bottom: 10px">
              <a-date-picker :format="dateFormat" v-model="config[0].content.date"/>
            </a-form-item>
          </a-col>
          <!--<a-col span="24">-->
            <!--<a-form-item label="进度条宽度" :label-col="{ span: 24 }" :wrapper-col="{ span: 24 }" style="margin-bottom: 10px">-->
              <!--<a-input  v-model="config[0].content.width"/>-->
            <!--</a-form-item>-->
          <!--</a-col>-->
          <a-col span="7">
            <a-form-item label="最小值" :label-col="{ span: 24 }" :wrapper-col="{ span: 20 }" style="margin-bottom: 10px">
              <a-input-number :min="0" :max="100" v-model="config[0].content.start"/>
            </a-form-item>
          </a-col>
          <a-col span="7">
            <a-form-item label="标题" :label-col="{ span: 24 }" :wrapper-col="{ span: 21 }" style="margin-bottom: 10px">
              <a-input v-model="config[0].content.content"/>
            </a-form-item>
          </a-col>
          <a-col span="7">
            <a-form-item label="最大值" :label-col="{ span: 24 }" :wrapper-col="{ span: 20 }" style="margin-bottom: 10px">
              <a-input-number :min="0" :max="100" v-model="config[0].content.end"/>
            </a-form-item>
          </a-col>
        </a-tab-pane>
        <a-tab-pane tab="right" key="2" forceRender>
          <a-col span="24">
            <a-form-item label="标题" :label-col="{ span: 24 }" :wrapper-col="{ span: 24 }" style="margin-bottom: 10px">
              <a-textarea autosize v-model="config[0].footer.title"/>
            </a-form-item>
          </a-col>
          <a-col span="24">
            <a-form-item label="描述" :label-col="{ span: 24 }" :wrapper-col="{ span: 24 }" style="margin-bottom: 10px">
              <a-textarea autosize v-model="config[0].footer.desc"/>
            </a-form-item>
          </a-col>
          <a-col span="24">
            <a-form-item label="按钮" :label-col="{ span: 24 }" :wrapper-col="{ span: 24 }" style="margin-bottom: 10px">
              <a-input v-model="config[0].footer.look"/>
            </a-form-item>
          </a-col>
        </a-tab-pane>
      </a-tabs>
    </a-row>
  </div>
</template>

<script>
  export default {
    name: "MaintenanceSonOneData",
    data() {
      return {
        dateFormat: 'YYYY-MM-DD',
        monthFormat: 'YYYY/MM',
        value: 1,
      }
    },
    props: {
      config: {
        type: Array,
        default: () => []
      },
    },
    methods: {
      callback (key) {
        console.log(key)
      },
      onLeft(e) {
        this.config[0].content.ifLeft = e.target.value;
        this.config[0].content.ifRight = e.target.value;
      },
    }
  }
</script>

<style scoped>

</style>