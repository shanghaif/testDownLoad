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
    wrapClassName="ant-modal-cust-warp"
    style="top:5%;height: 95%;">

    <div class="clearfix">
      <div v-if="isShow">
        <div class="net">新增入网</div><div class="import" @click="isShow = !isShow" style="cursor: pointer">批量导入</div>
      </div>
      <div v-else>
        <div class="net">批量导入</div><div class="import" @click="isShow = !isShow" style="cursor: pointer">新增填写</div>
      </div>
    </div>


    <div v-if="isShow">
      <hr>
        <a-spin :spinning="confirmLoading">
          <a-form :form="form">
            <a-row :gutter="24">
              <a-col :span="12" :xs="24" :sm="24" :md="12" :xl="12">
                <a-form-item
                  :labelCol="labelCol"
                  :wrapperCol="wrapperCol"
                  label="车牌号:" >
                  <a-input placeholder="请输入车牌号" v-decorator="[ 'registrationNo', {}]" :readOnly="disableSubmit"/>
                </a-form-item>
              </a-col>

              <a-col :span="12" :xs="24" :sm="24" :md="12" :xl="12">
                <a-form-item
                  :labelCol="labelCol"
                  :wrapperCol="wrapperCol"
                  label="自编号:" >
                  <a-input placeholder="请输入自编号" v-decorator="[ 'sinceNumber', {}]" :readOnly="disableSubmit"/>
                </a-form-item>
              </a-col>

              <a-col :span="12" :xs="24" :sm="24" :md="12" :xl="12">
                <a-form-item
                  :labelCol="labelCol"
                  :wrapperCol="wrapperCol"
                  label="车型属性:"
                  v-bind="formItemLayout">
                  <a-select
                    placeholder="请输入车型属性"
                    @change="handleChange"
                    width="340px"
                    v-decorator="['modelType', {rules: [{message: '你输入的类型未找到!'}]}]"
                  >
                    <!--v-decorator="['cartype', {rules: [{required: true,message: '你输入的类型未找到!'}]}]"-->
                    <a-select-option v-for="item in modelTypedata" :key="item.id">{{ item.name }}</a-select-option>
                  </a-select>
                </a-form-item>
              </a-col>

              <a-col :span="12" :xs="24" :sm="24" :md="12" :xl="12">
                <a-form-item
                  :labelCol="labelCol"
                  :wrapperCol="wrapperCol"
                  label="车辆类型:"
                  v-bind="formItemLayout">
                  <a-select
                    placeholder="请输入车辆类型"
                    @change="handleChange"
                    width="340px"
                    v-decorator="['carType', {rules: [{message: '你输入的类型未找到!'}]}]"
                  >
                    <!--v-decorator="['cartype', {rules: [{required: true,message: '你输入的类型未找到!'}]}]"-->
                    <a-select-option v-for="item in carTypedata" :key="item.id">{{ item.name }}</a-select-option>
                  </a-select>
                </a-form-item>
              </a-col>

              <a-col :span="12" :xs="24" :sm="24" :md="12" :xl="12">
                <a-form-item
                  :labelCol="labelCol"
                  :wrapperCol="wrapperCol"
                  label="车架号:" >
                  <a-input placeholder="请输入车架号" v-decorator="[ 'frameNumber', {}]" :readOnly="disableSubmit"/>
                </a-form-item>
              </a-col>

              <a-col :span="12" :xs="24" :sm="24" :md="12" :xl="12">
                <a-form-item
                  :labelCol="labelCol"
                  :wrapperCol="wrapperCol"
                  label="发动机号:" >
                  <a-input placeholder="请输入发动机号" v-decorator="[ 'engineNumber', {}]" :readOnly="disableSubmit"/>
                </a-form-item>
              </a-col>

              <a-col :span="12" :xs="24" :sm="24" :md="12" :xl="12">
                <a-form-item
                  :labelCol="labelCol"
                  :wrapperCol="wrapperCol"
                  label="购买日期:"
                  v-bind="formItemLayout">
                  <a-date-picker
                    placeholder="请选择购买日期"
                    v-decorator="['buyTime', {'initialValue':now}]"
                  />
                </a-form-item>
              </a-col>

              <a-col :span="12" :xs="24" :sm="24" :md="12" :xl="12">
                <a-form-item
                  :labelCol="labelCol"
                  :wrapperCol="wrapperCol"
                  label="注册日期:"
                  v-bind="formItemLayout">
                  <a-date-picker
                    placeholder="请选择购买日期"
                    v-decorator="[ 'regTime', {'initialValue':now}]" />
                  <!--showTime format="YYYY-MM-DD"-->
                  <!--<a-input v-decorator="[ 'regdate', {}]" :readOnly="disableSubmit"/>-->
                </a-form-item>
              </a-col>

              <a-col :span="12" :xs="24" :sm="24" :md="12" :xl="12">
                <a-form-item
                  :labelCol="labelCol"
                  :wrapperCol="wrapperCol"
                  label="使用项目:">
                  <a-select
                    placeholder="请输入使用项目"
                    @change="handleChange"
                    v-decorator="['projectId', {rules: [{message: '你输入的使用项目未找到!'}]}]"
                  >
                    <a-select-option v-for="item in projectdata" :key="item.id">{{ item.name }}</a-select-option>
                  </a-select>
                </a-form-item>
              </a-col>
            </a-row>

          </a-form>

          <!-- 选择图标 -->
          <icons @choose="handleIconChoose" @close="handleIconCancel" :iconChooseVisible="iconChooseVisible"></icons>
        </a-spin>
    </div>

    <div v-else>
      <hr>
      <a-form :form="form" class="ant-advanced-search-form">
        <a-upload-dragger
          name="file"
          :multiple="true"
          :fileList="fileList"
          :remove="handleRemove"
          :beforeUpload="beforeUpload">
          <p class="ant-upload-drag-icon">
            <a-icon type="cloud-upload" />
          </p>
          <p class="ant-upload-text">点击或将文件拖拽到这里上传</p>
          <p class="ant-upload-hint">支持扩展名：.xls</p>
        </a-upload-dragger>
        <div class="font_total">
          <p>注意事项</p>
          <p>1.模板标题名称不可更改，表头行不可删除;</p>
          <p>2.带*为必填项;</p>
          <p>3.模板填写问题请参考模板中的导入说明;</p>
        </div>
        <div class="foot">
          <a @click="downloadMedel()">下载模板 <a-icon type="arrow-down" /></a>
        </div>
      </a-form>
      <a-modal
        v-model="visible1"
        width="400px"
        height="250px"
        title="导入出错了"
      >
        <p v-for="item in data1" style="color: red;line-height: 30px; text-align: left">{{item.row}}行,{{item.column}}列,{{item.msg}}</p>
      </a-modal>
    </div>

      <!-- 选择图标 -->
      <!--<icons @choose="handleIconChoose" @close="handleIconCancel" :iconChooseVisible="iconChooseVisible"></icons>
    </a-spin>-->


  </a-modal>
