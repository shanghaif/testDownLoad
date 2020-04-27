<template>
  <div class="dati">
    <div class="OilCar">
      <span class="OilCarG">油卡管理</span>
      <span  class="OilCarX">
        <a-button type="primary"  @click="showModal">新增油卡</a-button>
      </span>
    </div>
    <div id="main1" style="width: 100%;height:356px;position: relative" class="cheta-flex-center">
    </div>
    <a-row>
      <div class="text-number">
        <a-col span="8">
          <div>
            <span class="text">{{totlaCount}}</span>
            <span class="number">{{config[0].numberOne}}</span>
          </div>
        </a-col>
        <a-col span="8">
          <div>
            <span class="text">{{usable}}</span>
            <span class="number">{{config[0].numberTwo}}</span>
          </div>
        </a-col>
        <a-col span="8">
          <div>
            <span class="text">{{borrow}}</span>
            <span class="number">{{config[0].numberThree}}</span>
          </div>
        </a-col>
        <a-col span="24">
          <div class="jump">
            <a-button type="link" class="apply">用卡申请>></a-button>
            <a-button type="link" class="report"  @click="noticeClick">油卡报表>></a-button>
          </div>
        </a-col>
      </div>
    </a-row>
    <buttonModal ref="button_modal" @submitSuccess="init" :config="config"></buttonModal>
  </div>


</template>

<script>
  import buttonModal from '@/views/application/onlines/car/component/list/button_modules/submitModal'
  import {postAction,getAction} from "@/api/manage";
  import {showSubmitModel} from "@/views/application/onlines/car/api/api.js";
  export default {
    name: 'CLine',
    components:{
      buttonModal
    },
  props: {
    config: {
      type: Array,
    default: () => []
    },
  },
    data() {
      const color = ['type', this.config[0].color];
      return {
        arr:[{value:100,name:'可用'},{value:500,name:'借用'}],
        color,
        url : {
          refuelOperation:"/application/car/vehicle/refuel/insertOrUpdate",
          refuelCount:"/application/car/vehicle/oilcard/getCardCount",
        },
        totlaCount : '',
        usable : '',
        borrow : '',
      };
    },
    created(){
      this.init();
    },
    methods: {
      init(){
        // 打断点取相照应的值
        this.result = [];
        getAction(this.url.refuelCount).then(res => {
          if(res.success){
            let that = this;
            that.totlaCount =  res.result[0].totlaCount;
            that.usable =  res.result[0].usable;
            that.borrow =  res.result[0].borrow;
            that.arr[0].value = res.result[0].usable;
            that.arr[1].value = res.result[0].borrow;
          }
          // debugger
          this.drawLine();
        })
      },
        showModal() {
          showSubmitModel('01924ae6bd434e09837fa2681c612f81').then(item =>{
            item.modal[0].url = "/application/car/vehicle/oilcard/insertOrUpdate"
            item.modal[0].type = "post"
            item.modalDetail.title = "新增油卡"
            this.$refs.button_modal.showButton(item.modal,item.modalDetail,item.index);
          })
      },
      handleOk(e) {
        var that = this;
        that.form.validateFields((err, values) => {
          if (!err) {
            postAction(that.url.refuelOperation, values).then(res => {
              if (res.success) {
                that.$message.success(res.message);
                that.visible = false
              }else {
                that.$message.warning("操作异常");
              }
            })

          }
        });
        console.log(e);
        this.visible = false;
      },
      drawLine () {
        var myChart = echarts.init(document.getElementById('main1'))
        var  colorList= this.config[0].colorList;
        var $this = this;
        var option = {
          title: {
            subtext: this.totlaCount,
            x: 'center',
            y: '43%',
            textStyle: {
              fontSize:16,
              fontWeight:'normal',
              color: ['#333']
            },
            subtextStyle: {
              color: 'black',
              fontSize: 28
            },
          },
          grid: {
            bottom: 150,
            left: 0,
            right: '10%'
          },
          legend: {
            show:false,
            orient: 'vertical',
            top: "middle",
            right: "5%",
            textStyle: {
              color: '#f2f2f2',
              fontSize: 25,
            },
            icon: 'roundRect'
          },
          series: [
            // 主要展示层的
            {
              radius: ['29%', '59%'],
              center: ['50%', '50%'],
              type: 'pie',
              itemStyle: {
                normal: {
                  color: function(params) {
                    return colorList[params.dataIndex]
                  }
                }
              },
              labelLine: {
                normal: {
                  show: true,
                  length: 35,
                  length2: 100,
                  lineStyle: {
                    color: '#d3d3d3'
                  },
                  align: 'right'
                },
                color: "#000",
                emphasis: {
                  show: true
                }
              },
              label:{
                normal:{
                  formatter: function(params){
                    var str = '';
                    var config = $this.config[0];
                    switch(params.name){
                      case '可用':str = '可用' + $this.usable ;break;
                      case '借用':str = '借出' + $this.borrow ;break;
                    }
                    return str
                  },
                  padding: [0, -90],
                  height: 35,
                  rich: {
                    a: {
                      width:38,
                      height:38,
                      lineHeight: 50,

                      align: 'left'
                    },
                    b: {
                      width:29,
                      height:45,
                      lineHeight: 50,
                      align: 'left'
                    },
                    c: {
                      width:34,
                      height:33,
                      lineHeight: 50,

                      align: 'left'
                    },
                    d: {
                      width:34,
                      height:44,
                      lineHeight: 50,
                      align: 'left'
                    },
                    e: {
                      width:38,
                      height:30,
                      lineHeight: 50,
                      align: 'left'
                    },
                    nameStyle: {
                      fontSize: 18,
                      color: "#555",
                      align: 'left'
                    },
                    rate: {
                      fontSize: 20,
                      color: "#1ab4b8",
                      align: 'left'
                    }
                  }
                }
              },
              // data: this.config[0].arr,
              //data: $this.arr
              data: $this.arr
            },
            // 边框的设置
            {
              radius: ['54%', '59%'],
              center: ['50%', '50%'],
              type: 'pie',
              label: {
                normal: {
                  show: false
                },
                emphasis: {
                  show: false
                }
              },
              labelLine: {
                normal: {
                  show: false
                },
                emphasis: {
                  show: false
                }
              },
              animation: false,
              tooltip: {
                show: false
              },
              itemStyle: {
                normal: {
                  color:'rgba(250,250,250,0.5)'
                }
              },
              data: [{
                value: 1,
              }],
            }
          ]
        };
        myChart.setOption(option);
      },
      noticeClick(){
        this.$router.push({ path : '/youkaguanli/12bae2dbd35b4db2899f216cb6da18d9'})
      }
    }
  }
