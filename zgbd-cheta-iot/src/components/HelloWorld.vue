<template>
  <div>
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
      var socket = new WebSocket("ws://localhost:9002/iot/websocket/20");
      socket.onopen = function() {
        $this.message.push('Socket 已打开')
      };
      socket.onmessage = function(msg) {
        $this.message.push(msg.data)
      };
    }
  }
</script>

<style scoped>

</style>
