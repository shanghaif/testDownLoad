<template>
    <div>
      <a-button type="primary" @click="showPark" style="margin-right: 10px">查看停车点</a-button>
      <Replaying></Replaying>
      <park-point-modal ref="parkpointmodal"></park-point-modal>
    </div>
</template>

<script>
  import Replaying from "@/views/application/onlines/car/data/list/modules/postalStatements/Replaying";
  import ParkPointModal from "@/views/application/onlines/car/data/modal/ParkPointModal";
  export default {
    name: 'OnCarAction',
    components: {Replaying,ParkPointModal},
    props: {
      record: {
        type: Object,
        default: () => {}
      },
      content: {
        type: Object,
        default: () => ''
      }
    },
    methods:{
      showPark(){
        this.$refs.parkpointmodal.showModal(null);
      }
    }
  }
</script>

<style scoped>

</style>