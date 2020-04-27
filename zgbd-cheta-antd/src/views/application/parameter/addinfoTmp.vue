<template>
  <div class="add_info">
    <a-steps style="margin-top: 60px;" progressDot :current="currentIndex">
      <a-step title="基本信息" />
      <a-step title="入网信息" />
      <a-step title="牌证档案" />
      <a-step title="证件" />
    </a-steps>
    <basicInfo v-if="currentIndex == 0 && infoData" :infoData="infoData" :params="params" :currentIndex="currentIndex" :localHistory="localHistory" @backAddinfo="back" @plusAddinfoIndex="plusIndex"></basicInfo>
    <networkInfo v-else-if="currentIndex == 1" :infoData="infoData" :params="params" :currentIndex="currentIndex" :localHistory="localHistory" @backAddinfo="back" @plusAddinfoIndex="plusIndex" @minusAddinfoIndex="minusIndex"></networkInfo>
    <certificateFile v-else-if="currentIndex == 2" :infoData="infoData" :params="params" :currentIndex="currentIndex" :localHistory="localHistory" @backAddinfo="back" @plusAddinfoIndex="plusIndex" @minusAddinfoIndex="minusIndex"></certificateFile>
    <certificate v-else :currentIndex="currentIndex" :infoData="infoData" :params="params" :localHistory="localHistory" @backAddinfo="back" @minusAddinfoIndex="minusIndex"></certificate>
  </div>
</template>
<script>
  import { getAction } from '@/api/manage';
  import basicInfo from './basicInfo';
  import networkInfo from './networkInfo';
  import certificateFile from './certificateFile';
  import certificate from './certificate';
  export default {
    name: "addinfo",
    props:{
      localHistory: {
        type: Object
      },

    },
    components: {
      basicInfo,
      networkInfo,
      certificateFile,
      certificate
    },
    data() {
      return {
        currentIndex: 0,
        infoData: {},
        params: {
          accessory: [], //投保附件
          carDetail: {
            annualRule: '', //车审规则
            assetBelong: '',  //资产所属
            buyTime: '', //购买日期
            carPrices: '', //购买车价
            contractPeriod: '',  //合同期限
            insureCompany: '',  //投保公司
            insureCost: '',  //投保费用
            insureDeadline: '', //生效期
            insureHeader: '',  //投保负责人
            insurePhoto: '',   //投保人联系电话
            insureType: '',    //保险险种
            lastannualTime: '', //上次年审
            supplie_phone: '',   //供应商电话
            supplier: '',  //供应商
            taxTotal: '' //税费总计
          },
          carDrivers: [{
            userId: ''  //司机
          }],
          carInfo: {
            carmodelId: '', //车型属性
            cartypeId: '', //车辆类型
            engineNumber: '', //发动机号
            frameNumber: '', //车架号
            registrationNo: '', //车牌号
            sinceNumber: '', //自编号
            organId: '', //使用归属
            isComplete: 1
          },
          carNameplate: {}, //铭牌信息
          carNetworks: [{
            equipmentManu: '',  //设备厂家
            equipmentNum: '',    //设备号
            equipmentType: '',  //设备类型
            fenceLimited: '',   //围栏限定
            netNumber: '', //物联网卡号
            nonoperateSpead: '', //非作业速度设定
            operateSpead: ''  //作业速度设定
          }],
          carPhotos: [],  //车身照片
          certificate: [],  //证件照片
          nameplatePhotos: [] //铭牌照片
        }
      }
    },
    mounted(){
      var id = this.$route.params.id;
      if (id === '1'){
        this.infoData = {}
      }
      else {
        var $this = this
        getAction('/application/car/account/getCarDetail',{id}).then((res)=>{
          $this.infoData = res.result;
          localStorage.removeItem('addinfoParams');
        })
      }

    },
    methods: {
      back(){
        this.$emit('backParameterList2');
      },
      plusIndex(){
        this.currentIndex ++;
      },
      minusIndex(){
        this.currentIndex --;
      }
    }
  }
</script>

<style lang="less" scoped>
  @import url("../../../../public/theme/override/reset.css");
  .add_info{
    .section{
      padding-top: 80px;
      width: 850px;
      margin: 0 auto;
    }
  }
</style>

