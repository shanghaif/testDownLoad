<template>
  <a-table :columns="columns" :dataSource="data">
    <a slot="car" slot-scope="text" href="javascript:;">{{text}}</a>
    <span slot="customTitle">序号</span>
    <span slot="tags" slot-scope="tags"  v-for="tag in tags"  :key="tag"> {{tag}}</span>
    <span slot="action">
      <a href="javascript:;">审批中</a>
      <a href="#" class="edit">编辑</a>
    </span>
  </a-table>
</template>
<script>
  const columns = [{
    dataIndex: 'car',
    key: 'car',
    slots: { title: 'customTitle' },
    scopedSlots: { customRender: 'car' },
  }, {
    title: '车牌号',
    dataIndex: 'age',
    key: 'age',
  }, {
    title: '油卡卡号',
    dataIndex: 'address',
    key: 'address',
  }, {
    title: '加油人',
    key: 'tags1',
    dataIndex: 'tags1',
    scopedSlots: { customRender: 'tags1' },
  }, {
    title: '油品',
    key: 'tags2',
    dataIndex: 'tags2',
    scopedSlots: { customRender: 'tags2' },
  }, {
    title: '数量（L）',
    key: 'tags3',
    dataIndex: 'tags3',
    scopedSlots: { customRender: 'tags3' },
  }, {
    title: '金额',
    key: 'tags4',
    dataIndex: 'tags4',
    scopedSlots: { customRender: 'tags4' },
  }, {
    title: '加油站',
    key: 'tags5',
    dataIndex: 'tags5',
    scopedSlots: { customRender: 'tags5' },
  }, {
    title: '加油时间',
    key: 'tags6',
    dataIndex: 'tags6',
    scopedSlots: { customRender: 'tags6' },
  }, {
    title: '操作',
    key: 'action',
    scopedSlots: { customRender: 'action' },
  }];

  const data = [{
    key: '1',
    car: '1',
    age: '粤AUT582',
    address: '4689368280468937',
    tags1: '刘翔翔',
    tags2: '0号普通柴油',
    tags3: '143.43',
    tags4: '500',
    tags5: '中石化加油站',
    tags6: '2019-08-15 15:29:06',

  }, {
    key: '2',
    car: '2',
    age: '粤AUT582',
    address: '4689368280468937',
    tags1: '刘翔翔',
    tags2: '0号普通柴油',
    tags3: '143.43',
    tags4: '500',
    tags5: '中石化加油站',
    tags6: '2019-08-15 15:29:06',
  }, {
    key: '3',
    car: '3',
    age: '粤AUT582',
    address: '4689368280468937',
    tags1: '刘翔翔',
    tags2: '0号普通柴油',
    tags3: '143.43',
    tags4: '500',
    tags5: '中石化加油站',
    tags6: '2019-08-15 15:29:06',
  }, {
    key: '4',
    car: '4',
    age: '粤AUT582',
    address: '4689368280468937',
    tags1: '刘翔翔',
    tags2: '0号普通柴油',
    tags3: '143.43',
    tags4: '500',
    tags5: '中石化加油站',
    tags6: '2019-08-15 15:29:06',
  }, {
    key: '5',
    car: '5',
    age: '粤AUT582',
    address: '4689368280468937',
    tags1: '刘翔翔',
    tags2: '0号普通柴油',
    tags3: '143.43',
    tags4: '500',
    tags5: '中石化加油站',
    tags6: '2019-08-15 15:29:06',
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
<style>
  .edit{
    color: rgba(0, 0, 0, 0.85);
    margin-left: 10px;
  }
</style>
