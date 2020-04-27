<template>

  <div class="body-body-up-">
    <div class="body-top">
    <a-row>
      <a-col  :xl="4" :lg="2" :md="1" :sm="0" :xs="0"></a-col>
      <a-col  :xl="16" :lg="20" :md="22" :sm="24" :xs="24">
      <a-col :span="24">
        <div class="body-body-up-shang">
          <a-row>
            <a-col :xl="4" :lg="6" :md="12" :xs="12">
              <div class="body-body-up-top"><h3>{{config[0].top.leftTitle}}</h3></div>
            </a-col>
            <a-col :xl="16" :lg="12">
              <div class="body-body-up-bt">
                <a href="#">{{config[0].topRight.one}}</a>
                <span>/</span>
                <a href="#">{{config[0].topRight.two}}</a>
                <span>/</span>
                <a href="#">{{config[0].topRight.three}}</a>
                <span>/</span>
                <a href="#">{{config[0].topRight.four}}</a>
              </div>

            </a-col>
            <a-col :xl="4" :lg="6" :md="12" :xs="12">
              <!--<div class="body-body-right-huan">-->
              <!--<a-icon type="sync" />-->
              <div class="body-top-caigou-gengduo"><a href="#">{{config[0].top.rightTitle}}</a></div>
              <!--</div>-->
            </a-col>
          </a-row>
        </div>
      </a-col>
          <a-row>
                <a-col :span="8" v-for="item in config[0].center">
                  <!--下面的样式 body-body-o-->
                  <!--:style="'margin-right: '+ (index == 0 ? 14 : 0)+'px;margin: 0 '+(index == 1 ? 7 : 0)+'px;margin-left:'+(index == 2 ? 14 : 0)+'px'"-->
                  <div class="body-body- " :style="'margin: '+(index == 1 || 2 || 0 ? 10 : 0)+'px;'">
                    <a-row>
                      <a-col :span="24">
                        <div class="body-body-zbtp"><img :src="item.imgUrl"  alt=""></div>
                      </a-col>
                      <div class="body-zzfw">
                        <a-row>
                          <a-col :span="24">
                            <div  class="body-body-zbbt"><a href="#">{{item.title}}</a></div>
                          </a-col>
                          <a-col :span="24">
                            <div class="body-body-zbmk">
                              <a-row>
                                <a-col :xl="18" :lg="18" :md="24" :sm="24" :xs="24">
                                  <div class="body-body-zbz">
                                    <img src="@/assets/index/touxiang.png" alt="">
                                    <span><a href="#"> {{item.one}}</a></span>
                                    <span>·</span>
                                    <span><a href="#">{{item.two}}</a></span>
                                    <span>·</span>
                                    <span><a href="#">{{item.three}}</a></span>
                                    <span>·</span>
                                    <span><a href="#">{{item.four}}</a></span>
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
                <a-col :span="6" v-for="item in config[0].footer">
                  <div class="body-body-up-shuzi">
                    <span>{{item.number}}</span>
                    <p><a href="#">{{item.value}}</a> </p>
                  </div>
                </a-col>
          </a-row>
      </a-col>
      <a-col  :xl="4" :lg="2" :md="1" :sm="0" :xs="0"></a-col>
    </a-row>
  </div>
  </div>
</template>

<script>
  export default {
    name: 'TopBodyBodySonThree',
    props: {
      config: {
        type: Array,
        default: () => []
      },
    }
  }
</script>

<style scoped>

</style>
<style>
  .body-top{
    background-color: #f2f2f2;
  }
  @media screen and (max-width: 1100px){
    .body-body-zbs{
      display: none;
    }

  }
  .body-body-zbbt,.body-body-zbmk{
    background: white;
    /*padding: 20px;*/
    text-overflow:ellipsis;
    overflow: hidden;
    white-space: nowrap;
    cursor: default;

  }
  .body-body-zbbt{
    padding-top: 20px;
    padding-left: 20px;
    font-weight: 700;
    font-size: 20px;
    line-height: 28px;
    color: #333;
  }
  .body-body-up- a{
    color: #333;
  }
  .body-body-up-{
    padding : 20px 0;
    background-color: #f2f2f2;
  }
  .body-body-up-shang {
    padding: 10px 0;
  }
  .body-body-up-top{
    font-size: 24px;
    color: #333;
    line-height: 32px;
    font-weight: 700;
  }
  .body-body-up-bt a:hover{
    color: #3C9CFF;
  }
  /*.body-body-up-bt{
    display: none;
  }*/
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
  .body-body-:hover .body-body-zbtp{
    opacity: 0.8;
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
  .body-body-zbtp img{
    width: 100%;
  }


  .body-body-zbmk{
    padding: 5px 0 20px 20px;
  }
  .body-body-zbz a:hover{
    color: #3C9CFF;
  }
  .body-body-zbz{
    text-overflow:ellipsis;
    overflow: hidden;
    white-space: nowrap;
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
  .body-body-up-shuzi{
    cursor: default;
    text-align: center;
    padding: 20px 0;
    margin-top: 40px;
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



































</style>