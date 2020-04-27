<template>
  <div v-if="item.id || editVisiable">
    <a-form class="cheta-form" :form="form" :layout="formLayout">
      <div>
        <span style="margin-left: 2rem;">{{addOrEdit}}</span>
        <span style="font-size: large;font-weight: bold;font-style: oblique;margin: 0px 1rem;">{{tempName}}</span>
        <span v-if="tempName!='一级菜单'&&addOrEdit!='编辑'">子项</span>
      </div>
      <a-form-item v-bind="{wrapperCol, labelCol, label: '菜单名：', hasFeedback}">
        <a-input v-decorator="[ 'name', {rules: [{ required: true, message: '请输入菜单标题!' }]}]"/>
      </a-form-item>
      <a-form-item v-bind="{wrapperCol, labelCol, label: '访问路径：', hasFeedback}" v-show="!item.menuHidden">
        <a-input v-decorator="[ 'url', {rules: [{ required: item.menuHidden?false:true, message: '请输入访问路径!' }]}]">
          <span slot="addonAfter"><a-icon type="sync" @click="handleZD"/></span>
        </a-input>
      </a-form-item>

      <a-form-item v-bind="{wrapperCol, labelCol, label: '授权标识：', hasFeedback}" v-show="item.menuHidden">
        <a-input help="多个用逗号分隔, 如: user:list,user:create" v-decorator="[ 'perms', {}]" :readOnly="disableSubmit"/>
      </a-form-item>
      <a-form-item v-bind="{wrapperCol, labelCol, label: '关联页面：', hasFeedback}">
        <a-input :placeholder="item.component?'已关联页面':'点击右侧按钮关联页面'" readonly>
          <span slot="addonAfter">
            <a-icon type="appstore" @click="showModal"/>
          </span>
        </a-input>
        <a-tooltip placement="left">
          <template slot="title"><span>预览</span></template>
          <a-card class="page-item" @click="editComponent(item)" hoverable="true" style="width: 99%;" v-if="item.componentId">
            <div class="img-sty" slot="cover">
              <img
                :src="item.projectImg?item.projectImg:not_img"
                width="100%"
                alt="example"
                draggable="false">
            </div>
            <div>
              <span v-if="item.createTime">{{item.createTime}}</span>
              <a-tag v-if="item.componentName" style="float: right;">{{ item.componentName }}</a-tag>
            </div>
          </a-card>
        </a-tooltip>
      </a-form-item>
      <a-form-item v-bind="{wrapperCol, labelCol, label: '报表操作：'}">
        <a-input :placeholder="'点击右侧按钮管理报表'" readonly>
        <span slot="addonAfter"><a-icon type="edit" @click="openTable"/></span>
        </a-input>
      </a-form-item>
      <a-form-item v-bind="{wrapperCol, labelCol, label: '菜单图标：'}">
        <a-input placeholder="点击右侧按钮选择图标" v-decorator="['icon']">
          <span slot="addonAfter">
            <a-icon :type="item.icon || 'setting'" @click="iconChooseVisible = true"/>
          </span>
        </a-input>
      </a-form-item>
      <a-form-item v-bind="{wrapperCol, labelCol, label: '分组：', hasFeedback}" v-if="item.menuType === 0">
        <a-select v-decorator="[ 'group']">
          <a-select-option :value="group.value" v-for="group  in groups">
            {{group.name}}
          </a-select-option>
        </a-select>
      </a-form-item>

      <a-form-item v-bind="{wrapperCol, labelCol, label: '排序：', hasFeedback}">
        <a-input-number v-decorator="[ 'sortNo']" :min="-100" :max="100" @change="onChange"/>
      </a-form-item>

      <a-form-item v-bind="{wrapperCol, labelCol, label: '特殊菜单：'}">
        <a-tooltip title="特殊菜单，不作为展示！">
          <a-switch
            v-decorator="['menuHidden', { valuePropName: 'checked'}]"
            :checked="item.menuHidden"
            @change="item.menuHidden = !item.menuHidden"/>
        </a-tooltip>
      </a-form-item>

      <a-form-item :wrapper-col="{ span: 12, offset: 5 }">
        <a-button type="primary" html-type="submit" class="cheta-mr-10" @click="submit">保存</a-button>
        <a-button>取消</a-button>
      </a-form-item>
    </a-form>
    <!-- 选择图标 -->
    <icons @choose="handleIconChoose" @close="iconChooseVisible = false" :iconChooseVisible="iconChooseVisible"></icons>

    <!--绑定关联页面 对话框-->
    <BindModal ref="bindmodal" @bindPage="bindPage"></BindModal>
    <!--绑定报表 抽屉-->
    <TableDrawer ref="tabledrawer"></TableDrawer>
  </div>
</template>

