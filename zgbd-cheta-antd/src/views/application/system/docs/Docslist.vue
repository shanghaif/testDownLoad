<template>
  <div>
    <a-table :columns="columns" :dataSource="data">
      <span slot="action" slot-scope="text, record">
        <a @click="handleEdit(record)">编辑</a>
      </span>
    </a-table>
    <!-- table区域-end -->
    <docs-modal ref="docsModal" @ok="modalFormOk" @reload="getData"></docs-modal>

  </div>
</template>
<script>
  import DocsModal from './modules/DocsModal'
  import { getAction } from '@/api/manage'

  const columns = [{
    title: '标题',
    dataIndex: 'name',
    key: 'name',
  }, {
    title: '操作',
    dataIndex: 'action',
    scopedSlots: { customRender: 'action' },
  }];

  var data = [/*{
    id: 1,
    key: 1,
    name: '平台介绍',
    children: [{
      id: 11,
      key: 11,
      name: '平台简介',
      parentId: 1,
    }, {
      id: 12,
      key: 12,
      name: '平台架构',
      parentId: 1,
    }, {
      id: 13,
      key: 13,
      name: '资源模型',
      parentId: 1,
    }, {
      id: 14,
      key: 14,
      name: '术语解释',
      parentId: 1,
    }],
  }, {
    id: 33,
    key: 33,
    name: '接口文档',
    children: [{
      id: 21,
      key: 21,
      name: '接口规范',
      parentId: 33,
    }, {
      id: 22,
      key: 22,
      name: '平台架构',
      parentId: 33,
    }, {
      id: 23,
      key: 23,
      name: '资源模型',
      parentId: 33,
    }, {
      id: 24,
      key: 24,
      name: '术语解释',
      parentId: 33,
    }],
  }*/];

  export default {
    name: "Docslist",
    data() {
      return {
        data,
        columns,
      }
    },
    components: {
      DocsModal
    },
    created () {
      this.getData();
    },
    methods: {
      handleEdit (data) {
        this.$refs.docsModal.edit(data);
      },
      getData () {
        getAction('/application/docs/getTree', {}).then((res) => {
          this.data = res.result
        })
      }
    }
  }
</script>