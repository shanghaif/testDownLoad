<template>
  <a-card class="cheta-report-shadow cheta-report-digit" style="min-height:391px;" :bordered="false">
    <div slot="title">
      排序:
      <a-select defaultValue="默认"  style="width: 120px">
        <a-select-option  value="默认">默认</a-select-option>
        <a-select-option  value="按时间">按时间</a-select-option>
      </a-select>
    </div>
    <div slot="extra">
      <a-button type="primary" icon="plus" @click="addReport">新建报表</a-button>
    </div>
    <div v-if="reportData.length>0">
      <a-card :bordered="false" class="cheta-report-card cheta-m-10" hoverable v-for="item in reportData" bodyStyle="border: 1px solid #e6e6e6;borderTopWidth: 0px;" @click.native="getDetail(item)">
        <div class="cheta-report-bgimg cheta-positionr" alt="example" slot="cover">
          <div  v-if="item.coverImage" :style="`background-image: url(${item.coverImage})`" class="cheta-report-cardImg">
            <p class="cheta-report-font">{{ item.name}}</p>
          </div>
        </div>
        <a-card-meta class="" style="text-align: left">
          <span slot="title">{{ item.name}}</span> <span slot="title" class="cheta-report-time">{{item.createTime}}</span>
          <p slot="description" class="cheta-card-meta-desc">
            <span  v-if="item.description">备注：<ellipsis :length="20" tooltip>{{ item.description }}</ellipsis></span>
            <span v-else>暂无备注</span>
          </p>
        </a-card-meta>
      </a-card>
    </div>
    <a-empty v-else-if="reportData.length == 0"/>
  </a-card>

</template>

<script>
  import {reportSystemData} from '../api/api'
  import Ellipsis from '@/components/Ellipsis'
  export default {
    name: 'spread',
    data () {
      return {

        reportData: [],
        param:null

      }
    },
    components: {
      Ellipsis,
    },
    created () {
      this.getData()
    }
    ,
    methods:{
      getData (item) {
        var param = {}
        if(item) {
          param.menuId = item.id
        }
        var $this = this
        reportSystemData(param).then(res => {
          $this.reportData = res.result
        })

      },
      addReport () {
        this.$emit('addReport')
      },
      getDetail (item) {
        this.$emit('getDetail',item)
      }
    }
  }

</script>
<style lang="less">
  .cheta-report-digit .ant-empty{
    padding: 133px 0px!important;
    height: 391px!important;
  }

</style>

<style lang="less" scoped>
  .cheta-report-shadow {
    -webkit-box-shadow:0px 0px 5px 0px rgba(204,204,204,0.5);
    box-shadow:0px 0px 5px 0px rgba(204,204,204,0.5);
    border-radius:3px;
  }
  .cheta-report-card{
    width: 367px;
    display: inline-block;
  }

  .cheta-report-bgimg{
    width:367px;
    height: 280px;
    background-image: url('/image/firm/report/bg.png');
    background-repeat: no-repeat;
  }
  .cheta-report-cardImg{
    position: absolute;
    top: 63px;
    left: 56px;
    width: 253px;
    height: 143px;
    background-repeat: no-repeat;
  }
  .cheta-report-font{
    font-size:18px;
    font-family:Microsoft YaHei;
    font-weight:bold;
    text-align: center;
    color:#919191;
    line-height: 128px;
    font-weight: bold
  }
  .cheta-second-img{padding: 61px 65px 72px 55px;width: 376px;height: 278px;}
  .cheta-report-time{
    float: right;
    font-size: 14px;
    font-family:Microsoft YaHei;
    font-weight:400;
    color:rgba(204,204,204,1);

  }
  .cheta-card-meta-desc{font-size: 12px;}
  .ant-pro-components-tag-select {
    /deep/ .ant-pro-tag-select .ant-tag {
      margin-right: 24px;
      padding: 0 8px;
      font-size: 14px;
    }
  }



</style>