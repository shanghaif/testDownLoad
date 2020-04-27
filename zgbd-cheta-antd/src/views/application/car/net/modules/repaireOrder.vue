<template>
  <div>
    <a-modal
      title=""
      v-model="visible"
      @ok="handleOk"
      @cancel="handleCancel"
      cancelText="取消"
      okText="下一步"
      width="1000px"
      height="745px"
      :closable="false"
    >
      <a-steps :current="current">
        <a-step title="安装需求">
        </a-step>
        <a-step title="安装地址"></a-step>
        <a-step title="完成"></a-step>
      </a-steps>
      <template v-if="this.current===0">
        <hr>
        <a-form :form="form" class="ant-advanced-search-form">
          <div class="gutter-example">
            <a-row :gutter="16">
              <a-col
                class="gutter-row"
                :span="1"
                :xs="0"
                :sm="1"
                :md="1"
                :xl="1">
              </a-col>
              <a-col
                class="gutter-row"
                :span="8"
                :xs="24"
                :sm="8"
                :md="8"
                :xl="8">
                <div class="num">
                  <span>工单编号</span>
                </div>
                <div class="gdnum">
                  <span>{{this.workorderNum}}</span>
                  <a-icon type="copy" style="margin-left: 30px" title="复制"/>
                </div>
                <a-row :gutter="24">
                  <a-col :span="24" :xs="24" :sm="24" :md="24" :xl="24">
                    <a-form-item label="设备来源:" ><!--v-bind="formItemLayout"-->
                      <a-input placeholder="请输入订单号" v-decorator="['ddnum', {rules: [{required: true,message: '请输入订单号!'}]}]"/>
                      <!--v-model="ddnum"-->
                    </a-form-item>
                  </a-col>
                  <a-col :span="24" :xs="24" :sm="24" :md="24" :xl="24">
                    <a-form-item label="智能终端:">
                      <a-select
                        mode="tags"
                        :size="size"
                        placeholder="请选择智能终端"
                        v-decorator="['terminals']"
                        @change="handleChange"
                      >
                        <!--:defaultValue="['4G部标']"-->
                        <a-select-option v-for="i in terminalList" :key="i.id">
                          {{i.name}}
                        </a-select-option>
                      </a-select>
                    </a-form-item>
                  </a-col>
                  <a-col :span="24" :xs="24" :sm="24" :md="24" :xl="24">
                    <a-form-item label="附加传感器/设备:">
                      <a-select
                        mode="tags"
                        :size="size"
                        placeholder="请选择传感器/设备"
                        v-decorator="['equipments']"
                        @change="handleChange"
                      >
                        <!--:defaultValue="['油感', '胎压','视频']"-->
                        <a-select-option v-for="i in equipmentList" :key="i.id">
                          {{i.name}}
                        </a-select-option>
                      </a-select>
                    </a-form-item>
                  </a-col>
                </a-row>
              </a-col>
              <a-col
                class="gutter-row"
                :span="2"
                :xs="0"
                :sm="1"
                :md="2"
                :xl="2">
              </a-col>
              <a-col
                class="gutter-row"
                :span="12"
                :xs="24"
                :sm="12"
                :md="12"
                :xl="12">
                <div class="clearfix">
                  <a-row :gutter="24">
                    <a-col :span="22" :xs="24" :sm="24" :md="22" :xl="22">
                      <div>车辆类型</div>
                      <div class="carla" v-for="item in cartypes" >
                        {{item}}
                      </div>

                      <!--<div class="carla">
                        <span>垃圾车</span>
                      </div>
                      <div class="carsa">
                        <span>洒水车</span>
                      </div>
                      <div class="carys">
                        <span>运输车</span>
                      </div>
                      <div class="carsd">
                        <span>扫地车</span>
                      </div>
                      <div class="label1">
                        <span>标签一</span>
                      </div>
                      <div class="label2">
                        <span>标签二</span>
                      </div>
                      <div class="label3">
                        <span>标签三</span>
                      </div>
                      <div class="label4">
                        <span>标签四</span>
                      </div>
                      <div class="label5">
                        <a-button type="dashed" style="width: 53px;height: 20px; text-align: center;padding:0">+添加</a-button>
                      </div>-->
                    </a-col>
                  </a-row>
                </div>
                <div class="terminal">
                  <a-row :gutter="24">
                    <a-col :span="24">
                      <div class="smart">关于智能终端：</div>
                      <div class="detail_font">
                        <span>请根据交通部2014第5号文件<a href="#">《道路运输车辆动态监督管理办法》</a>来选择符合您车辆监控的智能终端装置。</span>
                      </div>
                    </a-col>
                  </a-row>
                </div>
                <div class="equipment">
                  <a-row :gutter="24">
                    <a-col :span="24">
                      <div class="sensor">关于附加传感器/设备：</div>
                      <div class="detail_font">
                        <span>按您选择的智能终端是否支持扩展，您可以选择更多传感器安装来帮助您提升管理水平。</span>
                      </div>
                    </a-col>
                  </a-row>
                </div>
                <div class="installation">
                  <a-row :gutter="24">
                    <a-col :span="24">
                      <div class="install_total">安装总数</div>
                      <a-form-item>
                        <div class="" v-bind="formItemLayout">
                          <a-input-number :min="1" :max="100000" v-decorator="['valuenum', {'initialValue':1,rules: [{required: true,message: '请输入安装总数!'}]}]"/>
                          <!--v-model="valuenum"-->
                        </div>
                      </a-form-item>
                    </a-col>
                  </a-row>
                </div>
              </a-col>
            </a-row>
          </div>
        </a-form>
      </template>
      <template v-if="this.current===1">
        <hr>
        <a-form :form="form" class="ant-advanced-search-form">
          <div class="gutter-example">
            <a-row :gutter="16">
              <a-col class="gutter-row" :span="5">
              </a-col>
              <a-col class="gutter-row" :span="14">
                <a-row class="single" :span="24">
                  <a-col :span="1" class="xing">*</a-col>
                  <a-col :span="4">预约时间</a-col>
                  <a-col :span="18" v-bind="formItemLayout1">
                    <a-form-item>
                      <a-date-picker
                        placeholder="请输入日期"
                        @change="onChange"
                        style="width: 90%;"
                        v-decorator="['appointment',{'initialValue':now}, {rules: [{required: true,message: '请输入购买日期!'}]}]"
                      />
                    </a-form-item>
                  </a-col>
                </a-row>
                <a-row class="single1" :span="24">
                  <a-col :span="1" class="xing">*</a-col>
                  <a-col :span="4">联系人</a-col>
                  <a-col :span="18" v-bind="formItemLayout1">
                    <a-form-item v-for="(item,index) in list" :key="index">
                      <a-input
                        placeholder=""
                        style="width: 20%"
                        v-model="item.contact"
                        />
                      --
                      <a-input
                        placeholder=""
                        style="width: 65%;"
                        v-model="item.phone"
                       />
                      <a-icon @click="deleteItem(index)" type="minus-circle" style="width: 10%;"/>
