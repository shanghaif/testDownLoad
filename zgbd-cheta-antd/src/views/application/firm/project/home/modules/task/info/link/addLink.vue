<template>
  <a-modal
    title="添加链接信息"
    width="500px"
    :visible="visible"
    @ok="handleOk"
    @cancel="close"
    cancelText="取消"
    class="cheta-project-hours"
  >
    <a-form :form="form">
      <a-row :gutter="24">
        <a-col :span="24" :xs="24" :sm="24" :md="24" :xl="24">
          <a-form-item
            label="链接名称:"
            v-bind="formItemLayout"
          >
            <a-input placeholder="" v-decorator="['linkName', {rules: [{ required: true,message: '你输入的名称不正确请检查!'}]}]"></a-input>
          </a-form-item>
        </a-col>
        <a-col :span="24" :xs="24" :sm="24" :md="24" :xl="24">
          <a-form-item
            label="链接地址:"
            v-bind="formItemLayout"
          >
            <a-input placeholder="" v-decorator="['linkUrl', {rules: [{ required: true,message: '你输入的链接不正确请检查!'}]}]"></a-input>
          </a-form-item>
        </a-col>
      </a-row>
    </a-form>
  </a-modal>
</template>

<script>
  export default {
    name: 'ForecastHours',
    components: {  },
    data() {
      return {
        visible: false,
        form: this.$form.createForm(this),
        formItemLayout: {
          labelCol: {
            xs: { span: 24 },
            sm: { span: 4 },

          },
          wrapperCol: {
            xs: { span: 24 },
            sm: { span: 20 },
          },
        },
        model: {}
      }
    },
    props: {
      detailObject: {
        type:Object
      }
    },
    methods: {
      handleOk () {
        // 触发表单验证
        this.form.validateFields((err, values) => {
          if (!err) {
            let formData = Object.assign(this.model,values);
            this.$emit('changeData',{linkName:formData.linkName,linkUrl:formData.linkUrl})
            this.close()
          }
        })

      },
      close () {
        this.visible = false
      },
      showModelLink () {
        this.visible = true
      },
    }
  }
</script>

<style scoped>

</style>