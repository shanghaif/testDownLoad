<template>
  <div  style="border-radius: 4px; text-align: center;box-shadow: 1px 1px 5px #E5E5E5;margin: 13px;">
    <a-row>
      <a-col :span="12" style="font-size: 18px;margin-top: 22px">
        <span>警告分布图</span>
      </a-col>
      <a-col>
        <v-chart :forceFit="true" :height="height" :data="data" :scale="scale">
          <v-tooltip :showTitle="false" :itemTpl="itemTpl" />
          <v-coord type="theta" :radius="0.5" />
          <v-pie position="percent" :color="'type'" :label="label" :select="false" :vStyle="style" :tooltip="tooltip" />
          <v-view :data="viewData" :scale="scale">
            <v-coord type="theta" :radius="0.75" :innerRadius="0.5 / 0.75" />
            <v-pie position="percent" :color="color" label="name" :select="false" :vStyle="style" :tooltip="tooltip" />
          </v-view>
        </v-chart>
        <a-row>
          <a-col :span="8" style="margin-top: -30px;padding-bottom: 30px">
            <div style="text-align: center">
              <p style="font-size: 30px;">5</p>
              <p>当前警告数</p>
            </div>
          </a-col>
          <a-col :span="8" style="margin-top: -30px;padding-bottom: 30px">
            <div style="text-align: center">
              <p style="font-size: 30px;">6</p>
              <p>当月警告数</p>
            </div>
          </a-col>
          <a-col :span="8" style="margin-top: -30px;padding-bottom: 30px">
            <div style="text-align: center">
              <p style="font-size: 30px;">15</p>
              <p>上月警告数</p>
            </div>
          </a-col>
        </a-row>
      </a-col>
    </a-row>

  </div>
</template>

<script>
  const DataSet = require('@antv/data-set');

  const sourceData = [
    { value: 251, type: '直接访问', name: '访问层' },
    { value: 1048, type: '直接访问', name: '管理层' },
    { value: 610, type: '视屏广告', name: '轮胎' },
    { value: 434, type: '搜索引擎', name: '云平台搜索' },
    { value: 335, type: '邮件营销', name: '邮箱收取' },
    { value: 250, type: '联盟广告', name: '合作共赢' },
  ];

  const dv = new DataSet.View().source(sourceData);
  dv.transform({
    type: 'percent',
    field: 'value',
    dimension: 'type',
    as: 'percent',
  });
  const data = dv.rows;

  const viewDv = new DataSet.View().source(sourceData);
  viewDv.transform({
    type: 'percent',
    field: 'value',
    dimension: 'name',
    as: 'percent'
  });
  const viewData = viewDv.rows;

  const scale = {
    dataType: 'percent',
    formatter: '.2%',
  };

  const itemTpl = '<li><span style="background-color:{color};" class="g2-tooltip-marker"></span>{name}: {value}</li>';

  const style = {
    lineWidth: 1,
    stroke: '#fff',
  };

  const label = ['type', { offset: -10 }];

  const tooltip = [
    'name*percent', (item, percent) => {
      percent = (percent * 100).toFixed(2) + '%';
      return {
        name: item,
        value: percent,
      };
    },
  ];

  const color = ['name', ['#BAE7FF', '#7FC9FE', '#71E3E3', '#ABF5F5', '#8EE0A1', '#BAF5C4']];

  export default {
    data() {
      return {
        data,
        scale,
        viewData,
        height: 450,
        itemTpl,
        tooltip,
        color,
        label,
        style,
      };
    }
  };
</script>
