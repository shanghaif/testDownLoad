<template>
  <a-modal
    :title="title"
    v-model="visible"
    cancelText="关闭"
    width="60%"
  >
    <a-spin :spinning="spinning">
      <a-table
        :columns="columns"
        :dataSource="data"
        rowKey="id"
        class="cheta-mt-10 cheta-positionr"
        :pagination="false"
      >
        <component
          v-for="column in columns"
          v-if="column.scopedSlots.customRender"
          :is="column.scopedSlots.component"
          :slot="column.key"
          slot-scope="text, record, index"
          :content="text"
          :record="record"
          :ind="index + countNo"
          @refresh="init"
        />
      </a-table>
    </a-spin>
  </a-modal>
</template>

<script>
  import { getAction } from '@/api/manage'
  import formMixin from '@/views/application/onlines/car/data/list/modules/config/component.js'

  export default {
    name: 'DetailModal',
    components: Object.assign(
      formMixin.components,
      {}
    ),
    data() {
      return {
        countNo : 0,
        spinning : false,
        title : '报表与接口对接详情数据',
        visible : false,
        columns: [],
        data: [],
        pagination : {current:1,pageSize:10,total:100},
        result : {},
        url :''
      }
    },
    methods:{
      showModal(result){
        var that = this;
        that.spinning = true;
        that.result = result;
        that.url = result.http.url;
        that.columns =  result.columns;
        that.init(result.http.url,result.http.params);
        that.visible = true;
      },
      init(url,params){
        var that = this;
        getAction(url,params).then(res => {
          if(res.result){
            that.data = res.result.data;
            that.pagination.total = res.result.count;
            that.spinning = false;
          }else{
            that.$message.warning("数据错误！");
          }
        })
      }
    }
  }
</script>

<style scoped>

</style>