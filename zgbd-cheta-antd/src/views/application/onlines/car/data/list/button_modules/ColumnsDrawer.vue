<template>
  <a-drawer
    title="报表数据"
    width=400
    :closable="false"
    @close="visable = false"
    :visible="visable">
    <a-spin :spinning="spinning">
      <a-table :dataSource="dataSource" :columns="columns" :customRow = "clickrow"  size="small"></a-table>
    </a-spin>
  </a-drawer>
</template>

<script>
  import {getAction} from "@/api/manage";
  import {getComponentById} from "@/views/application/onlines/car/api/api";

  export default {
    name: 'ColumnsDrawer',
    data() {
      return {
        pageType : 3,
        spinning : false,
        visable : false,
        dataSource : [],
        item : {},
        url : {
          getComponentById: "application/online/component/getComponentById",
          getData : '/application/online/component/getComponentList'
        },
        columns : [
          { title: '名称', dataIndex: 'projectName', key: 'projectName'},
          { title: '创建时间', dataIndex: 'createTime', key: 'createTime'}
        ]
      }
    },
    methods: {
      init(){
        var that = this;
        that.spinning = true
        getAction(that.url.getData,{pageType:that.pageType}).then(res =>{
          that.dataSource = [];
          if(res.success){
            that.dataSource = res.result;
          }
          that.spinning = false
        })
      },
      showColumns(item){
        this.visable = true
        this.item = item
        this.init();
      },
      clickrow (record,index) {
        var that = this;
        return {
          on: { // 事件
            click: () => {
              getAction(that.url.getComponentById,{id:record.id}).then(res => {
                if(res.success){
                  that.$emit("change",JSON.parse(res.result.data)[0]);
                }else{
                  this.$message.error(res.message)
                }
              })
            },
          },
        }
      },
    }
  }
</script>

<style scoped>

</style>