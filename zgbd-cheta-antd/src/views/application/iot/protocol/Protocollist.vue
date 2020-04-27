<template>
  <a-card :bordered="false">
  <div>
    <a-button @click="handleAdd" type="primary" >新增</a-button>
    <a-table :columns="columns" :dataSource="data" class="components-table-demo-nested">
      <a slot="operation" href="javascript:;">关联场景</a>
      <a-table
        slot="expandedRowRender"
        slot-scope="record"
        :columns="innerColumns"
        :dataSource="record.innerData"
        :pagination="false"
        :rowSelection="rowSelection"
      >
        <!--<a-button slot="oper" @click.="handlePro" type="primary">协议解析</a-button>-->
        <span slot="oper" slot-scope="text, record">
          <a-button slot="oper" @click="handlePro(record)" data-v-2bfceb7a="" type="primary" class="ant-btn ant-btn-primary ant-btn-sm">
            <span data-v-2bfceb7a="" style="font-size: 12px;">协议解析</span>
          </a-button>
        </span>

        <span slot="action" slot-scope="text, record">
          <a @click="handleEdit(record)">编辑</a>
          <a-divider type="vertical" />
          <a-popconfirm title="确定删除吗?" @confirm="() => handleDelete(record.id)">
            <a>删除</a>
          </a-popconfirm>
        </span>

      </a-table>
    </a-table>

    <protocol-list-modal title="协议解析" :visible="visible" @ok="handleOk"  @cancel="handleCancel" ref="protocollistmodal">
    </protocol-list-modal>

    <analysis-list-modal title="添加协议" :visible="visible" @ok="handleOk"  @cancel="handleCancel" ref="analysislistmodal">
    </analysis-list-modal>

  </div>
  </a-card>

</template>
<script>
  import ProtocolListModal from './modules/ProtocolListModal'
  import AnalysisListModal from './modules/AnalysisListModal'
  import {getAction, deleteAction, postAction} from '@/api/manage'

  const columns = [
    { title: '协议名', dataIndex: 'name', key: 'name' },
    { title: '产品名', dataIndex: 'productName', key: 'productName' },
    { title: '创建时间', dataIndex: 'createTime', key: 'createTime' },
    { title: '操作', key: 'operation', scopedSlots: { customRender: 'operation' } },
  ];

  const innerColumns = [
    { title: '名称', dataIndex: 'name', key: 'name' },
    { title: '传输方式', dataIndex: 'type', key: 'type' },
    { title: '数据格式', dataIndex: 'format', key: 'format' },
    { title: '唯一前缀（适合16进制）', dataIndex: 'prefix', key: 'prefix' },
    { title: '创建时间', dataIndex: 'createTime', key: 'createTime' },
    { title: 'js代码',dataIndex:'oper', key: 'oper', scopedSlots: { customRender: 'oper' } },
    { title: '操作', dataIndex: 'action', key: 'action', scopedSlots: { customRender: 'action' },}
  ];
  
  const data=[];


  export default {
    name: 'Protocollist',
    components: {
      ProtocolListModal,
      AnalysisListModal
    },
    data() {
      return {
        data,
        columns,
        innerColumns: innerColumns,
      }
    },
    created() {
      this.loadData();
    },
    methods: {
      handleAdd(){
        this.$refs.analysislistmodal.add();
        this.$refs.analysislistmodal.title="新增";
      },

      loadData (){
        //this.spinning = true;

        this.data = [];
        getAction('/application/protocol/getProtocolView', '').then((res) => {
          if (res.success) {
            this.data = res.result;
          }

        })
      },

      handlePro: function(record){
        this.$refs.protocollistmodal.edit(record);
        this.$refs.protocollistmodal.title="协议解析";
      },

      handleEdit: function(record){
        this.$refs.analysislistmodal.edit(record);
        this.$refs.analysislistmodal.title="编辑";
      },

      handleDelete(id){
        var that = this;

        deleteAction('/application/protocol/deleteAnalysis', { id:id}).then((res) => {
          if(res.success){
            that.$message.success(res.message);
            that.loadData();
          }else{
            that.$message.warning(res.message);
          }
        });
      },

      handleOk (e) {
        console.log(e)
        this.visible = false;
        // 新增/修改 成功时，重载列表
        this.loadData();
      }
    }
  }
</script>