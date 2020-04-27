<template>
  <div class="chetaDati">
    <div class="home">
      <!--明细-->
      <div class="homeTop">
              <span class="homeTopLeft">
                <a-radio-group :defaultValue="monthOrYear" @change="handleSizeChange">
                  <a-radio-button value="month">月度</a-radio-button>
                  <a-radio-button value="year">年度</a-radio-button>
                </a-radio-group>
              </span>
        <div class="homeTopCalendar">
          <span class="homeTopLeft homeTopLeftMonthly" v-if="homeTopLeftSelect">
            <a-month-picker @change="onChangeMonthTime" :format="dateFormatMonthly" placeholder="请选择月份"/>
          </span>
          <span class="homeTopLeft homeTopLeftYears" v-else>
            <a-month-picker
              @change="onChangeYearTime" :format="dateFormatYears" placeholder="请选择年份"/>
          </span>
        </div>
        <span class="homeTopLeft">
              <span class="homeTopLeftText">费用金额 </span>≥
              <a-input-number
                v-model="changedNumber"
                style="width: 100px;"
                :formatter="value => `$ ${value}`.replace(/\B(?=(\d{3})+(?!\d))/g, ',')"
                :parser="value => value.replace(/\$\s?|(,*)/g, '')"
                @change="onChangenumber"/></span>
        <span class="homeTopLeft"> <a-input placeholder="请输入关键字搜索" v-model="vague" style="width: 200px"/> </span>
        <!--<span>  <a-button type="primary">查询</a-button> </span>-->
        <span class="homeTopLeft"> <a-button type="primary" @click="detailsQuery">查询</a-button> </span>
      </div>
      <div>
        <!--cheta-table-->
        <a-tabs defaultActiveKey="1" @change="callback">
          <a-tab-pane tab="大区报表" key="1"></a-tab-pane>
          <a-tab-pane tab="项目报表" key="2" forceRender></a-tab-pane>
          <a-button type="link" style="border: 1px solid #ffffff;" slot="tabBarExtraContent">单位：元</a-button>
        </a-tabs>
      </div>
    </div>
  </div>
</template>

