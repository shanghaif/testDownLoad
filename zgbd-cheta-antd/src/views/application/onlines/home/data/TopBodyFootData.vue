<template>
  <a-row>
    <a-card>
      <a-col span="12" >
        <a-form-item label="左标题" :label-col="{ span: 24 }" :wrapper-col="{ span: 21 }" style="margin-bottom: 10px">
          <a-input v-model="config[0].leftTitle"/>
        </a-form-item>
      </a-col>
      <a-col span="12" >
        <a-form-item label="右标题" :label-col="{ span: 24 }" :wrapper-col="{ span: 21 }" style="margin-bottom: 10px">
          <a-input v-model="config[0].rightTitle"/>
        </a-form-item>
      </a-col>
    </a-card>
    <a-card>
      <a-col span="12">
        <a-form-item label="标签1" :label-col="{ span: 24 }" :wrapper-col="{ span: 21 }" style="margin-bottom: 10px">
          <a-input v-model="config[0].labelOne"/>
        </a-form-item>
      </a-col>
      <a-col span="12">
        <a-form-item label="标签2" :label-col="{ span: 24 }" :wrapper-col="{ span: 24 }" style="margin-bottom: 10px">
          <a-input  v-model="config[0].labelTwo"/>
        </a-form-item>
      </a-col>
      <a-col span="12">
        <a-form-item label="主题" :label-col="{ span: 24 }" :wrapper-col="{ span: 21 }" style="margin-bottom: 10px">
          <a-input  v-model="config[0].theme"/>
        </a-form-item>
      </a-col>
      <a-col span="12">
        <a-form-item label="主题标题" :label-col="{ span: 24 }" :wrapper-col="{ span: 24 }" style="margin-bottom: 10px">
          <a-input  v-model="config[0].themeTitle"/>
        </a-form-item>
      </a-col>
      <a-col span="12">
        <a-form-item label="主题内容" :label-col="{ span: 24 }" :wrapper-col="{ span: 21 }" style="margin-bottom: 10px">
          <a-input  v-model="config[0].themeText"/>
        </a-form-item>
      </a-col>
      <a-col span="12">
        <a-form-item label="主题按钮" :label-col="{ span: 24 }" :wrapper-col="{ span: 24 }" style="margin-bottom: 10px">
          <a-input  v-model="config[0].themeButton"/>
        </a-form-item>
      </a-col>
      <a-col span="24">
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
      </a-col>
    </a-card>

    <a-card>
      <a-col span="12">
        <a-form-item label="日期1" :label-col="{ span: 24 }" :wrapper-col="{ span: 21 }" style="margin-bottom: 10px">
          <a-input v-model="config[0].dateOne"/>
        </a-form-item>
      </a-col>
      <a-col span="12">
        <a-form-item label="时间1" :label-col="{ span: 24 }" :wrapper-col="{ span: 24 }" style="margin-bottom: 10px">
          <a-input  v-model="config[0].timeOne"/>
        </a-form-item>
      </a-col>
      <a-col span="24">
        <a-form-item label="标题1" :label-col="{ span: 24 }" :wrapper-col="{ span: 24 }" style="margin-bottom: 10px">
          <a-input  v-model="config[0].titleOne"/>
        </a-form-item>
      </a-col>
      <a-col span="24">
        <a-form-item label="文本1" :label-col="{ span: 24 }" :wrapper-col="{ span: 24 }" style="margin-bottom: 10px">
          <a-textarea v-model="config[0].textOne" autosize="true" placeholder="请输入文本" :rows="6"/>
        </a-form-item>
      </a-col>
    </a-card>

    <a-card>
      <a-col span="12">
        <a-form-item label="日期2" :label-col="{ span: 24 }" :wrapper-col="{ span: 21 }" style="margin-bottom: 10px">
          <a-input v-model="config[0].dateTwo"/>
        </a-form-item>
      </a-col>
      <a-col span="12">
        <a-form-item label="时间2" :label-col="{ span: 24 }" :wrapper-col="{ span: 24 }" style="margin-bottom: 10px">
          <a-input  v-model="config[0].timeTwo"/>
        </a-form-item>
      </a-col>
      <a-col span="24">
        <a-form-item label="标题2" :label-col="{ span: 24 }" :wrapper-col="{ span: 24 }" style="margin-bottom: 10px">
          <a-input  v-model="config[0].titleTwo"/>
        </a-form-item>
      </a-col>
      <a-col span="24">
        <a-form-item label="文本2" :label-col="{ span: 24 }" :wrapper-col="{ span: 24 }" style="margin-bottom: 10px">
          <a-textarea v-model="config[0].textTwo" autosize="true" placeholder="请输入文本" :rows="6"/>
        </a-form-item>
      </a-col>
    </a-card>

    <a-card>
      <a-col span="12">
        <a-form-item label="日期3" :label-col="{ span: 24 }" :wrapper-col="{ span: 21 }" style="margin-bottom: 10px">
          <a-input v-model="config[0].dateThree"/>
        </a-form-item>
      </a-col>
      <a-col span="12">
        <a-form-item label="时间3" :label-col="{ span: 24 }" :wrapper-col="{ span: 24 }" style="margin-bottom: 10px">
          <a-input  v-model="config[0].timeThree"/>
        </a-form-item>
      </a-col>
      <a-col span="24">
        <a-form-item label="标题3" :label-col="{ span: 24 }" :wrapper-col="{ span: 24 }" style="margin-bottom: 10px">
          <a-input  v-model="config[0].titleThree"/>
        </a-form-item>
      </a-col>
      <a-col span="24">
        <a-form-item label="文本3" :label-col="{ span: 24 }" :wrapper-col="{ span: 24 }" style="margin-bottom: 10px">
          <a-textarea v-model="config[0].textThree" autosize="true" placeholder="请输入文本" :rows="6"/>
        </a-form-item>
      </a-col>
    </a-card>

    <a-card>
      <a-col span="12">
        <a-form-item label="日期4" :label-col="{ span: 24 }" :wrapper-col="{ span: 21 }" style="margin-bottom: 10px">
          <a-input v-model="config[0].dateFour"/>
        </a-form-item>
      </a-col>
      <a-col span="12">
        <a-form-item label="时间4" :label-col="{ span: 24 }" :wrapper-col="{ span: 24 }" style="margin-bottom: 10px">
          <a-input  v-model="config[0].timeFour"/>
        </a-form-item>
      </a-col>
      <a-col span="24">
        <a-form-item label="标题4" :label-col="{ span: 24 }" :wrapper-col="{ span: 24 }" style="margin-bottom: 10px">
          <a-input  v-model="config[0].titleFour"/>
        </a-form-item>
      </a-col>
      <a-col span="24">
        <a-form-item label="文本4" :label-col="{ span: 24 }" :wrapper-col="{ span: 24 }" style="margin-bottom: 10px">
          <a-textarea v-model="config[0].textFour" autosize="true" placeholder="请输入文本" :rows="6"/>
        </a-form-item>
      </a-col>
    </a-card>

    <a-card>
      <a-col span="12">
        <a-form-item label="日期5" :label-col="{ span: 24 }" :wrapper-col="{ span: 21 }" style="margin-bottom: 10px">
          <a-input v-model="config[0].dateFive"/>
        </a-form-item>
      </a-col>
      <a-col span="12">
        <a-form-item label="时间5" :label-col="{ span: 24 }" :wrapper-col="{ span: 24 }" style="margin-bottom: 10px">
          <a-input  v-model="config[0].timeFive"/>
        </a-form-item>
      </a-col>
      <a-col span="24">
        <a-form-item label="标题5" :label-col="{ span: 24 }" :wrapper-col="{ span: 24 }" style="margin-bottom: 10px">
          <a-input  v-model="config[0].titleFive"/>
        </a-form-item>
      </a-col>
      <a-col span="24">
        <a-form-item label="文本5" :label-col="{ span: 24 }" :wrapper-col="{ span: 24 }" style="margin-bottom: 10px">
          <a-textarea v-model="config[0].textFive" autosize="true" placeholder="请输入文本" :rows="6"/>
        </a-form-item>
      </a-col>
    </a-card>

    <a-col span="12">
      <a-form-item label="标题" :label-col="{ span: 24 }" :wrapper-col="{ span: 21 }" style="margin-bottom: 10px">
        <a-input  v-model="config[0].title"/>
      </a-form-item>
    </a-col>
    <a-col span="12">
      <a-form-item label="文本" :label-col="{ span: 24 }" :wrapper-col="{ span: 21 }" style="margin-bottom: 10px">
        <a-textarea v-model="config[0].text" autosize="true" placeholder="请输入文本" :rows="6"/>
      </a-form-item>
    </a-col>
    <a-col span="12">
      <a-form-item label="文本" :label-col="{ span: 24 }" :wrapper-col="{ span: 21 }" style="margin-bottom: 10px">
        <a-textarea v-model="config[0].number" autosize="true" placeholder="请输入文本" :rows="6"/>
      </a-form-item>
    </a-col>
    <a-col span="12">
      <a-form-item label="文本" :label-col="{ span: 24 }" :wrapper-col="{ span: 21 }" style="margin-bottom: 10px">
        <a-textarea v-model="config[0].price" autosize="true" placeholder="请输入文本" :rows="6"/>
      </a-form-item>
    </a-col>
  </a-row>
</template>

<script>
  export default {
    data() {
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
        url: this.config[0].imgOne,
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
          this.config[0].imgOne = fileList[0].response;
        }
      },
    },
  }
</script>

<style scoped>

  .ant-upload-select-picture-card i {
    font-size: 32px;
    color: #999;
  }

  .ant-upload-select-picture-card .ant-upload-text {
    margin-top: 8px;
    color: #666;
  }

</style>