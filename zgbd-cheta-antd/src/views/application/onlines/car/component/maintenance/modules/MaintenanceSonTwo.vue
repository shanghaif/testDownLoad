<template>
<div class="topRight">
  <a-row>

  <a-col span="24"  v-if="config[0].ifDate != 2">
      <!--日历-->
      <div class="top">
        <a-date-picker :defaultValue="moment(config[0].date, dateFormat)" v-model="config[0].date"  :format="dateFormat" />
      </div>
    </a-col>
  <a-col span="24">
    <div class="up">
      <a-row>
        <a-col span="12">
          <div class="upLeft">
            <img :src="config[0].url" alt="" />
          </div>
        </a-col>
        <a-col span="12">
          <div class="upRight">
            <div class="upRightOne">{{config[0].one}}</div>
            <div class="upRightTwo">{{config[0].two}}</div>
          </div>
        </a-col>
      </a-row>
    </div>
  </a-col>

  </a-row>
</div>
</template>

<script>
  import moment from 'moment';
  export default {
    data(){
      return {
        dateFormat: 'YYYY-MM-DD',
        monthFormat: 'YYYY/MM',
      }
    },
    props: {
      config: {
        type: Array,
        default: () => []
      }
    },
    methods: {
      moment,
    }
  }
</script>
<style scoped>
  .up{
    padding: 20px 0px;
    /*margin-top: 20px!important;*/
  }
  .top{
    position: absolute;
    width: 120px;
    margin: 0px!important;
  }
.upLeft img{
    margin: 28px auto;
  }
.upRight{
  float: right;
 }
.topRight{
  height: 180px;
  margin: 10px 0;

  padding: 20px;
  background:rgba(255,255,255,1);
  box-shadow:0px 0px 5px 0px rgba(204,204,204,0.5);
  border-radius:3px;
}
.upRightOne{
  float: right;
  padding: 5px 0px;
  font-size:48px;
  font-family:Arial;
  font-weight:bold;
  color:rgba(51,51,51,1);
  line-height:40px;
}
  .upRightTwo{
    float: right;
    padding: 5px 0px;
    font-size:16px;
    font-family:Microsoft YaHei;
    font-weight:bold;
    color:rgba(51,51,51,1);
    line-height:40px;
  }

</style>