<!--                      </div>-->
                    </a-form-item>
                  </a-col>
                </a-row>
                <a-row :span="24">
                  <a-col :span="1"></a-col>
                  <a-col :span="4"></a-col>
                  <a-col :span="19">
                    <a-button type="dashed" style="width: 85%" @click="add">+ 添加</a-button>
                  </a-col>
                </a-row>
                <a-row class="single2" :span="24">
                  <a-col :span="1" class="xing">*</a-col>
                  <a-col :span="4">详细地址</a-col>
                  <a-col :span="18" v-bind="formItemLayout1">
                    <a-form-item>
                      <a-textarea
                        placeholder="请输入安装地址;多个地址请用逗号隔开"
                        :rows="4"
                        style="width: 90%;"
                        v-decorator="['detailedAddress', {rules: [{required: true,message: '你输入的安装地址不正确请检查!'}]}]"/>
                    </a-form-item>
                  </a-col>
                </a-row>
                <a-row class="single3" :span="24">
                  <a-col :span="1" class="xing">*</a-col>
                  <a-col :span="4">备注</a-col>
                  <a-col :span="18" v-bind="formItemLayout1">
                    <a-form-item>
                      <a-textarea
                        placeholder="请输入备注"
                        :rows="4"
                        style="width: 90%;"
                        v-decorator="['remark', {rules: [{required: true,message: '你输入的备注不正确请检查!'}]}]"/>
                    </a-form-item>
                  </a-col>
                </a-row>
              </a-col>
              <a-col class="gutter-row" :span="5">
              </a-col>
            </a-row>
          </div>
        </a-form>
      </template>
      <template v-if="this.current===2">
        <main class="ant-pro-basicLayout-content ant-layout-content" style="padding-top: 0px;">
          <div class="ant-pro-grid-content">
            <div class="ant-card">
              <div class="ant-card-body">
                <div class="antd-pro-pages-result-success-result-index-result" style="margin-bottom: 16px;">
                  <div class="antd-pro-pages-result-success-result-index-icon">
                    <i aria-label="图标: check-circle" class="anticon anticon-check-circle antd-pro-pages-result-success-result-index-success">
                      <svg
                        viewBox="64 64 896 896"
                        class=""
                        data-icon="check-circle"
                        width="1em"
                        height="1em"
                        fill="currentColor"
                        aria-hidden="true"
                        focusable="false">
                        <path
                          d="M512 64C264.6 64 64 264.6 64 512s200.6 448 448 448 448-200.6 448-448S759.4 64 512 64zm193.5 301.7l-210.6 292a31.8 31.8 0 0 1-51.7 0L318.5 484.9c-3.8-5.3 0-12.7 6.5-12.7h46.9c10.2 0 19.9 4.9 25.9 13.3l71.2 98.8 157.2-218c6-8.3 15.6-13.3 25.9-13.3H699c6.5 0 10.3 7.4 6.5 12.7z"></path>
                      </svg>
                    </i></div>
                  <div class="antd-pro-pages-result-success-result-index-title">提交成功</div>
                  <div class="antd-pro-pages-result-success-result-index-extra">
                    <div class="ant-row" style="margin-bottom: 16px;">
                      <div class="ant-col ant-col-xs-0 ant-col-sm-8 ant-col-md-8 ant-col-lg-8 ant-col-xl-8"></div>
                      <div class="ant-col ant-col-xs-22 ant-col-sm-8 ant-col-md-8 ant-col-lg-14 ant-col-xl-14"><span
                        class="font1"><span>工单号:</span>{{this.workorderNum}}</span>
                      </div>
                      <div class="ant-col ant-col-xs-2 ant-col-sm-2 ant-col-md-2 ant-col-lg-2 ant-col-xl-2"><span><a-icon
                        type="copy"/></span>
                      </div>
                    </div>
                    <div class="ant-row" style="margin-bottom: 16px;">
                      <div class="ant-col ant-col-xs-0 ant-col-sm-8 ant-col-md-8 ant-col-lg-8 ant-col-xl-8">
                      </div>
                      <div class="ant-col ant-col-xs-18 ant-col-sm-8 ant-col-md-8 ant-col-lg-8 ant-col-xl-8"><span
                        class="font2"><span>专属客服: </span>谭小姐</span>
                      </div>
                      <div class="ant-col ant-col-xs-2 ant-col-sm-1 ant-col-md-1 ant-col-lg-1 ant-col-xl-1"><span><a-icon
                        type="phone"/> </span>
                      </div>
                      <div class="ant-col ant-col-xs-4 ant-col-sm-1 ant-col-md-1 ant-col-lg-1 ant-col-xl-1"><span><a-icon
                        type="message"/></span>

                      </div>
                    </div>
                    <div class="ant-row" style="margin-bottom: 16px;">
                      <div class="ant-col ant-col-xs-24 ant-col-sm-24 ant-col-md-24 ant-col-lg-24 ant-col-xl-24">
                        <span class="dec">您的工单已成功提交，稍后专属客服将与您联系确认安装信息，我们将尽快安排工程师为您服务，若预约时间有冲突还请谅解，我们将竭诚为您服务！</span>
                      </div>
                    </div>
                  </div>
                  <div class="buttonWrap">
                    <div class="ant-row">
                      <button type="button" class="ant-btn ant-btn-primary" @click="again">
                        再填一单
                      </button>
                      <button type="button" class="ant-btn">
                        返回
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </main>
      </template>
    </a-modal>
  </div>
