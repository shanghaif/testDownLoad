<template>
  <div class="NewVehicle">
    <div v-if="visible">
      <a-row>
        <!--上面下拉框-->
        <a-col :span="24" style="margin: 15px 0px ;float: none">
          <a-icon type="car" style="font-size: 18px;margin-left: 16px" class="cheta-color"/>
          <label style="padding-left: 9px;" class="cheta-color">选择车队：</label>
          <a-tree-select
            style="width: 200px"
            :treeData="treeData"
            placeholder="请选择车队"
            @change="onChangeTree"
          >
          </a-tree-select>
          <a-button @click="showModal" class="top-addButton"><em style="font-size: 18px;">+ </em>新增</a-button>
          <a-modal :title="vehicleTitle" width="800px" v-model="visibles" @ok="handleOk" :footer="null">
            <a-form :form="form" @submit="handleSubmit">
              <a-row>
                <a-alert
                  message="请选择人员姓名"
                  banner
                  v-if="warningVisible"
                />
                <a-col v-bind="colLayout">
                  <a-form-item v-bind="formItemLayout" label="姓名">
                    <div style="height: 28px;line-height: 28px;cursor:pointer">
                      <a-input
                        placeholder="请输入姓名"
                        v-decorator="['driverName',{rules: [{ required: true, message: '请输入姓名!', whitespace: true }]}]"/>
                    </div>
                  </a-form-item>
                </a-col>
                <a-col v-bind="colLayout">
                  <a-form-item v-bind="formItemLayout" label="关联帐号">
                    <div style="height: 28px;line-height: 28px;cursor:pointer">
                      <a-avatar v-if="audit" slot="avatar" icon="user" :title="this.audit.name" :src="this.audit.avatar"
                                @click.native="auditAdd()"/>
                      <a-avatar v-else slot="avatar" icon="user" :title="this.audit.name" :src="this.audit.avatar"
                                @click.native="auditAdd()"/>
                      <p>{{audit.name}}</p>
                    </div>
                    <User ref="audit" @getUser="getAudit"></User>
                  </a-form-item>
                </a-col>
                <a-col v-bind="colLayout">
                  <a-form-item v-bind="formItemLayout" label="所属公司">
                    <a-tree-select
                      style="width: 200px"
                      :treeData="treeCompanyData"
                      placeholder="请选择父级名称"
                      @change="onChangeCompanyTree"
                    ></a-tree-select>
                  </a-form-item>
                </a-col>
                <a-col v-bind="colLayout">
                  <a-form-item v-bind="formItemLayout" label="性别">
                    <a-radio-group
                      v-decorator="['sex',{rules: [{ required: true, message: '请选择性别!', whitespace: true }],initialValue:this.infopersons.sexSelectss},]">
                      <a-radio value="0">男</a-radio>
                      <a-radio value="1">女</a-radio>
                    </a-radio-group>
                  </a-form-item>
                </a-col>
                <a-col v-bind="colLayout">
                  <a-form-item v-bind="formItemLayout" label="出生日期">
                    <a-date-picker
                      v-decorator="['birthdate', { rules: [{ type: 'object', required: true, message: '请选择出生年月日!' }],initialValue:this.infopersons.birthdate}]"/>
                  </a-form-item>
                </a-col>
                <a-col v-bind="colLayout">
                  <a-form-item v-bind="formItemLayout" label="车牌">
                    <div @click="getCarNumber()">
                      {{ car.title || '请选择车辆' }}
                    </div>
                    <a-modal
                      title="添加车辆号"
                      centered
                      v-model="carVisible"
                      @ok="addCar"
                    >
                      <Structure @onSelect="onSelect" :checkable="false" style="max-height: 500px;overflow-y: scroll"/>
                    </a-modal>
                  </a-form-item>
                </a-col>
                <a-col v-bind="colLayout">
                  <a-form-item v-bind="formItemLayout" label="准驾驶证">
                    <a-select
                      mode="multiple"
                      v-decorator="['drivingLicence',{rules: [{ required: true, message: '驾驶证是必选项!' }],initialValue:'A1'}]"
                      placeholder="请选择驾驶证"
                      style="width: 100%"
                      @change="handleChangeCar"
                    >
                      <a-select-option :key="item.key" v-for="item in licenselist">{{ item.name}}</a-select-option>

                    </a-select>

                  </a-form-item>
                </a-col>
                <a-col v-bind="colLayout">
                  <a-form-item v-bind="formItemLayout" label="驾龄">
                    <a-input-number v-decorator="['drivingYears', { initialValue:this.infopersons.drivingYears || 3 }]" :min="1" :max="40"/>
                    <span class="ant-form-text">
                       年
                      </span>
                  </a-form-item>
                </a-col>
                <a-col v-bind="colLayout">
                  <a-form-item v-bind="formItemLayout" label="驾驶证号">
                    <a-input
                      placeholder="请输入驾驶证号"
                      v-decorator="['certificate',{ rules: [{ required: true, message: '请输入驾驶证号!', whitespace: true }],initialValue:this.infopersons.certificate},]"
                    />
                  </a-form-item>
                </a-col>
                <a-col v-bind="colLayout">
                  <a-form-item v-bind="formItemLayout" label="驾驶分数">
                    <a-input-number v-decorator="['drivingScore', { initialValue: this.infopersons.drivingScore || 12 }]" :min="0" :max="12"/>
                    <span class="ant-form-text">分</span>
                  </a-form-item>
                </a-col>
                <a-col v-bind="colLayout">
                  <a-form-item v-bind="formItemLayout" label="身份证号">
                    <a-input placeholder="请输入身份证号"
                             v-decorator="['identity',{ rules: [{ required: true, message: '请输入身份证号!', whitespace: true }],initialValue:this.infopersons.identity},]"/>
                  </a-form-item>
                </a-col>
                <a-col v-bind="colLayout">
                  <a-form-item v-bind="formItemLayout" label="初次领证">
                    <a-date-picker
                      v-decorator="['licenseFirst', {rules: [{ type: 'object', required: true, message: '请选择初次领证时间!' }],initialValue:this.infopersons.licenseFirst}]"/>
                  </a-form-item>
                </a-col>
                <a-col v-bind="colLayout">
                  <a-form-item v-bind="formItemLayout" label="有效开始">
                    <a-date-picker
                      v-decorator="['effectiveStart', {rules: [{ type: 'object', required: true, message: '请选择有效开始期限!' }],initialValue:this.infopersons.effectiveStart}]"/>
                  </a-form-item>
                </a-col>
                <a-col v-bind="colLayout">
                  <a-form-item v-bind="formItemLayout" label="有效期限">
                    <a-date-picker
                      v-decorator="['expirationDate', { rules: [{ type: 'object', message: '请选择有效期限!' }],initialValue:this.infopersons.expirationDate}]"/>
                  </a-form-item>
                </a-col>
                <a-col v-bind="colLayout">
                  <a-form-item v-bind="formItemLayout" label="联系方式">
                    <a-input
                      placeholder="请输入联系方式"
                      v-decorator="['phone',{ rules: [{ required: true, message: '请输入联系方式!', whitespace: true }],initialValue:this.infopersons.phone},]"
                    />
                  </a-form-item>
                </a-col>
                <a-col v-bind="colLayout">
                  <a-form-item v-bind="formItemLayout" label="邮箱账号">
                    <a-input
                      placeholder="请输入邮箱账号"
                      v-decorator="[ 'mail',{rules: [{
                type: 'email', message: '请以正确的邮箱账号格式输入!', },{ message: '请输入邮箱账号!',},],initialValue:this.infopersons.email},]"/>
                  </a-form-item>
                </a-col>
                <a-col v-bind="colLayout">
                  <a-form-item v-bind="formItemLayout" label="居住地址">
                    <a-input
                      placeholder="请输入居住地址"
                      v-decorator="['address',{rules: [{ message: '请输入居住地址!', whitespace: true }], initialValue:this.infopersons.address},]"
                    />
                  </a-form-item>
                </a-col>
                <a-col v-bind="colLayoutt">
                  <a-form-item v-bind="formItemLayoutt" label="上传证照">
                    <div class="clearfix">
                      <a-upload
                        action="../fileUpload"
                        listType="picture-card"
                        :fileList="fileList"
                        @preview="handlePreview"
                        @change="handleChanges"
                      >
                        <div v-if="fileList.length < 3">
                          <a-icon type="plus"/>
                          <div class="ant-upload-text">Upload</div>
                        </div>
                      </a-upload>
                      <a-modal :visible="previewVisible" :footer="null" @cancel="handleCancel">
                        <img alt="example" style="width: 100%" :src="previewImage"/>
                      </a-modal>
                    </div>
                  </a-form-item>
                </a-col>

              </a-row>
              <a-form-item v-bind="tailFormItemLayout">
                <a-button style="margin: 0 20px" @click="handleCancels">
                  取消
                </a-button>
                <a-button type="primary" html-type="submit">
                  确定
                </a-button>
              </a-form-item>
            </a-form>
          </a-modal>
        </a-col>
        <!--下面司机信息-->
        <div  v-if="driverList.length != 0">
          <a-col span="24">
            <div style="background-color: #F0F2F5; padding: 20px 25px;height: 662px;">
              <a-row :gutter="40">
                <a-col :xxl="8" :xl="12" :lg="12" :md="24" :sm="24" :xs="24" v-for="(driver,index) in driverList" v-if="driverList.length !='0'" style="padding: 0px;text-overflow: ellipsis">
                  <div class="top-left">
                    <a-row>
                      <a-col :span="1"></a-col>
                      <a-col :span="4">
                        <div class="top-left-img">
                          <img src="/image/workplace/touxiang.png" alt="">
                        </div>
                        <div class="top-left-jiashi button" @click="toggle(driver)">
                          <a-popover>
                            <template slot="content">
                              <span>点击查询驾驶证</span>
                            </template>
                            <span class="top-left-jiashi-span" type="primary">{{driver.drivingLicence}}</span>
                            <p class="top-left-jiashi-p">准驾驶证</p>
                          </a-popover>
                        </div>
                      </a-col>
                      <a-col :span="1">
                        <div class="top-left-fengexian">
                          <img src="/image/workplace/fengexian.png" alt="">
                        </div>
                      </a-col>
                      <a-col :span="18">
                        <div style="font-size: 26px;margin-top: 8px;margin-right: 10px;float: right">
                          <a-dropdown>
                            <a href="javascript:;" class="ant-dropdown-link cheta-color">
                              <a-icon type="ellipsis"/>
                            </a>
                            <a-menu slot="overlay">
                              <a-menu-item>
                                <a href="javascript:;"  @click="details(driver)">详情</a>
                              </a-menu-item>
                              <a-menu-item>
                                <a @click="toggles(driver)">编辑</a>
                              </a-menu-item>
                            </a-menu>
                          </a-dropdown>
                        </div>
                        <div class="top-right-qiehuan" v-if="isId == driver.id && isTrue == true">
                          <ul>
                            <li>证&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;号：<span>{{driver.certificate}}</span></li>
                            <li v-if="driver.sex === '男'">性&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;别：<span>男</span></li>
                            <li v-else-if="driver.sex === '女'">性&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;别：<span>女</span>
                            </li>
                            <li>出生日期：<span>{{driver.birthdate}}</span></li>
                            <li>初次领证：<span>{{driver.licenseFirst}}</span></li>
                            <li>有效开始：<span>{{driver.effectiveStart}}</span></li>
                            <li>有效期限: <span>{{driver.expirationDate}}年</span></li>
                            <li>住&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;址：<span>{{driver.address}}</span></li>
                          </ul>
                        </div>
                        <div class="top-rwight"  v-else  >
                          <!--第一行-->
                          <div class="top-right-dati clearfix">
                            <div class="top-right-dati-one">
                              <span>{{driver.driverName}}</span>
                              <p>{{driver.organName}}</p>
                            </div>
                            <div class="top-right-dati-two">
                              <span>9.3</span>
                              <p>安全评分</p>
                            </div>
                          </div>
                          <div class="top-right-wenzi">
                            <ul>
                              <li>车&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;牌：<span>{{driver.vehicle}}</span></li>
                              <li>驾&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;龄：<span>{{driver.drivingYears}}年</span></li>
                              <li>联系方式：<span>{{driver.phone}}</span></li>
                              <li>邮&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;箱：<span>{{driver.mail}}</span></li>
                            </ul>
                          </div>
                        </div>
                      </a-col>
                    </a-row>
                  </div>
                </a-col>
              </a-row>
            </div>
          </a-col>
          <a-col span="24"> <!--翻页-->
            <div style="height: 72px;padding: 20px;background-color: #F0F2F5;width: 100%">
              <div style="float: right">
                <a-pagination :defaultCurrent="1" pageSize="6" @change="onShowSizeChange" :total="count"/>
              </div>

            </div>
          </a-col>
        </div>
        <div v-else style=" padding: 200px 25px;height: 662px;margin-top: 2px solid F0F2F5">
          <a-col  span="24">
            <template>
              <a-empty />
            </template>
          </a-col>
        </div>

      </a-row>
    </div>
    <div v-else>
      <indexSonTwo ref="indexSonTwo" :message="detailsDrivers" @changeShow="changemethod"></indexSonTwo>
    </div>
  </div>
