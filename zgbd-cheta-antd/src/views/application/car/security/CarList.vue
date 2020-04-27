<template>
  <div>
    <div style="" class="cheta-ml-10">
      <a-input-search placeholder="请输入关键字" @search="search"/>
    </div>
    <ul class="cheta-font-align cheta-scroll cheta-list">
      <li v-for="(item,index) in carList" :key="index" class="cheta-mt-10 cheta-flex-around">
        <a-checkbox>{{item.title}}</a-checkbox>
        <span>
          <i v-if="!collection" class="iconfont icon-wujiaoxing cheta-color" @click="collectOpen"></i>
          <i v-else class="iconfont icon-shoucang cheta-color" @click="collectClose"></i>
        </span>
      </li>

    </ul>
  </div>
</template>

<script>
  // import carList from './modules/data.json'
  // import { getAction } from '@/api/manage'

  export default {
    name: 'CarList',
    data () {
      return {
        collection: false,
        carList: [
          {title:"粤AD48556"},
          {title:"粤AD48556"},
          {title:"粤AD48556"},
          {title:"粤AD48556"},
          {title:"粤AD48556"},
          {title:"粤AD48556"},
          {title:"粤AD48556"},
          {title:"粤AD48556"},
          {title:"粤AD48556"},
          {title:"粤AD48556"},
          {title:"粤AD48556"},
          {title:"粤AD48556"},
          {title:"粤AD48556"},
          {title:"粤AD48556"},
          {title:"粤AD48556"},
          {title:"粤AD48556"},
          {title:"粤AD48556"},
          {title:"粤AD48556"},
          {title:"粤AD48556"},
          {title:"粤AD48556"},
          {title:"粤AD48556"},
          {title:"粤AD48556"},
          {title:"粤AD48556"},
          {title:"粤AD48556"},
          {title:"粤AD48556"},
          {title:"粤AD48556"},
          {title:"粤AD48556"},
          {title:"粤AD48556"},
        ]
      }
    },
    methods: {
      search () {},
      collectOpen () {
        this.collection = true
      },
      collectClose () {
        this.collection = false
      }
    }
  }
</script>

<style lang="less" scoped>
  .cheta-list{
    height:calc(100vh - 260px);
    overflow-y: scroll;
  }
</style>