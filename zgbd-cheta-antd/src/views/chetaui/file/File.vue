<template>
  <a-modal
    title="图片库"
    v-model="visible"
    @ok="open"
    @cancel="close"
    cancelText="取消"
    okText="确定"
    width="600px"
    height="400px"
    :closable="false"
  >

  </a-modal>
</template>

<script>
  export default {
    name: 'File',
    data () {
      return {
        visible: false
      }
    },
    methods: {
      open () {
        this.visible = true;
      },
      close () {
        this.visible = false;
      }
    }
  }
</script>

<style scoped>

</style>