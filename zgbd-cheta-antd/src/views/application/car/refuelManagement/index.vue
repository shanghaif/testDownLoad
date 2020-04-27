<template>
  <div id="refuelManagement">
    <div class="table_header">
      <span style="margin-left: 30px;">机构：</span>
      <a-tree-select
        style="width: 170px;margin-right: 30px"
        :treeData="treeData"
        placeholder="请选择车队"
        @change="onChangeTree"    
      >   <!-- onChangeTree 选择机构id,选择车辆  treeData接口提供数据 -->
      </a-tree-select>
      <span>日期：</span>
      <a-range-picker @change="onChange" class="DateSelection" :format="dateFormat" v-model="date.str"/>
      <a-select defaultValue="0" style="width: 100px;margin-left: 30px"> <!--  @change="handleChange" -->
        <a-select-option value="0">全部状态</a-select-option>
        <a-select-option value="1">待审核</a-select-option>
        <a-select-option value="2">已审核</a-select-option>
        <a-select-option value="3">已驳回</a-select-option>
      </a-select>
      <a-input placeholder="请输入关键词" style="width: 160px;margin-left: 30px;" />
      <a-button type="primary" style="margin-left: 20px;">查询</a-button>
      <a-button type="primary" style="margin-left: 20px;">导入</a-button>
      <a-button type="primary" style="margin-left: 20px;">导出</a-button>
      <a-button type="primary" style="margin-left: 20px;" @click="add">新增</a-button>  <!-- 新增调用子组件 -->
    </div>
    <a-table
      :expandRowByClick="expandRowByClick"
      :columns="columns"       
      :dataSource="data"
      rowKey="id"><!-- “columns 标题栏  :dataSourse 表格数据  @expand="expand" -->
      <div slot="actions" slot-scope="text, record">
        <span class="cheta-event cheta-color mr15" @click="check(record)">审核</span>
        <span class="cheta-event cheta-color mr15" @click="modification(record)">修改</span>
        <span class="cheta-event delete" @click="deleteItem(record)">删除</span>
      </div>
    </a-table>
    <newAdd ref="newAdd" @reload="getData"/>  <!-- 新增组件 调用子方法 新增后调用父组件 -->
    <!--      <a-steps progressDot :current="1">-->
    <!--        <a-step title="提交" description="2019-7-5 14:30" />-->
    <!--        <a-step title="驳回" description="2019-7-5 14:30" />-->
    <!--        <a-step title="完成" description="" />-->
    <!--      </a-steps>-->
  </div>
</template>

<script>
  import { getOrganTree } from '@/api/api.js'  //引入机构->选择车队
  import { getAction } from '@/api/manage'     //封装axios请求
  import newAdd from './modules/newAdd.vue'    //引入新增组件
  import moment from 'moment'
    export default {
        name: "Index",
        components:{newAdd},  //添加新增
        data(){
          return{
            treeData: [],  //机构->车队数据
            organValue: 0,  //
            expandRowByClick: false,
            organizationList: [],
            dateFormat: 'YYYY-MM-DD',
            newaddShow:false,
            date:{
              str: [this.moment().startOf('month'), this.moment()],
            },
            columns: [
              {title: '序号', dataIndex: '', key: '', align: 'center', customRender: function(t, r, index) {return parseInt(index) + 1}},
              { title: '车牌号', dataIndex: 'carName', key: 'carName', align: 'center' },
              { title: '里程数',dataIndex: 'mileage', key: 'mileage',align: 'center'},
              { title: '加油升数', dataIndex: 'oilCapacity', key: 'oilCapacity', align: 'center' },
              { title: '加油金额', dataIndex: 'money', key: 'money', align: 'center' },
              { title: '品种', dataIndex: 'oilQuality', key: 'oilQuality', align: 'center'},
              { title: '油卡卡号', dataIndex: 'cardNumber', key: 'cardNumber' ,align: 'center' },
              { title: '供应商', dataIndex: 'stationName', key: 'stationName',align: 'center' },
              { title: '加油日期', dataIndex: 'createTime', key: 'createTime',align: 'center' },
              // { title: '创建人', dataIndex: 'creator', key: 'creator',align: 'center' },
              // { title: '创建时间', dataIndex: 'creationTime', key: 'creationTime',align: 'center' },
              // { title: '修改时间', dataIndex: 'modificationTime', key: 'creationTime',align: 'center' },
              // { title: '状态', dataIndex: 'state', key: 'state',align: 'center' },
              // { title: '操作', dataIndex: 'actions', key: 'actions', scopedSlots: { customRender: 'actions' } ,align: 'center' },
            ],
            data:[
              // {
              // carNum: '粤A-58969',
              // mileage: '150km',
              // refuel: '50L',
              // money: '283',
              // variety: '92号汽油（国VI）',
              // OilCardNumber: '1000114400005141653',
              // supplier: '广州珠江二加油站',
              // date: '2019-7-5',
              // creator: '孟小斯',
              // creationTime: '2019-7-5 14:30',
              // modificationTime: '2019-7-5 14:30',
              // state: '已驳回',
              // },
            ],
          }
        },
        created() {
          // debugger;
          let $this = this;
          getOrganTree().then(res => {
            $this.treeData = res.result
          })
          this.getData();
        },
        methods: {
          onExpand(expandedKeys) {
            this.expandedKeys = expandedKeys;
            this.autoExpandParent = false;
          },
          getData () {
            getAction('/application/car/vehicle/refuel/getPage', {pageSize:10, pageNo:1} ).then(res => {
              this.data = res.result.data
            })
          },
          // 日期选择
          onChange(date, dateString) {
            console.log(date, dateString);
          },
          onChangeTree(value) {//选择机构id 刷新车辆    未完成
            let $this = this;
            $this.organValue = value 
            console.log($this.organValue)
            getAction('/application/car/driver/getById', value).then(res => {
              $this.initDriverInfo({ pageNo: 1, pageSize: 6 ,organid : value})
            })
          },
          initDriverInfo(params) {  
            // organId: this.userOrgan,
            getAction('/application/car/driver/page', params).then(res => {
              let $this = this
              console.log(res)
              $this.organizationList = []
              $this.count = res.count
              $this.organizationList = res.data//数组
              $this.pageSizes = res.data.length
            })
          },
          disabledDate(current) {
            return current && current > moment().endOf('day');
          },
          moment,
          check(record){
            
          },
          modification(record){

          },
          deleteItem(record){

          },
          add(){
            this.$refs.newAdd.open();
          }
      }
    }
</script>

<style lang="scss" scoped>
  .ant-select-tree-child-tree-open{
    overflow: auto;
  }
  .table_header{
    height: 32px;
    margin-bottom: 30px;
    span,.ant-select,.ant-input,.ant-select-selection,.ant-btn{
      float: left;
    }
    span{
      height: 32px;
      line-height: 32px;
    }
  }
  .mr15{
    margin-right: 15px;
  }
  .delete{
    color: #F11A1B;
  }
  .newadd{
    position:relative;
    left:0;
    right:0;
    top:250px;
    width:1000px;
    height:500px;
    margin:0 auto;
    background:#eaeaea;
    border:1px solid #999;
    z-index:999;
  }
  .close{
    position: absolute;
    right:10px;
    top:10px;
    width:36px;
    height:36px;
    line-height:36px;
    text-align: center;
    font-size:36px;
    color:#fff;
    border-radius: 50%;
  }
</style>