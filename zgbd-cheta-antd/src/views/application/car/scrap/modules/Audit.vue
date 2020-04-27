<template>
  <div style="margin: 3rem 0rem; ">
    <div style="width: 80%; margin: auto;">
      <a-steps style="margin: 1rem" progressDot :current="1"  status="process">
        <a-step title="申请" description="" />
        <a-step title="审核" description="" />
        <a-step title="完成" description="" />
      </a-steps>
      <p style="margin:1rem 1rem">审核申请</p>
      <div style="margin-left: 1rem;border: 1px solid;background-color: #ffffff">
        <a-row style="margin: 0.5rem 1rem">
          <a-col :span="6">车牌号码：粤AC871</a-col>
          <a-col :span="6">报废原因：车爆胎</a-col>
          <a-col :span="6">办理时间：2019-08-08</a-col>
          <a-col :span="6">报废情况说明：报废车辆</a-col>
        </a-row>
        <a-row style="margin: 0.5rem 1rem">
          <a-col :span="6">车辆所属：车先生</a-col>
          <a-col :span="6">经办人：小龙女</a-col>
          <a-col :span="6">联系电话：12433123</a-col>
          <a-col :span="6">审核人：小龙女</a-col>
        </a-row>
        <a-row style="margin: 0.5rem 1rem">
          <a-col :span="6">抄送人：小龙女</a-col>
        </a-row>
        <a-button style="margin: 0.5rem 1rem" type="primary">提交审核</a-button>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'Audit',
    props: {
      record: {
        type: Array,
        default: () => []
      },
      flow: {
        type: Object,
        default: () => []
      }
    },
  }
</script>
