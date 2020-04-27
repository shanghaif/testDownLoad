<template>
  <div>
    <Header></Header>
    <a-row>
      <a-col :span="1">

      </a-col>
      <a-col :span="pro?18:22" style="margin-top: 1rem;">
        <a-button class="editable-add-btn" @click="showVisable">添加</a-button>
        <div>
          <a-table :columns="columns" :dataSource="data" bordered>
            <template v-for="col in ['name', 'type', 'sort']" :slot="col" slot-scope="text, record, index">
              <div :key="col">
                <a-input
                  v-if="record.editable"
                  style="margin: -5px 0"
                  :value="text"
                  @change="e => handleChange(e.target.value, record.key, col)"
                />
                <template v-else>{{text}}</template>
              </div>
            </template>
            <template slot="operation" slot-scope="text, record,index">
              <div class='editable-row-operations'>
                <span v-if="record.editable">
                  <a @click="() => save(record.key)">保存</a>
                  <a @click="() => cancel(record.key)">取消</a>
                </span>
                <span v-else>
                  <a @click="() => edit(record.key,index)">编辑</a>
                  <a-popconfirm
                    v-if="data.length"
                    title="真的要删除吗?"
                    @confirm="() => deleteFlow(record.key)">
                    <a href="javascript:;">删除</a>
                  </a-popconfirm>
                  <a @click="() => onProperty(index)" style="margin-left: 1rem">属性</a>
                </span>
              </div>
            </template>
          </a-table>
        </div>
      </a-col>
      <a-col :span="4" style="margin-left: 1rem;" v-if="pro && data[creentIndex].flow">
        <div style="font-size: large;">流程自定义</div>
        <div style="margin: -2px 0px;">
          <a-row>
            <a-col :span="8">
              状态值
            </a-col>
            <a-col :span="8">
              状态
            </a-col>
            <a-col :span="6">
              下标
            </a-col>
          </a-row>
        </div>
        <div style="margin-top: 12px;"  v-for="(item,index) in data[creentIndex].flow">
          <a-input-group size="large">
            <a-col :span="8">
              <a-input v-model="item.title" placeholder="状态值"/>
            </a-col>
            <a-col :span="8">
              <a-input v-model="item.status" placeholder="状态"/>
            </a-col>
            <a-col :span="6">
              <a-input v-model="item.value" placeholder="下标"/>
            </a-col>
            <a-col :span="2" v-if="index === 0">
              <a-button type="primary" @click="add" size="large" icon="plus"/>
            </a-col>
            <a-col :span="2" v-else>
              <a-button  @click="del(index)" size="large" icon="close" style="background-color: red"/>
            </a-col>
          </a-input-group>
        </div>
      </a-col>
    </a-row>

    <div>
      <a-modal
        title="修改接口数据"
        :visible="flowVisible"
        @ok="addFlow"
        @cancel="hideVisable"
      >
        <a-row :gutter="16">
          <a-col :span="24">
            名称：<a-input placeholder="请输入名称" style="width: 91%;"  v-model="title"/>
          </a-col>
          <a-col :span="12" style="margin-top: 30px;">
            分类：<a-select :defaultValue="type" style="width: 185px"  v-model="type">
            <a-select-option value="0">加油登记</a-select-option>
            <a-select-option value="1">保养管理</a-select-option>
            <a-select-option value="2">维修管理</a-select-option>
            <a-select-option value="3">保险管理</a-select-option>
            <a-select-option value="4">理赔登记</a-select-option>
            <a-select-option value="5">违规事故</a-select-option>
          </a-select>
          </a-col>
          <a-col :span="12"  style="margin-top: 30px;">
            顺序：<a-input-number :min="1"  style="width: 185px;" placeholder="顺序越小越排前" :max="100" v-model="sort"/>
          </a-col>
        </a-row>
      </a-modal>
    </div>

  </div>
</template>

