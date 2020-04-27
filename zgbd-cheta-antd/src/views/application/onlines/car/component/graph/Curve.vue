<template>
    <div>
      <div>
        <!--<a-select
          :value="value"
          style="width: 15%;margin: 10px 10px 10px 0px"
          :defaultActiveFirstOption="false"
          :showArrow="false"
          :filterOption="true"
          @search="handleSearch"
          @change="handleChange"
          @focus="handleFocus"
          showSearch
          :notFoundContent="null"
          optionFilterProp="children"
        >
          <a-select-option v-for="d in data" :key="d.id">{{d.registrationNo}}</a-select-option>
        </a-select>
        <a-button type="primary" @click="queryData">查询</a-button>-->
      </div>
      <!--{{record}}-->
      <div id="main"style="width: 100%;height:356px;"></div>
    </div>
</template>

<script>
  import { getAction } from '@/api/manage'
  export default {
    name: 'Curve',
    props: {
      record: {
        type: Object,
        default: () => {}
      },
      content: {
        type: Object,
        default: () => ''
      }
    },
    data() {
      return {
        //搜索框车辆
        value: '',
        data : [],
        url:{
          getData:"/application/car/account/getData",
        },

        //图形化报表
        title : '里程与油耗分析(天)',
        lineName : ['油耗','里程'],
        yName : '公里',
        xName :'升',
        timeData : ['1','2','3','4'], //['','','',''],
        feulData : ['0','0','0','0'],
        mileageData : ['0','0','0','0'],
        params : {},
      }
    },
    created(){
      /*this.initCar();*/
      this.init({})
    },
    methods:{
      queryData(){
        var that = this;
        Object.assign(that.params,{carId:that.value})
        that.init(that.params);
      },
      handleChange(value) {
        this.value = value;
      },
      initCar(){
        let that = this;
        getAction(that.url.getData,{pageNo:1,pageSize:100000}).then(res => {
          if (res.success) {
            that.data = [];
            res.result.data.forEach(item =>{
              if(item.registrationNo && item.registrationNo != ''){
                that.data.push({id:item.id,registrationNo:item.registrationNo})
              }
            })
          }
        })
      },
      initSaveDate(params){
        var that = this;
        that.params = params;
        /*Object.assign(that.params,{carId:that.value})*/
        that.init(params);
      },
      init(params){
        var that = this;
        getAction("/application/car/analyze/getAnalyzeFeul",params).then(res =>{
          if(res.success){
            that.timeData = [];
            that.mileageData = [];
            that.feulData = [];
            res.result.forEach(item => {
              that.timeData.push(item.beginDate);
              that.mileageData.push(item.mileage);
              that.feulData.push(item.feul);
            })
            that.drawLine();
          }
        })
      },
      drawLine(){
        var myChart = echarts.init(document.getElementById('main'))
        var that = this;
        var option = {
          title: {
            text: that.title,
            textStyle: {
              align: 'center',
              color: '#fff',
              fontSize: 20,
            },
            top: '3%',
            left: '10%',
          },
          backgroundColor: '#0f375f',
          grid: {
            top: "25%",
            bottom: "10%"
          },
          tooltip: {
            trigger: "axis",
            axisPointer: {
              type: "shadow",
              label: {
                show: true
              }
            }
          },
          legend: {
            data: that.lineName,
            top: "15%",
            textStyle: {
              color: "#ffffff"
            }
          },
          xAxis: {
            data: that.timeData,
            axisLine: {
              show: true //隐藏X轴轴线
            },
            axisTick: {
              show: true //隐藏X轴刻度
            },
            axisLabel: {
              show: true,
              textStyle: {
                color: "#ebf8ac" //X轴文字颜色
              }
            },
            axisLine: {
              lineStyle: {
                color: '#01FCE3'
              }
            },
          },
          yAxis: [{
            type: "value",
            name: that.yName,
            nameTextStyle: {
              color: "#ebf8ac"
            },
            splitLine: {
              show: false
            },
            splitLine: {
              show: false
            },
            axisTick: {
              show: true
            },
            axisLine: {
              show: true
            },
            axisLabel: {
              show: true,
              textStyle: {
                color: "#ebf8ac"
              }
            },
            axisLine: {
              lineStyle: {
                color: '#FFFFFF'
              }
            },
          },
            {
              type: "value",
              name: that.xName,
              nameTextStyle: {
                color: "#ebf8ac"
              },
              position: "right",
              splitLine: {
                show: false
              },
              splitLine: {
                show: false
              },
              axisTick: {
                show: false
              },
              axisLine: {
                show: false
              },
              axisLabel: {
                show: true,
                formatter: "{value} ", //右侧Y轴文字显示
                textStyle: {
                  color: "#ebf8ac"
                }
              }
            },
            {
              type: "value",
              gridIndex: 0,
              min: 50,
              max: 100,
              splitNumber: 8,
              splitLine: {
                show: false
              },
              axisLine: {
                show: false
              },
              axisTick: {
                show: false
              },
              axisLabel: {
                show: false
              },
              splitArea: {
                show: true,
                areaStyle: {
                  color: ["rgba(250,250,250,0.0)", "rgba(250,250,250,0.05)"]
                }
              }
            }
          ],
          series: [{
            name: "油耗",
            type: "line",
            yAxisIndex: 1, //使用的 y 轴的 index，在单个图表实例中存在多个 y轴的时候有用
            smooth: true, //平滑曲线显示
            showAllSymbol: true, //显示所有图形。
            symbol: "circle", //标记的图形为实心圆
            symbolSize: 10, //标记的大小
            itemStyle: {
              //折线拐点标志的样式
              color: "#058cff"
            },
            lineStyle: {
              color: "#058cff"
            },
            areaStyle:{
              color: "rgba(5,140,255, 0.2)"
            },
            data: that.feulData,
          },
            {
              name: "里程",
              type: "line",
              barWidth: 15,
              itemStyle: {
                normal: {
                  color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                    offset: 0,
                    color: "#00FFE3"
                  },
                    {
                      offset: 1,
                      color: "#4693EC"
                    }
                  ])
                }
              },
              data: that.mileageData,
            }
          ]
        };
        myChart.setOption(option)
      },
    }
  }
</script>

<style scoped>

</style>