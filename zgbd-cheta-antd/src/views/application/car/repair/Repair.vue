<!--eslint-disable-->
<template>
  <div class="repair">
    <authButton :name="'REPART_ADD_BETA'">
        <a-button type="primary" @click="add">新增</a-button>
    </authButton>
    <authButton :name="'REPAIRE_QUERY'">
      <a-spin :spinning="spinning">
      <a-table :columns="columns" :dataSource="data" :pagination="pagination" @change="handleTableChange"
               :expandRowByClick="true">
        <div slot="expandedRowRender" slot-scope="record">
          <div slot="expandIcon">
            <Audit :flow="flow" :record="record" @getData="getData"></Audit>
          </div>
        </div>
        <div slot="status" slot-scope="text" style="min-width: 120px;">
          <a-badge :status="flow[text].style" :text="flow[text].desc"/>
        </div>
      </a-table>
    </a-spin>
    </authButton>
    <RepairEdit ref="repairEdit" :data="data" @getData="getData"></RepairEdit>
  </div>
</template>

<script>
  // 表格数据
  const columns = [
    {title: '工单号', key: 'id', dataIndex: 'id',width:'30%',filedKey:'  REPAIRE_WORKORDER'},
    {title: '车牌号', key: 'vehicleText', dataIndex: 'vehicleText',width:'20%',filedKey:'REPAIRE_CARNUM'},
    {title: '创建时间', key: 'createTime', dataIndex: 'createTime',width:'25%',filedKey:'REPAIRE_CREATETIME'},
    {title: '状态', key: 'status', dataIndex: 'status',width:'25%', scopedSlots: {customRender: 'status'},filedKey:'REPAIRE_STATUS'},
  ];

  let flow = {
    'APPLY': {current: 0, key: 'APPLY', desc: '申请', style: 'processing'},
    'REVIEW_REJECT': {current: 0, key: 'REVIEW_REJECT', desc: '审核驳回', style: 'error'},
    'REVIEW_APPROVE': {current: 1, key: 'REVIEW_APPROVE', desc: '审核通过', style: 'success'},
    'OFFER': {current: 2, key: 'OFFER', desc: '报价', style: 'processing'},
    'OFFER_REJECT': {current: 2, key: 'OFFER_REJECT', desc: '报价驳回', style: 'error'},
    'OFFER_APPROVE': {current: 3, key: 'OFFER_APPROVE', desc: '报价通过', style: 'success'},

    "OA_WRITE": {current: 2, key: 'OA_WRITE', desc: 'OA填写', style: 'processing'},
    "OA_REVIEW": {current: 2, key: 'OA_REVIEW', desc: 'OA审核', style: 'processing'},
    'OA_REJECT': {current: 2, key: 'OA_REJECT', desc: 'OA驳回', style: 'error'},
    'OA_APPROVE': {current: 3, key: 'OA_APPROVE', desc: 'OA通过', style: 'success'},
    'VALIDATE':{current: 3, key: 'VALIDATE', desc: '开始验车', style: 'success'},
    'VALIDATE_REJECT':{current: 3, key: 'VALIDATE_REJECT', desc: '验车驳回', style: 'success'},
    'FINISH': {current: 4, key: 'FINISH', desc: '验车完成', style: 'success'},
  }
  import {mixinDevice} from '@/utils/mixin.js'
  import RepairEdit from './modules/RepairEdit'
  import Audit from './modules/Audit'
  import {getAction} from '@/api/manage'
  import authButton from '@views/result/authButton'
  import filed from '@views/result/filed'
  export default {
    name: 'Repair',
    components: {Audit, RepairEdit,authButton},
    props: {
      data: {
        type: Array,
        default: () => []
      },
      flow: {
        type: Object,
        default: () => flow
      },

    },
    created() {
      this.getData();
    },
    mixins: [mixinDevice,filed],
    data() {
      return {
        columns: this.filedValue(columns),
        pagination: {
          current: 1,
          pageSize: 10,
          total: 0
        },
        spinning: true,
      }
    },
    methods: {
      add() {
        this.$refs.repairEdit.add();

      },
      getData(isclear) {
        let that = this;
        that.spinning = true;
        if (isclear) {
          this.data = [];
        }
        getAction('/application/car/repair/getData', {
          pageNo: this.pagination.current,
          pageSize: this.pagination.pageSize
        }).then(res => {
          const pagination = {...this.pagination};
          this.data = res.data
          pagination.total = res.count;
          this.pagination = pagination;
          this.spinning = false;
        });
      },
      handleTableChange(pagination) {
        const pager = {...this.pagination};
        pager.current = pagination.current;
        this.pagination = pager;
        this.getData();
      },
    }
  }
</script>

<style lang="scss" scoped>
  /*.ant-table-row-expand-icon-cell{*/
    /*display: none;*/
  /*}*/

</style>
