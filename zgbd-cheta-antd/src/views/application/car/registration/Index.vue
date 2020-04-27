<template>
  <div class="cheta-car-registration">
    <div class="cheta-flex-end cheta-font14 cheta-color cheta-registration-top cheta-bg-white cheta-events">
      <span class="cheta-top-item" @click="analysis"><i class="iconfont icon-tongji"></i><span>调度统计</span></span>
      <span class="cheta-top-item" @click="apply"><i class="iconfont icon-shenqing2"></i><span>申请列表</span></span>
      <span class="cheta-top-item" @click="history"><i class="iconfont icon-tiaodu"></i><span>用车统计</span></span>
    </div>
    <div class="cheta-registration-content" v-if="isreload">
      <!--中间部分-->
      <div class="cheta-box-flex cheta-content-main">
        <!--中间左边部分-->
        <div class="cheta-flex-grow4 cheta-main-left cheta-bg-grey  cheta-box-flex">
          <div class="cheta-flex-grow4 cheta-bg-white">
            <div class="cheta-ml-16"><span class="cheta-font18 cheta-font-height36">车辆监控</span></div>
            <div class="cheta-box-flex cheta-car-monitor">
              <!--车辆列表-->
              <div class="">
                <ul class="cheta-height-full">
                  <li class="cheta-car-item cheta-ml-60 cheta-mt-16 cheta-event" v-for="item in carList" @click="changeCar(item)">
                    <!--监控中的车辆-->
                    <div class="cheta-flex-around cheta-height-full">
                      <div>
                        <span class="cheta-font-B28 cheta-block cheta-width-full" :style="{color: getConstant(item.key).color}">{{ carObject[item.type] }}</span>
                        <span class="cheta-fontB14 cheta-font-height36 cheta-block cheta-width-full" :style="{color: getConstant(item.key).color}">{{ item.text }}</span>
                      </div>
                      <div>
                        <a-icon v-if="item.key === carKey" type="right" :style="{color: getConstant(item.key).color}"/>
                        <a-icon v-else type="right"/>
                      </div>
                    </div>
                  </li>
                </ul>
              </div>
              <div class="cheta-flex-grow3">
                <Map></Map>
              </div>
            </div>
          </div>
          <div class="cheta-car-list cheta-ml-5 cheta-bg-white">
            <div class="cheta-icon-right">
              <a-icon type="double-right" class="cheta-font-height36 cheta-mr-20"/>
            </div>
            <TypeCarData ref="typeCarData"></TypeCarData>
          </div>
        </div>
        <div class="cheta-car-list cheta-main-right cheta-bg-white cheta-plr-15">
          <div class="cheta-font-height55 clearfix">
            <span class="cheta-font18 cheta-floatl">提醒事项</span>
            <div class="cheta-block cheta-floatr">
              <a-dropdown>
                <a-menu slot="overlay">
                  <a-menu-item key="1">详情</a-menu-item>
                  <a-menu-item key="2">编辑</a-menu-item>
                </a-menu>
                <div class="">
                  ···
                </div>
              </a-dropdown>
            </div>
          </div>
          <ul>
            <li v-for="item in warnList" class="clearfix cheta-mtb15">
              <span class="cheta-floatl cheta-warn" :title="item.context"><i :class="`cheta-font-height18 cheta-mr-10 iconfont icon-shenqing3`" :style="{color:'#39c9a9'}"></i><span>{{ item.context}}</span></span>
              <span class="cheta-floatr cheta-time-color">{{ moment(item.dateTime).fromNow()}}</span>
            </li>
          </ul>
        </div>
      </div>
      <!--footer部分-->
      <div class="cheta-width-full cheta-content-footer cheta-bg-white cheta-plr-10">
        <div class="cheta-font-height36">
          <span class="cheta-font18 cheta-floatl">行车登记</span>
          <div class="cheta-block cheta-floatr cheta-color">
            <!--<a-button class="cheta-mr-10" @click="appearCar">出车登记</a-button>-->
            <!--<a-button @click="backCar">回车登记</a-button>-->
          </div>
          <AppearCar ref="appearCar" @reload="reload"></AppearCar>
          <ReturnCar ref="returnCar" @reload="reload"></ReturnCar>
        </div>
        <c-table
          :expandRowByClick="true"
          :columns="columns"
          @expand="expand"
          url="/application/car/dispatch/getData"
          rowKey="id"
          class="cheta-table-registration"
          ref="table"
        >
        <span slot="carTitle">
          <i class="iconfont icon-sousuo cheta-icon-size14"></i><span class="cheta-ml-10">车辆</span>
        </span>
        </c-table>
      </div>
    </div>
  </div>
