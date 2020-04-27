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
        <a-form-item
          style="width: 100%"
          label="">
          商品名称:<a-input placeholder="请输入商品名称" v-decorator="[ ]" :readOnly="disableSubmit"/>
          商品分类:
          <a-select
            placeholder="请选择商品分类"
            v-decorator="[]"
            v-model="parentData"
            :readOnly="disableSubmit" >
          </a-select>
          商品价格:<a-input placeholder="请输入商品价格" v-decorator="[ ]" :readOnly="disableSubmit"/>
          商品库存:<a-input placeholder="请输入商品库存" v-decorator="[ ]" :readOnly="disableSubmit"/>
        </a-form-item>


        <a-form-item
          style="width: 100%"
          label="商品规格">
          <a-button type="small">选择规格</a-button> <a-button type="small">关闭规格</a-button>
        </a-form-item>


        <a-form-item
          label="商品图片"
          hasFeedback
        >
          <a-upload
            action="../fileUpload"
            listType="picture"
            class="upload-list-inline"
          >
            <div >
              <a-button>
                <a-icon type="upload" /> upload
              </a-button>
            </div>
          </a-upload>
        </a-form-item>

        <a-form-item
          style="width: 100%"
          label="商品详情">
          <div class="edit_container">
            <quill-editor
              v-model="content"
              ref="myQuillEditor"
              :options="editorOption"
              @blur="onEditorBlur($event)"
              @focus="onEditorFocus($event)"
              @change="onEditorChange($event)">
            </quill-editor>
          </div>
        </a-form-item>
      </a-form>
    </a-spin>
  </a-modal>
</template>

<script>
  import { quillEditor } from "vue-quill-editor"; //调用编辑器
  import quillConfig from '../../../../../config/quill-config.js'
  import 'quill/dist/quill.core.css';
  import 'quill/dist/quill.snow.css';
  import 'quill/dist/quill.bubble.css';
  import pick from 'lodash.pick'
  export default {
    components: {
      quillEditor
    },
    data() {
      return {
        content: '',
        str: '',
        visible: false,
        editorOption: quillConfig,
        confirmLoading: false,
        disableSubmit: false,
        form: this.$form.createForm(this),
      }
    },
    methods: {
      add () {
        this.edit();
      },
      edit (record) {
        this.form.resetFields();
        this.model = Object.assign({}, record);
        this.visible = true;
      },
      close () {
        this.disableSubmit = false;
        this.visible = false;
        this.$emit('close');
      },
      handleOk () {

      },
      handleCancel () {
        this.close()
      },
      onEditorReady(editor) { // 准备编辑器

      },
      onEditorBlur(){}, // 失去焦点事件
      onEditorFocus(){}, // 获得焦点事件
      onEditorChange(){}, // 内容改变事件
      // 转码
      escapeStringHTML(str) {
        str = str.replace(/&lt;/g,'<');
        str = str.replace(/&gt;/g,'>');
        return str;
      }
    },
    computed: {
      editor() {
        return this.$refs.myQuillEditor.quill;
      },
    },
    mounted() {
      let content = '';  // 请求后台返回的内容字符串
      this.str = this.escapeStringHTML(content);
    },
  }
</script>

<style scoped>
  .quill-editor{height: 260px;margin-bottom: 60px;}
</style>