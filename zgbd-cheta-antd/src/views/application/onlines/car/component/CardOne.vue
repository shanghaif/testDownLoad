<template>
  <a-row>
    <a-col>
      <div class="gutter-box">
        <div class="imgWrap">
          <img src="~@/assets/index/car.png" alt="">
          <i class="cheta-bg">{{config[0].title}}</i>
        </div>
        <div class="info">
          <p>
            <span>{{config[0].title1}}</span>
            <span>{{config[0].text1}}</span>
          </p>
          <p>
            <span>{{config[0].title2}}</span>
            <i></i>
          </p>
          <p>
            <span>{{config[0].title3}}</span>
            <span>{{config[0].text3}}</span>
          </p>
          <p>
            <span>{{config[0].title4}}</span>
            <span>{{config[0].text4}}</span>
          </p>
          <p>
            <span>{{config[0].title5}}</span>
            <span>{{config[0].text5}}</span>
          </p>
        </div>
        <div class="edit">
          <a-dropdown>
            <a class="ant-dropdown-link" href="#">
              <a-icon type="ellipsis" />
            </a>
            <a-menu slot="overlay">
              <a-menu-item>
                <a href="javascript:;">详情</a>
              </a-menu-item>
              <a-menu-item>
                <a href="javascript:;">编辑</a>
              </a-menu-item>
            </a-menu>
          </a-dropdown>
        </div>
      </div>
    </a-col>
  </a-row>
</template>

<script>
  export default {
    props: {
      config: {
        type: Array,
        default: () => []
      },
    }
  }
</script>

<style scoped>

  .edit{
    width: 40px;
  }
  .gutter-box{
    display: -webkit-flex;
    height: 220px;
    margin: 10px;
    padding: 20px 15px;
    border-width: 1px;
    border-style: solid;
    border-color: rgb(232, 232, 232);
    border-image: initial;
  }
  .gutter-box:hover{
    box-shadow: 2px 2px 5px #E8E8E8;/*opera或ie9*/
    -moz-box-shadow: 2px 2px 5px #E8E8E8;/*firefox*/
    -webkit-box-shadow: 2px 2px 5px #E8E8E8;/*webkit*/
  }
  gutter-box{
    display: -webkit-flex;
    height: 220px;
    margin: 10px;
    padding: 20px 15px;
    border-width: 1px;
    border-style: solid;
    border-color: rgb(232, 232, 232);
    border-image: initial;
  }
  .imgWrap{
    position: relative;
    height: 180px;
    width: 150px;
    margin-right: 20px;
  }
  .imgWrap i{
    position: absolute;
    left: 0px;
    bottom: 0px;
    height: 30px;
    line-height: 30px;
    text-align: center;
    width: 150px;
    color: rgb(255, 255, 255);
    font-size: 14px;
    opacity: 0.7;
  }
  .info{
    -webkit-box-flex: 1;
    padding-top: 2px;
    flex: 1 1 0%;
  }
  .infop{
    font-size: 14px;
    line-height: 28px;
  }
  .info span:nth-of-type(1){
    color: rgb(153, 153, 153);
  }
  .info span:nth-of-type(2){
    color: rgb(102, 102, 102);
  }










</style>
