<template>
  <div>
    <a-row>
      <!--头部--上-->
      <a-col :span="24">
        <div class="top-top">
          <!--头部-上边-->
          <a-row>
            <!--左边LOGO图-->
            <a-col :xl="4" :lg="5" :md="7" :sm="12" :xs="12">
              <div class="top-life">
                <img src="./assets/One.png" alt="">
              </div>
            </a-col>

            <a-col :xl="5" :lg="2" :md="0" :sm="0" :xs="0"></a-col>
            <!--中间input输入框-->
            <a-col :xl="6" :lg="5" :md="4" :sm="12" :xs="12">
              <!--隐藏-->
              <div class="top-center">
                <a-input-search
                  size="large"
                  placeholder="输入您的关键字进行搜索/产品/服务"
                  style="border-radius: 50%"
                  @search="onSearch"
                  enterButton
                />
                <!--<input type="text" placeholder="请输入您的关键字进行搜索/产品/服务"><button>搜索</button>-->
              </div>
            </a-col>
            <!--右边文字-->
            <a-col :xl="9" :lg="12" :md="13" :sm="24" :xs="24">
              <div class="top-right">
                <a-row>
                  <a-col :xl="3" :lg="2" :md="1" :sm="1" :xs="3"></a-col>
                  <a-col :xl="6" :lg="6" :md="6" :sm="6" :xs="6">
                    <div class="top-rightone">
                      <a href="#">
                      <a-badge count="3" style="margin-right: 10px;line-height: 40px;" :numberStyle="{minWidth:'11px',height: '11px',padding: '0',fontSize: '5px',borderRadius:'50%',lineHeight:'11px',marginTop:'15px'

                      }">
                        <a-icon type="shopping-cart" style="width: 20px;height: 30px;margin-top:0px;font-size: 20px"/>
                        <!--<img src="./assets/gouwuche.png" style="width: 24px;height: 24px;margin-top: -5px" alt="">-->
                      </a-badge>
                      购物车</a>
                    </div>
                  </a-col>
                  <a-col :xl="4" :lg="4" :md="4" :sm="3" :xs="3">
                    <div class="top-righttwo"><a href="http://console.terrybg.com"> 登录 </a></div>
                  </a-col>
                  <a-col  :xl="4" :lg="5" :md="6" :sm="6" :xs="4">
                    <div class="top-rightthree">
                      <!--class="wenzi"-->
                      <div style="background-color: #3C9CFF">
                        <a href="#" style="color: white">免费注册</a>
                      </div>
                    </div>
                  </a-col>
                  <a-col :xl="3" :lg="3" :md="3" :sm="3" :xs="3">
                    <div class="kongzhitai top-rightfour">
                      <a href="http://console.terrybg.com">  控制台</a>
                    </div>
                  </a-col>
                  <a-col :xl="4" :lg="3" :md="4" :sm="5" :xs="5">
                    <div class="kongzhitai  kongzhitaii top-rightfive">
                      <a href="http://console.terrybg.com/doc">  文档</a>

                    </div>
                  </a-col>
                </a-row>

              </div>
            </a-col>

          </a-row>

        </div>

      </a-col>
      <!--头部--中-->
      <a-col :span="24" class="zuixin">
        <div>
          <a-row>
          <a-col :xl="4" :lg="3" :md="18" :sm="18" :xs="18">
            <!--@click="()=>visible=!visible"-->

            <a><div class="jingxuan wenzi " @click="changeShow()" >精选分类</div></a>
          </a-col>
          <a-col :xl="18" :lg="21" :md="6" :sm="6" :xs="6">

            <div class="zuixinn">
              <a-dropdown>
                <a class="ant-dropdown-link" href="#">
                  <img src="./assets/gengduo.png" alt="">
                </a>
                <a-menu slot="overlay">
                  <a-menu-item>
                    <a href="javascript:;">最新活动</a>
                  </a-menu-item>
                  <a-menu-item>
                    <a href="javascript:;">企业采购</a>
                  </a-menu-item>
                  <a-menu-item>
                    <a href="javascript:;">用车网</a>
                  </a-menu-item>
                  <a-menu-item>
                    <a href="javascript:;">金融服务</a>
                  </a-menu-item>
                  <a-menu-item>
                    <a href="javascript:;">增值服务</a>
                  </a-menu-item>
                  <a-menu-item>
                    <a href="javascript:;">大数据中心</a>
                  </a-menu-item>
                  <a-menu-item>
                    <a href="javascript:;">平台资讯</a>
                  </a-menu-item>
                </a-menu>
              </a-dropdown>
            </div>
            <div class="zuixinnn">
                  <a href="#"><div class="huodong" >最新活动</div></a>
                  <a href="#"><div class="huodong" >企业采购</div></a>
                  <a href="#"><div class="huodong"  >用车网</div></a>
                  <a href="#"><div class="huodong"  >金融服务</div></a>
                  <a href="#"><div class="huodong"  >增值服务</div></a>
                  <a href="http://datav.terrybg.com" target="_blank"><div class="huodong"  >大数据中心</div></a>
                  <a href="#"><div class="huodong"  >平台资讯</div></a>
            </div>
          </a-col>
          </a-row>
        </div>
      </a-col>
      <!--头部--下-->
      <!--头部--左边-->
      <div class="tanxing-datii">
      <div class="tanxing-dati" :style="{visibility:visible? 'visible': 'hidden'}">
        <a-row>
          <!--大的-->
          <!--第一个-->
          <a-col :span="24">
            <!--小的-->
            <div class="xiaode xiaodeone">
              <a-row>
                <a-col :span="24">
                  <div class="tanxing"> <a href="#">平台服务 </a><span class="tanxing-you"><a-icon type="right" /></span></div>
                </a-col>
                <a-col>
                  <div class="erji">
                    <a href="#"><span class="yunfuwu">众车联</span></a>
                    <a href="#"><span class="yunfuwuu">车队管理平台</span></a>
                  </div>
                </a-col>
              </a-row>

            </div>

          </a-col>
          <!--第二个-->
          <a-col :span="24">
            <!--小的-->
            <div class="xiaode xiaodetwo">
              <a-row>
                <a-col :span="24">
                  <div class="tanxing"> <a href="#">软件服务 </a><span class="tanxing-you">
                    <a-icon type="right"/>
                  </span></div>
                </a-col>
                <a-col>
                  <div class="erji">
                    <a href="#"><span class="yunfuwu">行业定制</span></a>
                    <!--<a href="#"><span class="yunfuwu">技术服务</span></a>-->
                    <a href="#"><span class="yunfuwuu">Redis</span></a>
                  </div>
                </a-col>
              </a-row>
            </div>
          </a-col>
          <!--第三个-->
          <a-col :span="24">
            <!--小的-->
            <div class="xiaode xiaodethree">
              <a-row>
                <a-col :span="24">
                  <div class="tanxing"> <a href="#">技术服务 </a><span class="tanxing-you"><a-icon type="right" /></span></div>
                </a-col>
                <a-col>
                  <div class="erji">
                    <a href="#"><span class="yunfuwu">行业定制</span></a>
                    <a href="#"><span class="yunfuwuu">技术服务</span></a>
                    <!--<a href="#"><span class="yunfuwuu">云虚拟主机</span></a>-->
                  </div>
                </a-col>
              </a-row>
            </div>
          </a-col>
          <!--第四个-->
          <a-col :span="24">
            <!--小的-->
            <div class="xiaode xiaodefour">
              <a-row>
                <a-col :span="24">
                  <div class="tanxing"> <a href="#">新闻资讯 </a><span class="tanxing-you"><a-icon type="right" /></span></div>
                </a-col>
                <a-col>
                  <div class="erji">
                    <a href="#"><span class="yunfuwu">行业新闻</span></a>
                    <a href="#"><span class="yunfuwuu">技术服务</span></a>
                  </div>
                </a-col>
              </a-row>
            </div>
          </a-col>
          <!--第五个-->
          <a-col :span="24">
            <!--小的-->
            <div class="xiaode xiaodefive">
              <a-row>
                <a-col :span="24">
                  <div class="tanxing"> <a href="#">招纳贤士 </a><span class="tanxing-you"><a-icon type="right" /></span></div>
                </a-col>
                <a-col>
                  <div class="erji">
                    <a href="#"><span class="yunfuwu">JAVA高级工程师</span></a>
                    <a href="#"><span class="yunfuwuu">客服人员</span></a>
                  </div>
                </a-col>
              </a-row>
            </div>
          </a-col>
          <!--第六个-->
          <a-col :span="24">
            <!--小的-->
            <div class="xiaodee xiaodesix">
              <a-row>
                <a-col :span="24">
                  <div class="tanxing"> <a href="#">联系我们 </a><span class="tanxing-you"><a-icon type="right" /></span></div>
                </a-col>
                <a-col>
                  <div class="erji">
                    <a href="#"><span class="yunfuwu">电话</span></a>
                    <a href="#"><span class="yunfuwuu">邮箱</span></a>
                  </div>
                </a-col>
              </a-row>
            </div>
          </a-col>
          <!--按钮-->
          <a-col :span="24">
            <div class="cha">
              <a-button class="chakan">查看全部</a-button>
            </div>
          </a-col>
        </a-row>
        </div>
        <div class="dade-dade">
          <div class="dadeeone">
              <a-row>
                <a-col span="12">
                  <h3>全部产品</h3>
                  <div><a href="#">众车联</a></div>
                  <div><a href="#">车队管理平台</a></div>
                  <div><a href="#">行业定制</a></div>
                  <div><a href="#">Redis</a></div>
                  <div><a href="#">行业定制</a></div>
                  <div><a href="#">技术服务</a></div>
                  <div><a href="#">行业新闻</a></div>
                  <div><a href="#">技术服务</a></div>
                  <div><a href="#">JAVA高级工程师</a></div>
                  <div><a href="#">客服人员</a></div>
                  <div><a href="#">电话</a></div>
                  <div><a href="#">邮箱</a></div>
                </a-col>
                <a-col span="12">
                  <h3>快速入口</h3>
                  <div class="erjicaidan-tu">
                    <img src="./assets/erjicaidantu.png" alt="">
                  </div>
                </a-col>
              </a-row>
          </div>
          <div class="dadeetwo">
            <a-row>
              <a-col span="12">
                <h3>全部产品</h3>
                <div><a href="#">大数据</a></div>
                <div><a href="#">智慧管车</a></div>
                <div><a href="#">行业定制</a></div>
                <div><a href="#">Redis</a></div>
                <div><a href="#">行业定制</a></div>
                <div><a href="#">技术服务</a></div>
                <div><a href="#">行业新闻</a></div>
                <div><a href="#">技术服务</a></div>
                <div><a href="#">JAVA高级工程师</a></div>
                <div><a href="#">客服人员</a></div>
                <div><a href="#">电话</a></div>
                <div><a href="#">邮箱</a></div>
              </a-col>
              <a-col span="12">
                <h3>快速入口</h3>
                <div class="erjicaidan-tu">
                  <img src="./assets/erjicaidantu.png" alt="">
                </div>
              </a-col>
            </a-row>
          </div>
          <div class="dadeethree">
            <a-row>
              <a-col span="12">
                <h3>全部产品</h3>
                <div><a href="#">智慧管车</a></div>
                <div><a href="#">车队管理平台</a></div>
                <div><a href="#">众车联</a></div>
                <div><a href="#">Redis</a></div>
                <div><a href="#">行业定制</a></div>
                <div><a href="#">技术服务</a></div>
                <div><a href="#">行业新闻</a></div>
                <div><a href="#">技术服务</a></div>
                <div><a href="#">JAVA高级工程师</a></div>
                <div><a href="#">客服人员</a></div>
                <div><a href="#">电话</a></div>
                <div><a href="#">邮箱</a></div>
              </a-col>
              <a-col span="12">
                <h3>快速入口</h3>
                <div class="erjicaidan-tu">
                  <img src="./assets/erjicaidantu.png" alt="">
                </div>
              </a-col>
            </a-row>
          </div>
          <div class="dadeefour">
            <a-row>
              <a-col span="12">
                <h3>全部产品</h3>

                <div><a href="#">众车联</a></div>
                <div><a href="#">车队管理平台</a></div>
                <div><a href="#">行业定制</a></div>
                <div><a href="#">Redis</a></div>
                <div><a href="#">行业定制</a></div>
                <div><a href="#">技术服务</a></div>
                <div><a href="#">行业新闻</a></div>
                <div><a href="#">技术服务</a></div>
                <div><a href="#">JAVA高级工程师</a></div>
                <div><a href="#">客服人员</a></div>
                <div><a href="#">电话</a></div>
                <div><a href="#">邮箱</a></div>
              </a-col>
              <a-col span="12">
                <h3>快速入口</h3>
                <div class="erjicaidan-tu">
                  <img src="./assets/erjicaidantu.png" alt="">
                </div>
              </a-col>
            </a-row>
          </div>
          <div class="dadeefive">
            <a-row>
              <a-col span="12">
                <h3>全部产品</h3>
                <div><a href="#">技术服务</a></div>
                <div><a href="#">JAVA高级工程师</a></div>
                <div><a href="#">行业定制</a></div>
                <div><a href="#">Redis</a></div>
                <div><a href="#">行业定制</a></div>
                <div><a href="#">技术服务</a></div>
                <div><a href="#">行业新闻</a></div>
                <div><a href="#">技术服务</a></div>
                <div><a href="#">JAVA高级工程师</a></div>
                <div><a href="#">客服人员</a></div>
                <div><a href="#">电话</a></div>
                <div><a href="#">邮箱</a></div>
              </a-col>
              <a-col span="12">
                <h3>快速入口</h3>
                <div class="erjicaidan-tu">
                  <img src="./assets/erjicaidantu.png" alt="">
                </div>
              </a-col>
            </a-row>
          </div>
          <div class="dadeesix">
            <a-row>
              <a-col span="12">
                <h3>全部产品</h3>
                <div><a href="#">行业新闻</a></div>
                <div><a href="#">车队管理平台</a></div>
                <div><a href="#">行业定制</a></div>
                <div><a href="#">Redis</a></div>
                <div><a href="#">客服人员</a></div>
                <div><a href="#">技术服务</a></div>
                <div><a href="#">行业新闻</a></div>
                <div><a href="#">车队管理平台</a></div>
                <div><a href="#">JAVA高级工程师</a></div>
                <div><a href="#">客服人员</a></div>
                <div><a href="#">电话</a></div>
                <div><a href="#">邮箱</a></div>
              </a-col>
              <a-col span="12">
                <h3>快速入口</h3>
                <div class="erjicaidan-tu">
                  <img src="./assets/erjicaidantu.png" alt="">
                </div>
              </a-col>
            </a-row>
          </div>
        </div>
      </div>

      <!--头部--右边-->
      <a-col :span="24">
        <div class="top-top-right" >
          <img src="./assets/Three.png" alt="">
        </div>
      </a-col>
      <!--头部--右边--下-->
      <a-col :span="24">
        <div class="top-right-">
          <a-row>
            <a-col  :xl="4" :lg="2" :md="0" :sm="0" :xs="0"></a-col>
            <a-col  :xl="4" :lg="5" :md="6" :sm="12" :xs="12">
              <!--小的-->
              <div style="text-align: center">
                <a-row>
                  <a-col>
                    <a href="#">
                      <div class="top-right-up">
                        <div class="top-right-up-o">车联网行业生态</div>
                        <div class="top-right-up-yunfuwu">粤云车联网平台对车辆的日产运营，车辆科学化调度，车辆驾驶行为监控管理，提高政府、企业的效益、效率、安全</div>
                        <p><img src="./assets/Four.png" alt=""></p>
                      </div>
                    </a>
                  </a-col>
                </a-row>
              </div>
            </a-col>
            <a-col  :xl="4" :lg="5" :md="6" :sm="12" :xs="12">
              <!--小的-->
              <div style="text-align: center">
                <a-row>
                  <a-col>
                    <a href="#">
                    <div class="top-right-up">
                      <div class="top-right-up-o">车辆管理系统</div>
                      <div class="top-right-up-yunfuwu">通过物联网设备管理车辆的状态，如：行驶、停止等状态，以及查询历史轨迹回放，车辆调度管理，行车记录视频等等</div>
                      <p><img src="./assets/Four.png" alt=""></p>
                    </div>
                    </a>
                  </a-col>
                </a-row>
              </div>
            </a-col>
            <a-col  :xl="4" :lg="5" :md="6" :sm="12" :xs="12">
              <!--小的-->
              <div style="text-align: center">
                <a-row>
                  <a-col>
                    <a href="#">
                      <div class="top-right-up">
                        <div class="top-right-up-o">OA+ERP+CRM系统</div>
                        <div class="top-right-up-yunfuwu">企业经营活动涉及OA、ERP、CRM，围绕车辆活动而进行的业务活动，通过精简集成具有行业性质的定制化企业办公系统</div>
                        <p><img src="./assets/Four.png" alt=""></p>
                      </div>
                    </a>
                  </a-col>
                </a-row>
              </div>
            </a-col>
            <a-col  :xl="4" :lg="5" :md="6" :sm="12" :xs="12">
              <!--小的-->
              <div style="text-align: center">
                <a-row>
                  <a-col>
                    <a href="#">
                      <div class="top-right-upp">
                        <div class="top-right-up-o">大数据系统</div>
                        <div class="top-right-up-yunfuwu">围绕企业运营产生的车辆资产、耗材资产、固定资产等数据，智能分析企业运转大数据，帮助企业领导人有效分析和决策</div>
                        <p><img src="./assets/Four.png" alt=""></p>
                      </div>
                    </a>
                  </a-col>
                </a-row>
              </div>
            </a-col>
            <a-col  :xl="4" :lg="2" :md="0" :sm="0" :xs="0"></a-col>
          </a-row>
        </div>
      </a-col>
      <!--身体-->
      <a-col :span="24">
        <div>
          <a-row>
            <!--模块-->
            <a-col :span="24">
              <div class="body-top">
                <a-row>
                  <a-col  :xl="4" :lg="2" :md="1" :sm="0" :xs="0"></a-col>
                  <!--头部-->
                  <a-col  :xl="16" :lg="20" :md="22" :sm="24" :xs="24">
                    <div  class="body-top-qy">
                      <a-row>
                        <a-row>
                          <!--企业采购-->
                          <a-col span="24">
                            <!--企业采购-->
                            <a-col :span="24">
                              <div class="body-top-top">
                                <!--企业采购-->
                                <a-row>
                                  <a-col  :xl="4" :lg="4" :md="4" :sm="4" :xs="5">
                                    <div>
                                      <h3>企业采购</h3>
                                    </div>
                                  </a-col>
                                  <a-col  :xl="17" :lg="17" :md="17" :sm="16" :xs="15">
                                    <div class="body-top-jinrong">
                                      <a-row>
                                        <a-col :xl="3" :lg="3" :md="3" :sm="4" :xs="4"> <div class="body-top-jinrongg"> <a href="#"> 车联网终端 </a></div></a-col>
                                        <a-col :xl="3" :lg="3" :md="3" :sm="4" :xs="4"> <div class="body-top-jinrongg"> <a href="#"> 视频终端  </a></div></a-col>
                                        <a-col :xl="3" :lg="3" :md="3" :sm="4" :xs="4"> <div class="body-top-jinrongg"> <a href="#"> OBD设备   </a></div></a-col>
                                        <a-col :xl="3" :lg="3" :md="3" :sm="4" :xs="4"> <div class="body-top-jinrongg"> <a href="#"> 消防设备  </a></div></a-col>
                                        <a-col :xl="4" :lg="4" :md="4" :sm="5" :xs="5"> <div class="body-top-jinrongg"> <a href="#"> 其他物联设备 </a></div></a-col>
                                        <!--<a-col :xl="3" :lg="3" :md="3" :sm="4" :xs="4"> <div class="body-top-jinrongg">金融产品 </div></a-col>-->
                                      </a-row>
                                    </div>
                                  </a-col>
                                  <a-col  :xl="3" :lg="3" :md="3" :sm="4" :xs="4">
                                    <div class="body-top-gengduo"><a href="#">更多产品>></a></div>
                                  </a-col>
                                </a-row>
                              </div>
                            </a-col>
                            <!--图片-->
                            <a-col :span="24">
                              <div class="body-top-guanggao-">
                                <a-row>
                                  <a-col  :xl="4" >
                                    <!--轮播图-->
                                    <div class="body-top-guanggao">
                                      <a-row>
                                        <a-col :span="24">
                                          <a-carousel autoplay>
                                            <div class="body-top-guanggao-tp"><img src="./assets/guanggaoOne.png" alt=""></div>
                                            <div class="body-top-guanggao-tp"><img src="./assets/guanggaoTwo.png" alt=""></div>
                                            <div class="body-top-guanggao-tp"><img src="./assets/guanggaoOne.png" alt=""></div>
                                            <div class="body-top-guanggao-tp"><img src="./assets/guanggaoTwo.png" alt=""></div>
                                          </a-carousel>
                                        </a-col>
                                        <a-col>
                                          <div class="body-qiyecaigou">
                                          <img src="./assets/guanggaoTwo.png" alt="">
                                          </div>
                                        </a-col>
                                      </a-row>
                                    </div>
                                  </a-col>
                                  <a-col   :xl="20" :lg="24" :md="24" :sm="24" :xs="24">
                                    <!--<div>-->
                                      <a-carousel  class="body-top-right" arrows>
                                        <div
                                          slot="prevArrow" slot-scope="props"
                                          class="custom-slick-arrow"
                                          style="left: -15px;zIndex: 1"
                                        >
                                          <a-icon type="left-circle" />
                                        </div>
                                        <div
                                          slot="nextArrow" slot-scope="props"
                                          class="custom-slick-arrow"
                                          style="right: -15px"
                                        >
                                          <a-icon type="right-circle" />
                                        </div>
                                        <div>
                                          <a-col :xl="6" :lg="6" :md="12" :xs="12"> <div class="top-right-lb"><img src="./assets/jinrongtwo.png" alt="" style="display: inline-block"></div></a-col>
                                          <a-col :xl="6" :lg="6" :md="12" :xs="12"> <div class="top-right-lb"><img src="./assets/jinrongtwo.png" alt="" style="display: inline-block"></div></a-col>
                                          <a-col :xl="6" :lg="6" :md="12" :xs="12"> <div class="top-right-lb"><img src="./assets/jinrongtwo.png" alt="" style="display: inline-block"></div></a-col>
                                          <a-col :xl="6" :lg="6" :md="12" :xs="12"> <div class="top-right-lbb"><img src="./assets/jinrongtwo.png" alt="" style="display: inline-block"></div></a-col>
                                        </div>

                                        <div>
                                          <a-col :xl="6" :lg="6" :md="12" :xs="12"> <div class="top-right-lb"><img src="./assets/jinrongtwo.png" alt="" style="display: inline-block"></div></a-col>
                                          <a-col :xl="6" :lg="6" :md="12" :xs="12"> <div class="top-right-lb"><img src="./assets/jinrongtwo.png" alt="" style="display: inline-block"></div></a-col>
                                          <a-col :xl="6" :lg="6" :md="12" :xs="12"> <div class="top-right-lb"><img src="./assets/jinrongtwo.png" alt="" style="display: inline-block"></div></a-col>
                                          <a-col :xl="6" :lg="6" :md="12" :xs="12"> <div class="top-right-lbb"><img src="./assets/jinrongtwo.png" alt="" style="display: inline-block"></div></a-col>
                                        </div>

                                        <div>
                                          <a-col :xl="6" :lg="6" :md="12" :xs="12"> <div class="top-right-lb"><img src="./assets/jinrongtwo.png" alt="" style="display: inline-block"></div></a-col>
                                          <a-col :xl="6" :lg="6" :md="12" :xs="12"> <div class="top-right-lb"><img src="./assets/jinrongtwo.png" alt="" style="display: inline-block"></div></a-col>
                                          <a-col :xl="6" :lg="6" :md="12" :xs="12"> <div class="top-right-lb"><img src="./assets/jinrongtwo.png" alt="" style="display: inline-block"></div></a-col>
                                          <a-col :xl="6" :lg="6" :md="12" :xs="12"> <div class="top-right-lbb"><img src="./assets/jinrongtwo.png" alt="" style="display: inline-block"></div></a-col>
                                        </div>

                                        <div>
                                          <a-col :xl="6" :lg="6" :md="12" :xs="12"> <div class="top-right-lb"><img src="./assets/jinrongtwo.png" alt="" style="display: inline-block"></div></a-col>
                                          <a-col :xl="6" :lg="6" :md="12" :xs="12"> <div class="top-right-lb"><img src="./assets/jinrongtwo.png" alt="" style="display: inline-block"></div></a-col>
                                          <a-col :xl="6" :lg="6" :md="12" :xs="12"> <div class="top-right-lb"><img src="./assets/jinrongtwo.png" alt="" style="display: inline-block"></div></a-col>
                                          <a-col :xl="6" :lg="6" :md="12" :xs="12"> <div class="top-right-lbb"><img src="./assets/jinrongtwo.png" alt="" style="display: inline-block"></div></a-col>
                                        </div>
                                      </a-carousel>
                                    <!--</div>-->
                                  </a-col>
                                </a-row>
                              </div>
                            </a-col>
                          </a-col>
                        </a-row>

                        <a-col :span="24">
                          <!--身体--上边-->

                        </a-col>
                      </a-row>
                    </div>
                  </a-col>
                  <a-col  :xl="4" :lg="2" :md="1" :sm="0" :xs="0"></a-col>
                </a-row>
              </div>
            </a-col>
            <a-col :span="24">
              <div class="body-top">
                <a-row>
                  <a-col  :xl="4" :lg="2" :md="1" :sm="0" :xs="0"></a-col>
                  <!--头部-->
                  <a-col  :xl="16" :lg="20" :md="22" :sm="24" :xs="24">
                    <div  class="body-top-qy">
                      <a-row>
                        <a-row>
                          <!--闲置车辆-->
                          <a-col :span="24">
                            <div class="body-top-xianzhi">
                              <a-row>
                                <!--初创-->
                                <a-col :xl="12" :lg="12" :md="24" :sm="24" :xs="24">
                                  <div>
                                    <a-row>
                                      <a-col :span="24">
                                        <div class="body-top-caigou">
                                          <a-row>
                                            <a-col :span="12"><h3>闲置车辆</h3></a-col>
                                            <a-col :span="12"><div class="body-top-caigou-gengduo"><a href="#">更多 >></a></div></a-col>
                                          </a-row>
                                        </div>
                                      </a-col>

                                      <a-col :span="24">
                                        <div class="body-top-bjt">
                                          <a-row>
                                            <a-col :span="24">
                                              <div class="body-top-bjt-bt">
                                                灵活管理、高效决策链
                                              </div>
                                            </a-col>
                                            <a-col :span="24">
                                              <div class="body-top-bjt-wz">
                                                建立多边多向连接，形成上下游之间、产业链、价值链的多方聚合
                                              </div>
                                            </a-col>
                                            <a-col :span="24">
                                              <div class="body-top-bjt-wz">
                                                为各利益相关方提供开放性的服务和利益共享机制
                                              </div>
                                            </a-col>
                                            <a-col :span="24">
                                              <div class="body-top-bjt-wz">
                                                基于连接和数据，实现业务、技术、模式等的创新
                                              </div>
                                            </a-col>
                                          </a-row>

                                        </div>
                                      </a-col>
                                      <!--文字-->
                                      <a-col :span="24">
                                        <div>
                                          <a-row>
                                            <!--第一小模块-->
                                            <a-col :span="12">
                                              <div class="body-top-xinpin body-top-xinpinone body-top-xi body-top-xio body-top-xinpint">
                                                <a-row>
                                                  <a-col :span="24">
                                                    <div class="body-top-xinpin-wz">
                                                      <span class="body-top-xinpin-wzo">基本信息</span>
                                                      <span class="body-top-xinpin-wzo">车辆调度</span>
                                                    </div>
                                                  </a-col>
                                                  <a-col :span="24">
                                                    <div class="body-top-zhuce">
                                                      <h4>公司注册</h4>
                                                    </div>
                                                  </a-col>
                                                  <a-col :span="24">
                                                    <div class="body-top-XXX">
                                                      平台将建立多边多向连接，形成上下游之间、产业链、价值链的多方聚合。为各利益相关方提供开放性的服务和利益共享机制
                                                    </div>
                                                    <div class="body-top-XXX">
                                                      基于连接和数据，实现业务、技术、模式等的创新。
                                                    </div>
                                                  </a-col>
                                                  <a-col :span="24">
                                                    <div class="body-top-jg">
                                                      <p> <span>￥68</span> 起</p>
                                                    </div>
                                                  </a-col>
                                                </a-row>
                                              </div>
                                              <div class="body-top-gengduoone">
                                                <span>查看更多</span>
                                              </div>
                                            </a-col>
                                            <a-col :span="12">
                                              <div class="body-top-xinpin body-top-xinpintwo body-top-xinpin-top body-top-xinpinnnn">
                                                <a-row>
                                                  <a-col :span="24">
                                                    <div class="body-top-xinpin-wz">
                                                      <span class="body-top-xinpin-wzo">车辆购置</span>
                                                      <span class="body-top-xinpin-wzo">车辆处置</span>
                                                    </div>
                                                  </a-col>
                                                  <a-col :span="24">
                                                    <div class="body-top-zhuce">
                                                      <h4>资源共享</h4>
                                                    </div>
                                                  </a-col>
                                                  <a-col :span="24">
                                                    <div class="body-top-XXX">
                                                      平台开发以高技术为标准，将管理流程轻量化，推行移动办公标准化布局，降低管理成本，提高管理能力。
                                                    </div>
                                                    <div class="body-top-XXX">
                                                      提供最基本的车辆位置信息服务，其次面向车队及企业管理，为企业决策提供数据支持。
                                                    </div>
                                                  </a-col>
                                                  <a-col :span="24">
                                                    <div class="body-top-jg">
                                                      <p> <span>￥68</span> 起</p>
                                                    </div>
                                                  </a-col>
                                                </a-row>
                                              </div>
                                              <div class="body-top-gengduotwo">
                                                <span>查看更多</span>
                                              </div>
                                            </a-col>
                                            <a-col :span="12">
                                              <div class="body-top-xinpin body-top-xinpinthree body-top-xi body-top-xinpint">
                                                <a-row>
                                                  <a-col :span="24">
                                                    <div class="body-top-xinpin-wz">
                                                      <span class="body-top-xinpin-wzo">车辆日常</span>
                                                      <span class="body-top-xinpin-wzo">后勤保障</span>
                                                    </div>
                                                  </a-col>
                                                  <a-col :span="24">
                                                    <div class="body-top-zhuce">
                                                      <h4>合理运用</h4>
                                                    </div>
                                                  </a-col>
                                                  <a-col :span="24">
                                                    <div class="body-top-XXX">
                                                      平台为企业带来的相应增值服务最终实现为企业创造价值及提升企业的可持续发展力。
                                                    </div>
                                                    <div class="body-top-XXX">
                                                      以“产业+互联网+金融资本”为核心的车辆服务产业链整合平台，
                                                    </div>
                                                  </a-col>
                                                  <a-col :span="24">
                                                    <div class="body-top-jg">
                                                      <p> <span>￥68</span> 起</p>
                                                    </div>
                                                  </a-col>
                                                </a-row>
                                              </div>
                                              <div class="body-top-gengduothree">
                                                <span>查看更多</span>
                                              </div>
                                            </a-col>
                                            <a-col :span="12">
                                              <div class="body-top-xinpin body-top-xinpinfour body-top-xinpinnnn">
                                                <a-row>
                                                  <a-col :span="24">
                                                    <div class="body-top-xinpin-wz">
                                                      <span class="body-top-xinpin-wzo">车辆档案</span>
                                                      <span class="body-top-xinpin-wzo">人员档案</span>
                                                    </div>
                                                  </a-col>
                                                  <a-col :span="24">
                                                    <div class="body-top-zhuce">
                                                      <h4>合作共赢</h4>
                                                    </div>
                                                  </a-col>
                                                  <a-col :span="24">
                                                    <div class="body-top-XXX">
                                                      打破数据孤岛，有效的将数据汇聚进行分析提取价值，
                                                    </div>
                                                    <div class="body-top-XXX">
                                                      供平台用户进行决策，改进管理，增长业务，调整战略发展。
                                                    </div>
                                                  </a-col>
                                                  <a-col :span="24">
                                                    <div class="body-top-jg">
                                                      <p> <span>￥68</span> 起</p>
                                                    </div>
                                                  </a-col>
                                                </a-row>
                                              </div>
                                              <div class="body-top-gengduofour">
                                                <span>查看更多</span>
                                              </div>
                                            </a-col>
                                          </a-row>
                                        </div>
                                      </a-col>
                                    </a-row>
                                  </div>
                                </a-col>
                                <!--用车需求-->
                                <a-col :xl="12" :lg="12" :md="24" :sm="24" :xs="24">
                                  <div>
                                    <a-row>
                                      <a-col :span="24">
                                        <div class="body-top-caigouu">
                                          <a-row>
                                            <a-col :span="12"><h3>用车需求</h3></a-col>
                                            <a-col :span="12"><div class="body-top-caigou-gengduo"><a href="#">更多 >></a></div></a-col>
                                          </a-row>
                                        </div>
                                      </a-col>
                                      <a-col :span="24">
                                        <div class="body-top-bjtt">
                                          <a-row>
                                            <a-col :span="24">
                                              <div class="body-top-bjt-bt">
                                                建立大移动互联网时代下企业便捷用车方式
                                              </div>
                                            </a-col>
                                            <a-col :span="24">
                                              <div class="body-top-bjt-wz">
                                                最大限度优化企业车队效率与效益，扩张传统企业租用车渠道
                                              </div>
                                            </a-col>
                                            <a-col :span="24">
                                              <div class="body-top-bjt-wz">
                                                节约企业沟通成本，降低车辆空驶率，最大化节约企业租车用车双方资源与时间
                                              </div>
                                            </a-col>
                                            <a-col :span="24">
                                              <div class="body-top-bjt-wz">
                                                简化流程，进度透明，让创业变简单
                                              </div>
                                            </a-col>
                                          </a-row>

                                        </div>
                                      </a-col>
                                      <!--文字-->
                                      <a-col :span="24">
                                        <div>
                                          <a-row>
                                            <!--第一小模块-->
                                            <a-col :span="12">
                                              <div class="body-top-xinpin body-top-xinpinoone body-top-xinpinno body-top-xinpint">
                                                <a-row>
                                                  <a-col :span="24">
                                                    <div class="body-top-xinpin-wz">
                                                      <span class="body-top-xinpin-wzo">高效统一</span>
                                                      <span class="body-top-xinpin-wzo">平台模式</span>
                                                    </div>
                                                  </a-col>
                                                  <a-col :span="24">
                                                    <div class="body-top-zhuce">
                                                      <h4>用车网</h4>
                                                    </div>
                                                  </a-col>
                                                  <a-col :span="24">
                                                    <div class="body-top-XXX">
                                                      用车网改变了传统企业商用车方式，建立大移动互联网时代下企业便捷用车方式。最大限度优化企业车队效率与效益。
                                                    </div>
                                                    <div class="body-top-XXX">
                                                      扩张传统企业租用车渠道，节约企业沟通成本，降低车辆空驶率，最大化节约企业租车用车双方资源与时间。
                                                    </div>
                                                  </a-col>
                                                  <a-col :span="24">
                                                    <div class="body-top-jg">
                                                      <p> <span>￥68</span> 起</p>
                                                    </div>
                                                  </a-col>
                                                </a-row>
                                              </div>
                                              <div class="body-top-gengduooone">
                                                <span>查看更多</span>
                                              </div>
                                            </a-col>
                                            <a-col :span="12">
                                              <div class="body-top-xinpin body-top-xinpinttwo body-top-xinpinnn">
                                                <a-row>
                                                  <a-col :span="24">
                                                    <div class="body-top-xinpin-wz">
                                                      <span class="body-top-xinpin-wzo">集成体系</span>
                                                      <span class="body-top-xinpin-wzo">管理功能</span>
                                                    </div>
                                                  </a-col>
                                                  <a-col :span="24">
                                                    <div class="body-top-zhuce">
                                                      <h4>平台</h4>
                                                    </div>
                                                  </a-col>
                                                  <a-col :span="24">
                                                    <div class="body-top-XXX">
                                                      粤云业务通平台包括常用功能、车辆管理、人员管理、数据分析、系统维护、分析研判、商城配件七大模块
                                                    </div>
                                                    <div class="body-top-XXX">
                                                      通过网页端的形式向用户展示使用，无需安装客户端，即可随时查看管理所管辖车辆。
                                                    </div>


                                                  </a-col>
                                                  <a-col :span="24">
                                                    <div class="body-top-jg">
                                                      <p> <span>￥68</span> 起</p>
                                                    </div>
                                                  </a-col>
                                                </a-row>
                                              </div>
                                              <div class="body-top-gengduottwo">
                                                <span>查看更多</span>
                                              </div>
                                            </a-col>
                                            <a-col :span="12">
                                              <div class="body-top-xinpin body-top-xinpintthree body-top-xinpinno body-top-xinpint">
                                                <a-row>
                                                  <a-col :span="24">
                                                    <div class="body-top-xinpin-wz">
                                                      <span class="body-top-xinpin-wzo">报表系统</span>
                                                      <span class="body-top-xinpin-wzo">数据保护</span>
                                                    </div>
                                                  </a-col>
                                                  <a-col :span="24">
                                                    <div class="body-top-zhuce">
                                                      <h4>商用车</h4>
                                                    </div>
                                                  </a-col>
                                                  <a-col :span="24">
                                                    <div class="body-top-XXX">
                                                      运营移动目标位置服务管理平台入网车辆数万辆
                                                    </div>
                                                    <div class="body-top-XXX">
                                                      智慧城市、智能交通、LBS位置服务、现代车队精细化管理等政企管理平台方面积累了大量的工程项目经验
                                                    </div>
                                                  </a-col>
                                                  <a-col :span="24">
                                                    <div class="body-top-jg">
                                                      <p> <span>￥68</span> 起</p>
                                                    </div>
                                                  </a-col>
                                                </a-row>
                                              </div>
                                              <div class="body-top-gengduotthree">
                                                <span>查看更多</span>
                                              </div>
                                            </a-col>
                                            <a-col :span="12">
                                              <div class="body-top-xinpin body-top-xinpinffour body-top-xinpinnn">
                                                <a-row>
                                                  <a-col :span="24">
                                                    <div class="body-top-xinpin-wz">
                                                      <span class="body-top-xinpin-wzo">移动办公</span>
                                                      <span class="body-top-xinpin-wzo">实时可查</span>
                                                    </div>
                                                  </a-col>
                                                  <a-col :span="24">
                                                    <div class="body-top-zhuce">
                                                      <h4>企业</h4>
                                                    </div>
                                                  </a-col>
                                                  <a-col :span="24">
                                                    <div class="body-top-XXX">
                                                      本平台系统可根据公司实际需求进行定制管理指定内部信息
                                                    </div>
                                                    <div class="body-top-XXX">
                                                      为公司提供更科学、更高效的管理体系，真正的帮助公司实现信息化的智慧管理。
                                                    </div>
                                                  </a-col>
                                                  <a-col :span="24">
                                                    <div class="body-top-jg">
                                                      <p> <span>￥68</span> 起</p>
                                                    </div>
                                                  </a-col>
                                                </a-row>
                                              </div>
                                              <div class="body-top-gengduoffour">
                                                <span>查看更多</span>
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
                          </a-col>
                        </a-row>

                        <a-col :span="24">
                          <!--身体--上边-->

                        </a-col>
                      </a-row>
                    </div>
                  </a-col>
                  <a-col  :xl="4" :lg="2" :md="1" :sm="0" :xs="0"></a-col>
                </a-row>
              </div>
            </a-col>
            <a-col :span="24">
              <div class="body-top">
                <a-row>
                  <a-col  :xl="4" :lg="2" :md="1" :sm="0" :xs="0"></a-col>
                  <!--头部-->
                  <a-col  :xl="16" :lg="20" :md="22" :sm="24" :xs="24">
                    <div  class="body-top-qy">
                      <a-row>
                        <a-row>
                          <!--金融服务-->
                          <a-col :span="24">
                            <div class="body-top-jr">
                              <a-row>
                                <!--标题--金融服务-->
                                <a-col  :xl="16" :lg="16" :md="24" :sm="24" :xs="24">
                                  <div class="body-top-jinron">
                                    <a-row>
                                      <a-col :span="12"><h3>金融服务</h3></a-col>
                                      <a-col :span="12"><div class="body-top-caigou-gengduo"><a href="#">更多 >></a></div></a-col>
                                    </a-row>
                                  </div>
                                </a-col>
                                <!--左边-->
                                <a-col :xl="16" :lg="16" :md="24" :sm="24" :xs="24">
                                  <div class="body-body-dt">
                                    <a-row>
                                      <a-col :span="15">
                                        <div>
                                          <a-row>
                                            <a-col :span="24">
                                              <div class="body-body-zhibo">
                                                <span>每日直播 <a-icon type="right" /> </span>
                                              </div>
                                            </a-col>
                                            <a-col :span="24">
                                              <div>
                                                <a-row>
                                                  <!--左-->
                                                  <a-col :span="16">
                                                    <div class="body-body-dati">
                                                      <div class="body-body-dingyue">34432人订阅 </div>
                                                      <div  class="body-body-quanwu">【车队精化管理】四个坚持</div>
                                                      <div>
                                                        <span  class="body-body-zhenni">車塔云 </span>
                                                        <span   class="body-body-zhennid">·</span>
                                                        <span class="body-body-zhenni">《【智慧AI】是粤峰...》</span>
                                                        <span class="body-body-liji"><a href="#"> 立即订阅</a></span> </div>
                                                    </div>
                                                  </a-col>
                                                  <!--右-->
                                                  <a-col :span="8">
                                                    <div class="body-body-haokan">
                                                      <img src="./assets/haokan.png" alt="">
                                                    </div>
                                                  </a-col>
                                                </a-row>
                                              </div>
                                            </a-col>
                                          </a-row>
                                        </div>
                                      </a-col>
                                      <a-col :span="9">
                                        <div class="body-body-r">
                                          <a-row>
                                            <!--第一个-->
                                            <a-col :span="24">
                                              <div class="body-body-zhong body-body-zhongone">
                                                <a-row>
                                                  <!--左边-->
                                                  <a-col :span="6">
                                                    <div  class="body-body-riqi">
                                                      <p class="body-body-riqio" >08/09</p>
                                                      <span  class="body-body-riqic">19:30</span>
                                                    </div>
                                                  </a-col>
                                                  <!--右边-->
                                                  <a-col :span="18">
                                                    <div  class="body-body-dy">
                                                      <p class="body-body-riqio">38185人订阅</p>
                                                      <div class="body-body-riqit">现代年轻人追求的工业风客餐厅现代年轻人追求的工业风客餐厅</div>
                                                    </div>
                                                  </a-col>
                                                </a-row>
                                              </div>
                                            </a-col>
                                            <!--第一个-->
                                            <a-col :span="24">
                                              <div class="body-body-zhong body-body-zhongtwo">
                                                <a-row>
                                                  <!--左边-->
                                                  <a-col :span="6">
                                                    <div  class="body-body-riqi">
                                                      <p class="body-body-riqio" >08/13</p>
                                                      <span  class="body-body-riqic">16:00</span>
                                                    </div>
                                                  </a-col>
                                                  <!--右边-->
                                                  <a-col :span="18">
                                                    <div  class="body-body-dy">
                                                      <p class="body-body-riqio">7613人订阅</p>
                                                      <div class="body-body-riqit">环卫行业的可视化多端协作管理平台</div>
                                                    </div>
                                                  </a-col>
                                                </a-row>
                                              </div>
                                            </a-col>
                                            <!--第一个-->
                                            <a-col :span="24">
                                              <div class="body-body-zhong body-body-zhongthree">
                                                <a-row>
                                                  <!--左边-->
                                                  <a-col :span="6">
                                                    <div  class="body-body-riqi">
                                                      <p class="body-body-riqio" >08/18</p>
                                                      <span  class="body-body-riqic">08:30</span>
                                                    </div>
                                                  </a-col>
                                                  <!--右边-->
                                                  <a-col :span="18">
                                                    <div  class="body-body-dy">
                                                      <p class="body-body-riqio">85613人订阅</p>
                                                      <div class="body-body-riqit"> 消防应急监测与指挥云平台</div>
                                                    </div>
                                                  </a-col>
                                                </a-row>
                                              </div>
                                            </a-col>
                                            <!--第一个-->
                                            <a-col :span="24">
                                              <div class="body-body-zhong body-body-zhongfour">
                                                <a-row>
                                                  <!--左边-->
                                                  <a-col :span="6">
                                                    <div  class="body-body-riqi">
                                                      <p class="body-body-riqio" >09/03</p>
                                                      <span  class="body-body-riqic">17:00</span>
                                                    </div>
                                                  </a-col>
                                                  <!--右边-->
                                                  <a-col :span="18">
                                                    <div  class="body-body-dy">
                                                      <p class="body-body-riqio">15623人订阅</p>
                                                      <div class="body-body-riqit">成功运用在政企事业单位车辆行业</div>
                                                    </div>
                                                  </a-col>
                                                </a-row>
                                              </div>
                                            </a-col>
                                            <!--第一个-->
                                            <a-col :span="24">
                                              <div class="body-body-zhong body-body-zhongfive">
                                                <a-row>
                                                  <!--左边-->
                                                  <a-col :span="6">
                                                    <div  class="body-body-riqi">
                                                      <p class="body-body-riqio" >09/09</p>
                                                      <span  class="body-body-riqic">19:30</span>
                                                    </div>
                                                  </a-col>
                                                  <!--右边-->
                                                  <a-col :span="18">
                                                    <div  class="body-body-dy">
                                                      <p class="body-body-riqio">15613人订阅</p>
                                                      <div class="body-body-riqit">WIFI定位技术</div>
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
                                </a-col>
                                <!--右边-->
                                <a-col :xl="8" :lg="8" >
                                  <div class="body-body-right">
                                    <a-row>
                                      <a-col :span="24">
                                        <div  class="body-body-right-zs">
                                          <a-row>
                                            <a-col :span="24">
                                              <div>
                                                【平台】只为做更好的平台更贴心的服务
                                              </div>
                                            </a-col>
                                            <div class="body-body-right-zso">
                                              <a-row>

                                                <a-col :span="16">
                                                  <div class="body-body-right-wz">
                                                    <span class="body-body-right-jiban">羁绊等</span>
                                                    <span class="body-body-right-gang">|</span>
                                                    <span class="body-body-right-jiage">36.7万</span>
                                                  </div>

                                                </a-col>
                                                <a-col :span="8">
                                                  <div class="body-body-right-shuliang"><span>￥8</span></div>
                                                </a-col>
                                              </a-row>
                                            </div>
                                          </a-row>
                                        </div>
                                      </a-col>
                                    </a-row>
                                  </div>
                                </a-col>
                                <!--下边-->
                                <a-col :span="24">
                                  <div>
                                    <a-row>
                                      <!--增值服务标题-->
                                      <a-col :span="24">
                                        <div class="body-body-up-">
                                          <a-row>
                                            <a-col :span="24">
                                              <div class="body-body-up-shang">
                                                <a-row>
                                                  <a-col :xl="4" :lg="6" :md="12" :xs="12">
                                                    <div class="body-body-up-top"><h3> 增值服务 </h3></div>
                                                  </a-col>
                                                  <a-col :xl="16" :lg="12">
                                                    <div class="body-body-up-bt">
                                                      <a href="#">保险</a>
                                                      <span>/</span>
                                                      <a href="#">二手车</a>
                                                      <span>/</span>
                                                      <a href="#">租车</a>
                                                      <span>/</span>
                                                      <a href="#">查询服务</a>
                                                    </div>

                                                  </a-col>
                                                  <a-col :xl="4" :lg="6" :md="12" :xs="12">
                                                    <!--<div class="body-body-right-huan">-->
                                                    <!--<a-icon type="sync" />-->
                                                    <div class="body-top-caigou-gengduo"><a href="#">更多 >></a></div>
                                                    <!--</div>-->


                                                  </a-col>
                                                </a-row>
                                              </div>
                                            </a-col>
                                            <a-col :span="8">
                                              <div class="body-body- body-body-o">
                                                <a-row>
                                                  <a-col :span="24">
                                                    <div class="body-body-zbtp"><img src="./assets/baoxian.jpg"  alt=""></div>
                                                  </a-col>
                                                  <div class="body-zzfw">
                                                    <a-row>
                                                      <a-col :span="24">
                                                        <div  class="body-body-zbbt"><a href="#">保险</a></div>
                                                      </a-col>
                                                      <a-col :span="24">
                                                        <div class="body-body-zbmk">
                                                          <a-row>
                                                            <a-col :xl="18" :lg="18" :md="24" :sm="24" :xs="24">
                                                              <div class="body-body-zbz">
                                                                <img src="./assets/touxiang.png" alt="">
                                                                <span><a href="#"> 车险</a></span>
                                                                <span>·</span>
                                                                <span><a href="#">人身险</a></span>
                                                                <span>·</span>
                                                                <span><a href="#">第三方险</a></span>
                                                                <span>·</span>
                                                                <span><a href="#">理赔中心</a></span>
                                                                <!--<span>·</span>-->
                                                              </div>
                                                            </a-col>
                                                            <a-col :xl="6" :lg="6">
                                                              <div class="body-body-zbs">
                                                                <!--XXXXX-->
                                                              </div>

                                                            </a-col>
                                                          </a-row>
                                                        </div>
                                                      </a-col>
                                                    </a-row>
                                                  </div>

                                                </a-row>
                                              </div>

                                            </a-col>
                                            <a-col :span="8">
                                              <div class="body-body- body-body-t">
                                                <a-row>
                                                  <a-col :span="24">
                                                    <div class="body-body-zbtp"><img src="./assets/ershouche.jpg"  alt=""></div>
                                                  </a-col>
                                                  <a-col :span="24">
                                                    <div  class="body-body-zbbt"><a href="#">二手车</a></div>
                                                  </a-col>
                                                  <a-col :span="24">
                                                    <div class="body-body-zbmk">
                                                      <a-row>
                                                        <a-col :span="18">
                                                          <div class="body-body-zbz">
                                                            <img src="./assets/touxiang.png" alt="">
                                                            <span><a href="#">车辆买卖</a></span>
                                                            <span>·</span>
                                                            <span><a href="#">车辆鉴定</a></span>
                                                            <span>·</span>
                                                            <span><a href="#">车辆评估</a></span>
                                                            <span>·</span>
                                                            <span><a href="#">回收机构</a></span>
                                                            <!--<span>·</span>-->
                                                          </div>
                                                        </a-col>
                                                        <a-col :span="6">
                                                          <div class="body-body-zbs">
                                                            <!--XXXXX-->
                                                          </div>

                                                        </a-col>
                                                      </a-row>
                                                    </div>
                                                  </a-col>
                                                </a-row>
                                              </div>

                                            </a-col>
                                            <a-col :span="8">
                                              <div class="body-body- body-body-s">
                                                <a-row>
                                                  <a-col :span="24">
                                                    <div class="body-body-zbtp"><img src="./assets/chaxunfuwu.jpg" alt=""></div>
                                                  </a-col>
                                                  <a-col :span="24">
                                                    <div  class="body-body-zbbt"><a href="#">租车</a></div>
                                                  </a-col>
                                                  <a-col :span="24">
                                                    <div class="body-body-zbmk">
                                                      <a-row>
                                                        <a-col :span="18">
                                                          <div class="body-body-zbz">
                                                            <img src="./assets/touxiang.png" alt="">
                                                            <span><a href="#">工程用车</a></span>
                                                            <span>·</span>
                                                            <span><a href="#">物流用车</a></span>
                                                            <span>·</span>
                                                            <span><a href="#">客运用车</a></span>
                                                            <span>·</span>
                                                            <span><a href="#">私人用车</a> </span>
                                                          </div>
                                                        </a-col>
                                                        <a-col :span="6">
                                                          <div class="body-body-zbs">
                                                            <!--XXXXX-->
                                                          </div>

                                                        </a-col>
                                                      </a-row>
                                                    </div>
                                                  </a-col>
                                                </a-row>
                                              </div>

                                            </a-col>
                                            <a-col :span="6">
                                              <div class="body-body-up-shuzi">
                                                <span>13</span>
                                                <p><a href="#">行业涉及/项</a> </p>
                                              </div>
                                            </a-col>
                                            <a-col :span="6">
                                              <div class="body-body-up-shuzi">
                                                <span>180</span>
                                                <p><a href="#">优质服务方/家</a> </p>
                                              </div>
                                            </a-col>
                                            <a-col :span="6">
                                              <div class="body-body-up-shuzi">
                                                <span>108</span>
                                                <p><a href="#">团队力量</a> </p>
                                              </div>
                                            </a-col>
                                            <a-col :span="6">
                                              <div class="body-body-up-shuzi">
                                                <span>36239</span>
                                                <p><a href="#">入网车辆/台</a> </p>
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
                          </a-col>
                        </a-row>

                        <a-col :span="24">
                          <!--身体--上边-->

                        </a-col>
                      </a-row>
                    </div>
                  </a-col>
                  <a-col  :xl="4" :lg="2" :md="1" :sm="0" :xs="0"></a-col>
                </a-row>
              </div>
            </a-col>
          </a-row>
        </div>
      </a-col>
      <!--下边-->
      <a-col :span="24">
        <div class="body-body-body">
          <a-row>
            <a-col  :xl="4" :lg="4" :md="2" :sm="0" :xs="0"></a-col>
            <a-col :xl="16" :lg="16" :md="20" :sm="24" :xs="24">
              <div class="body-body-dibu">
              <a-row>
                <a-col :span="24">
                  <div class="body-up-life-top">
                    <h3>行业资讯</h3>
                  </div>
                </a-col>
                <!--左-->
                <a-col :xl="10" :lg="10" :md="24" :sm="24" :xs="24">
                  <div class="body-up">
                    <span class="body-hdiandian"></span><h4><a href="#">行业新闻</a></h4>
                    <div class="body-up-yc"><span class="body-ldiandian"></span><a href="#">《广西：首张智能网联汽车测试牌照落户柳州》论坛演示区展示的智能驾驶体验图片来源：上汽通用五菱 7月12日，广西首张智能网联汽车测试牌照落户柳 </a></div>
                    <div class="body-up-yc"><span class="body-ldiandian"></span><a href="#">《鹤滩水电站：北斗助力完备科技产业链，撑起超级工程》时至盛夏，川滇交界，金沙江畔，远望山巅，云舒云卷。地处四川省凉山州宁南县和云南省昭通市巧家县交界处的白鹤滩水电站建设现场，酷暑中的施工更显火热。 </a></div>
                    <div class="body-up-yc"><span class="body-ldiandian"></span><a href="#">《智慧农业：互联网+农机作业，开启三夏无人作业新模式》5月28日，海南省儋州市水稻统防统治现场，大疆农业植保机器人T16正在田间进行施药飞行作业。 自动驾驶联合收割机、无人插秧机、 </a></div>
                    <div class="body-up-yc"><span class="body-ldiandian"></span><a href="#">《湖北襄阳：北斗助力汽车智能定位》智能网联汽车是我国建设世界汽车强国三大主攻方向之一。智能网联汽车是通过连接互联网，将人和车，与家和生活相关联，为生活提供更多便利和享受，</a></div>
                  </div>
                  <div class="body-up">
                    <span class="body-hdiandian"></span><h4><a href="#">技术知识</a></h4>
                    <div class="body-up-yc"><span class="body-ldiandian"></span><a href="#">《北斗技术在智能物流中的应用》目前，网上购物越来越多，而且呈飞速发展趋势，越来越多的物品流动，也造成了一定程度上的混乱，这给顾客带来了很多忧虑。 </a></div>
                    <div class="body-up-yc"><span class="body-ldiandian"></span><a href="#">《北斗导航三步走 从区域到全球》随着近年来北斗卫星快速组网，目前北斗卫星导航系统已在我国经济、国防安全、百姓生活等方面发挥了重要作用。 </a></div>
                    <div class="body-up-yc"><span class="body-ldiandian"></span><a href="#">《北斗卫星导航系统发展报告之引言》卫星导航系统能够为地球表面和近地空间的广大用户提供全天时、全天候、高精度的定位、导航和授时服务，是拓展人类活动、促进社会发展的重要空间基础设施。 </a></div>
                    <div class="body-up-yc"><span class="body-ldiandian"></span><a href="#">《北斗卫星导航系统发展报告之系统发展》系统规划 按照“质量、安全、应用、效益”的总要求，坚持 “自主、开放、兼容、渐进”的发展原则，遵循“先区域、后全球”的总体思路，北斗卫星导航系</a></div>
                    <div class="body-up-yc"><span class="body-ldiandian"></span><a href="#">《北斗卫星导航系统发展报告之系统应用》自北斗卫星导航系统提供服务以来，我国卫星导航应用在理论研究、应用技术研发、接收机制造及应用与服务等方面取得了长足进步。</a></div>
                  </div>
                </a-col>

                <!--中-->
                <a-col :xl="7" :lg="7" >
                  <div class="body-zhong-jiann" >
                    <a-row>
                      <!--标题-->
                      <a-col :span="24">
                      <div class="body-zhong-guoji">
                        技术服务
                      </div>
                </a-col>

                      <a-col :span="24">
                        <div class="body-zhong-zhong">
                        <a-row>
                          <a-col :span="24">
                            <div class="body-zhong-tupian">
                              <img src="./assets/chetuone.png" alt="">
                            </div>
                          </a-col>
                          <a-col :span="24">
                        <div class="body-zhong-o">
                          <p class="body-zhong-wenzi"><a href="#">就业市场|物联网安装调试员，未来五年人才需求近五百万</a></p>
                        </div>
                      </a-col>
                        </a-row>
                        </div>
                      </a-col>
                      <a-col :span="24">
                        <div>
                          <a-row>
                            <a-col :span="12">
                              <div class="body-zhong-one">
                              <div class="body-zhong-tupian" style="margin-right: 5px;margin-top: 30px;">
                                <img src="./assets/chetutwo.png" alt="">
                              </div>
                              <div class="body-zhong-s" style="margin-right: 5px;">
                                <p class="body-zhong-wenzi"><a href="#">优势专业推荐：物联网工程专业</a></p>
                              </div>
                              </div>
                            </a-col>
                            <a-col :span="12">
                              <div class="body-zhong-two">
                              <div class="body-zhong-tupian" style="margin-left: 5px;margin-top: 30px;">
                                <img src="./assets/chetutwo.png" alt="">
                              </div>
                              <div class="body-zhong-t" style="margin-left: 5px;">
                                <p class="body-zhong-wenzi"><a href="#">几大教学类应用软件，你用过几个？</a></p>
                              </div>
                              </div>
                            </a-col>
                          </a-row>
                        </div>
                      </a-col>
                    </a-row>
                  </div>

                </a-col>
                <!--右-->
                <a-col :xl="7" :lg="7">
                  <div class="body-zhong-jian">
                    <a-row>
                      <a-col :span="24">
                        <div class="body-zhong-guoji">
                          公司新闻
                        </div>
                      </a-col>
                      <a-col :span="24">
                        <div>
                          <a-row>
                            <a-col :span="12">
                              <div class="body-zhong-three">
                                  <div class="body-zhong-tupian" style="margin-right: 5px;">
                                    <img src="./assets/chetuthree.png" alt="">
                                  </div>
                                  <div class="body-zhong-s body-zhong-ss"  style="margin-right: 5px;">
                                    <p class="body-zhong-wenzi"><a href="#">车联网运营平台—你必须知道的汽车发动机保养七大常识</a></p>
                                  </div>
                              </div>
                            </a-col>
                            <a-col :span="12">
                              <div class="body-zhong-three">
                                  <div class="body-zhong-tupian" style="margin-left: 5px;">
                                    <img src="./assets/chetuthree.png" alt="">
                                  </div>
                                  <div class="body-zhong-t body-zhong-tt" style="margin-left: 5px;">
                                    <p class="body-zhong-wenzi"><a href="#">广东省轻工职业技术学校到访北斗星盛，探讨车联网人才培养</a></p>
                                  </div>
                        </div>
                            </a-col>




                          </a-row>
                        </div>
                      </a-col>
                      <a-col :span="24">
                        <div class="body-zhong-guoji">
                          国际热搜词
                        </div>
                      </a-col>
                      <!--热搜-->
                      <a-col :span="24">
                        <div>
                        <a-row>
                          <a-col :span="12">
                            <div class="body-body-resou"><a href="#"><span class="body-body-hong">1</span>北斗助力智慧高速</a> </div>
                            <div class="body-body-resou"><a href="#"><span class="body-body-hong">2</span>我国成功发射第四十六颗北斗导航卫星</a> </div>
                            <div class="body-body-resou"><a href="#"><span class="body-body-hong">3</span>大力推进5G、工业互联网、车联网等新一代信息技术</a> </div>
                            <div class="body-body-resou"><a href="#"><span class="body-body-hui">4</span>加快5G基础设施建设 </a> </div>
                            <div class="body-body-resou"><a href="#"><span class="body-body-hui">5</span>北斗为小麦收割注入新动力</a> </div>
                          </a-col>
                          <a-col :span="12">
                            <div class="body-body-resou"><a href="#"><span class="body-body-hui">6</span>北斗助力公车监管</a> </div>
                            <div class="body-body-resou"><a href="#"><span class="body-body-hui">7</span>5G+北斗，下一个产业风口</a> </div>
                            <div class="body-body-resou"><a href="#"><span class="body-body-hui">8</span>积极推进北斗应用示范项目</a> </div>
                            <div class="body-body-resou"><a href="#"><span class="body-body-hui">9</span>教育部办公厅关于全面推进</a> </div>
                            <div class="body-body-resou"><a href="#"><span class="body-body-hui">10</span>工信部：下一步将大力发展软件和信息技术服务业</a> </div>
                          </a-col>
                        </a-row>
                        </div>



                      </a-col>

                    </a-row>
                  </div>
                </a-col>

              </a-row>
              </div>
            </a-col>

            <a-col  :xl="4" :lg="4" :md="2" :sm="0" :xs="0"></a-col>
          </a-row>
        </div>

      </a-col>

      <!--底部-->
      <a-col :span="24">
        <div class="up-up">
            <a-row>
              <!--上-->
              <a-col  :xl="4" :lg="4" :md="2" :sm="0" :xs="0"></a-col>
              <a-col  :xl="16" :lg="16" :md="20" :sm="24" :xs="24">
                <a-row>
                  <a-col :span="24">
                    <div class="up-guangzhou">
                    <a href="#">粤ICP备14060246号Copyright © 广州市粤峰高新技术股份有限公司, 欢迎来电咨询!</a>
                    </div>
                  </a-col>
                  <a-col :xl="5" :lg="5" :md="5" :sm="8" :xs="8">
                    <div class="up-yuefeng">
                      <a href="#"><span>粤峰高新</span></a>
                      <a href="#"><p>-公司介绍</p></a>
                      <a href="#"><p>-七星车联</p></a>
                      <a href="#"><p>-荣誉资质</p></a>
                      <a href="#"><p>-合作企业</p></a>
                    </div>

                  </a-col>
                  <a-col :xl="5" :lg="5" :md="5" :sm="8" :xs="8">
                    <div class="up-yuefeng">
                      <a href="#"><span>帮助与支持</span></a>
                      <a href="#"><p>-技术支持</p></a>
                      <a href="#"><p>-平台兼容</p></a>
                      <a href="#"><p>-开发指南</p></a>
                      <a href="#"><p>-更新日志</p></a>
                    </div>
                  </a-col>
                  <a-col :xl="5" :lg="5" :md="5" :sm="8" :xs="8">
                    <div class="up-yuefeng">
                      <a href="#"><span>下载中心</span></a>
                      <a href="#"><p>-下载App</p></a>
                      <a href="#"><p>-开发文档</p></a>
                      <a href="#"><p>-操作文档</p></a>
                      <a href="#"><p>-离线地图</p></a>
                    </div>
                  </a-col>
                  <a-col :xl="5" :lg="5" :md="5" :sm="12" :xs="12">
                    <div class="up-yuefeng">
                      <a href="#"><span>联系我们</span></a>
                      <a href="#"><p>电话：020-38371507</p></a>
                      <a href="#"><p>邮箱：2502383768@qq.com</p></a>
                      <a href="#"><p>   地址：广州市天河区新塘大街 </br> 横岗头28号B栋2005、2006房</p></a>
                      <!--<a href="#"><p>XXXXX</p></a>-->
                    </div>
                  </a-col>
                  <a-col :xl="4" :lg="4" :md="4" :sm="12" :xs="12">
                    <div class="up-yuefeng">
                      <span><img src="./assets/weixin.png" alt=""></span>
                      <a href="#"><p>欢迎关注微信公众号</p></a>
                    </div>
                  </a-col>
                </a-row>
              </a-col>
              <a-col  :xl="4" :lg="4" :md="2" :sm="0" :xs="0"></a-col>

          </a-row>
        </div>
      </a-col>
      <a-col :span="24">
        <div class="up-beijing">
          <a-row>
            <!--下-->
            <a-col  :xl="4" :lg="4" :md="2" :sm="0" :xs="0"></a-col>
            <a-col  :xl="16" :lg="16" :md="20" :sm="24" :xs="24">
              <div class="up-tupian">
                <img src="./assets/uptupian.jpg" alt="">
              </div>
            </a-col>
            <a-col  :xl="4" :lg="4" :md="2" :sm="0" :xs="0"></a-col>
          </a-row>
        </div>

      </a-col>


      <a-col :span="24">
        <div class="up-gengduo">
          <a-row>
            <a-col  :xl="4" :lg="4" :md="2" :sm="0" :xs="0"></a-col>
            <a-col  :xl="16" :lg="16" :md="20" :sm="24" :xs="24">
              <div class="up-gengduo-">
                <div class="up-gengduo-o">更多优惠活动</div>
                <div class="up-gengduo-t">海量优惠套餐，为您提供全方位的服务</div>
              </div>
            </a-col>
            <a-col  :xl="4" :lg="4" :md="2" :sm="0" :xs="0"></a-col>
          </a-row>
        </div>
      </a-col>



    </a-row>
  </div>
