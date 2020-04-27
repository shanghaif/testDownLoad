<template>
  <div class="topRight">
    <a-row>
        <div class="up">
            <a-col span="12">
              <div class="upLeft">
                <img src="@/assets/image/carteam/green.png" alt="" />
              </div>
            </a-col>
            <a-col span="12">
              <div class="upRight">
                <div class="upRightOne">625</div>
                <div class="upRightTwo">在保车辆数</div>
              </div>
            </a-col>
        </div>

    </a-row>
  </div>
</template>

<script>
  import moment from 'moment';
  export default {
    data(){
      return {
        dateFormat: 'YYYY/MM/DD',
        monthFormat: 'YYYY/MM',
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
  .upLeft img{
    margin: 28px auto;
  }
  .upRight{
    float: right;
  }
  .topRight{
    height: 180px;
    margin: 10px;
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