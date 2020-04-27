<template>
  <div class="list">
    <a-spin :spinning="spinning">
      <a-table
        @change="handleTableChange"
        :columns="config[0].columns"
        :dataSource="config[0].data"
        :pagination="pagination"
        rowKey="id">
        <component
          v-for="column in config[0].columns"
          v-if="column.scopedSlots.customRender"
          :is="column.scopedSlots.component"
          :slot="column.key"
          slot-scope="text, record, index"
          :content="text"
          :record="record"
          :ind="index"
          @refresh="init"
        />
      </a-table>
    </a-spin>
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


  import listMixin from '@/views/application/onlines/car/data/list/modules/config/component.js'
  import CTable from '@/views/chetaui/table/index.js'
  import Template from '../../../../firm/report/system/Mold'
  import { getAction } from '@/api/manage'
  import {getRowSpanCount} from "@/views/application/onlines/car/api/table.js";
  export default {
    name: 'Table',
    components: Object.assign(
      listMixin.components,
      {Template, CTable,}
    ),
    data() {
      return {
        columns : [
          {
            title: '车牌号',
            dataIndex: 'registrationNo',
            align:'center',
            customRender: (value, row, index) => {
              const obj = {
                children: value,
                attrs: {},
              };
              obj.attrs.rowSpan  = getRowSpanCount(this.data,'registrationNo',index);
              return obj;
            }
          },{
            title: 'beginDate',
            dataIndex: 'beginDate',
            align:'center',
            customRender: (value, row, index) => {
              return this.customRender(value, row, index,'biginDate')
            }
            /*"customRender": "(value, row, index) => {return this.customRender(value, row, index,'carNo')}"*/
            },
          {
            title: 'endDate',
            dataIndex: 'endDate',
            align:'center',
            customRender: renderContent,
          }
        ],

        pagination : {
          current: 1,
          pageSize: 10,
          total: 100
        },
        spinning : false,
        url: {
          getDataById : '/application/online/component/dataCenter/getById'
        }
      }
    },
    props: {
      config: {
        type: Array,
        default: () => []
      },
      finalSingleValue: {
        type: String,
        default: () => ''
      }
    },
    watch: {
      //监听方法 刷新数据
      'finalSingleValue': function(value) {
        this.init(value);
      }
    },
    created() {
      this.init({})
    },
    methods: {
      customRender(value, row, index,name){
        const obj = {
          children: value,
          attrs: {},
        };
        obj.attrs.rowSpan  = getRowSpanCount(this.data,name,index);
        return obj;
      },
      handleTableChange(pagination){
        this.pagination = {pageNo:pagination.current,pageSize:pagination.pageSize}
        const pager = { ...this.pagination };
        pager.current = pagination.current;
        this.pagination = pager;
        this.init(this.pagination);
      },
      init(params) {
        try {
          var that = this
          var http = that.config[0].http
          //绑定id
          if (http.id) {
            getAction(that.url.getDataById, {id:http.id}).then(res => {
              if(res.success){
                that.doSuccess(that,res,http,params);
              }
            })
          }else{
            //绑定url(旧组件绑定的不是id,避免出错)
            that.spinning = true;
            var datas = {};
            if (http.params) {
              Object.assign(datas, params, http.params)
            }
            that.initData(http.url, datas);
          }
        } catch (e) {
          that.spinning = false
          console.log('表格显示默认数据!')
        }
      },
      doSuccess(that,res,http,params){
        that.spinning = true
        var arr = [], datas = {},dt = {};
        arr = JSON.parse(res.result.params);
        if(arr){
          arr.forEach(item =>{
            datas[item.title] = item.field;
          })
        }
        Object.assign(dt,http.params,datas,params)
        that.initData(res.result.url, dt);
      },
      initData(url,datas){
        var that = this;
        getAction(url, datas).then(res => {
          that.config[0].data = []
          if(res.success){
            if(datas.pageNo && datas.pageSize){
              that.config[0].data = res.result.data;
              that.pagination.total = res.result.count;
              that.pagination.pageSize = datas.pageSize;
            }else{
              that.config[0].data = res.result
              that.pagination = {}
            }
          }
        }).finally(() => {
          that.spinning = false;
        })
      },
    }
  }
</script>

<style scoped>
  .list {
    margin: 0 15px;
  }
</style>