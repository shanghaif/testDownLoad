<template>
    <div class="cheta-analysis-content cheta-plr-24">
      <a-row :gutter="16">
        <a-col :xs="24" :sm="12" :md="12" :lg="12" :xl="12">
          <div class="clearfix cheta-mtb-20">
            <span class="cheta-floatl  cheta-font-height32">用车统计</span>
            <span class="cheta-floatr">用车人：<a-input-search placeholder="请输入用车人姓名" style="width: 200px" @search="onSearch1"/></span>
          </div>
          <div>
            <c-table
              :columns="useColumns"
              url="/application/car/dispatch/useCarAnalyze"
              rowKey="id"
              ref="userTable"
              class="cheta-table-registration"
            >
            </c-table>
          </div>
        </a-col>
        <a-col :xs="24" :sm="12" :md="12" :lg="12" :xl="12">
          <div class="clearfix cheta-mtb-20">
            <span class="cheta-floatl cheta-font-height32">派车统计</span>
            <span class="cheta-floatr">车牌号：
              <Search class="cheta-block" @search="searchChange"/>
            </span>
          </div>
          <div>
            <c-table
              :columns="auditColumns"
              url="/application/car/dispatch/sendCarAnalyze"
              ref="auditTable"
              rowKey="id"
              class="cheta-table-registration"
            >
            </c-table>
          </div>
        </a-col>
      </a-row>
    </div>
</template>
<script>
  import CTable from '@/views/chetaui/table/index.js'
  import Search from '@views/chetaui/input/search/Index'

  export default {
    name: 'Analysis',
    components: {CTable,Search},
    data () {
      return {
        useColumns: [
          {title: '序号', dataIndex: '', key: '', align: 'center', customRender: function(t, r, index) {return parseInt(index) + 1}},
          {title: '用车人',  dataIndex: 'name', key: 'name', align: 'center' },
          {title: '用车次数', dataIndex: 'sum', key: 'sum',align: 'center' },
          {title: '操作', dataIndex: 'action', key: 'action', scopedSlots: { customRender: 'action' }, align: 'center' },
        ],
        auditColumns: [
          {title: '序号', dataIndex: '', key: '', align: 'center', customRender: function(t, r, index) {return parseInt(index) + 1}},
          {title: '车牌号',  dataIndex: 'registrationNo', key: 'registrationNo', align: 'center' },
          {title: '车辆类型', dataIndex: 'carType', key: 'carType',align: 'center' },
          {title: '派车次数', dataIndex: 'sum', key: 'sum',align: 'center' },
          {title: '操作', dataIndex: 'action', key: 'action', scopedSlots: { customRender: 'action' }, align: 'center' },
        ],
        usePerson: [],
        userCount:0,
      }

    },
    methods:{
      onSearch1 (e) {
        this.$refs.userTable.reload({keyword:e})
      },
      searchChange (keyword) {
        this.$refs.auditTable.reload({keyword:keyword})
      }
    }

  }
</script>

<style lang="less" scoped>
  /*top样式*/
  .cheta-analysis-content {
    height: calc(100vh - 125px);
    /*background-color: #F0F2F5*/
  }
</style>