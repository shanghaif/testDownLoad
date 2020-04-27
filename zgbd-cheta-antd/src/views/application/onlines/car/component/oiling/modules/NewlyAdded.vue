<template>
<div class="dati">
<a-row>
  <!--按钮-->
  <a-col span="12">
    <span class="buttonOne">
      <a-button type="primary"  @click="showModal">新增记录</a-button>
      <!--给modal对话框-->
        <a-form class="cheta-form" :form="form" :layout="formLayout" @submit="handleOk">
          <a-modal title="新增记录" width="800px"  v-model="visible" @ok="handleOk">
          </a-modal>
        </a-form>
    </span>
    <span class="buttonTwo">
       <a-button type="link"  @click="noticeClick">加油报表>></a-button>
    </span>
  </a-col>
  <!--选择-->
  <a-col span="12">
    <div class="buttonSelect">
        <a-button @click="FlipLeft" class="FlipLeft" :disabled="false"> <a-icon type="left" /> </a-button>
        <a-button @click="FlipRight" class="FlipRight" :disabled="true"> <a-icon type="right" /> </a-button>
    </div>
  </a-col>

  <!--<a-col span="12">-->
    <!--给了隐藏-->
    <div class="select">
      <a-radio-group :defaultValue="url.refuelRefuelingIcon" @change="DateChange">
        <a-radio-button :value="url.refuelRefuelingIcon">日</a-radio-button>
        <a-radio-button :value="url.refuelRefuelingMouth">月</a-radio-button>
      </a-radio-group>
    </div>
  <!--</a-col>-->
  <a-col span="12">
    <span class="titleOne">金额趋势统计(￥/元)</span>
  </a-col>
  <!--金额趋势-->
  <a-col span="12">
    <span class="titleTwo">加油量统计(L/升)</span>
  </a-col>
  <!--图-->
  <a-col span="24">
    <div id="main" style="width: 100%;height:356px;">
    </div>
  </a-col>
</a-row>

  <buttonModal ref="button_modal" :config="config"></buttonModal>
</div>
</template>

