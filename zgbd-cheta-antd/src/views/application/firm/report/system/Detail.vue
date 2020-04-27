<template>
  <div class="cheta-height-full cheta-report-filed">
    <a-card :bordered="false" size="small" :bodyStyle="{padding: '0px'}">
      <div slot="title" class="cheta-report-title">
        <a-tooltip title="返回文档列表首页" class="cheta-events" @click="doHome">
          <a-icon type="left" />
          <a-avatar src="/logo.png" class="cheta-ml-10"/>
        </a-tooltip>
        <a-input v-model="name" class="cheta-ml-10"/>
      </div>

      <!--<a-spin :spinning="spinning">
        <div class="home">
          <div>
            <span>时间方式：</span>
            <span>
              <a-select :allowClear="true" :size="size" :defaultValue="selectParams[0].name" style="width: 100px;margin-right: 10px" @change="selectChange">
                <a-select-option v-for="item in selectParams" :key="item.key">
                  {{item.name}}
                </a-select-option>
              </a-select>
            </span>
            <span class="picker-left">
              <a-range-picker
                showToday
                :disabledDate="disabledDate"
                v-model="datePicker"
                :format="'YYYY-MM-DD'"
                @change="onChangeTime"/>
            </span>
            <span>
              <a-select
                :value="value"
                style="width: 10%;margin: 10px 10px 10px 10px"
                :defaultActiveFirstOption="false"
                :showArrow="false"
                :filterOption="true"
                placeholder="请选择车牌号"
                @search="handleSearch"
                @change="handleChange"
                @focus="handleFocus"
                showSearch
                :notFoundContent="null"
                optionFilterProp="children"
              >
                <a-select-option v-for="d in carData" :key="d.id">{{d.registrationNo}}</a-select-option>
              </a-select>
            </span>
            <span class="btn-right">
              <a-button icon="search" class="query-table" @click="queryTable" type="primary">查询</a-button>
              <a-button @click="exportTable" icon="export" type="primary">导出报表</a-button>
            </span>
          </div>
          <div>
            &lt;!&ndash;cheta-table&ndash;&gt;
            <a-table
              :bordered="bordered"
              :columns="columns"
              :dataSource="data"
              rowKey="id"
              class="cheta-mt-10 cheta-positionr"
              :pagination="pagination"
              @change="changePagination"
            >
              <component
                v-for="column in columns"
                v-if="column.scopedSlots.customRender"
                :is="column.scopedSlots.component"
                :slot="column.key"
                slot-scope="text, record, index"
                :content="text"
                :record="record"
                :ind="index + countNo"
                @refresh="init"
              />
            </a-table>
          </div>
          <div v-if="tableId === '3262'">
            <component ref="CurveAnalyze" is="Curve"></component>
          </div>
        </div>
      </a-spin>-->
      <IframePageView :url="iframeUrl"></IframePageView>
    </a-card>
  </div>
</template>

