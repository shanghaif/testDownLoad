<template>
  <div>
    <div class="right_area" v-if="markList.length >0" :style="{width: '400px',height: 'calc(100% - 10px)',right: '0',zIndex: 1,backgroundColor:'#FFFFFF',overflowY: 'scroll'}">
      <div style="padding: 25px;">
        <div class="right-box">
          <div class="today">
            <a-select defaultValue="广州" style="width: 80px;" @change="selectCity">
              <a-select-option v-for="(item,index) in cityList" :key="index" :value="item.team">{{item.team}}</a-select-option>
            </a-select>
            <div class="weather_today">
              <dl>
                <dt class="cheta-color">{{weatherList[0].tem.substr(0,2)}}°</dt>
                <dd class="cheta-color">
                  <p>{{weatherList[0].wea}}</p>
                  <p><span>{{weatherList[0].tem2.substr(0,2)}}/{{weatherList[0].tem1.substr(0,2)}}</span><em>℃</em></p>
                  <p><span>{{weatherList[0].date}}</span><i>{{weatherList[0].week}}</i></p>
                </dd>
              </dl>
            </div>
          </div>
        </div>
        <div style="margin-bottom: 15px;">
          <!--<div class="main_message">
            <span>运行</span>
            <span>11</span>
          </div>
          <div class="main_message">
            <span>停止</span>
            <span>22</span>
          </div>
          <div class="main_message">
            <span>离线</span>
            <span>11</span>
          </div>-->
          <Pie></Pie>
        </div>
        <div>
          <div v-for="item in markList">
            <div @click="getCar(item)">
              <a-badge status="processing" :text="item.name + `(${ item.count })`"/>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>

</template>

<script>

  import Pie from './Pie'

  const axios = require('axios');

  export default {
    components: { Pie },
    name: 'Detail',
    props:{
      markList:{
        type:Array
      }
    },
    data () {
      return {
        weatherList: []
      }
    },
    created(){
      //获取天气信息
      axios.get('https://www.tianqiapi.com/api/?version=v1&appid=42467371&appsecret=xthCy5qC').then((res)=>{
        this.weatherList = res.data.data;
      })
    },
    methods:{
      getCar(item){
        var $this=this
        $this.$emit('carShow', item)
      }
    }
  }

</script>

<style lang="scss" scoped>
  .main_message span{
    width: 50%;
    text-align: center;
    display: inline-block;
    line-height: 47px;
    border:1px solid #E8E8E8

  }
  .main_message span i{
    margin-right: 5px
  }
</style>
<style lang="less">
  .right-box{
    margin-bottom: 15px;
    .weather_today{
      /*border-bottom: 1px solid #E8E8E8;*/
      dl{
        display: flex;
        display: -webkit-flex;
        height: 120px;
        dt{
          font-size: 75px;
          width: 150px;
          line-height: 120px;
          text-align: center;
        }
        dd{
          flex: 1;
          padding-top: 10px;
          p{
            font-size: 18px;
            line-height: 30px;
            em{
              margin-left: 5px;
            }
            i{
              margin-left: 16px;
            }
          }
        }
      }
    }

  }
</style>