<template>
  <div>
    <a-col :span="24">
      <div >
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
                        <!--闲置车辆-->
                        <a-col :span="24">
                          <div class="body-top-xianzhi">
                            <a-row>
                              <!--初创-->
                              <a-col :xl="12" :lg="12" :md="24" :sm="24" :xs="24">
                                <a-row>
                                  <a-col :span="24">
                                    <div class="body-top-caigou">
                                      <a-row>
                                        <a-col :span="12"><h3>{{config[0].top.leftTitle}}</h3></a-col>
                                        <a-col :span="12"><div class="body-top-caigou-gengduo"><a href="#">{{config[0].top.rightTitle}}</a></div></a-col>
                                      </a-row>
                                    </div>
                                  </a-col>

                                  <a-col :span="24">
                                    <div class="body-top-bjt">
                                      <a-row>
                                        <a-col :span="24">
                                          <div class="body-top-bjt-bt">
                                            {{config[0].center.title}}
                                          </div>
                                        </a-col>
                                        <a-col :span="24">
                                          <div class="body-top-bjt-wz">
                                            {{config[0].center.contentOne}}
                                          </div>
                                        </a-col>
                                        <a-col :span="24">
                                          <div class="body-top-bjt-wz">
                                            {{config[0].center.contentTwo}}
                                          </div>
                                        </a-col>
                                        <a-col :span="24">
                                          <div class="body-top-bjt-wz">
                                            {{config[0].center.contentThree}}
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
                                                  <span class="body-top-xinpin-wzo">{{config[0].footer[0].basicInfo}}</span>
                                                  <span class="body-top-xinpin-wzo">{{config[0].footer[0].headline}}</span>
                                                </div>
                                              </a-col>
                                              <a-col :span="24">
                                                <div class="body-top-zhuce">
                                                  <h4>{{config[0].footer[0].title}}</h4>
                                                </div>
                                              </a-col>
                                              <a-col :span="24">
                                                <div class="body-top-XXX">
                                                  {{config[0].footer[0].contentOne}}
                                                </div>
                                                <div class="body-top-XXX">
                                                  {{config[0].footer[0].contentTwo}}
                                                </div>
                                              </a-col>
                                              <a-col :span="24">
                                                <div class="body-top-jg">
                                                  <p> <span>{{config[0].footer[0].price}}</span> {{config[0].footer[0].priceDesc}}</p>
                                                </div>
                                              </a-col>
                                            </a-row>
                                          </div>
                                          <div class="body-top-gengduoone">
                                            <span>{{config[0].footer[0].lookMore}}</span>
                                          </div>
                                        </a-col>

                                        <a-col :span="12">
                                          <div class="body-top-xinpin body-top-xinpintwo body-top-xinpin-top body-top-xinpinnnn">
                                            <a-row>
                                              <a-col :span="24">
                                                <div class="body-top-xinpin-wz">
                                                  <span class="body-top-xinpin-wzo">{{config[0].footer[1].basicInfo}}</span>
                                                  <span class="body-top-xinpin-wzo">{{config[0].footer[1].headline}}</span>
                                                </div>
                                              </a-col>
                                              <a-col :span="24">
                                                <div class="body-top-zhuce">
                                                  <h4>{{config[0].footer[1].title}}</h4>
                                                </div>
                                              </a-col>
                                              <a-col :span="24">
                                                <div class="body-top-XXX">
                                                  {{config[0].footer[1].contentOne}}
                                                </div>
                                                <div class="body-top-XXX">
                                                  {{config[0].footer[1].contentTwo}}
                                                </div>
                                              </a-col>
                                              <a-col :span="24">
                                                <div class="body-top-jg">
                                                  <p> <span>{{config[0].footer[1].price}}</span> {{config[0].footer[1].priceDesc}}</p>
                                                </div>
                                              </a-col>
                                            </a-row>
                                          </div>
                                          <div class="body-top-gengduotwo">
                                            <span>{{config[0].footer[1].lookMore}}</span>
                                          </div>
                                        </a-col>
                                        <a-col :span="12">
                                          <div class="body-top-xinpin body-top-xinpinthree body-top-xi body-top-xinpint">
                                            <a-row>
                                              <a-col :span="24">
                                                <div class="body-top-xinpin-wz">
                                                  <span class="body-top-xinpin-wzo">{{config[0].footer[2].basicInfo}}</span>
                                                  <span class="body-top-xinpin-wzo">{{config[0].footer[2].headline}}</span>
                                                </div>
                                              </a-col>
                                              <a-col :span="24">
                                                <div class="body-top-zhuce">
                                                  <h4>{{config[0].footer[2].title}}</h4>
                                                </div>
                                              </a-col>
                                              <a-col :span="24">
                                                <div class="body-top-XXX">
                                                  {{config[0].footer[2].contentOne}}。
                                                </div>
                                                <div class="body-top-XXX">
                                                  {{config[0].footer[2].contentTwo}}
                                                </div>
                                              </a-col>
                                              <a-col :span="24">
                                                <div class="body-top-jg">
                                                  <p> <span>{{config[0].footer[2].price}}</span> {{config[0].footer[2].priceDesc}}</p>
                                                </div>
                                              </a-col>
                                            </a-row>
                                          </div>
                                          <div class="body-top-gengduothree">
                                            <span>{{config[0].footer[2].lookMore}}</span>
                                          </div>
                                        </a-col>
                                        <a-col :span="12">
                                          <div class="body-top-xinpin body-top-xinpinfour body-top-xinpinnnn">
                                            <a-row>
                                              <a-col :span="24">
                                                <div class="body-top-xinpin-wz">
                                                  <span class="body-top-xinpin-wzo">{{config[0].footer[3].basicInfo}}</span>
                                                  <span class="body-top-xinpin-wzo">{{config[0].footer[3].headline}}</span>
                                                </div>
                                              </a-col>
                                              <a-col :span="24">
                                                <div class="body-top-zhuce">
                                                  <h4>{{config[0].footer[3].title}}</h4>
                                                </div>
                                              </a-col>
                                              <a-col :span="24">
                                                <div class="body-top-XXX">
                                                  {{config[0].footer[3].contentOne}}
                                                </div>
                                                <div class="body-top-XXX">
                                                  {{config[0].footer[3].contentTwo}}
                                                </div>
                                              </a-col>
                                              <a-col :span="24">
                                                <div class="body-top-jg">
                                                  <p> <span>{{config[0].footer[3].price}}</span> {{config[0].footer[3].priceDesc}}</p>
                                                </div>
                                              </a-col>
                                            </a-row>
                                          </div>
                                          <div class="body-top-gengduofour">
                                            <span>{{config[0].footer[3].lookMore}}</span>
                                          </div>
                                        </a-col>
                                      </a-row>
                                    </div>
                                  </a-col>
                                </a-row>
                              </a-col>

                              <!--用车需求-->
                              <a-col :xl="12" :lg="12" :md="24" :sm="24" :xs="24">
                                <a-row>
                                  <a-col :span="24">
                                    <div class="body-top-caigouu">
                                      <a-row>
                                        <a-col :span="12"><h3>{{config[0].top.leftTitle}}</h3></a-col>
                                        <a-col :span="12"><div class="body-top-caigou-gengduo"><a href="#">{{config[0].top.rightTitle}}</a></div></a-col>
                                      </a-row>
                                    </div>
                                  </a-col>
                                  <a-col :span="24">
                                    <div class="body-top-bjtt">
                                      <a-row>
                                        <a-col :span="24">
                                          <div class="body-top-bjt-bt">
                                            {{config[0].center.title}}
                                          </div>
                                        </a-col>
                                        <a-col :span="24">
                                          <div class="body-top-bjt-wz">
                                            {{config[0].center.contentOne}}
                                          </div>
                                        </a-col>
                                        <a-col :span="24">
                                          <div class="body-top-bjt-wz">
                                            {{config[0].center.contentTwo}}
                                          </div>
                                        </a-col>
                                        <a-col :span="24">
                                          <div class="body-top-bjt-wz">
                                            {{config[0].center.contentThree}}
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
                                                  <span class="body-top-xinpin-wzo">{{config[0].footer[0].basicInfo}}</span>
                                                  <span class="body-top-xinpin-wzo">{{config[0].footer[0].headline}}</span>
                                                </div>
                                              </a-col>
                                              <a-col :span="24">
                                                <div class="body-top-zhuce">
                                                  <h4>{{config[0].footer[0].title}}</h4>
                                                </div>
                                              </a-col>
                                              <a-col :span="24">
                                                <div class="body-top-XXX">
                                                  {{config[0].footer[0].contentOne}}
                                                </div>
                                                <div class="body-top-XXX">
                                                  {{config[0].footer[0].contentTwo}}
                                                </div>
                                              </a-col>
                                              <a-col :span="24">
                                                <div class="body-top-jg">
                                                  <p> <span>{{config[0].footer[0].price}}</span> {{config[0].footer[0].priceDesc}}</p>
                                                </div>
                                              </a-col>
                                            </a-row>
                                          </div>
                                          <div class="body-top-gengduooone">
                                            <span>{{config[0].footer[0].lookMore}}</span>
                                          </div>
                                        </a-col>
                                        <a-col :span="12">
                                          <div class="body-top-xinpin body-top-xinpinttwo body-top-xinpinnn">
                                            <a-row>
                                              <a-col :span="24">
                                                <div class="body-top-xinpin-wz">
                                                  <span class="body-top-xinpin-wzo">{{config[0].footer[1].basicInfo}}</span>
                                                  <span class="body-top-xinpin-wzo">{{config[0].footer[1].headline}}</span>
                                                </div>
                                              </a-col>
                                              <a-col :span="24">
                                                <div class="body-top-zhuce">
                                                  <h4>{{config[0].footer[1].title}}</h4>
                                                </div>
                                              </a-col>
                                              <a-col :span="24">
                                                <div class="body-top-XXX">
                                                  {{config[0].footer[1].contentOne}}
                                                </div>
                                                <div class="body-top-XXX">
                                                  {{config[0].footer[1].contentTwo}}
                                                </div>


                                              </a-col>
                                              <a-col :span="24">
                                                <div class="body-top-jg">
                                                  <p> <span>{{config[0].footer[1].price}}</span> {{config[0].footer[1].priceDesc}}</p>
                                                </div>
                                              </a-col>
                                            </a-row>
                                          </div>
                                          <div class="body-top-gengduottwo">
                                            <span>{{config[0].footer[1].lookMore}}</span>
                                          </div>
                                        </a-col>
                                        <a-col :span="12">
                                          <div class="body-top-xinpin body-top-xinpintthree body-top-xinpinno body-top-xinpint">
                                            <a-row>
                                              <a-col :span="24">
                                                <div class="body-top-xinpin-wz">
                                                  <span class="body-top-xinpin-wzo">{{config[0].footer[2].basicInfo}}</span>
                                                  <span class="body-top-xinpin-wzo">{{config[0].footer[2].headline}}</span>
                                                </div>
                                              </a-col>
                                              <a-col :span="24">
                                                <div class="body-top-zhuce">
                                                  <h4>{{config[0].footer[2].title}}</h4>
                                                </div>
                                              </a-col>
                                              <a-col :span="24">
                                                <div class="body-top-XXX">
                                                  {{config[0].footer[2].contentOne}}
                                                </div>
                                                <div class="body-top-XXX">
                                                  {{config[0].footer[2].contentTwo}}
                                                </div>
                                              </a-col>
                                              <a-col :span="24">
                                                <div class="body-top-jg">
                                                  <p> <span>{{config[0].footer[2].price}}</span> {{config[0].footer[2].priceDesc}}</p>
                                                </div>
                                              </a-col>
                                            </a-row>
                                          </div>
                                          <div class="body-top-gengduotthree">
                                            <span>{{config[0].footer[2].basicInfo}}</span>
                                          </div>
                                        </a-col>
                                        <a-col :span="12">
                                          <div class="body-top-xinpin body-top-xinpinffour body-top-xinpinnn">
                                            <a-row>
                                              <a-col :span="24">
                                                <div class="body-top-xinpin-wz">
                                                  <span class="body-top-xinpin-wzo">{{config[0].footer[3].basicInfo}}</span>
                                                  <span class="body-top-xinpin-wzo">{{config[0].footer[3].basicInfo}}</span>
                                                </div>
                                              </a-col>
                                              <a-col :span="24">
                                                <div class="body-top-zhuce">
                                                  <h4>{{config[0].footer[3].title}}</h4>
                                                </div>
                                              </a-col>
                                              <a-col :span="24">
                                                <div class="body-top-XXX">
                                                  {{config[0].footer[3].contentOne}}
                                                </div>
                                                <div class="body-top-XXX">
                                                  {{config[0].footer[3].contentTwo}}
                                                </div>
                                              </a-col>
                                              <a-col :span="24">
                                                <div class="body-top-jg">
                                                  <p> <span>{{config[0].footer[3].price}}</span> {{config[0].footer[3].priceDesc}}</p>
                                                </div>
                                              </a-col>
                                            </a-row>
                                          </div>
                                          <div class="body-top-gengduoffour">
                                            <span>{{config[0].footer[3].lookMore}}</span>
                                          </div>
                                        </a-col>
                                      </a-row>
                                    </div>
                                  </a-col>
                                </a-row>
                              </a-col>

                            </a-row>
                          </div>
                        </a-col>

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
  </div>
