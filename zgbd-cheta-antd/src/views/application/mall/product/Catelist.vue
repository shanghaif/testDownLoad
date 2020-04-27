<template>
  <a-table :columns="columns" :dataSource="data" :rowSelection="rowSelection"></a-table>
</template>

<script>
  const columns = [{
    title: '描述',
    dataIndex: 'description',
    key: 'description',
  }, {
    title: '排序',
    dataIndex: 'sort_no',
    key: 'sort_no',
  },
    {
      title: '操作',
      dataIndex: 'action',
      scopedSlots: { customRender: 'action' },
      fixed:"right",
      align:"center",
      width:150
    }];


  export default {
    components: {},
    data() {
      return {
        data,
        columns,
      }
    },
    created() {
      this.loadData();
    },
    methods: {
      loadData() {
        this.data = [];
        this.spinning = true;
        getCategoryList({ pageSize: 10, pageNo: 1 }).then((res) => {
          if (res.success) {
            this.data = res.result;
            this.spinning = false;
          }
        })
      },
    }
  }

</script>

<style scoped>
</style>