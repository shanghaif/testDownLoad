<template>
  <div :class="'workplace' + status" style="margin: 10px;" class="cheta-car-manage">
    <span class="cheta-plr-10">
      <a-icon v-if="breadcrumb[breadcrumb.length - 1] != '车务管理'" type="arrow-left" @click="doHistory()"></a-icon>
    </span>
    <a-breadcrumb separator="/" class="cheta-block">
      <a-breadcrumb-item>智慧管车</a-breadcrumb-item>
      <a-breadcrumb-item v-for="(item, index) in breadcrumb" class="cheta-event" @click.native="doRouter(index)">
        <span :style="{fontWeight: index === (breadcrumb.length - 1)  ? 'bold' : ''}">{{ item }}</span>
      </a-breadcrumb-item>
    </a-breadcrumb>
    <br>
    <div v-if="breadcrumb[breadcrumb.length - 1] === '车务管理'" style="padding: 1px">
      <a-card style="border-radius: 12px;" :bodyStyle="{ padding: '0px' }">
        <a-row>
          <a-col :xl="8" :lg="8" :md="8" :sm="24" :xs="24" class="en"
                 style="padding:20px auto;text-align: center;box-shadow: 1px 1px 5px #E8E8E8;">
            <div class="yikuai">
              <div class="Tupian">
                <img src="/image/workplace/shenhe.png">
              </div>
              <div class="shenhe">
                <span>8项</span>
                <p>待审核</p>
              </div>
            </div>
          </a-col>
          <a-col :xl="8" :lg="8" :md="8" :sm="24" :xs="24" class="en"
                 style="text-align: center;box-shadow: 1px 1px 5px #E8E8E8;">
            <div class="yikuai">
              <div class="Tupian">
                <img src="/image/workplace/dengdai.png">
              </div>
              <div class="shenhe">
                <span>8项</span>
                <p>待处理</p>
              </div>
            </div>
          </a-col>
          <a-col :xl="8" :lg="8" :md="8" :sm="24" :xs="24" class="en"
                 style="text-align: center;box-shadow: 1px 1px 5px #E8E8E8;">
            <div class="yikuai">
              <div class="Tupian">
                <img src="/image/workplace/genjin.png">
              </div>
              <div class="shenhe">
                <span>8项</span>
                <p>待跟进</p>
              </div>
            </div>
          </a-col>
        </a-row>
      </a-card>
      <div>
        <a-row :gutter="24">
          <a-col :xl="18" :lg="24" :md="24" :sm="24" :xs="24">
            <a-card
              class="project-list"
              style="margin-bottom: 24px; margin-top: 25px; border-radius: 10px;"
              :body-style="{ padding: 0 }">
              <div class="clearfix">
                <div style="float: left">
                  <span class="biaoti" style="border: 0px;font-family:MicrosoftYaHei;">车务登记</span>
                </div>
                <div style="float: right">
                  <a class="taizhang" style="border: 0px;font-family:MicrosoftYaHei;">车辆台账>></a>
                </div>
              </div>
              <div style="border: 0px;">
                <a-card-grid class="project-card-grid" :key="i" v-for="(item, i) in projects" style="cursor: pointer;">
                  <!--<img :src="item.cover">-->
                  <a-card :bordered="false" :body-style="{ padding: 0 }" @click="cutMenu(item)">
                    <a-card-meta>
                      <div slot="title" class="card-title">
                        <div class="clearfix">
                          <div style=" float: left;">
                            <img :src="item.cover">
                          </div>
                          <div style="float: left;margin-left: 10px;text-align: center">
                            <a style="color: #333333;font-size: 14px;font-weight:bold;margin-left: 0px">{{ item.title }}</a>
                          </div>
                        </div>
                      </div>
                      <div slot="description" class="card-description"
                           style="color: #666666;font-family:MicrosoftYaHei;">
                        {{ item.description }}
                      </div>
                    </a-card-meta>
                    <div class="project-item">
                      <a style="color: #999999;font-size: 14px;font-family:MicrosoftYaHei;">{{item.xingshi}}{{item.shuliang}}</a>
                      <span class="datetime" style="#CCCCCC;font-size: 14px;font-family:MicrosoftYaHei;">{{item.shijian}}</span>
                    </div>
                  </a-card>
                </a-card-grid>
              </div>
            </a-card>
          </a-col>
          <a-col
            style="padding: 0 12px"
            :xl="6"
            :lg="24"
            :md="24"
            :sm="24"
            :xs="24">
            <a-card style="margin-top: 25px;border-radius: 10px" :bordered="false"
                    :body-style="{padding: 0}">
              <div style="border-bottom: 1px solid #EDEDED;"><span class="biaoti">快速导航</span></div>
              <div class="item-group" style="font-family:MicrosoftYaHei;">
                <ul>
                  <li><a>入网登记</a></li>
                  <li><a>理赔登记</a></li>
                  <li><a>违章查询</a></li>
                  <li>
                  <a @click="showModal">新增记录</a>
                  </li>
                  <li><a>保险登记</a></li>
                  <!--border-color: #1CC09F-->
                  <li><div style="margin-top: 15px"><a-button size="small" type="primary" ghost icon="plus" class="cheta-color" style="width: 80px;height: 32px;"></a-button></div></li>
                </ul>
                <buttonModal ref="button_modal" :config="[]"></buttonModal>
              </div>
            </a-card>
            <a-card style="margin-bottom: 24px;margin-top: 25px;border-radius: 10px" :bordered="false"
                    :body-style="{padding: 0}">
              <div style="border-bottom: 1px solid #EDEDED;"><span class="biaoti">动态</span></div>
              <a-list class="dibu">
                <a-list-item :key="index" v-for="(item, index) in activities">
                  <a-list-item-meta>
                    <a-avatar slot="avatar" :src="item.user.avatar"/>
                    <div slot="title">
                      <span
                        style="font-family:MicrosoftYaHei;color: #333333;font-size: 14px">{{ item.user.nickname }}</span>&nbsp;
                      在&nbsp;<a href="#" class="cheta-color">{{ item.project.name }}</a>&nbsp;
                      <span>{{ item.project.action }}</span>&nbsp;
                      <a href="#" class="cheta-color">{{ item.project.event }}</a>
                    </div>
                    <div slot="description" style="color: #CCCCCC">{{ item.time }}</div>
                  </a-list-item-meta>
                </a-list-item>
              </a-list>
            </a-card>
          </a-col>
        </a-row>
      </div>
    </div>
    <route-view class="cheta-mt-8" v-else></route-view>
    <developedNamePage v-show="state === 1" ref="developedNamePage"></developedNamePage>
  </div>
