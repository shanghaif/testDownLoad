<template>
  <!--大体-->
  <div class="dati datis">
    <a-form
      :form="form"
      @submit="handleSubmit"
    >
    <!--头-->
    <div class="SaleTop">
      <div class="SaleTopLeft">
        <span class="SaleTopLeftIcon">图标</span>
        <span class="SaleTopLeftText">流程：新建-收款合同</span>
      </div>
      <div class="SaleTopRight">
        <a-button class="SaleTopRightNo">取消</a-button>
        <a-button class="SaleTopRightYes" type="primary">确定</a-button>
      </div>
    </div>
    <!--身体 外层div-->
    <div class="SaleBodyUp">
      <!--身体 内层div-->
      <div class="SaleDown">
        <!--表单 标题-->
        <div class="SaleDoForm">
          <div class="SaleDoFormTop">
            <span class="SaleDoFoTopLogo">LOGO</span>
            <div class="SaleDoFoTopText">
              <p class="SaleDoFoTopUp">收款合同</p>
              <p class="SaleDoFoTopDown">CONTRACT APPROVAL FORM</p>
            </div>
          </div>
        </div>
          <div class="SaleDoForm SaleDoFormdow">
          <div class="SaleDoFoBody">
            <div class="SaleDoFormBodyTop">
              <span class="SaleDoFormBodyTopL"></span>
              <span class="SaleDoFormBodyTopR">基本信息</span>
              <div class="SaleDoFormBodyTopRF" @click="basicShow = !basicShow" >
                <span v-if="basicShow"><a-icon type="minus" /></span>
                <span v-else ><a-icon type="plus" /></span>
              </div>
            </div>
            <div v-if="basicShow">
                <a-row>
                  <a-col :xl="22" :lg="22" :md="22" :sm="24" :xs="24">
                      <a-form-item
                        :label-col="{ span: 4 }"
                        :wrapper-col="{ span: 20 }"
                        label="合同名称"
                      >
                      <a-input
                        v-decorator="[
                          'name',
                          { rules: [{ required: true, message: '请输入合同名称！' }] },
                        ]"
                      />
                    </a-form-item>
                  </a-col>
                  <a-col :xl="2" :lg="2" :md="2" :sm="0" :xs="0"></a-col>
                  <a-col :xl="11" :lg="11" :md="11" :sm="24" :xs="24">
                    <a-form-item
                      :label-col="{ span: 8 }"
                      :wrapper-col="{ span: 16 }"
                      label="合同类型"
                    >
                      <a-input-search
                        v-decorator="[
                          'name',
                          { rules: [{ required: true, message: '请选择合同类型！' }] },
                        ]"
                      />
                    </a-form-item>
                  </a-col>
                  <a-col :xl="11" :lg="11" :md="11" :sm="24" :xs="24">
                    <a-form-item
                      :label-col="{ span: 8 }"
                      :wrapper-col="{ span: 16 }"
                      label="合同编号"
                    >
                      <a-input
                        disabled
                        placeholder="系统默认给出"
                        v-decorator="[
                          'name',
                          { rules: [{ required: true,  }] },
                        ]"
                      />
                    </a-form-item>
                  </a-col>
                  <a-col :xl="2" :lg="2" :md="2" :sm="0" :xs="0"></a-col>
                  <a-col :xl="11" :lg="11" :md="11" :sm="24" :xs="24">
                    <a-form-item
                      :label-col="{ span: 8 }"
                      :wrapper-col="{ span: 16 }"
                      label="合同金额"
                    >
                      <a-input
                        v-decorator="[
                          'name',
                          { rules: [{ required: true, message: '请输入合同金额！' }] },
                        ]"
                      />
                    </a-form-item>
                  </a-col>
                  <a-col :xl="11" :lg="11" :md="11" :sm="24" :xs="24">
                    <a-form-item
                      :label-col="{ span: 8 }"
                      :wrapper-col="{ span: 16 }"
                      label="服务费"
                    >
                      <a-input
                        placeholder="总额/每年"
                        v-decorator="[
                          'name',
                          { rules: [{ required: true, message: '请输入合同金额！' }] },
                        ]"
                      />
                    </a-form-item>
                  </a-col>
                  <a-col :xl="2" :lg="2" :md="2" :sm="0" :xs="0"></a-col>
                  <a-col :xl="11" :lg="11" :md="11" :sm="24" :xs="24">
                    <a-form-item
                      :label-col="{ span: 8 }"
                      :wrapper-col="{ span: 16 }"
                      label="已收款金额"
                    >
                      <a-input
                        v-decorator="[
                          'name',
                          { rules: [{ required: true, message: '请输入已收款金额！' }] },
                        ]"
                      />
                    </a-form-item>
                  </a-col>
                  <a-col :xl="11" :lg="11" :md="11" :sm="24" :xs="24">
                    <a-form-item
                      :label-col="{ span: 8 }"
                      :wrapper-col="{ span: 16 }"
                      label="应收款金额"
                    >
                      <a-input
                        v-decorator="[
                          'name',
                          { rules: [{ required: true, message: '请输入应收款金额！' }] },
                        ]"
                      />
                    </a-form-item>
                  </a-col>
                  <a-col :xl="2" :lg="2" :md="2" :sm="0" :xs="0"></a-col>
                  <a-col :xl="11" :lg="11" :md="11" :sm="24" :xs="24">
                    <a-form-item
                      :label-col="{ span: 8 }"
                      :wrapper-col="{ span: 16 }"
                      label="服务年限">
                      <a-input-number v-decorator="['input-number', { initialValue: 3 }]" :min="1" :max="10" />
                      <span class="ant-form-text">
                        年
                      </span>
                    </a-form-item>
                  </a-col>
                  <a-col :xl="11" :lg="11" :md="11" :sm="24" :xs="24">
                    <a-form-item
                      :label-col="{ span: 8 }"
                      :wrapper-col="{ span: 16 }"
                      label="保修期">
                      <a-input-number v-decorator="['input-number', { initialValue: 3 }]" :min="1" :max="10" />
                      <span class="ant-form-text">
                        年
                      </span>
                    </a-form-item>
                  </a-col>
                  <a-col :xl="2" :lg="2" :md="2" :sm="0" :xs="0"></a-col>
                  <a-col :xl="11" :lg="11" :md="11" :sm="24" :xs="24">
                    <a-form-item
                      :label-col="{ span: 8 }"
                      :wrapper-col="{ span: 16 }"
                      label="负责人"
                    >
                      <a-input-search
                        @search="onDuty"
                        v-decorator="[
                          'name',
                          { rules: [{ required: true, message: '请选择负责人！' }] },
                        ]"
                      />
                    </a-form-item>
                  </a-col>
                  <a-col :xl="11" :lg="11" :md="11" :sm="24" :xs="24">
                    <a-form-item
                      :label-col="{ span: 8 }"
                      :wrapper-col="{ span: 16 }"
                      label="联系电话"
                    >
                      <a-input
                        v-decorator="[
                          'name',
                          { rules: [{ required: true, message: '请输入联系电话！' }] },
                        ]"
                      />
                    </a-form-item>
                  </a-col>
                  <a-col :xl="2" :lg="2" :md="2" :sm="0" :xs="0"></a-col>
                  <a-col :xl="11" :lg="11" :md="11" :sm="24" :xs="24">

                    <a-form-item
                      :label-col="{ span: 8 }"
                      :wrapper-col="{ span: 16 }"
                      label="创建日期"
                    >
                      <a-input
                        disabled
                        placeholder="系统默认给出"
                        v-decorator="[
                          'name',
                          { rules: [{ required: true,  }] },
                        ]"
                      />
                    </a-form-item>
                  </a-col>
                  <a-col :xl="11" :lg="11" :md="11" :sm="24" :xs="24">
                    <a-form-item
                      :label-col="{ span: 8 }"
                      :wrapper-col="{ span: 16 }"
                      label="合同有效期">
                        <a-range-picker v-decorator="['range-picker', rangeConfig]" />
                      </a-form-item>
                  </a-col>
                  <a-col :xl="2" :lg="2" :md="2" :sm="0" :xs="0"></a-col>
                  <a-col :xl="22" :lg="22" :md="22" :sm="24" :xs="24">
                    <a-form-item
                      :label-col="{ span: 4 }"
                      :wrapper-col="{ span: 20 }"
                      label="合同说明"
                    >
                      <a-textarea
                        v-decorator="[
                          'name',
                          { rules: [{ required: true, message: '请输入合同说明！' }] },
                        ]"
                      />
                    </a-form-item>
                  </a-col>
                  <a-col :xl="2" :lg="2" :md="2" :sm="0" :xs="0"></a-col>
                  <a-col :xl="22" :lg="22" :md="22" :sm="24" :xs="24">
                    <a-form-item
                      :label-col="{ span: 4 }"
                      :wrapper-col="{ span: 20 }"
                      label="备注"
                    >
                      <a-textarea
                        v-decorator="[
                          'name',
                          { rules: [{ required: true, message: '请输入备注！' }] },
                        ]"
                      />
                    </a-form-item>
                  </a-col>
                  <a-col :xl="2" :lg="2" :md="2" :sm="0" :xs="0"></a-col>
                  <a-col :xl="22" :lg="22" :md="22" :sm="24" :xs="24">
                    <a-form-item
                      :label-col="{ span: 4 }"
                      :wrapper-col="{ span: 20 }"
                      label="附件"
                    >
                      <a-upload
                        v-decorator="[
                          'upload',
                          {
                            valuePropName: 'fileList',
                            getValueFromEvent: normFile,
                          },
                        ]"
                        name="logo"
                        action="/upload.do"
                        list-type="picture"
                      >
                        <a-button> <a-icon type="upload" /> 上传附件 </a-button>
                      </a-upload>
                    </a-form-item>
                  </a-col>
                  <a-col :xl="2" :lg="2" :md="2" :sm="0" :xs="0"></a-col>

                </a-row>
            </div>
            <div class="SaleDoFormBodyIn">
              <span class="SaleDoFormBodyInL"></span>
              <span class="SaleDoFormBodyInR">客户信息</span>
              <div class="SaleDoFormBodyTopRF" @click="customerShow = !customerShow" >
                <span v-if="customerShow"><a-icon type="minus" /></span>
                <span v-else ><a-icon type="plus" /></span>
              </div>
            </div>
            <div v-if="customerShow">
              <a-row>
                <a-col :xl="11" :lg="11" :md="11" :sm="24" :xs="24">
                  <a-form-item
                    :label-col="{ span: 8 }"
                    :wrapper-col="{ span: 16 }"
                    label="客户名称"
                  >
                    <a-input-search
                      @search="onCustomer"
                      v-decorator="[
                            'name',
                            { rules: [{ required: true, message: '请输入客户名称！' }] },
                          ]"
                    />
                    <a-modal
                      title="客户选择"
                      :visible="customerVisible"
                      @ok="customerOk"
                      :confirmLoading="customerLoading"
                      @cancel="customerCancel"
                    >
                      <div class="lately">
                        <a-input-search placeholder="input search text" style="width: 100px" @search="onSearch" />

                      </div>
                      <a-tabs defaultActiveKey="1" @change="customerCallback">
                        <a-tab-pane tab="最近" key="1">



                        </a-tab-pane>
                        <a-tab-pane tab="合作伙伴" key="2" forceRender>Content of Tab Pane 2</a-tab-pane>
                        <a-tab-pane tab="供应商" key="3">Content of Tab Pane 3</a-tab-pane>
                        <a-tab-pane tab="常用组" key="4">Content of Tab Pane 3</a-tab-pane>
                      </a-tabs>
                    </a-modal>
                  </a-form-item>
                </a-col>



                <a-col :xl="11" :lg="11" :md="11" :sm="24" :xs="24">
                  <a-form-item
                    :label-col="{ span: 8 }"
                    :wrapper-col="{ span: 16 }"
                    label="通讯地址"
                  >
                    <a-input
                      v-decorator="[
                            'name',
                            { rules: [{ required: true, message: '请输入通讯地址！' }] },
                          ]"
                    />
                  </a-form-item>
                </a-col>
                <a-col :xl="2" :lg="2" :md="2" :sm="0" :xs="0"></a-col>
                <a-col :xl="11" :lg="11" :md="11" :sm="24" :xs="24">
                  <a-form-item
                    :label-col="{ span: 8 }"
                    :wrapper-col="{ span: 16 }"
                    label="联系人"
                  >
                    <a-input
                      v-decorator="[
                            'name',
                            { rules: [{ required: true, message: '请输入联系人！' }] },
                          ]"
                    />
                  </a-form-item>
                </a-col>
                <a-col :xl="11" :lg="11" :md="11" :sm="24" :xs="24">
                  <a-form-item
                    :label-col="{ span: 8 }"
                    :wrapper-col="{ span: 16 }"
                    label="联系方式"
                  >
                    <a-input
                      v-decorator="[
                            'name',
                            { rules: [{ required: true, message: '请输入联系方式！' }] },
                          ]"
                    />
                  </a-form-item>
                </a-col>
                <a-col :xl="2" :lg="2" :md="2" :sm="0" :xs="0"></a-col>
                <a-col :xl="11" :lg="11" :md="11" :sm="24" :xs="24">
                  <a-form-item
                    :label-col="{ span: 8 }"
                    :wrapper-col="{ span: 16 }"
                    label="开户行"
                  >
                    <a-input
                      v-decorator="[
                            'name',
                            { rules: [{ required: true, message: '请输入开户行！' }] },
                          ]"
                    />
                  </a-form-item>
                </a-col>
                <a-col :xl="11" :lg="11" :md="11" :sm="24" :xs="24">
                  <a-form-item
                    :label-col="{ span: 8 }"
                    :wrapper-col="{ span: 16 }"
                    label="开户行账号"
                  >
                    <a-input
                      v-decorator="[
                            'name',
                            { rules: [{ required: true, message: '请输入开户行账号！' }] },
                          ]"
                    />
                  </a-form-item>
                </a-col>
                <a-col :xl="2" :lg="2" :md="2" :sm="0" :xs="0"></a-col>
              </a-row>
            </div>
            <div class="SaleDoFormBodyIn">
              <span class="SaleDoFormBodyInL"></span>
              <span class="SaleDoFormBodyInR">需求信息</span>
              <div class="SaleDoFormBodyTopRF" @click="demandShow = !demandShow" >
                <span v-if="demandShow"><a-icon type="minus" /></span>
                <span v-else ><a-icon type="plus" /></span>
              </div>
            </div>
            <div v-if="demandShow">
              <a-row>
                <a-col :xl="12" :lg="12" :md="12" :sm="24" :xs="24">

                </a-col>
                <a-col :xl="12" :lg="12" :md="12" :sm="24" :xs="24">

                </a-col>
              </a-row>

            </div>
            <div class="SaleDoFormBodyIn">
              <span class="SaleDoFormBodyInL"></span>
              <span class="SaleDoFormBodyInR">合同进度</span>
              <div class="SaleDoFormBodyTopRF" @click="arrangeShow = !arrangeShow" >
                <span v-if="arrangeShow"><a-icon type="minus" /></span>
                <span v-else ><a-icon type="plus" /></span>
              </div>
            </div>
            <div v-if="arrangeShow">


            </div>
          </div>


        </div>


      </div>
    </div>
    </a-form>
  </div>
