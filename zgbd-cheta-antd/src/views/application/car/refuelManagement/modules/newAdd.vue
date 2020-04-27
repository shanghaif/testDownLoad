<template>
  <a-modal v-model="newaddShow" @ok="getData" title="加油新增" width="720px">
    <div class="addinput">
      <div class="three">
        <span>车牌号码:</span>
        <div class="w200" @click="carVisible = true">
          <div>请选择车辆</div>
        </div>
        <!-- <a-input placeholder="请输入车牌号码" class="w200 flex1" v-model="carNum" /> -->
      </div>
      <div class="three">
        <span>里程读数:</span>
        <a-input placeholder="请输入里程读数" class="w200 flex1"  v-model="mileage" />
      </div>
      <div class="three">
        <span>加油升数:</span>
        <a-select defaultValue="请输入加油升数" placeholder="请选择加油升数" style="width: 200px" @change="handleChange"  v-model="refuel">
          <a-select-option value="jack">1111</a-select-option>
          <a-select-option value="lucy">2222</a-select-option>
        </a-select>
      </div>
      <div class="three">
        <span>加油金额:</span>
        <a-input placeholder="请输入加油金额" class="w200 flex1" v-model="money" />
      </div>
      <div class="three">
        <span>品种:&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span>
        <a-input placeholder="请输入经办人名称" class="w200 flex1" v-model="variety" />
      </div>
      <div class="three">
        <span>油卡号:</span>
        <a-input placeholder="请输入经办人电话" class="w200 flex1" v-model="OilCardNumber" />
      </div>
      <div class="three mb0">
        <span>供应商:&nbsp;&nbsp;&nbsp;&nbsp;</span>
        <a-input placeholder="请输入供应商" class="w200 flex1" v-model="stationName" />
      </div>
      <div class="three mb0">
        <span>日期:</span>
        <a-date-picker class="w200 mrn" @change="onChange" v-model="date" />
      </div>
    </div>
    <a-modal
      title="添加车辆号"
      centered
      v-model="carVisible"
      @ok="addCar"
    >
      <Structure @carCheckShow="carCheckShow" style="max-height: 500px;overflow-y: scroll"/>
    </a-modal>
  </a-modal>
</template>

<script>
  import { postAction } from '@/api/manage'
  import Structure from '@/views/application/car/map/Structure'
  export default {
    components:{Structure},
    data(){
      return {
        newaddShow:false,
        carVisible: false,
        carNum: '',
        OilCardNumber: '',
        mileage: '',
        refuel: '',
        money: '',
        variety: '',
        stationName: '',
        date: '',
      }
    },
    methods:{
      getData () {
        let param = {
        	registrationNo: this.carNum, 		//车辆号
        	mileage: this.mileage,             //里程数
        	oilCapacity: this.refuel,		   //加油升数
        	money: this.money,			       //加油金额
        	oilQuality: this.variety,          //加油品种
        	cardNumber: this.OilCardNumber,       //油卡卡号
        	stationName: this.stationName,		   //加油供应商
        	// date: this.date.replace(/(.+?)\年(.+?)\月(.+)\日/,"$1-$2-$3")
        }
        var $this = this;
        postAction('/application/car/vehicle/refuel/insertOrUpdate', param ).then(res => {
          // debugger;
          // $this.$message.success("添加成功")
          // this.$router.go(0)
          $this.$emit('reload');  //调用父组件
          $this.newaddShow = false; //关闭弹层
        })
      },
      handleChange(value) {
        console.log(`selected ${value}`);
      },
      onChange(date, dateString) {
        console.log(date, dateString);
      },
      open(){
        this.newaddShow = true;
      },
      addCar () {
        this.carVisible = false
      },
      carCheckShow(list) {
        // debugger;
        this.carList = list
        console.log(this.carList)
      },
    }
  }
</script>

<style lang="scss" scoped>
  .addinput{
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;
    span{
      font-size:14px;
      color:#666;
      padding-right:10px;
      line-height:32px;
    }
    .three{
      display:flex;
      justify-content:space-between;
      margin:0 26px 23px 26px;
    }
    .bz{
      border:1px solid #ddd;
      border-radius: 4px;
      padding:5px;
    }
    .w200{
      width:200px;
    }
    .mrn{padding-right:0}
    .mb0{margin-bottom:0}
  }
</style>
