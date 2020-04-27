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
        style="width: 90%"
        label="添加设备类型">
        <a-input placeholder="请输入设备类型名称" v-decorator="[ 'stName', validatorRules.stName]" :readOnly="disableSubmit"/>
        <a-input placeholder="请输入设备类型备注" v-decorator="[ 'stRemark', validatorRules.stRemark]" :readOnly="disableSubmit"/>
      </a-form-item>

      <a-form-item
        v-for="(k, index) in form.getFieldValue('keys')"
        :key="k"
        :label="index === 0 ? '属性列表' : ''"
        :required="false"
      >
        <a-input
          v-decorator="[
            `attrNames[${k}]`,
            {
              validateTrigger: ['change', 'blur'],
              preserve: true,
              rules: [{
                required: false,
                whitespace: true,
                message: '请输入属性中文！',
              }],
            }
          ]"
          placeholder="请输入属性中文"
          style="width: 90%; margin-right: 8px"
        />

        <a-input
          v-decorator="[
            `attrValues[${k}]`,
            {
              validateTrigger: ['change', 'blur'],
              preserve: true,
              rules: [{
                required: false,
                whitespace: true,
                message: '请输入属性！',
              }],
            }
          ]"
          placeholder="请输入属性"
          style="width: 90%; margin-right: 8px"
        />

        <a-icon
          v-if="form.getFieldValue('keys').length > 1"
          class="dynamic-delete-button"
          type="minus-circle-o"
          :disabled="form.getFieldValue('keys').length === 1"
          @click="() => remove(k)"
        />
      </a-form-item>
      <a-form-item>
        <a-button
          type="dashed"
          style="width: 90%"
          @click="handleNormsClick"
        >
          <a-icon type="plus" /> Add field
        </a-button>
      </a-form-item>
    </a-form>
    <!-- 选择图标 -->
  </a-modal>
</template>

<script>
  import {deleteAction,getAction,postAction} from '@/api/manage'
  import pick from 'lodash.pick'

  let cost = 0;
  export default {
    name: "SensorTypeListModal",
    components: {

    },
    data () {
      return {
        title: "操作",
        test: 'ces',
        visible: false,
        model: {},
        disableSubmit: false,
        form: this.$form.createForm(this),
        validatorRules: {
          stName: { rules: [{ required: true, message: '请输入设备类型名称!' }] },
          stRemark: {rules: [{required: true, message: '请输入设备类型备注!' }]}
       },
        iconChooseVisible: false,
      }
    },
    created () {
    },
    methods: {
      add () {
        this.edit();
      },
      edit (record) {
        this.form.resetFields();
        this.model = Object.assign({}, record);
        this.visible = true;
        let fieldsVal = pick(this.model,'stName','stRemark','attrNames','attrValues');
        if(fieldsVal.attrNames || fieldsVal.attrValues){
          let attrNames = fieldsVal.attrNames.split(",");
          let attrValues = fieldsVal.attrValues.split(",");
          let keys = [];
          let newnames = [];
          let newvalues = [];
          for(let i = 0;i<attrNames.length;i++){
            this.handleNormsClick();
            newnames.push(attrNames[i]);
            newvalues.push(attrValues[i]);
            keys.push(i+1);
          }
          newnames.push(attrNames[0]);
          newvalues.push(attrValues[0]);
          fieldsVal.attrNames = newnames;
          fieldsVal.attrValues = newvalues;
          fieldsVal.keys = keys;
        }
        /*if(fieldsVal.attrNames){
          let attrNames = fieldsVal.attrNames.split(",");
          let keys = [];
          let newnames = [];
          for(let i = 0;i<attrNames.length;i++){
            this.handleNormsClick();
            newnames.push(attrNames[i]);
            keys.push(i+1);
          }
          newnames.push(attrNames[0]);
          fieldsVal.attrNames = newnames;
          fieldsVal.keys = keys;
        }if(fieldsVal.attrValues){
          let attrValues = fieldsVal.attrValues.split(",");
          let keys = [];
          let newvalues = [];
          for(let i = 0;i<attrValues.length;i++){
            this.handleNormsClick();
            newvalues.push(attrValues[i]);
            keys.push(i+1);
          }
          newvalues.push(attrValues[0]);
          fieldsVal.attrValues = newvalues;
          fieldsVal.keys = keys;
        }*/else{
          this.handleNormsClick();
        }
        this.$nextTick(() => {
          this.form.setFieldsValue(fieldsVal);
        });
      },
      close () {
        this.form.setFieldsValue({
          stName: null,
          stRemark: null,
          keys:[],
          attrNames:[],
          attrValues:[],
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
            let namelist = [];
            let valuelist = [];
            if(formData.keys){
              for(let i=0;i<formData.keys.length;i++){
                namelist.push(formData.attrNames[formData.keys[i]]);
                valuelist.push(formData.attrValues[formData.keys[i]]);
              }
            }else{
              that.$message.warning("请输入属性名称!");
            }
            let obj;
            if(!this.model.id){
              obj = postAction("/application/type/saveSensorType", {sensortype:{stName:formData.stName,stRemark: formData.stRemark},namelist:namelist,valuelist:valuelist});
            }else{
              obj = postAction("/application/type/saveSensorType", {sensortype:{id :formData.id,stName:formData.stName,stRemark: formData.stRemark},namelist:namelist,valuelist:valuelist});
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
      handleNormsClick(){
        this.form.getFieldDecorator('keys', { initialValue: [], preserve: true });
        const { form } = this;
        const keys = form.getFieldValue('keys');
        const nextKeys = keys.concat(++cost);
        form.setFieldsValue({
          keys: nextKeys,
        });
      },  remove  (k) {
        const { form } = this;
        const keys = form.getFieldValue('keys');
        if (keys.length === 1) {
          return;
        }
        form.setFieldsValue({
          keys: keys.filter(key => key !== k),
        });
      },
    }
  }
</script>

<style scoped>

</style>