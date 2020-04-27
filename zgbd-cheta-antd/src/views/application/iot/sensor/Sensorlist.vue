<template>
  <div>
    <a-spin :spinning="spinning" v-show="sensorShow">
      <a-button @click="handleAdd" type="primary" >新增</a-button>
      <a-table :columns="columns" :dataSource="data" :rowSelection="rowSelection" bordered>
         <span slot="action" slot-scope="text, record">

           <!--v-model="TabView"-->
           <a-button @click="handleHis(record)" data-v-2bfceb7a="" type="button" class="ant-btn ant-btn-primary ant-btn-sm">
             <i data-v-2bfceb7a="" class="anticon anticon-dashboard">
               <svg data-v-2bfceb7a="" viewBox="64 64 896 896" data-icon="dashboard" width="1em" height="1em" fill="currentColor" aria-hidden="true" class="">
                 <path d="M924.8 385.6a446.7 446.7 0 0 0-96-142.4 446.7 446.7 0 0 0-142.4-96C631.1 123.8 572.5 112 512 112s-119.1 11.8-174.4 35.2a446.7 446.7 0 0 0-142.4 96 446.7 446.7 0 0 0-96 142.4C75.8 440.9 64 499.5 64 560c0 132.7 58.3 257.7 159.9 343.1l1.7 1.4c5.8 4.8 13.1 7.5 20.6 7.5h531.7c7.5 0 14.8-2.7 20.6-7.5l1.7-1.4C901.7 817.7 960 692.7 960 560c0-60.5-11.9-119.1-35.2-174.4zM761.4 836H262.6A371.12 371.12 0 0 1 140 560c0-99.4 38.7-192.8 109-263 70.3-70.3 163.7-109 263-109 99.4 0 192.8 38.7 263 109 70.3 70.3 109 163.7 109 263 0 105.6-44.5 205.5-122.6 276zM623.5 421.5a8.03 8.03 0 0 0-11.3 0L527.7 506c-18.7-5-39.4-.2-54.1 14.5a55.95 55.95 0 0 0 0 79.2 55.95 55.95 0 0 0 79.2 0 55.87 55.87 0 0 0 14.5-54.1l84.5-84.5c3.1-3.1 3.1-8.2 0-11.3l-28.3-28.3zM490 320h44c4.4 0 8-3.6 8-8v-80c0-4.4-3.6-8-8-8h-44c-4.4 0-8 3.6-8 8v80c0 4.4 3.6 8 8 8zm260 218v44c0 4.4 3.6 8 8 8h80c4.4 0 8-3.6 8-8v-44c0-4.4-3.6-8-8-8h-80c-4.4 0-8 3.6-8 8zm12.7-197.2l-31.1-31.1a8.03 8.03 0 0 0-11.3 0l-56.6 56.6a8.03 8.03 0 0 0 0 11.3l31.1 31.1c3.1 3.1 8.2 3.1 11.3 0l56.6-56.6c3.1-3.1 3.1-8.2 0-11.3zm-458.6-31.1a8.03 8.03 0 0 0-11.3 0l-31.1 31.1a8.03 8.03 0 0 0 0 11.3l56.6 56.6c3.1 3.1 8.2 3.1 11.3 0l31.1-31.1c3.1-3.1 3.1-8.2 0-11.3l-56.6-56.6zM262 530h-80c-4.4 0-8 3.6-8 8v44c0 4.4 3.6 8 8 8h80c4.4 0 8-3.6 8-8v-44c0-4.4-3.6-8-8-8z"></path>
               </svg>
             </i>
             <span data-v-2bfceb7a="" style="font-size: 12px;">历史</span>
           </a-button>

            <a-divider type="vertical" />

            <a @click="handleEdit(record)">编辑</a>
            <a-divider type="vertical" />
            <a-dropdown>
              <a class="ant-dropdown-link">
                更多 <a-icon type="down" />
              </a>
              <a-menu slot="overlay">
                <a-menu-item>
                  <a href="javascript:;" @click="handleDetail(record)">详情</a>
                </a-menu-item>
                <a-menu-item>
                  <a-popconfirm title="确定删除吗?" @confirm="() => handleDelete(record.id)">
                    <a>删除</a>
                  </a-popconfirm>
                </a-menu-item>
              </a-menu>
            </a-dropdown>
        </span>



      </a-table>

      <!--<keep-alive>
        <component :is="tabView" @ok="handleOk" @cancel="handleCancel" ref="sensorhistorylist"></component>
      </keep-alive>-->

    </a-spin>

    <!--<a-spin :spinning="spinning" v-show="sensorHisShow">
      <a-button @click="handleBack" type="primary" >返回</a-button>
      <sensor-historylist title="设备历史记录" :visible="visible"  @ok="handleOk"  @cancel="handleCancel" ref="sensorhistorylist">
      </sensor-historylist>
    </a-spin>-->

    <a-spin :spinning="spinning" v-show="sensorHisShow">
      <a-button @click="handleBack" type="primary" >返回</a-button>
      <sensor-hislist title="设备历史记录" :visible="visible"  @ok="handleOk"  @cancel="handleCancel" ref="sensorhislist">
      </sensor-hislist>
    </a-spin>

    <sensor-list-modal  title="添加设备" :visible="visible"  @ok="handleOk"  @cancel="handleCancel" ref="sensorlistmodal">
    </sensor-list-modal>
  </div>
