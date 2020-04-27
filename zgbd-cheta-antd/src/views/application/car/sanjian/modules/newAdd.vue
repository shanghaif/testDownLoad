<template>
    <!-- 弹窗黑色半透背景 -->
  <a-modal v-model="newaddShow" @ok="getData" title="新增三检任务" width="1050px">
    <!-- 新增弹窗 -->
    <div class="newadded">
        <div class="content">
          <div class="addinput">
            <span>任务标题:</span>
            <a-input placeholder="请输入标题" style="flex:1" v-model="taskName" />
          </div>
          <div class="addinput">
            <div class="three">
              <span>任务类型:</span>
              <a-select defaultValue="1" class="w200" v-model="tasktype" @change="vinspection"> <!--  @change="handleChange" -->
                <a-select-option :value="1">车辆检查</a-select-option>
                <a-select-option :value="2">日常三检</a-select-option>
                <a-select-option :value="3">定期抽查</a-select-option>
              </a-select>
            </div>
            <div class="three">
              <span>开始日期:</span>
              <a-date-picker class="timeslot w200 mrn" placeholder="开始时间" @change="firstChange" />
            </div>
            <div class="three">
              <span>结束日期:</span>
              <a-date-picker class="timeslot w200 mrn" placeholder="结束时间" @change="lastChange" />
            </div>
          </div>
          <div class="addinput">
            <div class="three" v-if="tasktype!==3">
              <span>选择车辆:</span>
              <a-input placeholder="这辆总数" class="w200 flex1" v-model="cartotal" disabled />
            </div>
            <div class="three" v-else>
              <span>选择车辆:</span>
              <div @click="carVisible = true" class="carselection" v-if="carList.length > 0">
                {{ carList[0].title}}
              </div>
              <div @click="carVisible = true" class="carselection" v-else>
                '请选择车辆' 
              </div>
              <!-- <a-cascader class="w200 mrn" @click="carVisible = true" placeholder="请选择车辆" /> -->
            </div>
            <div class="three">
              <span>车辆总数:</span>
              <a-input placeholder="自动生成" class="w200 flex1" :value="tasktype!=3?carList.length:sumCar" disabled />
            </div>
            <div class="three">
              <span>发布日期:</span>
              <a-input placeholder="发布日期" class="w200 flex1" :value="new Date().getFullYear()+'-'+(new Date().getMonth()+1)+'-'+new Date().getDate()" disabled />
            </div>
          </div>
          <div class="addinput">
            <span>三检备注:</span>
            <textarea placeholder="请输入三检说明" class="bz flex1" v-model="remarks"></textarea>
          </div>
          <div class="addinput">
            <span>三检项目:</span>
            <div class="flex1 icons">
              <a-icon type="plus-circle" @click="addsize" :style="{fontSize:'18px',color:'#36804e',marginTop:'7px',marginRight:'10px'}" />
              <a-icon type="minus-circle" @click="shansize" :style="{fontSize:'18px',color:'#b52e4c',marginTop:'7px',marginRight:'10px'}" />
            </div>
          </div>
          <a-table
            :columns="addtitle"
            :dataSource="adddata"
            :rowSelection="rowSelection"
            :pagination="false"          
            style="margin-top:20px;">    <!-- :rowSelection选择框 :pagination="false"隐藏分页栏  @expand="expand" :expandRowByClick="expandRowByClick" rowKey="id" -->
            <div slot="initems" slot-scope="text, record">
              <a-select v-model="record.selectid" @change="newaddpart1(record)">
                <a-select-option v-for="select of record.array1" :key="select.id">{{select.inspectTypeName}}</a-select-option>
              </a-select>
            </div>
            <div slot="subitems" slot-scope="text, record">
              <a-select v-model="record.selectid1" @change="newaddpart2(record)">
                <a-select-option v-for="select of record.array2" :key="select.id">{{select.inspectTypeName}}</a-select-option>
              </a-select>
            </div>
            <div slot="incontent" slot-scope="text, record">
              <a-select v-model="record.selectid2">
                <a-select-option v-for="select of record.array3" :key="select.id">{{select.contentName}}</a-select-option>
              </a-select>
            </div>
          </a-table>
          <a-modal
            title="添加车辆号"
            centered
            v-model="carVisible"
            @ok="addCar"
          >
            <Structure @carCheckShow="carCheckShow" style="max-height: 500px;overflow-y: scroll"/>
          </a-modal>
        </div>
    </div>
  </a-modal>
</template>

