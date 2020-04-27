<template>
  <div style="text-align: center;margin-top: 15px">
    <v-chart :forceFit="true" :height="400" :data="data" padding="auto" :scale="scale">
      <v-tooltip/>
      <v-axis dataKey="time" :label="label" :tickLine="tickLine"/>
      <v-axis dataKey="value" :show="false"/>
      <v-legend position='right-center'></v-legend>
      <v-stack-bar position="time*value" :opacity="1" :label="stackLabel" :color="color"/>
    </v-chart>
  </div>
</template>

<script>
  const data = [{
    time: '业务系统',
    type: '移动游戏',
    value: 0
  }, {
    time: '业务系统',
    type: '移动购物',
    value: 17.8
  }, {
    time: '业务系统',
    type: '移动营销',
    value: 69.4
  }, {
    time: '业务系统',
    type: '共享单车',
    value: 12.8
  }, {
    time: '操作系统',
    type: '移动游戏',
    value: 0
  }, {
    time: '操作系统',
    type: '移动购物',
    value: 18.1
  }, {
    time: '操作系统',
    type: '移动营销',
    value: 70.7
  }, {
    time: '操作系统',
    type: '共享单车',
    value: 11.2
  }, {
    time: '数据库',
    type: '移动游戏',
    value: 0
  }, {
    time: '数据库',
    type: '移动购物',
    value: 20.8
  }, {
    time: '数据库',
    type: '移动营销',
    value: 67.4
  }, {
    time: '数据库',
    type: '共享单车',
    value: 11.8
  }, {
    time: '办公软件',
    type: '移动游戏',
    value: 0.1
  }, {
    time: '办公软件',
    type: '移动购物',
    value: 20.3
  }, {
    time: '办公软件',
    type: '移动营销',
    value: 69.2
  }, {
    time: '办公软件',
    type: '共享单车',
    value: 10.4
  }, {
    time: '中间件',
    type: '移动游戏',
    value: 0.4
  }, {
    time: '中间件',
    type: '移动购物',
    value: 17.3
  }, {
    time: '中间件',
    type: '移动营销',
    value: 68.3
  }, {
    time: '中间件',
    type: '共享单车',
    value: 14
  }, {
    time: '计算机',
    type: '移动游戏',
    value: 1.2
  }, {
    time: '计算机',
    type: '移动购物',
    value: 18.3
  }, {
    time: '计算机',
    type: '移动营销',
    value: 68.6
  }, {
    time: '计算机',
    type: '共享单车',
    value: 11.9
  }];

  const scale = [{
    dataKey: 'value',
    alias: '占比（%）',
    max: 100,
    min: 0,
    nice: true
  }];

  const label = {
    textStyle: {
      fill: '#aaaaaa'
    }
  }

  const tickLine = {
    alignWithLabel: false,
    length: 0
  }

  const stackLabel = ['value', function(val) {
    if (val < 10) {
      return false;
    }
    return {
      position: 'middle',
      offset: 0,
      textStyle: {
        fill: '#fff',
        fontSize: 12,
        shadowBlur: 2,
        shadowColor: 'rgba(0, 0, 0, .45)'
      },
      formatter: function formatter(text) {
        return text + '%';
      }
    };
  }]

  const color = ['type', ['#40a9ff', '#1890ff', '#096dd9', '#0050b3']]

  export default {
    data() {
      return {
        data,
        scale,
        label,
        tickLine,
        color,
        stackLabel
      };
    }
  };
</script>
