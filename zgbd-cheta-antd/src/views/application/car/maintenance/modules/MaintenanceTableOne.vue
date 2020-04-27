<template>
<a-row>
  <a-col span="24">
    <div class="top">
      <div class="topOne">
      <span>时间：</span>
      <a-select defaultValue="lucy" style="width: 120px" @change="handleChange">
        <a-select-option value="本周内">本周内</a-select-option>
        <a-select-option value="本月内">本月内</a-select-option>
        <a-select-option value="近三月">近三月</a-select-option>
      </a-select>
      </div>
      <div class="topOne">
      <span>车牌号：</span>
      <a-input-search
        placeholder="请输入车牌号"
        style="width: 200px"
        @search="onSearch"
      />
      </div>
      <div class="topOne">
      <a-icon type="reconciliation" class="iconOne"/> <a-badge count="2" style="margin-right: 10px;line-height: 40px;" :numberStyle="{minWidth:'11px',height: '11px',padding: '0',fontSize: '5px',borderRadius:'50%',lineHeight:'11px',marginTop:'-18px' }"/>
      <span class="topTwo">我的计划</span>
      </div>
    </div>
  </a-col>
<a-col span="24">
  <div style="padding: 0px">
    <a-table :columns="columns" :dataSource="data"  style="margin: 0px">
      <a slot="action" slot-scope="text" href="javascript:;">action</a>
      <div slot="addressNine" slot-scope="text">
        <div v-if="text==='审批中'">
          <a-badge status="success" text="审批中"/>
        </div>
      </div>
    </a-table>
  </div>
</a-col>

</a-row>
</template>

<script>
  export default {
    name: 'MaintenanceTableOne',
    data(){
      return {
        visible: false,
        data,
        columns,
        // flow: {
        //   'addressnine':{key:'addressnine', desc:'审批中',style:'processing'},
        //
        // }
      }
    },
    methods:{
      onSearch(value) {
        console.log(value)
      },
      showModal() {
        this.visible = true
      },


    },
    components:{
    },

  }
  const columns = [
    { title: '序号',dataIndex: 'name', key: 'name'},
    { title: '临时车牌号', dataIndex: 'addressOne', key: 'addressOne' },
    { title: '正式车牌号', dataIndex: 'addressTwo', key: 'addressTwo' },
    { title: '车辆所属', dataIndex: 'addressThree', key: 'addressThree' },
    { title: '期限', dataIndex: 'addressFour', key: 'addressFour' },
    { title: '预计完成时间', dataIndex: 'addressFive', key: 'addressFive' },
    { title: '审批人', dataIndex: 'addressSix', key: 'addressSix' },
    { title: '备注', dataIndex: 'addressSeven', key: 'addressSeven' },
    { title: '状态', dataIndex: 'addressNine', key: 'addressNine' ,scopedSlots: {customRender: 'addressNine'}},
  ];
  const data = [{
    key: '1',
    name: '1',
    addressOne: '粤ADU145',
    addressTwo: '粤ADU145',
    addressThree: 'XXXXXXX',
    addressFour: '4年',
    addressFive: '2019-07-05',
    addressSix: '吕晓萍',
    addressSeven: 'XXXXXXXX',
    addressNine: '审批中',
  }, {
    key: '2',
    name: '2',
    addressOne: '粤ADU165',
    addressTwo: '粤ADU145',
    addressThree: 'XXXXXXX',
    addressFour: '5年',
    addressFive: '2019-07-05',
    addressSix: '吕晓萍',
    addressSeven: 'XXXXXXXX',
    addressNine: '审批中',
  }, {
    key: '3',
    name: '3',
    addressOne: '粤ADU142',
    addressTwo: '粤ADU145',
    addressThree: 'XXXXXXX',
    addressFour: '2年',
    addressFive: '2019-07-05',
    addressSix: '吕晓萍',
    addressSeven: 'XXXXXXXX',
    addressNine: '审批中',
  }, {
    key: '2',
    name: '2',
    addressOne: '粤ADU623',
    addressTwo: '粤ADU145',
    addressThree: 'XXXXXXX',
    addressFour: '4年',
    addressFive: '2019-07-05',
    addressSix: '吕晓萍',
    addressSeven: 'XXXXXXXX',
    addressNine: '审批中',
  }];


</script>

<style scoped>
  .topOne{
    display: inline;
    padding: 20px;
  }
  .top{
    padding-bottom: 10px;
  }
  .top span{
    font-size:14px;
    font-family:Microsoft YaHei;
    font-weight:400;
    color:rgba(153,153,153,1);
    line-height:40px;
  }
.iconOne{
  font-size: 20px;
  color: #999999;
}
  .topTwo{
  margin-left: 8px;
  }
  .iconTwo{
margin-top: -25px;

  }
</style>