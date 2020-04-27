<template>
	<div class="certificate section">
      <a-form
        :form="form2"
        @submit="handleSubmit2"
      >
        <div class="title clearfix">
          <h3>档案信息</h3>
        </div>
        <a-row style="margin-top: 30px;">
          <a-col :span="10">
            <a-form-item
              label="购买日期："
              :label-col="{ span: 8 }"
              :wrapper-col="{ span: 16 }">
              <a-date-picker
                v-decorator="[
                  'buyTime',
                  {
                    rules: [{ required: false }],
                    initialValue: moment(buyTime, dateFormat)
                  }
                ]"
                @change="buyDateChange" />
            </a-form-item>
          </a-col>
          <a-col :span="10" :offset="4">
            <a-form-item
              label="购买车价："
              :label-col="{ span: 8 }"
              :wrapper-col="{ span: 16 }">
              <a-input
                v-decorator="[
                  'carPrices',
                  {rules: [{ required: false}]}
                ]"
                placeholder="请输入购买车价" />
            </a-form-item>
          </a-col>
          <a-col :span="10">
            <a-form-item
              label="税费总计："
              :label-col="{ span: 8 }"
              :wrapper-col="{ span: 16 }">
              <a-input
                v-decorator="[
                  'taxTotal',
                  {rules: [{ required: false}]}
                ]"
                placeholder="请输入税费总计" />
            </a-form-item>
          </a-col>
          <a-col :span="20">
            <a-form-item
              label="供应商："
              :label-col="{ span: 4 }"
              :wrapper-col="{ span: 20 }">
              <div class="wrap_supplier">
                <a-input
                  class="supplier"
                  v-decorator="[
                    'supplier',
                    {rules: [{ required: false}]}
                  ]"
                  placeholder="请输入供应商" />
                <a-input
                  class="phone"
                  v-decorator="[
                    'suppliePhone',
                    {rules: [{ required: false}]}
                  ]"
                  placeholder="请输入供应商电话" />
              </div>
            </a-form-item>
          </a-col>
          <a-col :span="20">
            <a-form-item
              label="保险险种："
              :label-col="{ span: 4 }"
              :wrapper-col="{ span: 20 }">
              <a-radio-group
                v-decorator="[
                  'insureType',
                  {
                  	rules: [{ required: false}],
                  	initialValue: value
                  }
                ]"
                :options="plainOptions" @change="onChangeInsurance" />
            </a-form-item>
          </a-col>
        </a-row>
        <a-row style="margin-left: 80px;">
          <a-col :span="10">
            <a-form-item
              label="投保公司："
              :label-col="{ span: 8 }"
              :wrapper-col="{ span: 16 }">
              <a-input
                v-decorator="[
                  'insureCompany',
                  {rules: [{ required: true, message: '投保公司是必选项!' }]}
                ]"
                placeholder="请输入投保公司" />
            </a-form-item>
          </a-col>
          <a-col :span="10" :offset="4">
            <a-form-item
              label="保单号："
              :label-col="{ span: 8 }"
              :wrapper-col="{ span: 16 }">
              <a-input
                v-decorator="[
                  'insureNumber',
                  {rules: [{ required: true, message: '保单号是必选项!' }]}
                ]"
                placeholder="请输入保单号" />
            </a-form-item>
          </a-col>
          <a-col :span="10">
            <a-form-item
              label="负责人："
              :label-col="{ span: 8 }"
              :wrapper-col="{ span: 16 }">
              <a-input
                v-decorator="[
                  'insureHeader',
                  {rules: [{ required: true, message: '负责人是必选项!' }]}
                ]"
                placeholder="请输入负责人" />
            </a-form-item>
          </a-col>
          <a-col :span="10" :offset="4">
            <a-form-item
              label="电话："
              :label-col="{ span: 8 }"
              :wrapper-col="{ span: 16 }">
              <a-input
                v-decorator="[
                  'insurePhoto',
                  {rules: [{ required: true, message: '电话是必选项!' }]}
                ]"
                placeholder="请输入电话" />
            </a-form-item>
          </a-col>
          <a-col :span="10">
            <a-form-item
              label="费用总计："
              :label-col="{ span: 8 }"
              :wrapper-col="{ span: 16 }">
              <a-input
                v-decorator="[
                  'insureCost',
                  {rules: [{ required: true, message: '费用总计是必选项!' }]}
                ]"
                placeholder="请输入费用总计" />
            </a-form-item>
          </a-col>
          <a-col :span="10" :offset="4">
            <a-form-item
              label="生效期："
              :label-col="{ span: 8}"
              :wrapper-col="{ span: 16 }">
              <a-range-picker
                v-decorator="[
                  'insureDeadline',
                  {
                    rules: [{ required: true, message: '生效期是必选项!' }],
                    initialValue: [moment(start, dateFormat), moment(end, dateFormat)]
                  }
                ]"
                @change="insureDateChange" />
            </a-form-item>
          </a-col>
          <a-col :span="20">
            <a-form-item
              label="投保附件："
              :label-col="{ span: 4 }"
              :wrapper-col="{ span: 20 }">
              <a-upload
                v-decorator="[
                  'accessory',
                  {rules: [{ required: false}]}
                ]"
                name="file"
                :multiple="true"
                :fileList="accessoryFileList"
                action="../fileUpload"
                :headers="headers"
                @change="accessoryChange">
                <a-button>
                  <a-icon type="upload" />上传
                </a-button>
              </a-upload>
            </a-form-item>
          </a-col>
        </a-row>
        <a-row style="margin-bottom: 40px;">
          <a-col :span="10">
            <a-form-item
              label="上次年审："
              :label-col="{ span: 8 }"
              :wrapper-col="{ span: 16 }">
              <a-date-picker
                v-decorator="[
                  'lastannualTime',
                  {
                    rules: [{ required: true, message: '上次年审是必选项!' }],
                    initialValue: moment(lastannualTime, dateFormat)
                  }
                ]"
                @change="examinedChange" />
            </a-form-item>
          </a-col>
          <a-col :span="10" :offset="4">
            <a-form-item
              label="车审规则："
              :label-col="{ span: 8 }"
              :wrapper-col="{ span: 16 }">
              <a-select
                v-decorator="[
                  'annualRule',
                  {
                  	rules: [{ required: true, message: '车审规则是必选项!' }],
                  	initialValue: defaultAnnualRule
                  }
                ]"
                placeholder="请选择车审规则"
                @change="annualRuleSelectChange"
              >
                <a-select-option v-for="(item,index) in ruleList" :value="item.id">
                  {{item.name}}
                </a-select-option>
              </a-select>
            </a-form-item>
          </a-col>
          <a-col :span="20">
            <a-form-item
              label="铭牌拍照："
              :label-col="{ span: 4 }"
              :wrapper-col="{ span: 20 }">
              <a-upload
                v-decorator="[
                  'nameplatePhotos',
                  {rules: [{ required: false}]}
                ]"
                action="../fileUpload"
                listType="picture-card"
                :fileList="nameplateList"
                @preview="nameplatePreview"
                @change="nameplateChange"
              >
                <div v-if="nameplateList.length < 1">
                  <a-icon type="plus" />
                  <div class="ant-upload-text">Upload</div>
                </div>
              </a-upload>
              <a-modal :visible="nameplateVisible" :footer="null" @cancel="nameplateCancel">
                <img alt="example" style="width: 100%" :src="previewImage" />
              </a-modal>
            </a-form-item>
          </a-col>
          <!--<a-button style="margin: 0 0 40px 100px;" @click="addNameplate" class="add_nameplate cheta-color">+ 填写铭牌信息</a-button>-->
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

  let buyTime = getNowFormatDate(0);
  let lastannualTime = getNowFormatDate(0);
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
			  buyTime,
			  insureDeadline: '',
			  lastannualTime,
			  start,
			  end,
			  dateFormat: 'YYYY-MM-DD',
				form2: this.$form.createForm(this),
				plainOptions: ['交强险', '商业险', '第三方险'],
        value: '',
				nameplateVisible: false,
        previewImage: '',
        defaultAnnualRule: '',
        headers: {
          authorization: 'authorization-text',
        },
        ruleList: [
          {
            name: '半年',
            id: '半年'
          },
          {
            name: '一年',
            id: '一年'
          },
          {
            name: '两年',
            id: '两年'
          },
          {
            name: '三年',
            id: '三年'
          },
          {
            name: '四年',
            id: '四年'
          },
          {
            name: '五年',
            id: '五年'
          },
          {
            name: '六年',
            id: '六年'
          }
        ],
        nameplateList: [],
        accessoryFileList: [],
			}
		},
		created() {
			this.defaultAnnualRule = this.ruleList[0].id;
			this.value = this.plainOptions[0];
			console.log(JSON.parse(localStorage.getItem('addinfoParams')));
			if(localStorage.getItem('addinfoParams')){
				let data = {...JSON.parse(localStorage.getItem('addinfoParams'))};
				if(data.carDetail.insureCompany){
					this.model = {
	          carPrices: '',
	          taxTotal: '',
	          supplier: '',
	          suppliePhone: '',
	          insureType: '',
	          insureCompany: '',
            insureNumber: '',
	          insureHeader: '',
	          insureCost: '',
	          annualRule: '',
	          insurePhoto: '',
	        }
	        this.model.carPrices = data.carDetail.carPrices;
	        this.model.taxTotal = data.carDetail.taxTotal;
	        this.model.supplier = data.carDetail.supplier;
	        this.model.suppliePhone = data.carDetail.suppliePhone;
	        this.model.insureType = data.carDetail.insureType;
	        this.model.insureCompany = data.carDetail.insureCompany;
	        this.model.insureNumber = data.carDetail.insureNumber;
	        this.model.insureHeader = data.carDetail.insureHeader;
	        this.model.insureCost = data.carDetail.insureCost;
	        this.model.annualRule = data.carDetail.annualRule;
	        this.model.insurePhoto = data.carDetail.insurePhoto;
	        this.buyTime = data.carDetail.buyTime;
	        this.lastannualTime = data.carDetail.lastannualTime;

	        if(data.carDetail.insureDeadline.length){
	        	let res = data.carDetail.insureDeadline.split('~');
	        	this.start = res[0];
	        	this.end = res[1];
	        }

					if(data.accessory.length){
	          this.accessoryFileList = [];
	          data.accessory.forEach((item,index)=>{
	            let obj = {
	              name: `文件${index+1}`,
	              uid: item,
	              url: item,
	            }
	            this.accessoryFileList.push(obj);
	          })
	        }

	        if(data.nameplatePhotos.length){
	          this.nameplateList = [];
	          data.nameplatePhotos.forEach((item)=>{
	            let obj = {
	              uid: item,
	              url: item,
	            }
	            this.nameplateList.push(obj);
	          })
	        }

	        console.log(this.model);
	        let fieldsVal = pick(this.model,'carPrices','taxTotal','supplier','suppliePhone','insureType',
	        'insureCompany','insureNumber','insureHeader','insureCost','annualRule','insurePhoto');
	        this.$nextTick(()=>{
	          this.form2.setFieldsValue(fieldsVal);
	        })
				}

			}

      console.log(this.infoData);
      if(this.infoData&&this.infoData.cardetail){
        this.model = {
          carPrices: '',
          taxTotal: '',
          supplier: '',
          suppliePhone: '',
          insureType: '',
          insureCompany: '',
          insureNumber: '',
          insureHeader: '',
          insureCost: '',
          annualRule: '',
          insurePhoto: '',
        }

        if(this.infoData.cardetail.carPrices){
          this.model.carPrices = this.infoData.cardetail.carPrices;
        }
        if(this.infoData.cardetail.taxTotal){
          this.model.taxTotal = this.infoData.cardetail.taxTotal;
        }
        if(this.infoData.cardetail.supplier){
          this.model.supplier = this.infoData.cardetail.supplier;
        }
        if(this.infoData.cardetail.suppliePhone){
          this.model.suppliePhone = this.infoData.cardetail.suppliePhone;
        }
        if(this.infoData.cardetail.insureType){
          this.model.insureType = this.infoData.cardetail.insureType;
        }
        if(this.infoData.cardetail.insureCompany){
          this.model.insureCompany = this.infoData.cardetail.insureCompany;
        }
        if(this.infoData.cardetail.insureNumber){
          this.model.insureNumber = this.infoData.cardetail.insureNumber;
        }
        if(this.infoData.cardetail.insureHeader){
          this.model.insureHeader = this.infoData.cardetail.insureHeader;
        }
        if(this.infoData.cardetail.insureCost){
          this.model.insureCost = this.infoData.cardetail.insureCost;
        }
        if(this.infoData.cardetail.annualRule){
          this.model.annualRule = this.infoData.cardetail.annualRule;
        }
        if(this.infoData.cardetail.insurePhoto){
          this.model.insurePhoto = this.infoData.cardetail.insurePhoto;
        }
        if(this.infoData.cardetail.buyTime){
          this.buyTime = this.infoData.cardetail.buyTime;
        }
        if(this.infoData.cardetail.lastannualTime){
          this.lastannualTime = this.infoData.cardetail.lastannualTime;
        }

        if(this.infoData.accessory&&this.infoData.accessory.length){
          this.accessoryFileList = [];
          this.infoData.accessory.forEach((item,index)=>{
            let obj = {
              name: `文件${index+1}`,
              uid: item.fileurl,
              url: item.fileurl,
            }
            this.accessoryFileList.push(obj);
          })
        }

        if(this.infoData.nameplatephotos&&this.infoData.nameplatephotos.length){
          this.nameplateList = [];
          this.infoData.nameplatephotos.forEach((item)=>{
            let obj = {
              uid: item.fileurl,
              url: item.fileurl,
            }
            this.nameplateList.push(obj);
          })
        }

        if(this.infoData.cardetail.insureDeadline){
          let res = this.infoData.cardetail.insureDeadline.split('~');
          console.log(res)
          this.start = res[0];
          this.end = res[1];
        }

        console.log(this.model);
        let fieldsVal = pick(this.model,'carPrices','taxTotal','supplier','suppliePhone','insureType',
        'insureCompany','insureNumber','insureHeader','insureCost','annualRule','insurePhoto');
        this.$nextTick(()=>{
          this.form2.setFieldsValue(fieldsVal);
        })
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
		  handleSubmit2(e){
        e.preventDefault();
        this.form2.validateFields((err, values) => {
          if (!err) {
            console.log(values);
            if(localStorage.getItem('addinfoParams')){
            	this.params = {...JSON.parse(localStorage.getItem('addinfoParams'))};
            }
            this.params.carInfo.isComplete = this.currentIndex + 1;
            if(this.buyTime.length){
              this.params.carDetail.buyTime = this.buyTime;
            }
            if(this.insureDeadline.length == 2){
              let start = this.insureDeadline[0];
              let end = this.insureDeadline[1];
              this.params.carDetail.insureDeadline = start + '~' + end;
            }
            else{
            	this.params.carDetail.insureDeadline = this.start + '~' + this.end;
            }
            if(this.lastannualTime.length){
              this.params.carDetail.lastannualTime = this.lastannualTime;
            }
            if(values.carPrices){
              this.params.carDetail.carPrices = values.carPrices;
            }
            if(values.taxTotal){
              this.params.carDetail.taxTotal = values.taxTotal;
            }
            if(values.supplier){
              this.params.carDetail.supplier = values.supplier;
            }
            if(values.suppliePhone){
              this.params.carDetail.suppliePhone = values.suppliePhone;
            }
            if(values.insureType){
              console.log(values.insureType)
              this.params.carDetail.insureType = values.insureType;
            }
            else{
              this.params.carDetail.insureType = '交强险';
            }
            if(values.insureCompany){
              this.params.carDetail.insureCompany = values.insureCompany;
            }
            if(values.insureNumber){
              this.params.carDetail.insureNumber = values.insureNumber;
            }
            if(values.insureHeader){
              this.params.carDetail.insureHeader = values.insureHeader;
            }
            if(values.insurePhoto){
              this.params.carDetail.insurePhoto = values.insurePhoto;
            }
            if(values.insureCost){
              this.params.carDetail.insureCost = values.insureCost;
            }
            if(values.annualRule){
              this.params.carDetail.annualRule = values.annualRule;
            }
            if(values.accessory){
              this.params.accessory = [];
              values.accessory.fileList.forEach((item)=>{
                this.params.accessory.push(item.response);
              })
            }
            if(values.nameplatePhotos){
              this.params.nameplatePhotos = [];
              values.nameplatePhotos.fileList.forEach((item)=>{
                this.params.nameplatePhotos.push(item.response);
              })
            }
            console.log(this.params);
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
			buyDateChange(date,dateString){
        console.log(dateString)
        this.buyTime = dateString;
      },
      onChangeInsurance(value){
        console.log(value)
      },
      insureDateChange(date,dateString){
        console.log(dateString)
        this.insureDeadline = dateString;
      },
      accessoryChange({ fileList }){
        console.log(fileList);
        this.accessoryFileList = fileList;
      },
      examinedChange(date,dateString){
        console.log(dateString)
        this.lastannualTime = dateString;
      },
      annualRuleSelectChange(){

      },
      nameplatePreview(file){
        this.nameplateImage = file.url || file.thumbUrl;
        this.nameplateVisible = true
      },
      nameplateChange({ fileList }){
        this.nameplateList = fileList
      },
      nameplateCancel(){
        this.nameplateVisible = false
      },
      addNameplate(){

      },
      save(e){
        this.currentText = e.target.getElementsByTagName('span')[0].innerText;
      },
      prev(){
        if(this.currentIndex > 0){
          this.$emit('minusAddinfoIndex');
        }
      },
      back(){
        this.$emit('backAddinfo');
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
}
.add_nameplate{
  border: none;
  box-shadow: none;
  margin-left: 20px;
}
.wrap_supplier{
  display: flex;
  display: -webkit-flex;
  padding-top: 5px;
  .supplier{
    flex: 2;
    margin-right: 10px;
  }
  .phone{
    flex: 1;
  }
}
.ant-calendar-picker{
  width: 100%;
}
</style>

