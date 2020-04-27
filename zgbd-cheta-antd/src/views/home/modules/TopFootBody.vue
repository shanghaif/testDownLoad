<template>
  <div class="up-up">
    <a-row>
      <!--上-->
      <a-col  :xl="4" :lg="4" :md="2" :sm="0" :xs="0"></a-col>
      <a-col  :xl="16" :lg="16" :md="20" :sm="24" :xs="24">
        <a-row>
          <a-col :span="24">
            <div class="up-guangzhou">
              <a href="#">{{config[0].copyright}}</a>
            </div>
          </a-col>
          <a-col :xl="5" :lg="5" :md="5" :sm="8" :xs="8" v-for="item in config[0].about">
            <div class="up-yuefeng">
              <a href="#"><span>{{item.title}}</span></a>
              <a href="#"><p>{{item.one}}</p></a>
              <a href="#"><p>{{item.two}}</p></a>
              <a href="#"><p>{{item.three}}</p></a>
              <a href="#"><p>{{item.four}}</p></a>
            </div>

          </a-col>
          <!--<a-col :xl="5" :lg="5" :md="5" :sm="8" :xs="8">
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
          </a-col>-->
          <a-col :xl="5" :lg="5" :md="5" :sm="12" :xs="12">
            <div class="up-yuefeng">
              <a href="#"><span>{{config[0].contact.title}}</span></a>
              <a href="#"><p>{{config[0].contact.phone}}</p></a>
              <a href="#"><p>{{config[0].contact.email}}</p></a>
              <a href="#"><p>{{config[0].contact.address}}<br/>{{config[0].contact.address2}}</p></a>
              <!--<a href="#"><p>XXXXX</p></a>-->
            </div>
          </a-col>
          <a-col :xl="4" :lg="4" :md="4" :sm="12" :xs="12">
            <div class="up-yuefeng">
              <span><img :src="config[0].contact.account.accountImg" alt=""></span>
              <a href="#"><p>{{config[0].contact.account.title}}</p></a>
            </div>
          </a-col>
        </a-row>
      </a-col>
      <a-col  :xl="4" :lg="4" :md="2" :sm="0" :xs="0"></a-col>

    </a-row>
  </div>
</template>

<script>
  export default {
    name: 'TopFootBody',
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







































</style>