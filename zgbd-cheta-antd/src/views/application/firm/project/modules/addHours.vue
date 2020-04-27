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
            label="工作项名称:"
            :labelCol="labelColContent"
          >
            <a-select
              showSearch
              placeholder="请输入任务名称进行搜索:"
              optionFilterProp="children"
              @change="handleChange"
              :filterOption="filterOption"
              v-decorator="[ 'taskId', { rules: [{ required: true, message: '请选择任务!' }] }]"
            >
              <a-select-option v-for="item in nameList" :value="`${item.id}`">{{ item.projectName}} / {{ item.name}}</a-select-option>
            </a-select>

          </a-form-item>
        </a-col>
        <a-col :span="5" :xs="24" :sm="24" :md="5" :xl="5">
          <a-form-item
            class="cheta-hours-lable"
            :labelCol="labelCol"
          >
            <p>预估工时</p>
            <div class="cheta-block">
              <p v-if="detailObject.hours">{{ detailObject.hours }}<span>小时</span></p>
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
            <p v-if="detailObject.remainHours>0">{{detailObject.remainHours}}<span>小时</span></p>
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
            :labelCol="labelColContent1"
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
  import {taskUserList,taskItemEdit,taskDetail} from '@/views/application/firm/project/api/api'
  import pick from 'lodash.pick'
  export default {
    name: 'AddHours',
    components: { ATextarea },
    data() {
      return {
        detailObject: {
          remainHours:0,
        },
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
          xs: { span: 5 },
          sm: { span: 5 },
        },
        labelColContent1: {
          xs: { span: 4 },
          sm: { span: 4 },
        },
        nameList: [],
        item: {},
      }
    },
    methods: {
      moment,
      handleOk () {
        const that = this
        // 触发表单验证
        this.form.validateFields((err, values) => {
          if (!err) {
            let formData = Object.assign(this.item, this.model,values);
            that.nameList.forEach(item=>{
              if(item.id === formData.taskId){
                formData.projectId = item.projectId
              }
            })
            formData.startTime = formData.startTime.format('YYYY-MM-DD HH:mm:ss')
            taskItemEdit(formData).then((res)=>{
              if(res.success){
                that.$message.success(res.message);
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
        var $this = this
        // this.remainHours = parseInt(this.detailObject.hours) - parseInt(this.detailObject.taskItem[0].hours)
        taskUserList().then((res)=>{
          $this.nameList =res.result
        })
      },
      filterOption(input, option) {
        return (
          option.componentOptions.children[0].text.toLowerCase().indexOf(input.toLowerCase()) >= 0
        );
      },
      handleChange (value) {
        var param = {
          id: value
        }
        var $this = this
        taskDetail(param).then((res)=>{
          $this.detailObject = res.result
          if ($this.detailObject.hours) {
            if ($this.detailObject.taskItem) {
              var total = 0
              $this.detailObject.taskItem.forEach(item =>{
                total += parseInt(item.hours)
              })
              $this.detailObject.remainHours = parseInt($this.detailObject.hours) - total
            }
          }
        })
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