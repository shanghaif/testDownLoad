<template>
  <div>
    <a-spin :spinning="spinning">
      <a-row>
        <a-col span="24">
          <div class="page-item">
            <div class="type-tag">
              <span>分类：</span>
              <a-tag @click="onType(null,'')">全部</a-tag>
              <a-tag @click="onType(tag.id,tag.color)" v-for="tag in tags" :color="tag.color">
                {{ tag.name }}
              </a-tag>
              <a-tag :color="color">总数：{{data.length}}</a-tag>
            </div>
            <div class="typeFilter">
              <a-button style="margin-left: 1rem" @click="addDataCenter">新增</a-button>
              <a-select style="width: 100px;margin-left: 1rem;" :defaultValue="types[0].type" @change="onTypeChange">
                <a-select-option :value="type.type" v-for="type in types">{{type.type}}</a-select-option>
              </a-select>
              <a-input-search class="input" placeholder="请输入要搜索的关键字" @search="onSelectCom" enterButton="搜索" size="large"/>
            </div>
          </div>
        </a-col>
      </a-row>
      <a-row :gutter="16" v-if="data.length" style="margin-top: 8px;">
        <a-col :span="6" v-for="(item,index) in data">
          <a-card
            class="page-item operation_hover"
            hoverable
            style="width: 99%;margin-bottom: 20px;height: 152px;"
          >
            <a-card-meta
              :title="item.name"
              :description="`${briefUrl(item.url)}`">
            </a-card-meta>
            <div style="margin-top: 2.5rem;height:1rem">
              <span>{{item.createTime}}</span>
              <a-tag class="tag-sty" :color="colors[item.type].color" v-if="item.type">{{ item.type }}</a-tag>
              <a-tag :color="item.color" v-if="item.tagId">{{ item.tagName }}</a-tag>
              <span class="operation_dis" style="float: right">
                  <a-tooltip placement="top">
                    <template slot="title">
                      <span>编辑</span>
                    </template>
                    <a-icon class="rightRun hover-blue" type="edit" @click="centerOk(item,index)"/>
                  </a-tooltip>
                  <a-tooltip placement="top">
                    <template slot="title">
                      <span>删除</span>
                    </template>
                    <a-icon class="hover-red" type="delete" @click="deleteData(item.id,index)"/>
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

    <!--修改框-->
    <a-modal
      :title="editTitle"
      :visible="centerVisible"
      width="700px"
      @ok="editDataCenter"
      @cancel="centerCancel"
    >
      <a-form :form="form">
        <a-form-item
          :label-col="labelCol"
          :wrapper-col="wrapperCol"
          label="项目名称"
        >
          <a-input
            v-decorator="['name',validatorRules.name]"
            placeholder="请输入项目名称"
          />
        </a-form-item>
        <a-form-item
          :label-col="labelCol"
          :wrapper-col="wrapperCol"
          label="访问路径"
        >
          <a-input
            v-decorator="[
              'url', validatorRules.url]"
            placeholder="请输入访问路径"/>
        </a-form-item>
        <a-form-item
          :label-col="labelCol"
          :wrapper-col="wrapperCol"
          label="请求方式"
        >
          <a-select v-decorator="['type']">
            <a-select-option v-for="tag in types" :value="tag.type">{{tag.type}}</a-select-option>
          </a-select>
        </a-form-item>
        <a-form-item
          :label-col="labelCol"
          :wrapper-col="wrapperCol"
          label="分类"
        >
          <a-tag closable v-for="tag in tagList" :color="tag.color" @close="tagList.splice(index, 1)">
            {{ tag.name }}
          </a-tag>
          <a-dropdown :trigger="['click']" @visibleChange="visibleChange">
            <a-icon @click="showTag" type="plus-circle" theme="twoTone" class="cheta-event" style="font-size: 15px;"/>
            <Avatar v-if="tagVisible" :tags="tags" :pageType="pageType" :tagList="tagList" @doUser="tagVisible = !tagVisible" ref="avatar" slot="overlay"/>
          </a-dropdown>
        </a-form-item>
        <a-form-item
          :label-col="labelCol"
          :wrapper-col="wrapperCol"
          label="参数"
        >
          <div v-for="(param,index) in params">
            <a-input class="input-width cheta-mr-10" placeholder="key" v-model="param.title"/>
            <a-input class="input-width cheta-mr-10" placeholder="value"  v-model="param.field"/>
            <a-icon type="delete" @click="delParam(index)"/>
          </div>
          <a-button @click="add">新增</a-button>
          <a-button class="cheta-ml-10" @click="autoPagination">分页</a-button>
        </a-form-item>
      </a-form>
    </a-modal>
  </div>
</template>

