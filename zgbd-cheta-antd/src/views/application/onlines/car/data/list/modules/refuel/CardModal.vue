<template>
  <a-modal
    :title="title"
    v-model="editVisible"
    cancelText="关闭"
    width="40%"
    @ok="submitAction"
  >
    <a-table bordered :dataSource="dataSource" :customRow = "clickrow" :columns="columns" size="small" >
      <span slot="name" slot-scope="text, record">
        {{text}}
      </span>
    </a-table>
  </a-modal>
</template>

<script>
  export default {
    name: 'cardModal',
    data() {
      return {
        title:"充值记录",
        editVisible:false,
        url:{
          refule:'',
        }
      }
    },
    methods:{
      submitAction(){
        console.log("查看记录");
      }
    }
  }
</script>

<style scoped>

</style>