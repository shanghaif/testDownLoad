<template>
    <div class="dati">
      <div  class="cheta-title">
        <span>{{config[0].titleOne}}</span>
        <a href="#">{{config[0].titleTwo}}<a-icon type="double-right" /></a>
      </div>
      <div  class="number">{{config[0].titleThree}}</div>
      <!--图-->
      <div>
        <div>
          <v-chart
            :forceFit="true"
            height="310"
            :data="data"
            :scale="scale"
            :padding="[20, 100, 50, 30]"
          >
            <v-tooltip :crosshairs="crosshairs"></v-tooltip>
            <v-legend :attachLast="true"></v-legend>
            <v-line position="year*value" :color="color" :size="2.5" shape="smooth"></v-line>
            <v-area position="year*range" color="#ffffff" :opacity="0.3" shape="smooth"></v-area>
            <v-axis
              dataKey="year"
              :label="label"
            >
            </v-axis>
            <v-axis
              dataKey="value"
              :label="label"
            >
            </v-axis>
            <v-guide
              type="regionFilter"
              :top="true"
              :start="[1820, 'min']"
              :end="[1700, 'max']"
              :color="config[0].bgcolor"
              :apply="['area']"
            >
            </v-guide>
            <v-guide
              type="regionFilter"
              :top="true"
              :start="[1700, 'min']"
              :end="[1820, 'max']"
              :color="config[0].bgcolor"
              :apply="['area']"
            >
            </v-guide>

            <v-guide
              type="text"
              :top="true"
              :position="[1730, 80]"
              :v-style="style2"
              :lineLength="20"
            >
            </v-guide>

            <v-guide
              type="text"
              :top="true"
              :position="[1765, 110]"
              :v-style="style2"
              :lineLength="20"
            >
            </v-guide>

          </v-chart>
        </div>
      </div>
      <div class="cheta-up">
        <a-icon class="up-icon" theme="filled" type="exclamation-circle" />
        <span>{{config[0].titleFour}}</span>
      </div>
    </div>
</template>

<script>
  export default {
    props: {
      config: {
        type: Array,
        default: () => []
      }
    },
    name: 'ViolationSonFour',
    mounted(){

    },
    methods:{

    },
    created(){
      const data = this.config[0].data;
      data.forEach(item => item.year = parseInt(item.year));
      data.forEach(item => item.exports = parseInt(item.exports));
      data.forEach(item => item.imports = parseInt(item.imports));
      const ds = new DataSet();
      const dv = ds.createView().source(data);
      dv.transform({
        type: 'map',
        callback: function callback(row) {
          row.range = [row.exports, row.imports];
          return row;
        }
      });
      dv.transform({
        type: 'fold',
        fields: ['exports', 'imports'],
        key: 'type',
        value: 'value'
      });
      this.data = dv.rows;


    },

    data() {
      const color = ['type', this.config[0].color];
      return {
        data: [],
        label,
        style,
        style2,
        scale,
        crosshairs,
        color,
      };
    }
  };
  const DataSet = require('@antv/data-set');

  const label = {
    textStyle: {
      fill: '#aaaaaa'
    }
  }

  const crosshairs = {
    type: 'line'
  }

  const style = {
    text: {
      textAlign: 'left',
      fontSize: 12
    },
    point: {
      stroke: '#FF4D4F'
    }
  }

  const style2 = {
    fontSize: 14,
    fontWeight: 'normal',
    fill: 'rgba(0,0,0,0.45)'
  }

  const scale = [{
    dataKey:'value',
    min: 0,
    max: 1000
  },{
    dataKey:'range',
    min: 0,
    max: 1000
  }];


</script>

<style scoped>

  .dati{
    margin: 10px;
    height: 527px;
    padding: 30px;
    box-shadow:0px 0px 5px 0px rgba(204,204,204,0.5);
    border-radius:3px;
  }
.cheta-title span{
  font-size:16px;
  font-family:Microsoft YaHei;
  font-weight:bold;
  color:rgba(51,51,51,1);
}
  .cheta-title a{
    float: right;
    font-size:14px;
    font-family:Microsoft YaHei;
    font-weight:400;
  }
  .number{
    padding: 5px 0;
    font-size:48px;
    font-family:Arial;
    font-weight:bold;
    color:rgba(51,51,51,1);
  }
  .cheta-up span{
    padding: 0 10px;
    font-size:14px;
    font-family:Microsoft YaHei;
    font-weight:400;
    color:rgba(153,153,153,1);
  }
  .cheta-up{
    margin: 15px 0;
  }
  .up-icon{
    color: #F2E400;
    font-size: 16px;
  }
</style>
<style>
  element.style {
    width: 483.328px;
    height: 320px;
    cursor: default;
  }
</style>