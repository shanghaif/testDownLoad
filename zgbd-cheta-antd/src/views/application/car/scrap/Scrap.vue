<template>
  <div class="repair" style="margin: 0rem 1rem">
    <div style="margin: 1rem 0" />
    <!--搜索框-->
    <div>
      <a-input-search placeholder="请输入要搜索的关键词" style="width: 536px" @search="onSearch" enterButton/>
      <!--start 申请报废 模态框 start-->
      <a-button type="primary" @click="showModal" style="margin-left: 1rem;">申请报废</a-button>
      <a-modal
        title="申请报废"
        v-model="applyForvisible"
        @ok="handleOk"
        okText="提交">
        <ApplyForForm></ApplyForForm>
      </a-modal>

      <!--start 更新报废期 模态框 start-->
      <a-button type="primary" @click="showModal2" style="margin-left: 1rem;">更新报废期</a-button>
      <a-modal
        title="更新报废期"
        v-model="updateScrap"
        @ok="handleOk2"
        okText="提交"
      >
        <UpdateScrapForm></UpdateScrapForm>
      </a-modal>
      <a-button type="primary" style="margin-left: 1rem;">导入更新表</a-button>
    </div>
    <!--标签页-->
    <div>
      <a-tabs defaultActiveKey="1" @change="callback">
        <a-tab-pane tab="报废计划" key="1">
          <!--<a-spin :spinning="spinning">-->
          <a-table
            :columns="columns"
            :dataSource="data"
            @change="handleTableChange"
            :expandRowByClick="true">

            <div slot="expandedRowRender">
              <Audit :record="record" :flow="flow"></Audit>
            </div>

            <!--状态-->
            <div slot="status"  slot-scope="text">
              <a-badge :status="flow[text].style" :text="flow[text].desc"/>
            </div>

            <!--操作-->
            <div slot="operation" slot-scope="text"  style="min-width: 120px;">
              <!--<a-badge :status="flow[text].style" :text="flow[text].desc" />-->
              <span v-if = "flow[text].state === 2">
                  <a style="color: red" @click="scrupApply">申请报废</a>
                  <a style="margin-left: 1rem;color: red;" @click="scrupSlow">延缓报废</a>
                </span>
              <span v-else-if = "flow[text].state === 3">
                    <p aria-required="true">{{flow[text].desc}}</p>
                </span>
              <span v-else>
                  <a>{{flow[text].desc}}</a>
                </span>
            </div>
          </a-table>

          <!--</a-spin>-->
        </a-tab-pane>
        <a-tab-pane tab="已报废车辆" key="2" forceRender>

          <a-table
            :columns="scrapColumns"
            :dataSource="scrapData"
            :expandRowByClick="true">
            <!--操作-->
            <div slot="status"  slot-scope="text">
              <a-badge :status="flow[text].style" :text="flow[text].desc"/>
            </div>
          </a-table>
        </a-tab-pane>
      </a-tabs>
    </div>
    <!--</a-table>-->
    <a-modal title="更新报废期" v-model="scrupApplyModal" @ok="scrupApplyClose" okText="确认">
      scrupApplys  scrupSlows
    </a-modal>
    <a-modal title="审核申请" v-model="scrupSlowModal" @ok="scrupSlowClose" okText="确认">
      <a-form>
        <a-form-item>
          审核申请：
          <a-radio-group name="radioGroup" :defaultValue="1">
          <a-radio :value="1">通过</a-radio>
          <a-radio :value="2">驳回</a-radio>
        </a-radio-group>
        </a-form-item>
      </a-form>
    </a-modal>
  </div>

</template>

