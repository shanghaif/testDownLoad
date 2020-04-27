<template>
  <a-form>
    <a-form-item>
      车牌号码：<a-input placeholder="请输入车牌号码" style="width: 30%;margin-right: 2rem"/>
      车辆归属：<a-input placeholder="请输入车辆归属" style="width: 30%"/>

    </a-form-item>
    <a-form-item>
    报废原因：<a-select
    v-decorator="['gender',
          {rules: [{ required: true, message: '请输入报废原因' }]}
        ]"
    placeholder="请输入报废原因"
    style="width: 30%;margin-right: 2rem"
    @change="handleSelectChange"
  >
    <a-select-option value="1">
      车漏油
    </a-select-option>
    <a-select-option value="2">
      老款车
    </a-select-option>
    </a-select>
      办理时间：<a-date-picker @change="onChange" style="width: 30%" placeholder="请输入办理时间"/>
    </a-form-item>
    <a-form-item>
      经&nbsp;办&nbsp;人：<a-input placeholder="请输入经办人名称" style="width: 30%;margin-right: 3rem"/>
      联系电话：<a-input placeholder="请输入经办人电话" style="width: 30%"/>
    </a-form-item>
    <a-form-item>
      审&nbsp;核&nbsp;人：<a-input placeholder="请输入车牌号码" style="width: 30%;margin-right: 3rem"/>
      抄&nbsp;送&nbsp;人：<a-input placeholder="请输入车辆归属" style="width: 30%"/>
    </a-form-item>
    <a-form-item>
      报废说明：<a-textarea placeholder="请输入报废情况说明" :rows="3"/>
    </a-form-item>
  </a-form>
</template>

<script>


</script>

<style scoped>

</style>