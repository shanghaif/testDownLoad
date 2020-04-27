<template>
  <a-card :bordered="false">
    <a-tabs defaultActiveKey="1">
      <!-- 柱状图 -->
      <a-tab-pane tab="柱状图" key="1">
        <bar title="销售额排行" :dataSource="barData" :height="height"/>
      </a-tab-pane>
      <!-- 多列柱状图 -->
      <a-tab-pane tab="多列柱状图" key="2">
        <bar-multid title="多列柱状图" :height="height"/>
      </a-tab-pane>
      <!-- 迷你柱状图 -->
      <a-tab-pane tab="迷你柱状图" key="3">
        <mini-bar :dataSource="barData" :width="400" :height="200"/>
      </a-tab-pane>
      <!-- 面积图 -->
      <a-tab-pane tab="面积图" key="4">
        <area-chart-ty title="销售额排行" :dataSource="areaData" x="月份" y="销售额" :height="height"/>
      </a-tab-pane>
      <!-- 迷你面积图 -->
      <a-tab-pane tab="迷你面积图" key="5">
        <div style="padding-top: 100px;width:600px;height:200px">
          <mini-area :dataSource="areaData" x="月份" y="销售额" :height="height"/>
        </div>
      </a-tab-pane>
      <!-- 多行折线图 -->
      <a-tab-pane tab="多行折线图" key="6">
        <line-chart-multid title="多行折线图" :height="height"/>
      </a-tab-pane>
      <!-- 饼图 -->
      <a-tab-pane tab="饼图" key="7">
        <pie title="饼图" :height="height"/>
      </a-tab-pane>
      <!-- 圆环图 -->
      <a-tab-pane tab="圆环图" key="圆环图">
        <sales-data />
      </a-tab-pane>
      <!-- 雷达图 -->
      <a-tab-pane tab="雷达图" key="8">
        <radar title="雷达图" :height="height"/>
      </a-tab-pane>
      <!-- 仪表盘 -->
      <a-tab-pane tab="仪表盘" key="9">
        <dash-chart-demo title="仪表盘" :value="9" :height="height"/>
      </a-tab-pane>
      <!-- 进度条 -->
      <a-tab-pane tab="进度条" key="10">
        <mini-progress :percentage="30" :target="40" :height="30"/>
        <mini-progress :percentage="51" :target="60" :height="30" color="#FFA500"/>
        <mini-progress :percentage="66" :target="80" :height="30" color="#1E90FF"/>
        <mini-progress :percentage="74" :target="70" :height="30" color="#FF4500"/>
        <mini-progress :percentage="92" :target="100" :height="30" color="#49CC49"/>
      </a-tab-pane>
      <!-- 排名列表 -->
      <a-tab-pane tab="排名列表" key="11">
        <rank-list title="门店销售排行榜" :list="rankList" style="width: 600px;margin: 0 auto;"/>
      </a-tab-pane>
      <!-- TransferBar -->
      <a-tab-pane tab="TransferBar" key="12">
        <transfer-bar title="年度消耗流量一览表" :data="barData" x="月份" y="流量(Mb)" :height="height"/>
      </a-tab-pane>
      <!-- Trend -->
      <a-tab-pane tab="Trend" key="13">
        <trend title="Trend" term="Trend：" :percentage="30"/>
      </a-tab-pane>
      <!-- Liquid -->
      <a-tab-pane tab="Liquid" key="14">
        <liquid :height="height"/>
      </a-tab-pane>
    </a-tabs>
  </a-card>
</template>

<script>
  import AreaChartTy from './modules/AreaChartTy'
  import Bar from './modules/Bar'
  import BarMultid from './modules/BarMultid'
  import DashChartDemo from './modules/DashChartDemo'
  import LineChartMultid from './modules/LineChartMultid'
  import Liquid from './modules/Liquid'
  import MiniBar from './modules/MiniBar'
  import MiniArea from './modules/MiniArea'
  import MiniProgress from './modules/MiniProgress'
  import Pie from './modules/Pie'
  import Radar from './modules/Radar'
  import RankList from './modules/RankList'
  import TransferBar from './modules/TransferBar'
  import Trend from './modules/Trend'
  export default {
    name: 'ViserChartDemo',
    components: {
      Bar, MiniBar, BarMultid, AreaChartTy, LineChartMultid,
      Pie, Radar, DashChartDemo, MiniProgress, RankList,
      TransferBar, Trend, Liquid, MiniArea
    },
    data() {
      return {
        height: 420,
        rankList: [],
        barData: [],
        areaData: []
      }
    },
    created() {
      setTimeout(() => {
        this.loadBarData()
        this.loadAreaData()
        this.loadRankListData()
      }, 100)
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
      }
    }
  }
</script>

<style scoped>

</style>