<template>
  <a-card :bordered="false">

    <!-- 操作按钮区域 -->
    <div class="table-operator">
      <a-button @click="handleAdd" type="primary" icon="plus">新增</a-button>

      <a-dropdown v-if="selectedRowKeys.length > 0">
        <a-menu slot="overlay">
          <a-menu-item key="1" @click="batchDel">
            <a-icon type="delete"/>
            删除
          </a-menu-item>
        </a-menu>
        <a-button style="margin-left: 8px"> 批量操作
          <a-icon type="down"/>
        </a-button>
      </a-dropdown>
    </div>

    <!-- table区域-begin -->
    <div>
      <div class="ant-alert ant-alert-info" style="margin-bottom: 16px;">
        <i class="anticon anticon-info-circle ant-alert-icon"></i> 已选择 <a style="font-weight: 600">{{
          selectedRowKeys.length }}</a>项
        <a style="margin-left: 24px" @click="onClearSelected">清空</a>
      </div>


      <a-table
        ref="table"
        size="middle"
        bordered
        rowKey="id"
        :columns="columns"
        :dataSource="dataSource"
        :pagination="ipagination"
        :loading="loading"
        :rowSelection="{selectedRowKeys: selectedRowKeys, onChange: onSelectChange}">
        //@change="handleTableChange">

        <span slot="action" slot-scope="text, record">
          <a @click="handleEdit(record)">编辑</a>

          <a-divider type="vertical"/>
          <a-dropdown>
            <a class="ant-dropdown-link">更多 <a-icon type="down"/></a>
            <a-menu slot="overlay">
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

    <!-- 表单区域 -->
    <MallStore-modal ref="MallStoreModal" @ok="modalFormOk"></MallStore-modal>

  </a-card>
</template>

