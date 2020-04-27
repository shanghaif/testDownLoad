<template>
  <div  style="padding-left: 8px; padding-right: 8px;">
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
                            <a-col :span="12"><h3>{{config[0].leftTitle}}</h3></a-col>
                            <a-col :span="12"><div class="body-top-caigou-gengduo"><a href="#">{{config[0].rightTitle}}</a></div></a-col>
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
                                      <span>{{config[0].labelOne}} <a-icon type="right" /> </span>
                                    </div>
                                  </a-col>
                                  <a-col :span="24">
                                    <div>
                                      <a-row>
                                        <!--左-->
                                        <a-col :span="16">
                                          <div class="body-body-dati">
                                            <div class="body-body-dingyue">{{config[0].labelTwo}}</div>
                                            <div  class="body-body-quanwu">{{config[0].theme}}</div>
                                            <div>
                                              <span  class="body-body-zhenni">{{config[0].themeTitle}}</span>
                                              <span   class="body-body-zhennid">·</span>
                                              <span class="body-body-zhenni">{{config[0].themeText}}</span>
                                              <span class="body-body-liji"><a href="#"> {{config[0].themeButton}}</a></span> </div>
                                          </div>
                                        </a-col>
                                        <!--右-->
                                        <a-col :span="8">
                                          <div class="body-body-haokan">
                                            <img :src="config[0].imgOne" alt="">
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
                                            <p class="body-body-riqio" >{{config[0].dateOne}}</p>
                                            <span  class="body-body-riqic">{{config[0].timeOne}}</span>
                                          </div>
                                        </a-col>
                                        <!--右边-->
                                        <a-col :span="18">
                                          <div  class="body-body-dy">
                                            <p class="body-body-riqio">{{config[0].titleOne}}</p>
                                            <div class="body-body-riqit">{{config[0].textOne}}</div>
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
                                            <p class="body-body-riqio" >{{config[0].dateTwo}}</p>
                                            <span  class="body-body-riqic">{{config[0].timeTwo}}</span>
                                          </div>
                                        </a-col>
                                        <!--右边-->
                                        <a-col :span="18">
                                          <div  class="body-body-dy">
                                            <p class="body-body-riqio">{{config[0].titleTwo}}</p>
                                            <div class="body-body-riqit">{{config[0].textTwo}}</div>
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
                                            <p class="body-body-riqio" >{{config[0].dateThree}}</p>
                                            <span  class="body-body-riqic">{{config[0].timeThree}}</span>
                                          </div>
                                        </a-col>
                                        <!--右边-->
                                        <a-col :span="18">
                                          <div  class="body-body-dy">
                                            <p class="body-body-riqio">{{config[0].titleThree}}</p>
                                            <div class="body-body-riqit"> {{config[0].textThree}}</div>
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
                                            <p class="body-body-riqio" >{{config[0].dateFour}}</p>
                                            <span  class="body-body-riqic">{{config[0].timeFour}}</span>
                                          </div>
                                        </a-col>
                                        <!--右边-->
                                        <a-col :span="18">
                                          <div  class="body-body-dy">
                                            <p class="body-body-riqio">{{config[0].titleFour}}</p>
                                            <div class="body-body-riqit">{{config[0].textFour}}</div>
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
                                            <p class="body-body-riqio" >{{config[0].dateFive}}</p>
                                            <span  class="body-body-riqic">{{config[0].timeFive}}</span>
                                          </div>
                                        </a-col>
                                        <!--右边-->
                                        <a-col :span="18">
                                          <div  class="body-body-dy">
                                            <p class="body-body-riqio">{{config[0].titleFive}}</p>
                                            <div class="body-body-riqit">{{config[0].textFive}}</div>
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
                                      {{config[0].title}}
                                    </div>
                                  </a-col>
                                  <div class="body-body-right-zso">
                                    <a-row>

                                      <a-col :span="16">
                                        <div class="body-body-right-wz">
                                          <span class="body-body-right-jiban">{{config[0].text}}</span>
                                          <span class="body-body-right-gang">|</span>
                                          <span class="body-body-right-jiage">{{config[0].number}}</span>
                                        </div>

                                      </a-col>
                                      <a-col :span="8">
                                        <div class="body-body-right-shuliang"><span>{{config[0].price}}</span></div>
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
                              <TopBodyFootSonThree ref="TopBodyFootSonThree"></TopBodyFootSonThree>
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
  </div>
</template>

<script>
  import TopBodyFootSonThree from './subcomponents/TopBodyFootSonThree'

  export default {
    name: 'TopBodyBody',
    components:{
      TopBodyFootSonThree,

    },
    props: {
      config: {
        type: Array,
        default: () => []
      },
    }
  }
    $(document).ready(function() {
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

<style scoped>
  .body-top{
    background-color: #f2f2f2;
  }
  .body-body-dati{
    position: relative;
    cursor: default;
    left: 22px;
    top: 80px;
  }
  .body-body-zhibo span {
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


</style>
<style>
  @media screen and (max-width: 1000px){

  }
  .body-body-dt{
    cursor: default;
    background-image: url('~@/assets/index/bodyditu.png');
    background-size: 100%;
    margin-right: 20px;
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

  .body-body-liji:hover{
    background: rgba(0,0,0,.24);
    border:1px  solid #fff;
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
  .body-body-r{
    background: rgba(0,0,0,.24);
    cursor: default;
  }
  .body-body-zhong{
    padding: 9px 0;
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
  .body-body-riqi{
    text-align: center;
  }
  .body-body-dy{
    flex: 1 1;
    flex-direction: column;
    overflow: hidden;
    margin-left: 7px;
    padding-bottom: 10px;
    border-bottom: 1px solid hsla(0,0%,100%,.1);
  }
  @media (min-width: 768px){

  }
  .body-top-jinron{
    padding: 10px 0;
  }


  @media screen and (max-width: 1000px){
    .body-body-right{
      display: none;
    }
  }
  .body-body-right:hover{
    opacity: 0.8;
  }
  .body-body-right:hover,yle>{
    box-shadow: 1px 1px 6px #D6D6D6 ;
  }
  .body-body-right{
    background-image: url('~@/assets/index/chetufour.png');
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

</style>