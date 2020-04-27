<template>
  <a-layout-content style="">
    <a-layout id="components-layout-demo-fixed-sider" style="background: #FFF;">
      <template v-if="isMobile()">
        <a-drawer
          width="300"
          placement="left"
          :closable="false"
          :visible="visible"
          :style="{}"
        >
          <a-layout-sider :style="{ height: '100vh', left: 0 }" width="300px" theme="light">
            <a-menu
              style="width: 300px;border-right: 0px solid #e8e8e8;"
              mode="inline"
            >
              <template v-for="item in docs">
                <a-menu-item-group :key="item.id">
                  <template slot="title">
                    <div style="padding-left: 10px;"><span>{{ item.name }}</span></div>
                  </template>
                </a-menu-item-group>
                <a-menu-item :key="inner.id" v-for="inner in item.children" style="padding-left: 50px;"  @click.native="docsClick(inner.content)">{{ inner.name }}</a-menu-item>
              </template>
            </a-menu>
          </a-layout-sider>
        </a-drawer>
        <div class="setting-drawer-index-handle" @click="toggle">
          <a-icon type="close" v-if="visible"/>
          <a-icon type="menu" v-else/>
        </div>
      </template>
      <template v-else>
        <a-layout-sider :style="{ height: '100vh', left: 0 }" width="300px" theme="light">
          <a-menu
            style="width: 300px;border-right: 0px solid #e8e8e8;"
            mode="inline"
            :defaultSelectedKeys="[id]"
          >
            <template v-for="item in docs" v-if="item.name !== '接口文档' && item.name !== '车塔 net'">
              <a-menu-item-group :key="item.id">
                <template slot="title">
                  <div style="padding-left: 10px;"><span>{{ item.name }}</span></div>
                </template>
              </a-menu-item-group>
              <a-menu-item :key="inner.id" v-for="inner in item.children" style="padding-left: 50px;"  @click.native="doDoc(inner)">{{ inner.name }}</a-menu-item>
            </template>
          </a-menu>
        </a-layout-sider>
      </template>
      <a-layout style="background-color: #fff;border-left: 1px solid #e9e9e9;">
        <a-layout-content :style="{ margin: '24px 16px 0', overflow: 'initial' }">
          <a-row :gutter="24" v-if="!isMobile()">
            <a-col :span="20">
              <div class="markdown">
                <div v-if="docsHtml" v-html="docsHtml"></div>
                <component v-else :is="componentName"></component>
              </div>
            </a-col>
            <a-col :span="4">
              <a-anchor>
                <a-anchor-link href="#写在前面" title="写在前面"/>
                <a-anchor-link href="#前序准备" title="前序准备"/>
                <a-anchor-link href="#页面展示" title="页面展示">
                  <a-anchor-link href="#可定制化的工作台" title="可定制化的工作台" />
                  <a-anchor-link href="#手机端适配" title="手机端适配" />
                </a-anchor-link>
              </a-anchor>
            </a-col>
          </a-row>
          <div class="markdown" v-else>
            <div v-if="docsHtml" v-html="docsHtml"></div>
            <component v-else :is="componentName"></component>
          </div>
        </a-layout-content>
        <!--<a-layout-footer :style="{ textAlign: 'center' }">
          車塔云 ©2019
        </a-layout-footer>-->
      </a-layout>
    </a-layout>

    <!-- markdown 编辑器 -->
    <div class="markdown">
      <mavon-editor ref="md" @change="changeDocs" v-model="value" v-show="false"/>
    </div>
  </a-layout-content>
</template>

<script>
  import './markdown.css'
  import Demo from './Demo'
  import UpdateLog from './modules/NoticeLog'
  import { mixinDevice } from '@/utils/mixin.js'
  import { getAction } from '@/api/manage'

  export default {
    name: 'Content',
    components:{
      Demo,UpdateLog
    },
    mixins: [mixinDevice],
    data() {
      return {
        value: '',
        defaultData: 'preview',
        docs: [],
        docsHtml: '',
        visible: false,
        componentName: 'Demo',
        id : this.$route.params.id,
      }
    },
    created () {
      this.docs = [{
        content: null,
        createTime: "2019-05-17 09:32:55",
        id: "开放文档",
        key: "开放文档",
        name: "开放文档",
        parentId: "",
        updateTime: "2019-05-18 03:46:46",
        children: [
          {
            component: 'Demo',
            createTime: "2019-05-17 09:32:55",
            id: "写在前面",
            key: "写在前面",
            name: "写在前面",
            parentId: "",
            updateTime: "2019-05-18 03:46:46"
          },
          {
            component: 'UpdateLog',
            createTime: "2019-05-17 09:32:55",
            id: "更新日志",
            key: "更新日志",
            name: "更新日志",
            parentId: "",
            updateTime: "2019-05-18 03:46:46"
          }
        ]
      }];

      var _this = this;
      getAction('/application/docs/getTree', {}).then((res) => {
        _this.docs.push(...res.result);
        if (_this.id) {
          _this.docs.forEach(doc => {
            doc.children.forEach(inner => {
              if (inner.id === _this.id) {
                _this.docsClick(inner);
              }
            })
          })
        }
      });
    },
    methods: {
      doDoc (item) {
        this.$router.push({path:"/doc/" + item.id});
        this.docsClick(item);
      },
      docsClick(item){
        if (item.content) {
          this.value = item.content;
        } else {
          this.componentName = item.component;
          this.docsHtml = '';
        }
      },
      changeDocs(){
        this.docsHtml = this.$refs.md.d_render
      },
      toggle(){
        this.visible = !this.visible
      }
    }
  }
</script>

<style scoped>

  .setting-drawer-index-handle {
    position: absolute;
    background: #fff;
    top: 70px;
    width: 30px;
    height: 30px;
    right: 10px;
    display: flex;
    justify-content: center;
    align-items: center;
    cursor: pointer;
    pointer-events: auto;
    z-index: 1001;
    text-align: center;
    font-size: 16px;
    box-shadow: 2px 0 8px rgba(0, 0, 0, 0.15);
    i {
      color: rgb(255, 255, 255);
      font-size: 20px;
    }
  }
</style>