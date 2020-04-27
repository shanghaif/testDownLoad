<template>
  <div class="statetype">
    <a-card class="cheta-width-full" :headStyle="{borderBottom:'0px solid grey'}" :bodyStyle="{padding:'0px'}">
      <div slot="title" class="table_topleft">
        <a-divider orientation="left" type="horizontal" style="margin: 0px">
          <a-button-group>
            <a-button @click="historyVideo"><i class="iconfont icon-shipin"></i><span class="cheta-history-font">历史视频</span></a-button>
            <a-button @click="historyTrack"><i class="iconfont icon-guiji"></i><span  class="cheta-history-font">历史轨迹</span></a-button>
            <a-button @click="carReport"><i class="iconfont icon-baobiao"></i><span class="cheta-history-font">行车报表</span></a-button>
          </a-button-group>
        </a-divider>
      </div>
      <div slot="extra" class="cheta-events">
        <a-dropdown>
          <a-menu slot="overlay">
            <a-menu-item key="1" @click="getDetail">详情</a-menu-item>
            <a-menu-item key="2" @click="getEdit">编辑</a-menu-item>
          </a-menu>
          <span class="cheta-pr-10">
            ···
          </span>
        </a-dropdown>
        <a-icon type="close"  @click="closeTable" style="font-size: 14px"/>
      </div>
      <div class="info">
        <div v-for="item in dataList" style="line-height: 30px;">
          <div v-if="item.id==carId">
            <a-row>
              <a-col :span="6" :xs="24" :sm="12" :md="6" :lg="6" :xl="6" class="cheta-table-font">
                <div><span class="cheta-font12">北斗状态：</span><span class="cheta-font14">{{item.ang}}</span></div>
                <div><span class="cheta-font12">定位时间：</span><span class="cheta-font14">{{item.gt}}</span></div>
              </a-col>
              <a-col :span="6" :xs="24" :sm="12" :md="6" :lg="6" :xl="6" class="cheta-table-font">
                <div class="tabledata">
                  <div class="cheta-address" v-if="item.address"><span class="cheta-font12">地址：</span><span class="cheta-font14 cheta-font-address cheta-event">{{item.address}}</span></div>
                </div>
              </a-col>
              <a-col :span="12" :xs="24" :sm="24" :md="12" :lg="12" :xl="12">
                <div class="tabledata clearfix">
                  <ul class="content">
                    <li>
                      <span style="padding-right: 5px">
                        <i class="iconfont icon-qidong cheta-color"></i>ACC：
                        <span v-if="item.obdData.acc==='开'"><a-switch size="small" :checked="false" checkedChildren="开"/></span>
                        <span v-else-if="item.obdData.acc==='关'"><a-switch size="small" :checked="false" unCheckedChildren="关"/></span>
                        <span v-else-if="item.obdData.acc==='未采集'"><a-switch size="small" :checked="false" unCheckedChildren="关"/></span>
                        </span>
                    </li>
                    <li>
                      <span><i class="iconfont icon-dianliang1 cheta-color"></i>电量：<span>{{item.obdData.elec}}</span></span>
                    </li>
                    <li>
                      <span><i class="iconfont icon-xinxinicon cheta-color"></i>油位：<span>{{item.obdData.oilLevel}}</span></span>
                    </li>
                    <li>
                      <span> <i class="iconfont icon-lichengdingwei cheta-color"></i>里程表：<span>{{item.obdData.g}}</span></span>
                    </li>
                    <li>
                      <span> <i class="iconfont icon-fadongji- cheta-color"></i>发动机：
                        <span v-if="item.obdData.engine==='开'"><a-switch size="small" :checked="false" checkedChildren="开"/></span>
                        <span v-else-if="item.obdData.engine==='关'"><a-switch size="small" :checked="false" unCheckedChildren="关"/></span>
                        <span v-else-if="item.obdData.engine==='未采集'">
                           <a-tooltip placement="top">
                             <span slot="title">{{item.obdData.engine}}</span>
                             <a-switch size="small" :checked="false" unCheckedChildren="关"/>
                           </a-tooltip>

                        </span>
                      </span>
                    </li>
                    <li>
                      <span><i class="iconfont icon-shuiwen cheta-color"></i>水箱：<span>{{item.obdData.waterTank}}</span></span>
                    </li>
                    <li>
                      <span> <i class="iconfont icon-jiankongshipin cheta-color"></i>监控视频：
                        <span v-if="item.obdData.video==='开'"><a-switch size="small" :checked="false" checkedChildren="开"/></span>
                        <span v-else-if="item.obdData.video==='关'"><a-switch size="small" :checked="false" unCheckedChildren="关"/></span>
                        <span v-else-if="item.obdData.video==='未采集'">
                           <a-tooltip placement="top">
                             <span slot="title">{{item.obdData.video}}</span>
                             <a-switch size="small" :checked="false" unCheckedChildren="关"/>
                           </a-tooltip>
                        </span>
                      </span>
                    </li>
                    <li>
                      <span><i class="iconfont icon-taiwentaiyabaojing cheta-color"></i>胎压：
                        <span v-if="item.obdData.tire==='未检出'">
                           <a-tooltip placement="top">
                             <span slot="title">{{item.obdData.tire}}</span>
                             <i class="iconfont icon-yuanxing nothing-color"/>
                           </a-tooltip>
                        </span>
                      </span>
                    </li>
                  </ul>
                </div>
              </a-col>
            </a-row>
          </div>
        </div>
      </div>
      <div class="car_section">
        <div class="cheta-block cheta-play cheta-mt-10">
          <a-row class="cheta-place">
            <a-col>
              <div class="cheta-events">
                <i v-if="isPlay" class="iconfont icon-zanting cheta-m-10 cheta-font33 cheta-color" @click="trackStop"></i>
                <i v-else class="iconfont icon-zanting1 cheta-m-10 cheta-font33 cheta-color" @click="trackPlay"></i>
              </div>
              <div class="cheta-font-b14">历史轨迹</div>
            </a-col>
          </a-row>
        </div>
        <div class="cheta-pt-50 cheta-block cheta-trajectory">
          <div class="road">
            <div class="badge" v-for="item in carHistoryList" :style="'left: calc(' + item.ratio*91 + '% + 13px);'">
            </div>
            <span class="dash"></span>
            <span class="origin">0</span>
            <a-progress :percent="[(new Date().getHours()*60+new Date().getMinutes())/(24*60)]*100" :showInfo="false" />
            <i class="cheta-car" :style="'left: calc(' + [(new Date().getHours()*60+new Date().getMinutes())/(24*60)]*100 + '% )'">
            </i>
            <span :style="'left: calc(' + [(new Date().getHours()*60+new Date().getMinutes())/(24*60)]*100 + '% )'" class="cheta-time">{{this.moment().format("HH:mm:ss")}}</span>
            <span class="destination">24</span>
          </div>
        </div>

      </div>
    </a-card>
  </div>
