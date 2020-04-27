<template>
  <div style="padding: 0px">
    <a-table :columns="columns" :dataSource="data"  style="margin: 0px">
      <a slot="action" slot-scope="text" href="javascript:;">action</a>
      <div slot="addressNine" slot-scope="text">
        <div v-if="text==='审批中'">
          <a-badge status="success" text="审批中"/>
        </div>
      </div>
    </a-table>
  </div>
</template>

<script>
  const columns = [
    { title: '序号',dataIndex: 'name', key: 'name'},
    { title: '临时车牌号', dataIndex: 'addressOne', key: 'addressOne' },
    { title: '正式车牌号', dataIndex: 'addressTwo', key: 'addressTwo' },
    { title: '车辆所属', dataIndex: 'addressThree', key: 'addressThree' },
    { title: '期限', dataIndex: 'addressFour', key: 'addressFour' },
    { title: '预计完成时间', dataIndex: 'addressFive', key: 'addressFive' },
    { title: '审批人', dataIndex: 'addressSix', key: 'addressSix' },
    { title: '备注', dataIndex: 'addressSeven', key: 'addressSeven' },
    { title: '状态', dataIndex: 'addressNine', key: 'addressNine' ,scopedSlots: {customRender: 'addressNine'}},
  ];
  const data = [{
    key: '1',
    name: '1',
    addressOne: '粤ADU145',
    addressTwo: '粤ADU145',
    addressThree: 'XXXXXXX',
    addressFour: '4年',
    addressFive: '2019-07-05',
    addressSix: '吕晓萍',
    addressSeven: 'XXXXXXXX',
    addressNine: '审批中',
  }, {
    key: '2',
    name: '2',
    addressOne: '粤ADU165',
    addressTwo: '粤ADU145',
    addressThree: 'XXXXXXX',
    addressFour: '5年',
    addressFive: '2019-07-05',
    addressSix: '吕晓萍',
    addressSeven: 'XXXXXXXX',
    addressNine: '审批中',
  }, {
    key: '3',
    name: '3',
    addressOne: '粤ADU142',
    addressTwo: '粤ADU145',
    addressThree: 'XXXXXXX',
    addressFour: '2年',
    addressFive: '2019-07-05',
    addressSix: '吕晓萍',
    addressSeven: 'XXXXXXXX',
    addressNine: '审批中',
  }, {
    key: '2',
    name: '2',
    addressOne: '粤ADU623',
    addressTwo: '粤ADU145',
    addressThree: 'XXXXXXX',
    addressFour: '4年',
    addressFive: '2019-07-05',
    addressSix: '吕晓萍',
    addressSeven: 'XXXXXXXX',
    addressNine: '审批中',
  }];


  export default {

    data() {
      return {
        visible: false,
        data,
        columns,
        // flow: {
        //   'addressnine':{key:'addressnine', desc:'审批中',style:'processing'},
        //
        // }
      }
    },
    methods:{
      onSearch(value) {
        console.log(value)
      },
      showModal() {
        this.visible = true
      },


    },
    components:{
    },
  }
</script>

<style scoped>

</style>