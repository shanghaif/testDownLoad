<template>
  <div>
    <div style="height: 50px;width: 100%;margin-bottom: 1rem;">
        <span class="font">{{title}}</span>
    </div>
    <div class="search-head">
      <div v-if="key === 1" class="title-body">
        <!--物料中心 Header-->
        <CardList :desc="desc"></CardList>
      </div>
      <div  v-else  class="title-body">
        <!--应用中心 Header-->
        <CardList :desc="desc"></CardList>
      </div>
      <div style="padding: 0 24px">
        <a-tabs :tabBarStyle="{margin: 0}" @change="navigate" :activeKey="activeKey">
          <a-tab-pane v-for="tag in tags" :tab="tag.title" :key="tag.key"></a-tab-pane>
        </a-tabs>
      </div>
    </div>
    <div class="search-content">
      <router-view />
    </div>
  </div>
</template>

<script>
  import CardList from './CardList'

  export default {
    name: 'SearchLayout',
    components:{
      CardList
    },
    data () {
      return {
        desc : '城镇中有那么多的酒馆，她却偏偏走进了我的酒馆，这是个美丽的夜晚。',
        key : 1,
        title:'应用中心',

        tags : [
            { title:'应用中心',key : '1'},
            { title:'物料市场',key : '2'},
            { title:'数据中心',key : '3'}
        ]
      }
    },
    created(){
      let that = this;
      that.navigate(that.active());
    },
    computed: {
      activeKey () {
        switch (this.$route.path) {
          case '/material':
            return '1'
          case '/apply':
            return '2'
          case '/dataCenter':
            return '3'
          default:
            return '1'
        }
      }
    },
    methods: {
      active () {
        switch (this.$route.path) {
          case '/material':
            return '1'
          case '/apply':
            return '2'
          case '/dataCenter':
            return '3'
          default:
            return '1'
        }
      },
      navigate (key) {
        this.key = key
        switch (key) {
          case '1':
            this.$router.push('/material')
            this.title = this.tags[0].title;
            break
          case '2':
            this.$router.push('/apply')
            this.title = this.tags[1].title;
            break
          case '3':
            this.$router.push('/dataCenter')
            this.title = this.tags[2].title;
            break
          default:
            this.$router.push('/material')
        }
      }
    }
  }
</script>

<style lang="less" scoped>
  .title-body{
    margin-left: 2rem;height: 74px;
  }
  .font{
    margin-left: 0.5rem;
    flex: auto;
    font-size: 20px;
    font-weight: 500;
    color: rgba(0,0,0,.85);
    margin-bottom: 20px;
  }
  .search-head{
    background-color: #fff;
    margin: -25px -24px -24px;
    .search-input{
      text-align: center;
    }
  }
  .search-content{
    margin-top: 48px;
  }
</style>
