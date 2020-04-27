<template>
  <a-modal
      title="新增"
      v-model="visible"
      @ok="handleOk"
      width="800px"
      cancelText="关闭"
      okText="提交"
      @cancel="handleCancel">
      <a-form :form="form" class="ant-advanced-search-form">
        <a-row :gutter="24">
          <a-col :span="12" :xs="24" :sm="24" :md="12" :xl="12">
            <a-form-item label="司机:" v-bind="formItemLayout">
              <a-input placeholder="请输入姓名" v-decorator="['driver', {rules: [{required: true,message: '请输入姓名!'}]}]"/>
            </a-form-item>
          </a-col>
          <a-col :span="12" :xs="24" :sm="24" :md="12" :xl="12">
            <a-form-item label="车牌号码:" v-bind="formItemLayout">
              <a-select
                :filterOption="false"
                @search="fetchUser"
                @change="handleChange1"
                :notFoundContent="fetching ? undefined : null"
                showSearch
                placeholder="请输入关键字"
                v-decorator="['vehicleId', {rules: [{required: true,message: '请输入车牌号码!'}]}]">
                <a-spin v-if="fetching" slot="notFoundContent" size="small"/>
                <a-select-option v-for="d in carData" :key="d.value">{{d.text}}</a-select-option>
              </a-select>
            </a-form-item>
          </a-col>
          <a-col :span="12" :xs="24" :sm="24" :md="12" :xl="12">
            <a-form-item label="审批人:" v-bind="formItemLayout">
              <a-input placeholder="请输入审批人" v-decorator="['approverId', {rules: [{required: true,message: '请输入审批人!'}]}]" />
            </a-form-item>
          </a-col>
          <a-col :span="12" :xs="24" :sm="24" :md="12" :xl="12">
            <a-form-item label="抄送人:" v-bind="formItemLayout">
              <a-input placeholder="请输入抄送人" v-decorator="['copyerId', {rules: [{required: true,message: '请输入抄送人!'}]}]" />
            </a-form-item>
          </a-col>
          <a-col :xs="24" :sm="24" :md="24" :xl="24">
            <a-form-item label="故障说明:" v-bind="textAreaItemLayout">
              <div style="border:1px solid #E8E8E8">
                <a-textarea placeholder="请输入故障说明,空调不制冷,刹车不灵敏等" :rows="5" v-decorator="[ 'description', {}]" style="border:0"/>
                <a-form-item v-bind="formItemLayout" style="margin-bottom: 0;margin-left: 11px;">
                  <a-upload
                    action="../fileUpload"
                    listType="picture-card"
                    :fileList="fileList"
                    @preview="handlePreview"
                    @change="handleChange"
                    accept=".jpg, .jpeg, .png"
                  >
                    <div v-if="fileList.length < 6">
                      <a-icon type="plus" />
                      <div class="ant-upload-text">Upload</div>
                    </div>
                  </a-upload>
                  <a-modal :visible="previewVisible" :footer="null" @cancel="handleCancel1">
                    <img alt="example" style="width: 100%" :src="previewImage" />
                  </a-modal>
                </a-form-item>
              </div>

            </a-form-item>
          </a-col>

        </a-row>
      </a-form>
    </a-modal>
