<template>
  <div class="left">
    <div class="clearfix cheta-height-full">
      <div class="car_total clearfix" v-for="item in dataList">
        <div class="list_left">
        <span v-if="item.carPhoto">
          <img :src="item.carPhoto" style="margin-top: 2px">
        </span>
          <span v-else>
          <div><img @click="infoShow(item)" src="/image/map/car.png" style="margin-top: 2px" ></div>
        </span>
          <div class="font_img"><p class="detail cheta-event" @click="detail(item.id)">查看详情信息>></p></div>
        </div>
        <ul class="list_right">
          <li><span>车牌号：</span><em>{{item.registrationNo}}</em></li>
          <li><span>自编号：</span><em>{{item.sinceNumber}}</em></li>
          <li><span>车辆类型：</span><em>{{item.carType}}</em></li>
          <li><span>所属  ：</span><em><ellipsis :length ="18" tooltip class="cheta-event"> {{item.organ}}</ellipsis></em></li>
          <li><span>状态  ：</span>
            <em v-if="flow" :style="`color:${flow[item.statusRun].color}`">
              {{flow[item.statusRun] ? flow[item.statusRun].desc : ''}}
            </em>
          </li>
          <li><span>入网时间：</span><em>{{item.workorder}}</em></li>
<!--          <li></li>-->
        </ul>
      </div>
    </div>
  </div>
</template>
<script>
  import { getAction } from '@/api/manage'
  import Ellipsis from '@/components/Ellipsis'
  import constant from '@views/application/car/api/constant'
  export default {
    name: 'List',
    props:{
      dataList:{
        type:Array
      }
    },
    components: {Ellipsis},
    data(){
      return{
        flow: {}
      }
    },
    created(){
      this.flow = constant
      console.log(this.dataList)
    },
    methods:{
      infoShow(car){
        this.$emit('messageShow', car)
      },
      detail(id){
        this.$router.push({path:`/cheliangxiangqing/${id}`})
      }
    }
  }
</script>

<style lang="scss" scoped>
  /*tab切换 list样式*/
  .list_left{
    float: left;
    width: 150px;
    cursor: pointer;
  }
  .list_right{
    float: left;
    padding-left: 20px;
    margin: 0;
  }
  .list_right li{
    list-style: none;
    font-size:14px;
    /*font-weight:bold;*/
    color:#666666;
    line-height:28px;
  }

  .list_right li span{
    color: #999;
  }
  .list_right li em{
    font-style: normal;
    /*color:#666666;*/
  }

  .list_right li em  span{
    font-style: normal;
    color:#666666;
  }
  /*.list_right li .status{*/
  /*  color:#1CC09F;*/
  /*}*/


  .status{
    color: #1CC09F;
  }
  .car_total{
    height: 188px;
    /*border-top:0.3px solid red;*/
    border-bottom:1px solid #d9d9d9;
    position: relative;
  }
  .car_total:last-child{
    border-bottom:0;
  }
  .font_img{
    width: 150px;
    height: 27px;
    background: #1CC09F;
    opacity: 0.6;
    font-size:13px;
    font-weight:400;
    color:rgba(255,255,255,1);
    line-height:27px;
    text-align: center;
    z-index: 9999;
    position:absolute;
    bottom:5px;

  }
  .left{
  height: calc(100% - 4px)!important;
  }
  /*@media screen和（max-width：300px） {*/
    /*body {*/
      /*background-color：lightblue;*/
    /*}*/
  /*}*/
</style>