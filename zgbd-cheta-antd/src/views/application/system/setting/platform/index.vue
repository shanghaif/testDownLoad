<template>
  <div class="setting-account">
    <!-- 头部导航 -->
    <a-breadcrumb separator=" >" style="margin: 10px;">
      <a-breadcrumb-item><a @click="() => show = 'list'">关于平台</a>
      </a-breadcrumb-item>
      <a-breadcrumb-item v-for="bread in breadList">{{ bread }}</a-breadcrumb-item>
    </a-breadcrumb>
    <!-- 账户列表 -->
    <div v-if="show === 'list'">
      <a-input-search
        placeholder="请输入要搜索的关键词"
        style="width: 260px;height: 32px;"
      />
      <a-button type="primary" @click="add()" style="margin-left: 10px">+新增</a-button>
      <c-table
        style="margin-top: 10px;"
        url="/application/notice/getPage"
        :columns="columns"
        :rowSelection="rowSelection"
        ref="table"
        rowKey="id">
        <span slot="action" slot-scope="text, record">
          <a style="margin-right: 20px" @click="info(record)">详情</a>
          <a style="margin-right: 20px" @click="edit(record)">编辑</a>
        </span>
        <span slot="content" slot-scope="content">
          <span v-if="content" style="overflow: hidden;display: -webkit-box;-webkit-box-orient: vertical;-webkit-line-clamp: 1;">{{content}}</span>
        </span>
      </c-table>
    </div>
    <Edit ref="Edit" @getData="getData"></Edit>
    <NoticeLog v-if="show === 'notice'"></NoticeLog>
    <MessageLog v-if="show === 'message'"></MessageLog>
  </div>
</template>
<script>
  import Edit from './Edit'
  import NoticeLog from '@/views/doc/modules/NoticeLog'
  import MessageLog from '@/views/doc/modules/MessageLog'

  import CTable from '@/views/chetaui/table/index.js'
  export default {
    name: 'index',
    components: { CTable,Edit,NoticeLog,MessageLog },
    data() {
      return {
        columns: [
          {
            title: '编号', dataIndex: '', key: '', align: 'center',width:'10%', customRender: function(t, r, index) {
              return parseInt(index) + 1
            }
          },
          { title: '标题', dataIndex: 'title', key: 'title', align: 'center',width:'20%', customRender: (t, r) => r.type == '消息' ? '消息推送' : r.title},
          { title: '内容', dataIndex: 'content', key: 'content', align: 'center',width:'20%',scopedSlots: { customRender: 'content' } },
          { title: '过期时间', dataIndex: 'deadline', key: 'deadline', align: 'center',width:'20%' },
          { title: '类型', dataIndex: 'type', key: 'type', align: 'center',width:'20%' },
          { title: '操作', scopedSlots: { customRender: 'action' }, align: 'center',width:'10%' }
        ],
        breadList: [],
        userId: '',
        show: 'list'
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
      info (item) {
        if (item.type === '消息') {
          this.show = 'message'
        } else {
          this.show = 'notice'
        }
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