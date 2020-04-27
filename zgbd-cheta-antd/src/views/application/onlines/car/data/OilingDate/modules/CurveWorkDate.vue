<template>
  <a-row>
    <a-card>
      <a-col span="12">
        <a-form-item label="字体颜色选择" :label-col="{ span: 24 }" :wrapper-col="{ span: 21 }" style="margin-bottom: 10px;z-index: 2;">
          <colorPicker v-model="config[0].colorOne" />
        </a-form-item>
      </a-col>
      <a-col span="12">
        <a-form-item label="数据条颜色选择" :label-col="{ span: 24 }" :wrapper-col="{ span: 21 }" style="margin-bottom: 10px;z-index: 2;">
          <colorPicker v-model="config[0].colorTwo" />
        </a-form-item>
      </a-col>
      <!--<a-col span="8">-->
        <!--<a-form-item label="数据条颜色选择" :label-col="{ span: 24 }" :wrapper-col="{ span: 21 }" style="margin-bottom: 10px;z-index: 2;">-->
          <!--<colorPicker v-model="config[0].colorThree" />-->
        <!--</a-form-item>-->
      <!--</a-col>-->

      <a-col span="12">
        <a-form-item :label-col="{ span: 21 }" :wrapper-col="{ span: 21 }" style="margin-bottom: 10px">
          <a-input v-model="config[0].legendDate[0]"/>
        </a-form-item>
      </a-col>
      <!--<a-col span="12">-->
        <!--<a-form-item :label-col="{ span: 24 }" :wrapper-col="{ span: 21 }" style="margin-bottom: 10px">-->
          <!--<a-input v-model="config[0].legendDate[1]"/>-->
        <!--</a-form-item>-->
      <!--</a-col>-->
      <!--<template  v-for="(item, index) in config" >-->
      <!--<a-form-item :label="'字段' + (index + 1)" :label-col="{ span: 5 }" :wrapper-col="{ span: 19 }" style="margin-bottom:0;">-->
      <a-form-item :style="{ display: 'inline-block', width: 'calc(46% - 15px)', marginRight: '10px' }">
        <a-input placeholder="数值" v-model="config[0].day"/>
      </a-form-item>
      <a-form-item :style="{ display: 'inline-block', width: 'calc(47% - 15px)', marginRight: '10px' }">
        <a-input placeholder="数值" v-model="config[0].number"/>
      </a-form-item>
      <a-form-item :style="{ display: 'inline-block', width: 'calc(47% - 15px)', marginRight: '10px' }">
        <a-input placeholder="数值" v-model="config[0].value"/>
      </a-form-item>
      <a-icon
        class="dynamic-delete-button"
        type="minus-circle-o"
        @click="(function(index){removeTableField(index)})(index)"
      />
      <!--</a-form-item>-->
      <!--</template>-->
      <a-form-item label="新增" :label-col="{ span: 4 }" :wrapper-col="{ span: 20 }">
        <a-button
          type="dashed"
          :style="inputStyle"
          @click="addTableField"
        >
          <a-icon type="plus" /> 添加字段
        </a-button>
        <a-button style="margin-left: 0.2rem" @click="revert" type="dashed">重置</a-button>
      </a-form-item>





    </a-card>




  </a-row>
</template>

<script>
  export default {
    name: 'Curve',
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