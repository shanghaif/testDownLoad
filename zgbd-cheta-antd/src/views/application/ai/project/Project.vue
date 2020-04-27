




<template>
  <div>
    <a-row>
      <a-col  :xl="6" :lg="24" :md="24" :sm="24" :xs="24">
        <h3>项目XX完成度</h3>
        <a-row>
          <a-col :xl="20" :lg="18" :md="18" :sm="18" :xs="18">
            <Parents1 ref="Parents1"></Parents1>
          </a-col>
          <a-col :xl="4" :lg="4" :md="4" :sm="4" :xs="4">
            <a href="#" style="display: inline-block"><img src="/image/project/huanyihuan.png" style="height: 20px;width: 20px;margin-right: 3px">换一换</a>
          </a-col>
        </a-row>
      </a-col>
      <a-col  :xl="18" :lg="24" :md="24" :sm="24" :xs="24" >
        <h2 style="padding-left: 45px">整体项目进度</h2>
        <h3 style="padding-left: 60px">月/进度</h3>
        <Parents2 ref="Parents2"></Parents2>
      </a-col>
    </a-row>
    <Parents ref="Parents"></Parents>
  </div>

</template>

<script>
  import  Parents2 from './ProjectTwo'
  import  Parents1 from './ProjectOne'
  import Parents from './ProjectThree'
  import ACol from 'ant-design-vue/es/grid/Col'
  import ARow from 'ant-design-vue/es/grid/Row'

  export default {
    components:{ ARow, ACol, Parents,Parents1,Parents2},
    methods:{
      // parent(){
      //   this.$refs.Parents.parentHandleclick();
      // }

    },
    data() {
      return {

      }
    }
  };
</script>

