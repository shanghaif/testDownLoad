<template>
  <page-layout>
    <div>
      <a-row>
<!--<div class="one">-->
        <a-col
        :xl="16"
        :lg="16"
        :md="24"
        :sm="24"
        :xs="24">
        <a-card :bordered="false" >
          <a-tabs defaultActiveKey="1">
            <!-- 面积图 -->
            <a-tab-pane tab="数据展示" key="4">
              <area-chart-ty title="" :dataSource="areaData" x="月份" y="销售额" :height="height"/>
            </a-tab-pane>
          </a-tabs>
        </a-card>
        </a-col>
        <a-col
        :xl="8"
        :lg="8"
        :md="24"
        :sm="24"
        :xs="24">
        <a-card title="资产分布" :loading="radarLoading" :bordered="false" style="margin-top: 15px"
                :body-style="{ padding: 0 }">
          <div style="min-height: 400px;">
            <!-- :scale="scale" :axis1Opts="axis1Opts" :axis2Opts="axis2Opts"  -->
            <radar :data="radarData"/>
          </div>
        </a-card>
        </a-col>
<!--</div>-->

        <a-col :xl="24" :lg="24" :md="24" :sm="24" :xs="24">
          <a-card
            class="project-list"
            :loading="loading"
            style="margin-bottom: 24px;"
            :bordered="false"
            title="我的资产"
            :body-style="{ padding: 0 }">
            <a slot="extra">全部资产</a>
            <div>
              <a-card-grid class="project-card-grid" :key="i" v-for="(item, i) in projects">
                <a-card :bordered="false" :body-style="{ padding: 0 }">
                  <a-card-meta>
                    <div slot="title" class="card-title">
                      <a-avatar size="small" :src="item.cover"/>
                      <a>{{ item.title }}</a>
                    </div>
                    <div slot="description" class="card-description">
                      {{ item.description }}
                    </div>
                  </a-card-meta>
                  <div class="project-item">
                    <a href="/#/">资产明细</a>
                    <span class="datetime">2小时前</span>
                  </div>
                </a-card>
              </a-card-grid>
            </div>
          </a-card>

          <a-card :loading="loading" title="最新推进" :bordered="false">
            <a-list>
              <a-list-item :key="index" v-for="(item, index) in activities">
                <a-list-item-meta>
                  <a-avatar slot="avatar" :src="item.user.avatar"/>
                  <div slot="title">
                    <span>{{ item.user.nickname }}</span>&nbsp;
                    在&nbsp;<a href="#">{{ item.project.name }}</a>&nbsp;
                    <span>{{ item.project.action }}</span>&nbsp;
                    <a href="#">{{ item.project.event }}</a>
                  </div>
                  <div slot="description">{{ item.time }}</div>
                </a-list-item-meta>
              </a-list-item>
            </a-list>
          </a-card>
        </a-col>

      </a-row>
    </div>
  </page-layout>
</template>

