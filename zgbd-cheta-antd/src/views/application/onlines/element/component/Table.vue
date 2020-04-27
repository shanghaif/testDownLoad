<template>
  <c-table
    :columns="columns"
    url="/application/car/netin/getPage"
    rowKey="id">
    <div slot="status" slot-scope="text">
      <a-badge :status="flow[text].style" :text="flow[text].desc"/>
    </div>
  </c-table>
</template>

<script>
  import CTable from '@/views/chetaui/table/index.js'

  export default {
    name: 'Table',
    components: {CTable},
    data () {
      return {
        columns: [
          {title: '平台代号',dataIndex:'companyCode',key:'companyCode'},
          {title: '车牌号',dataIndex: 'carId',key:'carId'},
          {title: '自编号',dataIndex: 'sinceNumber',key:'sinceNumber'},
          {title: '车辆类型',dataIndex: 'cartype',key:'cartype'},
          {title: '购买日期',dataIndex: 'buyTime',key:'buyTime'},
          {title: '状态',dataIndex:'status',key:'status',scopedSlots: {customRender: 'status'}},
        ],
        flow: {
          'NOT_RELEASED':{key:'NOT_RELEASED', desc:'未发布',style:'processing'},
          'HAVE_RELEASED':{key:'HAVE_RELEASED', desc:'已发布',style:'success'},
        }
      }
    }
  }
</script>

<style scoped>

</style>