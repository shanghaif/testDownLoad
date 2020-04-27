<template>
  <div class="carteam_info">
    <div class="crumbs clearfix">
      <label style="padding-left: 20px;">选择机构：</label>
      <a-tree-select
        style="width: 200px"
        :treeData="treeData"
        placeholder="请选择父级名称"
        @change="onChangeTree"
        >
      </a-tree-select>
      <ul class="clearfix">
        <li>
          <i class="iconfont icon-shuju-tongyong- cheta-color"></i>
          <span class="cheta-color">统计</span>
        </li>
        <li>
          <i class="iconfont icon-tiaodu-tongyong- cheta-color"></i>
          <span class="cheta-color">调度</span>
        </li>
        <li class="cheta-event" @click="doScheduling()">
          <i class="iconfont icon-paiban-tongyong- cheta-color"></i>
          <span class="cheta-color">排班</span>
        </li>
      </ul>
      <a href="javascript:;">
        <i class="iconfont icon-shezhi-tongyong- cheta-color"></i>
      </a>
    </div>
    <div class="content">
      <div class="section">
        <a-row>
          <a-col class="broad1" :xs="{ span: 24}" :md="{ span: 16}" :lg="{ span: 12}" :xl="{ span: 9}">
            <div class="gutter-box">
              <div v-if="sum>0">
                <h2>入网车辆</h2>
                <dl>
                  <dt>车辆总数</dt>
                  <dd>{{sum}}</dd>
                </dl>
                <v-chart style="margin-top: 30px; margin-left: 10%"  :forceFit="true" :height="height" :data="data" :scale="scale">
                  <v-tooltip :showTitle="false" dataKey="carType*percent" />
                  <!--                <v-axis/>-->
                  <!--<v-legend dataKey="carType" position="left" :offsetX="160"/>-->
                  <v-pie position="percent" color="carType" :vStyle="pieStyle" :label="labelConfig"/>
                  <v-coord type="theta" :radius="1.0" :innerRadius="0.6"/>
                </v-chart>
              </div>
              <div v-else-if="sum == 0" class="cheta-pt-80">
                <a-empty />
              </div>

            </div>
          </a-col>
          <a-col class="narrow1" :xs="{ span: 8}" :md="{ span: 8}" :lg="{ span: 6}" :xl="{ span: 5}">
            <div class="gutter-box">
              <p class="clearfix"><img src="../../../../assets/image/carteam/supervise.png" alt="" /><span>监察中车辆</span></p>
              <div class="num">
                <span>{{statusCount.监察中车辆}}</span>
                <img src="../../../../assets/image/carteam/blue.png" alt="" />
              </div>
            </div>
          </a-col>
          <a-col class="narrow1" :xs="{ span: 8}" :md="{ span: 8}" :lg="{ span: 6}" :xl="{ span: 5}">
            <div class="gutter-box">
              <p class="clearfix"><img src="../../../../assets/image/carteam/idle.png" alt="" /><span>闲置车辆</span></p>
              <div class="num">
                <span>{{statusCount.闲置车辆}}</span>
                <img src="../../../../assets/image/carteam/green.png" alt="" />
              </div>
            </div>
          </a-col>
          <a-col class="narrow1" :xs="{ span: 8}" :md="{ span: 8}" :lg="{ span: 6}" :xl="{ span: 5}">
            <div class="gutter-box">
              <p class="clearfix"><img src="../../../../assets/image/carteam/operation.png" alt="" /><span>车辆运行率</span></p>
              <div class="num">
                <span v-if="statusCount.行驶中">{{(statusCount.行驶中 / statusCount.监察中车辆 * 100).toFixed(2)}}%</span>
                <span v-else>0 %</span>
                <img src="../../../../assets/image/carteam/yellow.png" alt="" />
              </div>
            </div>
          </a-col>
          <a-col class="narrow1" :xs="{ span: 8}" :md="{ span: 8}" :lg="{ span: 6}" :xl="{ span: 5}">
            <div class="gutter-box">
              <p class="clearfix"><img src="../../../../assets/image/carteam/travel.png" alt="" /><span>行驶中</span></p>
              <div class="num">
                <span>{{statusCount.行驶中}}</span>
                <img src="../../../../assets/image/carteam/purple.png" alt="" />
              </div>
            </div>
          </a-col>
          <a-col class="narrow1" :xs="{ span: 8}" :md="{ span: 8}" :lg="{ span: 6}" :xl="{ span: 5}">
            <div class="gutter-box">
              <p class="clearfix"><img src="../../../../assets/image/carteam/sleeping.png" alt="" /><span>已休眠</span></p>
              <div class="num">
                <span>{{statusCount.已休眠}}</span>
                <img src="../../../../assets/image/carteam/magenta.png" alt="" />
              </div>
            </div>
          </a-col>
          <a-col class="narrow1" :xs="{ span: 8}" :md="{ span: 8}" :lg="{ span: 6}" :xl="{ span: 5}">
            <div class="gutter-box">
              <p class="clearfix"><img src="../../../../assets/image/carteam/stop.png" alt="" /><span>停止中</span></p>
              <div class="num">
                <span>{{statusCount.停止中}}</span>
                <img src="../../../../assets/image/carteam/red.png" alt="" />
              </div>
            </div>
          </a-col>
        </a-row>
      </div>
      <div class="section">
        <a-row>
          <a-col class="broad2" :xs="{ span: 24}" :xl="{ span: 24}" :xxl="{ span: 16}">
            <div class="gutter-box">
              <div class="top clearfix">
                <span class="taskTitle">任务列表</span>
                <a-input-search
                  placeholder="请输入"
                  style="width: 200px"
                  @search="onSearch"
                />
                <a-button-group>
                  <a-button>全部</a-button>
                  <a-button>进行中</a-button>
                  <a-button>等待中</a-button>
                </a-button-group>
              </div>
              <a-list
                itemLayout="vertical"
                size="small"
                :pagination="pagination"
                :dataSource="listData"
              >
                <li slot="renderItem" slot-scope="item,index" key="item.title">
                  <div class="item clearfix">
                                  <span class="img">
                                      <img src="../../../../assets/image/carteam/line.png" alt="" />
                                  </span>
                    <span class="area">
                                      <em>{{item.area}}</em>
                                      <i>{{item.areaWork}}</i>
                                  </span>
                    <span class="principal">
                                      <em>负责人</em>
                                      <i>{{item.principal}}</i>
                                  </span>
                    <span class="startTime">
                                      <em>开始时间</em>
                                      <i>{{item.startTime}}</i>
                                  </span>
                    <span class="progress">
                                      <a-progress style="margin-top: 9px;" :percent="item.progress" :showInfo="false"/>
                                  </span>
                    <span class="percent">
                                      <em v-if="Number(item.progress)">{{item.progress}}%</em>
                                      <img v-else src="../../../../assets/image/carteam/time.png" alt="" />
                                  </span>
                    <span class="handle_detail" @click="handleDetail(item,index)" :class="{cheta_color:selectedIndex == index}">
                                      <em :class="{cheta_color:selectedIndex == index}">详情</em>
                                      <i class="iconfont icon-jiantou" :class="{cheta_color:selectedIndex == index}"></i>
                                  </span>
                  </div>
                  <div class="task_detail" v-if="selectedIndex == index">
                    <div class="info">
                      <div class="left">
                        <p class="clearfix"><span>安排车辆：</span><em>{{item.detail.num}}辆</em><span>时段：</span><em>{{item.detail.period}}点</em></p>
                        <p class="clearfix"><span>类型：</span><i :style="'background: ' + randomColor()" v-for="(v,k) in item.detail.type" :key="k">{{v}}</i></p>
                      </div>
                      <div class="right">
                        <label>描述：</label><textarea disabled="disabled">{{item.detail.description}}</textarea>
                      </div>
                    </div>
                    <div class="map">
                      <div class="road">
                        <span class="origin">起点</span>
                        <span class="destination">终点</span>
                        <div class="img"></div>
                        <em>
                          <span class="start"><img src="../../../../assets/image/carteam/location_gray.png" alt="" /><i>{{item.detail.DNS}}辆未出发</i><b></b></span>
                        </em>
                        <i @mousedown.prevent="move($event,v.ratio)" v-for="(v,k) in item.detail.departCars" :key="k" :id="'car' + k" :style="'left: calc(' + v.ratio*91 + '% + 13px)'">
                                              <span class="location">
                                                  <img src="../../../../assets/image/carteam/location.png" alt="" />
                                                  <i>进入{{v.location}}</i><b></b>
                                              </span>
                          <span class="time">
                                                  <i>{{v.time}}</i><b></b>
                                              </span>
                        </i>
                      </div>

                    </div>
                  </div>
                </li>
              </a-list>
            </div>
          </a-col>
          <a-col class="narrow2" :xs="{ span: 24}" :xl="{ span: 12}" :xxl="{ span: 8}">
            <div class="gutter-box">
              <div class="today">
                <a-select defaultValue="广州" style="width: 80px" @change="selectCity">
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
              <ul class="fiveDays">
                <li v-for="(item,index) in weatherList" :key="index">
                  <p class="day">{{item.day.substr(-3,2)}}</p>
                  <p class="wea">{{item.wea}}</p>
                  <p class="tem"><span>{{item.tem2.substr(0,2)}}/{{item.tem1.substr(0,2)}}</span><em> ℃</em></p>
                </li>
              </ul>
            </div>
          </a-col>
          <a-col class="narrow3" :xs="{ span: 24}" :xl="{ span: 12}" :xxl="{ span: 8}">
            <div class="gutter-box">
              <h3>提醒</h3>
              <ul v-if="commissionList.length>0">
                <li class="clearfix" v-for="(item,index) in commissionList" :key="index">
                  <img v-if="item.state == '逾期类'" src="../../../../assets/image/carteam/orange_ball.png"/>
                  <img v-else-if="item.state == '审核类'" src="../../../../assets/image/carteam/red_ball.png"/>
                  <img v-else src="../../../../assets/image/carteam/blue_ball.png"/>
                  <span>{{item.commission}}</span>
                </li>
              </ul>
              <div v-else class="cheta-pt-18">
                <a-empty />
              </div>
            </div>
          </a-col>
        </a-row>
      </div>
    </div>
  </div>
