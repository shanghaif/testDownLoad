<template>
  <div style=" padding: 20px;">
    <a-row :gutter="16">
      <a-col :span="24">
        <div class="shang">
          <!--头部背景色和透明度-->
          <a-card :xl="24" :lg="24" :md="24" :sm="24" :xs="24" class="cheta-bg" style="opacity: 0.6">
            <div class="top">
              <!--头部的上半部分-->
              <a-row>
                <a-col :xl="4" :lg="4" :md="6" :sm="8" :xs="24"><span style="color: white;font-size: 20px;">安全管家服务</span></a-col>
                <a-col :xl="18" :lg="18" :md="16" :sm="14" :xs="21"><span style="color: white;line-height: 20px">完善单位日常安全管理工作，避免安全事件的发生</span></a-col>
                <a-col :xl="2" :lg="2" :md="2" :sm="2" :xs="3">
                  <a href="#" style="float: right ;color: white">[管理]</a>
                </a-col>
              </a-row>
            </div>
            <!--头部的下半部分-->
            <div class="top-top">
              <a-row>
                <!--左边的分数-->
                <a-col :xl="5" :lg="8" :md="8" :sm="8" :xs="24" style="text-align: -webkit-center">
                  <div class="top-top-number" style="color: white;text-align: center;"><span style="font-size: 60px;">78</span>分</div>
                </a-col>
                <!--右边数据-->
                <div :xl="19" :lg="16" :md="16" :sm="16" :xs="24">
                  <a-row>
                    <a-col :xl="6" :lg="5" :md="5" :sm="5" :xs="24">
                      <div style="color: white;text-align: center"><span style="font-size: 40px;">60</span>天
                        <p style="margin-bottom: 25px">云安全防护</p>
                      </div>
                    </a-col>
                    <a-col :xl="6" :lg="5" :md="5" :sm="5" :xs="24">
                      <div style="color: white;text-align: center"><span style="font-size: 40px;">15</span>个
                        <p style="margin-bottom: 25px">实时防护资产</p>
                      </div>
                    </a-col>
                    <a-col :xl="6" :lg="5" :md="5" :sm="5" :xs="24">
                      <div style="color: white;text-align: center"><span style="font-size: 40px;">8</span>次
                        <p style="margin-bottom: 25px">云安全防护</p>
                      </div>
                    </a-col>
                    <a-col>
                      <div>
                        <row>
                          <a-col :xl="6" :lg="5" :md="6" :sm="6" :xs="24">

                            <a-popover trigger="hover">
                              <template slot="content" style="position: relative">
                                <p style="margin: -5px 0px -5px 0px">今日已拦截恶意网站 32536546个，比历史平均值高<span class="cheta-color">5.00%</span> </p>
                              </template>
                              <div style="color: white;margin-top: 10px;text-align: center"><span style="font-size: 15px">单位整体安全状况：良好</span></div>
                            </a-popover>

                          </a-col>
                          <a-col :xl="6" :lg="5" :md="5" :sm="5" :xs="24">
                            <div style="color: white;margin-top: 10px;text-align: center;">
                              <a-popover trigger="hover">
                                <template slot="content" style="position: relative">
                                  <p style="margin: -5px 0px -5px 0px">今日已拦截恶意网站 32536546个，比历史平均值高<span class="cheta-color">5.00%</span> </p>
                                </template>
                                <div type="primary">
                                  <img src="@/assets/image/reminder/zichan.png" style="margin-top: -3px;display: inline-block">
                                  <span style="margin-left: 8px;font-size: 15px;">资产：32个</span>
                                  <span style="font-size: 12px;margin-left: 14px;font-size: 12px;">[管理]</span>
                                </div>
                              </a-popover>

                            </div>
                          </a-col>
                          <a-col :xl="6" :lg="5" :md="5" :sm="5" :xs="24">

                            <div style="color: white;margin-top: 10px;text-align: center">
                              <a-popover trigger="hover">
                                <template slot="content" style="position: relative">
                                  <p style="margin: -5px 0px -5px 0px">今日已拦截恶意网站 32536546个，比历史平均值高<span class="cheta-color">5.00%</span> </p>
                                </template>
                                <div type="primary"> <img src="@/assets/image/reminder/yujing.png" style="margin-top: -3px;display: inline-block">
                                  <span style="font-size: 15px;margin-left: 8px">预警：1284次</span>
                                </div>
                              </a-popover>

                            </div>
                          </a-col>
                        </row>
                      </div>

                    </a-col>
                  </a-row>
                </div>
              </a-row>
            </div>
          </a-card>
        </div>
        <!--中间-->
      </a-col>
      <a-col :span="24">
        <div>
          <a-card  :bordered=false style="margin-top: 15px">
            <div>
              <a-row>
                <a-col :xl="6" :lg="6" :md="6" :sm="6" :xs="12">
                  <div style="text-align: center;margin: 15px 0px 10px 0px;">
                    <div class="imgLOGO">
                      <img src="@/assets/image/reminder/anquan1.png">
                    </div>

                    <P style="font-size: 19px;margin: 20px 0px 4px 0px">安全管理</P>
                    <p>发现<span class="cheta-color" style="margin: 0px 2px">2</span>项问题</p>
                  </div>
                </a-col>
                <a-col :xl="6" :lg="6" :md="6" :sm="6" :xs="12">
                  <div style="text-align: center;
                  margin: 15px 0px 10px 0px;">
                    <div class="imgLOGO">
                      <img src="@/assets/image/reminder/dunpai1.png">
                    </div>
                    <P style="font-size: 19px;margin: 20px 0px 4px 0px">安全防护</P>
                    <p>发现<span class="cheta-color" style="margin: 0px 2px">2</span>项问题</p>
                  </div>
                </a-col>
                <a-col :xl="6" :lg="6" :md="6" :sm="6" :xs="12">
                  <div style="text-align: center;margin: 15px 0px 10px 0px;">
                    <div class="imgLOGO">
                    <img src="@/assets/image/reminder/yingji1.png">
                    </div>
                    <P style="font-size: 19px;margin: 20px 0px 4px 0px">应急管理</P>
                    <p>发现<span class="cheta-color" style="margin: 0px 2px">2</span>项问题</p>
                  </div>
                </a-col>
                <a-col :xl="6" :lg="6" :md="6" :sm="6" :xs="12">
                  <div style="text-align: center;margin: 15px 0px 10px 0px;">
                    <div class="imgLOGO">
                      <img src="@/assets/image/reminder/peixun1.png">
                    </div>
                    <P style="font-size: 19px;margin: 20px 0px 4px 0px">安全培训</P>
                    <p>发现<span class="cheta-color" style="margin: 0px 2px">2</span>项问题</p>
                  </div>
                </a-col>
              </a-row>
            </div>
          </a-card>
        </div>
      </a-col>
      <!--下面-->
      <!--下面左边-->
      <a-col :xl="18" :lg="14" :md="24" :sm="24" :xs="24">
        <a-card title="我的云服务" :bordered=false style="margin-top: 19px">
          <a-row>
            <!--下边左边内部的左边-->
            <a-col :xl="16" :lg="24" :md="24" :sm="24" :xs="24">
              <div>
              <a-row>
                <a-col :xl="24" :lg="24" :md="24" :sm="24" :xs="24">
                  <span class="cheta-color" style="float: left;margin-top: 20px">已开通</span>
                </a-col>
                <!--内容-->
                <a-col :xl="6" :lg="6" :md="6" :sm="12" :xs="24">
                  <div style="text-align: center;margin: 45px 0px 10px 0px;">
                    <img src="@/assets/image/reminder/fanghuoqiang.png" style="margin: 0 auto">
                    <p style="margin: 20px 0px 4px 0px">防御服务</p>
                  </div>
                </a-col>
                <a-col :xl="6" :lg="6" :md="6" :sm="12" :xs="24">
                  <div style="text-align: center;margin: 45px 0px 10px 0px;">
                    <img src="@/assets/image/reminder/jixian.png" style="margin: 0 auto">
                    <p style="margin: 20px 0px 4px 0px">基线核查</p>
                  </div>
                </a-col>
                <a-col :xl="6" :lg="6" :md="6" :sm="12" :xs="24">
                  <div style="text-align: center;margin: 45px 0px 10px 0px;">
                    <img src="@/assets/image/reminder/loudong.png" style="margin: 0 auto">
                    <p style="margin: 20px 0px 4px 0px">漏洞自检</p>
                  </div>
                </a-col>
                <a-col :xl="6" :lg="6" :md="6" :sm="12" :xs="24">
                  <div style="text-align: center;margin: 45px 0px 10px 0px;">
                    <img src="@/assets/image/reminder/daima.png" style="margin: 0 auto">
                    <p style="margin: 20px 0px 4px 0px">检测服务</p>
                  </div>
                </a-col>
              </a-row>
              </div>
            </a-col>
            <!--我的云服务右边-->
            <a-col :xl="8" :lg="24" :md="24" :sm="24" :xs="24" style="margin-bottom: 20px">
              <div>
                <a-row>
                  <a-col :xl="24" :lg="24" :md="24" :sm="24" :xs="24">
                    <span class="cheta-color" style="float: left;margin-top: 20px">系统推荐</span>
                  </a-col>
                  <!--内容-->
                  <a-col :xl="12" :lg="12" :md="12" :sm="12" :xs="24">
                    <div style="text-align: center;margin: 45px 0px 10px 0px;">
                      <img src="@/assets/image/reminder/zixun.png" style="margin: 0 auto">
                      <p style="margin: 20px 0px 4px 0px">咨询客服</p>
                    </div>
                  </a-col>
                  <a-col :xl="12" :lg="12" :md="12" :sm="12" :xs="24">
                    <div style="text-align: center;margin: 45px 0px 10px 0px;">
                      <img src="@/assets/image/reminder/APP.png" style="margin: 0 auto">
                      <p style="margin: 20px 0px 4px 0px">APP安全</p>
                    </div>
                  </a-col>
                </a-row>
              </div>
            </a-col>
          </a-row>
        </a-card>

      </a-col>

      <!--下面右边-->
      <a-col :xl="6" :lg="10" :md="24" :sm="24" :xs="24">
        <div>
          <a-card title="云服务动态" :bordered=false style="margin-top: 19px">
            <a href="#" slot="extra">[查看]</a>
            <div>
              <a-row>
                <a-col :span="24">
                  <!--第一条-->
                  <a-row>
                    <!--日期-->
                    <a-col :span="24">
                      <div style="float: left;margin: 15px 0px 0px 0px;color: #666666">2018年3月</div>
                    </a-col>
                    <!--内容-->
                    <a-col :span="24">
                      <div style="float: left;margin: 10px 0px;">
                        <a-timeline>
                          <a-timeline-item color="green">
                            <!--日期-->
                            <span class="cheta-color" style="opacity: 0.6; margin: 0px 12px 0px 8px">07.18</span>发现
                            <span class="cheta-color" style="opacity: 0.6;margin: 0px 3px">34</span>个安全漏洞，请及时处理！</a-timeline-item>
                          <a-timeline-item color="green">
                            <!--日期-->
                            <span class="cheta-color" style="opacity: 0.6; margin: 0px 12px 0px 8px">07.02</span>发现
                            <span>3</span>个安全事件，请及时处理！</a-timeline-item>
                          <a-timeline-item color="red">
                            <!--日期-->
                            <span class="cheta-color" style="opacity: 0.6; margin: 0px 12px 0px 8px">06.27</span>
                            <div style="padding-left: 20%">
                            <p> 应急管理发现问题</p>
                            <p>日常工作安排未就绪</p>
                            </div>
                          </a-timeline-item>
                        </a-timeline>
                      </div>
                    </a-col>
                  </a-row>



                </a-col>
              </a-row>
            </div>
          </a-card>
        </div>

      </a-col>
    </a-row>
  </div>

</template>

<script>
  import ARow from 'ant-design-vue/es/grid/Row'
  import ACol from 'ant-design-vue/es/grid/Col'
  export default {
    name: 'reminder',
    components: {
      ACol,
      ARow
    },

  }
</script>

<style scoped>
  /*头部字体颜色*/

  .top .top-top {
    color: white;
  }

.imgLOGO img{
  margin:  0 auto;
}
  .top-top {
    margin: 20px 30px;
  }

  .top-top-number {
    width: 130px;
    height: 130px;
    margin-bottom: 15px;
    line-height: 130px;
    border-radius: 50%;
    border: 2px solid white;
    box-shadow: 1px 1px 5px white;
  }
li{
  padding-bottom: -20px;
}
  .top-top-number span {
    font-size: 18px;
  }
</style>