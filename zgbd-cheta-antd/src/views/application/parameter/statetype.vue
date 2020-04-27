<template>
  <div class="statetype">
    <a-spin :spinning="spinning">
      <a-row>
        <a-list
          itemLayout="vertical"
          size="large"
          :pagination="pagination"
          :dataSource="listData"
        >
          <a-col :xl="24" :xxl="12" slot="renderItem" slot-scope="item,index" key="item.title">
            <div class="gutter-box" @mousemove="moveBadge">
              <div class="handle-box clearfix">
                                <span class="handle-box-qrcode"><!--二维码-->
                                  <img :src="item.qrImage || '/image/car/welcomeCheta.png'" alt="" class="handle-box-welcomeCheta">
                                </span>
                <div class="edit">
                  <a-dropdown>
                    <a-menu slot="overlay" @click="handleMenuClick">
                      <a-menu-item key="1" @click="enterDetail(item)">详情</a-menu-item>
                      <a-menu-item key="2" @click="editInfo(item.id)">编辑</a-menu-item>
                      <a-menu-item key="3" >视频</a-menu-item>
                      <a-menu-item key="4" >轨迹</a-menu-item>
                    </a-menu>
                    <a-button style="margin-left: 8px">
                      ···
                    </a-button>
                  </a-dropdown>
                </div>
              </div>
              <div class="road">
                <div class="badge">
                                  <span class="location">
                                                                                                进入高速路xxxx<b></b><em></em>
                                  </span>
                  <span class="time">
                                    11:16:19<b></b>
                                  </span>
                </div>
                <span class="origin">0</span>
                <span class="destination">24</span>
                <span class="dash"></span>
                <a-progress :percent="50" :showInfo="false" />
                <i>
                                  <span class="location">
                                                                                                进入高速路xxxx<b></b><em></em>
                                  </span>
                  <span class="time">
                                    11:16:19<b></b>
                                  </span>
                </i>
              </div>
              <div class="info">
                <p><span><em>车牌号： </em><i class="carNum">{{item.registrationNo}}</i></span><span><em>自编号： </em><i>{{item.sinceNumber}}</i></span><span><em>车辆类型： </em><i>{{item.carType}}</i></span></p>
                <p><span><em>所属： </em><i>{{item.organId}}</i></span><span><em>状态： </em><i>{{item.statusNormal}}</i></span><span><em>入网时间： </em><i>{{item.regTime}}</i></span></p>
              </div>
            </div>
          </a-col>
        </a-list>
      </a-row>
    </a-spin>
  </div>
</template>

<script>
  import moment from 'moment'
  import { getAction } from '@/api/manage';
  export default {
    name: "",
    props:{
      listUrl: {
        type: String
      },
      param: {
        type: Object,
        default: () => {
          return {}
        }
      }
    },
    data() {
      return {
        spinning: true,
        listData: [],
        networkTime:{},
        pagination: {
          onChange: (page) => {
            this.pagination.current = page;
            this.param.pageNo = page;
            this.getData();
          },
          current: 1,
          pageSize: 8,
          total: 0
        }
      }
    },
    created() {
      this.getData();
    },
    mounted(){

    },
    methods: {
      moment,
      editInfo(id){
        getAction('/application/car/account/getCarDetail',{id})
          .then((res)=>{
            this.$emit('stateInfoData',res.result);
          })
      },
      getData(){
        this.spinning = true;
        if(this.listUrl){
          var $this = this
          getAction(this.listUrl,this.param)
            .then((res)=>{
              $this.listData = res.result.data;
              var that =this
              $this.listData.forEach(item=>{
                item.regTime = that.moment(item.regTime).format("YYYY-MM-DD")
              })
              $this.pagination.total = res.result.count;
              $this.spinning = false;
            })
        }
        else{
          this.spinning = false;
        }
      },
      handleMenuClick(){

      },
      enterDetail(item){
        this.$emit('statetypeData',item.id);
      },
      moveBadge(e){
        if(e.target.className == 'ant-progress-bg'){
          let x = e.target;
          while(x.className != 'road'){
            x = x.parentNode;
          }
          x.querySelector('.badge').style.left = e.offsetX - 4 + 'px';
          x.querySelector('.badge').style.visibility = 'visible';
        }
        if(e.target.querySelector('.badge')){
          e.target.onmouseout = () =>{
            document.onmousemove = null;
            e.target.querySelector('.badge').style.visibility = 'hidden';
          }
        }
      }
    }
  }
</script>

