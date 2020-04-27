<template>
  <a-modal
    title="编辑文档"
    width="99%"
    :visible="visible"
    @ok="handleOk"
    @cancel="handleCancel"
    cancelText="关闭"
    style="height: 100%;top: 1%;">
      <a-form :form="form">
        <a-form-item
          style="width: 90%"
          label="标题">
          <a-input placeholder="请输入标题" v-decorator="['name', {}]"/>
        </a-form-item>
        <a-form-item
          style="width: 90%;"
          label="内容" >
          <mavon-editor ref="md" style="min-height: 600px" v-model="content" @imgAdd="$imgAdd" />
        </a-form-item>
      </a-form>

  </a-modal>
</template>

<script>

  import {postAction} from '@/api/manage'
  import pick from 'lodash.pick'
  import { axios } from '@/utils/request'

  export default {
    name: 'DocsModal',
    data () {
      return {
        confirmLoading: true,
        visible: false,
        labelCol: {
          xs: { span: 24 },
          sm: { span: 5 },
        },
        wrapperCol: {
          xs: { span: 24 },
          sm: { span: 16 },
        },
        content: '',
        form: this.$form.createForm(this),
        id: '',
        parentId: ''
      }
    },
    methods: {
      edit(record){
        this.visible = true;
        this.content = record.content;
        this.parentId = record.parentId;
        this.id = record.id;
        this.$nextTick(() => {
          this.form.setFieldsValue(pick(record,'name'))
        });
      },
      handleOk(){
        // 触发表单验证
        const that = this;
        this.form.validateFields((err, values) => {
          values.content = this.content;
          values.parentId = this.parentId;
          values.id = this.id;
          postAction('/application/docs/add', values).then((res) => {
            if (res.code === 400) {
              that.visible = false;
              if(res.success){
                that.$message.success(res.message);
              }else{
                that.$message.warning(res.message);
              }
              this.$emit('getData');
            }
          })
        });
      },
      handleCancel(){
        this.visible = false;
      },
      $imgAdd(pos, $file){
        var formdata = new FormData();
        formdata.append('file', $file);
        axios({
          url: '../fileUpload',
          method: 'post',
          data: formdata,
          headers: { 'Content-Type': 'multipart/form-data' },
        }).then((url) => {
          this.$refs.md.$img2Url(pos, url);
        })
      }
    }
  }
</script>

<style scoped>

</style>