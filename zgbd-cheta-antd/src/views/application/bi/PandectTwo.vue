<template>
  <a-row>
    <a-col :span="24" style="padding-left: 20px">
      <p>本月完成进度72%</p>
      <p>本年完成进度66%</p>
    </a-col>
  <a-col :span="20">
    <v-chart :forceFit="true" :height="300" :data="data" padding="auto" :scale="scale">
      <v-tooltip/>
      <v-axis dataKey="type" :label="label" :tickLine="tickLine"/>
      <v-axis dataKey="value" :label="label" :title="title"/>
      <v-interval position="type*value" :opacity="1" :adjust="adjust" color="company"/>
    </v-chart>
  </a-col>
  </a-row>
</template>

<script>
  import ACol from 'ant-design-vue/es/grid/Col'
  const data = [{
    company: '结余',
    type: '1-3月',
    value: 30
  }, {
    company: '支出',
    type: '1-3月',
    value: 35
  }, {
    company: '收入',
    type: '1-3月',
    value: 28
  }, {
    company: '结余',
    type: '4-6月',
    value: 40
  }, {
    company: '支出',
    type: '4-6月',
    value: 65
  }, {
    company: '收入',
    type: '4-6月',
    value: 47
  }, {
    company: '结余',
    type: '7-9月',
    value: 23
  }, {
    company: '支出',
    type: '7-9月',
    value: 18
  }, {
    company: '收入',
    type: '7-9月',
    value: 20
  }];

  const scale = [{
    dataKey: 'value',
    alias: '占比（%）',
    max: 75,
    min: 0,
    tickCount: 4
  }];

  const label = {
    textStyle: {
      fill: '#aaaaaa'
    }
  }

  const title = {
    offset: 50
  }

  const tickLine = {
    alignWithLabel: false,
    length: 0
  }

  const adjust = [{
    type: 'dodge',
    marginRatio: 1 / 32
  }]

  export default {
    components: { ACol },
    data() {
      return {
        data,
        scale,
        label,
        tickLine,
        title,
        adjust,
      };
    }
  };
</script>