<template>
    <div>
<a-row>
  <a-col :span="24">
    <div>
      <a-row>
        <a-col :span="24">
          <div>
            <a-breadcrumb separator="/" style="padding: 0px 24px 0;">
              <a-breadcrumb-item>智慧管车</a-breadcrumb-item>
              <a-breadcrumb-item>司机管理</a-breadcrumb-item>
              <a-breadcrumb-item href="" @click.native="cutMenu({title: 'nav'})">
                <span :style="{fontWeight: currentMenu == 'nav' ? 'bold' : ''}">详细信息</span>
              </a-breadcrumb-item>
              <!--返回按钮-->
              <!--<a-breadcrumb-item v-if="currentMenu != 'nav'">-->
              <!--<span :style="{fontWeight: 'bold'}">{{ currentMenu }}</span><br>-->
              <!--<a-button icon="arrow-left" @click="doHistory()" style="margin-top: 10px;"></a-button>-->
              <!--</a-breadcrumb-item>-->
            </a-breadcrumb>
          </div>
        </a-col>
        <a-col :span="23"><div class="body-xuexi cheta-color"><a-icon type="read" /> 安全学习</div></a-col>
      </a-row>
    </div>


  </a-col>
  <a-col :span="24">
    <!--中间-->
    <div>
      <a-row>
        <a-col :xl="6" :lg="12"  :md="24" :sm="24"  :xs="24">
          <!--左边-->
          <div class="top">
            <div class="top-shang">
              <!--图片-->
              <div class="top-shang-img">
                <img src="/image/workplace/touxiang.png" alt="">
              </div>
              <!--文字-->
              <div class="top-shang-wenzi">
                <span>9.2</span>
                <p>安全评分</p>
              </div>
            </div>
            <div class="top-xia">
            <span class="top-name">林小小</span>
            <p class="top-gongsi">广州XXX环卫集团 -- <span>司机</span></p>
            <p class="top-zhuangtai"> <span class="top-jindutiao"></span>状态：<span class="cheta-color">已出车</span></p>
            </div>


          </div>
        </a-col>
        <a-col :xl="5" :lg="12"  :md="24" :sm="24"  :xs="24">
          <!--中间1-->
          <div class="top-zhong">
            <p>性&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;别：<span>男</span></p>
            <p>车&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;牌：<span>粤ADU564</span></p>
            <p>驾驶分数：<span>男</span></p>
            <p>驾&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;龄：<span>男</span></p>
            <p>准驾车龄：<span>男</span></p>
            <p>证&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;号：<span>109***********836</span> <a-icon type="eye-invisible" style="margin-left: 7px"/></p>
            <p>身份证号：<span>449***********935</span> <a-icon type="eye-invisible" style="margin-left: 7px"/></p>
          </div>
        </a-col>
        <a-col :xl="5" :lg="12"  :md="24" :sm="24"  :xs="24">
          <!--中间2-->
          <div class="top-zhong">
            <p>邮&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;箱：<span>男</span></p>
            <p>联系方式：<span>粤ADU564</span></p>
            <p>出生日期：<span>1992-03-11</span></p>
            <p>初次领证：<span>2008-09-25</span></p>
            <p>有效起始：<span>2008-07-19</span></p>
            <p>有限期限：<span>10年</span></p>
            <p>住&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;址：<span>XX省XX市XX街</span></p>
          </div>
        </a-col>
        <a-col :xl="8" :lg="12"  :md="24" :sm="24"  :xs="24">
          <!--右边-->
          <div class="top-right">
            <div class="top-right-img">
              <div class="top-right-imgone">
                <a href="#">
                <div class="top-right-imgone-one"><img src="/image/workplace/sptupianb.png" alt=""></div>
               <div class="top-right-imgzan">
                 <img src="/image/workplace/shipin.png" class="top-right-imgzanting" alt="" style="width: 51px;height: 47px;margin-left: -20px;margin-top: -115px;position: absolute">
               </div>
                </a>
              </div>
              <div class="top-right-imgtwo">
                <div class="top-right-imgtwo-one">
                  <img src="/image/workplace/sptupiana.png" alt="">
                </div>
                <div class="top-right-imgtwo-two">
                  <span>车牌号：粤ADU556</span>
                </div>

              </div>
            </div>
            <div class="top-right-logo cheta-color"><a href="#"><a-icon type="link" /> 绑定<a-icon type="double-right" /></a></div>
          </div>
        </a-col>
        <!--下边选项卡-->
        <a-col :span="24">
          <div>
            <a-tabs defaultActiveKey="1" @change="callback">
              <a-tab-pane tab="驾驶行为" key="1">
                <div>
                  <a-row>
                    <!--日期选择-->
                    <a-col :span="24">
                      <div>
                        <!--日历-->
                        <div class="body-rili">
                          <a-range-picker>
                          <template slot="dateRender" slot-scope="current">
                            <div class="ant-calendar-date" :style="getCurrentStyle(current)">
                              {{current.date()}}
                            </div>
                          </template>
                        </a-range-picker>
                        </div>
                      </div>
                    </a-col>
                    <!--时间轴-->
                    <a-col :span="24">
                      <div class="body-shijianzhou">
                        <a-row>
                              <a-col :xl="4" :lg="8"  :md="10" :sm="10"  :xs="10">
                                  <div>
                                    <div>
                                      <div  class="body-shijianzhou-zuo" style="margin-top: 94px" :style="xianshiOne">
                                          <!--左边-->
                                          <span class="zuobian-xingche" >行车超速</span>
                                          <span class="zuobian-shijian" >16号 &nbsp;&nbsp;15:00:01</span>
                                      </div>
                                    </div>
                                    <div>
                                        <div  class="body-shijianzhou-zuo" style="margin-top: 200px" :style="xianshiTwo">
                                          <!--左边-->
                                          <span class="zuobian-xingche" style="color:rgba(28,192,159,1);">车速正常</span>
                                          <span class="zuobian-shijian" >18号 &nbsp;&nbsp;15:00:01</span>
                                        </div>
                                    </div>
                                            <div>
                                              <div  class="body-shijianzhou-zuo" style="margin-top: 302px" :style="xianshiThree" >
                                                  <!--左边-->
                                                  <span class="zuobian-xingche" style="color:rgba(28,192,159,1);" >车速正常</span>
                                                  <span class="zuobian-shijian" >22号 &nbsp;&nbsp;15:00:01</span>
                                              </div>
                                            </div>
                                    <div>
                                      <div  class="body-shijianzhou-zuo" style="margin-top: 405px" :style="xianshiFour" >
                                        <!--左边-->
                                        <span class="zuobian-xingche" style="color:rgba(28,192,159,1);">车速正常</span>
                                        <span class="zuobian-shijian" >29号 &nbsp;&nbsp;15:00:01</span>
                                      </div>
                                    </div>

                                    </div>
                              </a-col>
                          <!--右边-->
                          <a-col  :xl="20" :lg="16"  :md="14" :sm="14"  :xs="14">
                            <div class="yuefen">9月</div>
                          <div class="body-shijianzhou-you">
                            <a-timeline>
                              <a-timeline-item class="shijianzhou" @mouseover="mouseOverOne"  @mouseleave="mouseLeaveOne"  color="green">
                                <div class="shijianzhou-xianshi shijianzhou-xianshione" :style="active"><span class="chesu" style="color: red">行车超速</span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="shijian">20号&nbsp;&nbsp;15:00:01</span></div>
                                <!--第一个-->
                                <div class="shijianzhou-yinchang" :style="activeOne">
                                  <!--第一行-->
                                  <a-row>
                                  <div class="shijianzhou-yinchang-one">
                                    <a-col  :xl="8" :lg="8"  :md="12" :sm="24"  :xs="24">
                                    <div class="shijianzhou-yinchang-onea"><a-icon type="user" />驾驶行为：<span>已超速</span></div>
                                    </a-col>
                                     <a-col  :xl="16" :lg="16"  :md="12" :sm="24"  :xs="24">
                                      <div class="shijianzhou-yinchang-onea"><a-icon type="clock-circle" />持续时间：<span>2分钟</span></div>
                                     </a-col>
                                  </div>
                                  </a-row>
                                  <!--第二行-->
                                  <a-row>
                                    <div class="shijianzhou-yinchang-two">
                                          <a-col  :xl="8" :lg="8"  :md="12" :sm="24"  :xs="24">
                                            <div class="shijianzhou-yinchang-onea"><a-icon type="dashboard" />当时车速：<span>130km/h</span></div>
                                           </a-col>
                                          <a-col  :xl="16" :lg="16"  :md="12" :sm="24"  :xs="24">
                                             <div class="shijianzhou-yinchang-onea"><a-icon type="environment" />地点：<span>广东省广州市天河区大观路9号</span></div>
                                          </a-col>
                                    </div>
                                    </a-row>
                                </div>
                              </a-timeline-item>
                              <a-timeline-item class="shijianzhou"  @mouseover="mouseOverTwo"  @mouseleave="mouseLeaveTwo"  color="green">
                                <div class="shijianzhou-xianshi shijianzhou-xianshione"  :style="activeO" ><span class="chesu">车速正常</span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="shijian">20号&nbsp;&nbsp;15:00:01</span></div>
                                <!--第二个-->
                                <div class="shijianzhou-yinchang":style="activeTwo">
                                  <!--第一行-->
                                  <a-row>
                                    <div class="shijianzhou-yinchang-one">
                                      <a-col  :xl="8" :lg="8"  :md="12" :sm="24"  :xs="24">
                                        <div class="shijianzhou-yinchang-onea"><a-icon type="user" />驾驶行为：<span>已超速</span></div>
                                      </a-col>
                                      <a-col  :xl="16" :lg="16"  :md="12" :sm="24"  :xs="24">
                                        <div class="shijianzhou-yinchang-onea"><a-icon type="clock-circle" />持续时间：<span>2分钟</span></div>
                                      </a-col>
                                    </div>
                                  </a-row>
                                  <!--第二行-->
                                  <a-row>
                                    <div class="shijianzhou-yinchang-two">
                                      <a-col  :xl="8" :lg="8"  :md="12" :sm="24"  :xs="24">
                                        <div class="shijianzhou-yinchang-onea"><a-icon type="dashboard" />当时车速：<span>130km/h</span></div>
                                      </a-col>
                                      <a-col  :xl="16" :lg="16"  :md="12" :sm="24"  :xs="24">
                                        <div class="shijianzhou-yinchang-onea"><a-icon type="environment" />地点：<span>广东省广州市天河区大观路9号</span></div>
                                      </a-col>
                                    </div>
                                  </a-row>
                                </div>
                              </a-timeline-item>
                              <a-timeline-item class="shijianzhou"  @mouseover="mouseOverThree"  @mouseleave="mouseLeaveThree"  color="green">
                                <div class="shijianzhou-xianshi shijianzhou-xianshione"  :style="activeT" ><span class="chesu">车速正常</span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="shijian">20号&nbsp;&nbsp;15:00:01</span></div>
                                <!--第三个-->
                                <div class="shijianzhou-yinchang":style="activeThree">
                                  <!--第一行-->
                                  <a-row>
                                    <div class="shijianzhou-yinchang-one">
                                      <a-col  :xl="8" :lg="8"  :md="12" :sm="24"  :xs="24">
                                        <div class="shijianzhou-yinchang-onea"><a-icon type="user" />驾驶行为：<span>已超速</span></div>
                                      </a-col>
                                      <a-col  :xl="16" :lg="16"  :md="12" :sm="24"  :xs="24">
                                        <div class="shijianzhou-yinchang-onea"><a-icon type="clock-circle" />持续时间：<span>2分钟</span></div>
                                      </a-col>
                                    </div>
                                  </a-row>
                                  <!--第二行-->
                                  <a-row>
                                    <div class="shijianzhou-yinchang-two">
                                      <a-col   :xl="8" :lg="8"  :md="12" :sm="24"  :xs="24">
                                        <div class="shijianzhou-yinchang-onea"><a-icon type="dashboard" />当时车速：<span>130km/h</span></div>
                                      </a-col>
                                      <a-col :xl="16" :lg="16"  :md="12" :sm="24"  :xs="24">
                                        <div class="shijianzhou-yinchang-onea"><a-icon type="environment" />地点：<span>广东省广州市天河区大观路9号</span></div>
                                      </a-col>
                                    </div>
                                  </a-row>
                                </div>
                              </a-timeline-item>
                              <a-timeline-item class="shijianzhou"  @mouseover="mouseOverFour"  @mouseleave="mouseLeaveFour"  color="green">
                                <div class="shijianzhou-xianshi shijianzhou-xianshione"  :style="activeF" ><span class="chesu">车速正常</span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="shijian">20号&nbsp;&nbsp;15:00:01</span></div>
                                <!--第四个-->
                                <div class="shijianzhou-yinchang":style="activeFour">
                                  <!--第一行-->
                                  <a-row>
                                    <div class="shijianzhou-yinchang-one">
                                      <a-col  :xl="8" :lg="8"  :md="12" :sm="24"  :xs="24">
                                        <div class="shijianzhou-yinchang-onea"><a-icon type="user" />驾驶行为：<span>已超速</span></div>
                                      </a-col>
                                      <a-col  :xl="16" :lg="16"  :md="12" :sm="24"  :xs="24">
                                        <div class="shijianzhou-yinchang-onea"><a-icon type="clock-circle" />持续时间：<span>2分钟</span></div>
                                      </a-col>
                                    </div>
                                  </a-row>
                                  <!--第二行-->
                                  <a-row>
                                    <div class="shijianzhou-yinchang-two">
                                      <a-col  :xl="8" :lg="8"  :md="12" :sm="24"  :xs="24">
                                        <div class="shijianzhou-yinchang-onea"><a-icon type="dashboard" />当时车速：<span>130km/h</span></div>
                                      </a-col>
                                      <a-col   :xl="16" :lg="16"  :md="12" :sm="24"  :xs="24">
                                        <div class="shijianzhou-yinchang-onea"><a-icon type="environment" />地点：<span>广东省广州市天河区大观路9号</span></div>
                                      </a-col>
                                    </div>
                                  </a-row>
                                </div>
                              </a-timeline-item>
                              <a-timeline-item class="shijianzhouzhou">起始</a-timeline-item>
                            </a-timeline>
                          </div>
                            </a-col>
                        </a-row>
                      </div>

                    </a-col>
                  </a-row>
                </div>




              </a-tab-pane>
              <a-tab-pane tab="工单信息" key="2" forceRender>Content of Tab Pane 2</a-tab-pane>
              <a-tab-pane tab="沟通行为" key="3">Content of Tab Pane 3</a-tab-pane>
            </a-tabs>
          </div>
        </a-col>
      </a-row>
    </div>
  </a-col>
  <a-col :span="24">
    <!--下边-->

  </a-col>
