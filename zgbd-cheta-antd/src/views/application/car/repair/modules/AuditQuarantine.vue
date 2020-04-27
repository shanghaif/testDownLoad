<template>
  <!--v-if="type=='oa_approve' || type=='offer_approve'"-->
  <!--v-if="fileList.length == 0"-->
  <div class="gutter-example" v-if="type==='oa_approve' || type==='offer_approve'">
    <a-row :gutter="16">
      <a-col class="gutter-row">
        <div>
          <a-button type="primary" @click="showModal" style="margin-right: 10px;">
            <a-icon type="share-alt" class="icon"/>分享链接</a-button>
          <a-button @click="reloadData" style="margin-left: 10px"><a-icon type="reload"/>刷新</a-button>
          <a-modal
            title="分享上传资料链接"
            v-model="visible"
            @ok="handleOk"
          >
            <div>
              <p class="send" style="margin: 0;font-size:15px">请将下面的链接发送给维修厂</p>
              <p class="instructions">维修厂将根据所发的链接填写相关报价信息,并且自动传回系统</p>
              <a-input placeholder="" v-model="h5Link" size="large"/>
              <a-button type="primary" style="margin-top: 20px" @click="copyLink"><a-icon type="link" />复制链接</a-button>
              <span class="time_yx" style="margin-left: 10px;margin-top: 20px">链接有效期7天</span>
            </div>
          </a-modal>
        </div>
      </a-col>
    </a-row>

  </div>



</template>


<script>
  import { httpAction } from '@/api/manage'
  import ARow from "ant-design-vue/es/grid/Row";


  export default {
    name: 'AudituQarantine',
    components: {ARow},
    data (){
      return {
        visible: false,
        h5Link: '',
        visible1:false,
        value:1,
        description:''
      }
    },
    props: {
      flow: {
        type: Object,
        default: () => {}
      },
      repair: {
        type: Object,
        default: () => {}
      },
      type: {
        type: String,
        default: () => ''
      },
      fileList: {
        default: () => []
      },
    },

    methods: {
      // 分享链接
      showModal () {
        this.visible = true;
        this.h5Link = 'http://static.terrybg.com/appwork/shangchancailiao.html?repairId=' + this.repair.id;
      },
      handleOk () {
        this.visible = false;
      },
      copyLink () {
        const input = document.createElement('input')
        document.body.appendChild(input)
        input.setAttribute('value',this.h5Link)
        input.select()
        if (document.execCommand('copy')) {
          document.execCommand('copy')
        }
        document.body.removeChild(input)
        this.$message.success('已复制！');
      },
      reloadData () {
        this.$parent.getData()
      }
    }
  }
</script>

<style lang="less" scoped>
  hr{border:0.5px solid rgba(232, 232, 232, 1);}
  .gutter-box {height: 42px;background: white;line-height: 42px;}
  .icon{
    font-size: 16px;
  }
  .instructions{
    color:rgba(153,153,153,1);
    font-size: 10px;
    margin: 0;
  }
  .link{
    font-family:"MicrosoftYaHei";
    font-weight:400;
    color:rgba(102,102,102,1);
    line-height:40px;
    margin-top: 9px;
  }
  .focus{
    color: #F40000;
  }
  .ant-btn{
    margin-left: 24px;
  }
</style>