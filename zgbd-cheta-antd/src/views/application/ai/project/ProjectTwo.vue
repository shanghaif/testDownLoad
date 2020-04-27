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
    { month: '29/01/19', 环卫: 7.0, 邮政: 3.9,搅拌站:2.0 },
    { month: '20/02/19', 环卫: 6.9, 邮政: 4.2,搅拌站:3.2},
    { month: '09/04/19', 环卫: 9.5, 邮政: 5.7,搅拌站:7.2 },
    { month: '22/04/19', 环卫: 14.5, 邮政: 8.5,搅拌站:9.9 },
    { month: '11/05/19', 环卫: 18.4, 邮政: 11.9,搅拌站:9.8 },
    { month: '24/05/19', 环卫: 21.5, 邮政: 15.2,搅拌站:10.5 },
    { month: '04/06/19', 环卫: 25.2, 邮政: 17.0,搅拌站:13.2 },
    { month: '19/06/19', 环卫: 26.5, 邮政: 16.6,搅拌站:13.7 },
    { month: '23/08/19', 环卫: 23.3, 邮政: 14.2,搅拌站:15.0 },
    { month: '14/09/19', 环卫: 18.3, 邮政: 10.3,搅拌站:14.4 },
    { month: '09/09/19', 环卫: 13.9, 邮政: 6.6,搅拌站:11.9 },
    { month: '27/11/19', 环卫: 9.6, 邮政: 4.8,搅拌站:9.7 },
  ];

  const dv = new DataSet.View().source(sourceData);
  dv.transform({
    type: 'fold',
    fields: ['环卫', '邮政','搅拌站'],
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
        height: 400,
        style: { stroke: '#fff', lineWidth: 1 },
      };
    }
  };
</script>