<script>
  import { getAction,postAction } from '@/api/manage'
  import Structure from '@/views/application/car/map/Structure'

  export default {
    components: {Structure},
    data() {
      return {
        car: {},
        carVisible: false,
        newaddShow:false,
        tasktype:1,
        taskName:'',
        firsttime:'000',
        lasttime:'333',
        remarks:'',   //三检备注
        cartotal:'3000',
        inspectProjectIds:1,
        addall:false,
        selectedoptions:[],
        selectedoptions2:[],
        selectedoptions3:[],
        rowSelection:{
          onChange: (selectedRowKeys, selectedRows) => {
            this.shanarr = selectedRowKeys
          },
          onSelect: (record, selected, selectedRows) => {
            console.log(record, selected, selectedRows);
          },
          onSelectAll: (selected, selectedRows, changeRows) => {
            console.log(selected, selectedRows, changeRows);
            this.addall = selected
          },
        },
        //新增table title
        addtitle:[
          {title: '序号', dataIndex: '', key: '', align: 'center', customRender: function(t, r, index) {return parseInt(index) + 1}},
          { title: '检查项目', dataIndex: 'initems', key: 'initems', scopedSlots:{customRender:'initems'}, align: 'center' },
          { title: '分项目',dataIndex: 'subitems', key: 'subitems', scopedSlots:{customRender:'subitems'},align: 'center'},
          { title: '检查内容', dataIndex: 'incontent', key: 'incontent', scopedSlots:{customRender:'incontent'}, align: 'center' },
        ],
        adddata:[
          {
            selectid: '',
            selectid1:'',
            selectid2:'', 
            array1: [],
            array2: [],
            array3: [],
          },
        ],
        carList: [],
        shanarr:"",
      }
    },
    created(){
      this.newaddpart1(this.adddata[0]);
    },
    methods: {
        getData () {
          let param = {
              inspectType: this.tasktype,
              taskName: this.taskName,
              taskStartTime: this.firsttime,
              taskEndTime: this.lasttime,
              taskRemarks:this.remarks,
            inspectProjectIds:this.inspectProjectIds,
          }
          var $this = this;
          postAction('/application/car/inspect/saveInspect?inspectProjectIds='+this.inspectProjectIds , param ).then(res => {
            // debugger;
            console.log(res)
            console.log(param)
            // $this.$message.success("添加成功")
            $this.$emit('reload');   //添加成功后调用父组件
            $this.newaddShow = false;
          })
        },
        // 日期选择
        firstChange(date, dateString) {
          console.log(dateString);
          this.firsttime = dateString
        },
        lastChange(date, dateString) {
          console.log(dateString);
          this.lasttime = dateString
        },
        open () {
          this.newaddShow = true;
        },
        close () {
          this.newaddShow = false;
        },
        newShow(){
          this.$emit('reload')
          this.newaddShow = false;
          console.log(1)
        },
        vinspection(value) {
          console.log(value);
        },
        carseleonChange(value) {
          console.log(value);
        },
        addCar () {
          this.carVisible = false
        },
        carCheckShow(list) {
          // debugger;
          this.carList = list
          console.log(this.carList)
        },
        addsize(){
          var data = {
            selectid: '',
            selectid1:'',
            selectid2:'', 
            array1: [],
            array2: [],
            array3: [],
          };
          this.adddata.push(data);
          this.newaddpart1(this.adddata[this.adddata.length - 1]);
        },
        shansize(){
          console.log(this.adddata)
          console.log(this.shanarr)
          
          var $this = this;
          // debugger;
          this.shanarr.forEach(item => {
            $this.adddata.splice(item, 1)
          })
          $this.shanarr = []
          this.selectedRows = []
          // debugger;
        },
        newaddpart1(record){
          var $this = this;
          getAction('/application/car/inspect/type/getCtInspectType',{pageNo:1,pageSize:10,parentId:0}).then(res=>{
            record.array1 = res.data
            record.selectid = res.data[0].id
            $this.newaddpart2(record);
          })
        },
        newaddpart2(record){
          var $this = this;
          getAction('/application/car/inspect/type/getCtInspectType',{pageNo:1,pageSize:10,parentId:record.selectid}).then(res=>{
            record.array2 = res.data
            record.selectid1 = res.data[0].id
            $this.newaddpart3(record)
          })
        },
        newaddpart3(record){
          getAction('/application/car/inspect/content/getCtInspectTypeContente',{pageNo:1,pageSize:10,parentId:record.selectid1}).then(res=>{
            record.array3 = res.data
            record.selectid2 = res.data[0].id
            console.log(res.data)
            console.log(record.selectid2)
            this.inspectProjectIds = record.selectid2
          })
        },  
    },
  }
</script>

<style lang="scss" scoped>
  .flex1{flex:1}
  .newadded{
    .content{
      .addinput{
        display: flex;
        justify-content: space-between;
        margin-top:23px;
        margin-botton:23px;
        span{
          font-size:14px;
          color:#666;
          padding-right:10px;
          line-height:32px;
        }
        .three{
          display:flex;
          justify-content:space-between;
          .mrn{padding-right:0}
          .carselection{
            width:200px;
            border:1px solid #d9d9d9;
            padding-left:10px;
            line-height: 30px; 
            color:#999;
            border-radius:4px;
          }
        }
        .bz{
          border:1px solid #ddd;
          border-radius: 4px;
          padding:5px;
        }
        textarea::-webkit-input-placeholder {color: #ccc;}
        textarea:-moz-placeholder {color: #ccc;}
        textarea::-moz-placeholder {color: #ccc;}
        textarea::-ms-input-placeholder {color: #ccc;}
      }
      .w200{
        width:200px;
      }
      .subicon{
        position: absolute;
        right:41px;
        bottom:24px;
        .qx{
          width:80px;
          height:32px;
          margin-left:10px;
        }
        .tj{
          width:80px;
          height:32px;
          margin-left:10px;
          background-color: #13C2C2;
          border:1px solid #13C2C2;
          color:#fff;
        }
        .tj:hover{
          background:#36cfc9;
        }
      }
    }
  }
</style>
