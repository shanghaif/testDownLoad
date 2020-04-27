<template>
  <div class="net">
    <a-modal
      v-model="visible"
      @ok="handleOk"
      @cancel="handleCancel"
      cancelText="关闭"
      okText="提交"
      width="800px"
      height="556px"
      :closable="false"
    >
      <div class="clearfix">
        <div v-if="isShow">
          <div class="net">安装登记</div><div class="import" @click="isShow = !isShow" style="cursor: pointer">批量导入</div>
        </div>
        <div v-else>
          <div class="net">批量导入</div><div class="import" @click="isShow = !isShow" style="cursor: pointer">新增填写</div>
        </div>
      </div>
      <div v-if="isShow">
        <hr>
        <a-form :form="form" class="ant-advanced-search-form">
          <a-row :gutter="24">
            <a-col :span="12" :xs="24" :sm="24" :md="12" :xl="12">
              <a-form-item label="车牌号:" v-bind="formItemLayout">
                <!--<a-input addonBefore="正式" placeholder="请输入车牌号" v-decorator="['carId', {rules: [{required: true,message: '你输入的车牌号格式不正确请检查!'}]}]"/>-->
                <div>
                  <!--<a-input placeholder="请输入车牌号" v-decorator="['carId', {rules: [{required: true,message: '你输入的车牌号格式不正确请检查!'}]}]">-->
                    <!--<a-select slot="addonBefore" defaultValue=0 style="width: 70px" v-decorator="['isTemporary',{'initialValue':'0'}]">-->
                      <!--<a-select-option value=0>正式</a-select-option>-->
                      <!--<a-select-option value=1>临时</a-select-option>-->
                    <!--</a-select>-->
                  <!--</a-input>-->
                  <Search :showSearch="false" @searchChange="searchChange" :addonBefore="true"/>
                </div>
              </a-form-item>
            </a-col>
            <a-col :span="12" :xs="24" :sm="24" :md="12" :xl="12">
              <a-form-item label="自编号:" v-bind="formItemLayout">
                <a-input placeholder="请输入自编号" v-decorator="['sinceNumber']" />
              </a-form-item>
            </a-col>
            <a-col :span="12" :xs="12" :sm="24" :md="12" :xl="12">
              <a-form-item label="车辆类型:" v-bind="formItemLayout">
                <a-select
                  placeholder="请选择车辆类型"
                  width="340px"
                  v-decorator="['cartype', {rules: [{required: true,message: '你输入的类型未找到!'}]}]"
                >
                  <a-select-option v-for="item in carTypedata" :key="item.id" >{{ item.name }}</a-select-option>
                </a-select>
              </a-form-item>
            </a-col>
            <a-col :span="12" :xs="12" :sm="24" :md="12" :xl="12">
              <a-form-item label="购买日期:" v-bind="formItemLayout">
                <a-date-picker
                  placeholder="请选择日期"
                  style="width:365px"
                  @change="onChange"
                  v-decorator="['buyTime', {'initialValue':now},{rules: [{required: true,message: '请输入购买日期!'}]}]"
                />
              </a-form-item>
            </a-col>
            <a-col :span="12" :xs="12" :sm="24" :md="12" :xl="12">
              <a-form-item label="使用项目:">
                <!--<a-select
                  placeholder="请选择使用项目"
                  @change="handleChange"
                  v-decorator="['projectId', {rules: [{required: true,message: '你输入的使用项目未找到!'}]}]"
                >
                  <a-select-option v-for="item in projectdata" :key="item.id">{{ item.name }}</a-select-option>
                </a-select>-->
                <a-cascader
                  :options="company"
                  v-decorator="['organId', {rules: [{required: true,message: '请输入公司/机构!'}]}]"
                  placeholder="Please select"/>
              </a-form-item>
            </a-col>
          </a-row>
        </a-form>
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
    </a-modal>
  </div>
</template>

