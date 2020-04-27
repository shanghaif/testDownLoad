<template>
  <div>
    <a-drawer
      :title="title"
      width=400
      placement="right"
      :closable="false"
      :visible="visable"
    >
      <data-center-drawer @ok="deb = true" :params="{type:'get'}" ref="datacenterdrawer" :config="null"></data-center-drawer>
      <flow-drawer ref="flowdrawer" @bindFlow="bindFlow"></flow-drawer>
      <div>
        <a-button class="cheta-mb-10" @click="handleAdd" type="primary" icon="plus">添加字段</a-button>
        <a-tooltip placement="top" title="数据流">
          <a-icon class="cheta-ml-30" type="database" @click="showData"/>
        </a-tooltip>
        <a-tooltip placement="top" title="数据字典">
          <a-icon class="cheta-ml-30" type="file-text" @click="showFlow"/>
        </a-tooltip>
        <a-tooltip placement="top" title="Json数据格式编写">
          <a-icon class="cheta-ml-30" type="edit" @click="jsonEdit"/>
        </a-tooltip>
      </div>
      <p>
        <span v-if="(result.http && result.http.url)">
          <span>接口：</span>
          <span><a-tag :color="result.http.color || 'orange'">{{result.http.httpName||result.http.name||'暂无名称'}}</a-tag></span>
          <a-tooltip placement="top" title="清除接口与字典"><a-icon @click="result.http = {}" type="close"/></a-tooltip>
        </span>
      </p>
      <p>
        <span v-if="(result.http && result.http.params)">
          <span>数据字典：</span>
          <span><a-tag :color="result.http.color || 'orange'">{{result.http.dictionaryName||'暂无绑定'}}</a-tag></span>
        </span>
      </p>
      <a-spin :spinning="spinning">
        <a-table class="cheta-mb-10" :dataSource="dataSource" :columns="columns" size="small">
          <template slot="title" slot-scope="text, record">
            <editable-cell :record="record" text="title" @change="onCellChange(record.key, 'title', $event)" />
          </template>
          <template slot="dataIndex" slot-scope="text, record">
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
        <ListSlot ref="listSlot" @onCellChange="onCellChange"/>
      </a-spin>
      <div>
        <a-button @click="visable = false">取消</a-button>
        <a-button type="primary" class="cheta-ml-16" @click="save">保存</a-button>
      </div>
      <p style="margin-top: 10px;" v-if="(result && result.http) || deb">
        <a-button type="file-text" @click="debugData">测试数据</a-button>
      </p>
    </a-drawer>
    <editor-modal ref="editormodal" @save="editData"></editor-modal>
    <detail-modal ref="detailmodal"></detail-modal>
  </div>
</template>

