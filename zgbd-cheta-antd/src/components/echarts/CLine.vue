<template>
  <div id="main" style="width: 100%;height:356px" class="cheta-flex-center">
  </div>
</template>

<script>
  export default {
    name: 'CLine',
    mounted () {
      this.drawLine();
    },
    methods: {
      drawLine () {
        var myChart = echarts.init(document.getElementById('main'))
        var option = {
          grid: {
            top: '18%',
            left: '1%',
            right: '1%',
            bottom: '25%',
            // containLabel: true
          },
          backgroundColor: '#fff',
          tooltip: {
            trigger: 'axis',
            axisPointer: {
              lineStyle: {
                color: {
                  type: 'linear',
                  x: 0,
                  y: 0,
                  x2: 0,
                  y2: 1,
                  colorStops: [{
                    offset: 0,
                    color: 'rgba(255,255,255,0)' // 0% 处的颜色
                  }, {
                    offset: 0.5,
                    color: 'rgba(255,255,255,1)' // 100% 处的颜色
                  }, {
                    offset: 1,
                    color: 'rgba(255,255,255,0)' // 100% 处的颜色
                  }],
                  global: false // 缺省为 false
                }
              },
            },
          },
          xAxis: [{
            type: 'category',
            boundaryGap: true,
            axisLine: { //坐标轴轴线相关设置。数学上的x轴
              show: true,
              lineStyle: {
                color: '#FFFFFF'
              },
            },
            axisLabel: { //坐标轴刻度标签的相关设置
              textStyle: {
                color: '#d1e6eb',
                margin: 15,
              },
            },
            axisTick: {
              show: false,
            },
            data: ['2014', '2015', '2016', '2017', '2018', '2019'],
          }],
          yAxis: [{
            type: 'value',
            min: 0,
            // max: 140,
            // #1890ff
            splitNumber: 4,
            splitLine: {
              show: true,
              lineStyle: {
                color: '#D0E8FF'
              }
            },
            axisLine: {
              show: false,
            },
            axisLabel: {
              show: false,
              margin: 20,
              textStyle: {
                color: '#d1e6eb',

              },
            },
            axisTick: {
              show: false,
            },
          }],
          series: [{
            name: '注册总量',
            type: 'line',
            // smooth: true, //是否平滑曲线显示
            symbol:'circle',  // 默认是空心圆（中间是白色的），改成实心圆
            showAllSymbol: true,
            symbolSize: 8,
            lineStyle: {
              normal: {
                color: '#1890ff', // 线条颜色
              },
              borderColor: '#1890ff'
            },
            label: {
              show: true,
              position: 'top',
              textStyle: {
                color: '#fff',
              }
            },
            itemStyle: {
              normal: {
                color: '#1890ff',
              }
            },
            tooltip: {
              show: false
            },
            areaStyle: { //区域填充样式
              normal: {
                //线性渐变，前4个参数分别是x0,y0,x2,y2(范围0~1);相当于图形包围盒中的百分比。如果最后一个参数是‘true’，则该四个值是绝对像素位置。
                color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                  offset: 0,
                  color: '#D0E8FF'
                },
                  {
                    offset: 1,
                    color: '#D0E8FF'
                  }
                ], false),
              }
            },
            data: [150, 200, 259, 360, 378, 450, 450]
          }]
        }

        myChart.setOption(option);
      }
    }
  }
</script>

<style scoped>

</style>