<script>
  import {httpAction} from '@/api/manage'
  import { getCarType, getProject } from '@/views/application/car/api/api'
  import { axios } from '@/utils/request'
  import Search from '@views/chetaui/input/search/Index'
  import pick from 'lodash.pick'
  import moment from "moment"
  export default {
    name: 'netEdit',
    components:{
      Search
    },
    data() {
      return {
        now: [],
        company: [],
        model: {},
        visible: false,
        visible1:false,
        data1:[],
        isShow:true,
        form: this.$form.createForm(this),
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
        carTypedata: [],
        projectdata: [],
        fileList: [],
        file:{},
        uploading: false,
        carId:'',
        isTemporary:"0",
      }
    },
    props: {
      data: {
        type: Array,
        default: () => {}
      }
    },
    created () {
      getCarType().then(res => this.carTypedata = res.result)
      //getProject().then(res => this.projectdata = res.result)
      httpAction('/application/auth/base/getOrgan', {}, 'get').then(res => {
        res.result.forEach(item => {
          var result = { 'value': item.id, 'title': item.name, 'label': item.name, children: [] }
          if (item.children) {
            item.children.forEach(item1 => {
              var result1 = { 'value': item1.id, 'title': item1.name, 'label': item1.name, children: [] }
              if (item1.children) {
                item1.children.forEach(item2 => {
                  result1.children.push({
                    'value': item2.id, 'title': item2.name, 'label': item2.name
                  })
                })
              }
              result.children.push(result1)
            })
          }
          this.company.push(result)
        })
      })
    },
    methods: {
      // 搜索框
      searchChange(carId,isTemporary) {
        this.carId = carId;
        this.isTemporary=isTemporary
      },

      downloadMedel(){
        window.location.href = "http://www.zgjiuan.cn/file/excel/资产管理/保养导入模板.xls"
      },
      // 手动上传
      handleRemove(file) {
        const index = this.fileList.indexOf(file);
        const newFileList = this.fileList.slice();
        newFileList.splice(index, 1);
        this.fileList = newFileList
      },
      beforeUpload(file) {
        this.fileList = [...this.fileList, file]
        console.log(file,"0000")
        this.file = file;
        return false;

      },

      close() {
        this.$emit('close');
        this.visible = false;

        this.form.setFieldsValue({
          carId: null,
          isTemporary: "0",
          sinceNumber: null,
          cartype: [],
          buyTime: this.now,
          //projectId: []
          organId: []
        });

      },
      add(){
        this.now = moment(new Date(),'YYYY-MM-DD hh:mm:ss');
        this.visible=true
        this.model = {
          organId: [this.company[0].value, this.company[0].children[0].value],
          cartype: this.carTypedata[0].id
        }
        let fieldsVal = pick(this.model, 'organId','cartype')
        this.$nextTick(() => {
          this.form.setFieldsValue(fieldsVal)
        })
      },
      handleChange(value) {
        console.log(`selected ${value}`);
      },
      onChange(date, dateString) {
        console.log(date, dateString);
      },

      handleOk() {
        if (!this.isShow) {
          this.excelImport(this.file);
        } else {
          // 触发表单验证
          this.form.validateFields((err, values) => {
            console.log(this.model,values)
            if (!err) {
              let formData = Object.assign(this.model, values);
              var $this = this;
              var param = {
                registrationNo: this.carId,
                isTemporary: this.isTemporary,
                sinceNumber: formData.sinceNumber,
                cartypeId: formData.cartype[0],
                buyTime: formData.buyTime.format('YYYY-MM-DD'),
                useprojectId: formData.organId[formData.organId.length - 1]
              }
              // param.registrationNo=this.carId
              console.log("param.cartypeId:",param.cartypeId);
              var httpurl = '/application/car/vehiclenetwork/addvehiclenetwork'
              axios.post(httpurl, param).then((res) => {
                if (res.success) {
                  $this.$message.success(res.message);
                  $this.$emit('reload')
                } else {
                  $this.$message.warning(res.message);
                }
              }).finally(() => {
                $this.close();
              })
            }
          })
        }
      },
      excelImport (file) {
        this.uploading = true
        var $this = this;
        var param = new FormData();
        param.append("file", file);
        console.log(param)
        httpAction('/application/car/netin/importExcel', param,'post').then(res => {
          console.log(res)
          if (res.success) {
            this.uploading = false
            $this.$message.success(res.message);
          } else {
            this.uploading = false
            $this.$message.warning(res.message)
            this.visible1=true
            this.data1=res.result
          }
        })
      },
      handleCancel() {
        this.close()
      },
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