<template>
  <div class="dati">
    <div class="home">
      <div class="homeTop">
        <span class="homeTopLeft">
          <a-date-picker @change="onChangeBegin" placeholder="起始日期" />
          <span class="homeTopLeftTo">-</span>
          <a-date-picker @change="onChangeEnd"  placeholder="结束日期"/>
        </span>
        <span class="homeTopLeft">
              <span class="homeTopLeftText">费用金额 </span>≥
              <a-input-number
                v-model="changedNumber"
                :defaultValue="4500"
                style="width: 100px;"
                :formatter="value => `$ ${value}`.replace(/\B(?=(\d{3})+(?!\d))/g, ',')"
                :parser="value => value.replace(/\$\s?|(,*)/g, '')"
                @change="onChangenumber"/></span>
        <span class="homeTopLeft"> <a-input placeholder="请输入关键字搜索"  v-model="vague" style="width: 200px"/> </span>
        <span class="homeTopLeft"> <a-button type="primary" @click="summaryQuery">查询</a-button> </span>
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

    name: 'costSummary',
    components: {
      Confirm,
      IframePageView,
      formMixin,
    },
    data() {
      return {
        treeDatas: [],
        checked: true,
        value: '',
        groupValue: '月度',
        size: 'default',
        iframeUrl: '',
        bordered: false,
        countNo: 0,
        value: '',
        carData: [],
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
        params: {},
        summaryData:[],//查询日期
        changedNumber:'4500',//查询费用金额
        beginDate:{},
        endDate:{},
        price:{},
        BeginData:{},//开始日期
        EndData:{},//结束日期
        vague:'',//模糊查询
      }
      },
    created() {

    },
    methods: {
      moment,
      onChangeTreeDatas(checkedValues) {
        this.vales = checkedValues.target.value
        valesList += ',' + this.vales
      },
      onChangeBegin(date, dateString) {
       this.BeginData = dateString
      },
      onChangeEnd(date, dateString) {
        this.EndData = dateString
      },
      summaryQuery(){//查询事件
        var $this = this
        $this.spinning = false;
        $this.beginDate = $this.BeginData
        $this.endDate = $this.EndData
        $this.price = parseInt($this.changedNumber)
        $this.name = $this.vague
        $this.type = 3
        debugger
        $this.params = {pageNo: 1, pageSize: 10,beginDate:this.beginDate,endDate:this.endDate,price:this.price,type:this.type,name:this.vague};
        $this.$emit('func',this.params)
        // $this.$parent.init()
        // this.queryTable()

        // this.url = this.url
        // this.params = {pageNo: 1, pageSize: 10,beginDate:this.beginDate,endDate:this.endDate,price:this.price,type:this.type};
        // this.init(this.url, this.params)
        // this.spinning = true;
      },
      onChangenumber(value) {//数值金额搜索
        console.log('changed', value)
        this.changedNumber = value
      },
      },
      watch: {
        '$route'() {
          this.$destroy(true)
          this.$el.parentNode.removeChild(this.$el)
        }
      },
  }
</script>

<style scoped>
  .customList:hover .floatingLayer {
    display: block;
  }
  .floatingLayerChe {
    padding: 8px 5px;
  }
  .floatingLayer {
    display: none;
    z-index: 2;
    width: 180px;
    max-height: 70%;
    overflow-y: scroll;
    overflow-x: scroll;
    padding: 15px 10px;
    position: absolute;
    background-color: #fff;
    border-radius: 4px;
    box-shadow: 0 2px 8px rgba(0, 0, 0, 0.15);
    background-clip: padding-box;
  }
  .homeTopRight{
    float: right;
  }
  .homeTopRight span{
    padding: 0 10px;
  }

  .homeTopLeft {
    padding: 0 10px;
    height: 33px;
    line-height: 33px;
  }
  .homeTopLeftTo{
     margin: 0px 5px;
    color: #666666;
   }
  .homeTopRight {
    float: right;
  }

  .homeTopRight span {
    padding: 0 10px;
  }

  .homeTopLeftText {
    padding: 0px 10px 0px 20px;
  }


</style>