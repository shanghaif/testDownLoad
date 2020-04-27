<template>
  <div style="margin: 0px 20px;box-shadow: 1px 1px 5px #E5E5E5;margin: 13px;border-radius: 4px;padding: 10px">
  <a-row>
    <a-col :span="18" style="font-size: 18px;margin-top: 15px">
      <span :span="6">今日总接警</span>
    </a-col>
    <a-col :span="6" class="workOne">
      <img src="/image/project/xiangxia.png" style="margin: 0px 15px"  alt="">
      <img src="/image/project/guanbi.png"alt="">
    </a-col>
    <a-col :span="24">
  <div v-if="data.length">
    <v-chart
      :forceFit="true"
      height="400"
      :data="data"
      padding="auto"
    >
      <v-tooltip></v-tooltip>
      <v-coord type='theta' :radius="0.5" :innerRadius="0.3"/>
      <v-stack-bar position='percent' :color="color" :opacity="1" :label="label" :style="style"/>
      <v-view :data="dataView">
        <v-tooltip></v-tooltip>
        <v-coord type='theta' :radius="0.8" :innerRadius="0.5 / 0.8"/>
        <v-stack-bar position='percent' :color="color" :opacity="1" :label="labelView" :style="style"/>
      </v-view>
    </v-chart>
  </div>
    </a-col>
  </a-row>
  </div>
</template>

<script>

  const DataSet = require('@antv/data-set');

  const data = [{
    name: '已接待',
    type: '今日总接待',
    value: 11
  }, {
    name: '接待中',
    type: '今日总接待',
    value: 10
  }, {
    name: '待接待',
    type: '今日总接待',
    value: 10
  }, {
    name: '接待完成',
    type: '本周接待',
    value: 14
  }, {
    name: '待跟进',
    type: '本周接待',
    value: 7
  }, {
    name: 'AAAA',
    type: '本周接待',
    value: 7
  }, {
    name: 'SSS',
    type: '本月接待',
    value: 14
  }, {
    name: 'ZZZ',
    type: '本月接待',
    value: 3
  }, {
    name: 'QQQ',
    type: '本月接待',
    value: 3
  }, {
    name: 'VVV',
    type: '水象星座',
    value: 11
  }, {
    name: 'EEE',
    type: '水象星座',
    value: 5
  }, {
    name: 'BBB',
    type: '水象星座',
    value: 5
  }];

  var ds = new DataSet();
  var dv = ds.createView();
  dv.source(data).transform({
    type: 'percent',
    field: 'value',
    dimension: 'type',
    as: 'percent'
  });

  var ds2 = new DataSet();
  var dv2 = ds2.createView();
  dv2.source(data).transform({
    type: 'percent',
    field: 'value',
    dimension: 'name',
    as: 'percent'
  });

  const color = ['type', ['#1890ff', '#13c2c2', '#ffc53d', '#73d13d']];

  const label = ['type', {
    offset: -5,
    textStyle: {
      fill: 'white',
      shadowBlur: 2,
      shadowColor: 'rgba(0, 0, 0, .45)'
    }
  }];

  const labelView = ['name', {
    offset: -10,
    textStyle: {
      fill: 'white',
      shadowBlur: 2,
      shadowColor: 'rgba(0, 0, 0, .45)'
    }
  }]

  const style = {
    stroke: 'white',
    lineWidth: 1
  }

  export default {
    data() {
      return {
        data: dv.rows,
        dataView: dv2.rows,
        color,
        label,
        labelView,
        style
      }
    }
  };
</script>
<style>
  workOne{
    margin-top: 15px;
    float: right;
  }
  workOne img{
    display: inline;
  }
</style>
