<template>
  <a-row>
    <a-card v-for="(item,index) in config" :title="`图` + (index + 1)">
      <a-col span="12">
        <a-form-item label="标题" :label-col="{ span: 24 }" :wrapper-col="{ span: 21 }" style="margin-bottom: 10px">
          <a-input v-model="item.top.chartTitle"/>
        </a-form-item>
      </a-col>
      <a-col span="12">
        <a-form-item label="数值" :label-col="{ span: 24 }" :wrapper-col="{ span: 24 }" style="margin-bottom: 10px">
          <a-input v-model="item.top.total"/>
        </a-form-item>
      </a-col>
      <a-col span="24">
        <a-form-item label="内容" :label-col="{ span: 24 }" :wrapper-col="{ span: 24 }" style="margin-bottom: 10px">
          <a-select style="width: 100%" v-model="item.content.type">
            <a-select-option value="trend">趋势</a-select-option>
            <a-select-option value="mini-area">折线图</a-select-option>
            <a-select-option value="mini-bar">柱状图</a-select-option>
            <a-select-option value="mini-progress">进度</a-select-option>
          </a-select>
        </a-form-item>
      </a-col>
      <a-col  v-if="item.content.type === 'trend'" span="24" v-for="inner in item.content.props">
        <a-col span="12">
          <a-form-item label="内容标题" :label-col="{ span: 24 }" :wrapper-col="{ span: 24 }" style="margin-bottom: 10px">
            <a-input v-model="inner.term"/>
          </a-form-item>
        </a-col>
        <a-col span="12">
          <a-form-item label="数值" :label-col="{ span: 24 }" :wrapper-col="{ span: 24 }" style="margin-bottom: 10px">
            <a-input v-model="inner.text"/>
          </a-form-item>
        </a-col>
      </a-col>
      <a-col span="24">
        <a-form-item label="底部内容" :label-col="{ span: 24 }" :wrapper-col="{ span: 24 }" style="margin-bottom: 10px">
          <a-input v-model="item.footer"/>
        </a-form-item>
      </a-col>
      <a-col span="12">
      </a-col>
    </a-card>
  </a-row>
</template>

<script>

  export default {
    name: 'Analysis-top',
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