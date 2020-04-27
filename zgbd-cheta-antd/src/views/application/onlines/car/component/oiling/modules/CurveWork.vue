<template>
  <div id="mainn" style="width: 100%;height:356px;">
  </div>
</template>

<script>
  export default {
    name: 'CLine',
    props: {
      config: {
        type: Array,
        default: () => []
      },
    },
    mounted () {
      this.drawLine();
    },
    data(){
      return{
        data: [],

      }


    },
    methods: {
      drawLine () {
        var myChart = echarts.init(document.getElementById('mainn'))
        var option = {
          title: {
            // text: '今日&昨日',
            // left: '50%',
            // textAlign: 'center'
          },
          tooltip: {
            trigger: 'axis',
            axisPointer: {
              lineStyle: {
                color: '#ddd'
              }
            },
            backgroundColor: 'rgba(255,255,255,1)',
            padding: [5, 10],
            textStyle: {
              // 字体颜色
              color: this.config[0].colorOne,
            },
            extraCssText: 'box-shadow: 0 0 5px rgba(0,0,0,0.3)'
          },
          legend: {
            right: 20,
            // orient: 'vertical',
            data: this.config[0].legendDate
          },
          xAxis: {
            type: 'category',
            // ['11-11','11-12','11-13','11-14','11-15','11-16','11-17']
            data: this.config[0].day,
            boundaryGap: false,
            splitLine: {
              show: true,
              interval: 'auto',
              lineStyle: {
                color: ['#F0FBF8']
              }
            },
            axisTick: {
              show: false
            },
            axisLine: {
              lineStyle: {
                color: '#ffffff'
              }
            },
            axisLabel: {
              margin: 10,
              color:'black',
              textStyle: {
                fontSize: 14
              }
            }
          },
          yAxis: {
            type: 'value',
            splitLine: {
              lineStyle: {
                color: ['rgba(245,246,255,0.5)']
              }
            },
            axisTick: {
              show: false
            },
            axisLine: {
              lineStyle: {
                color: 'rgba(246,247,255,0.5)'
              }
            },
            axisLabel: {
              margin: 10,
              color:'black',
              textStyle: {
                fontSize: 14
              }
            },

          },
          series: [{
            name: this.config[0].legendDate[0],
            type: 'line',
            smooth: true,
            showSymbol: false,
            symbol: 'circle',
            symbolSize: 6,
            // ['1200', '1400', '1008', '1411', '1000', '1118', '1322']
            data: this.config[0].number,
            areaStyle: {
              normal: {
                color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                  offset: 0,
                  color: 'rgba(255,255,255,0)'
                }, {
                  offset: 1,
                  color: 'rgba(255,255,255,0)'
                }], false)
              }
            },
            itemStyle: {
              normal: {
                color: this.config[0].colorTwo,
              }
            },
            lineStyle: {
              normal: {
                width: 3
              }
            }
          }, {
            name: this.config[0].legendDate[1],
            type: 'line',
            smooth: true,
            showSymbol: false,
            symbol: 'circle',
            symbolSize: 6,
            // ['1200', '1400', '808', '811', '626', '488', '1600']
            data:  this.config[0].value,
            areaStyle: {
              normal: {
                color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                  offset: 0,
                  color: 'rgba(255,255,255,0)'
                }, {
                  offset: 1,
                  color: 'rgba(255,255,255,0)'
                }], false)
              }
            },
            itemStyle: {
              normal: {
                color: this.config[0].colorThree,
              }
            },
            lineStyle: {
              normal: {
                width: 3
              }
            }
          }]
        };
        myChart.setOption(option);
      }
    }
  }
  const DataSet = require('@antv/data-set');
</script>

<style scoped>

</style>