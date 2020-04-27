<template>
  <a-row>
    <a-card >
      <a-col span="22" >
        <a-form-item label="背景图片路径" :label-col="{ span: 24 }" :wrapper-col="{ span: 21 }" style="margin-bottom: 10px">
          <a-textarea  autosize="true" v-model="config[0].imgUrl"/>
        </a-form-item>
      </a-col>
      <a-col span="12" >
        <a-form-item label="标题" :label-col="{ span: 24 }" :wrapper-col="{ span: 21 }" style="margin-bottom: 10px">
          <a-textarea  autosize="true" v-model="config[0].title"/>
        </a-form-item>
      </a-col>
      <a-col span="12" >
        <a-form-item label="描述" :label-col="{ span: 24 }" :wrapper-col="{ span: 21 }" style="margin-bottom: 10px">
          <a-textarea autosize="true" v-model="config[0].description"/>
        </a-form-item>
      </a-col>
    </a-card>
  </a-row>
</template>

<script>
  export default {
    name: 'TopFootFootData',
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