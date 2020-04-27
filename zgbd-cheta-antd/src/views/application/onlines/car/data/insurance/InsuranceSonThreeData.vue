<template>
  <div>
    <a-row>
      <a-col span="16" offset="6">
        <div class="clearfix">
          <a-upload
            action="../fileUpload"
            listType="picture-card"
            :fileList="fileList"
            :multiple="true"
            @preview="handlePreview"
            @change="handleChange"
          >
            <div v-if="fileList.length < 4">
              <a-icon type="plus"/>
              <div class="ant-upload-text">上传</div>
            </div>
          </a-upload>
          <a-modal :visible="previewVisible" :footer="null" @cancel="handleCancel">
            <img alt="example" style="width: 100%" :src="previewImage"/>
          </a-modal>
        </div>
      </a-col>
    </a-row>

  </div>
</template>

<script>
  import ARow from "ant-design-vue/es/grid/Row";
  import ACol from "ant-design-vue/es/grid/Col";

  export default {
    name: "InsuranceSonThreeData",
    components: {ACol, ARow},
    props: {
      config: {
        type: Array,
        default: () => []
      }
    },
    created () {
      this.fileList = [{
        uid: '-1',
        name: 'xxx.png',
        status: 'done',
        url: this.config[0].imgs[0].img,
      }, {
        uid: '-2',
        name: 'xxx.png',
        status: 'done',
        url: this.config[0].imgs[1].img,
      }, {
        uid: '-3',
        name: 'xxx.png',
        status: 'done',
        url: this.config[0].imgs[2].img,
      }, {
        uid: '-4',
        name: 'xxx.png',
        status: 'done',
        url: this.config[0].imgs[3].img,
      }]
    },
    data() {
      return {
        previewVisible: false,
        previewImage: '',
        fileList: [
          {
            uid: '-4',
            name: 'xxx.png',
            status: 'done',
            url: '',
          }
        ],
      }
    },
    methods: {
      handleCancel() {
        this.previewVisible = false
      },
      handlePreview(file) {
        this.previewImage = file.url || file.thumbUrl
        this.previewVisible = true
      },
      handleChange({fileList}) {
        this.fileList = fileList
        var index = -1;
        this.fileList.forEach(item => {
          index = index + 1;
          this.config[0].imgs[index].img = item.response;
        })
      }

        /*
         for (var i = 0; i < this.fileList.length; i++) {
          if(this.fileList[i] == null){
            this.fileList.splice(i, 1);
            fileList.splice(i, 1);
          }
          if(this.fileList[i].status === 'done'){
            this.config[0].imgs[i].img = fileList[i].url;
            if(this.config[0].imgs[i] == null){
              this.config[0].imgs.splice(i, 1);
            }
          }*/
        /*if (this.fileList[0].status === 'done') {
          this.config[0].imgs[0].img = fileList[0].response;
        }*/
    },
  }
</script>

<style scoped>

</style>