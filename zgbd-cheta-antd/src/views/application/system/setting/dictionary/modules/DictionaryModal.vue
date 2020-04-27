<template>
  <a-modal
    :title="title"
    :width="800"
    :visible="visible"
    :confirmLoading="confirmLoading"
    @ok="handleOk"
    @cancel="handleCancel"
    cancelText="关闭">

    <a-spin :spinning="confirmLoading">
      <a-form :form="form">

        <a-form-item
          v-show="false"
          :labelCol="labelCol"
          :wrapperCol="wrapperCol"
          disabled="disabled"
          hasFeedback >
          <a-input v-decorator="['id', {}]" />
        </a-form-item>

        <a-form-item
          :labelCol="labelCol"
          :wrapperCol="wrapperCol"
          label="系统代码"
          hasFeedback >
          <a-input placeholder="请输入系统代码" v-decorator="['systemCode', {}]" />
        </a-form-item>

        <a-form-item
          :labelCol="labelCol"
          :wrapperCol="wrapperCol"
          label="标题"
          hasFeedback >
          <a-input placeholder="请输入标题" v-decorator="['title', {}]" />
        </a-form-item>

        <a-form-item
          :labelCol="labelCol"
          :wrapperCol="wrapperCol"
          label="描述"
          hasFeedback >
          <a-input placeholder="请输入描述" v-decorator="['description', {}]" />
        </a-form-item>
      </a-form>

    </a-spin>
  </a-modal>
</template>

<script>
  import { httpAction } from '@/api/manage'
  import pick from 'lodash.pick'
  import ATextarea from "ant-design-vue/es/input/TextArea";
  import AFormItem from "ant-design-vue/es/form/FormItem";

  export default {
    name: "DictionaryModal",
    components: {AFormItem, ATextarea},
    data () {
      return {
        fileList:[],
        title:"操作",
        visible: false,
        model: {},
        labelCol: {
          xs: { span: 24 },
          sm: { span: 5 },
        },
        wrapperCol: {
          xs: { span: 24 },
          sm: { span: 16 },
        },
        confirmLoading: false,
        form: this.$form.createForm(this),
        validatorRules:{
        },
        url: {
          add: "/dictionary/add",
          edit: "/dictionary/edit",
        },
      }
    },
    methods: {
      add () {
        this.edit({});
      },
      edit (record) {
        this.form.resetFields();
        this.model = Object.assign({}, record);
        if (this.model.storeLogo) {
          this.fileList = [{
            uid: -1,
            name: '',
            status: 'done',
            url: this.model.storeLogo
          }];
        }

        this.visible = true;
        this.$nextTick(() => {
          this.form.setFieldsValue(pick(this.model,'id','systemCode','title','description'));
        });

      },
      close () {
        this.$emit('close');
        this.visible = false;
      },
      handleOk () {
        const that = this;
        // 触发表单验证
        this.form.validateFields((err, values) => {
          if (!err) {
            that.confirmLoading = true;
            let httpurl = '';
            let method = 'post';
            if (!this.model.id) {
              httpurl = this.url.add;
            } else {
              httpurl = this.url.edit;
            }
            let formData = Object.assign(this.model, values);
            httpAction(httpurl, formData, method).then((res)=>{
              if(res.success){
                that.$message.success(res.message);
                that.$emit('ok');
              }else{
                that.$message.warning(res.message);
              }
            }).finally(() => {
              that.confirmLoading = false;
              that.close();
            })
          }
        })
      },
      handleCancel () {
        this.close()
      }

    }
  }
</script>

<style scoped>

</style>