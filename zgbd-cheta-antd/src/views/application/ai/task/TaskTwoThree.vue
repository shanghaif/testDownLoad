<template>
  <div style="margin: 0px 20px;box-shadow: 1px 1px 5px #E5E5E5;margin: 26px 13px 13px 13px;border-radius: 4px;padding: 10px">
    <a-row>
      <a-col :span="24">
        <span style="font-size: 18px;margin-top: 15px">接警</span>
      </a-col>
      <a-col :span="24">
        <v-chart :forceFit="true" :height="height" :data="data" :scale="scale">
          <v-tooltip />
          <v-axis />
          <v-line position="year*value" :size="2" />
          <v-area position="year*value" />
        </v-chart>
      </a-col>
    </a-row>
  </div>
</template>

<script>
  const data = [
    { year: '0615', value: 19 },
    { year: '0616', value: 17 },
    { year: '0617', value: 16 },
    { year: '0618', value: 12 },
    { year: '0620', value: 20 },
    { year: '0621', value: 23 },
  ];

  const scale = [{
    dataKey: 'value',
    min: 10,
  }, {
    dataKey: 'year',
    min: 0,
    max: 1,
  }];

  export default {
    data() {
      return {
        data,
        scale,
        height: 220,
      };
    }
  };
</script>