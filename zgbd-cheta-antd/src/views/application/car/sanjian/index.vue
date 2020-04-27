<template>
  <div id="refuelManagement" style="overflow:hidden">
    <!-- 面包削 -->
    <a-breadcrumb separator=">" class="topnav">
      <a-breadcrumb-item>智慧管车</a-breadcrumb-item>
      <a-breadcrumb-item href="">安全车技</a-breadcrumb-item>
      <a-breadcrumb-item href="">车辆三检</a-breadcrumb-item>
    </a-breadcrumb>
    <hr />
    <!-- 查询条件栏 -->
    <div class="table_header">
      <span>机构：</span>
      <a-tree-select
        style="width: 170px;margin-right: 30px"
        :treeData="treeData"
        placeholder="请选择车队"
      >  <!-- @change="onChangeTree" -->
      </a-tree-select>
      <span>日期：</span>
      <a-date-picker class="timeslot" placeholder="起始时间" />  <!--  @change="onChange" -->
      <span class="timeg"></span>
      <a-date-picker class="timeslot" placeholder="结束时间" />  <!--  @change="onChange" -->
      <!-- <a-range-picker @change="onChange" class="DateSelection" :format="dateFormat" v-model="date.str"/> -->
      <span style="margin-left:30px;">标题：</span>
      <a-input placeholder="请输入标题" style="width:100px" />
      <span style="margin-left:30px;">状态：</span>
      <a-select defaultValue="0" style="width: 100px;">  <!--  @change="handleChange" -->
        <a-select-option value="0">全部</a-select-option>
        <a-select-option value="1">待审核</a-select-option>
        <a-select-option value="2">已审核</a-select-option>
        <a-select-option value="3">已驳回</a-select-option>
      </a-select>
      <!-- <a-input placeholder="请输入关键词" style="width: 160px;margin-left: 30px;" /> --><!-- 输入框 -->
      <a-button type="primary" style="margin-left: 20px;">查询</a-button>
      <a-button type="primary" style="margin-left: 20px;">导入</a-button>
      <a-button type="primary" style="margin-left: 20px;" @click="add">新增</a-button>
      <a-radio-group class="stat" v-model="valuex">  <!-- @change="onChange" -->
        <a-radio :value="1">统计</a-radio>
        <a-radio :value="2">事件</a-radio>
      </a-radio-group>
    </div>
    <!-- 统计table -->
    <a-table
      :columns="statistics"
      :dataSource="statdata"
      :rowSelection="rowSelection"
      :pagination="pagination"
      rowKey="id"
      v-if="valuex === 1">
      <div slot="carRate">  <!--  slot-scope="text, record" -->
        <span class="cheta-event">{{carRate}}</span>
      </div>
      <div slot="carState">  <!--  slot-scope="text, record" -->
        <span class="cheta-event">{{carState}}</span>
      </div>
      <div slot="actions" slot-scope="id,record">  <!--  slot-scope="text, record" -->
        <!-- {{ record }} -->
        <span class="cheta-event cheta-color" @click="statdeta(record.id)">详情</span>
      </div>
    </a-table>
    <!-- 事件table -->
    <a-table
      :columns="sjevent"
      :dataSource="eventdata"
      :rowSelection="rowSelection"
      :pagination="pagination"
      rowKey="id"
      v-if="valuex === 2">
      <div slot="sjSpeed">  <!--  slot-scope="text, record" -->
        <span class="cheta-event">{{sjSpeed}}</span>
      </div>
      <div slot="actions" slot-scope="id,record">  <!--  slot-scope="text, record" -->
        <span v-if="examines==6">
          <!-- {{ record }} -->
          <span class="cheta-event cheta-color mr15" @click="evedet(record.inspectCarId)">详情</span>
          <span class="cheta-event cheta-color" style="color:#aaa">审核</span>
        </span>
        <span v-else>
          <!-- {{ record }} -->
          <span class="cheta-event cheta-color mr15" @click="evedet(record.inspectCarId,examines)">详情</span>
          <span class="cheta-event cheta-color" @click="toexam(record.inspectCarId,examines)">审核</span>
        </span>
      </div>
      <div slot="sjsh">{{sjstate}}</div>
      <a-rate slot="evaluateScore" v-model="evaluateScore" /> 
    </a-table>
    <newAdd ref="newAdd" @reload="statData" />    <!-- 统计:新增 -->
    <statDetails ref="statDetails" />  <!-- 统计:详情 -->
    <Toexamine ref="Toexamine" @reload="statData" />  <!-- 事件:审核 -->
    <Eventdetails ref="Eventdetails" />  <!-- 事件:详情 -->
  </div>
