<template>
  <a-spin :spinning="spinning">
    <div class="parameterDetail" style="position: relative;">
      <div class="toc-affix" style="position: fixed;top: 275px;right: 30px;bottom: 100px;">
        <template v-if="id">
          <a-anchor>
            <a-anchor-link href="#basic" title="基本信息" />
            <a-anchor-link href="#netsecurity" title="入网安全" />
            <a-anchor-link href="#alteration" title="变更日志" />
            <a-anchor-link href="#papers" title="证件信息" />
            <a-anchor-link href="#insurance" title="保险信息" />
            <a-anchor-link href="#claim" title="理赔记录" />
            <a-anchor-link href="#refuel" title="加油记录" />
            <a-anchor-link href="#upkeep" title="保养管理" />
            <a-anchor-link href="#maintenance" title="维修记录" />
            <a-anchor-link href="#violation" title="违章记录" />
            <a-anchor-link href="#carCareful" title="年审信息" />
          </a-anchor>
        </template>
      </div>
      <div class="content">
        <div class="content-information">
          <a-alert v-if="accountData.isComplete<4"  banner>
            <div slot="description" @click="perfect" class="content-top"><span class="content-title">您的信息待完善</span>  去完善>></div>
          </a-alert>
          <div id="basic" class="section basic" style="padding-bottom: 40px">
            <div>
              <h2 class="section-information">基本信息</h2>
              <div class="section-edit">
                <a-dropdown>
                  <a class="ant-dropdown-link" href="#"> . . .  </a>
                  <a-menu slot="overlay">
                    <a-menu-item>
                      <a href="javascript:;"><span class="ant-dropdown-edit" @click="perfect">编辑</span></a>
                    </a-menu-item>
                    <a-menu-item>
                      <a href="javascript:;"><span class="ant-dropdown-edit" >下载</span></a>
                    </a-menu-item>
                  </a-menu>
                </a-dropdown>
              </div>
            </div>
            <div class="information-table">
              <table border="1" bordercolor = "#e8e8e8" style="width: 100%;" >
                <!--<caption>xxx表</caption>-->
                <tr>
                  <td class="table-title">车牌号：</td><td class="table-text">{{ accountData.registrationNo || '-'}} </td>
                  <td class="table-title" >品牌车型：</td><td class="table-text"colspan="4">{{ accountData.carmodelText || '-'}}</td>
                  <td class="table-title" >车辆类型：</td><td class="table-text"colspan="4">{{ accountData.cartypeText || '-'}}</td>
                  <td class="table-text" rowspan="4" colspan="4" style="text-align: center">
                    <!--二维码-->
                    <div class="com-erweimaFloat">
                      <div class="com-erweima">
                        <img  :src="accountData.qrImage || '/image/car/welcomeCheta.png'" alt="">
                      </div>
                    </div>
                    <div class="table-text" style="display: block;margin: 8px 0px 4px 0px;padding: 0px;">
                        <a-button>二维码<a-icon type="download" />
                        </a-button>
                    </div>
                  </td>
                </tr>
                <tr>
                  <td class="table-title">车架号：</td><td class="table-text">{{accountData.frameNumber || '-'}}</td>
                  <td class="table-title">发动机号：</td><td class="table-text" colspan="4">{{accountData.engineNumber || '-'}}</td>
                  <td class="table-title">购车价格：</td><td class="table-text" colspan="4">{{carData.carPrices || '-'}}</td>
                </tr>
                <tr>
                  <td class="table-title">税费总计：</td><td class="table-text">{{carData.taxTotal || '-'}}</td>
                  <td class="table-title">供应商  ：</td><td class="table-text" colspan="4">{{carData.supplier || '-'}}</td>
                  <td class="table-title">购买日期：</td><td class="table-text" colspan="4">{{`${dateFormats(text)}` || '-'}}</td>
                </tr>
                <tr>
                  <td class="table-title">车辆归属：</td><td class="table-text">{{carData.assetBelong || '-'}}</td>
                  <td class="table-title">状&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;态  ：</td><td class="table-text" colspan="4">{{accountData.statusNormal || '-'}}</td>
                  <td class="table-title">所属项目：</td><td class="table-text" colspan="4">{{accountData.organId || '-'}}</td>
                  <!--<td  class="table-title" colspan="2">xxx</td>-->

                </tr>
                <tr>
                  <td class="table-title" >保险险种：</td><td class="table-text" colspan="11">{{carData.insureType || '-'}}</td>

                  <td class="table-text" rowspan="4"  colspan="4" style="text-align: center">
                    <div class="box clearfix Rotation" id="box">
                      <div class="inner">
                        {{ carphotosList }}
                        <!--轮播图-->
                        <ul v-if="carphotosList.length">
                          <li v-for="item in carphotosList"><a href="#"><img :src="item.fileurl" /></a></li>
                          <!--<li><a href="#"><img :src="carphotosList[1].fileurl" class="car_img"/></a></li>-->
                          <!--<li><a href="#"><img src="@/assets/image/parameter/img3.png" class="car_img"/></a></li>-->
                          <!--<li><a href="#"><img src="@/assets/image/parameter/img.png" class="car_img"/></a></li>-->
                        </ul>
                        <ul v-else>
                          <li><a href="#"><img src="~@/assets/image/parameter/timg.jpg" /></a></li>
                        </ul>
                        <!--左右焦点-->
                        <div id="arr">
                          <span id="left"> <a-icon type="left" class="left-icon"/> </span>
                          <span id="right"><a-icon type="right" class="right-icon"/> </span>
                        </div>
                      </div>
                    </div>
                  </td>
                </tr>
                <tr>


                  <td class="table-title">司&nbsp;&nbsp;&nbsp;&nbsp;机  ：</td>
                  <td class="table-text"  colspan="6"><div v-for="(item,index) in driverList">
                    <!--{{item.userName}}-->
                    <span v-if="index===0">主驾驶-<span>{{driverList[0].userName || '-'}}-</span><span class="cheta-color driver_right-details">[详情]</span></span>
                    <span v-else-if="index>0">副驾驶-<span>{{item.userName || '-'}}-</span><span class="cheta-color driver_right-particulars">[详情]</span>
                      <a-dropdown style="border: none;cursor:pointer;">
                        <a-menu slot="overlay">
                          <a-menu-item key="1">第二副驾</a-menu-item>
                          <a-menu-item key="2">第三副驾</a-menu-item>
                        </a-menu>
                        <span style="margin-left: 10px">
                                        ···
                                      </span>
                      </a-dropdown>
                    </span>
                  </div>
                  </td>
                  <td class="table-title">铭牌信息：</td><td class="table-text" colspan="4"><a class="cheta-color" href="#"  @click="showModal">详细>></a>
                  <a-modal v-model="visible" :footer="null" style="padding: 5px 25px 25px 25px!important;">
                    <a-tabs defaultActiveKey="1" >
                      <a-tab-pane tab="图片" key="1">
                        <div class="nameplate">
                          <img src="https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1578983560429&di=c123411e687bdce79f7453489db7d9b1&imgtype=0&src=http%3A%2F%2Fx0.ifengimg.com%2Fres%2F2020%2F8BCAD59895E2B15D873A4FE72687980DAA643D32_size38_w692_h444.jpeg" alt="">
                        </div>
                        </a-tab-pane>
                      <a-tab-pane tab="文字" key="2" forceRender>
                        <div class="nameplateText">
                          <table border="1"  bordercolor = "#e8e8e8" style="width: 100%" >
                          <tr>
                            <td class="table-title">品牌制造</td><td class="table-text">1212</td>
                            <td class="table-title">能源驱动</td><td class="table-text">1212</td>
                          </tr>
                          <tr>
                            <td class="table-title">车辆属性</td><td class="table-text">1212</td>
                            <td class="table-title">整车型号</td><td class="table-text">1212</td>
                          </tr>
                          <tr>
                            <td class="table-title">发动机型号</td><td class="table-text">1212</td>
                            <td class="table-title">发动机排量</td><td class="table-text">1212</td>
                          </tr>
                          <tr>
                            <td class="table-title">油箱容量</td><td class="table-text">1212</td>
                            <td class="table-title">电池容量</td><td class="table-text">1212</td>
                          </tr>
                          <tr>
                            <td class="table-title">输出电压</td><td class="table-text">1212</td>
                            <td class="table-title">额定功率</td><td class="table-text">1212</td>
                          </tr>
                          <tr>
                            <td class="table-title">整车重量</td><td class="table-text">1212</td>
                            <td class="table-title">座位数</td><td class="table-text">1212</td>
                          </tr>
                          <tr>
                            <td class="table-title">载重</td><td class="table-text">1212</td>
                            <td class="table-title">制造年月</td><td class="table-text">1212</td>
                          </tr>
                        </table>
                        </div>
                        <div class="nameplateTexts">
                          <table border="1"  bordercolor = "#e8e8e8" style="width: 100%" >
                            <tr>
                              <td class="table-title">品牌制造</td><td class="table-text">{{'-'}}</td>
                            </tr>
                            <tr>
                              <td class="table-title">能源驱动</td><td class="table-text">1212</td>
                            </tr>
                            <tr>
                              <td class="table-title">车辆属性</td><td class="table-text">1212</td>
                            </tr>
                            <tr>
                              <td class="table-title">整车型号</td><td class="table-text">1212</td>
                            </tr>
                            <tr>
                              <td class="table-title">发动机型号</td><td class="table-text">1212</td>
                            </tr>
                            <tr>
                              <td class="table-title">发动机排量</td><td class="table-text">1212</td>
                            </tr>
                            <tr>
                              <td class="table-title">油箱容量</td><td class="table-text">1212</td>
                            </tr>
                            <tr>
                              <td class="table-title">电池容量</td><td class="table-text">1212</td>
                            </tr>
                            <tr>
                              <td class="table-title">输出电压</td><td class="table-text">1212</td>
                            </tr>
                            <tr>
                              <td class="table-title">额定功率</td><td class="table-text">1212</td>
                            </tr>
                            <tr>
                              <td class="table-title">整车重量</td><td class="table-text">1212</td>
                            </tr>
                            <tr>
                              <td class="table-title">座位数</td><td class="table-text">1212</td>
                            </tr>
                            <tr>
                              <td class="table-title">载重</td><td class="table-text">1212</td>
                            </tr>
                            <tr>
                              <td class="table-title">制造年月</td><td class="table-text">1212</td>
                            </tr>
                          </table>
                        </div>
                      </a-tab-pane>
                    </a-tabs>
                  </a-modal>
                </td>

                </tr>
                <tr>
                  <td class="table-title">入网时间 ：</td><td class="table-text">{{accountData.createTime || '-'}}</td>
                  <td class="table-title">服务费：</td><td class="table-text" colspan="4">{{carData.insureCost || '-'}}</td>
                  <td class="table-title">服务期限：</td><td class="table-text" colspan="4">{{carData.contractPeriod || '-'}}</td>
                </tr>
                <tr>
                  <td class="table-title">围栏限定：</td><td class="table-text"><span v-if="carList.length>0" class="cheta-color">{{carList[0].fenceLimited || '-'}}</span></td>
                  <td class="table-title table-titles" colspan="4">作业速度限定：</td><td class="table-text">
                    <span v-if="carList[0]">{{carList[0].operateSpead || '-'}}</span>
                  </td>
                  <td class="table-title table-titles" colspan="4">非作业速度限定：</td><td class="table-text">
                    <span v-if="carList[0]">{{carList[0].nonoperateSpead || '-'}}</span>
                  </td>
                </tr>
              </table>
            </div>

            <div class="information-div">
              <a-row type="flex">
                <a-col class="com" :xs="24" :sm="24" :md="12" :lg="12" :xl="12" :xxl="6" :order="1">
                  <p><span>车牌号：</span><span>{{ accountData.registrationNo || '-'}}</span></p>
                  <p><span>品牌车型：</span><span>{{accountData.carmodelText || '-'}}</span></p>
                  <p><span>车辆类型：</span><span>{{accountData.cartypeText || '-'}}</span></p>
                  <p><span>车架号：</span><span>{{accountData.frameNumber || '-'}}</span></p>
                  <p><span>发动机号：</span><span>{{accountData.engineNumber || '-'}}</span></p>
                </a-col>
                <a-col class="com" :xs="24" :sm="24" :md="12" :lg="12" :xl="12" :xxl="6" :order="2">
                  <p><span>购车价格：</span><span>{{carData.carPrices || '-'}}</span></p>
                  <p><span>税费总计：</span><span>{{carData.taxTotal || '-'}}</span></p>
                  <p><span>供应商  ：</span><span>{{carData.supplier || '-'}}</span></p>
                  <p><span>购买日期：</span><span> {{`${dateFormats(text)}` || '-'}}</span></p>
                  <p><span>车辆归属：</span><span>{{carData.assetBelong || '-'}}</span></p>
                </a-col>
                <a-col class="com" :xs="24" :sm="24" :md="12" :lg="12" :xl="12" :xxl="6" :order="3">
                  <p><span>状&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;态  ：</span><span class="cheta-color">{{accountData.statusNormal || '-'}}</span></p>
                  <p><span>所属项目：</span><span>{{accountData.organId || '-'}}</span></p>
                  <p><span>保险险种：</span><span>{{carData.insureType || '-'}}</span></p>
                  <p><span>铭牌信息：</span><a class="cheta-color" href="#"  @click="showModals">详细>></a></p>
                  <a-modal v-model="visibles" :footer="null" >
                    <a-tabs defaultActiveKey="1" >
                      <a-tab-pane tab="图片" key="1">Content of Tab Pane 1</a-tab-pane>
                      <a-tab-pane tab="文字" key="2" forceRender>
                        <table border="1">
                          <tr>
                            <td>row 1, cell 1</td>
                            <td>row 1, cell 2</td>
                          </tr>
                          <tr>
                            <td>row 2, cell 1</td>
                            <td>row 2, cell 2</td>
                          </tr>
                        </table>
                      </a-tab-pane>
                    </a-tabs>
                  </a-modal>
                  <div class="high clearfix">
                    <span class="driver_left" style="float: left">司&nbsp;&nbsp;&nbsp;&nbsp;机  ：</span>
                    <span class="driver_right" style="float: left">
                      <div v-for="(item,index) in driverList">
                        <!--{{item.userName}}-->
                        <span v-if="index===0">主驾驶-<span>{{driverList[0].userName || '-'}}-</span><span class="cheta-color driver_right-details">[详情]</span></span>
                        <p v-else-if="index>0">副驾驶-<span>{{item.userName || '-'}}-</span><span class="cheta-color driver_right-particulars">[详情]</span>
                        <a-dropdown style="border: none;cursor:pointer;">
                                    <a-menu slot="overlay">
                                        <a-menu-item key="1">第二副驾</a-menu-item>
                                       <a-menu-item key="2">第三副驾</a-menu-item>
                                    </a-menu>
                                    <span style="margin-left: 10px">
                                      ···
                                    </span>
                                  </a-dropdown>
                        </p>
                  </div>
                  </span>
                  </div>
                  <!--v-if="accountData.driverID1.length"-->
                </a-col>
                <a-col class="com" :xs="24" :sm="24" :md="12" :lg="12" :xl="12" :xxl="6" :order="4">
                  <!--clearfix-->
                  <!--二维码-->
                  <div class="com-erweimaFloat">
                    <div class="com-erweima">
                      <!--:src="item.qrImage || '/image/car/welcomeCheta.png'"-->
                      <img  src="/image/car/erweima.png" alt="">
                    </div>
                  </div>
                  <div style="position: absolute;margin-left: 184px;">
                    <a-button>二维码<a-icon type="download" />
                    </a-button>
                  </div>

                  <div class="box clearfix Rotation" id="box">
                    <div class="inner">

                      <!--轮播图-->
                      <ul>
                        <!--v-for="item in carphotosList"-->
                        <li><a href="#"><img src="~@/assets/image/parameter/timg.jpg" /></a></li>
                        <!--<li><a href="#"><img :src="carphotosList[1].fileurl" class="car_img"/></a></li>-->
                        <!--<li><a href="#"><img src="@/assets/image/parameter/img3.png" class="car_img"/></a></li>-->
                        <!--<li><a href="#"><img src="@/assets/image/parameter/img.png" class="car_img"/></a></li>-->
                      </ul>
                      <!--左右焦点-->
                      <div id="arr">
                        <span id="left"> <a-icon type="left" class="left-icon"/> </span>
                        <span id="right"><a-icon type="right" class="right-icon"/> </span>
                      </div>
                    </div>
                  </div>
                </a-col>
              </a-row>
            </div>
              <div id="netsecurity" class="section netsecurity">
                <h2>入网安全</h2>
                <c-table
                  style="margin-top: 10px;"
                  url=""
                  :columns="columns_security"
                  :dataSource="data_security"
                  ref="table"
                  rowKey="id">
                </c-table>
              </div>


            <a-row type="flex">
              <a-col class="com" :xs="24" :sm="24" :md="12" :lg="12" :xl="12" :xxl="6" :order="4">

              </a-col>
            </a-row>
          </div>

            <div id="alteration" class="alteration  section">
              <h2>变更日志</h2>
              <a-timeline style="">
                <template v-for="(item,index) in alterationList">
                  <a-timeline-item  v-if="index < 3">
                    {{item.time}} {{item.alteration}}
                  </a-timeline-item>
                  <a-timeline-item  v-else-if="logShow">
                    {{item.time}} {{item.alteration}}
                  </a-timeline-item>
                </template>
                <a-timeline-item style="padding: 0px">
                  <span @click="logShow=!logShow">
                    <span v-if="logShow">
                      <span class="cheta-color more">查看更多>></span>
                    </span>
                    <span v-else>
                      <span class="cheta-color more">更多>></span>
                    </span>
                  </span>
                </a-timeline-item>
              </a-timeline>
            </div>
        </div>

        <div class="content-information-Up">
          <div id="papers" class="papers  certificate">
            <div>
              <h2 style="display: inline-block">证件信息</h2><span class="papers-download">下载</span>
            </div>

            <div class="imgList clearfix">
              <span v-for="item in certphotosList"><img :src="item.fileurl"/><i>{{item.filename}}</i></span>
            </div>
            <!--上传证件-->
            <div class="certificateImgs">
              <div class="certificate-img">
                <div class="certificate-imgs">
                  <div class="certificateImgs-eye"> <a-icon type="eye" class="certificateImgs-eye-icon" @click="certificateImgsEyeIcon"/>
                    <a-modal v-model="ImgsEyeIcon" :footer="null">
                      <p class="bagCertificateImgsEyeIcon">
                        <img src="http://gss0.baidu.com/-Po3dSag_xI4khGko9WTAnF6hhy/zhidao/pic/item/d6ca7bcb0a46f21f5d9d3e8dfa246b600d33ae47.jpg" alt="">
                      </p>
                    </a-modal>
                  </div>
                  <img src="http://gss0.baidu.com/-Po3dSag_xI4khGko9WTAnF6hhy/zhidao/pic/item/d6ca7bcb0a46f21f5d9d3e8dfa246b600d33ae47.jpg" alt="">

                </div>

                <div class="certificateImgs-text">
                  <span class="certificate-text">证件照</span>
                  <span class="certificate-text-tips">2020/01/12日上传</span>
                </div>
              </div>
              <div class="certificate-img">
                <div class="certificate-imgs">
                  <div class="certificateImgs-eye"> <a-icon type="eye" class="certificateImgs-eye-icon" @click="certificateImgsEyeIcons"/>
                  <a-modal v-model="ImgsEyeIcons" :footer="null">
                    <p class="bagCertificateImgsEyeIcon">
                      <img src="https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1579319593&di=a84cd40a24babffd734a7a8202698ed2&imgtype=jpg&er=1&src=http%3A%2F%2Fimg1.bbs.0594.com%2Fforum%2F201404%2F02%2F114114o98a9lzvn90edsmm.jpg" alt="">
                    </p>
                  </a-modal>
                </div>
               </div>
                <img src="https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1579319593&di=a84cd40a24babffd734a7a8202698ed2&imgtype=jpg&er=1&src=http%3A%2F%2Fimg1.bbs.0594.com%2Fforum%2F201404%2F02%2F114114o98a9lzvn90edsmm.jpg" alt="">
                <div class="certificateImgs-text">
                  <span class="certificate-text">授权书</span>
                  <span class="certificate-text-tips">2020/01/12日上传</span>
                </div>
              </div>
            </div>
          </div>
        </div>


          <div class="content-information-Up">
          <div id="insurance" class="section insurance common">
            <div class="titleWrap clearfix">
              <h2>保险信息</h2>
              <div @click="insuranceShow = !insuranceShow" class="showHidden">
                <span v-if="insuranceShow" >收起<a-icon type="down"  class="titleWrap-icon"/></span>
                <span v-else >详情<a-icon type="right" class="titleWrap-icon"/></span>
              </div>

            </div>
            <c-table v-if="insuranceShow"
                     :columns="columns_insurance"
                     :pageSize="3"
                     :url="url4"
                     :param="param4"
                     :dataSource="data_insurance"
            ></c-table>
          </div>
        </div>
        <div class="content-information-Up">
          <div id="claim" class="section claim common">
            <div class="titleWrap clearfix">
              <h2>理赔信息</h2>
              <div @click="claimShow = !claimShow"  class="showHidden">
                <span v-if="claimShow">收起<a-icon type="down"  class="titleWrap-icon"/></span>
                <span v-else >详情<a-icon type="right" class="titleWrap-icon"/></span>
              </div>
            </div>
            <c-table v-if="claimShow"
                     :columns="columns_claims"
                     :pageSize="3"
                     :url="url5"
                     :param="param5"
                     :dataSource="data_claims"
            ></c-table>
          </div>
        </div>
        <div class="content-information-Up">
          <div id="refuel" class="section refuel common">
            <div class="titleWrap clearfix">
              <h2>加油记录</h2>
              <div @click="refuelShow = !refuelShow"  class="showHidden">
                <span v-if="refuelShow">收起<a-icon type="down"  class="titleWrap-icon"/></span>
                <span v-else >详情<a-icon type="right" class="titleWrap-icon"/></span>
              </div>
            </div>
            <c-table v-if="refuelShow"
                     :columns="columns_oil"
                     :pageSize="3"
                     :url="url2"
                     :param="param2"
                     :dataSource="data_oil"
            ></c-table>
          </div>
        </div>
        <div class="content-information-Up">
          <div id="upkeep" class="section upkeep common">
            <div class="titleWrap clearfix">
              <h2>保养管理</h2>
              <div @click="upkeepShow = !upkeepShow"  class="showHidden">
                <span v-if="upkeepShow">收起<a-icon type="down"  class="titleWrap-icon"/></span>
                <span v-else >详情<a-icon type="right" class="titleWrap-icon"/></span>
              </div>
            </div>
            <c-table v-if="upkeepShow"
                     :columns="columns_maintenance"
                     :pageSize="3"
                     :url="url6"
                     :param="param6"
                     :dataSource="data_maintenance"
            ></c-table>
          </div>
        </div>

          <template v-if="id">
            <div class="content-information-Up">
              <div id="maintenance" class="section maintenance common">
                <div class="titleWrap clearfix">
                  <h2>维修记录</h2>
                  <div @click="maintenanceShow = !maintenanceShow"  class="showHidden">
                    <span v-if="maintenanceShow">收起<a-icon type="down"  class="titleWrap-icon"/></span>
                    <span v-else >详情<a-icon type="right" class="titleWrap-icon"/></span>
                  </div>
                </div>
                <c-table v-if="!maintenanceShow"
                         :columns="columns_repaire"
                         :pageSize="3"
                         :url="url1"
                         :param="param1"
                         :dataSource="data_repaire"
                >
                  <template>
                    <a href="javascript:;" @click="handleDetail(record)">详情</a>
                  </template>
                </c-table>
              </div>
            </div>
            <div class="content-information-Up">
              <div id="violation" class="section violation common">
                <div class="titleWrap clearfix">
                  <h2>违章记录</h2>
                  <div @click="violationShow = !violationShow" class="showHidden">
                    <span v-if="violationShow">收起<a-icon type="down"  class="titleWrap-icon"/></span>
                    <span v-else >收起<a-icon type="down"  class="titleWrap-icon"/></span>
                  </div>
                </div>
                <c-table v-if="violationShow"
                         :columns="columns_illegal"
                         :pageSize="3"
                         :url="url3"
                         :param="param3"
                         :dataSource="data_illegal"
                ></c-table>
              </div>
              </div>
            <div class="content-information-Up">
              <div id="carCareful" class="section carCareful common">
                <div class="titleWrap clearfix">
                  <h2>年审信息</h2>
                  <div @click="carCarefulShow = !carCarefulShow" class="showHidden">
                    <span v-if="carCarefulShow">收起<a-icon type="down"  class="titleWrap-icon"/></span>
                    <span v-else >详情<a-icon type="right" class="titleWrap-icon"/></span>
                  </div>
                </div>
                <c-table v-if="carCarefulShow"
                         :columns="columns_yearCareful"
                         :pageSize="3"
                         :url="url7"
                         :param="param7"
                         :dataSource="data_yearCareful"
                ></c-table>
              </div>
            </div>
          </template>


      </div>
    </div>
  </a-spin>
