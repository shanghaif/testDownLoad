<template>
  <div>
    <v-chart :forceFit="true" :height="height" :data="data" :scale="scale">
      <v-tooltip :crosshairs="false" :inPlot="false" position="top" />
      <v-axis />
      <v-bar position="depth*count" />
    </v-chart>
  </div>
</template>

<script>
  const DataSet = require('@antv/data-set');

  const scale = [{
    dataKey: 'depth',
    tickInterval: 4,
  }];

  export default {
    mounted() {
    },
    data() {
      return {
        data: [],
        scale,
        height: 400,
      };
    }
  };
</script>