</template>
<script>
  const axios = require('axios');
  import { getAction } from '@/api/manage';
  var DataSet = require('@antv/data-set');
  var listData = [];
  for (let i = 0; i < 23; i++) {
    listData.push({
      icon: '../../../../assets/image/carteam/line.png',
      area: '线路',
      areaWork: 'A-B线路区扫',
      principal: '吴先生',
      startTime: '2019-07-03 18:00',
      progress: 68,
      detail:{
        num: '12',
        period: '10-12',
        description: '阿斯顿卡拉斯科大数定爱是发生发大水防守打法阿斯顿卡拉斯科大数定律爱是发生发大水防守打法阿斯顿卡拉斯科大数定律爱是发生发大水防守打法阿斯顿卡拉斯科大数定律爱是发生发大水防守打法',
        type: ['洒水车','垃圾车','扫地车'],
        DNS: '10',
        departCars:[
          {
            ratio: 0.3,
            location: '高速路xxxx',
            time: '13:51:20'
          },
          {
            ratio: 0.5,
            location: '高速路xxx',
            time: '13:53:20'
          }
        ]
      }
    },{
      icon: '../../../../assets/image/carteam/line.png',
      area: '水域',
      areaWork: 'A-B线路区扫',
      principal: '吴先生',
      startTime: '2019-07-03 18:00',
      progress: 75,
      detail:{
        num: '13',
        period: '10-12',
        description: '阿斯顿卡拉斯科大数定律爱是发生发大水防守打法',
        type: ['洒水车','垃圾车','扫地车'],
        DNS: '11',
        departCars:[
          {
            ratio: 0.3,
            location: '高速路xxxx',
            time: '13:51:20'
          },
          {
            ratio: 0.5,
            location: '高速路xxx',
            time: '13:53:20'
          }
        ]
      }
    },{
      icon: '../../../../assets/image/carteam/line.png',
      area: '小区',
      areaWork: 'A-B线路区扫',
      principal: '曾先生',
      startTime: '2019-07-03 18:00',
      progress: 0,
      detail:{
        num: '15',
        period: '10-12',
        description: '阿斯顿卡拉斯科大数定律爱是发生发大水防守打法',
        type: ['洒水车','垃圾车','扫地车'],
        DNS: '13',
        departCars:[
          {
            ratio: 0.3,
            location: '高速路xxxx',
            time: '13:51:20'
          },
          {
            ratio: 0.5,
            location: '高速路xxx',
            time: '13:53:20'
          }
        ]
      }
    })
  }

  import { Icon } from 'ant-design-vue'
  import { getOrganTree } from '@/api/api.js'
  const MyIcon = Icon.createFromIconfontCN({
    scriptUrl: '//at.alicdn.com/t/font_1300067_w5y6iifmlpg.js', // 在 iconfont.cn 上生成
  });

  export default {
    name: "Page",
    template: '<my-icon type="icon-example" />',
    components: {
      'my-icon': MyIcon,
    },
    data() {
      return {
        sum: 0,
        carNum: 0,
        selectedIndex: 0,
        listData,
        weatherList: [],
        commissionList: [],
        pagination: {
          onChange: (page) => {
            console.log(page);
          },
          pageSize: 3,
        },

        cityList: [{
          id: 1,
          team: '广州'
        },
          {
            id: 2,
            team: '深圳'
          },
          {
            id: 3,
            team: '上海'
          },
          {
            id: 4,
            team: '北京'
          },
          {
            id: 5,
            team: '杭州'
          },
        ],
        data:"",
        scale:"",
        height: 330,
        pieStyle: {
          stroke: "#fff",
          lineWidth: 1
        },
        labelConfig: ['percent', {
          formatter: (val, carType) => {
            return carType.point.carType + ': ' + val;
          }
        }],
        supervise: 4000,
        idle: 40,
        operation: '95%',
        travel: 3800,
        sleeping: 100,
        stop: 100,
        statusCount: {},
        sourceData: [],
        treeData:[]

      }
    },
    created() {
     this.organMessage(),
      //获取天气信息
      axios.get('https://www.tianqiapi.com/api/?version=v1&appid=42467371&appsecret=xthCy5qC').then((res)=>{
        this.weatherList = res.data.data;
        console.log(this.weatherList)
      })
      //获取机构信息
        var $this = this
        getOrganTree().then(res => {
          $this.treeData = res.result;
        })
    },

    methods: {
      doScheduling () {
        this.$router.push({path:'/cheduipaiban'})//车队排班首页面
        // this.$router.push({path:'/cheduiList'})
      },
      organMessage (value) {
        //获取车辆类型列表
        var param = {}
        if (value) {
          param = {
            organId: value
          }
        }
        var $this = this
        getAction('/application/teaminfo/getCartypeNum',param)
          .then((res)=>{
            console.log(res.result);
            $this.sum = 0
            $this.sourceData = res.result;
            $this.sourceData.forEach((item)=>{
              $this.sum += item.cartypeNum;
            })
            $this.scale = [{
              dataKey: 'percent',
              min: 0,
              formatter: '.3%',
            }];
            var dv = new DataSet.View().source(this.sourceData);
            dv.transform({
              type: 'percent',
              field: 'cartypeNum',
              dimension: 'carType',
              as: 'percent'
            });
            $this.data = dv.rows;
          })
        //获取车辆状态信息
        getAction('/application/car/vehiclenetwork/getvehiclestatuscount',param).then((res)=>{
          $this.statusCount = res.result;
          })
        //获取提醒信息
        getAction('/application/teaminfo/getCommission',param).then((res)=>{
          $this.commissionList = res.result;
        })
      },
      handleChange(){

      },
      onChangeTree (value) {
        this.organMessage(value)
      },
      selectCity(){

      },
      handleDetail(item,index){
        this.carNum = item.detail.departCars.length;
        console.log(this.carNum);
        if(this.selectedIndex == index){
          this.selectedIndex = 3333;
        }
        else{
          this.selectedIndex = index;
        }
      },
      onSearch(){

      },
      randomColor(){
        let r = Math.floor((Math.random()*0.4+0.6)*256)
        let g = Math.floor((Math.random()*0.4+0.6)*256)
        let b = Math.floor((Math.random()*0.4+0.3)*256)
        return "rgb("+r+','+g+','+b+")"
      },
      move(e,ratio){
        let odiv = e.target;        //获取目标元素
        let percent = ratio*0.91 ;
        let road = document.querySelector('.road').offsetWidth;
        console.log(road);
        console.log(percent);
        console.log(odiv);
        console.log(odiv.style.left);
        let max = road*percent;
        console.log(max)
        //算出鼠标相对元素的位置
        let disX = e.clientX - odiv.offsetLeft;
        document.onmousemove = (e)=>{       //鼠标按下并移动的事件
          //用鼠标的位置减去鼠标相对元素的位置，得到元素的位置
          let left = e.clientX - disX;
          if((left - 13) >= 0 && (left - 13) <= max){
            odiv.style.left = left + "px";
          }
        }
        document.onmouseup = ()=>{
          document.onmousemove = null;
          document.onmouseup = null;
        };
      }
    }
  }
</script>
<style lang="less" scoped>
  @import url("./base.less");
</style>