<template>
  <a-modal
    :title="title"
    v-model="visible"
    cancelText="关闭"
    width="50%"
  >
    <a-spin :spinning="spinning">
      【轨迹回放对话框】
    </a-spin>
  </a-modal>
</template>

<script>
  import formMixin from '@/views/application/onlines/car/data/list/modules/config/component.js'
  export default {
    name: 'RePlayModal',
    components: Object.assign(
      formMixin.components,
      {}
    ),
    data() {
      return {
        spinning : false,
        title : '轨迹回放',
        visible : false,
        result : {},
      }
    },
    methods:{
      //显示modal
      showModal(result){
        var that = this;
        that.result = result;
        that.visible = true;
      },
    }
  }
</script>

<style scoped>

</style>