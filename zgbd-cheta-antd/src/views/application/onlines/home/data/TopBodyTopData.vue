<template>
    <a-row>
      <a-tabs defaultActiveKey="1" @change="callback">
        <a-tab-pane tab="标题" key="1">
          <a-col span="24">标题</a-col>
          <a-col span="12" >
            <a-form-item  :label-col="{ span: 24 }" :wrapper-col="{ span: 21 }" style="margin-bottom: 10px">
              <a-textarea  autosize="true" v-model="config[0].titleOne"/>
            </a-form-item>
          </a-col>
          <a-col span="12" >
            <a-form-item  :label-col="{ span: 24 }" :wrapper-col="{ span: 24 }" style="margin-bottom: 10px">
              <a-textarea  autosize="true" v-model="config[0].titleTwo"/>
            </a-form-item>
          </a-col>
          <a-col span="12" >
            <a-form-item  :label-col="{ span: 24 }" :wrapper-col="{ span: 21 }" style="margin-bottom: 10px">
              <a-textarea  autosize="true" v-model="config[0].titleThree"/>
            </a-form-item>
          </a-col>
          <a-col span="12" >
            <a-form-item  :label-col="{ span: 24 }" :wrapper-col="{ span: 24 }" style="margin-bottom: 10px">
              <a-textarea  autosize="true" v-model="config[0].titleFour"/>
            </a-form-item>
          </a-col>
          <a-col span="12" >
            <a-form-item  :label-col="{ span: 24 }" :wrapper-col="{ span: 21 }" style="margin-bottom: 10px">
              <a-textarea  autosize="true" v-model="config[0].titleFive"/>
            </a-form-item>
          </a-col>
          <a-col span="12" >
            <a-form-item  :label-col="{ span: 24 }" :wrapper-col="{ span: 24 }" style="margin-bottom: 10px">
              <a-textarea  autosize="true" v-model="config[0].titleSix"/>
            </a-form-item>
          </a-col>
          <a-col span="12" >
            <a-form-item  :label-col="{ span: 24 }" :wrapper-col="{ span: 21 }" style="margin-bottom: 10px">
              <a-textarea  autosize="true" v-model="config[0].titleSeven"/>
            </a-form-item>
          </a-col>
        </a-tab-pane>
        <a-tab-pane tab="图片" key="2" forceRender>更新中。。。 。。。</a-tab-pane>
        <a-tab-pane tab="轮播图片" key="3">更新中。。。 。。。</a-tab-pane>
      </a-tabs>





    </a-row>
</template>

<script>
  export default {
    name: 'TopBody',
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