</template>
<script>

  import ARow from 'ant-design-vue/es/grid/Row'
  import { httpAction } from '@/api/manage'
  import AFormItem from 'ant-design-vue/es/form/FormItem'
  import { getTerminal, getEquipment } from '@/views/application/car/api/api'
  import pick from 'lodash.pick'
  import moment from "moment"
  import { getAction } from '@/api/manage'

  export default {
    name: 'repaireOrder',
    components: { AFormItem, ARow },
    props: {
      data: {
        type: Array,
        default: () => []
      },
    },
    data() {
      return {
        visible: false,
        current: 0,
        list: [],
        workorderNum:'',
        model: {},
        form: this.$form.createForm(this),
        terminalList: [],        //智能终端列表
        equipmentList: [],       //传感器/设备列表
        terminals: '',           //智能终端选择
        equipments: '',          //传感器/设备选择
        cartypes: [],
        ids: [],
        contact: '',
        phone: '',
        cts: '',
        now: [],
        formItemLayout: {
          labelCol: {
            xs: { span: 24 },
            sm: { span: 9 }

          },
          wrapperCol: {
            xs: { span: 24 },
            sm: { span: 24 }
          }
        },
        formItemLayout1: {
          labelCol: {
            xs: { span: 24 },
            sm: { span: 9 }

          },
          wrapperCol: {
            xs: { span: 24 },
            sm: { span: 24 }
          }
        },
        detailedAddress: "",
      }
    },
    created() {
      getTerminal().then(res => this.terminalList = res.result)
      getEquipment().then(res => this.equipmentList = res.result)
      httpAction('/application/car/vehiclenetwork/getorderno', {}, 'get').then((res) => {
        this.workorderNum = res.result
        console.log(this.workorderNum)
      })
      console.log(this.valuenum)
    },

    methods: {
      release(selectedCarTypes,selectedRowKeys) {
        this.now = moment(new Date(),'YYYY-MM-DD hh:mm:ss');

        /*this.model = {
          terminals: [this.terminalList[0].id],
          equipments: [this.equipmentList[0].id]
        }
        let fieldsVal = pick(this.model, 'terminals','equipments')
        this.$nextTick(() => {
          this.form.setFieldsValue(fieldsVal)
        });*/

        let typetemp = [];
        selectedCarTypes.forEach(item => {
          if (typetemp.indexOf(item)==-1){
            typetemp.push(item);
          }
        });
        if (typetemp.length>10){
          for (let i=0;i<10;i++){
            this.cartypes.push(typetemp[i]);
          }
        }else{
          this.cartypes = typetemp;
        }
        selectedRowKeys.forEach(item =>{
          this.ids.push(item);
        })

        this.visible = true;
      },
      handleOk() {
        this.visible = true;

        //this.model = Object.assign({}, record);
        //let fieldsVal = pick(this.model, 'ddnum','terminals','equipments','cartype','valuenum')
        this.form.validateFields((err, values) => {
          if (!err) {
            let formData = Object.assign(this.model, values);

            // 安装需求
            if (this.current === 0) {
              if (formData.valuenum != 0 && formData.ddnum) {
                this.current += 1;
              } else {
                this.$message.warning("订单号或者安装数量有误，不能进行下一步！")
              }
            }
            // 安装地址
            else if (this.current === 1) {
              this.form.validateFields((err, values) => {
                if (!err) {
                  let formData = Object.assign(this.model, values);

                  var $this = this;
                  for (var i=0;i<this.list.length;i++){
                    this.contact += this.list[i].contact;
                    this.phone += this.list[i].phone;
                    if (i<this.list.length-1){
                      this.contact += ',';
                      this.phone += ',';
                    }
                  }
                  for (var j=0;j<formData.terminals.length;j++){
                    this.terminals += formData.terminals[j];
                    if (j<formData.terminals.length-1){
                      this.terminals += ',';
                    }
                  }
                  for (var k=0;k<formData.equipments.length;k++){
                    this.equipments += formData.equipments[k];
                    if (k<formData.equipments.length-1){
                      this.equipments += ',';
                    }
                  }
                  for (var n=0;n<this.cartypes.length;n++){
                    this.cts += this.cartypes[n];
                    if (n<this.cartypes.length-1){
                      this.cts += ',';
                    }
                  }

                  var data= {
                    "order": {
                      "id": this.workorderNum,
                      "orderNumber": formData.ddnum,
                      "smartTerminalId": this.terminals,
                      "equipmentId": this.equipments,
                      "ctypeId": this.cts,
                      "total": formData.valuenum,
                      "appointment": formData.appointment.format('YYYY-MM-DD'),
                      "contact": this.contact,
                      "phone": this.phone,
                      "detailedAddress": formData.detailedAddress,
                      "remark": formData.remark
                    },
                    "str": this.ids
                  }
                  console.log("data:",data)
                  var httpurl = '/application/car/vehiclenetwork/addworkorder'
                  httpAction(httpurl, data, 'post').then((res) => {
                    if (res.success) {
                      $this.$message.success(res.message);
                      $this.$emit('getData', true);
                      $this.$emit('reload');
                    } else {
                      $this.$message.warning(res.message);
                    }
                  })
                  this.current += 1;
                } else {
                  this.$message.warning("输入有误！")
                }
              })
            }
            // 完成
            else if (this.current === 2) {
              this.visible = false;
              this.empty();
            }

          }
        })

      },
      close() {
        this.$emit('close')
        this.visible = false
        this.empty();
      },
      handleCancel() {
        this.close()
      },
      add() {
        // item: 'contact', phone: ''
        this.list.push({})
      },
      deleteItem(index) {
        this.list.splice(index, 1)
      },
      onChange(date, dateString) {
        console.log(date, dateString)
      },
      empty () {
        this.current = 0;
        /*this.$form.createForm(this);
        this.list=[];
        this.valuenum=1;
        this.ddnum='';*/

        this.contact = '';
        this.phone = '';
        this.terminals = '';
        this.equipments = '';
        this.cts = '';
        httpAction('/application/car/vehiclenetwork/getorderno', {}, 'get').then((res) => {
          this.workorderNum = res.result;
        })
        this.cartypes = [];
        this.ids = [];
        this.list = [];
        this.form.setFieldsValue({
          terminals: [],
          equipments: [],
          ddnum: '',
          valuenum: 1,
          appointment: this.now
        });

      },
      again(){
        this.empty()
      },


    }
  }
