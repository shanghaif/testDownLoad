<template>
   <a-row type="flex" :gutter="16" class="element-row">
    <!-- 组件列表 -->
    <a-col :span="3" class="element-col">
      <a-dropdown>
        <div class="cheta-font-align cheta-mb-10">
          <h3>
            <a-icon class="cheta-pl-5" type="dot-chart"/>
            Cheta UI - {{ menu.name }}
            <a-icon type="down"/>
          </h3>
        </div>
        <a-menu slot="overlay">
          <a-menu-item v-for="menu in menus" @click="daRoute(menu)">{{ menu.name }}</a-menu-item>
        </a-menu>
      </a-dropdown>
      <template v-for="item in data">
        <p :id="item.title" style="padding-left: 10px">
          <span style="font-weight: bold">{{ item.title }}</span>（{{ item.size }}）
        </p>
        <a-list itemLayout="horizontal" :dataSource="item.children" :split="false">
          <a-list-item class="element-card-item" slot="renderItem" slot-scope="inner" @click.native="addElement(inner)">
            <a-list-item-meta>
              <a-popover slot="title" placement="right">
                <img slot="content" :src="inner.image">
                <img :src="inner.image" class="element-card cheta-mr-5">{{inner.title}}
              </a-popover>
            </a-list-item-meta>
          </a-list-item>
        </a-list>
      </template>
    </a-col>
    <!-- 内容 -->
    <a-col :span="15" class="element-col top-nav-header-index" style="overflow-y: auto">
      <a-row style="text-align: center;margin-bottom: 10px;">
        <a-button class="link_com" type="link" @click="open">组件库</a-button>
        <a-button :type="ispc ? 'primary' : ''" style="margin-right: 10px;" @click="() => this.ispc = true">
          <a-icon type="windows"/>
          PC
        </a-button>
        <a-button :type="ispc ? '' : 'primary'" @click="() => this.ispc = false">
          <a-icon type="mobile"/>
          Phone
        </a-button>
        <a-button type="primary" style="margin-left: 10px" @click="showModal">保存</a-button>
        <!--保存-->
        <a-modal
          title="组件"
          v-model="visible"
          @ok="save"
        >
          <a-spin :spinning="spinning">
            <div>
              <a-radio-group v-model="moduleType" style="margin-bottom: 15px;">
                <a-radio-button :value="1">正式模块</a-radio-button>
                <a-radio-button :value="2">测试模块</a-radio-button>
              </a-radio-group>
              <a-col v-if="$route.params.projectId && elements[0]">
                <span>项目名称：</span>
                <a-input placeholder="项目名称" v-model="elements[0].projectName"/>
                <div style="margin: 24px 0"/>
                <span>描述：</span>
                <a-textarea placeholder="描述" v-model="elements[0].remark" autosize/>
              </a-col>
              <a-col v-else>
                <span>项目名称：</span>
                <a-input placeholder="项目名称" ref="projectName"/>
                <div style="margin: 24px 0"/>
                <span>描述：</span>
                <a-textarea placeholder="描述" ref="remark" autosize/>
              </a-col>
              <a-col style="margin: 1rem 0rem;">
                分类：
                <a-tag closable v-for="tag in tagList" :color="tag.color" @close="tagList.splice(index, 1)">
                  {{ tag.name }}
                </a-tag>
                <a-dropdown :trigger="['click']">
                  <a-icon @click="showTag" type="plus-circle" theme="twoTone" class="cheta-event"
                          style="font-size: 15px;"/>
                  <Avatar v-if="tagVisible" :tags="tags" :pageType="pageType" :tagList="tagList" @showTag="showTag"
                          @doUser="tagVisible = !tagVisible" ref="avatar" slot="overlay"/>
                </a-dropdown>
              </a-col>
              <span style="margin-top: 1rem;">封面：</span>
              <div class="clearfix">
                <a-upload
                  :action="filePath"
                  listType="picture-card"
                  :fileList="fileList"
                  @change="handleChange"
                >
                  <div v-if="fileList.length < 1">
                    <a-icon type="plus"/>
                    <div class="ant-upload-text">上传</div>
                  </div>
                </a-upload>
              </div>
            </div>
          </a-spin>
        </a-modal>
        <a-button style="margin-left: 10px" v-if="id" @click="previewView">预览</a-button>

      </a-row>
      <a-col :span="!ispc ? 12 : 24" :offset="!ispc ? 6 : 0" style="box-shadow: 1px 1px 1px 1px 1px 1px #CCC;">
        <template v-if="elements.length == 0">
          <a-divider orientation="left">请从左侧选择组件</a-divider>
          <a-skeleton avatar active :paragraph="{rows: 4}"/>
          <a-skeleton avatar active :paragraph="{rows: 4}"/>
          <a-skeleton avatar active :paragraph="{rows: 4}"/>
          <a-skeleton avatar active :paragraph="{rows: 4}"/>
        </template>
        <a-row :gutter="gutters[gutterKey]" class="componentImg">
          <Draggable v-model="elements">
            <a-col v-for="(item,index) in elements" :span="item.space">
              <div :class="`element-list ${index === currentIndex ? 'element-list-check' : ''}`"
                   @click="changeDataItem(item, index)">
                <div class="element-list-del" @click="removeElement(index)" style="position: relative">
                  <a-icon type="delete" style="font-size: 22px;position: absolute;z-index: 10;top:10px; right: 20px;"/>
                </div>
                <component :is="item.name" :config="item.data"></component>
              </div>
            </a-col>
          </Draggable>
        </a-row>
      </a-col>
    </a-col>
    <!-- 操作项 -->
    <a-col :span="6" class="element-col">
      <a-collapse defaultActiveKey="3" :bordered="false">
        <a-collapse-panel header="请选择布局方式" key="1">
          <a-select defaultValue="lucy" style="width: 120px" @change="doPx">
            <a-select-option value="jack">大屏幕 xs sm md lg</a-select-option>
            <a-select-option value="lucy">中屏幕</a-select-option>
            <a-select-option value="disabled">小屏幕</a-select-option>
            <a-select-option value="Yiminghe">超小屏幕</a-select-option>
          </a-select>
          <div style="margin-top: 10px;" id="components-grid-demo-playground">
            <div style="marginBottom:16px">
              <span style="marginRight:6px">边距(px)</span>
              <div style="width:50%">
                <a-slider
                  :min="0"
                  :max="Object.keys(gutters).length - 1"
                  v-model="gutterKey"
                  :marks="this.gutters"
                  :step="null"
                />
              </div>
            </div>
          </div>
        </a-collapse-panel>
        <a-collapse-panel header="布局设置" key="2" :disabled='false'>
          <a-row :gutter="gutters[gutterKey]">
            <Draggable v-model="elements">
              <a-col v-for="item in elements" :span="item.space" @click="changeDataItem(item)">
                <a-card style="text-align: center;">
                  <a-input-number :min="1" :max="24" v-model="item.space"/>
                </a-card>
              </a-col>
            </Draggable>
          </a-row>
        </a-collapse-panel>
        <a-collapse-panel header="文本操作" key="3">
          <component :is="element.configName" :config="element.data" v-if="element.name"></component>
          <template v-else>
            <a-divider orientation="left">请从左侧选择区块</a-divider>
            <a-skeleton avatar active :paragraph="{rows: 4}"/>
          </template>
        </a-collapse-panel>
      </a-collapse>
    </a-col>
     <component-drawer ref="componentdrawer" @add="addComponent"></component-drawer>
  </a-row>