</template>
<script>
  import Map from '../../../../../src/components/Map/Map'
  import ReturnCar from './modules/ReturnCar'
  import AppearCar from './modules/AppearCar'
  import CTable from '@/views/chetaui/table/index.js'
  import TypeCarData from './modules/TypeCarData'
  import { getAction } from '@/api/manage'
  import constant from '@/views/application/car/api/constant.js';
  import moment from 'moment'

  export default {
    name: 'Index',
    components: { Map ,ReturnCar,AppearCar,CTable,TypeCarData},
    data() {
      return {
        carKey: '',
        isreload: true,
        cartype:[],
        carList: [
          {  key: '',  text: '监控中的车辆',type:'allSum',},
          {  key: 'ASSIGNMENT', text: '外派中的车辆',type:'assignmentSum' },
          {  key: 'LEAVE',  text: '闲置中的车辆',type:'leaveSum' },
          {  key: 'UNUSUAL',  text: '异常中的车辆',type:'unusualSum' },
        ],
        carObject: {},
        warnList: [],
        columns: [
          {title: "序号", dataIndex: "", key: "", align: "center", customRender: function(t, r, index) {return parseInt(index) + 1}},
          { title: "车牌号",dataIndex: "registrationNo", key: "registrationNo", scopedSlots: { customRender: "registrationNo" }, align: "center" },
          { title: "用车人", dataIndex: "userName", key: "userName", align: "center" },
          { title: "油量", dataIndex: "dispatchOil", key: "dispatchOil", align: "center" },
          { title: "出车里程", dataIndex: "dispatchMileage", key: "dispatchMileage", align: "center" },
          { title: "启动", dataIndex: "dispatchLaunch", key: "dispatchLaunch" , align: "center" },
          { title: "外观", dataIndex: "dispatchBrake", key: "dispatchBrake", align: "center" },
          { title: "胎压", dataIndex: "dispatchTire", key: "dispatchTire" , align: "center" },
          { title: "时间", dataIndex: "dispatchTime", key: "dispatchTime" , align: "center" },
        ],

      }
    },
    created () {
      this.init();
    },
    methods: {
      moment,
      init () {
        var $this = this
        getAction("/application/car/dispatch/analyze",{},"get").then(res=>{
          if (res.success) {
            $this.carObject =res.result
          }
        })
        $this.getWarn()
      },
      getWarn () {
        var $this = this
        var param = {
          pageNo:1,
          pageSize:10
        }
        getAction('/application/car/dispatch/remindList',param).then(res=>{
          $this.warnList = res.data
        })
      },
      changeCar(item) {
        this.carKey = item.key
        this.$refs.typeCarData.empty();
        this.$refs.typeCarData.getType(item)
      },
      pageReload () {
        this.$router.push({path:"/Car/Change?age=1"})
        /*this.isreload = false;
        this.init();
        this.isreload = true;*/
      },
      analysis () {
        this.$router.push({path:"/diaodutongji"})
      },
      apply () {
        this.$router.push({path:"/shenqingliebiao"})
      },
      history () {
        this.$router.push({path:"/diaodulishi"})
      },

      backCar () {
        this.$refs.returnCar.backCar()
      },
      appearCar () {
        this.$refs.appearCar.appearCar()
      },
      reload () {
        this.$refs.table.getData()
      },
      getConstant (type) {
        var obj = constant[type];
        return obj;
      }
    },
    watch: {
      '$route' () {
        this.$destroy(true);
        this.$el.parentNode.removeChild(this.$el);
      }
    }
  }

</script>

<style lang="less" scoped>

  /*top样式*/
  .cheta-car-registration {
    height: calc(100vh - 75px);
    background-color: #F0F2F5
  }

  .cheta-registration-top {
    line-height: 50px;
    height: 50px;
  }

  .cheta-registration-top i {
    line-height: 42px;
    margin-right: 10px;
  }

  .cheta-top-item {
    margin-right: 20px
  }

  /*main中的样式*/
  .cheta-registration-content {
    height: calc(100vh - 150px);
    margin: 10px 10px 15px 10px;
  }

  .cheta-content-main {
    height: 70%;
  }

  .cheta-car-monitor {
    height: calc(100% - 36px);
  }

  .cheta-car-item {
    width: 100%;
    height: 18%;
    background: rgba(255, 255, 255, 1);
    box-shadow: 0px 2px 8px 0px rgba(204, 204, 204, 0.33);
    border-radius: 8px;
  }
  .cheta-font-B28 {font-size:28px; font-weight:bold;line-height:31px;}
  .cheta-main-right {
    margin-left: 10px
  }

  .cheta-car-list {
    width: 260px;
    box-shadow: 0px 2px 200px 0px rgba(204, 204, 204, 0.33);

  }

  .cheta-car-info {
    height: calc(100% - 38px);
  }

  .cheta-time-color {
    color: #CCCCCC
  }
  .cheta-warn{
    width: 140px;
    overflow: hidden;
    white-space: nowrap;
    text-overflow: ellipsis;
    display: inline-block;
  }

  /*footer样式*/
  .cheta-content-footer {
    height: 29%;
  }

  .cheta-content-footer {
    margin-top: 10px;
  }

  .cheta-icon-right {
    text-align: right
  }
  .cheta-table-registration{height:calc(100% - 36px);overflow-y: scroll}
</style>