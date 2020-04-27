<template>
  <div style="margin-top: 88px">
    <v-chart :forceFit="true" :height="height" :data="data">
      <v-coord type="rect" direction="LB" />
      <v-tooltip />
      <v-axis dataKey="country" :label="label" />
      <v-bar position="country*population" />
    </v-chart>
  </div>
</template>

<script>
  const DataSet = require('@antv/data-set');

  const sourceData = [
    { country: '中国', population: 44 },
    { country: '印度', population: 70 },
    { country: '美国', population: 34 },
    { country: '印尼', population: 29 },
    { country: '巴西', population: 83 },
  ];

  const dv = new DataSet.View().source(sourceData);
  dv.transform({
    type: 'sort',
    callback(a, b) {
      return a.population - b.population > 0;
    },
  });
  const data = dv.rows;

  const label = { offset: 12 };

  export default {
    data() {
      return {
        data,
        height: 414,
        label: label,
      };
    }
  };
</script>