<style lang="less" scoped>
  @import url("../../../../public/theme/override/reset.css");
  .ant-row{
    .gutter-box {
      dl,ul,p{
        margin: 0;
      }
      height: 214px;
      margin: 10px;
      padding: 10px 13px 10px 20px;
      border: 1px solid #E8E8E8;
      &:hover{
        box-shadow: 2px 2px 5px #E8E8E8;/*opera或ie9*/
        -moz-box-shadow: 2px 2px 5px #E8E8E8;/*firefox*/
        -webkit-box-shadow: 2px 2px 5px #E8E8E8;/*webkit*/
      }
      .handle-box{
        span{
          float: left;
          i{
            margin-right: 12px;
            cursor: pointer;
          }
        }
        .edit{
          float: right;
          width: 38px;
          .ant-btn{
            float: right;
            box-shadow: none;/*opera或ie9*/
            -moz-box-shadow: none;/*firefox*/
            -webkit-box-shadow: none;/*webkit*/
            border: none;
          }
        }
      }
      .road{
        margin-top: 50px;
        position: relative;
        height: 8px;
        .badge{
          position: absolute;
          visibility: hidden;
          left: 0;
          top: 0px;
          width: 8px;
          height: 8px;
          background: #EB6100;
          border-radius: 50%;
          z-index: 333;
          &:after{
            border-radius: 50%;
            border: 1px solid #EB6100;
            position: absolute;
            z-index: 333;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            content: '';
            -webkit-animation: antStatusProcessing 1.2s infinite ease-in-out;
            animation: antStatusProcessing 1.2s infinite ease-in-out;
          }
          .location{
            position: absolute;
            white-space: nowrap;
            padding: 0 10px 0 36px;
            top: -40px;
            left: -37px;
            height: 32px;
            line-height: 32px;
            background: #fff url(../../../assets/image/carteam/location.png) no-repeat 10px center;
            color: #333;
            border-radius: 3px;
            border: 1px solid rgba(232,232,232,1);
            em{
              position: absolute;
              left: 35px;
              top:  29px;
              width: 0;
              height: 0;
              border-width: 5px 5px;
              border-style: solid;
              border-color: #fff transparent transparent transparent;
              z-index: 333;
            }
            b{
              position: absolute;
              left: 35px;
              top:  30px;
              width: 0;
              height: 0;
              border-width: 5px 5px;
              border-style: solid;
              border-color: rgba(232,232,232,1) transparent transparent transparent;
            }
          }
          .time{
            position: absolute;
            white-space: nowrap;
            left: -31px;
            top: 16px;
            background: #999;
            height: 22px;
            padding: 0 10px;
            color: #fff;
            border-radius: 3px;
            b{
              position: absolute;
              left: 30px;
              top:  -10px;
              width: 0;
              height: 0;
              border-width: 5px 5px;
              border-style: solid;
              border-color: transparent transparent #999 transparent;
            }
          }
        }
        .ant-progress{
          position: absolute;
          left: 0;
          top: -9px;
        }
        .origin{
          position: absolute;
          left: 0;
          top: 11px;
        }
        .destination{
          position: absolute;
          right: 0;
          top: 11px;
        }
        .dash{
          position: absolute;
          left: 0;
          top: 3px;
          height: 0;
          width: 100%;
          border-top: 1px dashed #fff;
          z-index: 333;
        }
        &>i{
          position: absolute;
          width: 60px;
          height: 32px;
          background: url(../../../assets/image/carteam/car.png) no-repeat;
          left: calc(50% - 30px);
          top: -28px;
          &:hover{
            .location,.time{
              visibility: visible;
            }
          }
          .location{
            position: absolute;
            white-space: nowrap;
            padding: 0 10px 0 36px;
            top: -40px;
            left: -20px;
            height: 32px;
            line-height: 32px;
            background: #fff url(../../../assets/image/carteam/location.png) no-repeat 10px center;
            color: #333;
            border-radius: 3px;
            border: 1px solid rgba(232,232,232,1);
            visibility: hidden;
            em{
              position: absolute;
              left: 35px;
              top:  29px;
              width: 0;
              height: 0;
              border-width: 5px 5px;
              border-style: solid;
              border-color: #fff transparent transparent transparent;
              z-index: 333;
            }
            b{
              position: absolute;
              left: 35px;
              top:  30px;
              width: 0;
              height: 0;
              border-width: 5px 5px;
              border-style: solid;
              border-color: rgba(232,232,232,1) transparent transparent transparent;
            }
          }
          .time{
            position: absolute;
            white-space: nowrap;
            left: -15px;
            top: 45px;
            background: #999;
            height: 22px;
            padding: 0 10px;
            color: #fff;
            border-radius: 3px;
            visibility: hidden;
            b{
              position: absolute;
              left: 30px;
              top:  -10px;
              width: 0;
              height: 0;
              border-width: 5px 5px;
              border-style: solid;
              border-color: transparent transparent #999 transparent;
            }
          }
        }
      }
      .info{
        margin-top: 36px;
        p{
          display: flex;
          display: -webkit-flex;
          height: 26px;
          line-height: 26px;
          color: #666;
          span{
            font-size: 14px;
            flex: 1;
            em{
              color: #999;
            }
            i{
              &.carNum{
                font-weight: bold;
                color: #333;
              }
            }
          }
        }
      }
    }

  }
</style>
<style scoped>
  .handle-box-qrcode:hover  .handle-box-welcomeCheta{
    visibility: visible;
  }
  .handle-box-welcomeCheta{
    visibility: hidden;
    position: absolute;
    z-index: 5;
    width: 110px;
    height: 110px;
    padding: 0px;
    border-radius: 2px;
    margin-left: 5px;
    border: 2px solid #F1F1F1;
    background-color: #ffffff;
    -webkit-box-shadow: 1px 1px 5px rgb(234, 234, 234);
    margin-top: 0px;
}
  .handle-box-erweima{
    width: 18px;
    height: 18px;
  }
</style>