</template>

<script>
  import { getAction,postAction } from '@/api/manage'
  import newAdd from './modules/newAdd.vue'
  import statDetails from './modules/statDetails.vue'
  import Toexamine from './modules/Toexamine.vue'
  import Eventdetails from './modules/Eventdetails.vue'
  import moment from 'moment'
 
    export default {
        name: "Index",
        components: { newAdd, statDetails, Toexamine, Eventdetails },
        data(){
          return{
            treeData: [],
            organValue: 0,
            expandRowByClick: false,
            organizationList: [],
            dateFormat: 'YYYY-MM-DD',
            valuex:1,     //统计事件value
            evaluateScore:2,  //星星评分
            examines:1,  //审核参数
            carRate:'',
            carState:'',
            sjSpeed:'',
            taskEndTime:'',
            id:'',
            inspectCarId:'',
            sjstate:'',
            pagination:{
              defaultPageSize:8,
              showTotal: total => `共 ${total} 条数据`,
              onShowSizeChange:(current, pageSize)=>this.pageSize = pageSize
            },
            rowSelection:{
              onChange: (selectedRowKeys, selectedRows) => {
                console.log(`selectedRowKeys: ${selectedRowKeys}`, 'selectedRows: ', selectedRows);
              },
              onSelect: (record, selected, selectedRows) => {
                console.log(record, selected, selectedRows);
              },
              onSelectAll: (selected, selectedRows, changeRows) => {
                console.log(selected, selectedRows, changeRows);
              },
            },
            date:{
              str: [this.moment().startOf('month'), this.moment()],
            },
            //统计table title
            statistics: [
              {title: '序号', dataIndex: '', key: '', align: 'center', customRender: function(t, r, index) {return parseInt(index) + 1}},
              { title: '任务标题', dataIndex: 'taskName', key: 'taskName', align: 'center' },
              { title: '三检车辆总数',dataIndex: 'sumCar', key: 'sumCar',align: 'center'},
              { title: '完成三检车辆', dataIndex: 'fulfilCar', key: 'fulfilCar', align: 'center' },
              { title: '完成率', dataIndex: 'carRate', key: 'carRate', scopedSlots:{customRender:'carRate'}, align: 'center' },
              { title: '状态', dataIndex: 'carState', key: 'carState',scopedSlots: { customRender: 'carState' } , align: 'center'},
              { title: '发布时间', dataIndex: 'createTime', key: 'createTime' ,align: 'center' },
              { title: '操作', dataIndex: 'actions', key: 'actions', scopedSlots: { customRender: 'actions' } ,align: 'center' },
            ],
            //事件table title
            sjevent:[
              {title: '序号', dataIndex: '', key: '', align: 'center', customRender: function(t, r, index) {return parseInt(index) + 1}},
              { title: '车牌号', dataIndex: 'registrationNo', key: 'registrationNo', align: 'center' },
              { title: '三检主题',dataIndex: 'taskName', key: 'taskName',align: 'center'},
              { title: '驾驶员', dataIndex: 'driver_name', key: 'driver_name', align: 'center' },
              { title: '所属营业部', dataIndex: 'name', key: 'name', align: 'center' },
              { title: '三检进度', dataIndex: 'sjSpeed', key: 'sjSpeed',scopedSlots:{customRender:'sjSpeed' }, align: 'center'},
              { title: '任务下发时间', dataIndex: 'taskStartTime', key: 'taskStartTime' ,align: 'center' },
              { title: '状态', dataIndex: 'sjstate', key: 'sjstate' , scopedSlots:{customRender:'sjsh' },align: 'center' },
              { title: '评分', dataIndex: 'evaluateScore', key: 'evaluateScore' ,scopedSlots:{customRender:'evaluateScore'},align: 'center' },
              { title: '评价', dataIndex: 'evaluateContent', key: 'evaluateContent' ,align: 'center' },
              { title: '操作', dataIndex: 'actions', key: 'actions', scopedSlots: { customRender: 'actions' } ,align: 'center' },
            ],
            //统计table size
            statdata:[
              {
              taskName: '2020年3月20日三检',   //统计：事件标题
              sumCar: '360',                 //统计：三检车辆总数
              fulfilCar: '1',              //统计：完成三检车辆      //统计：完成率
              carState: '完成',                //统计：状态
              createTime: '2020-3-30 10:00',   //统计：发布时间
              },
            ],
            //事件table size
            eventdata:[
              {
              registrationNo: '粤A 59G60',    //事件：车牌号
              taskName: '2020年3月20日三检',           //事件：三检主题
              driver_name: '顾继思',         //事件：驾驶员
              name: '天河员村营业部',       //事件：
              taskStartTime: '2020-3-30 10:20',
              evaluate:'very good!',
              },
            ],
          }
        },
        created() {     //页面刷新时发请求
          this.statData();
          this.eventData();
        },
        methods: {
          statData () {
            getAction('/application/car/inspect/getCtInspect', {pageSize:10, pageNo:1} ).then(res => {
              this.statdata = res.data
              for(var stat of this.statdata){
                this.carRate = (stat.fulfilCar/stat.sumCar*100).toFixed(2) + '%'
                this.taskEndTime = new Date(stat.taskEndTime).getTime()
                this.id = stat.id
                
              }
              if(this.taskEndTime > Date.parse(new Date())){
                this.carState = '进行中'
              }else{
                this.carState = '完成'
              }
              console.log(res)
            })
          },
          eventData () {
            var $this = this;
            getAction('/application/car/inspect/getCtInspectInfo', {pageSize:10, pageNo:1} ).then(res => {
              this.eventdata = res.data
              for(var event of this.eventdata){
                this.sjSpeed = event.fulfilCar+'/'+event.sumCar
                this.inspectCarId = event.inspectCarId
                this.evaluateScore = event.evaluateScore
                $this.pagination.total = res.data.length
                this.examines = event.inspectState
                console.log(event.inspectState)
                if(event.inspectState == 1){
                  this.sjstate = '待指派'
                }else if(event.inspectState == 2){
                  this.sjstate = '待指派'
                }else if(event.inspectState == 3){
                  this.sjstate = '已驳回'
                }else if(event.inspectState == 4){
                  this.sjstate = '处理中'
                }else if(event.inspectState == 5){
                  this.sjstate = '待审核'
                }else{
                  this.sjstate = '已审核'
                }
              }
              console.log(this.evaluateScore)
              // this.statdata[0].carRate.toFixed(2) = this.statdata[0].fulfilCar/this.statdata[0].sumCar*100
              console.log(res.data)
            })
          },
          // 日期选择
          onChange(date, dateString) {
            console.log(date, dateString);
          },
          moment,
          add(){
            this.$refs.newAdd.open();
          },
          statdeta(id){
            this.$refs.statDetails.open(id);
          },
          toexam(id){
            this.$refs.Toexamine.open(id);
          },
          evedet(id){
            this.$refs.Eventdetails.open(id);
          },
          handleChange(value) {
            console.log(`selected ${value}`);
          },
      }
    }
</script>

<style lang="scss" scoped>
  .topnav{margin:15px 0;}
  .timeslot{width:160px; height:32px;border-radius:3px;}
  .timeg{display: inline-block;margin:15px 5px; width:5px;height:1px !important;background:#666;}
  .stat{margin-top:5px;margin-left:30px;}
  .ant-checkbox-indeterminate{
    background-color:none;
  }
  .ant-select-tree-child-tree-open{
    overflow: auto;
  }
  .table_header{
    height: 32px;
    margin: 30px 0;
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
  
</style>