<template>
  <div class="cheta-car-apply cheta-plr-24">
    <div class="cheta-mtb-20">车牌号：<Search @search="searchChange" style="width: 200px;display: inline-block"/></div>
    <c-table
      :columns="columns"
      url="/application/car/dispatch/applyList"
      @expand = "expand"
      rowKey="id"
      ref="table"
    >
      <div slot="actions" slot-scope="text, record">
        <span  v-if="!managers" class="cheta-event cheta-color" @click="edit(record)">编辑</span>
        <span v-else class="cheta-event cheta-color" @click="audit(record)">调度审核</span>
      </div>
    </c-table>
  </div>
</template>

<script>
  import Search from '@views/chetaui/input/search/Index'
  import CTable from '@/views/chetaui/table/index.js'
  export default {
    name: 'Apply',
    data () {
      return {
        columns: [
          {title: '序号', dataIndex: '', key: '', align: 'center', customRender: function(t, r, index) {return parseInt(index) + 1}},
          { title: '车牌号', dataIndex: 'registrationNo', key: 'registrationNo', align: 'center' },
          { title: '用车人',dataIndex: 'userName', key: 'userName',align: 'center'},
          { title: '用车部门',dataIndex: 'department', key: 'department',align: 'center'},
          { title: '车辆类型', dataIndex: 'carType', key: 'carType', align: 'center' },
          { title: '乘车人数', dataIndex: 'population', key: 'population', align: 'center' },
          { title: '用车时间', dataIndex: '', key: '', align: 'center', customRender: function(t, r, index) {
            if (!t.startDate || !t.endDate) {
              return ''
            }
            return t.startDate + '至' +  t.endDate}
          },
          { title: '用车范围', dataIndex: ' addressId', key: ' addressId' ,align: 'center' },
          { title: '操作', dataIndex: 'actions', key: 'actions', scopedSlots: { customRender: 'actions' } ,align: 'center' },
        ],
        managers: false
      }
    },
    components:{CTable,Search},
    created () {
      var $this = this;
      this.$route.matched[this.$route.matched.length - 1].parent.meta.children.forEach(inner=>{
        if (inner.perms === 'DISPATCH_ADMIN') {
          $this.managers = inner.status === 'Y'
        }
      })
      this.$refs.table.getData()
    },
    methods:{

      searchChange (keyword) {
        this.$refs.table.getData({keyword:keyword})
      },
      edit (record) {
        this.$router.push({name:"申请用车", params: {key: record}})
      },
      audit (record) {
        this.$router.push({name:"调度审批", params: {key: record}})
      }

    },
    watch: {
      '$route' () {
        this.$destroy(true);
        this.$el.parentNode.removeChild(this.$el);
      }
    }
  }
</script>

<style lang="less" scoped>
  .cheta-car-apply{height: calc(100% - 125px);}
</style>