<template>
  <div class="repair">
    <a-tabs defaultActiveKey="" @tabClick="tabChange">
      <a-tab-pane :tab="'全部' +this.totalnum" key="">
      </a-tab-pane>
      <a-tab-pane :tab="'未发布' +this.notreleased" key="NOT_RELEASED" forceRender>
      </a-tab-pane>
      <a-tab-pane :tab="'已发布' +this.havereleased" key="HAVE_RELEASED">
      </a-tab-pane>
    </a-tabs>
    <!--        button按钮部分-->
    <div>
      <a-button type="primary" class="addbtn" @click="add">+ 新增</a-button>
      <a-button style="margin-left: 10px" @click="release">工单发布</a-button>
      <a-button style="margin-left: 10px">...</a-button>
      <div class="clearfix">
        <img src="@/assets/image/netimage/u1897.png" style="float: left;"><span class="set">设置</span>
      </div>
    </div>
    <!--        table部分-->
    <div class="nav">
      <div :disabled="!hasSelected" @click="start">
        <img src="@/assets/image/netimage/u1566.png" class="nav_img">
        <span style="color:rgba(0, 0, 0, 0.647058823529412); margin-left: 10px;">已选择
              <span>
                <template v-if="hasSelected">
                  <span style="color: #1890FF;">{{`${selectedRowKeys.length}`}}</span>
                </template>
              </span>
              项
            </span>
        <span style="color: #1890FF;margin-left: 10px">清空</span>
      </div>
    </div>
    <!--url="/application/car/vehiclenetwork/getpage"-->
    <c-table
      ref="table"
      :rowSelection="{selectedRowKeys: selectedRowKeys, onChange: onSelectChange}"
      :columns="columns"
      :expandRowByClick="true"
      url="/application/car/vehiclenetwork/getpage"
      rowKey="id">
      <div slot="isfb" slot-scope="text">
        <a-badge :status="flow[text].style" :text="flow[text].desc"/>
      </div>
      <div v-if="record.isfb==='HAVE_RELEASED'" slot="expandedRowRender" slot-scope="record">
        <repaireOrderDetail :record="record" @getData="getData"></repaireOrderDetail>
      </div>
    </c-table>
    <netEdit ref="netEdit" :data="data" @getData="getData" @reload="reload"></netEdit>
    <repaireOrder ref="repaireOrder" :data="data"  @reload="reload" @getData="getData"></repaireOrder>
  </div>
</template>
<script>
  let flow = {
    'NOT_RELEASED':{key:'NOT_RELEASED', desc:'未发布',style:'processing'},
    'HAVE_RELEASED':{key:'HAVE_RELEASED', desc:'已发布',style:'success'},
  }
  import netEdit from './modules/netEdit'
  import repaireOrder from './modules/repaireOrder'
  import repaireOrderDetail from './modules/repaireOrderDetail'
  import { getAction } from '@/api/manage'
  import CTable from '@/views/chetaui/table/index.js'
  export default {
    components:{netEdit,repaireOrder,repaireOrderDetail,CTable},
    props: {
      data: {
        type: Array,
        default: () => []
      },
      flow: {
        type: Object,
        default: () => flow
      }
    },
    data () {
      return {
        columns :[
          {title: '平台代号',dataIndex:'companyCode',key:'companyCode'},
          {title: '车牌号',dataIndex: 'registrationNo',key:'registrationNo'},
          {title: '自编号',dataIndex: 'sinceNumber',key:'sinceNumber'},
          {title: '车辆类型',dataIndex: 'cartype',key:'cartype'},
          {title: '购买日期',dataIndex: 'buyTime',key:'buyTime',
            customRender: function (t, r) {
              return r.buyTime.substring(0,r.buyTime.lastIndexOf("."));
            }
          },
          {title: '状态',dataIndex:'isfb',key:'isfb',scopedSlots: {customRender: 'isfb'}},
        ],
        totalnum:0,
        notreleased:0,
        havereleased:0,
        selectedRowKeys: [], // Check here to configure the default column
        selectedCarTypes: [], //选择的车辆类型
      }
    },
    computed: {
      hasSelected(){
        return this.selectedRowKeys.length > 0
      },
    },
    mounted() {
      this.reload()

    },
    methods:{
      reload(){
        getAction('/application/car/vehiclenetwork/getcount', {}).then(res => {
          this.totalnum=res.result.notreleased + res.result.havereleased
          this.notreleased=res.result.notreleased
          this.havereleased=res.result.havereleased
        });
        this.selectedRowKeys = [];
        this.selectedCarTypes = [];
        this.getData();
      },
      add(){
        this.$refs.netEdit.add();
      },
      release(){
        if (this.selectedRowKeys=='') {
          this.$message.warning("未选择车辆,无法发布工单！")
        }else{
          this.$refs.repaireOrder.release(this.selectedCarTypes,this.selectedRowKeys)
          this.$refs.repaireOrder.valuenum = this.selectedRowKeys.length;
        }
        /*this.$refs.repaireOrder.release()
        this.$refs.repaireOrder.valuenum = this.selectedRowKeys.length;*/
      },
      getData () {
        this.$refs.table.getData();
      },
      // tab切换
      tabChange (status) {
        this.$refs.table.param.status=status;
        this.getData()
      },
      start () {
        this.selectedRowKeys = [];
      },
      onSelectChange (selectedRowKeys,selectedRows){
        this.selectedRowKeys=[]
        this.selectedRows=[]
        this.selectedCarTypes=[]
        var isWarn=false
        selectedRows.forEach(item=>{
          if(item.isfb==='NOT_RELEASED'){
            this.selectedRows .push(item)
            this.selectedRowKeys.push(item.id)
            this.selectedCarTypes.push(item.cartype)
          } else {
            isWarn=true
          }
        })
        if (isWarn){
          this.$message.warning("已发布的不能选择!")
        }
      },

    },
  }
</script>

<style lang="scss" scoped>
  .gutter-example >>> .ant-row > div {
    background: transparent;
    border: 0;
  }
  .gutter-box {
  }
  .addbtn{
    width: 79px;
    height: 34px;
  }
  .clearfix{
    display: inline-block;
    float:right;
    margin-right: 10px;
  }
  .setfont{
    text-align: center;
  }
  .set {
    float: left;
    font-size: 16px;
    margin-left: 5px;
   line-height: 20px;
  }
  .nav{
    width: 100%;
    margin-bottom: 16px;
    margin-top: 16px;
    height: 40px;
    background: inherit;
    background-color: rgba(230, 247, 255, 1);
    box-sizing: border-box;
    border-color: rgba(186, 231, 255, 1);
    border-radius: 4px;
    box-shadow: none;
    font-family: 'MicrosoftTaiLe', 'Microsoft Tai Le';
    font-weight: 400;
    font-style: normal;
    font-size: 14px;
    text-align: left;
    line-height: 40px;

  }
  .nav_img{
    width: 14px;
    height: 14px;
    float: left;
    margin-top: 12px;
    margin-left: 20px;
  }

</style>
