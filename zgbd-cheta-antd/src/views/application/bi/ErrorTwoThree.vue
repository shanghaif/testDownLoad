<template>
  <div style="text-align: center">
    <v-chart :forceFit="true" height="300" :data="data" :padding="padding" :scale="scale">
      <v-tooltip />
      <v-axis :dataKey="axis1Opts.dataKey" :line="axis1Opts.line" :tickLine="axis1Opts.tickLine" :grid="axis1Opts.grid" />
      <v-axis :dataKey="axis2Opts.dataKey" :line="axis2Opts.line" :tickLine="axis2Opts.tickLine" :grid="axis2Opts.grid" />
      <v-legend dataKey="user" marker="circle" :offset="30" />
      <v-coord type="polar" radius="0.8" />
      <v-line position="item*score" color="user" :size="2" />
      <v-point position="item*score" color="user" :size="4" shape="circle" />
    </v-chart>
  </div>
</template>

<script>
  const DataSet = require('@antv/data-set');

  const sourceData = [
    { item: '设施分布', 项目一: 70, 项目二: 30 },
    { item: '考勤统计', 项目一: 60, 项目二: 70 },
    { item: '车辆台账', 项目一: 50, 项目二: 60 },
    { item: '工单管理', 项目一: 40, 项目二: 50 },
    { item: '资产数据', 项目一: 60, 项目二: 70 },
    { item: '固定资产', 项目一: 70, 项目二: 50 },
    { item: '车辆运行', 项目一: 50, 项目二: 40 },
    { item: '行车报表', 项目一: 30, 项目二: 40 },
    { item: 'CRM', 项目一: 60, 项目二: 40 },
    { item: 'ERP', 项目一: 50, 项目二: 60 }
  ];

  const dv = new DataSet.View().source(sourceData);
  dv.transform({
    type: 'fold',
    fields: ['项目一', '项目二'],
    key: 'user',
    value: 'score',
  });
  const data = dv.rows;

  const scale = [{
    dataKey: 'score',
    min: 0,
    max: 80,
  }];

  const axis1Opts = {
    dataKey: 'item',
    line: null,
    tickLine: null,
    grid: {
      lineStyle: {
        lineDash: null
      },
      hideFirstLine: false,
    },
  };
  const axis2Opts = {
    dataKey: 'score',
    line: null,
    tickLine: null,
    grid: {
      type: 'polygon',
      lineStyle: {
        lineDash: null,
      },
    },
  };

  export default {
    data() {
      return {
        data,
        scale,
        axis1Opts,
        axis2Opts,
        padding: [20, 20, 95, 20],
      };
    }
  };
</script>
