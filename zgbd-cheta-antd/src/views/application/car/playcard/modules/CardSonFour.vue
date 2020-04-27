<template>
  <div style="padding: 0px">
    <div style="display: inline-block;width: 100%;padding: 8px 0 16px 0;">
      <!--搜索框-->
      <a-input-search placeholder="请输入要搜索的关键词" style="width: 200px" @search="onSearch" />
      <!--按钮-->
      <a-button type="primary"  style="margin: 0px 10px;float: right"  @click="showModal()">车牌登记</a-button>
      <a-modal v-model="visible" @ok="hideModal" width="800px"  cancelText="关闭" okText="提交">
        <!--第一行-->
        <a-form :form="form">
          <a-row>
            <CardDaughter ref="CardDaughter"></CardDaughter>
          </a-row>
        </a-form>

      </a-modal>

      <!--<a-button slot="tabBarExtraContent" style="margin: 0px 10px;" class="cheta-color">正式牌登记</a-button>-->

    </div>
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
  </div>
</template>
<script>
  import CardDaughter from './CardDaughter'
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
      CardDaughter,
    },
  }
</script>