</script>

<style scoped>
  hr {
    border: 0.5px solid #cccccc;
    margin-top: 10px;
  }

  .carla, .carsa, .carys, .carsd, .label1, .label2, .label3, .label4,.label5{
    /*width: 53px;*/
    height: 20px;
    background: inherit;
    box-sizing: border-box;
    border-width: 1px;
    border-style: solid;
    border-radius: 4px;
    box-shadow: none;
    font-family: 'Microsoft YaHei Regular', 'Microsoft YaHei';
    font-weight: 400;
    font-style: normal;
    font-size: 12px;
    text-align: center;
    line-height: 20px;
    float: left;
    margin-right: 20px;
    margin-top: 20px;
  }
  .ant-btn {
    float: left;
    margin-right: 20px;
    margin-top: 20px;
    text-align: center;
  }

  .carla {
    background-color: rgba(255, 240, 246, 1);
    border-color: rgba(255, 173, 210, 1);
    color: #F5317F;
  }

  .carsa {
    background-color: rgba(254, 240, 239, 1);
    border-color: rgba(255, 163, 158, 1);
    color: #F5222D;
  }

  .carys {
    background-color: rgba(255, 242, 232, 1);
    border-color: rgba(255, 187, 150, 1);
    color: #FA541C;
  }

  .carsd {
    background-color: rgba(246, 255, 237, 1);
    border-color: rgba(183, 235, 143, 1);
    color: #52C41A;
  }

  .label1 {
    background-color: rgba(245, 245, 245, 1);
    border-color: rgba(217, 217, 217, 1);
    color: rgba(0, 0, 0, 0.647058823529412);
  }

  .label2 {
    background-color: rgba(230, 255, 251, 1);
    border-color: rgba(135, 232, 222, 1);
    color: #13C2C2;

  }

  .label3 {
    background-color: rgba(230, 247, 255, 1);
    border-color: rgba(145, 213, 255, 1);
    color: #1890FF;
  }

  .label4 {
    background-color: rgba(249, 240, 255, 1);
    border-color: rgba(211, 173, 247, 1);
    color: #722ED1;
  }

  .smart, .sensor {
    font-weight: 650;
    font-style: normal;
    font-size: 12px;
    color: #666666;
    line-height: 24px;
  }

  .detail_font {
    font-family: 'PingFang SC Regular', 'PingFang SC';
    font-weight: 400;
    font-style: normal;
    font-size: 12px;
    line-height: 18px;
    color: #989898;
  }

  .terminal, .installation {
    margin-top: 40px;
  }

  .equipment {
    margin-top: 20px;
  }

  .install_total {
    font-family: 'MicrosoftTaiLe', 'Microsoft Tai Le';
    font-weight: 400;
    font-style: normal;
    font-size: 14px;
    color: rgba(0, 0, 0, 0.847058823529412);
    line-height: 22px;
  }

  .num {
    font-family: 'PingFang SC Regular', 'PingFang SC';
    font-weight: 400;
    font-style: normal;
    font-size: 14px;
    color: rgba(0, 0, 0, 0.847058823529412);
    line-height: 22px;
    margin-top: 20px;
  }

  .gdnum {
    font-family: 'PingFang SC Regular', 'PingFang SC';
    font-weight: 400;
    font-style: normal;
    font-size: 14px;
    color: rgba(0, 0, 0, 0.647058823529412);
    line-height: 22px;
    margin-top: 20px;
  }

  /*安装地址部分*/

  .single, .single2, .single3 {
    margin-top: 20px;
  }
