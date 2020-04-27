<template>
	<div class="info_basic section">
      <a-form
        :form="form"
        @submit="handleSubmit"
      >
        <a-row style="margin-bottom: 40px;">
          <a-col :span="10">
            <a-form-item
              label="车牌号："
                :label-col="{ span: 8 }"
                :wrapper-col="{ span: 16 }">
              <Search :showSearch="false" @searchChange="searchChange" :defaultVal="infoData.carinfo ? infoData.carinfo.registrationNo : ''"></Search>
                <!--<a-input-->
                  <!--v-decorator="[-->
                  <!--'registrationNo',-->
                  <!--{rules: [{ required: true, message: '车牌号是必填项!' }]}-->
                <!--]"-->
                <!--placeholder="请输入车牌号" />-->
            </a-form-item>
          </a-col>
          <a-col :span="10" :offset="4">
            <a-form-item
              label="自编号："
              :label-col="{ span: 8 }"
              :wrapper-col="{ span: 16 }">
              <a-input
                v-decorator="[
                  'sinceNumber',
                  {rules: [{ required: false}]}
                ]"
                placeholder="请输入自编号" />
            </a-form-item>
          </a-col>
          <a-col :span="10">
            <a-form-item
              label="车型属性："
              :label-col="{ span: 8 }"
              :wrapper-col="{ span: 16 }">
              <a-select
                v-decorator="[
                  'carmodelId',
                  {rules: [{ required: true, message: '车型属性是必选项!' }]}
                ]"
                placeholder="请选择车型属性"
                @change="attributeSelectChange"
              >
                <a-select-option v-for="item in modelTypeList" :key="item.id">
                  {{item.name}}
                </a-select-option>
              </a-select>
            </a-form-item>
          </a-col>
          <a-col :span="10" :offset="4">
            <a-form-item
              label="车架号："
              :label-col="{ span: 8 }"
              :wrapper-col="{ span: 16 }">
              <a-input
                v-decorator="[
                  'frameNumber',
                  {rules: [{ required: true, message: '车架号是必填项!' }]}
                ]"
                placeholder="请输入车架号" />
            </a-form-item>
          </a-col>
          <a-col :span="10">
            <a-form-item
              label="车辆类型："
              :label-col="{ span: 8 }"
              :wrapper-col="{ span: 16 }">
              <a-select
                v-decorator="[
                  'cartypeId',
                  {rules: [{ required: false}]}
                ]"
                placeholder="请选择车辆类型"
                @change="typeSelectChange"
              >
                <a-select-option v-for="item in carTypeList" :key="item.id">
                  {{item.name}}
                </a-select-option>
              </a-select>
            </a-form-item>
          </a-col>
          <a-col :span="10" :offset="4">
            <a-form-item
              label="发动机号："
              :label-col="{ span: 8 }"
              :wrapper-col="{ span: 16 }">
              <a-input
                v-decorator="[
                  'engineNumber',
                  {rules: [{ required: true, message: '发动机号是必填项!' }]}
                ]"
                placeholder="请输入发动机号" />
            </a-form-item>
          </a-col>
          <a-col :span="20">
            <a-form-item
              label="车身照片："
              :label-col="{ span: 4 }"
              :wrapper-col="{ span: 20 }">
              <a-upload
                v-decorator="[
                  'carPhotos',
                  {rules: [{ required: false}]}
                ]"
                action="../fileUpload"
                listType="picture-card"
                :fileList="fileList"
                @preview="handlePreview"
                @change="handleChange"
              >
                <div v-if="fileList.length < 4">
                  <a-icon type="plus" />
                  <div class="ant-upload-text">Upload</div>
                </div>
              </a-upload>
              <a-modal :visible="previewVisible" :footer="null" @cancel="handleCancel">
                <img alt="example" style="width: 100%" :src="previewImage" />
              </a-modal>
            </a-form-item>
          </a-col>
        </a-row>
        <a-button html-type="submit" type="primary" style="margin: 0 10px 0 118px;" @click="save">保存</a-button>
        <a-button @click="back" style="margin-right: 503px;">取消</a-button>
        <a-button class="cheta-color" html-type="submit" style="border: none;box-shadow: none;" @click="save">下一步>></a-button>
      </a-form>
    </div>
</template>