<script>
  const renderContent = (value, row, index) => {
    const obj = {
      children: value,
      attrs: {}
    }
    if (index === 4) {
      obj.attrs.colSpan = 0
    }
    return obj
  }

  import formMixin from '@/views/application/onlines/car/data/list/modules/config/component.js'
  import { reportColumns } from '../../../../firm/report/api/api'
  import Confirm from '../../../../firm/report/system/Confirm'
  import { getAction } from '@/api/manage'
  import moment from 'moment'
  import { getRowSpanCount } from '@/views/application/onlines/car/api/table.js'
  import IframePageView from '@/components/layouts/IframePageView'

  export default {
    name: 'costDetails',
    components: {
      Confirm,
      IframePageView,
      formMixin

    },
    data() {
      return {
        month: '',
        year: '',
        vague: '',//模糊查询
        changedNumber: '4500',//查询费用金额
        checked: true,
        homeTopLeftSelect: true,
        dateFormatYears: 'YYYY',
        dateFormatMonthly: 'YYYY/MM',
        monthOrYear: 'month',
        size: 'default',
        iframeUrl: '',
        bordered: false,
        countNo: 0,
        value: '',
        carData: [],
        vales: {},
        valesList: [],
        urlCar: {
          getData: '/application/car/account/getData',
          reportDetail: '/application/car/report/excel'
        },

        datePicker: [this.moment().subtract(7, 'days'), this.moment()],
        selectParams: [
          { name: '本周', key: 1 },
          { name: '本月', key: 2 },
          { name: '上月', key: 3 }
        ],
        typeList: [
          { name: '车务报表', key: 1 },
          { name: '维修报表', key: 1 },
          { name: '登记报表', key: 1 }
        ],
        columns: [],
        data: [],
        disabled: false,
        spinning: false,
        param: this.$route.params,
        name: this.$route.params.name || '',
        pagination: { current: 1, pageSize: 10, total: 100 },
        url: '',
        tableId: '',
        params: {}

      }
    },
    mounted() {

    },
    methods: {
      onChangeTreeDatas(checkedValues) {
        this.vales = checkedValues.target.value
        valesList += ',' + this.vales
      },
      onChange(checkedValues) {//自定义列表
        console.log('checked = ', checkedValues)
      },
      callback(key) {//tabs切换
        console.log(key)
      },
      handleSizeChange(e) {//月度年度切换
        this.groupValue = e.target.value
        if (this.groupValue == 'month') {
          this.homeTopLeftSelect = true
          // this.dateFormatYears = ''


        } else if (this.groupValue == 'year') {
          this.homeTopLeftSelect = false
          // this.dateFormatMonthly = ''
        }

      },
      detailsQuery() {//点击查询事件
        var $this = this
        $this.spinning = false
        $this.monthOrYear = this.monthOrYear//月度 年度 赋值
        $this.price =  parseInt($this.changedNumber)//金额
        $this.name = $this.vague//关键字
        $this.type = 3
        if($this.monthOrYear == 'month'){
          $this.month = this.month//月度
          $this.params = {
            pageNo: 1,
            pageSize: 10,
            monthOrYear:this.monthOrYear,
            price: this.price,
            name: this.vague,
            month:this.month,
            type: this.type,
          }
          debugger
          $this.$emit('func', this.params)

        }else if($this.monthOrYear == 'year'){
          $this.year = this.year//年度
          $this.params = {
            pageNo: 1,
            pageSize: 10,
            monthOrYear:this.monthOrYear,
            price: this.price,
            name: this.vague,
            year:this.year,
            type: this.type,
          }
          debugger
          $this.$emit('func', this.params)
        }
      },
      onChangeMonthTime(date, dateString) {//月   日期搜索
        var $this = this
        $this.monthOrYear = this.monthOrYear//月度 年度 赋值
        $this.month = dateString
        debugger
      },
      onChangeYearTime(date, dateString) {//年   日期搜索
        var $this = this
        $this.monthOrYear = this.monthOrYear//月度 年度 赋值
        $this.year = dateString
        debugger
      },
      onChangenumber(value) {//明细 数值搜索
        console.log('changed', value)
      },
      handleChangeselect(value) {//汇总 机构
        console.log(`selected ${value}`)
      },
      onSearchmechanism(value) {//机构
        console.log(value)
      },

      moment

    },
    watch: {
      '$route'() {
        this.$destroy(true)
        this.$el.parentNode.removeChild(this.$el)
      }
    }
  }
</script>

<style lang="less" scoped>


  .floatingLayerChe {
    padding: 8px 5px;
  }



  .homeTopCalendar {
    display: inline-block;
    width: 194px;
  }

  .switch {
    padding: 0 20px;
    display: inline-block;
    cursor: pointer;
  }

  .chetaLeftinput {

  }

  .chetaLeft {
    margin: 10px;
    padding: 10px;
    width: 240px;
    height: 815px;
    /*height: calc(100% - 53px);*/
    display: inline-block;
    border: 1px solid #e8e8e8;
    border-radius: 6px;
    background-color: white;
    z-index: 2;
    overflow-y: hidden;
    vertical-align: top;
  }

  .chetaDati {

  }

  .homeTopRight, .homeBodyRight {
    float: right;
  }

  .homeTopRight span, .homeBodyRight span {
    padding: 0 10px;
  }

  .homeTopLeftText, .homeBodyLeftText {
    padding: 0px 10px 0px 20px;
  }

  .homeBodyLeft {
    padding: 0 10px;
  }

  .homeTopLeft {
    padding: 0 10px;
    height: 33px;
    line-height: 33px;
  }

  .homeTop, .homeBody {
    height: 32px;
  }

  .homeTopBottomText {
    float: right;
    padding: 8px 10px 0 0;
  }

  .homebody {

  }
</style>