</a-row>

    </div>

</template>

<script>
  export default {
    data() {
      return {
        // msg: "HelloWorld,I am PC",
        // 右边隐藏
        active: "",
        activeO:"",
        activeT:"",
        activeF:"",
        // 右边显示
        activeOne:"",
        activeTwo:"",
        activeThree:"",
        activeFour:"",
        // 左边显示
        xianshiOne:"",
        xianshiTwo:"",
        xianshiThree:"",
        xianshiFour:"",
      };
    },
    name: 'index',
    component:{
    },
    // 日历
  methods: {
    // 移入1
    mouseOverOne() {
      this.active = "display:none";
      // 右边显示
      this.activeOne = "display:block";
      // 左边显示
      this.xianshiOne = "display:block";

    },
    // 移出1
    mouseLeaveOne() {
      this.active = "";
      // 右边隐藏
      this.activeOne = "display:none";
      // 左边隐藏
      this.xianshiOne = "display:none";
      // this.$refs.acp.style=''
    },


    // 移入2
    mouseOverTwo() {
      this.activeO = "display:none";
      // 右边显示
      this.activeTwo = "display:block";
      // 左边显示
      this.xianshiTwo = "display:block";

    },
    // 移出2
    mouseLeaveTwo() {
      this.activeO = "";
      // 右边隐藏
      this.activeTwo = "display:none";
      // 左边隐藏
      this.xianshiTwo = "display:none";
      // this.$refs.acp.style=''
    },


    // 移入3
    mouseOverThree() {
      this.activeT = "display:none";
      // 右边显示
      this.activeThree = "display:block";
      // 左边显示
      this.xianshiThree = "display:block";

    },
    // 移出3
    mouseLeaveThree() {
      this.activeT = "";
      // 右边隐藏
      this.activeThree = "display:none";
      // 左边隐藏
      this.xianshiThree = "display:none";
      // this.$refs.acp.style=''
    },


    // 移入4
    mouseOverFour() {
      this.activeF = "display:none";
      // 右边显示
      this.activeFour = "display:block";
      // 左边显示
      this.xianshiFour = "display:block";

    },
    // 移出4
    mouseLeaveFour() {
      this.activeF = "";
      // 右边隐藏
      this.activeFour = "display:none";
      // 左边隐藏
      this.xianshiFour = "display:none";
      // this.$refs.acp.style=''
    },


    getCurrentStyle (current) {
      const style = {}
      if (current.date() === 1) {
        style.border = '1px solid #1890ff'
        style.borderRadius = '50%'
      }
      return style
    },
  },
  }