<script>
  let labelCol = { span: 5 }, wrapperCol = { span: 12 }
  import { postAction } from '@/api/manage'
  import { editPermission, addPermission } from '@/api/api'
  import moment from 'moment'
  import pick from 'lodash.pick'
  import Icons from './modules/icon/Icons'
  import BindModal from './modules/BindModal'
  import TableDrawer from './modules/TableDrawer'

  export default {
    name: 'FormElement',
    components: { Icons, BindModal,TableDrawer, moment },
    data() {
      return {
        groups: [
          { name: '基础服务', value: '基础服务' },
          { name: '企业服务', value: '企业服务' },
          { name: '行业服务', value: '行业服务' },
          { name: '中台服务', value: '中台服务' },
          { name: '金融服务', value: '金融服务' }
        ],
        tempName: '',
        addOrEdit: '',
        not_img: 'http://file.terrybg.com/cheta/16d5a5a7b1db4bbe8ee0be1e8b7a4595.png',

        formLayout: 'horizontal',
        form: this.$form.createForm(this, { name: 'coordinated' }),
        labelCol,
        wrapperCol,
        item: {},
        iconChooseVisible: false,
        editVisiable: false,
        result : []
      }
    },
    methods: {
      openTable() {
        let that = this;
        that.$refs.tabledrawer.showDrawer(that.item);
      },
      editComponent(item) {
        let that = this
        if (item.componentId === 'fd467ede07da4cdfa137046bb4ea2998') {
          let url = that.item.url
          let projectId = url.substring(url.lastIndexOf('/') + 1)
          window.open('/onlines/car/' + projectId)
        } else {
          window.open(item.url)
        }

      },
      addMenu(parentId, name,sortNo) {
        let that = this
        that.tempName = name
        that.addOrEdit = '新增'
        that.form.resetFields()

        that.item = {}
        that.editVisiable = true
        that.item.parentId = parentId
        this.$nextTick(() => {
          this.form.setFieldsValue({ sortNo: sortNo, menuHidden: false })
        })
      },
      find(str, cha, num) {
        var x = str.indexOf(cha)
        for (var i = 0; i < num; i++) {
          x = str.indexOf(cha, x + 1)
        }
        return x
      },
      bindPage(item) {
        var that = this
        if (item.isComponent) {
          //绑定的是组件化开发，暂时写死  只要路径是这个就行 'application/onlines/Preview' 也可以使用组件表的pageType=1
          that.item.componentId = 'fd467ede07da4cdfa137046bb4ea2998'
          let url = this.form.getFieldValue('url') + '/'
          url = url.substring(0, that.find(url, '/', 2) != -1 ? that.find(url, '/', 2) : that.find(url, '/', 1))
            + '/' + item.projectId
          that.form.setFieldsValue({ url: url })
        } else {
          that.item.componentId = item.projectId
        }
        that.item.projectImg = item.projectImg
        that.item.componentName = item.projectName
        that.item.createTime = moment(item.createTime).format('YYYY-MM-DD')
        if (that.item.componentId) {
          that.$refs.bindmodal.visible = false
          that.$message.success('关联成功！')
        } else {
          that.$message.warning('关联失败！')
        }
      },
      showModal() {
        var proId = this.form.getFieldValue('url')
        proId = proId.substring(proId.lastIndexOf('/') + 1, proId.length)
        this.$refs.bindmodal.showModal(this.item.componentId, proId)
      },
      setData(item) {
        var that = this;
        that.tempName = item.name
        that.addOrEdit = '编辑'
        let fieldsVal = pick(item, 'name', 'url', 'icon', 'menuHidden', 'sortNo', 'group', 'perms')
        item.createTime = moment(item.createTime).format('YYYY-MM-DD')
        that.item = item
        that.$nextTick(() => {
          this.form.setFieldsValue(fieldsVal)
        })
      },
      handleIconChoose(value) {
        this.item.icon = value
        this.form.setFieldsValue({ icon: value })
        this.iconChooseVisible = false
      },
      submit() {
        var that = this
        this.form.validateFields((err, values) => {
          if (!err) {
            if (that.item.parentId) {
              //有父类就子菜单
              values['menuType'] = 1
            } else {
              //无父类就是一级菜单
              values['menuType'] = 0
            }
            if (values.menuHidden === true) {
              //选中特殊菜单 按钮类型
              values['menuType'] = 2
            }
            values['hidden'] = values.menuHidden
            if (that.item.id) {
              //编辑
              values['id'] = that.item.id
              values['component'] = that.item.componentId
              that.editPer(values)
            } else {
              //添加
              values['parentId'] = that.item.parentId
              values['component'] = that.item.componentId
              that.savePer(values)
            }
          }
        })
      },
      editPer(parems) {
        editPermission(parems).then(res => {
          if (res.success == true) {
            this.$message.success(res.message)
            this.tempName = parems.name
            //刷新Tree
            /*this.$emit("refresh");*/
          } else {
            this.$message.error(res.message)
          }
        })
      },
      savePer(parems) {
        addPermission(parems).then(res => {
          if (res.success == true) {
            /*this.$emit("refresh");*/
            this.form.resetFields()
            this.$message.success(res.message)
          } else {
            this.$message.error(res.message)
          }
        })
      },
      handleZD() {
        //汉字转拼音
        var menuname = this.form.getFieldValue('name')
        postAction('/application/setting/menu/getPinYin', { name: menuname }).then((res) => {
          if (res.success) {
            let model = { 'url': '/' + res.result }
            let fieldsVal = pick(model, 'url')
            this.$nextTick(() => {
              this.form.setFieldsValue(fieldsVal)
            })
          } else {
            this.$message.warning(res.message)
          }
        })

      }
    }
  }
</script>

<style scoped>
  .cheta-form {
    background-color: #f4f6f7;
    padding: 15px;
  }

  .cheta-form > * {
    margin-bottom: 20px
  }

  .img-sty {
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
</style>