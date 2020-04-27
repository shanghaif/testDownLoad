<template>
  <div>
    <v-chart :forceFit="true" :height="height" :data="data">
      <v-tooltip :crosshairs="false" :inPlot="false" position="top" />
      <v-axis />
      <v-legend />
      <v-stack-bar position="depth*count" color="cut" />
    </v-chart>
  </div>
</template>

<script>
  const DataSet = require('@antv/data-set');

  export default {
    mounted() {
    },
    data() {
      return {
        data: [],
        height: 400,
      };
    }
  };
</script>