</template>
<script src="http://code.jquery.com/jquery-1.4.1.min.js"></script>
<script>

export default {
  name:"TopBodyBodySonOne",
  components:{
  },
  props: {
    config: {
      type: Array,
      default: () => []
    },
  },
  created(){
    $(document).ready(function() {
      // 第一波
      $(".body-top-xinpinone,.body-top-gengduoone").mousemove(function() {
        $(".body-top-gengduoone").show();
      });
      $(".body-top-xinpinone,.body-top-gengduoone").mouseout(function() {
        $(".body-top-gengduoone").hide();
      });
      $(".body-top-xinpintwo,.body-top-gengduotwo").mousemove(function() {
        $(".body-top-gengduotwo").show();
      });
      $(".body-top-xinpintwo,.body-top-gengduotwo").mouseout(function() {
        $(".body-top-gengduotwo").hide();
      });
      $(".body-top-xinpinthree,.body-top-gengduothree").mousemove(function() {
        $(".body-top-gengduothree").show();
      });
      $(".body-top-xinpinthree,.body-top-gengduothree").mouseout(function() {
        $(".body-top-gengduothree").hide();
      });
      $(".body-top-xinpinfour,.body-top-gengduofour").mousemove(function() {
        $(".body-top-gengduofour").show();
      });
      $(".body-top-xinpinfour,.body-top-gengduofour").mouseout(function() {
        $(".body-top-gengduofour").hide();
      });
      // 第二波
      $(".body-top-xinpinoone,.body-top-gengduooone").mousemove(function() {
        $(".body-top-gengduooone").show();
      });
      $(".body-top-xinpinoone,.body-top-gengduooone").mouseout(function() {
        $(".body-top-gengduooone").hide();
      });
      $(".body-top-xinpinttwo,.body-top-gengduottwo").mousemove(function() {
        $(".body-top-gengduottwo").show();
      });
      $(".body-top-xinpinttwo,.body-top-gengduottwo").mouseout(function() {
        $(".body-top-gengduottwo").hide();
      });
      $(".body-top-xinpintthree,.body-top-gengduotthree").mousemove(function() {
        $(".body-top-gengduotthree").show();
      });
      $(".body-top-xinpintthree,.body-top-gengduotthree").mouseout(function() {
        $(".body-top-gengduotthree").hide();
      });
      $(".body-top-xinpinffour,.body-top-gengduoffour").mousemove(function() {
        $(".body-top-gengduoffour").show();
      });
      $(".body-top-xinpinffour,.body-top-gengduoffour").mouseout(function() {
        $(".body-top-gengduoffour").hide();
      });
      // 查询更多鼠标事件
      //     第一个
      $(".body-top-xinpinone,.body-top-gengduoone").mousemove(function() {
        $(".body-top-xinpinone").css("box-shadow", "0px 0px 12px #BCBCBC");
      });
      $(".body-top-xinpinone,.body-top-gengduoone").mouseout(function() {
        $(".body-top-xinpinone").css("box-shadow", "0px 0px 0px #fff");
      });
      //     第二个
      $(".body-top-xinpintwo,.body-top-gengduotwo").mousemove(function() {
        $(".body-top-xinpintwo").css("box-shadow", "0px 0px 12px #BCBCBC");
      });
      $(".body-top-xinpintwo,.body-top-gengduotwo").mouseout(function() {
        $(".body-top-xinpintwo").css("box-shadow", "0px 0px 0px #fff");
      });
      //     第三个
      $(".body-top-xinpinthree,.body-top-gengduothree").mousemove(function() {
        $(".body-top-xinpinthree").css("box-shadow", "0px 0px 12px #BCBCBC");
      });
      $(".body-top-xinpinthree,.body-top-gengduothree").mouseout(function() {
        $(".body-top-xinpinthree").css("box-shadow", "0px 0px 0px #fff");
      });
      //     第四个
      $(".body-top-xinpinfour,.body-top-gengduofour").mousemove(function() {
        $(".body-top-xinpinfour").css("box-shadow", "0px 0px 12px #BCBCBC");
      });
      $(".body-top-xinpinfour,.body-top-gengduofour").mouseout(function() {
        $(".body-top-xinpinfour").css("box-shadow", "0px 0px 0px #fff");
      });
      //     第五个
      $(".body-top-xinpinoone,.body-top-gengduooone").mousemove(function() {
        $(".body-top-xinpinoone").css("box-shadow", "0px 0px 12px #BCBCBC");
      });
      $(".body-top-xinpinoone,.body-top-gengduooone").mouseout(function() {
        $(".body-top-xinpinoone").css("box-shadow", "0px 0px 0px #fff");
      });
      //     第六个
      $(".body-top-xinpinttwo,.body-top-gengduottwo").mousemove(function() {
        $(".body-top-xinpinttwo").css("box-shadow", "0px 0px 12px #BCBCBC");
      });
      $(".body-top-xinpinttwo,.body-top-gengduottwo").mouseout(function() {
        $(".body-top-xinpinttwo").css("box-shadow", "0px 0px 0px #fff");
      });
      //     第七个
      $(".body-top-xinpintthree,.body-top-gengduotthree").mousemove(function() {
        $(".body-top-xinpintthree").css("box-shadow", "0px 0px 12px #BCBCBC");
      });
      $(".body-top-xinpintthree,.body-top-gengduotthree").mouseout(function() {
        $(".body-top-xinpintthree").css("box-shadow", "0px 0px 0px #fff");
      });
      //     第八个
      $(".body-top-xinpinffour,.body-top-gengduoffour").mousemove(function() {
        $(".body-top-xinpinffour").css("box-shadow", "0px 0px 12px #BCBCBC");
      });
      $(".body-top-xinpinffour,.body-top-gengduoffour").mouseout(function() {
        $(".body-top-xinpinffour").css("box-shadow", "0px 0px 0px #fff");
      });
      // 第一波
      $(".body-top-xinpinone,.body-top-gengduoone").mousemove(function() {
        $(".body-top-gengduoone").show();
      });
      $(".body-top-xinpinone,.body-top-gengduoone").mouseout(function() {
        $(".body-top-gengduoone").hide();
      });
      $(".body-top-xinpintwo,.body-top-gengduotwo").mousemove(function() {
        $(".body-top-gengduotwo").show();
      });
      $(".body-top-xinpintwo,.body-top-gengduotwo").mouseout(function() {
        $(".body-top-gengduotwo").hide();
      });
      $(".body-top-xinpinthree,.body-top-gengduothree").mousemove(function() {
        $(".body-top-gengduothree").show();
      });
      $(".body-top-xinpinthree,.body-top-gengduothree").mouseout(function() {
        $(".body-top-gengduothree").hide();
      });
      $(".body-top-xinpinfour,.body-top-gengduofour").mousemove(function() {
        $(".body-top-gengduofour").show();
      });
      $(".body-top-xinpinfour,.body-top-gengduofour").mouseout(function() {
        $(".body-top-gengduofour").hide();
      });
      // 第二波
      $(".body-top-xinpinoone,.body-top-gengduooone").mousemove(function() {
        $(".body-top-gengduooone").show();
      });
      $(".body-top-xinpinoone,.body-top-gengduooone").mouseout(function() {
        $(".body-top-gengduooone").hide();
      });
      $(".body-top-xinpinttwo,.body-top-gengduottwo").mousemove(function() {
        $(".body-top-gengduottwo").show();
      });
      $(".body-top-xinpinttwo,.body-top-gengduottwo").mouseout(function() {
        $(".body-top-gengduottwo").hide();
      });
      $(".body-top-xinpintthree,.body-top-gengduotthree").mousemove(function() {
        $(".body-top-gengduotthree").show();
      });
      $(".body-top-xinpintthree,.body-top-gengduotthree").mouseout(function() {
        $(".body-top-gengduotthree").hide();
      });
      $(".body-top-xinpinffour,.body-top-gengduoffour").mousemove(function() {
        $(".body-top-gengduoffour").show();
      });
      $(".body-top-xinpinffour,.body-top-gengduoffour").mouseout(function() {
        $(".body-top-gengduoffour").hide();
      });
      // .body-top-xinpin:hover{
      //     z-index: 10;
      //     box-shadow: 0px 0px 12px #BCBCBC;
      //   }
      // 查询更多鼠标事件
      //     第一个
      $(".body-top-xinpinone,.body-top-gengduoone").mousemove(function() {
        $(".body-top-xinpinone").css("box-shadow", "0px 0px 12px #BCBCBC");
      });
      $(".body-top-xinpinone,.body-top-gengduoone").mouseout(function() {
        $(".body-top-xinpinone").css("box-shadow", "0px 0px 0px #fff");
      });
      //     第二个
      $(".body-top-xinpintwo,.body-top-gengduotwo").mousemove(function() {
        $(".body-top-xinpintwo").css("box-shadow", "0px 0px 12px #BCBCBC");
      });
      $(".body-top-xinpintwo,.body-top-gengduotwo").mouseout(function() {
        $(".body-top-xinpintwo").css("box-shadow", "0px 0px 0px #fff");
      });
      //     第三个
      $(".body-top-xinpinthree,.body-top-gengduothree").mousemove(function() {
        $(".body-top-xinpinthree").css("box-shadow", "0px 0px 12px #BCBCBC");
      });
      $(".body-top-xinpinthree,.body-top-gengduothree").mouseout(function() {
        $(".body-top-xinpinthree").css("box-shadow", "0px 0px 0px #fff");
      });
      //     第四个
      $(".body-top-xinpinfour,.body-top-gengduofour").mousemove(function() {
        $(".body-top-xinpinfour").css("box-shadow", "0px 0px 12px #BCBCBC");
      });
      $(".body-top-xinpinfour,.body-top-gengduofour").mouseout(function() {
        $(".body-top-xinpinfour").css("box-shadow", "0px 0px 0px #fff");
      });
      //     第五个
      $(".body-top-xinpinoone,.body-top-gengduooone").mousemove(function() {
        $(".body-top-xinpinoone").css("box-shadow", "0px 0px 12px #BCBCBC");
      });
      $(".body-top-xinpinoone,.body-top-gengduooone").mouseout(function() {
        $(".body-top-xinpinoone").css("box-shadow", "0px 0px 0px #fff");
      });
      //     第六个
      $(".body-top-xinpinttwo,.body-top-gengduottwo").mousemove(function() {
        $(".body-top-xinpinttwo").css("box-shadow", "0px 0px 12px #BCBCBC");
      });
      $(".body-top-xinpinttwo,.body-top-gengduottwo").mouseout(function() {
        $(".body-top-xinpinttwo").css("box-shadow", "0px 0px 0px #fff");
      });
      //     第七个
      $(".body-top-xinpintthree,.body-top-gengduotthree").mousemove(function() {
        $(".body-top-xinpintthree").css("box-shadow", "0px 0px 12px #BCBCBC");
      });
      $(".body-top-xinpintthree,.body-top-gengduotthree").mouseout(function() {
        $(".body-top-xinpintthree").css("box-shadow", "0px 0px 0px #fff");
      });
      //     第八个
      $(".body-top-xinpinffour,.body-top-gengduoffour").mousemove(function() {
        $(".body-top-xinpinffour").css("box-shadow", "0px 0px 12px #BCBCBC");
      });
      $(".body-top-xinpinffour,.body-top-gengduoffour").mouseout(function() {
        $(".body-top-xinpinffour").css("box-shadow", "0px 0px 0px #fff");
      });
    })
  },


}

