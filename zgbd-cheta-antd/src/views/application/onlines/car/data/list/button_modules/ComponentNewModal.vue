<template>
  <div>
    <!--组件库-->
    <a-modal
      title="组件库"
      v-model="comVisible"
      cancelText="关闭"
      width="50%"
      @ok="comOk"
    >
      <a-radio-group v-model="selectComType" :defaultValue="1" style="margin-bottom: 15px;">
        <a-radio-button :value="1">首页中心</a-radio-button>
        <a-radio-button :value="2">车务组件库</a-radio-button>
      </a-radio-group>
      <!--页面中心-->
      <div v-if="selectComType == 1" class="modal_overflow_scroll">
        <a-spin :spinning="spinning">
          <a-card style="margin-bottom: 1rem;">
            <a-select v-model="parentId" style="width: 110px;" @change="onSelectCom">
              <a-select-option value="all">全部模块</a-select-option>
              <a-select-option value="parent">正式模块</a-select-option>
              <a-select-option value="child">测试模块</a-select-option>
            </a-select>
            <a-input-search
              style="width: 62%;margin-left: 3rem;"
              v-model="projectName"
              class="input"
              placeholder="请输入"
              @search="onSelectCom"
              enterButton="搜索"
              size="default" />
          </a-card>
          <a-row :gutter="10">
            <a-col :span="6" v-for="item in dataCenter" class="element-card">
              <a-card class="page-item" style="margin-bottom: 20px;" hoverable @click="pageModalBind(item.projectId)">
                <div class="imgSty" slot="cover">
                  <img :src="item.projectImg||not_img" width="100%" alt="example" draggable="false">
                </div>
                <a-card-meta :title="item.projectName" :description="item.remark||'暂无数据'" style="height: 60px;" ></a-card-meta>
              </a-card>
            </a-col>
          </a-row>
        </a-spin>
      </div>

      <!--组件-->
      <div v-else  class="modal_overflow_scroll">
        <a-card>
          24栅格：
          <a-slider :max="24" :min="1" v-model="sliderNum"/>
        </a-card>
        <template v-for="item in data">
          <!--slider控制条 控制24栅格-->
          <p :id="item.title"><span style="font-weight: bold">{{ item.title }}</span>（{{ item.size }}）</p>
          <a-row :gutter="16">
            <a-col v-for="inner in item.children" :span="6" style="margin-top: 10px">
              <a-card @click="pageComponentModal(inner)" class="element-card">
                <img alt="example" :src="inner.image?inner.image:not_img" slot="cover" style="height: 80px;"/>
                <a-card-meta :description="inner.title||'暂无数据'"/>
              </a-card>
            </a-col>
          </a-row>
        </template>
      </div>
    </a-modal>
  </div>
</template>

<script>
  import carMixin from '@/views/application/onlines/car/config/mixin.js'
  import {getAction} from "@/api/manage";
  import configPath from '@/views/application/onlines/config/config.js'

  export default {
    name: 'ComponentNewModal',
    components: Object.assign(
      carMixin.components,
      {configPath}
    ),
    data(){
      return{
        pageType : 1,
        //选择组件样式 1:首页中心 2:组件库
        selectComType: 1,
        //组件栅格
        sliderNum: 24,
        projectName: '',
        parentId: 'child',
        not_img : configPath.not_img,
        //组件
        comVisible: false,
        spinning : false,
        //获取data.js里面的数据
        currentData: {},
        //车务组件数据
        data: [],
        //首页中心数据
        dataCenter: [],
        url : {
          getData : "application/online/component/getComponentList",
          getComponent : "application/online/component/getComponentsById",
        },
        item :[]
      }
    },
    created(){
      var that = this;
      let dt = {parentId : this.parentId,pageType:this.pageType}
      that.data = carMixin.data.category;
      that.currentData = carMixin;
      that.getCenterList(dt);
    },
    methods: {
      open(item) {
        var that = this;
        that.item = item;
        that.comVisible = true
      },
      pageModalBind(projectId){
        console.log(projectId);
        this.item.push({projectId:projectId});
      },
      pageComponentModal(inner){
        console.log(inner);
      },
      onSelectCom(){
        var params = {
          projectName : this.projectName,
          parentId : this.parentId,
          pageType : this.pageType
        };
        this.getCenterList(params);
      },
      //默认显示历史中心
      getCenterList(params) {
        var that = this;
        that.spinning = true;
        that.dataCenter = [];
        getAction(that.url.getData,params).then(res => {
          res.result.forEach(item => {
            that.dataCenter.push({
              projectId: item.projectId,
              projectName: item.projectName,
              projectImg: item.projectImg,
              remark: item.remark,
            })
          })
          that.spinning = false
        });
      },
    },
  }
</script>

<style scoped>
  .modal_overflow_scroll{
    height: 650px;
    overflow-y: scroll;
    overflow-x: hidden;
  }

  .imgSty {
    height: 100px;
    line-height: 76px;
    background: #4a4a4a;
    overflow: hidden;
    display: -ms-flexbox;
    display: flex;
    -ms-flex-pack: center;
    -ms-flex-align: center;
    align-items: center;
  }
</style>