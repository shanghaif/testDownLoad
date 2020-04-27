<template>
  <div>
    <v-chart :force-fit="true" :height="height" :data="data" :scale="scale">
      <v-tooltip />
      <v-axis />
      <v-legend />
      <v-line position="month*temperature" color="city" />
      <v-point position="month*temperature" color="city" :size="4" :v-style="style" :shape="'circle'" />
    </v-chart>
  </div>
</template>

<script>
  const DataSet = require('@antv/data-set');

  const sourceData = [
    { month: '一月', 总里程: 7.0, 当月日平均里程: 3.9 },
    { month: '二月', 总里程: 6.9, 当月日平均里程: 4.2 },
    { month: '三月', 总里程: 9.5, 当月日平均里程: 5.7 },
    { month: '四月', 总里程: 14.5, 当月日平均里程: 8.5 },
    { month: '五月', 总里程: 18.4, 当月日平均里程: 11.9 },
    { month: '六月', 总里程: 21.5, 当月日平均里程: 15.2 },
    { month: '七月', 总里程: 25.2, 当月日平均里程: 17.0 },
    { month: '八月', 总里程: 26.5, 当月日平均里程: 16.6 },
    { month: '九月', 总里程: 23.3, 当月日平均里程: 14.2 },
    { month: '十月', 总里程: 18.3, 当月日平均里程: 10.3 },
    { month: '十一月', 总里程: 13.9, 当月日平均里程: 6.6 },
    { month: '十二月', 总里程: 9.6, 当月日平均里程: 4.8 },
  ];

  const dv = new DataSet.View().source(sourceData);
  dv.transform({
    type: 'fold',
    fields: ['总里程', '当月日平均里程'],
    key: 'city',
    value: 'temperature',
  });
  const data = dv.rows;

  const scale = [{
    dataKey: 'month',
    min: 0,
    max: 1,
  }];

  export default {
    data() {
      return {
        data,
        scale,
        height: 290,
        width:600,
        style: { stroke: '#fff', lineWidth: 1 },
      };
    }
  };
</script>