</template>
<script>
  import pick from 'lodash.pick'
  import debounce from 'lodash/debounce';
  import { httpAction} from '@/api/manage'
  import { mixinDevice } from '@/utils/mixin.js'
  export default {
    name: 'RepairEdit',
    mixins: [mixinDevice],
    data() {
      // 模糊搜索
      this.fetchUser = debounce(this.fetchUser, 800);
      return {
        // 模糊搜索
        carData: [],
        fetching: false,

        visible: false,
        form: this.$form.createForm(this),
        model: {},
        // 上传文件
        previewVisible: false,
        previewImage: '',
        fileList:[],
        fileList1:[],
        // 修改新增
        url: {
          edit: "/dictionary/edit",
        },
        formItemLayout: {
          labelCol: {
            xs: { span: 24 },
            sm: { span: 8 },
          },
          wrapperCol: {
            xs: { span: 24 },
            sm: { span: 16 },
          },
        },
        textAreaItemLayout: {
          labelCol: {
            xs: { span: 24 },
            sm: { span: 4 },
          },
          wrapperCol: {
            xs: { span: 24 },
            sm: { span: 20 },
          },
        },
        repairId: ''
      }
    },
    props: {
      data: {
        type: Array,
        default: () => {}
      }
    },
    methods: {
      close() {
        this.$emit('close');
        this.visible = false;
      },
      add() {
        this.visible = true;
        this.edit({});
      },
      edit (record) {
        this.form.resetFields();
        this.model = Object.assign({}, record);
        this.fileList = [];
        this.fileList1 = [];
        if (record.urls) {
          record.urls.forEach((item,index) => {
            this.fileList = [{
              uid: index,
              name: '',
              status: 'done',
              url: item
            }];
            this.fileList1.push(item);
          })
        }
        this.visible = true;
        this.carData.push({value: record.vehicleId,text: record.vehicleText});
        this.repairId = record.id;
        this.$nextTick(() => {
          this.form.setFieldsValue(pick(this.model,'id','vehicleId','driver',"approverId","copyerId","description"));
        });
      },
      handleOk() {
        // 触发表单验证
        this.form.validateFields((err, values) => {
          if (!err) {
            let formData = Object.assign(this.model, values);
            var $this = this;
            var param = {
              "files": this.fileList1,
              "repair": {
                "vehicleId": formData.vehicleId,
                "driver": formData.driver,
                "approverId": formData.approverId,
                "copyerId": formData.copyerId,
                "description": formData.description,
                "userId":null
              }
            }
            var httpurl = '/application/car/repair/insert'
            if (this.repairId) {
              param.repair.id = this.repairId;
              httpurl = '/application/car/repair/update';
            }
            httpAction(httpurl, param, 'post').then((res) => {
              if (res.success) {
                $this.$message.success(res.message);
                $this.$emit('getData', true);
              } else {
                $this.$message.warning(res.message);
              }
            }).finally(() => {
              $this.close();
            })
          }
        })
      },
      handleCancel() {
        this.close()
      },
      // 上传文件
      handleCancel1() {
        this.previewVisible = false
      },
      handlePreview(file) {
        this.previewImage = file.url || file.thumbUrl
        this.previewVisible = true
      },
      handleChange({fileList}){
        this.fileList = fileList
        var $this = this;
        this.fileList.forEach(item => {
          if (item.status === 'done') {
            $this.fileList1.push(item.response);
          }
        });
        this.fileList1 = Array.from(new Set(this.fileList1));
      },
      fetchUser (value) {
        this.fetching = true
        this.carData = []
        fetch('http://terrybg.com/system/application/car/vehicle/getCarBy?registration=' + value)
          .then(response => response.json())
          .then(data=>{
            if(data.success){
              data.result.forEach(item=> {
                this.carData.push({
                  value: item.id,
                  text: item.registration
                });
              })
            }
          })
      },
      handleChange1 (value) {
        Object.assign(this, {
          value,
          data: [],
          fetching: false,
        })
      }
    },
  }
</script>

<style lang="less" scoped>
  /*新增表单modal*/
  .ant-advanced-search-form {
    padding: 23px;
    border: 1px solid #d9d9d9;
    border-radius: 6px;
  }
  /*上传图片*/
  .ant-upload-list-picture-card .ant-upload-list-item {
    float: left;
    width: 80px;
    height: 80px;
    margin: 40px 20px 0 40px;
  }
  /*.ant-upload.ant-upload-select-picture-card{*/
    /*margin-left: 11px;*/
  /*}*/

</style>
<style lang="scss">




</style>