</template>

<script>
  import $ from 'jquery'
  import ARow from "ant-design-vue/es/grid/Row";
  export default {
    methods: {
      onSearch(value) {
        console.log(value)
      },
    },
    name: 'HelloWorld',
    components: {
      ARow
    },
    data() {
      return {
        visible: true
      }
    },
    methods:{
      changeShow(){
        // debugger
        this.visible=!this.visible
        // debugger
      }
    }
  }


  $(document).ready(function () {

    // $("#dianji").click(function () {
    //   $(".tanxing-dati").hide();
    // });
    // $("#dianji").click(function () {
    //   $(".tanxing-dati").show();
    // })
      // $("#dianji").click(function(){
      //   $(".tanxing-dati").removeClass("intro");
      // });


    // var btn=document.getElementById("dianji");
    // btn.click(function () {
    //   $(".xiaode").addClass("intro");
    // }),function(){
    //   $(".xiaode").removeClass("intro");
    // }

    // /*.xiaode:hover .erji{*/
    // /*box-shadow: 1px 1px 5px #D1D1D1;*/
    // //
    // /*}*/



    // $(".xiaodeone,.dadeeone").mousemove(function () {
    //   $(".xiaodeone").css("box-shadow","1px 1px 5px #D1D1D1");
    // });
    // $(".xiaodeone,.dadeeone").mouseout(function () {
    //   $(".xiaodeone").css("box-shadow","0px 0px");
    // });


    // 第一个
    $(".xiaodeone,.dadeeone").mousemove(function () {
      $(".dadeeone").show();
      $(".xiaodeone").css("box-shadow","-5px -5px 5px  -4px #EDEDED,-5px 5px 5px -4px #EDEDED");
      $(".xiaodeone .tanxing a,.xiaodeone .tanxing-you").css("color","#3C9CFF");
    });
    $(".xiaodeone,.dadeeone").mouseout(function () {
      $(".dadeeone").hide();
      $(".xiaodeone").css("box-shadow","0px 0px");
      $(".xiaodeone .tanxing a,.xiaodeone .tanxing-you").css("color","black");
    });
    // 第二个
    $(".xiaodetwo,.dadeetwo").mousemove(function () {
      $(".dadeetwo").show();
      $(".xiaodetwo").css("box-shadow","-5px -5px 5px  -4px #EDEDED,-5px 5px 5px -4px #EDEDED");
      $(".xiaodetwo .tanxing a,.xiaodetwo .tanxing-you").css("color","#3C9CFF");
    });
    $(".xiaodetwo,.dadeetwo").mouseout(function () {
      $(".dadeetwo").hide();
      $(".xiaodetwo").css("box-shadow","0px 0px");
      $(".xiaodetwo .tanxing a,.xiaodetwo .tanxing-you").css("color","black");
    });
    // 第三个
    $(".xiaodethree,.dadeethree").mousemove(function () {
      $(".dadeethree").show();
      $(".xiaodethree").css("box-shadow","-5px -5px 5px  -4px #EDEDED,-5px 5px 5px -4px #EDEDED");
      $(".xiaodethree .tanxing a,.xiaodethree .tanxing-you").css("color","#3C9CFF");
    });
    $(".xiaodethree,.dadeethree").mouseout(function () {
      $(".dadeethree").hide();
      $(".xiaodethree").css("box-shadow","0px 0px");
      $(".xiaodethree .tanxing a,.xiaodethree .tanxing-you").css("color","black");
    });
    // 第四个
    $(".xiaodefour,.dadeefour").mousemove(function () {
      $(".dadeefour").show();
      $(".xiaodefour").css("box-shadow","-5px -5px 5px  -4px #EDEDED,-5px 5px 5px -4px #EDEDED");
      $(".xiaodefour .tanxing a,.xiaodefour .tanxing-you").css("color","#3C9CFF");
    });
    $(".xiaodefour,.dadeefour").mouseout(function () {
      $(".dadeefour").hide();
      $(".xiaodefour").css("box-shadow","0px 0px");
      $(".xiaodefour .tanxing a,.xiaodefour .tanxing-you").css("color","black");
    });
    // 第五个
    $(".xiaodefive,.dadeefive").mousemove(function () {
      $(".dadeefive").show();
      $(".xiaodefive").css("box-shadow","-5px -5px 5px  -4px #EDEDED,-5px 5px 5px -4px #EDEDED");
      $(".xiaodefive .tanxing a,.xiaodefive .tanxing-you").css("color","#3C9CFF");
    });
    $(".xiaodefive,.dadeefive").mouseout(function () {
      $(".dadeefive").hide();
      $(".xiaodefive").css("box-shadow","0px 0px");
      $(".xiaodefive .tanxing a,.xiaodefive .tanxing-you").css("color","black");
    });
    // 第六个
    $(".xiaodesix,.dadeesix").mousemove(function () {
      $(".dadeesix").show();
      $(".xiaodesix").css("box-shadow","-5px -5px 5px  -4px #EDEDED,-5px 5px 5px -4px #EDEDED");
      $(".xiaodesix .tanxing a,.xiaodesix .tanxing-you").css("color","#3C9CFF");
    });
    $(".xiaodesix,.dadeesix").mouseout(function () {
      $(".dadeesix").hide();
      $(".xiaodesix").css("box-shadow","0px 0px");
      $(".xiaodesix .tanxing a,.xiaodesix .tanxing-you").css("color","black");
    });

    // 第一波

    $(".body-top-xinpinone,.body-top-gengduoone").mousemove(function () {
      $(".body-top-gengduoone").show();
    });
    $(".body-top-xinpinone,.body-top-gengduoone").mouseout(function () {
      $(".body-top-gengduoone").hide();
    });
    $(".body-top-xinpintwo,.body-top-gengduotwo").mousemove(function () {
      $(".body-top-gengduotwo").show();
    });
    $(".body-top-xinpintwo,.body-top-gengduotwo").mouseout(function () {
      $(".body-top-gengduotwo").hide();
    });
    $(".body-top-xinpinthree,.body-top-gengduothree").mousemove(function () {
      $(".body-top-gengduothree").show();
    });
    $(".body-top-xinpinthree,.body-top-gengduothree").mouseout(function () {
      $(".body-top-gengduothree").hide();
    });
    $(".body-top-xinpinfour,.body-top-gengduofour").mousemove(function () {
      $(".body-top-gengduofour").show();
    });
    $(".body-top-xinpinfour,.body-top-gengduofour").mouseout(function () {
      $(".body-top-gengduofour").hide();
    });
    // 第二波

    $(".body-top-xinpinoone,.body-top-gengduooone").mousemove(function () {
      $(".body-top-gengduooone").show();
    });
    $(".body-top-xinpinoone,.body-top-gengduooone").mouseout(function () {
      $(".body-top-gengduooone").hide();
    });
    $(".body-top-xinpinttwo,.body-top-gengduottwo").mousemove(function () {
      $(".body-top-gengduottwo").show();
    });
    $(".body-top-xinpinttwo,.body-top-gengduottwo").mouseout(function () {
      $(".body-top-gengduottwo").hide();
    });
    $(".body-top-xinpintthree,.body-top-gengduotthree").mousemove(function () {
      $(".body-top-gengduotthree").show();
    });
    $(".body-top-xinpintthree,.body-top-gengduotthree").mouseout(function () {
      $(".body-top-gengduotthree").hide();
    });
    $(".body-top-xinpinffour,.body-top-gengduoffour").mousemove(function () {
      $(".body-top-gengduoffour").show();
    });
    $(".body-top-xinpinffour,.body-top-gengduoffour").mouseout(function () {
      $(".body-top-gengduoffour").hide();
    });
  // .body-top-xinpin:hover{
  //     z-index: 10;
  //     box-shadow: 0px 0px 12px #BCBCBC;
  //   }
// 查询更多鼠标事件
//     第一个
    $(".body-top-xinpinone,.body-top-gengduoone").mousemove(function () {
      $(".body-top-xinpinone").css("box-shadow","0px 0px 12px #BCBCBC");
    });
    $(".body-top-xinpinone,.body-top-gengduoone").mouseout(function () {
      $(".body-top-xinpinone").css("box-shadow","0px 0px 0px #fff");
    });
//     第二个
    $(".body-top-xinpintwo,.body-top-gengduotwo").mousemove(function () {
      $(".body-top-xinpintwo").css("box-shadow","0px 0px 12px #BCBCBC");
    });
    $(".body-top-xinpintwo,.body-top-gengduotwo").mouseout(function () {
      $(".body-top-xinpintwo").css("box-shadow","0px 0px 0px #fff");
    });
    //     第三个
    $(".body-top-xinpinthree,.body-top-gengduothree").mousemove(function () {
      $(".body-top-xinpinthree").css("box-shadow","0px 0px 12px #BCBCBC");
    });
    $(".body-top-xinpinthree,.body-top-gengduothree").mouseout(function () {
      $(".body-top-xinpinthree").css("box-shadow","0px 0px 0px #fff");
    });
    //     第四个
    $(".body-top-xinpinfour,.body-top-gengduofour").mousemove(function () {
      $(".body-top-xinpinfour").css("box-shadow","0px 0px 12px #BCBCBC");
    });
    $(".body-top-xinpinfour,.body-top-gengduofour").mouseout(function () {
      $(".body-top-xinpinfour").css("box-shadow","0px 0px 0px #fff");
    });
    //     第五个
    $(".body-top-xinpinoone,.body-top-gengduooone").mousemove(function () {
      $(".body-top-xinpinoone").css("box-shadow","0px 0px 12px #BCBCBC");
    });
    $(".body-top-xinpinoone,.body-top-gengduooone").mouseout(function () {
      $(".body-top-xinpinoone").css("box-shadow","0px 0px 0px #fff");
    });
    //     第六个
    $(".body-top-xinpinttwo,.body-top-gengduottwo").mousemove(function () {
      $(".body-top-xinpinttwo").css("box-shadow","0px 0px 12px #BCBCBC");
    });
    $(".body-top-xinpinttwo,.body-top-gengduottwo").mouseout(function () {
      $(".body-top-xinpinttwo").css("box-shadow","0px 0px 0px #fff");
    });
    //     第七个
    $(".body-top-xinpintthree,.body-top-gengduotthree").mousemove(function () {
      $(".body-top-xinpintthree").css("box-shadow","0px 0px 12px #BCBCBC");
    });
    $(".body-top-xinpintthree,.body-top-gengduotthree").mouseout(function () {
      $(".body-top-xinpintthree").css("box-shadow","0px 0px 0px #fff");
    });
    //     第八个
    $(".body-top-xinpinffour,.body-top-gengduoffour").mousemove(function () {
      $(".body-top-xinpinffour").css("box-shadow","0px 0px 12px #BCBCBC");
    });
    $(".body-top-xinpinffour,.body-top-gengduoffour").mouseout(function () {
      $(".body-top-xinpinffour").css("box-shadow","0px 0px 0px #fff");
    });
    // 车队精化管理
    $(".body-body-zhongone").mousemove(function () {
      $(".body-body-zhongone .body-body-riqit").css("font-size","18px");
    });
    $(".body-body-zhongone").mouseout(function () {
      $(".body-body-zhongone .body-body-riqit").css("font-size","16px");
    });


    $(".body-body-zhongtwo").mousemove(function () {
      $(".body-body-zhongtwo .body-body-riqit").css("font-size","18px");
    });
    $(".body-body-zhongtwo").mouseout(function () {
      $(".body-body-zhongtwo .body-body-riqit").css("font-size","16px");
    });


    $(".body-body-zhongthree").mousemove(function () {
      $(".body-body-zhongthree .body-body-riqit").css("font-size","18px");
    });
    $(".body-body-zhongthree").mouseout(function () {
      $(".body-body-zhongthree .body-body-riqit").css("font-size","16px");
    });


    $(".body-body-zhongfour").mousemove(function () {
      $(".body-body-zhongfour .body-body-riqit").css("font-size","18px");
    });
    $(".body-body-zhongfour").mouseout(function () {
      $(".body-body-zhongfour .body-body-riqit").css("font-size","16px");
    });


    $(".body-body-zhongfive").mousemove(function () {
      $(".body-body-zhongfive .body-body-riqit").css("font-size","18px");
    });
    $(".body-body-zhongfive").mouseout(function () {
      $(".body-body-zhongfive .body-body-riqit").css("font-size","16px");
    });
  })
