<template>
  <div>
    <a-row class="card Navigation">
      <a-col :span="24">
        <h3>快捷导航</h3>
      </a-col>
      <a-col :span="6">
        <div class="top-img">
          <a href="#">
          <img src="/image/project/yuangong.png" alt="">
            <p>员工管理<span class="top-top">{{yuangong}}</span></p>
          </a>
        </div>
      </a-col>
      <a-col :span="6">
        <div class="top-img">
          <a href="#">
          <img src="/image/project/tongxun.png" alt="">
            <p>通讯录<span class="top-top">{{tongxun}}</span></p>
          </a>
        </div>
      </a-col>
      <a-col :span="6">
        <div class="top-img">
          <a href="#">
          <img src="/image/project/kaoqin.png" alt="">
            <p>考勤<span class="top-top">{{kaoqin}}</span></p>
          </a>
        </div>
      </a-col>
      <a-col :span="6">
        <div class="top-img">
          <a href="#">
          <img src="/image/project/fuli.png" alt="">
            <p>薪资福利 <span class="top-top">{{xinzi}}</span></p>
          </a>
        </div>
      </a-col>
      <a-col :span="6">
        <div class="top-img">
          <a href="#">
          <img src="/image/project/shenpi.png" alt="">
            <p>审批<span class="top-top">{{shenpi}}</span></p>
          </a>
        </div>
      </a-col>
      <a-col :span="6">
        <div class="top-img">
          <a href="#">
          <img src="/image/project/jiagou.png" alt="">
            <p>组织架构<span class="top-top">{{zhuzi}}</span></p>
          </a>
        </div>
      </a-col>
      <a-col :span="6">
        <div class="top-img">
          <a href="#">
          <img src="/image/project/hetong.png" alt="">
            <p>合同管理<span class="top-top">{{hetong}}</span></p>
          </a>
        </div>
      </a-col>
      <a-col :span="6">
        <div class="top-img">
        <a href="#">
          <img src="/image/project/wancheng.png" alt="">
          <p>完成项目<span class="top-top">{{wancheng}}</span></p>
        </a>
        </div>
      </a-col>
    </a-row>

    <a-row>
      <!--新增+面试-->
      <a-col :xl="7" :lg="7" :md="12" :sm="12" :xs="24" class="card-life">
        <div class="body-left">
          <a-row class="card">
            <a-col :span="24" class="card-botton">
              <div class="card-margin">
                <a-row>
                  <a-col :xl="5" :lg="8" :md="8" :sm="8" :xs="10">
                    <img src="/image/project/logoxinzeng.png" alt="">
                  </a-col>
                  <a-col :xl="19" :lg="16" :md="16" :sm="16" :xs="14">
                    <div>新增员工</div>
                    <div>{{xinzeng}}</div>
                  </a-col>
                </a-row>
              </div>
            </a-col>
            <a-col :span="24">
              <div class="card-margin">
                <a-row>
                  <a-col :xl="5" :lg="8" :md="8" :sm="8" :xs="10">
                    <img src="/image/project/logozonggong.png" alt="">
                  </a-col>
                  <a-col :xl="19" :lg="16" :md="16" :sm="16" :xs="14">
                    <div>总共员工</div>
                    <div>{{zonggong}}</div>
                  </a-col>
                </a-row>
              </div>
            </a-col>
          </a-row>
          <a-row class="card zuo">
            <a-col :span="24" class="card-botton">
              <div class="card-margin">
                <a-row>
                  <a-col :xl="5" :lg="8" :md="8" :sm="8" :xs="10">
                    <img src="/image/project/logomiansi.png" alt="">
                  </a-col>
                  <a-col :xl="19" :lg="16" :md="16" :sm="16" :xs="14">
                    <div>面试人数</div>
                    <div>{{mianshi}}</div>
                  </a-col>
                </a-row>
              </div>
            </a-col>
            <a-col :span="24">
              <div class="card-margin">
                <a-row>
                  <a-col :xl="5" :lg="8" :md="8" :sm="8" :xs="10">
                    <img src="/image/project/logodairuzhi.png" alt="">
                  </a-col>
                  <a-col :xl="19" :lg="16" :md="16" :sm="16" :xs="14">
                    <div>待入职数</div>
                    <div>{{dairuzhi}}</div>
                  </a-col>
                </a-row>
              </div>
            </a-col>
          </a-row>
        </div>
      </a-col>
      <!--员工-->
      <a-col :xl="7" :lg="7" :md="12" :sm="12" :xs="24">
        <div class="card">
          <h3>员工状态</h3>
          <AreaOneSonOne ref="AreaOneSonOne"></AreaOneSonOne>
        </div>
      </a-col>
      <!--费用概览-->
      <a-col :xl="10" :lg="10" :md="24" :sm="24" :xs="24">
        <div class="card">
          <h3>费用概览</h3>
          <AreaOneSonTwo ref="AreaOneSonTwo"></AreaOneSonTwo>
        </div>
      </a-col>
    </a-row>

      <a-row>
        <a-col :xl="16" :lg="16" :md="16" :sm="24" :xs="24" >
          <div class="card">
            <a-row>
              <!--项目列表-->
              <a-col :span="24">
                <h3>项目列表</h3>
              </a-col>
              <a-col :span="24">
                <AreaTwoSonOne ref="AreaTwoSonOne"></AreaTwoSonOne>
              </a-col>
            </a-row>
          </div>
        </a-col>
        <a-col :xl="8" :lg="8" :md="8" :sm="24" :xs="24">
          <div class="card">
            <a-row>
              <!--男女比例-->
              <a-col :span="24" >
                <h3>男女比例</h3>
              </a-col>
              <a-col :span="24">
                <AreaTwoSonTwo ref="AreaTwoSonTwo"></AreaTwoSonTwo>
              </a-col>
            </a-row>
          </div>
        </a-col>
      </a-row>

  </div>
</template>

<script>
  import AreaOneSonOne from './AreaOneSonOne'
  import AreaOneSonTwo from './AreaOneSonTwo'
  import AreaTwoSonOne from './AreaTwoSonOne'
  import AreaTwoSonTwo from './AreaTwoSonTwo'

  export default {
    components:{
      AreaOneSonOne,
      AreaOneSonTwo,
      AreaTwoSonOne,
      AreaTwoSonTwo,

    },
    name: 'AreaOne',
    data() {
      return {
        // 快捷导航
        yuangong: '0',
        tongxun: '62',
        kaoqin: '36',
        xinzi: '3',
        shenpi: '2',
        zhuzi: '5',
        hetong: '3',
        wancheng: '18',
        // 新增员工
        xinzeng: '64',
        zonggong: '3454',
        mianshi: '54',
        dairuzhi: '14',
      }
    }
  }
</script>

<style scoped>
  h3 {
    float: left;
    margin-left: 20px;
    font-family: 'Arial Negreta', 'Arial Normal', 'Arial';
    font-size: 18px;
  }
  .top-img{
    text-align: center;
  }
  a{
    text-decoration:none;
  }
.top-img img{
  margin: 0 auto;
}
  .card {
    padding: 25px;
    box-shadow: #C4C9CE 1px 1px 5px;
    border-radius: 6px;
    margin: 10px 10px;
  }

  .Navigation {
    text-align: center;
  }

  .card-botton {
    border-bottom: #EEEEEE 1px solid;
  }

  p {
    margin: 10px;
  }

  .card-margin {
    margin: 21px 0px;
  }

  .body-left span {
    margin-left: 8px;
  }
  .zuo{
margin-top: 20px;
  }
  .top-top{
    color: orangered;
  }
  a{
    color: black;
  }
</style>