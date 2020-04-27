<template>
    <a-row>
      <a-card>
        <a-tabs defaultActiveKey="1" @change="callback">
          <a-tab-pane tab="表头数据" key="1">
            <template  v-for="(item, index) in config[0].columns" >
              <a-form-item :label="'表头' + (index + 1)" :label-col="{ span: 5 }" :wrapper-col="{ span: 19 }" style="margin-bottom:0;">
                <a-form-item :style="{ display: 'inline-block', width: 'calc(90% - 15px)', marginRight: '10px' }">
                  <a-input placeholder="字段名" v-model="item.title" />
                </a-form-item>
                <a-icon
                  class="dynamic-delete-button"
                  type="minus-circle-o"
                  @click="(function(index){removeTableFieldOne(index)})(index)"
                />
              </a-form-item>
            </template>
            <a-form-item label="新增" :label-col="{ span: 4 }" :wrapper-col="{ span: 20 }">
              <a-button
                type="dashed"
                :style="inputStyle"
                @click="addTableFieldOne"
              >
                <a-icon type="plus" /> 添加字段
              </a-button>
              <a-button style="margin-left: 0.2rem" @click="revertOne" type="dashed">重置</a-button>
            </a-form-item>
          </a-tab-pane>
          <a-tab-pane tab="表格内数据" key="2">
            <template  v-for="(item, index) in config[0].data" >
              <a-form-item :label="'字段' + (index + 1)" :label-col="{ span: 5 }" :wrapper-col="{ span: 19 }" style="margin-bottom:0;">
                <a-form-item :style="{ display: 'inline-block', width: 'calc(46% - 15px)', marginRight: '10px' }">
                  <a-input placeholder="字段名" v-model="item.name" />
                </a-form-item>
                <a-form-item :style="{ display: 'inline-block', width: 'calc(47% - 15px)', marginRight: '10px' }">
                  <a-input placeholder="主键名" v-model="item.address"/>
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
          </a-tab-pane>
        </a-tabs>
      </a-card>



    </a-row>
</template>

<script>
  export default {
    name: 'ListThreeData',
    props: {
      config: {
        type: Array,
        default: () => []
      }
    },
    methods:{
      //header 页头
      addTableField(){
        this.config[0].data.push({key:this.config[0].data.length+1,ranking: this.config[0].data.length+1});
      },
      addTableFieldOne(){
        this.config[0].columns.push({key:this.config[0].columns.length+1,ranking: this.config[0].columns.length+1});
      },
      removeTableField(index){
        this.config[0].data.splice(index,1);
      },
      removeTableFieldOne(index){
        this.config[0].columns.splice(index,1);
      },
      revert(){
        this.config[0].data = [];
      },
      revertOne(){
        this.config[0].columns = [];
      },
    }

  }
</script>

<style scoped>

</style>