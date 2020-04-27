<template>
  <div class="cheta-car-schedule cheta-ml-62">
    <div class="cheta-mtb-20"><span class="cheta-font16">调度审批</span></div>
    <a-transfer
      :dataSource="mockData"
      :targetKeys="targetKeys"
      @change="handleChange"
      :render="item=>item.title"
      :listStyle="{
        width: '198px',
        height: '300px',
      }"
      class="cheta-ml-64"
    >
    </a-transfer>
    <div class="cheta-schedule-form">
      <a-form :form="form" class="ant-advanced-search-form">
        <a-row :gutter="16">
          <a-col  v-bind="colLayout">
            <a-form-item label="开车司机：" v-bind="formItemLayout">
              <div>
                <a-avatar v-if="audit" slot="avatar" icon="user" :title="this.audit.name" :src="this.audit.avatar" @click.native="auditAdd()"/>
                <a-avatar v-else slot="avatar" icon="user" :title="this.audit.name" :src="this.audit.avatar" @click.native="auditAdd()"/>
                <span class="cheta-ml-10 cheta-block">{{audit.name}}</span>
              </div>
              <User ref="audit" @getUser="getAudit"></User>
            </a-form-item>
          </a-col>
          <a-col  v-bind="colLayout">
            <a-form-item label="开车地点：" v-bind="formItemLayout">
              <a-input
                v-decorator="['address']"/>
            </a-form-item>
          </a-col>
          <a-col  v-bind="colLayout">
            <a-form-item label="联系电话：" v-bind="formItemLayout">
              <a-input
                placeholder="请输入联系电话："
                v-decorator="['linkPhone', {rules: [{ required: true,message: '你输入的登录密码不正确请检查!'}]}]"/>
            </a-form-item>
          </a-col>
          <a-col v-bind="colLayout">
            <a-form-item label="开车时间：" v-bind="formItemLayout">
              <a-range-picker v-if="startDate" @change="onChange" v-model="time" />
              <a-range-picker v-else @change="onChange" />
            </a-form-item>
          </a-col>
          <a-col v-bind="colLayout">
            <a-form-item label="备注事项：" v-bind="formItemLayout">
              <a-textarea
                placeholder="请输入备注"
                width="546px"
                v-decorator="['description']"/>
            </a-form-item>
          </a-col>
        </a-row>
        <div class="cheta-font-align">
          <a-button type="default" class="cheta-mr-10">取消</a-button>
          <a-button type="primary"  @click="submit">
            提交
          </a-button>
        </div>
      </a-form>
    </div>
  </div>
</template>
<script>
  import ATextarea from 'ant-design-vue/es/input/TextArea'
  import User from './childmodules/User'
  import {postAction,getAction} from '@/api/manage'
  import moment from 'moment'
  import pick from 'lodash.pick'
  export default {
    name: 'Car',
    components: { ATextarea, User},
    data () {
      return {
        targetKeys:[],
        mockData: [],
        model:{},
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
        colLayout: {
          span:12,
          xs:24,
          sm:24,
          md:12,
          xl:12,
        },
        form: this.$form.createForm(this),
        user:this.$store.getters.userInfo,
        startDate:'',
        endDate:'',
        audit:{
          name:""
        },
        time:[
          moment(this.startDate,"YYYY-MM-DD"),
          moment(this.endDate,"YYYY-MM-DD")
        ],
        id:""


      }
    },
    // positionText: "公司 / 总部 / 董事长"
    mounted () {
      this.getData()
    },
    methods: {
      moment,
      // this.$route.params.key
      getData () {
        if (this.$route.params.key) {
          if (this.$route.params.key.length>0) {
            this.$route.params.key.forEach(inner=>{
              this.mockData.push({key:inner.id,title:inner.registrationNo})
            })
          }
          else if (this.$route.params.key.id){
            var $this = this
            $this.$route.params.key.carId.split(",").forEach((inner,index)=>{
              $this.mockData.push({key:inner,title: this.$route.params.key.registrationNo.split(",")[index]})
            })
            $this.auditCar(this.$route.params.key)
          }
        } else {
          this.$router.push({path:'/Car/Change'})
        }
      },
      handleChange(targetKeys, direction, moveKeys) {
        console.log(targetKeys, direction, moveKeys);
        this.targetKeys = targetKeys;
      },
      onChange (date) {
        this.startDate = date[0].format('YYYY-MM-DD')
        this.endDate = date[1].format('YYYY-MM-DD')
        this.time[0] = moment(this.startDate,"YYYY-MM-DD")
        this.time[1] = moment(this.endDate,"YYYY-MM-DD")
        // this.startDate = startTime[0]
        // this.endDate = startTime[1]

      },
      auditAdd () {
        this.$refs.audit.doInvite()
      },
      getAudit (userObject) {
        // 获取用户
        this.audit = userObject;

      },
      auditCar (record) {
        this.id = record.id
      },
      submit () {
        this.form.validateFields((err, values) => {
          console.log(this.model,values)
          if (!err) {
            let formData = Object.assign(this.model, values);
            var param = {
              "approval": {
                address:formData.address,
                linkPhone: formData.linkPhone,
                description: formData.description,
                userId:this.audit.userId,
                startDate:this.startDate,
                endDate:this.endDate
              },
              carIds: this.targetKeys,
            }
            if (this.id) {
              param.applyId = this.id
            }
            // param.registrationNo=this.carId
            var $this = this;
            postAction('/application/car/dispatch/dispatchApproval', param).then((res) => {
              if (res.success) {
                $this.$message.success(res.message);
                $this.$router.push({path:'/Car/Change'})
                // $this.$emit('reload')
              } else {
                $this.$message.warning(res.message);
              }
            })
          }
        })
      },


    },
    watch: {
      '$route' () {
        this.$destroy(true);
        this.$el.parentNode.removeChild(this.$el);
      }
    }
  }
</script>

<style lang="less" scoped>
  .cheta-car-schedule{height:calc(100% - 150px);}
  .cheta-schedule-form{width:600px;margin-top: 20px;}

</style>