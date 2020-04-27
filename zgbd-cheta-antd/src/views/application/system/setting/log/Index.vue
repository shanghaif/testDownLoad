<template>
  <div style="margin: 10px;">
    <a-tabs defaultActiveKey="1">
      <a-tab-pane tab="登录日志" key="1">
        <c-table
          url="/application/setting/log/getLoginData"
          :columns="loginColumns"
          rowKey="id">
          <span slot="loginType" slot-scope="record">
            <div v-if="record=='PC'">
              <a-icon type="desktop" style="color:#1CC09F"/>
            </div>
            <div v-else-if="record=='APP'">
              <a-icon type="mobile" style="color:#1CC09F"/>
            </div>
          </span>
          <span slot="successful" slot-scope="record">
            <div v-if="record=='Y'">
              <span style="color:#1CC09F">登录成功</span>
            </div>
            <div v-else>
              <span style="color:red">登录失败</span>
            </div>
          </span>
        </c-table>
      </a-tab-pane>
      <a-tab-pane tab="操作日志" key="2">
        <c-table
          url="/application/setting/log/getLogData"
          :columns="logColumns"
          rowKey="id">
        </c-table>
      </a-tab-pane>
    </a-tabs>
  </div>
</template>

<script>
  import CTable from '@/views/chetaui/table/index.js'

  export default {
    name: 'Index',
    components: { CTable },
    data () {
      return {
        loginColumns: [
          {
            title: '编号', dataIndex: '', key: '', align: 'center', customRender: function(t, r, index) {
              return parseInt(index) + 1
            }
          },
          { title: '登录账户', dataIndex: 'userName', key: 'userName', align: 'center' },
          { title: 'ip地址', dataIndex: 'ip', key: 'ip', align: 'center' },
          { title: '登录类型', scopedSlots: { customRender: 'loginType' }, dataIndex: 'loginType', key: 'loginType', align: 'center'},
          { title: '登录时间', dataIndex: 'createTime', key: 'createTime', align: 'center' },
          { title: '是否成功', dataIndex: 'successful', key: 'successful', align: 'center', scopedSlots: { customRender: 'successful' }},
        ],
        logColumns: [
          {title: '编号', dataIndex: '', key: '', align: 'center', customRender: function(t, r, index) {return parseInt(index) + 1}},
          { title: '操作账户', dataIndex: 'userName', key: 'userName', align: 'center' },
          { title: 'ip地址', dataIndex: 'ip', key: 'ip', align: 'center' },
          { title: '操作模块', dataIndex: 'oper', key: 'oper', align: 'center' },
          { title: '详情', dataIndex: 'description', key: 'description', align: 'center' },
          { title: '响应时间（毫秒）', dataIndex: 'time', key: 'time', align: 'center' },
          { title: '操作时间', dataIndex: 'createTime', key: 'createTime', align: 'center' },
        ],
      }
    }
  }
</script>

<style scoped>

</style>