</script>
<style type="text/css">
  .intro{
    display: none;
    /*color: red;*/
  }
</style>
<style>

  .top-top .ant-input-search.ant-input-search-enter-button > .ant-input{
    -webkit-border-radius: 0!important;
    -moz-border-radius: 0!important;
    border-radius: 0!important;
    /*padding: 0 50px 0 20px;*/
  }
  .top-top .ant-input-search > .ant-input-suffix > .ant-input-search-button{
    -webkit-border-radius: 0!important;
    -moz-border-radius: 0!important;
    border-radius: 0!important;
  }
</style>

<style scoped>
/*鼠标事件*/
/*shubiaoshijian*/
a:hover{
  color: #3C9CFF;
}
.huodong:hover{
  background-color: #3C9CFF;
  color: white;
}
.xiaode:hover .tanxing a{
color: #3C9CFF;
}
.xiaodee:hover .tanxing a{
  color: #3C9CFF;
}
.xiaode:hover .tanxing{
  color: #3C9CFF;
}
.xiaodee:hover .tanxing {
  color: #3C9CFF;
}
.erji a:hover .yunfuwu{
  color: #3C9CFF;
}
.erji a:hover .yunfuwuu {
  color: #3C9CFF;
}
.top-right-up:hover .top-right-up-o{
  color: #3C9CFF;
}
.top-right-upp:hover .top-right-up-o{
  color: #3C9CFF;
}

