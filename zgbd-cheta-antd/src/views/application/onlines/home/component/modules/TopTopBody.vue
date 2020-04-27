<template>
  <div style="height: 40px">
    <a-col :span="24" class="zuixin">
      <div>
        <a-row>
          <a-col :xl="4" :lg="3" :md="18" :sm="18" :xs="18">
            <!--@click="()=>visible=!visible"-->

            <a><div class="jingxuan wenzi " @click="changeShow()" >{{config[0].leftTitle}}</div></a>
          </a-col>
          <a-col :xl="18" :lg="21" :md="6" :sm="6" :xs="6">

            <div class="zuixinn">
              <a-dropdown>
                <a class="ant-dropdown-link" href="#">
                  <img src="@/assets/index/gengduo.png" alt="">
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
              <a href="#" v-for="item in config[0].top">
               <div class="huodong" >{{item.value}}</div>
              </a>
            </div>
          </a-col>
        </a-row>
      </div>
    </a-col>
<div>
    <div class="tanxing-datii">
      <div class="tanxing-dati" :style="{visibility:visible? 'visible': 'hidden'}">
        <a-row>
          <!--大的-->
          <!--第一个-->
         <a-col :span="24" v-for="item in config[0].bodyLeft">
           <!--小的-->
            <div :class="item.title.xiaodeClazz">
              <a-row>
                <a-col :span="24">
                  <div class="tanxing"> <a href="#">{{item.title.top}} </a><span class="tanxing-you"><a-icon type="right" /></span></div>
                </a-col>
                <a-col>
                  <div class="erji">
                    <a href="#"><span class="yunfuwu">{{item.title.left}}</span></a>
                    <a href="#"><span class="yunfuwuu">{{item.title.right}}</span></a>
                  </div>
                </a-col>
              </a-row>

            </div>

          </a-col>
          <!--第二个
          <a-col :span="24">
            &lt;!&ndash;小的&ndash;&gt;
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
                    &lt;!&ndash;<a href="#"><span class="yunfuwu">技术服务</span></a>&ndash;&gt;
                    <a href="#"><span class="yunfuwuu">Redis</span></a>
                  </div>
                </a-col>
              </a-row>
            </div>
          </a-col>
          &lt;!&ndash;第三个&ndash;&gt;
          <a-col :span="24">
            &lt;!&ndash;小的&ndash;&gt;
            <div class="xiaode xiaodethree">
              <a-row>
                <a-col :span="24">
                  <div class="tanxing"> <a href="#">技术服务 </a><span class="tanxing-you"><a-icon type="right" /></span></div>
                </a-col>
                <a-col>
                  <div class="erji">
                    <a href="#"><span class="yunfuwu">行业定制</span></a>
                    <a href="#"><span class="yunfuwuu">技术服务</span></a>
                    &lt;!&ndash;<a href="#"><span class="yunfuwuu">云虚拟主机</span></a>&ndash;&gt;
                  </div>
                </a-col>
              </a-row>
            </div>
          </a-col>
          &lt;!&ndash;第四个&ndash;&gt;
          <a-col :span="24">
            &lt;!&ndash;小的&ndash;&gt;
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
          &lt;!&ndash;第五个&ndash;&gt;
          <a-col :span="24">
            &lt;!&ndash;小的&ndash;&gt;
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
          &lt;!&ndash;第六个&ndash;&gt;
          <a-col :span="24">
            &lt;!&ndash;小的&ndash;&gt;
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
          </a-col>-->
          <!--按钮-->
          <a-col :span="24">
            <div class="cha">
              <a-button class="chakan">查看全部</a-button>
            </div>
          </a-col>
        </a-row>
      </div>
      <div class="dade-dade">
        <div :class="item.title.dadeeClazz" v-for="item in config[0].bodyLeft">
          <a-row>
            <a-col span="12">
              <h3>{{item.second.allProduct}}  </h3>
              <div><a href="#">{{item.second.children1}}</a></div>
              <div><a href="#">{{item.second.children2}}</a></div>
              <div><a href="#">{{item.second.children3}}</a></div>
              <div><a href="#">{{item.second.children4}}</a></div>
              <div><a href="#">{{item.second.children5}}</a></div>
              <div><a href="#">{{item.second.children6}}</a></div>
              <div><a href="#">{{item.second.children7}}</a></div>
              <div><a href="#">{{item.second.children8}}</a></div>
              <div><a href="#">{{item.second.children9}}</a></div>
              <div><a href="#">{{item.second.children10}}</a></div>
              <div><a href="#">{{item.second.children11}}</a></div>
              <div><a href="#">{{item.second.children12}}</a></div>

              <!--<h3>全部产品</h3>
              <div><a href="#">众车联1</a></div>
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
              <div><a href="#">邮箱</a></div>-->
            </a-col>
            <a-col span="12">
              <h3>{{item.second.entry}}</h3>
              <div class="erjicaidan-tu">
                <img src="@/assets/index/erjicaidantu.png" alt="">
              </div>
            </a-col>
          </a-row>
        </div>
        <!--<div class="dadeetwo">
          <a-row>
            <a-col span="12">
              <h3>全部产品</h3>
              <div><a href="#">大数据2</a></div>
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
                <img src="@/assets/index/erjicaidantu.png" alt="">
              </div>
            </a-col>
          </a-row>
        </div>
        <div class="dadeethree">
          <a-row>
            <a-col span="12">
              <h3>全部产品</h3>
              <div><a href="#">智慧管车3</a></div>
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
                <img src="@/assets/index/erjicaidantu.png" alt="">
              </div>
            </a-col>
          </a-row>
        </div>
        <div class="dadeefour">
          <a-row>
            <a-col span="12">
              <h3>全部产品</h3>

              <div><a href="#">众车联4</a></div>
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
                <img src="@/assets/index/erjicaidantu.png" alt="">
              </div>
            </a-col>
          </a-row>
        </div>
        <div class="dadeefive">
          <a-row>
            <a-col span="12">
              <h3>全部产品</h3>
              <div><a href="#">技术服务5</a></div>
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
                <img src="@/assets/index/erjicaidantu.png" alt="">
              </div>
            </a-col>
          </a-row>
        </div>
        <div class="dadeesix">
          <a-row>
            <a-col span="12">
              <h3>全部产品</h3>
              <div><a href="#">行业新闻6</a></div>
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
                <img src="@/assets/index/erjicaidantu.png" alt="">
              </div>
            </a-col>
          </a-row>
        </div>-->
      </div>
    </div>
