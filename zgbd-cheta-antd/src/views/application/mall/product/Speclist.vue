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
    <spec-list-modal title="添加规格" :visible="visible" @ok="handleOk" @cancel="handleCancel" ref="speclistmodal">
    </spec-list-modal>
  </div>

</template>

<script>
  import { getAction ,deleteAction } from '@/api/manage'
  import SpecListModal from './modules/SpecListModal'
  import CRUDData from '../../util/CRUDData'

  const columns = [{
    title: '序号',
    dataIndex: 'id',
    key: 'id',
    customRender: function (t, r, index) {
      return index + 1;
    }
  }, {
    title: '规格名称',
    dataIndex: 'name',
    key: 'name',
    customRender: function (t, r, index) {
      if(r.remark != " " && r.remark != null){
        return r.name + '[' + r.remark + "]";
      }else{
        return r.name;
      }
    }
  },{
    title: '规格选项',
    dataIndex: 'options',
    key: 'options',
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
    components: {
      SpecListModal,
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
        getAction('/application/product/spec/getPage', { pageSize: 10, pageNo: 1 }).then((res) => {
          if (res.success) {
            this.data = res.result;
            this.spinning = false;
          }
        })
      },
      handleAdd(){
        this.$refs.speclistmodal.add();
        this.$refs.speclistmodal.title="新增";
      },
      handleEdit: function(record){
        this.$refs.speclistmodal.edit(record);
        this.$refs.speclistmodal.title="编辑";
      },
      handleDetail(record){
        this.$refs.speclistmodal.edit(record);
        this.$refs.speclistmodal.title="详情";
        this.$refs.speclistmodal.disableSubmit = true;
      },
      handleDelete(id){
        var that = this;
        deleteAction('/application/product/spec/deleteSpec', { id:id}).then((res) => {
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