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
      <div style="height: 490px;width: 100%">
        <monaco-editor
          class="editor"
          v-model="code"
          theme="vs-dark"
          style="width: 950px"
          language="javascript">
        </monaco-editor>
      </div>
    </a-form>

  </a-modal>

</template>

<script>
  import MonacoEditor from 'vue-monaco'
  import {deleteAction,getAction,postAction} from '@/api/manage'
  //import pick from 'lodash.pick'

  export default {
    name: 'ProtocolListModal',
    components: {
      MonacoEditor
    },

    data() {
      return {
        code: ``,
        protocol: [],

        title: "协议解析",
        visible: false,

        model: {},
        disableSubmit: false,

        form: this.$form.createForm(this),
        iconChooseVisible: false,

      }
    },

    created() {
    },

    methods: {
      add () {
        this.edit();
      },

      edit(record) {
        /*let id = record.id;
        let result = [];
        getAction('/application/agreement/getAgreeByStId', {id}).then((res) => {
          if (res.success) {
            console.log("返回res.success成功^_^")
            result = res.result;
            console.log("内返回的结果result:",result)

            //this.model = Object.assign({}, result);

            this.code = res.result;
          }
        });*/
        this.protocol = record;
        this.code = record.code;

        //this.visible = true;

        this.form.resetFields();
        this.visible = true;
        let fieldsVal = pick(this.model,'id','name','proId','productName','type','format','prefix','code');

        this.$nextTick(() => {
          this.form.setFieldsValue(fieldsVal);
        });

        /*this.form.resetFields();
        this.model = Object.assign({}, result);
        this.visible = true;
        let fieldsVal = pick(this.model,'pName','stId','stName','code');

        this.$nextTick(() => {
          this.form.setFieldsValue(fieldsVal);
        });*/
      },

      close () {
        this.code = ``;
        /*this.form.setFieldsValue({
          code: ``,
        });*/
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

            //let formData = Object.assign(this.model, values);
            let formData = Object.assign(this.protocol, values);

            let obj;
            if(!formData.id || formData.id==''){
              obj = postAction("/application/protocol/saveCode", {analysis:{name:formData.name,proId: formData.proId,productName: formData.productName,type: formData.type,format: formData.format,prefix: formData.prefix},code: this.code});
            }else{
              //obj = postAction("/application/agreement/saveAgreement", {agreement:{id :formData.id,pName:formData.pName,stId:formData.stId,stName: formData.stName,prefix: formData.prefix,js: formData.js},js: this.code});
              obj = postAction("/application/protocol/saveCode", {analysis:{id:formData.id,name:formData.name,proId: formData.proId,productName: formData.productName,type: formData.type,format: formData.format,prefix: formData.prefix},code: this.code});
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