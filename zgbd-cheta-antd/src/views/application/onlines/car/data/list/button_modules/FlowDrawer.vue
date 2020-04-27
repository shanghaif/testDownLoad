<template>
  <a-drawer
    title="请选择自定义流程"
    width="380"
    :closable="false"
    @close="onClose"
    :visible="flowVisible"
  >
    <a-row style="margin-bottom: 1rem">
      <!--<a-col>
        <a-input-search class="input" placeholder="请输入要搜索的关键字" @search="onSelectData" enterButton="搜索"/>
      </a-col>-->
    </a-row>
    <c-table ref="flowTable" :columns="columns" :customRow = "clickrow" url="/dictionary/getPage"  size="small">
    </c-table>
  </a-drawer>
</template>

<script>
    import {getAction} from "@/api/manage";
    import EditableCell from '@/views/application/onlines/car/data/list/modules/EditableCell';
    import CTable from '@/views/chetaui/table.js';

    export default {
      name: "FlowDrawer",
      components:{
        EditableCell,CTable
      },
      data() {
        return {
          flowVisible: false,
          flowList: [],
          url:{
            initFlow:'/dictionaryitems/getPage',
            oldInitFlow:'/application/car/vehicle/flow/getDataAll'
          },
          columns : [
            { title: '标题', dataIndex: 'title', key: 'title' , width : '150px', scopedSlots: {customRender: 'title'}},
            { title: '系统码', dataIndex: 'systemCode', key: 'systemCode'}
          ]
        }
      },
      methods:{
        clickrow (record,index) {
          var that = this;
          return {
            on: { // 事件
              click: () => {
                that.$emit("bindFlow",record);
                /*关闭业务流
                that.onClose();*/
              },
            },
          }
        },
        onSelectData(value){
          this.$refs.flowTable.param = {pageSize:10,pageNo:1,title:value}
          this.$refs.flowTable.getData();
        },
        onClose(){
          this.flowVisible = false;
        },
        showFlow(){
          this.flowVisible = true;
        },
        //初始化流程数据
        initFlowData() {
          getAction(this.url.initFlow).then(res => {
            res.result.forEach(item => {
              item.flow = JSON.parse(item.flow);
              this.flowList.push({
                id: item.id,
                createTime: item.createTime,
                name: item.name,
                type: item.type,
              })
            })
          })
        },
      }
    }
</script>

<style scoped>

</style>