.dade-dade:hover .dade-dade{
  display: block;
}
.top-right a:hover{
  color: #3C9CFF;
}
.dade-dade{
  position: relative;
}

/*body-body-up- 增值服务的保险 下的数字*/
.body-body-up-bt a:hover,.body-body-zbz a:hover{
  color: #3C9CFF;
}
.dade-dade a:hover,.body-top-jinrong a:hover,.body-top-gengduo a:hover,.body-body-resou:hover a,.body-up a:hover,.body-zhong-wenzi:hover a,.body-top-caigou-gengduo a:hover{
  color: #3C9CFF;
}
.body-body-liji:hover{
  background: rgba(0,0,0,.24);
  border:1px  solid #fff;
}
/*图片透明度*/
.body-body-right:hover,.body-body-:hover .body-body-zbtp,.body-zhong-zhong:hover .body-zhong-tupian{
  opacity: 0.8;
}
.body-zhong-one:hover .body-zhong-tupian,.body-zhong-two:hover .body-zhong-tupian,.body-zhong-three:hover .body-zhong-tupian,.body-zhong-four:hover .body-zhong-tupian{
  opacity: 0.8;
  /*box-shadow: 1px 1px 6px red ;*/
}
/*图片背景阴影*/
.body-body-right:hover,.body-body-:hover,.body-zhong-zhong:hover,.body-zhong-one:hover,.body-zhong-two:hover,.body-zhong-three:hover,.body-zhong-four:hover{
  box-shadow: 1px 1px 6px #D6D6D6 ;
}





















































































































  /*轮播*/
  .ant-carousel >>> .slick-slide {
    text-align: center;
    background: white;
    overflow: hidden;
    /*color: #3C9CFF;*/
  }
