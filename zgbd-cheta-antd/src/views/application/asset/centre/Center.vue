<template>
  <div>
    <a-row>
      <!--头部上边筛选-->
      <a-col style="padding-bottom: 10px; margin: 15px 10px 25px 10px; display: flex;justify-content: space-between;border-bottom: #666666 1px dashed">
        <p style="font-size: 25px">资产总览</p>
        <a>
          <a-select labelInValue placeholder="请选择" :defaultValue="请选择" style="width: 180px;" @change="handleChange">
            <a-select-option value="jack">云平台服务器</a-select-option>
            <a-select-option value="lucy">XXX公司</a-select-option>
            <a-select-option value="lucy">AAA机构</a-select-option>
          </a-select>
        </a>
      </a-col>
      <!--资产总数-->
      <a-col :lg="12" :sm="24">
        <Center11 ref="Center11"></Center11>
      </a-col>
      <!--资产风险-->
      <a-col :lg="12" :sm="24" style="margin-top: 15px">
        <Center12 ref="Center12"></Center12>
      </a-col>

      <!--第二行-->
      <!--资产总数-->
      <a-col :lg="12" :sm="24" style="margin-top: 30px">
        <a style="margin: 30px 0px;">单位资产总体情况</a>
        <Center21 ref="Center21"></Center21>

      </a-col>
      <!--单位业务-->
      <a-col :lg="12" :sm="24" style="margin-top: 30px;">
        <a style="margin: 30px 0px;">单位业务系统等级保护情况</a>
        <Center22 ref="Center22"></Center22>
      </a-col>
      <a-col :span="24" style="margin-top: 30px;">
        <a style="margin: 60px 0px;padding-bottom: 10px">单位资产国产化率情况</a>
        <Center31 ref="Center31"></Center31>
      </a-col>
    </a-row>

  </div>
</template>

<script>
  import Center11 from './modules/CenterOneOne'
  import Center12 from './modules/CenterOneTwo'
  import Center21 from './modules/CenterTwoOne'
  import Center22 from './modules/CenterTwoTwo'
  import Center31 from './modules/CenterThreeOne'
  export default {

    components: {
      Center11,
      Center12,
      Center21,
      Center22,
      Center31,
    },
    name: 'Center',

    methods: {
      handleButtonClick(e) {
        console.log('click left button', e);
      },
      handleMenuClick(e) {
        console.log('click', e);
      },
    }
  }
</script>

<style scoped>

</style>