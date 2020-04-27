<template>
  <div>
    <div class="cheta-space10">
      <span>状态：</span>
      <a-select defaultValue="全部" style="width: 120px">
        <a-select-option v-for="(item,index) in stateList" :key="index" :value="item.id">{{item.text}}</a-select-option>
      </a-select>
      <div class="cheta-block">
        <a-input-search style="width: 535px;" placeholder="输入关键字" @search="onSearch" enterButton />
      </div>
      <div class="cheta-block">
        <a-button class=""><em class="cheta-font18">+ </em>新增</a-button>
      </div>
      <a-dropdown>
        <a-menu slot="overlay" @click="handleMenuClick">
          <a-menu-item key="1">批量导入</a-menu-item>
          <a-menu-item key="2">批量导出</a-menu-item>
          <a-menu-item key="3">车辆转移</a-menu-item>
        </a-menu>
        <div class="cheta-block">
          <a-button>
            ···
          </a-button>
        </div>
      </a-dropdown>
      <div class="cheta-block cheta-float cheta-space10">
        <i>展示方式： </i>
        <span @click="showChange($event,'card')" :class="{cheta_color : type == 'card'}"><i class="iconfont icon-yinhangka"></i><em> 卡片</em></span>
        <span @click="showChange($event,'state')" :class="{cheta_color : type == 'state'}"><i class="iconfont icon-zhuangtai"></i><em> 状态</em></span>
        <span @click="showChange($event,'table')" :class="{cheta_color : type == 'table'}"><i class="iconfont icon-liebiao"></i><em> 列表</em></span>
      </div>
    </div>
    <CardList ref="list"></CardList>
    <TableList></TableList>
    <Info></Info>
  </div>
</template>

<script>
  import {getAction} from '@/api/manage'
  import CardList from './CardList'
  import TableList from './TableList'
  import Info from './Info'
  export default {
    name: "Index",
    components: { TableList, CardList,Info },
    data () {
      return {
        stateList:[{id:1,text:"太空车"},{id:2,text:"摩托车"}],
        url: {
          list: "/application/car/account/getData",
          detail: "/application/car/account/detail"
        },
      }
    },
    methods:{
      handleMenuClick(){},
      getData(){
        // this.spinning = true;
        if(this.listUrl){
          getAction(this.listUrl,this.param).then((res)=>{
            this.listData = res.result.data;
            this.pagination.total = res.result.count;
            this.spinning = false;
          })
        }
        else{
          this.spinning = false;
        }
      },
    }
  }
</script>

<style lang="less" scoped>
  .cheta-block{display: inline-block;}
  .cheta-ml-10{margin-left: 10px;}
  .cheta-mr-10{margin-right: 10px;}
  .cheta-mlr-10{margin-left: 10px;margin-right: 10px;}
  .cheta-font18{font-size: 18px;}
  .cheta-float{float: right;}
  .cheta-space10 > * {padding: 0px 5px;}
</style>