</template>
<script>
  import { getAction, postAction } from '@/api/manage'
  import indexSonTwo from './indexSonTwo'
  import User from './../../registration/modules/childmodules/User'
  import Edit from './../../../system/setting/account/Edit'
  import { httpAction, putAction } from '@/api/manage'
  import { getOrganTree } from '@/api/api.js'
  import moment from 'moment'
  import carNumber from './carNumber'
  import Structure from '../../map/Structure'

  const residences = [
    {
      value: 'zhejiang',
      label: 'Zhejiang',
      children: [
        {
          value: 'hangzhou',
          label: 'Hangzhou',
          children: [
            {
              value: 'xihu',
              label: 'West Lake'
            }
          ]
        }
      ]
    },
    {
      value: 'jiangsu',
      label: 'Jiangsu',
      children: [
        {
          value: 'nanjing',
          label: 'Nanjing',
          children: [
            {
              value: 'zhonghuamen',
              label: 'Zhong Hua Men'
            }
          ]
        }
      ]
    }
  ]
  export default {
    components: {
      indexSonTwo, User, Edit, moment,carNumber,Structure
    },
    props: {
      id: {
        type: String
      },
      listUrl: {
        type: String
      },
      param: {
        type: Object,
        default: () => {
          return {}
        }
      }
    },
    created() {
      this.initCar()
      this.reloadData()

      //获取机构信息
      var $this = this
      getOrganTree().then(res => {
        $this.treeData = res.result
        $this.treeCompanyData = res.result

      })
      this.initDriverInfo({ pageNo: 1, pageSize: 6 })
    },
    name: 'index',
    el: '.top-xia',
    data() {
      return {
        car: {},
        carVisible: false,
        licenselist:[
          {name:"A1",key:"A1"},
          {name:"A2",key:"A2"},
          {name:"A3",key:"A3"},
          {name:"A4",key:"A4"},
          {name:"B1",key:"B1"},
          {name:"B2",key:"B2"},
          {name:"B3",key:"B3"},
          {name:"B4",key:"B4"},
          {name:"C1",key:"C1"},
          {name:"C2",key:"C2"},
          {name:"C3",key:"C3"},
        ],
        vehicleTitle:{},
        newValue:{},
        isId : 0 ,
        isTrue : false,
        pageSizes: {},
        driverList: [],
        driver: {},
        detailsDrivers:{},
        count: [],
        selectValue: '',
        selectData: [],
        selectUrl: {
          selectGetData: '/application/car/account/getData'
        },
        driverSpinning: true,
        previewVisible: false,
        previewImage: '',
        fileList: [],
        imageUrl: '',
        responseUrls: [],
        warningVisible: false,
        visibles: false,
        visible: true,
        // content: "喵喵喵",
        confirmDirty: false,
        treeData: [],
        userOrgan: {},
        infoperson: {},
        infopersons: {},
        sexSelect: {},
        sexSelects: {},
        sexSelectss: {},
        nickNames: {},
        audit: {},
        copyto: {},
        userId: {},
        organIds: {},
        userNames: [],
        userIds: undefined,
        name: {},
        userSex: {},
        responseUrl: [],
        organValue: 0,
        organIdValue: {},
        dateFormat: 'YYYY-MM-DD',
        form: this.$form.createForm(this),
        residences,
        autoCompleteResult: [],
        listData: [],
        driverId: 0,
        treeCompanyData:[],
        formItemLayout: {
          labelCol: {
            xs: { span: 6 },
            sm: { span: 8 }
          },
          wrapperCol: {
            xs: { span: 18 },
            sm: { span: 16 }
          }
        },
        formItemLayoutt: {
          labelCol: {
            xs: { span: 6 },
            sm: { span: 4 }
          },
          wrapperCol: {
            xs: { span: 18 },
            sm: { span: 20 }
          }
        },
        colLayout: {
          span: 12,
          xs: 24,
          sm: 24,
          md: 12,
          xl: 12
        },
        colLayoutt: {
          span: 24
        },
        organcompany:'',
        tailFormItemLayout: {
          wrapperCol: {
            xs: {
              span: 24,
              offset: 14
            },
            sm: {
              span: 24,
              offset: 18
            }
          }
        },


        carTeamList: [{
          id: 1,
          team: '广州天河'
        },
          {
            id: 2,
            team: '广州越秀'
          },
          {
            id: 3,
            team: '广州番禺'
          },
          {
            id: 4,
            team: '广州海珠'
          },
          {
            id: 5,
            team: '广州白云'
          }
        ]
      }
    },
    beforeCreate() {
      this.form = this.$form.createForm(this, { name: '确定' })
    },
    methods: {
      handleChangeCar (value) {
          console.log(`selected ${value}`);
      },
      getCarNumber () {
        this.carVisible = true
      },
      onSelect (car) {
        this.car = car
      },
      addCar () {
        this.carVisible = false
      },
      onShowSizeChange(current, pageSize) {//翻页
        this.initDriverInfo({ pageNo: current, pageSize: 6 ,organid : this.organValue})
      },
      reKey(value) {
        value = value.toString().substring(1, value.length)
        return value
      },
      initCar() {
        let that = this
        getAction(that.selectUrl.selectGetData, { pageNo: 1, pageSize: 100000 }).then(res => {
          if (res.success) {
            that.data = []
            res.result.data.forEach(item => {
              if (item.registrationNo && item.registrationNo != '') {
                that.selectData.push({ id: item.id, registrationNo: item.registrationNo })
              }
            })
          }
        })
      },
      filterOption(input, option) {
        return (
          option.componentOptions.children[0].text.toLowerCase().indexOf(input.toLowerCase()) >= 0
        )
      },
      initDriverInfo(params) {
        getAction('/application/car/driver/page', params).then(res => {
          let $this = this
          $this.driverList = []
          debugger;
          $this.count = res.count
          $this.driverList = res.data//数组
          $this.pageSizes = res.data.length
        })
      },
      handleCancel() {
        this.previewVisible = false
      },
      handlePreview(file) {
        this.previewImage = file.url || file.thumbUrl
        this.previewVisible = true
      },
      handleChanges({ fileList }) {
        if (fileList.length != 0 && fileList[0].status === 'uploading') {
          this.fileList = fileList
          this.responseUrls.push({ 'imgurl': fileList[0].response })
        } else {

          var $this = this
          $this.fileList = fileList
          $this.responseUrls = []
          $this.fileList.forEach(item => {
            $this.responseUrls.push({ 'imgurl': item.response })
          })
        }
      },
      reloadData() {// 获取账户详情
        this.spinning = true
        var id = this.id
        if (!id) {
          let userInfo = this.$store.getters.userInfo
          id = userInfo.id
        }
        httpAction('/application/auth/user/getDetail?userId=' + id, {}, 'get').then(res => {
          if (res.success) {
            this.infoperson = res.result.result
            this.userOrgan = res.result.result.organId//机构id
            this.spinning = false
          }
          else {
            this.$message.warning(res.message)
          }
        })
      },
      handleChange(info) {
        let fileList = [...info.fileList]
        fileList = fileList.slice(-2)
        var $this = this
        fileList.map((file) => {
          if (file.response) {
            var headImage = file.response
            $this.infoperson.headImage = headImage
            let userInfo = $this.$store.getters.userInfo
            putAction('/application/auth/user/update', { id: userInfo.id, headImage: headImage }).then(res => {
              if (res.success) {
                $this.$message.success(res.message)
                $this.$emit('getData', true)
                $this.close()
              } else {
                $this.$message.warning(res.message)
              }
            })
          }
          return null
        })
      },
      handleSubmit(e) {//新增
        e.preventDefault()
        var that = this
        this.form.validateFieldsAndScroll((err, values) => {
          if (!err) {
            if (typeof(that.userId) === 'string') {
              values.userId = that.userId//用户名
            } else {
              that.warningVisible = true
            }
            values.sex = ''//判断性别
            if (that.sexSelects = '0') {
              values.sex = '男'
            } else if (that.sexSelects = '1') {
              values.sex = '女'
            }
            values.licensefile = ''//循环上传
            for (let i = 0; i < this.responseUrls.length; i++) {
              values.licensefile += this.responseUrls[i].imgurl + ','
            }
            values.id = that.driverId || 0
            if(that.organIds.length){
              values.organId = that.organIds
            } else {
              values.organId = that.infopersons.organId;
            }
            values.drivingYears = values.drivingYears.toString()
            values.drivingScore = values.drivingScore.toString()
            values.birthdate = (values.birthdate).format('YYYY-MM-DD')
            values.licenseFirst = (values.licenseFirst).format('YYYY-MM-DD')
            values.effectiveStart = (values.effectiveStart).format('YYYY-MM-DD')
            if (values.expirationDate) {
              values.expirationDate = (values.expirationDate).format('YYYY-MM-DD')
            }
            // 准驾驶证
            debugger;
            if (values.drivingLicence.join) {
              values.drivingLicence = values.drivingLicence.join(',');
            }
            // 车牌号
            if (this.car.title) {
              values.carId = this.car.key;
            }
            postAction('/application/car/driver/insert', values).then(res => {
              if (res.success) {
                that.$message.success(res.message)
                that.$emit('refresh')
                that.editVisible = false
                console.log(e)
                this.visibles = false
                this.reloadData()
                //获取机构信息
                var $this = this
                getOrganTree().then(res => {
                  $this.treeData = res.result
                })
                this.initDriverInfo({ pageNo: 1, pageSize: 6 })
              } else {
                that.$message.error(res.message)
              }
            })
          }
        })
      },
      handleConfirmBlur(e) {
        const value = e.target.value
        this.confirmDirty = this.confirmDirty || !!value
      },
      compareToFirstPassword(rule, value, callback) {
        const form = this.form
        if (value && value !== form.getFieldValue('password')) {
          callback('Two passwords that you enter is inconsistent!')
        } else {
          callback()
        }
      },
      validateToNextPassword(rule, value, callback) {
        const form = this.form
        if (value && this.confirmDirty) {
          form.validateFields(['confirm'], { force: true })
        }
        callback()
      },
      handleWebsiteChange(value) {
        let autoCompleteResult
        if (!value) {
          autoCompleteResult = []
        } else {
          autoCompleteResult = ['.com', '.org', '.net'].map(domain => `${value}${domain}`)
        }
        this.autoCompleteResult = autoCompleteResult
      },
      editInfo(values) {
        getAction('/system/application/car/driver/insert', { values })
      },
      changemethod() {
        this.visible = true
      },
      enterDetail(item) {
        this.spinning = true
        getAction('/application/car/account/detail', {
          vehicleId: item.id,
          vehicleNO: item.registrationNO
        })
          .then((res) => {
            this.spinning = false
            console.log(res)
            this.$emit('cardtypeData', res.result)
          })
      },
      toggle: function(driver) {//判断id是否一致
        this.isId = driver.id;
        this.isTrue = !this.isTrue;
      },
      showModal() {//点击新增   司机
        var $this = this
        $this.audit = {}
        $this.driverId = 0;
        $this.infopersons = {}
        $this.visibles = true
        $this.fileList = []
        $this.form.resetFields()
        $this.vehicleTitle = '新增司机'
      },
      details: function(driver) {//点击进入 司机详情事件
        var $this = this
        this.driverList.forEach(inner => {
          if (inner.id == driver.id) {
            $this.detailsDrivers = driver
            $this.visible = !$this.visible
          } else {
            $this.visible = $this.visible
          }
        })
      },
      toggles: function(driver) {//编辑  司机信息
        var $this = this
        $this.infopersons = {}//清空from
        $this.visibles = true
        $this.fileList = []//清空图片
        $this.vehicleTitle = '编辑信息'
        $this.driverList.forEach(inner => {
          if (inner.id == driver.id) {
            $this.infopersons = driver // 司机id
            $this.driverId = driver.id; // 用户信息
            $this.audit = {
              userId: driver.userId,
              nickName: driver.userName,
              name: driver.userName,
            }
            $this.infopersons.carId = $this.infopersons.carId//车牌号
            $this.infopersons.email = $this.infopersons.mail//邮箱
            $this.userId = inner.userId//用户id
            if ($this.infopersons.sex == '男') {//判断性别
              $this.infopersons.sexSelectss = '0'
            } else if ($this.infopersons.sex == '女') {
              $this.infopersons.sexSelectss = '1'
            }
            $this.form.setFieldsValue({ birthdate: moment($this.infopersons.birthdate, 'YYYY-MM-DD') })
            $this.form.setFieldsValue({ licenseFirst: moment($this.infopersons.licenseFirst, 'YYYY-MM-DD') })
            $this.form.setFieldsValue({ effectiveStart: moment($this.infopersons.effectiveStart, 'YYYY-MM-DD') })
            $this.form.setFieldsValue({ expirationDate: moment($this.infopersons.expirationDate, 'YYYY-MM-DD') })
            var list = $this.infopersons.licensefile.split(",",$this.infopersons.licensefile.split(",").length-1);
            list.forEach(item =>{
              $this.fileList.push({
                uid: item,
                name: item,
                status: 'done',
                url: item
              })
            })
          }
        })
      },
      handleOk(e) {
        this.visibles = false
        e.preventDefault()
      },
      handleCancels(e) {
        this.visibles = false
        this.form.resetFields()
      },
      auditAdd() {
        this.$refs.audit.doInvite()
      },
      copytoAdd() {
        this.$refs.copyto.doInvite()
      },
      getAudit(userObject) {// 获取用户
        this.audit = userObject
        this.userId = userObject.userId
        this.spinning = true
        httpAction('/application/auth/user/getDetail?userId=' + this.userId, {}, 'get').then(res => {
          if (res.success) {
            this.infopersons = res.result.result
            var that = this
            that.organIds = res.result.result.organId
            that.nickNames = res.result.result.nickName
            if (res.result.result.birthday == null) {
              this.form.setFieldsValue({ birthdate: '' })
            } else {
              this.form.setFieldsValue({ birthdate: moment(res.result.result.birthday, 'YYYY-MM-DD') })
            }
            that.sexSelect = res.result.result.gender
            if (that.sexSelect == '男') {
              that.sexSelectss = '0'
            } else if (that.sexSelect == '女') {
              that.sexSelectss = '1'
            }
            this.warningVisible = false
            this.spinning = false
          }
          else {
            this.$message.warning(res.message)
          }
        })
      },
      getCopyto(userObject) {// 获取用户
        this.copyto = userObject
      },
      clear() {
        this.form.resetFields()
        this.audit = {}
        this.copyto = {}
      },
      onChangeCompanyTree (value) {
        let $this = this
        $this.organcompany = value
      },
      organMessage(value) {//获取车辆类型列表
        var param = {}
        if (value) {
          param = {
            organId: value
          }
          this.organIdValue = value
        }
        var $this = this
        getAction('/application/teaminfo/getCartypeNum', param)
          .then((res) => {
            console.log(res.result)
            $this.sum = 0
            $this.sourceData = res.result
            $this.sourceData.forEach((item) => {
              $this.sum += item.cartypeNum
            })
            $this.scale = [{
              dataKey: 'percent',
              min: 0,
              formatter: '.3%'
            }]
            var dv = new DataSet.View().source(this.sourceData)
            dv.transform({
              type: 'percent',
              field: 'cartypeNum',
              dimension: 'carType',
              as: 'percent'
            })
            $this.data = dv.rows
          })
        //获取车辆状态信息
        getAction('/application/car/vehiclenetwork/getvehiclestatuscount', param).then((res) => {
          $this.statusCount = res.result
        })
        //获取提醒信息
        getAction('/application/teaminfo/getCommission', param).then((res) => {
          $this.commissionList = res.result
        })
      },
      onChangeTree(value) {//选择机构id 刷新车辆    未完成
        let $this = this
        $this.organValue = value
        getAction('/application/car/driver/getById', value).then(res => {
          $this.initDriverInfo({ pageNo: 1, pageSize: 6 ,organid : value})
        })
      },
    }
  }