</template>
<script>
  import { httpAction } from '@/api/manage'
  import moment from 'moment'
  import ARow from 'ant-design-vue/es/grid/Row'
  import { runCar,videoCar,trackIndex,trackCar } from '@/views/application/car/api/router'
  export default {
    name: '',
    components: { ARow },
    props: {
      dataList: {
        type: Array
      },
      carId: {
        type: String
      }
    },
    data() {
      return {
        spinning: false,
        checked: false,
        visible: true,
        workorder: '',
        terminal_num: '',
        // carId:'',
        data: '',
        carList: [],
        carHistoryList: [],
        isPlay: false,

        address: '',
        time: '',
        pressure:500,
      }
    },

    methods: {
      moment,
      historyVideo () {
        videoCar(this.$router)
      },
      historyTrack () {
        trackCar(this.$router,this.carId)
      },
      carReport () {
        runCar(this.$router)
      },
      closeTable() {
        this.$emit('closeTable')
      },
      getContent(car) {
        this.carHistoryList=[]
        let workorder = car.workorder.split(' ')[0]
        var $this = this;
        httpAction('/application/car/gps/getCarGps?terminalNum=' + car.terminal_num + '&date=' + workorder, {}, 'get').then(res => {
          var carobject = res.result[res.result.length - 1]
          var Mdate = moment(carobject.gt, 'YYYY-MM-DD HH:mm:ss')
          var Hdate = Mdate.format('HH')
          var intdigit = parseInt(Hdate)
          $this.$emit('carAddress',carobject.lo,carobject.la,function(geo){
            $this.carList = [{ time: carobject.gt.split(' ')[1], ratio: intdigit / 24 ,address: geo.formattedAddress}]
          })
          res.result.forEach(item => {
            var Mdate = moment(item.gt, 'YYYY-MM-DD HH:mm:ss')
            var Hdate = Mdate.format('HH')
            var intdigit = parseInt(Hdate)
            var lng= item.lo
            var lat = item.la
            $this.$emit('carAddress',lng,lat,function(geo){
              $this.carHistoryList.push({ time: item.gt.split(' ')[1], ratio: intdigit / 24,address: geo.formattedAddress })
            })
          })

        })
      },

      getDetail () {
        this.$router.push({path:`/cheliangxiangqing/${this.carId}`})
      },
      getEdit () {
        this.$router.push({path:`/xinzengcheliang/${this.carId}`})
      },
      trackPlay (){
        this.isPlay = true
        this.$router.push({path:`/Car/Annal/${this.carId}`})
      },
      trackStop () {
        this.isPlay = false
      }

    }
  }
