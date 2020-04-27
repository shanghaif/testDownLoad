<template>
  <a-card :bordered="false">

    <!-- 查询区域 -->
    <div class="table-page-search-wrapper">
      <a-form layout="inline">
        <a-row :gutter="24">
          <a-col :span="6">
            <a-form-item label="所属地区">
              <a-select placeholder="请选择地区" v-model="queryParam.departmentid">
                <a-select-option v-for="(region,regionindex) in regionList" :key="regionindex.toString()" :value="region.id">
                  {{ region.regionName }}
                </a-select-option>
              </a-select>
            </a-form-item>
          </a-col>
          <a-col :span="6">
            <a-form-item label="">
              <a-input placeholder="车牌号/司机姓名/项目名称" v-model="queryParam.name"></a-input>
              <!--v-model="queryParam.orderCode"-->
            </a-form-item>
          </a-col>


          <a-col :span="8" >
            <span style="float: left;overflow: hidden;" class="table-page-search-submitButtons">
              <a-button type="primary" @click="searchQuery" icon="search">查询</a-button>
              <a-button type="primary" @click="searchReset" icon="reload" style="margin-left: 8px">重置</a-button>
            </span>
          </a-col>

          <!--<a-col :span="12">
            <a-form-item label="权属">
              <a-checkbox-group @change="onChangeOS" v-model="queryParam.ownership">
                <a-row>
                  <a-col :span="5"><a-checkbox value="企业">企业</a-checkbox></a-col>
                  <a-col :span="5"><a-checkbox value="合作方">合作方</a-checkbox></a-col>
                  <a-col :span="5"><a-checkbox value="业主">业主</a-checkbox></a-col>
                  <a-col :span="5"><a-checkbox value="私家车">私家车</a-checkbox></a-col>
                  <a-col :span="5"><a-checkbox value="租赁">租赁</a-checkbox></a-col>
                  <a-col :span="5"><a-checkbox value="其他">其他</a-checkbox></a-col>
                </a-row>
              </a-checkbox-group>
            </a-form-item>
          </a-col>

          <a-col :span="12">
            <a-form-item label="状态">
              <a-checkbox-group @change="onChangeS" v-model="queryParam.status">
                <a-row>
                  <a-col :span="5"><a-checkbox value="0">正常</a-checkbox></a-col>
                  <a-col :span="5"><a-checkbox value="1">闲置</a-checkbox></a-col>
                  <a-col :span="5"><a-checkbox value="2">已报废</a-checkbox></a-col>
                  <a-col :span="5"><a-checkbox value="3">已出售</a-checkbox></a-col>
                  <a-col :span="5"><a-checkbox value="4">已退还</a-checkbox></a-col>
                  <a-col :span="5"><a-checkbox value="5">待处理</a-checkbox></a-col>
                  <a-col :span="5"><a-checkbox value="6">待出售</a-checkbox></a-col>
                  <a-col :span="5"><a-checkbox value="7">待报废</a-checkbox></a-col>
                  <a-col :span="5"><a-checkbox value="8">待退还</a-checkbox></a-col>
                </a-row>
              </a-checkbox-group>
            </a-form-item>
          </a-col>-->

        </a-row>

        <!--<a-row :gutter="32">
          <a-col :span="30">
            <a-form-item label="权属">
              <a-checkbox-group @change="onChangeOS" v-model="queryParam.ownership">
                <a-row>
                  <a-col :span="4"><a-checkbox value="企业">企业</a-checkbox></a-col>
                  <a-col :span="5"><a-checkbox value="合作方">合作方</a-checkbox></a-col>
                  <a-col :span="4"><a-checkbox value="业主">业主</a-checkbox></a-col>
                  <a-col :span="5"><a-checkbox value="私家车">私家车</a-checkbox></a-col>
                  <a-col :span="4"><a-checkbox value="租赁">租赁</a-checkbox></a-col>
                  <a-col :span="4"><a-checkbox value="其他">其他</a-checkbox></a-col>
                </a-row>
              </a-checkbox-group>
            </a-form-item>
          </a-col>
        </a-row>

        <a-row :gutter="24">
          <a-col :span="12">
            <a-form-item label="状态">
              <a-checkbox-group @change="onChangeS" v-model="queryParam.status">
                <a-row>
                  <a-col :span="3"><a-checkbox value="0">正常</a-checkbox></a-col>
                  <a-col :span="3"><a-checkbox value="1">闲置</a-checkbox></a-col>
                  <a-col :span="3"><a-checkbox value="2">已报废</a-checkbox></a-col>
                  <a-col :span="3"><a-checkbox value="3">已出售</a-checkbox></a-col>
                  <a-col :span="3"><a-checkbox value="4">已退还</a-checkbox></a-col>
                  <a-col :span="3"><a-checkbox value="5">待处理</a-checkbox></a-col>
                  <a-col :span="3"><a-checkbox value="6">待出售</a-checkbox></a-col>
                  <a-col :span="3"><a-checkbox value="7">待报废</a-checkbox></a-col>
                  <a-col :span="3"><a-checkbox value="8">待退还</a-checkbox></a-col>
                </a-row>
              </a-checkbox-group>
            </a-form-item>
          </a-col>
        </a-row>-->

      </a-form>
    </div>

    <!-- 操作按钮区域 -->
    <div class="table-operator">
      <!--<a-button @click="handleAdd" type="primary" icon="plus">新增</a-button>-->

      <a-dropdown v-if="selectedRowKeys.length > 0">
        <a-menu slot="overlay">
          <a-menu-item key="1" @click="batchDel"><a-icon type="delete"/>删除</a-menu-item>
        </a-menu>
        <a-button style="margin-left: 8px"> 批量操作 <a-icon type="down" /></a-button>
      </a-dropdown>
    </div>

    <!-- table区域-begin -->
    <div>
      <div class="ant-alert ant-alert-info" style="margin-bottom: 16px;">
        <i class="anticon anticon-info-circle ant-alert-icon"></i> 已选择 <a style="font-weight: 600">{{ selectedRowKeys.length }}</a>项
        <a style="margin-left: 24px" @click="onClearSelected">清空</a>
      </div>


      <a-table
        ref="table"
        size="default"
        bordered
        rowKey="id"
        filterMultiple="filterMultiple"
        :columns="columns"
        :dataSource="dataSource"
        :pagination="ipagination"
        :loading="loading"
        :rowSelection="{selectedRowKeys: selectedRowKeys, onChange: onSelectChange}"
        @change="handleTableChange"
        :customRow="clickThenCheck"
      >

        <span slot="action" slot-scope="text, record">
          <a href="javascript:;" @click="handleDetail(record)">详情</a>
          <a-divider type="vertical" />
          <a @click="handleEdit(record)">编辑</a>
          <a-divider type="vertical" />
          <a-popconfirm title="确定删除吗?" @confirm="() => handleDelete(record.id)">
            <a>删除</a>
          </a-popconfirm>
        </span>

      </a-table>
    </div>
    <!-- table区域-end -->

    <!-- 表单区域 -->
    <!--<MallEmployees-modal ref="MallEmployeesModal" @ok="modalFormOk"></MallEmployees-modal>-->
    <Parameter-modal ref="ParameterModal" @ok="modalFormOk"></Parameter-modal>

  </a-card>