轮播图2
.ant-carousel >>> .slick-slide {
  text-align: center;
  height: 160px;
  line-height: 160px;
  background: #364d79;
  overflow: hidden;
}
  .ant-carousel >>> .custom-slick-arrow {
    width: 25px;
    height: 25px;
    font-size: 25px;
    color: black;
    opacity: 0.3;
  }
  .ant-carousel >>> .custom-slick-arrow:before {
    display: none;
  }
  .ant-carousel >>> .custom-slick-arrow:hover {
    opacity: 0.5;
  }
  .ant-carousel >>> .slick-slide  h3 {
    color: #fff;
  }













  /*头部---上*/
.top-top-right img{
  width: 100%;
}
.top-center input{
  height: 40px;
  line-height: 40px;
}
.top-center button{
}
  .top-life {
    text-align: center;
  }
  .top-life img{
    text-align: center;
    height: 40px;
  }
  .top-ssk{
    display: none;
    height: 40px;
    line-height: 40px;
    float: right;
  }
  .top-ssk img{
    width: 24px;
    height: 24px;

  }
  .ant-dropdown-link{
    float: right;

  }
.erjicaidan-tu img{
  display: block;
  width: 100%;
}

.dadeeone,.dadeetwo,.dadeethree,.dadeefour,.dadeefive,.dadeesix{
  display: none;
  padding: 10px 15px;
  z-index: 5;
  position: absolute;
  left: 255px;
  top: 113px;
  width: 390px;
  height: 645px;
  background-color: white;
  color: dimgray;
  box-shadow: 0 0 15px 0 rgba(0,0,0,.1);
}
.dadeeone a,.dadeetwo a,.dadeethree a,.dadeefour a,.dadeefive a,.dadeesix a{
padding: 10px 10px;
  color: #9C9C9C;
}
.dadeeone div,.dadeetwo div,.dadeethree div,.dadeefour div,.dadeefive div,.dadeesix div{
  padding: 3px;
}
.dadeeone h3,.dadeetwo h3,.dadeethree h3,.dadeefour h3,.dadeefive h3,.dadeesix h3{
  display: block;
  font-size: 14px;
  color: #181818;
  font-weight: 600;
  margin: 0 0 15px 10px;
  text-decoration: none;
  height: 16px;
  line-height: 16px;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
}