</div>
    </div>
</template>

<script>
  // import $ from 'jquery'
  export default {
    name: 'TopTopBody',
    props: {
      config: {
        type: Array,
        default: () => []
      },
    },
    data(){
      return {
        visible: true
      }
    },
    /*created () {
      debugger;
    },*/
    methods:{
      changeShow(){
        // debugger
        this.visible=!this.visible
        // debugger
      }
    },
  }
  $(document).ready(function() {

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

  })
</script>

<style scoped>
  .erji a:hover .yunfuwuu {
    color: #3C9CFF;
  }
  .erji a:hover .yunfuwu{
    color: #3C9CFF;
  }
  .erji a:hover .yunfuwu{
    color: #3C9CFF;
  }
  .erji a:hover .yunfuwuu {
    color: #3C9CFF;
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
  .xiaode:hover .tanxing a{
    color: #3C9CFF;
  }
  .huodong:hover{
    background-color: #3C9CFF;
    color: white;
  }
  .xiaode:hover .tanxing{
    color: #3C9CFF;
  }
  .dade-dade a:hover,.body-top-jinrong a:hover,.body-top-gengduo a:hover,.body-body-resou:hover a,.body-up a:hover,.body-zhong-wenzi:hover a,.body-top-caigou-gengduo a:hover{
    color: #3C9CFF;
  }
  .dade-dade:hover .dade-dade{
    display: block;
  }
  .huodong {
    font-size: 16px;
    color: #666666;
    display: inline-block;
    padding: 0 22px;
    line-height: 40px;
    text-align: center;
  }
  .dadeeone a,.dadeetwo a,.dadeethree a,.dadeefour a,.dadeefive a,.dadeesix a{
    padding: 10px 10px;
    color: #9C9C9C;
  }
  .dadeeone,.dadeetwo,.dadeethree,.dadeefour,.dadeefive,.dadeesix{
    display: none;
    padding: 10px 15px;
    z-index: 5;
    position: absolute;
    left: 255px;
    top: 42px;
    width: 390px;
    height: 645px;
    background-color: white;
    color: dimgray;
    box-shadow: 0 0 15px 0 rgba(0,0,0,.1);
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

  a{
    text-decoration: none;
  }
  .cha {
    text-align: center;
    margin: 10px 0 15px 0;
    border-color: #F4F4F4;
  }
  .erjicaidan-tu img{
    display: block;
    width: 100%;
  }
  .chakan {
    width: 180px;
    line-height: 40px;
    height: 40px;
    text-align: center;
  }
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
  .xiaode {
    border-bottom: 1px solid #F4F4F4;
  }
  .top-right a, xiaode a, .top-right-up a,.top-right-upp a{
    color: #9C9C9C;
  }
  .wenzi {
    background-color: #3C9CFF;
    color: white !important;
  }
  .zuixin {
    border-bottom: 2px solid #3C9CFF;
    height: 42px;
  }

  .ant-dropdown-link{
    float: right;

  }
  .ant-dropdown-link img{
    width: 28px;
    height: 28px;
    margin: 5px 15px;
  }
  .zuixinnn{
    line-height: 39px;
    margin-left: 110px;
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
  .tanxing {
    float: left;
    margin: 10px 10px 10px 25px;
    color: #4D5250;
    font-size: 16px;
  }
  .tanxing a{
    color: #4D5250;
  }
  .tanxing-you {
    left: 10px;
  }

  .erji {
    padding: 15px;
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
  .dade-dade{
    position: relative;
    /*margin-top: -55px;*/
  }














</style>
<style>
  .zuixinn{
    display: none;
  }
  @media screen and (max-width: 767px){
    .tanxing-dati {
      margin-top: 55px;
    }
  }
  @media screen and (max-width: 1000px){
    .zuixinnn{
      display: none;
    }
    .zuixinn{
      display: block;
    }
  }

</style>