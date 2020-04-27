<template>
  <div :class="'cheta-guide cheta-track '+ guide.warp + ' ' + guide.step">
      <div class="cheta-map-content">
        <div v-if="!isShowByType('map')" class="cheta-map-top">
          <div class="clearfix">
            <div
              class="cheta-floatl cheta-color cheta-space5 cheta-plr-10 cheta-block cheta-mltr-10 cheta-map-tool cheta-car"
              @click="() => {mobile = !mobile;}">
              <i class="iconfont icon-che cheta-color"></i>车辆列表
              <a-tooltip title="请帮助">
                <a-icon type="question-circle" class="cheta-ml-10" @click="showGuide"/>
              </a-tooltip>
            </div>
            <div class="cheta-floatr">
              <div class="cheta-mt-10 cheta-block">
                <a-button-group>
                  <a-button @click="setDateByType('yesterday')" :type="type === 'yesterday' ? 'primary' : 'default'">昨日</a-button>
                  <a-button @click="setDateByType('today')" :type="type === 'today' ? 'primary' : 'default'">今日</a-button>
                  <a-button @click="setDateByType('week')" :type="type === 'week' ? 'primary' : 'default'">本周</a-button>
                  <a-button @click="setDateByType('month')" :type="type === 'month' ? 'primary' : 'default'">本月</a-button>
                </a-button-group>
              </div>
              <div class="cheta-mt-10 cheta-space5 cheta-block">
                <!--                :disabledDate="(current) => current && current >= moment().endOf('day')"-->
                <a-range-picker
                  :disabledDate="(current) => current && current >= moment().endOf('day')"
                  :showTime="{
                  hideDisabledOptions: true,
                }"
                  v-model="date.str"
                  @ok="setListGpsData"
                  format="YYYY-MM-DD HH:mm:ss"
                />

              </div>
              <div class="cheta-block">
                <a-button type="primary" class="cheta-mlr-10">导出列表</a-button>
                <a-button type="primary" class="cheta-mlr-10" @click="savecanvas">导出图片</a-button>
              </div>
            </div>
          </div>

        </div>
        <div class="cheta-box-flex">
          <div :class="'cheta-left ' + !isShowByType('left') && mobile ? ' cheta-res-hide' : ''" :style="{width: isShowByType('left') ? '300px' : '0px'}">
            <Structure @carCheckShow="carCheckShow" @getList="getList" class="cheta-white cheta-block cheta-map-left" :style="{width: isShowByType('left') ? '300px' : '0px'}"/>
          </div>
          <div :class="isShowByType('map')  ? 'cheta-right-map cheta-pt-5' :  'cheta-right cheta-p-10' + ' cheta-flex1 '">
            <!--v-if="!list.length"-->
            <Guide v-if="isShowByType('guide')" :date="date" :guide="guide" class="cheta-height-full"></Guide>
            <!--listShow-->
            <div v-if="isShowByType('list')">
              <a-checkbox class="cheta-pl-20 cheta-mt-10" @change="onCheckAllChange" :checked="checkAll"></a-checkbox><span class="cheta-ml-10">{{list.length}}</span>
              <a-spin :spinning="listLoading">
                <div v-for="(item,index) in list" v-if="!listLoading">
                  <div v-if="index < limit">
                    <Play @closeTable="closeTable" @mapShow="mapShow"  :checkSingle="checkSingle" :item="item" @close="close(index)" class="cheta-white cheta-block cheta-map-bottom cheta-mt-10 cheta-width-full">
                    </Play>
                  </div>
                </div>
              </a-spin>
              <div v-if="showLoadingMore" slot="loadMore" :style="{ textAlign: 'center', marginTop: '12px', height: '32px', lineHeight: '32px' }">
                <div v-if="list.length >0 && list.length <= limit " class="cheta-font-align">
                  没有更多
                </div>
                <a-button v-else-if="list.length > 4" @click="onLoadMore">加载更多</a-button>
              </div>
            </div>
            <Map v-if="isShowByType('map')" ref="map" @moveByIndex="moveByIndex" @getCarAddress="getCarAddress" @loadTrack="loadTrack" :style="{height: isShowByType('map')? 'calc(100% - 324px)' : 'calc(100% - 331px)'}"></Map>
            <Trajectory v-if="isShowByType('trajectory')" ref="trajectory" @loadMapTrack="loadMapTrack" @closeTable="closeTable" :dates="date" class="cheta-white cheta-block cheta-map-bottom" style="width: 100%;"></Trajectory>
          </div>
        </div>
      </div>
    <div class="cheta-guide-warp"></div>
    <!--<Map ref="map"></Map>-->
  </div>