</script>

<style type="text/css">

  @media screen and (max-width: 1600px) {
    .dirverUp {
      padding: 30px !important;
    }
  }

  @media screen and (max-width: 1350px) {
    .top-right-dati-two {
      display: none;
    }

    .dirverUp {
      padding: 20px !important;
    }
  }

  @media screen and (max-width: 1120px) {
    .top-right-dati-two {
      display: block;
    }

    .dirverUp {
      padding: 20px !important;
    }
  }


</style>
<style>
  /*鼠标事件*/
  .top-left:hover {
    box-shadow: 1px 1px 5px #C4C4C4;
  }

  .top-right {
    text-align: left !important;
  }

  .top-right-wenzi {
    margin-top: 10px 0;
  }

  .top-right-wenzi ul li {
    list-style: none;
    font-size: 14px;
    font-family: MicrosoftYaHei;
    font-weight: 400;
    color: rgba(153, 153, 153, 1);
    line-height: 30px;
  }

  /*.top-right-wenzi p{*/
  /*font-size: 14px;*/
  /*font-family: MicrosoftYaHei;*/
  /*font-weight: 400;*/
  /*color: rgba(153,153,153,1);*/
  /*line-height: 26px;*/
  /*}*/
  .top-right-wenzi span {
    font-size: 14px;
    font-family: MicrosoftYaHei;
    font-weight: 400;
    color: rgba(51, 51, 51, 1);
    line-height: 26px;
  }

  .fu {
    float: right;
  }

  .top-left {
    background-color: white;
    border-radius: 8px;
    margin: 25px;
  }

  .top-left-img {
  }

  .top-left-img img {
    width: 85%;
    border-radius: 4px;
    margin: 30px 10px 10px 7px;
  }

  .top-left-jiashi {
    margin: 45px 0px 20px 0px;
    text-align: center;
    cursor: pointer;
  }

  .top-left-jiashi-span {
    /*margin: ;*/
    width: 56px;
    height: 47px;
    font-size: 30px;
    font-family: ArialMT;
    font-weight: 400;
    color: rgba(28, 192, 159, 1);
    line-height: 9px;
  }

  .top-left-jiashi-p {
    margin: 5px 0;
  }

  .top-left-fengexian img {
    float: right;
  }

  .top-right, .top-right-qiehuan {
    margin: 15px;
  }

  .top-right-qiehuan li {
    list-style: none;
    font-size: 14px;
    font-family: MicrosoftYaHei;
    font-weight: 400;
    color: rgba(153, 153, 153, 1);
    /*line-height: 26px;*/
    line-height: 33px;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
  }

  .top-right-qiehuan span {
    font-size: 14px;
    font-family: MicrosoftYaHei;
    font-weight: 400;
    color: rgba(51, 51, 51, 1);
    line-height: 26px;
  }

  .top-right-dati-one {
    /*display: inline-block;*/
    float: left;
  }

  .top-right-dati-one span {
    width: 166px;
    height: 28px;
    font-size: 28px;
    font-family: ArialMT;
    font-weight: 400;
    color: rgba(51, 51, 51, 1);
  }

  .top-right-dati-one p {
    width: 158px;
    height: 17px;
    font-size: 16px;
    font-family: MicrosoftYaHei;
    font-weight: 400;
    margin-top: 4px;
    color: rgba(102, 102, 102, 1);
    line-height: 18px;
  }

  .top-right-dati-two {
    /*display: inline-block;*/
    float: right;
  }

  .top-right-dati-two span {
    width: 57px;
    height: 40px;
    font-size: 30px;
    font-family: ArialMT;
    font-weight: 400;
    color: rgba(255, 94, 86, 1);
    line-height: 40px;
  }

  .top-right-dati-two p {
    color: #999999;
    font-family: MicrosoftYaHei;
    font-size: 14px;
    line-height: 36px;
  }
</style>
<style>
  .ant-upload-select-picture-card i {
    font-size: 32px;
    color: #999;
  }

  .ant-upload-select-picture-card .ant-upload-text {
    margin-top: 8px;
    color: #666;
  }
</style>
<style lang="less" scoped>
  .top-addButton {
    margin: 0 20px;
  }

  .clearfix {
    padding: 18px 0px 14px 0px;
  }

  .top-rwight {
    padding: 0px 15px;
  }

  .dirverUp {
    background-color: #F0F2F5;
    padding: 56px;
  }
</style>