</template>

<script>
    import ComponentDrawer from './car/data/list/button_modules/ComponentDrawer'
    import {postAction, getAction, base64Upload} from "@/api/manage";
    import homeMixin from '@/views/application/onlines/home/config/mixin.js'
    import elementMixin from '@/views/application/onlines/element/config/mixin.js'
    import carMixin from '@/views/application/onlines/car/config/mixin.js'
    import filePath from '@/views/application/onlines/config/config.js'

    import notificat from '@/views/chetaui/model/notification/util.js'
    import html2canvas from 'html2canvas'
    import Avatar from './system/page/modules/Avatar'

    export default {
        name: 'ElementList',
        // mixins: [homeMixin],
        components: Object.assign(
            homeMixin.components,
            elementMixin.components,
            carMixin.components,
            {Avatar,ComponentDrawer}
        ),
        created() {
            this.daRoute(this.menus[0])
            this.initTag();
        },
        data() {
            return {
                tags: [],
                tagList: [],
                tagVisible: false,
                api: {
                    initTag: "/application/material/Tabs/getData",
                    getComponentsById: "application/online/component/getComponentsById",
                    insertUpdateList: "application/online/component/insertUpdateList",
                },

                spinning: false,
                pageType: 1,
                moduleType: 2,
                filePath: filePath.fileUploadPath,
                /*grid栅格*/
                gutterKey: 0,
                gutters: [0, 5, 10, 15, 20, 25, 30, 40, 50, 60],
                data: [],
                elements: [],
                element: {},
                ispc: true,
                id: '',
                visible: false,
                proId: '',
                currentData: {},
                currentIndex: 0,
                fileList: [{
                    uid: '-1',
                    name: "xxx.png",
                    status: 'done',
                    url: "",
                }],

                // 菜单
                menu: {},
                menus: [
                    {name: '车务', mixins: carMixin},
                    {name: '首页', mixins: homeMixin},
                    {name: '组件', mixins: elementMixin},
                    {name: '物料中心', mixins: null},
                ],
                notificat: notificat
            }
        },
        methods: {
            addComponent(result) {
              var inner = {}
              result.forEach(item =>{
                let data = JSON.parse(item.data);
                inner = {
                  name: item.name,
                  json: item.data,
                  data: data,
                  configName: item.configName,
                  space: data[1].space,
                }
                this.elements.push(inner)
              })
              this.changeDataItem(inner, this.elements.length - 1)
            },
            open(){
              window.open('/apply');
            },
            initTag() {
                var $this = this;
                getAction($this.api.initTag, {pageType: $this.pageType}).then(res => {
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
            showTag() {
                this.tagVisible = true;
            },
            //调节px
            doPx(value) {
                console.log(`selected ${value}`);
            },
            daRoute(menu) {
                if(menu.name === this.menus[this.menus.length - 1].name){
                  this.$refs.componentdrawer.open(null);
                }else{
                  // 获取页面类型
                  this.menu = menu;
                  this.currentData = menu.mixins;
                  this.data = menu.mixins.data.category;
                  if (this.$route.params.projectId) {
                    this.edit();
                  }
                }
            },
            handleChange({fileList}) {
                this.fileList = fileList
                if (this.fileList[0].status === 'done') {
                    this.fileList[0].url = fileList[0].response;
                }
            },
            edit() {
                this.proId = this.$route.params.projectId;
                var that = this;
                getAction(that.api.getComponentsById, {projectId: this.proId,}).then(res => {
                    res.result.forEach(item => {
                        var data = item.data;
                        this.gutterKey = JSON.parse(data)[2].current;
                        that.elements.push({
                            id: item.id,
                            parentId: item.parentId,
                            projectId: item.projectId,
                            projectName: item.projectName,
                            projectImg: item.projectImg,
                            remark: item.remark,
                            name: item.name,
                            tagId: item.tagId,
                            tagName: item.tagName,
                            color: item.color,
                            configName: item.configName,
                            data: JSON.parse(data),
                            json: JSON.parse(data),
                            space: JSON.parse(data)[1].space,
                        })
                    })
                });
            },
            //截取图片
            savecanvas(clazz) {
                let canvas = document.querySelector(clazz);
                var that = this;
                html2canvas(canvas, {scale: 2, logging: false, useCORS: true}).then(function (canvas) {
                    let type = 'png';
                    let imgData = canvas.toDataURL(type);
                    // 照片格式处理
                    let _fixType = function (type) {
                        type = type.toLowerCase().replace(/jpg/i, 'jpeg');
                        let r = type.match(/png|jpeg|bmp|gif/)[0];
                        return 'image/' + r;
                    };
                    imgData = imgData.replace(_fixType(type), 'image/octet-stream');
                    var b64 = imgData.substring(31);
                    base64Upload(b64).then(res => {
                        that.fileList.push({
                            uid: '-2',
                            name: "xxx.png",
                            status: 'done',
                            url: res
                        })
                        that.spinning = false
                    })
                });
            },
            showModal() {
                let that = this;
                if (that.elements.length == 0) {
                    that.$message.warning("请先选择组件!");
                    return;
                }
                //判断是不是父模块
                if (that.$route.params.projectId && that.elements[0].parentId == null) {
                    that.moduleType = 1;
                }
                that.tagList = [];
                //编辑时获取原来的标签
                if (that.$route.params.projectId) {
                    if(that.elements[0].tagId){
                        let item = that.elements[0];
                        let params = {id: item.tagId, name: item.tagName, color: item.color};
                        that.tagList.push(params)
                    }
                } else {
                    //添加时的添加当前分类的标签
                    that.tags.forEach(item => {
                        if (that.menu.name == item.name) {
                            that.tagList.push(item);
                        }
                    })
                }
                that.fileList = [];
                that.spinning = true;
                //获取截图
                that.savecanvas('.componentImg');
                that.visible = true
            },
            //预览
            previewView() {
                window.open('/preview/' + this.id);
            },
            //保存组件1
            save() {
                var projectName;
                var remark;
                var isParent;

                if (this.$route.params.projectId) {
                    projectName = this.elements[0].projectName;
                    remark = this.elements[0].remark;
                } else {
                    projectName = this.$refs.projectName.stateValue;
                    remark = this.$refs.remark.stateValue;
                }
                if (!projectName) {
                    this.$message.warning("请输入项目名称！");
                    return;
                }
                /*if (!remark) {
                    this.$message.warning("请输入描述！");
                    return;
                }*/
                if (this.moduleType === 1) {
                    isParent = null;
                } else {
                    isParent = this.moduleType;
                }
                this.saveViews(projectName, remark, isParent);
                this.visible = false;
            },
            //保存组件2
            saveViews(projectName, remark, parentId) {
                var $this = this;
                var ind = 0;
                var datas = [];
                if ($this.fileList.length == 0) {
                    $this.$message.success("请选择图片!");
                    return;
                }
                $this.elements.forEach(item => {
                    ind++;
                    item.data[1].space = item.space;
                    item.data[2].gutterKey = $this.gutters[$this.gutterKey];
                    item.data[2].current = $this.gutterKey;
                    datas.push({
                        id: item.id,
                        projectId: item.projectId,
                        pageType: $this.pageType,
                        projectName: projectName,
                        projectImg: $this.fileList[0].url,
                        remark: remark,
                        name: item.name,
                        configName: item.configName,
                        data: JSON.stringify(item.data),
                        parentId: parentId,
                        ind: ind,
                        tagId: $this.tagList[0].id,
                    });
                })
                postAction($this.api.insertUpdateList, {list: datas}).then(res => {
                    $this.id = res.result;
                    if (res.success) {
                        $this.notificat.openBtn.call(this, '操作成功', '', '预览', function () {
                            window.open('/preview/' + $this.id, '_blank');
                        })
                    }
                });
            },
            addElement(item) {
                var that = this;
                var datas = that.currentData.getData(item.componentName);
                if (datas !== "") {
                    datas.push({space: 24});
                    datas.push({gutterKey: 0, current: 0});
                }
                var inner = {
                    name: item.componentName,
                    json: JSON.stringify(datas),
                    data: datas,
                    configName: item.configName,
                    space: 24,
                }
                if(that.$route.params.projectId && that.elements.length){
                  let data = that.elements[0];
                  inner.projectName = data.projectName;
                  inner.remark = data.remark;
                  inner.projectId = data.projectId;
                  inner.tagId = data.tagId;
                  inner.color = data.color;
                  inner.tagName = data.tagName;
                }
                that.elements.push(inner)
                that.changeDataItem(inner, that.elements.length - 1)
            },
            removeElement(index) {
                this.elements[index] = null;
                this.elements.splice(index, 1);
            },
            changeDataItem(item, index) {
                this.element = item;
                this.currentIndex = index;
            }
        }
    }
</script>

<style scoped>
  .link_com{
    float: left;
    line-height: 40px;
  }

  #components-grid-demo-playground [class^="ant-col-"] {
    background: transparent;
    border: 0;
  }

  #components-grid-demo-playground [class^="ant-col-"] > div {
    background: #00A0E9;
    height: 120px;
    line-height: 120px;
    font-size: 13px;
  }

  #components-grid-demo-playground pre {
    background: #f9f9f9;
    border-radius: 6px;
    font-size: 13px;
    padding: 8px 16px;
  }

  .element-card {
    box-shadow: 0 2px 20px rgba(0, 0, 0, 0.1);
    width: 70px;
    height: 50px;
  }

  .element-card-item {
    padding-left: 20px
  }

  .element-card-item:hover {
    background-color: #eee;
    cursor: pointer;
  }

  .element-list {
    box-sizing: border-box;
    border: 1px solid white;
  }

  .element-list:hover {
    cursor: move;
  }

  .element-card:hover {
    border: 1px solid #00a0e9;
    box-shadow: 1px 1px 1px #CCC;
  }

  .element-list:hover, .element-card:hover, .element-list-check {
    border: 2px dashed #00a0e9;
    box-shadow: 1px 1px 1px #CCC;
  }

  .element-list .element-list-del {
    display: none;
    cursor: pointer;
  }

  .element-list:hover .element-list-del, .element-list-check {
    display: block;
  }

  .element-row {
    margin: 10px;
    height: calc(100% - 80px);
    background-color:#ffffff;
  }

  .element-col {
    height: 100%;
    overflow-y: hidden
  }

  .element-col:hover {
    overflow-y: auto;
  }

  /*.element-col:hover{overflow-y: scroll;}*/
</style>
<style scoped>
  .inside {
    border: 1px solid #d9d9d9;
    padding: 40px;
    margin: 20px 0 10px 0;
    width: 100%;
  }
</style>