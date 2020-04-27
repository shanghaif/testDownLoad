<template>
  <div class="cheta-car-apply cheta-ml-62">
    <div class="cheta-mtb-20"><span class="cheta-font16">申请用车</span></div>
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
    <div class="cheta-apply-form">
      <a-form :form="form" class="ant-advanced-search-form">
        <a-row :gutter="16">
          <a-col  v-bind="colLayout">
            <a-form-item label="用车部门：" v-bind="formItemLayout">
              <span>{{ user.positionText.split(" / ")[1] }}</span>
            </a-form-item>
          </a-col>
          <a-col  v-bind="colLayout">
            <a-form-item label="用车人：" v-bind="formItemLayout">
              <span>{{ user.nickName }}</span>
            </a-form-item>

          </a-col>
          <a-col  v-bind="colLayout">
            <a-form-item label="乘车人数：" v-bind="formItemLayout">
              <a-input
                placeholder="请输入乘车人数："
                v-decorator="['population', {rules: [{ required: true,message: '你输入的登录密码不正确请检查!'}]}]"/>
            </a-form-item>
          </a-col>
          <a-col v-bind="colLayout">
            <a-form-item label="用车时间：" v-bind="formItemLayout">
              <a-range-picker v-if="startDate" @change="onChange" v-model="time"/>
              <a-range-picker v-else @change="onChange"/>
            </a-form-item>
          </a-col>
        </a-row>
        <a-row :gutter="16">
          <a-col v-bind="colLayout">
            <a-form-item label="用车范围：" v-bind="formItemLayout">
              <a-select placeholder="请输入用车范围" v-decorator="['addressId', {rules: [{ required: true,message: '你输入的登录密码不正确请检查!'}]}]">
                <a-select-option v-for="item in fieldList" :key="item.id">{{item.name}}</a-select-option>
              </a-select>
            </a-form-item>
          </a-col>
          <a-col v-bind="colLayout">
            <a-form-item label="车辆类型：" v-bind="formItemLayout">
              <a-select
                showSearch
                placeholder="请选择车辆类型"
                optionFilterProp="children"
                style="width: 200px"
                @change="selectChange"
                :filterOption="filterOption"
                v-decorator="['carTypeId', {rules: [{ required: true,message: '你输入的登录密码不正确请检查!'}]}]"
              >
                <a-select-option v-for="item in typeList" :key="item.id">{{ item.name}}</a-select-option>
              </a-select>
            </a-form-item>
          </a-col>
        </a-row>
        <a-row :gutter="16">
          <a-col v-bind="colLayout">
            <a-form-item label="审批人：" v-bind="formItemLayout">
              <div>
                <a-avatar v-if="audit" slot="avatar" icon="user" :title="this.audit.name" :src="this.audit.avatar" @click.native="auditAdd()"/>
                <a-avatar v-else slot="avatar" icon="user" :title="this.audit.name" :src="this.audit.avatar" @click.native="auditAdd()"/>
                <p>{{audit.name}}</p>
              </div>
              <User ref="audit" @getUser="getAudit"></User>
            </a-form-item>
          </a-col>
          <a-col v-bind="colLayout">
            <a-form-item label="抄送人：" v-bind="formItemLayout">
              <div>
                <a-avatar v-if="copyto" slot="avatar" icon="user" :title="this.copyto.name" :src="this.copyto.avatar" @click.native="copytoAdd()"/>
                <a-avatar v-else slot="avatar" icon="plus-circle" :title="this.copyto.name" :src="this.copyto.avatar" @click.native="copytoAdd()"/>
                <p>{{copyto.name}}</p>
              </div>
              <User ref="copyto" @getUser="getCopyto"></User>
            </a-form-item>
          </a-col>
          <a-col :span="24">
            <a-form-item label="备注事项：" v-bind="formItemLayout1">
              <a-textarea
                placeholder="请输入备注"
                width="546px"
                v-decorator="['description', {rules: [{required: true,message: '你输入的姓名不正确请检查!'}]}]"/>
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
  import pick from 'lodash.pick'
  import moment from 'moment'

  export default {
    name: 'Car',
    components: { ATextarea, User},
    data () {
      return {
        targetKeys:[],
        mockData: [],
        fieldList:[{id:"1",name:"jack"},{id:"2",name:"tom"}],
        typeList:[],
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
        formItemLayout1: {
          labelCol: {
            xs: { span: 24 },
            sm: { span: 4 }
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
        audit:{
          userId:'',
          name:''
        },
        copyto:{},
        user:this.$store.getters.userInfo,
        warnList: [],
        startDate:'',
        endDate:'',
        time:
          [moment(this.startDate,"YYYY-MM-DD"), moment(this.endDate,"YYYY-MM-DD")],
        id:'',
      }

    },
    // positionText: "公司 / 总部 / 董事长"
    mounted () {
      this.getData()
      this.getCarType()
    },
    methods: {
      moment,
      getData () {
        if (this.$route.params.key.length > 0) {
          this.$route.params.key.forEach(inner=>{
            this.mockData.push({key:inner.id,title:inner.registrationNo})
          })
        }
        else if (this.$route.params.key.id){
          var $this = this
          $this.$route.params.key.carId.split(",").forEach((inner,index)=>{
            $this.mockData.push({key:inner,title: this.$route.params.key.registrationNo.split(",")[index]})
          })
          $this.edit(this.$route.params.key)
        }
        else {
          this.$router.push({path:'/Car/Change'})
        }
      },
      getCarType () {
        var $this = this
        getAction('/application/car/base/getCarType',{})
          .then((res)=>{
            $this.typeList = res.result
          })
      },
      // personInfo () {
      //   getAction('/application/car/dispatch/getUserByApply',{}).then(res=>{
      //
      //   })
      // },
      edit (record) {
        this.startDate = record.startDate
        this.endDate = record.endDate
        this.time[0] = moment(this.startDate,"YYYY-MM-DD")
        this.time[1] = moment(this.endDate,"YYYY-MM-DD")
        this.model = {
          addressId: record.addressId,
          carTypeId: record.carTypeId,
          population: record.population,
          description: record.description,
        }
        let fieldsVal = pick(this.model,'addressId','carTypeId', 'population','description')
        this.$nextTick(() => {
          this.form.setFieldsValue(fieldsVal)
        })
        var param = {
          applyId: record.id
        }
        var $this = this
        getAction('/application/car/dispatch/getUserByApply',param).then(res=>{
          $this.audit.name = res.result.audit_name
          $this.copyto.name = res.result.copy_name
        })
        $this.id = record.id
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
      },
      auditAdd () {
        this.$refs.audit.doInvite()
      },
      copytoAdd () {
        this.$refs.copyto.doInvite()
      },
      getAudit (userObject) {
        // 获取用户
        this.audit = userObject;

      },
      getCopyto (userObject) {
        // 获取用户
        this.copyto = userObject;

      },
      selectChange () {

      },
      submit () {
        this.form.validateFields((err, values) => {
          console.log(this.model,values)
          if (!err) {
            let formData = Object.assign(this.model, values);
            var param = {
              "apply": {
                carTypeId:formData.carTypeId,
                addressId:formData.addressId,
                auditId: this.audit.userId,
                copyId: this.copyto.userId,
                description: formData.description,
                population: formData.population,
                userId:this.user.id,
                startDate:this.startDate,
                endDate:this.endDate
              },
              carIds: this.targetKeys,
            }
            if (this.id) {
              param.apply.id = this.id
            }
            // param.registrationNo=this.carId
            var $this = this;
            postAction('/application/car/dispatch/doApply', param).then((res) => {
              if (res.success) {
                $this.$message.success(res.message);
                $this.$router.push({path:'/Car/Change'})
              } else {
                $this.$message.warning(res.message);
              }
            })
          }
        })
      },
    }
  }
</script>

<style lang="less" scoped>
  .cheta-car-apply{height:calc(100% - 150px);}
  .cheta-apply-form{width:600px;margin-top: 20px;}

</style>