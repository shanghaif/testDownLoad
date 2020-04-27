<template>
  <a-modal
    title="登记工时记录"
    width="500px"
    :visible="visible"
    @ok="handleOk"
    @cancel="close"
    cancelText="取消"
    class="cheta-project-hours"
    >
    <a-form :form="form">
      <a-row :gutter="24">
        <a-col :span="24" :xs="24" :sm="24" :md="24" :xl="24">
          <a-form-item
            class="cheta-project-name"
            >
            <p>工作项名称</p>
            <p class="cheta-project-name">{{ detailObject.name}}</p>
          </a-form-item>
        </a-col>
        <a-col :span="5" :xs="24" :sm="24" :md="5" :xl="5">
          <a-form-item
            class="cheta-hours-lable"
            :labelCol="labelCol"
          >
            <p>预估工时</p>
            <div class="cheta-block">
              <p v-if="detailObject.hours">{{detailObject.hours}}<span>小时</span></p>
              <p v-else>-</p>
            </div>
          </a-form-item>
        </a-col>
        <a-col :span="12" :xs="24" :sm="24" :md="12" :xl="12">
          <a-form-item
            class="cheta-hours-lable"
            :labelCol="labelCol"
           >
            <p>剩余工时</p>
            <p v-if="remainHours > 0">{{remainHours}}<span>小时</span></p>
            <p v-else>0<span>小时</span></p>
          </a-form-item>
        </a-col>
        <a-col :span="12" :xs="24" :sm="24" :md="12" :xl="12">
          <a-form-item
            label="开始时间:"
            v-bind="formItemLayout">
            <a-date-picker
              placeholder="请选择开始时间"
              v-decorator="['startTime',
          { rules: [{ required: true, message: '请输入日期!' }] }
        ]"
            />
          </a-form-item>
        </a-col>
        <a-col :span="12" :xs="24" :sm="24" :md="12" :xl="12">
          <a-form-item
            label="消耗时间:"
            v-bind="formItemLayout">
            <a-input  addonAfter="小时" placeholder="请输入数字" v-decorator="[ 'hours', { rules: [{ required: true, message: '请输入日期!' }] }]"/>
            <!--<a-input v-decorator="[ 'regdate', {}]" :readOnly="disableSubmit"/>-->
          </a-form-item>
        </a-col>

        <a-col :span="24" :xs="24" :sm="24" :md="24" :xl="24">
          <a-form-item
            label="工作内容:"
            :labelCol="labelColContent"
            >
            <a-textarea :rows="4" placeholder="在这期间我做了什么" v-decorator="[ 'name', { rules: [{ required: true, message: '请输入日期!' }] }]" ></a-textarea>
          </a-form-item>
        </a-col>
      </a-row>
    </a-form>
  </a-modal>
</template>
<script>
  import moment from 'moment'
  import ATextarea from 'ant-design-vue/es/input/TextArea'
  import {taskItemEdit} from '@/views/application/firm/project/api/api'
  import pick from 'lodash.pick'
  export default {
    name: 'AddHours',
    components: { ATextarea },
    data() {
      return {
        visible: false,
        model: {},
        form: this.$form.createForm(this),
        formItemLayout: {
          labelCol: {
            xs: { span: 24 },
            sm: { span: 8 },

          },
          wrapperCol: {
            xs: { span: 24 },
            sm: { span: 24 },
          },
        },
        labelCol: {
          xs: { span: 4 },
          sm: { span: 4 },
        },
        labelColContent: {
          xs: { span: 4 },
          sm: { span: 4 },
        },
        remainHours:0,
        item: {}
      }
    },
    props: {
      detailObject: {
        type: Object
      }
    },
    created () {
      var total = 0
      this.detailObject.taskItem.forEach(item =>{
        total += parseInt(item.hours)
      })
      this.remainHours = parseInt(this.detailObject.hours) - total
    },
    methods: {
      moment,
      handleOk () {
        const that = this
          // 触发表单验证
          this.form.validateFields((err, values) => {
            if (!err) {
              let formData = Object.assign(this.item, this.model,values);
              formData.taskId = that.detailObject.id
              formData.projectId = that.detailObject.projectId
              formData.startTime = formData.startTime.format('YYYY-MM-DD HH:mm:ss')
              console.log(formData)
              taskItemEdit(formData).then((res)=>{
                console.log(res)
                if(res.success){
                  that.$message.success(res.message);
                  that.$emit('refreshlData');
                }else{
                  that.$message.warning(res.message);
                }
              }).finally(() => {
                that.close();
              })
            }
          })
        },
      close () {
        this.visible = false
      },
      showModel () {
        this.visible = true
        this.form.setFieldsValue({
          startTime: null,
          hours: null,
          name: null,
        });
      },
      edit (item) {
        this.item.id = item.id
        item.startTime = moment(item.startTime, 'YYYY-MM-DD HH:mm:ss')
        this.model = Object.assign({}, item);
        this.visible = true
        let fieldsVal = pick(this.model,'startTime','hours','name');
        this.$nextTick(() => {
          this.form.setFieldsValue(fieldsVal)
        });
      }
    }
  }
</script>
<style lang="less">
  .cheta-project-hours .ant-form-item-control{line-height: 28px!important;}
</style>

<style lang="less" scoped>
  .cheta-project-name p:first-child{font-size: 14px;color: rgba(0, 0, 0, 0.85);}
  .cheta-project-name p:last-child{border-bottom: 1px solid #e8e8e8;}
  .cheta-hours-lable p:first-child{font-size: 12px;color: #999999;}
  .cheta-hours-lable p:last-child{font-size: 28px;color: #000000}
  .cheta-hours-lable span{color: #333333;font-size: 14px;}
</style>