</script>
<style>
  .body-top-caigouu{
    padding: 10px 0;
  }
  .body-top-caigouu{
    color: rgb(0, 0, 0);
    font-weight: normal;
    margin-left: 10px;
  }
  .body-top-caigouu h3{
    font-size: 22px;
  }
  .body-top-caigou-gengduo a:hover{
    color: #3C9CFF;
  }
  .body-top-caigou-gengduo{
    float: right;
    height: 34px;
    line-height: 45px;
  }
  .body-top-caigou-gengduo a{
    color: rgb(0, 0, 0);
  }
  .body-top-bjtt{
    background-image: url('~@/assets/index/bjttwo.jpg');
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
  .body-top-xinpinno{
    margin-left: 10px;
    margin-right: -2px;
    margin-top: 2px;
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
    font-size: 16px;
    margin: 20px 0 10px 0;
    vertical-align: baseline;
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
  .body-top-xinpinnn{
    margin-left: 5px;
    margin-top: 2px;
  }
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
  .body-top-gengduooone,.body-top-gengduotthree{
    margin-right: -6px;
  }
  .body-top-gengduooone span,  .body-top-gengduottwo span,  .body-top-gengduotthree span,  .body-top-gengduoffour span{
    display: block;
    height: 60px;
    line-height: 60px;
  }


  .body-top-caigou,.body-top-caigouu{
    padding: 10px 0;
  }
  .body-top-caigou{
    color: rgb(0, 0, 0);
    font-weight: normal;
    margin-right: 10px;
  }
  .body-top-caigou h3{
    font-size: 22px;
  }
  .body-top-caigou-gengduo a:hover{
    color: #3C9CFF;
  }
  .body-top-caigou-gengduo{
    float: right;
    height: 34px;
    line-height: 45px;
  }
  .body-top-caigou-gengduo a{
    color: rgb(0, 0, 0);
  }
  .body-top-bjt{
    background-image: url('~@/assets/index/bjtone.jpg');
    background-size: 100%;
    margin-right: 10px;
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

  .body-top-xio{
    margin-top: 2px;
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
    font-size: 16px;
    margin: 20px 0 10px 0;
    vertical-align: baseline;
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
  .body-top-gengduoone span,  .body-top-gengduotwo span,  .body-top-gengduothree span,  .body-top-gengduofour span{
    display: block;
    height: 60px;
    line-height: 60px;
  }
  .body-top-gengduoone,  .body-top-gengduotwo,  .body-top-gengduothree,  .body-top-gengduofour{
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

  .body-top-gengduotwo,.body-top-gengduofour{
    margin-right: 7px;
  }








</style>
<style scoped>
  .body-top-xinpin{
    background-color: white;
    padding: 20px;
    border-bottom: 1px solid #ededed;
    border-right: 1px solid #ededed;
    margin-right: 0px;
  }

  .body-top-xi{
    margin-right: 5px;
    margin-top: 2px;
    position: relative;
  }
  .body-top-xinpinnnn{
    margin-right: 10px;
    margin-left: -3px;
    margin-top: 2px;
  }
  .body-top{
    background-color: #F2F2F2;
  }
  .body-top-qy{
    margin: 20px 0;
  }
</style>




