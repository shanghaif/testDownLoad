<template>
  <div>
    <a-modal
      :title="title"
      v-model="visible"
      cancelText="关闭"
      width="60%"
      @ok="save"
    >
      <div style="height: 750px;overflow-y: scroll;overflow-x: hidden">
        <div id="components-back-top-demo-custom">
          <a-back-top>
            <div class="ant-back-top-inner">TOP</div>
          </a-back-top>
        </div>

        <a-spin :spinning="spinning">
          <a-card>
            <a-radio-group defaultValue="2" @change="changeModal">
              <a-radio-button value="2">应用中心</a-radio-button>
              <a-radio-button value="1">物料市场</a-radio-button>
            </a-radio-group>
            <a-input-search
              style="width: 40%;margin-left: 8rem;"
              placeholder="请输入要搜索的关键字"
              @search="onSelectCom"
              enterButton="搜索"
            />
          </a-card>
          <a-card class="type-tag">
            <div>
              <span>分类：</span>
              <a-tag @click="getAll">全部</a-tag>
              <a-tag @click="getTagType(tag.id,tag.color)" v-for="tag in tags" :color="tag.color">
                {{ tag.name }}
              </a-tag>
              <a-tag :color="color">总数：{{elements.length}}</a-tag>
              <span>
                <span v-if="modalType == 1 && projectId">
                  <a :href="'#'+projectId" >
                    <a-tooltip placement="top">
                      <template slot="title">
                        <span>定位</span>
                      </template>
                    <a-icon class="hoverBlue" style="margin-left: 1rem" type="fullscreen-exit" />
                    </a-tooltip>
                  </a>
                </span>
                <span v-else-if="modalType == 2 && componentId">
                  <a :href="'#'+componentId">
                  <a-tooltip placement="top">
                    <template slot="title">
                      <span>定位</span>
                    </template>
                  <a-icon class="hoverBlue" style="margin-left: 1rem" type="fullscreen-exit" />
                  </a-tooltip>
                </a>
                </span>
              </span>
            </div>
            </a-card>
          <a-row v-if="elements.length" :gutter="16" style="margin-top: 8px;">
            <a-col :span="6" v-for="item in elements">
              <a-card
                class="page-item"
                hoverable="true"
                :style="`width: 99%;margin-bottom: 20px;background-color: ${cardColor(item.projectId)}`"
                @click="bindPage(item)"
              >
                <div class="imgSty" slot="cover">
                  <img :src="item.projectImg?item.projectImg:not_img" width="100%" alt="example" draggable="false">
                </div>
                <div>
                  <a-card-meta
                    style="height: 48px;"
                    :title="item.projectName"
                    :description="item.url?item.url:(item.remark?item.remark:'暂无数据')">
                  </a-card-meta>
                </div>
                <div style="margin-top: 1rem;height:1rem">
                  <span>{{item.createTime}}</span>
                  <a-tag :color="item.color" v-if="item.tagName" style="margin-left: 1rem">{{item.tagName}}</a-tag>
                </div>
              </a-card>
              <span :id="item.projectId"/>
            </a-col>
          </a-row>
          <a-row v-else>
            <a-empty />
          </a-row>
        </a-spin>
      </div>
    </a-modal>
  </div>
</template>

<script>
    import {getAction} from "@/api/manage";
    import ARow from "ant-design-vue/es/grid/Row";
    import ACol from "ant-design-vue/es/grid/Col";

    export default {
        name: "BindModal",
        components: {ACol, ARow},
        data() {
            return {
                //对话框选择 2应用中心 1物料市场
                color : '',
                modalType: '2',
                componentId: '',
                projectId: '',
                not_img : 'http://file.terrybg.com/cheta/16d5a5a7b1db4bbe8ee0be1e8b7a4595.png',
                visible: false,
                spinning: false,
                //页面下拉是否可选择
                disableSubmit:false,
                //页面下拉数据
                mpageTree:[],
                tags: [],
                apply: [],
                elements: [],
                material: [],

                api: {
                    initTag: "/application/material/Tabs/getData",
                    getApplyData: "/application/online/component/getComponentList",

                    listMpage: "/application/setting/mpage/getTreeData",
                }
            }
        },
        created() {
            var that = this;
            let param = {pageType: that.modalType};
            that.initTag(param);
            that.getComList(param);
            that.initialMpageList();
        },
        methods: {
            //校验是否选中该图片
            cardColor(projectId){
                if(this.componentId&&projectId === this.componentId||projectId === this.projectId){
                    return 'rgba(60,218,230,0.44)'
                }else{
                    return  ''
                }
            },
            //菜单页面列表
            initialMpageList(){
                var params = "";
                var $this = this;
                getAction(this.api.listMpage,params).then((res)=>{
                    if(res.success){
                        this.mpageTree = $this.initData(res.result)
                    }else{
                        console.log(res.message);
                    }
                });
            },
            initData (children) {
                var list = [], app = this;
                children.forEach(item => {
                    var data = {
                        key: item.id,
                        title: item.name,
                        value: item.id,
                        disabled: item.disabled
                    };
                    if (item.children) {
                        data.children = app.initData(item.children)
                    }
                    list.push(data);
                });
                return list;
            },
            onSelectCom(value){
                this.elements = [];
                var params = {projectName:value,pageType:this.modalType};
                this.getComList(params);
            },
            bindPage(item) {
                if(this.modalType == 1){
                    item.isComponent = true;
                }
                this.$emit('bindPage', item)
            },
            getTagType(id,color) {
                var that = this;
                that.color = color;
                let params = {tagId: id, pageType: that.modalType};
                that.getComList(params);
            },
            getAll() {
                this.color = '';
                this.getComList({pageType: this.modalType});
            },
            changeModal(e) {
                var that = this;
                that.modalType = e.target.value;
                that.color = '';
                that.initTag({pageType: that.modalType});
                that.getComList({pageType: that.modalType});
            },
            showModal(componentId,projectId) {
                this.projectId = projectId;
                this.componentId = componentId;
                this.elements.forEach(item => {
                  if(item.projectId === projectId){
                      this.projectId = projectId;
                  }
                });
                this.visible = true
            },
            getComList(params) {
                this.elements = [];
                var that = this;
                that.spinning = true;
                getAction(that.api.getApplyData, params).then(res => {
                    res.result.forEach(inner => {
                        that.elements.push(inner)
                    })
                    that.spinning = false;
                });
            },
            initTag(params) {
                var $this = this;
                getAction($this.api.initTag, params).then(res => {
                    $this.tags = res.result;
                })
            },
        }
    }
</script>

<style scoped>
  #components-back-top-demo-custom .ant-back-top {
    bottom: 100px;
  }
  #components-back-top-demo-custom .ant-back-top-inner {
    height: 40px;
    width: 40px;
    line-height: 40px;
    border-radius: 4px;
    background-color: #1088e9;
    color: #fff;
    text-align: center;
    font-size: 20px;
  }
  .imgSty {
    height: 111px;
    line-height: 76px;
    background: #4a4a4a;
    overflow: hidden;
    display: -ms-flexbox;
    display: flex;
    -ms-flex-pack: center;
    -ms-flex-align: center;
    align-items: center;
  }
  .hoverBlue:hover {
    transform: scale(2);
  }
  .type-tag {
  }
</style>