<script>
  import axios from 'axios';
  import pick from 'lodash.pick';
  import { getAction } from '@api/manage';
  import { postAction } from '@api/manage';
  import Search from '@views/chetaui/input/search/Index'
	export default {
		name: "",
    components:{
      Search
    },
		data() {
			return {
			  form: this.$form.createForm(this),
				model: {},
				modelTypeList: [],
				carTypeList: [],
				fileList: [],
				previewVisible: false,
				previewImage: '',
        carNum:'',
			}
		},
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
		async created() {
		  console.log(this.infoData)
      try {
        let modelType = await this.getModelType(); //获取车型属性
        let carType = await this.getCarType(); //获取车辆类型
        this.modelTypeList = modelType.result;
        this.carTypeList = carType.result;
        this.model = {
          carmodelId: '',
          cartypeId: ''
        }
        if(modelType){
          console.log(modelType);
          this.model.carmodelId = this.modelTypeList[0].id
        }
        if(carType){
          console.log(carType);
          this.model.cartypeId = this.carTypeList[0].id
        }
        let fieldsVal = pick(this.model,'carmodelId','cartypeId');
        this.$nextTick(()=>{
          this.form.setFieldsValue(fieldsVal);
        })
        if(localStorage.getItem('addinfoParams')){
          let data = {...JSON.parse(localStorage.getItem('addinfoParams'))};
          this.model = {
            carmodelId: '',
            engineNumber: '',
            frameNumber: '',
            registrationNo: '',
            sinceNumber: '',
            cartypeId: ''
          }
          this.model.carmodelId = data.carInfo.carmodelId;
          this.model.engineNumber = data.carInfo.engineNumber;
          this.model.frameNumber = data.carInfo.frameNumber;
          this.model.registrationNo = data.carInfo.registrationNo;
          this.model.sinceNumber = data.carInfo.sinceNumber;
          this.model.cartypeId = data.carInfo.cartypeId;
          if(data.carPhotos.length){
            this.fileList = [];
            data.carPhotos.forEach((item)=>{
              let obj = {
                uid: item,
                url: item,
              }
              this.fileList.push(obj);
            })
          }
          fieldsVal = pick(this.model,'carmodelId','engineNumber','frameNumber','registrationNo','sinceNumber','cartypeId');
          this.$nextTick(()=>{
            this.form.setFieldsValue(fieldsVal);
          })
        }
        if(this.infoData&&this.infoData.carinfo){
          this.model = {
            carmodelId: '',
            engineNumber: '',
            frameNumber: '',
            registrationNo: '',
            sinceNumber: '',
            cartypeId: ''
          }
          if(this.infoData.carinfo.carmodelId){
            this.model.carmodelId = this.infoData.carinfo.carmodelId;
          }
          if(this.infoData.carinfo.engineNumber){
            this.model.engineNumber = this.infoData.carinfo.engineNumber;
          }
          if(this.infoData.carinfo.frameNumber){
            this.model.frameNumber = this.infoData.carinfo.frameNumber;
          }
          if(this.infoData.carinfo.registrationNo){
            this.model.registrationNo = this.infoData.carinfo.registrationNo;
          }
          if(this.infoData.carinfo.sinceNumber){
            this.model.sinceNumber = this.infoData.carinfo.sinceNumber;
          }
          if(this.infoData.carinfo.cartypeId){
            this.model.cartypeId = this.infoData.carinfo.cartypeId;
          }
          if(this.infoData.carphotos&&this.infoData.carphotos.length){
            this.fileList = [];
            this.infoData.carphotos.forEach((item)=>{
              let obj = {
                uid: item.fileurl,
                url: item.fileurl,
              }
              this.fileList.push(obj);
            })
          }
          console.log(this.fileList);
          console.log(this.model);
          fieldsVal = pick(this.model,'carmodelId','engineNumber','frameNumber','registrationNo','sinceNumber','cartypeId');
          this.$nextTick(()=>{
            this.form.setFieldsValue(fieldsVal);
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
      searchChange(carNum){
        this.carNum=carNum
      },
		  handleSubmit(e){
        e.preventDefault();
        this.form.validateFields((err, values) => {
          if (!err) {
            this.params.carInfo.carmodelId = values.carmodelId;
            this.params.carInfo.engineNumber = values.engineNumber;
            this.params.carInfo.frameNumber = values.frameNumber;
            this.params.carInfo.registrationNo = this.carNum;
            this.params.carInfo.isComplete = this.currentIndex + 1;
            if(values.sinceNumber){
              this.params.carInfo.sinceNumber = values.sinceNumber;
            }
            if(values.cartypeId){
              this.params.carInfo.cartypeId = values.cartypeId;
            }
            if(values.carPhotos){
              this.params.carPhotos = [];
              values.carPhotos.fileList.forEach((item)=>{
                this.params.carPhotos.push(item.response);
              })
            }
            console.log(this.params);
            this.$nextTick(()=>{
              if(this.currentText == '保 存'){
                if (this.infoData.carinfo && this.infoData.carinfo.id) {
                  this.params.carInfo.id = this.infoData.carinfo.id;
                }
                this.saveData(this.params);

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
        var $this = this;
        postAction('/application/car/account/saveAccount',params).then((res)=>{
          if (res.success) {
            $this.$message.success(res.message)
            $this.back();
          } else {
            $this.$message.error(res.message)
          }
        })
      },
		  getModelType(){
        return new Promise((resolve, reject) => {
          getAction('/application/car/base/getModelType',{})
          .then((res)=>{
            resolve(res);
          })
        })
      },
      getCarType(){
        return new Promise((resolve, reject) => {
          getAction('/application/car/base/getCarType',{})
          .then((res)=>{
            resolve(res);
          })
        })

      },
			attributeSelectChange(){
      },
      typeSelectChange(){
      },
      handlePreview (file) {
        this.previewImage = file.url || file.thumbUrl;
        this.previewVisible = true;
      },
      handleChange ({ fileList }) {
        console.log(fileList)
        this.fileList = fileList;
      },
      handleCancel () {
        this.previewVisible = false;
      },
      save(e){
        this.currentText = e.target.getElementsByTagName('span')[0].innerText;
      },
      back(){
        this.$emit('backAddinfo');
      }
		}
	}
</script>
<style lang="less" scoped>
</style>