</script>
<style lang="less">
  .statetype {
    .ant-card-extra{
      padding: 0!important;
    }
    /*.ant-card-wider-padding .ant-card-body {*/
    /*  padding: 0px 32px 0px 32px!important;*/
    /*}*/
    .ant-btn {
      width: 100px;
      padding: 0px!important;
    }

    .ant-switch{
      margin-top: -4px!important;
    }
  }

</style>

<style lang="less" scoped>
  .cheta-font12{
    color:rgba(0, 0, 0, 0.65)
  }
  .cheta-address{
    word-wrap:break-word;
  }
   .cheta-font-address{
     color: rgba(0, 0, 0, 0.65);
  }

  .cheta-address:hover .cheta-font-address{
    color: rgba(0,0,0,1);
  }
  /*.cheta-address{*/
  /*  overflow: hidden;  //超出则隐藏*/
  /*  white-space: nowrap;//不设置换行*/
  /*  text-overflow: ellipsis;//这个是设置省略号*/
  /*}*/
  /*table样式*/
  .cheta-time{
    position: absolute;
    top: -53px;
  }
  .top {
    line-height: 38px;
    border-bottom: 1px solid #E8E8E8;
  }


  .table_topleft i {
    font-size: 18px;
    line-height: 22px;
    height: 30px;
  }

  .table_toplef .cheta-history-font{
    line-height: 30px;
    display: inline-block;
    height: 30px;
  }
  .table_topleft span {
    font-size: 14px;
    font-weight: 400;
    padding-left: 6px;
    width: 65px;
    text-align: center;
    display: inline-block;

  }

  .close{
    float: right;
    height: 32px;
    line-height: 32px;
  }

  .edit {
    float: right;
    width: 38px;
    margin-right: 10px;
    .ant-btn {
      float: right;
      box-shadow: none; /*opera或ie9*/
      -moz-box-shadow: none; /*firefox*/
      -webkit-box-shadow: none; /*webkit*/
      border: none;
    }
  }

  .tabledata {
    height: 68px;
    overflow-y: scroll;
  }

  .tabledata .content li {
    list-style: none;
    float: left;
    width:134px;
    height: 34px;

  }
  .content{
    height:34px;
  }
/*詳情部分*/
  .info {
    padding: 10px 47px;
    border-bottom: 1px solid #E8E8E8;
  }
  .cheta-play{
    width: 126px;
    height: 75%;
    padding-left: 47px;
    padding-right: 20px;
  }
  .cheta-table-font div{
       font-size: 16px;

     }
  .content li span{
    font-size: 12px;
    padding-right: 5px;
  }
  .content li span i{
    font-size: 16px;
    padding-right: 5px;
  }

  .error-color{
    color:red;
  }
  .normal-color{
    color: #1890ff;;
  }
  .nothing-color{
    color:grey;
  }
/*車部分*/
  .car_section{
    width: 100%;
    height: 100px;
  }
  .cheta-trajectory{
    width: calc(100% - 126px);
  }
  .road{
    width: 96%;
    height: 8px;
    position:relative;
    margin-left: 1%;
  }
  .ant-progress{
    position: absolute;
    left: 0;
    top: -9px;
  }
  .origin{
    position:absolute;
    top: -7px;
    left: -19px;
  }
  .destination{
    position:absolute;
    top: -7px;
    right: -27px;
  }
  .road .badge{
    position: absolute;
    left: 0;
    top: 0px;
    width: 8px;
    height: 8px;
    background: #EB6100;
    border-radius: 50%;
    z-index: 333;
  }
  .road .badge .location{
    position: absolute;
    white-space: nowrap;
    padding: 0 10px 0 36px;
    top: -40px;
    left: -37px;
    height: 32px;
    line-height: 32px;
    color: #333;
    border-radius: 3px;
    border: 1px solid rgba(232,232,232,1);
  }
  .badge .time{
    position: absolute;
    white-space: nowrap;
    left: -31px;
    top: 16px;
    height: 22px;
    padding: 0 10px;
    color: #555;
    border-radius: 3px;
  }
  .dash{
    position: absolute;
    left: 0;
    top: 3px;
    height: 0;
    width: 100%;
    border-top: 1px dashed #fff;
    z-index: 333;
    }
  .road .cheta-car{
    position: absolute;
    width: 60px;
    height: 32px;
    background: url('../../../../assets/image/carteam/car.png') no-repeat;
    left: calc(50% - 30px);
    top: -28px;
  }
