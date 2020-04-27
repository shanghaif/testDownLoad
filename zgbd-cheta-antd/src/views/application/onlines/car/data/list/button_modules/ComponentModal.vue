<template>
    <div>
      <!--组件库-->
      <a-modal
        title="组件库"
        v-model="comVisible"
        cancelText="关闭"
        width="50%"
        @ok="comOk"
      >
        <a-radio-group v-model="selectComType" :defaultValue="1" style="margin-bottom: 15px;">
          <a-radio-button :value="1">首页中心</a-radio-button>
          <a-radio-button :value="2">车务组件库</a-radio-button>
        </a-radio-group>
        <!--页面中心-->
        <div v-if="selectComType == 1" class="modal_overflow_scroll">
          <a-spin :spinning="spinning">
            <a-card style="margin-bottom: 1rem;">
              <a-select v-model="parentId" style="width: 110px;" @change="onSelectCom">
                <a-select-option value="all">全部模块</a-select-option>
                <a-select-option value="parent">正式模块</a-select-option>
                <a-select-option value="child">测试模块</a-select-option>
              </a-select>
              <a-input-search
                style="width: 62%;margin-left: 3rem;"
                v-model="projectName"
                class="input"
                placeholder="请输入"
                @search="onSelectCom"
                enterButton="搜索"
                size="default"
              />
            </a-card>
            <a-row :gutter="10">
              <a-col :span="6" v-for="item in dataCenter" class="element-card">
                <a-card
                  class="page-item"
                  style="margin-bottom: 20px;"
                  hoverable
                  @click="pageModalBind(item.projectId)"
                >
                  <div class="imgSty" slot="cover">
                    <img
                      :src="item.projectImg||not_img"
                      width="100%"
                      alt="example"
                      draggable="false">
                  </div>

                  <a-card-meta
                    :title="item.projectName"
                    :description="item.remark||'暂无数据'"
                    style="height: 60px;" >
                  </a-card-meta>
                </a-card>
              </a-col>
            </a-row>
          </a-spin>
        </div>

        <!--组件-->
        <div v-else  class="modal_overflow_scroll">
          <a-card>
            24栅格：
            <a-slider :max="24" :min="1" v-model="sliderNum"/>
          </a-card>
          <template v-for="item in data">
            <!--slider控制条 控制24栅格-->
            <p :id="item.title"><span style="font-weight: bold">{{ item.title }}</span>（{{ item.size }}）</p>
            <a-row :gutter="16">
              <a-col v-for="inner in item.children" :span="6" style="margin-top: 10px">
                <a-card @click="pageModalBind(inner)" class="element-card">
                  <img alt="example" :src="inner.image?inner.image:not_img" slot="cover" style="height: 80px;"/>
                  <a-card-meta :description="inner.title||'暂无数据'"/>
                </a-card>
              </a-col>
            </a-row>
          </template>
        </div>
      </a-modal>
    </div>
</template>

