<template>
  <div class="dati">
    <!--调度  人员-->
    <a-row>
      <a-col span="12"><!--第一行-->
        <div class="topLeft">
          <h3>{{ config.title }}</h3>
        </div>
      </a-col>
      <a-col span="12">
        <div class="listButton">
          <a-button class="listButtonLeft"><a-icon type="left" /></a-button>
          <a-button class="listButtonRight"><a-icon type="right" /></a-button>
        </div>
      </a-col>
      <a-col span="6"><!--内容-->
        <div class="body">
          <a-row>
            <a-col span="24">
              <div class="bodyLeft">
                <div class="bodyLeftDay">{{ config.sum1 }}</div>
                <div class="bodyLeftText">{{ config.title1 }}</div>
              </div>
            </a-col>
            <a-col span="24">
              <div class="bodyLeft">
                <div class="bodyLeftDay">{{ config.sum2 }}</div>
                <div class="bodyLeftText">{{ config.title2 }}</div>
              </div>
            </a-col>
            <a-col span="24">
              <div class="topRight bodyLeft">
                <span class="topRightText">休息日：</span><a-icon type="coffee" class="cheta-color"/>
                <span class="topRightDay cheta-color">{{config.holiday}}</span>
                <span class="topRightText">天</span>
              </div>
            </a-col>
          </a-row>
        </div>
      </a-col>
      <a-col span="18">
        <!--曲线组件-->
          <div class="curve" :id="key"></div>
      </a-col>
    </a-row>

  </div>
</template>

<script>
  import {getAction} from "@/api/manage";

  export default {
    name: 'schedulingPersonnel',
    data(){
      return{
        data: [],
        key: Math.random(),
      }
    },
    props: {
      config: {
        type: Object,
        default: () => {
          return {
            title: '人员出勤统计',
            sum1: 28,
            holiday: 8,
            title1: '总出勤天数',
            sum2: 100,
            title2: '日均出勤人员',
            seriesName : '出勤人员(人)',
            peapleData : [40, 25, 60, 15, 25, 20, 55],
            dateData : ['7-1','7-2','7-3','7-4','7-5','7-6','7-7'],
            charts: {deepColor: 'rgba(55,138,255,1)', fadeColor: 'rgba(55,138,255,0.2)'}
          }
        }
      }
    },
    mounted (){
      this.drawLine();
    },
      methods: {
        drawLine () {
          var that = this;
          var myChart = echarts.init(document.getElementById(this.key))
          var option = {
            backgroundColor: '#ffffff',
            tooltip: {
              trigger: 'axis',
              axisPointer: {
                lineStyle: {//鼠标悬浮 线的样式
                  color: that.config.charts.deepColor,
                  opacity:0.5
                }
              }
            },
            legend: {
              icon: 'rect',
              itemWidth: 14,
              itemHeight: 5,
              itemGap: 13,
              data: ['出勤人员', ],
              right: '4%',
              symbolSize: 5,//点点
              textStyle: {
                fontSize: 12,
                color: '#ccc'
              }
            },
            grid: {
              left: '7%',
              right: '3%',
              bottom: '1%',
              top:"18%",
              containLabel: true
            },
            xAxis: [{
              type: 'category',
              boundaryGap: false,
              axisLine: {
                lineStyle: {
                  width: 0,
                  color: 'rgb(153,153,153,1)'
                }
              },
              data: that.config.dateData,
            }],
            yAxis: [{
              type: 'value',
              name: that.config.seriesName,
              axisTick: {
                show: false
              },
              axisLine: {
                lineStyle: {
                  width: 0,
                  color: 'rgb(153,153,153,1)'
                }
              },
              axisLabel: {
                margin: 5,
                textStyle: {
                  fontSize: 12
                }
              },
              splitLine: {
                lineStyle: {
                  color: 'rgba(153,153,153,0.1)'
                }
              }
            }],
            series: [ {
              name: that.config.seriesName,
              type: 'line',
              smooth: true,
              symbol: 'circle',
              symbolSize: 5,
              showSymbol: false,
              lineStyle: {
                normal: {
                  width: 2
                }
              },
              areaStyle: {
                normal: {
                  color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                    offset: 0,
                    color: that.config.charts.fadeColor
                  }, {
                    offset: 1,
                    color: that.config.charts.fadeColor
                  }], false),
                  shadowColor: 'rgba(0, 0, 0, 0.1)',
                  shadowBlur: 10
                },
              },
              itemStyle: {
                normal: {
                  color: new echarts.graphic.LinearGradient(0, 0, 1, 0, [{
                    offset: 0,
                    color: that.config.charts.deepColor
                  }, {
                    offset: 1,
                    color: that.config.charts.deepColor
                  }])
                },
                emphasis: {
                  color: that.config.charts.deepColor,
                  borderColor: 'rgba(255,255,255,0.5)',
                  extraCssText: 'box-shadow: 8px 8px 8px rgba(0, 0, 0, 1);',
                  borderWidth: 20
                }
              },
              data: that.config.peapleData
            }  ]
          };
          myChart.setOption(option);



        }
      }

  }
  const DataSet = require('@antv/data-set');
</script>

<style lang="less" scoped>
  .dati{
    padding: 20px;
  }
  .topLeft{
    height: 30px;
    line-height: 30px;
    font-size:18px;
    font-family:Microsoft YaHei;
    color:rgba(51,51,51,1);
  }
  .topRightText{
    font-size:12px;
    font-family:Microsoft YaHei;
    color:rgba(102,102,102,1);
  }
  .topRight{
    float: right;
    height: 50px;
    line-height: 50px;
  }
  .topRightDay{
    height: 30px;
    line-height: 30px;
    padding: 2px;
    font-size:32px;
    font-family:Microsoft YaHei;
    color:rgba(28,192,159,1);
  }
  .body{
    padding: 10px 10px;
  }
  .bodyLeft{
    padding: 8px 0;
  }
  .bodyLeftDay{
    height: 35px;
    line-height: 35px;
    text-align: center;
    font-size:32px;
    font-family:Arial;
    font-weight:bold;
    color:rgba(51,51,51,1);
  }
  .bodyLeftText{
    text-align: center;
    font-size:14px;
    font-family:Microsoft YaHei;
    color:rgba(153,153,153,1);
  }
  .curve{
    width: 100%!important;
    height: 200px!important;
    padding: 25px 0px 0px 10px;
  }
  .listButton{
    float: right;
  }
  .listButtonLeft{
    height: 30px;
  }
  .listButtonRight{
    margin: 0 8px;
    height: 30px;
  }

</style>
<style scoped>
  .ant-btn{
    padding: 0px 8px;
  }
</style>