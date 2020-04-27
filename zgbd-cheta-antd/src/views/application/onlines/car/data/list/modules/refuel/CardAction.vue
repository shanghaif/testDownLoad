<template>
  <div>
    <a @click="openPrepaid">充值记录</a>
    <a-divider type="vertical" />
    <a @click="openRefuel">加油记录</a>

    <prepaid-modal ref="prepaidmodal"></prepaid-modal>
  </div>
</template>

<script>
  import PrepaidModal from './PrepaidModal'
  export default {
    name: 'CardAction',
    components:{
      PrepaidModal
    },
    props: {
      record: {
        type: Object,
        default: () => {}
      },
    },
    methods:{
      //充值记录
      openPrepaid(){
        this.$refs.prepaidmodal.showPrepaidModal(this.record);
      },
      //加油记录
      openRefuel(){
        this.$refs.prepaidmodal.showRefuelModal(this.record);
      }
    }
  }
</script>

<style scoped>

</style>