<template>
  <!--新建排班-->
  <div class="classSetup">
    <a-form :form="form" @submit="handleSchedulingsa">
      <a-row>
        <div class="classSetupTop">
          <div class="dati">
            <!--第一行-->
            <div class="setup">
              <div class="setupTop"></div>
              <span class="setupText">班制设置</span>
              <div class="setupTopRight">
                <span class="setupTopRightLeft"><a-button type="primary" @click="doSchedulingList()" ghost>
                  <a-icon type="unordered-list"/>排班列表</a-button></span>
                <span class="setupTopRightRight"><a-button type="primary" ghost><a-icon
                  type="file-done"/>排班向导</a-button></span>
              </div>
            </div>
            <div class="datiA">
              <span class="cetupaText">班制名称：</span>
              <a-form-item class="cetupdBlockTwoSelect">
                <a-input
                  placeholder="请输入班制名称"
                  v-decorator="['name', { rules: [{ required: true, message: '请输入班制名称' }] },{initialValue: this.fieldsValue.name}]"
                />
              </a-form-item>

              <!--<span class="cetupbText">排班天数：</span>-->
              <!--<a-form-item class="cetupdBlockTwoSelect">-->
                <!--<a-input-number v-decorator="['number', { initialValue: this.fieldsValue.number }]" :min="1"-->
                                <!--:max="10000"/>-->
              <!--</a-form-item>-->

              <!--<a-form-item class="cetupdBlockTwoRadio">-->
                <!--<a-radio-group @change="cetupdBlockTwoRadioChange"-->
                               <!--v-decorator="['legal',{ initialValue: this.holiday }]">-->
                  <!--<a-radio :value="0">-->
                    <!--法定假日-->
                  <!--</a-radio>-->
                  <!--<a-radio :value="1">-->
                    <!--固定休息日-->
                  <!--</a-radio>-->
                <!--</a-radio-group>-->
              <!--</a-form-item>-->
              <!--<a-form-item class="checkboxCheckboxDati" v-show="show">-->
                <!--<a-checkbox-group-->
                  <!--v-decorator="['week']"-->
                  <!--class="checkboxCheckbox"-->
                <!--&gt;-->
                  <!--<a-checkbox value="1">-->
                    <!--周一-->
                  <!--</a-checkbox>-->
                  <!--<a-checkbox value="2">-->
                    <!--周二-->
                  <!--</a-checkbox>-->
                  <!--<a-checkbox value="3">-->
                    <!--周三-->
                  <!--</a-checkbox>-->
                  <!--<a-checkbox value="4">-->
                    <!--周四-->
                  <!--</a-checkbox>-->
                  <!--<a-checkbox value="5">-->
                    <!--周五-->
                  <!--</a-checkbox>-->
                  <!--<a-checkbox value="6">-->
                    <!--周六-->
                  <!--</a-checkbox>-->
                  <!--<a-checkbox value="7">-->
                    <!--周日-->
                  <!--</a-checkbox>-->
                <!--</a-checkbox-group>-->
              <!--</a-form-item>-->
              <span class="cetupaText">排班方式：</span>
              <a-form-item class="cetupdBlockTwoSelect">
                <a-select
                  @change="selectLeftValue"
                  defaultValue="按周重复"
                  v-decorator="[
                    'gender',
                    { rules: [{ required: true, message: '请选择' }] },
                    { initialValue: this.gender }
                  ]"
                  placeholder="请选择排班性质"
                >
                  <a-select-option value="按周重复">
                    按周重复
                  </a-select-option>
                  <a-select-option value="固定日期">
                    固定日期
                  </a-select-option>
                  <a-select-option value="按时长">
                    按时长
                  </a-select-option>
                </a-select>
              </a-form-item>

              <a-form-item class="cetupdBlockTwoSelectInput selectRight" v-if="ShowSelectRightWeek">
                <a-select
                  mode="multiple"
                  placeholder="请选择排班方式"
                  v-decorator="['complete',
                    {
                      rules: [
                        { type: 'array', required: true, message: 'Please select your habitual residence!' },
                      ],
                    },
                  ]"
                >
                  <a-select-option :value="item.value" v-for="item in dayList">
                    {{item.name}}
                  </a-select-option>
                </a-select>
              </a-form-item>
              <a-form-item class="cetupdBlockTwoSelectInput selectRight" v-if="ShowSelectRightBlock">
                <a-range-picker v-model="rangepicker"/>
              </a-form-item>
              <a-form-item class="cetupdBlockTwoSelectInput selectRight" v-if="ShowSelectRightTime">
                <a-range-picker v-model="rangeTimepPicker" show-time format="YYYY-MM-DD HH:mm:ss"/>
              </a-form-item>

              <div id="cetupd">
                <span class="cetupdText">考勤方式：</span>
                <div class="cetupdTable">
                  <div class="table">
                    <a-table :pagination="false" :columns="columnsa" :dataSource="dataa" :scroll="{ x: 900 }">
                      <span slot="action" slot-scope="text, record">
                        <a-popconfirm title="确定删除吗?" @confirm="dataa.splice(index,1)">
                          <a href="javascript:;" style="color: #F5222D">删除</a>
                        </a-popconfirm>
                      </span>
                    </a-table>
                    <div class="cetupdBlockOne cheta-color" v-if="!cetupdBlockTwos">
                      <a-button type="dashed" @click="cetupdTableVisible" block>
                        <a-icon type="plus"/>
                        增加
                      </a-button>
                    </div>
                    <div class="increase" v-if="!cetupdTableVisibles">
                      <div class="increaseLeft">
                        <!--<a-select style="width: 120px" placeholder="请选择排班性质" v-model="dataSelect">-->
                        <!--<a-select-option value="白班">白班</a-select-option>-->
                        <!--<a-select-option value="夜班">夜班</a-select-option>-->
                        <!--</a-select>-->
                        <!--v-decorator="['dataSelect', { rules: [{ required: true, message: '请选择排班性质' }] },{initialValue: this.fieldsValue.dataSelect}]"-->
                        <a-input style="width: 130px" placeholder="请输入排班性质" v-model="dataSelect"/>
                        <!--v-model="methodS"-->
                      </div>
                      <div class="increaseCenter">
                        <a-time-picker
                          @change="onChangeLeft"
                          :defaultOpenValue="moment('00:00:00', 'HH:mm:ss')"
                          v-model="dataTimeBegin"/>
                        <span class="increaseCenterC">至</span>
                        <a-time-picker
                          @change="onChangeRight"
                          :defaultOpenValue="moment('00:00:00', 'HH:mm:ss')"
                          v-model="dataTimeEnd"/>
                      </div>
                      <div class="increaseRight">
                        <a-cascader
                          style="width: 300px"
                          :options="options"
                          v-model="dataCascader"
                          @change="onChangeCascader"
                          placeholder="请选择片区/地点/线路"/>
                      </div>
                      <div class="increaseButton">
                        <a-button type="link" style="padding: 0px 8px" @click="increaseAdd">添加</a-button>
                        <a-button
                          type="link"
                          style="color: #F5222D;margin-left: 20px;padding: 0px 8px"
                          @click="increaseRemove">删除
                        </a-button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div>
                <span class="cetupe">
                  颜色标志：
                </span>
                <div style="height: 20px;display: inline-block">
                  <a-tooltip class="setting-drawer-theme-color-colorBlock" v-for="(item, index) in colorList"
                             :key="index" style="margin: 5px;">
                    <template slot="title">
                      {{ item.key }}
                    </template>
                    <a-tag :color="item.color" @click="color = item.color">
                      <a-icon type="check" v-if="color === item.color"></a-icon>
                    </a-tag>
                  </a-tooltip>
                </div>
              </div>
              <a-col span="24">
                <div class="cetupf">
                  <div class="cetupfText">备注说明：</div>
                  <a-form-item
                    style="width: 660px;display: inline-block"
                    hasFeedback>
                    <a-textarea placeholder="请输入备注" v-decorator="['comment']"/>
                  </a-form-item>
                </div>
              </a-col>
            </div>
          </div>
        </div>
        <div class="classSetupBody">
          <div class="datiB">
            <div class="list">
              <!--<a-button type="primary" class="lista" @click="() => modal1Visible = true" ghost>-->
                <!--<a-icon type="plus"/>-->
                <!--整组添加-->
              <!--</a-button>-->
              <!--<a-modal-->
              <!--title="添加排班人员"-->
              <!--centered-->
              <!--v-model="modal1Visible"-->
              <!--@ok="() => modal1Visible = false"-->
              <!--&gt;-->
              <!--<div style="height: 28px;line-height: 28px;cursor:pointer">-->
              <!--<a-avatar v-if="audit" slot="avatar" icon="user" :title="this.audit.name" :src="this.audit.avatar"-->
              <!--@click.native="auditAdd()"/>-->
              <!--<a-avatar v-else slot="avatar" icon="user" :title="this.audit.name" :src="this.audit.avatar"-->
              <!--@click.native="auditAdd()"/>-->
              <!--<p>{{audit.name}}</p>-->
              <!--</div>-->
              <!--<User ref="audit" @getUser="getAudit"></User>-->
              <!--</a-modal>-->
              <a-button type="primary" class="listb" @click="() => modal2Visible = true" ghost>
                <a-icon type="user"/>
                添加人员
              </a-button>
              <a-modal
                title="添加排班人员"
                centered
                v-model="modal2Visible"
                @ok="addPeaple"
              >
                <div style="height: 46px;line-height: 28px;cursor:pointer">
                  <div v-if="userList.length > 0">
                    <div v-for="user in userList" class="cheta-pl-5 cheta-block">
                      <a-avatar
                        slot="avatar"
                        icon="user"
                        :title="user.name"
                        :src="user.avatar"
                        @click.native="auditAdd()"/>
                      <p>{{ user.name }}</p>
                    </div>
                  </div>
                  <a-avatar
                    v-else
                    slot="avatar"
                    icon="user"
                    :title="this.audit"
                    :src="this.audit"
                    @click.native="auditAdd()"/>
                </div>
                <User ref="audit" @getUser="getAudit" :checkeds="true"></User>
              </a-modal>
              <a-button type="primary" class="listc" @click="() => modal3Visible = true" ghost>
                <a-icon type="car"/>
                添加车辆
              </a-button>
              <a-modal
                title="添加排班车辆"
                centered
                v-model="modal3Visible"
                @ok="addCar"
              >
                <Structure @carCheckShow="carCheckShow" @getList="getList"/>
              </a-modal>
              <div class="lists">
                <a-button class="listd" @click="cleanValue">
                  <a-icon type="delete"/>
                  全部清除
                </a-button>
              </div>
            </div>
            <div class="tableList">
              <a-row>
                <a-col span="12">
                  <div class="tableb">
                    <a-table :columns="columnsb" :pagination="{ pageSize: 5 }" :dataSource="datab" :scroll="{ x: 700 }">
                      <span slot="name" slot-scope="text, record,index">
                        {{ index + 1 }}
                      </span>
                      <span slot="action" slot-scope="text, record,index">
                        <a-popconfirm title="确定删除吗?" @confirm="datab.splice(index,1)">
                          <a href="javascript:;" style="color: #F5222D">删除</a>
                        </a-popconfirm>
                      </span>
                    </a-table>
                  </div>
                </a-col>
                <a-col span="12">
                  <div class="tablec">
                    <a-table :columns="columnsc" :pagination="{ pageSize: 5 }" :dataSource="datac" :scroll="{ x: 700 }">
                      <span slot="name" slot-scope="text, record,index">
                        {{ index + 1 }}
                      </span>
                      <span slot="action" slot-scope="text, record,index">
                        <a-popconfirm title="确定删除吗?" @confirm="datac.splice(index,1)">
                          <a href="javascript:;" style="color: #F5222D">删除</a>
                        </a-popconfirm>

                      </span>
                    </a-table>
                  </div>
                </a-col>
              </a-row>
            </div>
            <a-form-item>
              <a-button class="reset" @click="resetButton">
                重置
              </a-button>
              <a-button class="preservation" type="primary" html-type="submit">
                保存
              </a-button>
            </a-form-item>
          </div>
        </div>
      </a-row>
    </a-form>
  </div>
