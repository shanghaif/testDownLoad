<template>
  <!--事故数-->
    <div class="topTwo">
      <div class="topTwoOne">
        <span class="titleOne" >{{config[0].title}}</span>
        <span  v-if="config[0].ifPercent == 1">
          <a-popover trigger="hover">
            <template slot="content"  class="bubbleOne">
              <p class="title">{{config[0].content.content}}{{config[0].percent}}{{config[0].content.sign}}</p>
            </template>
            <a-progress :percent="config[0].percent" v-model="config[0].percent"  size="small"  :format="() => ''" class="cheta-color imgOne"/>
          </a-popover>
        </span>
      </div>
      <div class="One-Up">
      <div class="inside">
        <div class="insideOne">{{config[0].desc}}</div>
        <div class="insideTwo">{{config[0].content.value}}</div>
      </div>
      <div class="topTwoTwo">
        <v-chart class="circular" :forceFit="true" :height="height" :data="config[0].data">
          <v-tooltip />
          <v-coord type="polar" :innerRadius="0.4" />
          <v-sector position="year*population" color="year" :vStyle="sectorStyle" />
          <v-legend position="right" dataKey="year" :offsetX="-100" />
        </v-chart>
      </div>
      </div>
    </div>
</template>

<script>
  const data = [
    { year: 'A类型', population: 25 },
    { year: 'B类型', population: 10 },
    { year: 'C类型', population: 15 },
    { year: 'D类型', population: 35 },
    { year: 'E类型', population:  5 },
    { year: 'F类型', population: 10 },
  ];
  export default {
    props: {
      config: {
        type: Array,
        default: () => []
      }
    },
    data() {
      return {
        data,
        height: 260,
        sectorStyle: {
          stroke: "#fff",
          lineWidth: 1,
        },
      };
    }
  };
</script>
<style>
  .ant-popover-inner-content {
    padding: 0px 10px;
    color: rgba(0, 0, 0, 0.65);
    margin-bottom: -20px;
  }
  .ant-popover-placement-top > .ant-popover-content > .ant-popover-arrow {
    margin-bottom: -20px;
  }
  element.style {
    margin-top: -45px;
  }
</style>
<style scoped>
  .Two{
    width: 100%;
    height: 100%;
    position: relative;
  }
  .topTwo{
    width: 98%;
    margin: 10px 8px;
    height: 260px;
    background:rgba(255,255,255,1);
    box-shadow:0px 0px 5px 0px rgba(204,204,204,0.5);
    border-radius:3px;
    padding: 20px 0px 20px 0px;
  }
  .inside{
    z-index: 5;
    text-align: center;
    position: absolute;
    margin-left: 50.5%;
    margin-top: 76px;
  }
  .insideOne{
    font-size:14px;
    font-family:Microsoft YaHei;
    font-weight:400;
    color:rgba(51,51,51,1);
    line-height:15px;
  }
  .insideTwo{
    font-size: 20px;
    font-family: Arial;
    font-weight: bold;
    color: rgba(245,34,45,1);
    line-height: 30px;
  }
  .circular{
    width: 100%;
    height: 100%;
  }
  .One-Up{
    /*position: absolute;*/
  }
  .imgOne{
    float: right;
    width: 75%;
    padding: 9px 5px;
  }
  .titleOne{
    padding: 10px 20px;
    font-size:16px;
    font-family:Microsoft YaHei;
    font-weight:bold;
    color:rgba(51,51,51,1);
    line-height:40px;
  }
  .title{
    margin-top: 20px;
    margin-bottom: 0px;
    padding: 2px 0px;
  }

</style>