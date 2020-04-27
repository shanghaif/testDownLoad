<template>
  <a-row :gutter="16">
    <a-col class="gutter-row">
      <div class="gutter-box" v-if="type=== 'oa_reject'">
        <div class="gutter-example">
          <a-row :gutter="16">
            <a-col class="gutter-row" :span="6" :lg="6" :md="6" :sm="12">
              <a-button @click="showModal" type="primary" class="link_btn"><a-icon type="share-alt" class="icon"/>分享链接</a-button><a-button style="margin-left: 10px"><a-icon type="reload" />刷新</a-button>
              <a-modal
                title="分享链接"
                v-model="visible"
                @ok="handleOk"
              >
                <div>
                  <p class="send" style="margin: 0;font-size:15px">请将下面的链接发送给维修厂</p>
                  <p class="instructions">维修厂将根据所发的链接填写相关报价信息,并且自动传回系统</p>
                  <a-input placeholder="" v-model="h5Link" size="large" class="link"/>
                  <a-button type="primary" style="margin-top: 20px" @click="copyLink"><a-icon type="link" />复制链接</a-button>
                  <span class="time_yx" style="margin-left: 10px;margin-top: 20px">链接有效期7天</span>
                </div>
              </a-modal>
            </a-col>
            <a-col :span="3" :lg="3" :md="3" :sm="12"><div class="gutter-box"><a-button type="primary" @click="edit" >重新提交</a-button></div></a-col>
          </a-row>
        </div>
      </div>
    </a-col>
    <RepairEdit ref="repairEdit" :data="data" @getData="getData"></RepairEdit>
  </a-row>
</template>
<script>
  import RepairEdit from './RepairEdit'
  export default {
    name: 'AuditReviewReject',
    components:{
      RepairEdit,
    },
    data(){
      return{
        visible: false,
        h5Link: ''
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
      }
    },
    methods:{
      showModal () {
        this.h5Link = 'http://static.terrybg.com/appwork/weixiubaojia.html?repairId=' + this.repair.id
        this.visible = true;
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

      edit() {
        this.$refs.repairEdit.edit(this.repair)
      },
      getData () {
        this.$emit('getData');
      }
    },
  }
</script>

<style lang="less" scoped>
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

</style>