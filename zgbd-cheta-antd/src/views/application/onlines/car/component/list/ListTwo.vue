<template>
  <div id="netsecurity" class="section netsecurity">
    <h2 class="top">{{config[0].title}}</h2>
    <a-row>
      <a-col class="com" :xs="24" :sm="24" :md="12" :lg="12" :xl="8">
        <p><span>{{config[0].title1}}</span><label>{{config[0].setupDate}}</label></p>
        <p><span>{{config[0].title2}}</span><label>{{config[0].setupDateEnd}}</label></p>
      </a-col>
      <a-col class="com" :xs="24" :sm="24" :md="12" :lg="12" :xl="8">
        <p><span>{{config[0].title3}}</span><label>{{config[0].serviceCharge}}</label></p>
        <p><span>{{config[0].title4}}</span><label class="cheta-color">{{config[0].fenceLimits}}</label></p>
      </a-col>
      <a-col class="com" :xs="24" :sm="24" :md="12" :lg="12" :xl="8">
        <p><span>{{config[0].title5}}</span><label>{{config[0].NonOperationalSpeedLimit}}</label></p>
        <p><span>{{config[0].title6}}</span><label>{{config[0].operationSpeedLimit}}</label></p>

      </a-col>
    </a-row>
    <!--<component :is="elements[0].name" :config="elements[0].data"></component>-->
  </div>
</template>

<script>
  import homeMixin from '@/views/application/onlines/home/config/mixin.js'
  import elementMixin from '@/views/application/onlines/element/config/mixin.js'
  import carMixin from '@/views/application/onlines/car/config/mixin.js'
  import CTable from '@/views/chetaui/table.js';
  import {getAction} from "@/api/manage";
  export default {
    name: "parameterDetail",
    components: Object.assign(
      homeMixin.components,
      elementMixin.components,
      carMixin.components,
      CTable,
    ),
    /*components: {
      CTable,
    },*/
    props: {
      config: {
        type: Array,
        default: () => []
      },
    },
    data() {
      return {
        elements : [],
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

        data_security:[{//入网安全
          intelligentTerminal: 'PWD2531',
          installTime: '2019-04-26',
          equipmentMan: '广州市粤峰技术有限公司',
          equipmentType: '软件式',
          equipmentNumber: '20180036',
          maintenance: '13800138000',
          id: '1'
        },
          {
            intelligentTerminal: 'PWD2531',
            installTime: '2019-04-26',
            equipmentMan: '广州市粤峰技术有限公司',
            equipmentType: '车载式',
            equipmentNumber: '20180036',
            maintenance: '13800138000',
            id: '2'
          }],
        columns_security: [{//入网安全
          title: '序号',
          dataIndex: 'id',
          key: 'id',
          width: '5%',
          align: "center",
          customRender: function(t, r, index) {
            return parseInt(index) + 1;
          }
        },
          {
            title: '智能终端',
            width: '10%',
            align: "center",
            dataIndex: 'intelligentTerminal',
            key: 'intelligentTerminal'
          },
          {
            title: '安装时间',
            width: '10%',
            align: "center",
            dataIndex: 'installTime',
            key: 'installTime'
          },
          {
            title: '设备厂家',
            width: '15%',
            align: "center",
            dataIndex: 'equipmentMan',
            key: 'equipmentMan'
          },
          {
            title: '设备类型',
            width: '15%',
            align: "center",
            dataIndex: 'equipmentType',
            key: 'equipmentType'
          },
          {
            title: '设备号',
            width: '10%',
            align: "center",
            dataIndex: 'equipmentNumber',
            key: 'equipmentNumber'
          },
          {
            title: '物联网卡号',
            width: '10%',
            align: "center",
            dataIndex: 'maintenance',
            key: 'maintenance'
          }
        ],



      }
    },
    created() {
      this.previewView();
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
      if(this.result.accountdetails){
        setTimeout(()=>{
          this.spinning = false;
        }, 1000);
      }
    },
    methods: {
      previewView() {
        /*this.elements.push({
          name: "TableA",
          configName: "TableData",
          data: JSON.parse(data),
          json: JSON.parse(data)
        })*/
        var that = this;
        getAction('application/online/component/getComponentsById', {projectId: 'a3046edeab824e01bb78f9c5572654e4'}).then(res => {
          res.result.forEach(item => {
            that.elements.push({
              name: item.name,
              data: JSON.parse(item.data),
              /*configName: item.configName,
              json: JSON.parse(data)*/
            })
          })
        });
      },
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
  .parameterDetail {
    .content {
      width: calc(100% - 164px);
      float: left;
      margin: 0 60px 0 30px;
      .section {
        padding: 0 0 40px 0;
        border-bottom: 1px solid #E8E8E8;
        h2 {
          height: 18px;
          line-height: 18px;
          font-size: 18px;
          font-family: MicrosoftYaHei-Bold;
          font-weight: bold;
          color: rgba(51, 51, 51, 1);
          margin: 40px 0;
        }
        .com {
          /*min-height: 176px;*/
        }
        .red {
          a {
            color: #f5222d;
          }
          /*span {*/
          /*color: rgba(0, 0, 0, 0.65);*/
          /*}*/
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
    }
  }
</style>
<style scoped>
  .top{
    height: 18px;
    line-height: 18px;
    font-size: 18px;
    font-family: MicrosoftYaHei-Bold;
    font-weight: bold;
    color: #333333;
    margin: 20px 0;
  }
</style>