<script>
  import ARow from "ant-design-vue/es/grid/Row";
  import ACol from "ant-design-vue/es/grid/Col";
  import Header from "../hository/Header";
  import {postAction} from "@/api/manage";
  import {getAction} from "@/api/manage";
  import {deleteAction} from "@/api/manage";

  /*列头*/
  const columns = [{
    title: '编号',
    dataIndex: 'id',
    width: '10%',
    scopedSlots: {customRender: 'id'},
    sorter: (a, b) => a.id - b.id,
  }, {
    title: '流程名称',
    dataIndex: 'name',
    width: '25%',
    scopedSlots: {customRender: 'name'},
  }, {
    title: '分类',
    dataIndex: 'type',
    width: '25%',
    scopedSlots: {customRender: 'type'},
    filters: [{
      text: '加油登记',
      value: '加油',
    }, {
      text: '保养管理',
      value: '保养',
    }, {
      text: '维修管理',
      value: '维修',
    }, {
      text: '保险管理',
      value: '保险',
    }, {
      text: '理赔登记',
      value: '理赔',
    }, {
      text: '违规事故',
      value: '违规',
    }],
    filterMultiple: false,
    onFilter: (value, record) => record.type.indexOf(value) === 0,
  },{
    title: '创建时间',
    dataIndex: 'createTime',
    width: '25%',
    scopedSlots: {customRender: 'createTime'},
    sorter: (a, b) => a.key - b.key,
  }, {
    title: '操作',
    dataIndex: 'operation',
    scopedSlots: {customRender: 'operation'},
  }]
  const data = []
  //假数据 data
  /*for (let i = 0; i < 5; i++) {
    data.push({
      key: i.toString(),
      id: i.toString(),
      name: `流程 ${i}`,
      type: `加油登记`,
      sort: i,
      flow : [{
        status : "APPLY"+i,
        title : "申请",
        value : "1"
      }]
    })
  }*/
  function onChange(pagination, filters, sorter) {
    console.log('params', pagination, filters, sorter);
  }
  export default {
    name: "Flow",
    components: {ACol, ARow, Header},
    data() {
      this.cacheData = data.map(item => ({...item}))
      return {
        title : '',
        type : '加油登记',
        sort : '100',
        flowVisible: false,
        pro : false,
        creentIndex : 0,
        data,
        columns,
        count: data.length + 1
      }
    },
    mounted(){
      this.init();
    },
    methods: {
      init(){
        var url = "/application/car/vehicle/flow/getDataAll";
        var ind = 1;
        this.data = [];
        getAction(url).then(res => {
          res.result.forEach(item => {
            item.flow = JSON.parse(item.flow);
            this.data.push({
              key: item.id,
              id: ind++,
              createTime : item.createTime,
              name: item.name,
              type: item.type,
              flow : item.flow
            })
          })
        })
      },
      onChange,
      addFlow(){
        var that = this;
        var url = "/application/car/vehicle/flow/updateInsert";
        if(that.title === ""){
          that.$message.warning("请输入名称！");
          return;
        }
        var datas = {
          name:that.title,
          type: that.type,
          sort: that.sort,
          flow: "[{}]",
          };
        postAction(url, datas).then(res => {
          that.$message.success(res.message);
          that.handleAdd(datas,res.result);
        })
        that.flowVisible = false;
      },
      showVisable(){
        this.flowVisible = true;
      },
      hideVisable(){
        this.flowVisible = false;
      },
      onProperty(index){
        var that = this;
        if(that.creentIndex === index){
          that.pro = !that.pro;
        }
        that.creentIndex = index;
      },
      add(){
        var $that = this;
        $that.data[$that.creentIndex].flow.push({value:($that.data[$that.creentIndex].flow.length+1)});
      },
      del(index){
        var $that = this;
        $that.data[$that.creentIndex].flow.splice(index,1);
      },
      //在data上添加Flow
      handleAdd(data,key) {
        var id = this.data.length+1;
        var currentTime = new Date().getFullYear() + "-" + (new Date().getMonth() + 1) + "-" + new Date().getDate() + " " + new Date().getHours() + ":" + new Date().getMinutes() + ": " + new Date().getSeconds();
        data.flow = JSON.parse(data.flow);
        const newData = {
          key: key,
          id: id,
          name: data.name,
          createTime : currentTime,
          type: data.type,
          flow : data.flow
        }

        this.data.push(newData);
      },
      //删除Flow
      deleteFlow(key){
        var url = "/application/car/vehicle/flow/delete";
        var that = this;
        deleteAction(url, {id:key}).then(res => {
          that.$message.success(res.message);
          if(res.success == true){
            const data = [...that.data]
            that.data = data.filter(item => item.key !== key)
          }
        })
      },
      handleChange(value, key, column) {
        const newData = [...this.data]
        const target = newData.filter(item => key === item.key)[0]
        if (target) {
          target[column] = value
          this.data = newData
        }
      },
      edit(key,index) {
        this.creentIndex = index;
        const newData = [...this.data]
        const target = newData.filter(item => key === item.key)[0]
        if (target) {
          target.editable = true
          this.data = newData
        }
      },
      save(key) {
        var url = "/application/car/vehicle/flow/updateInsert";
        const newData = [...this.data]
        const target = newData.filter(item => key === item.key)[0]
        var datas = {
          id : target.key,
          name: target.name,
          type: target.type,
          flow: JSON.stringify(target.flow),
        };
        postAction(url, datas).then(res => {
          this.$message.success(res.message);
          if(res.success == true){
            if (target) {
              delete target.editable
              this.data = newData
              this.cacheData = newData.map(item => ({...item}))
            }
          }
        })
      },
      cancel(key) {
        const newData = [...this.data]
        const target = newData.filter(item => key === item.key)[0]
        if (target) {
          Object.assign(target, this.cacheData.filter(item => key === item.key)[0])
          delete target.editable
          this.data = newData
        }
      },
    },
  }
</script>

<style scoped>
  .editable-row-operations a {
    margin-right: 8px;
  }
</style>

<style scoped>
  .editable-cell {
    position: relative;
  }

  .editable-cell-input-wrapper,
  .editable-cell-text-wrapper {
    padding-right: 24px;
  }

  .editable-cell-text-wrapper {
    padding: 5px 24px 5px 5px;
  }

  .editable-cell-icon,
  .editable-cell-icon-check {
    position: absolute;
    right: 0;
    width: 20px;
    cursor: pointer;
  }

  .editable-cell-icon {
    line-height: 18px;
    display: none;
  }

  .editable-cell-icon-check {
    line-height: 28px;
  }

  .editable-cell:hover .editable-cell-icon {
    display: inline-block;
  }

  .editable-cell-icon:hover,
  .editable-cell-icon-check:hover {
    color: #108ee9;
  }

  .editable-add-btn {
    margin-bottom: 8px;
    left: 94%;
  }
</style>
