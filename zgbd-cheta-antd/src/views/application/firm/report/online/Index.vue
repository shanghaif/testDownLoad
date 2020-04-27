<template>
  <a-card class="cheta-report-shadow" :bordered="false">
    <div slot="title">
      排序:
      <a-select defaultValue="默认" style="width: 120px">
        <a-select-option v-for="item in sortList" :value="item.key">{{ item.name }}</a-select-option>
      </a-select>
    </div>
    <div slot="extra">
      <a-button type="primary" icon="plus" @click="doTpl">新建报表</a-button>
    </div>
    <a-list :data-source="reportData" :grid="{ gutter: 24, xl: 4, lg: 3, md: 3, sm: 2, xs: 1 }">
      <a-list-item slot="renderItem" slot-scope="item">
        <a-card class="ant-pro-pages-list-projects-card" hoverable @click="doExcel(item)">
          <img slot="cover" :src="item.coverImage" style="height: 200px" alt="测试" />
          <a-card-meta :title="item.name">
          </a-card-meta>
        </a-card>
      </a-list-item>
    </a-list>
    <Tpl ref="tpl" @doExcel="doExcel"/>
  </a-card>

</template>

<script>
  import Tpl from './Tpl'
  import { reportOnlineData } from '../api/api'

  export default {
    name: 'Spread',
    components: {Tpl},
    data () {
      return {
        sortList: [{ name: '默认', key: 1 }, { name: '按字母', key: 2 }, { name: '按数字', key: 3 }],
        reportData: []
      }
    },
    created () {
      this.getData();
    },
    methods: {
      getData () {
        var $this = this;
        reportOnlineData().then(res => {
          $this.reportData = res.result;
        })
      },
      doTpl () {
        this.$refs.tpl.showModel();
      },
      doExcel (param) {
        this.$router.push({
          name: '在线报表',
          params: param
        })
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
  .ant-pro-components-tag-select {
    /deep/ .ant-pro-tag-select .ant-tag {
      margin-right: 24px;
      padding: 0 8px;
      font-size: 14px;
    }
  }

</style>