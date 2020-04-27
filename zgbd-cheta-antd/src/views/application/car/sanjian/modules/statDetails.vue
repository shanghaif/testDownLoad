<template>
  <a-modal v-model="statdetails" @ok="close" title="详情" width="898px" :bodyStyle="{paddingBottom:'0',paddingTop:'0'}" okText="导出" v-if="statdedata">
    <a-table
      :columns="details"
      :dataSource="statdedata"
      :rowSelection="rowSelection"
      :pagination="pagination"> <!-- :scroll="{ y: 240 }"  滚动条->标题内容对不齐 -->
      <div slot="sjSpeed">  <!--  slot-scope="text, record" -->
        <span class="cheta-event">{{sjSpeed}}</span>
      </div>
    </a-table>
  </a-modal>
</template>

<script>
  import { getAction,postAction } from '@/api/manage'
  export default {
    name:"statDetails",
    data(){
      return {
        statdetails:false,
        current:1,
        sjSpeed:'',
        pagination:{
          defaultPageSize:5,
          showTotal: total => `共 ${total} 条数据`,
          onShowSizeChange:(current, pageSize)=>this.pageSize = pageSize
        },
        rowSelection:{
          onChange: (selectedRowKeys, selectedRows) => {
            
          },
          onSelect: (record, selected, selectedRows) => {
            
          },
          onSelectAll: (selected, selectedRows, changeRows) => {
            
          },
        },
        details:[
          {title: '序号', dataIndex: '', key: '', align: 'center', customRender: function(t, r, index) {return parseInt(index) + 1}},
          { title: '车牌号', dataIndex: 'registrationNo', key: 'registrationNo', align: 'center' },
          { title: '驾驶员',dataIndex: 'driver_name', key: 'driver_name',align: 'center'},
          { title: '所属营业部', dataIndex: 'name', key: 'name', align: 'center' },
          { title: '三检进度', dataIndex: 'sjSpeed', key: 'sjSpeed',scopedSlots:{customRender:'sjSpeed' }, align: 'center'},
        ],
        statdedata:[
          {
            registrationNo: "",
            driver_name: "",
            name: "",
          },
        ],
      }
    },
    methods:{
      open(id){
        this.statdetails = true
        getAction('/application/car/inspect/getCtInspectInfo', {pageSize:10, pageNo:1, id:id} ).then(res => {
          this.statdedata = res.data
          console.log(res.data)
          for(var statde of this.statdedata){
            this.sjSpeed = statde.fulfilCar+'/'+statde.sumCar
          }
        })
      },
      close(){
        this.statdetails = false
      },
    }
  }
</script>

<style lang="scss" scoped>

</style>
