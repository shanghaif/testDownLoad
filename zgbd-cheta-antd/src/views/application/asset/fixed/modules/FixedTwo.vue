<template>
    <div>
      <a-row>
        <a-col :span="24">
          <h3>财年分析 <a-select defaultValue="lucy" style="width: 120px"  class="top-har" @change="handleChange">
            <a-select-option value="jack">Jack</a-select-option>
            <a-select-option value="lucy">Lucy</a-select-option>
            <a-select-option value="disabled" disabled>Disabled</a-select-option>
            <a-select-option value="Yiminghe">yiminghe</a-select-option>
          </a-select></h3>
        </a-col>
        <a-col :xl="6" :lg="6" :md="6" :sm="12" :xs="12" class="body-body">
        <p>本财年月增长率（%）</p>
        <span>1.88</span>
        </a-col>
        <a-col :xl="6" :lg="6" :md="6" :sm="12" :xs="12" class="body-body">
          <p>本财年月增长率（%）</p>
          <span>1.88</span>
        </a-col>
        <a-col :xl="6" :lg="6" :md="6" :sm="12" :xs="12" class="body-body">
          <p>本财年月增长率（%）</p>
          <span>1.88</span>
        </a-col>
        <a-col :xl="6" :lg="6" :md="6" :sm="12" :xs="12" class="body-body">
          <p>本财年月增长率（%）</p>
          <span>1.88</span>
        </a-col>
        <a-col :span="24" class="up-up">
          <FixedTwoSon ref="FixedTwoSon"></FixedTwoSon>
        </a-col>
      </a-row>
    </div>
</template>

<script>
  import FixedTwoSon from './FixedTwoSon'
  export default {
    name: 'FixedTwo',
    components:{
      FixedTwoSon,
    },
      methods: {
        handleChange(value) {
          console.log(`selected ${value}`);
        }
    }
  }
</script>

<style scoped>
  h3{
    border-bottom: 1px solid #F4F3F3;
    padding: 10px 0px;
    margin: 15px 0px;
  }
  .body-body{
    text-align: center;
  }
  .body-body span{
    font-family: 'Arial Negreta', 'Arial Normal', 'Arial';
    font-size: 38px;
    color: #333333;
  }
  .body-body p{
    font-size: 16px;
    margin: 10px 0px;
  }
  .up-up{
    margin-top: 35px;
  }
  .top-har{
    float: right;
    margin: -10px 0px;
  }
</style>