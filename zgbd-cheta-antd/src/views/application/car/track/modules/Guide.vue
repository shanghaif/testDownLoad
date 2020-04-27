<template>
  <div class="cheta-width-full" style="background: white;">
    <div class="cheta-guide-step cheta-guide-step1">
      <div><img src="/image/car/体验金箭头.png" style="width: 263px"></div>
      <div><img src="/image/car/体验金箭头拷贝2.png"  style="width: 170px" @click="doStep2()"></div>
    </div>
    <div class="cheta-flex-center cheta-height-full">
      <div class="cheta-font-right"  style="width: 50%;">
        <img src="/image/car/跑道车.png" style="display: inline-block;">
      </div>
      <div class="cheta-width-full">
        <div class="cheta-guide-step cheta-guide-step2">
          <img src="/image/car/体验金箭头拷贝.png" @click="doStep3()">
        </div>
        <div class="cheta-track-desc">
          <p class="cheta-font24 cheta-font-height32">历史轨迹</p>
          <p class="cheta-font20">您尚未选择任何车辆轨迹信息，请您在左侧栏勾选相应车辆，再进行选择相应的日期 ：</p>
          <div class="cheta-mt-10">
            <a-button-group>
              <a-button @click="setDateByType('yesterday')" :type="type === 'yesterday' ? 'primary' : 'default'">昨日</a-button>
              <a-button @click="setDateByType('today')" :type="type === 'today' ? 'primary' : 'default'">今日</a-button>
              <a-button @click="setDateByType('week')" :type="type === 'week' ? 'primary' : 'default'">本周</a-button>
              <a-button @click="setDateByType('month')" :type="type === 'month' ? 'primary' : 'default'">本月</a-button>
            </a-button-group>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
  import moment from 'moment'
  export default {
    name: 'Guide',
    props: {
      guide: {
        type:Object
      },
      date: {
        type:Object
      }
    },
    data () {
      return {
        type: 'yesterday'
      }
    },
    created () {
      this.setDateByType(this.type);
    },
    methods: {
      moment,
      doStep2 () {
        this.guide.step = 'cheta-step2'
      },
      doStep3 () {
        this.guide.step = 'cheta-step3'
        this.guide.warp = ''
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
      },
      setDate (start, end) {
        this.date.str = [start.hour(0).minute(0).second(0), end.hour(23).minute(59).second(59)];
      }
    },
  }
</script>

<style lang="less" scoped>

  .cheta-guide-step{
    position: fixed;
    z-index: 10002;
  }
  .cheta-guide-step1{
    display: flex;
    align-items: center;
    justify-content: center;
    height: 100%;
    flex-direction: column;
  }
  .cheta-guide-step2 > img{
    top: -200px;
    position: relative;
    height: 200px;
  }
</style>