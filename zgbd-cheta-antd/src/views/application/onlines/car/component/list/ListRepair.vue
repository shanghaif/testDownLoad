<template>
    <div>
      <a-row>
        <a-col span="24">
          <div class="RepairTitle">维修项目</div>
        </a-col>
        <a-col span="6">
          <div class="RepairDiv">
            <a-row>
              <a-col span="8">
                <span class="Repairtext">维修单号:</span>
              </a-col>
              <a-col span="16">
                <span class="RepairContent">WC2019061217370</span>
              </a-col>
            </a-row>
          </div>
          <div class="RepairDiv">
            <span class="Repairtext">车牌号:</span>
            <span class="RepairContent">粤A-256w8</span>
          </div>
          <div class="RepairDiv">
            <span class="Repairtext">品牌车型:</span>
            <span class="RepairContent">四厢车</span>
          </div>
        </a-col>

        <a-col span="6">
          <div class="RepairDiv">
            <span class="Repairtext">维修厂:</span>
            <span class="RepairContent">广州市天天游汽车保养有限公司</span>
          </div>
          <div class="RepairDiv">
            <span class="Repairtext">进厂里程:</span>
            <span class="RepairContent">68256km</span>
          </div>
          <div class="RepairDiv">
            <span class="Repairtext">故障描述:</span>
            <span class="RepairContent">空调不制冷</span>
          </div>
        </a-col>

        <a-col span="6">
          <div class="RepairDiv">
            <span class="Repairtext">保险公司:</span>
            <span class="RepairContent">中国平安保险</span>
          </div>
          <div class="RepairDiv">
            <span class="Repairtext">定损员:</span>
            <span class="RepairContent">李思</span>
          </div>
        </a-col>

        <a-col span="6">
          <div class="RepairDiv">
            <span class="Repairtext">送修时间:</span>
            <span class="RepairContent">2019-11-05</span>
          </div>
          <div class="RepairDiv">
            <span class="Repairtext">交车时间:</span>
            <span class="RepairContent">2019-11-6</span>
          </div>
        </a-col>
      </a-row>






    </div>
</template>

<script>
  export default {
    name: 'ListRepair'
  }
</script>

<style scoped>
  .RepairTitle{
    line-height: 36px;
    text-align: center;
    font-size: 18px;
    font-family: "Microsoft YaHei";
    font-weight: bold;
    color: rgb(51,51,51,1);
  }
  .Repairtext{
    font-size: 14px;
    font-family: "Microsoft YaHei";
    font-weight: 400;
    color: rgb(153,153,153,1);
  }
  .RepairContent{
    font-size: 14px;
    font-family: "Microsoft YaHei";
    font-weight: 400;
    color: rgb(102,102,102,1);
  }
  .RepairDiv{
    line-height: 26px;
  }
</style>