</template>

<script>
  import buttonModal from '@/views/application/onlines/car/component/list/button_modules/submitModal'
  import { timeFix } from '@/utils/util'
  import { mapGetters } from 'vuex'
  import PageLayout from '@/components/page/PageLayout'
  import HeadInfo from '@/components/tools/HeadInfo'
  import Radar from '@/components/chart/Radar'

  import Oiling from './oiling/Oiling'
  import Compensate from './compensate/Compensate'
  import Insurance from './insurance/Insurance'


  import Scrap from './scrap/Scrap'
  import Maintenance from './maintenance/Maintenance'
  import Card from './playcard/Card'
  import Violation from './violation/Violation'

  import DevelopedNamePage from '@/views/developed/DevelopedNamePage'
  import ParameterList from '@/views/application/parameter/ParameterList'
  import ARow from 'ant-design-vue/es/grid/Row'
  import RouteView from "@/components/layouts/RouteView"


  import {getAction} from "@/api/manage";
  export default {
    name: 'Workplace',
    components: {
      buttonModal,
      ARow,
      PageLayout,
      HeadInfo,
      Radar,
      Compensate,
      Oiling,
      Insurance,
      DevelopedNamePage,
      ParameterList,
      Violation,
      Card,
      // Registration
      Maintenance,
      Scrap,
      RouteView
    },
    data() {
      return {
        visible:false,
        timeFix: timeFix(),
        avatar: '',
        user: {},

        projects: [],
        loading: true,
        radarLoading: true,
        activities: [],

        // data
        axis1Opts: {
          dataKey: 'item',
          line: null,
          tickLine: null,
          grid: {
            lineStyle: {
              lineDash: null
            },
            hideFirstLine: false
          }
        },
        axis2Opts: {
          dataKey: 'score',
          line: null,
          tickLine: null,
          grid: {
            type: 'polygon',
            lineStyle: {
              lineDash: null
            }
          }
        },
        scale: [{
          dataKey: 'score',
          min: 0,
          max: 80
        }],

        radarData: [],
        currentMenu: 'nav',
        status: 0,
        primaryObject:{},
        buttonObject:{},
        state: 0,
        localHistory: {
          0: {
            execute: () => {
              this.cutMenu({title: 'nav'})
            }
          },
          currentIndex: 0,

        },
        breadcrumb: ['车务管理']

      }
    },
    computed: {
      userInfo() {
        return this.$store.getters.userInfo
      }
    },
    created() {
      this.user = this.userInfo
      this.primaryObject=this.$route.matched
      this.buttonObject=this.$route.matched[this.$route.matched.length-1].meta.children
      this.avatar = '/theme/hw/logo.png';
      this.initBread();
    },
    updated() {
      if (this.$refs.pageLayout) {
        this.$refs.pageLayout.$refs.globalHeader.workplace = true
      }
    },
    mounted() {
      this.getProjects()
      this.getActivity()
    },
    methods: {
      showModal() {
        getAction('application/online/component/getComponentsById', {projectId: '223dbcb302c04855891b0eb2c5c810d4',}).then(res => {
          let modal = [
            {
              name: res.result[0].name,
              data: JSON.parse(res.result[0].data),
              type: "post",
              url: "/application/car/vehicle/refuel/insertOrUpdate"
            }
          ];
          let modalDetail = {
            title: "新增记录",
            okText : "确认",
            cancelText : "取消"
          }
          this.$refs.button_modal.showButton(modal,modalDetail,0);
        })
      },
      normFile(e) {
        console.log('Upload event:', e);
        if (Array.isArray(e)) {
          return e;
        }
        return e && e.fileList;
      },
      ...mapGetters(['nickname', 'welcome']),
      getProjects() {
        this.projects = [{
          cover: '/image/workplace/ruwang.png',
          description: '新车辆安装智能终端设备登记，发布未安装车联网智能设备安装工单',
          id: 1,
          title: '安装登记',
          updatedAt: '2018-07-26 00:00:00',
          xingshi:'新安装登记：',
          shuliang:'100辆',
          shijian:'17分钟前'
        }, {
          cover: '/image/workplace/shangpai.png',
          description: '车辆临时牌登记更换计划，车牌号码变更审批登记',
          id: 1,
          title: '上牌登记',
          updatedAt: '2018-07-26 00:00:00',
          xingshi:'变更审批：',
          shuliang:'100项',
          shijian:'17分钟前'
        }, {
          cover: '/image/workplace/cheliang.png',
          description: '新增或导入车辆数据，补全车辆档案，查看车辆基本信息、车辆状态信息详情',
          id: 1,
          title: '车辆信息',
          updatedAt: '2018-07-26 00:00:00',
          xingshi:'待补全车辆：',
          shuliang:'3000辆',
          shijian:'17分钟前'

        }, {
          cover: '/image/workplace/jiayou.png',
          description: '车辆加油记录，油卡管理，使用油卡或现金加油审批登记',
          id: 1,
          title: '加油登记',
          updatedAt: '2018-07-26 00:00:00',
          xingshi:'加油审批：',
          shuliang:'20项',
          shijian:'17分钟前'
        }, {
          cover: '/image/workplace/baoyang.png',
          description: '车辆定期保养计划分析、技术性车辆保养的登记、记录管理',
          id: 1,
          title: '保养管理',
          updatedAt: '2018-07-26 00:00:00',
          xingshi:'保养计划：',
          shuliang:'650项',
          shijian:'17分钟前'
        }, {
          cover: '/image/workplace/weixiu.png',
          description: '车辆登记维修的审核审批，维修流程、维修项目情况的详细管理',
          id: 1,
          title: '维修管理',
          updatedAt: '2018-07-26 00:00:00',
          xingshi:'维修申请：',
          shuliang:'36项',
          shijian:'17分钟前'
        }, {
          cover: '/image/workplace/baoxian.png',
          description: '车辆购买保险情况登记，查询保险报价，需续保计划和续保登记管理',
          id: 1,
          title: '保险管理',
          updatedAt: '2018-07-26 00:00:00',
          xingshi:'未投保：',
          shuliang:'50项',
          shijian:'17分钟前'

        }, {
          cover: '/image/workplace/lipei.png',
          description: '车辆发生交通事件的保险理赔登记，理赔情况进度跟进记录详情',
          id: 1,
          title: '理赔登记',
          updatedAt: '2018-07-26 00:00:00',
          xingshi:'理赔跟进：',
          shuliang:'60项',
          shijian:'17分钟前'
        }, {
          cover: '/image/workplace/weizhang.png',
          description: '车辆批量在线违章查询，事故车辆的后续跟进办理管理',
          id: 1,
          title: '违章事故',
          updatedAt: '2018-07-26 00:00:00',
          xingshi:'违章车辆：',
          shuliang:'80辆',
          shijian:'17分钟前'
        }, {
          cover: '/image/workplace/cheshen.png',
          description: '车辆的计划年审提醒，更新和登记车辆年审详细信息',
          id: 1,
          title: '车审管理',
          updatedAt: '2018-07-26 00:00:00',
          xingshi:'年审提醒：',
          shuliang:'56项',
          shijian:'17分钟前'
        }, {
          cover: '/image/workplace/guohu.png',
          description: '车辆交易后的产权过户登记，将车辆运力从项目移除',
          id: 1,
          title: '过户登记',
          updatedAt: '2018-07-26 00:00:00',
          xingshi:'过户数量：',
          shuliang:'20辆',
          shijian:'17分钟前'
        }, {
          cover: '/image/workplace/baofei.png',
          description: '车辆使用达到报废标准，按照国家相关规定执行报废处理记录',
          id: 1,
          title: '报废管理',
          updatedAt: '2018-07-26 00:00:00',
          xingshi:'报废数量：',
          shuliang:'10辆',
          shijian:'17分钟前'
        }]
        this.loading = false
      },
      getActivity() {
        this.activities = [
          {
            'id': 1,
            'user': {
              'nickname': '蓝莓酱',
              'avatar': 'https://gw.alipayobjects.com/zos/rmsportal/BiazfanxmamNRoxxVxka.png'
            },
            'project': {
              'name': '入网管理',
              'action': '登记了',
              'event': '粤A-88888'
            },
            'time': '昨天'
          },
          {
            'id': 1,
            'user': {
              'nickname': '蓝莓酱',
              'avatar': 'https://gw.alipayobjects.com/zos/rmsportal/jZUIxmJycoymBprLOUbT.png'
            },
            'project': {
              'name': '入网管理',
              'action': '登记了',
              'event': '粤A-88888'
            },
            'time': '三天前'
          }
        ]
      },
      updateRouter () {
        var currentMenus = this.$route.matched[this.$route.matched.length - 1]
        this.currentMenu = currentMenus.name;
      },
      cutMenu(item) {
        this.currentMenu = item.title
        this.status = item.status
        this.$refs.developedNamePage.title = item.title
        var that = this;
        var homeRouter = this.primaryObject[2], doRouter = null;
        homeRouter.meta.children.forEach(router => {
          if (router.name.trimRight() === item.title) {
            doRouter = router;
          }
        })
        if (doRouter) {
          this.$router.push({
            path: doRouter.path,
            name: doRouter.name
          });
          this.state = 0;
        } else {
          this.state = 1;
        }
      },
      doHistory () {
        this.doRouter(this.breadcrumb.length - 2);
      },
      doRouter (index) {
        var start = index + 1;
        this.breadcrumb.splice(start, this.breadcrumb.length - start);
        this.$router.push({
          name: this.breadcrumb[index]
        });
      },
      initBread () {
        var menus = this.$route.matched;
        if (menus.length > 2 && menus[2].name === '车务管理' ) {
          if (this.breadcrumb.length > 1 || menus.length > 3) {
            var bread = menus.filter((item, index) => index > 2).map(item => item.name);
            bread.forEach(item => {
              if (!this.breadcrumb.includes(item)) {
                this.breadcrumb.push(item);
              }
            })
          } else {
            this.breadcrumb = ['车务管理']
          }
          this.updateRouter();
        }
      }

    },
    watch: {
      // 监听路由
      '$route' () {
        this.initBread();
      }
    }
  }