</template>
<script>
  import Map from './Map'
  import Structure from '../map/Structure'
  import Play from './Play'
  import Trajectory from './Trajectory'
  import Guide from './modules/Guide'
  import moment from 'moment';
  import { postAction,base64Upload,httpAction } from '@/api/manage'
  import html2canvas from 'html2canvas'
  import {treeToList} from '@views/application/car/api/util';
  import MapUtil from './modules/MapUtil'
  import { mixin, mixinDevice } from '@/utils/mixin.js'
  export default {
    components: { Guide, Trajectory, Play, Structure, Map },
    data () {
      return {
        MapUtil: MapUtil,
        leftShow: false,
        // leftListShow: true,
        // mapTrajectoryShow: false,
        tableShow: true,
        refMap: false,
        list: [],
        showLoadingMore: true,
        data: [],
        limit: 4,
        listShow: true,
        // item: {
        //   startAddress:'',
        //   endAddress:''
        // },
        date: {
          str: [this.moment().startOf('month'), this.moment().endOf('month')],
        },
        type: 'yesterday',
        listLoading: true,
        trajectoryShow: false,
        checkAll: false,
        checkSingle: false,
        guide: {step: '',warp:''},
        // guide: {step: 'cheta-step1',warp:'cheta-iswarp'},
        showModel: 'leftGuiShow',
        upMap: {step:'cheta-p-10',warp:'cheta-pt-5'},
        spinning: false,
        mobile: false,
        isCheck: false
        // startAddress: '',
        // endAddress:'',
      }
    },
    mixins: [mixin, mixinDevice],
  // 411c197b58574a42aca8ef910f413a0d
    created () {
      this.setDateByType(this.type);
      this.getData()
      this.mobile = this.device === 'mobile'
    },
    methods:{
      moment,
      getTreeData() {

      },
      getList (teeData) {
        this.list = [];
        treeToList (teeData, this.list, item=>item.treeType==2)
      },
      getData () {
        var id = this.$route.params.id, $this = this;
        if (id) {
          $this.mapShow()
        }
        else {
          this.toggleRoad();
        }
      },
      isShowByType (type) {
        if (type == 'guide') {
          return this.showModel === 'leftGuiShow'
        }
        else if (type == 'left') {
          return this.showModel === 'leftGuiShow' || this.showModel === 'leftListShow'
        }
        else if (type === 'list') {
          return this.showModel === 'leftListShow'
        }
        else if (type === 'map' || type === 'trajectory') {
          return this.showModel === 'mapTrajectoryShow'
        }
      },
      getCarAddress (){
        this.$refs.Trajectory.getCarAddress()
      },
      moveByIndex (ratio, index) {
        this.$refs.trajectory.moveByIndex(ratio, index)
      },
      onCheckAllChange () {
        this.checkALL = !this.checkALL
        this.checkSingle = this.checkALL == true ? true :false
      },
      mapShow () {
        /*this.item = item*/
        this.listShow = false
        /*var $this = this*/
        /*httpAction('/application/car/gps/getCarDetail?id='+item.key,{},'get').then(res=>{
          var endDate = $this.moment(new Date(res.result[0].gt)).format("YYYY-MM-DD HH:mm:ss")
          var startDate = $this.moment(new Date(res.result[0].gt)).add(-1,"days").format("YYYY-MM-DD HH:mm:ss")
          $this.setTimeData(startDate,endDate,item, () =>{
            $this.list.forEach(inner=>{
              if(inner.key === item.key ){
                $this.item = inner;
                this.getAddress()
              }
            })*/
            this.showModel = 'mapTrajectoryShow'
          /*})*/
        /*})*/
      },
      toggleRoad () {
        if (this.isCheck) {
          this.showModel = 'leftListShow'
        }
        else{
          this.showModel = 'leftGuiShow'
        }
      },
      closeTable (){
        this.trajectoryShow = true
      },
      carCheckShow (list) {
        this.list = list.filter (function(item) {
          return item.treeType == 2
        })
        // 解决点击load bug
        if (this.list.length < this.limit) {
          this.limit = this.list.length;
        }
        // 解决清空的bug
        if (this.limit < 4) {
          this.limit = 4;
        }
        this.setListGpsData()
        if (this.list.length > 0) {
          this.showModel = 'leftListShow'
          this.isCheck = true;
        }
        else if(this.list.length == 0) {
          this.showModel = 'leftGuiShow'
          this.isCheck = false;
        }
      },
      setTimeData (startDate, endDate,item,fn) {
        var isItem = false;
        if (startDate) {
          isItem = true;
        }
        var list = this.list
        var that = this;
        var param = {
          endDate: endDate,
          startDate: startDate,
          terminalNums: [item.terminalNum]
        };
        postAction('/application/car/gps/getAnalyzeGps', param).then(res=>{
          res.result.forEach(item => {
            list.forEach(inner => {
              if (item.terminalNum == inner.terminalNum) {
                inner.startDate = item.startDate
                inner.endDate = item.endDate
                inner.startLng = item.startLng
                inner.startLat = item.stratLat
                inner.endLng= item.endLng
                inner.endLat = item.endLat
              }
            })
          })
          if (isItem) {
            fn()
          }
          that.listLoading = false
        })
      },
      setListGpsData () {
        var startDate = this.date.str[0].format('YYYY-MM-DD HH:mm:ss')
        var endDate =  this.date.str[1].format('YYYY-MM-DD HH:mm:ss')
        var terminalNums = []
        var list = this.list, limit = this.limit;
        list.forEach((item,index)=>{
          if (!list.startLng && index < limit) {
            terminalNums.push(item.terminalNum)
          }
        })
        var that = this;
        var param = {
          endDate: endDate,
          startDate: startDate,
          terminalNums: terminalNums
        };
        that.listLoading = true
        postAction('/application/car/gps/getAnalyzeGps', param).then(res=>{
          list.forEach(inner => {
            inner.startDate = ''
            inner.endDate = ''
            res.result.forEach(item => {
              if (item.terminalNum == inner.terminalNum) {
                inner.startDate = item.startDate
                inner.endDate = item.endDate
                inner.startLng = item.startLng
                inner.startLat = item.stratLat
                inner.endLng= item.endLng
                inner.endLat = item.endLat
              }
            })
          })
          that.listLoading = false

        })

      },

      close (index) {
        this.list.splice(index,1)
      },
      onLoadMore () {
        this.limit += 4;
        this.$nextTick(() => {
          window.dispatchEvent(new Event('resize'))
        })
      },

      loadMapTrack () {
        this.$refs.map.loadTrack();
      },
      loadTrack () {
        this.$refs.trajectory.loadTrack();
      },
      savecanvas(){
        this.spinning = true;
        let canvas = document.querySelector('.cheta-track');
        let that = this;
        html2canvas(canvas,{scale:2,logging:false,useCORS:true}).then(function(canvas) {
          that.spinning = false;
          let type = 'png';
          let imgData = canvas.toDataURL(type);
          // 照片格式处理
          let _fixType = function(type) {
            type = type.toLowerCase().replace(/jpg/i, 'jpeg');
            let r = type.match(/png|jpeg|bmp|gif/)[0];
            return 'image/' + r;
          };
          imgData = imgData.replace(_fixType(type),'image/octet-stream');
          let filename = "ChetaTrack" + '.' + type;
          that.saveFile(imgData,filename);
          var b64 = imgData.substring(31);
          base64Upload(b64).then(res => {
          })
        });
      },
      saveFile(data, filename){
        let save_link = document.createElementNS('http://www.w3.org/1999/xhtml', 'a');
        save_link.href = data;
        save_link.download = filename;

        let event = document.createEvent('MouseEvents');
        event.initMouseEvent('click', true, false, window, 0, 0, 0, 0, 0, false, false, false, false, 0, null);
        save_link.dispatchEvent(event);
      },
      showGuide () {
        this.guide.step='cheta-step1'
        this.guide.warp='cheta-iswarp'
      },
      setDateByType (type) {
        this.type = type;
        // 昨天
        if (type === 'yesterday') {
          this.setDate(this.moment().add(-1, 'days'), this.moment().add(-1, 'days'));
        }
        // 今天
        else if (type === 'today') {
          this.setDate(this.moment(), this.moment());
        }
        // 本周
        else if (type === 'week') {
          this.setDate(this.moment().startOf('week'), this.moment().endOf('week'));
        }
        // 本月
        else if (type === 'month') {
          this.setDate(this.moment().startOf('month'), this.moment().endOf('month'));
        }
        this.setListGpsData()

      },
      setDate (start, end) {
        this.date.str = [start.hour(0).minute(0).second(0), end.hour(23).minute(59).second(59)];
      }

    },
    watch: {
      // 监听路由
      '$route' () {
        this.getData();
      }
    }
  }


