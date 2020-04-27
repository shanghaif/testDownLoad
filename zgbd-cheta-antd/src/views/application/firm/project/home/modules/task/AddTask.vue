<template>
  <div class="cheta-height-full">
    <a-modal
      v-model="visible"
      @ok="handleOk"
      @cancel="cancle"
      cancelText="关闭"
      okText="提交"
      width="400px"
      height="556px"
      :closable="false"
    >
      <a-form :form="form" class="cheta-hours-form">
        <a-row :gutter="24">
          <a-col :span="24" :xs="24" :sm="24" :md="24" :xl="24">
            <a-form-item
              label="任务名称:"
              :labelCol="labelColContent"
            >
<!--              v-decorator="[ 'name', { rules: [{ required: true, message: '请输入日期!' }] }]"-->
              <a-input placeholder="请输入任务名称" v-decorator="[ 'name', { rules: [{ required: true, message: '请输入任务名称!' }] }]"></a-input>
            </a-form-item>
          </a-col>
          <a-col :span="24" :xs="24" :sm="24" :md="24" :xl="24">
            <a-form-item
              label=""
              :labelCol="labelColContent"
            >
              <div class="cheta-mt-10">
                <a-avatar class="avatar cheta-mr-5" size="small" :src="userInfo().headImage"/>
                <span :class="`cheta-color`">{{ userInfo().nickName }}</span>
              </div>
                </a-form-item>
              </a-col>
            </a-row>
          </a-form>
    </a-modal>

  </div>
</template>

<script>
  import { taskEdit } from '@/views/application/firm/project/api/api'
  export default {
    name: 'AddTask',
    data () {
      return {
        statusList: [],
        tmp: {
          status: "not_started",
          priority: "common"
        },
        current: 0,
        visible:false,
        form: this.$form.createForm(this),
        labelColContent: {
          xs: { span: 5 },
          sm: { span: 5 },
        },
      }

    },
    props: {
      isAdd:{
        type:Boolean
      },
      taskShow:{
        type:Boolean
      }
    },
    methods: {
      handleOk () {
        // 触发表单验证
        this.form.validateFields((err, values) => {
          if (!err) {
            let obj = Object.assign(this.tmp, values);
            obj.projectId = this.$route.params.id
            var $this = this
            taskEdit(obj).then(res=>{
              $this.$emit('getData')
              $this.cancle()
            })
          }
        })
      },
      userInfo() {
        let userInfo = this.$store.getters.userInfo;
        if (userInfo.length) {
          userInfo = userInfo[0]
        }
        if (!userInfo.headImage) {
          userInfo.headImage = 'https://gw.alipayobjects.com/zos/antfincdn/XAosXuNZyF/BiazfanxmamNRoxxVxka.png';
        }
        return userInfo
      },
      cancle() {
        this.visible = false
      },
      showModal () {
        this.visible = true
      }
    }
  }
</script>
<style lang="less">
  .cheta-hours-form .ant-form-item{margin-bottom: 0px!important;}
</style>
<style scoped>

</style>