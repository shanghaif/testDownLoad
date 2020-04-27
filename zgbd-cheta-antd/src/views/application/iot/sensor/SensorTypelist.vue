<template>
  <div>
    <a-spin :spinning="spinning">
      <a-button @click="handleAdd" type="primary" >新增</a-button>
      <!--bordered size="middle"-->
      <a-table :columns="columns" :dataSource="data" :rowSelection="rowSelection" bordered>
        <span slot="action" slot-scope="text, record">
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
    </a-spin>
    <sensor-type-list-modal title="添加设备类型" :visible="visible" @ok="handleOk" @cancel="handleCancel" ref="sensortypelistmodal">
    </sensor-type-list-modal>
  </div>

</template>

<script>
  import { getAction ,deleteAction } from '@/api/manage'
  import SensorTypeListModal from './modules/SensorTypeListModal'
  import CRUDData from '../../util/CRUDData'

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
    title: '设备类型',
    dataIndex: 'stName',
    key: 'stName',
    align: 'center',
    customRender: function (t, r, index) {
      if(r.stRemark != " " && r.stRemark != null){
        return r.stName + '[' + r.stRemark + "]";
      }else{
        return r.stName;
      }
    }
  }, {
    title: '设备类型属性',
    dataIndex: 'attrNames',
    key: 'attrNames',
    align: 'center',
    customRender: function (t, r, index) {
      /*let attrNames = r.attrNames.split(",");
      console.log('attrNames:',attrNames)
      console.log('attrNames.length:',attrNames.length)
      for(let i = 0;i<attrNames.length;i++){
        attrNames[i] = "【" + attrNames[i] + "】";
      }
      return attrNames;*/

      if(r.attrNames != null) {
        let attrNames = r.attrNames.split(",");
        console.log('attrNames!=null,attrNames：',r.attrNames)
        for (let i = 0; i < attrNames.length; i++) {
          attrNames[i] = "【" + attrNames[i] + "】";
        }
        return attrNames;
      }else{
        console.log('attrNames==null,attrNames：',r.attrNames)
        r.attrNames = '';
        let attrNames = r.attrNames;
        attrNames[0] = '无';
        return attrNames;
      }

    }
  }, {
    title: '操作',
    dataIndex: 'action',
    scopedSlots: { customRender: 'action' },
    fixed:"right",
    align:"center",
    width: 150
  }];


  const data = '';
  export default {
    components: {
      SensorTypeListModal,
      CRUDData,
    },
    data() {
      return {
        data,
        columns,
      }
    },
    created() {
      this.loadData();
    },
    methods: {
      loadData() {
        this.data = [];
        this.spinning = true;
        getAction('/application/type/getPage', { pageSize: 10, pageNo: 1 }).then((res) => {
          if (res.success) {
            this.data = res.result;
            this.spinning = false;
          }
        })
      },
      handleAdd(){
        this.$refs.sensortypelistmodal.add();
        this.$refs.sensortypelistmodal.title="新增";
      },
      handleEdit: function(record){
        this.$refs.sensortypelistmodal.edit(record);
        this.$refs.sensortypelistmodal.title="编辑";
      },
      handleDetail(record){
        this.$refs.sensortypelistmodal.edit(record);
        this.$refs.sensortypelistmodal.title="详情";
        this.$refs.sensortypelistmodal.disableSubmit = true;
      },
      handleDelete(id){
        var that = this;
        deleteAction('/application/type/deleteSensorType', { id:id}).then((res) => {
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