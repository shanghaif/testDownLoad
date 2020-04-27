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
          label="级别"
          :labelCol="labelCol"
          :wrapperCol="wrapperCol" >
          <a-radio-group @change="onChangeMenuType" v-decorator="['grade',{'initialValue':0}]">
            <a-radio :value="0">项目/分公司</a-radio>
            <a-radio :value="1">机构/组</a-radio>
            <a-radio :value="2">监察组织</a-radio>
          </a-radio-group>
        </a-form-item>

        <a-form-item
          :labelCol="labelCol"
          :wrapperCol="wrapperCol"
          label="名称"
          hasFeedback >
          <a-input placeholder="请输入名称" v-decorator="[ 'name', validatorRules.name]" :readOnly="disableSubmit"/>
        </a-form-item>


        <a-form-item
          v-show="localMenuType == 1"
          label="父级名称"
          :labelCol="labelCol"
          :wrapperCol="wrapperCol">
          <a-tree-select
            style="width:100%"
            :dropdownStyle="{ maxHeight: '200px', overflow: 'auto' }"
            :treeData="treeData"
            v-model="model.parentId"
            placeholder="请选择父级名称"
            :disabled="disableSubmit">
          </a-tree-select>
        </a-form-item>

        <a-form-item
          :labelCol="labelCol"
          :wrapperCol="wrapperCol"
          label="备注"
          hasFeedback >
          <a-textarea placeholder="备注:" :rows="4" v-decorator="['remark']"/>
        </a-form-item>

      </a-form>
    </a-spin>
  </a-modal>
</template>

<script>
  import pick from 'lodash.pick'
  //导入getAction
  import { getAction,postAction } from '@/api/manage'

  export default {
    name: "PermissionModal",
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
          name:{rules: [{ required: true, message: '请输入名称!' }]},
          url:{rules: [{ required: true, message: '请输入菜单路径!' }]},
          sortNo:{rules: [{validator: this.validateNumber}]},
        },
        iconChooseVisible: false,
        //获取菜单路径url
        url: {
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
      //上级菜单(一二级菜单)树选择列表
      initialPmenuList(){
        getAction('/application/auth/organ/getOrganTree', {}).then(res => {
          this.treeData = res.result;
        })
      },
      add () {
        this.edit();
      },
      edit (record) {
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

          if(this.model.parentId){
            this.localMenuType = 1;
          }else{
            this.localMenuType = 0;
          }
        }else{
          this.show = true;
        }

        this.visible = true;
        //this.loadTree();
        let fieldsVal = pick(this.model,'parentId','name','remark');
        this.$nextTick(() => {
          this.form.setFieldsValue(fieldsVal)
        });
      },
      close () {
        this.$emit('close');
        this.disableSubmit = false;
        this.visible = false;
        this.localMenuType = 0;
      },
      handleOk () {
        const that = this;
        // 触发表单验证
        this.form.validateFields((err, values) => {
          if (!err) {
            var $this = this;
            values.parentId = $this.model.parentId;
            if ($this.model.id) {
              values.id = $this.model.id;
            }
            postAction('/application/auth/organ/edit', values).then(res => {
              $this.$message.success(res.message)
              $this.$emit('ok')
              $this.close()
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
        this.localMenuType = e.target.value
        if(e.target.value == 2){
          this.show = false;
        }
        else if(e.target.value == 3){
          this.show = false;
        }
        else{
          this.show = true;
        }
      },
    }
  }
</script>

<style scoped>

</style>