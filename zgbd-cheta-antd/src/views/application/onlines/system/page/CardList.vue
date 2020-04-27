<template>
  <div slot="content" v-if="desc">
    <a-row>
      <a-col :span="20">
        <p style="font-size: 14px;line-height: 1.5;color: rgba(0,0,0,.65)">{{desc}}</p>
        <div class="link">
          <template  v-for="(link, index) in linkList">
            <a :key="index" :href="link.href"><a-icon :type="link.icon" />{{link.title}}</a>
          </template>
        </div>
      </a-col>
      <a-col :span="4">
        <img v-if="extraImage" style="height: 74px;transform: scale(2);" :src="extraImage"/>
      </a-col>
    </a-row>
  </div>
</template>

<script>

  import ARow from "ant-design-vue/es/grid/Row";
  export default {
    name: 'CardList',
    components: {ARow},
    props:{
        desc: {
          type: String,
          default: () => ''
      }
    },
    data () {
      return {
        /*desc: '城镇中有那么多的酒馆，她却偏偏走进了我的酒馆，这是个美丽的夜晚。',*/
        linkList: [
          {icon: 'rocket', href: '/#/', title: '快速开始'},
          {icon: 'info-circle-o', href: '/#/', title: '产品简介'},
          {icon: 'file-text', href: '/#/', title: '产品文档'}
        ],
        extraImage: 'https://gw.alipayobjects.com/zos/rmsportal/RzwpdLnhmvDJToTdfDPe.png',
      }
    }
  }
</script>

<style lang="less" scoped>
  .row {
    display: flex;
    width: 100%;
  }
  .link{
    margin-top: 16px;
    line-height: 24px;
    a{
      font-size: 14px;
      margin-right: 32px;
      i{
        font-size: 22px;
        margin-right: 8px;
      }
    }
  }
  .card-avatar {
    width: 48px;
    height: 48px;
    border-radius: 48px;
  }
  .new-btn{
    background-color: #fff;
    border-radius: 2px;
    width: 100%;
    height: 188px;
  }
  .meta-content{
    position: relative;
    overflow: hidden;
    text-overflow: ellipsis;
    display: -webkit-box;
    height: 64px;
    -webkit-line-clamp: 3;
    -webkit-box-orient: vertical;
  }

</style>
