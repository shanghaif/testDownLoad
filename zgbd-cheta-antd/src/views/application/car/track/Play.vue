<template>
  <div class="cheta-track-play">
    <a-row v-if="item">
      <a-col :span="20" class="cheta-border-right cheta-space20">
        <div class="cheta-border-bottom cheta-box-flex cheta-flex-style">
          <div class="cheta-font-height32"><a-checkbox class="cheta-pr-10" :checked="checkSingle"></a-checkbox><span class="cheta-font18 cheta-fontb-style cheta-font">NO.{{item.title}}</span></div>
          <div>
            <div class="cheta-block cheta-font14 cheta-font-style cheta-color cheta-font cheta-event cheta-ml-10" @click="toggle"><i class="iconfont icon-guiji"></i><span class="cheta-ml-10">轨迹>></span></div>
          </div>
        </div>
        <div>
          <a-row class="cheta-plt-20 cheta-font-style" v-if="item.startDate" :gutter="16">
            <a-col  :span="10" :xs="24" :sm="12" :md="10" :xl="10">
              <a-steps direction="vertical" :current="1">
                <a-step status="finish" title="">
                  <div slot="description" :class="`clearfix cheta-floatl { device }`">
                    <div class="cheta-floatl">起点：</div>
                    <div class="cheta-track-time">
                      <span>{{moment(item.startDate).format("YYYY-MM-DD")}}</span>
                      <p> {{moment(item.startDate).format("HH:mm:ss")}}</p>
                    </div>
                    <div class="cheta-address cheta-font-ellipsis2" :title="startAddress">{{ startAddress }}</div>
                  </div>

                  <div slot="icon" class="cheta-floatl">
                    <i class="iconfont icon-qidian1 start"></i>
                  </div>
                </a-step>
                <a-step status="finish" title="">
                  <div slot="description" class="clearfix cheta-floatl">
                    <div class="cheta-floatl">终点：</div>
                    <div class="cheta-track-time">
                      <span>{{moment(item.endDate).format("YYYY-MM-DD")}}</span>
                      <p> {{moment(item.endDate).format("HH:mm:ss")}}</p>
                    </div>
                    <div class="cheta-address cheta-font-ellipsis2" :title="endAddress">{{ endAddress }}</div>
                  </div>
                  <div slot="icon" class="cheta-floatl">
                    <i class="iconfont icon-dingwei1 end"></i>
                  </div>
                </a-step>
              </a-steps>
            </a-col>
            <!--<a-col :span="6" :xs="24" :sm="12" :md="6" :xl="6">-->
              <!--<div class="cheta-address cheta-font-ellipsis2" :title="startAddress">{{ startAddress }}</div>-->
              <!--<div class="cheta-address cheta-font-ellipsis2" :title="endAddress">{{ endAddress }}</div>-->
            <!--</a-col>-->
            <a-col :span="14" :xs="24" :sm="12" :md="14" :xl="14">
              <div class="cheta-block clearfix">
                <ul style="float: left">
                  <li><i class="iconfont icon-chaosu cheta-color "></i><span>超速：未计算</span></li>
                  <li><i class="iconfont icon-jichache cheta-color"></i><span>急刹车：未计算</span></li>
                  <li><i class="iconfont icon-zanting cheta-color"></i><span>熄火：未计算</span></li>
                  <li><i class="iconfont icon-guiji cheta-color"></i><span>轨迹：未计算</span></li>
                  <li><i class="iconfont icon-licheng cheta-color"></i><span>里程：未计算</span></li>
                  <li><i class="iconfont icon-haoyouliang cheta-color"></i><span>耗油：未计算</span></li>
                </ul>
              </div>
            </a-col>
          </a-row>
          <a-row v-else>
            <a-col :span="24">
              <a-empty :description="`${item.title} 暂无数据`" class="cheta-pt-5 cheta-font-null"/>
            </a-col>
          </a-row>
        </div>
      </a-col>
      <a-col :span="4" class="right">
        <div class="circle">
          <a-progress type="circle" :percent="75" />
        </div>
      </a-col>
    </a-row>

  </div>
</template>
<script>
  import moment from 'moment';
  import MapUtil from './modules/MapUtil'
  import ACol from 'ant-design-vue/es/grid/Col'
  import { trackCar } from '@/views/application/car/api/router'
  import { mixinDevice } from '@/utils/mixin.js'
  export default {
    name: 'Play',
    data () {
      return {
        tableShow: true,
        MapUtil: MapUtil,
        // mapShow :false,
        // item: {},
        startAddress: '',
        endAddress: '',
      }
    },
    components: { ACol },
    props: {
      item: {
        type:Object
      },
      // list: {
      //   type:Array
      // },
      // date: {
      //   type:Object
      // },
      checkSingle :{
        type: Boolean,
        default:false
      }
    },
    mixins: [mixinDevice],

    created () {
      var that = this
      this.MapUtil.getAddress(this.item.startLng, this.item.startLat,function(geo){
        that.startAddress = geo.formattedAddress
        // that.item.startAddress = geo.formattedAddress
      })
      this.MapUtil.getAddress(this.item.endLng,this.item.endLat,function(geo){
        that.endAddress = geo.formattedAddress
        // that.item.endAddress = geo.formattedAddress
      })
    },
    methods:{
      moment,
      toggle (){
        // trackCar.apply(this,this.item.key)
        trackCar(this.$router,this.item.key)
        // this.$router.push({path:`/Car/Annal/${this.item.key}`})
        // this.$emit('mapShow',this.item)
        // this.$emit('toggleRoad',true)
      },
      ok(){
        // this.dateStart = this.date[0].format('YYYY-MM-DD HH:mm:ss')
        // this.dateEnd = this.date[1].format('YYYY-MM-DD HH:mm:ss')
        // this.$emit('mapShow',this.item,this.dateStart,this.dateEnd)
      }
    }
  }
</script>
<style lang="less">
  .cheta-track-play {
    /*.ant-steps-vertical > .ant-steps-item > .ant-steps-item-tail {*/
      /*padding: 34px 3px 6px!important;*/
    /*}*/
    /*.ant-steps-vertical .ant-steps-item {*/
      /*height: 50px!important;*/
    /*}*/
    .ant-steps-vertical > .ant-steps-item > .ant-steps-item-tail {
      left: 8px!important;
    }
    .ant-steps-item-custom .ant-steps-item-icon > .ant-steps-icon {
      line-height: 17px!important;
    }
    .ant-empty-description{padding-bottom: 5px!important;}
    .ant-steps-item-description .cheta-address {
        color: #333!important;
      }
  }
</style>

<style lang="less" scoped>
  .start{
    color: dodgerblue;
  }
  .end{
    color: orange;
  }
  .right{
    position: relative;
  }
  .close{
    display: inline-block;
    position: absolute;
    top: 3px;
    right: 10px;
  }
  ul li{
    width: 148px;
    margin: 0  0 0 47px;
    /*border:1px solid blue;*/
    min-height: 48px;
    float: left;
    line-height: 14px;
  }
  ul li span{
    padding-left: 5px;
  }
  li i{
    font-size:20px;
  }
  .circle{
    text-align: center;
    line-height: 120px;
    height: 120px;
    margin-top: 15px
  }
  .cheta-font-null{
    color: rgba(0, 0, 0, 0.45);
    font-size: 14px;
    font-family: Microsoft YaHei;
    font-weight: 400;
  }
  .desktop{
    .cheta-track-time {
      float: left;

    }
    .cheta-address{
      margin-left: 150px;
    }
  }


</style>