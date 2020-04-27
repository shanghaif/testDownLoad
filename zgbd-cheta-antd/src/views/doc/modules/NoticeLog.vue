<template>
  <div class="markdown" style="padding-left: 30px;">
    <div v-html="html.html" v-show="false"></div>
    <div style="margin-bottom: 30px;">
      <div style="margin-bottom: 30px;"><h1>更新日志</h1></div>
      <div>
        <code>发布周期</code>
      </div>
      <div data-v-5af01852="">
        <ul>
          <li>阶段版本号</li>
          <li>期版本号</li>
          <li>修订版本号：每天会进行更新。（如果紧急，则任何时候都可发布）</li>
        </ul>
      </div>
    </div>
    <div v-for="item in logs" style="margin-bottom: 30px;">
      <div><h2>{{ item.title }}</h2></div>
      <div><code>{{ item.deadline }}</code></div>
      <div v-html="item.html"></div>
    </div>
    <mavon-editor v-for="(item,index) in datas" :ref="'md' + index" @change="changeDocs(item)" v-model="item.content" v-show="false"/>
  </div>
</template>

<script>
  import '../markdown.css'
  import {getAction } from '@/api/manage'

  export default {
    name: 'UpdateLog',
    data () {
      return {
        datas: [],
        logs: [],
        html: ''
      }
    },
    created () {
      this.init();
    },
    methods: {
      init () {
        var $this = this;
        getAction('/application/notice/getPageByType', {pageSize: 10, pageNo: 1,type:'公告'}).then(res => {
          $this.datas = res.data;
        })
      },
      changeDocs () {
        var $this = this;
        $this.datas.forEach((item,index) => {
          $this.logs[index] = {
            title: item.title.replace('版本更新', ''),
            deadline: item.deadline,
            html: $this.$refs['md' + index][0].d_render
          }
        })
        this.html = $this.logs[0];
      }
    }
  }
</script>

<style scoped>

</style>