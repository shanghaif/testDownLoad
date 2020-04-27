<template>
	<div class="certificate section">
      <a-form
        :form="form3"
        @submit="handleSubmit3"
      >
        <a-row style="margin-bottom: 20px;">
          <a-col style="text-align: center;" :span="24">
            <a-form-item
              label=""
              :label-col="{ span: 0 }"
              :wrapper-col="{ span: 24 }">
              <a-upload
                v-decorator="[
                  'certUrlList',
                  {rules: [{ required: false}]}
                ]"
                action="http://www.zgjiuan.cn/zgbd/file/cheta/fileUpload"
                listType="picture-card"
                :fileList="certificateList"
                @preview="certificatePreview"
                @change="certificateChange"
              >
                <div v-if="certificateList.length < 7">
                  <a-icon type="plus" />
                  <div class="ant-upload-text">上传证件</div>
                </div>
              </a-upload>
              <a-modal :visible="certificateVisible" :footer="null" @cancel="certificateCancel">
                <img alt="example" style="width: 100%" :src="certificateImage" />
              </a-modal>
              <div class="certificateWrap clearfix">
                <a-input
                  v-for="(item,index) in certificateList" class="certificateName" placeholder="请输入证件名称"
                  v-decorator="[
                    `[certificate][${index}]['certName']`,
                    {
                      rules: [{ required: false}],
                      initialValue: item.certName
                    }
                  ]"
                  />
              </div>
            </a-form-item>
          </a-col>
        </a-row>
        <a-button html-type="submit" type="primary" style="margin: 0 10px 0 0;" @click="save">保存</a-button>
        <a-button @click="back" style="margin-right: 621px;">取消</a-button>
        <a-button html-type="submit" class="cheta-color" style="border: none;box-shadow: none;" @click="save">上一步>></a-button>
      </a-form>
    </div>
</template>

<script>
  import axios from 'axios';
  import pick from 'lodash.pick';
  import { postAction } from '@api/manage';
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
				form3: this.$form.createForm(this),
				certificateList: [],
				certificateImage: '',
				certificateVisible: false,
			}
		},
		created() {
			console.log(JSON.parse(localStorage.getItem('addinfoParams')));
			if(localStorage.getItem('addinfoParams')){
        let data = {...JSON.parse(localStorage.getItem('addinfoParams'))};
				if(data.certificate.length){
					data.certificate.forEach((item)=>{
	          let obj = {
	            uid: item.certUrl,
	            url: item.certUrl,
	            certName: item.certName
	          }
	          this.certificateList.push(obj)
	        })
				}
			}
      console.log(this.infoData);
      if(this.infoData.certphotos&&this.infoData.certphotos.length){
        this.certificateList = [];
        this.infoData.certphotos.forEach((item)=>{
          let obj = {
            uid: item.fileurl,
            url: item.fileurl,
            certName: item.filename
          }
          this.certificateList.push(obj)
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
		  handleSubmit3(e){
        e.preventDefault();
        this.form3.validateFields((err, values) => {
          if (!err) {
            console.log(values);
            if(localStorage.getItem('addinfoParams')){
            	this.params = {...JSON.parse(localStorage.getItem('addinfoParams'))};
            }
            this.params.carInfo.isComplete = this.currentIndex + 1;
            if(values.certUrlList){
              values.certUrlList.fileList.forEach((item,index)=>{
                values.certificate[index]['certUrl'] = item.response;
              })
            }
            this.params.certificate = values.certificate;
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
				        this.$emit('minusAddinfoIndex');
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
			certificateCancel(){
        this.certificateVisible = false
      },
      certificatePreview(file){
        this.certificateImage = file.url || file.thumbUrl;
        this.certificateVisible = true
      },
      certificateChange({ fileList }){
        this.certificateList = fileList
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
  .certificateName{
    float: left;
    width: 104px;
    height: 32px;
    line-height: 32px;
    font-size: 12px;
    color: rgba(204,204,204,1);
    border:1px solid rgba(232,232,232,1);
    border-radius: 3px;
    padding: 0;
    text-indent: 9px;
    margin-right: 8px;
  }
</style>