<script>





  import { timeFix } from '@/utils/util'
  import { mapGetters } from 'vuex'
  import AreaChartTy from '../../example/chart/modules/AreaChartTy'
  import PageLayout from '@/components/page/PageLayout'
  import HeadInfo from '@/components/tools/HeadInfo'
  import Radar from '@/components/chart/Radar'

  import { getRoleList, getServiceList } from '@/api/manage'
  import { imgView } from '@/api/api'
  import ACol from 'ant-design-vue/es/grid/Col'





  const DataSet = require('@antv/data-set')

  export default {
    name: 'Workplace',
    components: {
      ACol,
      PageLayout,
      HeadInfo,
      Radar,
      AreaChartTy,
    },

    data() {
      return {
        timeFix: timeFix(),
        avatar: '',
        user: {},


        height: 420,
        rankList: [],
        barData: [],
        areaData: [],


        projects: [],
        loading: true,
        radarLoading: true,
        activities: [],
        teams: [],

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
        axisData: [
          { item: '引用', a: 70, b: 30, c: 40 },
          { item: '口碑', a: 60, b: 70, c: 40 },
          { item: '产量', a: 50, b: 60, c: 40 },
          { item: '贡献', a: 40, b: 50, c: 40 },
          { item: '热度', a: 60, b: 70, c: 40 },
          { item: '引用', a: 70, b: 50, c: 40 }
        ],
        radarData: []
      }
    },
    computed: {
      userInfo() {
        return this.$store.getters.userInfo
      }
    },
    created() {
      this.user = this.userInfo
      this.avatar = imgView + this.userInfo.avatar
      setTimeout(() => {
        this.loadBarData()
        this.loadAreaData()
        this.loadRankListData()
      }, 100)
    },

    mounted() {
      this.getProjects()
      this.getActivity()
      this.getTeams()
      this.initRadar()
    },
    methods: {
      loadData(x, y, max, min, before = '', after = '月') {
        let data = []
        for (let i = 0; i < 12; i += 1) {
          data.push({
            [x]: `${before}${i + 1}${after}`,
            [y]: Math.floor(Math.random() * max) + min
          })
        }
        return data
      },
      // 加载柱状图数据
      loadBarData() {
        this.barData = this.loadData('x', 'y', 1000, 200)
      },
      // 加载AreaChartTy的数据
      loadAreaData() {
        this.areaData = this.loadData('x', 'y', 500, 100)
      },
      loadRankListData() {
        this.rankList = this.loadData('name', 'total', 2000, 100, '北京朝阳 ', ' 号店')
      },



      ...mapGetters(['nickname', 'welcome']),
      getProjects() {
        this.projects = [{
          cover: 'https://gw.alipayobjects.com/zos/rmsportal/WdGqmHpayyMjiEhcKoVE.png',
          description: '那是一种内在的东西， 他们到达不了，也无法触及的',
          id: 1,
          status: 1,
          title: '总资产',
          updatedAt: '2018-07-26 00:00:00'
        }, {
          cover: 'https://gw.alipayobjects.com/zos/rmsportal/zOsKZmFRdUtvpqCImOVY.png',
          description: '那是一种内在的东西， 他们到达不了，也无法触及的',
          id: 1,
          status: 1,
          title: '支出',
          updatedAt: '2018-07-26 00:00:00'
        }, {
          cover: 'https://gw.alipayobjects.com/zos/rmsportal/dURIMkkrRFpPgTuzkwnB.png',
          description: '那是一种内在的东西， 他们到达不了，也无法触及的',
          id: 1,
          status: 1,
          title: '余额',
          updatedAt: '2018-07-26 00:00:00'
        }, {
          cover: 'https://gw.alipayobjects.com/zos/rmsportal/sfjbOqnsXXJgNCjCzDBL.png',
          description: '那是一种内在的东西， 他们到达不了，也无法触及的',
          id: 1,
          status: 1,
          title: 'XX所产生价值',
          updatedAt: '2018-07-26 00:00:00'
        }, {
          cover: 'https://gw.alipayobjects.com/zos/rmsportal/siCrBXXhmvTQGWPNLBow.png',
          description: '那是一种内在的东西， 他们到达不了，也无法触及的',
          id: 1,
          status: 1,
          title: 'XX所利用资源',
          updatedAt: '2018-07-26 00:00:00'
        }, {
          cover: 'https://gw.alipayobjects.com/zos/rmsportal/ComBAopevLwENQdKWiIn.png',
          description: '那是一种内在的东西， 他们到达不了，也无法触及的',
          id: 1,
          status: 1,
          title: 'XXXXXX',
          updatedAt: '2018-07-26 00:00:00'
        }]
        this.loading = false
      },
      getActivity() {
        this.activities = [
          {
            "id": 1,
            "user": {
              "nickname": "XXX公司",
              "avatar": "//hbimg.huabanimg.com/1c22730da3010817791af23f3d395d8ff9322ba434808-tSDakX_fw658"
            },
            "project": {
              "name": "车联网",
              "action": "产业与汽车产业息息相关的时代，将XXX技术加入车联网行业，",
              "event": "研发出XXX技术，在未来交通领域竞争中的优势中脱颖而出。"
            },
            "time": "2018-08-23 14:47:00"
          },
          {
            "id": 1,
            "user": {
              "nickname": "XXX公司",
              "avatar": "//hbimg.huabanimg.com/7221dc70b7df430c381ed16f6826e2adcbd5103bb6a0-CBqnli_fw658"
            },
            "project": {
              "name": "车联网",
              "action": "产业与汽车产业息息相关的时代，将XXX技术加入车联网行业，",
              "event": "研发出XXX技术，在未来交通领域竞争中的优势中脱颖而出。"
            },
            "time": "2018-08-23 09:35:37"
          },
          {
            "id": 1,
            "user": {
              "nickname": "XXX公司",
              "avatar": "//hbimg.huabanimg.com/a8cb423db0be84b4f994c7dca4098680883aad33149eba-KnUokr_fw658"
            },
            "project": {
              "name": "车联网",
              "action": "产业与汽车产业息息相关的时代，将XXX技术加入车联网行业，",
              "event": "研发出XXX技术，在未来交通领域竞争中的优势中脱颖而出。"
            },
            "time": "2017-05-27 00:00:00"
          },
          {
            "id": 1,
            "user": {
              "nickname": "XXX公司",
              "avatar": "//hbimg.huabanimg.com/533211085f38e5f65e3801a8b5297007558491d93df71d-JSEr65_fw658"
            },
            "project": {
              "name": "车联网",
              "action": "产业与汽车产业息息相关的时代，将XXX技术加入车联网行业，",
              "event": "研发出XXX技术，在未来交通领域竞争中的优势中脱颖而出。"
            },
            "time": "2018-08-23 14:47:00"
          },
          {
            "id": 1,
            "user": {
              "nickname": "XXX公司",
              "avatar": "//hbimg.huabanimg.com/3fd8cd47d5473a97a508f4ce1ccc2d3e04a21a404b980-BQ78Ma_fw658"
            },
            "project": {
              "name": "车联网",
              "action": "产业与汽车产业息息相关的时代，将XXX技术加入车联网行业，",
              "event": "研发出XXX技术，在未来交通领域竞争中的优势中脱颖而出。"
            },
            "time": "2018-08-23 14:47:00"
          },
          {
            "id": 1,
            "user": {
              "nickname": "XXX公司",
              "avatar": "//hbimg.huabanimg.com/c881d057419d3e674dcade16f8b0e1205d2f99de6a64b-wRQI2P_fw658"
            },
            "project": {
              "name": "车联网",
              "action": "产业与汽车产业息息相关的时代，将XXX技术加入车联网行业，",
              "event": "研发出XXX技术，在未来交通领域竞争中的优势中脱颖而出。"
            },
            "time": "2018-08-23 14:47:00"
          }
        ];
      },
      getTeams() {
        this.teams = [

        ]
      },
      initRadar() {
        this.radarLoading = true
        const dv = new DataSet.View().source([
          {
            "item": "引用",
            "个人": 70,
            "团队": 30,
            "部门": 40
          },
          {
            "item": "口碑",
            "个人": 60,
            "团队": 70,
            "部门": 40
          },
          {
            "item": "产量",
            "个人": 50,
            "团队": 60,
            "部门": 40
          },
          {
            "item": "贡献",
            "个人": 40,
            "团队": 50,
            "部门": 40
          },
          {
            "item": "热度",
            "个人": 60,
            "团队": 70,
            "部门": 40
          },
          {
            "item": "引用",
            "个人": 70,
            "团队": 50,
            "部门": 40
          }
        ]);
        dv.transform({
          type: 'fold',
          fields: ['个人', '团队', '部门'],
          key: 'user',
          value: 'score'
        })
        this.radarData = dv.rows
        this.radarLoading = false
      }
    }
  }
</script>

<style lang="scss" scoped>
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
    padding: 20px 0 8px 24px;
    font-size: 0;
    a {
      color: rgba(0, 0, 0, 0.65);
      display: inline-block;
      font-size: 14px;
      margin-bottom: 13px;
      width: 25%;
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

</style>