</script>
<style type="text/css">
  @media screen and (max-width: 1500px){
    .top-shang-wenzi{
      display: none;
    }
    .top-right-imgtwo-one{
      display: none;
    }
    .top-right-imgtwo-two{
      display: none;
    }
  }
  @media screen and (max-width: 1199px){
    .top-shang-wenzi{
      display: block;
    }
    .top-right-imgtwo-one{
      display: block;
    }
    .top-right-imgtwo-two{
      display: block;
    }

  }

</style>
<style>
  /*鼠标时间*/
  .top-right-imgone:hover .top-right-imgzan img{
    width: 60px;
    height: 55px;
   margin-left: 65px;
    box-shadow: 1px 1px 5px #697b8c;
    /*background-color: red;*/
  }
 .top-right-imgone:hover,.top-right-imgzanting:hover{
   box-shadow: 1px 1px 5px #697b8c;
   border-radius: 8px;
   opacity: 1;
   cursor: pointer;
 }
  .shijianzhou-yinchang-onea{
    padding: 8px 0;
  display: inline-block;
  font-size:14px;
  font-family:MicrosoftYaHei;
  font-weight:400;
  color:rgba(153,153,153,1);
}
.shijianzhou-yinchang-onea span{
  color: #333333;
}
.shijianzhou-yinchang{
  background-color: white;
  z-index: 5;
  width: 100%;
  padding: 20px 30px;
  position: absolute;
  margin: -50px 30px 0px 0;
  border: 1px #999999 solid;
  border-radius: 8px;
  box-shadow: 1px 1px 5px #bcbcbc;
  display: none;
}
.shijianzhou-xianshi{
  /*display: none;*/
  position: absolute;
}
.yuefen{
  font-size:30px;
  font-family:MicrosoftYaHei-Bold;
  font-weight:bold;
  color:rgba(28,192,159,1);
  margin-left: -25px;
}
 .chesu{
   font-size:16px;
   font-family:MicrosoftYaHei-Bold;
   font-weight:bold;
   color:rgba(28,192,159,1);
 }
 .shijian{
   font-size:16px;
   font-family:Arial-BoldMT;
   font-weight:bold;
   color:rgba(153,153,153,1);
 }

