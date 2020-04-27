<template>
  <a-table :columns="columns" :dataSource="data" :scroll="{ x: 1300 }" class="up-right">
    <a slot="action" slot-scope="text" href="javascript:;">action</a>
  </a-table>
</template>
<script>
  const columns = [
    { title: '车辆排名', dataIndex: 'addressOne', key: '1' },
    { title: '车辆资产', dataIndex: 'addressTwo', key: '2' },
    { title: '车辆盈利', dataIndex: 'addressThree', key: '3' },
    { title: '车辆耗资', dataIndex: 'addressFour', key: '4' },

  ];

  const data = [{
    key: '1',
    addressOne: '1',
    addressTwo: '6,455',
    addressThree: '5,345',
    addressFour: '￥564',
  }, {
    key: '2',
    addressOne: '2',
    addressTwo: '6,675',
    addressThree: '6,566',
    addressFour: '￥643',
  },{
    key: '3',
    addressOne: '3',
    addressTwo: '7,454',
    addressThree: '4,334',
    addressFour: '￥234',
  },{
    key: '5',
    addressOne: '5',
    addressTwo: '2,564',
    addressThree: '4,786',
    addressFour: '￥424',
  },{
    key: '6',
    addressOne: '6',
    addressTwo: '2,564',
    addressThree: '4,786',
    addressFour: '￥424',
  },];


  export default {
    data() {
      return {
        data,
        columns,
      }
    }
  }
</script>

<style>
  .up-right{
    padding-left: 20px;
  }
</style>