<script>
  import ApplyForForm from './modules/ApplyForForm'
  import UpdateScrapForm from './modules/UpdateScrapForm'
  import Audit from './modules/Audit'
  import filed from '@views/result/filed'
  import {mixinDevice} from '@/utils/mixin.js'
  /* import {getAction} from '@/api/manage'*/

  let flow = {
    'TRANSACTNOT': {key: 1 ,desc: '未办理', style: 'processing'},
    'TRANSACTING': {key: 2 ,desc: '办理中', style: 'processing'},
    'TRANSACTEND': {key: 3 ,desc: '已完成', style: 'processing'},

    'AUDITAPPLYFOR': {desc: '申请审批', style: '', state: 1},
    'SCRAPAPPLYFOR': {desc: '申请报废', style: '', state: 2},
    'SCRAPSLOW': {desc: '延缓报废', style: '', state: 2},
    'SCRAPEND': {desc: '办理完成', style: '', state: 3},

    'DETAIL': {desc: '详情', style: '', state: 4},
  }

  const columns = [
    { title: '序号', dataIndex: 'no', key: 'no' },
    { title: '车牌号', dataIndex: 'carNo', key: 'carNo' },
    { title: '车型', dataIndex: 'carType', key: 'carType' },
    { title: '所属项目', dataIndex: 'Item', key: 'Item' },
    { title: '车辆归属', dataIndex: 'affiliation'},
    { title: '报废时间', dataIndex: 'scrapTime', key: 'scrapTime'},
    { title: '可否延缓', dataIndex: 'delay', key: 'delay' },
    { title: '剩余时间', dataIndex: 'time', key: 'time' },
    { title: '状态', dataIndex: 'status', key: 'status', scopedSlots: { customRender: 'status' } ,filedKey:'status'},
    { title: '操作', dataIndex: 'operation', key: 'operation', scopedSlots: { customRender: 'operation' } ,filedKey:'operation' },
  ];

  const data = [
    { key: 1, no: '粤ADU145', carNo: '粤ADU145', carType: 'XXXXXXXX', Item: '天河环卫', affiliation:'吕晓萍', scrapTime:'2019-07-05' , delay:'可' , time:'8天', status:'TRANSACTNOT' , operation:'AUDITAPPLYFOR' },
    { key: 2, no: '粤ADU145', carNo: '粤ADU145', carType: 'XXXXXXXX', Item: '天河环卫', affiliation:'吕晓萍', scrapTime:'2019-07-05' , delay:'可' , time:'8天' , status:'TRANSACTING' , operation:'SCRAPAPPLYFOR'  },
    { key: 3, no: '粤ADU145', carNo: '粤ADU145', carType: 'XXXXXXXX', Item: '天河环卫', affiliation:'吕晓萍', scrapTime:'2019-07-05' , delay:'可' , time:'8天' , status:'TRANSACTEND' , operation:'SCRAPEND'  },
    { key: 4, no: '粤ADU145', carNo: '粤ADU145', carType: 'XXXXXXXX', Item: '天河环卫', affiliation:'吕晓萍', scrapTime:'2019-07-05' , delay:'可' , time:'8天' , status:'TRANSACTING' , operation:'SCRAPAPPLYFOR'  },
    { key: 5, no: '粤ADU145', carNo: '粤ADU145', carType: 'XXXXXXXX', Item: '天河环卫', affiliation:'吕晓萍', scrapTime:'2019-07-05' , delay:'可' , time:'8天' , status:'TRANSACTING' , operation:'SCRAPAPPLYFOR'  },
    { key: 6, no: '粤ADU145', carNo: '粤ADU145', carType: 'XXXXXXXX', Item: '天河环卫', affiliation:'吕晓萍', scrapTime:'2019-07-05' , delay:'可' , time:'8天' , status:'TRANSACTING' , operation:'SCRAPAPPLYFOR'  },
  ];

  const scrapColumns = [
    /*{ title: '序号', dataIndex: 'no', key: 'no' },
    { title: '车牌号', dataIndex: 'carNo', key: 'carNo' },
    { title: '所属项目', dataIndex: 'item', key: 'item' },
    { title: '车辆归属', dataIndex: 'affiliation',key:'affiliation'},
    { title: '报废原因', dataIndex: 'scrapCause', key: 'scrapCause'},
    { title: '办理时间', dataIndex: 'time', key: 'time' },
    { title: '补贴金额', dataIndex: 'money', key: 'money' },
    { title: '经办人', dataIndex: 'handler', key: 'handler' },
    { title: '操作', dataIndex: 'operation', key: 'operation', scopedSlots: { customRender: 'operation' } ,filedKey:'operation' },
  */];

  const scrapData = [
    /*{ key: 1, no: '1', carNo: '粤ADU145', item: '天河环卫', affiliation:'吕晓萍', scrapCause: '强制报废', time:'2019-07-05' , money:'4000' , handler:'吕晓萍' , operation:'详情' },
    { key: 2, no: '2', carNo: '粤ADU145', item: '天河环卫', affiliation:'吕晓萍', scrapCause: '强制报废', time:'2019-07-05' , money:'4000' , handler:'吕晓萍' , operation:'详情' },
    { key: 3, no: '3', carNo: '粤ADU145', item: '天河环卫', affiliation:'吕晓萍', scrapCause: '强制报废', time:'2019-07-05' , money:'4000' , handler:'吕晓萍' , operation:'详情' },
    { key: 4, no: '4', carNo: '粤ADU145', item: '天河环卫', affiliation:'吕晓萍', scrapCause: '强制报废', time:'2019-07-05' , money:'4000' , handler:'吕晓萍' , operation:'详情' },
*/
  ];

  export default {
    //组件
    components: {ApplyForForm, UpdateScrapForm,Audit},
    mixins: [mixinDevice,filed],
    data() {
      return {
        record : [],
        scrapData,
        scrapColumns,
        data,
        columns,
        applyForvisible: false,
        updateScrap: false,
        scrupApplyModal: false,
        scrupSlowModal: false,
        flow: flow,
        /*columns: this.filedValue(columns),*/
        /*pagination: {
          current: 1,
          pageSize: 4,
          total: 0
        },
        spinning: true,*/
      }
    },
    methods: {
      /*搜索搜索框*/
      onSearch (value) {
        console.log(value)
      },
      /*申请报废 对话框*/
      scrupApply(){
        this.scrupApplyModal = true;
      },
      scrupApplyClose(e) {
        console.log(e);
        this.scrupApplyModal = false;
      },
      /*延缓报废 对话框*/
      scrupSlow(){
        this.scrupSlowModal = true;
      },
      scrupSlowClose(e) {
        console.log(e);
        this.scrupSlowModal = false;
      },
      /*UpdateScrapForm对话框 显示*/
      showModal2() {
        this.updateScrap = true;
      },
      handleOk2(e) {
        console.log(e);
        this.updateScrap = false;
      },
      /*applyFor对话框 显示*/
      showModal() {
        this.applyForvisible = true;
      },
      handleOk(e) {
        console.log(e);
        this.applyForvisible = false;
      },
      /*标签页 回调*/
      callback (key) {
        console.log(key);
      },
      handleTableChange(pagination) {
        const pager = {...this.pagination};
        pager.current = pagination.current;
        this.pagination = pager;
        /*this.getData();*/
      },
      /*getData () {
        this.$refs.table.getData();
      },*/
    }
  }
</script>

<style scoped>

</style>