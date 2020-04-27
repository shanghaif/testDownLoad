<template>
  <a-modal title="选择插槽" :closable="false" v-model="visible">
    <a-list size="large" :pagination="data.length>=10?true:false" bordered :dataSource="data">
      <a-list-item class="cheta-list-item" slot="renderItem" slot-scope="item, index" @click="addAction(item)">
        {{ item.title }}
      </a-list-item>
    </a-list>
  </a-modal>
</template>

<script>
  import formMixin from '@/views/application/onlines/car/data/list/modules/config/component.js'

  export default {
    name: 'ListSlot',
    data () {
      return {
        visible: false,
        data : formMixin.data,
        columns: [],
        record: {}
      }
    },
    methods: {
      open (record, columns) {
        this.record = record;
        this.columns = columns;
        this.visible = true;
      },
      doPageSize(){
        let that = this;
        if(that.data.length >= 10){
          return true;
        }else{
          return false;
        }
      },
      close () {
        this.visible = false;
      },
      addAction (action) {
        var obj = Object.assign(action, {id: this.record.key });
        this.$emit('onCellChange', this.record.key, 'dataIndex', this.record.dataIndex);
        // 字段
        this.record.scopedSlots = { customRender: obj.id, component: action.component,slotName:  action.title + '（插槽）'};
        this.close();
      }
    }
  }
</script>

<style scoped>
  .cheta-list-item:hover{background-color: #eee;cursor: pointer}
</style>