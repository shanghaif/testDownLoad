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

      <a-form-item
        :labelCol="labelCol"
        :wrapperCol="wrapperCol"
        label="产品名"
        hasFeedback >
        <!--<a-input placeholder="请输入产品名" v-decorator="[ 'pname', validatorRules.pname]" :readOnly="disableSubmit" />-->
        <a-select placeholder="请输入产品名" v-decorator="['pname', validatorRules.pname]">
          <a-select-option v-for="senspn in senspnList" :key="senspn" :value="senspn">
            {{ senspn }}
          </a-select-option>
        </a-select>
      </a-form-item>

      <a-form-item
        :labelCol="labelCol"
        :wrapperCol="wrapperCol"
        label="设备编号"
        hasFeedback >
        <!--<a-input  v-decorator="['termNo', {}]" />-->
        <a-input placeholder="请输入设备编号" v-decorator="[ 'termNo', validatorRules.termNo]" :readOnly="disableSubmit" />
      </a-form-item>

      <a-form-item
        :labelCol="labelCol"
        :wrapperCol="wrapperCol"
        label="设备类型"
        hasFeedback
      >
        <a-select placeholder="请选择设备类型" v-decorator="['stId', {}]">
          <a-select-option v-for="(sensty,senstyindex) in senstyList" :key="senstyindex.toString()" :value="sensty.id">
            {{ sensty.stName }}
          </a-select-option>
        </a-select>
      </a-form-item>
      <!--<a-form-item
        :labelCol="labelCol"
        :wrapperCol="wrapperCol"
        label="设备类型"
        hasFeedback
      >
        <a-select
          mode="combobox"
          style="width: 100%"
          @change="handleChange"
          v-decorator="['stId', {}]"
          placeholder="请输入设备类型"
        >
          <a-select-option v-for="(sensty,senstyindex) in senstyList" :key="senstyindex.toString()" :value="sensty.id">
            {{sensty.stName}}
          </a-select-option>
        </a-select>
      </a-form-item>-->


    </a-form>

  </a-modal>
</template>

<script>
  import {deleteAction,getAction,postAction} from '@/api/manage'
  import pick from 'lodash.pick'

  let cost = 0;
  export default {
    name: "SensorListModal",
    components: {

    },
    data () {
      return {
        title: "操作",
        test: 'ces',
        visible: false,
        ///产品数据
        senspnList: ['车联网','智慧环卫','智能家居','智慧交通','智慧停车场','智慧消防'],
        //设备类型下拉数据
        senstyList: [],

        model: {},
        disableSubmit: false,

        labelCol: {
          xs: { span: 24 },
          sm: { span: 5 },
        },
        wrapperCol: {
          xs: { span: 24 },
          sm: { span: 16 },
        },

        form: this.$form.createForm(this),
        validatorRules: {
          pname: { rules: [{ required: true, message: '请输入产品名!' }] },
          termNo: {rules: [{required: true, message: '请输入设备编号!' }]}
        },
        iconChooseVisible: false,
      }
    },
    created () {
    },
    methods: {
      //设备类型列表
      initialSenstyList(){
        var params = "";
        getAction('/application/type/getType',params).then((res)=>{
          console.log(res)
          if(res.success){
            this.senstyList = res.result;
          }else{
            console.log(res.message);
          }
        });
      },
      add () {
        this.edit();
      },
      edit (record) {
        this.initialSenstyList();
        this.form.resetFields();
        this.model = Object.assign({}, record);
        this.visible = true;
        let fieldsVal = pick(this.model,'pname','termNo','stId');

        this.$nextTick(() => {
          this.form.setFieldsValue(fieldsVal);
        });
      },
      close () {
        this.form.setFieldsValue({
          pname: null,
          termNo: null,
          stId: null,
        });
        this.disableSubmit = false;
        this.visible = false;
        this.$emit('close');
      },
      handleOk () {
        const that = this;
        // 触发表单验证
        this.form.validateFields((err, values) => {
          if (!err) {
            that.confirmLoading = true;
            let formData = Object.assign(this.model, values);
            let obj;
            if(!this.model.id){
              obj = postAction("/application/sensor/saveSensor", {sensor:{pname:formData.pname,termNo: formData.termNo,stId:formData.stId}});
            }else{
              obj = postAction("/application/sensor/saveSensor", {sensor:{id :formData.id,pname:formData.pname,termNo: formData.termNo,stId:formData.stId}});
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
      //搜索下拉
      /*handleChange(value) {
        console.log(`selected ${key}`);
      },*/
    }
  }
</script>

<style scoped>

</style>