</script>

<style lang="scss" scoped>
  .cheta-car-manage img {
    display: block;
  }
  .project-list {

    .card-title {
      font-size: 0;

      a {
        color: rgba(0, 0, 0, 0.85);
        margin-left: 12px;
        line-height: 24px;
        height: 24px;
        display: inline-block;
        vertical-align: top;
        font-size: 14px;

        &:hover {
          color: #1890ff;
        }
      }
    }
    .card-description {
      color: rgba(0, 0, 0, 0.45);
      height: 44px;
      line-height: 22px;
      overflow: hidden;
    }
    .project-item {
      display: flex;
      margin-top: 8px;
      overflow: hidden;
      font-size: 12px;
      height: 20px;
      line-height: 20px;
      a {
        color: rgba(0, 0, 0, 0.45);
        display: inline-block;
        flex: 1 1 0;

        &:hover {
          color: #1890ff;
        }
      }
      .datetime {
        color: rgba(0, 0, 0, 0.25);
        flex: 0 0 auto;
        float: right;
      }
    }
    .ant-card-meta-description {
      color: rgba(0, 0, 0, 0.45);
      height: 44px;
      line-height: 22px;
      overflow: hidden;
    }
  }

  .item-group {
    padding: 32px 20px 16px 20px;
    font-size: 0;
    a {
      color: rgba(0, 0, 0, 0.65);
      /*display: inline-block;*/
      font-size: 14px;
      margin-bottom: 16px;
      margin-top: 16px;
      /*width: 33%;*/
      text-align: center;
    }
  }

  .members {
    a {
      display: block;
      margin: 12px 0;
      line-height: 24px;
      height: 24px;
      .member {
        font-size: 14px;
        color: rgba(0, 0, 0, .65);
        line-height: 24px;
        max-width: 100px;
        vertical-align: top;
        margin-left: 12px;
        transition: all 0.3s;
        display: inline-block;
      }
      &:hover {
        span {
          color: #1890ff;
        }
      }
    }
  }

  .mobile {

    .project-list {

      .project-card-grid {
        width: 100%;
      }
    }

    .more-info {
      border: 0;
      padding-top: 16px;
      margin: 16px 0 16px;
    }

    .headerContent .title .welcome-text {
      display: none;
    }
  }

  .ant-card-head-title {
    border-bottom: 1px solid #EDEDED;
  }

  .ant-card-grid {
    border: 0px;
    /*text-align: center;*/
    width: 25%;
  }

  .en {
    box-sizing: border-box;
  }

  .yikuai {
    margin: 30px auto;
    text-align: center;
    width: 200px;
    height: 100px;
    display: inline-flex;
  }

  .Tupian .shenhe {
    align-content: center;
  }

  .shenhe {
    margin-left: 20px;
  }

  .Tupian img {
    width: 85px;
    height: 85px;
    border-radius: 50%;
  }

  .Tupian {
    text-align: center;
  }

  .yikuai div {
    display: inline-block;
  }

  .shenhe span {
    display: block;
    color: #666666;
    font-size: 32px;
  }

  .shenhe p {
    display: block;
    color: #999999;
    font-size: 18px;
    margin-top: 10px;
  }

  .biaoti {
    font-family: Regular;
    font-size: 19px;
    color: #454546;
    /*width: 90%;*/
    height: 50px;
    /*display: inline-block;*/
    line-height: 50px;
    margin-left: 25px;

  }
  .taizhang{
    font-family: MicrosoftYaHei;
    font-size: 14px;
    color: rgba(0, 0, 0, 0.65);
    height: 50px;
    line-height: 50px;
  }
  .project-list .card-description[data-v-c5178a5c] {
    /*color: rgba(0, 0, 0, 0.45);*/
    height: 40px;
    margin: 25px 0px;
  }

  .ant-list-item {
    width: 90%;
    margin-left: 20px;
    padding: 30px 0px;
  }

  .dibu {
    margin-bottom: 80px;
  }

  .ant-card-bordered {
    border: none;
  }
  /*.card-title{*/
  /*display: inline-block;*/
  /*}*/
  ul{
    float: left;
  }
  li{
    width: 80px;
    height: 32px;

    float: left;
    text-align: center;
    line-height: 32px;
    margin-bottom: 20px;
    margin-right: 20px;

  }
  li a{
    width: 80px;
    height: 32px;
    display: inline-block;
  }
  li a:hover{
    /*border-radius:4;*/
    box-shadow: rgb(232, 232, 232) 1px 1px 5px;

  }

</style>

<style lang="scss">
  .workplace0 .page-header[data-v-6740ec88] {
    padding: 6px 0px 0
  }
</style>