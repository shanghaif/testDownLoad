<template>
  <a-modal
    :title="title"
    :width="1000"
    :visible="visible"
    @ok="handleOk"
    @cancel="handleCancel"
    :okButtonProps="{ props: {disabled: disableSubmit} }"
    cancelText="关闭"
    style="top:5%;height: 95%;">
    <a-form :form="form">
      <a-form-item
        style="width: 90%"
        label="添加组件">
        <a-input placeholder="请输入组件名称" v-decorator="[ 'componentName', validatorRules.componentName]" :readOnly="disableSubmit"/>
      </a-form-item>

      <a-form-item
        v-for="(k, index) in form.getFieldValue('keys')"
        :key="k"
        :label="index === 0 ? '属性列表' : ''"
        :required="false"
      >

        <a-select
          placeholder="请选择属性"
          v-decorator="[
            `names[${k}]`,
            {
              validateTrigger: ['change'],
              preserve: true,
              rules: [{
                required: false,
                whitespace: true,
                message: '请选择属性名称！',
              }],
            }
          ]"
          style="width: 90%; margin-right: 8px"
        >
          <a-select-option v-for="(attr,attrindex) in attrList" :key="attrindex.toString()" :value="attr.id">
            {{ attr.attribute }}
          </a-select-option>
        </a-select>

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
    name: "CompModal",
    components: {

    },
    data () {
      return {
        title: "操作",
        test: 'ces',
        visible: false,
        //属性下拉数据
        attrList: [],
        //属性id数据
        attrId: "",
        model: {},
        disableSubmit: false,
        form: this.$form.createForm(this),
        validatorRules: {
          componentName: { rules: [{ required: true, message: '请输入组件名称!' }] }
       },
        iconChooseVisible: false,
      }
    },
    created () {
    },
    methods: {
      //属性列表
      initialAttrList(){
        var params = "";
        getAction("/application/setting/component/getAttribute",params).then((res)=>{
          console.log(res)
          if(res.success){
            this.attrList = res.result;
          }else{
            console.log(res.message);
          }
        });
      },

      add () {
        this.edit();
      },
      edit (record) {
        this.initialAttrList();

        this.form.resetFields();
        this.model = Object.assign({}, record);
        this.visible = true;
        let fieldsVal = pick(this.model,'componentName','names');
        if(fieldsVal.names){
          let names = fieldsVal.names.split(",");
          let keys = [];
          let newnames = [];
          for(let i = 0;i<names.length;i++){
            this.handleNormsClick();
            newnames.push(names[i]);
            keys.push(i+1);
          }
          newnames.push(names[0]);
          fieldsVal.names = newnames;
          fieldsVal.keys = keys;
        }else{
          this.handleNormsClick();
        }
        this.$nextTick(() => {
          this.form.setFieldsValue(fieldsVal);
        });
      },
      close () {
        this.form.setFieldsValue({
          componentName: null,
          //remark: null,
          keys:[],
          names:[],
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
            let list = [];
            if(formData.keys){
              for(let i=0;i<formData.keys.length;i++){
                list.push(formData.names[formData.keys[i]]);
              }
            }else{
              that.$message.warning("请输入属性名称!");
            }

            let obj;
            if(!this.model.id){
              obj = postAction("/application/setting/component/saveComponent", {component:{componentName:formData.componentName},list:list});
            }else{
              obj = postAction("/application/setting/component/editComponent", {component:{id :formData.id,componentName:formData.componentName},list:list});
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