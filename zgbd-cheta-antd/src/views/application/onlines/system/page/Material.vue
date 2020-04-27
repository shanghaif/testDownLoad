<template>
    <div>
      <a-back-top />
      <a-spin :spinning="spinning">
        <a-row>
          <a-col span="24">
            <div class="page-item">
              <div class="type-tag">
                <span>分类：</span>
                <a-tag @click="getAll">全部</a-tag>
                <a-tag @click="getTagType(tag.id,tag.color)" v-for="tag in tags" :color="tag.color">
                  {{ tag.name }}
                </a-tag>
                <a-tag :color="color">总数：{{elements.length}}</a-tag>
              </div>
              <div class="typeFilter">
                <a-button style="margin-left: 1rem" @click="handleAdd">新增</a-button>
                <a-input-search
                  class="input"
                  placeholder="请输入要搜索的关键字"
                  @search="onSelectCom"
                  enterButton="搜索"
                  size="large"
                />
              </div>
            </div>
          </a-col>
        </a-row>
        <a-row v-if="elements.length" :gutter="16" style="margin-top: 8px;">
          <a-col :span="6" v-for="(item,index) in elements" >
            <a-card
              class="page-item operation_hover"
              :hoverable="true"
              style="width: 99%;margin-bottom: 20px;"
            >
              <div class="imgSty" slot="cover">
                <img
                  :src="item.projectImg?item.projectImg:not_img"
                  width="100%"
                  :alt="item.projectName"
                  draggable="false">
              </div>
              <a-card-meta
                :title="item.projectName"
                :description="item.url||(item.remark||'暂无数据')">
              </a-card-meta>
              <div style="margin-top: 1rem;height:1rem">
                <span>{{item.createTime}}</span>
                <a-tag :color="item.color" v-if="item.tagName" style="margin-left: 1rem">{{ item.tagName }}</a-tag>
                <span class="operation_dis" style="float: right">
                  <a-tooltip placement="top">
                    <template slot="title">
                      <span>预览</span>
                    </template>
                    <a-icon class="rightRun hover-blue" type="eye"  @click="pre(item)"/>
                  </a-tooltip>
                  <a-tooltip placement="top">
                    <template slot="title">
                      <span>编辑</span>
                    </template>
                    <a-icon class="rightRun hover-blue" type="edit"  @click="edit(item)"/>
                  </a-tooltip>
                  <a-tooltip placement="top">
                    <template slot="title">
                      <span>删除</span>
                    </template>
                    <a-icon type="delete" class="hover-red" @click="confirm(item.id,index)"/>
                  </a-tooltip>
                </span>
              </div>
            </a-card>
          </a-col>
        </a-row>
        <a-row v-else>
          <a-empty style="margin-top: 3rem"/>
      </a-row>
      </a-spin>
      <AddMaterialModal :tags="tags" :tagList="tagList" @getComList="getComList" ref="addmaterialmodal"></AddMaterialModal>
    </div>
</template>

<script>
  import {getAction,deleteAction} from "@/api/manage";
  import ARow from "ant-design-vue/es/grid/Row";
  import ACol from "ant-design-vue/es/grid/Col";
  import AddMaterialModal from './modules/AddMaterialModal'

    export default {
      name: "Material",
      components: {ACol, ARow,AddMaterialModal},
      data() {
        return {
          not_img : 'http://file.terrybg.com/cheta/16d5a5a7b1db4bbe8ee0be1e8b7a4595.png',
          tags: [],
          tagList: [],
          elements: [],

          //物料市场
          color : '',
          pageType : 2,
          spinning : false,
          api : {
            initTag : "/application/material/Tabs/getData",
            delete : "/application/online/component/deleteForNById",
            getData : "/application/online/component/getComponentList"
          }
        }
      },
      created() {
          this.initTag();
          this.getComList({pageType:this.pageType});
      },
      methods: {
        getAll(){
            var that = this;
            that.color = '';
            that.getComList({pageType:that.pageType});
        },
        getTagType(id,color){
          this.color = color;
          var parems = {tagId:id,pageType:this.pageType};
          this.getComList(parems);
        },
        handleAdd(){
          this.$refs.addmaterialmodal.add();
          this.$refs.addmaterialmodal.title = "新增物料";
        },
        edit(item){
          this.$refs.addmaterialmodal.edit(item);
          this.$refs.addmaterialmodal.title = "编辑物料";
        },
        initTag () {
          var $this = this;
          getAction($this.api.initTag,{pageType:$this.pageType}).then(res => {
            res.result.forEach(tag => {
              $this.tagList.forEach(inner => {
                if (tag.id === inner.id) {
                  tag.checked = true;
                }
              })
            })
            $this.tags = res.result;
          })
        },
        onSelectCom(value){
          this.elements = [];
          var params = {projectName:value,pageType:this.pageType};
          this.getComList(params);
        },
        pre(item){
          window.open(item.accessUrl)
        },
        confirm (id,index) {
          var $this = this;
          this.$confirm({
            title: '确定要删除吗？',
            okText: '确认',
            cancelText: '取消',
            onOk() {
              $this.deletePro(id,index);
            },
          });
        },
        deletePro(id,index){
          var $this = this;
          deleteAction($this.api.delete, {id: id})
            .then(res => {
              if(res.result > 0){
                $this.$message.success("操作成功");
                this.elements[index] = null;
                this.elements.splice(index, 1);
              }else{
                $this.$message.error(res.message)
              }
            })
        },
        getComList(params) {
          this.elements = [];
          var that = this;
          that.spinning = true;
          getAction(that.api.getData,params).then(res => {
            res.result.forEach(item => {
              that.elements.push(item)
            })
            that.spinning = false;
          });
        },
      }
    }
</script>

<style scoped>
  .operation_hover .operation_dis{visibility: hidden;}
  .operation_hover:hover .operation_dis{visibility: visible;}

  .type-tag{
    margin:0rem 1rem;line-height: 75px;border-bottom: 1px dashed rgba(53,35,55,0.2);
  }
  .typeFilter{
    height: 100px;line-height: 100px;margin: 10px 0px;width: 100%;
  }
  .typeFilter .input{
    width: 35%;
    margin: 30px 0px 0px 28rem;
  }
  .page-item .imgSty {
    height: 220px;
    line-height: 76px;
    background: #4a4a4a;
    overflow: hidden;
    display: -ms-flexbox;
    display: flex;
    -ms-flex-pack: center;
    -ms-flex-align: center;
    align-items: center;
  }
  .rightRun{
    margin-right: 10px;
  }
  .hover-blue :hover{
    color: rgba(36,174,216,0.44);
    cursor: pointer;
  }
  .hover-red :hover{
    color: rgba(230, 82, 37, 0.44);
    cursor: pointer;
  }
  .page-item{
    box-shadow: 0 6px 18px 0 rgba(82,94,102,.15);
    border-radius: 4px;
  }
</style>