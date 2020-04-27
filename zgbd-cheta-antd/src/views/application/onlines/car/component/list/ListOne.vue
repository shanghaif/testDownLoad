<template>
  <div id="basic" class="section basic">
    <h2>{{config[0].title}}</h2>
    <a-row type="flex">
      <a-col class="com" :xs="24" :sm="24" :md="12" :lg="12" :xl="8" :xxl="6" :order="1">
        <p><span>{{config[0].title1}}</span><label>{{config[0].registrationNO}}</label></p>
        <p><span>{{config[0].title2}}</span><label>{{config[0].brandType}}</label></p>
        <p><span>{{config[0].title3}}</span><label>{{config[0].carType}}</label></p>
        <p><span>{{config[0].title4}}</span><label>{{config[0].chassisNumber}}</label></p>
        <p><span>{{config[0].title5}}</span><label>{{config[0].engineNumber}}</label></p>
      </a-col>
      <a-col class="com" :xs="24" :sm="24" :md="12" :lg="12" :xl="8" :xxl="6" :order="2">
        <p><span>{{config[0].title6}}</span><label>{{config[0].buyVehiclePrice}}</label></p>
        <p><span>{{config[0].title7}}</span><label>{{config[0].buyVehicleRevenue}}</label></p>
        <p><span>{{config[0].title8}}</span><label>{{config[0].supplier}}</label></p>
        <p><span>{{config[0].title9}}</span><label>{{config[0].buyDate}}</label></p>
        <p><span>{{config[0].title10}}</span><label>{{config[0].vehicleOwnerShip}}</label></p>
      </a-col>
      <a-col class="com" :xs="24" :sm="24" :md="12" :lg="12" :xl="8" :xxl="6" :order="3">
        <p><span>{{config[0].title11}}</span><span class="cheta-color">{{config[0].state}}</span></p>
        <p><span>{{config[0].title12}}</span><label>{{config[0].projectOwner}}</label></p>
        <p><span>{{config[0].title13}}</span><label>{{config[0].insurance}}</label></p>
        <p><span>{{config[0].title14}}</span><a class="cheta-color" href="#">{{config[0].details}}</a></p>
        <div class="high clearfix">
          <span class="driver_left" style="float: left">{{config[0].driver}}</span>
          <span class="driver_right" style="float: left">
                    <div style="display: inline-block">
                  <p><span>{{config[0].title15}}<span>{{config[0].mainDriver}}</span><span>{{config[0].mainte1}}</span><span class="cheta-color">{{config[0].detailed1}}</span></span></p>
                  <p>{{config[0].title16}}<span>{{config[0].colDriver}}</span><span>{{config[0].mainte2}}</span><span class="cheta-color">{{config[0].detailed2}}</span></p>
                </div>
                </span>

        </div>
        <!--v-if="accountData.driverID1.length"-->
      </a-col>
      <a-col class="com" :xs="24" :sm="24" :md="12" :lg="12" :xl="8" :xxl="6" :order="4">
        <div class="clearfix">
          <div class="infoDetail">
            {{config[0].title17}}
          </div>
        </div>
        <img src="@/assets/image/parameter/img.png" />
      </a-col>
    </a-row>
  </div>
</template>

<script>
  import CTable from '@/views/chetaui/table.js';
  export default {
    components: {
      CTable
    },
    props: {
      config: {
        type: Array,
        default: () => []
      },
    },
    data() {
      return {
        isShow:true,
        name1: 'maintenance',
        spinning: false,
        maintenanceShow: true,
        refuelShow: true,
        violationShow: true,
        insuranceShow: true,
        claimShow: true,
        upkeepShow: true,
        carCarefulShow: true,
        crmData: {
          setupDate:'2016-03-06',
          setupDateEnd:'3年',
          serviceCharge:'800/年',
          fenceLimits:'不知道的名称',
          NonOperationalSpeedLimit:'120km/h',
          operationSpeedLimit:'80km/h'

        },
      }
    },
    created() {
      this.localHistory[1] = {
        execute: () =>this.back()
      }
      this.localHistory.currentIndex = 1;
    },
    mounted(){
      console.log(this.result);
      this.accountData = this.result.accountdetails;
      this.crmData = this.result.accountdetails;
      this.files = this.result.files;
      debugger
      if(this.result.accountdetails){
        setTimeout(()=>{
          this.spinning = false;
        }, 1000);
      }
    },
    methods: {
      changer(item) {
        if(item.show == 1) {
          item.show = 0;
        } else {
          console.log(333)
          item.show = 1;
        }
      },
      handleDetail(record){

      },
      back(){
        this.$emit('backParameterList');
      }
    },
    filters: {
      hide(value) {
        return value.toString().replace(/[0-9]/ig, "*");
      }
    }
  }
</script>

<style lang="less" scoped>
  h2 {
    height: 18px;
    line-height: 18px;
    font-size: 18px;
    font-family: MicrosoftYaHei-Bold;
    font-weight: bold;
    color: rgba(51, 51, 51, 1);
    margin: 40px 0;
  }
  .section {
    padding: 0 0 40px 0;
    border-bottom: 1px solid #E8E8E8;

    .red {
      a {
        color: #f5222d;
      }
    }
    p {
      height: 30px;
      line-height: 30px;
      font-size: 14px;
      span {
        height: 14px;
        font-family: MicrosoftYaHei;
        font-weight: 400;
        margin-right: 10px;
      }
      label {
        height: 14px;
        font-family: MicrosoftYaHei;
        font-weight: 400;
      }
    }
    .imgList {
      padding-top: 15px;
      span {
        position: relative;
        float: left;
        width: 170px;
        height: 170px;
        margin-right: 60px;
        i {
          display: none;
        }
        &:hover i {
          display: block;
          position: absolute;
          left: 0;
          top: 0;
          width: 170px;
          padding-left: 15px;
          height: 40px;
          line-height: 40px;
          font-size: 14px;
          background: rgba(0, 0, 0, 0.5);
          color: #fff;
        }
      }
    }
    &.basic {
      .infoDetail {
        float: right;
        width: 80px;
        height: 24px;
        line-height: 24px;
        text-align: center;
        background: rgba(255, 255, 255, 1);
        border: 1px solid rgba(221, 221, 221, 1);
        border-radius: 4px;
        margin-bottom: 23px;
        cursor: pointer;
        &:hover {
          background: #1890ff;
          color: #fff;
        }
      }
      img {
        float: right;
      }
    }
    &.alteration {
      p {
        span {
          margin-right: 20px;
        }
      }
    }
    &.common {
      .titleWrap {
        h2 {
          float: left;
        }
        span {
          float: right;
          height: 18px;
          line-height: 18px;
          margin-top: 40px;
          width: 80px;
          cursor: pointer;
          img {
            float: left;
            margin-right: 10px;
          }
          label {
            float: left;
            font-size: 14px;
            font-family: MicrosoftYaHei;
            font-weight: 400;
            color: rgba(38, 38, 38, 1);
          }
        }
      }
    }
  }
</style>