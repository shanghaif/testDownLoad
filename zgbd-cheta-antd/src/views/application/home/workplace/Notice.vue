<template>
  <div>
    <mavon-editor ref="md" @change="changeDocs" v-model="doc.content" v-show="false"/>
  </div>

</template>

<script>
  import {getAction } from '@/api/manage'
  import '@views/doc/markdown.css'
  import moment from 'moment'
  import store from '@/store'

  export default {
    name: 'Notice',
    data() {
      return {
        doc: {},
        visible: true,
      }
    },
    components: {store},
    mounted () {
      var $this = this;
      getAction('/application/notice/getPageByType', {pageSize: 1, pageNo: 1,type:'公告'}).then((res) => {
        $this.doc = res.data[0];
      })
    },
    methods: {
      // ...mapActions(["SetNotification"]),
      moment,
      changeDocs () {
        var currentTime=new Date().getTime()
        var outTime=moment(this.doc.deadline,'YYYY-MM-DD HH:mm:ss')._d.getTime()
        const h = this.$createElement
        // TODO 先获取缓存
        var obj = JSON.parse(localStorage.getItem('NOTIFICATION'));
        if(outTime-currentTime>0){
          if (!obj || obj.id != this.doc.id) {
            this.$info({
              title: '更新内容',
              content: h('div', {
                domProps: {
                  innerHTML: '<div class="markdown">' + this.$refs.md.d_render + '</div>'
                },
              }),
              iconType: 'notification',
            })
            localStorage.removeItem('NOTIFICATION');
            localStorage.setItem('NOTIFICATION', JSON.stringify(this.doc));
          }
        }

      }
    }
  }
</script>

<style scoped>

</style>