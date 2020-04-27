<template>
  <div>
  <!--url="/application/car/netin/getPage"-->
    <c-table
      :columns="config[0].columns"
      :dataSource="config[0].data"
      rowKey="id">
      <!--<div slot="status" slot-scope="text">
        <a-badge :status="flow[text].style" :text="flow[text].desc"/>
      </div>-->
      <!--<p slot="expandedRowRender"  style="margin: 0">大大书法</p>-->
      <!--${this.tableFields.map(item => `${item.fieldName} ${item.fieldType.substring(item.fieldType.indexOf('-')
      + 1, item.fieldType.length)} COLLATE utf8mb4_bin DEFAULT NULL COMMENT "${item.fieldCommons}",`).join('
      ')}-->
    </c-table>
  </div>
</template>

<script>
  import CTable from '@/views/chetaui/table/index.js'

  export default {
    name: 'Table',
    components: {CTable},
    data () {
      return {
        data: [],
        columns : [],
        flow : {},
      }
    },
    props: {
      config: {
        type: Array,
        default: () => []
      },
    },
    methods : {

    },
  }
</script>

<style scoped>

</style>