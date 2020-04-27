<template>
    <a-row>

       <a-card>
         <a-col span="24">
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
           </a-form-item>
         </a-col>
       </a-card>

      <!--一-->
      <a-card title="模块一">
      <a-col span="24">
        <a-form-item label="标题" :label-col="{ span: 24 }" :wrapper-col="{ span: 24 }" style="margin-bottom: 10px">
          <a-input  v-model="config[0].titleOne"/>
        </a-form-item>
      </a-col>
      <a-col span="24">
        <a-form-item label="文本" :label-col="{ span: 24 }" :wrapper-col="{ span: 24 }" style="margin-bottom: 10px">
          <a-textarea v-model="config[0].textOne" autosize="true" placeholder="请输入文本内容" :rows="6"/>
        </a-form-item>
      </a-col>
      </a-card>
      <!--二-->
      <a-card title="模块二">
      <a-col span="24">
        <a-form-item label="标题" :label-col="{ span: 24 }" :wrapper-col="{ span: 24 }" style="margin-bottom: 10px">
          <a-input  v-model="config[0].titleTwo"/>
        </a-form-item>
      </a-col>
      <a-col span="24">
        <a-form-item label="文本" :label-col="{ span: 24 }" :wrapper-col="{ span: 24 }" style="margin-bottom: 10px">
          <a-textarea v-model="config[0].textTwo" autosize="true" placeholder="请输入文本内容" :rows="6"/>
        </a-form-item>
      </a-col>
        <a-col span="24">
          <a-form-item label="图片二" :label-col="{ span: 24 }" :wrapper-col="{ span: 24 }" style="margin-bottom: 10px">
            <a-textarea v-model="config[0].imgThree" autosize="true" placeholder="请输入文本内容" :rows="6"/>
          </a-form-item>
        </a-col>
      </a-card>
      <!--三-->
      <a-card title="模块三">
      <a-col span="24">
        <a-form-item label="标题" :label-col="{ span: 24 }" :wrapper-col="{ span: 24 }" style="margin-bottom: 10px">
          <a-input   v-model="config[0].titleThree"/>
        </a-form-item>
      </a-col>
      <a-col span="24">
        <a-form-item label="文本" :label-col="{ span: 24 }" :wrapper-col="{ span: 24 }" style="margin-bottom: 10px">
          <a-textarea v-model="config[0].textThree" autosize="true" placeholder="请输入文本内容" :rows="6"/>
        </a-form-item>
      </a-col>
        <a-col span="24">
          <a-form-item label="图片二" :label-col="{ span: 24 }" :wrapper-col="{ span: 24 }" style="margin-bottom: 10px">
            <a-textarea v-model="config[0].imgFour" autosize="true" placeholder="请输入文本内容" :rows="6"/>
          </a-form-item>
        </a-col>
      </a-card>
      <!--四-->
      <a-card title="模块四">
      <a-col span="24">
        <a-form-item label="标题" :label-col="{ span: 24 }" :wrapper-col="{ span: 24 }" style="margin-bottom: 10px">
          <a-input   v-model="config[0].titleFour"/>
        </a-form-item>
      </a-col>
      <a-col span="24">
        <a-form-item label="文本" :label-col="{ span: 24 }" :wrapper-col="{ span: 24 }" style="margin-bottom: 10px">
          <a-textarea v-model="config[0].textFour" autosize="true" placeholder="请输入文本内容" :rows="6"/>
        </a-form-item>
      </a-col>
        <a-col span="24">
          <a-form-item label="图片二" :label-col="{ span: 24 }" :wrapper-col="{ span: 24 }" style="margin-bottom: 10px">
            <a-textarea v-model="config[0].imgFive" autosize="true" placeholder="请输入文本内容" :rows="6"/>
          </a-form-item>
        </a-col>
      </a-card>
    </a-row>
</template>

<script>
  export default {
    name: "TopTopTopData",
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

</style>