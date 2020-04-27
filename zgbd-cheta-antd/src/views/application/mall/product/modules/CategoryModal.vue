<template>
  <a-modal
    :title="title"
    :width="1000"
    :visible="visible"
    :confirmLoading="confirmLoading"
    @ok="handleOk"
    @cancel="handleCancel"
    :okButtonProps="{ props: {disabled: disableSubmit} }"
    cancelText="关闭"
    style="top:5%;height: 95%;">
    <a-spin :spinning="confirmLoading">
      <a-form :form="form">
        <a-form-item label="商品分类" v-show="this.model.parentId == null">
          <a-radio-group @change="onChangeMenuType" v-decorator="['menuType',{'initialValue':0}]">
            <a-radio :value="0">一级分类</a-radio>
            <a-radio :value="1">二级分类</a-radio>
          </a-radio-group>
        </a-form-item>

        <a-form-item
          :labelCol="labelCol"
          :wrapperCol="wrapperCol"
          :label="menuLabel"
          hasFeedback >
          <a-input placeholder="请输入分类名称" v-decorator="[ 'name', validatorRules.name]" :readOnly="disableSubmit"/>
        </a-form-item>

        <a-form-item
          :labelCol="labelCol"
          :wrapperCol="wrapperCol"
          :label="description"
          hasFeedback >
          <a-input placeholder="请输入详情描述" v-decorator="[ 'description', validatorRules.description]" :readOnly="disableSubmit"/>
        </a-form-item>

        <a-form-item
          v-show="localMenuType != 0 "
          label="上级分类"
        >
          <a-select
            v-decorator="['parentId',validatorRules.parentId]"
            v-model="parentData"
            placeholder="请选择父级分类"
            :disabled="disableSubmit" >
            <a-select-option v-for="item in getParentList" :key="item.id">{{ item.value }}</a-select-option>
          </a-select>
        </a-form-item>

        <a-form-item
          v-show="show"
          label="排序">
          <a-input-number placeholder="请输入分类排序" style="width: 200px" v-decorator="[ 'sortNo', {'initialValue':1.0,'rule':validatorRules.sortNo}]" :readOnly="disableSubmit"/>
        </a-form-item>

        <a-form-item
          label="图片上传"
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
      </a-form>
      <!-- 选择图标 -->
      <icons @choose="handleIconChoose" @close="handleIconCancel" :iconChooseVisible="iconChooseVisible"></icons>
    </a-spin>
  </a-modal>
</template>

<script>
  import {addCategory,editCategory,queryCategoryData} from '@/api/api'
  import Icons from '../../../../system/modules/icon/Icons'
  import {deleteAction,getAction} from '@/api/manage'
  import pick from 'lodash.pick'
  import Option from 'ant-design-vue/es/vc-select/Option'

  export default {
    name: "CategoryModal",
    components: { Option, Icons},
    data () {
      return {
        fileList:[],
        getParentList : [],
        parentData: '',
        title: "操作",
        visible: false,
        disableSubmit: false,
        model: {},
        localMenuType: '0',
        show: true,//根据分类类型，动态显示隐藏表单元素
        menuLabel: '分类名称',
        description: '详情描述',
        imageUrl: '',
        confirmLoading: false,
        form: this.$form.createForm(this),
        validatorRules: {
          name: { rules: [{ required: true, message: '请输入分类标题!' }] },
          sortNo: { rules: [{ validator: this.validateNumber }] },
          description: { rules: [{ description: this.description }] },
           parentId: {rules: [{parentId:this.parentId }]}
       },
        iconChooseVisible: false
      }
    },
    created () {
    },
    methods: {
      handleRemove (file) {
        const index = this.fileList.indexOf(file);
        const newFileList = this.fileList.slice();
        newFileList.splice(index, 1);
        this.fileList = newFileList
        let webimageUrl = file.response ;
        deleteAction("http://www.zgjiuan.cn/zgbd/file/cheta/deleteAction", {imageUrl: webimageUrl}).then((res) => {
          if(res.success){
            this.imageUrl = ' ';
          }
        });
      },
      loadTree () {
        var that = this;
        queryCategoryData({id:this.model.parentId}).then((res)=>{
          if(res.success){
            that.parentData = res.result.name;
          }
        });
        getAction("/application/product/category/getParentData", {parentId:'0'}).then((res) => {
          if(res.success){
            res.result.forEach(item => {
              that.getParentList.push({
                id: item.id,
                value: item.name
              })
            })
          }
        });
      },
      add () {
        this.edit();
      },
      edit (record) {
        this.form.resetFields();
        this.model = Object.assign({}, record);
        //分类类型切换
        if(record){
          this.alwaysShow = !record.alwaysShow?false:true;
          this.menuHidden = !record.hidden?false:true;
          if(this.model.parentId != '0'){
            this.localMenuType = 1;
            record.menuType = 1;
          }else{
            this.localMenuType = 0;
            record.menuType = 0;
          }
          if (this.model.imageUrl && this.model.imageUrl != ' ') {
            this.fileList = [{
              uid: -1,
              name: '',
              status: 'done',
              url: this.model.imageUrl
            }];
          }
        }else{
          this.show = true;
          this.menuLabel = '分类名称';
        }
        this.visible = true;
        this.loadTree();
        let fieldsVal = pick(this.model,'name','description','imageUrl','sortNo','parentId','menuType');
        this.$nextTick(() => {
          this.form.setFieldsValue(fieldsVal)
        });
      },
      close () {
        this.$emit('close');
        this.disableSubmit = false;
        this.visible = false;
      },
      handleOk () {
        const that = this;
        // 触发表单验证
        this.form.validateFields((err, values) => {
          if (!err) {
            that.confirmLoading = true;
            this.model.alwaysShow = this.alwaysShow;
            this.model.hidden = this.menuHidden;
            this.model.imageUrl = this.imageUrl;
            let formData = Object.assign(this.model, values);
            let obj;
            if(!this.model.id){
              obj=addCategory(formData);
            }else{
              obj=editCategory(formData);
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
        this.localMenuType = '';
        this.fileList = [];
        this.getParentList = [];
        this.previewVisible = false
        this.close()
      },
      handlePreview (file) {
        this.previewImage = file.url || file.thumbUrl
        this.previewVisible = true
      },
      onChangeMenuType(e) {
        console.log('localMenuType checked', e.target.value)
        this.localMenuType=e.target.value
        this.show = true;
      },
      handleChange ({ fileList }) {
        this.fileList = fileList
        if (this.fileList[0].status === 'done') {
          this.imageUrl = fileList[0].response;
        }
      }
    }
  }
</script>

<style scoped>

</style>