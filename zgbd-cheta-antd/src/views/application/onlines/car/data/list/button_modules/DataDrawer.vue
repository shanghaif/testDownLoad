<template>
    <a-drawer
        title="资源库"
        width="350"
        placement="right"
        :closable="false"
        @close="closeIconlibrary"
        :visible="iconlibraryVisible"
      >
        <data-center-drawer :params="{type:'post'}" ref="datacenterdrawer" :config="config"></data-center-drawer>
        <a-card>
          <a-button-group style="margin-left: 10px;">
            <a-button style="margin:0px 10px 10px 0px;" @click="switchs(styles.type,'style')" :type="styles.type" v-for="styles in config[0].buttonsStyle">{{styles.title}}</a-button>
          </a-button-group>
        </a-card>
        <a-card>
          <a-row>
            <a-col :span="14">
              <a-button class="button_width" type="primary" @click="showButtons">填充对话框</a-button>
            </a-col>
            <a-col :span="10">
                <span style="margin-left: 25px">
                  <a-badge :count="modal.length" :numberStyle="{backgroundColor: '#52c41a'} "/>
                </span>
            </a-col>
          </a-row>
          <a-row style="margin: 10px 0px;padding: 10px 0px">
            <a-col :span="14" style="margin-bottom: 10px;">
              <a-button class="button_width" type="primary" @click="showDataCenter">请选择接口</a-button>
            </a-col>
            <a-col :span="24" v-if="modal[0]&&modal[0].url">
              <span>
                <a-tag :color="modal[0].color">
                  {{ modal[0].tagName }}
                </a-tag>
              </span>
              <span>url:  </span>
              <span class="url_font">{{briefUrl(modal[0].url)}}</span>
            </a-col>
          </a-row>
          <a-row>
            <a-col>
              <a-input placeholder="权限标识"></a-input>
            </a-col>
          </a-row>
          <a-row style="margin: 10px 0px;padding: 10px 0px">
            <a-col :span="24" style="margin-bottom: 10px;">
              对话框标题：<a-input v-model="modalDetail.title"></a-input>
            </a-col>
            <a-col :span="12">
              取消：<a-input v-model="modalDetail.cancelText"></a-input>
            </a-col>
            <a-col :span="12">
              确定：<a-input v-model="modalDetail.okText"></a-input>
            </a-col>
          </a-row>
        </a-card>
        <a-card>
          <a-radio-group :defaultValue="config[0].shapes[0].shape">
            <a-radio-button @click="switchs(shape.shape,'shape')" v-for="shape in config[0].shapes" :value="shape.shape">{{shape.title}}</a-radio-button>
          </a-radio-group>
          <a-radio-group :defaultValue="config[0].sizes[0].size" style="margin-top: 10px">
            <a-radio-button @click="switchs(size.size,'size')" v-for="size in config[0].sizes" :value="size.size">{{size.title}}</a-radio-button>
          </a-radio-group>
        </a-card>
        <a-card>
          <a-row>
            <a-col :span="24">
              <a-icon @click="switchs('','icon')" type="reload" class="icon" style="width: 50px;height: 50px;">默认</a-icon>
              <a-icon class="icon" @click="switchs(icons.icon,'icon')" :type="icons.icon" v-for="icons in config[0].icons" style="height: 50px;width: 50px;"/>
            </a-col>
          </a-row>
        </a-card>
      </a-drawer>
</template>

<script>
    import DataCenterDrawer from "./DataCenterDrawer";
    import Span from "../../../component/list/modules/modules/Span";
    export default {
        name: "DataDrawer",
        components:{
            Span,
            DataCenterDrawer
        },
        data(){
            return{
                buttonIndex : 0,
                //图标库
                iconlibraryVisible : false,
                buttonTemp: [],
                modalDetail : {},
                url : {
                    getDataCenter : "/application/online/component/dataCenter/queryAll",
                }
            }
        },
        props: {
            config: {
                type: Array,
                default: () => []
            },
        },
        methods:{
            showIconlibrary(modal,modalDetail,index){
                let that = this;
                that.modalDetail = modalDetail;
                that.modal = modal;
                that.buttonIndex = index;
                that.iconlibraryVisible = !that.iconlibraryVisible;
            },
            showButtons(){
              this.$emit('showButtons');
            },
            switchs(value,type){
                var that = this;
                if(type === 'style'){
                    that.config[0].buttons[that.buttonIndex].type = value;
                }else if(type === 'icon'){
                    that.config[0].buttons[that.buttonIndex].icon = value;
                }else if(type === 'size'){
                    that.config[0].buttons[that.buttonIndex].size = value;
                }else if(type === 'shape'){
                    that.config[0].buttons[that.buttonIndex].shape = value;
                }
            },
            closeIconlibrary() {
                this.iconlibraryVisible = !this.iconlibraryVisible
            },
            //显示数据中心
            showDataCenter() {
                let that = this;
                if(that.modal.length <= 0){
                    that.$message.warning("请先填充组件！1 秒后为您自动弹出");
                    setTimeout(() =>{
                        that.$message.success("已自动弹出组件库");
                        that.showButtons()
                    },800)
                    return;
                }
                that.$refs.datacenterdrawer.showDrawer(that.config[0].buttons[that.buttonIndex].modal[0],that.buttonIndex);
            },
            briefUrl(url){
                if(url.lastIndexOf('/') == -1){
                    return url;
                }else{
                    url =  url.substring(url.lastIndexOf('/') + 1,url.length);
                    url = url.indexOf('?') != -1?url = url.substring(0,url.indexOf('?')):url;
                    return url;
                }
            },
        }
    }
</script>

<style scoped>
  .url_font{
    font-style: italic;
    font-weight: bold;
    font-size: large;
    font-family: "Microsoft YaHei", "微软雅黑", "SimHei", "黑体";
  }
  .button_width{
    width: 100%;
  }
</style>