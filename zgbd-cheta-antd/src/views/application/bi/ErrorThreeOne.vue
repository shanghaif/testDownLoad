<template>
  <div style="text-align: center">
    <v-chart :forceFit="true" :height="height" :data="data">
      <v-tooltip />
      <v-coord type="polar" :innerRadius="0.2" />
      <v-sector position="year*population" color="year" :vStyle="sectorStyle" />
      <v-legend position="right" dataKey="year" :offsetX="-140" />
    </v-chart>
  </div>
</template>

<script>
  const data = [
    { year: 'A型车辆', population: 41.8 },
    { year: 'B型车辆', population: 38 },
    { year: 'C型车辆', population: 33.7 },
    { year: 'D型车辆', population: 30.7 },
    { year: '卡车A', population: 31.7 },
    { year: '卡车B', population: 33 },
    { year: '卡车C', population: 46 },
    { year: '卡车D', population: 38.3 },


  ];

  export default {
    data() {
      return {
        data,
        height: 200,
        sectorStyle: {
          stroke: "#fff",
          lineWidth: 1,
        },
      };
    }
  };
</script>
