<template>
  <a-form>
    <a-form-item>
      车牌号码：<a-input placeholder="请输入车牌号码" style="width: 30%;margin-right: 2rem"/>
      车辆类型：<a-input placeholder="请输入车辆类型" style="width: 30%"/>
    </a-form-item>
    <a-form-item>
      报废时间：<a-date-picker @change="onChange" style="width: 30%;margin-right: 2rem" placeholder="请输入报废时间"/>
      可否延缓：<a-radio-group name="radioGroup" :defaultValue="1">
        <a-radio :value="1">可</a-radio>
        <a-radio :value="2">否</a-radio>
      </a-radio-group>
    </a-form-item>
  </a-form>
</template>

<script>
    export default {
        name: "UpdateScrap"
    }
</script>

<style scoped>

</style>