</template>

<script>
  import moment from 'moment'
  import CTable from '@/views/chetaui/table.js';
  import {getAction} from '@/api/manage'
  import Span from '../onlines/car/component/list/modules/modules/Span'
  import './index.less'
  export default {
    name: "parameterDetail",
    components: {
      Span,
      CTable
    },
    props: {
      localHistory: {
        type: Object
      }
    },
    data() {
      return {
        ImgsEyeIcon:false,
        ImgsEyeIcons:false,
        visible: false,
        visibles: false,
        name1: 'maintenance',
        data_security:[],
        spinning: false,
        logShow:true,
        maintenanceShow: true,
        refuelShow: true,
        violationShow: true,
        insuranceShow: true,
        claimShow: true,
        upkeepShow: true,
        carCarefulShow: true,
        // 基本信息
        baseMessage:{},
        accountData:{},
        carData:{},
        carList:[],
        carphotosList:[],
        certphotosList:[],
        previewVisible: false,
        previewImage: '',
        fileList: [
          {
            uid: '-1',
            name: 'xxx.png',
            status: 'done',
            url: 'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1578657878284&di=9224878b93e38066d3ea54834f605a12&imgtype=0&src=http%3A%2F%2Fcar0.autoimg.cn%2Fupload%2F2014%2F9%2F3%2F2014090308561394626410.jpg',
          },
        ],
        url1: '',
        url2: '',
        url3: '',
        url4: '',
        url5: '',
        url6: '',
        url7: '',
        param1: {
          pageNo: 1,
          pageSize: 10,
          pid: '',
          keyword: ''
        },
        param2: {
          pageNo: 1,
          pageSize: 10,
          pid: '',
          keyword: ''
        },
        param3: {
          pageNo: 1,
          pageSize: 10,
          pid: '',
          keyword: ''
        },
        param4: {
          pageNo: 1,
          pageSize: 10,
          pid: '',
          keyword: ''
        },
        param5: {
          pageNo: 1,
          pageSize: 10,
          pid: '',
          keyword: ''
        },
        param6: {
          pageNo: 1,
          pageSize: 10,
          pid: '',
          keyword: ''
        },
        param7: {
          pageNo: 1,
          pageSize: 10,
          pid: '',
          keyword: ''
        },
        data_repaire: [{//维修记录
          id: '1',
          repaireOrder: 'WC00001GZ',
          repaireTime:'2019-02-01',
          carTime:'2019-05-06',
          agent: '李高量',
          repaireShop: '广州大观路汽车维修厂',
          amount: '￥4000.00',
        },
          {
            id: '2',
            repaireOrder: 'WC00001GZ',
            repaireTime:'2019-02-01',
            carTime:'2019-05-06',
            agent: '李高量',
            repaireShop: '广州大观路汽车维修厂',
            amount: '￥4000.00',
          },
          {
            id: '3',
            repaireOrder: 'WC00001GZ',
            repaireTime:'2019-02-01',
            carTime:'2019-05-06',
            agent: '李高量',
            repaireShop: '广州大观路汽车维修厂',
            amount: '￥4000.00',
          },
        ],
        data_oil: [{//加油记录
          id: '1',
          date:'2019-04-26  15:30:00',
          orderNumber: '1011225662',
          oilWays: '油卡',
          oilSite: '广州天河站点',
          oilType: '#0柴油',
          count:'108.42',
          price: '￥320.00',


        },
          {
            id: '2',
            date:'2019-04-26  15:30:00',
            orderNumber: '1011225662',
            oilWays: '油卡',
            oilSite: '广州天河站点',
            oilType: '#0柴油',
            count:'108.42',
            price: '￥320.00',

          },
          {
            id: '3',
            date:'2019-04-26  15:30:00',
            orderNumber: '1011225662',
            oilWays: '油卡',
            oilSite: '广州天河站点',
            oilType: '#0柴油',
            count:'108.42',
            price: '￥320.00',

          }
        ],
        data_illegal: [{//违章记录
          id: '1',
          time: '2019-04-26',
          behavior: '违章',
          amount: '￥3000.00',
          points: '6',
          place: '广元天赐路口',
          content: '压线',
          organ: '广州天河区交警大队',
          status: '1',

        },
          {
            id: '2',
            time: '2019-04-26',
            behavior: '违章',
            amount: '￥3000.00',
            points: '6',
            place: '广元天赐路口',
            content: '压线',
            organ: '广州天河区交警大队',
            status: '1',
          },
          {
            id: '3',
            time: '2019-04-26',
            behavior: '违章',
            amount: '￥3000.00',
            points: '6',
            place: '广元天赐路口',
            content: '压线',
            organ: '广州天河区交警大队',
            status: '1',
          }
        ],
        data_insurance: [{//保险信息
          id: '1',
          insuranceNum:'BX00001GZ',
          insuranceIncoverage:'商业险',
          company:'中国平安保险有限公司',
          insuranceMoney:'￥5000.00',
          effectiveDate:'2016-04-11 - 2020-04-12',
          remainDate:'30天',
          claimsCount:'1',

        },
          {
            id: '2',
            insuranceNum:'BX00001GZ',
            insuranceIncoverage:'商业险',
            company:'中国平安保险有限公司',
            insuranceMoney:'￥5000.00',
            effectiveDate:'2016-04-11 - 2020-04-12',
            remainDate:'30天',
            claimsCount:'1',
          },
          {
            id: '3',
            insuranceNum:'BX00001GZ',
            insuranceIncoverage:'商业险',
            company:'中国平安保险有限公司',
            insuranceMoney:'￥5000.00',
            effectiveDate:'2016-04-11 - 2020-04-12',
            remainDate:'30天',
            claimsCount:'1',
          }
        ],
        data_claims: [{
          id: '1',
          insuranceNum: 'WD201836',
          insuranceIncoverage: '交强险',
          company:'中国大地保险公司',
          reportDate: '2018-08-10',
          closeTime: '2019-02-11',
          totalMoney: '￥6000.00',
          claimsMoney: '￥6000.00',


        },{
          id: '2',
          insuranceNum: 'WD201836',
          insuranceIncoverage: '交强险',
          company:'中国大地保险公司',
          reportDate: '2018-08-10',
          closeTime: '2019-02-11',
          totalMoney: '￥6000.00',
          claimsMoney: '￥6000.00',
        },{
          id: '3',
          insuranceNum: 'WD201836',
          insuranceIncoverage: '交强险',
          company:'中国大地保险公司',
          reportDate: '2018-08-10',
          closeTime: '2019-02-11',
          totalMoney: '￥6000.00',
          claimsMoney: '￥6000.00',
        }
        ],
        data_maintenance: [{//保养管理
          id: '1',
          Date: '2019-04-08',
          type: '常规保养',
          jinbanren: '王经理',
          agent: '刘国寄',
          plan:'有',
          repaireShops:'',
          amount: '￥1800.00',

        },
          {
            id: '2',
            Date: '2019-04-08',
            type: '常规保养',
            jinbanren: '王经理',
            agent: '刘国寄',
            plan:'有',
            repaireShops:'',
            amount: '￥1800.00',
          },
          {
            id: '3',
            Date: '2019-04-08',
            type: '常规保养',
            jinbanren: '王经理',
            agent: '刘国寄',
            plan:'有',
            repaireShops:'',
            amount: '￥1800.00',
          }
        ],
        data_yearCareful: [{//年审信息
          id: '1',
          handleTime: '2019-04-08',
          rules: '半年一审',
          agent: '陆海波',
          amount: '￥1800.00',
          nextTime:'2019-03-12',

        },
          {
            id: '2',
            handleTime: '2019-04-08',
            rules: '半年一审',
            agent: '陆海波',
            amount: '￥1800.00',
            nextTime:'2019-03-12',
          },
          {
            id: '3',
            handleTime: '2019-04-08',
            rules: '半年一审',
            agent: '陆海波',
            amount: '￥1800.00',
            nextTime:'2019-03-12',
          }
        ],
        files: [],
        driverList: [
        ],
        alterationList:[],
        columns_security: [{//入网安全
          title: '序号',
          dataIndex: 'id',
          key: 'id',
          width: '5%',
          align: "center",
          customRender: function(t, r, index) {
            return parseInt(index) + 1;
          }
        },
          {
            title: '智能终端',
            width: '10%',
            align: "center",
            dataIndex: 'intelligentTerminal',
            key: 'intelligentTerminal'
          },
          {
            title: '安装时间',
            width: '10%',
            align: "center",
            dataIndex: 'createTime',
            key: 'createTime'
          },
          {
            title: '设备厂家',
            width: '15%',
            align: "center",
            dataIndex: 'equipmentManu',
            key: 'equipmentManu'
          },
          {
            title: '设备类型',
            width: '15%',
            align: "center",
            dataIndex: 'equipmentType',
            key: 'equipmentType'
          },
          {
            title: '设备号',
            width: '10%',
            align: "center",
            dataIndex: 'equipmentNum',
            key: 'equipmentNum'
          },
          {
            title: '物联网卡号',
            width: '10%',
            align: "center",
            dataIndex: 'netNumber',
            key: 'netNumber'
          }
        ],
        columns_repaire: [{//维修记录
          title: '序号',
          dataIndex: 'id',
          key: 'id',
          width: '5%',
          align: "center",
          customRender: function(t, r, index) {
            return parseInt(index) + 1;
          }
        },
          {
            title: '维修单号',
            width: '20%',
            align: "center",
            dataIndex: 'repaireOrder',
            key:'repaireOrder',
          },
          {
            title: '送修时间',
            width: '20%',
            align: "center",
            dataIndex: 'repaireTime',
            key:'repaireTime',
          },
          {
            title: '交车时间',
            width: '20%',
            align: "center",
            dataIndex: 'carTime',
            key:'carTime',
          },
          {
            title: '经办人',
            width: '20%',
            align: "center",
            dataIndex: 'agent',
            key:'agent',
          },

          {
            title: '维修厂',
            width: '20%',
            align: "center",
            dataIndex: 'repaireShop',
            key:'repaireShop',
          },
          {
            title: '总金额',
            width: '15%',
            align: "center",
            dataIndex: 'amount',
            key:'amount',
          }
        ],
        columns_oil: [{//加油记录
          title: '序号',
          dataIndex: 'id',
          key: 'id',
          width: '5%',
          align: "center",
          customRender: function(t, r, index) {
            return parseInt(index) + 1;
          }
        },

          {
            title: '时间',
            width: '15%',
            align: "center",
            dataIndex: 'date',
            key:'date',
          },
          {
            title: '卡号/单号',
            width: '10%',
            align: "center",
            dataIndex: 'orderNumber',
            key:'orderNumber'
          },
          {
            title: '加油方式',
            width: '10%',
            align: "center",
            dataIndex: 'oilWays',
            key:'oilWays'

          },
          {
            title: '加油站点',
            width: '15%',
            align: "center",
            dataIndex: 'oilSite',
            key:'oilSite'
          },

          {
            title: '油品',
            width: '10%',
            align: "center",
            dataIndex: 'oilType',
            key:'oilType'
          },
          {
            title: '数量(L)',
            width: '10%',
            align: "center",
            dataIndex: 'count',
            key:'count'
          },
          {
            title: '金额',
            width: '10%',
            align: "center",
            dataIndex: 'price',
            key:'price'
          },
        ],
        columns_illegal: [{//违章记录
          title: '序号',
          dataIndex: 'id',
          key: 'id',
          width: '5%',
          align: "center",
          customRender: function(t, r, index) {
            return parseInt(index) + 1;
          }
        },
          {
            title: '违法时间',
            width: '10%',
            align: "center",
            dataIndex: 'time',
            key:'time',
          },
          {
            title: '驾驶行为',
            width: '10%',
            align: "center",
            dataIndex: 'behavior',
            key:'behavior',
          },
          {
            title: '罚款金额',
            width: '10%',
            align: "center",
            dataIndex: 'amount',
            key:'amount',
          },
          {
            title: '扣分',
            width: '5%',
            align: "center",
            dataIndex: 'points',
            key:'points',
          },

          {
            title: '违法地点',
            width: '10%',
            align: "center",
            dataIndex: 'place',
            key:'place',
          },
          {
            title: '违法内容 ',
            width: '10%',
            align: "center",
            dataIndex: 'content',
            key:'content',
          },
          {
            title: '处罚机关',
            width: '10%',
            align: "center",
            dataIndex: 'organ',
            key:'organ',
          },
          {
            title: '处理状态',
            width: '10%',
            align: "center",
            dataIndex: 'status',
            key:'status',
            customRender: function(t, r, index) {
              if(t == 1) {
                return '已处理';
              } else {
                return '未处理';
              }
            }
          },
        ],
        columns_insurance: [{//保险信息
          title: '序号',
          dataIndex: 'id',
          key: 'id',
          width: '5%',
          align: "center",
          customRender: function(t, r, index) {
            return parseInt(index) + 1;
          }
        },
          {
            title: '保单号',
            width: '10%',
            align: "center",
            dataIndex: 'insuranceNum',
            key:'insuranceNum',
          },
          {
            title: '保险险种',
            width: '10%',
            align: "center",
            dataIndex: 'insuranceIncoverage',
            key:'insuranceIncoverage',
          },
          {
            title: '承保公司',
            width: '10%',
            align: "center",
            dataIndex: 'company',
            key:'company',
          },
          {
            title: '保费金额',
            width: '10%',
            align: "center",
            dataIndex: 'insuranceMoney',
            key:'insuranceMoney',
          },
          {
            title: '生效期',
            width: '15%',
            align: "center",
            dataIndex: 'effectiveDate',
            key:'effectiveDate',
          },
          {
            title: '剩余保期 ',
            width: '10%',
            align: "center",
            dataIndex: 'remainDate',
            key:'remainDate',
          },
          {
            title: '理赔次数',
            width: '10%',
            align: "center",
            dataIndex: 'claimsCount',
            key:'claimsCount',
          },

        ],
        columns_claims: [{//理赔信息
          title: '序号',
          dataIndex: 'id',
          key: 'id',
          width: '5%',
          align: "center",
          customRender: function(t, r, index) {
            return parseInt(index) + 1;
          }
        },

          {
            title: '保单号',
            width: '15%',
            align: "center",
            dataIndex: 'insuranceNum',
            key:'insuranceNum',
          },
          {
            title: '保险险种',
            width: '10%',
            align: "center",
            dataIndex: 'insuranceIncoverage',
            key:'insuranceIncoverage',
          },
          {
            title: '承保公司',
            width: '10%',
            align: "center",
            dataIndex: 'company',
            key:'company',
          },
          {
            title: '报案日期',
            width: '10%',
            align: "center",
            dataIndex: 'reportDate',
            key:'reportDate',
          },
          {
            title: '结案时间',
            width: '10%',
            align: "center",
            dataIndex: 'closeTime',
            key:'closeTime',
          },
          {
            title: '案件总费用',
            width: '15%',
            align: "center",
            dataIndex: 'totalMoney',
            key:'totalMoney',
          },
          {
            title: '理赔金额',
            width: '15%',
            align: "center",
            dataIndex: 'claimsMoney',
            key:'claimsMoney',
          },
        ],
        // maintenance
        columns_maintenance: [{//保养管理
          title: '序号',
          dataIndex: 'id',
          key: 'id',
          width: '5%',
          align: "center",
          customRender: function(t, r, index) {
            return parseInt(index) + 1;
          }
        },
          {
            title: '保养时间',
            width: '20%',
            align: "center",
            dataIndex: 'Date',
            key:'Date',

          },
          {
            title: '维护类型',
            width: '20%',
            align: "center",
            dataIndex: 'type',
            key:'type',
          },
          {
            title: '经办人',
            width: '15%',
            align: "center",
            dataIndex: 'agent',
            key:'agent',
          },
          {
            title: '计划',
            width: '20%',
            align: "center",
            dataIndex: 'plan',
            key:'plan',
          },
          {
            title: '维修厂',
            width: '20%',
            align: "center",
            dataIndex: 'repairShops',
            key:'repairShops',
          },
          {
            title: '保养金额',
            width: '20%',
            align: "center",
            dataIndex: 'amount',
            key:'amount',
          }
        ],
        columns_yearCareful: [{//年审信息
          title: '序号',
          dataIndex: 'id',
          key: 'id',
          width: '5%',
          align: "center",
          customRender: function(t, r, index) {
            return parseInt(index) + 1;
          }
        },
          {
            title: '办理时间',
            width: '20%',
            align: "center",
            dataIndex: 'handleTime',
            key:'handleTime',
          },
          {
            title: '年审规则',
            width: '20%',
            align: "center",
            dataIndex: 'rules',
            key:'rules',
          },
          {
            title: '经办人',
            width: '15%',
            align: "center",
            dataIndex: 'agent',
            key:'agent',
          },
          {
            title: '年审费用',
            width: '20%',
            align: "center",
            dataIndex: 'amount',
            key:'amount',
          },
          {
            title: '下次年审期',
            width: '20%',
            align: "center",
            dataIndex: 'nextTime',
            key:'nextTime',
          },
        ],
      }
    },
    created() {
      getAction('/application/car/vehiclenetwork/getCarLog?carid=' + this.$route.params.id,{}).then(res=>{
        this.alterationList=res.result
      });
    },
    mounted(){
      var $this=this
      // http://10.0.0.48:8080/system
      $this.spinning = true;
      getAction('/application/car/account/getCarDetail?id='+this.$route.params.id,{}).then(res=> {
        $this.accountData=res.result.carinfo || {}
        $this.carData=res.result.cardetail || {}
        $this.driverList=res.result.cardriver || {}
        $this.carList=res.result.carnetworks || {}
        $this.carphotosList=res.result.carphotos || {}
        $this.certphotosList=res.result.certphotos || {}

        if(res.result.carnetworks){
          res.result.carnetworks.forEach((item,index)=>{
            this.data_security.push({id:index+1,
              intelligentTerminal:'',
              createTime:item.createTime,
              equipmentManu:item.equipmentManu,
              equipmentType: item.equipmentType,
              equipmentNum:item.equipmentNum,
              netNumber:item.netNumber})
          })
        }
        $this.$nextTick(function(){
          $this.imageShow()
        })
        $this.spinning = false;
      })
    },
    methods: {
      moment,
      certificateImgsEyeIcon(){
        this.ImgsEyeIcon = true;
      },
      certificateImgsEyeIcons(){
        this.ImgsEyeIcons = true;
      },
      callback(key) {
        console.log(key);
      },
      showModal() {
        this.visible = true;
      },
      showModals() {
        this.visibles = true;
      },
      dateFormats(date){
        return moment(date).format('YYYY-MM-DD')
      },
      // 跳转完善
      perfect(){
        this.$router.push({path:'/xinzengcheliang/' + this.$route.params.id})
      },
        imageShow(){
          // 轮播图的操作
          function my$(id) {
            return document.getElementById(id);
          }
          //获取各元素，方便操作
          var left=my$("left")
          var right=my$("right");
          // var pic=0
          var index=0;
          //获取最外面的div
          var box = my$("box");
          //获取相框
          var inner = box.children[0];
          //获取去相框的宽度
          var imgWidth = inner.offsetWidth;
          // 获取ul
          var ulObj = inner.children[0];
          //获取ul中所有的li
          var list = ulObj.children;
          //获取ol
          var olObj = inner.children[1];
          //获取焦点
          var arr = my$("arr");
          //克隆ol中第一个li放到最后一个
          if (ulObj.children.length > 0) {
            ulObj.appendChild(ulObj.children[0].cloneNode(true));
          }
          my$("box").onmouseover=function(){
            arr.style.display="block";
          };
          //左右焦点实现点击切换图片功能
          //点击右边按钮
          right.onclick=clickHandle;
          function clickHandle() {
            if (index==ulObj.children.length-1){
              ulObj.style.left=0+"px";
              index=0;

            }
            index++;
            animate(ulObj,-index*imgWidth);
            if (index==list.length-1){
              olObj.children[0].className="current";
              olObj.children[olObj.children.length-1].className="";
            }else {
              for (var i=0;i<olObj.children.length;i++){
                olObj.children[i].className="";
              }
            }
          }
          //点击左边按钮
          left.onclick=function () {
            if (index==0){
              index=list.length-1;
              ulObj.style.left=-index*imgWidth+"px";
            }
            index--;
            animate(ulObj,-index*imgWidth);
            for (var i=0;i<olObj.children.length;i++){
              olObj.children[i].className="";
            }

          };
          // 设置一个元素，移动到指定位置
          function animate(element, target) {
            clearInterval(element.timeId);
            element.timeId = setInterval(function () {
              var current = element.offsetLeft;
              var step = 9;
              step = current > target ? -step : step;
              current += step;
              if (Math.abs(target - current) > Math.abs(step)) {
                element.style.left = current + "px";
              } else {
                clearInterval(element.timeId);
                element.style.left = target + "px";
              }
            }, 10);
          }
        }
      // changer(item) {
      //   if(item.show == 1) {
      //     item.show = 0;
      //   } else {
      //     console.log(333)
      //     item.show = 1;
      //   }
      // },
      // handleDetail(record){
      //
      // },
      // back(){
      //   this.$emit('backParameterList');
      // }
    },
    // filters: {
    //   hide(value) {
    //     return value.toString().replace(/[0-9]/ig, "*");
    //   }
    // }
  }
