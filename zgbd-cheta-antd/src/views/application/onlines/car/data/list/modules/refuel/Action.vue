<template>
  <div>
    <!--:style="{'color': status[record.status].color}"-->
    <span :style="{'color': status[record.status].color}">{{record.status}}</span>
    <a-divider type="vertical" />
    <span class="pointer" @click="edit">编辑</span>

    <edit-modal ref="editModal"></edit-modal>
  </div>
</template>

<script>
  import EditModal from './EditModal'
  export default {
    name: 'Action',
    components:{
      EditModal
    },
    data(){
      return{
        status : {
          "待审核": {color : '#65ff87'},
          "审核中": {color : '#ff9733'},
          "审核通过": {color : '#1CC09FFF'},
        }
      }
    },
    props: {
        record: {
            type: Object,
            default: () => {}
        },
    },
    methods:{
      edit(){
        this.$refs.editModal.showModal(this.record);
      }
    }
  }
</script>

<style scoped>
  .pointer{
    cursor:pointer
  }
</style>