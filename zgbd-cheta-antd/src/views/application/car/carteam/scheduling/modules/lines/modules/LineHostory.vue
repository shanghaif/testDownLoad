<template>
    <div>
      <a-list itemLayout="horizontal" :dataSource="data">
        <a-list-item slot="renderItem" class="hostiry" slot-scope="item, index">
          <a-list-item-meta
            :description="'线路里程:'+(item.distance  / 1000)+'km   线路历时' + secondsToHour(item.time)"
          >
            <span slot="title" class="hostiry-title">
              <a-icon type="clock-circle" class="cheta-mr-5"/>
              <span class="cheta-mr-5">{{subQu(item.startSite)}}</span> -
              <span class="cheta-ml-5">{{subQu(item.endSite)}}</span>
            </span>
          </a-list-item-meta>
        </a-list-item>
      </a-list>
    </div>
</template>

<script>
  import Span from '../../../../../../onlines/car/component/list/modules/modules/Span'
  import {getAddress,secondsToHour} from '@/views/application/car/api/util.js'
  import { getAction } from '@/api/manage';
  export default {
    name: 'LineHostory',
    components: { Span },
    data() {
      return {
        secondsToHour,
        geocoder: new AMap.Geocoder({}),
        data : [
        ]
      };
    },
    created () {
      this.init();
    },
    methods: { //定义函数
      subQu(str){
        try {
          return str.substring(0,str.indexOf('区')+1)
        }catch (e) {
          return str
        }
      },
      init() {
        var url = "/application/car/line/page"; //定义引入地址
        var that = this; //改变this指向
        getAction(url,{pageSize:10000,pageNo:1}).then((res)=>{
          if(res.data.length > 0){
            that.data = res.data;
          }
        });
      }
    }
  }
</script>

<style scoped>
  .hostiry{
    margin: 0px 10px 0px 10px;
  }
  .hostiry-title{
    font-weight: bold;
  }
</style>