</script>

<style lang="less" scoped>
  .papers-download{
    cursor: pointer;
    float: right;
    margin: 18px 5px;
  }
  .table-text-content{
    margin: 0;
    color: rgba(0, 0, 0, 0.85);
    font-weight: 500;
    font-size: 16px;
    line-height: 35px;
    height: 35px;
  }
  .table-text-input{
    height: 60px;
    line-height: 60px;
  }
  .alter{
    visibility: hidden;
    margin: 0 0 0 20px;
    height: 14px;
    line-height: 14px;
    font-size: 12px;
    color: #ccc;
    cursor: pointer;
  }
  .alter:hover{
    color: #F7980D;
  }
  .table-text:hover .alter{
    visibility: visible;
  }
  .nameplate{
    width: 540px;
    height: 267px;
  }
  .nameplate img{
    width: 100%;
    height: 100%;
    display: block;
  }
  .nameplateText{
    width: 100%;
    height: 267px;
  }
  .nameplateTexts{
    width: 100%;
    height: 534px;
  }
  .table-title{
    width: 6%;
    height: 30px;
    line-height: 30px;
    background-color: #fafafa;
    padding: 8px 5px 8px 5px;
    color: rgba(0, 0, 0, 0.85);
    font-weight: normal;
    font-size: 14px;
    white-space: nowrap;
  }
  .table-text{
    /*overflow:auto;*/
    height: 30px;
    line-height: 30px;
    padding: 8px 5px 8px 5px;
    display: table-cell;
    color: rgba(0, 0, 0, 0.65);
    font-size: 14px;
    line-height: 1.5;
  }

  .parameterDetail > .ant-tooltip-inner{
    border:1px solid #fff;
  }
  .triangle{
    margin-left: 10px;
    float: left;
    width: 0;
    height: 0;
    border-width: 6px;
    border-style: solid;
    position: absolute;
    border-color:black transparent transparent transparent;
    /*opacity: 0.7;*/
  }
  .box {
    width: 200px;
    height: 160px;
    /*float: left;*/
    /*border: 1px dotted #ccc;*/
    margin: 0px auto;
    /*padding: 5px;*/
  }
  .inner{
    width: 100%;
    /*height: 100%;*/
    height: 155px;
    position: relative;
    overflow: hidden;
  }
  .inner img{
    width: 195px;
    height: 155px;
    vertical-align: top;
  }
  .inner ul {
    width: 1000%;
    position: absolute;
    list-style: none;
    left:0;
    top: 0;
  }
  .inner li{
    float: left;
    padding: 0px 5px;
  }
  .box:hover #arr span{
    visibility: visible;
  }
  #arr span{
    visibility: hidden;
    width: 28px;
    height: 28px;
    position: absolute;
    left: 3px;
    top: 50%;
    margin-top: -20px;
    background: #fff;
    cursor: pointer;
    line-height: 20px;
    text-align: center;
    font-weight: bold;
    font-family: '黑体';
    font-size: 30px;
    color: #000;
    opacity: 0.5;
    border: 1px solid #fff;
  }
  #left{
    border-radius: 0px 15px 15px 0px;
  }
  #right{
    border-radius: 15px 0px 0px 15px;
  }
  .left-icon , .right-icon{
    font-size: 20px;
  }
  #arr #right {
    right: -1px;
    left: auto;
  }