.cheta-place{


}


  /*.road{*/
    /*margin-top: 80px;*/
    /*position: relative;*/
    /*height: 8px;*/
    /*.badge{*/
      /*position: absolute;*/
      /*visibility: visible;*/
      /*left: 0;*/
      /*top: 0px;*/
      /*width: 8px;*/
      /*height: 8px;*/
      /*background: #EB6100;*/
      /*border-radius: 50%;*/
      /*z-index: 333;*/
      /*&:after{*/
        /*border-radius: 50%;*/
        /*border: 1px solid #EB6100;*/
        /*position: absolute;*/
        /*z-index: 333;*/
        /*top: 0;*/
        /*left: 0;*/
        /*width: 100%;*/
        /*height: 100%;*/
        /*content: '';*/
        /*-webkit-animation: antStatusProcessing 1.2s infinite ease-in-out;*/
        /*animation: antStatusProcessing 1.2s infinite ease-in-out;*/
      /*}*/
      /*.location{*/
        /*position: absolute;*/
        /*white-space: nowrap;*/
        /*padding: 0 10px 0 36px;*/
        /*top: -60px;*/
        /*left: -37px;*/
        /*height: 32px;*/
        /*line-height: 32px;*/
        /*background: #fff url('../../../../assets/image/carteam/location.png') no-repeat 10px center;*/
        /*color: #333;*/
        /*border-radius: 3px;*/
        /*border: 1px solid rgba(232,232,232,1);*/
      /*}*/
      /*.time{*/
        /*position: absolute;*/
        /*white-space: nowrap;*/
        /*left: -31px;*/
        /*top: 16px;*/
        /*height: 22px;*/
        /*padding: 0 10px;*/
        /*color: #555;*/
        /*border-radius: 3px;*/

      /*}*/
    /*}*/
    /*.ant-progress{*/
      /*position: absolute;*/
      /*left: 0;*/
      /*top: -9px;*/
    /*}*/
    /*.origin{*/
      /*position: absolute;*/
      /*left: 0;*/
      /*top: 11px;*/
    /*}*/
    /*.destination{*/
      /*position: absolute;*/
      /*right: 0;*/
      /*top: 11px;*/
    /*}*/
    /*.dash{*/
      /*position: absolute;*/
      /*left: 0;*/
      /*top: 3px;*/
      /*height: 0;*/
      /*width: 100%;*/
      /*border-top: 1px dashed #fff;*/
      /*z-index: 333;*/
    /*}*/
    /*&>i{*/
      /*position: absolute;*/
      /*width: 60px;*/
      /*height: 32px;*/
      /*background: url('../../../../assets/image/carteam/car.png') no-repeat;*/
      /*left: calc(50% - 30px);*/
      /*top: -28px;*/
      /*.location{*/
        /*position: absolute;*/
        /*white-space: nowrap;*/
        /*padding: 0 10px 0 36px;*/
        /*top: -40px;*/
        /*left: -20px;*/
        /*height: 32px;*/
        /*line-height: 32px;*/
        /*background: #fff url('../../../../assets/image/carteam/location.png') no-repeat 10px center;*/
        /*color: #333;*/
        /*border-radius: 3px;*/
        /*border: 1px solid rgba(232,232,232,1);*/
      /*}*/
      /*.time{*/
        /*position: absolute;*/
        /*white-space: nowrap;*/
        /*left: -15px;*/
        /*top: 45px;*/
        /*height: 22px;*/
        /*padding: 0 10px;*/
        /*color: #555;*/
        /*border-radius: 3px;*/

      /*}*/
    /*}*/
  /*}*/

</style>

