<template>
  <div
    class="demo-infinite-container"
    v-infinite-scroll="handleInfiniteOnLoad"
    :infinite-scroll-disabled="loading"
    :infinite-scroll-distance="14"
  >
    <div class="member-list">
      <a-list
        itemLayout="horizontal"
        :dataSource="warnMessage"
        :loading="loading"
      >
        <a-list-item class="member-list-item" slot="renderItem" slot-scope="item,index" :style="{ padding:'12px 12px 12px 24px'}">
          <a-list-item-meta>
            <a-avatar
              slot="avatar"
              src="/image/carsecurity/emergency.png"
            />
            <div slot="title" class="clearfix"><p class="cheta-block cheta-floatl cheta-font14">{{ item.registrationNo }}</p><p class="cheta-block cheta-floatr cheta-font12">{{ item.gt }}</p></div>
            <span slot="description" style="">{{item.content}}</span>
          </a-list-item-meta>
        </a-list-item>
        <div v-if="loading" class="demo-loading-container">
          <a-spin />
        </div>
      </a-list>
    </div>
  </div>
</template>

<script>
  // import infiniteScroll from 'vue-infinite-scroll';
  // import { getAlarm } from '@/views/application/car/api/api'
  export default {
    // directives: { infiniteScroll },
    name: 'cash',
    data () {
      return {
        count:0,
        pageNo:1,
        pageSize:10,
        loading: false,
        warnMessage:[]
      }
    },
    created() {
      this.getWarnData();
    },
    methods: {
      getWarnData() {
        this.loading = true;
        var param={
          pageNo:this.pageNo,
          pageSize:this.pageSize,
          keyword:this.keyword,
        }
        // var $this = this
        // getAlarm(param).then(res =>{
        //   $this.count= res.count
        //   $this.warnMessage = $this.warnMessage.concat(res.data);
        //   $this.loading = false
        // })
      },
      handleInfiniteOnLoad() {
        this.pageNo += 1;
        this.getWarnData();
      },
    },
  }
</script>

<style scoped>
  .demo-infinite-container {
    border: 1px solid #e8e8e8;
    border-radius: 4px;
    overflow: auto;
    padding: 8px 24px;
    height: 300px;
  }
  .demo-loading-container {
    position: absolute;
    bottom: 40px;
    width: 100%;
    text-align: center;
  }
</style>