<script>
    import carMixin from '@/views/application/onlines/car/config/mixin.js'
    import {getAction} from "@/api/manage";
    import configPath from '@/views/application/onlines/config/config.js'

    export default {
        name: "ComponentModal",
        components: Object.assign(
            carMixin.components,
            {configPath}
        ),
        props: {
            config: {
                type: Array,
                default: () => []
            },
        },
        data(){
            return{
                pageType : 1,
                //这里的modal类型是两个页面使用，用来区分 1：button 2：diversifTabs 3.底页blank
                modalType : 1,
                //当前点击的第几个按钮
                buttonIndex : 0,
                //选择组件样式 1:首页中心 2:组件库
                selectComType: 1,
                //组件栅格
                sliderNum: 24,
                projectName: '',
                parentId: 'child',
                not_img : configPath.not_img,
                //组件
                comVisible: false,
                spinning : false,
                //获取data.js里面的数据
                currentData: {},
                //车务组件数据
                data: [],
                //首页中心数据
                dataCenter: [],
                url : {
                    getData : "application/online/component/getComponentList",
                    getComponent : "application/online/component/getComponentsById",
                }
            }
        },
        created(){
            var that = this;
            let dt = {parentId : this.parentId,pageType:this.pageType}
            that.data = carMixin.data.category;
            that.currentData = carMixin;
            that.getCenterList(dt);
        },
        methods:{
            showModal(index,modalType){
                var that = this;
                that.buttonIndex = index;
                that.modalType = modalType;
                that.comVisible = !that.comVisible
            },
            //默认显示历史中心
            getCenterList(params) {
                var that = this;
                that.spinning = true;
                getAction(that.url.getData,params).then(res => {
                    res.result.forEach(item => {
                        that.dataCenter.push({
                            projectId: item.projectId,
                            projectName: item.projectName,
                            projectImg: item.projectImg,
                            remark: item.remark,
                        })
                    })
                    that.spinning = false
                });
            },
            onSelectCom(){
                var params = {
                    projectName : this.projectName,
                    parentId : this.parentId,
                    pageType : this.pageType
                };
                this.dataCenter = [];
                this.getCenterList(params);
            },
            pageModalBind(inner){
                let that = this;
                if(that.modalType === 1){
                    //按钮操作
                    that.addButtonModal(inner);
                }else if(that.modalType === 2){
                    //标签页操作
                    that.addSolt(inner);
                }else{
                    //底页
                    that.addFooter(inner);
                }
            },
            addFooter(inner) {
              var $that = this;
              if ($that.selectComType == 1) {
                $that.addFootCenter(inner);
              } else {
                $that.addFootComponent(inner);
              }
              $that.$message.success("填充成功！");
              //关闭组件库
              $that.comVisible = false
            },
            addFootComponent(inner){
              let $that = this;
              //如果是车务组件库 添加车务组件库的数据
              var data = $that.currentData.getData(inner.componentName);
              data.push({space:24},{gutterKey:10,current:2})
              $that.config[0].list.push([]);
              $that.config[0].list[$that.config[0].list.length-1].push({
                name: inner.componentName,
                data: data,
              })
              //添加占据多少行栅格
              $that.config[0].list[$that.config[0].list.length-1].push({space:$that.sliderNum});
            },
            addFootCenter(proId) {
              getAction(this.url.getComponent, {projectId: proId,}).then(res => {
                var that = this;
                that.config[0].list.push([]);
                res.result.forEach(item => {
                  var data = item.data;
                  that.config[0].list[that.config[0].list.length-1].push({
                    name: item.name,
                    data: JSON.parse(data),
                  })
                })
                that.config[0].list[that.config[0].list.length-1].push({space: 24});
              });
            },
            //添加按钮 button页面绑定
            addButtonModal(inner) {
                var $that = this;
                if ($that.selectComType == 1) {
                    $that.addDataCenter(inner);
                } else {
                    //如果是车务组件库 添加车务组件库的数据
                    $that.config[0].buttons[$that.buttonIndex].modal.push({
                        name: inner.componentName,
                        data: $that.currentData.getData(inner.componentName),
                    })
                    //添加占据多少行栅格
                    $that.config[0].buttons[$that.buttonIndex].modal[$that.config[0].buttons[$that.buttonIndex].modal.length-1].data.push({space:$that.sliderNum});
                    $that.config[0].buttons[$that.buttonIndex].modal[$that.config[0].buttons[$that.buttonIndex].modal.length-1].data.push({gutterKey:15,current:3});
                }
                $that.$message.success("填充成功！");
                //关闭组件库
                $that.comVisible = false
                //校验是否绑定接口，没有直接弹出绑定接口的窗口
                $that.showBindUrl();
            },
            showBindUrl(){
                let that = this;
                try {
                    let url = that.config[0].buttons[that.buttonIndex].modal[0].url;
                    if (url == undefined || url == ''){ that.$emit('closeDrawer') }
                }catch (e) {
                    that.$emit('closeDrawer');
                }
            },
            //添加首页中心的数据
            addDataCenter(proId) {
                var that = this;
                getAction(that.url.getComponent, {projectId: proId,}).then(res => {
                    res.result.forEach(item => {
                        var data = item.data;
                        that.config[0].buttons[that.buttonIndex].modal.push({
                            name: item.name,
                            data: JSON.parse(data),
                        })
                    })
                });
            },
            //diversifTabs页面绑定
            addSolt(inner) {
                var $that = this;
                //如果是首页中心 添加首页中心的数据
                if ($that.selectComType == 1) {
                    //这里的inner是projectId，需要它来查询数据库组件数据
                    $that.addDataCenterList(inner);
                } else {
                    //如果是车务组件库 添加车务组件库的数据
                    $that.config[0].list[$that.buttonIndex].push({
                        name: inner.componentName,
                        data: $that.currentData.getData(inner.componentName),
                    })
                    //添加占据多少行栅格
                    //第几个list里面的最后一个组件加space
                    $that.config[0].list[$that.buttonIndex][$that.config[0].list[$that.buttonIndex].length-1].data.push({space:$that.sliderNum})
                    $that.config[0].list[$that.buttonIndex][$that.config[0].list[$that.buttonIndex].length-1].data.push({gutterKey:15,current:3})
                }
                $that.$message.success("填充成功！");
                //关闭组件库
                $that.comVisible = false
            },
            //添加首页中心的数据
            addDataCenterList(proId) {
                var that = this;
                //如果你是标签页的类型，就为标签页赋值
                getAction(that.url.getComponent, {projectId: proId,}).then(res => {
                    res.result.forEach(item => {
                        var data = item.data;
                        that.config[0].list[this.buttonIndex].push({
                            name: item.name,
                            data: JSON.parse(data),
                        })
                    })
                });
            },
            //隐藏组件库
            comOk() {
              this.comVisible = !this.comVisible
            },
        }
    }
</script>

<style scoped>
  .modal_overflow_scroll{
    height: 650px;
    overflow-y: scroll;
    overflow-x: hidden;
  }

  .imgSty {
    height: 100px;
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