.xing{
  color: red;
  font-size: 20px;
}
  .ant-btn {
    margin-top: 0;
  }
  /*安装完成部分*/
  .ant-pro-basicLayout-content {
    margin: 24px;
  }

  .ant-pro-grid-content {
    width: 100%;
    height: 100%;
    min-height: 100%;
    transition: .3s;
  }

  .ant-card {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
    color: rgba(0, 0, 0, .65);
    font-size: 14px;
    font-variant: tabular-nums;
    line-height: 1.5;
    list-style: none;
    font-feature-settings: "tnum";
    position: relative;
    background: #fff;
    border-radius: 2px;
    transition: all .3s;
  }

  .ant-layout-content {
    flex: auto;
    min-height: 0;
  }

  .ant-card-body {
    padding: 24px;
    zoom: 1;
  }

  .antd-pro-pages-result-success-result-index-result {
    width: 72%;
    margin: 0 auto;
    text-align: center;
  }

  .antd-pro-pages-result-success-result-index-result .antd-pro-pages-result-success-result-index-icon {
    margin-bottom: 24px;
    font-size: 72px;
    line-height: 72px;
  }

  .antd-pro-pages-result-success-result-index-result .antd-pro-pages-result-success-result-index-icon > .antd-pro-pages-result-success-result-index-success {
    color: #52c41a;
  }

  .antd-pro-pages-result-success-result-index-result .antd-pro-pages-result-success-result-index-title {
    margin-bottom: 16px;
    color: rgba(0, 0, 0, .85);
    font-weight: 500;
    font-size: 24px;
    line-height: 32px;
  }

  .antd-pro-pages-result-success-result-index-result .antd-pro-pages-result-success-result-index-extra {
    padding: 24px 40px;
    text-align: left;
    background: #fafafa;
    border-radius: 2px;
  }

  .antd-pro-pages-result-success-index-head-title {
    margin-bottom: 20px;
    color: rgba(0, 0, 0, .85);
    font-size: 16px;
  }

  .ant-row {
    position: relative;
    height: auto;
    margin-right: 0;
    margin-left: 0;
    zoom: 1;
    display: block;
    box-sizing: border-box;
  }

  .antd-pro-pages-result-success-result-index-result .antd-pro-pages-result-success-result-index-actions {
    margin-top: 32px;
  }

  .antd-pro-pages-result-success-result-index-result .antd-pro-pages-result-success-result-index-actions button:not(:last-child) {
    margin-right: 8px;
  }

  .antd-pro-pages-result-success-result-index-result .antd-pro-pages-result-success-result-index-actions button:not(:last-child) {
    margin-right: 8px;
  }

  .ant-btn-primary {
    color: #fff;
    background-color: #1890ff;
    border-color: #1890ff;
    text-shadow: 0 -1px 0 rgba(0, 0, 0, .12);
    box-shadow: 0 2px 0 rgba(0, 0, 0, .045);
  }

  .antd-pro-pages-result-success-result-index-result[data-v-f846a992] {
    width: 72%;
    margin: 0 auto;
    text-align: center;
  }

  .buttonWrap {
    width: 200px;
    margin: 20px auto 0;
  }

  .dec {
    font-family: 'Arial Normal', 'Arial';
    font-weight: 400;
    font-style: normal;
    font-size: 13px;
    color: #999999;
    text-align: center;
  }

  .font1, .font2 {
    font-family: 'Microsoft YaHei Regular', 'Microsoft YaHei';
    font-weight: 400;
    font-style: normal;
    font-size: 14px;
    color: rgba(0, 0, 0, 0.847058823529412);
    line-height: 22px;

  }


</style>
<style lang="scss">

</style>