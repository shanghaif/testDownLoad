<template>
  <a-row>
    <a-card >
      <!--top-->
      <a-col span="12" >
        <a-form-item label="左标题" :label-col="{ span: 24 }" :wrapper-col="{ span: 21 }" style="margin-bottom: 10px">
          <a-input v-model="config[0].top.leftTitle"/>
        </a-form-item>
      </a-col>
      <a-col span="12" >
        <a-form-item label="右标题" :label-col="{ span: 24 }" :wrapper-col="{ span: 21 }" style="margin-bottom: 10px">
          <a-input v-model="config[0].top.rightTitle"/>
        </a-form-item>
      </a-col>
      <a-col span="12" >
        <a-form-item label="" :label-col="{ span: 24 }" :wrapper-col="{ span: 21 }" style="margin-bottom: 10px">
          <a-input v-model="config[0].topRight.one"/>
        </a-form-item>
      </a-col>
      <a-col span="12" >
        <a-form-item label="" :label-col="{ span: 24 }" :wrapper-col="{ span: 21 }" style="margin-bottom: 10px">
          <a-input v-model="config[0].topRight.two"/>
        </a-form-item>
      </a-col>
      <a-col span="12" >
        <a-form-item label="" :label-col="{ span: 24 }" :wrapper-col="{ span: 21 }" style="margin-bottom: 10px">
          <a-input v-model="config[0].topRight.three"/>
        </a-form-item>
      </a-col>

      <a-col span="12" >
        <a-form-item label="" :label-col="{ span: 24 }" :wrapper-col="{ span: 21 }" style="margin-bottom: 10px">
          <a-input v-model="config[0].topRight.four"/>
        </a-form-item>
      </a-col>
    </a-card>

    <!--body-->
    <a-card  v-for="(item,index) in config[0].center" :title="`图` + (index + 1)">
      <a-col span="23">
        <a-form-item label="" :label-col="{ span: 24 }" :wrapper-col="{ span: 21 }" style="margin-bottom: 10px">
          <a-input v-model="item.title"/>
        </a-form-item>
      </a-col>
      <a-col span="23">
        <a-form-item label="" :label-col="{ span: 24 }" :wrapper-col="{ span: 21 }" style="margin-bottom: 10px">
          <a-input v-model="item.imgUrl"/>
        </a-form-item>
      </a-col>
      <a-col span="12" >
        <a-form-item  :label-col="{ span: 24 }" :wrapper-col="{ span: 21 }" style="margin-bottom: 10px">
          <a-input v-model="item.one"/>
        </a-form-item>
      </a-col>
      <a-col span="12">
        <a-form-item :label-col="{ span: 24 }" :wrapper-col="{ span: 21 }" style="margin-bottom: 10px">
          <a-input v-model="item.two"/>
        </a-form-item>
      </a-col>
      <a-col span="12" >
        <a-form-item :label-col="{ span: 24 }" :wrapper-col="{ span: 21 }" style="margin-bottom: 10px">
          <a-input v-model="item.three"/>
        </a-form-item>
      </a-col>
      <a-col span="12" >
        <a-form-item :label-col="{ span: 24 }" :wrapper-col="{ span: 21 }" style="margin-bottom: 10px">
          <a-input v-model="item.four"/>
        </a-form-item>
      </a-col>
    </a-card>

    <!--footer-->
    <a-card  v-for="(item,index) in config[0].footer" :title="`图` + (index + 1)">
      <a-col span="12">
        <a-form-item label="" :label-col="{ span: 24 }" :wrapper-col="{ span: 21 }" style="margin-bottom: 10px">
          <a-input v-model="item.number"/>
        </a-form-item>
      </a-col>
      <a-col span="12">
        <a-form-item label="" :label-col="{ span: 24 }" :wrapper-col="{ span: 21 }" style="margin-bottom: 10px">
          <a-input v-model="item.value"/>
        </a-form-item>
      </a-col>
    </a-card>
  </a-row>
</template>

<script>
    export default {
      name: "TopBodyFootData",
      props: {
        config: {
          type: Array,
          default: () => []
        }
      }
    }
</script>

<style scoped>
  .ant-upload-select-picture-card i {
    font-size: 32px;
    color: #999;
  }

  .ant-upload-select-picture-card .ant-upload-text {
    margin-top: 8px;
    color: #666;
  }
</style>