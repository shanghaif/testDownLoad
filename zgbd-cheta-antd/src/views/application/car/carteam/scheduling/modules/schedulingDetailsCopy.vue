<template>
  <div class="dati">
    <!--调度  详情-->
    <a-row>
      <a-col span="11">
        <div class="body">
          <div class="bodyLeftNumber">
            {{config.num}}
          </div>
          <div class="bodyLeftText">
            {{config.title}}
          </div>
        </div>
      </a-col>
      <a-col span="13">
        <!--详情组件-->
        <div class="details" :id="key"></div>
      </a-col>
    </a-row>
  </div>
</template>

<script>
  export default {
    name: 'schedulingDetailsCopy',
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
            title: '出勤车辆(辆)',
            num: 124,
            value : 75
          }
        }
      }
    },
    mounted (){
      this.drawLine();
    },
    methods: {
      drawLine () {
        var myChart = echarts.init(document.getElementById(this.key))
        var giftImageUrl = "/image/scheduling/schedulingCar.png"
        var dataStyle = {
          normal: {
            label: {
              show: false
            },
            labelLine: {
              show: false
            },
            shadowBlur: 0,
            shadowColor: '#203665'
          }
        };
        var option = {
          graphic: {
            elements: [{
              type: 'image',
              style: {
                image: giftImageUrl,
                width: 24,
                height: 24,

              },
              left: 'center',
              top: 'center'
            }]
          },
          backgroundColor: "#red",
          series: [{
            name: '第三个圆环',
            type: 'pie',
            clockWise: false,
            radius: [31, 35],
            itemStyle: dataStyle,
            hoverAnimation: false,
            // center: ['85%', '50%'],
            data: [{
              value: this.config.value,
              label: {
                normal: {
                  rich: {
                    a: {
                      color: '#603dd0',
                      align: 'center',
                      fontSize: 20,
                      fontWeight: "bold"
                    },
                    b: {
                      color: '#fff',
                      align: 'center',
                      fontSize: 16
                    }
                  },
                  // formatter: function(params) {
                  // return "{b|缺报统计}\n\n"+"{a|"+params.value+"个}"+"\n\n{b|增长2%}";
                  // },
                  position: 'center',
                  show: true,
                  textStyle: {
                    fontSize: '14',
                    fontWeight: 'normal',
                    color: '#fff'
                  }
                }
              },
              itemStyle: {
                normal: {
                  color: '#41C992',
                  shadowColor: '#613fd1',
                  shadowBlur: 0
                }
              }
            }, {
              value: 25,
              name: 'invisible',
              itemStyle: {
                normal: {
                  color: '#E1E2E4'
                },
                emphasis: {
                  color: '#E1E2E4'
                }
              }
            }]
          }]
        };
        myChart.setOption(option);
      }
    },
  }
  const DataSet = require('@antv/data-set');
</script>

<style scoped>
  .dati{
    margin: 12px 0px;
    padding: 12px;
    border:1px solid rgba(232,232,232,1);
    border-radius:8px;
  }
  .top{
    float: right;
  }
  .topLeftIcon{
    color: #41C992;
  }
  .bodyLeftNumber{
    font-size:36px;
    font-family:Arial;
    font-weight:bold;
    color:rgba(51,51,51,1);
  }
  .bodyLeftText{
    font-size:14px;
    font-family:Microsoft YaHei;
    color:rgba(153,153,153,1);
    height: 23px;
  }



  .details{
    width: 140px!important;
    height: 140px!important;
    position: absolute;
    margin-top: -25px;
  }
</style>