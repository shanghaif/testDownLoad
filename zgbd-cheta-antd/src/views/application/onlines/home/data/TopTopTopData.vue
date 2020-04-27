<template>
  <div>
    <div style="border-bottom: 1px solid #eef1f5;padding: 0 22px; height: 34px;margin-bottom: 20px;">
      <span style="display: inline-block;width: 4px;height: 13px;background: #00aeff;top: 10px;left: 22px;line-height: 34px;"></span>
      <span>导航栏</span>
    </div>

    <a-tabs defaultActiveKey="1"  @change="callback">
      <a-tab-pane tab="LOGO图片" key="1">
        <a-row>
          <a-col span="12">
            <a-form-item :label-col="{ span: 24 }" :wrapper-col="{ span: 24 }" style="margin-bottom: 10px">
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
        </a-row>
      </a-tab-pane>
      <a-tab-pane tab="搜索框" key="2" forceRender>
        <div style="padding: 8px 15px">
          <div style="display: inline-block"><span>提示文字</span></div>
         <div style="display: inline-block;padding-left: 15px"> <a-input  /></div>

        </div>
        <div style="padding: 8px 15px">
          <div style="display: inline-block"><span>搜索框样式</span></div>
          <div style="display: inline-block;padding-left: 15px">
            <a-radio-group @change="onChange" v-model="value">
              <a-radio :value="1" v-model="valueSquare" >方形</a-radio>
              <a-radio :value="2" v-model="valueFillet" >圆角</a-radio>
              <a-radio :value="3" v-model="valueArc" >圆弧</a-radio>
            </a-radio-group>
          </div>
        </div>
      </a-tab-pane>
      <a-tab-pane tab="小标题" key="3">
        <a-col span="12">
        <a-form-item :label-col="{ span: 24 }" :wrapper-col="{ span: 21 }" style="margin-bottom: 10px">
          <a-input  v-model="config[0].shopping"/>
        </a-form-item>
      </a-col>
        <a-col span="12">
          <a-form-item :label-col="{ span: 24 }" :wrapper-col="{ span: 24 }" style="margin-bottom: 10px">
            <a-input  v-model="config[0].logon"/>
          </a-form-item>
        </a-col>
        <a-col span="12">
          <a-form-item :label-col="{ span: 24 }" :wrapper-col="{ span: 21 }" style="margin-bottom: 10px">
            <a-input  v-model="config[0].register"/>
          </a-form-item>
        </a-col>
        <a-col span="12">
          <a-form-item :label-col="{ span: 24 }" :wrapper-col="{ span: 24 }" style="margin-bottom: 10px">
            <a-input  v-model="config[0].console"/>
          </a-form-item>
        </a-col>
        <a-col span="12">
          <a-form-item :label-col="{ span: 24 }" :wrapper-col="{ span: 21 }" style="margin-bottom: 10px">
            <a-input  v-model="config[0].file"/>
          </a-form-item>
        </a-col></a-tab-pane>
    </a-tabs>
  </div>
</template>

<script>
    export default {
      name: "TopTopTopData",
      data () {
        return {
          valueFillet:false,
          value:2,
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
          url: this.config[0].registerlink,
        }]
      },
      methods: {
        onChange (e) {
          console.log(`checked = ${e.target.checked}`)
        },
        callback (key) {
          console.log(key)
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
            this.config[0].registerlink = fileList[0].response;
          }
        },
      },
    }
</script>

<style scoped>

</style>