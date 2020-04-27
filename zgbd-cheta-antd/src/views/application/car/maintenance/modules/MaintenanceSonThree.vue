<template>
  <div class="topRight">
    <a-row>
      <a-col span="24">
        <div class="up">
          <a-row>
            <a-col span="12">
              <div class="upLeft">
                <div class="upLefttext">
                  <span>已逾期134</span>
                  <a-progress :percent="45" size="small" strokeColor="#FFC554"  :format="() => ''" />
                </div>
                <div class="upLefttext">
                  <span>本周内36</span>
                  <a-progress :percent="20" size="small" strokeColor="#662D91"   :format="() => ''" />
                </div>
                <div class="upLefttext">
                  <span>本月内166</span>
                  <a-progress :percent="50" size="small" strokeColor="#1CC09F"   :format="() => ''" />
                </div>


              </div>
            </a-col>
            <a-col span="12">
              <div class="upRight">
                <div class="upRightOne">339</div>
                <div class="upRightTwo">推荐保养车辆</div>
              </div>
            </a-col>
          </a-row>
        </div>
      </a-col>

    </a-row>
  </div>
</template>

<script>
  export default {
    data(){
      return {

      }
    },
    methods: {
    }
  }
</script>
<style scoped>
  .up{
    padding: 0px 20px;
  }
  .upRight{
    float: right;
    padding: 20px 0;
  }
  .topRight{
    height: 180px;
    margin: 10px;
    padding: 20px;
    background:rgba(255,255,255,1);
    box-shadow:0px 0px 5px 0px rgba(204,204,204,0.5);
    border-radius:3px;
  }
  .upRightOne{
    float: right;
    padding: 5px 0px;
    font-size:48px;
    font-family:Arial;
    font-weight:bold;
    color:rgba(51,51,51,1);
    line-height:40px;
  }
  .upRightTwo{
    float: right;
    padding: 5px 0px;
    font-size:16px;
    font-family:Microsoft YaHei;
    font-weight:bold;
    color:rgba(51,51,51,1);
    line-height:40px;
  }
  .upLefttext{
    /*padding: 6px 0;*/
  }
  .upLeft{
    width: 200px;
  }
  .upLefttext span{
    font-size:14px;
    font-family:Microsoft YaHei;
    color:rgba(102,102,102,1);
  }

</style>