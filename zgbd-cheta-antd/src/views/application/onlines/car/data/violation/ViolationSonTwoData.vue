<template>
  <div>
    <a-tabs defaultActiveKey="1">
      <a-tab-pane tab="标题" key="1">
        <a-row>
          <a-col span="12">
            <a-form-item label="标题" :label-col="{ span: 24 }" :wrapper-col="{ span: 20 }" style="margin-bottom: 10px">
              <a-input v-model="config[0].title"/>
            </a-form-item>
          </a-col>
          <a-col span="12">
            <a-form-item label="是否显示进度条" :label-col="{ span: 24 }" :wrapper-col="{ span: 24 }"
                         style="margin-bottom: 10px">
              <a-radio-group name="radioGroup" @change="onChange" defaultValue="1">
                <a-radio value="1">是</a-radio>
                <a-radio value="2">否</a-radio>
              </a-radio-group>
            </a-form-item>
          </a-col>
        </a-row>
        <a-row>
          <a-col span="12">
            <a-form-item :label-col="{ span: 24 }" :wrapper-col="{ span: 20 }" style="margin-bottom: 10px">
              <a-input v-model="config[0].desc"/>
            </a-form-item>
          </a-col>
          <a-col span="12" v-if="config[0].ifPercent == 1">
            <a-form-item :label-col="{ span: 24 }" :wrapper-col="{ span: 24}" style="margin-bottom: 10px">
               <a-slider :defaultValue="config[0].percent" v-model="config[0].percent" />
            </a-form-item>
          </a-col>
        </a-row>
        <a-row>
          <a-col span="12">
            <a-form-item :label-col="{ span: 24 }" :wrapper-col="{ span: 20 }" style="margin-bottom: 10px">
              <a-input v-model="config[0].content.value"/>
            </a-form-item>
          </a-col>
        </a-row>
      </a-tab-pane>
      <a-tab-pane tab="圆环数据" key="2">
        <a-row>
          <a-card>
            <template  v-for="(item, index) in config[0].data" >
              <a-form-item :label="'字段' + (index + 1)" :label-col="{ span: 5 }" :wrapper-col="{ span: 19 }" style="margin-bottom:0;">
                <a-form-item :style="{ display: 'inline-block', width: 'calc(46% - 15px)', marginRight: '10px' }">
                  <a-input placeholder="字段名" v-model="item.year" />
                </a-form-item>
                <a-form-item :style="{ display: 'inline-block', width: 'calc(47% - 15px)', marginRight: '10px' }">
                  <a-input placeholder="主键名" v-model="item.population"/>
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
            </a-form-item>
          </a-card>
        </a-row>
      </a-tab-pane>
    </a-tabs>
  </div>
</template>

<script>
  import ARow from "ant-design-vue/es/grid/Row";
  export default {
    name: "ViolationSonOne",
    components: {ARow},
    props: {
      config: {
        type: Array,
        default: () => []
      }
    },
    methods: {
      onChange(e) {
        this.config[0].ifPercent = e.target.value;
      },
      //header 页头
      addTableField(){
        this.config[0].data.push({fieldType: '1-varchar(50)'});
      },
      removeTableField(index){
        this.config[0].data.splice(index,1);
      },
    }
  }
</script>

<style scoped>

</style>