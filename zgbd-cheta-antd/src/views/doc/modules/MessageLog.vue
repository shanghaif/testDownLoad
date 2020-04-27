<template>
  <div class="markdown" style="padding-left: 30px;">
    <div style="margin-bottom: 30px;"><h1>消息日志</h1></div>
    <ul>
      <li v-for="item in logs"><code>{{ item.deadline }}</code> {{ item.content }}</li>
    </ul>
  </div>
</template>

<script>
  import '../markdown.css'
  import {getAction } from '@/api/manage'

  export default {
    name: 'UpdateLog',
    data () {
      return {
        logs: []
      }
    },
    created () {
      this.init();
    },
    methods: {
      init () {
        var $this = this;
        getAction('/application/notice/getPageByType', {pageSize: 10, pageNo: 1,type:'消息'}).then(res => {
          res.data.forEach((item,index) => {
            $this.logs[index] = {
              title: item.title,
              deadline: item.deadline,
              content: item.content
            }
          })
        })
      }
    }
  }
</script>

<style scoped>

</style>