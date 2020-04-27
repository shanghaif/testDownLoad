<template>
  <a-card :bordered="false">
    <a-button @click="handleAdd()" type="primary" icon="plus">新增</a-button>
    <a-table
      :columns="columns"
      :dataSource="data"
      :pagination="pagination"
      :scroll="{ x: 1300 }"
      @change="handleTableChange">
        <span slot="action" slot-scope="text, record">
          <a @click="handleEdit(record)">编辑</a>
          <a-divider type="vertical"/>
          <a @click="roleMenu(record)">授权</a>
          <a-divider type="vertical"/>
          <a-popconfirm title="确定删除吗?" @confirm="() => handleDelete(record.id)">
            <a>删除</a>
          </a-popconfirm>
        </span>
    </a-table>
    <!-- 表单区域 -->
    <RoleModal ref="roleModal" @ok="modalFormOk"></RoleModal>
    <RoleMenuModal ref="roleMenuModal" @ok="modalFormOk"></RoleMenuModal>
  </a-card>
</template>

<script>

  import {deleteAction, getAction} from '@/api/manage'
  import RoleModal from './modules/RoleModal'
  import RoleMenuModal from './modules/RoleMenuModal'

  const columns = [
    { title: '角色名', dataIndex: 'name', key: 'name' },
    { title: '角色类型', dataIndex: 'type', key: 'type' },
    { title: '状态', dataIndex: 'status', key: 'status' },
    { title: '备注', dataIndex: 'description', key: 'description' },
    { title: '操作', dataIndex: 'action', key: 'action', scopedSlots: {customRender: 'action'}}
  ];

  export default {
    data() {
      return {
        data: [],
        columns,
        pagination: {
          current: 1,
          pageSize: 10,
          total: 0
        },
      }
    },
    created(){
      this.loadData()
    },
    components: {
      RoleModal,
      RoleMenuModal
    },
    methods: {
      loadData: function(){
        getAction('/application/setting/role/getPage', {'pageNo': this.pagination.current, 'pageSize': this.pagination.pageSize}).then((res) => {
          const pagination = { ...this.pagination };
          this.data = res.data;
          pagination.total = res.count;
          this.pagination = pagination;
        })
      },
      handleTableChange (pagination) {
        const pager = { ...this.pagination };
        pager.current = pagination.current;
        this.pagination = pager;
        this.loadData();
      },
      handleDelete: function(id){
        deleteAction('/application/setting/role/deleteRole', {id: id}).then((res) => {
          if(res.success && res.result == '1') {
            this.$message.success(res.message);
            this.loadData();
          }
        });
      },
      handleEdit: function (record) {
        this.$refs.roleModal.edit(record);
        this.$refs.roleModal.title = "编辑";
      },
      handleAdd: function () {
        this.$refs.roleModal.add();
        this.$refs.roleModal.title = "新增";
      },
      modalFormOk() {
        // 新增/修改 成功时，重载列表
        this.loadData();
      },
      roleMenu(record){
        this.$refs.roleMenuModal.show(record.id)
      }
    }
  }
</script>