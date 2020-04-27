<template>
	<div class="section info_network">
      <a-form
        :form="form1"
        @submit="handleSubmit1">
        <div class="device" v-for="(k,index) in form1.getFieldValue('carNetworks')">
          <div class="title clearfix">
            <h3>智能设备{{index + 1}}</h3><a-icon v-if="index != 0" @click="removeDevice(index)" type="minus-circle" />
          </div>
          <a-row style="margin-top: 30px;">
            <a-col :span="10">
              <a-form-item
                label="设备厂家："
                :label-col="{ span: 8 }"
                :wrapper-col="{ span: 16 }">
                <a-input
                  v-decorator="[
                    `[carNetworks][${index}]['equipmentManu']`,
                    {
                      rules: [{ required: false}],
                      initialValue: k.equipmentManu
                    }
                  ]"
                  placeholder="请输入设备厂家" />
              </a-form-item>
            </a-col>
            <a-col :span="10" :offset="4">
              <a-form-item
                label="设备类型："
                :label-col="{ span: 8 }"
                :wrapper-col="{ span: 16 }">
                <a-input
                  v-decorator="[
                    `[carNetworks][${index}]['equipmentType']`,
                    {
                      rules: [{ required: true, message: '设备类型是必填项!' }],
                      initialValue: k.equipmentType
                    }
                  ]"
                  placeholder="请输入设备类型" />
              </a-form-item>
            </a-col>
            <a-col :span="10">
              <a-form-item
                label="设备号："
                :label-col="{ span: 8 }"
                :wrapper-col="{ span: 16 }">
                <a-input
                  v-decorator="[
                    `[carNetworks][${index}]['equipmentNum']`,
                    {
                      rules: [{ required: true, message: '设备号是必填项!' }],
                      initialValue: k.equipmentNum
                    }
                  ]"
                  placeholder="请输入设备号" />
              </a-form-item>
            </a-col>
            <a-col :span="10" :offset="4">
              <a-form-item
                label="物联网卡号："
                :label-col="{ span: 8 }"
                :wrapper-col="{ span: 16 }">
                <a-input
                  v-decorator="[
                    `[carNetworks][${index}]['netNumber']`,
                    {
                      rules: [{ required: false}],
                      initialValue: k.netNumber
                    }
                  ]"
                  placeholder="请输入物联网卡号" />
              </a-form-item>
            </a-col>
          </a-row>
        </div>
        <a-button style="margin-bottom: 30px;" @click="addDevice" class="add_device cheta-color">+继续添加智能设备</a-button>
        <div class="title clearfix">
          <h3>车辆归属</h3>
        </div>
        <a-row style="margin-top: 30px;">
          <a-col :span="10">
            <a-form-item
              label="资产所属："
              :label-col="{ span: 8 }"
              :wrapper-col="{ span: 16 }">
              <a-input
                v-decorator="[
                  'assetBelong',
                  {rules: [{ required: true, message: '资产所属是必填项!' }]}
                ]"
                placeholder="请输入资产所属" />
            </a-form-item>
          </a-col>
          <a-col :span="10" :offset="4">
            <a-form-item
              label="使用项目："
              :label-col="{ span: 8 }"
              :wrapper-col="{ span: 16 }">
                <a-select
                  v-decorator="[
                    'organId',
                    {
                    	rules: [{ required: true, message: '使用项目是必选项!'}],
                  	  initialValue: defaultOrganId
                    }
                  ]"
                  placeholder="请选择使用项目"
                  @change="organListChange"
                >
                  <a-select-option v-for="(item,index) in organList" :value="item.id">
                    {{item.name}}
                  </a-select-option>
                </a-select>
            </a-form-item>
          </a-col>
          <a-col :span="10">
            <a-form-item
              label="合同期限："
              :label-col="{ span: 8 }"
              :wrapper-col="{ span: 16 }">
              <a-range-picker
                v-decorator="[
                  'contractPeriod',
                  {
                    rules: [{ required: false}],
                    initialValue: [moment(start, dateFormat), moment(end, dateFormat)]
                  }
                ]"
                @change="onDateChange" />
            </a-form-item>
          </a-col>
        </a-row>
        <a-row>
          <a-col :span="10" :offset="index % 2 == 0 ? 0 : 4" v-for="(k,index) in form1.getFieldValue('carDrivers')" :key="index">
            <a-form-item
              :label="index == 0 ? '主驾驶：': '副驾驶：'"
              :label-col="{ span: 8 }"
              :wrapper-col="{ span: 16 }">
              <a-select
                v-decorator="[
                  `[carDrivers][${index}][userId]`,
                  {
                    initialValue: k.userId,
                    rules: [{ required: false}]
                  }
                ]"
                :placeholder="index == 0 ? '请选择主驾驶': '请选择副驾驶'"
                @change="driverSelectChange"
              >
                <a-select-option v-for="(item,index) in driverList" :value="item.id">
                  {{item.name}}
                </a-select-option>
              </a-select>
            </a-form-item>
          </a-col>
          <a-button style="margin: 4px 0 30px 65px;" @click="addDriver">+ 添加副驾</a-button>
          <a-button style="margin: 4px 0 30px 65px;" @click="removeDriver">- 删减副驾</a-button>
        </a-row>
        <a-row>
          <a-col :span="10">
            <a-form-item
              label="围栏设定："
              :label-col="{ span: 8 }"
              :wrapper-col="{ span: 16 }">
              <a-tree-select
                v-decorator="[
                  'fenceLimited',
                  {
                  	rules: [{ required: false}],
                  	initialValue: defaultFenceLimited
                  }
                ]"
                placeholder="请选择围栏设定"
                :treeData="settingList"
                @change="onSettingChange"
                treeCheckable
              >
              </a-tree-select>
            </a-form-item>
          </a-col>
        </a-row>
        <a-row>
          <a-col :span="20">
            <a-form-item
              label="非作业速度设定："
              :label-col="{ span: 4 }"
              :wrapper-col="{ span: 20 }">
              <div class="wrap">
                <a-switch v-model="setNotwork" :span="4" @change='switchNotwork'/>
                <a-slider
                  v-decorator="[
                    'nonoperateSpead',
                    {rules: [{ required: false}]}
                  ]"
                  @change='onNotworkChange' v-if="setNotwork" :span="20" id="notwork" :min="20" :max="150" :marks="marks1"/>
              </div>
            </a-form-item>
          </a-col>
        </a-row>
        <a-row style="margin-bottom: 40px;">
          <a-col :span="20">
            <a-form-item
              label="作业速度设定："
              :label-col="{ span: 4 }"
              :wrapper-col="{ span: 20 }">
              <div class="wrap">
                <a-switch v-model="setWork" :span="4" @change='switchWork'/>
                <a-slider
                  v-decorator="[
                    'operateSpead',
                    {rules: [{ required: false}]}
                  ]"
                  @change='onworkChange' v-if="setWork" :span="20" id="work" :min="20" :max="100" :marks="marks2"/>
              </div>
            </a-form-item>
          </a-col>
        </a-row>
        <a-button html-type="submit" type="primary" style="margin: 0 10px 0 118px;" @click="save">保存</a-button>
        <a-button @click="back" style="margin-right: 412px;">取消</a-button>
        <a-button class="cheta-color" style="border: none;box-shadow: none;" @click="prev"><<上一步</a-button>
        <a-button class="cheta-color" html-type="submit" style="border: none;box-shadow: none;" @click="save">下一步>></a-button>
      </a-form>
    </div>