</template>

<script>
  import { getAction ,deleteAction } from '@/api/manage'
  import SensorListModal from './modules/SensorListModal'
  import SpinLoad from  '../../util/SpinLoad'
  import CRUDData from '../../util/CRUDData'
  //设备历史记录
  //import SensorHistorylist from './SensorHistorylist'
  import SensorHislist from './SensorHislist'

  const columns = [{
    title: '序号',
    dataIndex: 'id',
    key: 'id',
    align: 'center',
    width: 70,
    customRender: function (t, r, index) {
      return index + 1;
    }
  }, {
    title: '产品名',
    dataIndex: 'pname',
    key: 'pname',
    align: 'center',
    width: 70,
  }, {
    title: '设备编号',
    dataIndex: 'termNo',
    key: 'termNo',
    align: 'center',
    width: 70,
  }, {
    title: '设备类型',
    dataIndex: 'stName',
    key: 'stName',
    align: 'center',
    width: 100,
  }, {
    title: '安装时间',
    dataIndex: 'createTime',
    key: 'createTime',
    align: 'center',
    width: 120,
  }, {
    title: '设备操作',
    dataIndex: 'action',
    scopedSlots: { customRender: 'action' },
    align:"center",
    width:80
  }];

  const data = '';
  export default {
    components: {
      SensorListModal,
      SpinLoad,
      CRUDData,
      //SensorHistorylist,
      SensorHislist,
    },
    data() {
      return {
        spinning : '',
        data,
        columns,
        addIframe: false,
        sensorShow: true,
        sensorHisShow: false
      }
    },
    created() {
      this.loadData();
    },
    methods :{
      loadData(){
        this.data = [];
        this.spinning = true;

        getAction('/application/sensor/getPage', { pageSize: 10, pageNo: 1 }).then((res) => {
          if (res.success) {
            console.log('返回数据res.result：',res.result)
            this.data = res.result;
            this.spinning = false;
          }
        })
      },
      handleAdd(){
        this.$refs.sensorlistmodal.add();
        this.$refs.sensorlistmodal.title="新增";
      },

      //历史记录
      handleHis: function(record){
        this.sensorShow = false;
        this.sensorHisShow = true;

        //this.$refs.sensorhistorylist.getHis(record);
        this.$refs.sensorhislist.getHis(record);
      },
      //返回设备列表
      handleBack: function(){
        this.sensorShow = true;
        this.sensorHisShow = false;
        this.$refs.sensorhislist.loadData(record);
      },

      handleEdit: function(record){
        if(record.stName==null){
          record.stId = null;
        }
        //console.log('编辑传值前改变stId的值,record:',record)

        this.$refs.sensorlistmodal.edit(record);
        this.$refs.sensorlistmodal.title="编辑";
      },
      handleDetail(record){
        this.$refs.sensorlistmodal.edit(record);
        this.$refs.sensorlistmodal.title="详情";
        this.$refs.sensorlistmodal.disableSubmit = true;
      },
      handleDelete(id){
        var that = this;

        deleteAction('/application/sensor/deleteSensor', { id:id}).then((res) => {
          if(res.success){
            that.$message.success(res.message);
            that.loadData();
          }else{
            that.$message.warning(res.message);
          }
        });
      },
      handleOk(e) {
        console.log(e);
        this.visible = false
        // 新增/修改 成功时，重载列表
        this.loadData();
      },

    }
  }

</script>

<style scoped>
</style>