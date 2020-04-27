<template>
  <div>
    <a-tabs defaultActiveKey="1">
      <a-tab-pane tab="数据" key="1">
        <a-card>
          <div class="hoverBlu" @click="deleteElement(index)" v-for="(element,index) in config[0].elements">
            <component :is="element.name" :bind="element.data" class="cheta-m-10"/>
          </div>
        </a-card>
        <a-card>
          <a-form-item label="操作类型" :label-col="{ span: 4 }" :wrapper-col="{ span: 20 }">
            <div class="hoverBlu" @click="addElement(element)" v-for="element in config[0].library">
              <component :is="element.name" :bind="element.data" class="cheta-m-10"/>
            </div>
          </a-form-item>
        </a-card>
            <a-button class="cheta-mb-10" @click="handleAdd" type="primary">Add</a-button>
            <a-table bordered :dataSource="config[0].columns" :columns="columns" size="small">
              <template slot="name" slot-scope="text, record">
                <editable-cell :record="record" text="title" @change="onCellChange(record.key, 'title', $event)" />
              </template>
              <template slot="key" slot-scope="text, record">
                <editable-cell :record="record" text="dataIndex" @change="onCellChange(record.key, 'dataIndex', $event)" />
              </template>
              <template slot="operation" slot-scope="text, record">
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
                  </a-menu>
                </a-dropdown>
              </template>
            </a-table>
      </a-tab-pane>
      <a-tab-pane tab="请求数据" key="2">
        <a-card :bordered="true">
          <a-col span="24" style="margin-bottom: 1rem;">
            <a-select defaultValue="可选择同步表头" style="width: 100%;text-align: center;" @change="showCloumnsDatas">
              <a-select-option :value="column.value" v-for="column in tableColumns">{{column.title}}</a-select-option>
            </a-select>
          </a-col>
          <a-col span="24" style="margin-bottom: 1rem;">
            <div>
              <a-button @click="libraryVisibleChildren = true" style="width: 58%;">请选择初始接口</a-button>
              <span style="margin-left: 1rem;">流程：</span>
              <a-radio-group v-model="flowListVisible">
                <a-radio-button :value="false">无</a-radio-button>
                <a-radio-button :value="true">有</a-radio-button>
              </a-radio-group>
              <p style="margin-left: 1rem;">{{config[0].dataUrl ? config[0].dataUrl:""}}</p>
              <p style="margin-left: 1rem;">{{config[0].flowId ? "已绑定"+config[0].flowName:""}}</p>
            </div>
          </a-col>
          <a-col span="24" style="margin-bottom: 1rem;">
            <a-button @click="checkData" style="width: 100%;">测试接口数据</a-button>
          </a-col>
          <a-col span="24">
            <a-card>
              <a-form-item label="使用URL获取数据：" :label-col="{ span: 24 }" :wrapper-col="{ span: 24 }"
                           style="margin-bottom: 10px">
                <a-radio-group name="radioGroupTable" defaultValue="1" @change="onChangeTable">
                  <a-radio value="1">DATA</a-radio>
                  <a-radio value="2">CLOUMNS</a-radio>
                  <a-radio value="3">JSON</a-radio>
                </a-radio-group>

                <template v-if="table === 1">
                  <a-textarea v-model="tableUrl" :autosize="true" placeholder="请输入获取表数据的url地址"/>
                </template>
                <template v-else-if="table === 2">
                  <a-textarea v-model="tableCloumns" :autosize="true" placeholder="请输入获取列头的实体名称" :rows="6"/>
                </template>
                <template v-else>
                  <a-textarea v-model="tableJson" :autosize="true" placeholder="请输入获取表数据的json数据" :rows="6"/>
                </template>

                <a-button id="tablebtn" @click="tableBtn">确认</a-button>
              </a-form-item>
            </a-card>
          </a-col>
        </a-card>
      </a-tab-pane>
    </a-tabs>
    <a-drawer
      title="请选择自定义流程"
      width=400
      :closable="false"
      @close="onFlowsClose"
      :visible="flowListVisible"
    >
      <a-row :gutter="16">
        <a-col :span="12" @click="bindFlow(item.id,item.name)" v-for="item in dataFlowList" class="element-card">
          <a-card
            class="page-item"
            style="width: 155px;height: 150px;margin-bottom: 20px;"
          >
            {{item.name}}
            <a-card-meta
              style="margin-top: 0.5rem;"
              :description="item.createTime">
            </a-card-meta>
          </a-card>
        </a-col>
      </a-row>
    </a-drawer>
    <a-drawer
      title="请选择数据对接"
      width=400
      :closable="false"
      @close="onChildrenLibraryClose"
      :visible="libraryVisibleChildren"
    >
      <a-row :gutter="16">
        <a-col :span="12" @click="bindDataCenter(item.url)" v-for="item in dataCenterList" class="element-card">
          <a-card
            class="page-item"
            style="width: 155px;height: 150px;margin-bottom: 20px;"
          >
            <a-card-meta
              :title="item.name"
              :description="item.url">
            </a-card-meta>
          </a-card>
        </a-col>
      </a-row>
    </a-drawer>
  </div>
