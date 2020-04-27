<template>
  <div class="cheta-height-full cheta-width-full cheta-box-flex">
    <div class="cheta-list cheta-height-full cheta-block" style="width: 360px;">
      <a-tabs class="cheta-height-full" defaultActiveKey="1">
        <a-tab-pane key="1">
          <span slot="tab">
            <span>新建线路</span>
          </span>
          <LineInfo ref="lineinfo" @loadLine="loadLine" @del="delMarket"></LineInfo>
        </a-tab-pane>
        <a-tab-pane key="2">
          <span slot="tab">
            历史线路
          </span>
          <LineHostory ref="linehository"></LineHostory>
        </a-tab-pane>
      </a-tabs>
    </div>
    <Map ref="Map" class="cheta-map cheta-block" @time="time"  @centers="centers" @end="end" @start="start" style="width: calc(100% - 360px)"></Map>
  </div>
</template>
<script>
  import Map from './Map'
  import LineInfo from './modules/LineInfo'
  import LineHostory from './modules/LineHostory'

  export default {
    components: { LineInfo, LineHostory, Map},
    data() {
      return {}
    },
    created () {
    },
    methods: {
      //刷新数据
      loadLine(){
        this.$refs.linehository.init();
      },
      time(params){
        this.$refs.lineinfo.distance = params.distance;
        this.$refs.lineinfo.time = params.time;
      },
      delMarket(index){
        this.$refs.Map.delMarket(index);
      },
      centers(lnglat){
        this.$refs.lineinfo.centers(lnglat);
      },
      end(id){
        this.$refs.lineinfo.end(id);
      },
      start(id){
        this.$refs.lineinfo.start(id);
      }

    }
  }
</script>
<style lang="scss">

</style>


<style lang="scss" scoped>
  .cheta-list{
    background: white;
    z-index: 1;
  }
  /*.cheta-map{*/
  /*calc(100% - 360px)*/
  /*}*/
</style>

