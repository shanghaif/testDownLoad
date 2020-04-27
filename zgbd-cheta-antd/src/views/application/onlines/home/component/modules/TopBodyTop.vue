<template>
  <div style="height: 494px">
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
                        <a-col :span="24">
                          <!--企业采购-->
                          <a-col :span="24">
                            <div class="body-top-top">
                              <!--企业采购-->
                              <a-row>
                                <a-col  :xl="4" :lg="4" :md="4" :sm="4" :xs="5">
                                  <div>
                                    <h3>{{config[0].titleOne}}</h3>
                                  </div>
                                </a-col>
                                <a-col  :xl="17" :lg="17" :md="17" :sm="16" :xs="15">
                                  <div class="body-top-jinrong">
                                    <a-row>
                                      <a-col :xl="3" :lg="3" :md="3" :sm="4" :xs="4"> <div class="body-top-jinrongg"> <a href="#"> {{config[0].titleTwo}} </a></div></a-col>
                                      <a-col :xl="3" :lg="3" :md="3" :sm="4" :xs="4"> <div class="body-top-jinrongg"> <a href="#"> {{config[0].titleThree}}  </a></div></a-col>
                                      <a-col :xl="3" :lg="3" :md="3" :sm="4" :xs="4"> <div class="body-top-jinrongg"> <a href="#"> {{config[0].titleFour}}   </a></div></a-col>
                                      <a-col :xl="3" :lg="3" :md="3" :sm="4" :xs="4"> <div class="body-top-jinrongg"> <a href="#"> {{config[0].titleFive}}  </a></div></a-col>
                                      <a-col :xl="4" :lg="4" :md="4" :sm="5" :xs="5"> <div class="body-top-jinrongg"> <a href="#"> {{config[0].titleSix}} </a></div></a-col>
                                      <!--<a-col :xl="3" :lg="3" :md="3" :sm="4" :xs="4"> <div class="body-top-jinrongg">金融产品 </div></a-col>-->
                                    </a-row>
                                  </div>
                                </a-col>
                                <a-col  :xl="3" :lg="3" :md="3" :sm="4" :xs="4">
                                  <div class="body-top-gengduo"><a href="#">{{config[0].titleSeven}}</a></div>
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
                                          <div class="body-top-guanggao-tp"><img src="@/assets/index/guanggaoOne.png" alt=""></div>
                                          <div class="body-top-guanggao-tp"><img src="@/assets/index/guanggaoTwo.png" alt=""></div>
                                          <div class="body-top-guanggao-tp"><img src="@/assets/index/guanggaoOne.png" alt=""></div>
                                          <div class="body-top-guanggao-tp"><img src="@/assets/index/guanggaoTwo.png" alt=""></div>
                                        </a-carousel>
                                      </a-col>
                                      <a-col>
                                        <div class="body-qiyecaigou">
                                          <img src="@/assets/index/guanggaoTwo.png" alt="">
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
                                      <a-col :xl="6" :lg="6" :md="12" :xs="12"> <div class="top-right-lb"><img src="@/assets/index/jinrongtwo.png" alt="" style="display: inline-block"></div></a-col>
                                      <a-col :xl="6" :lg="6" :md="12" :xs="12"> <div class="top-right-lb"><img src="@/assets/index/jinrongtwo.png" alt="" style="display: inline-block"></div></a-col>
                                      <a-col :xl="6" :lg="6" :md="12" :xs="12"> <div class="top-right-lb"><img src="@/assets/index/jinrongtwo.png" alt="" style="display: inline-block"></div></a-col>
                                      <a-col :xl="6" :lg="6" :md="12" :xs="12"> <div class="top-right-lbb"><img src="@/assets/index/jinrongtwo.png" alt="" style="display: inline-block"></div></a-col>
                                    </div>

                                    <div>
                                      <a-col :xl="6" :lg="6" :md="12" :xs="12"> <div class="top-right-lb"><img src="@/assets/index/jinrongtwo.png" alt="" style="display: inline-block"></div></a-col>
                                      <a-col :xl="6" :lg="6" :md="12" :xs="12"> <div class="top-right-lb"><img src="@/assets/index/jinrongtwo.png" alt="" style="display: inline-block"></div></a-col>
                                      <a-col :xl="6" :lg="6" :md="12" :xs="12"> <div class="top-right-lb"><img src="@/assets/index/jinrongtwo.png" alt="" style="display: inline-block"></div></a-col>
                                      <a-col :xl="6" :lg="6" :md="12" :xs="12"> <div class="top-right-lbb"><img src="@/assets/index/jinrongtwo.png" alt="" style="display: inline-block"></div></a-col>
                                    </div>

                                    <div>
                                      <a-col :xl="6" :lg="6" :md="12" :xs="12"> <div class="top-right-lb"><img src="@/assets/index/jinrongtwo.png" alt="" style="display: inline-block"></div></a-col>
                                      <a-col :xl="6" :lg="6" :md="12" :xs="12"> <div class="top-right-lb"><img src="@/assets/index/jinrongtwo.png" alt="" style="display: inline-block"></div></a-col>
                                      <a-col :xl="6" :lg="6" :md="12" :xs="12"> <div class="top-right-lb"><img src="@/assets/index/jinrongtwo.png" alt="" style="display: inline-block"></div></a-col>
                                      <a-col :xl="6" :lg="6" :md="12" :xs="12"> <div class="top-right-lbb"><img src="@/assets/index/jinrongtwo.png" alt="" style="display: inline-block"></div></a-col>
                                    </div>

                                    <div>
                                      <a-col :xl="6" :lg="6" :md="12" :xs="12"> <div class="top-right-lb"><img src="@/assets/index/jinrongtwo.png" alt="" style="display: inline-block"></div></a-col>
                                      <a-col :xl="6" :lg="6" :md="12" :xs="12"> <div class="top-right-lb"><img src="@/assets/index/jinrongtwo.png" alt="" style="display: inline-block"></div></a-col>
                                      <a-col :xl="6" :lg="6" :md="12" :xs="12"> <div class="top-right-lb"><img src="@/assets/index/jinrongtwo.png" alt="" style="display: inline-block"></div></a-col>
                                      <a-col :xl="6" :lg="6" :md="12" :xs="12"> <div class="top-right-lbb"><img src="@/assets/index/jinrongtwo.png" alt="" style="display: inline-block"></div></a-col>
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
        </a-row>
      </div>
    </a-col>
  </div>
