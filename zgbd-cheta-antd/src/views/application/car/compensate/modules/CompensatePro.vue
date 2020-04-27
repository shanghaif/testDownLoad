<template>
 <div class="whole">
    <a-row>
      <a-col span="24">
          车牌号：<a-input-search
          placeholder="请输入车牌号"
          style="width: 200px"
          @search="onSearch"
        />
        <div class="from">
          <a-table :columns="columns" :dataSource="data"  style="margin: 0px">
            <a slot="action" slot-scope="text" href="javascript:;">action</a>
            <div slot="addressNine" slot-scope="text">
              <div v-if="text==='审批中'">
                <a-badge status="success" text="审批中"/>
              </div>
            </div>
          </a-table>
        </div>
          <!--<a-button>理赔查询报案</a-button>
          <a-button type="primary"  icon="plus">理赔登记</a-button>-->
      </a-col>
    </a-row>
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
    addressOne: '粤ADU375',
    addressTwo: '粤ADU145',
    addressThree: 'XXXXXXX',
    addressFour: '6年',
    addressFive: '2019-07-05',
    addressSix: '吕晓萍',
    addressSeven: 'XXXXXXXX',
    addressNine: '审批中',
  }, {
    key: '2',
    name: '2',
    addressOne: '粤ADU572',
    addressTwo: '粤ADU145',
    addressThree: 'XXXXXXX',
    addressFour: '2年',
    addressFive: '2019-07-05',
    addressSix: '吕晓萍',
    addressSeven: 'XXXXXXXX',
    addressNine: '审批中',
  }, {
    key: '3',
    name: '3',
    addressOne: '粤ADU355',
    addressTwo: '粤ADU145',
    addressThree: 'XXXXXXX',
    addressFour: '5年',
    addressFive: '2019-07-05',
    addressSix: '吕晓萍',
    addressSeven: 'XXXXXXXX',
    addressNine: '审批中',
  }, {
    key: '2',
    name: '2',
    addressOne: '粤ADU255',
    addressTwo: '粤ADU145',
    addressThree: 'XXXXXXX',
    addressFour: '6年',
    addressFive: '2019-07-05',
    addressSix: '吕晓萍',
    addressSeven: 'XXXXXXXX',
    addressNine: '审批中',
  }];

  export default {
      name: "CompensatePro",
      methods: {
        onSearch (value) {
          console.log(value)
        }
      },
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
  .increase{
    margin: 20px;
  }
  .from{
    padding: 0px;
    margin-top: 30px;
  }
</style>

