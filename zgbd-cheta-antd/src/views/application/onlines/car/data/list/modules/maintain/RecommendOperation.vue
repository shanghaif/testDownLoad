<template>
  <div>
    <a-button id="id1" type="link" @click="addPlan"><span id="ok">已</span>加入计划</a-button>
    <a-divider  type="vertical" />
    <span >延迟保养</span>
  </div>
</template>

<script>
  export default {
    name: 'RecommendOperation',
    props: {
      record: {
        type: Object,
        default: () => {}
      },
    },
    methods:{
      // 点击变成灰色 按钮不可点击
      addPlan(){
        document.getElementById('id1').style.color = '#999999';
        document.getElementById('id1').disabled = 'false';
        document.getElementById('ok').style.visibility = 'visible';

      }
    }

  }
</script>

<style scoped>
  #ok{
    visibility: hidden;
  }
</style>