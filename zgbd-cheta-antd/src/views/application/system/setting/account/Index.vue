<template>
  <div class="setting-account" style="padding: 10px">
    <!-- 头部导航 -->
    <a-breadcrumb separator=" >" style="margin-bottom: 10px;">
      <a-breadcrumb-item><a @click="() => this.breadList = []">账户中心</a>
      </a-breadcrumb-item>
      <a-breadcrumb-item v-for="bread in breadList">{{ bread }}</a-breadcrumb-item>
    </a-breadcrumb>
    <!-- 账户列表 -->
    <div v-if="!breadList.length">
      <a-input-search
        placeholder="请输入要搜索的关键词"
        style="width: 260px;height: 32px;"
        @search="search"
      />
      <a-button type="primary" @click="add()" style="margin-left: 10px">+新增账号</a-button>
      <c-table
        style="margin-top: 10px;"
        url="/application/auth/user/getData"
        :columns="columns"
        :rowSelection="rowSelection"
        ref="table"
        rowKey="id">
        <span slot="action" slot-scope="text, record">
          <a style="margin-right: 20px" @click="edit(record)">编辑</a>
          <a @click="doTab(record)">权限</a>
        </span>
        <div slot="status" slot-scope="record">
          <div v-if="record==='Y'">
            可用
          </div>
          <div v-else style="color: #cccccc">
            停用
          </div>
        </div>
        <span slot="loginType" slot-scope="record">
          <div v-if="record=='PC'">
            <a-icon type="desktop" style="color:#1CC09F"/>
          </div>
          <div v-else-if="record=='APP'">
            <a-icon type="mobile" style="color:#1CC09F"/>
          </div>
        </span>
      </c-table>
    </div>
    <a-tabs @change="handleTab" type="card" v-else>
      <a-tab-pane tab="基本信息" key="基本信息">
        <Info :id="userId"></Info>
      </a-tab-pane>
      <a-tab-pane tab="安全信息" key="安全信息">
        <Security :id="userId" style="border: 1px solid rgb(232, 232, 232); border-top:0px;padding: 10px;"/>
      </a-tab-pane>
      <a-tab-pane tab="权限管理" key="权限管理">
        <Auth :pid="positionId" :id="userId" :ptext="positionText" style="border: 1px solid rgb(232, 232, 232);border-top:0px; padding: 10px;"/>
      </a-tab-pane>
    </a-tabs>
    <Edit ref="Edit" @getData="getData"></Edit>
  </div>
</template>
<script>
  import Info from './Info'
  import Security from './Security'
  import Auth from './Auth'
  import Edit from './Edit'
  import CTable from '@/views/chetaui/table/index.js'
  export default {
    name: 'Index',
    components: { Auth, Info, Security, Edit, CTable },
    data() {
      return {
        columns: [
          {
            title: '编号', dataIndex: '', key: '', align: 'center', customRender: function(t, r, index) {
              return parseInt(index) + 1
            }
          },
          { title: '姓名', dataIndex: 'nickName', key: 'nickName', align: 'center' },
          { title: '登录账号', dataIndex: 'loginName', key: 'loginName', align: 'center' },
          { title: '权限所属', dataIndex: 'departmentText', key: 'organText', align: 'center' },
          { title: '职位', dataIndex: 'positionText', key: 'positionText', align: 'center' },
          { title: '创建时间', dataIndex: 'createTime', key: 'createTime', align: 'center' },
          {
            title: '',
            scopedSlots: { customRender: 'loginType' },
            dataIndex: 'loginType',
            key: 'loginType',
            align: 'right'
          },
          { title: '登录信息', dataIndex: 'loginTime', key: 'loginTime', align: 'left' },
          { title: '状态', scopedSlots: { customRender: 'status' }, dataIndex: 'status', key: 'status', align: 'center' },
          { title: '操作', scopedSlots: { customRender: 'action' }, align: 'center' }
        ],
        breadList: [],
        userId: '',
        positionId: '',
        positionText:'',
        keyword: '',
      }
    },
    computed: {
      rowSelection() {
        const { selectedRowKeys } = this
        return {
          onChange: (selectedRowKeys, selectedRows) => {
            console.log(`selectedRowKeys: ${selectedRowKeys}`, 'selectedRows: ', selectedRows)
          }
        }
      }
    },
    methods: {
      edit(record) {
        this.$refs.Edit.edit(record)
      },
      add() {
        this.$refs.Edit.add()
      },
      getData() {
        this.$refs.table.getData()
      },
      doTab(record) {
        this.breadList = [record.nickName, '基本信息']
        this.userId = record.id
        this.positionId = record.positionId
        this.positionText = record.positionText
      },
      search (value) {
        this.keyword = value;
        this.reload();
      },
      reload () {
        this.$refs.table.getData({
          keyword: this.keyword
        })
      },
      handleTab(key) {
        this.breadList.splice(1, 1)
        this.breadList.push(key)
      }
    }
  }
</script>
<style>
  .setting-account .ant-tabs-bar {
    margin: 0;
  }
</style>