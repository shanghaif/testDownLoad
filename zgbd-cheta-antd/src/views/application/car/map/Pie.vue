<template>
  <!--<v-chart :forceFit="true" :height="height" :data="data" :scale="scale">
    <v-tooltip :showTitle="false" dataKey="item*percent"/>
    <v-axis/>
    <v-legend dataKey="item"/>
    <v-pie position="percent" color="item" :v-style="pieStyle" :label="labelConfig"/>
    <v-coord type="theta"/>
  </v-chart>-->
  <v-chart style="margin-top: 30px;" :forceFit="true" :height="height" :data="data" :scale="scale">
    <v-tooltip :showTitle="false" dataKey="carType*percent" />
    <v-axis/>
    <v-pie position="percent" color="item" :v-style="pieStyle" :label="labelConfig"/>
    <v-coord type="theta" :radius="1.0" :innerRadius="0.6"/>
  </v-chart>
</template>

<script>
  const DataSet = require('@antv/data-set')

  const sourceData = [
    { item: '运行', percent: 0.3},
    { item: '离线', percent: 0.5},
    { item: '停止', percent: 0.2},
  ]

  const scale = [{
    dataKey: 'percent',
    min: 0,
    formatter: '.0%'
  }]

  export default {
    props: {
      title: {
        type: String,
        default: ''
      },
      height: {
        type: Number,
        default: 254
      },
      dataSource: {
        type: Array,
        default: () => []
      }
    },
    created() {
      this.change()
    },
    watch: {
      'dataSource': function() {
        this.change()
      }
    },
    methods: {
      change() {
        if (this.dataSource.length === 0) {
          this.data = sourceData
        } else {
          const dv = new DataSet.View().source(this.dataSource)
          dv.transform({
            type: 'percent',
            field: 'count',
            dimension: 'item',
            as: 'percent'
          })
          this.data = dv.rows
        }
      }
    },
    data() {
      return {
        data: '',
        scale,
        pieStyle: {
          stroke: '#fff',
          lineWidth: 1
        },
        labelConfig: ['percent', {
          formatter: (val, item) => {
            return item.point.item + ': ' + val
          }
        }]
      }
    }
  }
</script>