<template>
  <a-form-item v-bind="item">
    <a-tree-select
      v-decorator="[bind.fieldName, bind.rules]"
      v-bind="attr"
      style="width: 100%;"
      :treeData="treeData"
      showSearch
      treeNodeFilterProp="title"
      placeholder="请选择父级名称"
    >
    </a-tree-select>
  </a-form-item>
</template>

<script>
  import { getOrganTree } from '@/api/api.js'
  export default {
    name: 'Organ',
    props: {
      attr: {
        type: Object
      },
      item: {
        type: Object
      },
      bind: {
        type: Object
      }
    },
    data() {
      return {
        treeData:[]
      }
    },
    created(){
      this.initOrgan();
    },
    methods:{
      initOrgan(){
        getOrganTree().then(res => {
          var $this = this
          $this.treeData = res.result;
        })
      },
    }
  }
</script>

<style scoped>

</style>