<template>
    <div class="topTwo">
      <div class="topTwoOne">
        <span class="titleOne">事故数</span>
        <a-popover trigger="hover">
          <template slot="content"  class="bubbleOne">
            <p>已处理30%</p>
          </template>
          <a-progress :percent="30" size="small"  :format="() => ''" class="cheta-color imgOne"/>
        </a-popover>
      </div>
      <div class="One-Up">
      <div class="inside">
        <div class="insideOne">事故数</div>
        <div class="insideTwo">399</div>
      </div>
      <div class="topTwoTwo">
        <v-chart class="circular" :forceFit="true" :height="height" :data="data">
          <v-tooltip />
          <v-coord type="polar" :innerRadius="0.4" />
          <v-sector position="year*population" color="year" :vStyle="sectorStyle" />
          <v-legend position="right" dataKey="year" :offsetX="-140" />
        </v-chart>
      </div>
      </div>
    </div>
</template>

<script>
  const data = [
    { year: '2001', population: 41.8 },
    { year: '2002', population: 38 },
    { year: '2003', population: 33.7 },
    { year: '2004', population: 30.7 },
    { year: '2005', population: 25.8 },
    { year: '2006', population: 31.7 },
    { year: '2007', population: 33 },
    { year: '2008', population: 46 },
    { year: '2009', population: 38.3 },
    { year: '2010', population: 28 },
    { year: '2011', population: 42.5 },
    { year: '2012', population: 30.3 },
  ];
  export default {
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
    padding: 5px 10px;
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
    margin: 10px;
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
    margin-left: 50%;
    margin-top: 75px;
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
    width: 80%;
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

</style>