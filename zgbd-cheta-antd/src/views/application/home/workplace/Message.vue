<template>
    <div v-if="msg">
      <a-alert :message="msg" banner closable :afterClose="handleClose"/>
    </div>
</template>
<script>
  import socket from './socket.js'
  import {getAction } from '@/api/manage'
  import moment from 'moment'
  export default {
    name: 'Message',
    data() {
      return {
        msg: '',
        message:{},
      }
    },
    mounted () {
      var $this = this;
      getAction('/application/notice/getPageByType', {pageSize: 1, pageNo: 1,type:'消息'}).then((res) => {
        if (res.data) {
          // debugger
          $this.message = res.data[0];
          var currentTime=new Date().getTime()
          var outTime=moment($this.message.deadline,'YYYY-MM-DD HH:mm:ss')._d.getTime()
          var obj = JSON.parse(localStorage.getItem('MESSAGE'));
          if(outTime-currentTime>0){
            if (!obj || obj.id != $this.message.id) {
              $this.msg = $this.message.content;
              localStorage.removeItem('MESSAGE');
              localStorage.setItem('MESSAGE', JSON.stringify($this.message));
            }
          }
        }
      })

    },
    methods:{
      moment,
      // websocket 服务
      socketServer () {
        var webSocket = socket;
        var $this = this;
        webSocket.onmessage = function(msg) {
          $this.msg = msg.data;
        };
      },
      handleClose(){
        this.msg = ''
      }
    },
    created(){
      this.socketServer();
    }

  }
</script>

<style scoped>

</style>