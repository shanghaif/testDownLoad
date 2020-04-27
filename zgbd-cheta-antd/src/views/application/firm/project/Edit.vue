<template>
  <a-modal
    v-model="visible"
    title="项目设置"
    @ok="save"
    width="800px"
    height="785px"
    cancelText="关闭"
    okText="保存">
    <a-form class="cheta-form" :form="form">
      <a-form-item v-bind="{wrapperCol, labelCol, label: '项目封面：'}">
        <img :src="item.coverImage" class="cheta-load-img cheta-event cheta-mr-20"/>
        <a-upload
          action="../fileUpload"
          @change="handleChange"
          accept=".jpg, .jpeg, .png"
          :showUploadList="false"
        >
          <a-button>
            上传新封面
          </a-button>
          <div class="cheta-font14 cheta-mtb12-6">最佳图片比例为300*150</div>
        </a-upload>
      </a-form-item>
      <a-row :gutter="20">
        <a-col :span="12">
          <a-form-item v-bind="{wrapperCol, labelCol, label: '项目名称：'}">
            <a-input placeholder="请输入项目名称" v-decorator="[ 'name', {rules: [{ required: true, message: '请输入项目名称!' }]}]"/>
          </a-form-item>
        </a-col>
        <a-col :span="12">
          <a-form-item v-bind="{wrapperCol, labelCol, label: '项目关联：'}">
            <a-select
              placeholder="选择项目关联"
              v-decorator="['relId']"
            >
              <a-select-option v-for="project in projects" :value="project.id">{{ project.name }}</a-select-option>
            </a-select>
          </a-form-item>
        </a-col>
      </a-row>
      <a-form-item v-bind="{wrapperCol, labelCol, label: '工作标签：'}">
        <a-tag closable v-for="tag in item.tagList" :color="tag.color" @close="item.tagList.splice(index, 1)">
          {{ tag.name }}
        </a-tag>
        <a-dropdown :trigger="['click']" @visibleChange="visibleChange">
          <a-icon @click="showTag" type="plus-circle" theme="twoTone" class="cheta-event" style="font-size: 15px;"/>
          <Avatar v-if="tagVisible" :tags="tags" :tagList="item.tagList" @showTag="showTag" @doUser="tagVisible = !tagVisible" ref="avatar" slot="overlay"/>
        </a-dropdown>
      </a-form-item>

      <a-form-item v-bind="{wrapperCol, labelCol, label: '项目简介：'}">
        <a-textarea v-decorator="['description']" placeholder="请输入简介" :rows="3"/>
      </a-form-item>

      <a-form-item v-bind="{wrapperCol, labelCol, label: '项目性质：'}">
        <a-radio-group v-decorator="['nature']">
          <a-tooltip title="仅团队成员可查看和编辑">
            <a-radio value="PRIVATE">私有</a-radio>
          </a-tooltip>
          <a-tooltip title="所有人都可通过链接访问，仅项目成员可编辑">
            <a-radio value="PUBLIC">公开</a-radio>
          </a-tooltip>
        </a-radio-group>
      </a-form-item>

      <a-form-item v-bind="{wrapperCol, labelCol, label: '项目拥有者：'}">
        <img src="https://beta.vilson.xyz/static/upload/member/avatar/20191010/bde6e500aeb741009a4ef544f7bd0758.png" class="cheta-avatar"/>
        <span class="cheta-person-font14 cheta-ml-10">{{ item.createBy }}</span>
      </a-form-item>
    </a-form>
  </a-modal>

</template>

<script>
  import {projectEdit, flowList, projectList} from './api/api'
  import Avatar from './modules/Avatar'
  import pick from 'lodash.pick'
  import Select from '../../onlines/car/component/form/modules/Select'
  let labelCol = { span: 24 }, wrapperCol= {span: 24};

  export default {
    name: 'Edit',
    components: { Select, Avatar },
    data () {
      return {
        visible: false,
        item: {},
        tagVisible: false,
        tags: [],
        projects: [],
        form: this.$form.createForm(this, { name: 'coordinated' }),
        labelCol,
        wrapperCol,
      }
    },
    created () {
      this.initTag();
    },
    methods:{
      initTag () {
        var $this = this;
        flowList().then(res => {
          res.result.forEach(tag => {
            if ($this.item.tagList) {
              $this.item.tagList.forEach(inner => {
                if (tag.id === inner.id) {
                  tag.checked = true;
                }
              })
            }
          })
          $this.tags = res.result;
        })
      },
      handleChange(info) {
        let fileList = [...info.fileList];
        fileList = fileList.slice(-2);
        var $this = this;
        fileList.map((file) => {
          if (file.response) {
            $this.item.coverImage = file.response;
          }
          return null;
        });
      },
      save () {
        var $this = this;
        this.form.validateFields((err, values) => {
          if (!err) {
            // 封面，工作流
            var tmp = Object.assign($this.item, values);
            projectEdit(tmp).then(res => {
              $this.$message.success(res.message)
              $this.visible = false;
              $this.$emit('initProject');
            });
          }
        });
        /*httpAction('/application/firm/project/update',this.item,'post').then(res =>{
          if (res.success) {
            $this.$message.success(res.message);
          } else {
            $this.$message.warning(res.message);
          }
        }).finally(() => {
          $this.close();
        })*/
      },
      showModel (item) {
        this.visible = true
        this.initProject();
        this.setForm(item)
      },
      visibleChange () {
        this.$refs.avatar.visibleChange();
      },
      showTag () {
        this.tagVisible = true;
        this.initTag();
      },
      setForm (value) {
        this.item = Object.assign({
          coverImage: 'https://dev-file.iviewui.com/p50TGdvvpXWVR06Vu2TAwkpRnpt8FURA/middle',
          nature: 'PRIVATE',
          tagList: []
        }, value);
        let fieldsVal = {}
        if (this.item.relId) {
          fieldsVal = pick(this.item, 'name', 'description', 'nature', 'relId');
        } else {
          fieldsVal = pick(this.item, 'name', 'description', 'nature');
        }
        this.$nextTick(() => {
          this.form.setFieldsValue(fieldsVal)
        });
      },
      initProject () {
        let $this = this;
        projectList().then(res => {
          $this.projects = res.result;
        })
      }
    }
  }
</script>
<style lang="less">
  @import url("./base.less");

  .cheta-project-content .ant-upload-list-item .ant-upload-list-item-done{width: 300px!important;height:150px!important;}
  .cheta-project-content .ant-upload.ant-upload-select-picture-card {
    width: 300px!important;
    height: 150px!important;
    margin-right: 0px!important;
    margin-bottom: 0px!important;
    display: flex!important;
    /* text-align: center!important; */
    justify-content: center!important;
    align-items: center!important;
  }
  .cheta-project-content .ant-upload-list-picture-card .ant-upload-list-item{width:300px!important;height:150px!important;}

  .cheta-person-font14{font-family: Chinese Quote;font-size: 14px;font-variant: tabular-nums;line-height: 1.5;color: #333;}
  .cheta-avatar{width:32px;height:32px;}
  .cheta-load-img{width:300px;height:150px;}
</style>