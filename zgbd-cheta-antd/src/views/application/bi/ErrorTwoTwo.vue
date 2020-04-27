<template>
  <div style="text-align: center">
    <v-chart :forceFit="true" :height="height" :data="data">
      <v-coord type="rect" direction="LB" />
      <v-tooltip />
      <v-legend />
      <v-axis dataKey="State" :label="label" />
      <v-stack-bar position="State*人口数量" color="年龄段" />
    </v-chart>
  </div>
</template>

<script>
  const DataSet = require('@antv/data-set');

  const sourceData = [
    { 'State': '存储池', '稳定': 25635, '正常': 1890, '超标': 9314 },
    { 'State': '资产', '稳定': 30352, '正常': 20439, '超标': 10225 },
    { 'State': '金融', '稳定': 38253, '正常': 42538, '超标': 15757 },
    { 'State': '车队信息', '稳定': 51896, '正常': 67358, '超标': 18794 },
    { 'State': '车辆台账', '稳定': 72083, '正常': 85640, '超标': 22153 }
  ];

  const dv = new DataSet.View().source(sourceData);
  dv.transform({
    type: 'fold',
    fields: ['稳定', '正常', '超标'],
    key: '年龄段',
    value: '人口数量',
    retains: ['State'],
  });
  const data = dv.rows;

  const label = { offset: 12 };

  export default {
    data() {
      return {
        data,
        height: 300,
        label: label,
      };
    }
  };
</script>