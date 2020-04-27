<template>
  <div>
    <div class="gutter-example">
      <a-row :gutter="16">
        <a-col class="gutter-row" :span="6" :lg="6" :md="6" :sm="6" :xs="24">
          <div class="gutter-box">工单编号: {{this.id}}</div>
          <div class="gutter-box">设备来源: {{this.orderNumber}}</div>
          <div class="gutter-box">智能终端:
            <!--style="width: 40%"-->
            <a-select
              mode="tags"
              :disabled="disabled"
              :defaultValue="this.terminals"
              v-model="terminals"
              placeholder="Please select">
              <a-select-option v-for="item in this.terminalList" :key="item.id">{{item.name}}</a-select-option><!--{{this.terminals}}-->
            </a-select>
          </div>
          <div class="gutter-box">附加传感器/设备:
            <a-select
              mode="multiple"
              :defaultValue="this.equipments"
              :disabled="disabled"
              v-model="equipments"
              placeholder="Please select">
              <a-select-option v-for="item in this.equipmentList" :key="item.id">{{item.name}}</a-select-option><!--{{this.equipments}}-->
            </a-select>
          </div>
        </a-col>
        <a-col class="gutter-row" :span="8" :lg="8" :md="8" :sm="8" :xs="24">
          <div class="gutter-box">
            状态: 安装中.....
          </div>
          <div class="gutter-box">
            <a-row>
              <a-col :span="3">预约时间:</a-col>
              <a-col :span="10">
                <a-date-picker
                placeholder="请选择日期"
                v-model="appointment"
                :disabled="disabled"
              />
                <!--<a-input v-model="appointment" :disabled="disabled"></a-input>-->
              </a-col>
            </a-row>
          </div>
          <div class="gutter-box">
            <a-row v-for="(item,index) in contactVoList" :key="index">
              <a-col :span="3">
                联系人:
              </a-col>
              <a-col :span="5">
                <a-input v-model="item.contact" :disabled="disabled"/>
              </a-col>
              <a-col :span="5">
                <a-input v-model="item.phone" :disabled="disabled"/>
              </a-col>
              <a-col :span="4">
                <a-button @click="deletePersonList(index)">删除</a-button>
              </a-col>
            </a-row>
            <a-row>
              <a-col :span="3">

              </a-col>
              <a-col :span="4">
                <a-button @click="addPersonList">添加</a-button>
              </a-col>

            </a-row>
          </div>
        </a-col>
        <a-col class="gutter-row" :span="8" :lg="10" :md="10" :sm="10" :xs="24">
          <div class="gutter-box">
            <a-row>
              <a-col :span="3">详细地址:</a-col>
              <a-col :span="21"><a-input v-model="detailedAddress" :disabled="disabled"></a-input></a-col>
            </a-row>
          </div>
          <div class="gutter-box">
            <a-row>
              <a-col :span="3">
                备注:
              </a-col>
              <a-col :span="21">
                <a-textarea placeholder="Basic usage" :rows="5" v-model="remark" :disabled="disabled"/>
              </a-col>
            </a-row>
          </div>
        </a-col>
      </a-row>
      <a-row :gutter="16">
        <a-col class="gutter-row" :span="9"></a-col>
        <a-col class="gutter-row" :span="9"></a-col>
        <a-col class="gutter-row" :span="6" :lg="6" :md="6" :sm="6" :xs="24">
          <div class="gutter-box" :span="5">
            <a-row>
              <a-col :span="12">
                <a-button type="primary" @click="submit">提交</a-button>
              </a-col>
              <a-col :span="12">
                <a-button type="primary" @click="edit"><span v-if="isShow">编辑</span><span v-else>禁用</span></a-button>
              </a-col>
            </a-row>
          </div>
        </a-col>

      </a-row>
    </div>
  </div>
</template>

