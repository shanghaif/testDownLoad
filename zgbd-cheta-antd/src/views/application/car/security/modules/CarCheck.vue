<template>
    <div class="cheta-carwarn">
      <a-modal
        width="720px"
        height="362px"
        cancelText="取消"
        okText="提交"
        title="出车点检"
        v-model="visible"
        @ok="handleOk"
      >
        <div>
          <a-form :form="form" class="ant-advanced-search-form">
            <a-row :gutter="24">
              <a-col :span="12" :xs="24" :sm="24" :md="12" :xl="12">
                <a-form-item label="车牌号:" v-bind="formItemLayout">
                  <div>
                    <Search :showSearch="false" @searchChange="searchChange" :addonBefore="true"/>
                  </div>
                </a-form-item>
              </a-col>
              <a-col :span="12" :xs="24" :sm="24" :md="12" :xl="12">
                <a-form-item label="胎压检查:" v-bind="formItemLayout">
                  <a-radio-group v-model="value">
                    <a-radio :value="1">正常状态</a-radio>
                    <a-radio :value="2">异常状态</a-radio>
                  </a-radio-group>
                </a-form-item>
              </a-col>
              <a-col :span="12" :xs="12" :sm="24" :md="12" :xl="12">
                <a-form-item label="油量值:" v-bind="formItemLayout">
                  <a-input placeholder="请输入油量" v-decorator="['oil', {rules: [{required: true,message: '你输入的车牌号格式不正确请检查!'}]}]">
                  <a-select slot="addonBefore" defaultValue=0 style="width: 70px" v-decorator="['isOil',{'initialValue':'0'}]">
                  <a-select-option value=0>油量(L)</a-select-option>
                  <a-select-option value=1>汽油量(ML)</a-select-option>
                  </a-select>
                  </a-input>
                </a-form-item>
              </a-col>
              <a-col :span="12" :xs="24" :sm="24" :md="12" :xl="12">
                <a-form-item label="胎压检查:" v-bind="formItemLayout">
                  <a-radio-group v-model="value">
                    <a-radio :value="1">正常状态</a-radio>
                    <a-radio :value="2">异常状态</a-radio>
                  </a-radio-group>
                </a-form-item>
              </a-col>
              <a-col :span="12" :xs="12" :sm="24" :md="12" :xl="12">
                <a-form-item label="总里程(km/h):" v-bind="formItemLayout">
                  <a-input placeholder="请输入总里程数值" v-decorator="['mileage']" />
                </a-form-item>
              </a-col>
              <a-col :span="12" :xs="24" :sm="24" :md="12" :xl="12">
                <a-form-item label="胎压检查:" v-bind="formItemLayout">
                  <a-radio-group v-model="value">
                    <a-radio :value="1">正常状态</a-radio>
                    <a-radio :value="2">异常状态</a-radio>
                  </a-radio-group>
                </a-form-item>
              </a-col>
            </a-row>
          </a-form>
        </div>
      </a-modal>
    </div>
</template>

<script>
  import Search from '@views/chetaui/input/search/Index'
  export default {
    name: 'CarCheck',
    components: { Search },
    data () {
      return {
        visible: false,
        value: 1,
        form: this.$form.createForm(this),
        formItemLayout: {
          labelCol: {
            xs: { span: 7 },
            sm: { span: 7 },
          },
          wrapperCol: {
            xs: { span: 17 },
            sm: { span: 17 },
          },
        },
      }
    },
    methods: {
      showModal () {
        this.visible = true
      },

      handleOk () {},
      searchChange () {}
    }
  }
</script>
<style lang="less">
  .cheta-carwarn .ant-form-item-required:before{

    content: '' !important;
  }
</style>
<style scoped>

</style>