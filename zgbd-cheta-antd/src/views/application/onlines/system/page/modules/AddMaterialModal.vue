<template>
  <a-modal
    :title="title"
    v-model="visible"
    cancelText="关闭"
    width="750px"
    @ok="save"
  >
    <a-spin :spinning="spinning">
      <a-form :form="form">
        <a-form-item
          label="项目名称"
          :labelCol="labelCol"
          :wrapperCol="wrapperCol" >
          <a-input v-decorator="[ 'projectName', validatorRules.name]" :readOnly="disableSubmit" placeholder="请输入项目名称"/>
        </a-form-item>

        <a-form-item
          label="路径"
          :labelCol="labelCol"
          :wrapperCol="wrapperCol" >
          <a-input v-decorator="[ 'url', validatorRules.url]" :readOnly="disableSubmit" placeholder="请输入路径"/>
        </a-form-item>

        <a-form-item
          label="描述"
          :labelCol="labelCol"
          :wrapperCol="wrapperCol" >
          <a-input v-decorator="[ 'remark']" :readOnly="disableSubmit" placeholder="请输入描述"/>
        </a-form-item>

        <a-form-item
          label="分类"
          :labelCol="labelCol"
          :wrapperCol="wrapperCol">
          <a-tag closable v-for="tag in tagList" :color="tag.color" @close="tagList.splice(index, 1)">
            {{ tag.name }}
          </a-tag>
          <a-dropdown :trigger="['click']" @visibleChange="visibleChange">
            <a-icon @click="showTag" type="plus-circle" theme="twoTone" class="cheta-event" style="font-size: 15px;"/>
            <Avatar v-if="tagVisible" :tags="tags" :pageType="pageType" :tagList="tagList" @showTag="showTag" @doUser="tagVisible = !tagVisible" ref="avatar" slot="overlay"/>
          </a-dropdown>
        </a-form-item>

        <a-form-item
          label="数据"
          :labelCol="labelCol"
          :wrapperCol="wrapperCol"
        >
          <a-upload
            :action="filePath"
            listType="picture-card"
            :fileList="fileList"
            @change="handleChange"
          >
            <div v-if="fileList.length < 1">
              <a-icon type="plus" />
              <div class="ant-upload-text">上传</div>
            </div>
          </a-upload>
        </a-form-item>

        <a-form-item
          style="display:none"
          label="描述"
          :labelCol="labelCol"
          :wrapperCol="wrapperCol" >
          <a-input v-decorator="['id']" readOnly="true"/>
          <a-input v-decorator="[projectImg]" readOnly="true"/>
          <a-input v-decorator="[tagId]" readOnly="true"/>
        </a-form-item>
      </a-form>
    </a-spin>
  </a-modal>
</template>

<script>
  import {postAction} from "@/api/manage";
  import Avatar from './Avatar'
  import configPath from '@/views/application/onlines/config/config.js'
  import pick from 'lodash.pick'
  export default {
    name: "addModal",
    components: {Avatar},
    data () {
      return {
        form: this.$form.createForm(this),
        validatorRules:{
          systemCode:{rules: [{ required: true, message: '请输入系统码!' }]},
          name:{rules: [{ required: true, message: '请输入名称!' }]},
          url:{rules: [{ required: true, message: '请输入路径!' }]},
        },
        labelCol: {
          xs: { span: 24 },
          sm: { span: 5 },
        },
        wrapperCol: {
          xs: { span: 24 },
          sm: { span: 16 },
        },
        disableSubmit:false,
        title : '新增物料',

        pageType:'2',
        projectImg:'projectImg',
        tagId:'tagId',
        tagVisible: false,
        spinning: false,
        filePath : configPath.fileUploadPath,
        visible: false,
        api : {
          insertUpdate : "/application/online/component/insertUpdate"
        },
        defaultImg :configPath.not_img,
        fileList: [{
          uid: '-1',
          name: "xxx.png",
          status: 'done',
          url: 'http://file.terrybg.com/cheta/e8ed446864d643429837b507ee6b08be.jpg',
        }],
      }
    },
    props: {
      tags: {
        type: Array
      },
      tagList: {
        type: Array
      },
    },
    methods:{
      visibleChange () {
      },
      showTag () {
        this.tagVisible = true;
      },
      add(){
        let that = this;
        that.visible = true;
        that.form.resetFields();
        that.tagList = [];
        if(that.tags.length != 0){
          that.tagList.push(that.tags[0])
        }
      },
      edit(item){
        var $that = this;
        $that.visible = true;
        $that.$nextTick(() => {
          $that.form.setFieldsValue(pick(item,'id','projectName','url','remark'));
        });
        $that.tagList = [{name:item.tagName,color:item.color,id:item.tagId}];
        $that.fileList[0].url = item.projectImg;
      },
      check(){
        let $this = this;
        if($this.tagList.length === 0){
          this.tagVisible = true
          $this.$message.warning("请选择类型!");
          return;
        }/*
          if($this.fileList.length === 0){
              $this.$message.warning("请选择图片!");
              return;
          }*/
      },
      //保存
      save() {
        let $this = this;
        //检验数据
        $this.check();
        var field  = {};
        // field[$this.projectImg] = $this.fileList[0].url;
        field[$this.tagId] = $this.tagList[0].id;
        $this.form.setFieldsValue(field);
        // 触发表单验证
        $this.form.validateFields((err, values) => {
          if (!err) {
            $this.spinning = true;
            values['pageType'] = $this.pageType;
            postAction($this.api.insertUpdate,values).then(res => {
              if(res.success){
                $this.visible = false;
                $this.tagList.splice(0,1)
                $this.$emit('getComList', {pageType:$this.pageType});
                $this.$message.success(res.message);
              }else{
                $this.$message.error(res.message);
              }
            }).finally(() => {
              $this.spinning = false;
            })
          }
        })
      },
      handleChange ({ fileList }) {
        this.fileList = fileList
        if (this.fileList[0].status === 'done') {
          this.fileList[0].url = fileList[0].response;
        }
      },
    }
  }
</script>

<style scoped>

</style>