</template>

<script>

  import {getAction} from "@/api/manage";
  import CButton from '@/views/application/onlines/car/component/list/modules/modules/Button'
  import CDropdown from '@/views/application/onlines/car/component/list/modules/modules/Dropdown'
  import CHref from '@/views/application/onlines/car/component/list/modules/modules/Href'
  import CSpan from '@/views/application/onlines/car/component/list/modules/modules/Span'
  import CVertical from '@/views/application/onlines/car/component/list/modules/modules/Vertical'
  import Span from "../../component/list/modules/modules/Span";
  import EditableCell from './modules/EditableCell';
  import ListSlot from './modules/ListSlot'

  export default {
    components: {Span, CButton, CDropdown, CHref, CSpan, CVertical,ListSlot, EditableCell },
    data() {
      return {
        columns: [
          { title: '字段名', dataIndex: 'title', width: '30%', scopedSlots: { customRender: 'name' }, align: 'center'},
          { title: '主键名', dataIndex: 'dataIndex', scopedSlots: { customRender: 'key' }, align: 'center'},
          { title: '操作', dataIndex: 'operation', scopedSlots: { customRender: 'operation' }, align: 'center'},
        ],
        table: 1,
        tableUrl: '',
        tableCloumns: '',
        tableJson: JSON.stringify(this.config[0].data),
        ifRadio: 1,
        flowListVisible: false,
        libraryVisibleChildren: false,
        dataCenterList: [],
        dataFlowList: [],

        tableColumns:[
          {title:'加油登记',value:'Refuel'},
          {title:'保养管理',value:'maintain'},
          {title:'保险管理',value:'Insurance'},
          {title:'理赔登记',value:'4'},
          {title:'违规事故',value:'5'},
          {title:'车审管理',value:'6'},
          {title:'过户登记',value:'7'},
          {title:'报废管理',value:'8'},
          ]
      }
    },
    props: {
      config: {
        type: Array,
        default: () => []
      },
    },
    created() {
      this.initFlowData();
      this.init();
    },
    methods: {
      showData(){
        this.config[0].http = {};
        this.$refs.datacenterdrawer.showDrawer(this.config[0].http,0);
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
          align: 'center'
        });
      },
      doAction (record) {
        this.$refs.listSlot.open(record, this.config[0].columns);
      },
      deleteElement(index){
        this.config[0].elements.splice(index, 1)
      },
      //action添加操作
      addElement(inner){
        this.config[0].elements.push(Object.assign(inner,{}));
      },
      //初始化流程数据
      initFlowData() {
        var url = "/application/car/vehicle/flow/getDataAll";
        getAction(url).then(res => {
          res.result.forEach(item => {
            item.flow = JSON.parse(item.flow);
            this.dataFlowList.push({
              id: item.id,
              createTime: item.createTime,
              name: item.name,
              type: item.type,
            })
          })
        })
      },
      //初始化数据中心数据
      init() {
        getAction("/application/online/component/dataCenter/queryAll", {}).then(res => {
          res.result.forEach(item => {
            this.dataCenterList.push({
              id: item.id,
              name: item.name,
              url: item.url,
              type: item.type,
            });
          })
        });
      },
      //查询列头
      queryCloumns(url, params) {
        var that = this;
        getAction(url, params).then(res => {
          if (res.success == true) {
            that.config[0].columns = [];
            res.result.forEach(item => {
              that.config[0].columns.push({
                "title": item.name,
                "dataIndex": item.name,
                "key": item.name,
                "align": "center",
                "scopedSlots": {
                  "customRender": item.name
                },
                "filedKey": item.name
              })
            })
          }
        })
      },
      //测试是否有数据
      checkData() {
        var that = this;
        var url = that.config[0].dataUrl;
        if (that.config[0].dataUrl != "") {
          if (that.config[0].isFlow == true && that.config[0].flowId != "") {
            url = url + "?id=" + that.config[0].flowId;
          }
          getAction(url).then(res => {
            that.config[0].data = res.result;
          })
        } else {
          that.$message.warning("请绑定数据!");
        }
      },
      //绑定数据
      bindDataCenter(url) {
        var that = this;
        that.config[0].dataUrl = url;
        if (that.config[0].dataUrl != "") {
          that.$message.success("绑定接口成功！");
          if(that.config[0].isFlow && that.config[0].flowId == ""){
            that.flowListVisible = true;
          }
          that.libraryVisibleChildren = false
        }
      },
      bindFlow(id, name) {
        var that = this;
        that.config[0].flowId = id;
        that.config[0].flowName = name;
        if (that.config[0].flowId) {
          that.$message.success("绑定流程数据成功！");
          that.flowListVisible = false;
        } else {
          that.$message.error("绑定失败！");
        }
      },
      //显示数据中心
      showCloumnsDatas(value) {
        var url = "/application/car/vehicle/cloumns/getCloumnList";
        var param = {type: value};
        this.queryCloumns(url, param)
      },
      onChildrenLibraryClose() {
        this.libraryVisibleChildren = false
      },
      onFlowsClose() {
        this.flowListVisible = false
      },
      //fooder 页眉
      onChangeTable(e) {
        this.table = e.target.value;
      },
      tableBtn() {
        this.checkTable(this.table);
      },
      //检查是哪个表格
      checkTable(table) {
        var that = this;
        if (table == 1) {
          if (that.tableUrl != "") {
            that.getList(that.tableUrl);
          } else {
            that.$message.warning('URL不能为空！');
          }
        } else if (table == 2) {
          if (that.tableCloumns != "") {
            var params = {}
            that.queryCloumns(that.tableCloumns, params);
          } else {
            that.$message.warning('CLOUMNS不能为空！');
          }
        } else {
          if (that.tableJson != "") {
            that.config[0].data = JSON.parse(this.tableJson);
          } else {
            that.$message.warning('Json不能为空！');
          }
        }
      },
      //获取列表
      getList(url) {
        const params = {}
        getAction(url, params).then(res => {
          this.config[0].data = res.result;
        })
      }
    }
  }
</script>

<style>
  .hoverBlu{
    margin:0rem 0.5rem 0.5rem 0rem;
    float: left;
    height: 40px;
    width: 26%;
    text-align: center;
    line-height: 2.5;
    border: 1px solid rgba(55, 51, 47, 0.44);
  }
  .hoverBlu :hover{
    border: 1px solid rgba(69,174,216,0.89);
  }
</style>
<style scoped>

</style>