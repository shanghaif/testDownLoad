<template>
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
              <!--qqq-->
              <!--<div>-->
              <div>
                <div class="body-up">
                  <span class="body-hdiandian"></span><h4><a href="#"> {{config[0].title1}}</a></h4>
                  <div class="body-up-yc"><span class="body-ldiandian"></span><a href="#"> {{config[0].text11}}</a></div>
                  <div class="body-up-yc"><span class="body-ldiandian"></span><a href="#"> {{config[0].text22}}</a></div>
                  <div class="body-up-yc"><span class="body-ldiandian"></span><a href="#"> {{config[0].text33}}</a></div>
                  <div class="body-up-yc"><span class="body-ldiandian"></span><a href="#"> {{config[0].text44}}</a></div>
                </div>
                <div class="body-up">
                  <span class="body-hdiandian"></span><h4><a href="#">{{config[0].title2}}</a></h4>
                  <div class="body-up-yc"><span class="body-ldiandian"></span><a href="#"> {{config[0].text55}}</a></div>
                  <div class="body-up-yc"><span class="body-ldiandian"></span><a href="#"> {{config[0].text66}}</a></div>
                  <div class="body-up-yc"><span class="body-ldiandian"></span><a href="#"> {{config[0].text77}}</a></div>
                  <div class="body-up-yc"><span class="body-ldiandian"></span><a href="#"> {{config[0].text88}}</a></div>
                  <div class="body-up-yc"><span class="body-ldiandian"></span><a href="#"> {{config[0].text99}}</a></div>
                </div>
              </div>
              <!--</div>-->

            </a-col>
            <!--中-->
            <a-col :xl="7" :lg="7" >
              <!--aaa-->
              <div class="body-zhong-jiann" >
                <a-row>
                  <!--标题-->
                  <a-col :span="24">
                    <div class="body-zhong-guoji">
                      {{config[0].title}}
                    </div>
                  </a-col>

                  <a-col :span="24">
                    <div class="body-zhong-zhong">
                      <a-row>
                        <a-col :span="24">
                          <div class="body-zhong-tupian">
                            <img :src="config[0].img1" alt="">
                          </div>
                        </a-col>
                        <a-col :span="24">
                          <div class="body-zhong-o">
                            <p class="body-zhong-wenzi"><a href="#">{{config[0].text1}}</a></p>
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
                              <img :src="config[0].img2" alt="">
                            </div>
                            <div class="body-zhong-s" style="margin-right: 5px;">
                              <p class="body-zhong-wenzi"><a href="#">{{config[0].text2}}</a></p>
                            </div>
                          </div>
                        </a-col>
                        <a-col :span="12">
                          <div class="body-zhong-two">
                            <div class="body-zhong-tupian" style="margin-left: 5px;margin-top: 30px;">
                              <img :src="config[0].img3" alt="">
                            </div>
                            <div class="body-zhong-t" style="margin-left: 5px;">
                              <p class="body-zhong-wenzi"><a href="#">{{config[0].text3}}</a></p>
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
              <!--zzz-->
              <div class="body-zhong-jian">
                <a-row>
                  <a-col :span="24">
                    <div class="body-zhong-guoji">
                      {{config[0].titleOne}}
                    </div>
                  </a-col>
                  <a-col :span="24">
                    <div>
                      <a-row>
                        <a-col :span="12">
                          <div class="body-zhong-three">
                            <div class="body-zhong-tupian" style="margin-right: 5px;">
                              <img :src="config[0].imgOne" alt="">
                            </div>
                            <div class="body-zhong-s body-zhong-ss"  style="margin-right: 5px;">
                              <p class="body-zhong-wenzi"><a href="#">{{config[0].textOne}} </a></p>
                            </div>
                          </div>
                        </a-col>
                        <a-col :span="12">
                          <div class="body-zhong-three">
                            <div class="body-zhong-tupian" style="margin-left: 5px;">
                              <img :src="config[0].imgTwo" alt="">
                            </div>
                            <div class="body-zhong-t body-zhong-tt" style="margin-left: 5px;">
                              <p class="body-zhong-wenzi"><a href="#">{{config[0].textTwo}} </a></p>
                            </div>
                          </div>
                        </a-col>




                      </a-row>
                    </div>
                  </a-col>
                  <a-col :span="24">
                    <div class="body-zhong-guoji">
                      {{config[0].titleTwo}}
                    </div>
                  </a-col>
                  <!--热搜-->
                  <a-col :span="24">
                    <div>
                      <a-row>
                        <a-col :span="12">
                          <div class="body-body-resou"><a href="#"><span class="body-body-hong">1</span>{{config[0].textThree}}</a> </div>
                          <div class="body-body-resou"><a href="#"><span class="body-body-hong">2</span>{{config[0].textFour}}</a> </div>
                          <div class="body-body-resou"><a href="#"><span class="body-body-hong">3</span>{{config[0].textFive}}</a> </div>
                          <div class="body-body-resou"><a href="#"><span class="body-body-hui">4</span>{{config[0].textSix}}</a> </div>
                          <div class="body-body-resou"><a href="#"><span class="body-body-hui">5</span>{{config[0].textSeven}}</a> </div>
                        </a-col>
                        <a-col :span="12">
                          <div class="body-body-resou"><a href="#"><span class="body-body-hui">6</span></a>{{config[0].textEight}}</div>
                          <div class="body-body-resou"><a href="#"><span class="body-body-hui">7</span></a>{{config[0].textNine}}</div>
                          <div class="body-body-resou"><a href="#"><span class="body-body-hui">8</span></a>{{config[0].textTen}}</div>
                          <div class="body-body-resou"><a href="#"><span class="body-body-hui">9</span></a>{{config[0].textEleven}}</div>
                          <div class="body-body-resou"><a href="#"><span class="body-body-hui">10</span></a>{{config[0].textTwelve}}</div>
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
</template>
<script>

  export default {
  name: 'TopFootTop',
  components:{
  } ,
  data() {
      return {
        indexHead: [],
        // config:[]

      }
    },
    props: {
      config: {
        type: Array,
        default: () => []
      },
    },
    created() {}
  }
