<template>
  <div>
    <a-tabs defaultActiveKey="1" @change="callback">
      <a-tab-pane tab="数量" key="1">
        <a-row>
          <a-col span="12">
            <a-form-item label="是否显示日期" :label-col="{ span: 24 }" :wrapper-col="{ span: 21 }" style="margin-bottom: 10px">
              <a-radio-group name="radioGroup"  @change="onChange" :defaultValue="1">
                <a-radio :value="1">是</a-radio>
                <a-radio :value="2">否</a-radio>
              </a-radio-group>
            </a-form-item>
          </a-col>
          <a-col span="12" v-if="config[0].ifDate != 2">
            <a-form-item label="日期" :label-col="{ span: 24 }" :wrapper-col="{ span: 21 }" style="margin-bottom: 10px">
              <a-date-picker :format="dateFormat" v-model="config[0].date" />
            </a-form-item>
          </a-col>
        </a-row>

        <a-row>
          <a-col span="12">
            <a-form-item label="标题" :label-col="{ span: 24 }" :wrapper-col="{ span: 21 }" style="margin-bottom: 10px">
              <a-input v-model="config[0].one"/>
            </a-form-item>
          </a-col>
          <a-col span="12">
            <a-form-item label="数值" :label-col="{ span: 24 }" :wrapper-col="{ span: 21 }" style="margin-bottom: 10px">
              <a-input v-model="config[0].two"/>
            </a-form-item>
          </a-col>
        </a-row>
      </a-tab-pane>
      <a-tab-pane tab="图片" key="2">
        <div class="clearfix">
          <a-upload
            action="../fileUpload"
            listType="picture-card"
            :fileList="fileList"
            @preview="handlePreview"
            @change="handleChange"
          >
            <div v-if="fileList.length < 1">
              <a-icon type="plus" />
              <div class="ant-upload-text">上传</div>
            </div>
          </a-upload>
          <a-modal :visible="previewVisible" :footer="null" @cancel="handleCancel">
            <img alt="example" style="width: 100%" :src="previewImage" />
          </a-modal>
        </div>
      </a-tab-pane>
    </a-tabs>
  </div>
</template>

<script>
  export default {
    name: "MaintenanceSonOneData",
    data(){
      return {
        dateFormat: 'YYYY-MM-DD',
        monthFormat: 'YYYY/MM',
        previewVisible: false,
        previewImage: '',
        fileList: [{
          uid: '-1',
          name: 'xxx.png',
          status: 'done',
          url: '',
        }],
      }
    },
    props: {
      config: {
        type: Array,
        default: () => []
      }
    },
    created () {
      this.fileList = [{
        uid: '-1',
        name: "xxx.png",
        status: 'done',
        url: this.config[0].url,
      }]
    },
    methods: {
      onChange (e) {
        this.config[0].ifDate = e.target.value;
      },

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
          this.config[0].url = fileList[0].response;
        }
      },
    },
  }
</script>

<style scoped>

</style>