</template>

<script>
  import Icons from '../../../system/modules/icon/Icons'
  import {deleteAction,getAction} from '@/api/manage'
  import pick from 'lodash.pick'
  import Option from 'ant-design-vue/es/vc-select/Option'
  import moment from "moment"
  import { getModelType, getCarType, getProject } from '@/views/application/car/api/api'
  import {httpAction} from '@/api/manage'

  export default {
    name: "ParameterModal",
    components: { Option, Icons},
    data () {
      return {
        now: [],
        modelTypedata: [],
        carTypedata: [],
        projectdata: [],
        fileList:[],
        parentData: '',
        treeValue: '0-0-4',
        //title: "操作",
        visible: false,
        disableSubmit: false,

        isShow:true,

        model: {},
        show: true,//根据分类类型，动态显示隐藏表单元素
        imageUrl: '',
        formItemLayout: {
          labelCol: {
            xs: { span: 24 },
            sm: { span: 5 },

          },
          wrapperCol: {
            xs: { span: 24 },
            sm: { span: 24 },
          },
        },
        labelCol: {
          xs: { span: 32 },
          sm: { span: 4 },
        },
        wrapperCol: {
          xs: { span: 12 },
          sm: { span: 6 },
        },

        confirmLoading: false,
        form: this.$form.createForm(this),
        iconChooseVisible: false
      }
    },
    created () {
      getModelType().then(res => this.modelTypedata = res.result)
      getCarType().then(res => this.carTypedata = res.result)
      getProject().then(res => this.projectdata = res.result)
    },
    methods: {
      downloadMedel(){
        window.location.href = "http://www.zgjiuan.cn/file/excel/资产管理/保养导入模板.xls"
      },

      handleRemove (file) {
        const index = this.fileList.indexOf(file);
        const newFileList = this.fileList.slice();
        newFileList.splice(index, 1);
        this.fileList = newFileList
        let webimageUrl = file.response ;
        deleteAction("http://127.0.0.1:9001/zgbd/file/cheta/deleteAction", {imageUrl: webimageUrl}).then((res) => {
            if(res.success){
              this.imageUrl = ' ';
            }
        });
      },

      add () {
        this.edit();
      },
      edit (record) {
        this.now = moment(new Date(),'YYYY-MM-DD hh:mm:ss');
        this.form.resetFields();
        this.model = Object.assign({}, record);
        this.visible = true;

        let fieldsVal = pick(this.model,'id','registrationNo','sinceNumber','modelType','carType','frameNumber','engineNumber','buyTime','regTime','projectId');

        this.form.setFieldsValue({buyTime:this.model.buyTime?moment(this.model.buyTime,'YYYY-MM-DD hh:mm:ss'):moment(new Date(),'YYYY-MM-DD hh:mm:ss')});
        this.form.setFieldsValue({regTime:this.model.regTime?moment(this.model.regTime,'YYYY-MM-DD hh:mm:ss'):moment(new Date(),'YYYY-MM-DD hh:mm:ss')});
        this.$nextTick(() => {
          this.form.setFieldsValue(fieldsVal)
        });
      },
      handleChange(value) {
        console.log(`selected ${value}`);
      },
      close () {
        this.$emit('close');
        this.disableSubmit = false;
        this.visible = false;
      },
      handleOk () {
        const that = this;
        // 触发表单验证
        if (!this.isShow) {
          this.excelImport(this.file);
        } else {
          this.form.validateFields((err, values) => {
            if (!err) {
              that.confirmLoading = true;

              let formData = Object.assign(this.model, values);
              var $this = this;
              var param = {
                id: formData.id,
                registrationNo: formData.registrationNo,
                sinceNumber: formData.sinceNumber,
                modelType: formData.modelType,
                carType: formData.carType,
                frameNumber: formData.frameNumber,
                engineNumber: formData.engineNumber,
                buyTime: formData.buyTime.format('YYYY-MM-DD hh:mm:ss'),   //.format('YYYY-MM-DD hh:mm:ss')
                regTime: formData.regTime.format('YYYY-MM-DD hh:mm:ss'),   //.format('YYYY-MM-DD hh:mm:ss')
                projectId: formData.projectId
              }
              var httpurl = '/application/car/account/saveAccount';
              console.log("regTime:", param.regTime)
              httpAction(httpurl, param, 'post').then((res) => {
                if (res.success) {
                  $this.$message.success(res.message);
                  $this.$emit('reload')
                } else {
                  $this.$message.warning(res.message);
                }
              }).finally(() => {
                that.confirmLoading = false;   //关闭时不将其设为false,下次点开时会一直加载
                $this.close();
              })
            }
          })
        }
      },
      handleCancel () {
        const that = this;
        /*this.fileList = [];
        this.previewVisible = false*/
        that.confirmLoading = false;   //关闭时不将其设为false,下次点开时会一直加载
        this.close()
      },
      /*validateNumber(rule, value, callback){
        if(!value || new RegExp(/^[0-9]*[1-9][0-9]*$/).test(value)){
          callback();
        }else{
          callback("请输入正整数!");
        }
      },*/
      /*onChangeMenuType(e) {
        this.show = true;
      },*/
      selectIcons(){
        this.iconChooseVisible = true
      },
      handleIconCancel () {
        this.iconChooseVisible = false
      },
      handleIconChoose (value) {
        console.log(value)
        this.model.icon = value
        this.form.icon = value
        this.iconChooseVisible = false
      },
      /*handlePreview (file) {
        this.previewImage = file.url || file.thumbUrl
        this.previewVisible = true
      },*/
      /*handleChange ({ fileList }) {
        this.fileList = fileList
        if (this.fileList[0].status === 'done') {
          this.imageUrl = fileList[0].response;
        }
      }*/
    }
  }
</script>

<style scoped>
  .clearfix{
  }
  .net{
    font-size: 18px;
    /*color: #333333;*/
    color: #000;
    font-family: 'Arial Negreta', 'Arial Normal', 'Arial';
    float: left;
    margin-left: 45%;
    font-weight: 900;
  }
  .import{
    color: #666666;
    font-size: 16px;
    font-family: 'Arial Normal', 'Arial';
    float: right;
  }
  .font_total,.foot{
    width: 47%;
    margin: 0 auto;
    /*border:1px solid blue;*/
  }
  .foot{
    margin-top: 20px;
    color: rgba(24, 144, 255, 1);;
  }
  .font_total p{
    font-size: 14px;
    color: #999999;
    text-align: left;
    margin: 0;
  }
  hr{
    border: 0.5px solid #cccccc;
    margin-top: 10px;
  }
</style>

<style lang="scss">
  .ant-upload.ant-upload-drag{
    width: 47%;
    height: 200px;
    margin: 40px auto 10px auto;
  }
  .ant-upload-text{
    font-family: 'Microsoft YaHei Regular', 'Microsoft YaHei';
    font-weight: 400;
    font-style: normal;
    font-size: 12px!important;
    color: #666666!important;
    line-height: 18px;
  }


</style>