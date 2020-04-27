<template>
  <div class="cheta-car-security">
    <div class="cheta-security-content">
      <!--导航-->
      <div class="cheta-security-top cheta-width-full cheta-pblr-10-24">
        <div class="">
          <span class="cheta-font14 cheta-font14-color">选择车队：</span>
          <a-select
            showSearch
            placeholder="Select a person"
            class="cheta-serach"
          >
            <a-select-option :value="item.id" v-for="item in list">{{ item.name }}</a-select-option>
          </a-select>
        </div>
        <div class="cheta-font14 cheta-color">
          <span class="cheta-ml-20"><a-switch defaultChecked unCheckedChildren="关" size="small"/><span>警报声音</span></span>
          <span class="cheta-ml-20"><i class="iconfont icon-shebeidianjianguanli cheta-color"></i><span @click="Check()" class="cheta-event">出车点检</span></span>
            <a-dropdown>
              <a-menu slot="overlay">
                <a-menu-item key="1">围栏设置</a-menu-item>
                <a-menu-item key="2">超速设置</a-menu-item>
                <a-menu-item key="2">点检项目</a-menu-item>
              </a-menu>
              <span class="cheta-ml-20 cheta-mt-20"><i class="iconfont icon-anquanshezhi cheta-color"></i><span class="cheta-event">安全设置</span></span>
            </a-dropdown>

        </div>
      </div>
      <!--内容部分-->
      <div class="cheta-security-main cheta-box-flex">
        <div class="cheta-security-left">
          <a-tabs defaultActiveKey="1" class="">
            <a-tab-pane key="1">
              <span slot="tab">
                <span>全部</span>
              </span>
              <CarList class="cheta-width-full"></CarList>
            </a-tab-pane>
            <a-tab-pane key="2">
              <span slot="tab">
                关注
              </span>
            </a-tab-pane>
          </a-tabs>
        </div>
        <div class="cheta-flex1 cheta-right-total cheta-p-10 cheta-security-content" style="border:1px solid #e8e8e8;">
          <!--右边上半部分-->
          <div class="cheta-box-flex cheta-content-top cheta-width-full">
            <div class="cheta-flex-grow2 cheta-radius8 cheta-bcolor-white cheta-flex-center" style="border:1px solid #e8e8e8">
              <Map></Map>
            </div>
            <div class="cheta-flex-grow1 cheta-radius8 cheta-bcolor-white cheta-ml-10 cheta-height-full" style="border:1px solid #e8e8e8">
              <div class="cheta-border-bottom cheta-plr-10 cheta-flex-between">
                <a-badge :count="99">
                  <span class="cheta-font18 cheta-font-height44">安全预警</span>
                </a-badge>
                <div class="cheta-block">
                  <a-dropdown>
                    <a-menu slot="overlay">
                      <a-menu-item key="1">详情</a-menu-item>
                      <a-menu-item key="2">编辑</a-menu-item>
                    </a-menu>
                    <div class="cheta-mr-10">
                      ···
                    </div>
                  </a-dropdown>
                </div>
              </div>
              <div class="cheta-overflow-s cheta-warn-height">
                <a-timeline class="cheta-mt23 cheta-ml-54">
                  <a-timeline-item color="orange" v-for="item in timeList"><span class="cheta-font14-A cheta-font14-color">{{ item.time }}</span>
                    <div class="cheta-font14 cheta-font-height34">{{ item.desc }}</div>
                  </a-timeline-item>
                </a-timeline>
              </div>
            </div>
          </div>
          <!--右边下半部分-->
          <div class="cheta-width-full cheta-bcolor-white cheta-mt-10 cheta-push-bottom">
            <a-tabs defaultActiveKey="1" class="">
              <a-tab-pane key="1">
                <span slot="tab">
                  事故上报
                </span>
                <Accident class="cheta-width-full cheta-height-full"></Accident>
              </a-tab-pane>
              <a-tab-pane key="2">
                <span slot="tab">
                  <span>警示推送</span>
                </span>
                <Push class="cheta-width-full cheta-height-full"></Push>
              </a-tab-pane>
              <a-tab-pane key="3">
                <span slot="tab">
                  安全信息
                </span>
                <Info class="cheta-width-full cheta-height-full"></Info>
              </a-tab-pane>

            </a-tabs>
          </div>
        </div>
      </div>
      <CarCheck ref="carCheck"></CarCheck>
    </div>
  </div>
</template>

<script>
  import CarList from './CarList'
  import Map from './Map'
  import Push from './Push'
  import Info from './Info'
  import Accident from './Accident'
  import CarCheck from './modules/CarCheck'

  export default {
    name: 'Index',
    components: { CarCheck, Info, Push, Map,CarList,Accident },
    data() {
      return {
        list: [
          {id:1,name:"jack"},
          {id:2,name:"licky"},
          {id:3,name:"tom"},
        ],
        timeList: [
          {time:'09-14 11:22',desc:'【粤A8586】超速150km/h行驶10s'},
          {time:'09-14 11:22',desc:'【粤A8586】超速150km/h行驶10s'},
          {time:'09-14 11:22',desc:'【粤A8586】超速150km/h行驶10s'},
          {time:'09-14 11:22',desc:'【粤A8586】超速150km/h行驶10s'},
          {time:'09-14 11:22',desc:'【粤A8586】超速150km/h行驶10s'},
          {time:'09-14 11:22',desc:'【粤A8586】超速150km/h行驶10s'},
        ]

      }
    },
    methods: {
      Check () {
        this.$refs.carCheck.showModal()
      }
    }
  }
</script>
<style lang="less">
  .cheta-car-security .ant-tabs{height:100%!important;}
  .cheta-car-security .ant-tabs .ant-tabs-top-content.ant-tabs-content-animated{height:100%!important;}
  .cheta-car-security .ant-tabs .ant-tabs-top .ant-tabs-line{height:100%!important;}
  .cheta-car-security .ant-tabs-content .ant-tabs-content-animated .ant-tabs-top-content{height:calc(100% - 60px)!important;}
  .cheta-car-security .ant-badge-count{right: -10px;top: 0px;}
  .cheta-car-security .ant-badge-multiple-words {padding: 0px!important;}
  .cheta-car-security .ant-timeline-item{padding: 0px!important;}
  .cheta-car-security .ant-timeline-item-head{background: orange;width:5px;height:5px!important;}
  .cheta-car-security .ant-timeline-item-tail {left: 2px;top: 0em;border-left: 1px solid #e8e8e8!important;}
</style>

<style lang="less" scoped>
  .cheta-security-content{height:calc(100vh - 150px)}
  .cheta-security-top{display: flex;height:65px;justify-content: space-between;align-items: flex-end;border:1px solid #e8e8e8; }
  .cheta-serach{width:100px;}
  .cheta-ml-20 > span{ padding-left:5px;}
  .cheta-security-main{height:calc(100% - 65px)}
  .cheta-security-left{width:260px;}
  .cheta-scroll{overflow-y: scroll!important;}
  .cheta-warn-height{height:calc(100% - 45px)}
  .cheta-content-top{height:50%;}
  .cheta-push-bottom{height:48%;}
  /*.cheta-security-bottom{height:68%;}*/
  .cheta-right-total{background:#F0F2F5 }
  .cheta-border-bottom{border-bottom: 1px solid #e8e8e8;}


</style>