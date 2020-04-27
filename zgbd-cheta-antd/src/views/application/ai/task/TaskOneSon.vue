<template>
  <div>
    <v-chart :forceFit="true" :height="height" :data="data">
      <v-coord type="rect" direction="LT" />
      <v-tooltip />
      <v-legend />
      <v-axis dataKey="value" position="right" />
      <v-axis dataKey="label" :label="label" />
      <v-bar position="label*value" color="type" :adjust="adjust" />
    </v-chart>
  </div>
</template>

<script>
  const DataSet = require('@antv/data-set');

  const sourceData = [
    { label: '周一.', A队: 2800, B队: 2260 },
    { label: '周二.', A队: 1800, B队: 1300 },
    { label: '周三.', A队: 950, B队: 900 },
    { label: '周四.', A队: 1500, B队: 1390 },
    { label: '周五.', A队: 1070, B队: 1100 },
    { label: '周六.', A队: 1270, B队: 2100 },
  ];

  const dv = new DataSet.View().source(sourceData);
  dv.transform({
    type: 'fold',
    fields: ['A队', 'B队'],
    key: 'type',
    value: 'value',
  });
  const data = dv.rows;

  const label = { offset: 12 };
  const adjust = [{ type: 'dodge', marginRatio: 1 / 32 }];

  export default {
    data() {
      return {
        data,
        height: 400,
        label: label,
        adjust: adjust,
      };
    }
  };
</script>