.ant-dropdown-link img{
  width: 28px;
  height: 28px;
  margin: 5px 15px;
}
  .wenzi {
    background-color: #3C9CFF;
    color: white !important;
  }
  .top-right {
    text-align: center;
    font-size: 15px;
    height: 40px;
    line-height: 40px;
  }

  .kongzhitai {
    text-align: center;
  }
  .custom-slick-arrow:hover{
    color: #3C9CFF;
  }

  .kongzhitaii a{
    border-left: 2px solid #9C9C9C;
    padding: 0 15px;
  }

  .top-center {
  }

  .top-top {
    margin: 20px 0px 10px 0px;
  }

  .components-badge-demo-dot {
    margin: 0px 6px;
  }
  /*头部--中*/

  .jingxuan {
    display: block;
    width: 260px;
    height: 40px;
    line-height: 40px;
    font-size: 16px;
    color: #fff;
    letter-spacing: 1px;
    text-align: center;
    background: #3C9CFF;
  }

  .huodong {
    font-size: 16px;
    color: #666666;
    display: inline-block;
    padding: 0 22px;
    line-height: 40px;
    text-align: center;
  }
  a{
    text-decoration: none;
  }


  .zuixin {
    border-bottom: 2px solid #3C9CFF;
    height: 42px;
  }

  .zuixinn{
    display: none;
  }

  .gengduoone{
    width: 30px;
    height: 30px;
    padding: 6px;
  }

  .zuixinnn{
    line-height: 39px;
    margin-left: 110px;
  }

  .zuixinn{
  }

  .body-zhong-jiann{
    cursor: default;
    margin-right: 10px;
  }
