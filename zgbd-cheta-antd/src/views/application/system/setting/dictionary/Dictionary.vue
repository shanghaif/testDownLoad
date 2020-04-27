<template>
  <a-card :bordered="false">
    <div style="background-color: #ececec; padding: 20px;">
      <a-row :gutter="16">
        <a-col :span="10">
          <a-card title="字典列表" :bordered=false>
            <a-button @click="handleAdd()" type="primary" icon="plus" style="margin-bottom: 10px;">新增</a-button>
            <c-table
              ref="dtable"
              :customRow = "clickrow"
              :columns="columns"
              url="/dictionary/getPage"
            >
              <span slot="action" slot-scope="text, record">
                <a @click="handleEdit(record)">编辑</a>
                <a-divider type="vertical"/>
                <a-popconfirm title="确定删除吗?" @confirm="() => handleDelete(record.id)">
                  <a>删除</a>
                </a-popconfirm>
              </span>
            </c-table>
          </a-card>
        </a-col>
        <a-col :span="14">
          <a-card title="字典项" :bordered=false>
            <a-button @click="addChildren(param.dictionaryId)" type="primary" icon="plus" style="margin-bottom: 10px;">新增</a-button>
            <c-table
              ref="itable"
              :columns="detailsColumns"
              url="/dictionaryitems/getPage"
              :param="param"
             >
              <span slot="action" slot-scope="text, record">
                <a @click="editChildren(record)">编辑</a>
                <a-divider type="vertical"/>

                <a-popconfirm title="确定删除吗?" @confirm="() => delChildren(record.id)">
                  <a>删除</a>
                </a-popconfirm>
              </span>
            </c-table>
          </a-card>
        </a-col>
      </a-row>
    </div>

    <!-- 表单区域 -->
    <DictionaryModal ref="DictionaryModal" @ok="modalFormOk"></DictionaryModal>

    <DictionaryItemsModal ref="DictionaryItemsModal" @ok="imodalFormOk"></DictionaryItemsModal>
  </a-card>
</template>

<script>
  import DictionaryModal from './modules/DictionaryModal'
  import DictionaryItemsModal from './modules/DictionaryItemsModal'
  import {deleteAction, getAction} from '@/api/manage'
  import CTable from '@/views/chetaui/table.js';

  const columns = [
    { title: '标题', dataIndex: 'title', key: 'title' , width : '150px'},
    { title: '备注', dataIndex: 'description', key: 'description',width : '250px'},
    { title: '操作', dataIndex: 'action', key: 'action', scopedSlots: {customRender: 'action'}}
  ];

  const detailsColumns = [
    { title: '标题', dataIndex: 'itemName', key: 'itemName' , width : '300px'},
    { title: '系统代码', dataIndex: 'systemCode', key: 'systemCode',width : '350px'},
    /*{ title: '排序', dataIndex: 'orderNo', key: 'orderNo',width : '150px'},
    { title: '级别', dataIndex: 'level', key: 'level',width : '150px'},*/
    { title: '操作', dataIndex: 'action', key: 'action', scopedSlots: {customRender: 'action'}}
  ];

  export default {
    data() {
      return {
        columns,
        detailsColumns,
        param: {
          dictionaryId : '',
          title: ''
        }
      }
    },
    created(){

    },
    components: {
      DictionaryModal,DictionaryItemsModal,CTable,
    },
    methods: {
      loadDatad: function(){
        const that = this;
        that.$refs.dtable.getData();
      },
      loadDatai: function(){
        const that = this;
        that.$refs.itable.getData();
      },

      handleDelete: function(id){
        deleteAction('/dictionary/del', {id: id}).then((res) => {
          if(res.success && res.result == '1') {
            this.$message.success(res.message);
            //this.loadData();
            this.loadDatad();
          }
        });
      },
      handleEdit: function (record) {
        this.$refs.DictionaryModal.edit(record);
        this.$refs.DictionaryModal.title = "编辑";
      },
      handleAdd: function () {
        this.$refs.DictionaryModal.add();
        this.$refs.DictionaryModal.title = "新增";
      },
      addChildren: function(dictionaryId){
        this.$refs.DictionaryItemsModal.add(dictionaryId);
        this.$refs.DictionaryItemsModal.title = "新增";
      },
      editChildren: function (record) {
        this.$refs.DictionaryItemsModal.edit(record);
        this.$refs.DictionaryItemsModal.title = "编辑";
      },
      delChildren: function(id){
        deleteAction('/dictionaryitems/del', {id: id}).then((res) => {
          if(res.success && res.result == '1') {
            this.$message.success(res.message);
            //this.loadData();
            this.loadDatai();
          }
        });
      },
      modalFormOk() {
        // 新增/修改 成功时，重载字典列表
        this.loadDatad();
      },
      imodalFormOk() {
        // 新增/修改 成功时，重载字典项列表
        this.loadDatai();
      },
      clickrow (record,index) {
       var that = this;
        return {
          on: { // 事件
            click: () => {
              that.param.dictionaryId = record.id;
              //that.$refs.itable.getData();
              this.loadDatai();
            },
          },
        }
      }
    }
  }
</script>