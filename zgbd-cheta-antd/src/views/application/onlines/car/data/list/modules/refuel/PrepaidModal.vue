<template>
  <a-modal
    :title="title"
    v-model="editVisible"
    :footer="null"
    :width="widthModal"
  >
    <!--<a-table :columns="columns" :dataSource="dataSource"  size="middle"></a-table>-->
    <c-table ref="ptable" :columns="columns" :url="url">
      <span slot="id" slot-scope="text, record,index">
        {{index+1}}
      </span>
    </c-table>
  </a-modal>
</template>

<script>
  import SerialNumber from '@/views/application/onlines/car/data/list/modules/SerialNumber'
  import CTable from '@/views/chetaui/table.js';

  export default {
    name: 'addModal',
    components:{CTable,SerialNumber},
    data() {
      return {
        title:'加油记录',
        editVisible : false,
        record : {},
        dataSource:[],
        columns:[],
        url: '',
        widthModal : '40%',
        api : {
          refuelGetPage: '/application/car/vehicle/refuel/getPage',
          consumeGetPage: '/application/car/vehicle/consume/getPage',
          oilcardGetPage: '/application/car/vehicle/oilcard/getPage'
        },
        columnPrepaid : [
          { title: '序号', dataIndex: 'id', key: '1' , align:'center', scopedSlots: {customRender: 'id'}},
          { title: '充值时间', dataIndex: 'createTime', key: '2' , align:'center'},
          { title: '充值金额', dataIndex: 'incPrice', key: '3' , align:'center'},
          { title: '操作人', dataIndex: 'createBy', key: '4' , align:'center'},
        ],
        columnRefuel : [
          { title: '序号', dataIndex: 'id', key: '1' , align:'center', scopedSlots: {customRender: 'id'}},
          { title: '时间', dataIndex: 'createTime', key: '2' , align:'center', scopedSlots: {customRender: 'createTime'}},
          { title: '加油站', dataIndex: 'stationName', key: '3' , align:'center', scopedSlots: {customRender: 'stationName'}},
          { title: '油品', dataIndex: 'oilQuality', key: '4' , align:'center', scopedSlots: {customRender: 'oilQuality'}},
          { title: '数量（L）', dataIndex: 'oilCapacity', key: '5' , align:'center', scopedSlots: {customRender: 'oilCapacity'}},
          { title: '金额', dataIndex: 'money', key: '6' , align:'center', scopedSlots: {customRender: 'money'}},
          { title: '管理人', dataIndex: 'agent', key: '7' , align:'center', scopedSlots: {customRender: 'agent'}},
        ]
      }
    },
    methods:{
      showPrepaidModal(record){
        let that = this;
        that.editVisible = true
        that.widthModal = '28%'
        that.title = '充值记录';
        that.columns = that.columnPrepaid;
        that.$nextTick(() => {
          that.$refs.ptable.param = {pageSize:10,pageNo:1,cardNumber:record.cardNumber}
          that.$refs.ptable.url = that.api.consumeGetPage;
          that.$refs.ptable.getData();
        });
      },
      showRefuelModal(record){
        let that = this;
        that.editVisible = true
        that.widthModal = '40%'
        that.title = '加油记录';
        that.columns = that.columnRefuel;
        that.$nextTick(() => {
          that.$refs.ptable.param = {pageSize:10,pageNo:1,cardNumber:record.cardNumber}
          that.$refs.ptable.url = that.api.refuelGetPage;
          that.$refs.ptable.getData();
        });
      },
    }
  }
</script>

<style scoped>

</style>