</template>

<script>

  import moment from 'moment'
  import Span from '../../../../../onlines/car/component/list/modules/modules/Span'
  import { getAction, postAction } from '@/api/manage'
  import { httpAction, putAction } from '@/api/manage'
  import User from '../../../../registration/modules/childmodules/User'
  import Structure from '../../../../map/Structure'
  import { updateTheme, updateColorWeak, colorList } from '@/components/tools/setting'
  import config from '@/defaultSettings'
  import pick from 'lodash.pick'

  export default {
    name: 'NewScheduling',
    components: {
      Span,
      User,
      Structure,
      pick
    },
    data() {
      return {
        updateId: '',
        dayList: [
          { name: '周一', value: '1' },
          { name: '周二', value: '2' },
          { name: '周三', value: '3' },
          { name: '周四', value: '4' },
          { name: '周五', value: '5' },
          { name: '周六', value: '6' },
          { name: '周日', value: '7' }
        ],
        peapleList: [],

        form: this.$form.createForm(this, { name: 'coordinated' }),
        columnsa,
        dataa,
        datab,
        columnsb,
        datac,
        columnsc,
        residences,
        colorList,
        completeSs: '',
        organ_id: '',
        // week1:'',
        show: false,
        value: 1,
        groupValue: 1,
        ShowSelectRight: true,
        ShowSelectRightTime: false,//排版方式 时常
        ShowSelectRightBlock: false,//排版方式 固定日期
        ShowSelectRightWeek: true,//排版方式 周
        dateFormat: 'YYYY/MM/DD',
        monthFormat: 'YYYY/MM',
        cetupdTableVisibles: true,
        cetupdBlockTwos: false,
        param: {},
        dataDati: [],
        dataSelect: '',
        methodS: '',
        dataTimeBegin: '',
        dataTimeEnd: '',
        dataCascader: [],
        dataCascaders: [],
        // holiday: '',
        userIdList: '',
        userNameList: '',
        carIdList: '',
        week: [],
        userList: [],
        fieldsValue: {},

        newAddScheduling: {
          classNumber: '5'
        },
        peopleList: [],
        carList: [],
        rangepicker: [],
        rangeTimepPicker: [],
        complete: [],
        modal1Visible: false,
        modal2Visible: false,
        modal3Visible: false,
        areaid: '',
        lineid: '',
        siteid: '',
        radioStyle: {
          display: 'block',
          height: '30px',
          lineHeight: '30px'
        },
        configBegin: {
          rules: [{ type: 'object', required: true, message: '请选择起始时间!' }]
        },
        configEnd: {
          rules: [{ type: 'object', required: true, message: '请选择结束时间!' }]
        },
        rangeConfig: {
          rules: [{ type: 'array', required: true, message: 'Please select time!' }]
        },
        color: '#1890FF',
        options: [
          {
            value: '1',
            label: '片区'
            // children: [
            //   {
            //     value: '11',
            //     label: 'Hangzhou',
            //     children: [
            //       {
            //         value: '12',
            //         label: 'West Lake',
            //       },
            //     ],
            //   },
            // ],
          },
          {
            value: '2',
            label: '地点'
            // children: [
            //   {
            //     value: '21',
            //     label: 'Nanjing',
            //     children: [
            //       {
            //         value: '22',
            //         label: 'Zhong Hua Men',
            //       },
            //     ],
            //   },
            // ],
          },
          {
            value: '3',
            label: '路线'
            // children: [
            //   {
            //     value: '31',
            //     label: 'Nanjing',
            //     children: [
            //       {
            //         value: '32',
            //         label: 'Zhong Hua Men',
            //       },
            //     ],
            //   },
            // ],
          }
        ]
      }
    },
    watch: {
      '$route'() {
        this.$destroy(true)
        this.$el.parentNode.removeChild(this.$el)
      }
    },
    created() {
      this.judge()
      //人员/车辆 列表清空
      this.dataa = []
      this.datab = []
      this.datac = []
      this.peapleList = []
      this.list = []
      this.reloadData()// 获取账户详情
      this.initTree()//获取机构
    },
    mounted() {
      const vm = this
      setTimeout(() => {
        vm.visible = false
      }, 16)
      // 当主题色不是默认色时，才进行主题编译
      if (this.primaryColor !== config.primaryColor) {
        updateTheme(this.primaryColor)
      }
      if (this.colorWeak !== config.colorWeak) {
        updateColorWeak(this.colorWeak)
      }
    },
    methods: {
      initTree() {
        getAction('/application/car/scheduling/getTree').then(res => {
          this.options = res.result
        })
      },
      onChangeCascader(value) {
      },
      judge() {
        // 做判断是否有id    是编辑还是新增
        if (this.$route.params.information) {//编辑
          var that = this
          that.updateId = ''
          if (this.$route.params.information.type === 'updatevalue') {
            that.updateId = this.$route.params.information.id
          }
          getAction('/application/car/scheduling/getDetail', { id: this.$route.params.information.id }).then(res => {//获取数据   拼接处理
            var param = res.result.schedulingParam//from表单里的数据
            // 固定休息日做判断
            // if (param.legal == '0') {//法定
            //   this.holiday = 0
            //   this.week = ''
            // } else if (param.legal == '1') {//固定
            //   this.holiday = 1
            //   this.show = true
            //   this.week = param.week
            // }
            if (param.fixationStart != null) {//排班问题
              param.gender = '固定日期'
              param.rangepicker = [moment(param.fixationStart, 'YYYY-MM-DD'), moment(param.fixation_end, 'YYYY-MM-DD')]
              this.rangepicker = [moment(param.fixationStart, 'YYYY-MM-DD'), moment(param.fixation_end, 'YYYY-MM-DD')]
              this.ShowSelectRightBlock = true
              this.ShowSelectRightWeek = false
              this.ShowSelectRightTime = false
            }
            if (param.durationStart != undefined) {
              param.gender = '按时长'
              param.rangeTimepPicker = [moment(param.durationStart, 'YYYY-MM-DD'), moment(param.durationEnd, 'YYYY-MM-DD')]
              this.rangeTimepPicker = [moment(param.durationStart, 'YYYY-MM-DD'), moment(param.durationEnd, 'YYYY-MM-DD')]
              this.ShowSelectRightBlock = false
              this.ShowSelectRightWeek = false
              this.ShowSelectRightTime = true
            }
            if (param.complete != '') {
              param.gender = '按周重复'
              param.complete = param.complete.split(',')
              /*that.complete = param.complete.split(',')*/
              this.ShowSelectRightBlock = false
              this.ShowSelectRightWeek = true
              this.ShowSelectRightTime = false
            }
            // 颜色
            this.color = param.color
            // 'number','holiday', 'week',
            this.form.setFieldsValue(pick(param, 'comment', 'name',  'start', 'end', 'gender', 'startTime', 'endTime', 'complete', 'rangepicker', 'rangeTimepPicker'))
            // 列表回显
            getAction('/application/auth/user/getDataList', { ids: res.result.schedulingParam.personid }).then(res => {
              res.result.forEach(item => {
                this.datab.push({
                  address: item.nickName
                })
              })
            })
            getAction('/application/car/scheduling/getSchedulingCarData', { schedulingId: this.$route.params.information.id  }).then(res => {
              res.result.forEach(item => {
                this.datac.push({
                  address: item.registration_no
                })
              })
            })
            this.dataa = res.result.list//考勤方式 列表的数据
          })
        }
      },
      addPeaple() {
        this.datab = []
        this.peapleList.forEach(item => {
          this.datab.push({
            address: item.name
          })
        })
        this.modal2Visible = false
      },
      addCar() {
        this.datac = []
        this.list.forEach(item => {
          this.datac.push({
            address: item.title
          })
        })
        this.modal3Visible = false
      },
      cleanValue() {
        this.datab = []
        this.datac = []
        this.peapleList = []
        this.list = []
      },
      reloadData() {// 获取账户详情
        this.spinning = true
        var id = this.id
        if (!id) {
          let userInfo = this.$store.getters.userInfo
          id = userInfo.id
          this.organ_id = id
        }
      },
      handleSchedulingsa(e) {
        e.preventDefault()
        this.personid = this.userIdList//人员ID
        this.vehicleid = this.carIdList//车辆ID
        this.form.validateFields((err, schedulingParam) => {
          if (!err) {
            // if (schedulingParam.legal == '0') {// 判断假期方式
            //   schedulingParam.week = ''
            // } else if (schedulingParam.legal == '1') {
            //   var week1 = ''
            //   schedulingParam.week.forEach(item => {
            //     week1 = week1 + item + ','
            //   })
            //   schedulingParam.week = week1
            // }
            if (schedulingParam.gender == '固定日期') {
              schedulingParam.fixationStart = this.rangepicker[0].format('YYYY-MM-DD')
              schedulingParam.fixation_end = this.rangepicker[1].format('YYYY-MM-DD')
              schedulingParam.rangepicker = {}
              schedulingParam.complete = ''

            } else if (schedulingParam.gender == '按周重复') {
              this.listCompleteS = schedulingParam.complete
              var that = this
              that.completeSs = ''
              this.listCompleteS.forEach(item => {
                that.listCompleteS.push(item)
                that.completeSs = this.completeSs + item + ','
                schedulingParam.complete = that.completeSs.substring(0, that.completeSs.lastIndexOf(','))
              })

              schedulingParam.rangeTimepPicker = ''
              schedulingParam.rangepicker = ''
            } else if (schedulingParam.gender == '按时长') {
              schedulingParam.durationEnd = this.rangeTimepPicker[0].format('YYYY-MM-DD HH:mm:ss')
              schedulingParam.durationStart = this.rangeTimepPicker[1].format('YYYY-MM-DD HH:mm:ss')
              schedulingParam.rangeTimepPicker = ''
              schedulingParam.complete = ''
            }
            schedulingParam.fieldsValueGender = schedulingParam.gender//排班方式
            schedulingParam.personid = this.personid//人员ID
            schedulingParam.vehicleid = this.vehicleid//车辆ID
            schedulingParam.color = this.color//颜色标志
            schedulingParam.organ_id = this.organ_id//当前机构ID
            var that = this
            var newList = []
            that.dataa.forEach(item => {
              newList.push(item)
              item.areaid = item.areaid
            })

            delete schedulingParam['rangepicker']
            if (that.updateId) {
              schedulingParam.id = that.updateId
            }
            var schedulingVo = { schedulingParam: schedulingParam, list: newList }
            postAction('/application/car/scheduling/edit', schedulingVo).then(res => {
              this.$router.push({ path: '/cheduiList' })
            })
          }

        })

      },

      carCheckShow(list) {
        var that = this
        // that.list = []
        that.list.forEach(item => {
          that.list.push(item)
          that.carIdList = this.carIdList + item.key + ','//添加车辆id
        })


        this.list = list.filter(function(item) {
          return item.treeType == 2
        })
        // 解决点击load bug
        if (this.list.length < this.limit) {
          this.limit = this.list.length
        }
        // 解决清空的bug
        if (this.limit < 4) {
          this.limit = 4
        }
        this.setListGpsData()
        if (this.list.length > 0) {
          this.showModel = 'leftListShow'
          this.isCheck = true
        }
        else if (this.list.length == 0) {
          this.showModel = 'leftGuiShow'
          this.isCheck = false
        }
      },
      changeColor(color) {
      },
      getList(teeData) {
        this.list = []
        treeToList(teeData, this.list, item => item.treeType == 2)
      },
      handleDelete: function(id) {
        var that = this
        deleteMall(that.url.delete, { id: id }).then((res) => {
          console.log(res)
          if (res.success) {
            that.$message.success(res.message)
            that.loadData()
            this.$refs.JeecgOrderCustomerList.loadData()
            this.$refs.JeecgOrderTicketList.loadData()
          } else {
            that.$message.warning(res.message)
          }
        })
      },
      auditAdd() {
        this.$refs.audit.doInvite()
      },
      getAudit(userList) {// 获取用户ID
        var that = this
        this.userList = userList
        that.peapleList = []
        this.userList.forEach(item => {
          that.peapleList.push(item)
          that.userIdList = this.userIdList + item.userId + ','//添加人员id
          that.userNameList = this.userNameList + item.name + ','//添加人员id
        })
      },
      increaseAdd(e) {
        this.dataDati = []
        if (this.dataDati) {
          this.dataDati.push({})
        }
        this.dataDati[0].property = this.dataSelect//白班/夜班
        this.dataDati[0].startTime = (this.dataTimeBegin).format('HH:mm:ss')//起始时间
        this.dataDati[0].endTime = (this.dataTimeEnd).format('HH:mm:ss')//结束时间
        this.dataCascader = this.dataCascader
        this.dataDati[0].dataCascadersLeft = {}
        this.dataDati[0].dataCascadersRight = {}
        this.dataDati[0].areaid = ''
        this.dataDati[0].siteid = ''
        this.dataDati[0].lineid = ''
        this.options.forEach(item => {

          if (this.dataCascader[0] == item.value) {
            this.dataDati[0].dataCascadersLeft = item.label
            if (item.children) {
              item.children.forEach(items => {
                if (this.dataCascader[1] = items.value) {
                  this.dataDati[0].dataCascadersRight = items.label
                  if (item.value == '-1') {//片区
                    this.dataDati[0].areaid = parseInt(items.value)
                  } else if (item.value == '-2') {//地点
                    this.dataDati[0].siteid = parseInt(items.value)
                  } else if (item.value == '-3') {//线路
                    this.dataDati[0].lineid = parseInt(items.value)
                  }
                }
              })
            }
          }
        })
        this.dataDati[0].dataCascader = this.dataCascader
        this.dataDati.forEach(item => {
          this.dataa.push({
            property: item.property,
            startTime: item.startTime,
            endTime: item.endTime,
            label: item.dataCascadersLeft + '-' + item.dataCascadersRight,
            // areaid: item.dataCascader
            areaid: item.areaid,
            siteid: item.siteid,
            lineid: item.lineid
          })
        })


        this.cetupdBlockTwos = false
        this.cetupdTableVisibles = true
        this.dataSelect = ''
        this.dataTimeEnd = ''
        this.dataTimeBegin = ''
        this.dataCascader = ''
      },
      increaseRemove() {
        this.dataSelect = ''
        this.dataTimeEnd = ''
        this.dataTimeBegin = ''
        this.dataCascader = ''
        this.cetupdBlockTwos = false
        this.cetupdTableVisibles = true
      },
      doSchedulingList() {
        this.$router.push({ path: '/cheduiList' })
      },
      resetButton(e) {//重置
        var that = this
        that.form.resetFields()//清除from内容
        this.show = false
        var fieldsValue = fieldsValue
        that.fieldsValue = {}
        //人员/车辆 列表清空
        this.datab = []
        this.datac = []
        this.peapleList = []
        this.list = []
      },

      onChangeLeft(time, timeString) {
        console.log(time, timeString)
      },
      onChangeRight(time, timeString) {
        console.log(time, timeString)
      },
      moment,
      selectLeftValue(value) {//排班方式选择
        console.log(`selected ${value}`)
        if (value == '固定日期') {
          this.ShowSelectRightBlock = true
          this.ShowSelectRightTime = false
          this.ShowSelectRightWeek = false
        } else if (value == '按周重复') {
          this.ShowSelectRightBlock = false
          this.ShowSelectRightTime = false
          this.ShowSelectRightWeek = true
        } else if (value == '按时长') {
          this.ShowSelectRightBlock = false
          this.ShowSelectRightTime = true
          this.ShowSelectRightWeek = false
        }
      },
      cetupdBlockTwoRadioChange(e) {
        this.targetValue = e.target.value
        if (this.targetValue == 1) {
          this.show = true
        } else {
          this.show = false
        }
      },
      cetupdTableVisible() {
        this.dataSelect = ''
        this.cetupdBlockTwos = true
        this.cetupdTableVisibles = false

      },
      deletePersonList(index) {
        console.log(index)
        this.contactVoList.splice(index, 1)
      },
      handleSubmit(e) {//考勤方式 确定
        this.$message.success('添加成功', 3)
        this.cetupdBlockTwos = false
        this.cetupdTableVisibles = true
        e.preventDefault()
        this.form.validateFieldsAndScroll((err, values) => {
          if (!err) {
            console.log('Received values of form: ', values)
          }
        })
        this.form.validateFields((err, fieldsValue) => {
          if (err) {
            return
          }
          const values = {
            'timePickerBegin': fieldsValue['timePickerBegin'].format('HH:mm:ss'),
            'timePickerEnd': fieldsValue['timePickerEnd'].format('HH:mm:ss')
          }
          console.log('Received values of form: ', values)
        })
      },
      onOk(value) {
        console.log('onOk: ', value)
      }
    }
  }

  const columnsa = [
    { title: '性质', width: 220, dataIndex: 'property', key: 'name', fixed: 'left' },
    { title: '起始时间', width: 130, dataIndex: 'startTime', key: 'begin', fixed: 'left' },
    { title: '结束时间', width: 130, dataIndex: 'endTime', key: 'end', fixed: 'left' },
    { title: '片区/线路/地点', dataIndex: 'label', key: '1' },
    // { title: '片区/线路/地点', dataIndex: 'areaid', key: '1' },
    {
      title: '操作',
      key: 'operation',
      fixed: 'right',
      width: 120,
      scopedSlots: { customRender: 'action' }
    }
  ]
  const residences = [
    {
      value: '片区',
      label: '片区',
      children: [
        {
          value: '黄埔大区',
          label: '黄埔大区',
          children: [
            {
              value: '黄埔桥以北',
              label: '黄埔桥以北'
            }
          ]
        }
      ]
    },
    {
      value: '线路',
      label: '线路',
      children: [
        {
          value: '大观南路',
          label: '大观南路',
          children: [
            {
              value: '大观南路至航天奇观',
              label: '大观南路至航天奇观'
            }
          ]
        }
      ]
    }, {
      value: '地点',
      label: '地点',
      children: [
        {
          value: '广州市',
          label: '广州市',
          children: [
            {
              value: '广州塔附近',
              label: '广州塔附近'
            }
          ]
        }
      ]
    }
  ]
  const dataa = []

  const columnsb = [
    { title: '序号', width: 120, dataIndex: 'name', key: 'name', scopedSlots: { customRender: 'name' }, fixed: 'left' },
    // { title: '所属项目', width: 120, dataIndex: 'age', key: 'age', fixed: 'left' },
    { title: '人员姓名', dataIndex: 'address', key: '1' },
    // { title: '排班方式', dataIndex: 'scheduling', key: '2' },
    // { title: '标志', dataIndex: 'sign', key: '3' },
    // { title: '排班天数', dataIndex: 'day', key: '4' },
    // { title: '考勤方式', dataIndex: 'work', key: '5' },
    {
      title: '操作',
      key: 'operation',
      fixed: 'right',
      width: 120,
      scopedSlots: { customRender: 'action' }
    }
  ]
  const datab = []
  const columnsc = [
    { title: '序号', width: 120, dataIndex: 'name', key: 'name', fixed: 'left' },
    // { title: '所属项目', width: 120, dataIndex: 'subordinate', key: 'age', fixed: 'left' },
    { title: '车辆', dataIndex: 'address', key: '1' },
    // { title: '排班方式', dataIndex: 'scheduling', key: '2' },
    // { title: '标志', dataIndex: 'sign', key: '3' },
    // { title: '排班天数', dataIndex: 'day', key: '4' },
    // { title: '考勤方式', dataIndex: 'work', key: '5' },
    {
      title: '操作',
      key: 'operation',
      fixed: 'right',
      width: 120,
      scopedSlots: { customRender: 'action' }
    }
  ]
  const datac = []
