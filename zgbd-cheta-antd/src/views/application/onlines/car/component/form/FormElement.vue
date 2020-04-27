<template>
  <div class="assemblyFrom">
    <a-row>
        <span @click="edit(element,index)" v-for="(element,index) in config[0].components">
          <a-col :span="element.space"  :style="{height: '70px'}">
             <component :is="element.name" v-bind="element.data" class="cheta-m-10"/>
               <div class="element-list-del" v-if="config[0].isDelete" @click.stop="removeElement(index)" style="position: relative;">
                <a-icon type="delete" style="font-size: 22px;position: absolute;z-index: 10; top:-43px; right: 20px;"/>
               </div>
          </a-col>
        </span>
    </a-row>
    <c-form-element-drawer ref="formelement" :config="config"></c-form-element-drawer>
  </div>
</template>

<script>
  /*
  * 标注：cheta会有自己一套UI 组件 ，以c开头，比如：c-input、c-select、c-table
  *
  * 参数解释：{
  *
  *   name: 组件名称
  *   data: {
  *     attr: 内部组件属性
  *     item: form属性
  *     context: 组件需要的内容
  *     bind: v-decorator ：Form绑定的数据
  *     ....: 自定义的属性值
  *   }
  * }
  * */
  // form item 空隙
  import formMixin from '@/views/application/onlines/car/component/form/config/component.js'
  import CFormElementDrawer from './FormElementDrawer'

  import ACol from 'ant-design-vue/es/grid/Col'
  import Span from '../list/modules/modules/Span'

  export default {
    name: 'FormElement',
    components: Object.assign(
      formMixin.components,
      {Span, CFormElementDrawer,ACol}
    ),
    data() {
      return {
        libraryVisibleElement: false,
        cureentIndex: 0,
        formLayout: 'horizontal',
      }
    },
    beforeCreate() {
      this.form = this.$form.createForm(this, { name: 'validate_other' });
    },
    props: {
      config: {
        type: Array,
        default: () => []
      }
    },
    methods: {
      handleSubmit(e) {
        e.preventDefault();
        this.form.validateFields((err, values) => {
          if (!err) {
            console.log('Received values of form: ', values);
          }
        });
      },
      normFile(e) {
        console.log('Upload event:', e);
        if (Array.isArray(e)) {
          return e;
        }
        return e && e.fileList;
      },
      //编辑内部组件
      edit(item, index) {
        if (this.config[0].isDelete) {
          this.cureentIndex = index
          this.$refs.formelement.open(item, index)
        }
      },
      //移除内部组件
      removeElement(index) {
        this.config[0].components[index] = null
        this.config[0].components.splice(index, 1)
      }
    },
  }
</script>

<style scoped>
  .cheta-form > * {
    margin-bottom: 20px
  }
  .line{
    border: 1px solid #E8E8E8;
  }
  .assemblyFrom #components-form-demo-validate-other > div{
    margin-bottom: 0px;
  }
</style>