<script>
  const renderContent = (value, row, index) => {
    const obj = {
      children: value,
      attrs: {},
    };
    if (index === 4) {
      obj.attrs.colSpan = 0;
    }
    return obj;
  };

  import formMixin from '@/views/application/onlines/car/data/list/modules/config/component.js'
  import {reportColumns} from '../api/api'
  import Confirm from './Confirm'
  import { getAction } from '@/api/manage'
  import moment from 'moment';
  import {getRowSpanCount} from "@/views/application/onlines/car/api/table.js";
  import IframePageView from '@/components/layouts/IframePageView'

  export default {
    name: 'Template',
    components: {
      Confirm,
      IframePageView
    },
    data() {
      return {
        iframeUrl : '',
        bordered : false,
        countNo : 0,
        value: '',
        carData : [],
        urlCar:{
          getData:"/application/car/account/getData",
          reportDetail : '/application/car/report/excel'
        },

        datePicker : [this.moment().subtract(7,'days'), this.moment()],
        selectParams:[
          {name:'本周',key:1},
          {name:'本月',key:2},
          {name:'上月',key:3},
          ],
        typeList:[
          {name:'车务报表',key:1},
          {name:'维修报表',key:1},
          {name:'登记报表',key:1},
        ],
        columns: [],
        data: [],
        disabled: false,
        spinning: true,
        param: this.$route.params,
        name: this.$route.params.name || '',
        pagination : {current:1,pageSize:10,total:100},
        url : '',
        tableId : '',
        params : {},
      }
    },
    created () {
      /*this.initCar();*/
      this.getDetailData (this.param)
      // this.digit = Object.assign(this.columns)
    },
    methods:{
      moment,
      getColumns (params) {
        var $this = this
        /*获取firm_report里面的表头*/
        /*$this.columns = JSON.parse(params.columns)*/
        reportColumns({ menuId: params.menuId}).then(res => {
          if (res.result) {
            /*获取组件里面的表头component*/
            /*$this.columns =res.result.columns*/
            $this.data =res.result.data
            $this.tableId = res.result.id;
            if(res.result.http.url){
              //初始化表格数据
              /*$this.init(res.result.http.url,res.result.http.params);*/
              var param = '';
              if(res.result.user){
                let user = res.result.user;
                param = '?userid='+user.id+'&username='+user.username+'&userpid='+user.orgid+'&rightid=02c659880a00000f25bc71a7a25765ae&industrytype=物流车&iv=null';
              }
              /*param = '?userid=f90b3a3affffffc94eb41ef2250ce02c&username=杨铮强&userpid=f8c008b9ffffffc94eb41ef2e4911030';*/
              $this.url = res.result.http.url
              $this.iframeUrl = res.result.http.url + param
              $this.params = res.result.http.params
            }
            //里程报表
            /*if($this.tableId == '3284'){
              $this.bordered = true;
            }*/
          }
        })
      },
      init(url,params){
        var that = this;
        getAction(url,params).then(res => {
          if(res.result){
            that.data = res.result.data;
            that.pagination.total = res.result.count;
            that.spinning = false;
          }
        })
      },
      customRender(value, row, index,name){
        const obj = {
          children: value,
          attrs: {},
        };
        obj.attrs.rowSpan  = getRowSpanCount(this.data,name,index);
        return obj;
      },
      handleChange(value) {
        this.value = value;
      },
      initCar(){
        let that = this;
        getAction(that.urlCar.getData,{pageNo:1,pageSize:100000}).then(res => {
          if (res.success) {
            that.carData = [];
            res.result.data.forEach(item =>{
              if(item.registrationNo && item.registrationNo != ''){
                that.carData.push({id:item.id,registrationNo:item.registrationNo})
              }
            })
          }
        })
      },
      disabledDate(current) {
        return current && current > moment().endOf('day')
      },
      selectChange(value){
        var that = this;
        if(value === 1){
          //本周
          that.datePicker = [that.moment().startOf('week'), that.moment().endOf('week')];
        }else if(value === 2){
          //本月
          that.datePicker = [that.moment().startOf('month'), that.moment().endOf('month')];
        }else{
          //上月
          that.datePicker = [
            that.moment().month(that.moment().month() - 1).startOf('month'),
            that.moment().month(that.moment().month() - 1).endOf('month')];
        }
        //更改直接初始化
        /*that.spinning = true;
        var dateFormat = 'YYYY-MM-DD';
        var p = {beginDate:that.datePicker[0].format(dateFormat),endDate:that.datePicker[1].format(dateFormat)};
        Object.assign(that.params,p);
        that.init(that.url,that.params);
        if(that.tableId == '3262'){
          that.$refs.CurveAnalyze.initSaveDate(p);
        }*/
      },
      exportTable(){
        this.$message.info("该功能未开通！");
        /*var that = this;
          getAction(that.urlCar.reportDetail,null).then(res => {
          const aLink = document.createElement("a");
          let blob = new Blob([res], {type: "application/vnd.ms-excel"})
          aLink.href = URL.createObjectURL(blob)
          aLink.setAttribute('download', '哈哈哈哈' + '.xlsx') // 设置下载文件名称
          aLink.click()
          this.$refs.loadElement.appendChild(aLink)
          console.log("导出成功");
        })*/
      },
      queryTable(){
        var that = this;
        that.spinning = true;
        var beginDate = that.datePicker[0].format('YYYY-MM-DD');
        var endDate = that.datePicker[1].format('YYYY-MM-DD')
        Object.assign(that.params,{beginDate:beginDate,endDate:endDate,carId:that.value});
        this.init(that.url,that.params);
        if(that.tableId == '3262'){
          that.$refs.CurveAnalyze.initSaveDate(that.params);
        }
      },
      onChangeTime(date, dateString){
        console.log("date:"+date+"dateString : "+dateString);
      },
      changePagination(pagination){
        this.spinning = true;
        const pager = { ...this.pagination };
        pager.current = pagination.current;
        this.pagination = pager;
        this.countNo = (pager.current - 1) * 10;
        Object.assign(this.params,{pageSize:pager.pageSize,pageNo:pager.current})
        this.init(this.url,this.params);
      },
      doHome () {
        this.$router.push({path: '/baobiaozhongxin'});
      },
      getDetailData (param) {
        this.getColumns(param)
      },
    },
    watch: {
      '$route' () {
        this.$destroy(true);
        this.$el.parentNode.removeChild(this.$el);
      }
    }
  }
</script>
<style lang="less">
  .cheta-report-title .ant-input{
    width: 200px;
    border: 0px solid #d9d9d9;
  }
  .cheta-report-title .ant-input:hover{
    border: 1px solid #d9d9d9;
  }
</style>

<style lang="less" scoped>
  .query-table {margin-right: 10px}
  .cheta-button i {font-size: 12px;padding-right: 5px}
  .cheta-table{min-height:580px;}
  .cheta-edit-icon{
    position: absolute;
    top: 142px;
    right: 10px;
  }
  .cheta-digit-border{ border: 1px solid #e8e8e8;}

  .home{ padding: 10px}
  .btn-right{/*margin-left: 10px*/}
</style>