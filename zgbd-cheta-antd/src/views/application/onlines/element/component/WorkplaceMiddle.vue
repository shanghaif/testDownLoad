<template>
  <a-card
    class="project-list"
    :loading="loading"
    style="margin-bottom: 24px;"
    :bordered="false"
    title="服务"
    :body-style="{ padding: 0 }">
    <a slot="extra">全部服务</a>
    <div>
      <a-card-grid class="project-card-grid" :key="i" v-for="(item, i) in projects">
        <a-card :bordered="false" :body-style="{ padding: 0 }">
          <a-card-meta>
            <div slot="title" class="card-title">
              <a-avatar size="small" :src="item.cover"/>
              <a>{{ item.title }}</a>
            </div>
            <div slot="description" class="card-description">
              {{ item.description }}
            </div>
          </a-card-meta>
          <div class="project-item">
            <a href="/#/">車塔云出品</a>
            <span class="datetime">9小时前</span>
          </div>
        </a-card>
      </a-card-grid>
    </div>
  </a-card>
</template>

<script>
  export default {
    name: 'WorkplaceMiddle',
    data () {
      return {
        projects: [],
        loading: true
      }
    },
    created () {
      this.getProjects();
    },
    methods: {
      getProjects() {
        this.projects = [{
          cover: 'https://gw.alipayobjects.com/zos/rmsportal/WdGqmHpayyMjiEhcKoVE.png',
          description: '那是一种内在的东西， 他们到达不了，也无法触及的',
          id: 1,
          status: 1,
          title: '商城',
          updatedAt: '2018-07-26 00:00:00'
        }, {
          cover: 'https://gw.alipayobjects.com/zos/rmsportal/zOsKZmFRdUtvpqCImOVY.png',
          description: '那是一种内在的东西， 他们到达不了，也无法触及的',
          id: 1,
          status: 1,
          title: '车辆管理',
          updatedAt: '2018-07-26 00:00:00'
        }, {
          cover: 'https://gw.alipayobjects.com/zos/rmsportal/dURIMkkrRFpPgTuzkwnB.png',
          description: '那是一种内在的东西， 他们到达不了，也无法触及的',
          id: 1,
          status: 1,
          title: '用车网',
          updatedAt: '2018-07-26 00:00:00'
        }, {
          cover: 'https://gw.alipayobjects.com/zos/rmsportal/sfjbOqnsXXJgNCjCzDBL.png',
          description: '那是一种内在的东西， 他们到达不了，也无法触及的',
          id: 1,
          status: 1,
          title: '结算中心',
          updatedAt: '2018-07-26 00:00:00'
        }, {
          cover: 'https://gw.alipayobjects.com/zos/rmsportal/siCrBXXhmvTQGWPNLBow.png',
          description: '那是一种内在的东西， 他们到达不了，也无法触及的',
          id: 1,
          status: 1,
          title: '金融服务',
          updatedAt: '2018-07-26 00:00:00'
        }, {
          cover: 'https://gw.alipayobjects.com/zos/rmsportal/ComBAopevLwENQdKWiIn.png',
          description: '那是一种内在的东西， 他们到达不了，也无法触及的',
          id: 1,
          status: 1,
          title: '用户管理',
          updatedAt: '2018-07-26 00:00:00'
        }]
        // this.projects = res.result && res.result.data
        this.loading = false
      },
    }
  }
</script>

<style lang="scss" scoped>
  .project-list {

    .card-title {
      font-size: 0;

      a {
        color: rgba(0, 0, 0, 0.85);
        margin-left: 12px;
        line-height: 24px;
        height: 24px;
        display: inline-block;
        vertical-align: top;
        font-size: 14px;

        &:hover {
          color: #1890ff;
        }
      }
    }
    .card-description {
      color: rgba(0, 0, 0, 0.45);
      height: 44px;
      line-height: 22px;
      overflow: hidden;
    }
    .project-item {
      display: flex;
      margin-top: 8px;
      overflow: hidden;
      font-size: 12px;
      height: 20px;
      line-height: 20px;
      a {
        color: rgba(0, 0, 0, 0.45);
        display: inline-block;
        flex: 1 1 0;

        &:hover {
          color: #1890ff;
        }
      }
      .datetime {
        color: rgba(0, 0, 0, 0.25);
        flex: 0 0 auto;
        float: right;
      }
    }
    .ant-card-meta-description {
      color: rgba(0, 0, 0, 0.45);
      height: 44px;
      line-height: 22px;
      overflow: hidden;
    }
  }

  .item-group {
    padding: 20px 0 8px 24px;
    font-size: 0;
    a {
      color: rgba(0, 0, 0, 0.65);
      display: inline-block;
      font-size: 14px;
      margin-bottom: 13px;
      width: 25%;
    }
  }

  .members {
    a {
      display: block;
      margin: 12px 0;
      line-height: 24px;
      height: 24px;
      .member {
        font-size: 14px;
        color: rgba(0, 0, 0, .65);
        line-height: 24px;
        max-width: 100px;
        vertical-align: top;
        margin-left: 12px;
        transition: all 0.3s;
        display: inline-block;
      }
      &:hover {
        span {
          color: #1890ff;
        }
      }
    }
  }

  .mobile {

    .project-list {

      .project-card-grid {
        width: 100%;
      }
    }

    .more-info {
      border: 0;
      padding-top: 16px;
      margin: 16px 0 16px;
    }

    .headerContent .title .welcome-text {
      display: none;
    }
  }

</style>