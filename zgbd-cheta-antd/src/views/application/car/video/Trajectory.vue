<template>
  <div class="trajectory">
    <div>
      <a-col class="cheta-positionr">
        <div class="cheta-plt-50 total">
          <span class="cheta-dash cheta-positiona dash"></span>
          <div class="cheta-positionr cheta-mlr-20 road">
            <div class="cheta-positiona cheta-badge badge-first">
            </div>
            <!--<div class="cheta-positiona cheta-badge badge" v-for="item in carHistoryList" :style="'left: calc(' + item.ratio*91 + '%);'">{{item.address}}-->
            <!--</div>-->
            <div class="cheta-positiona cheta-badge-disabled cheta-badge">
            </div>
            <a-progress class="cheta-positiona" :percent="ratio" :showInfo="false" />
            <i class="cheta-positiona cheta-car-img" @mousedown.prevent="move($event,v.ratio)" v-for="(v,k) in carList" :key="k" :id="'car' + k" :style="'left: calc(' + ratio + '%)'">
              <!--<span class="cheta-positiona cheta-car-style cheta-font32 cheta-pr-10 cheta-pl-36 cheta-space10 cheta-location location">{{ v.address }}</span>-->
              <!--<span v-if="address" class="cheta-positiona cheta-car-style cheta-plr-10 time">{{ address }}</span>-->
            </i>
          </div>
        </div>
      </a-col>
    </div>
    <div class="cheta-mb-10">
      <a-col>
        <div class="cheta-font-align cheta-events">
          <i :style="{visibility:isPlay ? 'visible' : 'hidden'}" class="iconfont icon-shuaxin1 cheta-font28 cheta-m-10 cheta-color"></i>
          <i class="iconfont icon-houtui cheta-m-10 cheta-font28 cheta-color"></i>
          <i v-if="isPlay" class="iconfont icon-zanting cheta-m-10 cheta-font33 cheta-color" @click="trackStop"></i>
          <i v-else class="iconfont icon-zanting1 cheta-m-10 cheta-font33 cheta-color" @click="trackPlay"></i>
          <i class="iconfont icon-kuaijin1 cheta-m-10 cheta-font28 cheta-color"></i>
          <span class="cheta-font22 cheta-m-10">{{ speedNum }} X</span>
        </div>
      </a-col>
    </div>
  </div>
</template>
<script>
  import moment from 'moment'
  // import {getAction,postAction} from '@/api/manage'
  // import MapUtil from './modules/MapUtil'
  // import Play from './Play'
  export default {
    name: 'Trajectory',
    // components: { Play },
    data () {
      return {
        speedNum: 1.0,
        gpsData: [],
        ratio: 20,
        date: moment('2019-09-01'),
        data: '',
        carList: [
          {ratio:0.4,address:'黄埔区',time:'13:00'}
          ],
        isPlay: false,
      }
    },

    methods:{
      moment,
      move(e, ratio) {
        let odiv = e.target        //获取目标元素
        let road = document.querySelector('.road').offsetWidth
        //算出鼠标相对元素的位置
        let disX = e.clientX - odiv.offsetLeft
        var carWidth = odiv.offsetWidth;
        var that = this;
        document.onmousemove = (e) => {       //鼠标按下并移动的事件
          //用鼠标的位置减去鼠标相对元素的位置，得到元素的位置
          let left = e.clientX - disX
          if (left >= 0 && left <= road - carWidth ) {
            odiv.style.left = left + 'px'
          }
          that.carHistoryList.forEach(carHistory => {
              this.address = carHistory.address
          })
        }
        document.onmouseup = () => {
          document.onmousemove = null
          document.onmouseup = null
        }
      },

      trackPlay () {
        this.isPlay = true
        // this.moveByIndex()

      },

      trackStop () {
        this.isPlay = false
      }
    }
  }
</script>
<style lang="less">
  .trajectory .ant-fullcalendar-header {
    padding: 6px 16px 6px 0!important;
    /*border-bottom: 0.3px solid rgba(240, 242, 245, 1)!important;*/
    border-bottom: 0.3px solid #F0F2F5!important;
    height: 36px!important;
  }
</style>
<style lang="less" scoped>
  .road{
    height: 8px;
    background: #E8E8E8;
  }
  .badge-first{
    left: 0;
    top: 0px;
    z-index: 333;
  }
  .road .badge{
    left: 0;
    top: 0px;
    z-index: 333;
  }
  .ant-progress{
    left: 0;
    top: -9px;
  }
  .dash{
    left: 0;
    top: 54px;

  }
  .road i{
    top:-32px;
  }
  .road i .location{
    top: -40px;
    height: 32px;
    color: #333;

  }
  .road i .time{
    top: 45px;
    height: 22px;
    color: #555;
  }
  .close{
    line-height: 36px;
  }

  ul li{
    width: 148px;
    margin: 0  0 0 47px;
    /*border:1px solid blue;*/
    float: left;
  }
  ul li span{
    padding-left: 5px;
  }
  li i{
    font-size:20px;
  }
  .cheta-car-img{width: 60px;height: 32px;background: url(~@/assets/image/carteam/car.png) no-repeat;}
  .cheta-location{background: #fff url(~@/assets/image/carteam/location.png) no-repeat 10px center;border: 1px solid rgba(232,232,232,1);}
</style>