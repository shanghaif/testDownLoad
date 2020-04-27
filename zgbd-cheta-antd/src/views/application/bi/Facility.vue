<template>
  <div>
    <a-row>
      <!--头部导航多选框-->
      <!--左边-->
        <div style="padding-bottom: 10px">
          <a-row>
        <a-col :lg="8":sm="24">
          <div style="text-align: center">
            <a style="margin-left: 20px;">类型:</a>
            <a-checkbox-group @change="onChange">
              <a-row>
                <a-col :span="12"><a-checkbox value="A">OTC</a-checkbox></a-col>
                <a-col :span="12"><a-checkbox value="B">OTV</a-checkbox></a-col>
                <a-col :span="12"><a-checkbox value="C">OTV</a-checkbox></a-col>
                <a-col :span="12"><a-checkbox value="D">OTV</a-checkbox></a-col>
              </a-row>
            </a-checkbox-group>
          </div>
        </a-col>
        <!--右边-->
        <a-col :lg="16" :sm="24">
          <div style="text-align: center">
            <a style="margin-left: 20px;">类型:</a>
            <a-checkbox-group @change="onChange">
              <a-row>
                <a-col :span="4"><a-checkbox value="A">全国</a-checkbox></a-col>
                <a-col :span="4"><a-checkbox value="B">北京</a-checkbox></a-col>
                <a-col :span="4"><a-checkbox value="C">上海</a-checkbox></a-col>
                <a-col :span="4"><a-checkbox value="D">浙江</a-checkbox></a-col>
                <a-col :span="4"><a-checkbox value="E">江西</a-checkbox></a-col>
                <a-col :span="4"><a-checkbox value="F">河南</a-checkbox></a-col>
                <a-col :span="4"><a-checkbox value="G">河北</a-checkbox></a-col>
                <a-col :span="4"><a-checkbox value="H">湖南</a-checkbox></a-col>
                <a-col :span="4"><a-checkbox value="I">安徽</a-checkbox></a-col>
                <a-col :span="4"><a-checkbox value="J">山东</a-checkbox></a-col>
                <a-col :span="4"><a-checkbox value="K">江苏</a-checkbox></a-col>
                <a-col :span="4"><a-checkbox value="L">杭州</a-checkbox></a-col>
              </a-row>
            </a-checkbox-group>
          </div>
        </a-col>
          </a-row>
        </div>
      <!--身体-->

      <div style="border-top: 1px solid #E8E8E8">

        <a-row>
          <a-card :bordered=false >
            <!--左边地图-->
            <a-col :lg="16" :sm="24">
              <Facility2 ref="Facility2"></Facility2>
            </a-col>
            <!--右边进度条和圆环-->

            <a-col :lg="8" :sm="24">
              <a-row>
                <!--上边进度条-->
                <a-col>
                  <a-row>
                    <!--标题-->
                    <a-col :span="24" style="margin-left: 35px">
            <span>
              浙江省：OTT总量为3423PM，OTV总量为6545CPM
            </span>
                    </a-col>
                    <!--柱形图-->
                    <a-col :span="24">
                      <v-chart :forceFit="true" :height="height" :data="data">
                        <v-tooltip />
                        <v-axis />
                        <v-legend />
                        <v-stack-bar position="月份*月均降雨量" color="name" />
                      </v-chart>
                    </a-col>
                  </a-row>
                </a-col>
                <a-col>
                  <!--下边圆环-->
                  <Facility1 ref="Facility1"></Facility1>
                </a-col>
              </a-row>

            </a-col>
          </a-card>

        </a-row>
        <div  style="border-top: 1px solid #E8E8E8;margin-top: 20px;padding-top: 20px">
          <!--下面-->
          <a-row>
            <a-col  :lg="6" :sm="24">
              <Facility3 ref="Facility3"></Facility3>
            </a-col>
            <a-col  :lg="6" :sm="24">
              <Facility3 ref="Facility3"></Facility3>
            </a-col>
            <a-col  :lg="6" :sm="24">
              <Facility3 ref="Facility3"></Facility3>
            </a-col>
            <a-col  :lg="6" :sm="24">
              <Facility3 ref="Facility3"></Facility3>
            </a-col>
          </a-row>
        </div>
        </div>
    </a-row>
  </div>
</template>

<script>

import Facility1 from './facilityOne'
import Facility2 from './facilityTwo'
import Facility3 from './facilityThree'
  const DataSet = require('@antv/data-set');

  const sourceData = [
    { name: 'CPM', '杭州.': 18.9, '宁波.': 28.8, '温州.': 39.3, '台州.': 81.4, '绍兴': 47, '湖州.': 20.3, '桂林.': 24, '西安.': 35.6 },
    { name: 'CPMCPM', '杭州.': 12.4, '宁波.': 23.2, '温州.': 34.5, '台州.': 99.7, '绍兴': 52.6, '湖州.': 35.5, '桂林.': 37.4, '西安.': 42.4 },
    { item: '事例一', count: 40 },
    { item: '事例二', count: 21 },
    { item: '事例三', count: 17 },
    { item: '事例四', count: 13 },
    { item: '事例五', count: 9 }
  ];
  const scale = [{
    dataKey: 'percent',
    min: 0,
    formatter: '.0%',
  }];

  const dv = new DataSet.View().source(sourceData);
  dv.transform({
    type: 'fold',
    fields: ['杭州.', '宁波.', '温州.', '台州.', '绍兴', '湖州.', '桂林.', '西安.'],
    key: '月份',
    value: '月均降雨量',
    // type: 'percent',
    field: 'count',
    dimension: 'item',
    as: 'percent'
  });
  const data = dv.rows;

  export default {
    components:{Facility1,Facility2,Facility3},
    onChange (checkedValues) {
      console.log('checked = ', checkedValues)
    },
    data() {
      return {
        data,
        scale,
        height: 400,
        pieStyle: {
          stroke: "#fff",
          lineWidth: 1,
        },
        labelConfig: ['percent', {
          formatter: (val, item) => {
            return item.point.item + ': ' + val;
          }
        }],
      };
    }
  };


</script>




<style scoped>

</style>