.body-zhong-jian{
  cursor: default;
  margin-left: 10px;
}

  /*头部--中--媒体查询*/

  @media screen and (max-width: 1200px){
    .body-top-guanggao{
      display: none;
    }
    .body-top-guanggao{
      display: none;
    }
    .top-ssk{
      display: block;
    }
  }
  @media screen and (max-width: 1100px) {
    /*小于1000的时候的页面效果*/
    /*二级菜单效果*/
    /*.tanxing-datii {*/
      /*display: none;*/
    /*}*/
    .body-body-up-bt{
      display: none;
    }
    .body-body-zbs{
      display: none;
    }



  }
  @media screen and (max-width: 1000px) {
    /*大于900的时候的页面效果*/
    /*.tanxing-datii {*/
      /*display: block;*/
    /*}*/
    .zuixinnn{
      display: none;
    }
    .zuixinn{
      display: block;
    }
    .body-top-jinron{
      margin-right: 20px;
    }

    .body-top-jinrong{
      display: none;
    }

    .body-body-right{
    display: none;
    }
    .body-zhong-jian,.body-zhong-jiann{
      display: none;
    }
  }
  @media screen and (max-width: 700px) {
    /*大于600的时候的页面效果*/
  .body-top-jinrong{
    display: none;
  }

  }
@media screen and (max-width: 767px){
  .top-right{
    margin-top: 15px;
  }
  .tanxing-dati {
    margin-top: 55px;
  }
  .dadeeone,.dadeetwo,.dadeethree,.dadeefour,.dadeefive,.dadeesix{
    margin-top: 55px;
  }

}
  /*头部--下*/

  .tanxing {
    float: left;
    margin: 10px 10px 10px 25px;
    color: #4D5250;
    font-size: 16px;
  }
  .tanxingg {
    float: left;
    margin: 10px 10px 10px 25px;
    color: #4D5250;
    font-size: 18px;
  }
  .tanxing-you {
    left: 10px;
  }
  .yunfuwu {
    border-right: 1px solid #F4F4F4;
    color: #9C9C9C;
    font-size: 14px;
    margin: 7px;
    padding: 0 15px 0 0;
  }
.yunfuwuu {
  color: #9C9C9C;
  font-size: 14px;
  margin: 7px;
  padding: 0 15px 0 0;
}
  .erji {
    padding: 15px;
  }
  .xiaode {
    border-bottom: 1px solid #F4F4F4;
  }

.body-top-jr{
  margin: 20px 0;
}
  .cha {
    text-align: center;
    margin: 10px 0 15px 0;
    border-color: #F4F4F4;
  }
  .chakan {
    width: 180px;
    line-height: 40px;
    height: 40px;
    text-align: center;
  }
  .tanxing-dati {
    width: 260px;
    height: 645px;
    position: absolute;
    top: 113px;
    -webkit-box-shadow: 1px 1px 5px #F4F4F4;
    box-shadow: 1px 1px 5px #F4F4F4;
    border-radius: 3px;
    z-index: 10;
    background-color: white;
  }
  .top-right- {
    padding: 0 0px 10px 0px;
    text-align: center;
  }
  .top-right-up {
    border-right: 1px solid #EEEEEE;
  }
  .top-right-upp{
  }
.top-right-up-o{
  line-height: 70px;
  font-size: 22px;
  color: rgb(0, 0, 0);
  font-family: Raleway;
}
  .body-top-jinrongg{
  text-align: center;
}

  .top-right-up-yunfuwu{
    color: #AFB3BE;
    padding: 10px 15px;
    line-height: 30px;
    /*margin-bottom: 5px;*/
  }
.top-right-up-yunfuwuu{
  color: #AFB3BE;
  line-height: 50px;
}
.top-right-up p,.top-right-upp p{
  line-height: 90px;
  margin: 5px 0;
}

  .top-right a, xiaode a, .top-right-up a,.top-right-upp a{
    color: #9C9C9C;
  }
  .tanxing a{
    color: #4D5250;
  }
  .body-top-xianzhi{
    margin: 20px 0;
    cursor: default;
  }
  /*身体头部*/
  .body-top{
    background-color: #F2F2F2;
  }
  .body-top-qy{
    margin: 20px 0;
  }
  .body-top-top{
    padding: 10px 0;
  }
  .body-top-caigou,.body-top-caigouu,.body-top-jinron,.body-body-up-shang {
    padding: 10px 0;
  }
  .body-zhong-zhong{
    cursor: pointer;
  }

  .body-top-caigou{
    color: rgb(0, 0, 0);
    font-weight: normal;
    margin-right: 10px;
  }
  .body-top-caigou h3{
    font-size: 22px;
  }
  .body-top-caigou-gengduo{
    float: right;
    height: 34px;
    line-height: 45px;
  }
  .body-top-caigou-gengduo a{
    color: rgb(0, 0, 0);
  }
  .body-top-caigouu{
    color: rgb(0, 0, 0);
    font-weight: normal;
   margin-left: 10px;
  }
.body-top-caigouu h3{
  font-size: 22px;
}
/*.body-top-caigouu{*/
  /*float: right;*/
  /*height: 34px;*/
  /*line-height: 45px;*/
/*}*/
  .body-top-jinrong{
     /*color: #0C0C00;*/
     line-height: 32px;
   }
.body-top-jinrong a{
  color: #0C0C00;
  /*line-height: 32px;*/
}

  .body-top-gengduoone,  .body-top-gengduotwo,  .body-top-gengduothree,  .body-top-gengduofour,
  .body-top-gengduooone,  .body-top-gengduottwo,  .body-top-gengduotthree,  .body-top-gengduoffour{
    display: none;
    float: right;
    line-height: 32px;
    position: relative;
    margin-top: -60px;
    background: #3C9EFF;
    width: 100%;
    text-align: center;
    font-size: 16px;
    color: #fff;
    letter-spacing: .65px;
    z-index: 20;
    cursor: pointer;
  }
  .body-top-gengduothree,.body-top-gengduoone{
    margin-right: 3px;
    /*margin-left: 5px;*/
  }
.body-top-gengduotwo,.body-top-gengduofour{
  margin-right: 7px;
}
.body-top-gengduottwo,.body-top-gengduoffour{
  margin-right: -2px;
  /*margin-left: 5px;*/
}
.body-top-gengduooone,.body-top-gengduotthree{
  margin-right: -6px;
}
  .body-top-gengduoone span,  .body-top-gengduotwo span,  .body-top-gengduothree span,  .body-top-gengduofour span,
  .body-top-gengduooone span,  .body-top-gengduottwo span,  .body-top-gengduotthree span,  .body-top-gengduoffour span{
    display: block;
    height: 60px;
    line-height: 60px;
  }
  .body-top-guanggao{
    padding: 32px 6px;
    background-color: white;
    border: 1px solid #DCDCDC;
  }
  .body-top-right{
    margin-left: 15px;
    padding: 0 19px;
    background-color: white;
    border:1px solid #DCDCDC;
  }
  .top-right-lb{
    margin-top: 3px;
    padding: 16px 10px;
    border-right: 1px solid #DCDCDC;
  }
