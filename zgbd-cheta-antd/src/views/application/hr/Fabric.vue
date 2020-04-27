<template>
  <div class="card-list" ref="content">
    <a-list :grid="{gutter: 24, lg: 3, md: 2, sm: 1, xs: 1}" :dataSource="dataSource">
      <a-list-item slot="renderItem" slot-scope="item">
        <template v-if="item === null">
          <a-button class="new-btn" type="dashed" @click="showModal()">
            <a-icon type="plus" /> 新增组织架构
          </a-button>
          <a-modal v-model="visible" @ok="hideModal" cancelText="取消" okText="提交">
            <a-row>
              <a-col :span="5" style="padding: 40px 0px 10px 30px">
                <p>权限所属:</p>
              </a-col>
              <a-col :span="19" style="padding: 40px 30px 10px 0px">
                <a-select labelInValue placeholder="请选择" :defaultValue="请选择" style="width: 100%;" @change="handleChange">
                  <a-select-option value="jack">XXX平台</a-select-option>
                  <a-select-option value="lucy">XXX公司</a-select-option>
                </a-select>
              </a-col>
            </a-row>
            <a-row>
              <a-col :span="5" style="padding: 20px 0px 20px 30px">
                <p style="float: right;padding-right: 10px;padding-top: 3px">新建:</p>
              </a-col>
              <a-col :span="19" style="padding: 20px 30px 20px 0px">
                <a-input placeholder="请输入">
                  <a-select slot="addonBefore" defaultValue="请选择" style="width: 90px">
                    <a-select-option value="公司">公司</a-select-option>
                    <a-select-option value="平台">平台</a-select-option>
                  </a-select>
                </a-input>
              </a-col>
              <a-col :span="24" style="padding: 10px 30px">
                <a-textarea placeholder="备注:" :rows="4" />
              </a-col>
            </a-row>
          </a-modal>
        </template>
        <template v-else>
          <a-card :hoverable="true">
            <a-card-meta>
              <div style="margin-bottom: 3px" slot="title">{{ item.title }}</div>
              <a-avatar class="card-avatar" slot="avatar" :src="item.avatar" size="large" />
              <div class="meta-content" slot="description">{{ item.content }}</div>
            </a-card-meta>
            <template class="ant-card-actions" slot="actions">
              <a>操作一</a>
              <a>操作二</a>
            </template>
          </a-card>
        </template>
      </a-list-item>
    </a-list>
  </div>
</template>

<script>
  const dataSource = []
  dataSource.push(null)
  for(let i = 0; i < 11; i++) {
    dataSource.push({
      title: 'Alipay',
      avatar: 'https://gw.alipayobjects.com/zos/rmsportal/WdGqmHpayyMjiEhcKoVE.png',
      content: '在中台产品的研发过程中，会出现不同的设计规范和实现方式，但其中往往存在很多类似的页面和组件，这些类似的组件会被抽离成一套标准规范。'
    })
  }

  export default {
    name: 'CardList',
    data() {
      return {
        options: [{

        }, {
          value: '项目',
          label: '项目',
          disabled: true,
          children: [{
            value: '项目二',
            label: '项目二',
            children: [{
              value: 'zhonghuamen',
              label: 'zhonghuamen',
            }],
          }],
        }],
        visible: false,
        description: '段落示意：蚂蚁金服务设计平台 ant.design，用最小的工作量，无缝接入蚂蚁金服生态， 提供跨越设计与开发的体验解决方案。',
        linkList: [{
          icon: 'rocket',
          href: '#',
          title: '快速开始'
        },
          {
            icon: 'info-circle-o',
            href: '#',
            title: '产品简介'
          },
          {
            icon: 'file-text',
            href: '#',
            title: '产品文档'
          }
        ],
        extraImage: 'https://gw.alipayobjects.com/zos/rmsportal/RzwpdLnhmvDJToTdfDPe.png',
        dataSource
      }
    },
    methods: {
      showModal() {
        this.visible = true
      },

    }
  }
</script>

<style lang="less" scoped>
  .card-avatar {
    width: 48px;
    height: 48px;
    border-radius: 48px;
  }

  .ant-card-actions {
    background: #f7f9fa;
    li {
      float: left;
      text-align: center;
      margin: 12px 0;
      color: rgba(0, 0, 0, 0.45);
      width: 50%;
      &:not(:last-child) {
        border-right: 1px solid #e8e8e8;
      }
      a {
        color: rgba(0, 0, 0, .45);
        line-height: 22px;
        display: inline-block;
        width: 100%;
        &:hover {
          color: #1890ff;
        }
      }
    }
  }

  .new-btn {
    background-color: #fff;
    border-radius: 2px;
    width: 100%;
    height: 188px;
  }

  .meta-content {
    position: relative;
    overflow: hidden;
    text-overflow: ellipsis;
    display: -webkit-box;
    height: 64px;
    -webkit-line-clamp: 3;
    -webkit-box-orient: vertical;
  }

  .components-input-demo-size .ant-input {
    width: 200px;
    margin: 20px 8px 8px 0;
  }
</style>