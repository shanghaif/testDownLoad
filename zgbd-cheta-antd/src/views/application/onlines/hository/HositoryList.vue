<template>
  <div>
    <a-back-top/>
    <a-spin :spinning="spinning">
      <a-row>
        <a-col span="24">
            <div class="page-item">
              <div style="margin:0rem 1rem;line-height: 75px;border-bottom: 1px dashed rgba(53,35,55,0.2);">
                <span>分类：</span>
                <a-tag @click="getAll">全部</a-tag>
                <a-tag @click="getTagType(tag.id,tag.color)" v-for="tag in tags" :color="tag.color">
                  {{ tag.name }}
                </a-tag>
                <a-tag :color="color">总数：{{elements.length}}</a-tag>
              </div>
              <div class="typeFilter">
                <a-button style="margin-left: 1rem" @click="add">新增</a-button>
                <a-select v-model="parentId" style="width: 100px;margin-left: 1rem;" @change="onParentChange">
                  <a-select-option value="all">全部模块</a-select-option>
                  <a-select-option value="parent">正式模块</a-select-option>
                  <a-select-option value="child">测试模块</a-select-option>
                </a-select>
                <a-input-search
                  v-model="projectName"
                  class="input"
                  placeholder="请输入"
                  @search="onSelectCom"
                  enterButton="搜索"
                  size="large"
                />
              </div>
            </div>
          </a-col>
      </a-row>
      <a-row v-if="elements.length" :gutter="16" style="margin-top: 8px;">
        <a-col :span="6" v-for="(item,index) in elements">
          <a-card class="page-item operation_hover" hoverable style="width: 99%;margin-bottom: 20px;">
            <div class="imgSty" slot="cover">
              <img
                :src="item.projectImg?item.projectImg:not_img"
                width="100%"
                alt="example"
                draggable="false">
            </div>
            <a-card-meta
              :title="item.projectName"
              :description="item.remark?item.remark:'暂无数据'">
            </a-card-meta>
            <div style="margin-top: 1rem;height:1rem">
              <span>{{item.createTime}}</span>
              <a-tag :color="item.color" v-if="item.tagName" style="margin-left: 1rem">{{ item.tagName }}</a-tag>
              <span class="operation_dis" style="float:right">
                <!--<a-popover  slot="title" placement="top">
                  <img  slot="content" :src="item.projectImg">
                  <a-icon class="rightRun hover-blue" type="eye"/>
                </a-popover>-->
                <a-tooltip placement="top">
                  <template slot="title"><span>克隆</span></template>
                  <a-icon class="rightRun hover-blue" type="copy" @click="copy(item.projectId)"/>
                </a-tooltip>
                <a-tooltip placement="top">
                  <template slot="title"><span>预览</span></template>
                  <a-icon class="rightRun hover-blue" type="eye" @click="pre(item.projectId)"/>
                </a-tooltip>
                <a-tooltip placement="top">
                  <template slot="title"><span>编辑</span></template>
                  <a-icon class="rightRun hover-blue" type="edit" @click="edit(item.projectId)"/>
                </a-tooltip>
                <a-tooltip placement="top">
                  <template slot="title"><span>删除</span></template>
                  <a-icon type="delete" class="hover-red" @click="confirm(item.projectId,index)"/>
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
  </div>
</template>

<script>
    import {getAction, postAction, deleteAction} from "@/api/manage";
    import ARow from "ant-design-vue/es/grid/Row";
    import Header from "./Header";
    import ACol from "ant-design-vue/es/grid/Col";

    export default {
        name: "HositoryList",
        components: {ACol, Header, ARow},
        data() {
            return {
                //应用中心
                color: '',
                pageType: 1,
                projectName: '',
                parentId: 'all',
                not_img: 'http://file.terrybg.com/cheta/16d5a5a7b1db4bbe8ee0be1e8b7a4595.png',
                tags: [],
                elements: [],

                spinning: false,
                api: {
                    initTag: "/application/material/Tabs/getData",
                    getData: "/application/online/component/getComponentList",
                    deleteCom: "/application/online/component/delete",
                    clone: "/application/online/component/clone",
                }
            }
        },
        created() {
            this.initTag();
            this.getComList({pageType: this.pageType});
        },
        methods: {
            copy(projectId){
              var that = this;
              postAction(that.api.clone, {projectId:projectId}).then(res => {
                if(res.success){
                  that.$message.success(res.message)
                  that.elements.unshift(res.result);
                }else{
                  that.$message.error(res.message)
                }
              })
            },
            getAll() {
                var that = this;
                that.color = '';
                that.getComList({pageType: that.pageType});
            },
            getTagType(id, color) {
                this.color = color;
                var parems = {tagId: id, pageType: id=='a6bc50c6c0234295b9d2e8f6da82a546'?3:this.pageType};
                this.getComList(parems);
            },
            initTag() {
                var $this = this;
                getAction($this.api.initTag, {pageType: this.pageType}).then(res => {
                    $this.tags = res.result;
                })
            },
            add() {
                window.open('/onlines/home');
            },
            onSelectCom() {
                var params = {
                    projectName: this.projectName,
                    parentId: this.parentId,
                    pageType: this.pageType,
                };
                this.getComList(params);
            },
            onParentChange(value) {
                var params = {parentId: value, pageType: this.pageType};
                this.getComList(params);
            },
            pre(projectId) {
                window.open('/preview/' + projectId);
            },
            confirm(projectId, index) {
                var $this = this;
                this.$confirm({
                    title: '确定要删除吗？',
                    okText: '确认',
                    cancelText: '取消',
                    onOk() {
                        $this.deletePro(projectId, index);
                    },
                });
            },
            deletePro(projectId, index) {
                var $this = this;
                deleteAction($this.api.deleteCom, {projectId: projectId})
                    .then(res => {
                        if (res.result > 0) {
                            $this.$message.success("操作成功");
                            this.elements[index] = null;
                            this.elements.splice(index, 1);
                        } else {
                            $this.$message.error(res.message)
                        }
                        /* this.$router.go(0);*/
                    })
            },
            edit(projectId) {
                window.open('/onlines/car/' + projectId)
            },
            getComList(params) {
                var that = this;
                that.elements = [];
                that.spinning = true;
                getAction(that.api.getData, params).then(res => {
                    res.result.forEach(item => {
                        that.elements.push({
                            projectId: item.projectId,
                            projectName: item.projectName,
                            projectImg: item.projectImg,
                            tagName: item.tagName,
                            color: item.color,
                            remark: item.remark,
                            createTime: item.createTime,
                        })
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

  .hover-blue :hover {
    color: rgba(36, 174, 216, 0.44);
    cursor: pointer;
  }

  .hover-red :hover {
    color: rgba(230, 82, 37, 0.44);
    cursor: pointer;
  }

  .typeFilter {
    height: 100px;
    line-height: 100px;
    margin: 10px 0px;
    width: 100%;
  }

  .typeFilter .input {
    width: 35%;
    margin: 30px 0px 0px 20rem;
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

  .rightRun {
    margin-right: 10px;
  }

  .page-item {
    box-shadow: 0 6px 18px 0 rgba(82, 94, 102, .15);
    border-radius: 4px;
  }
</style>