</template>

<script>
  export default {
    name: 'TopBodyTop',
    props: {
      config: {
        type: Array,
        default: () => []
      },
    },
  }
  $(document).ready(function(){
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
  })

</script>

<style scoped>


  .body-top-jinrong a:hover{
    color: #3C9CFF;
  }
  .body-top-qy{
    margin: 20px 0;
  }

  .body-top-top{
    padding: 10px 0;
  }
  h3{
    margin: 0;
    padding: 0;
    color: rgb(0, 0, 0);
    font-size: 22px;
    font-weight: normal;
  }
  .body-top{
    background-color: #F2F2F2;
  }

  .body-top-jinrongg{
    text-align: center;
  }
  .body-top-jinrong a{
    color: #0C0C00;
    /*line-height: 32px;*/
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

  .body-top-jinrong{
    /*color: #0C0C00;*/
    line-height: 32px;
  }

  .body-top-gengduo{
    float: right;
  }
  .body-top-gengduo a{
    color: #0C0C00;
  }
  .body-top-guanggao-tp img{
    width: 100%;
  }
  .body-top-guanggao{
    padding: 32px 6px;
    background-color: white;
    border: 1px solid #DCDCDC;
  }
  .body-qiyecaigou img{
    width: 100%;
  }
  .body-top-right{
    margin-left: 15px;
    padding: 0 19px;
    background-color: white;
    border:1px solid #DCDCDC;
  }










































  .custom-slick-arrow:hover{
    color: #3C9CFF;
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
  .ant-carousel >>> .slick-slide {
    text-align: center;
    background: white;
    overflow: hidden;
    /*color: #3C9CFF;*/
  }
  .ant-carousel >>> .custom-slick-arrow:hover {
    opacity: 0.5;
  }
  .ant-carousel >>> .slick-slide  h3 {
    color: #fff;
  }
  .custom-slick-arrow:hover{
    color: #3C9CFF;
  }
</style>
<style>

  /*.body-top-jinrong{*/
    /*display: block;*/
  /*}*/
  @media screen and (max-width: 700px){
    .body-top-jinrong{
      display: none;
    }
  }
  @media screen and (max-width: 1200px){
    .body-top-guanggao{
      display: none;
    }
    .body-top-guanggao{
      display: none;
    }

  }
</style>