</script>

<style>
  .body-body-body{
    margin: 40px 0;
  }
  .body-up a:hover{
    color: #3C9CFF;
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
  .body-up{
    margin-right: 40px;

  }
  .body-ldiandian{
    height: 3px;
    width: 3px;
    background-color: blue;
    display: inline-block;
    margin-right: 15px;
  }

  .body-up-yc{
    font-size: 16px;
    color: black;
    line-height: 32px;
    text-overflow:ellipsis;
    overflow: hidden;
    white-space: nowrap;
    transition: all .2s linear;
  }
  .body-hdiandian{
    height: 5px;
    width: 5px;
    background-color: red;
    display: inline-block;
  }
  .body-up-life-top{
    border-bottom: 1px solid #e0e4e7;
  }
  .body-up-life-top h3{
    padding: 10px 0;
  }
  h3{
    margin: 0;
    padding: 0;
    color: #000;
    font-size: 22px;
    font-weight: 400;
  }
  .body-zhong-jiann{
    cursor: default;
    margin-right: 10px;
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
  .body-zhong-one:hover .body-zhong-tupian,.body-zhong-two:hover .body-zhong-tupian,.body-zhong-three:hover .body-zhong-tupian,.body-zhong-four:hover .body-zhong-tupian{
    opacity: 0.8;
    /*box-shadow: 1px 1px 6px red ;*/
  }
  .body-body-right:hover,.body-body-:hover,.body-zhong-zhong:hover,.body-zhong-one:hover,.body-zhong-two:hover,.body-zhong-three:hover,.body-zhong-four:hover{
    box-shadow: 1px 1px 6px #D6D6D6 ;
  }

  .body-zhong-zhong{
    cursor: pointer;
  }
  .body-zhong-tupian img{
    width: 100%;
  }
  .body-zhong-o p,.body-zhong-s p,.body-zhong-t p{
    padding: 0 10px;
  }
  .body-zhong-s,.body-zhong-t,.body-zhong-o{
    margin-bottom: 10px;
  }
  .body-zhong-s p,.body-zhong-t,.body-zhong-o p{
    margin: 0px;
    background:#F2F2F5;
  }
  .body-zhong-wenzi:hover a{
    color: #3C9CFF;
  }
  .body-zhong-wenzi{
    font-size: 16px;
    color: black;
    line-height: 32px;
    text-overflow:ellipsis;
    overflow: hidden;
    white-space: nowrap;
    transition: all .2s linear;
  }
  .body-zhong-tt{
    /*float: right;*/
    margin: 0px;
    margin-bottom: 15px;
  }
  .body-body-dibu a{
    color: black;
  }
  @media screen and (max-width: 1000px){
    .body-zhong-jiann{
      display: none;
    }
  }
  .body-zhong-jian{
    cursor: default;
    margin-left: 10px;
  }
  .body-zhong-jian p{
    padding: 0 10px;
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

  .body-body-resou:hover a{
    color: #3C9CFF;
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





  @media screen and (max-width: 1000px){
    .body-zhong-jiann{
      display: none;
    }
  }













</style>