.top-right-lbb{
  margin-top: 3px;
  padding: 16px 10px;
}
.body-top-gengduo{
  float: right;
}
.body-top-gengduo a{
  color: #0C0C00;
}

  /*闲置车辆*/
  .body-top-bjt{
    background-image: url("./assets/bjtone.jpg");
    background-size: 100%;
    margin-right: 10px;
    padding: 20px 20px 40px 20px;
  }
  .body-top-bjtt{
    background-image: url("./assets/bjttwo.jpg");
    background-size: 100%;
    margin-left: 10px;
    padding: 20px 20px 40px 20px;
  }
  .body-top-bjt-bt{
    font-size: 18px;
    color: white;
    padding: 20px 10px 16px 0px;
  }
  .body-top-bjt-wz{
    font-size: 14px;
    color: white;
    height: 24px;
    line-height: 24px;
    text-overflow:ellipsis;
    overflow: hidden;
    white-space: nowrap;
  }
  .body-top-xinpin{
    background-color: white;
    padding: 20px;
    border-bottom: 1px solid #ededed;
    border-right: 1px solid #ededed;
    margin-right: 0px;
  }
  .body-top-zhuce{
    font-size: 16px;
    margin: 20px 0 10px 0;
    vertical-align: baseline;
  }
  .body-top-xinpin-wzo{
    display: inline-block;
    border: 1px solid #d8d8d8;
    border-radius: 4px;
    height: 18px;
    line-height: 16px;
    padding: 0px 6px 0px 6px;
    text-align: center;
    vertical-align: center;
    font-size: 12px;
    color: #999;
    letter-spacing: .33px;
  }
  .body-top-zhuce{
    text-align: left;
    font-size: 14px;
    color: #181818;
    letter-spacing: .65px;
    line-height: 30px;
    height: 30px;
    margin-top: 13px;
    margin-bottom: 1px;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
  }
  .body-top-XXX{
    font-size: 12px;
    white-space: pre-line;
    color: #999;
    letter-spacing: .56px;
    height: 25px;
    margin-right: 20px;
    text-overflow: ellipsis;
    overflow: hidden;
    white-space: nowrap;

  }
  h4{
    margin: 0px;
  }
  h3{

    margin: 0;
    padding: 0;
    color: rgb(0, 0, 0);
    font-size: 22px;
    font-weight: normal;
  }
  .body-top-jg p{
    margin: 10px 0;
  }
  .body-top-jg span {
    color: #ff6a00;
    font-size: 21px;
  }
  .body-top-xio{
    margin-top: 2px;
  }
  .body-top-xinpinn{
    margin-right: 10px;
  }
  .body-top-xinpinno{
    margin-left: 10px;
    margin-right: -2px;
    margin-top: 2px;
  }
  .body-top-xinpinnn{
    margin-left: 5px;
    margin-top: 2px;
  }
  .body-top-xinpin-top{
    margin-top: -5px;
  }
  .body-top-xinpinnnn{
    margin-right: 10px;
    margin-left: -3px;
    margin-top: 2px;
  }
  .body-top-xi{
    margin-right: 5px;
    margin-top: 2px;
    position: relative;
  }
/*身体--身体左边*/
  .body-body-dt{
    cursor: default;
    background-image: url('./assets/bodyditu.png');
    background-size: 100%;
    margin-right: 20px;
  }
  .body-body-zhibo span{
    padding: 7px 13px 0 11px;
    font-size: 14px;
    min-width: 88px;
    position: absolute;
    left: -8px;
    top: 12px;
    z-index: 10;
    height: 36px;
    font-weight: 500;
    border-radius: 4px;
    color: #fff;
    background-color: #1a7af8;
    border-color: transparent;
  }
  .body-body-dingyue{
    top: 101px;
    display: inline-block;
    background: #fff;
    border-radius: 4px;
    height: 28px;
    padding: 4px 8px;
    font-size: 14px;
    color: #232323;
    font-weight: 700;
    margin-bottom: 15px;
  }
  .body-body-dati{
    position: relative;
    cursor: default;
    left: 22px;
    top: 80px;
  }
  .body-body-quanwu{
    font-size: 32px;
    color: #fff;
    text-align: justify;
    line-height: 45px;
    margin: 5px 0;
    font-weight: 700;
    text-overflow: ellipsis;
    display: -webkit-box;
    -webkit-line-clamp: 2;
    overflow: hidden;
  }
  .body-body-zhenni{
    font-size: 16px;
    color: hsla(0,0%,100%,.79);
    padding-right: 12px;
    white-space: nowrap;
    line-height: 22px;
    margin-left: 3px;
  }
  .body-body-zhennid{
    margin: 0 3px;
    color: hsla(0,0%,100%,.79);
  }

  .body-body-liji{
    display: inline-block;
    margin-top: 20px;
    padding: 7px 19px;
    font-size: 16px;
    border-radius: 20px;
    align-items: center;
    justify-content: center;
    border: 1px solid white;
    font-weight: 700;
    cursor: pointer;
  }
  .body-body-liji a{
    color: white;
  }
  .body-body-haokan img{
    width: 100%;
    float: bottom;
    margin-top: 175px;
  }
  .body-body-riqic{
    font-size: 19px;
    line-height: 22px;
    color: #fff;
    font-weight: 700;
    white-space: nowrap;
  }
  .body-body-riqio{
    font-size: 14px;
    color: hsla(0,0%,100%,.6);
    white-space: nowrap;
    margin-bottom: 2px;
    line-height: 20px;
  }
  .body-body-riqit{
    font-size: 16px;
    color: #fff;
    line-height: 22px;
    text-overflow:ellipsis;
    overflow: hidden;
    white-space: nowrap;
    transition: all .2s linear;
  }
  .body-body-dy{
    flex: 1 1;
    flex-direction: column;
    overflow: hidden;
    margin-left: 7px;
    padding-bottom: 10px;
    border-bottom: 1px solid hsla(0,0%,100%,.1);
  }
  .body-body-zhong{
    padding: 9px 0;
  }
  .body-body-r{
    background: rgba(0,0,0,.24);
    cursor: default;
  }
  .body-body-riqi{
    text-align: center;
  }
/*身体--右边*/
  .body-body-right{
    background-image: url('./assets/chetufour.png');
    width: 100%;

  }
  .body-body-right-zso{
    padding-bottom: 25px;
  }
  .body-body-right-zs{
    font-size: 20px;
    color: #fff;
    font-weight: 700;
    margin-top: 282px;
    padding-left: 20px;
    line-height: 28px;
    overflow: hidden;
    white-space: nowrap;
  }
  .body-body-right-wz{
    display: inline-block;
  }
  .body-body-right-jiban{
    font-size: 14px;
    color: hsla(0,0%,100%,.6);
    margin-right: 8px;
    line-height: 22px;
    padding-left: 20px;
  }
  .body-body-right-gang{
    color: hsla(0,0%,100%,.4) ;
    margin-right: 8px;
  }
  .body-body-right-jiage{
    font-size: 14px;
    color: hsla(0,0%,100%,.6);
    line-height: 22px;
  }
  .body-body-right-shuliang{
    right: 0;
    bottom: 0;
    font-size: 20px;
    font-weight: 700;
    color: #fff;
    /*padding-bottom: 25px;*/


  }
  /*增值服务*/
  .body-body-zbbt,.body-body-zbmk{
    background: white;
    /*padding: 20px;*/
    text-overflow:ellipsis;
    overflow: hidden;
    white-space: nowrap;
    cursor: default;

  }
  .body-body-up-top{
    font-size: 24px;
    color: #333;
    line-height: 32px;
    font-weight: 700;
  }
  .body-body-right-huan{
    float: right;
    line-height: 32px;
    display: flex;
    align-items: center;
    cursor: pointer;
    font-size: 16px;
    font-weight: 700;
  }
  .body-body-right-huan span{
    margin-left: 5px;
  }
  .body-body-up-bt{
    line-height: 32px;
  }
  .body-body-up-bt a{
    font-size: 16px;
    line-height: 22px;
    color: #666;
  }
  .body-body-up-bt span{
    color: #666;
    margin: 0 10px;
  }
  .body-body-zbbt{
    padding-top: 20px;
    padding-left: 20px;
    font-weight: 700;
    font-size: 20px;
    line-height: 28px;
    color: #333;
  }
  .body-body-zbz{
    text-overflow:ellipsis;
    overflow: hidden;
    white-space: nowrap;
  }
  .body-body-up- a{
    color: #333;
  }
  .body-body-zbz img{
    width: 20px;
    height: 20px;
    border-radius: 50%;
    margin-right: 8px;
  }
  body-body-zbz span{
    display: block;
    font-size: 14px;
    color: #999;
    line-height: 20px;
    position: relative;
    padding: 0 16px;
    transition: all .2s linear;
  }
  .body-body-zbtp img{
    width: 100%;
  }
  .body-body-o{
    margin-right: 14px;
  }
  .body-body-t{
    margin: 0 7px;
  }
  .body-body-s{
    margin-left: 14px;
  }
  .body-qiyecaigou img{
    width: 100%;
  }
  .body-body-zbmk{
    padding: 5px 0 20px 20px;
  }
  /*底部--行业资讯*/
  .body-zhong-jian p{
    padding: 0 10px;
  }
  .body-body-up-shuzi{
    cursor: default;
    text-align: center;
    padding: 20px 0;
    margin-top: 40px;
  }
  .body-body-body{
    margin: 40px 0;
  }
  .body-body-up-shuzi span{
    font-weight: 700;
    font-size: 34px;
    line-height: 28px;
    color: #333;
    display: block;
    margin: 25px 0 20px 0;
  }
  .body-body-up-shuzi p{
    top: 10px;
  }
  .body-body-up-{
    padding: 20px 0;
  }
  .body-hdiandian{
    height: 5px;
    width: 5px;
    background-color: red;
    display: inline-block;
  }
  .body-ldiandian{
    height: 3px;
    width: 3px;
    background-color: blue;
    display: inline-block;
    margin-right: 15px;
  }
  .body-top-guanggao-tp img{
    width: 100%;
  }
  .body-up h4{
    font-family: "Microsoft YaHei","微软雅黑","SimHei","黑体";
    font-size: 16px;
    display: inline;
    margin-left: 12px;
    font-weight: 600;
    line-height: 50px;
    color: #333;

  }
  .body-up-life-top{
    border-bottom: 1px solid #E0E4E7;
  }
  .body-up-life-top h3{
    padding: 10px 0;
  }
  .body-up-yc,.body-zhong-wenzi{
    font-size: 16px;
    color: black;
    line-height: 32px;
    text-overflow:ellipsis;
    overflow: hidden;
    white-space: nowrap;
    transition: all .2s linear;
  }
  .body-zhong-guoji{
    border-left: 2px solid #255D9C;
    color: #255D9C;
    font-family: "Microsoft YaHei","微软雅黑","SimHei","黑体";
    font-size: 16px;
    display: inline;
    font-weight: 600;
    line-height: 50px;
    color: #333;
    padding-left: 12px;
  }
  .body-up{
    margin-right: 40px;

  }
  .body-zhong-o p,.body-zhong-s p,.body-zhong-t p{
  padding: 0 10px;
  }
  .body-zhong-s,.body-zhong-t,.body-zhong-o{
    margin-bottom: 10px;
  }
  .body-zhong-s p,.body-zhong-t p,.body-zhong-o p{
    margin: 0px;
    background:#F2F2F5;
  }
  .body-zhong-o{
    /*margin-right: 18px;*/
  }
  /*.body-zhong-s,.body-zhong-t{*/
    /*margin-right: 23px;*/
    /*margin-top: 25px;*/
  /*}*/
  .body-zhong-tt{
    /*float: right;*/
    margin: 0px;
    margin-bottom: 15px;
  }
  .body-zhong-ss{
    margin: 0 0px 15px 0px
  }
  .body-body-you{
    margin-left: 15px;
  }
.body-body-resou{
  cursor: pointer;
  font-size: 16px;
  color: black;
  line-height: 32px;
  text-overflow: ellipsis;
  overflow: hidden;
  white-space: nowrap;
  -webkit-transition: all .2s linear;
  transition: all .2s linear;
}
.body-body-resou a{
  color:black;
}
.body-body-hong{
  color: orangered;
  display: inline-block;
  margin-right: 10px;
  font-family: impact,sans-serif;
}
.body-body-hui{
  color: #D8D8D8;
  display: inline-block;
  margin-right: 10px;
  font-family: impact,sans-serif;
}
.body-top-XXX{
  overflow: hidden;
}
.body-zhong-tupian img{
  width: 100%;
  }
/*底部--结尾*/
  .body-body-dibu a{
    color: black;
  }
  .up-gengduo{
    width: 100%;
    padding: 0px;
    background-color: #3C9CFF;
    background-image: linear-gradient(90deg, #3C9CFF, #A7D3FC 100%);
  }
  .up-gengduo-{
    width: 100%;
    height: 70px;
    padding-top: 10px;
    box-sizing: border-box;
  }
  .up-gengduo-o{
    text-align: left;
    line-height: 30px;
    font-size: 24px;
    color: #fff;
  }
  .up-gengduo-t{
    text-align: left;
    line-height: 8px;
    font-size: 16px;
    color: #fff;
    padding-top: 12px;
  }
  .up-guangzhou{
    text-align: left;
    line-height: 30px;
    font-size: 14px;
    border-bottom: 1px solid #d7d8d9;
    /*border-bottom: 1px solid #4B5054;*/
    letter-spacing: .5px;
    padding: 20px 0 15px 0;
    text-overflow:ellipsis;
    overflow: hidden;
    white-space: nowrap;

  }
  .up-guangzhou a{
    color: #d7d8d9;
    /*color: #73777a;*/
  }

  .up-yuefeng span{
    font-size: 16px;
    color: #fff;
    margin: 35px 0 20px 0;
    display: block;
  }
  .up-yuefeng p{
    text-align: left;
    line-height: 18px;
    font-size: 14px;
    color: #d7d8d9;
    letter-spacing: .44px;
    margin-bottom: 16px;
  }
  .up-up{
    background: #181818;
  }
  .up-tupian img{
    text-align: center;
    background-size: cover;
    display: block;
    width: 100%;
  }
  .zuo,.you{
    display: block;
    background-color: #181818;
  }
  .up-beijing{
    background-color: #181818;
  }
.ant-badge-count {
  top: -10px;
  height: 10px;
  border-radius: 50%;
  /* min-width: 10px; */
  width: 10px;
  background: #f5222d;
  color: #fff;
  line-height: 10px;
  text-align: center;
  /* padding: 0 6px; */
  font-size: 3px;
  font-weight: normal;
  white-space: nowrap;
  /*-webkit-box-shadow: 0 0 0 1px #fff;*/
  box-shadow: 0 0 0 1px #fff;
  z-index: 10;
}
</style>