.com-erweimaFloat img{
  display: inline-block;
  width: 120px;
  height: 120px;
}
  .com-erweimaFloat{
    border: 1px solid #ccc;
    border-radius: 2px;
    margin-top: 4px;
    /*margin-left: 10px;*/
  }

</style>
<style lang="less" scoped>


  .parameterDetail > #papers > div.ant-card.ant-card-bordered.ant-card-hoverable > div.ant-card-body{
    padding: 5px;
  }
  .parameterDetail > #papers > div.ant-card.ant-card-bordered.ant-card-hoverable > div.ant-card-body > div > div > div.ant-card-meta-title{
    margin-bottom: 0px!important;
  }
  .ant-dropdown-edit{
    font-size: 15px;
    font-family: Microsoft YaHei;
    font-weight: 400;
    color: #545454;
  }
  .section-edit{
    float: right;
    margin-top: 15px;
    font-size: 18px;
    display: inline-block;

  }
  .section-information{
    display: inline-block;
  }
  .certificateImgs-text{
    padding: 5px;
  }
  .certificate-img{
    width:230px;
    height:300px;
    border-radius:2px;
    margin-right: 20px;
    display: inline-block;
    border: 1px solid #e8e8e8;
  }
  .certificateImgs-eye{
    visibility: hidden;
    position: absolute;
    height: 240px;
    width: 228px;
    display: block;
    color: white;
    background-color: rgb(0,0,0,0.5);
  }
  .bagCertificateImgsEyeIcon{
    padding: 30px 0px 10px;
    width: 470px;
    height: 540px;
  }
  .bagCertificateImgsEyeIcon img{
    width: 100%;
    height: 100%;
  }
  .certificate-img:hover .certificateImgs-eye{
    visibility: visible;
  }
  .certificateImgs-eye-icon{
    margin: 49% 47%;
  }
  .certificate-img img{
    width: 228px;
    height: 240px;
  }

  .certificate-text{
    margin-top: 2px;
    display: block;
    overflow: hidden;
    color: rgba(0, 0, 0, 0.85);
    font-weight: 600;
    font-size: 14px;
    white-space: nowrap;
    text-overflow: ellipsis;
  }
  .certificate-text-tips{
    color: rgba(0, 0, 0, 0.45);
    font-size: 13px;
  }
  .certificate h2 {
    height: 18px;
    line-height: 18px;
    font-size: 17px;
    font-family: MicrosoftYaHei-Bold;
    /*font-weight: 700;*/
    color: #333;
    margin: 20px 0;
  }
  .certificate{
    margin-left: 10px;
  }
  .more{
    cursor: pointer;
  }
  .content-information-Up{
    margin-top: 30px;
    padding: 5px 25px 25px 25px;
    box-shadow: 0px 0px 5px 0px rgba(204, 204, 204, 0.5);

  }
  .content-information{
    background:rgba(255,255,255,1);
    box-shadow:0px 0px 5px 0px rgba(204,204,204,0.5);
    border-radius:3px;
    margin-top: 8px;
    padding: 1px 25px 25px 25px;
  }
  .content-top{
    cursor: pointer;
    display: inline-block;
  }
  .content-top:hover{
    color:#6666;
  }
  .content-title{
    color: #000;
    font-size: 16px;
    margin-right: 8px;
  }
  .ant-upload-select-picture-card i {
    font-size: 32px;
    color: #999;
  }

  .ant-upload-select-picture-card .ant-upload-text {
    margin-top: 8px;
    color: #666;
  }
  .showHidden:hover{
    color: #1CC09F;
  }
  .titleWrap-icon{
    margin-left: 4px;
  }
  .com-erweimaFloat,.Rotation{
    display: inline-block;
  }
  .com-erweimaFloat:hover .com-float{
    visibility: visible;
  }
  .com-float{
    visibility: hidden;
    position: absolute;
    border: 1px solid #999999;
    padding: 0px 15px;
    background-color: black;
    border-radius: 2px;
    opacity: 0.5;
    top: -50px;
    left: 180px;
  }
  .com-float-work{
    color: white!important;
  }
  .driver_right-particulars{
    cursor:pointer;
  }
  .driver_right-details{
    cursor:pointer;
  }

  .parameterDetail {
    .content {
      width: 95%;
      float: left;
      margin: 0 60px 0 30px;
      .section {
        /*padding: 0 0 40px 0;*/
        border-bottom: 1px solid #E8E8E8;
        h2 {
          height: 18px;
          line-height: 18px;
          font-size: 17px;
          font-family: MicrosoftYaHei-Bold;
          /*font-weight: bold;*/
          color: rgba(51, 51, 51, 1);
          margin: 20px 0;
        }
        .com {
          /*min-height: 176px;*/
        }
        .com span:first-child{
          font-size:14px;
          font-family:Microsoft YaHei;
          font-weight:400;
          color:rgba(153,153,153,1);
          line-height:36px;
        }
        .com span:last-child{
          font-size:15px;
          font-family:Microsoft YaHei;
          font-weight:400;
          color:rgba(84,84,84,1);
          line-height:36px;
        }

        .red {
          a {
            color: #f5222d;
          }
          /*span {*/
          /*color: rgba(0, 0, 0, 0.65);*/
          /*}*/
        }
        p {
          height: 30px;
          line-height: 30px;
          font-size: 14px;
          span {
            height: 14px;
            font-family: MicrosoftYaHei;
            font-weight: 400;
            /*margin-right: 10px;*/
          }
          em {
            height: 14px;
            font-family: MicrosoftYaHei;
            font-weight: 400;
          }
        }
        .imgList {
          padding-top: 15px;
          span {
            position: relative;
            float: left;
            width: 170px;
            height: 170px;
            margin-right: 60px;
            i {
              display: none;
            }
            &:hover i {
              display: block;
              position: absolute;
              left: 0;
              top: 0;
              width: 170px;
              padding-left: 15px;
              height: 40px;
              line-height: 40px;
              font-size: 14px;
              background: rgba(0, 0, 0, 0.5);
              color: #fff;
            }
          }
        }
        &.basic {
          /*img {*/
          /*float: right;*/
          /*}*/
        }
        &.alteration {
          p {
            span {
              margin-right: 20px;
            }
          }
        }
        &.common {
          .titleWrap {
            h2 {
              float: left;
            }
            span {
              float: left;
              height: 18px;
              line-height: 18px;
              margin-top: 20px;
              margin-left: 10px;
              width: 80px;
              cursor: pointer;
              img {
                float: left;
                margin-right: 10px;
              }
              em {
                float: left;
                font-size: 14px;
                font-family: MicrosoftYaHei;
                font-weight: 400;
                color: rgba(38, 38, 38, 1);
              }
            }
          }
        }
      }
    }
  }
</style>