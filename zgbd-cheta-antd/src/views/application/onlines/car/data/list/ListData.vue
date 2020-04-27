<template>
  <div>
    <div>
      <a-button class="cheta-mb-10" @click="handleAdd" type="primary">Add</a-button>
      <a-tooltip placement="top">
        <template slot="title"><span>报表列头</span></template>
        <a-icon class="cheta-ml-30" type="bars" @click="showColumns"/>
      </a-tooltip>
      <a-tooltip placement="top">
        <template slot="title"><span>数据流</span></template>
        <a-icon class="cheta-ml-30" type="database" @click="showData"/>
      </a-tooltip>
      <a-tooltip placement="top">
        <template slot="title"><span>数据字典</span></template>
        <a-icon class="cheta-ml-30" type="file-text" @click="showFlow"/>
      </a-tooltip>
      <p v-if="config[0].http && config[0].http.url">
        <span><a-tag :color="config[0].http.color">{{config[0].http.tagName || config[0].http.httpName}}</a-tag></span>
        <span>url:  </span>
        <span class="url_font">{{briefUrl(config[0].http.url)}}</span>
        <a-tooltip placement="top" title="清除接口与字典">
          <a-icon class="cheta-ml-20" @click="config[0].http = {}" type="close"/>
        </a-tooltip>
      </p>
    </div>
    <a-table bordered :dataSource="config[0].columns" :columns="columns" size="small">
      <template slot="name" slot-scope="text, record">
        <editable-cell :record="record" text="title" @change="onCellChange(record.key, 'title', $event)" />
      </template>
      <template slot="key" slot-scope="text, record">
        <editable-cell :record="record" text="dataIndex" @change="onCellChange(record.key, 'dataIndex', $event)" />
      </template>
      <template slot="operation" slot-scope="text, record,index">
        <a-popconfirm
          title="是否删除该字段?"
          @confirm="() => onDelete(record.key)"
        >
          <a-tooltip title="删除">
            <a href="javascript:;"><a-icon type="delete"/></a>
          </a-tooltip>
        </a-popconfirm>
        <a-dropdown>
          <a-icon type="ellipsis" class="cheta-color cheta-event cheta-pl-5"/>
          <a-menu slot="overlay">
            <a-menu-item @click="doAction(record)"><a href="javascript:;">选择插槽</a></a-menu-item>
            <a-menu-item><a href="javascript:;">搬定权限</a></a-menu-item>
            <a-menu-item @click="insert(index)"><a href="javascript:;">插入一行</a></a-menu-item>
          </a-menu>
        </a-dropdown>
        <span v-if="record.scopedSlots.component">
          <a-tooltip placement="top" :title="record.scopedSlots.slotName">
            <a-icon type="tag" @click="record.scopedSlots = {}" class="cheta-ml-10"/>
          </a-tooltip>
        </span>
      </template>
    </a-table>
    <p><a-button @click="cleanData" type="link">清除表格默认数据(data)</a-button></p>
    <p><a-button @click="cleanColumns" type="link">清除列头默认数据(columns)</a-button></p>
    <ListSlot ref="listSlot" @onCellChange="onCellChange"/>
    <data-center-drawer :params="{type:'get'}" @ok="refreshData" ref="datacenterdrawer" :config="config"></data-center-drawer>
    <flow-drawer @bindFlow="bindFlow" ref="flowdrawer"></flow-drawer>
    <columns-drawer @change="changeColumns" ref="columnsdrawer"></columns-drawer>
  </div>
</template>
<script>
  import DataCenterDrawer from "@/views/application/onlines/car/data/list/button_modules/DataCenterDrawer";
  import FlowDrawer from "@/views/application/onlines/car/data/list/button_modules/FlowDrawer";
  import ColumnsDrawer from "@/views/application/onlines/car/data/list/button_modules/ColumnsDrawer";
  import EditableCell from './modules/EditableCell';
  import ListSlot from './modules/ListSlot'
  import {getAction} from "@/api/manage";

  export default {
    components: {DataCenterDrawer,FlowDrawer,ColumnsDrawer, ListSlot, EditableCell },
    data() {
      return {
        columns: [
          { title: '字段名', dataIndex: 'title', width: '30%', scopedSlots: { customRender: 'name' }, align: 'center'},
          { title: '主键名', dataIndex: 'dataIndex', scopedSlots: { customRender: 'key' }, align: 'center'},
          { title: '操作', dataIndex: 'operation', scopedSlots: { customRender: 'operation' }, align: 'center'},
        ],
      };
    },
    props: {
      config: {
        type: Array,
        default: () => []
      },
    },
    methods: {
      insert(index){
        this.config[0].columns.splice(index, 0,
          {
            title: `字段`,
            dataIndex: '',
            align: 'center',
            sorter: false,
            scopedSlots:{},
            key : new Date().format("yyyyMMddhhmmSS")
          });
      },
      cleanData(){
        this.config[0].data = [];
      },
      cleanColumns(){
        this.config[0].columns = [];
      },
      changeColumns(data){
        this.config[0].columns = data.columns;
        if(data.http){
          this.config[0].http = data.http;
        }
      },
      showColumns(){
        let item = {};
        this.$refs.columnsdrawer.showColumns(item);
      },
      bindFlow(item){
        let params = {flowId:item.id};
        Object.assign(this.config[0].http.params,params);
        this.$message.success("绑定业务（"+item.title+"）成功");
        this.ok(this.config[0].http.params);
      },
      showFlow(){
        let that = this;
        that.config[0].http = that.config[0].http || {};
        if(that.config[0].http.url){
          that.$refs.flowdrawer.showFlow();
        }else{
          that.$message.warning("请先填数据流！1 秒后为您自动弹出");
          setTimeout(() =>{
            that.$message.success("已自动弹出数据流");
            that.showData()
          },800)
        }
      },
      refreshData(item){
        console.log(item.name||'刷新成功');
        /*this.config[0].http = item;*/
        this.ok(item.params);
      },
      ok(params){
        var that = this;
        var url = that.config[0].http.url;
        getAction(url,params).then(res => {
          if(params.pageNo && params.pageSize){
            if(res.result.data){
              that.config[0].data = res.result.data;
            }else{
              that.config[0].data = res.result;
            }
          }else{
            that.config[0].data = res.result
            that.pagination = {}
          }
        })
      },
      showData(){
        let that = this;
        that.config[0].http = that.config[0].http || {};
        that.$refs.datacenterdrawer.showDrawer(that.config[0].http,0);
      },
      onCellChange(key, dataIndex, value) {
        const dataSource = [...this.config[0].columns];
        const target = dataSource.find(item => item.key === key);
        if (target) {
          target[dataIndex] = value;
          this.config[0].columns = dataSource;
        }
      },
      onDelete(key) {
        const dataSource = [...this.config[0].columns];
        this.config[0].columns = dataSource.filter(item => item.key !== key);
      },
      handleAdd() {
        this.config[0].columns.push({
          title: `字段`,
          dataIndex: '',
          align: 'center',
          sorter: false,
          scopedSlots:{},
          key : new Date().format("yyyyMMddhhmmSS")
        });
      },
      doAction (record) {
        this.$refs.listSlot.open(record, this.config[0].columns);
      },
      briefUrl(url){
        try {
          url =  url.substring(url.lastIndexOf('/'),url.length);
          url = url.indexOf('?') != -1?url = url.substring(0,url.indexOf('?')):url;
          return url;
        }catch (e) {
          return url;
        }
      },
    },
  };
</script>