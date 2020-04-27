<template>
  <div style="text-align: center">
    <v-chart :forceFit="true" :height="height" :data="data">
      <v-tooltip />
      <v-axis />
      <v-legend />
      <v-stack-bar position="月份*月均降雨量" color="name" />
    </v-chart>
  </div>
</template>

<script>
  const DataSet = require('@antv/data-set');

  const sourceData = [
    { name: '推进中', '一月': 18.9, '二月': 28.8, '三月': 39.3, '四月': 81.4, '五月': 47, '六月': 20.3, '七月': 24, '八月': 35.6, '九月': 35.6, '十月': 35.6, '十一月': 35.6, '十二月': 35.6 },
    { name: '暂停', '一月': 12.4, '二月': 23.2, '三月': 34.5, '四月': 99.7, '五月': 52.6, '六月': 35.5, '七月': 37.4, '八月': 42.4, '九月': 35.6, '十月': 35.6, '十一月': 35.6, '十二月': 35.6 },
  ];

  const dv = new DataSet.View().source(sourceData);
  dv.transform({
    type: 'fold',
    fields: ['一月', '二月', '三月', '四月', '五月', '六月', '七月', '八月', '九月', '十月', '十一月', '十二月'],
    key: '月份',
    value: '月均降雨量',
  });
  const data = dv.rows;

  export default {
    data() {
      return {
        data,
        height: 300,
      };
    }
  };
</script>