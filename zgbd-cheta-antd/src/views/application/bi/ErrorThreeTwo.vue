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
    { year: '2001', population: 41.8 },
    { year: '2002', population: 38 },
    { year: '2003', population: 33.7 },
    { year: '2004', population: 30.7 },
    { year: '2005', population: 25.8 },
    { year: '2006', population: 31.7 },
    { year: '2007', population: 33 },
    { year: '2008', population: 46 },
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