</script>

<style scoped>
  .classSetup {
    padding: 16px 16px 0px 16px;
    background-color: #f0f2f5;
  }

  .classSetupTop {
    background-color: white;
    border-radius: 8px;
    padding: 25px;
  }

  .classSetupBody {
    background: rgba(255, 255, 255, 1);
    border-radius: 8px;
    margin: 16px 0px;
  }

  .checkboxCheckboxDati {
    margin-left: 175px;
    margin-top: -15px;
  }


</style>
<style scoped>
  .increaseLeft, .increaseCenter, .increaseRight, .increaseButton {
    display: inline-block;
  }

  .increaseButton {
    margin: 0px 0px 0px 50px;
  }

  .increaseCenter {
    margin: 0 25px;
  }

  .increaseCenterC {
    margin: 0px 5px;
  }
</style>
<style scoped>
  .setupText {
    position: absolute;
    font-size: 16px;
    margin-top: -2px;
    font-family: Microsoft YaHei;
    color: rgba(51, 51, 51, 1);
  }

  .setupTop {
    margin: 2px 8px;
    display: inline-block;
    width: 3px;
    height: 16px;
    background: rgba(28, 192, 159, 1);
  }

  .datiA {
    padding: 10px 18px;
    height: 100%;
    width: 100%;
    display: inline-block;
  }

  #cetupd {
    display: inline-block;
  }

  .cetupaText {
    height: 40px;
    line-height: 40px;
    display: block;
    font-size: 14px;
    font-family: Microsoft YaHei;
    color: rgba(102, 102, 102, 1);
  }

  .cetupbText {
    height: 40px;
    line-height: 40px;
    margin-left: 200px;
    display: inline-block;
    font-size: 14px;
    font-family: Microsoft YaHei;
    color: rgba(102, 102, 102, 1);
  }

  .cetupdText {
    font-size: 14px;
    font-family: Microsoft YaHei;
    color: rgba(102, 102, 102, 1);
  }

  .cetupe {
    display: inline-block;
    height: 40px;
    line-height: 40px;
  }

  #cetupd {
    padding: 20px 0px;
  }

  .cetupdTable {
    width: 950px;
  }

  .cetupdText, .cetupdTable {
    display: inline-block;
    vertical-align: top;
  }

  .setting-drawer-theme-color-colorBlock {
    width: 20px;
    height: 20px;
    border-radius: 2px;
    float: left;
    cursor: pointer;
    margin-right: 8px;
    padding-left: 0px;
    padding-right: 0px;
    text-align: center;
    color: #fff;
    font-weight: 700;

  i {
    font-size: 14px;
  }

  }

  .cetupeColora:hover, .cetupeColorb:hover, .cetupeColorc:hover, .cetupeColord:hover {
    border: #ffffff 1px solid;
  }

  .cetupf {
    margin: 10px 0px;
  }

  .cetupfText {
    display: inline-block;
    vertical-align: top;
  }

  .selectRight {
    margin: 0 20px;
  }

  .cetupdBlockOne {
    height: 35px;
    line-height: 35px;
  }

  .cetupdBlockTwoSelect {
    width: 180px;
    height: 40px;
    line-height: 40px;
  }

  .cetupdBlockTwoSelectInput {
    margin-bottom: 24px;
    width: 500px;
    height: 40px;
    line-height: 40px;
    display: inline-block;
  }

  .cetupdBlockTwoRadio {
    height: 40px;
    line-height: 40px;
    margin: 0px 70px;
  }

  .cetupdBlockTwoSelect {
    display: inline-block;
  }

  .setupTopRight {
    float: right;
  }

  .setupTopRight span {
    margin: 0 10px;
  }

</style>
<style lang="less">
  .cetupdBlockTwoDetermine > .ant-btn {
    padding: 0 8px;
  }

  .ant-form-item-control {
    line-height: 100%;
  }

</style>

<style scoped>
  .datiB {
    padding: 10px 10px;
    height: 100%;
    width: 100%;
    display: inline-block;

  }

  .list {
    margin: 10px;
  }

  .lista, .listb, .listc, .listd {
    margin-right: 10px;
    cursor: pointer;
  }

  .lists {
    display: inline-block;
    float: right;
  }

  .tableb, .tablec {
    padding: 10px;
    height: 414px;
  }

  .tableb {
    padding-right: 10px;
  }

  .tablec {
    padding-right: 10px;
  }

  .reset, .preservation {
    margin: 0 10px;
  }
</style>