</template>

<script>
  import ACol from 'ant-design-vue/es/grid/Col'
  import AInputSearch from 'ant-design-vue/es/input/Search'
  export default {
    name: 'contractAdd',
    components: { AInputSearch, ACol },
    data() {
      return {
        form: this.$form.createForm(this),
        basicShow:true,
        demandShow:true,
        arrangeShow:true,
        customerShow:true,
        ModalText: 'Content of the modal',
        customerVisible: false,
        customerLoading: false,
        tailFormItemLayout: {
          wrapperCol: {
            xs: {
              span: 24,
              offset: 0,
            },
            sm: {
              span: 16,
              offset: 8,
            },
          },
          },
        formItemLayout: {//独占一行
          labelCol: {
            xs: { span: 6 },
            sm: { span: 2 },
          },
          wrapperCol: {
            xs: { span: 18 },
            sm: { span: 22 },
          },
        },

      }
    },
    methods: {
      customerCallback(key){
        console.log(key);
  },
      onCustomer() {
        this.customerVisible = true;
      },
      customerOk(e) {
        this.ModalText = 'The modal will be closed after two seconds';
        this.confirmLoading = true;
        setTimeout(() => {
          this.customerVisible = false;
          this.confirmLoading = false;
        }, 2000);
      },
      customerCancel(e) {
        console.log('Clicked cancel button');
        this.customerVisible = false;
      },
      handleSubmit(e) {
        e.preventDefault()
        this.form.validateFields((err, fieldsValue) => {
          if (err) {
            return;
          }
          const rangeValue = fieldsValue['range-picker'];
          const values = {
              ...fieldsValue,
              'range-picker': [rangeValue[0].format('YYYY-MM-DD'), rangeValue[1].format('YYYY-MM-DD')],
          }
            // console.log('Received values of form: ', values);
        })


      },
      normFile(e) {
        console.log('Upload event:', e);
        if (Array.isArray(e)) {
          return e;
        }
        return e && e.fileList;
      },
      onDuty(value) {
        console.log(value);
      },

    },
  }