.zuobian-xingche,.zuobian-shijian{
  display: inline-block;

}
.zuobian-xingche{
  margin-right: 10px;
  font-size:16px;
  font-family:MicrosoftYaHei-Bold;
  font-weight:bold;
  color:rgba(245,34,45,1);
}
.zuobian-shijian{
  font-size:16px;
  font-family:Arial-BoldMT;
  font-weight:bold;
  color:rgba(102,102,102,1);

}
.shijianzhouzhou{
  padding-bottom: 50px;
  padding-top: 12px;
}
.shijianzhou{
  padding-bottom: 50px;
  padding-top: 55px;
}
.body-shijianzhou-zuo{
  float: right;
/*position: relative;*/
  margin: 42px 20px;
  display: none;
}

 .body-shijianzhou{
   margin-left: 35px;
   margin-top: 35px;
 }
.body-rili{
  float: right;
  margin-top: 20px;
}
 .body-xuexi{
   float: right;
   margin: 15px 0;
 }
  .top-right-imgzanting{

    position: relative;
    margin-top: -50px;
  }
  .top-right-imgzan img{
    width: 51px;
    height: 47px;
  }
  .top-right-imgzan{

  }
  .top-right-imgone{
    width: 192px;
    height: 188px;
    opacity: 0.6;
    display: inline-block;
  }
  .top-right-imgone img{
    position: relative;
    width: 192px;
    height: 188px;
    border-radius: 8px;
  }
  .top-right-imgtwo{
    width: 192px;
    height: 188px;
    margin-left: 34px;
    display: inline-block;
  }
  .top-right-imgtwo img{
  width: 192px;
  height: 188px;
    border-radius: 8px;
  }
  .top-right-imgtwo-one{
    position: relative;
  }
