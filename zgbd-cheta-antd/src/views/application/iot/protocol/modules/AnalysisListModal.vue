<template>
  <a-modal
    :title="title"
    :width="1000"
    :visible="visible"
    @ok="handleOk"
    @cancel="handleCancel"
    :okButtonProps="{ props: {disabled: disableSubmit} }"
    cancelText="关闭"
    style="top:5%;height: 95%;"
  >
    <a-form :form="form">
      <!--<monaco-editor
        class="editor"
        v-model="code"
        language="javascript"
        height="1000"
        width="800">
      </monaco-editor>-->
      <!--<a-form-item
        :labelCol="labelCol"
        :wrapperCol="wrapperCol"
        label="设备类型"
        hasFeedback
      >
        <a-select placeholder="请选择设备类型"  v-decorator="['stId', {}]">
          <a-select-option v-for="(sensty,senstyindex) in senstyList" :key="senstyindex.toString()" :value="sensty.id">
            {{sensty.stName}}
          </a-select-option>
        </a-select>
      </a-form-item>-->
      <a-form-item
        :labelCol="labelCol"
        :wrapperCol="wrapperCol"
        label="产品名"
        hasFeedback
      >
        <a-select placeholder="请选择产品名"  v-decorator="['proId', validatorRules.proId]">
          <a-select-option v-for="(protocol,protocolindex) in protocolList" :key="protocolindex.toString()" :value="protocol.id">
            {{protocol.productName}}
          </a-select-option>
        </a-select>
      </a-form-item>

      <a-form-item
        :labelCol="labelCol"
        :wrapperCol="wrapperCol"
        label="协议名称"
        hasFeedback >
        <a-input placeholder="请输入协议名称" v-decorator="[ 'name', validatorRules.name]" :readOnly="disableSubmit" />
      </a-form-item>

      <a-form-item
        :labelCol="labelCol"
        :wrapperCol="wrapperCol"
        label="传输方式"
        hasFeedback >
        <a-input placeholder="请输入传输方式" v-decorator="[ 'type', {}]" :readOnly="disableSubmit" />
      </a-form-item>

      <a-form-item
        :labelCol="labelCol"
        :wrapperCol="wrapperCol"
        label="数据格式"
        hasFeedback >
        <a-input placeholder="请输入数据格式" v-decorator="[ 'format', {}]" :readOnly="disableSubmit" />
      </a-form-item>

      <a-form-item
        :labelCol="labelCol"
        :wrapperCol="wrapperCol"
        label="唯一前缀"
        hasFeedback >
        <a-input placeholder="请输入唯一前缀" v-decorator="[ 'prefix', {}]" :readOnly="disableSubmit" />
      </a-form-item>

    </a-form>


  </a-modal>
</template>
<script>
  import {deleteAction,getAction,postAction} from '@/api/manage'
  import pick from 'lodash.pick'
  export default {
    name: 'AnalysisListModal',
    components: {
    },
    data() {
      return {
        title: "操作",
        visible: false,
        model: {},
        disableSubmit: false,

        //协议名列表
        protocolList: [],

        labelCol: {
          xs: { span: 24 },
          sm: { span: 5 },
        },
        wrapperCol: {
          xs: { span: 24 },
          sm: { span: 16 },
        },

        form: this.$form.createForm(this),
        iconChooseVisible: false,

        validatorRules: {
          proId: { rules: [{ required: true, message: '请选择产品名!' }] },
          name: {rules: [{required: true, message: '请输入协议名称!' }] },
          type: {rules: [{required: true, message: '请输入传输方式!' }] },
          format: {rules: [{required: true, message: '请输入数据格式!' }] },
          prefix: {rules: [{required: true, message: '请输入唯一前缀!' }] }
        },
      }
    },

    created() {
    },

    methods: {
      //协议名列表
      initialProtocolList(){
        var params = "";
        getAction('/application/protocol/getProtocol',params).then((res)=>{
          console.log(res)
          if(res.success){
            this.protocolList = res.result;
          }else{
            console.log(res.message);
          }
        });
      },

      add () {
        this.edit();
      },

      edit(record) {
        this.initialProtocolList();
        //this.visible = true;

        this.form.resetFields();
        this.model = Object.assign({}, record);
        this.visible = true;
        let fieldsVal = pick(this.model,'proId','name','type','format','prefix');

        this.$nextTick(() => {
          this.form.setFieldsValue(fieldsVal);
        });
      },

      close () {
        this.disableSubmit = false;
        this.visible = false;
        this.$emit('close');
      },

      handleOk (){
        const that = this;
        // 触发表单验证
        this.form.validateFields((err, values) => {
          if (!err) {
            that.confirmLoading = true;
            let formData = Object.assign(this.model, values);
            let obj;

            if(!this.model.id){
              obj = postAction("/application/protocol/saveAnalysis", {analysis:{name:formData.name,proId:formData.proId,type: formData.type,format: formData.format,prefix: formData.prefix}});
            }else{
              obj = postAction("/application/protocol/saveAnalysis", {analysis:{id :formData.id,name:formData.name,proId:formData.proId,type: formData.type,format: formData.format,prefix: formData.prefix}});
            }
            obj.then((res)=>{
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

        /*const that = this;
        that.confirmLoading = false;
        that.close();*/
      },

      handleCancel () {
        this.close()
      },

    }
  }
</script>

<style scoped>
  .editor {
    width: calc(100% - 250px);
    height: 100%;
  }
</style>