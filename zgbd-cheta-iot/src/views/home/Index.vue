<template>
  <div>
    123
    <p v-for="msg in message">
      {{ msg }}
    </p>
  </div>
</template>

<script>
  export default {
    name: "Index",
    data () {
      return {
        message: []
      }
    },
    created () {
      var $this = this;
      var socket = new WebSocket("ws://49.234.21.239:8080/system/websocket/20");
      socket.onopen = function() {
        $this.message.push('Socket 已打开')
      };
    }
  }
</script>

<style scoped>

</style>
