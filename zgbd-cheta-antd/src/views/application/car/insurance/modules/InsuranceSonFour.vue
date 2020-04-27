<template>
    <div class="form">
      <a-tabs>
        <a-tab-pane tab="保险登记" key="1"><InsuranceSonFive></InsuranceSonFive></a-tab-pane>
        <a-tab-pane tab="投保申请" key="2"><InsuranceSonFive></InsuranceSonFive></a-tab-pane>
        <a-button class="buttonOne" type="primary" slot="tabBarExtraContent">保险登记</a-button>
        <a-button class="buttonTwo" type="primary"  slot="tabBarExtraContent">投保申请</a-button>
      </a-tabs>
    </div>
</template>

<script>
  import InsuranceSonFive from './InsuranceSonFive'
  export default {
    name: 'InsuranceSonFour',
    components:{
      InsuranceSonFive,
    }
  }
</script>

<style scoped>
.form{
  margin: 10px;
}
  .buttonOne{
    margin: 0 20px;
  }
</style>