</script>

<style scoped>
  .SaleTop {
    height: 72px;
    line-height: 72px;
    background: rgba(255, 255, 255, 1);
    border-radius: 4px;
    padding: 0 50px;
  }

  .SaleTopLeft {
    display: inline-block;
  }

  .SaleTopRight {
    float: right;
  }

  .SaleDoFormTop {
    padding: 10px 0px;
  }

  .SaleTopLeftText {
    font-size: 16px;
    font-family: Microsoft YaHei;
    font-weight: 400;
    color: rgba(51, 51, 51, 1);
  }

  .SaleTopRightNo {
    margin: 0 10px;
  }

  .SaleBodyUp {
    padding: 12px 50px 20px 50px;
    background-color: #F7F8FA;
    overflow-y: scroll;
  }

  .SaleDown {
    background-color: #ffffff;
    overflow-y: scroll;
  }

  .SaleDoFoTopLogo {
    position: absolute;
  }

  .SaleDoFoTopText {
    text-align: center;
  }

  .SaleDoFoTopUp {
    font-size: 24px;
    font-family: Microsoft YaHei;
    font-weight: 400;
    color: rgba(51, 51, 51, 1);
  }

  .SaleDoFoTopDown {
    font-size: 14px;
    font-family: Microsoft YaHei;
    font-weight: 400;
    color: rgba(153, 153, 153, 1);
  }

  .SaleDoFormBodyTopL,.SaleDoFormBodyInL {
    width: 2px;
    height: 16px;
    margin-left: 20px;
    display: inline-block;
    background: rgba(28, 192, 159, 1);
  }

  .SaleDoFormBodyTopR ,.SaleDoFormBodyInR{
    font-size: 14px;
    margin: 11px;
    font-family: Microsoft YaHei;
    font-weight: bold;
    color: rgba(51, 51, 51, 1);
  }

  .SaleDoFormBodyTop ,.SaleDoFormBodyIn{
    width: 100%;
    height: 40px;
    line-height: 40px;
    padding: 2px 0;
    margin: 10px 0px;
    background: rgba(247, 248, 250, 1);
  }
  .SaleDoFormBodyTopRF ,.SaleDoFormBodyInRF{
    color: rgba(102, 102, 102, 1);
    margin: 0 20px;
    display: inline-block;
    float: right;
  }

  .SaleDoForm {
    padding: 10px 25px;
  }

  .SaleDoFoBody {
    background-color: #FFFFFF;
    width: 100%;
    height: 800px;
  }



</style>
<style scoped>

  .lately{
    position: absolute;
    height: 32px;
    margin-left: 372px;
  }
.SaleDoFormdow{
  border-top: 1px solid #EEEEEE;
}
  .SaleDoFormBodyTopRF{
    cursor: pointer;
  }
</style>
<style>
 .datis> .ant-tabs-nav .ant-tabs-tab{
    padding: 0px!important;
  }
</style>