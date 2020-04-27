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
          :labelCol="labelCol"
          :wrapperCol="wrapperCol"
          label="门店名称"
          hasFeedback >
          <a-input placeholder="请输入门店名称" v-decorator="['storeName', {}]" />
        </a-form-item>

        <a-form-item
          :labelCol="labelCol"
          :wrapperCol="wrapperCol"
          label="门店logo"
          hasFeedback
        >
          <a-upload
            action="../fileUpload"
            listType="picture"
            class="upload-list-inline"
            :fileList="fileList"
            :remove="handleRemove"
            @preview="handlePreview"
            @change="handleChange"
          >
            <div v-if="fileList.length < 1">
              <a-button>
                <a-icon type="upload" /> upload
              </a-button>
            </div>
          </a-upload>
        </a-form-item>

        <a-form-item
          :labelCol="labelCol"
          :wrapperCol="wrapperCol"
          label="联系人"
          hasFeedback >
          <a-input placeholder="请输入门店联系人" v-decorator="['person', {}]" />
        </a-form-item>

        <a-form-item
          :labelCol="labelCol"
          :wrapperCol="wrapperCol"
          label="联系电话"
          hasFeedback >
          <a-input placeholder="请输入门店联系电话" v-decorator="['telephone', {}]" />
        </a-form-item>

        <a-form-item
          :labelCol="labelCol"
          :wrapperCol="wrapperCol"
          label="营业时间"
          hasFeedback >
          <a-input placeholder="请输入门店营业时间" v-decorator="['workTime', {}]" />
          <!--<a-span>例如：8:30-17:30</a-span>-->
        </a-form-item>

        <a-form-item
          :labelCol="labelCol"
          :wrapperCol="wrapperCol"
          label="门店区域"
          hasFeedback >
          <a-input v-decorator="['storeArea', {}]" />
        </a-form-item>


        <a-form-item
          :labelCol="labelCol"
          :wrapperCol="wrapperCol"
          label="详细地址"
          hasFeedback >
          <a-input placeholder="请输入详细地址" v-decorator="['addressXx', {}]" />
        </a-form-item>

        <a-form-item
          :labelCol="labelCol"
          :wrapperCol="wrapperCol"
          label="门店坐标"
          hasFeedback >
          <a-input placeholder="请选择门店坐标" v-decorator="['storeCoor', {}]" />
        </a-form-item>

        <a-form-item
          :labelCol="labelCol"
          :wrapperCol="wrapperCol"
          label="门店简介"
          hasFeedback >
          <a-textarea placeholder="请输入门店简介" v-decorator="['storeItdc', {}]" />
        </a-form-item>

        <a-form-item
          :labelCol="labelCol"
          :wrapperCol="wrapperCol"
          label="门店排序"
          hasFeedback >
          <a-input-number v-decorator="['storeSort', {'initialValue':100}]" style="width: 100%" />
          <!--<a-span>数字越小越靠前</a-span>-->
        </a-form-item>


        <a-form-item
          :labelCol="labelCol"
          :wrapperCol="wrapperCol"
          label="自提核销"
          hasFeedback
        >
          <a-radio-group v-decorator="['since',{'initialValue':1}]">
            <a-radio :value="1">
              支持
            </a-radio>
            <a-radio :value="0">
              不支持
            </a-radio>
          </a-radio-group>
        </a-form-item>

        <a-form-item
          :labelCol="labelCol"
          :wrapperCol="wrapperCol"
          label="门店状态"
          hasFeedback
        >
          <a-radio-group v-decorator="['status',{'initialValue':1}]">
            <a-radio :value="1">
              启用
            </a-radio>
            <a-radio :value="0">
              禁用
            </a-radio>
          </a-radio-group>
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
    name: "MallStoreModal",
    components: {AFormItem, ATextarea},
    data () {
      return {
        fileList:[],
        title:"操作",
        visible: false,
        model: {},
        storeLogo: '',
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
          add: "/application/setting/store/saveStore",
          edit: "/application/setting/store/editStore",
        },
      }
    },
    created () {
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
          this.form.setFieldsValue(pick(this.model,'storeName','storeLogo','person','telephone','workTime','storeArea','addressXx','storeCoor','storeItdc','storeSort','since','status'))
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
            this.model.storeLogo = this.storeLogo;
            let httpurl = '';
            let method = '';
            if(!this.model.id){
              httpurl+=this.url.add;
              method = 'post';
            }else{
              httpurl+=this.url.edit;
              //method = 'put';
              method = 'post';
            }
            let formData = Object.assign(this.model, values);

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
      handlePreview (file) {
        this.previewImage = file.url || file.thumbUrl
        this.previewVisible = true
      },
      handleChange ({ fileList }) {
        this.fileList = fileList
        if (this.fileList[0].status === 'done') {
          this.storeLogo = fileList[0].response;
        }
      }

    }
  }
</script>

<style scoped>

</style>