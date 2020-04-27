<template>
  <a-table :columns="columns" :dataSource="data" :scroll="{ x: 1300 }">
    <a slot="action" slot-scope="text" href="javascript:;">action</a>
  </a-table>
</template>
<script>
  const columns = [
    { title: '序号', width: 100, dataIndex: 'name', key: 'name', fixed: 'left' },
    { title: '临时车牌号', dataIndex: 'addressOne', key: '1' },
    { title: '正式车牌号', dataIndex: 'addressTwo', key: '2' },
    { title: '车辆所属', dataIndex: 'addressThree', key: '3' },
    { title: '期限', dataIndex: 'addressFour', key: '4' },
    { title: '预计完成时间', dataIndex: 'addressFive', key: '5' },
    { title: '审批人', dataIndex: 'addressSix', key: '6' },
    { title: '备注', dataIndex: 'addressSeven', key: '7' },
    { title: '状态', dataIndex: 'addressnine', key: '8' },
  ];

  const data = [{
    key: '1',
    name: '1',
    addressOne: '粤ADU145',
    addressTwo: '粤ADU145',
    addressThree: 'XXXXXXX',
    addressFour: '2年',
    addressFive: '2019-07-05',
    addressSix: '吕晓萍',
    addressSeven: 'XXXXXXXX',
    addressnine: '审批中',
  }, {
    key: '2',
    name: '2',
    addressOne: '粤ADU145',
    addressTwo: '粤ADU145',
    addressThree: 'XXXXXXX',
    addressFour: '2年',
    addressFive: '2019-07-05',
    addressSix: '吕晓萍',
    addressSeven: 'XXXXXXXX',
    addressnine: '审批中',
  }, {
    key: '3',
    name: '3',
    addressOne: '粤ADU145',
    addressTwo: '粤ADU145',
    addressThree: 'XXXXXXX',
    addressFour: '2年',
    addressFive: '2019-07-05',
    addressSix: '吕晓萍',
    addressSeven: 'XXXXXXXX',
    addressnine: '审批中',
  }, {
    key: '2',
    name: '2',
    addressOne: '粤ADU145',
    addressTwo: '粤ADU145',
    addressThree: 'XXXXXXX',
    addressFour: '2年',
    addressFive: '2019-07-05',
    addressSix: '吕晓萍',
    addressSeven: 'XXXXXXXX',
    addressnine: '审批中',
  }];


  export default {
    data() {
      return {
        data,
        columns,
      }
    }
  }
</script>
