<template>
  <div style="padding: 20px">
    <h3 :style="{ marginBottom: '16px' }">最新推出</h3>
    <a-list
      bordered
      :dataSource="data"
    >
      <a-list-item slot="renderItem" slot-scope="item, index">{{item}}</a-list-item>
      <div slot="header">Header</div>
      <div slot="footer">Footer</div>
    </a-list>
  </div>
</template>
<script>
  const data = [
    'Racing car sprays burning fuel into crowd.',
    'Japanese princess to wed commoner.',
    'Los Angeles battles huge wildfires.',
  ]

  export default {
    data () {
      return {
        data,
      }
    },
  }
</script>
<style>

</style>
