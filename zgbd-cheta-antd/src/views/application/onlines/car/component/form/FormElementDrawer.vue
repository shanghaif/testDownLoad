<template>
  <a-drawer
    title="更改数据"
    width=400
    :closable="false"
    v-if="config[0].isDelete && config[0].components[cureentIndex]"
    @close="onElementLibraryClose"
    :visible="libraryVisibleElement"
  >
    <a-row gutter="2">
      <a-col :span="14" style="margin-bottom: 1rem;">
        当前属性:
        <a-input v-model="config[0].components[cureentIndex].data.bind.fieldName" placeholder="标题"></a-input>
      </a-col>
      <a-col :span="10" style="margin-bottom: 1rem;">
        默认选择:
        <a-input v-model="config[0].components[cureentIndex].data.bind.moren" placeholder="选择"></a-input>
      </a-col>
      <a-col :span="24" style="margin-bottom: 1rem;">
        <div>
          <a-row>
            <a-col :span="7" style="text-align: right;">
              <a-input v-model="config[0].components[cureentIndex].data.item.label" placeholder="标题"></a-input>
            </a-col>
            <a-col :span="16" v-if="config[0].components[cureentIndex].data.attr.placeholder">
              <a-input v-model="config[0].components[cureentIndex].data.attr.placeholder" placeholder="占位符"></a-input>
            </a-col>
          </a-row>
        </div>
      </a-col>
      <a-col :span="24">
        <div v-if="config[0].components[cureentIndex].data.options">
          <a-form-item v-for="(item, ind) in config[0].components[cureentIndex].data.options"
                       :label="'字段' + (ind + 1)" :label-col="{ span: 3 }" :wrapper-col="{ span: 21 }"
                       style="margin-bottom:0;">
            <a-form-item :style="{ display: 'inline-block', width: 'calc(33% - 12px)', marginRight: '51px' }">
              <a-input placeholder="标题" v-model="item.value" style="width: 140px;"/>
            </a-form-item>
            <a-form-item :style="{ display: 'inline-block', width: 'calc(33% - 12px)', marginRight: '10px' }">
              <a-input placeholder="值" v-model="item.key" style="width: 140px;"/>
            </a-form-item>
            <a-icon style="margin-left: 45px;" class="dynamic-delete-button" type="minus-circle-o"
                    @click="removeTableField(ind)"/>
          </a-form-item>
          <a-form-item label="新增" :label-col="{ span: 4 }" :wrapper-col="{ span: 20 }">
            <a-button type="dashed" @click="addTableField">
              <a-icon type="plus"/>
              添加字段
            </a-button>
          </a-form-item>
        </div>
      </a-col>
      <a-col :span="12"  class="cheta-mt-8">
        字段名：
      </a-col>
      <a-col :span="12"  class="cheta-mt-8">
        是否设为必填项：
      </a-col>
      <a-col :span="12" v-for="component in config[0].components" class="cheta-mt-8">
        <a-row>
          <a-col :span="16">
            <a-input v-model="component.data.bind.fieldName" placeholder="字段名"></a-input>
          </a-col>
          <a-col :span="1"></a-col>
          <a-col :span="7">
            <a-switch size="small" v-model="component.data.bind.rules.rules[0].required">
              <a-icon type="check" slot="checkedChildren"/>
              <a-icon type="close" slot="unCheckedChildren"/>
            </a-switch>
          </a-col>
        </a-row>
      </a-col>
      <a-col :span="24" class="cheta-mt-8">
        label名称：(可进行拖拽移动位置)
      </a-col>
      <Draggable v-model="config[0].components">
        <a-col :span="12" v-for="component in config[0].components" class="cheta-mt-8">
          <a-input v-model="component.data.item.label" placeholder="字段名"></a-input>
        </a-col>
      </Draggable>
      <a-col :span="24" class="cheta-mt-8">
        必填项提示语：
      </a-col>
      <a-col :span="12" v-for="component in config[0].components" class="cheta-mt-8">
        <a-input
          v-model="component.data.bind.rules.rules[0].message"
          :readonly="!component.data.bind.rules.rules[0].required || false"
          :placeholder="component.data.item.label||'暂无数据'"/>
      </a-col>
    </a-row>
  </a-drawer>
</template>

<script>
  import Draggable from 'vuedraggable';
  export default {
    name: 'FormElementDrawer',
    components:{
      Draggable
    },
    data() {
      return {
        libraryVisibleElement: false,
        cureentIndex: 0,
        item : {}
      }
    },
    props: {
      config: {
        type: Array,
        default: () => []
      }
    },
    methods: {
      open(item,index){
        this.libraryVisibleElement = true;
        this.item = item;
        this.cureentIndex = index;
      },
      //添加选择框字段
      addTableField() {
        this.config[0].components[this.cureentIndex].data.options.push({ key: '', value: '' })
      },
      //select 组件的方法
      removeTableField(index) {
        this.config[0].components[this.cureentIndex].data.options.splice(index, 1)
      },
      //关闭修改库
      onElementLibraryClose() {
        this.libraryVisibleElement = false
      },
    }
  }
</script>

<style scoped>

</style>