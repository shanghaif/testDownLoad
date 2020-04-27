<template>
  <div class="page-item">
    <div style="margin:0rem 1rem;line-height: 75px;border-bottom: 1px dashed rgba(53,35,55,0.2);">
      分类：
      <a style="margin: 0rem 1rem" v-for="item in typeList">{{item.name}}</a>
    </div>
    <div class="typeFilter">
      <a-select v-model="parentId" style="width: 100px;margin-left: 1rem;" @change="onParentChange">
        <a-select-option value="all">全部模块</a-select-option>
        <a-select-option value="parent">父模块</a-select-option>
        <a-select-option value="child">子模块</a-select-option>
      </a-select>
      <!--<span style="margin-left: 2rem;">
      <a-tag @click="onType('home')" color="#f50">首页</a-tag>
      <a-tag @click="onType('elment')" color="#2db7f5">组件</a-tag>
      <a-tag @click="onType('car')" color="#108ee9">车务</a-tag>
      <a-tag color="#87d068">模块</a-tag>
      </span>-->
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
</template>

<script>
    import {getAction} from "@/api/manage";
    export default {
      name: "Header",
      data() {
        return {
          projectName: '',
          parentId: 'all',

          typeList : [{
            name : "类型一"
          },{
            name : "类型二"
          },{
            name : "类型三"
          },{
            name : "类型四"
          },{
            name : "类型五"
          },{
            name : "类型六"
          }]
        }
      },
      props: {
        elements: {
          type: Array,
          default: () => []
        },
        spinning: {
          type: Boolean,
        }
      },
      methods:{
        onSelectCom(){
          this.elements = [];
          var params = {
            projectName : this.projectName,
            parentId : this.parentId,
          };
          this.getComList(params);
        },
        /*onType(type){
          this.elements = [];
          var params = {type : type};
          this.getComList(params);
        },*/
        onParentChange(value){
          this.elements = [];
          var params = {parentId : value};
          this.getComList(params);
        },
        getComList(params) {
          var that = this;
          that.spinning = true;
          getAction('application/online/component/getComponentList',params).then(res => {
            res.result.forEach(item => {
              // var data = item.data;
              that.elements.push({
                projectId: item.projectId,
                projectName: item.projectName,
                projectImg: item.projectImg,
                remark: item.remark,
                createTime: item.createTime,
                // data: JSON.parse(data),
              })
            })
            that.spinning = false;
          });
        },
      }
    }
</script>

<style scoped>
  .typeFilter{
    height: 100px;line-height: 100px;margin: 10px 0px;width: 100%;
  }
  .typeFilter .input{
    width: 35%;
    margin: 30px 0px 0px 26rem;
  }
</style>