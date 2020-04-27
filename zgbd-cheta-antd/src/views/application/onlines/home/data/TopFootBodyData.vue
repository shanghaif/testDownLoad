<template>
  <a-row>
    <a-card >
      <!--top-->
      <a-col span="24" >
        <a-form-item label="版权" :label-col="{ span: 24 }" :wrapper-col="{ span: 21 }" style="margin-bottom: 10px">
          <a-textarea v-model="config[0].copyright" autosize="true"  :rows="6"/>
        </a-form-item>
      </a-col>
    </a-card>

    <!--body-->
    <a-card v-for="item in config[0].about">
      <a-col span="22" >
        <a-form-item label="标题" :label-col="{ span: 24 }" :wrapper-col="{ span: 21 }" style="margin-bottom: 10px">
          <a-input v-model="item.title"/>
        </a-form-item>
      </a-col>
      <a-col span="12" >
        <a-form-item label="介绍" :label-col="{ span: 24 }" :wrapper-col="{ span: 21 }" style="margin-bottom: 10px">
          <a-input v-model="item.one"/>
        </a-form-item>
      </a-col>
      <a-col span="12" >
        <a-form-item label="介绍" :label-col="{ span: 24 }" :wrapper-col="{ span: 21 }" style="margin-bottom: 10px">
          <a-input v-model="item.two"/>
        </a-form-item>
      </a-col>
      <a-col span="12" >
        <a-form-item label="介绍" :label-col="{ span: 24 }" :wrapper-col="{ span: 21 }" style="margin-bottom: 10px">
          <a-input v-model="item.three"/>
        </a-form-item>
      </a-col>
      <a-col span="12" >
        <a-form-item label="介绍" :label-col="{ span: 24 }" :wrapper-col="{ span: 21 }" style="margin-bottom: 10px">
          <a-input v-model="item.four"/>
        </a-form-item>
      </a-col>
    </a-card>

    <!--footer-->
    <a-card>
      <a-col span="22" >
        <a-form-item label="标题" :label-col="{ span: 24 }" :wrapper-col="{ span: 21 }" style="margin-bottom: 10px">
          <a-input v-model="config[0].contact.title"/>
        </a-form-item>
      </a-col>
      <a-col span="12" >
        <a-form-item label="电话号码" :label-col="{ span: 24 }" :wrapper-col="{ span: 21 }" style="margin-bottom: 10px">
          <a-textarea autosize="true" v-model="config[0].contact.phone"/>
        </a-form-item>
      </a-col>
      <a-col span="12" >
        <a-form-item label="邮箱" :label-col="{ span: 24 }" :wrapper-col="{ span: 21 }" style="margin-bottom: 10px">
          <a-textarea autosize="true" v-model="config[0].contact.email"/>
        </a-form-item>
      </a-col>
      <a-col span="12" >
        <a-form-item label="地址1" :label-col="{ span: 24 }" :wrapper-col="{ span: 21 }" style="margin-bottom: 10px">
          <a-textarea autosize="true" v-model="config[0].contact.address"/>
        </a-form-item>
      </a-col>
      <a-col span="12" >
        <a-form-item label="地址2" :label-col="{ span: 24 }" :wrapper-col="{ span: 21 }" style="margin-bottom: 10px">
          <a-textarea autosize="true" v-model="config[0].contact.address2"/>
        </a-form-item>
      </a-col>
    </a-card>

    <!--footer footer-->
    <a-card>
          <a-col span="12">
            <a-form-item label="图片" :label-col="{ span: 24 }" :wrapper-col="{ span: 24 }" style="margin-bottom: 10px">
              <a-upload
                action="../fileUpload"
                listType="picture-card"
                :fileList="fileList"
                @preview="handlePreview"
                @change="handleChange"
              >
                <div v-if="fileList.length < 1">
                  <a-icon type="plus" />
                  <div class="ant-upload-text">Upload</div>
                </div>
              </a-upload>
              <a-modal :visible="previewVisible" :footer="null" @cancel="handleCancel">
                <img alt="example" style="width: 100%" :src="previewImage" />
              </a-modal>
            </a-form-item>
          </a-col>
      <a-col span="12" >
        <a-form-item label="公众号描述" :label-col="{ span: 24 }" :wrapper-col="{ span: 21 }" style="margin-bottom: 10px">
          <a-textarea autosize="true" v-model="config[0].contact.account.title"/>
        </a-form-item>
      </a-col>
    </a-card>
  </a-row>


</template>

<script>
  export default {
    data () {
      return {
        previewVisible: false,
        name:"",
        uid:"",
        previewImage: '',
        fileList: [{
          uid: '-1',
          name: "xxx.png",
          status: 'done',
          url: "",
        }],
      }
    },
    props: {
      config: {
        type: Array,
        default: () => []
      },
    },
    created () {
      this.fileList = [{
        uid: '-1',
        name: "xxx.png",
        status: 'done',
        url: this.config[0].contact.account.accountImg,
      }]
    },
    methods: {
      handleCancel () {
        this.previewVisible = false
      },
      handlePreview (file) {
        this.previewImage = file.url || file.thumbUrl
        this.previewVisible = true
      },
      handleChange ({ fileList }) {
        this.fileList = fileList
        if (this.fileList[0].status === 'done') {
          this.config[0].contact.account.accountImg = fileList[0].response;
        }
      },
    },
  }
</script>

<style scoped>

</style>