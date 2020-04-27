<template>
  <a-modal
    width="906px"
    height="362px"
    v-model="visible"
    @ok="handleOk"
    @cancel="close"
    class="cheta-confirm"
  >
    <a-form
      class="ant-advanced-search-form"
      :form="form"
      @submit="handleSearch"
    >
      <a-row :gutter="24">
        <a-col :span="12" :xs="24" :sm="24" :md="12" :xl="12">
          <a-form-item v-bind="formItemLayout">
            <a-card :bordered="false" class="cheta-report-card cheta-m-10" hoverable  bodyStyle="border: 1px solid #e6e6e6;borderTopWidth: 0px;">
              <div class="cheta-report-bgimg" alt="example" slot="cover">
                <img :src="reportObject.coverImage" style="padding:68px 63px 81px 60px;  width: 398px;height: 305px;"/>
              </div>
              <a-card-meta class="" style="text-align: left">
                <p slot="description" class="cheta-font-align">
                  <a-upload
                    action="../fileUpload"
                    @change="handleChange"
                    accept=".jpg, .jpeg, .png"
                    :showUploadList="false"
                  >
                    <a-button class="cheta-color">
                      <a-icon type="upload" />上传新封面
                    </a-button>
                  </a-upload>
                </p>
              </a-card-meta>
            </a-card>
          </a-form-item>
        </a-col>
        <a-col :span="12" :xs="24" :sm="24" :md="12" :xl="12">
          <div class="cheta-font-align cheta-mt-20 cheta-mb-20">
            <p class="cheta-color cheta-fontB24">确认报表信息</p>
            <p class="cheta-font14 cheta-desc-color">请您仔细检查所填写的报表信息！</p>
          </div>
          <a-form-item label="报表名称:" v-bind="formItemLayout">
            <a-input placeholder="请输入报表名称" v-model="reportObject.name"/>
          </a-form-item>
          <a-form-item label="报表类型:" v-bind="formItemLayout">
            <a-input placeholder="请输入报表类型" v-model="reportObject.reportType.text" :disabled="true"/>
          </a-form-item>
          <a-form-item label="备注:" v-bind="formItemLayout1">
            <a-textarea :rows="4" placeholder="请输入备注信息" v-model="desc"/>
          </a-form-item>
        </a-col>
      </a-row>
    </a-form>
  </a-modal>
</template>

<script>
  import {reportSystemEdit} from '../api/api'
  export default {
    name: 'Confirm',
    data() {
      return {
        visible: false,
        type: '',
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
        formItemLayout1: {
          labelCol: {
            xs: { span: 24 },
            sm: { span: 3 },

          },
          wrapperCol: {
            xs: { span: 24 },
            sm: { span: 24 },
          },
        },
        desc: '',
      }
    },
    props: {
      reportObject: {
        type:Object
      },
      columns: {
        type:Array
      }
    },
    methods: {
      showMadal() {
        this.visible = true
      },
      handleChange(info) {
        let fileList = [...info.fileList];
        fileList = fileList.slice(-2);
        var $this = this;
        fileList.map((file) => {
          if (file.response) {
            $this.reportObject.coverImage = file.response;
          }
          return null;
        });
      },
      handleOk () {
        var param= {
          "columns": JSON.stringify(this.columns),
          "menuId": this.reportObject.reportType.id,
          "coverImage": this.reportObject.coverImage,
          "description": this.desc,
          "name": this.reportObject.name,
        }
        var $this = this
        reportSystemEdit(param).then(res => {
          $this.close()
        })

      },
      close () {
        this.visible = false
      }
    }
  }
</script>
<style lang="less">
  .cheta-confirm .ant-modal-footer{
    border-top:0px solid white!important;
  }
  .ant-advanced-search-form .ant-form-item{margin-bottom: 0px!important;}
</style>

<style lang="less" scoped>
  .cheta-load-img{width:300px;height:150px;}
  .cheta-desc-color{color:rgba(204,204,204,1);}
  .cheta-report-bgimg{
    width: 398px;height: 305px;
    background-image: url('/image/firm/report/bg.png');
    background-repeat: no-repeat;
    background-size: 100%;
  }
</style>