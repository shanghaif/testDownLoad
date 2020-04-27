<template>
  <div class="topRight">
    <a-row>
      <a-col span="24">
        <div class="up">
          <a-row>
            <a-col span="24">
                <div class="remind">
                  <a-icon type="bell" class="cheta-color" style="font-size: 22px"/>
                  <span>{{config[0].titleOne}}</span>
                </div>
                <div class="choice"  >
                  <a-select  defaultValue="近一周" style="width: 120px" @change="handleChange">
                    <a-select-option value="近一周">{{config[0].timeOne}}</a-select-option>
                    <a-select-option value="近一月">{{config[0].timeTwo}}</a-select-option>
                    <a-select-option value="近三月">{{config[0].timeThree}}</a-select-option>
                  </a-select>
                </div>
            </a-col>
            <a-col span="12">
              <div class="upLeft">
                <img src="@/assets/image/carteam/green.png" alt="" />
              </div>
            </a-col>
            <a-col span="12">
              <div class="upRight">
                <div class="upRightOne">{{config[0].titleTwo}}</div>
                <div class="upRightTwo">{{config[0].titleThree}}</div>
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
        dateFormat: 'YYYY/MM/DD',
        monthFormat: 'YYYY/MM',
      }
    },
    props: {
      config: {
        type: Array,
        default: () => [],
      },
    },
    methods: {
      handleChange(value) {
        console.log(`selected ${value}`);
      },
      moment,
      handleButtonClick(e) {
        console.log('click left button', e);
      },
      handleMenuClick(e) {
        console.log('click', e);
      },
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
    margin: 20px;
  }
  .topRight{
    height: 180px;
    margin: 10px 0;
    padding: 0px 20px 20px 20px;
    background:rgba(255,255,255,1);
    box-shadow:0px 0px 5px 0px rgba(204,204,204,0.5);
    border-radius:3px;
  }
  .upRightOne{
    float: right;
    /*padding: 5px;*/
    font-size:48px;
    font-family:Arial;
    font-weight:bold;
    color:rgba(51,51,51,1);
    line-height:40px;
  }
  .upRightTwo{
    float: right;
    font-size:16px;
    font-family:Microsoft YaHei;
    font-weight:bold;
    color:rgba(51,51,51,1);
    line-height:40px;
  }
  .remind{
    display: inline;
    position: absolute;
    z-index: 1;
    visibility: visible;
    /*visibility: hidden;*/
  }
  .remind span{
    padding:  0 6px;
    font-size:16px;
    font-family:Microsoft YaHei;
    font-weight:bold;
    color:rgba(51,51,51,1);
    line-height:35px;
  }
  .top{
    display: inline;
  }
  .choice{
    visibility: visible;
    /*visibility: hidden;*/
    display: inline;
    float: right;
  }
  .iconOne{
    visibility: hidden;
    /*visibility: visible;*/
  }
</style>