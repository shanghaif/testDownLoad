<template>
  <a-card :bordered="false">
    <!-- 操作按钮区域 -->
    <div class="table-operator">
      <a-button @click="handleAdd" type="primary" icon="plus">新增</a-button>
    </div>

    <div>

      <a-table
        :columns="columns"
        size="middle"
        :dataSource="dataSource"
      >
        <span slot="name" slot-scope="text, record">
          <a-icon type="aliyun"/> {{ record.name }}
        </span>
        <span slot="action" slot-scope="text, record">
          <a @click="handleEdit(record)">编辑</a>

          <a-divider type="vertical" />
          <a-dropdown>
            <a class="ant-dropdown-link">
              更多 <a-icon type="down" />
            </a>
            <a-menu slot="overlay">
              <a-menu-item>
                <a href="javascript:;" @click="handleDetail(record)">详情</a>
              </a-menu-item>

              <a-menu-item>
                <a-popconfirm title="确定删除吗?" @confirm="() => handleDelete(record.id)">
                  <a>删除</a>
                </a-popconfirm>
              </a-menu-item>
            </a-menu>
          </a-dropdown>
        </span>

      </a-table>

    </div>
    <!-- table区域-end -->

    <permission-modal ref="permissionmodal" @ok="modalFormOk"></permission-modal>

  </a-card>
</template>

<script>
  import PermissionModal from './Modal'
  import { getAction,deleteAction } from '@/api/manage';

  const columns = [
    {
      title: '名称',
      dataIndex: 'name',
      key: 'name',
      width: 100,
      scopedSlots: { customRender: 'name' },
    },{
      title: '类型',
      dataIndex: 'grade',
      key: 'grade',
      width: 100,
      customRender:function (text) {
        if (text === '0') {
          return "项目/分公司";
        } else if(text === '1') {
          return "机构/组";
        } else if(text === '2') {
          return "监察组织";
        } else {
          return '公司';
        }
      }
    },
    {
      title: '描述',
      dataIndex: 'remark',
      key: 'remark',
      width: 80
    },
    {
      title: '操作',
      dataIndex: 'action',
      scopedSlots: { customRender: 'action' },
      /*fixed:"right",*/
      align:"center",
      width:150
    }
  ];

  export default {
    name: "Index",
    components: {
      PermissionModal
    },
    data () {
      return {
        description: '这是菜单管理页面',
        //数据集
        dataSource:[],
        // 表头
        columns:columns,
        loading:false,
      }
    },
    created() {
      this.loadData();
    },
    methods: {
      loadData (){
        this.dataSource = [];
        var $this = this;
        getAction('/application/auth/organ/getOrganTree', {}).then(res => {
          var data = res.result;
          $this.initOrganTree(data);
          $this.dataSource = data;
        })
      },
      initOrganTree (result) {
        var $this = this;
        result.forEach(inner => {
          inner.key = inner.id;
          if (inner.children.length > 0) {
            $this.initOrganTree(inner.children)
          } else {
            inner.children = undefined;
          }
        })
      },
      handleAdd(){
        this.$refs.permissionmodal.add();
        this.$refs.permissionmodal.title="新增";
      },
      handleEdit: function(record){
        this.$refs.permissionmodal.edit(record);
        this.$refs.permissionmodal.title="编辑";
      },
      handleDetail(record){
        this.$refs.permissionmodal.edit(record);
        this.$refs.permissionmodal.title="详情";
        this.$refs.permissionmodal.disableSubmit = true;
      },
      handleDelete(id){
        var that = this;
        deleteAction('/application/auth/organ/delete', {id: id}).then(res => {
          if(res.success){
            that.$message.success(res.message);
            that.loadData();
          }else{
            that.$message.warning(res.message);
          }
        })
      },
      modalFormOk () {
        // 新增/修改 成功时，重载列表
        this.loadData();
      },
    }
  }
</script>
<style scoped>
  .ant-card-body .table-operator{
    margin-bottom: 18px;
  }
  .ant-layout-content{
    margin:12px 16px 0 !important;
  }
  .ant-table-tbody .ant-table-row td{
    padding-top:15px;
    padding-bottom:15px;
  }
  .anty-row-operator button{margin: 0 5px}
  .ant-btn-danger{background-color: #ffffff}
  .ant-modal-cust-warp{height: 100%}
  .ant-modal-cust-warp .ant-modal-body{height:calc(100% - 110px) !important;overflow-y: auto}
  .ant-modal-cust-warp .ant-modal-content{height:90% !important;overflow-y: hidden}
  .col-sql{
    overflow : hidden;
    text-overflow: ellipsis;
    display: -webkit-box;
    -webkit-line-clamp: 2;
    -webkit-box-orient: vertical;
  }
</style>