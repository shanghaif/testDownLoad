<template>
    <div>
      <a-button type="primary" @click="showCarReplay">轨迹回放</a-button>
      <re-play-modal ref="replaymodal"></re-play-modal>
    </div>
</template>

<script>
  import RePlayModal from "@/views/application/onlines/car/data/modal/RePlayModal";
  export default {
    name: 'Replaying',
    components: {RePlayModal},
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
      showCarReplay(){
        window.location.href = "/Car/Annal/"+this.record.carId;
      },
      showReplay(){
        this.$refs.replaymodal.showModal(this.record);
      }
    }
  }
</script>

<style scoped>

</style>