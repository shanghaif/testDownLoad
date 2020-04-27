<template>
  <div>
    <a-card>
      是否允许删除内部组件：
      <a-switch style="margin-left: 10px"  v-model="config[0].isDelete">
        <a-icon type="check" slot="checkedChildren"/>
        <a-icon type="close" slot="unCheckedChildren"/>
      </a-switch>
      <a-button @click="moveComponent" type="link">点击移动组件</a-button>
    </a-card>
    <a-card style="text-align: center;border-top: white">
      <a-radio-group v-model="sliderNum" defaultValue="24">
        <a-radio-button :value="24">一行一列</a-radio-button>
        <a-radio-button :value="12">一行两列</a-radio-button>
      </a-radio-group>
    </a-card>
    <a-row>
      <a-form class="cheta-form" :form="form" :layout="formLayout">
        <a-col :span="24"  @click="addComponent(element)" v-for="element in config[0].library" >
          <component :is="element.name" v-bind="element.data" class="cheta-m-10" />
        </a-col>
      </a-form>
    </a-row>
    <form-elment-data-drawer :config="config" ref="elementdrawer"></form-elment-data-drawer>
  </div>
</template>

<script>
  import formMixin from '@/views/application/onlines/car/component/form/config/component.js'
  import FormElmentDataDrawer from './FormElmentDataDrawer'

  import ARow from 'ant-design-vue/es/grid/Row'
  import ACol from 'ant-design-vue/es/grid/Col'

    export default {
      name: "FormElementData",
      components: Object.assign(
        formMixin.components,
        {ARow,ACol, FormElmentDataDrawer}
      ),
      data () {
        return {
          //单个组件的span
          sliderNum : 12,
          formLayout: 'horizontal',
          form: this.$form.createForm(this, { name: 'coordinated' }),
        }
      },
      props: {
        config: {
          type: Array,
          default: () => []
        }
      },
      methods:{
        moveComponent(){
          this.$refs.elementdrawer.open(null);
        },
        addComponent(inner) {
          inner.isRequired = this.selectRequired;
          // debugger;
          inner.space = this.sliderNum;
          if(inner.space == 12){
            inner.data.item.labelCol.span = 6;
            inner.data.item.wrapperCol.span = 14;
          }else{
            inner.data.item.labelCol.span = 3;
            inner.data.item.wrapperCol.span = 19;
          }
          this.config[0].components.push(JSON.parse(JSON.stringify(inner)));
        },
      }
    }
</script>

<style scoped>
  .selectYN{
    text-align: center;
  }
</style>