.top-right-imgtwo-two{
  position: absolute;
  opacity: 0.8;
  background: rgba(3,0,7,11114);
  margin-top: -40px;
  width: 192px;
  height: 40px;
  line-height: 40px;
  border-radius: 0 0 8px 8px;

}
.top-right-imgtwo-two span{
  font-size: 16px;
  color: white;
  opacity: 1;
}




















  .top-xia{
    text-align: center;
    margin-top: 11px;
  }
  .top-name{
    font-size:30px;
    font-family:ArialMT;
    font-weight:400;
    color:rgba(51,51,51,1);
  }
.top-gongsi{
  margin: 4px 0;
  font-size:16px;
  font-family:MicrosoftYaHei;
  font-weight:400;
  color:rgba(153,153,153,1);
}
.top-zhuangtai{
  margin: 16px 0;
  font-size:16px;
  font-family:MicrosoftYaHei;
  font-weight:400;
  color:rgba(102,102,102,1);
}
.top-zhuangtai span{
  font-size: 16px;
}
.top-jindutiao{
  width: 70px;
  height: 7px;
  background:rgba(28,192,159,1);;
  display: inline-block;
  border-radius: 4px;
  margin-right: 8px;
  margin-bottom: 2px;
}
.top-shang-img{
  position: relative;
  text-align: center;
  border-radius: 8px;
  /*display: inline-block;*/
}
.top-shang-img img{
  width: 81px;
  height: 81px;
}
.top-shang-wenzi{
  position: relative;
  margin-top: -70px;
  float: right;
  margin-right: 60px;
}
.top-shang-wenzi p{
  font-size:14px;
  font-family:ArialMT;
  font-weight:400;
  color:#999999;
  line-height:20px;
  /*margin: 5px 0;*/
}
.top-shang-wenzi span{
  font-size:32px;
  font-family:ArialMT;
  font-weight:400;
  color:rgba(255,94,86,1);
  line-height:9px;
  margin: 5px 0;
}
.top-right-logo{
  font-size:16px;
  font-family:MicrosoftYaHei;
  font-weight:400;
  color:rgba(28,192,159,1);
  line-height:40px;
}
.top-right{
  text-align: center;
}
.top-right-logo a{
  float: right;
  margin-right: 74px;
}




























/*.top-zhong{*/
  /*text-align: center;*/
/*}*/
  .top-zhong p{
  font-size:14px;
  font-family:MicrosoftYaHei;
  font-weight:400;
  color:rgba(153,153,153,1);
  line-height:30px;
  }
  .top-zhong span{
    font-size:14px;
    font-family:MicrosoftYaHei;
    font-weight:400;
    color:rgba(51,51,51,1);
    line-height:30px;
  }
</style>