<script>
  import moment from 'moment'
  import buttonModal from '@/views/application/onlines/car/component/list/button_modules/submitModal'
  import {postAction,getAction} from '@/api/manage'
  export default {
    name: 'NewlyAdded',
    data(){
      return{
        beginTime : {}
      }
    },
    components:{
      buttonModal
    },
    props: {
      config: {
        type: Array,
        default: () => []
      },
      finalSingleValue: {
        type: String,
        default: () => ''
      }
    },
    watch: {
      //监听方法 刷新数据
      'finalSingleValue': function(value) {
        this.dateType = value.type;
        if(value.type === 'day'){
          this.beginTime = {startTime:value.entTime,entTime:value.startTime,dayOrMonth:value.type,organId:value.organId}
        }else{
          this.beginTime = {startTime:value.startTime,entTime:value.entTime,dayOrMonth:value.type,organId:value.organId}
        }
        this.organId = {organId:this.beginTime.organId}
        this.init(this.beginTime)
      }
    },
    created(){
      this.init({dayOrMonth:'month'})
    },
    data() {
      return {
        organId : {},
        temp : {},
        ifDay:{},
        tempTime : [],
        startTime:[],//查询的天数
        type:'',//0上一周  1下一周
        dayOrMonth:'',//查询方法
        day:'',//查询天数
        month:'',//查询月份
        dateType:'month',//查询月份
        times :[],
        card:[],
        cash:[],
        count:[],
        url : {
          refuelOperation:'/application/car/vehicle/refuel/insertOrUpdate',
          refuelRefuelingIcon:'/application/car/vehicle/refuel/getStatisticDay',
          refuelRefuelingMouth:'/application/car/vehicle/refuel/getStatisticMouth',
          getStatisticDayOrMonth:'/application/car/vehicle/refuel/getStatisticDayOrMonth'
        },
        visible:false,
        size: '1',
        data: []
      }
    },
    beforeCreate() {
      this.form = this.$form.createForm(this, { name: 'validate_other' })
    },
    methods: {
      moment,
      init(params){
        // 打断点取相照应的值
        var that = this
        Object.assign(params,that.organId)
        that.temp = params || {dayOrMonth : 'month'};
        getAction(that.url.getStatisticDayOrMonth,params).then(res => {
          if(res.success){
            that.times = [] ,that.card = [] ,that.cash = [] ,that.count = [],that.tempTime = [],that.params = [];
            res.result.forEach(item =>{
              that.tempTime.push(item.refuelTime)
              if(that.temp.dayOrMonth === 'day'){
                that.times.push(that.moment(item.refuelTime).format('MM/DD'));
              }else{
                that.times.push(that.moment(item.refuelTime).format('YYYY/MM'));
              }
              that.card.push(item.refuelPrice)
              that.cash.push(item.cashPrice)
              that.count.push(item.refuelCount)
            })
          }
          this.drawLine()
        })
      },
      handleSubmit(e) {
        e.preventDefault()
        this.form.validateFields((err, values) => {
          if (!err) {
            console.log('Received values of form: ', values)
          }
        })
      },
      normFile(e) {
        console.log('Upload event:', e)
        if (Array.isArray(e)) {
          return e
        }
        return e && e.fileList
      },
      showModal() {
        getAction('application/online/component/getComponentsById', {projectId: '223dbcb302c04855891b0eb2c5c810d4'}).then(res => {
          let modal = [
            {
              name: res.result[0].name,
              data: JSON.parse(res.result[0].data),
              type: 'post',
              url: '/application/car/vehicle/refuel/insertOrUpdate'
            }
          ]
          let modalDetail = {
            title: '新增记录',
            okText : '确认',
            cancelText : '取消'
          }
          this.$refs.button_modal.showButton(modal,modalDetail,0)
        })
      },
      handleOk(e) {
        var that = this
        that.form.validateFields((err, values) => {
          if (!err) {
            postAction(that.url.refuelOperation, values).then(res => {
              if (res.success == true) {
                that.$message.success(res.message)
                that.visible = false
              }else {
                that.$message.warning('操作异常')
              }
            })

          }
        })
        console.log(e)
        this.visible = false
      },
      noticeClick(){
        this.$router.push({ path : '/xinzengjilu/b85c85a98edb4142bd9e5d8ef4a55ffe/b85c85a98edb4142bd9e5d8ef4a55ffe'})
      },
      DateChange(e) {
        this.init(e.target.value)
      },
      drawLine () {
        var myChart = echarts.init(document.getElementById('main'))
        var that = this
        var option = {
          title: {

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
              color: this.config[0].colorOne
            },
            extraCssText: 'box-shadow: 0 0 5px rgba(0,0,0,0.3)'
          },
          legend: {
            left: '40%',
            textAlign: 'center',
            data: this.config[0].legendDate
          },
          xAxis: {
            type: 'category',
            data: that.times,
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
          yAxis: [{
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
            }

          },{
            type: 'value',
            splitLine: {
              lineStyle: {
                color: ['#ffffff']
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

          }],
          series: [{
            name: this.config[0].legendDate[0],
            type: 'line',
            smooth: true,
            showSymbol: false,
            symbol: 'circle',
            symbolSize: 6,
            data: that.card,
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
                color: this.config[0].colorTwo
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
            data:  that.cash,
            areaStyle: {
              normal: {
                color: new echarts.graphic.LinearGradient(0,0,0, 1, [{
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
                color: this.config[0].colorThree
              }
            },
            lineStyle: {
              normal: {
                width: 3
              }
            }
          },{
            yAxisIndex: 1,
            name: this.config[0].legendDate[2],
            type: 'line',
            smooth: true,
            showSymbol: false,
            symbol: 'circle',
            symbolSize: 6,
            data: that.count,
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
                color: this.config[0].colorFour
              }
            },
            lineStyle: {
              normal: {
                width: 3
              }
            }
          }]
        }
        myChart.setOption(option)
      },
      FlipLeft(){
        $('.FlipRight').css({color:'#595959',border:'1px solid #D9D9D9',cursor:'pointer'}).attr('disabled',false)
        $('.FlipLeft').css({color:'#3fccab',border:'1px solid #3fccab',cursor:'pointer'}).attr('disabled',false)
        let flag = 0;
        if(this.dateType === "month" ){//判断是日或月
          this.init({startTime:this.tempTime[0],type:flag,dayOrMonth:'month'});
        }else{
          if(this.tempTime[0] > this.beginTime.entTime === true){
            this.init({startTime:this.tempTime[0],type:flag,dayOrMonth:'day'});
          }else{
            $('.FlipLeft').css({color:'#595959',border:'1px solid #D9D9D9',cursor:'pointer'}).attr('disabled',true)
            $('.FlipRight').css({color:'#3fccab',border:'1px solid #3fccab',cursor:'pointer'}).attr('disabled',false)
          }
        }
      },
      FlipRight(){
        $('.FlipRight').css({color:'#3fccab',border:'1px solid #3fccab',cursor:'pointer'}).attr('disabled',false)
        $('.FlipLeft').css({color:'#595959',border:'1px solid #D9D9D9',cursor:'pointer'}).attr('disabled',false)
        let flag = 1;
        if(this.dateType === "month" ){//判断是日或月
            if(this.moment(new Date()).format('YYYY-MM-01') === this.tempTime[this.tempTime.length - 1]  ){ // 当前日期等于翻页的最后一条
              $('.FlipRight').css({color:'#595959',border:'1px solid #D9D9D9',cursor:'pointer'}).attr('disabled',true)
              $('.FlipLeft').css({color:'#3fccab',border:'1px solid #3fccab',cursor:'pointer'}).attr('disabled',false)
            } else {
              this.init({ startTime: this.tempTime[this.tempTime.length - 1], type: flag, dayOrMonth: 'month' });
            }
        }else {// 获取右边数据   前7天
          if (this.tempTime[this.tempTime.length - 1] < this.beginTime.startTime === true) {
            this.init({ startTime: this.tempTime[this.tempTime.length - 1], type: flag, dayOrMonth: 'day' });
          } else {
            $('.FlipLeft').css({
              color: '#3fccab',
              border: '1px solid #3fccab',
              cursor: 'pointer'
            }).attr('disabled', false)
            $('.FlipRight').css({
              color: '#595959',
              border: '1px solid #D9D9D9',
              cursor: 'pointer'
            }).attr('disabled', true)
          }
        }
      },
      },
    }
  const DataSet = require('@antv/data-set')
</script>


<style scoped>
  body > div:nth-child(9) > div > div.ant-modal-wrap > div > div.ant-modal-content > div.ant-modal-body > div > div > div > div{
    margin: 10px  0px!important;


  }
  /*body > div:nth-child(9) > div > div.ant-modal-wrap > div > div.ant-modal-content > div.ant-modal-body > div > div > div:nth-child(1) > div div{*/
    /*display: inline-block;*/
    /*height: 40px;*/
    /*width: 100%;*/
  /*}*/
  ant-form-item-control-wrapper{
    display: inline-block;
  }
  body > div:nth-child(9) > div > div.ant-modal-wrap > div{
    width: 800px;
  }
   body > div:nth-child(10) > div > div.ant-modal-wrap > div > div.ant-modal-content > div.ant-modal-body > div > div > div:nth-child(1) > div
  ,body > div:nth-child(10) > div > div.ant-modal-wrap > div > div.ant-modal-content > div.ant-modal-body > div > div > div:nth-child(2) > div
  ,body > div:nth-child(10) > div > div.ant-modal-wrap > div > div.ant-modal-content > div.ant-modal-body > div > div > div:nth-child(3) > div
  ,body > div:nth-child(10) > div > div.ant-modal-wrap > div > div.ant-modal-content > div.ant-modal-body > div > div > div:nth-child(4) > div
  ,body > div:nth-child(10) > div > div.ant-modal-wrap > div > div.ant-modal-content > div.ant-modal-body > div > div > div:nth-child(5) > div
  ,body > div:nth-child(10) > div > div.ant-modal-wrap > div > div.ant-modal-content > div.ant-modal-body > div > div > div:nth-child(6) > div
  ,body > div:nth-child(10) > div > div.ant-modal-wrap > div > div.ant-modal-content > div.ant-modal-body > div > div > div:nth-child(7) > div
  ,body > div:nth-child(10) > div > div.ant-modal-wrap > div > div.ant-modal-content > div.ant-modal-body > div > div > div:nth-child(8) > div
  ,body > div:nth-child(10) > div > div.ant-modal-wrap > div > div.ant-modal-content > div.ant-modal-body > div > div > div:nth-child(9) > div{
    margin: 10px  0px!important;
  }

  .modeltitle{
    color: rgba(0, 0, 0, 0.85);
    float: right;
    margin-right: 10px;
  }

  .dati{
    height: 477px;
    border-radius: 8px;
    box-shadow: 0px 3px 7px 0px rgba(234,234,234,1);
    margin: 15px;
    padding: 20px;
  }
  .buttonOne{
    display: inline-block;
  }
  .buttonTwo{
    display: inline-block;
    margin-left: 15px;
  }
  .buttonSelect{
    float: right;
  }
  .FlipLeft{
    cursor: pointer;
  }
  .FlipRight{
    cursor: pointer;
  }
  .select{
    display: none;
    float: right;
  }
  .titleOne{
    font-size:16px;
    font-family:Microsoft YaHei;
    font-weight:400;
    color:rgba(102,102,102,1);
    line-height: 34px;
  }
  .titleTwo{
    float: right;
    font-size:16px;
    font-family:Microsoft YaHei;
    font-weight:400;
    color:rgba(102,102,102,1);
    line-height: 34px;
  }
  .FlipLeft{
    border-radius: 4px 0px 0px 4px;
    color: #3fccab;
    border-color: #3fccab;
  }
  .FlipRight{
    border-radius: 0px 4px 4px 0px;
  }
</style>