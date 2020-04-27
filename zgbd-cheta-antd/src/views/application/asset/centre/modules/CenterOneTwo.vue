<template>
  <div>
    <h3 :style="{ marginBottom: '16px' }">资产风险动态</h3>
    <a-list
      bordered
      :dataSource="data"
    >
      <a-list-item slot="renderItem" slot-scope="item, index">{{item}}</a-list-item>
    </a-list>

  </div>
</template>
<script>
  const data = [
    '业务资产最新推送',
    '业务资产最新调配结果',
    '安全设备',
    '固定资产',
    '智慧管理',
  ]

  export default {
    data () {
      return {
        data,
      }
    },
  }
</script>

