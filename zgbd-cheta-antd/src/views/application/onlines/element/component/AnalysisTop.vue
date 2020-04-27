<template>
  <a-row :gutter="24">
    <a-col :sm="24" :md="12" :xl="6" :style="{ marginBottom: '24px' }" v-for="item in config">
      <chart-card :title="item.top.chartTitle" :total="item.top.total">
        <a-tooltip title="指标说明" slot="action">
          <a-icon type="info-circle-o" />
        </a-tooltip>
        <div>
          <template v-if="item.content.type === 'trend'">
            <component :is="item.content.type" v-for="inner in item.content.props" v-bind="inner">
              <span slot="term">{{ inner.term }}</span>
              {{ inner.text }}
            </component>
          </template>
          <template v-else>
            <component :is="item.content.type" v-bind="item.content.props">
            </component>
          </template>
        </div>
        <template slot="footer">
          {{ item.footer }}
        </template>
      </chart-card>
    </a-col>
  </a-row>
</template>

<script>
  import ChartCard from '@/components/ChartCard'
  import ACol from "ant-design-vue/es/grid/Col"
  import ATooltip from "ant-design-vue/es/tooltip/Tooltip"
  import MiniArea from '@/components/chart/MiniArea'
  import MiniBar from '@/components/chart/MiniBar'
  import MiniProgress from '@/components/chart/MiniProgress'
  import RankList from '@/components/chart/RankList'
  import Bar from '@/components/chart/Bar'
  import Trend from '@/components/Trend'

  export default {
    name: 'Analysis-top',
    components: {
      ATooltip,
      ACol,
      ChartCard,
      MiniArea,
      MiniBar,
      MiniProgress,
      RankList,
      Bar,
      Trend
    },
    props: {
      config: {
        type: Array,
        default: () => []
      },
    },
  }
</script>

<style scoped>

</style>