</script>


<style scoped>
  .jump{
    /*padding: 30px 5px;*/
    float: right;
  }
  .apply{
    margin: 10px 0px 10px 8px;
    font-size:14px;
    font-family:Microsoft YaHei;
    font-weight:400;
    /*color:rgba(28,192,159,1);*/
  }
  .report{
    margin: 10px 8px;
    font-size:14px;
    font-family:Microsoft YaHei;
    font-weight:400;
    /*color:rgba(28,192,159,1);*/
  }
  .text{
    margin-top: -12px!important;
  }
  /*#main1{*/
  /*height: 300px!important;*/
  /*}*/
  #main1{
    height: 280px!important;
  }
  #main1 > div > canvas{
    height: 280px!important;
  }
  #main1 > div{
    height: 280px!important;
  }
  .OilCar{
    height: 32px;
    line-height: 32px;
  }
  .OilCarX{
    height: 32px;
    line-height: 32px;
  }
  .dati{
    height: 477px;
    border-radius: 8px;
    box-shadow: 0px 3px 7px 0px rgba(234,234,234,1);
    margin: 15px;
    padding: 20px;
  }
  .OilCarX{
    float: right;
  }
  .OilCarG{
    font-size:18px;
    font-family:Microsoft YaHei;
    font-weight:400;
    color:rgba(51,51,51,1);
    height: 32px
  }
  .text-number{
    width: 100%;
    text-align: center;
  }
  .text-number div{
    display: inline-block;
    text-align: center;
  }
  .text{
    display: block;
    font-size:26px;
    font-family:Arial;
    font-weight:bold;
    color:rgba(51,51,51,1);
    line-height:40px;
    margin: 0px 40px 5px 40px;
  }
  .number{
    margin-top: -12px!important;
    height: 45px;
    line-height: 45px;
    display: block;
    font-size:16px;
    font-family:Microsoft YaHei;
    font-weight:400;
    color:rgba(102,102,102,1);
    /*margin: 5px;*/
  }

</style>