<script>

  import { httpAction } from '@/api/manage'
  import { getTerminal, getEquipment } from '@/views/application/car/api/api'

  import moment from "moment"
  export default {
    name: 'repaireOrderDetail',
    components: {},
    data(){
      return{
        form: this.$form.createForm(this),
        model: {},
        keyid: '',
        id:'',
        orderNumber:'',
        appointment: [],
        detailedAddress:'',
        remark:'',
        total:'',
        terminalList:[],
        equipmentList:[],
        contactVoList:[],
        terminals: [],
        equipments: [],
        contact: '',
        phone: '',
        terminalstr: '',
        equipmentstr: '',
        disabled: true,
        isShow: true,
      }
    },
    props: {
      record: {
        type: Object,
        default: () => {
        }
      }
    },
    created(){
      getTerminal().then(res => this.terminalList = res.result)
      getEquipment().then(res => this.equipmentList = res.result)
      httpAction('/application/car/vehiclenetwork/getupdworkorder?id='+this.record.id,{},'get').then(res =>{
        this.keyid = res.result.keyId
        this.id = res.result.id
        this.orderNumber = res.result.orderNumber
        this.appointment = moment(res.result.appointment,'YYYY-MM-DD')
        this.detailedAddress = res.result.detailedAddress
        this.total = res.result.total
        this.remark = res.result.remark
        console.log("this.appointment:",this.appointment)
        let rterminals = res.result.smartTerminalId.split(",");
        for (let  i= 0;i<rterminals.length;i++){
          this.terminals.push(rterminals[i]);
        }
        let requipments = res.result.equipmentId.split(",");
        for (let  j= 0;j<requipments.length;j++){
          this.equipments.push(requipments[j]);
        }
        let contact = res.result.contact.split(",");
        let phone = res.result.phone.split(",");
        if (contact.length==phone.length) {
          for (let k = 0;k<contact.length;k++){
            this.contactVoList.push({contact:contact[k],phone: phone[k]});
          }
        }else{
          for (let k1 = 0;k1<contact.length;k1++){
            this.contactVoList.push({contact:contact[k1]});
          }
          for (let k2 = 0;k2<phone.length;k2++){
            this.contactVoList.push({phone:phone[k2]});
          }
        }
      })
    },
    methods:{
      getData () {
        this.$emit('getData');
      },
      addPersonList(){
        this.contactVoList.push({});
      },
      deletePersonList(index){
        console.log(index)
        this.contactVoList.splice(index, 1);
      },
      edit(){
        if (this.disabled == true){
          this.disabled = false;
          this.isShow = false;
        }else{
          this.disabled = true;
          this.isShow = true;
        }
        //this.disabled=false;
      },
      close() {
        this.$emit('getData')
        this.$emit('close')
        this.visible = false
      },
      submit(){
        var $this = this;
            for (var i=0;i<this.contactVoList.length;i++){
              this.contact += this.contactVoList[i].contact;
              this.phone += this.contactVoList[i].phone;
              if (i<this.contactVoList.length-1){
                this.contact += ',';
                this.phone += ',';
              }
            }
            for (let j=0;j<this.terminals.length;j++){
              this.terminalstr += this.terminals[j];
              if (j<this.terminals.length-1){
                this.terminalstr += ',';
              }
            }
            for (let k=0;k<this.equipments.length;k++){
              this.equipmentstr += this.equipments[k];
              if (k<this.equipments.length-1){
                this.equipmentstr += ',';
              }
            }
            var param={
              keyId: this.keyid,
              id: this.id,
              orderNumber: this.orderNumber,
              appointment: this.appointment.format('YYYY-MM-DD'),
              detailedAddress: this.detailedAddress,
              remark: this.remark,

              smartTerminalId: this.terminalstr,
              equipmentId: this.equipmentstr,
              contact: this.contact,
              phone: this.phone
            }
            var httpurl = '/application/car/vehiclenetwork/updworkorder'
            httpAction(httpurl,param,'post').then((res) => {
              if (res.success) {
                $this.$message.success(res.message);
                console.log(res.message)
                $this.$emit('getData', true);
              } else {
                $this.$message.warning(res.message);
              }
            }).finally(() => {
              $this.close();
              this.disabled = true;
              this.isShow = true
            })


            this.current += 1;

      }
    }
  }
</script>

<style lang="less" scoped>
  .gutter-box {height: 42px;line-height: 42px;}
  .gutter-title{color: rgba(0, 0, 0, 0.65);font-weight: 500}


</style>