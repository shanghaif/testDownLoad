<template>
  <div>
    <a-modal
      :title="title"
      v-model="visible"
      @ok="handleOk"
      width="800px"
      cancelText="取消"
      okText="提交">
      <a-form :form="form" class="ant-advanced-search-form">
        <a-row :gutter="24">
          <a-col :span="12" :xs="24" :sm="24" :md="12" :xl="12">
            <a-form-item label="登录账号:" v-bind="formItemLayout">
              <a-input
                placeholder="请输入登录账号"
                v-decorator="['loginName', {rules: [{required: true,message: '你输入的登录账号不正确请检查!'}]}]"/>
            </a-form-item>
          </a-col>
          <a-col :span="12" :xs="24" :sm="24" :md="12" :xl="12">
            <a-form-item label="登录密码:" v-bind="formItemLayout">
              <a-input
                placeholder="请输入登录密码"
                type="password"
                v-decorator="['password', {rules: [{ min: 5,message: '密码最少5位!'},{ required: true,message: '你输入的登录密码不正确请检查!'}]}]"/>
            </a-form-item>
          </a-col>
          <a-col :span="12" :xs="24" :sm="24" :md="12" :xl="12">
            <a-form-item label="姓名:" v-bind="formItemLayout">
              <a-input
                placeholder="请输入姓名"
                v-decorator="['nickName', {rules: [{required: true,message: '你输入的姓名不正确请检查!'}]}]"/>
            </a-form-item>
          </a-col>
          <a-col :span="12" :xs="24" :sm="24" :md="12" :xl="12">
            <a-form-item label="性别:" v-bind="formItemLayout">
              <a-radio-group v-model="value">
                <a-radio :value="1">男</a-radio>
                <a-radio :value="2">女</a-radio>
              </a-radio-group>
            </a-form-item>
          </a-col>
          <a-col :span="12" :xs="24" :sm="24" :md="12" :xl="12">
            <a-form-item label="权限归属:" v-bind="formItemLayout">
              <a-cascader
                :options="company"
                :changeOnSelect="true"
                expandTrigger="hover"
                v-decorator="['organId', {rules: [{required: true,message: '请输入公司/机构!'}]}]"
                placeholder="Please select"/>
            </a-form-item>
          </a-col>
          <a-col :span="12" :xs="24" :sm="24" :md="12" :xl="12">
            <a-form-item label="职位:" v-bind="formItemLayout">
              <a-cascader
                :options="options"
                v-decorator="['positionId', {rules: [{required: true,message: '请输入公司/机构!'}]}]"
                placeholder="Please select"/>
            </a-form-item>
          </a-col>
          <a-col :span="12" :xs="24" :sm="24" :md="12" :xl="12">
            <a-form-item label="账号状态:" v-bind="formItemLayout">
              <a-switch class="switch_size1" v-model="checked"/>
            </a-form-item>
          </a-col>
        </a-row>
      </a-form>
    </a-modal>
  </div>
</template>
<script>
  import { httpAction, putAction } from '@/api/manage'
  import pick from 'lodash.pick'
  export default {
    name: 'infoEdit',
    data() {
      return {
        visible: false,
        title: '',
        options: [],
        name: '',
        value: 1,
        gender: '',
        company: [],
        company1: [],
        department: [],
        department1: [],
        checked: true,
        status: '',
        form: this.$form.createForm(this),
        model: {},
        detailobject: {},
        formItemLayout: {
          labelCol: {
            xs: { span: 24 },
            sm: { span: 8 }
          },
          wrapperCol: {
            xs: { span: 24 },
            sm: { span: 16 }
          }
        },
        id: ''
      }
    },
    props: {
      record: {
        type: Object,
        default: () => {
        }
      }
    },
    created() {
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
      httpAction('/application/auth/base/getPosition', {}, 'get').then(res => {
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
          this.options.push(result)
        })
      })
    },
    methods: {
      edit(record) {
        this.visible = true
        this.title = '编辑账号'
        this.id = record.id
        var $this = this
        httpAction('/application/auth/user/getDetail?userId=' + record.id, {}, 'get').then(res => {
          if (res.success) {
            this.model = Object.assign(res.result.result)
            if (this.model.status === 'Y') {
              this.checked = true
            }
            else {
              this.checked = false
            }
            $this.model.organId = this.findParent(this.model.organId)
            $this.model.positionId = this.findParent(this.model.positionId)
            let fieldsVal = pick(this.model, 'loginName', 'nickName', 'password', 'gender', 'organId', 'positionId')
            this.$nextTick(() => {
              this.form.setFieldsValue(fieldsVal)
            })
          }
          else {
            this.$message.warning(res.message)
          }
        })
      },
      findParent(childrenId) {
        var list
        this.options.forEach(item => {
          if (item.children) {
            item.children.forEach(inner => {
              if (inner.children) {
                inner.children.forEach(root => {
                  if (root.value == childrenId) {
                    list = [item.value, inner.value, root.value]
                  }
                })
              }
              if (!list) {
                if (inner.value == childrenId) {
                  list = [item.value, inner.value]
                }
              }
            })
          }
          if (!list) {
            if (item.value == childrenId) {
              list = [item.value]
            }
          }
        })
        return list
      },
      add() {
        this.visible = true
        this.title = '新增账号'
        this.empty()
        var $this = this;
        this.model = {
          organId: [this.company[0].value, this.company[0].children[0].value],
          positionId: [this.options[0].value, this.options[0].children[0].value]
        }
        this.checked = true
        let fieldsVal = pick(this.model, 'organId', 'positionId')
        this.$nextTick(() => {
          this.form.setFieldsValue(fieldsVal)
        })
      },
      empty() {
        this.id = ''
        let fieldsVal = pick({
          loginName: '',
          nickName: '',
          password: '',
          gender: '男',
          status: 'N',
          organId: '',
          positionId: ''
        }, 'loginName', 'nickName', 'password', 'gender', 'status', 'organId', 'positionId')
        this.$nextTick(() => {
          this.form.setFieldsValue(fieldsVal)
        })
      },
      close() {
        this.$emit('close')
        this.visible = false
        this.empty()
      },
      handleOk() {
        if (this.value == 1) {
          this.gender = '男'
        }
        else if (this.value == 2) {
          this.gender = '女'
        }
        var $this = this
        this.form.validateFields((err, values) => {
          if (!err) {
            let formData = Object.assign(this.model, values)
            var param = {
              loginName: formData.loginName,
              password: formData.password,
              nickName: formData.nickName,
              organId: formData.organId[formData.organId.length - 1],
              gender: this.gender,
              positionId: formData.positionId[formData.positionId.length - 1]
            }
            if ($this.checked) {
              param.status = 'Y'
            } else {
              param.status = 'N'
            }
            var httpurl = '/application/auth/user/insert'
            if ($this.id) {
              param.id = $this.id
              httpurl = '/application/auth/user/update'
            }
            putAction(httpurl, param).then((res) => {
              if (res.success) {
                $this.$message.success(res.message)
                $this.$emit('getData', true)
                $this.close()
              } else {
                $this.$message.warning(res.message)
              }
            })
          }
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
</style>