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
          label="菜单类型"
          :labelCol="labelCol"
          :wrapperCol="wrapperCol" >
          <a-radio-group @change="onChangeMenuType" v-decorator="['menuType',{'initialValue':0}]">
            <a-radio :value="0">一级菜单</a-radio>
            <a-radio :value="1">子菜单</a-radio>
            <a-radio :value="2">按钮</a-radio>
            <a-radio :value="3">字段</a-radio>
          </a-radio-group>
        </a-form-item>

        <a-form-item
          :labelCol="labelCol"
          :wrapperCol="wrapperCol"
          :label="menuLabel"
          hasFeedback >
          <a-input placeholder="请输入菜单名称" v-model="menuname"  v-decorator="[ 'name', validatorRules.name]" :readOnly="disableSubmit"/>
        </a-form-item>


        <a-form-item
          v-show="localMenuType!=0"
          label="上级菜单"
          :labelCol="labelCol"
          :wrapperCol="wrapperCol" >
          <a-tree-select
            style="width:100%"
            :dropdownStyle="{ maxHeight: '200px', overflow: 'auto' }"
            :treeData="treeData"
            v-model="model.parentId"
            placeholder="请选择父级菜单"
            :disabled="disableSubmit">
          </a-tree-select>
        </a-form-item>
        <!-- v-model="value" -->

        <a-form-item
          :labelCol="labelCol"
          :wrapperCol="wrapperCol"
          label="菜单路径"
          hasFeedback >
          <!--<a-input placeholder="请输入菜单路径" v-decorator="[ 'url',validatorRules.url]" :readOnly="disableSubmit"/>-->
          <a-input
            :addonBefore="beforeUrl"
            placeholder="请输入菜单路径"
            v-model="menuurl"
            v-decorator="[ 'url',validatorRules.url]"
            :readOnly="disableSubmit">
            <a-button slot="addonAfter" style="margin: 0px 15px 0px -15px;" @click="handleZD(r)">自动</a-button>
          </a-input>
          <!--<a-button style="float: left;margin-top:4px;" @click="handleZD(r)">自动</a-button>-->
        </a-form-item>

        <a-form-item
          v-show="show"
          :labelCol="labelCol"
          :wrapperCol="wrapperCol"
          label="菜单页面"
          hasFeedback
        >
          <a-tree-select
            style="width:100%"
            :dropdownStyle="{ maxHeight: '200px', overflow: 'auto' }"
            :treeData="mpageTree"
            v-model="model.componentId"
            placeholder="请选择页面"
            :disabled="disableSubmit">
          </a-tree-select>
        </a-form-item>

        <a-form-item
          v-show="!show"
          :labelCol="labelCol"
          :wrapperCol="wrapperCol"
          label="授权标识">
          <a-input placeholder="多个用逗号分隔, 如: user:list,user:create" v-decorator="[ 'perms', {}]" :readOnly="disableSubmit"/>
        </a-form-item>

        <a-form-item
          v-show="show"
          :labelCol="labelCol"
          :wrapperCol="wrapperCol"
          label="菜单图标">
          <a-input placeholder="点击右侧按钮选择图标" v-model="model.icon" :readOnly="disableSubmit">
            <a-icon slot="addonAfter" type="setting" @click="selectIcons" />
          </a-input>
        </a-form-item>

        <a-form-item
          v-show="show"
          :labelCol="labelCol"
          :wrapperCol="wrapperCol"
          label="排序">
          <a-input-number
            placeholder="请输入菜单排序"
            style="width: 200px"
            v-decorator="[ 'sortNo', {'initialValue':1.0,'rule':validatorRules.sortNo}]"
            :readOnly="disableSubmit"/>
        </a-form-item>

        <a-form-item
          v-show="show"
          :labelCol="labelCol"
          :wrapperCol="wrapperCol"
          label="隐藏路由">
          <a-switch checkedChildren="是" unCheckedChildren="否" v-model="menuHidden"/>
        </a-form-item>

        <a-form-item
          v-show="show"
          :labelCol="labelCol"
          :wrapperCol="wrapperCol"
          label="聚合路由">
          <a-switch checkedChildren="是" unCheckedChildren="否" v-model="alwaysShow"/>
        </a-form-item>

      </a-form>

      <!-- 选择图标 -->
      <icons @choose="handleIconChoose" @close="handleIconCancel" :iconChooseVisible="iconChooseVisible"></icons>
    </a-spin>
  </a-modal>
