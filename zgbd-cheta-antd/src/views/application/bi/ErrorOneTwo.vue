<template>
  <div style="text-align: center">
    <v-chart :forceFit="true" :height="height" :data="data" :scale="scale">
      <v-tooltip />
      <v-axis />
      <v-legend />
      <v-line position="year*value" :size="2" color="country" adjust="stack" />
      <v-stack-area position="year*value" color="country" />
    </v-chart>
  </div>
</template>

<script>
  const data = [
    {country: '移动', year: '1750', value: 3002},
    {country: '移动', year: '1800', value: 2035},
    {country: '移动', year: '1850', value: 4009},
    {country: '移动', year: '1900', value: 268},
    {country: '移动', year: '1950', value: 3400},
    {country: '移动', year: '1999', value: 634},
    {country: '移动', year: '2050', value: 5947},
    {country: '停止', year: '1750', value: 106},
    {country: '停止', year: '1800', value: 107},
    {country: '停止', year: '1850', value: 111},
    {country: '停止', year: '1900', value: 1766},
    {country: '停止', year: '1950', value: 221},
    {country: '停止', year: '1999', value: 767},
    {country: '停止', year: '2050', value: 133},
    {country: '离线', year: '1750', value: 163},
    {country: '离线', year: '1800', value: 203},
    {country: '离线', year: '1850', value: 276},
    {country: '离线', year: '1900', value: 628},
    {country: '离线', year: '1950', value: 547},
    {country: '离线', year: '1999', value: 729},
    {country: '离线', year: '2050', value: 408},

  ];

  const scale = [{
    dataKey: 'year',
    type: 'linear',
    tickInterval: 50,
  }];

  export default {
    data() {
      return {
        data,
        scale,
        height: 300,
      };
    }
  };
</script>
