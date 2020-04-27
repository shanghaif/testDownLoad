<template>
    <div>
      <!--上边-->
      <a-row>
        <a-col :xl="4" :lg="4" :md="4" :sm="8" :xs="8">
          <div class="top-head">
            <p>总车辆数</p>
            <span>22,344</span>
          </div>
        </a-col>
        <a-col :xl="4" :lg="4" :md="4" :sm="8" :xs="8">
          <div class="top-head">
            <p>私家车-车辆数</p>
            <span>2,344</span>
          </div>
        </a-col>
        <a-col  :xl="4" :lg="4" :md="4" :sm="8" :xs="8">
          <div class="top-head">
            <p>货车-车辆数</p>
            <span>2,344</span>
          </div>
        </a-col>
        <a-col  :xl="4" :lg="4" :md="4" :sm="8" :xs="8">
          <div class="top-head">
            <p>大巴车-车辆数</p>
            <span>12,344</span>
          </div>
        </a-col>
        <a-col  :xl="4" :lg="4" :md="4" :sm="8" :xs="8">
          <div class="top-head">
            <p>卡车-车辆数</p>
            <span>2,344</span>
          </div>
        </a-col>
        <a-col  :xl="4" :lg="4" :md="4" :sm="8" :xs="8">
          <div class="top-head">
            <p>出租车-车辆数</p>
            <span>2,344</span>
          </div>
        </a-col>
        <!--第二行-->
       <!--第二行第一个-->


        <a-col :xl="12" :lg="12" :md="12" :sm="24" :xs="24" style="padding-right: 20px;">
          <div class="top-body">
            <a-row>
              <a-col  :span="24">
                <h3>计算</h3>
              </a-col>
              <a-col :span="12">
                <p>今日工作总车辆</p>
                <span style="color: #F0766D">2352</span>
                <p>状况不错，保持住哦！</p>
              </a-col>
              <a-col :span="12">
                <p>今日计算消耗</p>
                <span>33.45</span>
                <p>环比   16.59%</p>
              </a-col>
              <!--第三行第一个-->
              <a-col :span="24">
                <div class="top-body-left">
                  <a-row>
                    <a-col :span="8">
                      <div>
                        <p style="color: #697b8c">
                          当日计算费用：
                        <span style="font-size: 14px">
                          2.35亿元
                        </span>
                        </p>
                      </div>

                    </a-col>
                    <a-col :span="8">
                      <div>
                        <p style="color: #697b8c">
                          当日计算费用：
                          <span style="font-size: 14px">
                          2.35亿元
                        </span>
                        </p>
                      </div>

                    </a-col>
                    <a-col :span="8">
                      <div>
                        <p style="color: #697b8c">
                          当日计算费用：
                          <span style="font-size: 14px">
                          2.35亿元
                        </span>
                        </p>
                      </div>

                    </a-col>
                  </a-row>
                </div>
              </a-col>
            </a-row>
          </div>
        </a-col>
        <!--第二行第二个-->
        <a-col :xl="12" :lg="12" :md="12" :sm="24" :xs="24"  style="padding-left: 20px">
          <div class="top-body">
            <a-row>
              <a-col  :span="24">
                <h3>储存</h3>
              </a-col>
              <a-col :span="12">
                <p>今日储存总车辆</p>
                <span style="color: #F8DB53">67.91</span>
                <p>刚刚及格，请继续改进！</p>
              </a-col>
              <a-col :span="12">
                <p>今日储存消耗</p>
                <span>53.45</span>
                <p>环比   6.37%</p>
              </a-col>
              <!--第三行第二个-->
              <a-col :span="24">
                <div class="top-body-right">
                  <a-row>
                    <a-col :span="8">
                      <div>
                        <p style="color: #697b8c">
                          当日计算费用：
                          <span style="font-size: 14px">
                          2.35亿元
                        </span>
                        </p>
                      </div>

                    </a-col>
                    <a-col :span="8">
                      <div>
                        <p style="color: #697b8c">
                          当日计算费用：
                          <span style="font-size: 14px">
                          2.35亿元
                        </span>
                        </p>
                      </div>

                    </a-col>
                    <a-col :span="8">
                      <div>
                        <p style="color: #697b8c">
                          当日计算费用：
                          <span style="font-size: 14px">
                          2.35亿元
                        </span>
                        </p>
                      </div>

                    </a-col>
                  </a-row>
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
    name: 'CardOne'
  }
</script>

<style scoped>
  .top-head , .top-body{
    text-align: center;
    margin: 25px 0px;
  }
  .top-head span{
  font-family: 'Arial Negreta', 'Arial Normal', 'Arial';
  font-size: 22px;
  color: #333333;
  text-align: center;
}
  .top-head p{
    font-family: 'Arial Negreta', 'Arial Normal', 'Arial';
    font-size: 16px;
  }
  .top-body span{
    font-family: 'Arial Negreta', 'Arial Normal', 'Arial';
    font-size: 40px;
    color: #333333;
    text-align: center;
  }
  .top-body p{
    margin: 5px 0px;
  }

  .top-body h3{
    float: left;
    margin: 10px 0px;
    margin-left: 20px;
  }
  .top-body-left,.top-body-right{
    background-color: #F1F7FF;
    margin-top: 35px;
  }
  .top-body-left p,.top-body-right p{
    margin: 15px 0px;
  }
</style>