</template>

<script>
  import {addPermission,editPermission,queryTreeList} from '@/api/api'
  import Icons from './icon/Icons'
  import pick from 'lodash.pick'
  //导入getAction
  import { getAction,postAction } from '@/api/manage'

  export default {
    name: "PermissionModal",
    components: {Icons},
    data () {
      return {
        treeData:[],
        treeValue: '0-0-4',
        title:"操作",
        visible: false,
        disableSubmit:false,
        //页面下拉数据
        mpageTree:[],
        //菜单路径前缀
        beforeUrl: [],

        model: {},
        localMenuType:'0',
        alwaysShow:false,//表单元素-聚合路由
        menuHidden:false,//表单元素-隐藏路由
        show:true,//根据菜单类型，动态显示隐藏表单元素
        menuLabel:'菜单名称',
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
          url:{rules: [{ required: true, message: '请输入菜单路径!' }]},
          sortNo:{rules: [{validator: this.validateNumber}]},
        },
        iconChooseVisible: false,
        //获取菜单路径url
        url: {
          listMpage: "/application/setting/mpage/getTreeData",
          listPmenu: "/application/setting/menu/getTreeData",
        },

        menuname: '',
        menuurl: '',
        r: [],
        t: {}

      }
    },
    created () {
    },
    methods: {
      //菜单页面列表
      initialMpageList(){
        var params = "";
        var $this = this;
        getAction(this.url.listMpage,params).then((res)=>{
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
      //上级菜单(一二级菜单)树选择列表
      initialPmenuList(){
        var params = "";
        var $this = this;
        getAction(this.url.listPmenu,params).then((res)=>{
          if(res.success){
            this.treeData = $this.initData(res.result)
          }else{
            console.log(res.message);
          }
        });
      },
      add () {
        this.edit();
      },
      edit (record) {
        this.initialMpageList();
        this.initialPmenuList();

        var s = window.location.href;
        this.beforeUrl = s.substring(0,s.indexOf("/",s.indexOf("/",s.indexOf("/")+1 )+1));

        this.form.resetFields();
        this.model = Object.assign({}, record);
        //菜单类型切换
        if(record){
          console.log(record)
          this.alwaysShow = !record.alwaysShow?false:true;
          this.menuHidden = !record.hidden?false:true;
          this.show = record.menuType==2?false:true;
          this.show = record.menuType==3?false:true;
          this.menuLabel = record.menuType==2?'按钮名称':'菜单名称';
          this.menuLabel = record.menuType==3?'字段名称':'菜单名称';

          if(this.model.parentId){
            this.localMenuType = 1;
          }else{
            this.localMenuType = 0;
          }
        }else{
          this.show = true;
          this.menuLabel = '菜单名称';
        }

        this.visible = true;
        //this.loadTree();
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
        if(e.target.value == 2){
          this.show = false;
          this.menuLabel = '按钮名称';
        }
        else if(e.target.value == 3){

          this.show = false;
          this.menuLabel = '字段名称';
        }
        else{
          this.show = true;
          this.menuLabel = '菜单名称';
        }
      },
      selectIcons(){
        this.iconChooseVisible = true
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

      /*onChange (value) {
        console.log('onChange', value)
        this.value = value
      },*/
      /*watch: {
        value (value) {
          console.log(value)
        },
      },*/

      handleZD(r) {
        //汉字转拼音
        //let that = this;
        postAction('/application/setting/menu/getPinYin',{name: this.menuname}).then((res) =>{
          if(res.success){
            // this.$message.success(res.message);
            this.r.name = this.menuname;
            if(this.localMenuType == 1){
              this.r.parentId = this.model.parentId;
            }else{
              this.r.parentId = '';
            }
            this.r.componentId = this.model.componentId;
            this.r.icon = this.model.icon;

            this.r.url = '/' + res.result;
            this.model = Object.assign({}, this.r);

            this.visible = true;
            let fieldsVal = pick(this.model,'parentId','component','url','componentId');
            this.$nextTick(() => {
              this.form.setFieldsValue(fieldsVal)
            });

          }else{
            this.$message.warning(res.message);
          }
        });

      }

    }
  }
</script>

<style scoped>

</style>