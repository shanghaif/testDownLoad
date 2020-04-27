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
    <category-modal title="新增分类" :visible="visible" @ok="handleOk" @cancel="handleCancel" ref="categorymodal">
    </category-modal>
  </div>
</template>

<script>
  import CategoryModal from './modules/CategoryModal'
  import {getCategoryList,deleteCategory,deleteCategoryList} from '@/api/api'
  import SpinLoad from  '../../util/SpinLoad'

  const columns = [{
    title: '分类名称',
    dataIndex: 'name',
    key: 'name',
    customRender: function (t, r, index) {
      if(r.parentId == '0'){
          return t;
      }else{
          return '├'+ t;
      }
    }
  }, {
    title: '描述',
    dataIndex: 'description',
    key: 'description',
  }, {
    title: '排序',
    dataIndex: 'sort_no',
    key: 'sort_no',
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
      CategoryModal,
      SpinLoad,
    },
    data() {
      return {
        spinning : '',
        data,
        columns,
        addIframe: false
      }
    },
    created() {
      this.loadData();
    },
    methods :{
      loadData(){
        this.data = [];
        this.spinning = true;
        getCategoryList({pageSize: 10, pageNo: 1}).then((res)=>{
          if(res.success){
            this.data = res.result;
            this.spinning = false;
          }
        })
      },
      handleAdd(){
        this.$refs.categorymodal.add();
        this.$refs.categorymodal.title="新增";
      },
      handleEdit: function(record){
        this.$refs.categorymodal.edit(record);
        this.$refs.categorymodal.title="编辑";
      },
      handleDetail(record){
        this.$refs.categorymodal.edit(record);
        this.$refs.categorymodal.title="详情";
        this.$refs.categorymodal.disableSubmit = true;
      },
      handleDelete(id){
        var that = this;
        deleteCategory({id: id}).then((res)=>{
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