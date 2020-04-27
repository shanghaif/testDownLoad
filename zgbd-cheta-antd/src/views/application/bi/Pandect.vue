<template>
  <div>
    <a-row>
      <!--头部显示卡-->
      <div>
        <a-col :lg="6" :sm="12" :xs="24">
          <div class="cheta-bg" style="opacity: 0.7;color: white;border-radius: 3px;box-shadow:1px 1px 5px #556774;padding: 20px ;margin:20px 40px">
            <p>应收总额</p>
            <p>应收总额</p>
            <span style="font-size: 18px">$26,123,235</span>
          </div>
        </a-col>
        <a-col :lg="6" :sm="12" :xs="24">
          <div class="cheta-bg" style="opacity: 0.7;color: white;border-radius: 3px;box-shadow:1px 1px 5px #556774;padding: 20px ;margin:20px 40px">
            <p>应收总额</p>
            <p>应收总额</p>
            <span style="font-size: 18px">$26,123,235</span>
          </div>
        </a-col>
        <a-col :lg="6" :sm="12" :xs="24">
          <div class="cheta-bg" style="opacity: 0.7;color: white;border-radius: 3px;box-shadow:1px 1px 5px #556774;padding: 20px ;margin:20px 40px">
            <p>应收总额</p>
            <p>应收总额</p>
            <span style="font-size: 18px">$26,123,235</span>
          </div>
        </a-col>
        <a-col :lg="6" :sm="12" :xs="24">
          <div class="cheta-bg" style="opacity: 0.7;color: white;border-radius: 3px;box-shadow:1px 1px 5px #556774;padding: 20px ;margin:20px 40px ">
            <p>应收总额</p>
            <p>应收总额</p>
            <span style="font-size: 18px">$26,123,235</span>
          </div>
        </a-col>
      </div>
      <!--下边-->
      <!--小导航-->
      <a-col :span="24">
        <div style="padding-left: 40px;font-family: 微软雅黑">公司整体运营分析</div>
      </a-col>
      <!--第一行卡片-->
      <a-col :lg="8" :sm="24" :xs="24">
        <!--第一个-->
        <a-row>
          <div style="padding: 20px 10px;margin: 40px;box-shadow:1px 1px 5px #CDD3D6;border-radius: 3px">
            <a-col :span="24">
              <div style="display: flex;justify-content:space-between">
                <img src="/image/project/add.png" alt="" style="height: 25px;width: 25px;">
                <span style="font-size: 18px">销售情况</span>
                <img src="/image/project/some.png" alt="" style="height: 25px;width: 25px;">
              </div>
            </a-col>
            <a-col>
              <Pandect1 ref="Pandect1"></Pandect1>
            </a-col>
          </div>
        </a-row>

      </a-col>
      <a-col :lg="8" :sm="24" :xs="24">
        <!--第二个-->
        <a-row>
          <div style="padding: 20px 10px;margin: 40px;box-shadow:1px 1px 5px #CDD3D6;border-radius: 3px">
            <a-col :span="24">
              <div style="display: flex;justify-content:space-between">
                <img src="/image/project/add.png" alt="" style="height: 25px;width: 25px;">
                <span style="font-size: 18px">销售情况</span>
                <img src="/image/project/some.png" alt="" style="height: 25px;width: 25px;">
              </div>
            </a-col>
            <a-col>
              <Pandect2 ref="Pandect2"></Pandect2>
            </a-col>
          </div>
        </a-row>

      </a-col>
      <a-col :lg="8" :sm="24" :xs="24">
        <!--第三个-->
        <div style="padding: 20px 10px;margin: 40px;box-shadow:1px 1px 5px #CDD3D6;border-radius: 3px">
          <a-col :span="24">
            <div style="display: flex;justify-content:space-between">
              <img src="/image/project/add.png" alt="" style="height: 25px;width: 25px;">
              <span style="font-size: 18px">销售情况</span>
              <img src="/image/project/some.png" alt="" style="height: 25px;width: 25px;">
            </div>
          </a-col>
          <a-col>
            <Pandect3 ref="Pandect3"></Pandect3>
          </a-col>
        </div>
      </a-col>
    </a-row>

  </div>
</template>

<script>
  import Pandect1 from './PandectOne'
  import Pandect2 from './PandectTwo'
  import Pandect3 from './PandectThree'
  export default {
    name: 'Pandect',
    components: {
      Pandect1,
      Pandect2,
      Pandect3,
    }
  }
</script>

<style scoped>

</style>