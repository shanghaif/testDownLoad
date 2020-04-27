<template>
  <a-row>
    <a-col :span="24">


  <div class="top-top">
    <!--头部-上边-->
    <a-row>

      <!--左边LOGO图-->
      <a-col :xl="4" :lg="5" :md="7" :sm="12" :xs="12">
        <div class="top-life">
          <img :src="config[0].registerlink" alt="">
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
                  <!--{{this.config[0].leftTitle}}-->
                  <a-badge count="3" style="margin-right: 10px;line-height: 40px;" :numberStyle="{minWidth:'11px',height: '11px',padding: '0',fontSize: '5px',borderRadius:'50%',lineHeight:'11px',marginTop:'15px'

                      }">
                    <a-icon type="shopping-cart" style="width: 20px;height: 30px;margin-top:0px;font-size: 20px"/>
                    <!--<img src="./assets/gouwuche.png" style="width: 24px;height: 24px;margin-top: -5px" alt="">-->
                  </a-badge> {{config[0].shopping}}</a>
              </div>
            </a-col>
            <a-col :xl="4" :lg="4" :md="4" :sm="3" :xs="3">
              <div class="top-righttwo"><a href="#"> {{this.config[0].logon}}</a></div>
            </a-col>
            <a-col :xl="4" :lg="5" :md="6" :sm="6" :xs="4">
              <div class="top-rightthree">
                <!--class="wenzi"-->
                <div style="background-color: #3C9CFF">
                  <a href="#" style="color: white"> {{this.config[0].register}}</a>
                </div>
              </div>
            </a-col>
            <a-col :xl="3" :lg="3" :md="3" :sm="3" :xs="3">
              <div class="kongzhitai top-rightfour">
                <a  href="http://console.terrybg.com">  {{this.config[0].console}}</a>
              </div>
            </a-col>
            <a-col :xl="4" :lg="3" :md="4" :sm="5" :xs="5">
              <div class="kongzhitai  kongzhitaii top-rightfive">
                <a  href="#">  {{this.config[0].file}}</a>
              </div>
            </a-col>
          </a-row>
        </div>
      </a-col>

    </a-row>

  </div>
    </a-col>
  </a-row>
</template>

<script>
  export default {
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
    created() {
      console.log(this.config,"iiii")
      // debugger
      // debugger
    }

  }
</script>
<style>
  .top-right a:hover {
    color: #3C9CFF;
  }

  .top-top {
    margin: 20px 0px 10px 0px;
  }

  .top-life {
    text-align: center;
  }

  .top-life img {
    text-align: center;
    height: 40px;
  }

  .top-center input {
    height: 40px;
    line-height: 40px;
  }

  .top-right {
    text-align: center;
    font-size: 15px;
    height: 40px;
    line-height: 40px;
  }

  .top-right a {
    color: #9C9C9C;
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

  .kongzhitaii a {
    border-left: 2px solid #9C9C9C;
    padding: 0 15px;
  }

  @media screen and (max-width: 767px) {
    .top-right {
      margin-top: 15px;
    }
  }
</style>
<style>

  .top-top .ant-input-search.ant-input-search-enter-button > .ant-input {
    -webkit-border-radius: 0 !important;
    -moz-border-radius: 0 !important;
    border-radius: 0 !important;
    /*padding: 0 50px 0 20px;*/
  }

  .top-top .ant-input-search > .ant-input-suffix > .ant-input-search-button {
    -webkit-border-radius: 0 !important;
    -moz-border-radius: 0 !important;
    border-radius: 0 !important;
  }
</style>


<style scoped>
  /*鼠标事件*/
  .top-right a:hover {
    color: #3C9CFF;
  }

  .top-top {
    margin: 20px 0px 10px 0px;
  }

  .top-life {
    text-align: center;
  }

  .top-life img {
    text-align: center;
    height: 40px;
  }

  .top-center input {
    height: 40px;
    line-height: 40px;
  }

  .kongzhitaii a {
    border-left: 2px solid #9C9C9C;
    padding: 0 15px;
  }

  .kongzhitai {
    text-align: center;
  }

  .top-right {
    text-align: center;
    font-size: 15px;
    height: 40px;
    line-height: 40px;
  }

  /*, xiaode a, .top-right-up a,.top-right-upp a*/
  .top-right a {
    color: #9C9C9C;
  }

  a {
    text-decoration: none;
  }


</style>


<style>

  .top-top .ant-input-search.ant-input-search-enter-button > .ant-input {
    -webkit-border-radius: 0 !important;
    -moz-border-radius: 0 !important;
    border-radius: 0 !important;
    /*padding: 0 50px 0 20px;*/
  }

  .top-top .ant-input-search > .ant-input-suffix > .ant-input-search-button {
    -webkit-border-radius: 0 !important;
    -moz-border-radius: 0 !important;
    border-radius: 0 !important;
  }
</style>