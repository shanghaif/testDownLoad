<template>
  <span slot-scope="text, record">
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
</template>

<script>
  export default {
    name: 'CRUDData',
    methods : {
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
      }
    }
  }



</script>

<style scoped>

</style>