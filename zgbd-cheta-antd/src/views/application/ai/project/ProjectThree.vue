<template>
  <a-card
    style="margin-top: 24px"
    :bordered="false"
    title="清运数据详情">
    <a-list size="large" :pagination="{showSizeChanger: true, showQuickJumper: true, pageSize: 5, total: 50}">
      <a-list-item :key="index" v-for="(item, index) in data">
        <a-list-item-meta :description="item.description">
          <a-avatar slot="avatar" size="large" shape="square" :src="item.avatar"/>
          <a slot="title">{{ item.title }}</a>
        </a-list-item-meta>
        <!--<div slot="actions">-->
        <!--<a>编辑</a>-->
        <!--</div>-->
        <div slot="actions">
          <a-dropdown>
            <a-menu slot="overlay">
              <a-menu-item><a>更多详细。。。 。。。</a></a-menu-item>
              <!--<a-menu-item><a>删除</a></a-menu-item>-->
            </a-menu>
            <a>更多<a-icon type="down"/></a>
          </a-dropdown>
        </div>
        <div class="list-content">
          <div class="list-content-item">
            <span>项目总负责人</span>
            <p>{{ item.owner }}</p>
          </div>
          <div class="list-content-item">
            <span>开始时间</span>
            <p>{{ item.startAt }}</p>
          </div>
          <div class="list-content-item">
            <a-progress :percent="item.progress.value" :status="!item.progress.status ? null : item.progress.status" style="width: 180px" />
          </div>
        </div>
      </a-list-item>
    </a-list>

  </a-card>
</template>
<script>
  import HeadInfo from '@/components/tools/HeadInfo'
  import ACol from 'ant-design-vue/es/grid/Col'

  const data = []
  data.push({
    title: '项目一',
    avatar: 'http://img95.699pic.com/element/40111/7136.png_860.png',
    description: '说明：项目进展顺利',
    owner: '王晓东',
    startAt: '2018-07-26 22:44',
    progress: {
      value: 90
    }
  })
  data.push({
    title: '项目二',
    avatar: 'http://img95.699pic.com/element/40111/7140.png_860.png',
    description: '说明：近期天气炎热，项目进展持续中',
    owner: '曲丽丽',
    startAt: '2018-07-26 22:44',
    progress: {
      value: 54
    }
  })
  data.push({
    title: '水泥',
    avatar: 'http://img95.699pic.com/element/40111/7143.png_860.png',
    description: '说明：清运已完成',
    owner: '林东东',
    startAt: '2018-07-26 22:44',
    progress: {
      value: 93
    }
  })
  data.push({
    title: '待添加',
    avatar: 'http://img95.699pic.com/element/40111/7142.png_860.png',
    description: '说明：待补充... ...',
    owner: '周星星',
    startAt: '2018-07-26 22:44',
    progress: {
      value: 30
    }
  })
  data.push({
    title: 'Bootstrap',
    avatar: 'http://img95.699pic.com/element/40111/7146.png_860.png',
    description: '说明：那时候我只会想自己想要什么，从不想自己拥有什么',
    owner: '吴加好',
    startAt: '2018-07-26 22:44',
    progress: {
      value: 80
      // 报错样式
      // status: 'exception',
      // value: 100
    }
  })

  export default {
    name: 'StandardList',
    components: {
      ACol,
      HeadInfo
    },
    data () {
      return {
        data,
        percent: 60,
        initDeg: 0,
        timeId: null,
        animationing: false,
        percent3: ''
      }
    }
  }



</script>

<style lang="less" scoped>
  .ant-avatar-lg {
    width: 48px;
    height: 48px;
    line-height: 48px;
  }

  .list-content-item {
    color: rgba(0, 0, 0, .45);
    display: inline-block;
    vertical-align: middle;
    font-size: 14px;
    margin-left: 240px;
    span {
      line-height: 20px;
    }
    p {
      margin-top: 4px;
      margin-bottom: 0;
      line-height: 22px;
    }
  }

</style>
