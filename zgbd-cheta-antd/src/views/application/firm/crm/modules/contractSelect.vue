<template>
    <div class="dati">
      <!--筛选-->
      <div class="screen">
        <div class="screenLeft">
          <span class="screenLeftText">合同管理</span>
        </div>
        <div class="screenMiddle">
          <div class="middleType">
            <span class="text">合同类型</span>
            <a-select defaultValue="lucy" style="width: 120px" @change="contractType">
              <a-select-option value="jack">Jack</a-select-option>
              <a-select-option value="lucy">Lucy</a-select-option>
              <a-select-option value="disabled" disabled>Disabled</a-select-option>
              <a-select-option value="Yiminghe">yiminghe</a-select-option>
            </a-select>
          </div>
          <div class="middleState">
            <span class="text">合同状态</span>
            <a-select defaultValue="lucy" style="width: 120px" @change="contractState">
              <a-select-option value="jack">Jack</a-select-option>
              <a-select-option value="lucy">Lucy</a-select-option>
              <a-select-option value="disabled" disabled>Disabled</a-select-option>
              <a-select-option value="Yiminghe">yiminghe</a-select-option>
            </a-select>
          </div>
          <div class="middleDate">
            <span class="text">合同日期</span>
              <a-date-picker
                style="width:120px"
                :disabledDate="disabledStartDate"
                showTime
                format="YYYY-MM-DD"
                v-model="startValue"
                placeholder="开始日期"
                @openChange="handleStartOpenChange"
              />
            <span class="middleDateSection">-</span>
              <a-date-picker
                style="width:120px"
                :disabledDate="disabledEndDate"
                showTime
                format="YYYY-MM-DD"
                placeholder="结束日期"
                v-model="endValue"
                :open="endOpen"
                @openChange="handleEndOpenChange"
              />
          </div>
          <!--搜索-->
          <div class="middleSearch">
            <span class="middleSearchInput"><a-input-search placeholder="关键字" style="width: 180px" @search="onSearch" /></span>
            <span class="middleSearchSelect"><a-button type="primary">查询</a-button></span>
            <span class="middleSearchAdd"><a-button type="primary" @click="AddContract">新增合同</a-button></span>
          </div>
        </div>
        <div class="screenRight">
          <span class="screenRightExport"><a-button type="primary">导出报表</a-button></span>
          <span class="screenRightCustom"><a-button><a-icon type="align-left" />自定义列表</a-button></span>
        </div>

      </div>



    </div>
</template>

<script>
  export default {
    name: 'contractList',
    data(){
      return {
        startValue: null,
        endValue: null,
        endOpen: false,
      };
    },
    watch: {
      startValue(val) {
        console.log('startValue', val);
      },
      endValue(val) {
        console.log('endValue', val);
      },
    },
    methods: {
      contractType(value) {
        console.log(`selected ${value}`);
      },
      contractState(value) {
        console.log(`selected ${value}`);
      },
      disabledStartDate(startValue) {
        const endValue = this.endValue;
        if (!startValue || !endValue) {
          return false;
        }
        return startValue.valueOf() > endValue.valueOf();
      },
      disabledEndDate(endValue) {
        const startValue = this.startValue;
        if (!endValue || !startValue) {
          return false;
        }
        return startValue.valueOf() >= endValue.valueOf();
      },
      handleStartOpenChange(open) {
        if (!open) {
          this.endOpen = true;
        }
      },
      handleEndOpenChange(open) {
        this.endOpen = open;
      },
      AddContract(){//新增合同页面跳转
        this.$router.push({path:'/xinzenghetong'})
      },
    },
  }
</script>

<style scoped>
  .dati{
    padding-bottom: 15px;
  }
  .middleType,.middleState,.middleDate,.middleSearch{
    display: inline-block;
    margin: 0 10px;
  }
  .screenLeft,.screenMiddle,.screenRight{
    display: inline-block;
  }
  .middleSearchInput,.middleSearchSelect,.middleSearchAdd,.screenRightExport{
    margin: 0 5px;
  }
  .screenMiddle{
    margin-left: 34px;
  }
  .screenRightCustom{
    margin-left: 5px;
  }
  .screenRight{
    float: right;
  }
  .text{
    margin-right: 8px;
    font-size:14px;
    font-family:Microsoft YaHei;
    font-weight:400;
    color:rgba(102,102,102,1);
  }
  .middleDateSection{
    font-family:Microsoft YaHei;
    font-weight:400;
    color:rgba(102,102,102,1);
    margin: 0 2px;
  }
  .screenLeftText{
    font-size:18px;
    font-family:Microsoft YaHei;
    font-weight:400;
    color:rgba(51,51,51,1);
  }


</style>