<template>
  <a-row>
    <a-col :span="24" style="padding-left: 20px">
      <p>本月完成进度72%</p>
      <p>本年完成进度66%</p>
    </a-col>
    <a-col :span="21">
      <v-chart :forceFit="true" :width="width" :height="height" :data="data" :scale="scale">
        <v-tooltip />
        <v-axis />
        <v-legend />
        <v-smooth-line position="month*temperature" color="city" shape="smooth" />
        <v-point position="month*temperature" color="city" shape="circle" />
      </v-chart>
    </a-col>
  </a-row>
</template>

<script>
  const DataSet = require('@antv/data-set');

  const sourceData = [
    { month: '一月', Tokyo: 12, London: 6 },
    { month: '二月', Tokyo: 16, London: 4 },
    { month: '三月', Tokyo: 12, London: 2 },
    { month: '四月', Tokyo: 16, London: 4 },
  ];

  const dv = new DataSet.View().source(sourceData);
  dv.transform({
    type: 'fold',
    fields: ['Tokyo', 'London'],
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
        height: 300,
        width: 300,
      };
    }
  };
</script>