<script>
  import MallStoreModal from './modules/MallStoreModal'
  import {filterObj} from '@/utils/util'
  import {deleteMall, getAction} from '@/api/manage'

  export default {
    name: "MallStoreList",
    components: {
      MallStoreModal,
    },
    data() {
      return {
        description: '用户管理页面',
        // 查询条件
        queryParam: {},
        //字典数组缓存
        sexDictOptions: [],
        // 表头
        columns: [
          {
            title: '序号',
            dataIndex: '',
            key: 'rowIndex',
            width: 50,
            align: "center",
            customRender: function (t, r, index) {
              return parseInt(index) + 1;
            }
          },
          {
            title: '门店名称',
            width: 90,
            align: "center",
            dataIndex: 'storeName'
          },
          {
            title: '门店logo',
            width: 100,
            align: "center",
            dataIndex: 'storeLogo',
            customRender: function (t, record, index) {
              let url = record.storeLogo;
              console.log(url)
              return (<img src={url} width="100px" />);
            }

          },
          {
            title: '营业时间',
            width: 85,
            align: "center",
            dataIndex: 'workTime'
          },
          {
            title: '联系人',
            width: 50,
            align: "center",
            dataIndex: 'person'
          },
          {
            title: '联系电话',
            width: 40,
            align: "center",
            dataIndex: 'telephone'
          },
          {
            title: '门店区域',
            width: 70,
            align: "center",
            dataIndex: 'storeArea'
          },
          {
            title: '详细地址',
            width: 70,
            align: "center",
            dataIndex: 'addressXx'
          },
          {
            title: '自提核销',
            width: 70,
            align: "center",
            dataIndex: 'since',
            customRender: function (t, r, index) {
              if(r.status == '1'){
                return '支持';
              }else{
                return '不支持';
              }
            }
          },
          {
            title: '门店状态',
            width: 70,
            align: "center",
            dataIndex: 'status',
            /*
            //用字典值替换
            customRender: (text) => {
              //console.log("====>"+test);
              //字典值替换通用方法
              return filterDictText(this.sexDictOptions,text);
            }*/
            customRender: function (t, r, index) {
              if(r.status == '1'){
                return '启用';
              }else{
                return '禁用';
              }
            }
          },
          {
            title: '创建时间',
            width: 90,
            align: "center",
            dataIndex: 'createTime'
          },
          {
            title: '操作',
            width: 60,
            dataIndex: 'action',
            align: "center",
            scopedSlots: {customRender: 'action'},
          }
        ],
        //数据集
        dataSource: [],
        // 分页参数
        ipagination: {
          current: 1,
          pageSize: 10,
          pageSizeOptions: ['10', '20', '30'],
          showTotal: (total, range) => {
            return range[0] + "-" + range[1] + " 共" + total + "条"
          },
          showQuickJumper: true,
          showSizeChanger: true,
          total: 0
        },
        isorter: {
          column: 'createTime',
          order: 'desc',
        },
        loading: false,
        selectedRowKeys: [],
        selectedRows: [],
        url: {
          list: "/application/setting/store/getStore",
          delete: "/application/setting/store/deleteStore",
          deleteBatch: "/application/setting/store/deleteBatch",
        },

      }
    },
    created() {

      this.loadData();
    },

    methods: {
      loadData(arg) {
        //加载数据 若传入参数1则加载第一页的内容
        if (arg === 1) {
          this.ipagination.current = 1;
        }
        var params = this.getQueryParams();//查询条件
        getAction(this.url.list, params).then((res) => {
          if (res.success) {
            this.dataSource = res.result;
            this.ipagination.total = res.result.total;
          }
        })
      },
      handleSuperQuery(arg) {//高级查询方法
        console.log(arg)
        let params = {'superQueryParams':encodeURI(JSON.stringify(arg))};
        getAction(this.url.list, params).then((res) => {
          console.log(res)
          if (res.success) {
            this.dataSource = res.result.records;
            this.ipagination.total = res.result.total;
            console.log(this.dataSource);
            console.log(this.ipagination.total);
          }else{
            that.$message.warn(res.message);
          }
        })
      },
      getQueryParams() {
        var param = Object.assign({}, this.queryParam, this.isorter);
        param.field = this.getQueryField();
        param.pageNo = this.ipagination.current;
        param.pageSize = this.ipagination.pageSize;
        return filterObj(param);
      },
      getQueryField() {
        //TODO 字段权限控制
        var str = "id,";
        this.columns.forEach(function (value, index) {
          str += "," + value.dataIndex;
        });
        return str;
      },
      onSelectChange(selectedRowKeys, selectionRows) {
        this.selectedRowKeys = selectedRowKeys;
        this.selectionRows = selectionRows;
      },
      onClearSelected() {
        this.selectedRowKeys = [];
        this.selectionRows = [];
      },
      searchQuery() {
        this.loadData(1);
      },
      searchReset() {
        var that = this;
        that.queryParam = {}
        that.loadData(1);
      },
      batchDel: function () {
        if (this.selectedRowKeys.length <= 0) {
          this.$message.warning('请选择一条记录！');
          return;
        } else {
          var ids = "";
          for (var a = 0; a < this.selectedRowKeys.length; a++) {
            ids += this.selectedRowKeys[a] + ",";
          }
          var that = this;
          this.$confirm({
            title: "确认删除",
            content: "是否删除选中数据?",
            onOk: function () {
              deleteMall(that.url.deleteBatch, {ids: ids}).then((res) => {
                console.log(that.url.deleteBatch)
                console.log(res)
                if (res.success) {
                  that.$message.success(res.message);
                  that.loadData();
                  that.onClearSelected();
                } else {
                  that.$message.warning(res.message);
                }
              });
            }
          });
        }
      },
      handleDelete: function (id) {
        var that = this;
        deleteMall(that.url.delete, {id: id}).then((res) => {
          console.log(res)
          if (res.success) {
            that.$message.success(res.message);
            that.loadData();
          } else {
            that.$message.warning(res.message);
          }
        });
      },
      handleEdit: function (record) {
        console.log(record)
        this.$refs.MallStoreModal.edit(record);
        this.$refs.MallStoreModal.title = "编辑";
      },
      handleAdd: function () {
        this.$refs.MallStoreModal.add();
        this.$refs.MallStoreModal.title = "新增";
      },
      handleTableChange(pagination, filters, sorter) {
        //分页、排序、筛选变化时触发
        console.log(sorter);
        //TODO 筛选
        if (Object.keys(sorter).length > 0) {
          this.isorter.column = sorter.field;
          this.isorter.order = "ascend" == sorter.order ? "asc" : "desc"
        }
        this.ipagination = pagination;
        this.loadData();
      },
      modalFormOk() {
        // 新增/修改 成功时，重载列表
        this.loadData();
      },
      //跳转单据页面
      jump() {
        this.$router.push({path: '/jeecg/helloworld'})
      }
    }
  }
</script>
<style scoped>
  .ant-card-body .table-operator {
    margin-bottom: 18px;
  }

  .ant-layout-content {
    margin: 12px 16px 0 !important;
  }

  .ant-table-tbody .ant-table-row td {
    padding-top: 15px;
    padding-bottom: 15px;
  }

  .anty-row-operator button {
    margin: 0 5px
  }

  .ant-btn-danger {
    background-color: #ffffff
  }

  .ant-modal-cust-warp {
    height: 100%
  }

  .ant-modal-cust-warp .ant-modal-body {
    height: calc(100% - 110px) !important;
    overflow-y: auto
  }

  .ant-modal-cust-warp .ant-modal-content {
    height: 90% !important;
    overflow-y: hidden
  }
  /** Button按钮间距 */
  .ant-btn {
    margin-left: 3px
  }
</style>