</template>

<script>
  import axios from 'axios';
  import pick from 'lodash.pick';
  import moment from 'moment';
  import { getAction } from '@api/manage';
  import { postAction } from '@api/manage';

  function getNowFormatDate(addDayCount) {
      var date = new Date();
      date.setDate(date.getDate() + addDayCount);//获取AddDayCount天后的日期
      var seperator1 = "-";
      var month = date.getMonth() + 1;
      var strDate = date.getDate();
      if (month >= 1 && month <= 9) {
          month = "0" + month;
      }
      if (strDate >= 0 && strDate <= 9) {
          strDate = "0" + strDate;
      }

      var currentdate = date.getFullYear() + seperator1 + month + seperator1 + strDate;
      return currentdate;
  }
  let start = getNowFormatDate(0);
  let end = getNowFormatDate(366);
	export default {
    name: "",
    props:{
      localHistory: {
        type: Object
      },
      params: {
        type: Object
      },
      infoData: {
        type: Object
      },
      currentIndex: [String, Number]
    },
    data() {
      return {
      	defaultFenceLimited: [],
      	defaultOrganId: '',
        dateFormat: 'YYYY-MM-DD',
        start,
        end,
        model: {},
        buyTime: '',
        insureTime: '',
        lastannualTime: '',
        currentText: '',
        value: '车陂小学围栏',
        marks1:{
          20: '20km/h',
          150: '150km/h'
        },
        marks2:{
          20: '20km/h',
          100: '100km/h'
        },
        contractPeriod: [],
        carDrivers: [
         {
           userId: ''
         }
        ],
        setNotwork: false,
        setWork: false,
        disabled: false,
        nameplateImage: '',
        certificateImage: '',
        fileList: [],
        organList: [],
        settingList: [
          {
            title: '车陂小学围栏',
            value: '车陂小学围栏'
          },
          {
            title: '黄村小学围栏',
            value: '黄村小学围栏'
          },
          {
            title: '天河都市广场围栏',
            value: '天河都市广场围栏'
          },
          {
            title: '平云广场围栏',
            value: '平云广场围栏'
          },
          {
            title: '珠江公园围栏',
            value: '珠江公园围栏'
          },
          {
            title: '华南师范大学围栏',
            value: '华南师范大学围栏'
          }
        ],
        driverList: []
      }
    },
    beforeCreate(){
      this.form1 = this.$form.createForm(this);
      this.form1.getFieldDecorator('carNetworks', {
        initialValue: [{
          equipmentManu: "",
          equipmentNum: "",
          equipmentType: "",
          netNumber: ""
        }], preserve: true });
      this.form1.getFieldDecorator('carDrivers',{
        initialValue: [
          {
            userId:''
          }
        ],
        preserve: true
      })
    },
    async created() {
      try {
        let driverType = await this.getDriver(); //获取驾驶员列表
        let OrganList = await this.getOrganList(); //获取机构列表
        this.driverList = driverType.result;
        this.organList = OrganList.result;
        console.log(this.settingList)
				this.defaultFenceLimited.push(this.settingList[0].value);
        this.model = {
        	carDrivers: [],
        }

        if(driverType){
          console.log(driverType);
          this.model.carDrivers.push({
          	userId: this.driverList[0].id
          })
        }
        if(OrganList){
          console.log(OrganList);
          this.defaultOrganId = this.organList[0].id
        }

        let fieldsVal = pick(this.model,'carDrivers');

        this.$nextTick(()=>{
        	this.form1.setFieldsValue(fieldsVal);
        })

        console.log(JSON.parse(localStorage.getItem('addinfoParams')));
        if(localStorage.getItem('addinfoParams')){
        	let data = {...JSON.parse(localStorage.getItem('addinfoParams'))};
        	if(data.carNetworks[0].equipmentType ){
        		this.model = {
	            organId: '',
	            assetBelong: '',
	            fenceLimited: [],
	            nonoperateSpead: '',
	            operateSpead: '',
	            carDrivers: [],
	            carNetworks: []
	          }
	          this.model.organId = data.carInfo.organId;
	          this.model.assetBelong = data.carDetail.assetBelong;
	          this.model.carNetworks = data.carNetworks;
	          let arr = data.carNetworks[0].fenceLimited.split(',');
	          arr.forEach((item)=>{
	            this.model.fenceLimited.push(item);
	          })

	          if(data.carNetworks[0].nonoperateSpead){
	            this.setNotwork = true;
	            this.model.nonoperateSpead = data.carNetworks[0].nonoperateSpead.slice(0,-4);
	          }

	          if(data.carNetworks[0].operateSpead){
	            this.setWork = true;
	            this.model.operateSpead = data.carNetworks[0].operateSpead.slice(0,-4);
	          }

	          if(data.carDrivers.length){
	            this.model.carDrivers = data.carDrivers;
	          }

	          if(data.carDetail.contractPeriod.length){
		        	let res = data.carDetail.contractPeriod.split('~');
		        	this.start = res[0];
		        	this.end = res[1];
		        }

	          console.log(this.model);
	          fieldsVal = pick(this.model,'organId','assetBelong','fenceLimited','nonoperateSpead','operateSpead','carDrivers','carNetworks');
	          this.$nextTick(()=>{
	            this.form1.setFieldsValue(fieldsVal);
	          })
        	}
        }

        console.log(this.infoData);
        if(this.infoData&&this.infoData.carnetworks&&this.infoData.carnetworks.length){
          console.log(333)
          this.model = {
            organId: '',
            assetBelong: '',
            fenceLimited: [],
            nonoperateSpead: '',
            operateSpead: '',
            carDrivers: [],
            carNetworks: []
          }
          if(this.infoData.carinfo&&this.infoData.carinfo.organId){
            this.model.organId = this.infoData.carinfo.organId;
          }

          if(this.infoData.cardetail&&this.infoData.cardetail.assetBelong){
            this.model.assetBelong = this.infoData.cardetail.assetBelong;
            if(this.infoData.cardetail.contractPeriod){
              let res = this.infoData.cardetail.contractPeriod.split('~');
              console.log(res)
              this.start = res[0];
              this.end = res[1];
            }
          }

          this.model.carNetworks = this.infoData.carnetworks;
          let arr = this.infoData.carnetworks[0].fenceLimited.split(',');
          arr.forEach((item)=>{
            this.model.fenceLimited.push(item);
          })

          if(this.infoData.carnetworks[0].nonoperateSpead){
            this.setNotwork = true;
            this.model.nonoperateSpead = this.infoData.carnetworks[0].nonoperateSpead.slice(0,-4);
          }

          if(this.infoData.carnetworks[0].operateSpead){
            this.setWork = true;
            this.model.operateSpead = this.infoData.carnetworks[0].operateSpead.slice(0,-4);
          }

          if(this.infoData.cardriver&&this.infoData.cardriver.length){
              this.model.carDrivers = this.infoData.cardriver;
          }

          console.log(this.model);
          fieldsVal = pick(this.model,'organId','assetBelong','fenceLimited','nonoperateSpead','operateSpead','carDrivers','carNetworks');
          this.$nextTick(()=>{
            this.form1.setFieldsValue(fieldsVal);
          })
        }

      }
      catch(err){
        console.log(err)
      }
    },
    mounted(){
      this.localHistory[1] = {
        execute: () =>this.back()
      }
      this.localHistory.currentIndex = 1;
      console.log(this.params);
    },
    methods: {
      moment,
      handleSubmit1(e){
        e.preventDefault();
        this.form1.validateFields((err, values) => {
          if (!err) {
            console.log(values);
            if(localStorage.getItem('addinfoParams')){
            	this.params = {...JSON.parse(localStorage.getItem('addinfoParams'))};
            }
            this.params.carInfo.isComplete = this.currentIndex + 1;
            if(values.carDrivers[0].userId){
              this.params.carDrivers = values.carDrivers;
            }
            this.params.carInfo.organId = values.organId;
            this.params.carDetail.assetBelong = values.assetBelong;

            values.carNetworks.forEach((item)=>{
              if(values.fenceLimited){
                item.fenceLimited = '';
                values.fenceLimited.forEach((v,k)=>{
                  if(k == 0){
                    item.fenceLimited += v;
                  }
                  else{
                    item.fenceLimited += (',' + v);
                  }

                });
              }
              if(values.nonoperateSpead){
                item.nonoperateSpead = values.nonoperateSpead + 'km/h';
              }
              if(values.operateSpead){
                item.operateSpead = values.operateSpead + 'km/h';
              }
            })

            if(this.contractPeriod.length == 2){
              let start = this.contractPeriod[0];
              let end = this.contractPeriod[1];
              this.params.carDetail.contractPeriod = start + '~' + end;
            }
            else{
            	this.params.carDetail.contractPeriod = this.start + '~' + this.end;
            }
            this.params.carNetworks = values.carNetworks;

            console.log(this.params)
            this.$nextTick(()=>{
              if(this.currentText == '保 存'){
                if (this.infoData.carinfo && this.infoData.carinfo.id) {
                  this.params.carInfo.id = this.infoData.carinfo.id;
                }
                this.saveData(this.params);
                this.back();
              }
              else{
                localStorage.setItem('addinfoParams',JSON.stringify(this.params));
                this.$emit('plusAddinfoIndex');
              }
            })
          }
        });
      },
      getDriver(){
        return new Promise((resolve, reject) => {
          getAction('/application/car/base/getDriver')
          .then((res)=>{
            resolve(res);
          })
        })
      },
      getOrganList(){
        return new Promise((resolve, reject) => {
          getAction('/application/car/base/getOrganList')
          .then((res)=>{
            resolve(res);
          })
        })
      },
      back(){
        this.$emit('backAddinfo');
      },
      prev(){
        if(this.currentIndex > 0){
          this.$emit('minusAddinfoIndex');
        }
      },
      switchNotwork(checked){
        this.setNotwork = checked;
      },
      switchWork(checked){
        this.setWork = checked;
      },
      onNotworkChange(value){
        console.log(value)
      },
      onworkChange(value){
        console.log(value)
      },
      onSettingChange(value){
        console.log(value);
      },
      onDateChange(date, dateString){
        console.log(dateString)
        this.contractPeriod = dateString;
      },
      driverSelectChange(){

      },
      organListChange(){

      },
      saveData(params){
        var $this = this
        postAction('/application/car/account/saveAccount',params)
        .then((res)=>{
          if (res.success) {
            $this.$message.success(res.message)
          }
          else{
            $this.$message.warning(res.message)
          }
          console.log(res)
        })
      },
      save(e){
        this.currentText = e.target.getElementsByTagName('span')[0].innerText;
      },
      addDevice(){
        const { form1 } = this;
        const carNetworks = this.form1.getFieldValue('carNetworks');
        const newCarNetworks = carNetworks.push({
                                  equipmentManu:"",
                                  equipmentNum: "",
                                  equipmentType: "",
                                  netNumber: ""
                                });
        form1.setFieldsValue('carNetworks',newCarNetworks)
        console.log(this.form1.getFieldValue('carNetworks'));
      },
      removeDevice(index){
        const { form1 } = this;
        const carNetworks = this.form1.getFieldValue('carNetworks');
        const newCarNetworks = carNetworks.splice(index,1)
        form1.setFieldsValue('carNetworks',newCarNetworks)
        console.log(this.form1.getFieldValue('carNetworks'));
      },
      addDriver(){
        const { form1 } = this;
        const carDrivers = this.form1.getFieldValue('carDrivers');
        const newCarDrivers = carDrivers.push({
                                  userId: this.driverList[0].id
                                });
        form1.setFieldsValue('carDrivers',newCarDrivers)
        console.log(this.form1.getFieldValue('carDrivers'));
      },
      removeDriver(){
        const { form1 } = this;
        const carDrivers = this.form1.getFieldValue('carDrivers');
        const len = carDrivers.length - 1;
        if(len > 0){
          const newCarDrivers = carDrivers.splice(len,1);
          form1.setFieldsValue('carDrivers',newCarDrivers)
          console.log(this.form1.getFieldValue('carDrivers'));
        }
      }
    }
  }
</script>

<style lang="less" scoped>
.title{
  h3{
    float: left;
    font-size: 16px;
    height: 16px;
    line-height: 16px;
    color: #333;
    font-weight: bold;
    margin-left: 50px;
  }
  .anticon-minus-circle{
    font-size: 16px;
    float: right;
    color: #f5222d;
    cursor: pointer;
  }
}
.add_device{
  border: none;
  box-shadow: none;
  margin-left: 20px;
}
.ant-form-item{
  .wrap{
    height: 57px;
    display: flex;
    display: -webkit-flex;
    .ant-switch{
      width: 44px;
      margin: 9px 0 4px;
    }
    .ant-slider{
      flex: 1;
      margin: 14px 6px 10px 16px;
    }
  }
}
</style>

