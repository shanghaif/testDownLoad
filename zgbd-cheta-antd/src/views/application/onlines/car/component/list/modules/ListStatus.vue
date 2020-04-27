<template>
    <span>
      <a-badge :status="flow[record.status].status"/>
      <span :style="'color:' +flow[record.status].color+';'">{{record.status}}</span>
    </span>
</template>

<script>
    export default {
      name: "ListRaw",
      data() {
        return {
          //status ：processing 、success 、error、warning
          //color ：颜色
          flow : {
            "审核中" : {
              color : "#3058ff",
              status: "processing"
            },
            "审核通过" : {
              color : "#36e629",
              status: "success"
            },
            "审核驳回" : {
              color : "#e62871",
              status: "error"
            },
            "待审核" : {
              color : "",
              status: ""
            },
          }
        }
      },
      props: {
        //表格数据
        record: {
          type: Object
        },
        //附加自己所需要的数据
        /*data:{
          type: Object
        }*/
      },
    }
</script>

<style scoped>

</style>