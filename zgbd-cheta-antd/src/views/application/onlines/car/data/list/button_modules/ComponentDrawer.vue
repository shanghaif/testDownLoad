<template>
  <a-drawer
    title="组件库"
    :placement="placement"
    :closable="false"
    width="500px"
    @close="visible = false"
    :visible="visible"
  >
    <div class="modal_overflow_scroll">
      <a-spin :spinning="spinning">
        <a-card style="margin-bottom: 1rem;">
          <a-select v-model="parentId" style="width: 110px;" @change="onSelectCom">
            <a-select-option value="all">全部模块</a-select-option>
            <a-select-option value="parent">正式模块</a-select-option>
            <a-select-option value="child">测试模块</a-select-option>
          </a-select>
          <a-input-search
            style="width: 55%;margin-left: 3rem;"
            v-model="projectName"
            class="input"
            placeholder="请输入"
            @search="onSelectCom"
            enterButton="搜索"
            size="default"
          />
        </a-card>
        <a-row :gutter="10">
          <a-col :span="12" v-for="item in dataCenter" class="element-card">
            <a-card
              class="page-item"
              style="margin-bottom: 20px;"
              hoverable
              @click="pageModalBind(item.projectId)"
            >
              <div class="imgSty" slot="cover">
                <img
                  :src="item.projectImg||not_img"
                  width="100%"
                  alt="example"
                  draggable="false">
              </div>

              <a-card-meta
                :title="item.projectName"
                :description="item.remark||'暂无数据'"
                style="height: 40px;" >
              </a-card-meta>
            </a-card>
          </a-col>
        </a-row>
      </a-spin>
    </div>
  </a-drawer>
</template>

<script>
  import {getComponentsById} from '@/views/application/onlines/car/api/api'
  import carMixin from '@/views/application/onlines/car/config/mixin.js'
  import {getAction} from "@/api/manage";
  import configPath from '@/views/application/onlines/config/config.js'

  export default {
    name: 'ComponentDrawer',
    components: Object.assign(
      carMixin.components,
      {configPath}
    ),
    data() {
      return {
        //组件库
        pageType : 1,
        projectName: '',
        parentId: 'child',
        spinning : false,
        visible: false,
        placement: 'left',
        //首页中心数据
        dataCenter: [],
        not_img : configPath.not_img,
        url : {
          getData : "application/online/component/getComponentList",
          getComponent : "application/online/component/getComponentsById",
        },
        item : [],
      };
    },
    created(){
      var that = this;
      let dt = {parentId : this.parentId,pageType:this.pageType}
      that.getCenterList(dt);
    },
    methods:{
      open(item){
        let that = this;
        that.visible = true;
        that.item = item;
      },
      pageModalBind(projectId){
        getComponentsById({projectId:projectId}).then(inner =>{
          this.$emit('add',inner.result);
        })
      },
      onSelectCom(){
        var params = {
          projectName : this.projectName,
          parentId : this.parentId,
          pageType : this.pageType
        };
        this.dataCenter = [];
        this.getCenterList(params);
      },
      //默认显示历史中心
      getCenterList(params) {
        var that = this;
        that.spinning = true;
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
    }
  }
</script>

<style scoped>
  .modal_overflow_scroll{
    height: 100%;
    overflow-y: scroll;
    overflow-x: hidden;
  }

  .imgSty {
    height: 80px;
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