</script>
<style lang="scss">
  .cheta-map-content .ant-tree > li:last-child {
    height: calc(100vh - 180px)!important;
    overflow-y: scroll!important;
  }
  .cheta-guide{
    .cheta-guide-step1{
      visibility: hidden;
    }
    .cheta-guide-step2{
      visibility: hidden;
    }
  }
  .cheta-iswarp{
    .cheta-guide-warp{
      opacity: 0.6;
      position: fixed;
      z-index: 10000;
      background: black;
      top: 0;
      left: 0;
      bottom: 0;
      right: 0;
    }
  }
  .cheta-step1{
    .cheta-guide-step1{
      visibility: visible;
    }
    .cheta-map-left{
      position: fixed;
      z-index: 10001;
    }
  }
  .cheta-step2{
    .cheta-guide-step2{
      visibility: visible;
    }
    .cheta-track-desc{
      position: fixed;
      z-index: 10001;
      background: white;
      padding: 10px;
    }
  }

  .cheta-res-hide{
    display: none;
  }

</style>
<style lang="less" scoped>
  .cheta-map-content{
    /*position: relative*/
    background: #F0F2F5;
  }
  .cheta-map-top{width: 100%;background-color: white;box-shadow:0px 1px 6px 0px rgba(236,236,236,1);}
  .cheta-map-tool{cursor: pointer;height: 40px;line-height: 25px;}
  .cheta-map-left{transition: all 0.2s;margin-top: 3px;
  }
  /*overflow-y: scroll;*/
  .cheta-map-bottom{transition: all 0.2s;}
  .cheta-car{width:288px;}
  .cheta-right{height:calc(100vh - 125px);overflow-y: scroll;}
  .cheta-right-map{height:calc(100vh - 75px);overflow-y: scroll;width: 100%}
</style>