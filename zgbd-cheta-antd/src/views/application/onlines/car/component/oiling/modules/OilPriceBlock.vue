<template>
  <div class="dati">
    <div class="top">
      <span class="topTwo">{{config[0].topa}}</span>
      <span class="topOne">
            <a-form-item
              :wrapper-col="wrapperCol"
              has-feedback
            >
            <a-select default-value="1">
              <a-select-option value="1">{{config[0].selecta}}</a-select-option>
              <a-select-option value="2">{{config[0].selectb}}</a-select-option>
              <a-select-option value="3">{{config[0].selectc}}</a-select-option>
            </a-select>
          </a-form-item>
      </span>
      <a-button type="primary" class="topThree" @click="countDownRecharge">{{config[0].topb}}</a-button>
      <a-button type="primary" class="topFour" @click="countDownRecharge">{{config[0].topc}}</a-button>
    </div>
    <div class="body">
      <a-row>
        <a-col span="12">
          <div class="OilPrice">
            <span class="colorOne"></span>
            <span class="numberOne">{{config[0].numberOnea}}</span>
            <span class="numberTwo">{{config[0].numberTwoa}}</span>
            <span class="numberThree"></span>
            <span class="numberFour">{{config[0].numberThreea}}</span>
            <div class="imgOne"><img src="/image/Oiling/线1.png" alt=""></div>
          </div>
        </a-col>
        <a-col span="12">
          <div class="OilPrice">
            <span class="colorTwo"></span>
            <span class="numberOne">{{config[0].numberOneb}}</span>
            <span class="numberTwo">{{config[0].numberTwob}}</span>
            <span class="numberThree"></span>
            <span class="numberFour">{{config[0].numberThreeb}}</span>
            <div class="imgOne"><img src="/image/Oiling/线1.png" alt=""></div>
          </div>
        </a-col>
        <a-col span="12">
          <div class="OilPrice">
            <span class="colorThree"></span>
            <span class="numberOne">{{config[0].numberOnec}}</span>
            <span class="numberTwo">{{config[0].numberTwoc}}</span>
            <span class="numberThree"></span>
            <span class="numberFour">{{config[0].numberThreec}}</span>
            <div class="imgOne"><img src="/image/Oiling/线1.png" alt=""></div>
          </div>
        </a-col>
        <a-col span="12">
          <div class="OilPrice">
            <span class="colorFour"></span>
            <span class="numberOne">{{config[0].numberOned}}</span>
            <span class="numberTwo">{{config[0].numberTwod}}</span>
            <span class="numberThree"></span>
            <span class="numberFour">{{config[0].numberThreed}}</span>
            <div class="imgOne"><img src="/image/Oiling/线1.png" alt=""></div>
          </div>
        </a-col>
      </a-row>
    </div>

  </div>


</template>

<script>
  export default {
    methods: {
      countDownRecharge() {
        let secondsToGo = 5;
        const modal = this.$success({
          title: '此服务暂未开通，请耐心等待，谢谢～',
          // content: `${secondsToGo} 秒后关闭`,
        });
        const interval = setInterval(() => {
          secondsToGo -= 1;
          modal.update({
            // content: `${secondsToGo} 秒后关闭`,
          });
        }, 1000);
        setTimeout(() => {
          clearInterval(interval);
          modal.destroy();
        }, secondsToGo * 1000);
      },
    },


    name: 'OilPrice',
    props: {
      config: {
        type: Array,
        default: () => []
      },
    }
  }
</script>

<style scoped>
  .dati{
    height: 240px;
    border-radius: 8px;
    margin: 15px;
    padding: 20px;
    background:rgba(254,253,255,1);
    box-shadow:0px 3px 7px 0px rgba(234,234,234,1);
  }
  .top{
    height: 40px;
    line-height: 40px;
  }
  .top span{
    display: inline-block;
  }
  .topOne{
    display: inline-block;
  }
  .topTwo{
    margin: 0 10px;
    font-size:18px;
    font-family:Microsoft YaHei;
    font-weight:400;
    color:rgba(51,51,51,1);
    line-height:40px;
  }
  .topThree {
    float: right;
    margin: 4px 0;
  }
  .topFour{
    float: right;
    margin: 4px 10px;
  }




  .body{
    padding: 15px 0px;
  }
  .OilPrice{
    margin: 15px 10px;
  }
  .colorOne{
    position:absolute;
    display: inline-block;
    width:4px;
    height:38px;
    background:rgba(230,148,240,1);
  }
  .colorTwo{
    position:absolute;
    display: inline-block;
    width:4px;
    height:38px;
    background:rgba(120,174,249,1);
  }
  .colorThree{
    position:absolute;
    display: inline-block;
    width:4px;
    height:38px;
    background:rgba(33,204,149,1);
  }
  .colorFour{
    position:absolute;
    display: inline-block;
    width:4px;
    height:38px;
    background:rgba(255,139,23,1);
  }
  .numberOne{
    margin-left: 12px;
    margin-right: 24px;
    font-size:28px;
    font-family:Microsoft YaHei;
    font-weight:bold;
    color:rgba(51,51,51,1);
    line-height:40px;
  }
  .numberTwo{
    margin-top: -8px;
    margin-left: -22px;
    position: absolute;
    font-size:20px;
    font-family:Microsoft YaHei;
    font-weight:bold;
    color:rgba(51,51,51,1);
    line-height:40px;
  }
  .numberThree{
    width: 1px;
    height: 23px;
    margin-top: 8px;
    display: inline-block;
    position: absolute;
    background:rgba(232,232,232,1);
  }
  .numberFour{
    margin: 0 12px;
    font-size:28px;
    font-family:Microsoft YaHei;
    font-weight:bold;
    color:rgba(51,51,51,1);
    line-height:40px;
  }
  .imgOne{
    position: absolute;
    margin-top: -17px;
  }
  .ant-form-item{
    margin-bottom: 0px!important;
  }
  .dati >>> .ant-select-selection{
   border: none;
  }
  .dati >>> .ant-select-selection:hover{
    color: #78AEF9;
  }
  .dati >>> .ant-select-arrow:hover{
    color: #78AEF9;
  }

</style>