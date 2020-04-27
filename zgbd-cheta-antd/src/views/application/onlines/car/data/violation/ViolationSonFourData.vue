<template>
    <a-row>
      <a-card>
        <template  v-for="(item, index) in config[0].data" >
          <a-form-item :label="'字段' + (index + 1)" :label-col="{ span: 5 }" :wrapper-col="{ span: 19 }" style="margin-bottom:0;">
            <a-form-item :style="{ display: 'inline-block', width: 'calc(46% - 15px)', marginRight: '10px' }">
              <a-input placeholder="字段名" v-model="item.year" />
            </a-form-item>
            <a-form-item :style="{ display: 'inline-block', width: 'calc(47% - 15px)', marginRight: '10px' }">
              <a-input placeholder="主键名" v-model="item.exports"/>
            </a-form-item>
            <a-icon
              class="dynamic-delete-button"
              type="minus-circle-o"
              @click="(function(index){removeTableField(index)})(index)"
            />
          </a-form-item>
        </template>
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
      <a-col span="12">
        <a-form-item  :label-col="{ span: 21 }" :wrapper-col="{ span: 20 }" style="margin-bottom: 10px">
          <a-input v-model="config[0].titleOne"/>
        </a-form-item>
      </a-col>
      <a-col span="12">
        <a-form-item  :label-col="{ span: 24 }" :wrapper-col="{ span: 20 }" style="margin-bottom: 10px">
          <a-input v-model="config[0].titleTwo"/>
        </a-form-item>
      </a-col>
      <a-col span="12">
        <a-form-item  :label-col="{ span: 24 }" :wrapper-col="{ span: 20 }" style="margin-bottom: 10px">
          <a-input v-model="config[0].titleThree"/>
        </a-form-item>
      </a-col>
      <a-col span="12">
        <a-form-item :title="数据条颜色" :label-col="{ span: 12 }" :wrapper-col="{ span: 20 }" style="margin-bottom: 10px">
          <a-input v-model="config[0].color[0]"/>
        </a-form-item>
      </a-col>
      <a-col span="12">
        <a-form-item :title="数据条颜色"  :label-col="{ span: 12 }" :wrapper-col="{ span: 20 }" style="margin-bottom: 10px">
          <a-input v-model="config[0].color[1]"/>
        </a-form-item>
      </a-col>
      <a-col span="12">
        <a-form-item :title="数据颜色"  :label-col="{ span: 12 }" :wrapper-col="{ span: 20 }" style="margin-bottom: 10px">
          <a-input v-model="config[0].bgcolor"/>
        </a-form-item>
      </a-col>
      <a-col span="24">
        <a-form-item  :label-col="{ span: 12 }" :wrapper-col="{ span: 20 }" style="margin-bottom: 10px">
          <a-input v-model="config[0].titleFour"/>
        </a-form-item>
      </a-col>
    </a-row>



</template>

<script>
  export default {
    created(){
      const data = this.config[0].data;
      data.forEach(item => item.year = parseInt(item.year));
      data.forEach(item => item.exports = parseInt(item.exports));
      data.forEach(item => item.imports = parseInt(item.imports));
    },
    name: 'ViolationSonFourData',
    props: {
      config: {
        type: Array,
        default: () => []
      }
    },
    methods:{
      //header 页头
      addTableField(){
        this.config[0].data.push({fieldType: '1-varchar(50)'});
      },
      removeTableField(index){
        this.config[0].data.splice(index,1);
      },
      revert(){
        this.config[0].data = [];
      },
    },
  }
</script>

<style scoped>

</style>