<script>
    import Header from "./Header";
    import ARow from "ant-design-vue/es/grid/Row";
    import ACol from "ant-design-vue/es/grid/Col";
    import {getAction, postAction, deleteAction} from "@/api/manage";
    import Avatar from '@/views/application/onlines/system/page/modules/Avatar'
    import pick from 'lodash.pick'

    export default {
        name: "dataCenter",
        components: {Avatar, ACol, Header, ARow},
        data() {
            return {
                form: this.$form.createForm(this),
                validatorRules:{
                    name:{rules: [{ required: true, message: '请输入项目名称!' }]},
                    url:{rules: [{ required: true, message: '请输入路径!' }]},
                },
                labelCol: {
                    xs: {span: 24},
                    sm: {span: 5},
                },
                wrapperCol: {
                    xs: {span: 24},
                    sm: {span: 16},
                },
                tags: [],
                tagList: [],
                types: [
                    {type: 'get', color: 'green'},
                    {type: 'post', color: 'blue'},
                    {type: 'put', color: 'cyan'},
                    {type: 'delete', color: 'red'},
                ],
                colors: {
                    "get": {color: "green"},
                    "post": {color: "blue"},
                    "put": {color: "cyan"},
                    "delete": {color: "red"}
                },

                api: {
                    updateInsert: '/application/online/component/dataCenter/updateInsert',
                    delete: '/application/online/component/dataCenter/delete',
                    getData: '/application/online/component/dataCenter/queryAll',
                    initTag : "/application/material/Tabs/getData",
                },
                pageType:'dataCenter',
                tagVisible: false,
                color : '',
                id: '',
                cardCurrentIndex: 0,
                spinning: false,
                centerVisible: false,
                data: [],
                editTitle: '修改接口数据',
                params : []
            }
        },
        created() {
            this.init(null);
            this.initTag();
        },
        methods: {
            autoPagination(){
              let pageNo = 'pageNo',pageSize = 'pageSize',current = 'current',isExists = true;
              this.params.forEach(item =>{
                if(item.title == pageNo || item.title == pageSize || item.title == current ){
                  isExists = false;
                }
              })
              if(isExists){
                this.params.push({title:'pageNo',field:'1'},{title:'pageSize',field:'10'})
              }else{
                this.$message.warning("存在分页字段("+pageNo+","+pageSize+")")
              }
            },
            delParam(index){
              this.params.splice(index, 1)
            },
            add(){
              this.params.push({title:'',field:''})
            },
            briefUrl(url){
                if(url.lastIndexOf('/') == -1){
                    return url;
                }else{
                    url = url.substring(url.lastIndexOf('/'),url.length);
                    url = url.indexOf('?') != -1?url = url.substring(0,url.indexOf('?')):url;
                    return url;
                }
            },
            getTagType(id,color){
                this.color = color;
                var parems = {tagId:id,pageType:this.pageType};
                this.init(parems);
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
            visibleChange () {
            },
            showTag () {
                this.tagVisible = true;
            },
            onSelectCom(value) {
                this.init({name: value, url: value});
            },
            init(params) {
                let that = this;
                that.spinning = true;
                that.data = [];
                getAction(that.api.getData, params).then(res => {
                    res.result.forEach(item => {
                        that.data.push(item);
                    })
                    that.spinning = false;
                });
            },
            onType(tagId,tagColor) {
                this.init({tagId: tagId});
                this.color = tagColor || '';
            },
            onTypeChange(type) {
                this.init({type: type});
            },
            //删除
            deleteData(id, index) {
                var that = this;
                that.cardCurrentIndex = index;
                that.$confirm({
                    title: '确定要删除吗？',
                    okText: '确认',
                    cancelText: '取消',
                    onOk() {
                        that.del(id);
                    },
                });
            },
            del(id) {
                var that = this;
                deleteAction(that.api.delete, {
                    id: id
                }).then(res => {
                    that.$message.success(res.message);
                    that.data.splice(that.cardCurrentIndex, 1);
                })
            },
            //编辑
            editDataCenter() {
                var that = this;
                this.form.validateFields((err, values) => {
                    if (!err) {
                        values['id'] = that.id;
                        if(that.tagList.length){
                          values['tagId'] = that.tagList[0].id;
                        }
                        if (that.params){
                          values['params'] = JSON.stringify(that.params);
                        }
                        postAction(that.api.updateInsert, values).then(res => {
                            if (res.success) {
                                that.init(null);
                                that.$message.success(res.message);
                                that.centerVisible = false;
                            } else {
                                that.$message.warning(res.message);
                            }
                        });
                    }
                });
            },
            //添加
            addDataCenter() {
                var that = this;
                that.params = [];
                that.editTitle = '新增接口数据';
                that.id = '';
                that.form.resetFields();
                if(that.tagList){
                    that.tagList = [];
                }
                that.$nextTick(() => {
                    that.form.setFieldsValue({type: 'get'});
                });
                that.centerVisible = true
            },
            //编辑
            centerOk(item, index) {
                var that = this;
                that.editTitle = '编辑接口数据';
                that.id = item.id;
                that.$nextTick(() => {
                    this.form.setFieldsValue(pick(item, 'name', 'url', 'type',))
                });
                that.tagList = [];
                if(item.tagId){
                    that.tagList.push({id:item.tagId,name:item.tagName,color:item.color})
                }

                that.params = JSON.parse(item.params) || [];
                that.cardCurrentIndex = index;
                this.centerVisible = true
            },
            centerCancel() {
                this.centerVisible = false
            },
        }
    }
</script>

<style scoped>
  .operation_hover .operation_dis{visibility: hidden;}
  .operation_hover:hover .operation_dis{visibility: visible;}
  .type-tag {
    margin: 0rem 1rem;
    line-height: 75px;
    border-bottom: 1px dashed rgba(53, 35, 55, 0.2);
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
</style>

<style scoped>
  .input-width {
    width: 30%;
  }

  .tag-sty {
    margin-left: 1rem;
    width: 50px;
    text-align: center;
  }

  .rightRun {
    margin-right: 10px;
  }

  .hover-blue :hover {
    color: rgba(36, 174, 216, 0.44);
    cursor: pointer;
  }

  .hover-red :hover {
    color: rgba(230, 82, 37, 0.44);
    cursor: pointer;
  }

  .page-item {
    box-shadow: 0 6px 18px 0 rgba(82, 94, 102, .15);
    border-radius: 4px;
  }
</style>