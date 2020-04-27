<template>
  <div class="cheta-p20-15">
    <a-card
      :bordered="false"
      class="cheta-report-shadow"
      :tabList="[{key: 1, tab: '系统'}, {key: 2, tab: '在线'}]"
      :activeTabKey="selected"
      @tabChange="tabChange"
    >
      <Report v-if="selected === 1" @change="change" />
    </a-card>
    <SystemIndex class="cheta-mt-16" v-if="selected === 1" ref="systemindex" @getDetail="getDetail" @addReport="addReport"></SystemIndex>
    <OnlineIndex v-if="selected === 2 "></OnlineIndex>
  </div>

</template>

<script>/*
  async function awaitDemo() {
    let result = await sleep(2000);
    console.log(result);
  }

  function sleep(ms) {
    return new Promise(resolve =>
      setTimeout(resolve, ms)
    )
  }*/

  import Report from './system/Report'
  import OnlineIndex from './online/Index'
  import SystemIndex from './system/Index'
  import { getAction, postAction } from '@/api/manage'
  export default {
    name: 'Index',
    components: {  Report , OnlineIndex, SystemIndex},
    data () {
      return {
        selected: 1,
        reportItem: null,
      }
    },
    created () {
      getAction('/test/data', {}).then(res => {

      })
    },

    methods: {
      change (item) {
        this.reportItem=item
        this.$refs.systemindex.getData(item)
      },
      getDetail (item) {
        this.$router.push({
          name: '报表详情',
          params: item
        })
      },
      addReport () {
        this.$router.push({path: '/xitongbaobiao'})
      },
      tabChange (key) {
        this.selected = key
        this.reportItem = null
      }
    }
  }
</script>
<style lang="less" scoped>
  .cheta-report-shadow {
    -webkit-box-shadow:0px 0px 5px 0px rgba(204,204,204,0.5);
    box-shadow:0px 0px 5px 0px rgba(204,204,204,0.5);
    border-radius:3px;
  }
</style>
