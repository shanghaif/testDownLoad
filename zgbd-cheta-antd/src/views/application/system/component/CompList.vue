<template>
  <div>
    <a-spin :spinning="spinning">
      <a-button @click="handleAdd" type="primary" >新增</a-button>
      <a-table :columns="columns" :dataSource="data" :rowSelection="rowSelection">
        <span slot="action" slot-scope="text, record">
          <a @click="handleEdit(record)">编辑</a>
          <a-divider type="vertical" />
          <a-dropdown>
            <a class="ant-dropdown-link">
              更多 <a-icon type="down" />
            </a>
            <a-menu slot="overlay">
              <a-menu-item>
                <a href="javascript:;" @click="handleDetail(record)">详情</a>
              </a-menu-item>
              <a-menu-item>
                <a-popconfirm title="确定删除吗?" @confirm="() => handleDelete(record.id)">
                  <a>删除</a>
                </a-popconfirm>
              </a-menu-item>
            </a-menu>
          </a-dropdown>
        </span>
      </a-table>
    </a-spin>
    <comp-modal title="添加组件" :visible="visible" @ok="handleOk" @cancel="handleCancel" ref="compmodal">
    </comp-modal>
  </div>

</template>

<script>
  import { getAction,deleteAction,deleteMall,httpAction } from '@/api/manage'
  import CompModal from './modules/CompModal'
  import CRUDData from '../../util/CRUDData'

  const columns = [{
    title: '序号',
    dataIndex: 'id',
    key: 'id',
    customRender: function (t, r, index) {
      return index + 1;
    }
  },
    {
    title: '组件',
    dataIndex: 'componentName',
    key: 'componentName',
  },
    {
    title: '属性',
    dataIndex: 'attributes',
    key: 'attributes',
    customRender: function (t, r, index) {
      let names = r.names.split(",");
      for(let i = 0;i<names.length;i++){
        names[i] = "【" + names[i] +"】";
      }
      return names;
    }
  },
    {
      title: '操作',
      dataIndex: 'action',
      scopedSlots: { customRender: 'action' },
      fixed:"right",
      align:"center",
      width:150
    }];

  const data = '';
  export default {
    name: "CompList",
    components: {
      //SpecListModal,
      CompModal,
      CRUDData,
    },
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
        getAction('/application/setting/component/getComponent', { pageSize: 10, pageNo: 1 }).then((res) => {
          if (res.success) {
            this.data = res.result;
            this.spinning = false;
          }
        })
      },
      handleAdd(){
        this.$refs.compmodal.add();
        this.$refs.compmodal.title="新增";
      },
      handleEdit: function(record){
        this.$refs.compmodal.edit(record);
        this.$refs.compmodal.title="编辑";
      },
      handleDetail(record){
        this.$refs.compmodal.edit(record);
        this.$refs.compmodal.title="详情";
        this.$refs.compmodal.disableSubmit = true;
      },
      handleDelete(id){
        var that = this;
        deleteMall('/application/setting/component/deleteComponent', { id:id}).then((res) => {
          if(res.success){
            that.$message.success(res.message);
            that.loadData();
          }else{
            that.$message.warning(res.message);
          }
        });
      },
      handleOk(e) {
        console.log(e);
        this.visible = false
        // 新增/修改 成功时，重载列表
        this.loadData();
      },
    }
  }

</script>

<style scoped>
</style>