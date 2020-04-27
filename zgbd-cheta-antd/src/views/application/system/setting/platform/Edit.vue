<template>
  <div>
    <a-modal
      :title="title"
      v-model="visible"
      @ok="handleOk"
      width="100%"
      cancelText="取消"
      okText="提交"
      style="height: 100%;top: 1%;">
      <a-form :form="form" class="ant-advanced-search-form">
        <a-row :gutter="24">
          <a-col :span="24" :xs="24" :sm="24" :md="22" :xl="22">
            <a-form-item label="类型:" v-bind="formItemLayout">
              <a-select  @change="handleChange" placeholder="Please select"  v-decorator="['type', {rules: [{required: true,message: '你输入的类型不正确请检查!'}]}]">
                <a-select-option value="公告" style="width: 100%;">公告</a-select-option>
                <a-select-option value="消息" style="width: 100%;">消息</a-select-option>
              </a-select>
            </a-form-item>
          </a-col>
          <a-col>
            <a-col v-if="type=='公告'" :span="24" :xs="24" :sm="24" :md="22" :xl="22">
              <a-form-item label="标题:" v-bind="formItemLayout">
                <a-input
                  placeholder="请输入标题"
                  v-decorator="['title', {rules: [{required: true,message: '你输入的标题不正确请检查!'}]}]"/>
              </a-form-item>
            </a-col>
            <a-col :span="24" :xs="24" :sm="24" :md="22" :xl="22">
              <a-form-item label="过期时间:" v-bind="formItemLayout">
                <a-date-picker @change="onChange" v-decorator="['deadline', {rules: [{required: true,message: '你输入的时间不正确请检查!'}]}]"/>
              </a-form-item>
            </a-col>
            <a-col :span="24" :xs="24" :sm="24" :md="22" :xl="22">
              <a-form-item label="内容:" v-bind="formItemLayout" v-if="type=='公告'">
                <mavon-editor ref="md" v-model="content" style="min-height: 600px"  @imgAdd="$imgAdd" />
              </a-form-item>
              <a-form-item v-else label="内容:" v-bind="formItemLayout">
                <a-textarea
                  style="min-height: 600px"
                  placeholder="输入的内容不超过50个字"
                  v-decorator="['content', {rules: [
                  {max: 50, message: '内容不超过50字!'},{required: true,message: '请输入内容!'}]}]"/>
              </a-form-item>
            </a-col>
          </a-col>
        </a-row>
      </a-form>
    </a-modal>
  </div>
</template>
<script>

  // import { httpAction, postAction } from '@/api/manage'
  import { axios } from '@/utils/request'
  import moment from 'moment';
  import pick from 'lodash.pick'
  export default {
    name: 'infoEdit',
    data() {
      return {
        visible: false,
        type: '公告',
        form: this.$form.createForm(this),
        model: {},
        content:'',
        formItemLayout: {
          labelCol: {
            xs: { span: 3 },
            sm: { span: 3 }
          },
          wrapperCol: {
            xs: { span: 21 },
            sm: { span: 21 }
          }
        },
        id: '',
      }
    },
    props: {
      record: {
        type: Object,
        default: () => {
        }
      }
    },
    methods: {
      moment,
      edit(record) {
        this.visible = true
        this.title = '编辑账号'
        this.id = record.id
        this.type=record.type
        this.model={
          title:record.title,
          type:record.type,
          content:record.content,
          deadline:moment(record.deadline,'YYYY-MM-DD'),
        }
        this.content = record.content;
        this.$nextTick(() => {
          this.form.setFieldsValue(pick(this.model,'title','deadline',"type","content",))
        });

      },

      add() {
        this.visible = true
        this.title = '新增平台'
        this.empty()

      },
      handleCancel(){
        this.visible = false;
      },
      handleChange(value){
        this.type = value;
      },
      close() {
        this.$emit('close')
        this.visible = false
        // this.empty()
      },
      empty(){
        this.id=''
        this.type='公告'
        let fieldsVal=pick({
          title:'',
          deadline:'',
          type:'公告',
          content:''
        },'title','deadline',"type","content")
        this.$nextTick(() => {
          this.form.setFieldsValue(fieldsVal)
        });
        this.content = '';
      },
      handleOk() {
        this.form.validateFields((err, values) => {
          console.log(this.model,values)
          if (!err) {
            let formData = Object.assign(this.model, values);
            var param={
              deadline:formData.deadline.format('YYYY-MM-DD'),
              type:formData.type,
            }
            if(formData.type=='公告'){
              param.title=formData.title;
              param.content = this.content;
            } else {
              param.content = formData.content;
            }
            var $this = this;
            var httpurl = 'http://49.234.21.239:8080/system/application/notice/edit'
            if($this.id){
              param.id=$this.id
              httpurl = 'http://49.234.21.239:8080/system/application/notice/edit';
            }
            axios.post(httpurl, param).then((res) => {
              if (res.success) {
                $this.$message.success(res.message);
                $this.$emit('getData')

              } else {
                $this.$message.warning(res.message);
              }
            }).finally(() => {
              $this.close();
            })
          }
        })
      },
      $imgAdd(pos, $file){
        // 第一步.将图片上传到服务器.
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

<style lang="less" scoped>
  .switch_size1 {
    width: 62px;
    height: 24px;
  }

  .biaoji {
    color: red;
  }
  .ant-calendar-picker{
    width: 100%;
  }
</style>