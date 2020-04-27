<template>
      <div class="top">
      <span class="topOne">
       <a-form-item
         :wrapper-col="wrapperCol"
         has-feedback
       >
       <a-tree-select
         style="width: 200px"
         :treeData="treeData"
         placeholder="请选择父级名称"
         @change="onChangeTree"
       >
      </a-tree-select>
    </a-form-item>
      </span>
        <!--日期选择-->
        <span class="topThree">
          <a-range-picker  @change="onChange" class="DateSelection" :disabledDate="disabledDate" :format="dateFormat" v-model="date.str"/>
        </span>
        <!--本月-->
        <a-button  @click="showMouth" class="ThisMonth">本月</a-button>
      </div>
</template>

<script>
  import { getOrganTree } from '@/api/api.js'
  import {getAction} from "@/api/manage";
  import moment from 'moment';
  export default {
    name: 'Navigation',
    data() {
      return {
        startTime: '',
        entTime:'',
        month:new Date().getMonth()+1,
        beginDate:new Date().getFullYear() +'/'+ (new Date().getMonth()+1) + '/01',

        url : {
          refuelInfo:"/application/car/vehicle/oilcard/getCardInfo"
        },
        result : [],
        dateFormat: 'YYYY-MM-DD',
        dateOneDay: 'YYYY-MM-01',
        monthFormat: 'YYYY-MM',
        date:{
          str: [this.moment().startOf('month'), this.moment()],
        },
        treeData:[],
        organ : {}
      };
    },
    created(){
      // this.init(null);
      this.showMouth()
      this.initOrgan()
    },
    methods: {
      initOrgan(){
        getOrganTree().then(res => {
          var $this = this
          $this.treeData = res.result;
        })
      },
      onChangeTree (value) {
        console.log(value)
        let data = {organId:value,type:'month'};
        this.$emit('refresh',data)
        this.organ = {organId:value};
      },
      moment,
      commonChange(startTime,entTime,type){
        let data = {startTime:startTime,entTime:entTime,type:type};
        if(this.organ){
          Object.assign(data,this.organ)
        }
        this.$emit('refresh',data)
      },
      // 日期选择
      onChange() {
        this.commonChange(this.date.str[0].format("YYYY-MM-DD"),this.date.str[1].format("YYYY-MM-DD"),'day');
        $('.ThisMonth').css({color:'#666666',border:'1px solid #D9D9D9',cursor:'pointer'}).attr('disabled',false)
      },
      // 本月按钮
      showMouth() {
        this.init(null);
        this.date.str =[this.moment().startOf('month'), this.moment(),'month']
        this.commonChange(this.date.str[0].format('YYYY-MM-01'),this.date.str[1].format('YYYY-MM-DD'),'month');
        $('.ThisMonth').css({color:'#47CDAD',border:'1px solid #47CDAD',cursor:'pointer'}).attr('disabled',false)
  },
      init(params){
        // 打断点取相照应的值
        this.result = [];
        getAction(this.url.refuelInfo,params).then(res => {
          if(res.success){
            this.result = res.result;
          }
        })
      },
      disabledDate(current) {
        return current && current > moment().endOf('day');
      },

    },
    props: {
      config: {
        type: Array,
        default: () => []
      },
    },
  };

</script>

<style scoped>
  .topOne{
    display: inline-block;
    margin: 0 15px;
    font-size:18px;
    font-family:Microsoft YaHei;
    font-weight:400;
    color:rgba(51,51,51,1);
    height: 40px;
    line-height: 40px;
  }
  .ThisMonth {
    color: #47CDAD;
    border: 1px solid #47CDAD;
    margin: 4px 15px;
    height: 32px;
    line-height: 32px;
  }
  .topThree{
    margin: 0 10px;
    height: 40px;
    line-height: 40px;
  }
  .RegionSelection{
    display: inline-block;
  }
  .topCity{
    height: 40px;
    display: inline-block;
  }


</style>