<script>
  import {postAction} from "@/api/manage";
  import {reportColumns} from "@/views/application/firm/report/api/api";
  import EditableCell from '@/views/application/onlines/car/data/list/modules/EditableCell';
  import ListSlot from '@/views/application/onlines/car/data/list/modules/ListSlot'
  import DataCenterDrawer from "@/views/application/onlines/car/data/list/button_modules/DataCenterDrawer";
  import FlowDrawer from "@/views/application/onlines/car/data/list/button_modules/FlowDrawer";
  import EditorModal from "./EditorModal";
  import DetailModal from "./DetailModal";
  export default {
    name: 'TableDrawer',
    components: {EditableCell,DataCenterDrawer,FlowDrawer,EditorModal,ListSlot,DetailModal },
    data() {
      return {
        title:'报表数据',
        columns: [
          { title: '字段名', dataIndex: 'title',  scopedSlots: { customRender: 'title' }, align: 'center'},
          { title: '主键名', dataIndex: 'dataIndex', scopedSlots: { customRender: 'dataIndex' }, align: 'center'},
          { title: '操作', dataIndex: 'operation', scopedSlots: { customRender: 'operation' }, align: 'center'},
        ],
        api: {
          getComponentsById: "/application/online/component/getComponentsById",
          insertUpdateList: "/application/online/component/insertUpdateList",
          insertUpdate : "/application/online/component/insertUpdate"
        },
        visable : false,
        spinning : false,
        result : {},
        dataSource : [],
        item : {},
        deb : false
      }
    },
    methods: {
      debugData(){
        if(this.result && this.result.http.url){
          this.$refs.detailmodal.showModal(this.result);
        }
      },
      insert(index){
        this.dataSource.splice(index, 0,
          {
            title: `字段`,
            dataIndex: '',
            align: 'center',
            sorter: false,
            scopedSlots:{},
            key : new Date().format("yyyyMMddhhmmSS")
          });
      },
      editData(result){
        this.dataSource = result.columns;
        this.result = result;
      },
      jsonEdit(){
        let that = this;
        that.$refs.editormodal.open(JSON.stringify(this.result) || '');
      },
      //初始化表格数据
      initTable(params){
        console.log(params);
        /*var that = this;
        var url = that.result.http.url;
        getAction(url,params).then(res => {
          if(res.success){
            that.result.data = res.result;
          }
          console.log(res.message);
        })*/
      },
      bindFlow(item){
        let params = {flowId:item.id};
        this.result.http.params = params;
        this.result.http.dictionaryName = item.title;
        this.$message.success("绑定业务（"+item.title+"）成功");
      },
      showFlow(){
        let that = this;
        if(that.result.http && that.result.http != {}){
          that.$refs.flowdrawer.showFlow();
        }else{
          that.$message.warning("请先填数据流！1 秒后为您自动弹出");
          setTimeout(() =>{
            that.$message.success("已自动弹出数据流");
            that.showData()
          },800)
        }
      },
      showData(){
        let that = this;
        that.result.http = that.result.http || {};
        that.$refs.datacenterdrawer.showDrawer(that.result.http,0);
      },
      save(){
        var that = this;
        let id = undefined;
        if(that.result.id){
          id = that.result.id;
          delete that.result.id;
        }else{
          that.result = {}
        }
        that.result.columns = that.dataSource
        let data = JSON.parse(JSON.stringify([that.result]));
        if(data.length > 1){
          data[1].space = 24;
          data[2].gutterKey = 5;
          data[2].current = 1;
        }else{
          data.push({space:24},{gutterKey : 5,current : 1});
        }
        data = JSON.stringify(data);

        let paramsAdd = {tagId:'a6bc50c6c0234295b9d2e8f6da82a546',projectId : that.item.id, projectName : that.item.name, name : 'List',configName : 'ListData',pageType : '3',parentId : '2',data : data,};
        let paramsUpdate = {id:id, data : data};
        postAction(that.api.insertUpdate, id?paramsUpdate:paramsAdd).then(res => {
          if (res.success) {
            that.$message.success(res.message)
            that.visable = !that.visable
          }
        });
      },
      showDrawer(item){
        var that = this;
        that.visable = true;
        that.spinning = true;
        that.deb = false;
        that.title = '【'+item.name+ '】 报表';
        reportColumns({menuId: item.id}).then(res => {
          that.result = {}
          if (res.success) {
            that.result = res.result || {};
            that.dataSource = that.result.columns || [];
            that.item = item;
            that.spinning = false;
          }
        })

      },
      onCellChange(key, dataIndex, value) {
        const dataSource = [...this.result.columns];
        const target = dataSource.find(item => item.key === key);
        if (target) {
          target[dataIndex] = value;
          this.dataSource = dataSource;
        }
      },
      onDelete(key) {
        const dataSource = [...this.dataSource];
        this.dataSource = dataSource.filter(item => item.key !== key);
      },
      doAction (record) {
        this.$refs.listSlot.open(record, this.result.columns);
      },
      handleAdd() {
        this.dataSource.push({
          title: `字段`,
          dataIndex: '',
          align: 'center',
          sorter: false,
          scopedSlots:{},
          key : new Date().format("yyyyMMddhhmmSS")
        });
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
    }
  }
</script>

<style scoped>

</style>