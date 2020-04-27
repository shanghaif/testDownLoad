<template>
  <a-modal
    :title="title"
    :width="1000"
    :visible="visible"
    :confirmLoading="confirmLoading"
    @ok="handleOk"
    @cancel="handleCancel">

    <a-spin :spinning="confirmLoading">
      <a-form :form="form">
        <!-- 主表单区域 -->
        <a-form-item
          :labelCol="labelCol"
          :wrapperCol="wrapperCol"
          label="核销店铺"
          hasFeedback
        >
          <a-select placeholder="核销店铺" v-decorator="['storeId', {}]">
            <a-select-option v-for="(store,storeindex) in storeList" :key="storeindex.toString()" :value="store.id">
              {{ store.storeName }}
            </a-select-option>
          </a-select>
        </a-form-item>

        <a-form-item
          :labelCol="labelCol"
          :wrapperCol="wrapperCol"
          label="核销员"
          hasFeedback >
          <a-input placeholder="请输入核销员姓名" v-decorator="['verifier', {}]" />
        </a-form-item>

        <a-form-item
          :labelCol="labelCol"
          :wrapperCol="wrapperCol"
          label="订单号"
          hasFeedback >
          <a-input placeholder="请输入订单号" v-decorator="['orderNum', {}]" />
        </a-form-item>

        <a-form-item
          :labelCol="labelCol"
          :wrapperCol="wrapperCol"
          label="订单类型"
          hasFeedback >
          <a-input placeholder="请输入订单类型" v-decorator="['orderType', {}]" />
        </a-form-item>

      </a-form>
    </a-spin>
  </a-modal>
</template>

<script>
  import { httpAction,getAction } from '@/api/manage'
  import pick from 'lodash.pick'
  import ATextarea from "ant-design-vue/es/input/TextArea";
  import AFormItem from "ant-design-vue/es/form/FormItem";

  export default {
    name: "MallOrderverModal",
    components: {AFormItem, ATextarea},
    data () {
      return {
        title:"操作",
        visible: false,
        //店铺下拉数据
        storeList: [],
        orderMainModel:{},
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
          add: "/application/setting/orderver/saveOrderver",
          edit: "/application/setting/orderver/editOrderver",
          listStore: "/application/setting/store/getStore",
        },
      }
    },
    created () {
    },
    methods: {
      //店铺列表
      initialStoreList(){
        var params = "";
        getAction(this.url.listStore,params).then((res)=>{
          console.log(this.url.listStore)
          console.log(res)
          if(res.success){
            this.storeList = res.result;
          }else{
            console.log(res.message);
          }
        });
      },

      add () {
        this.edit({});
      },
      edit (record) {
        this.initialStoreList();
        this.form.resetFields();
        this.orderMainModel = Object.assign({}, record);
        this.visible = true;
        this.$nextTick(() => {
          this.form.setFieldsValue(pick(this.orderMainModel,'storeId','verifier','orderNum','orderType'))
        });
        console.log(this.orderMainModel)
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
            let method = '';
            if(!this.orderMainModel.id){
              httpurl+=this.url.add;
              method = 'post';
            }else{
              httpurl+=this.url.edit;
              method = 'post';
            }
            let formData = Object.assign(this.orderMainModel, values);
            console.log(formData)
            httpAction(httpurl,formData,method).then((res)=>{
              console.log(res)
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
  .ant-btn {
    padding: 0 10px;
    margin-left: 3px;
  }
  .ant-form-item-control {
    line-height: 0px;
  }
  /** 主表单行间距 */
  .ant-form .ant-form-item {
    margin-bottom: 10px;
  }
  /** Tab页面行间距 */
  .ant-tabs-content .ant-form-item {
    margin-bottom: 0px;
  }
</style>