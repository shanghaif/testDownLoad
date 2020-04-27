<template>
  <a-modal
    :title="title"
    :width="900"
    :visible="visible"
    :confirmLoading="confirmLoading"
    @ok="handleOk"
    @cancel="handleCancel"
    :okButtonProps="{ props: {disabled: disableSubmit} }"
    cancelText="关闭"
    wrapClassName="ant-modal-cust-warp"
    style="top:5%;height: 95%;">
    <a-spin :spinning="confirmLoading">
      <a-form :form="form">

        <a-form-item
          v-show="title!='编辑'"
          label="页面类型"
          :labelCol="labelCol"
          :wrapperCol="wrapperCol" >
          <a-radio-group @change="onChangeMenuType" v-decorator="['menuType',{'initialValue':0}]">
            <a-radio :value="0">页面分类</a-radio>
            <a-radio :value="1">页面</a-radio>
          </a-radio-group>
        </a-form-item>

        <a-form-item
          :labelCol="labelCol"
          :wrapperCol="wrapperCol"
          :label="menuLabel"
          hasFeedback >
          <a-input placeholder="请输入分类名称" v-decorator="[ 'name', validatorRules.name]" :readOnly="disableSubmit"/>
        </a-form-item>


        <a-form-item
          v-show="localMenuType!=0"
          label="页面分类"
          :labelCol="labelCol"
          :wrapperCol="wrapperCol" >
          <a-tree-select
            style="width:100%"
            :dropdownStyle="{ maxHeight: '200px', overflow: 'auto' }"
            :treeData="treeData"
            v-model="model.parentId"
            placeholder="请选择页面分类"
            :disabled="disableSubmit">
          </a-tree-select>
        </a-form-item>
        <!-- v-model="value" -->

        <a-form-item
          :labelCol="labelCol"
          :wrapperCol="wrapperCol"
          label="页面路径">
          <a-input placeholder="请输入页面路径" v-decorator="[ 'url',{}]" :readOnly="disableSubmit"/>
        </a-form-item>
      </a-form>
    </a-spin>
  </a-modal>
</template>

<script>
  import {addPermission,editPermission,queryTreeList} from '@/api/api'
  import pick from 'lodash.pick'
  //导入getAction
  import { getAction } from '@/api/manage'

  export default {
    name: "PermissionModal",
    data () {
      return {
        treeData:[],
        treeValue: '0-0-4',
        title:"操作",
        visible: false,
        disableSubmit:false,
        //路径下拉数据
        mpageList:[],
        model: {},
        localMenuType:'0',
        alwaysShow:false,//表单元素-聚合路由
        menuHidden:false,//表单元素-隐藏路由
        show:true,//根据菜单类型，动态显示隐藏表单元素
        menuLabel:'名称',
        labelCol: {
          xs: { span: 24 },
          sm: { span: 5 },
        },
        wrapperCol: {
          xs: { span: 24 },
          sm: { span: 16 },
        },

        confirmLoading: false,
        form: this.$form.createForm(this),
        validatorRules:{
          name:{rules: [{ required: true, message: '请输入菜单标题!' }]},
          sortNo:{rules: [{validator: this.validateNumber}]},
        },
        iconChooseVisible: false,
        //获取菜单路径url
        url: {
          listMpage: "/application/setting/mpage/getMpage",
          listPmenu: "/application/setting/menu/getTreeData",
        }

      }
    },
    created () {
    },
    methods: {
      //菜单路径列表
      initialMpageList(){
        var params = "";
        getAction(this.url.listMpage,params).then((res)=>{
          if(res.success){
            this.mpageList = res.result;
          }else{
            console.log(res.message);
          }
        });
      },

      //上级菜单(一二级菜单)树选择列表
      initialPmenuList(){
        var params = "";
        getAction(this.url.listPmenu,params).then((res)=>{
          if(res.success){
            this.treeData = res.result;

          }else{
            console.log(res.message);
          }
        });
      },

      loadTree(){
        var that = this;
        queryTreeList().then((res)=>{
          if(res.success){
            that.treeData = [];
            let treeList = res.result.treeList
            for(let a=0;a<treeList.length;a++){
              let temp = treeList[a];
              temp.isLeaf = temp.leaf;
              that.treeData.push(temp);
            }
          }
        });
      },
      add () {
        this.edit();
      },
      edit (record) {
        this.initialMpageList();
        this.initialPmenuList();

        this.form.resetFields();
        this.model = Object.assign({}, record);
        //菜单类型切换
        if(record){
          this.alwaysShow = !record.alwaysShow?false:true;
          this.menuHidden = !record.hidden?false:true;

          //console.log('record.menuType', record.menuType);
          this.show = record.menuType==2?false:true;
          this.menuLabel = record.menuType==2?'名称':'名称';

          if(this.model.parentId){
            this.localMenuType = 1;
          }else{
            this.localMenuType = 0;
          }
        }else{
          this.show = true;
          this.menuLabel = '名称';
        }

        this.visible = true;
        this.loadTree();
        let fieldsVal = pick(this.model,'parentId','name','perms','component','url','sortNo','menuType','icon','componentId');
        this.$nextTick(() => {
          this.form.setFieldsValue(fieldsVal)
        });
      },
      close () {
        this.$emit('close');
        this.disableSubmit = false;
        this.visible = false;
      },
      handleOk () {
        const that = this;
        // 触发表单验证
        this.form.validateFields((err, values) => {
          if (!err) {
            that.confirmLoading = true;
            this.model.alwaysShow = this.alwaysShow;
            this.model.hidden = this.menuHidden;
            let formData = Object.assign(this.model, values);
            //提交前将之前调换的component值换回来
            formData.component = formData.componentId;
            console.log("点击提交formData:",formData);
            let obj;
            if(!this.model.id){
              obj=addPermission(formData);
            }else{
              obj=editPermission(formData);
            }
            obj.then((res)=>{
              if(res.success){
                console.log(res)
                that.$message.success(res.message);
                that.$emit('ok');
              }else{
                that.$message.warning(res.message);
              }
            }).finally(() => {
              that.confirmLoading = false;
              that.close();
            })
          }
        })
      },
      handleCancel () {
        this.close()
      },
      validateNumber(rule, value, callback){
        if(!value || new RegExp(/^[0-9]*[1-9][0-9]*$/).test(value)){
          callback();
        }else{
          callback("请输入正整数!");
        }
      },
      onChangeMenuType(e) {
        console.log('localMenuType checked', e.target.value)
        this.localMenuType=e.target.value
        if(e.target.value == 0){
          this.show = false;
          this.menuLabel = '名称';
        }else{
          this.show = true;
          this.menuLabel = '名称';
        }
      },
      handleIconCancel () {
        this.iconChooseVisible = false
      },
      handleIconChoose (value) {
        console.log(value)
        this.model.icon = value
        this.form.icon = value
        this.iconChooseVisible = false
      },
    }
  }
</script>

<style scoped>

</style>