</template>

<script>
  //import MallEmployeesModal from './modules/MallEmployeesModal'
  import ParameterModal from './modules/ParameterModal'
  import { filterObj } from '@/utils/util'
  import { deleteMall,deleteAction,getAction } from '@/api/manage'

  export default {
    name: "ParameterList",
    components: {
      //MallEmployeesModal,
      ParameterModal,
    },
    data () {
      return {
        description: '车辆信息页面',
        // 查询条件
        queryParam: {departmentid:[],name:"",ownership:[],status:[]},
        // 表头
        columns: [
          {
            title: '序号',
            dataIndex: '',
            key:'rowIndex',
            width:50,
            align:"center",
            customRender:function (t,r,index) {
              return parseInt(index)+1;
            }
          },
          {
            title: '车牌号',
            width:80,
            align:"center",
            dataIndex: 'registration'
          },
          {
            title: '隶属项目',
            width:100,
            align:"center",
            dataIndex: 'department'
          },
          {
            title: '归属机构',
            width:100,
            align:"center",
            dataIndex: 'owner'
          },
          {
            title: '司机',
            width:60,
            align:"center",
            dataIndex: 'master'
          },
          {
            title: '权属',
            width:40,
            align:"center",
            dataIndex: 'ownership'
          },
          {
            title: '状态',
            width:40,
            align:"center",
            dataIndex: 'status',
            customRender: function (t, r, index) {
              if(r.status == '1'){
                return '正常';
              }else{
                return '异常';
              }
            }
          },
          {
            title: '更新时间',
            width:80,
            align:"center",
            dataIndex: 'updateTime'
          },
          {
            title: '操作',
            width:80,
            dataIndex: 'action',
            align:"center",
            scopedSlots: { customRender: 'action' },
          }],
        //数据集
        dataSource:[],
        // 分页参数
        type: "radio",
        //地区下拉数据
        regionList: [],
        ipagination:{
          current: 1,
          pageSize: 20,
          pageSizeOptions: ['10', '20', '30'],
          showTotal: (total, range) => {
            return range[0] + "-" + range[1] + " 共" + total + "条"
          },
          showQuickJumper: true,
          showSizeChanger: true,
          total: 0
        },
        isorter:{
          column: 'createTime',
          order: 'desc',
        },
        loading:false,
        selectedRowKeys: [],
        selectedRows: [],
        url: {
          list: "/application/vehicle/getPage",
          listby: "/application/vehicle/getPageBy",
          //listby: "/application/setting/employees/getEmployeesBy",
          delete: "/application/setting/employees/deleteEmployees",
          deleteBatch: "/application/setting/employees/deleteBatch",
          //listRegion: "/application/vehicle/getRegion",
          //listStore: "/application/setting/store/getStore",
        },
      }
    },
    created() {
      this.loadData();
    },
    methods: {
      //地区列表
      /*initialRegionList(){
        var params = "";
        getAction(this.url.listRegion,params).then((res)=>{
          console.log(this.url.listRegion)
          console.log(res)
          if(res.success){
            this.regionList = res.result;
          }else{
            console.log(res.message);
          }
        });
      },*/

      loadData (arg){
        //this.initialRegionList();
        //加载数据 若传入参数1则加载第一页的内容
        if(arg===1){
          this.ipagination.current = 1;
        }
        var params = this.getQueryParams();//查询条件
        console.log(params)

        /*getAction(this.url.list, params).then((res) => {
          console.log(params)
          console.log(res)
          if (res.success) {
            console.log("res.result:",res.result)

            this.dataSource = res.result.data;
            //this.dataSource = res.result;
            this.ipagination.total = res.result.count;
          }
        })*/

        if(params.name || params.departmentid){
          if(!params.name){
            params.name = '';
          }
          if(!params.departmentid){
            params.departmentid = '';
          }
          console.log(params)

          console.log("params.name：",params.name)
          console.log("params.departmentid:",params.departmentid)

          getAction(this.url.listby, params).then((res) => {
            console.log(res)
            if (res.success) {
              //this.dataSource = res.result.records;
              this.dataSource = res.result.data;
              this.ipagination.total = res.result.count;
            }

          })
        }else {
          getAction(this.url.list, params).then((res) => {
            console.log(params)
            console.log(res)
            if (res.success) {
              //this.dataSource = res.result.records;
              this.dataSource = res.result.data;
              this.ipagination.total = res.result.count;
            }
          })
        }

      },
      getQueryParams(){
        var param = Object.assign({}, this.queryParam,this.isorter);
        param.field = this.getQueryField();
        param.pageNo = this.ipagination.current;
        param.pageSize = this.ipagination.pageSize;
        return filterObj(param);
      },
      getQueryField(){
        //TODO 字段权限控制
        var str = "id,";
        for(var a = 0;a<this.columns.length;a++){
          str+=","+this.columns[a].dataIndex;
        }
        return str;
      },
      clickThenCheck(record){
        return {
          on: {
            click: () => {
              this.onSelectChange(record.id.split(","),[record]);
            }
          }
        };
      },
      onSelectChange (selectedRowKeys,selectionRows) {
        this.selectedRowKeys = selectedRowKeys;
        this.selectionRows = selectionRows;
        this.$refs.JeecgOrderCustomerList.getOrderMain(this.selectedRowKeys[0]);
        this.$refs.JeecgOrderTicketList.getOrderMain(this.selectedRowKeys[0]);
      },
      onClearSelected(){
        this.selectedRowKeys = [];
        this.selectionRows = [];
        this.$refs.JeecgOrderCustomerList.queryParam.orderId = null;
        this.$refs.JeecgOrderTicketList.queryParam.orderId = null;
        this.$refs.JeecgOrderCustomerList.loadData();
        this.$refs.JeecgOrderTicketList.loadData();
      },
      searchQuery(){
        this.loadData(1);
      },
      searchReset(){
        var that = this;
        //that.queryParam={};
        that.queryParam.departmentid = [];
        that.queryParam.name = "";
        that.queryParam.ownership = [];
        that.queryParam.status = [];
        that.loadData(1);
      },
      batchDel: function(){
        if(this.selectedRowKeys.length<=0){
          this.$message.warning('请选择一条记录！');
          return ;
        }else{
          var ids = "";
          for(var a =0;a<this.selectedRowKeys.length;a++){
            ids+=this.selectedRowKeys[a]+",";
          }
          var that = this;
          this.$confirm({
            title:"确认删除",
            content:"是否删除选中数据?",
            onOk: function(){
              deleteMall(that.url.deleteBatch,{ids: ids}).then((res)=>{
                if(res.success){
                  that.$message.success(res.message);
                  that.loadData();
                  that.onClearSelected();
                  this.$refs.JeecgOrderCustomerList.loadData();
                  this.$refs.JeecgOrderTicketList.loadData();
                }else{
                  that.$message.warning(res.message);
                }
              });
            }
          });
        }
      },
      handleDelete: function(id){
        var that = this;
        deleteMall(that.url.delete, {id: id}).then((res) => {
          console.log(res)
          if (res.success) {
            that.$message.success(res.message);
            that.loadData();
            this.$refs.JeecgOrderCustomerList.loadData();
            this.$refs.JeecgOrderTicketList.loadData();
          } else {
            that.$message.warning(res.message);
          }
        });
      },
      /*handleEdit: function(record){
        this.$refs.MallEmployeesModal.edit(record);
        this.$refs.MallEmployeesModal.title="编辑";
      },
      handleAdd: function(){
        this.$refs.MallEmployeesModal.add();
        this.$refs.MallEmployeesModal.title="新增";
      },*/

      handleDetail(record){
        console.log("详情 record:",record)
        this.$refs.ParameterModal.edit(record);
        this.$refs.ParameterModal.title="详情";
        this.$refs.ParameterModal.disableSubmit = true;
      },

      handleTableChange(pagination, filters, sorter){
        //分页、排序、筛选变化时触发
        console.log(sorter);
        //TODO 筛选
        if (Object.keys(sorter).length>0){
          this.isorter.column = sorter.field;
          this.isorter.order = "ascend"==sorter.order?"asc":"desc"
        }
        this.ipagination = pagination;
        this.loadData();
      },

      onChangeOS (checkedValues) {
        console.log('checked = ', checkedValues)
      },
      onChangeS (checkedValues) {
        console.log('checked = ', checkedValues)
      },

      modalFormOk () {
        // 新增/修改 成功时，重载列表
        this.loadData();
      }

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
</style>